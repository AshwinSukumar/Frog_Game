/* Shared frog-game engine. Generated from frog_game_EN_click.html. */













/* ---------------------------------------------------------------------
   FIRST PAINT
   Runs while the page is still being parsed, before anything appears and
   before Tobii Pro Lab can take its snapshot. It reads the address, works
   out which screen this is, and writes that screen straight into the page,
   already positioned.

   POSITIONS
   The stimulus boxes are given as pixel rectangles measured on a reference
   display, then scaled to whatever screen the task runs on.
   --------------------------------------------------------------------- */
(function(){
  var TR = [{"key":"practice-001","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":1,"isPractice":true}},{"key":"practice-002","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":2,"isPractice":true}},{"key":"practice-003","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":3,"isPractice":true}},{"key":"practice-004","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":4,"isPractice":true}},{"key":"practice-005","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":5,"isPractice":true}},{"key":"practice-006","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":6,"isPractice":true}},{"key":"practice-007","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":7,"isPractice":true}},{"key":"practice-008","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":8,"isPractice":true}},{"key":"practice-009","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":9,"isPractice":true}},{"key":"practice-010","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":10,"isPractice":true}},{"key":"practice-011","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":11,"isPractice":true}},{"key":"practice-012","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":12,"isPractice":true}},{"key":"practice-013","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":13,"isPractice":true}},{"key":"main-001","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":1,"isPractice":false}},{"key":"main-002","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":2,"isPractice":false}},{"key":"main-003","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":3,"isPractice":false}},{"key":"main-004","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":4,"isPractice":false}},{"key":"main-005","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":5,"isPractice":false}},{"key":"main-006","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":6,"isPractice":false}},{"key":"main-007","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":7,"isPractice":false}},{"key":"main-008","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":8,"isPractice":false}},{"key":"main-009","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":9,"isPractice":false}},{"key":"main-010","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":10,"isPractice":false}},{"key":"main-011","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":11,"isPractice":false}},{"key":"main-012","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":12,"isPractice":false}},{"key":"main-013","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":13,"isPractice":false}},{"key":"main-014","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":14,"isPractice":false}},{"key":"main-015","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":15,"isPractice":false}},{"key":"main-016","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":16,"isPractice":false}},{"key":"main-017","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":17,"isPractice":false}},{"key":"main-018","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":18,"isPractice":false}},{"key":"main-019","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":19,"isPractice":false}},{"key":"main-020","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":20,"isPractice":false}},{"key":"main-021","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":21,"isPractice":false}},{"key":"main-022","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":22,"isPractice":false}},{"key":"main-023","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":23,"isPractice":false}},{"key":"main-024","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":24,"isPractice":false}},{"key":"main-025","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":25,"isPractice":false}},{"key":"main-026","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":26,"isPractice":false}},{"key":"main-027","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":27,"isPractice":false}},{"key":"main-028","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":28,"isPractice":false}},{"key":"main-029","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":29,"isPractice":false}},{"key":"main-030","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":30,"isPractice":false}},{"key":"main-031","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":31,"isPractice":false}},{"key":"main-032","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":32,"isPractice":false}},{"key":"main-033","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":33,"isPractice":false}},{"key":"main-034","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":34,"isPractice":false}},{"key":"main-035","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":35,"isPractice":false}},{"key":"main-036","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":36,"isPractice":false}},{"key":"main-037","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":37,"isPractice":false}},{"key":"main-038","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":38,"isPractice":false}},{"key":"main-039","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":39,"isPractice":false}},{"key":"main-040","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":40,"isPractice":false}},{"key":"main-041","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":41,"isPractice":false}},{"key":"main-042","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":42,"isPractice":false}},{"key":"main-043","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":43,"isPractice":false}},{"key":"main-044","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":44,"isPractice":false}},{"key":"main-045","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":45,"isPractice":false}},{"key":"main-046","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":46,"isPractice":false}},{"key":"main-047","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":47,"isPractice":false}},{"key":"main-048","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":48,"isPractice":false}},{"key":"main-049","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":49,"isPractice":false}},{"key":"main-050","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":50,"isPractice":false}},{"key":"main-051","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":51,"isPractice":false}},{"key":"main-052","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":52,"isPractice":false}},{"key":"main-053","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":53,"isPractice":false}},{"key":"main-054","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":54,"isPractice":false}},{"key":"main-055","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":55,"isPractice":false}},{"key":"main-056","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":56,"isPractice":false}},{"key":"main-057","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":57,"isPractice":false}},{"key":"main-058","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":58,"isPractice":false}},{"key":"main-059","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":59,"isPractice":false}},{"key":"main-060","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":60,"isPractice":false}},{"key":"main-061","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":61,"isPractice":false}},{"key":"main-062","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":62,"isPractice":false}},{"key":"main-063","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":63,"isPractice":false}},{"key":"main-064","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":64,"isPractice":false}}];
  var DUCK = "<svg viewBox=\"0 0 150 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"frog\">\n  <g fill=\"none\" stroke=\"#2B2F35\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n    <!-- hind legs -->\n    <path d=\"M26 128c-11 5-16 18-12 32 4 13 14 20 22 16 6-3 8-12 6-23z\" fill=\"#6FA84F\"/>\n    <path d=\"M124 128c11 5 16 18 12 32-4 13-14 20-22 16-6-3-8-12-6-23z\" fill=\"#6FA84F\"/>\n    <!-- front feet -->\n    <path d=\"M52 168c-9 0-15 5-15 9h30c0-4-6-9-15-9z\" fill=\"#6FA84F\"/>\n    <path d=\"M98 168c9 0 15 5 15 9H83c0-4 6-9 15-9z\" fill=\"#6FA84F\"/>\n    <!-- body -->\n    <ellipse cx=\"75\" cy=\"130\" rx=\"54\" ry=\"42\" fill=\"#8CC152\"/>\n    <ellipse cx=\"75\" cy=\"142\" rx=\"34\" ry=\"24\" fill=\"#A8D46A\" stroke=\"none\"/>\n    <!-- head, merging into the body -->\n    <ellipse cx=\"75\" cy=\"92\" rx=\"46\" ry=\"30\" fill=\"#8CC152\"/>\n    <!-- wide mouth -->\n    <path d=\"M46 96c9 14 50 14 58 0\" stroke-width=\"3.6\"/>\n    <!-- eyes on top of the head -->\n    <g id=\"duck-eyes-open\">\n      <circle cx=\"52\" cy=\"66\" r=\"21\" fill=\"#FFFFFF\"/>\n      <circle cx=\"98\" cy=\"66\" r=\"21\" fill=\"#FFFFFF\"/>\n      <circle id=\"pupil-left\"  cx=\"52\" cy=\"66\" r=\"9\" fill=\"#2B2F35\" stroke=\"none\"/>\n      <circle id=\"pupil-right\" cx=\"98\" cy=\"66\" r=\"9\" fill=\"#2B2F35\" stroke=\"none\"/>\n    </g>\n    <g id=\"duck-eyes-closed\">\n      <circle cx=\"52\" cy=\"66\" r=\"21\" fill=\"#8CC152\"/>\n      <circle cx=\"98\" cy=\"66\" r=\"21\" fill=\"#8CC152\"/>\n      <path d=\"M37 66c7 10 23 10 30 0M83 66c7 10 23 10 30 0\"/>\n    </g>\n  </g>\n</svg>", FROG = "<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"tadpole\">\n  <g fill=\"none\" stroke=\"#2B2F35\" stroke-width=\"3.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n    <!-- four small legs, splayed -->\n    <path d=\"M40 58c-3 7-8 10-13 10M58 58c-2 7-1 11 3 13M34 44c-4-6-9-8-14-7M62 42c-2-6 0-10 4-12\" stroke-width=\"3\"/>\n    <!-- long tapering tail, flowing away to the left -->\n    <path d=\"M36 50C26 44 16 40 6 42c5 3 7 5 7 8s-2 5-7 8c10 2 20-2 30-8z\" fill=\"#E08A3C\"/>\n    <!-- long low body with the head at the right -->\n    <path d=\"M36 50c0-9 12-15 28-15s28 6 28 15-12 15-28 15-28-6-28-15z\" fill=\"#E8963C\"/>\n    <!-- back ridge and belly -->\n    <path d=\"M44 42c12-4 28-4 40 0\" stroke-width=\"2.4\" opacity=\".45\"/>\n    <ellipse cx=\"64\" cy=\"56\" rx=\"20\" ry=\"5\" fill=\"#F2B370\" stroke=\"none\"/>\n    <!-- eye -->\n    <circle cx=\"80\" cy=\"46\" r=\"5\" fill=\"#FFFFFF\"/>\n    <circle cx=\"81\" cy=\"46\" r=\"2.4\" fill=\"#2B2F35\" stroke=\"none\"/>\n  </g>\n</svg>", FISH = "<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"fish\">\n  <g fill=\"none\" stroke=\"#2B2F35\" stroke-width=\"3.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n    <!-- tail fin -->\n    <path d=\"M24 50L6 35v30z\" fill=\"#8E77C4\"/>\n    <!-- deep rounded body -->\n    <ellipse cx=\"56\" cy=\"50\" rx=\"32\" ry=\"24\" fill=\"#9B84D0\"/>\n    <!-- eye -->\n    <circle cx=\"74\" cy=\"44\" r=\"6\" fill=\"#FFFFFF\"/>\n    <circle cx=\"75\" cy=\"44\" r=\"2.8\" fill=\"#2B2F35\" stroke=\"none\"/>\n    <!-- gill line -->\n    <path d=\"M42 38c6 8 6 16 0 24\" stroke-width=\"2.6\" opacity=\".5\"/>\n  </g>\n</svg>";

  var REFERENCE_SCREEN = { w: 2560, h: 1440 };
  var STIM_RECT = {
    left:  { x: 68,  y: 484, w: 406, h: 578 },
    right: { x: 2114, y: 484, w: 406, h: 578 }
  };
  var DUCK_RECT = { w: 488, h: 650 };

  var vw = window.innerWidth  || REFERENCE_SCREEN.w;
  var vh = window.innerHeight || REFERENCE_SCREEN.h;
  var k  = Math.min(vw / REFERENCE_SCREEN.w, vh / REFERENCE_SCREEN.h);
  var dx = (vw - REFERENCE_SCREEN.w * k) / 2;
  var dy = (vh - REFERENCE_SCREEN.h * k) / 2;

  function box(r){
    return 'position:fixed;left:' + Math.round(dx + r.x * k) + 'px;' +
           'top:'    + Math.round(dy + r.y * k) + 'px;' +
           'width:'  + Math.round(r.w * k) + 'px;' +
           'height:' + Math.round(r.h * k) + 'px;';
  }
  function duckBox(){
    var lc = STIM_RECT.left.x + STIM_RECT.left.w / 2;
    var rc = STIM_RECT.right.x + STIM_RECT.right.w / 2;
    return box({ x: (lc + rc) / 2 - DUCK_RECT.w / 2,
                 y: STIM_RECT.left.y + STIM_RECT.left.h / 2 - DUCK_RECT.h / 2,
                 w: DUCK_RECT.w, h: DUCK_RECT.h });
  }

  /* Only the pupils move. The white of each eye has radius 20, so a shift
     of 10 is half the width of the eye - clearly visible without the pupil
     leaving the white. */
  var HOME = { left: 52, right: 98, y: 66 }, SHIFT = 10;
  var OFF = { straight:[0,0], left:[-SHIFT,0], right:[SHIFT,0] };

  function duck(gaze){
    if (gaze === 'closed') return DUCK;
    var d = OFF[gaze] || OFF.straight;
    return DUCK
      .replace('<g id="duck-eyes-closed">', '<g id="duck-eyes-closed" style="display:none">')
      .replace('id="pupil-left"  cx="52" cy="66"',
               'id="pupil-left" cx="' + (HOME.left + d[0]) + '" cy="' + (HOME.y + d[1]) + '"')
      .replace('id="pupil-right" cx="98" cy="66"',
               'id="pupil-right" cx="' + (HOME.right + d[0]) + '" cy="' + (HOME.y + d[1]) + '"');
  }

  window.firstPaint = function(){
    var P = window.PAGE || {};
    if (!P.trial || !P.phase) return;                 // non-scene pages draw nothing
    var key = P.trial, phase = P.phase, cfg = P.cfg || null;
    if (!cfg){ for (var i = 0; i < TR.length; i++) if (TR[i].key === key){ cfg = TR[i].cfg; break; } }
    if (!cfg) return;

    var gaze = (phase === 'cue' || phase === 'stim') ? cfg.cueDirection : 'closed';
    var art  = cfg.stimulusType === 'tadpole' ? FROG : FISH;
    var showLeft  = (phase === 'stim' && cfg.stimulusLocation === 'left');
    var showRight = (phase === 'stim' && cfg.stimulusLocation === 'right');

    document.write(
      '<div id="stage"><div id="scene" style="position:fixed;left:0;top:0;width:100%;height:100%;transform:none;">' +
        '<div id="stim-left" class="stim" style="' + box(STIM_RECT.left) +
          (showLeft ? '' : 'visibility:hidden;') + '">'  + (showLeft ? art : '')  + '</div>' +
        '<div id="stim-right" class="stim" style="' + box(STIM_RECT.right) +
          (showRight ? '' : 'visibility:hidden;') + '">' + (showRight ? art : '') + '</div>' +
        '<div id="duck" style="' + duckBox() + '">' + duck(gaze) + '</div>' +
      '</div><div id="feedback"></div></div>');
  };
})();




