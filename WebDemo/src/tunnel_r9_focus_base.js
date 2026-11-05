// ?s3=focus only: the Round 9 settings `focus` is built on.
//
// Two lines of work split on 5 November 2026 at 9a95c06 (16:29 UTC) and were merged on the tenth session's branch
// ccr-9f8e2c8d-0zg3mc:
//   - `?s3=match`, the seventh session's focused pass (Tunnel & Lighting: the camera MATCH_CAM, the sock's pose, the walls'
//     turbulence and streaks; Water & VFX: the froth bank, the tunnel's flecks and bubbles), changed `match`'s own settings
//     (tunnel_r9_match.js MATCH, tunnel_r9_match_water.js MATCH_WATER) and code;
//   - `?s3=focus`, the eighth and ninth sessions' focused pass (tunnel_r9_focus.js), is `match` AS IT WAS AT 9a95c06 plus
//     its own settings and FOCUS_ON-gated code.
// So that `focus` stays exactly as tested (pixel-identical to its own branch, ccr-de8d9670-2ohd5t at b2a5b6e), every setting
// the seventh session changed, added or removed is put back to its 9a95c06 value under FOCUS_ON, right before FOCUS's own
// settings are merged; the seventh session's code is gated off under FOCUS_ON where it is. `match` keeps the seventh
// session's values.
//
// GENERATED from the settings themselves (not typed by hand): the objects MATCH and MATCH_WATER evaluated with no switch at
// 9a95c06 and at 68c8c40, compared key by key (arrays as whole values); [path, the 9a95c06 value], or DELETE for a key
// 9a95c06 did not have. If `match`'s settings change again (keys `focus` reads), regenerate it, or `focus` inherits the
// change; the pixel check of `focus` against its last tested build shows it (the probe:
// Previews/WebDemo/screen4_round9_match/21_lines_merged/scripts/: dump_settings.mjs, gen_restore.mjs).
const DELETE = Symbol('delete');
export const PRE_FOCUSED_PASS = {
  MATCH: [
    [["sockPose"], DELETE],
    [["hero","round6","round5","camera","off"], DELETE],
    [["hero","round6","round5","camera","lookZ"], DELETE],
    [["hero","round6","round5","camera","lookY"], 1.62],
    [["hero","round6","round5","camera","lookX"], 0.194],
    [["hero","round6","layout","coinLines"], [[-0.231,2.77,1,1,1.14,0],[-0.674,3.4,1,1,2.03,0],[1.07,7.3,1,1,1.15,0],[2.357,2.3,1,1,0.57,0],[2,15,1,1,0.5,0],[1,12,3,1,0.9,0]]],
    [["hero","round6","layout","firstSock"], [2,3.2,1.14]],
    [["hero","round6","layout","extraGem"], [-0.414,5.7,1.67]],
    [["hero","round6","r7","deco"], [[2.0999999999999996,1,34,0.48,1.62],[3.55,-1,2,0.8,1.98]]],
    [["hero","rim","u"], -1.1500000000000001],
    [["hero","rim","centre"], [-0.097,0.755]],
    [["hero","bubbles"], [[-1.7,-0.63,2.52,0.244],[0.75,-0.17,2.76,0.17],[-0.40000000000000013,0.95,2.76,0.16],[-1.2,-1.29,2.43,0.15],[-2.25,0.88,0.62,0.15],[-1.95,0.72,0.8,0.1],[-2.05,0.92,2.91,0.13],[1.5499999999999998,0.9,2.2,0.09],[2.15,-1,2.5,0.1],[0.1499999999999999,1.2,1.9,0.08]]],
    [["farGem"], [1,14.6,0.82]],
    [["secondSock"], [2.85,7,0.61]],
    [["coinScales"], [[3.4,0.69],[2.77,1.1]]],
    [["sockScale"], 0.85],
    [["walls","liftWall"], DELETE],
    [["walls","turb"], DELETE],
    [["walls","streak"], DELETE],
    [["walls","deepen"], DELETE],
    [["walls","innerRing"], DELETE],
    [["walls","crest","amount"], 0.85],
    [["walls","bands","gap","amount"], 0.85],
    [["walls","bands","glow","col"], "#3fbcf7"],
    [["walls","bands","glow","amount"], 0.5],
    [["walls","royal","amount"], 0.6],
    [["walls","royal","to"], 0.37],
    [["walls","rainbow","r"], 0.225],
    [["walls","rainbow","w"], 0.036],
    [["walls","midWhite","r"], [0.05,0.08,0.17,0.24]],
  ],
  MATCH_WATER: [
    [["froth"], DELETE],
    [["look","froth"], DELETE],
    [["look","clear"], 0.9],
    [["look","sideClear"], 0.85],
    [["lobe"], {"hi":"#6cbcff","mid":"#2f86f5","low":"#2f62da","white":"#f6fcff","violetCol":"#9a7ef0","violet":[0.9,0.6,0.06],"alpha":0.93,"sideAlpha":0.95,"fres":0.12,"film":0.12,"rim":0.95,"rimW":0.47,"frontRimW":0.52,"rimBreak":0.05,"spec":2,"specPow":160,"sheen":0.12,"foam":0.95,"foamScale":0.32,"capFoam":0.36,"capFrom":0.05,"footFoam":0.42,"frontFoam":0.8,"frontFeet":1.3,"capRight":2.2,"cell":8,"hole":0.95,"holeShare":0.25,"fleck":0.95,"frontFleck":0.6,"fleckCell":3.4,"foamSide":"#c4e6ff","foamUp":[0.45,0.95]}],
    [["splash","lumpFroth"], DELETE],
    [["splash","lumpDetail"], DELETE],
    [["splash","lumpDepthWrite"], DELETE],
    [["splash","curlAlpha"], 0.66],
    [["splash","colours","glass"], "#1f9cfb"],
    [["splash","colours","glassDeep"], "#1258d8"],
    [["splash","colours","white"], "#4ec0ff"],
    [["liquid","foam","flecks"], 0.35],
    [["liquid","foam","bubbles"], [[-60,3],[-30,2],[40,1],[66,2]]],
    [["heroWater","splash","count"], 30],
    [["bubbles","count"], 160],
    [["bubbles","sizes"], [[0.72,[0.035,0.075]],[0.25,[0.09,0.16]],[0.03,[0.2,0.28]]]],
    [["bubbles","minPx"], 1.6],
    [["bubbles","zones"], [[0.32,[20,160],[0.62,0.93],[5.3,34]],[0.2,[160,222],[0.62,0.93],[5.3,34]],[0.2,[-42,20],[0.62,0.93],[5.3,34]],[0.24,[-30,210],[0.3,0.62],[5.3,26]],[0.04,[0,360],[0.08,0.4],[20,34]]]],
    [["bubbles","rim"], 1],
    [["bubbles","film"], 0.6],
    [["bubbles","body"], 0.07],
    [["bubbles","glint"], 1],
    [["bubbles","rimPx"], 1.1],
    [["bubbles","flecks","shapes"], DELETE],
    [["bubbles","flecks","edge"], DELETE],
    [["bubbles","flecks","maxPx"], DELETE],
    [["bubbles","flecks","count"], 200],
    [["bubbles","flecks","size"], [[0.035,0.09],[0.01,0.02]]],
    [["bubbles","flecks","rho"], [0.82,0.95]],
    [["bubbles","flecks","bend"], [0,2]],
    [["bubbles","flecks","ahead"], [6.5,34]],
    [["bubbles","flecks","angles"], [-44,224]],
  ],
};
// put each listed setting back (or remove it) in `target`, in place
export function restoreSettings(target, list) {
  for (const [path, v] of list) {
    let o = target;
    for (const k of path.slice(0, -1)) { if (!o[k] || typeof o[k] !== 'object') o[k] = {}; o = o[k]; }
    const k = path[path.length - 1];
    if (v === DELETE) delete o[k]; else o[k] = JSON.parse(JSON.stringify(v));
  }
  return target;
}
