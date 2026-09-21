/************************************************************************
 * Fruit Task — Google Sheets data collector
 * ---------------------------------------------------------------------
 * A free endpoint that receives the data fruit-task.html POSTs and writes
 * one row per run into a Google Sheet you own. Works inside Tobii Pro Lab's
 * Lab browser (the page sends data with navigator.sendBeacon, which needs
 * no download and no PHP).
 *
 * Use a SEPARATE, NEW spreadsheet for this — not the memory-task one.
 *
 * SETUP (about 5 minutes):
 *   1. Go to https://sheets.google.com and create a NEW blank spreadsheet.
 *      Give it any name (e.g. "Fruit Task Data").
 *   2. In that sheet: Extensions -> Apps Script. It opens the script editor.
 *   3. Delete whatever code is there, paste THIS ENTIRE FILE, and Save.
 *   4. Click Deploy -> New deployment.
 *        - "Select type" (gear icon) -> Web app
 *        - Description: anything
 *        - Execute as:  Me
 *        - Who has access:  Anyone            <-- important
 *      Click Deploy, authorize when asked (it's your own script).
 *   5. Copy the "Web app URL". It ends in /exec and looks like:
 *        https://script.google.com/macros/s/AKfy....../exec
 *   6. Give that URL to the task in EITHER way:
 *        a) append it to the stimulus URL:
 *             ...fruit-task.html?post=https://script.google.com/macros/s/AKfy...../exec
 *           (remembered for the rest of the session), OR
 *        b) set POST_URL_CONST at the top of fruit-task.html to that URL.
 *   7. Test: open the /exec URL in a normal browser. You should see
 *      "Fruit Task collector is running." Then complete a run; a row
 *      appears in the sheet.
 *
 * IMPORTANT: if you ever edit this script, you must redeploy a NEW VERSION
 *   (Deploy -> Manage deployments -> Edit (pencil) -> Version: New version
 *   -> Deploy). A fresh paste is not live until you redeploy.
 *
 * RETRIEVING DATA: just open the Google Sheet. Download via
 *   File -> Download -> CSV. Each row is one run; the raw timestamped
 *   event list for that run is in the "events_json" column.
 ************************************************************************/

var SHEET_NAME = 'runs';
var EVENTS_SHEET_NAME = 'events';