/* THE DUCK GAME — practice and all main trials, one continuous run
   Every phase of every trial is its own page at its own address:
       ?trial=practice-001&phase=fix      duck, eyes closed     500 ms
       ?trial=practice-001&phase=cue      the gaze cue         1000 ms
       ?trial=practice-001&phase=stim     frog or fish         1500 ms
       ?trial=practice-001&phase=reward   the hop on a hit      500 ms
   Open ?view=collect on any file to export the whole session. */

const LANG = 'en';
const NEXT_FILE = null;
const IS_FIRST_FILE = true;
const IS_LAST_FILE  = true;

const TRIALS = [{"key":"practice-001","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":1,"isPractice":true}},{"key":"practice-002","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":2,"isPractice":true}},{"key":"practice-003","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":3,"isPractice":true}},{"key":"practice-004","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":4,"isPractice":true}},{"key":"practice-005","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":5,"isPractice":true}},{"key":"practice-006","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":6,"isPractice":true}},{"key":"practice-007","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":7,"isPractice":true}},{"key":"practice-008","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":8,"isPractice":true}},{"key":"practice-009","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":9,"isPractice":true}},{"key":"practice-010","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":10,"isPractice":true}},{"key":"practice-011","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":11,"isPractice":true}},{"key":"practice-012","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":12,"isPractice":true}},{"key":"practice-013","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":13,"isPractice":true}},{"key":"main-001","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":1,"isPractice":false}},{"key":"main-002","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":2,"isPractice":false}},{"key":"main-003","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":3,"isPractice":false}},{"key":"main-004","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":4,"isPractice":false}},{"key":"main-005","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":5,"isPractice":false}},{"key":"main-006","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":6,"isPractice":false}},{"key":"main-007","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":7,"isPractice":false}},{"key":"main-008","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":8,"isPractice":false}},{"key":"main-009","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":9,"isPractice":false}},{"key":"main-010","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":10,"isPractice":false}},{"key":"main-011","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":11,"isPractice":false}},{"key":"main-012","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":12,"isPractice":false}},{"key":"main-013","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":13,"isPractice":false}},{"key":"main-014","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":14,"isPractice":false}},{"key":"main-015","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":15,"isPractice":false}},{"key":"main-016","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":16,"isPractice":false}},{"key":"main-017","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":17,"isPractice":false}},{"key":"main-018","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":18,"isPractice":false}},{"key":"main-019","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":19,"isPractice":false}},{"key":"main-020","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":20,"isPractice":false}},{"key":"main-021","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":21,"isPractice":false}},{"key":"main-022","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":22,"isPractice":false}},{"key":"main-023","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":23,"isPractice":false}},{"key":"main-024","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":24,"isPractice":false}},{"key":"main-025","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":25,"isPractice":false}},{"key":"main-026","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":26,"isPractice":false}},{"key":"main-027","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":27,"isPractice":false}},{"key":"main-028","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":28,"isPractice":false}},{"key":"main-029","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":29,"isPractice":false}},{"key":"main-030","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":30,"isPractice":false}},{"key":"main-031","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":31,"isPractice":false}},{"key":"main-032","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":32,"isPractice":false}},{"key":"main-033","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":33,"isPractice":false}},{"key":"main-034","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":34,"isPractice":false}},{"key":"main-035","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":35,"isPractice":false}},{"key":"main-036","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":36,"isPractice":false}},{"key":"main-037","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":37,"isPractice":false}},{"key":"main-038","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":38,"isPractice":false}},{"key":"main-039","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":39,"isPractice":false}},{"key":"main-040","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":40,"isPractice":false}},{"key":"main-041","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":41,"isPractice":false}},{"key":"main-042","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":42,"isPractice":false}},{"key":"main-043","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":43,"isPractice":false}},{"key":"main-044","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":44,"isPractice":false}},{"key":"main-045","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":45,"isPractice":false}},{"key":"main-046","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":46,"isPractice":false}},{"key":"main-047","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":47,"isPractice":false}},{"key":"main-048","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":48,"isPractice":false}},{"key":"main-049","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":49,"isPractice":false}},{"key":"main-050","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":50,"isPractice":false}},{"key":"main-051","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":51,"isPractice":false}},{"key":"main-052","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":52,"isPractice":false}},{"key":"main-053","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":53,"isPractice":false}},{"key":"main-054","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"fish","trialNumber":54,"isPractice":false}},{"key":"main-055","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":55,"isPractice":false}},{"key":"main-056","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":56,"isPractice":false}},{"key":"main-057","cfg":{"cueType":"informative","cueDirection":"left","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":57,"isPractice":false}},{"key":"main-058","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":58,"isPractice":false}},{"key":"main-059","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"tadpole","trialNumber":59,"isPractice":false}},{"key":"main-060","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":60,"isPractice":false}},{"key":"main-061","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"fish","trialNumber":61,"isPractice":false}},{"key":"main-062","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"left","stimulusType":"fish","trialNumber":62,"isPractice":false}},{"key":"main-063","cfg":{"cueType":"informative","cueDirection":"right","stimulusLocation":"right","stimulusType":"tadpole","trialNumber":63,"isPractice":false}},{"key":"main-064","cfg":{"cueType":"noninformative","cueDirection":"straight","stimulusLocation":"right","stimulusType":"fish","trialNumber":64,"isPractice":false}}];
/* =========================================================================
   THE DUCK GAME — per-phase URLs
   Child-friendly gaze-cueing task, built for Tobii Pro Lab.

   HOW IT IS STRUCTURED
   Every phase of every trial is its own page visit at its own address, so
   Pro Lab captures one screenshot per screen instead of one screenshot of a
   screen that keeps changing:

       ?trial=main-047&phase=fix      duck, eyes closed        500 ms
       ?trial=main-047&phase=cue      duck opens its eyes     1000 ms
       ?trial=main-047&phase=stim     frog or fish appears    1500 ms
       ?trial=main-047&phase=reward   the duck hops on a hit   500 ms

   Each page shows one unchanging screen for its whole life, then navigates.
   ========================================================================= */

