// ?s3=...,level1 (8 November 2026, session dbccb9a3): the user's ANIMATION AND MOVEMENT MANDATE
// (Design/ReferencePacks/2026-11-07_Animation_and_Movement_Mandate_from_user/: the mandate, the 12-panel Level 1 board, the
// phone recording of the current build). The detailed tunnel target stays the ORIGINAL approved Screen 4.
//
// What the recording and the code showed (the causes, not guesses):
//   1. the whole playable level was the 33 m Screen 4 drum (u 3.9-37.2): about 4.7 s of riding, then game.js loopRun()
//      ("Screens 5 onward are not built yet") flashed and put her back at the start, the sock count back to 0/5. So she
//      never reached anywhere: the same first five seconds over and over;
//   2. in those five seconds almost everything on screen is fixed to the camera: the tunnel wall's rings are painted in
//      SCREEN polar coordinates (tunnel_r9_match.js, bv = screen angle and log screen radius, moving 0.03 rings per metre
//      ridden), the washer housing is drawn at a fixed distance in front of the camera (tunnel_s4_struct.js HOUSING), and the
//      water at her is a pad carried in her frame (heroSwell). Only the coins, socks and brushes really pass by.
//
// What this switch does (nothing here runs without it; the accepted ?s3=intunnel and every older switch are unchanged):
//   - the run does not loop: after the Screen 4 drum it goes on through Level 1's sections in the board's order, built as
//     real geometry fixed in the world along the path (track.js COURSE: its own turns and a drop), so the scenery
//     approaches and passes her: the washer drum tunnel with its perforated lavender metal, gold and silver hoops and
//     cobalt water swirling on its walls ("Watch out! Spinning brushes!"), coins, gems and socks ("Collect coins, gems &
//     rescue socks!"), soap bars to jump, a drop to the lower path, grime-ball enemies, the golden gate out into the Bubble
//     Kingdom (sky, castle, islands, waterfalls) and the finish, then Level Complete;
//   - the water there is fixed to the world and flows with the current, with her V-wake behind her and ripples round her;
//   - her swimming, drawn on her model only (her lane, height and jumps are unchanged): a stroke rhythm with alternating
//     roll and a forward surge, small paddle splashes at her sides, and a stronger lean and turn into each swipe;
//   - a progress bar with the sections, and a banner as each section begins.
// Gameplay systems are the game's own: the coins, gems and socks are added to its lists (game.js collect(), resetRun()),
// a brush, soap bar or grime ball knocks her with game.js bumpMascot() (a heart, slowed, back to the middle lane), and the
// hero tunnel's brushes, Bubble Blast, Turbo Spin, pause and hearts work as before. Random numbers: a private sequence
// (the game's seeded Math.random is never used here).
import * as THREE from 'three';
import { makeFluffyBrush } from './fluffy_brush.js';

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const LEVEL1_ON = LIST.includes('level1');
export const LEVEL1_PARTS = { swim: LEVEL1_ON && !LIST.includes('noswim1'), opening: LEVEL1_ON && !LIST.includes('noopening3d'), girl2: LEVEL1_ON && !LIST.includes('nogirl2'),   // girl2: the user's Tripo girl, rigged (8 November)
  // wet (8 November ~10:45 UTC, session 8140e507, the user's Level 1 mandate: "once the pink fluffy character enters the washing
  // machine, the character remains in continuous saturated blue water throughout the full level"): the drum tunnel goes on past
  // the golden gate and widens into one large wet washer chamber (the same lavender metal and cobalt water walls, hoops,
  // decorative brushes, bubbles, full-width water to its walls) instead of the open-sky slide (its rails, pillars and underside,
  // the dry-road look); the Bubble Kingdom's castle is seen through a glowing portal in the chamber's end wall, and Level
  // Complete comes while she floats in the chamber. Also the hand-off out of the Screen 4 drum: the drum's far-end light planes
  // (game.js exitLight, one an opaque painted vortex) shrink away before she reaches them, instead of hiding her for 0.3 s.
  // ,nowet draws the previous level1 exactly
  wet: LEVEL1_ON && !LIST.includes('nowet'),
  // port (8 November, session 8140e507, the user's board 01: "a real hollow circular porthole with the blue interior visible"):
  // in the opening, the washer's inside water starts at its far end while waiting (so the porthole shows the glowing blue spiral,
  // not the water's flat near edge) and floods in as the toss begins; its foam a few small pale-aqua bits at the lower left
  // (the approved art's), not a white mass. ,noport draws the previous opening exactly
  port: LEVEL1_ON && !LIST.includes('noport') };
const WET = LEVEL1_PARTS.wet;

// The course (u = metres along the path; the Screen 4 drum is 3.9-37.2). Turns are radians per metre (+ to screen-left),
// pitch radians (+ climbs); both are bumps that are zero before the drum's end.
export const COURSE = {
  length: 400,
  tube: [35.6, 270],          // the drum tunnel goes on from the Screen 4 drum to the kingdom gate
  water: [40.6, 392],
  gate: 270, finish: 340, castle: 385,
  radius: 2.55, axisH: 1.5,
  pitch: (u, bump) => -0.42 * bump(u, 172, 176, 186, 190) - 0.05 * bump(u, 276, 284, 330, 338),
  turn: (u, bump) => 0.028 * bump(u, 58, 64, 72, 78) - 0.03 * bump(u, 104, 110, 120, 126) + 0.022 * bump(u, 220, 226, 236, 242) - 0.014 * bump(u, 286, 292, 304, 310),
  sections: [
    { u: 1.6, name: 'Washer drum', short: 'Drum' },
    { u: 41, name: 'Spinning brushes', short: 'Brushes', banner: ['Watch out!', 'Spinning brushes!'], warn: true },
    { u: 90, name: 'Treasure run', short: 'Treasure', banner: ['Collect coins, gems', '& rescue socks!'] },
    { u: 137, name: 'Soap bars', short: 'Jump', banner: ['Jump!', 'Swipe up over the soap bars'] },
    { u: 166, name: 'The drop', short: 'Drop', banner: ['Drop down', 'to the lower path!'] },
    { u: 203, name: 'Grime balls', short: 'Enemies', banner: ['Avoid enemies!', 'Grime balls ahead'], warn: true },
    { u: 256, name: 'Bubble Kingdom', short: 'Kingdom', banner: ['Enter the', 'Bubble Kingdom!'] },
  ],
  // [u, lane] (lane 0 = screen-left, 1 = middle, 2 = screen-right)
  brushes: [[52, 0], [58, 2], [64, 0], [64, 1], [71, 1], [71, 2], [78, 0], [78, 2], [85, 1], [98, 2], [132, 0]],
  bars: [146, 156],
  enemies: [[214, 1], [222, 0], [230, 2], [236, 1], [244, 0], [244, 2]],
  // [lane, u0, count, step, height, arc]
  coins: [[1, 42, 5, 1.5, 0.55, 0], [2, 50, 3, 1.4, 0.55, 0], [0, 56, 3, 1.4, 0.55, 0], [2, 62, 3, 1.4, 0.55, 0], [0, 69, 3, 1.4, 0.55, 0],
    [1, 76, 3, 1.4, 0.55, 0], [0, 83, 3, 1.4, 0.55, 0], [1, 93, 7, 1.3, 0.55, 0.9], [0, 104, 6, 1.3, 0.55, 0], [2, 112, 6, 1.3, 0.55, 0.7],
    [1, 121, 6, 1.3, 0.55, 0], [1, 142.6, 7, 0.9, 0.55, 1.15], [1, 152.6, 7, 0.9, 0.55, 1.15], [1, 176, 8, 1.6, 0.5, 0],
    [0, 209, 3, 1.4, 0.55, 0], [2, 217, 3, 1.4, 0.55, 0], [1, 225, 3, 1.4, 0.55, 0], [0, 231, 3, 1.4, 0.55, 0], [1, 239, 3, 1.4, 0.55, 0],
    [1, 248, 4, 1.4, 0.55, 0], [1, 262, 5, 1.5, 0.55, 0], [0, 280, 6, 1.4, 0.55, 0.8], [2, 296, 6, 1.4, 0.55, 0], [1, 312, 8, 1.3, 0.55, 0.6]],
  socks: [[0, 0.85, 101], [2, 0.85, 117], [1, 0.95, 162], [2, 0.85, 251], [0, 0.85, 291]],
  gems: [[1, 0.8, 126], [2, 0.8, 305]],
  swim: { rate: 1.55, roll: 0.075, surge: 0.035, yaw: 0.06, lean: 0.12, splash: 3 },
  // the Screen 4 drum's painted rings, colour bands and water texture are drawn in screen polar coordinates and moved by the
  // distance ridden at 0.03 ring per metre (tunnel_r9_match.js): too slow to read as travel. With level1 they advance k times
  // faster than she travels, measured from her start (INTUNNEL.u, 1.592 m), so Tap to Start is the same picture
  heroTravel: { from: 1.592, k: 6 },
  // wet (LEVEL1_PARTS.wet): the chamber the drum widens into after the gate (radius from C.radius to R between u0 and u1), its
  // end wall at end with the portal (radius, centre height above the water) the castle is seen through; beyond it the kingdom's
  // lagoon (half width) with the castle (place, size, height) and islands [u, x, h, r]; decorative wall brushes [u, side];
  // the drum's far-end light planes shrink away over exit (her u)
  chamber: { u0: 266, u1: 292, R: 5.6, end: 360, portal: { r: 4.0, h: 2.4 }, lagoon: 14, castle: { u: 436, size: 26, h: -8 },
    islands: [[372, -11, 0.4, 3.6], [380, 12, 0.6, 4.2], [390, -16, 0.8, 4.6], [402, 15, 0.5, 4.0], [410, -8, 1.0, 3.4]],
    brushes: [[296, 1], [306, -1], [318, 1], [330, -1], [348, 1], [356, -1]], exit: [30.5, 35.5] },
};

const f4 = (v) => (Number.isInteger(v) ? v.toFixed(1) : String(+v.toFixed(5)));
const lin = (hex) => new THREE.Color(hex);   // three.js converts hex to linear working colour
const v3 = (c) => `vec3(${f4(c.r)}, ${f4(c.g)}, ${f4(c.b)})`;
function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