/* GET = simple health check so you can confirm it's live in a browser. */
function doGet() {
  return ContentService
    .createTextOutput('Fruit Task collector is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}

/* POST = either a run summary (upsert into "runs") or a single discrete event
 * (append into "events", one row per event). The task marks per-event payloads
 * with kind:'event' — these are individual fruit clicks (event_type:
 * 'fruit_click') and Enter-key page advances (event_type:'page_advance'), each
 * its own timestamped row. Everything else is treated as a run summary. */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try { lock.waitLock(30000); } catch (err) {
    return json_({ ok: false, error: 'busy' });
  }
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    // Route single-event rows (clicks + Enter advances) to the "events" tab.
    if (data && data.kind === 'event') {
      return appendEvent_(data);
    }

    // Target tab: the task may specify its own tab via a "sheet" field (e.g.
    // "shape_memory"), so several tasks can log into one spreadsheet on
    // separate tabs. The tab is created automatically the first time it's used.
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var targetName = (data && data.sheet)
      ? String(data.sheet).replace(/[\[\]\*\/\\\?:]/g, '').slice(0, 90) || SHEET_NAME
      : SHEET_NAME;
    var sh = ss.getSheetByName(targetName) || ss.insertSheet(targetName);

    // Flatten: scalar fields become columns; the events array is stringified.
    var flat = {};
    Object.keys(data).forEach(function (k) {
      if (k === 'events') return;
      var v = data[k];
      if (v === null || v === undefined) { flat[k] = ''; }
      else if (typeof v === 'object') { flat[k] = JSON.stringify(v); }
      else { flat[k] = v; }
    });
    flat.events_json = data.events ? JSON.stringify(data.events) : '';
    flat.server_received_iso = new Date().toISOString();

    // Header row: create it, or grow it when a new field appears.
    var lastCol = sh.getLastColumn();
    var header = lastCol > 0
      ? sh.getRange(1, 1, 1, lastCol).getValues()[0]
      : [];
    if (header.length === 0) {
      // Seed with whichever identifier fields this task actually sends, so both
      // the fruit task (run_key) and the shape task (trial_key/part/...) read well.
      var idOrder = ['participant_id', 'part', 'trial_number', 'trial_key',
                     'trial_page', 'condition_code', 'run_key', 'selected_fruit'];
      header = idOrder.filter(function (k) { return flat.hasOwnProperty(k); });
      if (header.length === 0) { header = ['participant_id']; }
    }
    var headerChanged = false;
    Object.keys(flat).forEach(function (k) {
      if (header.indexOf(k) === -1) { header.push(k); headerChanged = true; }
    });
    if (headerChanged || lastCol === 0) {
      sh.getRange(1, 1, 1, header.length).setValues([header]);
    }

    // Build the row in header order.
    var row = header.map(function (col) {
      return flat.hasOwnProperty(col) ? flat[col] : '';
    });

    // Upsert: same participant_id + trial overwrites its earlier row. The key
    // column is run_key for the fruit task, or trial_key/trial_page for the
    // shape task — whichever the payload carries. Scan ONLY the two key columns
    // (not the whole sheet): the events_json column holds very large strings, so
    // reading every column on every request slows each POST as the sheet grows,
    // which under a burst of beacons causes lock timeouts and dropped rows.
    // Reading just the keys keeps every write fast no matter the dataset size.
    var keyPid = String(flat.participant_id || '');
    var keyName = flat.hasOwnProperty('run_key') ? 'run_key'
                : flat.hasOwnProperty('trial_key') ? 'trial_key'
                : flat.hasOwnProperty('trial_page') ? 'trial_page' : '';
    var keyVal = keyName ? String(flat[keyName] || '') : '';
    var targetRow = 0;
    if (keyVal) {
      var pidCol = header.indexOf('participant_id');
      var rkCol = header.indexOf(keyName);
      var n = sh.getLastRow();
      if (n >= 2 && rkCol > -1) {
        var rkVals = sh.getRange(2, rkCol + 1, n - 1, 1).getValues();
        var pidVals = pidCol > -1 ? sh.getRange(2, pidCol + 1, n - 1, 1).getValues() : null;
        for (var i = 0; i < rkVals.length; i++) {
          var samePid = !pidVals || String(pidVals[i][0]) === keyPid;
          if (samePid && String(rkVals[i][0]) === keyVal) {
            targetRow = i + 2;
            break;
          }
        }
      }
    }
    if (targetRow === 0) { targetRow = sh.getLastRow() + 1; }
    sh.getRange(targetRow, 1, 1, header.length).setValues([row]);

    return json_({ ok: true, row: targetRow });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/* Append ONE event as its own row in the "events" tab. Append-only: events
 * are never overwritten, so a participant's full sequence of clicks and
 * Enter-key advances is preserved, one row each, in arrival order. Header
 * grows if a new field appears. */
function appendEvent_(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(EVENTS_SHEET_NAME) || ss.insertSheet(EVENTS_SHEET_NAME);

  var flat = {};
  Object.keys(data).forEach(function (k) {
    var v = data[k];
    if (v === null || v === undefined) { flat[k] = ''; }
    else if (typeof v === 'object') { flat[k] = JSON.stringify(v); }
    else { flat[k] = v; }
  });
  flat.server_received_iso = new Date().toISOString();

  var lastCol = sh.getLastColumn();
  var header = lastCol > 0 ? sh.getRange(1, 1, 1, lastCol).getValues()[0] : [];
  if (header.length === 0) {
    // Seed with the most useful columns first for readability.
    header = ['participant_id', 'run_key', 'event_type', 'page',
              'fruit', 'click_number', 'event_iso', 'event_ms'];
  }
  var headerChanged = false;
  Object.keys(flat).forEach(function (k) {
    if (header.indexOf(k) === -1) { header.push(k); headerChanged = true; }
  });
  if (headerChanged || lastCol === 0) {
    sh.getRange(1, 1, 1, header.length).setValues([header]);
  }

  var row = header.map(function (col) {
    return flat.hasOwnProperty(col) ? flat[col] : '';
  });
  sh.getRange(sh.getLastRow() + 1, 1, 1, header.length).setValues([row]);
  return json_({ ok: true, events: true });
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