/* ---- Screen geometry ---- */
let VIEWING_DISTANCE_CM   = 55;
let MONITOR_WIDTH_CM      = 52.7;
let MONITOR_RESOLUTION_X  = 1920;
let USE_VISUAL_ANGLE      = true;

/* Enlarged from the published values for a clearer display. The source
   paradigm used a 3 x 4 deg character at 6 deg eccentricity; report these
   as an adaptation, not as the original geometry. */
const DUCK_W_DEG          = 7;
const DUCK_H_DEG          = 9.3;
const STIM_SIZE_DEG       = 5.5;
const ECCENTRICITY_DEG    = 10.5;
/* Left and right only, as in the published paradigm. */
const LOCATIONS           = ['left', 'right'];

const FALLBACK_DUCK_W_PX  = 280;
const FALLBACK_DUCK_H_PX  = 373;
const FALLBACK_STIM_PX    = 195;
const FALLBACK_ECC_PX     = 390;

const GRID_AREA_PX        = 866;
const SCENE_H_MARGIN      = 0.96;
const SCENE_V_MARGIN      = 0.90;

/* ---- Phase timings (ms) ---- */
const FIXATION_MS         = 500;    // duck present, eyes closed
const CUE_MS              = 1000;   // eyes open, before the stimulus
const STIMULUS_MS         = 1500;   // frog or fish on screen
const REWARD_MS           = 500;    // the hop, on a correct detection

/* Does a spacebar press end the stimulus early?
   false keeps every stimulus page exactly STIMULUS_MS long, which makes the
   Pro Lab timeline uniform and matches the published fixed presentation.
   true makes the task feel more responsive but shortens hit trials only. */
const RESPONSE_ENDS_STIMULUS = false;

const REWARD_JUMP_ON_HIT  = true;
const PRACTICE_FEEDBACK   = true;   // written feedback, practice only

/* ---- Response ----
   CLICK BUILD: the response is a mouse click / tap anywhere on the page,
   captured on window in the stimulus phase. The old key constant is unused. */
const RESPONSE_KEY        = ' ';

/* ---- Storage ---- */
const STORE_PREFIX      = 'duck_trial_';
const PID_KEY           = 'duck_participant_id';
const LOG_KEY           = 'duck_interaction_log';
const SCORE_KEY         = 'duck_score';
const SESSION_START_KEY = 'duck_session_start';
/* Deliberately NOT prefixed with duck_trial_ : that prefix marks the stored
   trial records, and a timing key sharing it was being exported as an extra,
   empty trial. */
const TRIAL_START_KEY   = 'duck_timing_trial_start';

/* ---- Scoring ----
   Every correct response scores 1 point (a hit or a correct rejection).
   Misses and false alarms score nothing. */
const SCORE_HIT                = 1;
const SCORE_CORRECT_REJECTION  = 1;
const SCORE_MISS               = 0;
const SCORE_FALSE_ALARM        = 0;

/* Send every trial to your own Google Sheet (via an Apps Script Web App) as it
   finishes. Downloading is disabled inside the Pro Lab browser, so this is the
   safest route. The collector routes each row into the DATA_SHEET_NAME tab.

   PLACEHOLDER: paste your Apps Script /exec URL between the quotes below to
   turn on logging. While it is empty, logging is a silent no-op and the task
   still runs and stores data locally exactly as before. */
const DATA_POST_URL       = 'https://script.google.com/macros/s/AKfycbyEHhPdyOle-ef3MLOql74Renc6AF7EgWh201fHUWrVJ1rLJwvG1yZ4c__oPNscUufT/exec';
const DATA_SHEET_NAME     = 'frog_trial';   // the collector writes this task into its own tab

/* AOI names, never drawn on screen */
const AOI_NAMES = ['AOI_DUCK','AOI_DUCK_FACE','AOI_DUCK_LEFT_EYE','AOI_DUCK_RIGHT_EYE',
  'AOI_LEFT_STIMULUS','AOI_RIGHT_STIMULUS','AOI_UP_STIMULUS','AOI_DOWN_STIMULUS','AOI_BACKGROUND'];

const INK = '#2B2F35';

/**
 * The duck. Body, head and beak are fixed for the whole experiment.
 * ONLY the pupils move, and the eyelids toggle. The body and head never
 * rotate, translate or change in any way between cue states.
 */
function duckSVG(){
  return `<svg viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="frog">
  <g fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <!-- hind legs -->
    <path d="M26 128c-11 5-16 18-12 32 4 13 14 20 22 16 6-3 8-12 6-23z" fill="#6FA84F"/>
    <path d="M124 128c11 5 16 18 12 32-4 13-14 20-22 16-6-3-8-12-6-23z" fill="#6FA84F"/>
    <!-- front feet -->
    <path d="M52 168c-9 0-15 5-15 9h30c0-4-6-9-15-9z" fill="#6FA84F"/>
    <path d="M98 168c9 0 15 5 15 9H83c0-4 6-9 15-9z" fill="#6FA84F"/>
    <!-- body -->
    <ellipse cx="75" cy="130" rx="54" ry="42" fill="#8CC152"/>
    <ellipse cx="75" cy="142" rx="34" ry="24" fill="#A8D46A" stroke="none"/>
    <!-- head, merging into the body -->
    <ellipse cx="75" cy="92" rx="46" ry="30" fill="#8CC152"/>
    <!-- wide mouth -->
    <path d="M46 96c9 14 50 14 58 0" stroke-width="3.6"/>
    <!-- eyes on top of the head -->
    <g id="duck-eyes-open">
      <circle cx="52" cy="66" r="21" fill="#FFFFFF"/>
      <circle cx="98" cy="66" r="21" fill="#FFFFFF"/>
      <circle id="pupil-left"  cx="52" cy="66" r="9" fill="${INK}" stroke="none"/>
      <circle id="pupil-right" cx="98" cy="66" r="9" fill="${INK}" stroke="none"/>
    </g>
    <g id="duck-eyes-closed">
      <circle cx="52" cy="66" r="21" fill="#8CC152"/>
      <circle cx="98" cy="66" r="21" fill="#8CC152"/>
      <path d="M37 66c7 10 23 10 30 0M83 66c7 10 23 10 30 0"/>
    </g>
  </g>
</svg>`;
}



/** Faint neutral placeholder marking a peripheral location.
    Only drawn when SHOW_LOCATION_PLACEHOLDERS is true. */
function placeholderSVG(){
  return `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="50" cy="50" r="44" fill="none" stroke="#C9CAC6" stroke-width="2.5" stroke-dasharray="7 7"/>
</svg>`;
}

/* Target and distractor are matched for footprint, outline weight,
   internal detail count and mid-tone fill. */
function frogSVG(){
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="tadpole">
  <g fill="none" stroke="${INK}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
    <!-- four small legs, splayed -->
    <path d="M40 58c-3 7-8 10-13 10M58 58c-2 7-1 11 3 13M34 44c-4-6-9-8-14-7M62 42c-2-6 0-10 4-12" stroke-width="3"/>
    <!-- long tapering tail, flowing away to the left -->
    <path d="M36 50C26 44 16 40 6 42c5 3 7 5 7 8s-2 5-7 8c10 2 20-2 30-8z" fill="#E08A3C"/>
    <!-- long low body with the head at the right -->
    <path d="M36 50c0-9 12-15 28-15s28 6 28 15-12 15-28 15-28-6-28-15z" fill="#E8963C"/>
    <!-- back ridge and belly -->
    <path d="M44 42c12-4 28-4 40 0" stroke-width="2.4" opacity=".45"/>
    <ellipse cx="64" cy="56" rx="20" ry="5" fill="#F2B370" stroke="none"/>
    <!-- eye -->
    <circle cx="80" cy="46" r="5" fill="#FFFFFF"/>
    <circle cx="81" cy="46" r="2.4" fill="${INK}" stroke="none"/>
  </g>
</svg>`;
}


/** Tadpole: the target in the published paradigm. Round head, long thin
    tapering tail - deliberately not fish-shaped. */
function tadpoleSVG(){
  return `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="tadpole">
  <g fill="none" stroke="${INK}" stroke-linecap="round" stroke-linejoin="round"
     transform="translate(50 50) scale(1.06) translate(-50 -50)" stroke-width="3.21">
    <path d="M55 36C70 37 82 32 95 19 94 39 84 60 59 64Z" fill="#D2703A"/>
    <ellipse cx="36" cy="52" rx="25" ry="22" fill="#D2703A"/>
    <path d="M52 66c6 5 8 10 6 14" stroke-width="2.8" opacity=".55"/>
    <circle cx="26" cy="45" r="6.6" fill="#FFFFFF"/>
    <circle cx="25" cy="45" r="3.1" fill="${INK}" stroke="none"/>
    <path d="M24 61c6 4 13 4 19 0" stroke-width="2.8" opacity=".55"/>
  </g>
</svg>`;
}

function fishSVG(){
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="fish">
  <g fill="none" stroke="${INK}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
    <!-- tail fin -->
    <path d="M24 50L6 35v30z" fill="#8E77C4"/>
    <!-- deep rounded body -->
    <ellipse cx="56" cy="50" rx="32" ry="24" fill="#9B84D0"/>
    <!-- eye -->
    <circle cx="74" cy="44" r="6" fill="#FFFFFF"/>
    <circle cx="75" cy="44" r="2.8" fill="${INK}" stroke="none"/>
    <!-- gill line -->
    <path d="M42 38c6 8 6 16 0 24" stroke-width="2.6" opacity=".5"/>
  </g>
</svg>`;
}