const NOISE = /* glsl */ `
float l1h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float l1n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(l1h(i), l1h(i + vec2(1.0, 0.0)), f.x), mix(l1h(i + vec2(0.0, 1.0)), l1h(i + vec2(1.0, 1.0)), f.x), f.y); }
float l1f(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * l1n(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
`;

// ---------------------------------------------------------------- the drum tunnel's wall
// Fixed to the world in (angle round the drum, metres along it), so it streams past as she travels: the washer drum's
// lavender / silver / purple perforated metal over the top, the cobalt water swirling up its sides in twisting irregular
// ribbons with turquoise currents, dark-blue gaps and broken white streaks (the user's vortex kit), and the far tunnel
// glowing pale cyan-white (its clear bright centre).
const WALL_VERT = /* glsl */ `
attribute vec2 aTU; varying vec2 vTU; varying vec3 vW;
void main() { vTU = aTU; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
// (wet: the chamber's radius varies along it, so its patterns use each point's own radius, vR, keeping the drum's scale)
const WALL_VERT_WET = WALL_VERT.replace('attribute vec2 aTU; varying vec2 vTU; varying vec3 vW;', 'attribute vec2 aTU; attribute float aR; varying vec2 vTU; varying vec3 vW; varying float vR;')
  .replace('void main() { vTU = aTU;', 'void main() { vTU = aTU; vR = aR;');
function wallFrag(R, wet = false) {
  const C = { deep: lin('#1838c8'), cobalt: lin('#2f66f4'), azure: lin('#4fa8ff'), turq: lin('#3fe0ff'), white: lin('#f4fbff'), lav: lin('#cbb8f4'), silver: lin('#f1ecfd'),
    purple: lin('#7a5ac8'), hole: lin('#5a46a8'), glow: lin('#e6f8ff'), gold: lin('#ffcf7a'), pink: lin('#ffb4e6'), lilac: lin('#b9a4ff') };
  return /* glsl */ `
uniform float uTime; uniform vec3 uCam; uniform float uFade;
varying vec2 vTU; varying vec3 vW;${wet ? ' varying float vR;' : ''}
${NOISE}
void main() {
  float a = vTU.x, u = vTU.y, t = uTime, ca = a * ${wet ? 'vR' : f4(R)};
  // the water on the walls: twisting irregular ribbons (cobalt, azure, turquoise currents, broken white streaks), streaming
  // toward the rider and swirling round
  vec2 q = vec2(ca * 0.6 + t * 0.35, u * 0.32 - t * 0.9);
  float w = l1f(q * 1.25);
  float rib = sin((u * 0.5 + ca * 0.27 + w * 1.6 - t * 0.7) * 6.2832);
  float rib2 = sin((u * 1.1 - ca * 0.35 + w * 2.2 + t * 0.8) * 6.2832);
  vec3 col = mix(${v3(C.deep)}, ${v3(C.cobalt)}, smoothstep(-0.9, -0.1, rib));
  col = mix(col, ${v3(C.azure)}, smoothstep(0.1, 0.7, rib) * 0.7);
  col = mix(col, ${v3(C.turq)}, smoothstep(0.55, 0.95, rib2) * 0.55);
  float streak = smoothstep(0.9, 0.98, rib) * smoothstep(0.4, 0.66, l1f(q * 3.1 + 3.0));
  col = mix(col, ${v3(C.white)}, streak * 0.85);
  // glowing rings round the drum, fixed to it (they rush toward the camera and past her as she travels)
  float rg = fract(u / 2.6), ring = exp(-pow((rg - 0.5) / 0.07, 2.0));
  col = mix(col, mix(${v3(C.turq)}, ${v3(C.white)}, 0.55), ring * 0.55 * (0.7 + 0.3 * l1n(vec2(ca * 2.0, u))));
  col += ${v3(C.lilac)} * exp(-pow((rg - 0.5) / 0.22, 2.0)) * 0.12;
  // the washer drum's metal over the top: lavender with a silver crown and soft purple edges, small round perforations
  float edge = 0.78 + 0.07 * sin(u * 1.1 + t * 1.6) + 0.04 * sin(ca * 3.0 - u * 0.7);
  float metal = 1.0 - smoothstep(edge - 0.05, edge + 0.05, abs(a));
  vec3 mc = mix(${v3(C.purple)}, ${v3(C.lav)}, smoothstep(edge, 0.3, abs(a)));
  mc = mix(mc, ${v3(C.silver)}, (1.0 - smoothstep(0.0, 0.32, abs(a))) * 0.6);
  mc *= 0.95 + 0.05 * sin(u * 9.0 + sin(ca * 2.0) * 1.3);
  vec2 hp = vec2(ca / 0.3, u / 0.3); vec2 hc = fract(hp + vec2(0.0, 0.5 * mod(floor(hp.x), 2.0))) - 0.5;
  float hr = length(hc), haa = fwidth(hp.x) * 0.7 + 0.02;
  float hole = (1.0 - smoothstep(0.16 - haa, 0.16 + haa, hr)) * (1.0 - smoothstep(0.15, 0.6, haa));
  mc = mix(mc, ${v3(C.hole)}, hole * 0.55);
  mc = mix(mc, ${v3(C.pink)}, ring * 0.35);
  col = mix(col, mc, metal);
  // the waterline where the swirling water meets the metal: white foam and a thin gold glint
  float wl = abs(abs(a) - edge);
  col = mix(col, ${v3(C.white)}, (1.0 - smoothstep(0.0, 0.06, wl)) * (0.55 + 0.45 * l1n(vec2(u * 3.0 - t * 4.0, a * 9.0))));
  col = mix(col, ${v3(C.gold)}, (1.0 - smoothstep(0.0, 0.022, abs(abs(a) - edge + 0.08))) * 0.55);
  // its first metres take the Screen 4 drum's bright pastel swirl, so the hand-over is a blend, not a jump
  float intro = 1.0 - smoothstep(41.0, 50.0, u);
  vec3 sw = mix(${v3(C.azure)}, ${v3(C.white)}, 0.35 + 0.35 * sin((u * 0.8 + ca * 0.4 + w - t * 0.6) * 6.2832));
  sw = mix(sw, ${v3(C.pink)}, smoothstep(0.6, 0.9, l1f(q * 0.8 + 7.0)) * 0.35);
  col = mix(col, sw, intro * 0.7);
  // the far tunnel's bright heart
  float d = length(vW - uCam);
  col = mix(col, ${v3(C.glow)} * 1.3, smoothstep(10.0, 55.0, d) * 0.92);
  gl_FragColor = vec4(col * uFade, 1.0);
}`;
}

// ---------------------------------------------------------------- the water she rides
// Fixed to the world and flowing forward with the current (so it passes under her at her speed less the current's), the
// same small waves she rides (world.js waves), saturated cobalt / azure / turquoise with broken white flecks, foam where it
// climbs the walls, her V-wake behind her and rings round her body.
const WATER_VERT = /* glsl */ `
attribute vec2 aXU; attribute vec3 aUp; uniform float uTime; varying vec2 vXU; varying vec3 vW; varying float vH;
float l1w(vec2 xz, float t) {
  return 0.06 * sin(xz.y * 0.9 - t * 3.1 + xz.x * 0.35) + 0.035 * sin(xz.y * 2.3 - t * 5.3 - xz.x * 1.1 + 1.7)
       + 0.02 * sin(xz.y * 4.7 - t * 7.9 + xz.x * 2.3 + 0.4) + 0.012 * sin(xz.x * 6.0 + t * 4.0 + xz.y * 0.5);
}
void main() {
  vXU = aXU; float h = l1w(aXU, uTime); vH = h;
  vec4 w = modelMatrix * vec4(position + aUp * h, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;
function waterFrag() {
  const C = { deep: lin('#0b2fb8'), mid: lin('#1d63f2'), turq: lin('#35c9ff'), foam: lin('#f2fbff'), lav: lin('#a99cf0') };
  return /* glsl */ `
uniform float uTime; uniform vec4 uRider; uniform vec3 uCam; uniform float uHalf;
varying vec2 vXU; varying vec3 vW; varying float vH;
${NOISE}
void main() {
  float x = vXU.x, u = vXU.y, t = uTime;
  float uf = u - t * 2.4;   // the current flows forward
  float n = l1f(vec2(x * 1.3, uf * 0.42)), n2 = l1f(vec2(x * 2.6 + 4.0, uf * 1.1));
  vec3 col = mix(${v3(C.deep)}, ${v3(C.mid)}, smoothstep(0.28, 0.72, n));
  col = mix(col, ${v3(C.turq)}, smoothstep(0.52, 0.86, n2) * 0.75);
  col = mix(col, ${v3(C.lav)}, smoothstep(0.7, 0.9, l1f(vec2(x * 0.8 - 2.0, uf * 0.25))) * 0.25);
  col *= 0.86 + 1.6 * clamp(vH, -0.05, 0.12);   // wave crests catch the light
  // broken white flecks riding the current, more where it climbs the walls
  float side = smoothstep(uHalf - 0.75, uHalf - 0.05, abs(x));
  float fl = smoothstep(0.66, 0.78, l1f(vec2(x * 5.0, uf * 2.2))) * (0.35 + 0.65 * side);
  float glint = smoothstep(0.82, 0.9, l1n(vec2(x * 11.0, uf * 5.0 + t))) * 0.6;
  // her V-wake (behind her) and the rings round her body
  float du = uRider.y - u, dx = x - uRider.x;
  float wake = 0.0;
  if (du > 0.2 && du < 10.0) {
    float arm = abs(abs(dx) - (0.42 + du * 0.3));
    wake = (1.0 - smoothstep(0.0, 0.06 + du * 0.02, arm)) * (1.0 - du / 10.0) * (0.6 + 0.4 * l1n(vec2(u * 6.0, x * 6.0)));
    wake += (1.0 - smoothstep(0.0, 0.18 + du * 0.03, abs(dx))) * (1.0 - smoothstep(0.0, 4.0, du)) * 0.45 * l1n(vec2(x * 9.0, u * 7.0 - t * 6.0));
  }
  float r = length(vec2(dx, (u - uRider.y) * 1.25));
  float rings = (1.0 - smoothstep(0.02, 0.07, abs(fract(r * 1.8 - t * 1.6) - 0.5) - 0.42)) * (1.0 - smoothstep(0.4, 1.6, r)) * smoothstep(0.38, 0.5, r);
  float white = clamp(fl * 0.75 + glint + wake * uRider.z * 0.9 + rings * 0.55, 0.0, 1.0);
  col = mix(col, ${v3(C.foam)}, white);
  // a soft sheen toward the far water (its reflection of the bright tunnel or the sky)
  float d = length(vW - uCam);
  col = mix(col, vec3(0.75, 0.9, 1.0) * 1.15, smoothstep(16.0, 70.0, d) * (uHalf > 2.0 ? 0.7 : 0.25));
  gl_FragColor = vec4(col, 1.0);
}`;
}

// (wet: one water from the drum to the castle's lagoon; its half width varies along it, so its foam where it climbs the walls
// and its far sheen use each point's own half width, vHalf)
const WATER_VERT_WET = WATER_VERT.replace('varying vec2 vXU; varying vec3 vW; varying float vH;', 'attribute float aHalf; varying vec2 vXU; varying vec3 vW; varying float vH; varying float vHalf;')
  .replace('vXU = aXU; float h', 'vXU = aXU; vHalf = aHalf; float h');
// (over the chamber's long, grazing far water its noise aliased into thin dark lines across it: where the current's pattern
// changes faster than a pixel (fwidth), its colour goes to its mean blue and its flecks fade; the waves' shade fades with distance)
const waterFragWet = () => waterFrag().replace(' uniform float uHalf;', '').replace('varying vec2 vXU; varying vec3 vW; varying float vH;', 'varying vec2 vXU; varying vec3 vW; varying float vH; varying float vHalf;')
  .replaceAll('uHalf', 'vHalf')
  .replace('col *= 0.86 + 1.6 * clamp(vH, -0.05, 0.12);', 'float aaW = clamp(fwidth(uf) * 0.9 - 0.12, 0.0, 1.0); col = mix(col, vec3(0.012, 0.1, 0.7), aaW);\n  col *= mix(0.86 + 1.6 * clamp(vH, -0.05, 0.12), 1.0, smoothstep(9.0, 26.0, length(vW - uCam)));')
  .replace('* (0.35 + 0.65 * side);', '* (0.35 + 0.65 * side) * (1.0 - aaW);')
  .replace('float glint = smoothstep(0.82, 0.9, l1n(vec2(x * 11.0, uf * 5.0 + t))) * 0.6;', 'float glint = smoothstep(0.82, 0.9, l1n(vec2(x * 11.0, uf * 5.0 + t))) * 0.6 * (1.0 - aaW);');

// ---------------------------------------------------------------- the Bubble Kingdom's sky (follows the camera)
const SKY_FRAG = /* glsl */ `
uniform float uTime; varying vec3 vD;
${NOISE}
void main() {
  vec3 d = normalize(vD); float y = d.y;
  vec3 top = vec3(0.05, 0.22, 0.95), mid = vec3(0.2, 0.5, 1.0), hor = vec3(0.75, 0.72, 1.0), pinkH = vec3(1.0, 0.7, 0.9);
  vec3 col = mix(pinkH, hor, smoothstep(-0.04, 0.04, y)); col = mix(col, mid, smoothstep(0.04, 0.18, y)); col = mix(col, top, smoothstep(0.18, 0.55, y));
  vec2 cp = d.xz / max(0.12, y + 0.18) * 1.4 + vec2(uTime * 0.02, 0.0);
  float cl = smoothstep(0.52, 0.78, l1f(cp)) * smoothstep(-0.05, 0.12, y);
  col = mix(col, vec3(1.0, 0.97, 1.0), cl * 0.85);
  col += vec3(1.0, 0.92, 0.8) * pow(max(0.0, dot(d, normalize(vec3(0.2, 0.35, 1.0)))), 24.0) * 0.8;
  gl_FragColor = vec4(col, 1.0);
}`;

/**
 * Builds the course. ctx: { scene, camera, TR, L, W, state, mascot, mats, fx, addCoin, addGem, addSock, bumpMascot, refreshHud,
 * sfx, stage, castleModel }. Returns { update(dt, t, phase), reset(), swim(m, t, dt, running, surf), finished() }.
 */
export function buildLevel1(ctx) {
  const { scene, TR, L, W, state, mascot, mats } = ctx;
  const C = COURSE, rnd = mulberry(0x1e7e1), F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  const root = new THREE.Group(); root.name = 'level1'; scene.add(root);
  const report = { parts: [], drawn: {} };
  // drawn only near her (mobile cost): course pieces and items from DRAW_BEHIND m behind to DRAW_AHEAD m ahead
  const DRAW_AHEAD = 45, DRAW_BEHIND = 6, chunks = [];
  const timeU = { value: 0 }, camU = { value: new THREE.Vector3() };
  const riderU = { value: new THREE.Vector4() };

  // ---------------- the drum tunnel (chunks of 15 m, each culled by the camera on its own)
  const wallMat = new THREE.ShaderMaterial({ uniforms: { uTime: timeU, uCam: camU, uFade: { value: 1 } }, vertexShader: WET ? WALL_VERT_WET : WALL_VERT, fragmentShader: wallFrag(C.radius, WET), side: THREE.DoubleSide });
  // (wet) the drum's radius along the path: C.radius, then widening into the chamber between K.u0 and K.u1
  const K = C.chamber, radiusAt = (u) => (WET ? C.radius + (K.R - C.radius) * smooth(K.u0, K.u1, u) : C.radius);
  const halfAt = (u) => Math.sqrt(Math.max(0.01, radiusAt(u) ** 2 - C.axisH ** 2)) + 0.15;   // the water reaches the wall
  const tubeChunk = (u0, u1) => {
    const nA = WET && u1 > K.u0 ? 112 : 64, rows = Math.max(2, Math.ceil((u1 - u0) / 0.5) + 1), cols = nA + 1;
    const pos = new Float32Array(rows * cols * 3), tu = new Float32Array(rows * cols * 2), rr = WET ? new Float32Array(rows * cols) : null, idx = [];
    for (let i = 0; i < rows; i++) {
      const u = u0 + (u1 - u0) * i / (rows - 1), R = radiusAt(u); TR.frame(u, F);
      for (let j = 0; j < cols; j++) {
        const a = -Math.PI + 2 * Math.PI * j / nA, x = Math.sin(a) * R, h = C.axisH + Math.cos(a) * R, k = i * cols + j;
        pos[k * 3] = F.P.x + F.R.x * x + F.U.x * h; pos[k * 3 + 1] = F.P.y + F.R.y * x + F.U.y * h; pos[k * 3 + 2] = F.P.z + F.R.z * x + F.U.z * h;
        tu[k * 2] = a; tu[k * 2 + 1] = u; if (rr) rr[k] = R;
      }
    }
    for (let i = 0; i < rows - 1; i++) for (let j = 0; j < nA; j++) { const a = i * cols + j, b = a + cols; idx.push(a, b, a + 1, b, b + 1, a + 1); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aTU', new THREE.BufferAttribute(tu, 2)); g.setIndex(idx);
    if (rr) g.setAttribute('aR', new THREE.BufferAttribute(rr, 1));
    g.computeBoundingSphere();
    const m = new THREE.Mesh(g, wallMat); m.name = 'l1Wall'; m.userData.u = [u0, u1]; chunks.push(m); root.add(m); return m;
  };
  const tubeEnd = WET ? K.end : C.tube[1];   // (wet: on past the gate, through the chamber to its end wall)
  for (let u = C.tube[0]; u < tubeEnd; u += 15) tubeChunk(u, Math.min(tubeEnd, u + 15));
  report.parts.push(WET ? 'tube+chamber' : 'tube');

  // ---------------- the water (chunks of 15 m)
  const waterMat = new THREE.ShaderMaterial({ uniforms: { uTime: timeU, uCam: camU, uRider: riderU, uHalf: { value: 2.2 } }, vertexShader: WATER_VERT, fragmentShader: waterFrag() });
  const kWaterMat = waterMat.clone(); kWaterMat.uniforms = { uTime: timeU, uCam: camU, uRider: riderU, uHalf: { value: 1.45 } };
  const waterChunk = (u0, u1, half, mat) => {
    const nx = 28, rows = Math.max(2, Math.ceil((u1 - u0) / 0.4) + 1), cols = nx + 1;
    const pos = new Float32Array(rows * cols * 3), xu = new Float32Array(rows * cols * 2), up = new Float32Array(rows * cols * 3), idx = [];
    for (let i = 0; i < rows; i++) {
      const u = u0 + (u1 - u0) * i / (rows - 1); TR.frame(u, F);
      for (let j = 0; j < cols; j++) {
        const x = -half + 2 * half * j / nx, h = W.baseHeight(L, x, u), k = i * cols + j;
        pos[k * 3] = F.P.x + F.R.x * x + F.U.x * h; pos[k * 3 + 1] = F.P.y + F.R.y * x + F.U.y * h; pos[k * 3 + 2] = F.P.z + F.R.z * x + F.U.z * h;
        xu[k * 2] = x; xu[k * 2 + 1] = u; up[k * 3] = F.U.x; up[k * 3 + 1] = F.U.y; up[k * 3 + 2] = F.U.z;
      }
    }
    for (let i = 0; i < rows - 1; i++) for (let j = 0; j < nx; j++) { const a = i * cols + j, b = a + cols; idx.push(a, a + 1, b, b, a + 1, b + 1); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aXU', new THREE.BufferAttribute(xu, 2));
    g.setAttribute('aUp', new THREE.BufferAttribute(up, 3)); g.setIndex(idx); g.computeBoundingSphere(); g.boundingSphere.radius += 0.3;
    const m = new THREE.Mesh(g, mat); m.name = 'l1Water'; m.userData.u = [u0, u1]; chunks.push(m); root.add(m); return m;
  };
  if (!WET) {
    for (let u = C.water[0]; u < C.gate + 1; u += 15) waterChunk(u, Math.min(C.gate + 1, u + 15), 2.2, waterMat);
    for (let u = C.gate - 1; u < C.water[1]; u += 15) waterChunk(u, Math.min(C.water[1], u + 15), 1.45, kWaterMat);
  } else {
    // (wet) one water, its half width following the drum and the chamber to their walls, then out through the portal into the
    // castle's lagoon (seen only through the portal)
    // (double-sided: over the chamber's long far water, seen at a grazing angle, the wave faces leaning away were culled and
    // left thin see-through lines across it)
    const wetWaterMat = new THREE.ShaderMaterial({ uniforms: { uTime: timeU, uCam: camU, uRider: riderU }, vertexShader: WATER_VERT_WET, fragmentShader: waterFragWet(), side: THREE.DoubleSide });
    const wHalf = (u) => (u <= K.end ? halfAt(u) : halfAt(K.end) + (K.lagoon - halfAt(K.end)) * smooth(K.end, K.end + 12, u));
    const wetChunk = (u0, u1) => {
      const nx = 96, rows = Math.max(2, Math.ceil((u1 - u0) / 0.4) + 1), cols = nx + 1;   // (one column count for every chunk: their edges meet exactly, no cracks)
      const pos = new Float32Array(rows * cols * 3), xu = new Float32Array(rows * cols * 2), up = new Float32Array(rows * cols * 3), hf = new Float32Array(rows * cols), idx = [];
      for (let i = 0; i < rows; i++) {
        const u = u0 + (u1 - u0) * i / (rows - 1), half = wHalf(u); TR.frame(u, F);
        for (let j = 0; j < cols; j++) {
          const x = -half + 2 * half * j / nx, h = W.baseHeight(L, x, u), k = i * cols + j;
          pos[k * 3] = F.P.x + F.R.x * x + F.U.x * h; pos[k * 3 + 1] = F.P.y + F.R.y * x + F.U.y * h; pos[k * 3 + 2] = F.P.z + F.R.z * x + F.U.z * h;
          xu[k * 2] = x; xu[k * 2 + 1] = u; up[k * 3] = F.U.x; up[k * 3 + 1] = F.U.y; up[k * 3 + 2] = F.U.z; hf[k] = half;
        }
      }
      for (let i = 0; i < rows - 1; i++) for (let j = 0; j < nx; j++) { const a = i * cols + j, b = a + cols; idx.push(a, a + 1, b, b, a + 1, b + 1); }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aXU', new THREE.BufferAttribute(xu, 2));
      g.setAttribute('aUp', new THREE.BufferAttribute(up, 3)); g.setAttribute('aHalf', new THREE.BufferAttribute(hf, 1)); g.setIndex(idx); g.computeBoundingSphere(); g.boundingSphere.radius += 0.3;
      const m = new THREE.Mesh(g, wetWaterMat); m.name = 'l1Water'; m.userData.u = [u0, u1]; chunks.push(m); root.add(m); return m;
    };
    const wEnd = K.castle.u + 20;
    for (let u = C.water[0]; u < wEnd; u += 15) wetChunk(u, Math.min(wEnd, u + 15));
  }
  report.parts.push('water');

  // ---------------- the washer's hoops: silver-lavender bands with a gold edge and small lights, round the drum's upper wall
  // (fixed to the world every 8 m: the clearest sign of travel, one passing her about every second)
  const hoopU = []; for (let u = 44; u < (WET ? K.end - 4 : C.gate - 4); u += 8) hoopU.push(u);   // (wet: on through the chamber, scaled to it)
  const arc = THREE.MathUtils.degToRad(170);
  const hoopG = new THREE.TorusGeometry(C.radius - 0.06, 0.11, 10, 72, arc); hoopG.rotateZ(Math.PI / 2 - arc / 2);
  const goldG = new THREE.TorusGeometry(C.radius - 0.13, 0.045, 8, 72, arc); goldG.rotateZ(Math.PI / 2 - arc / 2); goldG.translate(0, 0, -0.14);
  const violG = new THREE.TorusGeometry(C.radius - 0.1, 0.06, 8, 72, arc); violG.rotateZ(Math.PI / 2 - arc / 2); violG.translate(0, 0, 0.16);
  const env = mats.env;
  const silverM = new THREE.MeshStandardMaterial({ color: 0xd8cff6, metalness: 0.85, roughness: 0.26, envMap: env, envMapIntensity: 1.25, emissive: 0x3a2a70, emissiveIntensity: 0.35 });
  const goldM = new THREE.MeshStandardMaterial({ color: 0xffc552, metalness: 1, roughness: 0.22, envMap: env, envMapIntensity: 1.3, emissive: 0x6a3a00, emissiveIntensity: 0.55 });
  const violM = new THREE.MeshStandardMaterial({ color: 0x8a64d8, metalness: 0.7, roughness: 0.32, envMap: env, emissive: 0x2a1460, emissiveIntensity: 0.5 });
  const bulbG = new THREE.SphereGeometry(0.075, 12, 8);
  const bulbM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.3, 1.9) });
  const nb = 7, hoops = [new THREE.InstancedMesh(hoopG, silverM, hoopU.length), new THREE.InstancedMesh(goldG, goldM, hoopU.length), new THREE.InstancedMesh(violG, violM, hoopU.length)];
  const bulbs = new THREE.InstancedMesh(bulbG, bulbM, hoopU.length * nb);
  const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), S1 = new THREE.Vector3(1, 1, 1), P0 = new THREE.Vector3();
  hoopU.forEach((u, i) => {
    TR.frame(u, F); P0.copy(F.P).addScaledVector(F.U, C.axisH); TR.quaternion(u, Q);
    const hk = radiusAt(u) / C.radius;   // (1 in the drum; wet: the chamber's size)
    M4.compose(P0, Q, hk === 1 ? S1 : new THREE.Vector3(hk, hk, hk)); for (const h of hoops) h.setMatrixAt(i, M4);
    for (let b = 0; b < nb; b++) {
      const a = (b / (nb - 1) - 0.5) * arc * 0.92, r = radiusAt(u) - 0.2 * hk;
      const p = P0.clone().addScaledVector(F.R, Math.sin(a) * r).addScaledVector(F.U, Math.cos(a) * r).addScaledVector(F.T, -0.14);
      bulbs.setMatrixAt(i * nb + b, M4.compose(p, Q, S1));
    }
  });
  for (const h of [...hoops, bulbs]) { h.computeBoundingSphere(); h.name = 'l1Hoops'; root.add(h); }
  report.parts.push('hoops'); report.drawn.hoops = hoopU.length;

  // ---------------- soap bubbles drifting in the drum and the kingdom (fixed to the world, rising slowly)
  const bubbleMat = new THREE.ShaderMaterial({
    uniforms: { uTime: timeU }, transparent: true, depthWrite: false,
    vertexShader: /* glsl */ `varying vec3 vN, vV; void main() {
#ifdef USE_INSTANCING
  mat4 im = instanceMatrix;
#else
  mat4 im = mat4(1.0);
#endif
  vec4 w = modelMatrix * im * vec4(position, 1.0); vN = normalize(mat3(modelMatrix * im) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `varying vec3 vN, vV; void main() { float f = 1.0 - abs(dot(normalize(vN), vV)); vec3 irid = 0.5 + 0.5 * cos(6.2832 * (f * 1.3 + vec3(0.0, 0.33, 0.67)));
      vec3 c = mix(vec3(0.85, 0.95, 1.0), irid, 0.45); float a = pow(f, 2.2) * 0.85 + 0.05; float hl = pow(max(0.0, dot(reflect(-vV, normalize(vN)), normalize(vec3(-0.4, 0.8, 0.3)))), 40.0);
      gl_FragColor = vec4(c + hl, clamp(a + hl, 0.0, 1.0)); }`,
  });
  const nBub = 170, bub = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 20, 14), bubbleMat, nBub); bub.name = 'l1Bubbles';
  const bubData = [];
  for (let i = 0; i < nBub; i++) {
    const u = 42 + rnd() * (C.finish - 38), inK = u > C.gate, a = (rnd() - 0.5) * 2.4;
    const r = inK ? 1.6 + rnd() * 3.5 : 0.8 + rnd() * 1.4;
    bubData.push({ u, x: inK ? (rnd() < 0.5 ? -1 : 1) * r : Math.sin(a) * r, h: inK ? 0.6 + rnd() * 3.5 : C.axisH + Math.cos(a) * r * 0.7, s: 0.07 + rnd() * (inK ? 0.3 : 0.17), ph: rnd() * 6.3 });
  }
  bub.frustumCulled = false; root.add(bub);
  report.parts.push('bubbles');

  // ---------------- spinning brushes (hazards), from the game's own fluffy brush look
  const brushes = [];
  const brushHub = new THREE.MeshStandardMaterial({ color: 0xffc552, metalness: 1, roughness: 0.2, envMap: env, emissive: 0x4a2a00, emissiveIntensity: 0.5 });
  for (const [u, lane] of C.brushes) {
    const x = W.laneX(lane), left = lane === 0 || (lane === 1 && rnd() < 0.5);
    const holder = new THREE.Group(), spinner = new THREE.Group();
    const look = makeFluffyBrush(left, { balls: true }); look.scale.setScalar(0.62 / 0.9); spinner.add(look); holder.add(spinner);
    // a gold axle up to the drum's wall
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.0, 12), brushHub); arm.position.set(0, 0.95, -0.25); holder.add(arm);
    TR.map(x, 0.74, u, holder.position); TR.quaternion(u, holder.quaternion); holder.rotateY(Math.PI);
    holder.name = 'l1Brush'; root.add(holder);
    brushes.push({ holder, spinner, u, x, lane, dir: left ? 1 : -1, hit: false, bonk: 0 });
  }
  report.drawn.brushes = brushes.length;

  // ---------------- soap bars across the water (jump over them)
  const bars = [];
  const barMat = new THREE.MeshStandardMaterial({ color: 0xffb3e0, roughness: 0.25, metalness: 0.05, envMap: env, envMapIntensity: 0.9, emissive: 0x7a2a6a, emissiveIntensity: 0.35 });
  const barMat2 = new THREE.MeshStandardMaterial({ color: 0xb6a8ff, roughness: 0.25, metalness: 0.05, envMap: env, envMapIntensity: 0.9, emissive: 0x3a2a7a, emissiveIntensity: 0.35 });
  for (const [i, u] of C.bars.entries()) {
    const g = new THREE.CapsuleGeometry(0.2, 2.3, 6, 16); g.rotateZ(Math.PI / 2); g.scale(1, 1, 1.35);
    const holder = new THREE.Group(); const bar = new THREE.Mesh(g, i % 2 ? barMat2 : barMat); holder.add(bar);
    // a few foam bubbles on top of the bar
    for (let k = 0; k < 6; k++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.06 + rnd() * 0.06, 10, 8), bubbleMat); s.position.set(-1 + k * 0.4 + rnd() * 0.1, 0.2, (rnd() - 0.5) * 0.2); holder.add(s); }
    TR.map(0, 0.22, u, holder.position); TR.quaternion(u, holder.quaternion); holder.name = 'l1Bar'; root.add(holder);
    bars.push({ holder, u, hit: false });
  }

  // ---------------- grime balls (enemies): dark fuzzy balls with angry eyes, rolling toward her in a lane
  const enemies = [];
  const ballG = new THREE.IcosahedronGeometry(0.36, 4);
  { const p = ballG.attributes.position, v = new THREE.Vector3(); for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); const k = 1 + 0.16 * Math.pow(rnd(), 3) + 0.03 * rnd(); p.setXYZ(i, v.x * k, v.y * k, v.z * k); } ballG.computeVertexNormals(); }
  const ballM = new THREE.MeshStandardMaterial({ color: 0x23285a, roughness: 0.95, metalness: 0, flatShading: true, emissive: 0x0a0c2a, emissiveIntensity: 0.6 });
  const eyeW = new THREE.MeshBasicMaterial({ color: 0xffffff }), eyeR = new THREE.MeshBasicMaterial({ color: 0xd81b46 }), browM = new THREE.MeshBasicMaterial({ color: 0x0b0d22 });
  for (const [u, lane] of C.enemies) {
    const holder = new THREE.Group(), body = new THREE.Group(); holder.add(body);
    body.add(new THREE.Mesh(ballG, ballM));
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.095, 14, 10), eyeW); eye.scale.set(1, 0.8, 0.5); eye.position.set(s * 0.12, 0.06, 0.31); body.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 8), eyeR); pupil.scale.set(1, 1, 0.5); pupil.position.set(s * 0.11, 0.04, 0.36); body.add(pupil);
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.035, 0.04), browM); brow.position.set(s * 0.12, 0.17, 0.35); brow.rotation.z = s * -0.45; body.add(brow);
    }
    holder.name = 'l1Enemy'; root.add(holder);
    enemies.push({ holder, body, u0: u, u, lane, x: W.laneX(lane), hit: false, ph: rnd() * 6.3 });
  }
  report.drawn.enemies = enemies.length;

  // ---------------- the golden gate out into the Bubble Kingdom, the kingdom itself and the finish arch
  const gate = new THREE.Group(); gate.name = 'l1Gate';
  {
    const ringG = new THREE.TorusGeometry(C.radius + 0.18, 0.32, 16, 80); const ring = new THREE.Mesh(ringG, goldM); ring.position.y = C.axisH; gate.add(ring);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(C.radius + 0.62, 0.16, 12, 80), silverM); ring2.position.y = C.axisH; gate.add(ring2);
    const glow = new THREE.Mesh(new THREE.RingGeometry(C.radius - 0.1, C.radius + 1.4, 64), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.4, 1.9), transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide }));
    glow.position.y = C.axisH; gate.add(glow);
    // the crown on top
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 0.45, 5, 1, true), goldM); crown.position.set(0, C.axisH + C.radius + 0.8, 0); gate.add(crown);
    for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.11), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.5, 0.4, 1.4) })); gem.position.set(Math.sin(a) * 0.5, C.axisH + C.radius + 1.08, Math.cos(a) * 0.5); gate.add(gem); }
    TR.map(0, 0, C.gate, gate.position); TR.quaternion(C.gate, gate.quaternion); root.add(gate);
  }
  const kingdom = new THREE.Group(); kingdom.name = 'l1Kingdom'; root.add(kingdom);
  // sky (around the camera, drawn first)
  const sky = new THREE.Mesh(new THREE.SphereGeometry(150, 32, 16), new THREE.ShaderMaterial({ uniforms: { uTime: timeU }, side: THREE.BackSide, depthWrite: false, depthTest: false,
    vertexShader: 'varying vec3 vD; void main() { vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }', fragmentShader: SKY_FRAG }));
  sky.renderOrder = -9; sky.frustumCulled = false; sky.name = 'l1Sky'; sky.visible = false; scene.add(sky);
  // the slide's rails on both sides of the kingdom water, with pillars down into the clouds (wet: none; she stays in the
  // chamber's water, and the open slide was the dry-road look)
  if (!WET) {
    const railM = new THREE.MeshStandardMaterial({ color: 0xf3ecff, roughness: 0.35, metalness: 0.2, envMap: env, emissive: 0x6a5aa0, emissiveIntensity: 0.25 });
    for (const s of [-1, 1]) {
      const pts = []; for (let u = C.gate - 1; u <= C.water[1]; u += 1) pts.push(TR.map(s * 1.55, 0.12, u));
      const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 2, 0.16, 10), railM); tube.name = 'l1Rail'; kingdom.add(tube);
      const pts2 = pts.map((p, i) => TR.map(s * 1.55, -0.3, C.gate - 1 + i));
      kingdom.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts2), pts2.length * 2, 0.22, 10), violM));
    }
    for (let u = C.gate + 6; u < C.water[1]; u += 9) { TR.frame(u, F); const p = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.32, 14, 12), railM); p.position.copy(F.P).addScaledVector(F.U, -7.4); kingdom.add(p); }
    // the slide's underside
    const under = []; for (let u = C.gate - 1; u <= C.water[1]; u += 1) under.push(u);
    const g = new THREE.BufferGeometry(), pos = []; const idx = [];
    under.forEach((u, i) => { TR.frame(u, F); for (const [x, h] of [[-1.6, -0.3], [-1.2, -0.75], [1.2, -0.75], [1.6, -0.3]]) { const p = F.P.clone().addScaledVector(F.R, x).addScaledVector(F.U, h); pos.push(p.x, p.y, p.z); } if (i) for (let j = 0; j < 3; j++) { const a = (i - 1) * 4 + j, b = i * 4 + j; idx.push(a, b, a + 1, b, b + 1, a + 1); } });
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    kingdom.add(new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0xb79cf0, roughness: 0.5, metalness: 0.3, envMap: env, side: THREE.DoubleSide, emissive: 0x3a2a70, emissiveIntensity: 0.3 })));
  }
  // floating islands with pastel towers and waterfalls either side
  {
    const grass = new THREE.MeshStandardMaterial({ color: 0x7fe08a, roughness: 0.8, emissive: 0x1e5a2a, emissiveIntensity: 0.35 });
    const rock = new THREE.MeshStandardMaterial({ color: 0xc9a9f0, roughness: 0.7, emissive: 0x4a2a7a, emissiveIntensity: 0.3, flatShading: true });
    const towerM = new THREE.MeshStandardMaterial({ color: 0xfff1fb, roughness: 0.4, envMap: env, emissive: 0x6a5a8a, emissiveIntensity: 0.25 });
    const roofM = new THREE.MeshStandardMaterial({ color: 0x8a6cff, roughness: 0.35, metalness: 0.3, envMap: env, emissive: 0x2a1a7a, emissiveIntensity: 0.4 });
    const fallM = new THREE.ShaderMaterial({ uniforms: { uTime: timeU }, transparent: true, depthWrite: false, side: THREE.DoubleSide,
      vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `uniform float uTime; varying vec2 vUv; ${NOISE} void main() { float n = l1f(vec2(vUv.x * 6.0, vUv.y * 3.0 + uTime * 1.6)); vec3 c = mix(vec3(0.3, 0.7, 1.0), vec3(0.95, 0.99, 1.0), smoothstep(0.45, 0.75, n));
        float a = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x) * (0.75 + 0.25 * n); gl_FragColor = vec4(c * 1.15, a); }` });
    const islands = WET ? K.islands : [[284, -9, 1, 4.5], [300, 11, 2, 5.5], [318, -13, 0, 6], [336, 10, -1, 5], [352, -8, 3, 4], [366, 15, 1, 6]];   // (wet: beyond the portal, round the castle's lagoon)
    for (const [u, x, h, r] of islands) {
      TR.frame(u, F); const base = F.P.clone().addScaledVector(F.R, x).addScaledVector(F.U, h);
      const isl = new THREE.Group(); isl.position.copy(base); kingdom.add(isl);
      const top = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.92, 0.6, 24), grass); isl.add(top);
      const under = new THREE.Mesh(new THREE.ConeGeometry(r * 0.95, r * 1.6, 9), rock); under.rotation.x = Math.PI; under.position.y = -r * 0.8 - 0.3; isl.add(under);
      const nT = 1 + Math.floor(rnd() * 3);
      for (let k = 0; k < nT; k++) {
        const th = 2.5 + rnd() * 4, tr = 0.5 + rnd() * 0.5, ox = (rnd() - 0.5) * r, oz = (rnd() - 0.5) * r;
        const tw = new THREE.Mesh(new THREE.CylinderGeometry(tr, tr * 1.1, th, 16), towerM); tw.position.set(ox, th / 2 + 0.3, oz); isl.add(tw);
        const roof = new THREE.Mesh(new THREE.ConeGeometry(tr * 1.35, tr * 2.4, 16), roofM); roof.position.set(ox, th + 0.3 + tr * 1.2, oz); isl.add(roof);
      }
      const fall = new THREE.Mesh(new THREE.PlaneGeometry(r * 0.6, r * 2.6), fallM); fall.position.set(Math.sign(x) * r * 0.75, -r * 1.2, 0); fall.lookAt(isl.position.clone().sub(F.T.clone().multiplyScalar(30)).sub(base).add(fall.position)); isl.add(fall);
    }
  }
  // the castle at the end of the slide (the game's own castle model)
  if (ctx.castleModel) {
    const c = ctx.castleModel.clone(true); const holder = new THREE.Group(); holder.add(c);
    const box = new THREE.Box3().setFromObject(c), size = box.getSize(new THREE.Vector3()), mid = box.getCenter(new THREE.Vector3());
    const s = (WET ? K.castle.size : 30) / Math.max(size.x, size.z); c.scale.setScalar(s); c.position.set(-mid.x * s, -box.min.y * s, -mid.z * s);
    // (wet: standing in the lagoon beyond the chamber's portal, sized to be framed by it from the finish)
    if (WET) { TR.map(0, K.castle.h, K.castle.u, holder.position); TR.quaternion(K.castle.u, holder.quaternion); } else { TR.map(0, -9, C.castle, holder.position); TR.quaternion(C.castle, holder.quaternion); }
    holder.name = 'l1Castle'; kingdom.add(holder); report.parts.push('castle');
  }
  // the finish: a gold and pink arch with a ribbon
  const finish = new THREE.Group(); finish.name = 'l1Finish';
  {
    const fr = WET ? 3.4 : 2.0;   // (wet: an arch to the chamber's size, its ribbon above the camera's line of sight at the finish)
    const archG = new THREE.TorusGeometry(fr, WET ? 0.2 : 0.16, 12, 64, Math.PI); const arch = new THREE.Mesh(archG, goldM); arch.position.y = 0.1; finish.add(arch);
    const ribbon = new THREE.Mesh(new THREE.PlaneGeometry(fr * 1.6, 0.42), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 0.45, 1.0), side: THREE.DoubleSide })); ribbon.position.y = fr; finish.add(ribbon);
    for (const s of [-1, 1]) { const st = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 1.5, 0.6) })); st.position.set(s * fr, 0.2, 0); finish.add(st); }
    TR.map(0, 0, C.finish, finish.position); TR.quaternion(C.finish, finish.quaternion); root.add(finish);
  }
  report.parts.push('kingdom');

  // ---------------- (wet) the chamber's end wall with the portal to the Bubble Kingdom, its waterfalls, its wall brushes
  const decor = [];
  let endWall = null;
  if (WET) {
    endWall = new THREE.Group(); endWall.name = 'l1ChamberEnd';
    const P = K.portal, Rk = radiusAt(K.end);
    // the end wall: the drum's lavender metal round the portal (it reaches past the chamber's walls; below the water it is hidden)
    const wallM = new THREE.MeshStandardMaterial({ color: 0xcdbff4, metalness: 0.75, roughness: 0.3, envMap: env, envMapIntensity: 1.1, emissive: 0x3a2a78, emissiveIntensity: 0.45, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(new THREE.RingGeometry(P.r, Rk + 1.2, 96, 2), wallM); ring.position.y = P.h; endWall.add(ring);
    // perforations as a darker band of round holes round the portal, and two silver bands
    for (const [r0, w, m] of [[P.r + 0.55, 0.16, silverM], [Rk - 0.6, 0.22, violM], [P.r + 1.6, 0.1, silverM]]) {
      const band = new THREE.Mesh(new THREE.TorusGeometry(r0, w, 10, 96), m); band.position.y = P.h; band.position.z = -0.05; endWall.add(band);
    }
    // the portal's frame: gold, a silver outer ring, small lights, a glow on its rim and the crown on top (the gate's look)
    const frame = new THREE.Mesh(new THREE.TorusGeometry(P.r, 0.34, 18, 96), goldM); frame.position.y = P.h; endWall.add(frame);
    const frame2 = new THREE.Mesh(new THREE.TorusGeometry(P.r + 0.42, 0.13, 12, 96), silverM); frame2.position.y = P.h; endWall.add(frame2);
    const lights = new THREE.InstancedMesh(bulbG, bulbM, 24);
    for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2; lights.setMatrixAt(i, M4.makeTranslation(Math.sin(a) * (P.r + 0.42), P.h + Math.cos(a) * (P.r + 0.42), -0.12)); }
    endWall.add(lights);
    const glow = new THREE.Mesh(new THREE.RingGeometry(P.r - 0.5, P.r + 0.05, 96), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.5, 1.35, 1.9), transparent: true, opacity: 0.45, depthWrite: false, side: THREE.DoubleSide }));
    glow.position.set(0, P.h, -0.15); endWall.add(glow);
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.78, 0.6, 5, 1, true), goldM); crown.position.set(0, P.h + P.r + 0.85, -0.1); endWall.add(crown);
    for (let k = 0; k < 5; k++) { const a = k / 5 * Math.PI * 2; const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.15), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.5, 0.4, 1.4) })); gem.position.set(Math.sin(a) * 0.68, P.h + P.r + 1.22, Math.cos(a) * 0.68 - 0.1); endWall.add(gem); }
    TR.map(0, 0, K.end, endWall.position); TR.quaternion(K.end, endWall.quaternion); endWall.rotateY(Math.PI); root.add(endWall);
    // waterfalls pouring from the end wall into the chamber's water either side of the portal
    const fallWM = new THREE.ShaderMaterial({ uniforms: { uTime: timeU }, transparent: true, depthWrite: false, side: THREE.DoubleSide,
      vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `uniform float uTime; varying vec2 vUv; ${NOISE} void main() { float n = l1f(vec2(vUv.x * 5.0, vUv.y * 2.4 + uTime * 1.9)); vec3 c = mix(vec3(0.22, 0.55, 1.0), vec3(0.92, 0.98, 1.0), smoothstep(0.42, 0.78, n));
        float a = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x) * (0.7 + 0.3 * n) * smoothstep(0.0, 0.08, vUv.y); gl_FragColor = vec4(c * 1.1, a * 0.9); }` });
    for (const s of [-1, 1]) {
      const fh = Rk + C.axisH - 0.6, fall = new THREE.Mesh(new THREE.PlaneGeometry(1.5, fh), fallWM);
      TR.map(s * (P.r + 1.55), fh / 2 - 0.1, K.end - 0.25, fall.position); TR.quaternion(K.end, fall.quaternion); fall.name = 'l1ChamberFall'; root.add(fall); decor.push({ o: fall, u: K.end });
    }
    // decorative fluffy brushes on the chamber's walls at the water's edge (not in her lanes: they never knock her), spinning
    for (const [u, side] of K.brushes) {
      const x = side * (halfAt(u) - 1.0), holder = new THREE.Group(), spinner = new THREE.Group();
      const look = makeFluffyBrush(side > 0, { balls: true }); look.scale.setScalar(1.0); spinner.add(look); holder.add(spinner);
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.6, 12), brushHub); arm.rotation.z = Math.PI / 2; arm.position.set(-side * 0.95, 0, -0.2); holder.add(arm);
      TR.map(x, 0.95, u, holder.position); TR.quaternion(u, holder.quaternion); holder.rotateY(Math.PI); holder.name = 'l1ChamberBrush'; root.add(holder);
      decor.push({ o: holder, u, spinner, dir: side });
    }
    report.parts.push('chamber');
  }

  // ---------------- collectibles: added to the game's own lists (collect(), resetRun())
  const nBefore = { coins: ctx.counts().coins, gems: ctx.counts().gems, socks: ctx.counts().socks };
  if (ctx.addCoin) for (const [lane, u0, n, step, h0, arcH] of C.coins) for (let i = 0; i < n; i++) {
    const u = u0 + i * step, h = h0 + arcH * Math.sin(Math.PI * i / Math.max(1, n - 1));
    ctx.addCoin(new THREE.Vector3(W.laneX(lane), W.baseHeight(L, W.laneX(lane), u) + h, u));
  }
  if (ctx.addGem) for (const [lane, h, u] of C.gems) ctx.addGem(new THREE.Vector3(W.laneX(lane), W.baseHeight(L, W.laneX(lane), u) + h, u));
  if (ctx.addSock) for (const [lane, h, u] of C.socks) ctx.addSock(lane, h, u);
  const nAfter = ctx.counts();
  report.drawn.coins = nAfter.coins - nBefore.coins; report.drawn.gems = nAfter.gems - nBefore.gems; report.drawn.socks = nAfter.socks - nBefore.socks;
  // the game's own loop draws a random number for every gem on the list each frame (its sparkles): the course's gems join the
  // list only once she has left the Screen 4 drum, so the game's seeded sequence is untouched until then (Tap to Start and the
  // drum are drawn exactly as without level1)
  const myGems = ctx.gemsList ? ctx.gemsList.splice(nBefore.gems) : [];
  const myItems = [...(ctx.coinsList ? ctx.coinsList.slice(nBefore.coins) : []), ...(ctx.socksList ? ctx.socksList.slice(nBefore.socks) : []), ...myGems];
  let gemsIn = false;

  // ---------------- the HUD: section banner, progress bar, Level Complete
  const css = document.createElement('style');
  css.textContent = `
#l1Banner { position: absolute; left: 50%; top: calc(var(--u, 2px) * 122); transform: translate(-50%, -12px) scale(.86); opacity: 0; z-index: 30; pointer-events: none;
  padding: calc(var(--u, 2px) * 6) calc(var(--u, 2px) * 16) calc(var(--u, 2px) * 7); border-radius: calc(var(--u, 2px) * 20); text-align: center; white-space: nowrap;
  font-family: var(--display, 'Fredoka', system-ui, sans-serif); color: #fff; font-weight: 700; transition: opacity .3s, transform .3s cubic-bezier(.3,1.6,.5,1);
  background: linear-gradient(#5aa8ff, #2f6ff0); border: calc(var(--u, 2px) * 2.2) solid #e8f6ff; box-shadow: 0 calc(var(--u, 2px) * 3) 0 #1a3f9e, 0 0 calc(var(--u, 2px) * 14) rgba(140,210,255,.8); }
#l1Banner.warn { background: linear-gradient(#ff5f86, #e0245e); border-color: #ffe4ec; box-shadow: 0 calc(var(--u, 2px) * 3) 0 #8e1038, 0 0 calc(var(--u, 2px) * 14) rgba(255,120,160,.8); }
#l1Banner.show { opacity: 1; transform: translate(-50%, 0) scale(1); }
#l1Banner b { display: block; font-size: calc(var(--u, 2px) * 15); line-height: 1.1; text-shadow: 0 calc(var(--u, 2px) * 1.5) 0 rgba(10,30,90,.55); }
#l1Banner span { display: block; font-size: calc(var(--u, 2px) * 11.5); line-height: 1.15; text-shadow: 0 calc(var(--u, 2px) * 1.2) 0 rgba(10,30,90,.5); }
#l1Prog { position: absolute; left: calc(var(--u, 2px) * 16); right: calc(var(--u, 2px) * 24); top: calc(var(--u, 2px) * 99); height: calc(var(--u, 2px) * 8); z-index: 25; pointer-events: none; opacity: 0; transition: opacity .4s; }
body.running #l1Prog, #l1Prog.on { opacity: 1; }
#l1Prog .bar { position: absolute; inset: 0; border-radius: 99px; background: rgba(20,30,110,.45); border: calc(var(--u, 2px) * 1.2) solid rgba(230,240,255,.85); overflow: hidden; }
#l1Prog .fill { position: absolute; left: 0; top: 0; bottom: 0; width: 0; background: linear-gradient(90deg, #6ff0ff, #ff8ad8); border-radius: 99px; }
#l1Prog .tick { position: absolute; top: 15%; bottom: 15%; width: calc(var(--u, 2px) * 1.2); background: rgba(255,255,255,.8); border-radius: 2px; }
#l1Prog .me { position: absolute; top: 50%; width: calc(var(--u, 2px) * 13); height: calc(var(--u, 2px) * 13); margin: calc(var(--u, 2px) * -6.5) 0 0 calc(var(--u, 2px) * -6.5); border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #ffd1ee 0 20%, #ff4fb8 55%, #c41a86 100%); border: calc(var(--u, 2px) * 1.3) solid #fff; box-shadow: 0 0 calc(var(--u, 2px) * 5) rgba(255,120,210,.9); }
#l1Prog .end { position: absolute; right: calc(var(--u, 2px) * -4); top: 50%; transform: translateY(-50%); font-size: calc(var(--u, 2px) * 12); filter: drop-shadow(0 1px 1px rgba(0,0,40,.6)); }
#l1Prog .lbl { position: absolute; left: 0; top: calc(100% + var(--u, 2px) * 1.5); font: 700 calc(var(--u, 2px) * 7.5) var(--display, 'Fredoka', system-ui, sans-serif); color: #fff; text-shadow: 0 1px 2px rgba(10,20,80,.8); }
#l1Done { position: absolute; inset: 0; z-index: 60; display: none; align-items: center; justify-content: center; background: rgba(40,20,110,.35); font-family: var(--display, 'Fredoka', system-ui, sans-serif); }
#l1Done.show { display: flex; }
#l1Done .card { width: 82%; padding: calc(var(--u, 2px) * 12) calc(var(--u, 2px) * 12) calc(var(--u, 2px) * 14); border-radius: calc(var(--u, 2px) * 18); background: linear-gradient(#f4ecff, #dccbff);
  border: calc(var(--u, 2px) * 3) solid #fff; box-shadow: 0 calc(var(--u, 2px) * 5) 0 #7b5ad0, 0 0 calc(var(--u, 2px) * 30) rgba(255,255,255,.7); text-align: center; color: #3a2a8a; animation: l1pop .5s cubic-bezier(.3,1.6,.5,1); }
@keyframes l1pop { from { transform: scale(.6); opacity: 0; } to { transform: scale(1); opacity: 1; } }
#l1Done .stars { font-size: calc(var(--u, 2px) * 28); letter-spacing: calc(var(--u, 2px) * 3); color: #ffc93a; text-shadow: 0 calc(var(--u, 2px) * 2) 0 #c07a00; }
#l1Done h2 { margin: calc(var(--u, 2px) * 2) 0 calc(var(--u, 2px) * 8); font-size: calc(var(--u, 2px) * 22); color: #fff; background: linear-gradient(#5aa8ff, #2f6ff0); border-radius: 99px; padding: calc(var(--u, 2px) * 4) 0; text-shadow: 0 calc(var(--u, 2px) * 2) 0 #1a3f9e; }
#l1Done .row { display: flex; justify-content: space-between; align-items: center; font-size: calc(var(--u, 2px) * 12); font-weight: 700; padding: calc(var(--u, 2px) * 3) calc(var(--u, 2px) * 6); }
#l1Done .row i { font-style: normal; color: #1fae4a; }
#l1Done .row i.no { color: #c0406a; }
#l1Done button { margin-top: calc(var(--u, 2px) * 10); width: 100%; height: calc(var(--u, 2px) * 36); border: 0; border-radius: 99px; font: 700 calc(var(--u, 2px) * 17) var(--display, 'Fredoka', system-ui, sans-serif); color: #fff;
  background: linear-gradient(#5fe36a, #22b53a); box-shadow: 0 calc(var(--u, 2px) * 4) 0 #13782a; cursor: pointer; }
#l1Done small { display: block; margin-top: calc(var(--u, 2px) * 6); font-size: calc(var(--u, 2px) * 8.5); color: #5a4aa0; }`;
  document.head.appendChild(css);
  const stage = ctx.stage;
  const banner = document.createElement('div'); banner.id = 'l1Banner'; stage.appendChild(banner);
  const prog = document.createElement('div'); prog.id = 'l1Prog';
  prog.innerHTML = '<div class="bar"><div class="fill"></div></div><div class="end">🏰</div><div class="me"></div><div class="lbl"></div>';
  const total = C.finish - C.sections[0].u;
  for (const s of C.sections.slice(1)) { const tk = document.createElement('div'); tk.className = 'tick'; tk.style.left = `${((s.u - C.sections[0].u) / total) * 100}%`; prog.querySelector('.bar').appendChild(tk); }
  stage.appendChild(prog);
  const fill = prog.querySelector('.fill'), me = prog.querySelector('.me'), lbl = prog.querySelector('.lbl');
  const done = document.createElement('div'); done.id = 'l1Done'; stage.appendChild(done);

  let shown = -1, bannerT = 0, complete = false, completeT = 0, lastLbl = '';
  const sectionAt = (u) => { let k = 0; for (let i = 0; i < C.sections.length; i++) if (u >= C.sections[i].u) k = i; return k; };
  const showBanner = (s) => {
    banner.className = s.warn ? 'warn' : ''; banner.innerHTML = `<b>${s.banner[0]}</b><span>${s.banner[1]}</span>`;
    void banner.offsetWidth; banner.classList.add('show'); bannerT = 2.4;
  };
  const showComplete = () => {
    const socks = Math.min(5, state.socks), gemsGot = state.level1Gems || 0, coinsGot = state.coins - (state.level1Coins0 ?? state.coins);
    const stars = 1 + (socks >= 5 ? 1 : 0) + (gemsGot >= 1 ? 1 : 0);
    done.innerHTML = `<div class="card"><div class="stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div><h2>Level Complete!</h2>
      <div class="row"><span>🧦 Rescue 5 lost socks</span><span>${socks}/5 <i class="${socks >= 5 ? '' : 'no'}">${socks >= 5 ? '✔' : '✖'}</i></span></div>
      <div class="row"><span>🪙 Coins collected</span><span>${coinsGot}</span></div>
      <div class="row"><span>💎 Find a special gem</span><span>${Math.min(1, gemsGot)}/1 <i class="${gemsGot >= 1 ? '' : 'no'}">${gemsGot >= 1 ? '✔' : '✖'}</i></span></div>
      <button type="button" id="l1Again">Play again ▶</button><small>Level 2 (Soap Lagoon) is not built yet.</small></div>`;
    done.classList.add('show');
    done.querySelector('#l1Again').addEventListener('click', (e) => { e.stopPropagation(); done.classList.remove('show'); if (ctx.restart) ctx.restart(); });
  };
  // stop taps on the panel from reaching the game's own input
  for (const ev of ['pointerdown', 'touchstart', 'mousedown']) done.addEventListener(ev, (e) => e.stopPropagation());

  // (wet) the Screen 4 drum's far-end light planes (game.js exitLight; their placement kept, so a restart shows them again)
  const exitPlanes = WET && ctx.mats && ctx.mats.exitLight ? ctx.mats.exitLight.filter(Boolean).map((m) => ({ m, base: m.matrix.clone(), k: 1 })) : [];
  const exitS = new THREE.Matrix4();

  // ---------------- per frame
  const tmpP = new THREE.Vector3();
  let lastPhase = '';
  function update(dt, t, phase) {
    timeU.value = t; ctx.camera.getWorldPosition(camU.value);
    const m = mascot, u = m.z, running = phase === 'running';
    riderU.value.set(m.x, u, Math.min(1, (m.speed || 0) / W.CRUISE) * (m.air ? 0.2 : 1), m.xv);
    if (phase === 'running' && lastPhase !== 'running') { state.level1Coins0 = state.coins; state.level1Gems = 0; state.level1Gems0 = state.gems; }
    if (running) state.level1Gems = state.gems - (state.level1Gems0 ?? state.gems);
    if (!gemsIn && u > C.tube[0] + 2.4) { ctx.gemsList.push(...myGems); gemsIn = true; }
    lastPhase = phase;
    if (!WET) {
      // sky only out in the kingdom
      sky.visible = u > C.gate - 30; sky.position.copy(camU.value);
      kingdom.visible = u > C.gate - 60;
      // only what is near her is drawn (the far course is hidden behind the drum's glow anyway)
      for (const c of chunks) c.visible = c.userData.u[0] < u + DRAW_AHEAD && c.userData.u[1] > u - DRAW_BEHIND;
    } else {
      // (wet) once she nears the chamber, all of it is drawn to its end wall (no gap, no wall or water popping in), the kingdom
      // and its sky only beyond the portal (the chamber encloses everything else)
      // (mobile cost: drawn whole only once the drum's usual reach touches the chamber; before that its far end is in the drum's
      // glow. Later than this, the reach would end inside the widening chamber and show a dark hole)
      const nearK = u > K.u0 - DRAW_AHEAD - 1;
      sky.visible = nearK; sky.position.copy(camU.value); kingdom.visible = nearK; endWall.visible = nearK;
      for (const c of chunks) c.visible = c.userData.u[1] > u - DRAW_BEHIND && (c.userData.u[0] < u + DRAW_AHEAD || (nearK && c.userData.u[0] >= K.u0 - 15));
      for (const d of decor) { d.o.visible = nearK && d.u - u > -3 && d.u - u < 70; if (d.spinner && d.o.visible) d.spinner.rotation.z += dt * 2.4 * d.dir; }
      // the Screen 4 drum's far-end light planes shrink away as she nears the drum's end (they never come between her and the camera)
      for (const e of exitPlanes) {
        const k = 1 - smooth(K.exit[0], K.exit[1], u);
        if (k !== e.k) { e.k = k; e.m.visible = k > 0.001; if (e.m.visible) { e.m.matrix.copy(e.base).multiply(exitS.makeScale(k, k, 1)); e.m.matrixWorldNeedsUpdate = true; } }
      }
    }
    for (const it of myItems) if (it.pop < 0 && it.live && !(it.u < u + DRAW_AHEAD && it.u > u - DRAW_BEHIND)) it.obj.visible = false;   // (in range: as the game left it)
    gate.visible = u > C.gate - DRAW_AHEAD && u < C.gate + 20; finish.visible = u > C.finish - 60;
    // bubbles drift and wobble
    for (let i = 0; i < bubData.length; i++) {
      const b = bubData[i], ahead = b.u - u;
      if (ahead < -6 || ahead > 70) { M4.makeScale(0, 0, 0); bub.setMatrixAt(i, M4); continue; }
      TR.map(b.x + Math.sin(t * 0.7 + b.ph) * 0.15, b.h + ((t * 0.25 + b.ph) % 1.5) * 0.4, b.u, tmpP);
      const s = b.s * (1 + 0.05 * Math.sin(t * 3 + b.ph));
      M4.makeScale(s, s * (1 + 0.04 * Math.sin(t * 2.3 + b.ph)), s).setPosition(tmpP); bub.setMatrixAt(i, M4);
    }
    bub.instanceMatrix.needsUpdate = true;
    // brushes spin; a brush in her lane knocks her
    for (const b of brushes) {
      const ahead = b.u - u;
      b.holder.visible = ahead > -2.2 && ahead < DRAW_AHEAD;
      // once she is past it, it folds back into the drum's wall (so it never fills the screen between her and the camera)
      const gone = smooth(-0.3, -2.0, ahead);
      b.holder.scale.setScalar(1 - 0.9 * gone);
      if (!b.base) b.base = b.holder.position.clone();
      TR.frame(b.u, F); b.holder.position.copy(b.base).addScaledVector(F.R, Math.sign(b.x || (b.dir > 0 ? 1 : -1)) * gone * 1.4).addScaledVector(F.U, gone * 0.9);
      b.bonk = Math.max(0, b.bonk - dt);
      if (b.holder.visible) b.spinner.rotation.z += dt * 3.2 * b.dir * (1 + 4 * b.bonk);
      if (!running) continue;
      if (Math.abs(ahead) > 0.85) { if (ahead < -1.5) b.hit = false; continue; }
      if (b.hit || Math.abs(m.x - b.x) > 0.42) continue;
      if (m.air && m.yAbs - W.surface(L, m.x, m.z, t) > 1.55) continue;
      b.hit = true; b.bonk = 0.6; ctx.bumpMascot(m.x >= b.x ? 1 : -1);
    }
    // soap bars: jump them
    for (const b of bars) {
      const ahead = b.u - u;
      b.holder.visible = ahead > -1.8 && ahead < DRAW_AHEAD;
      b.holder.scale.setScalar(1 - 0.95 * smooth(-0.4, -1.8, ahead));
      if (!running) continue;
      if (Math.abs(ahead) > 0.42) { if (ahead < -1.5) b.hit = false; continue; }
      if (b.hit || m.yAbs - W.surface(L, m.x, m.z, t) > 0.5) continue;
      b.hit = true; ctx.bumpMascot(m.x >= 0 ? 1 : -1);
    }
    // grime balls roll toward her once she is near, bobbing and turning to face her
    for (const e of enemies) {
      const near = e.u0 - u;
      if (running && near < 26 && near > -6) e.u = Math.max(e.u0 - 9, e.u - dt * 1.6);
      const ahead = e.u - u;
      e.holder.visible = ahead > -1.8 && ahead < DRAW_AHEAD;
      if (!e.holder.visible) continue;
      const bob = Math.abs(Math.sin(t * 4.2 + e.ph)) * 0.16;
      TR.map(e.x + Math.sin(t * 1.3 + e.ph) * 0.08, 0.36 + bob, e.u, e.holder.position); TR.quaternion(e.u, e.holder.quaternion); e.holder.rotateY(Math.PI);
      // the fuzzy ball rolls toward her under its eyes, which stay on her, wobbling
      e.body.children[0].rotation.x = -t * 2.5;
      e.body.rotation.set(Math.sin(t * 5.0 + e.ph) * 0.12, 0, Math.sin(t * 2.0 + e.ph) * 0.15);
      e.holder.scale.setScalar(1 - 0.95 * smooth(-0.3, -1.6, ahead));
      if (!running) continue;
      if (Math.abs(ahead) > 0.6) { if (ahead < -1.5) e.hit = false; continue; }
      if (e.hit || Math.abs(m.x - e.x) > 0.48) continue;
      if (m.air && m.yAbs - W.surface(L, m.x, m.z, t) > 0.75) continue;
      e.hit = true; ctx.bumpMascot(m.x >= e.x ? 1 : -1);
    }
    // banners and progress
    const k = sectionAt(u);
    if (running && k !== shown) { shown = k; const s = C.sections[k]; if (s.banner) showBanner(s); }
    if (bannerT > 0) { bannerT -= dt; if (bannerT <= 0) banner.classList.remove('show'); }
    const p = Math.min(1, Math.max(0, (u - C.sections[0].u) / total));
    fill.style.width = `${p * 100}%`; me.style.left = `${p * 100}%`;
    const name = C.sections[k].name; if (name !== lastLbl) { lbl.textContent = name; lastLbl = name; }
    // the finish
    if (running && !complete && u >= C.finish) { complete = true; completeT = 0; ctx.sfx && ctx.sfx('gem'); ctx.finish(); }
    if (complete) { completeT += dt; if (completeT > 1.1 && !done.classList.contains('show')) showComplete(); }
    window.__bwLevel1 = { u: +u.toFixed(2), section: C.sections[k].name, progress: +p.toFixed(4), complete, socks: state.socks, report };
  }
  function reset() {
    if (gemsIn) { for (const g of myGems) { const i = ctx.gemsList.indexOf(g); if (i >= 0) ctx.gemsList.splice(i, 1); } gemsIn = false; }
    for (const g of myGems) { g.live = true; g.pop = -1; g.obj.visible = true; g.obj.scale.setScalar(1); g.obj.position.copy(g.home); }
    for (const b of brushes) { b.hit = false; b.bonk = 0; }
    for (const b of bars) b.hit = false;
    for (const e of enemies) { e.u = e.u0; e.hit = false; }
    shown = -1; complete = false; completeT = 0; bannerT = 0; banner.classList.remove('show'); done.classList.remove('show');
    state.level1Coins0 = undefined;
  }
  // her swimming, drawn on her model only: a stroke rhythm (alternating roll and a forward surge with each stroke), small
  // paddle splashes at her sides, and a stronger lean and turn into each swipe
  let strokeCarry = 0, lastSide = 1;
  const S = C.swim, prnd = mulberry(0x5e1a);
  function swim(m, t, dt, running, surf, fx) {
    if (!LEVEL1_PARTS.swim) return;
    const k = running && !m.air ? Math.min(1, (m.speed || 0) / W.CRUISE) : 0;
    const ph = t * S.rate * Math.PI * 2;
    m.tilt.rotation.z += Math.sin(ph) * S.roll * k + THREE.MathUtils.clamp(-m.xv * S.lean * 0.5, -0.2, 0.2);
    m.tilt.rotation.y += THREE.MathUtils.clamp(m.xv * S.yaw, -0.2, 0.2);
    m.tilt.rotation.x += -Math.max(0, Math.sin(ph * 2)) * 0.05 * k;
    m.squash.position.z = Math.max(0, Math.sin(ph * 2)) * S.surge * k;
    // a paddle splash at the side that strokes
    strokeCarry += dt * S.rate * 2 * k;
    if (strokeCarry >= 1 && fx) {
      strokeCarry -= 1; lastSide = -lastSide;
      for (let i = 0; i < S.splash + 2; i++) fx.emitT(m.x + lastSide * (0.46 + prnd() * 0.1), surf + 0.06, m.z + 0.05 + prnd() * 0.2,
        lastSide * (0.6 + prnd() * 0.9) - m.xv * 0.3, 1.1 + prnd() * 1.2, m.speed * (0.5 + prnd() * 0.3), 0.035 + prnd() * 0.04, 0.35 + prnd() * 0.25, 0);
    }
    if (!running) strokeCarry = 0;
  }
  // (tests only: where the obstacles and socks are now, for the recording's steering)
  if (typeof window !== 'undefined') window.__bwLevel1Plan = () => ({ brushes: brushes.map((b) => [b.u, b.lane]), bars: C.bars.slice(),
    enemies: enemies.map((e) => [+e.u.toFixed(2), e.lane]), socks: C.socks.map(([lane, , u]) => [u, lane]) });
  return { update, reset, swim, report, finished: () => complete };
}