/* Artwork lookup, keyed by the stimulus_type recorded in the data. */
const STIMULUS_ART = {
  frog:    frogSVG,
  tadpole: tadpoleSVG,
  fish:    fishSVG
};



const PUPIL_HOME  = { left: 52, right: 98, y: 66 };
const PUPIL_SHIFT = 10;

/* Pupil displacement for each gaze state, in SVG units.
   All directions are SCREEN directions: 'left' means the pupils move
   toward the left-hand location, which is what makes the cue readable
   to the child. The body and head never move. */
const GAZE_OFFSET = {
  straight: [0, 0],
  left:     [-PUPIL_SHIFT, 0],
  right:    [ PUPIL_SHIFT, 0],
  up:       [0, -PUPIL_SHIFT],
  down:     [0,  PUPIL_SHIFT]
};

/**
 * Set the duck's eye state.
 * 'closed' | 'straight' | 'left' | 'right' | 'up' | 'down'
 */
function setDuckGaze(state){
  /* The duck is drawn with the correct eyes already, during page parsing.
     This only exists so the runtime can adjust them if it ever needs to;
     it must never throw, or the trial would stop advancing. */
  const holder = document.getElementById('duck');
  if (!holder) return;
  const svg = holder.querySelector('svg');
  if (!svg) return;
  const open   = svg.querySelector('#duck-eyes-open');
  const closed = svg.querySelector('#duck-eyes-closed');
  const pl = svg.querySelector('#pupil-left');
  const pr = svg.querySelector('#pupil-right');
  if (!closed || !pl || !pr) return;

  if (state === 'closed'){
    closed.style.display = '';
    return;
  }
  closed.style.display = 'none';
  open.style.display = '';

  const [dx, dy] = GAZE_OFFSET[state] || GAZE_OFFSET.straight;
  pl.setAttribute('cx', PUPIL_HOME.left  + dx);
  pr.setAttribute('cx', PUPIL_HOME.right + dx);
  pl.setAttribute('cy', PUPIL_HOME.y + dy);
  pr.setAttribute('cy', PUPIL_HOME.y + dy);
}





/* =========================================================================
   GEOMETRY
   ========================================================================= */

const pxPerCm = () => MONITOR_RESOLUTION_X / MONITOR_WIDTH_CM;
const degToPx = d => 2 * VIEWING_DISTANCE_CM * Math.tan((d * Math.PI / 180) / 2) * pxPerCm();
const eccToPx = d => VIEWING_DISTANCE_CM * Math.tan(d * Math.PI / 180) * pxPerCm();
const pxToDeg = px => 2 * Math.atan((px / pxPerCm()) / (2 * VIEWING_DISTANCE_CM)) * 180 / Math.PI;

const round2 = x => (x === null || x === undefined || Number.isNaN(x)) ? '' : Math.round(x * 100) / 100;
const pad3   = n => String(n).padStart(3, '0');
const isoNow = () => new Date().toISOString();
const sleep  = ms => new Promise(r => setTimeout(r, ms));

function rawGeometry(){
  if (USE_VISUAL_ANGLE){
    return { mode: 'visual_angle', duckW: degToPx(DUCK_W_DEG), duckH: degToPx(DUCK_H_DEG),
             stim: degToPx(STIM_SIZE_DEG), ecc: eccToPx(ECCENTRICITY_DEG) };
  }
  return { mode: 'fallback_pixels', duckW: FALLBACK_DUCK_W_PX, duckH: FALLBACK_DUCK_H_PX,
           stim: FALLBACK_STIM_PX, ecc: FALLBACK_ECC_PX };
}

let geometry = null, sceneScale = 1;

function sceneBox(){
  const aw = window.innerWidth, ah = window.innerHeight;
  let w = aw, h = aw * 9 / 16;
  if (h > ah){ h = ah; w = ah * 16 / 9; }
  return { w, h, aw, ah };
}

/** Lay the scene out. Sizes stay at their true visual-angle values unless
    the window is too small, in which case the applied scale is recorded. */
function layoutScene(){
  const raw = rawGeometry(), box = sceneBox();
  // Width must hold both stimuli either side of the duck; height only
  // has to hold the taller of the duck and a stimulus.
  const requiredW = 2 * (raw.ecc + raw.stim / 2);
  const requiredH = Math.max(raw.duckH, raw.stim);
  sceneScale = Math.min(1, (box.w * SCENE_H_MARGIN) / requiredW,
                           (box.h * SCENE_V_MARGIN) / requiredH);

  geometry = { mode: raw.mode,
    duckW: raw.duckW * sceneScale, duckH: raw.duckH * sceneScale,
    stim: raw.stim * sceneScale,   ecc: raw.ecc * sceneScale };

  const scene = document.getElementById('scene');
  scene.style.width = box.w + 'px';
  scene.style.height = box.h + 'px';

  if (USE_FIXED_RECTS){
    // Pinned to exact pixels. The scene fills the window so the coordinates
    // are measured from the top-left of the display.
    scene.style.position = 'fixed';
    scene.style.left = '0'; scene.style.top = '0';
    scene.style.width = '100%'; scene.style.height = '100%';
    scene.style.transform = 'none';
    sceneScale = 1;

    var f = screenFit();
    var duckEl = document.getElementById('duck');
    if (duckEl) duckEl.setAttribute('style', rectStyle(scaleRect(duckRect(), f)));
    LOCATIONS.forEach(function(loc){
      var el = document.getElementById('stim-' + loc);
      if (el && STIM_RECT[loc]) el.setAttribute('style',
        rectStyle(scaleRect(STIM_RECT[loc], f)) +
        (el.innerHTML.trim() ? '' : 'visibility:hidden;'));
    });
    return { sceneW: window.innerWidth, sceneH: window.innerHeight, scale: 1 };
  }

  const cx = box.w / 2, cy = box.h / 2, g = geometry;
  const place = (node, w, h, x, y) => {
    node.style.width = w + 'px'; node.style.height = h + 'px';
    node.style.left = (x - w / 2) + 'px'; node.style.top = (y - h / 2) + 'px';
  };
  place(document.getElementById('duck'), g.duckW, g.duckH, cx, cy);

  const centres = {
    left:  [cx - g.ecc, cy], right: [cx + g.ecc, cy],
    up:    [cx, cy - g.ecc], down:  [cx, cy + g.ecc]
  };
  LOCATIONS.forEach(loc => {
    const [x, y] = centres[loc];
    place(document.getElementById('stim-' + loc), g.stim, g.stim, x, y);
  });
  return { sceneW: box.w, sceneH: box.h, scale: sceneScale };
}

/** Screen rectangle of a node, in viewport and desktop coordinates. */
function rectOf(node, name){
  const r = node.getBoundingClientRect();
  const ox = (window.screenX || 0) + (window.outerWidth - window.innerWidth) / 2;
  const oy = (window.screenY || 0) + (window.outerHeight - window.innerHeight);
  return { name,
    x: round2(r.left), y: round2(r.top), width: round2(r.width), height: round2(r.height),
    center_x: round2(r.left + r.width / 2), center_y: round2(r.top + r.height / 2),
    screen_center_x: round2(r.left + r.width / 2 + ox),
    screen_center_y: round2(r.top + r.height / 2 + oy),
    pct_x: round2(100 * r.left / window.innerWidth),
    pct_y: round2(100 * r.top / window.innerHeight) };
}

/** All AOIs for the current scene. */
function captureAOIs(){
  const out = [rectOf(document.getElementById('duck'), 'AOI_DUCK')];
  const svg = document.getElementById('duck').querySelector('svg');
  if (svg){
    const face = svg.querySelector('circle[cx="75"][cy="70"]');
    const le = svg.querySelector('#pupil-left'), re = svg.querySelector('#pupil-right');
    if (face) out.push(rectOf(face, 'AOI_DUCK_FACE'));
    if (le) out.push(rectOf(le, 'AOI_DUCK_LEFT_EYE'));
    if (re) out.push(rectOf(re, 'AOI_DUCK_RIGHT_EYE'));
  }
  LOCATIONS.forEach(loc =>
    out.push(rectOf(document.getElementById('stim-' + loc), 'AOI_' + loc.toUpperCase() + '_STIMULUS')));
  return out;
}



/* =========================================================================
   INTERACTION LOG, SCORE AND CONTEXT
   Same structure as the Location Memory task, so the two datasets can be
   handled with the same analysis code.
   ========================================================================= */

const getParticipantId = () => { try { return localStorage.getItem(PID_KEY) || ''; } catch(e){ return ''; } };

const sessionStartMs = () => { try { const v = localStorage.getItem(SESSION_START_KEY); return v ? Number(v) : null; } catch(e){ return null; } };
const setSessionStart = () => { try { localStorage.setItem(SESSION_START_KEY, String(Date.now())); } catch(e){} };
const trialStartMs = () => { try { const v = localStorage.getItem(TRIAL_START_KEY); return v ? Number(v) : null; } catch(e){ return null; } };
const setTrialStart = () => { try { localStorage.setItem(TRIAL_START_KEY, String(Date.now())); } catch(e){} };

function displayContext(){
  return {
    viewport_w: window.innerWidth, viewport_h: window.innerHeight,
    screen_w: window.screen ? window.screen.width : '',
    screen_h: window.screen ? window.screen.height : '',
    device_pixel_ratio: window.devicePixelRatio || 1,
    scene_scale: round2(sceneScale),
    viewing_distance_cm: VIEWING_DISTANCE_CM,
    monitor_width_cm: MONITOR_WIDTH_CM,
    duck_deg: round2(pxToDeg(geometry ? geometry.duckW : 0)),
    eccentricity_deg: geometry
      ? round2(Math.atan((geometry.ecc / pxPerCm()) / VIEWING_DISTANCE_CM) * 180 / Math.PI) : ''
  };
}

/** The computer's own clock, readable: 2026-08-26 22:14:03.482 */
function localStamp(){
  const d = new Date(), p = (n, w) => String(n).padStart(w || 2, '0');
  return d.getFullYear() + '-' + p(d.getMonth()+1) + '-' + p(d.getDate()) + ' ' +
         p(d.getHours()) + ':' + p(d.getMinutes()) + ':' + p(d.getSeconds()) + '.' +
         p(d.getMilliseconds(), 3);
}

function readLog(){
  try { const r = localStorage.getItem(LOG_KEY); return r ? JSON.parse(r) : []; } catch(e){ return []; }
}

function logInteraction(action, detail){
  const now = Date.now(), ss = sessionStartMs(), ts = trialStartMs();
  const entry = Object.assign({
    seq: 0,
    participant_id: getParticipantId(),
    action,
    // ---- computer timestamps ----
    iso_time: isoNow(),                       // UTC, sortable
    local_time: localStamp(),                 // this computer's clock
    timezone: (Intl.DateTimeFormat().resolvedOptions().timeZone || ''),
    tz_offset_min: -new Date().getTimezoneOffset(),
    unix_ms: now,                             // milliseconds since 1970
    page_ms: round2(performance.now()),       // since this page loaded
    ms_since_session_start: ss ? now - ss : '',
    ms_since_trial_start:   ts ? now - ts : '',
    url: location.href,
    page_file: location.pathname.split('/').pop(),
    query: location.search || location.hash
  }, detail || {});

  try {
    const log = readLog();
    entry.seq = log.length + 1;
    log.push(entry);
    localStorage.setItem(LOG_KEY, JSON.stringify(log));
  } catch(e){ console.warn('[LOG] not stored', e); }

  console.log('[INTERACTION]', entry.seq, action, detail || '');
  return entry;
}

function clearLog(){
  try { localStorage.removeItem(LOG_KEY); localStorage.removeItem(SCORE_KEY); } catch(e){}
}

function readScore(){
  try { const r = localStorage.getItem(SCORE_KEY);
        return r ? JSON.parse(r) : { total:0, experimental:0, practice:0, trials_scored:0 }; }
  catch(e){ return { total:0, experimental:0, practice:0, trials_scored:0 }; }
}

function addScore(points, isPractice){
  const s = readScore();
  s.total += points; s.trials_scored += 1;
  if (isPractice) s.practice += points; else s.experimental += points;
  try { localStorage.setItem(SCORE_KEY, JSON.stringify(s)); } catch(e){}
  return s;
}

/** HIT / MISS / CORRECT_REJECTION / FALSE_ALARM */
function outcomeFor(isTarget, responded){
  if (isTarget)  return responded ? 'HIT' : 'MISS';
  return           responded ? 'FALSE_ALARM' : 'CORRECT_REJECTION';
}

function scoreForOutcome(outcome){
  if (outcome === 'HIT') return SCORE_HIT;
  if (outcome === 'CORRECT_REJECTION') return SCORE_CORRECT_REJECTION;
  if (outcome === 'MISS') return SCORE_MISS;
  return SCORE_FALSE_ALARM;
}

/* ---- per-trial record ---- */
const recKey = k => STORE_PREFIX + k;
function readRecord(k){ try { const r = localStorage.getItem(recKey(k)); return r ? JSON.parse(r) : null; } catch(e){ return null; } }
function writeRecord(k, patch){
  const cur = readRecord(k) || {};
  const next = Object.assign(cur, patch);
  try { localStorage.setItem(recKey(k), JSON.stringify(next)); } catch(e){}
  /* Mirror each finished row to the Google Sheet the same way the duck game
     does: wrap it with the target tab name and post as text/plain so the
     request is "simple" (no CORS preflight) and survives the page navigating
     away. Silent no-op until DATA_POST_URL holds an http(s) address. */
  if (DATA_POST_URL && DATA_POST_URL.indexOf('http') === 0){
    try {
      const body = JSON.stringify(Object.assign({
        sheet: DATA_SHEET_NAME,
        task: 'frog-game'
      }, next));
      if (navigator.sendBeacon){
        navigator.sendBeacon(DATA_POST_URL, new Blob([body], { type:'text/plain;charset=UTF-8' }));
      } else {
        fetch(DATA_POST_URL, { method:'POST', keepalive:true, mode:'no-cors',
          headers:{'Content-Type':'text/plain;charset=UTF-8'}, body }).catch(()=>{});
      }
    } catch(e){}
  }
  return next;
}

function loadLatencyMs(){
  try { const n = performance.getEntriesByType('navigation')[0];
        if (n) return round2(n.responseEnd - n.startTime); } catch(e){}
  return '';
}



/* =========================================================================
   PHASE ENGINE
   One phase, one page, one address, one screenshot.
   ========================================================================= */

const PHASE_MS = { fix: FIXATION_MS, cue: CUE_MS, stim: STIMULUS_MS, reward: REWARD_MS };

/* Every phase of every trial is its own PAGE VISIT, addressed by the query
   string on one single unchanging path:
       ?trial=main-047&phase=fix      duck, eyes closed
       ?trial=main-047&phase=cue      the gaze cue
       ?trial=main-047&phase=stim     the frog or the fish
       ?trial=main-047&phase=reward   the hop on a hit
   The path NEVER changes, so the whole task runs from ONE uploaded file on an
   ordinary web server - no per-phase .html files and no .htaccess rewrite,
   which is what makes it host cleanly. The trial outcome is carried both in
   the query string and in browser storage. */
/* Opened straight from disk there is no server, so the task uses a # fragment
   instead and reloads, which re-runs the drawing script for the new screen. */
var LOCAL_FILE = (location.protocol === 'file:');

function phaseUrl(trialKey, phase, extra){
  // One physical file per phase, named after the timeline labels
  // (Focus / Cue / Stimulus / Reward). Any extras (e.g. reward outcome) are
  // carried in the stored trial record, not the URL.
  var LABEL = { fix: 'focus', cue: 'cue', stim: 'stimulus', reward: 'reward' };
  return trialKey + '-' + (LABEL[phase] || phase) + '.html';
}


/* =====================================================================
   FIXED SCREEN POSITIONS
   The two stimulus boxes are pinned to exact pixel rectangles, given as
   x, y, width, height measured from the top-left of the display. The duck
   sits centred between them.

   Set USE_FIXED_RECTS to false to go back to sizing everything from
   viewing distance and visual angle.
   ===================================================================== */
var USE_FIXED_RECTS = true;

/* The screen the coordinates below were measured on. Everything is scaled
   from this to whatever display the task actually runs on, keeping the same
   proportions, so the layout looks right on a laptop as well as on the lab
   monitor. On a screen of exactly this size the coordinates are used as
   given, pixel for pixel. */
var REFERENCE_SCREEN = { w: 2560, h: 1440 };

var STIM_RECT = {
  left:  { x: 68,  y: 484, w: 406, h: 578 },
  right: { x: 2114, y: 484, w: 406, h: 578 }
};
/* Duck size in reference pixels. Its centre is the midpoint of the two boxes. */
var DUCK_RECT = { w: 406, h: 541 };

/** How the reference screen maps onto this one. */
function screenFit(){
  var vw = window.innerWidth, vh = window.innerHeight;
  var k = Math.min(vw / REFERENCE_SCREEN.w, vh / REFERENCE_SCREEN.h);
  return { k: k,
           dx: (vw - REFERENCE_SCREEN.w * k) / 2,
           dy: (vh - REFERENCE_SCREEN.h * k) / 2 };
}

/** A reference rectangle converted to this screen. */
function scaleRect(r, f){
  return { x: Math.round(f.dx + r.x * f.k), y: Math.round(f.dy + r.y * f.k),
           w: Math.round(r.w * f.k),        h: Math.round(r.h * f.k) };
}

/** Inline style pinning an element to one of the fixed rectangles. */
function rectStyle(r){
  return 'position:fixed;left:' + r.x + 'px;top:' + r.y + 'px;' +
         'width:' + r.w + 'px;height:' + r.h + 'px;';
}

/** The duck's rectangle: centred between the two stimulus boxes. */
function duckRect(){
  var lc = STIM_RECT.left.x  + STIM_RECT.left.w  / 2;
  var rc = STIM_RECT.right.x + STIM_RECT.right.w / 2;
  var cx = (lc + rc) / 2;
  var cy = STIM_RECT.left.y + STIM_RECT.left.h / 2;
  return { x: Math.round(cx - DUCK_RECT.w / 2), y: Math.round(cy - DUCK_RECT.h / 2),
           w: DUCK_RECT.w, h: DUCK_RECT.h };
}

function mountScene(){
  document.body.innerHTML =
    '<div id="stage">' +
      '<div id="scene">' +
        LOCATIONS.map(l => '<div id="stim-' + l + '" class="stim"></div>').join('') +
        '<div id="duck"></div>' +
      '</div>' +
      '<div id="feedback"></div>' +
    '</div>';
  document.getElementById('duck').innerHTML = duckSVG();
  layoutScene();
}

const trialTag = cfg => (cfg.isPractice ? 'PRACTICE' : 'TRIAL') + '_' + pad3(cfg.trialNumber);

/**
 * A sentence describing the trial, so the log can be read without a codebook.
 * e.g. "trial 47 of 128 — duck looks left (informative), frog (TARGET, press)
 *       appears left, cue valid"
 */
function trialDescription(cfg, position, total){
  const who = cfg.isPractice ? 'practice trial' : 'trial';
  const cue = cfg.cueType === 'informative'
    ? 'duck looks ' + cfg.cueDirection + ' (informative)'
    : 'duck looks straight ahead (noninformative)';
  const what = cfg.stimulusType === 'tadpole'
    ? 'tadpole (TARGET, should press)'
    : 'fish (DISTRACTOR, should not press)';
  const valid = cfg.cueType === 'informative'
    ? (cfg.cueDirection === cfg.stimulusLocation ? ', cue points at it' : ', cue points elsewhere')
    : '';
  return who + ' ' + position + ' of ' + total + ' — ' + cue + '; ' +
         what + ' appears ' + cfg.stimulusLocation + valid;
}

/** Everything about this trial that never changes, for the log. */
function trialFacts(cfg){
  const position = cfg.trialNumber;
  const total = TRIALS.filter(t => t.cfg.isPractice === cfg.isPractice).length;
  return {
    trial_description: trialDescription(cfg, position, total),
    block: cfg.isPractice ? 'practice' : 'main',
    trial_number: cfg.trialNumber,
    is_practice: cfg.isPractice ? 1 : 0,
    cue_type: cfg.cueType,                 // informative | noninformative
    cue_direction: cfg.cueDirection,       // left | right | up | down | straight
    stimulus_type: cfg.stimulusType,       // tadpole | fish
    stimulus_location: cfg.stimulusLocation,
    is_target: cfg.stimulusType === 'tadpole' ? 1 : 0,
    role: cfg.stimulusType === 'tadpole' ? 'target' : 'distractor',
    cue_valid: cfg.cueType === 'informative'
      ? (cfg.cueDirection === cfg.stimulusLocation ? 1 : 0) : '',
    // where every location is, and which one holds the stimulus
    locations: LOCATIONS.map(l =>
      l + ':' + (l === cfg.stimulusLocation ? cfg.stimulusType : 'empty')).join(';')
  };
}

function runPhase(trialKey, phase, params){
  const idx = TRIALS.findIndex(t => t.key === trialKey);
  if (idx === -1){ notFound(trialKey); return; }
  const cfg = TRIALS[idx].cfg;
  const nextTrial = idx + 1 < TRIALS.length ? TRIALS[idx + 1].key : null;
  const tag = trialTag(cfg);

  mountScene();
  // Nothing on screen ever shows which trial this is - the trial number
  // lives in the address and the log only.
  if (phase === 'fix') setTrialStart();

  const facts = trialFacts(cfg);
  const aois = captureAOIs();

  logInteraction('phase_onset', Object.assign({
    trial: trialKey, phase,
    planned_duration_ms: PHASE_MS[phase] || '',
    load_latency_ms: loadLatencyMs(),
    aoi_coords: aois.map(a => a.name + ':' + a.center_x + ',' + a.center_y).join(';')
  }, facts, displayContext()));

  const enteredAt = Date.now();
  window.addEventListener('pagehide', () => {
    logInteraction('phase_offset', Object.assign({
      trial: trialKey, phase,
      observed_duration_ms: Date.now() - enteredAt,
      planned_duration_ms: PHASE_MS[phase] || ''
    }, facts));
  });

  const go = url => { location.href = url; };

  /* ---- duck present, eyes closed ---- */
  if (phase === 'fix'){
    setDuckGaze('closed');
    writeRecord(trialKey, Object.assign({
      participant_id: getParticipantId(),
      trial_key: trialKey,
      block: cfg.isPractice ? 'practice' : 'main',
      fix_onset_iso: isoNow(), fix_url: location.href,
      aoi_geometry: aois
    }, facts));
    setTimeout(() => go(phaseUrl(trialKey, 'cue')), FIXATION_MS);
    return;
  }

  /* ---- the duck opens its eyes: the cue ---- */
  if (phase === 'cue'){
    setDuckGaze(cfg.cueDirection);
    logInteraction('cue_shown', Object.assign({ trial: trialKey, phase: 'cue' }, facts));
    writeRecord(trialKey, { cue_onset_iso: isoNow(), cue_url: location.href });
    setTimeout(() => go(phaseUrl(trialKey, 'stim')), CUE_MS);
    return;
  }

  /* ---- the frog or the fish ---- */
  if (phase === 'stim'){
    setDuckGaze(cfg.cueDirection);                 // the cue stays visible
    const slot = document.getElementById('stim-' + cfg.stimulusLocation);
    slot.innerHTML = cfg.stimulusType === 'tadpole' ? frogSVG() : fishSVG();
    slot.style.visibility = 'visible';             // instant, never animated

    logInteraction('stimulus_shown', Object.assign({
      trial: trialKey, phase: 'stim',
      stimulus_aoi: 'AOI_' + cfg.stimulusLocation.toUpperCase() + '_STIMULUS'
    }, facts));
    writeRecord(trialKey, { stim_onset_iso: isoNow(), stim_url: location.href });

    const t0 = performance.now();
    let responded = false, rt = '', pressCount = 0;

    const onClick = e => {
      if (e) e.preventDefault();
      pressCount++;
      if (responded){                      // extra clicks recorded, not scored
        logInteraction('extra_press', Object.assign({
          trial: trialKey, phase: 'stim', press_number: pressCount,
          ms_since_stimulus: round2(performance.now() - t0)
        }, facts));
        return;
      }
      responded = true;
      rt = round2(performance.now() - t0);
      const outcome = outcomeFor(facts.is_target === 1, true);
      logInteraction('keypress', Object.assign({
        trial: trialKey, phase: 'stim', key: 'click',
        what_they_did: facts.is_target === 1
          ? 'clicked for the tadpole (correct)'
          : 'clicked for the fish (should have withheld)',
        reaction_time_ms: rt, responded: 1, outcome,
        accuracy: (outcome === 'HIT' || outcome === 'CORRECT_REJECTION') ? 1 : 0,
        pressed_on_target: facts.is_target === 1 ? 1 : 0,
        pressed_on_distractor: facts.is_target === 0 ? 1 : 0,
        press_number: pressCount
      }, facts));
      writeRecord(trialKey, { responded: 1, reaction_time_ms: rt, response_iso: isoNow() });
      if (RESPONSE_ENDS_STIMULUS) finish();
    };
    // Mouse / touch response. Bound on window in the capture phase so a click
    // anywhere on the page counts, regardless of where focus is.
    window.addEventListener('pointerdown', onClick, { capture: true });

    const finish = () => {
      window.removeEventListener('pointerdown', onClick, { capture: true });
      const outcome = outcomeFor(facts.is_target === 1, responded);
      writeRecord(trialKey, {
        responded: responded ? 1 : 0,
        reaction_time_ms: responded ? rt : '',
        extra_presses: Math.max(0, pressCount - 1),
        outcome,
        hit: outcome === 'HIT' ? 1 : 0,
        miss: outcome === 'MISS' ? 1 : 0,
        false_alarm: outcome === 'FALSE_ALARM' ? 1 : 0,
        correct_rejection: outcome === 'CORRECT_REJECTION' ? 1 : 0,
        correct: (outcome === 'HIT' || outcome === 'CORRECT_REJECTION') ? 1 : 0,
        stim_offset_iso: isoNow()
      });
      go(phaseUrl(trialKey, 'reward', { outcome }));
    };

    setTimeout(finish, STIMULUS_MS);
    return;
  }

  /* ---- the reward period ---- */
  if (phase === 'reward'){
    setDuckGaze('closed');
    const rec = readRecord(trialKey) || {};
    const outcome = (params && params.get('outcome')) || rec.outcome || 'MISS';
    const points = scoreForOutcome(outcome);
    const running = addScore(points, cfg.isPractice);

    if (REWARD_JUMP_ON_HIT && outcome === 'HIT'){
      const duck = document.getElementById('duck');
      duck.classList.remove('hop'); void duck.offsetWidth; duck.classList.add('hop');
      logInteraction('reward_jump', Object.assign({ trial: trialKey, phase: 'reward' }, facts));
    }

    if (cfg.isPractice && PRACTICE_FEEDBACK){
      const fb = document.getElementById('feedback');
      fb.textContent = (outcome === 'HIT' || outcome === 'CORRECT_REJECTION') ? S.great
                     : outcome === 'MISS' ? S.missMsg : S.falseAlarmMsg;
    }

    writeRecord(trialKey, {
      trial_score: points, cumulative_score: running.total,
      reward_url: location.href, trial_end_iso: isoNow()
    });
    const explain = {
      HIT: 'tadpole appeared and they pressed — correct',
      MISS: 'tadpole appeared and they did not press — missed it',
      FALSE_ALARM: 'fish appeared and they pressed — should have withheld',
      CORRECT_REJECTION: 'fish appeared and they withheld — correct'
    };
    logInteraction('trial_end', Object.assign({
      trial: trialKey, outcome,
      what_happened: explain[outcome] || outcome,
      accuracy: (outcome === 'HIT' || outcome === 'CORRECT_REJECTION') ? 1 : 0,
      responded: rec.responded || 0,
      reaction_time_ms: rec.reaction_time_ms != null ? rec.reaction_time_ms : '',
      trial_score: points, cumulative_score: running.total
    }, facts));

    const nextCfg = nextTrial ? (TRIALS.find(t => t.key === nextTrial) || {}).cfg : null;
    const crossToMain = cfg.isPractice && nextCfg && !nextCfg.isPractice;   // practice -> main boundary
    setTimeout(() => {
      if (crossToMain)    go('handoff.html');
      else if (nextTrial) go(phaseUrl(nextTrial, 'fix'));
      else                go(endOfFileUrl());
    }, REWARD_MS);
    return;
  }

  notFound(trialKey + ' / ' + phase);
}

function endOfFileUrl(){ return 'finished.html'; }

function notFound(what){
  document.body.innerHTML =
    '<div class="screen"><h1>Not found</h1><p>' + what + '</p></div>';
}



/* =========================================================================
   RESEARCHER DATA VIEW   (?view=collect)
   ========================================================================= */

const TRIAL_COLUMNS = [
  'participant_id','block','trial_key','trial_number','is_practice','trial_description',
  'cue_type','cue_direction','stimulus_type','stimulus_location',
  'is_target','role','cue_valid','locations',
  'responded','reaction_time_ms','extra_presses',
  'outcome','hit','miss','false_alarm','correct_rejection','correct',
  'trial_score','cumulative_score',
  'fix_onset_iso','cue_onset_iso','stim_onset_iso','response_iso',
  'stim_offset_iso','trial_end_iso',
  'fix_url','cue_url','stim_url','reward_url'
];

const LOG_COLUMNS = [
  'seq','participant_id','action',
  // computer timestamps
  'local_time','iso_time','timezone','tz_offset_min','unix_ms','page_ms',
  'ms_since_session_start','ms_since_trial_start',
  // where
  'url','page_file','query',
  // which trial, in words and in codes
  'trial','trial_number','block','is_practice','trial_description','phase',
  'planned_duration_ms','observed_duration_ms','load_latency_ms',
  'cue_type','cue_direction','stimulus_type','stimulus_location',
  'is_target','role','cue_valid','locations','stimulus_aoi','aoi_coords',
  'key','what_they_did','what_happened','responded','accuracy','reaction_time_ms','outcome',
  'pressed_on_target','pressed_on_distractor','press_number','ms_since_stimulus',
  'trial_score','cumulative_score','total_score','experimental_score','practice_score',
  'trials_scored','next_file','language','file','n_trials_in_file',
  'viewport_w','viewport_h','screen_w','screen_h','device_pixel_ratio','scene_scale',
  'viewing_distance_cm','monitor_width_cm','duck_deg','eccentricity_deg','user_agent'
];

function esc(v){
  const s = (v === null || v === undefined) ? '' : String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function loadTrials(){
  const rows = [];
  try {
    Object.keys(localStorage)
      .filter(k => k.indexOf(STORE_PREFIX) === 0)
      .forEach(k => {
        try {
          const r = JSON.parse(localStorage.getItem(k));
          // a real record is an object carrying a trial key; anything else
          // sharing the prefix is ignored
          if (r && typeof r === 'object' && r.trial_key) rows.push(r);
        } catch(e){}
      });
  } catch(e){}
  rows.sort((a,b) => String(a.trial_key).localeCompare(String(b.trial_key)));
  return rows;
}

function trialCSV(rows){
  const main = rows.filter(r => r.is_practice !== 1);
  const n = k => main.filter(r => r[k] === 1).length;
  const hits = main.filter(r => r.outcome === 'HIT');
  const tg = main.filter(r => r.is_target === 1), fo = main.filter(r => r.is_target === 0);
  const mean = l => l.length ? Math.round(l.reduce((s,r) => s + Number(r.reaction_time_ms||0),0)/l.length*100)/100 : '';
  const inf = hits.filter(r => r.cue_type === 'informative');
  const non = hits.filter(r => r.cue_type === 'noninformative');
  const sc = readScore();

  const SUM = {
    total_score: sc.total, experimental_score: sc.experimental,
    n_hits: n('hit'), n_misses: n('miss'),
    n_false_alarms: n('false_alarm'), n_correct_rejections: n('correct_rejection'),
    hit_rate: tg.length ? Math.round(hits.length/tg.length*100)/100 : '',
    false_alarm_rate: fo.length ? Math.round(n('false_alarm')/fo.length*100)/100 : '',
    mean_rt_hits_ms: mean(hits),
    mean_rt_informative_ms: mean(inf),
    mean_rt_noninformative_ms: mean(non),
    cue_benefit_ms: (inf.length && non.length) ? Math.round((mean(non)-mean(inf))*100)/100 : ''
  };
  const sumCols = Object.keys(SUM);
  return [[...TRIAL_COLUMNS, ...sumCols].join(',')]
    .concat(rows.map(r => [...TRIAL_COLUMNS.map(c => esc(r[c])), ...sumCols.map(c => esc(SUM[c]))].join(',')))
    .join('\n');
}

function logCSV(){
  const log = readLog();
  return [LOG_COLUMNS.join(',')]
    .concat(log.map(e => LOG_COLUMNS.map(c => esc(e[c])).join(','))).join('\n');
}

function dlFile(name, text, mime){
  const b = new Blob([text], { type: mime });
  const u = URL.createObjectURL(b);
  const a = document.createElement('a');
  a.href = u; a.download = name;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(u), 1500);
}

function stampToday(){
  const d = new Date(), p = n => String(n).padStart(2,'0');
  return d.getFullYear() + '-' + p(d.getMonth()+1) + '-' + p(d.getDate());
}

function showCollect(){
  document.body.innerHTML =
    '<div class="collect"><h2>Session data</h2>' +
    '<p>Researcher page. Everything the trials stored on this computer.</p>' +
    '<div class="crow">' +
      '<button id="d-csv" class="btn-mini">Download trial CSV</button>' +
      '<button id="d-log" class="btn-mini">Download interaction log</button>' +
      '<button id="d-json" class="btn-mini btn-mini-secondary">Download JSON</button>' +
      '<button id="d-copy" class="btn-mini btn-mini-secondary">Copy shown</button>' +
      '<button id="d-clear" class="btn-mini btn-mini-secondary">Clear stored data</button>' +
    '</div>' +
    '<div class="crow">' +
      '<label><input type="radio" name="dv" value="trials" checked> Trials</label>' +
      '<label><input type="radio" name="dv" value="log"> Interaction log</label>' +
      '<span class="ccount" id="d-count"></span>' +
    '</div>' +
    '<div id="d-sum" class="ccount"></div>' +
    '<textarea id="d-out" spellcheck="false" readonly></textarea></div>';

  const view = () => {
    const r = document.querySelector('input[name="dv"]:checked');
    return r ? r.value : 'trials';
  };

  function refresh(){
    const rows = loadTrials(), log = readLog(), sc = readScore();
    const main = rows.filter(r => r.is_practice !== 1);
    const cnt = k => main.filter(r => r[k] === 1).length;
    document.getElementById('d-count').textContent =
      rows.length + ' trials (' + main.length + ' experimental) · ' + log.length + ' logged interactions';
    document.getElementById('d-sum').textContent =
      'Score ' + sc.total + ' · hits ' + cnt('hit') + ' · misses ' + cnt('miss') +
      ' · false alarms ' + cnt('false_alarm') + ' · correct rejections ' + cnt('correct_rejection');
    document.getElementById('d-out').value = view() === 'log'
      ? (log.length ? logCSV() : 'No interactions logged on this computer.')
      : (rows.length ? trialCSV(rows) : 'No stored data found on this computer.');
    return rows;
  }

  document.querySelectorAll('input[name="dv"]').forEach(r => r.addEventListener('change', refresh));
  const rows = refresh();
  const pid = (rows[0] && rows[0].participant_id) || 'unknown';

  document.getElementById('d-csv').addEventListener('click', () =>
    dlFile('duck_game_' + pid + '_' + stampToday() + '.csv', trialCSV(loadTrials()), 'text/csv;charset=utf-8;'));
  document.getElementById('d-log').addEventListener('click', () =>
    dlFile('duck_game_interactions_' + pid + '_' + stampToday() + '.csv', logCSV(), 'text/csv;charset=utf-8;'));
  document.getElementById('d-json').addEventListener('click', () =>
    dlFile('duck_game_full_' + pid + '_' + stampToday() + '.json',
      JSON.stringify({ trials: loadTrials(), interactions: readLog(), score: readScore() }, null, 2),
      'application/json'));
  document.getElementById('d-copy').addEventListener('click', e => {
    const t = document.getElementById('d-out'); t.focus(); t.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch(err){}
    e.target.textContent = ok ? 'Copied' : 'Press Ctrl+C';
  });
  document.getElementById('d-clear').addEventListener('click', () => {
    if (!confirm('Delete all stored Duck Game data on this computer?')) return;
    Object.keys(localStorage).filter(k => k.indexOf(STORE_PREFIX) === 0).forEach(k => localStorage.removeItem(k));
    clearLog(); refresh();
  });
}



/* =========================================================================
   STRINGS, ROUTER AND DATA VIEW
   ========================================================================= */

const STRINGS = {
  en: {
    docTitle: 'The Frog Game', title: 'The Frog Game',
    ins1: 'Keep your eyes on the frog in the middle of the screen.',
    ins2: 'The frog will open its eyes.',
    ins3: 'A picture will then appear on one side of the frog.',
    ins4: 'If you see the tadpole, click the mouse as quickly as you can.',
    ins5: 'If you see the fish, do not click.',
    ins6: 'Try to keep looking at the frog.',
    legendTarget: 'Click', legendFoil: 'Do not click',
    pidLabel: 'Participant ID', pidError: 'Enter a Participant ID before starting.',
    start: 'Start', begin: 'Begin', continueBtn: 'Continue',
    readyTitle: "You're ready!",
    readyBody: 'Remember: keep looking at the frog and click when you see the tadpole.',
    breakTitle: 'Nice work!', breakBody: 'You can take a short break.',
    endTitle: 'All done!', endBody: 'Thank you for playing the Frog Game.',
    great: 'Great!',
    missMsg: 'Remember to click when you see the tadpole.',
    falseAlarmMsg: "Remember: don't click when you see the fish."
  },
  ar: {
    docTitle: 'لعبة الضفدع', title: 'لعبة الضفدع',
    ins1: 'أبقِ نظرك على الضفدع في منتصف الشاشة.',
    ins2: 'سيفتح الضفدع عينيه.',
    ins3: 'ثم تظهر صورة في أحد الأماكن الأربعة حول البطة.',
    ins4: 'إذا رأيت أبو ذنيبة، انقر بالفأرة بأسرع ما يمكن.',
    ins5: 'إذا رأيت السمكة، لا تنقر.',
    ins6: 'حاول أن تبقي نظرك على الضفدع.',
    legendTarget: 'انقر', legendFoil: 'لا تنقر',
    pidLabel: 'رقم المشارك', pidError: 'أدخل رقم المشارك قبل البدء.',
    start: 'ابدأ', begin: 'ابدأ', continueBtn: 'متابعة',
    readyTitle: 'أنت جاهز!',
    readyBody: 'تذكّر: أبقِ نظرك على الضفدع وانقر عندما ترى أبو ذنيبة.',
    breakTitle: 'أحسنت!', breakBody: 'يمكنك أخذ استراحة قصيرة.',
    endTitle: 'انتهينا!', endBody: 'شكرًا لمشاركتك في لعبة الضفدع.',
    great: 'أحسنت!',
    missMsg: 'تذكّر أن تنقر عندما ترى أبو ذنيبة.',
    falseAlarmMsg: 'تذكّر: لا تنقر عندما ترى السمكة.'
  }
};

const S = STRINGS[LANG];
const FILE_MODE = (location.protocol === 'file:');

function screenHTML(inner){ return '<div class="screen">' + inner + '</div>'; }

/* ---- Participant ID and instructions: the first file only ---- */
function showStart(){
  document.body.innerHTML = screenHTML(

    '<p>' + S.ins1 + '</p><p>' + S.ins2 + '</p><p>' + S.ins3 + '</p>' +
    '<p>' + S.ins4 + '</p><p>' + S.ins5 + '</p><p>' + S.ins6 + '</p>' +
    '<div class="legend">' +
      '<div class="legend-item"><div class="legend-art" id="lg-frog"></div>' +
        '<div class="legend-label">' + S.legendTarget + '</div></div>' +
      '<div class="legend-item"><div class="legend-art" id="lg-fish"></div>' +
        '<div class="legend-label">' + S.legendFoil + '</div></div>' +
    '</div>' +
    '<div class="field"><label for="pid">' + S.pidLabel + '</label>' +
      '<input id="pid" type="text" autocomplete="off" spellcheck="false">' +
      '<div id="err" class="field-error"></div></div>' +
    '<button id="go" class="btn">' + S.start + '</button>');

  document.getElementById('lg-frog').innerHTML = frogSVG();
  document.getElementById('lg-fish').innerHTML = fishSVG();

  try {
    Object.keys(localStorage).filter(k => k.indexOf(STORE_PREFIX) === 0)
      .forEach(k => localStorage.removeItem(k));
  } catch(e){}
  clearLog();

  const box = document.getElementById('pid');
  if (FILE_MODE) document.getElementById('err').textContent =
    'Local preview. Publish to a web address for one URL per phase.';

  function go(){
    const id = box.value.trim();
    if (!id){ document.getElementById('err').textContent = S.pidError; box.focus(); return; }
    try { localStorage.setItem(PID_KEY, id); }
    catch(e){ document.getElementById('err').textContent =
      'Browser storage is blocked. Open this over http, not as a local file.'; return; }
    setSessionStart();
    logInteraction('session_start', Object.assign({
      participant_id: id, language: LANG,
      file: location.pathname.split('/').pop(),
      n_trials_in_file: TRIALS.length,
      user_agent: navigator.userAgent
    }, displayContext()));
    location.href = phaseUrl(TRIALS[0].key, 'fix');
  }
  document.getElementById('go').addEventListener('click', go);
  box.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
  box.focus();
}

function showHandoff(){
  // Transition screen shown once, after the practice block and before the
  // main block. Clicking the button starts the first main trial.
  const firstMain = (TRIALS.find(t => !t.cfg.isPractice) || TRIALS[0]).key;
  document.body.innerHTML =
    '<div class="screen transition">' +
      '<h1>' + S.readyTitle + '</h1>' +
      '<p>' + S.readyBody + '</p>' +
      '<button id="nx" class="btn">' + S.start + '</button>' +
    '</div>';
  logInteraction('practice_complete', { first_main_trial: firstMain });
  document.getElementById('nx').addEventListener('click', () => {
    logInteraction('main_start', { first_main_trial: firstMain });
    location.href = phaseUrl(firstMain, 'fix');
  });
}

function showFinished(){
  document.body.innerHTML = screenHTML(
    '<h1>' + S.endTitle + '</h1><p>' + S.endBody + '</p>');
  const sc = readScore();
  logInteraction('session_end', {
    total_score: sc.total, experimental_score: sc.experimental,
    practice_score: sc.practice, trials_scored: sc.trials_scored
  });
  console.log('[SCORE]', sc);
}

/* ---- Boot ---- */
function boot(){
  document.documentElement.lang = LANG;
  document.documentElement.dir = (LANG === 'ar') ? 'rtl' : 'ltr';
  document.title = S.docTitle;

  /* Each page declares what it is before loading this script:
         window.VIEW  = 'start' | 'finished' | 'collect'
         window.TRIAL = 'main-047';  window.PHASE = 'stim'  */
  /* THIS ONE FILE IS THE WHOLE TASK.

     Which screen it shows is decided entirely by the query string it was
     reached at, on a single unchanging path. Every phase is its own page
     visit, but the path never changes, so the whole task runs from one
     uploaded file with no per-phase files and no .htaccess:

         index.html                          the welcome screen
         index.html?trial=main-047&phase=fix     duck, eyes closed
         index.html?trial=main-047&phase=cue     the gaze cue
         index.html?trial=main-047&phase=stim    the frog or the fish
         index.html?trial=main-047&phase=reward  the hop on a hit
         index.html?view=finished            thank-you screen
         index.html?view=collect             researcher data export

     Opened as a local file (file://) the same routing is carried in the URL
     hash instead, since there is no server to read a query string. */
  const PAGE = window.PAGE || {};
  const view = PAGE.view || null;
  if (view === 'collect')  { showCollect();  return; }
  if (view === 'finished') { showFinished(); return; }
  if (view === 'handoff')  { showHandoff();  return; }
  if (view === 'start')    { showStart();    return; }

  const trial = PAGE.trial || null;
  const phase = PAGE.phase || 'fix';
  if (!trial){ showStart(); return; }

  runPhase(trial, phase, null);
}

document.addEventListener('DOMContentLoaded', boot);

/* Locally, changing the fragment does not re-parse the page, so reload to
   let the drawing script run again for the new screen. */
window.addEventListener('hashchange', function(){ if (LOCAL_FILE) location.reload(); });
window.addEventListener('hashchange', () => { if (FILE_MODE) boot(); });
window.addEventListener('resize', function(){ if (document.getElementById('scene')) layoutScene(); });



