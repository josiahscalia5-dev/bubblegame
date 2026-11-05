// ?s3=hero (test only): Round 7's dedicated Screen 4 HERO SCENE, a reconstruction of the user's ORIGINAL APPROVED Screen 4
// (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg) as a playable frame.
// Round 7 and everything older are unchanged; nothing here runs without the switch (`hero` also turns round7 on).
//
// Instead of tuning the layered tunnel further, the hero scene is staged from the approved picture itself:
//   - the camera sits on the drum's axis, aimed straight down it (so the gold rim and the whirlpool share one centre, at
//     the approved 52% of the height) and the character sits low, in the foam;
//   - the whirlpool: every surface the camera sees inside the washer (the wall lining AND the water floor) is shaded with
//     the same rings, worked out from the screen radius around the vanishing point (distance from the camera's line of
//     sight divided by the distance ahead). So the rings are true concentric circles round the centre, as in the approved
//     picture, on the walls and on the water alike, instead of hoops on a pipe with a flat floor. The rings flow outward
//     toward the rider (faster with speed); white streaks and sparkles are fixed in the world, so they rush past;
//   - colour by ring and radius, measured from the approved picture: periwinkle just inside the rim, deep cobalt and
//     electric-blue rings with white water through the middle, pale cyan-white and a pastel rainbow ring round a bright
//     white centre (a camera-facing glow);
//   - the rim: round6's porthole, slimmed to the approved thin polished gold band, concentric with the whirlpool;
//   - staging: the collectibles, the two framing brushes and a few hero bubbles placed where the approved picture has them
//     at the hero moment (solved with tools/screen4/hero_probe.cjs); the first two hazard brushes stand further in and
//     slide out of the wall as the rider comes (the approved picture's middle is open water). All still real: coins, the
//     gem and the sock are collectable, the brushes still knock, the controls and power-ups are unchanged.
// Private random numbers only (the game's seeded Math.random is untouched).
import * as THREE from 'three';
import { NOISE } from './shaders.js';
import { buildHeroWater } from './tunnel_r7_hero_water.js';
import { LIQUID_ON, buildLiquid } from './tunnel_r8_liquid.js';   // ?s3=liquid: Round 8's real water (on top of the hero scene)
import { MATCH_ON, MATCH, deepMerge, buildMatch } from './tunnel_r9_match.js';   // ?s3=match: Round 9's art-match pass
import { buildMatchWater } from './tunnel_r9_match_water.js';

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const HERO_ON = LIST.includes('hero') || LIST.includes('liquid') || LIST.includes('splash') || LIST.includes('match');   // ?s3=liquid: the hero scene plus Round 8's water

export const HERO = {
  // merged into ROUND6 after round7's own settings (tunnel_r6.js), so round7 itself is unchanged
  round6: {
    round5: {
      // on the axis, 3 m behind the character, aimed a little up: the vanishing point at 52% of the height
      // measured from the approved picture by the Art Director: the character's dome 42% of the width (so 2.8 m ahead), its
      // top at 69% of the height (the camera at the drum's axis height), the vanishing point at (55.5%, 52%) (aimed 2.3
      // degrees left and 1.7 up), the tunnel's mouth 0.45 of the width round it (6.1 m ahead). Hero moment: 2.85 s.
      camera: { off: [-0.11, 1.08, -2.6], lookY: 1.38, lookX: 0.26, fov: 72 },   // 2.6 m: the character's dome ~0.42 of the width
      bloom: { strength: 0.32, radius: 0.42, threshold: 1.0 },   // soft glow on the whites only (it was lifting the blues to lavender)
    },
    // the approved rim: one slim polished gold band (about 2.5% of the height), no step ring, the blue seal hidden
    // the approved rim (the Art Director's fit): a big ring whose inner edge is a circle 0.86 of the screen width across the
    // top, centred low (left of and below the whirlpool's centre), thick at the right edge; built 2.1 m before the mouth (see
    // HERO.rim) with a lavender collar running back to the tube. Colours in linear light (the face shader's uniforms).
    porthole: { bezel: { inner: 2.5, outer: 2.64, front: -0.12, back: 0.12, round: 0.5 }, step: { hide: true }, face: { inner: 2.6, outer: 14, z: 0.02, dish: 0.3 },
      rimRivets: { size: 0.0001 }, rivets: { radius: 3.3 },
      lavender: [0.1095, 0.1221, 0.552], lilac: [0.2705, 0.2384, 0.6867], shade: [0.0423, 0.0612, 0.3813] },
    hideFoamBubbles: true, hideCrestCards: true,
    inside: [-6.5, -3.8],   // the drum's light and effects fully in by the hero moment (the character 3.3 m before the mouth)
    // the collectibles where the approved picture has them at the hero moment (solved from the hero camera with
    // tools/screen4/hero_probe.cjs PICKS; lanes may be fractional: laneX = (1 - lane) * 0.7). All within reach: the big
    // left coin and the gem from the left lane (the gem with a jump), the small upper-left coin with a jump from the left
    // lane, the small centre coin in the middle lane, the big right coin and the sock from the right lane.
    // [lane, metres along the path (the drum's mouth is at 3.9), count, step, height, arc]; round7's last two lines kept
    layout: { coinLines: [[-0.4, 1.95, 1, 1.0, 1.02, 0], [-1.14, 4.05, 1, 1.0, 1.5, 0], [0.81, 7.3, 1, 1.0, 0.99, 0], [2.29, 1.5, 1, 1.0, 0.45, 0],
      [2, 13.0, 1, 1.0, 0.55, 0], [1, 12.0, 3, 1.0, 0.72, 0]], replace: 3,
      firstSock: [1.97, 2.25, 0.97], extraGem: [-0.76, 5.7, 1.45] },
    // the two framing brushes (decorative, not hazards): the left one on the washer's face in front of the rim, cut by the
    // left edge; the right one just inside the rim at the right edge, at mid height
    // [metres along the path, side (+1 screen-left), angle up from level, scale, radius from the axis]
    r7: { coin: { color: [1.0, 1.1, 0.28], glow: 0.62, lemon: 0.12 }, deco: [[1.15, 1, 31, 0.74, 1.86], [2.6, -1, 2, 1.05, 1.98]] },
  },
  // hazards moved further in (the first pair from 6.0 / 6.7) and brought out of the wall later, so the approved picture's
  // open middle shows at the hero moment; the other four are where they were
  hazards: [[9.4, 1], [10.1, -1], [16.6, -1], [18.8, 1], [26.0, 1], [26.7, -1]],
  emerge: [6.0, 9.0, 1.9],
  // the whirlpool. Radii are fractions of the screen width from the vanishing point (rw); stops: [rw, trough, crest]
  vortex: {
    perLog: 3.0, spiral: 0.5, wobble: 0.5, flow: 0.3, travel: 0.1, arcs: 3.0,
    // colours are sRGB as seen on screen (the approved picture's), converted to the renderer's linear light below: the
    // earlier rounds wrote screen colours straight into linear shaders, which is why their deep blues came out pastel lilac
    // the Art Director's measured bands (approved Screen 4, upper sector), checked against columns sampled through the
    // approved picture: [radius, trough, body (the band's median), crest]
    stops: [
      [0.02, '#e9e6f8', '#f6f4fc', '#ffffff'],   // the pale centre disc (no hot white spot)
      [0.06, '#b4c6f2', '#cfe8fc', '#f2fbff'],   // pale cyan-white
      [0.10, '#d6aef0', '#eccdf5', '#f6f2fb'],   // pastel ring 1, pink-white
      [0.14, '#4072e2', '#6696ed', '#bedbfc'],   // periwinkle blue
      [0.185, '#1a63d8', '#2f80e8', '#a6d6fb'],  // blue
      [0.24, '#7fa6ea', '#cfe2f6', '#f6f9ea'],   // pastel ring 2 (tinted by angle below)
      [0.29, '#2a80ee', '#39b4fb', '#c8f0ff'],   // sky-cyan
      [0.36, '#0955e2', '#1f78f0', '#5aa8f8'],   // the darkest electric blue
      [0.43, '#1c6fe8', '#2d87f4', '#4fb0fa'],   // electric blue
    ],
    ridge: 0.85,      // the thin bright line on each crest
    splash: 1.0,      // irregular white splash strokes along the rings
    caustic: 0.45,    // the cyan-white caustic web over the rings
    droplets: 0.9,    // fine bright droplets
    streaks: 0.6,     // white water streaks along the rings (fixed in the world, rushing past)
    sparkle: 1.0,     // twinkling white sparkles
    rainbow: 0.85, rainbowAt: 0.235, rainbowW: 0.024,   // pastel ring 2's tint by angle: peach top, mint upper left, lilac left, ice-cyan upper right
    below: 0.55,      // below the centre the rings flatten into brighter horizontal flow streaks (measured: white 33%, pale blue 30%)
    floor: 0.92,      // how much of the water floor takes the whirlpool (the rest keeps its own water, foam on top)
  },
  // the rim's place: metres along the path from the drum's mouth, and its centre in the cross-section (sideways, height)
  // (solved from the hero camera: the approved inner circle's centre and top); gold lit from the top right, muted mauve on
  // the left, as measured: lavender bevel outside, a peach-gold core with a cream highlight, a plum shadow inside
  rim: { u: -2.1, centre: [0.14, 0.5], bevel: '#cbabea', gold: '#e9a878', goldHi: '#fff0c8', shadow: '#784463', mauve: '#b68fa0', mauveHi: '#baadd0' },
  // the collar: the drum's lavender front wall from the rim's inner edge back to the tube's mouth (radius 2, on the axis)
  collar: { wall: '#a49ce0', deep: '#7a70c8', lip: '#c4bcf6', edge: '#002ca9' },   // silvery lavender
  // the hero grade (see heroGrade): contrast round mid-grey on luminance, saturation, a soft vignette toward cobalt
  grade: { contrast: 1.08, saturation: 1.16, exposure: 1.0, vignette: 0.28, vignetteCol: '#5a6fd8', in: [-12, -8] },
  // the approved picture's paw coins are bigger than the game's (0.21-0.24 of the width near the edges): the coin's look
  // is scaled up (the pick-up distance is unchanged)
  coinScale: 1.3,
  // the hero bubbles where the approved picture has them at the hero moment: [metres along the path from the mouth,
  // sideways (+ screen-left), height, radius]; glossy soap bubbles drifting slowly up
  bubbles: [[-1.75, -0.72, 2.67, 0.33], [-0.2, -0.17, 2.76, 0.17], [-1.35, 0.95, 2.76, 0.16], [-2.15, -1.29, 2.43, 0.15],
    [-3.2, 0.88, 0.62, 0.15], [-2.9, 0.72, 0.8, 0.1], [-3.0, 0.92, 2.91, 0.13], [0.6, 0.9, 2.2, 0.09], [1.2, -1.0, 2.5, 0.1], [-0.8, 1.2, 1.9, 0.08]],
  // the bright centre: a camera-facing glow this far ahead of the camera on the axis; size as a share of the screen width
  glow: { ahead: 16, size: 0.12, core: 0.45, halo: 0.12, alpha: 0.75 },   // a soft pastel-white disc, no hot spot (as measured)
  // round6/7 objects the hero scene replaces (hidden after their own updaters)
  hide: ['r6Flanges', 'r7Glow', 'r5Heart', 's4Rings'],
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.hero;
  if (tune) for (const k of Object.keys(tune)) HERO[k] = (tune[k] && typeof tune[k] === 'object' && !Array.isArray(tune[k]) && HERO[k]) ? { ...HERO[k], ...tune[k] } : tune[k];
}
if (MATCH_ON) deepMerge(HERO, MATCH.hero);   // ?s3=match: Round 9's settings (tunnel_r9_match.js)

// ---------------------------------------------------------------- the shared whirlpool shading (walls and water)
const f3 = (x) => (+x).toFixed(4);
// a colour for the shaders: an sRGB '#rrggbb' (as on screen; converted to linear light) or a linear [r, g, b]
const v3 = (a) => { const c = typeof a === 'string' ? new THREE.Color(a) : { r: a[0], g: a[1], b: a[2] }; return `vec3(${[c.r, c.g, c.b].map(f3).join(', ')})`; };
function rampCode(stops) {
  // piecewise-linear trough, body and crest colours by screen radius
  let s = `  vec3 tr = ${v3(stops[0][1])}, bd = ${v3(stops[0][2])}, cr = ${v3(stops[0][3])};\n`;
  for (let i = 1; i < stops.length; i++) {
    const [r0] = stops[i - 1], [r1, t1, b1, c1] = stops[i];
    s += `  { float k = smoothstep(${f3(r0)}, ${f3(r1)}, rw); tr = mix(tr, ${v3(t1)}, k); bd = mix(bd, ${v3(b1)}, k); cr = mix(cr, ${v3(c1)}, k); }\n`;
  }
  return s;
}
export function heroVortexGLSL() {
  const V = HERO.vortex;
  return /* glsl */ `
uniform float uHeroTime, uHeroTravel, uHeroTanW;
uniform vec3 uHeroCam;   // the camera in the track frame: sideways x, height above the water, metres along the path
float heroH(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
// cs: the point's place in the tube's cross-section (x, height above the water); u: metres along the path
vec3 heroVortex(vec2 cs, float u, out float rw) {
  vec2 rel = cs - uHeroCam.xy;
  float du = max(u - uHeroCam.z, 0.25);
  rw = length(rel) / du / uHeroTanW;                 // screen radius from the vanishing point, as a share of the width
  float ang = atan(rel.y, rel.x);
  float lr = log(max(rw, 0.003));
  float wob = bwFbm(vec2(ang * 1.7 + uHeroTime * 0.15, lr * 2.6 - uHeroTime * 0.1));
  float s = lr * ${f3(V.perLog)} + ang / 6.2832 * ${f3(V.spiral)} + (wob - 0.5) * ${f3(V.wobble)} - uHeroTime * ${f3(V.flow)} - uHeroTravel * ${f3(V.travel)};
  float k = fract(s), id = floor(s), rnd = heroH(vec2(id, 7.0));
${rampCode(V.stops)}
  // each ring: the band's own colour (its measured median), a narrow deep trough at its edge, a lit crest broken into
  // swirling arcs, and a thin bright ridge on the crest
  float arcs = smoothstep(0.32, 0.78, bwFbm(vec2(ang * ${f3(V.arcs)} + id * 5.3 - uHeroTime * 0.5, s * 1.7)));
  float body = exp(-pow((k - 0.6) / 0.1, 2.0));   // the crest's lit water (kept as 'body' for the streaks below)
  float trough = 1.0 - smoothstep(0.0, 0.2, k) + smoothstep(0.88, 1.0, k);
  vec3 col = mix(bd, tr, clamp(trough, 0.0, 1.0) * (0.7 + 0.3 * rnd));
  col = mix(col, cr, body * (0.35 + 0.65 * arcs));
  float ridge = exp(-pow((k - 0.62) / 0.045, 2.0));
  col = mix(col, vec3(1.0), clamp(ridge * (0.2 + 0.8 * arcs) * ${f3(V.ridge)} * smoothstep(0.03, 0.12, rw), 0.0, 1.0));
  // a crisp cyan line along each ring's crest (the approved rings' glossy edges)
  col = mix(col, ${v3('#3fc4ff')}, exp(-pow((k - 0.78) / 0.025, 2.0)) * 0.7 * smoothstep(0.12, 0.25, rw));
  // irregular white splash strokes along the rings (stretched round them, of all lengths), drawn inward with the rings
  float ringPh = lr * ${f3(V.perLog)} - uHeroTime * ${f3(V.flow)} - uHeroTravel * ${f3(V.travel)};
  float sp1 = bwFbm(vec2(ang * 3.2 + id * 3.1, ringPh * 11.0));            // long strokes round the rings, thin across them
  float sp2 = bwNoise(vec2(ang * 9.0 - id * 1.7, ringPh * 3.0));
  float splash = smoothstep(0.62, 0.74, sp1) * smoothstep(0.3, 0.65, sp2) * smoothstep(0.08, 0.16, rw) * (1.0 - smoothstep(0.44, 0.5, rw));
  col = mix(col, ${v3('#bfe9ff')}, clamp(smoothstep(0.52, 0.66, sp1) * smoothstep(0.3, 0.65, sp2) * 0.35 * smoothstep(0.08, 0.16, rw), 0.0, 1.0));   // a soft glow round them
  col = mix(col, vec3(1.0), clamp(splash * ${f3(V.splash)}, 0.0, 1.0));
  // white water streaks, fixed in the world and flowing toward the rider: short dashes round the rings
  vec2 sg = vec2(ang * 14.0, u * 1.6 + uHeroTime * 2.2), sc = floor(sg);
  float sh = heroH(sc + 3.0) + 0.25 * smoothstep(0.1, 0.4, rw) * step(0.0, rel.y) * (1.0 - smoothstep(0.42, 0.5, rw)), sh2 = heroH(sc + 17.0);
  vec2 sq = fract(sg) - vec2(0.5, 0.25 + 0.5 * sh2);
  float streak = (1.0 - smoothstep(0.18, 0.46, abs(sq.x))) * (1.0 - smoothstep(0.04, 0.12, abs(sq.y))) * step(0.62, sh);
  col = mix(col, vec3(1.0), clamp(streak * (0.35 + 0.65 * body) * ${f3(V.streaks)} * smoothstep(0.06, 0.2, rw), 0.0, 1.0));
  // water caustics: a web of cyan-white light playing over the rings (the approved rings read as water, not paint)
  vec2 cv = bwVoronoi(vec2(ang * 5.0 + uHeroTime * 0.25, ringPh * 2.6));
  float caus = (1.0 - smoothstep(0.0, 0.08, cv.y - cv.x)) * smoothstep(0.1, 0.2, rw) * (1.0 - smoothstep(0.44, 0.5, rw));
  col = mix(col, ${v3('#c9f2ff')}, clamp(caus * ${f3(V.caustic)} * (0.25 + 0.75 * body), 0.0, 1.0));   // on the lit crests
  // fine droplets: small bright points with a soft cyan glow, thickest above the centre
  vec2 dg = vec2(ang * 40.0, ringPh * 16.0), dc = floor(dg);
  float dh = heroH(dc + 71.0), dd = length(fract(dg) - 0.5);
  float drop = step(0.86, dh) * (1.0 - smoothstep(0.08, 0.22, dd)) * smoothstep(0.08, 0.16, rw) * (1.0 - smoothstep(0.44, 0.5, rw));
  col = mix(col, vec3(1.0), clamp(drop * ${f3(V.droplets)} * (0.7 + 0.6 * step(0.0, rel.y)), 0.0, 1.0));
  col = mix(col, ${v3('#9fe6ff')}, clamp(step(0.86, dh) * (1.0 - smoothstep(0.2, 0.5, dd)) * 0.3 * ${f3(V.droplets)} * smoothstep(0.08, 0.16, rw), 0.0, 1.0));
  // twinkling sparkles
  vec2 pg = vec2(ang * 24.0, u * 4.0 + uHeroTime * 1.4), pc = floor(pg);
  float ph = heroH(pc + 41.0);
  float sp = step(0.9, ph) * (1.0 - smoothstep(0.0, 0.3, length(fract(pg) - 0.5))) * (0.55 + 0.45 * sin(uHeroTime * 6.0 + ph * 50.0));
  col += vec3(1.0) * sp * ${f3(V.sparkle)};
  // pastel ring 2, tinted by angle (ang: 0 = screen right in the camera's view, up positive): peach at the top, mint
  // upper left, lilac left, ice-cyan upper right
  float up = clamp(rel.y / max(length(rel), 1e-3), -1.0, 1.0), right = -rel.x / max(length(rel), 1e-3);
  vec3 tint = mix(${v3('#b98cf0')}, ${v3('#8fdcf6')}, smoothstep(-0.6, 0.6, right));
  tint = mix(tint, ${v3('#ffc27a')}, smoothstep(0.5, 0.95, up));                                   // warm peach-gold at the top
  tint = mix(tint, ${v3('#f59ad8')}, smoothstep(0.1, 0.6, up) * smoothstep(0.0, 0.6, -right) * 0.8);   // pink upper left
  tint = mix(tint, vec3(1.0), 0.18);
  col = mix(col, tint, ${f3(V.rainbow)} * exp(-pow((rw - ${f3(V.rainbowAt)}) / ${f3(V.rainbowW)}, 2.0)));
  // below the centre: brighter, flatter horizontal flow streaks of white and pale blue water
  float low = smoothstep(0.1, 0.7, -up) * smoothstep(0.04, 0.12, rw);
  float flowS = smoothstep(0.45, 0.85, bwFbm(vec2(rel.x / du * 9.0 + uHeroTime * 0.4, lr * 7.0 - uHeroTime * 1.6)));
  col = mix(col, mix(${v3('#a7d3f6')}, vec3(1.0), flowS), low * ${f3(V.below)} * (0.45 + 0.55 * flowS));
  return col;
}
`;
}

const LINING_VERTEX = /* glsl */ `
attribute vec2 aAU; varying vec2 vAU;
void main() { vAU = aAU; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;
function liningFragment(radius, axisH, lav) {
  return /* glsl */ `
${NOISE}
${heroVortexGLSL()}
uniform float uStart; varying vec2 vAU;
void main() {
  float a = vAU.x, u = vAU.y, rw;
  vec3 col = heroVortex(vec2(cos(a) * ${f3(radius)}, ${f3(axisH)} + sin(a) * ${f3(radius)}), u, rw);
  col = mix(col, ${v3(HERO.collar.edge)}, exp(-pow((u - uStart - 0.1) / 0.07, 2.0)) * 0.9);   // the thin navy edge of the mouth
  col = mix(col, ${v3(lav)}, 1.0 - smoothstep(uStart - 0.06, uStart + 0.06, u));   // the washer's lavender shell before the mouth
  gl_FragColor = vec4(col, 1.0);
}
`;
}

// ---------------------------------------------------------------- build
export function buildHero({ scene, TR, L, W, mascot, updaters, time, waterSheets, drumSheet, fogAnchor }) {
  const TS = L.tunnelStart, axisH = W.WATER + W.AXIS_H, report = {};
  const camera = { pos: new THREE.Vector3(), ok: false };
  const U = { uHeroTime: time, uHeroTravel: { value: 0 }, uHeroTanW: { value: 0.7265 }, uHeroCam: { value: new THREE.Vector3(0, axisH, TS - 6) } };
  // the camera in the track frame, worked out just before each picture is drawn (so every surface uses this frame's camera)
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() }, rel = new THREE.Vector3();
  const prev = scene.onBeforeRender;
  scene.onBeforeRender = function (renderer, sc, cam, rt) {
    if (prev) prev.call(this, renderer, sc, cam, rt);
    if (!cam || !cam.isPerspectiveCamera) return;
    let u = U.uHeroCam.value.z;
    if (!camera.ok || Math.abs(u - mascot.z) > 12) u = mascot.z - 3;
    for (let i = 0; i < 2; i++) { TR.frame(u, F); rel.copy(cam.position).sub(F.P); u += rel.dot(F.T); }
    TR.frame(u, F); rel.copy(cam.position).sub(F.P);
    U.uHeroCam.value.set(rel.dot(F.R), rel.dot(F.U), u); camera.ok = true;
    U.uHeroTanW.value = 2 * Math.tan(THREE.MathUtils.degToRad(cam.fov) / 2) * cam.aspect;
  };
  updaters.push(() => { U.uHeroTravel.value = mascot.z; });

  // 1. the whirlpool on the wall lining (round4's tube, restyled by round5 and round6)
  const wall = scene.getObjectByName('r6Walls') || scene.getObjectByName('r5Vortex') || scene.getObjectByName('r4Lining');
  if (wall) {
    const lin = (typeof window !== 'undefined' && window.__BW_HERO_LINING__) || { radius: 2.0 };
    wall.material = new THREE.ShaderMaterial({ uniforms: { ...U, uStart: { value: TS } }, vertexShader: LINING_VERTEX,
      fragmentShader: liningFragment(lin.radius, axisH, '#c4b8f0'), side: THREE.DoubleSide });
    wall.name = 'heroWalls'; report.walls = true;
  }

  // 2. the same whirlpool on the water floor (the drum's sheet and the slide's last metres before the mouth)
  const floorCode = (factor) => `  {   // ?s3=hero: the whirlpool on the water (concentric with the walls' rings)
    float hrw; vec3 hv = heroVortex(vec2(xz.x, vWorld.y * 0.0 + ${f3(W.WATER)}), xz.y, hrw);
    float hk = (${factor}) * ${f3(HERO.vortex.floor)} * (1.0 - smoothstep(0.35, 0.8, foam));
    lit = mix(lit, hv * (0.92 + 0.12 * NdotL), hk);
  }
`;
  const sheets = [];
  for (const mesh of (waterSheets || [])) {
    const m = mesh.material;
    if (!m || !m.fragmentShader || !m.fragmentShader.includes(fogAnchor) || !m.fragmentShader.includes('vec3 lit')) continue;
    const factor = mesh === drumSheet ? 'inDrum' : `smoothstep(${(TS - 9).toFixed(2)}, ${(TS - 5).toFixed(2)}, xz.y)`;
    Object.assign(m.uniforms, U);
    m.fragmentShader = m.fragmentShader.replace(fogAnchor, floorCode(factor) + fogAnchor)
      .replace('void main() {', heroVortexGLSL() + '\nvoid main() {');
    m.needsUpdate = true; sheets.push(mesh === drumSheet ? 'drum' : 'slide');
  }
  report.floor = sheets;

  // 3. the rim and the collar
  report.rim = heroRim({ scene, TR, TS, axisH, time, U });

  // 4. the bright centre
  report.glow = heroGlow({ scene, TR, L, mascot, updaters, time, axisH, U });

  // 5. the hero bubbles
  report.bubbles = heroBubbles({ scene, TR, TS, mascot, updaters, time });

  // 6. the water and foam round the character (the Water & VFX specialist's file, tunnel_r7_hero_water.js)
  report.water = buildHeroWater({ scene, TR, L, W, mascot, updaters, time, U, heroVortexGLSL, waterSheets, drumSheet, fogAnchor });
  if (LIQUID_ON) report.liquid = buildLiquid({ scene, TR, L, W, mascot, updaters, time, U, HERO, waterSheets, drumSheet });   // ?s3=liquid (tunnel_r8_liquid.js)
  if (MATCH_ON) {   // ?s3=match: Round 9 (tunnel_r9_match.js: Tunnel & Lighting; tunnel_r9_match_water.js: Water & VFX)
    report.match = buildMatch({ scene, TR, L, W, mascot, updaters, time, U, HERO, waterSheets, drumSheet });
    report.matchWater = buildMatchWater({ scene, TR, L, W, mascot, updaters, time, U, HERO, waterSheets, drumSheet });
  }

  // 7. what the hero scene replaces
  const hidden = HERO.hide.map((n) => scene.getObjectByName(n)).filter(Boolean);
  updaters.push(() => { for (const o of hidden) o.visible = false; });
  report.hidden = hidden.map((o) => o.name);
  return report;
}

// ---------------------------------------------------------------- the hero grade
// The drum's grade (tunnel_s4.js round2Light, plus the base grade and the Screen 3 opening's) turned saturated blues lavender:
// its saturation and contrast steps work on linear light and push pure blues below zero, the opening's vibrance step then
// reads them as over-saturated and mixes them back toward grey, and a lavender vignette and a peach light are added on top.
// Measured on a ring pixel: #045ee7 before the grade, #645cf3 after. The hero scene is painted in its target colours, so
// its grade only keeps them: luminance contrast round mid-grey (hue kept), a little saturation without negatives, a soft
// cobalt vignette. It replaces the others while the hero scene is on (uHero, faded in before the hero moment).
export function heroGrade({ grade, mascot, updaters, L }) {
  if (!grade || !grade.material.fragmentShader.includes('void main() {')) return null;
  const G = HERO.grade;
  grade.uniforms.uHero = { value: 0 };
  grade.material.fragmentShader = grade.material.fragmentShader
    .replace('uniform sampler2D tDiffuse;', 'uniform sampler2D tDiffuse; uniform float uHero;')
    .replace(/gl_FragColor = max\(c, 0\.0\);\s*}\s*$/, `if (uHero > 0.0) {   // ?s3=hero: the hero grade (tunnel_r7_hero.js)
        vec3 h = max(texture2D(tDiffuse, vUv).rgb, 0.0);
        float L0 = dot(h, vec3(0.2126, 0.7152, 0.0722));
        h *= pow(max(L0, 1e-4) / 0.18, ${f3(G.contrast - 1)}) * ${f3(G.exposure)};
        float L1 = dot(h, vec3(0.2126, 0.7152, 0.0722));
        h = max(L1 + (h - L1) * ${f3(G.saturation)}, 0.0);
        vec2 hv = vUv - 0.5; hv.x *= 0.6;
        h *= mix(vec3(1.0), ${v3(G.vignetteCol)}, smoothstep(0.42, 0.85, length(hv)) * ${f3(G.vignette)});
        c.rgb = mix(c.rgb, h, uHero);
      }
      gl_FragColor = max(c, 0.0);
    }`);
  grade.material.needsUpdate = true;
  const ok = grade.material.fragmentShader.includes('?s3=hero: the hero grade');
  const TS = L.tunnelStart;
  updaters.push(() => { grade.uniforms.uHero.value = THREE.MathUtils.smoothstep(mascot.z, TS + G.in[0], TS + G.in[1]) * (1 - THREE.MathUtils.smoothstep(mascot.z, L.tunnelEnd - 2, L.tunnelEnd + 4)); });
  return { ok, ...G };
}

// ---------------------------------------------------------------- the rim and the lavender collar
function heroRim({ scene, TR, TS, axisH, time, U }) {
  const P = HERO.rim, C = HERO.collar, g = scene.getObjectByName('r6Porthole');
  if (!g) return null;
  // move round6's porthole (built with the hero's sizes) to the rim's place: P.u from the mouth, centred at P.centre
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  TR.frame(TS + P.u, F);
  const m = new THREE.Matrix4().makeBasis(F.R, F.U, F.T); m.setPosition(F.P.clone().addScaledVector(F.R, P.centre[0]).addScaledVector(F.U, P.centre[1]));
  g.position.set(0, 0, 0); g.quaternion.identity(); g.scale.set(1, 1, 1); g.updateMatrix(); g.applyMatrix4(m); g.updateMatrixWorld(true);
  const bezel = g.getObjectByName('r6Bezel'), B = HERO.round6.porthole.bezel;
  // the seal and the step ring sat inside the old, smaller rim; inside this one they would float in the opening
  for (const o of g.children) if (o !== bezel && o.name !== 'r6Face' && !o.isInstancedMesh) o.visible = false;
  if (bezel) bezel.material = new THREE.ShaderMaterial({ uniforms: { uTime: time }, side: THREE.DoubleSide,
    vertexShader: /* glsl */ `varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() { vL = position; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `uniform float uTime; varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() {
  float r = length(vL.xy), t = clamp((r - ${f3(B.inner)}) / ${f3(B.outer - B.inner)}, 0.0, 1.0);   // 0 inner edge, 1 outer
  vec2 d = vL.xy / max(r, 1e-3);           // local +x is screen-left: right = -d.x
  float right = -d.x, up = d.y;
  float goldK = clamp(smoothstep(0.3, 0.8, up) + smoothstep(-0.05, 0.55, right) * smoothstep(-0.5, 0.2, up), 0.0, 1.0);   // gold across the top and the right, mauve low on the left
  vec3 core = mix(${v3(P.mauve)}, ${v3(P.gold)}, goldK);
  vec3 hi = mix(${v3(P.mauveHi)}, ${v3(P.goldHi)}, goldK);
  vec3 col = mix(${v3(P.shadow)}, core, smoothstep(0.0, 0.16, t));                 // a thin plum shadow on the inner edge
  col = mix(col, hi, exp(-pow((t - 0.5) / 0.1, 2.0)) * (0.35 + 0.65 * goldK));      // the polished highlight
  col = mix(col, ${v3(P.bevel)}, smoothstep(0.7, 0.95, t));                          // the lavender bevel outside
  float glint = pow(max(0.0, sin(atan(d.y, d.x) * 3.0 + uTime * 0.6)), 24.0) * goldK * exp(-pow((t - 0.5) / 0.12, 2.0));
  gl_FragColor = vec4(col + vec3(1.0, 0.95, 0.8) * glint * 0.6, 1.0);
}` });
  // the collar: a loft from the rim's inner edge (centred low) back to the tube's mouth (radius 2 on the axis)
  const rows = 24, cols = 128, pos = [], at = [], xhu = [], idx = [], v = new THREE.Vector3();
  const u0 = TS + P.u - 0.05, u1 = TS + 0.06, R0 = B.inner - 0.03, R1 = 2.02;
  for (let j = 0; j <= rows; j++) {
    const t = j / rows, e = t * t * (3 - 2 * t), u = u0 + (u1 - u0) * t;
    const cx = P.centre[0] * (1 - e), cy = P.centre[1] + (axisH - P.centre[1]) * e, R = R0 + (R1 - R0) * e;
    for (let i = 0; i <= cols; i++) {
      const a = i / cols * Math.PI * 2;
      TR.map(cx + Math.cos(a) * R, cy + Math.sin(a) * R, u, v); pos.push(v.x, v.y, v.z); at.push(t, a); xhu.push(cx + Math.cos(a) * R, cy + Math.sin(a) * R, u);
      if (i < cols && j < rows) { const q = j * (cols + 1) + i; idx.push(q, q + cols + 1, q + 1, q + 1, q + cols + 1, q + cols + 2); }
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('aTA', new THREE.Float32BufferAttribute(at, 2)); geo.setAttribute('aXHU', new THREE.Float32BufferAttribute(xhu, 3)); geo.setIndex(idx);
  const collar = new THREE.Mesh(geo, new THREE.ShaderMaterial({ uniforms: { ...U, uTime: time }, side: THREE.DoubleSide,
    vertexShader: /* glsl */ `attribute vec2 aTA; attribute vec3 aXHU; varying vec2 vTA; varying vec3 vXHU;
void main() { vTA = aTA; vXHU = aXHU; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `${NOISE}
${heroVortexGLSL()}
uniform float uTime; varying vec2 vTA; varying vec3 vXHU;
void main() {
  float t = vTA.x, a = vTA.y, up = sin(a), right = -cos(a);
  vec3 col = mix(${v3(C.deep)}, ${v3(C.wall)}, 0.55 + 0.45 * up);
  col *= 0.9 + 0.1 * bwNoise(vec2(a * 30.0, t * 4.0));                         // brushed metal
  col = mix(col, ${v3(C.lip)}, smoothstep(0.8, 0.95, t));                      // the pale lip just before the mouth
  col += ${v3('#5fa8ff')} * smoothstep(0.55, 1.0, t) * 0.18;                   // blue light from the tunnel
  col += ${v3('#ffb0c8')} * smoothstep(0.2, 0.9, right) * smoothstep(0.0, 0.8, up) * (1.0 - t) * 0.12;   // warm light, top right
  // only the top arc is the washer's lavender wall (as in the approved picture); round the sides and below, the
  // whirlpool's water runs on out to the rim
  float rw; vec3 water = heroVortex(vXHU.xy, vXHU.z, rw);
  col = mix(water, col, smoothstep(0.3, 0.62, up));
  gl_FragColor = vec4(col, 1.0);
}` }));
  collar.name = 'heroCollar'; collar.frustumCulled = false; scene.add(collar);
  return { u: P.u, centre: P.centre, inner: B.inner, outer: B.outer };
}

// ---------------------------------------------------------------- the hero bubbles
// Glossy soap bubbles where the approved picture has them: a milky clear body, a bright thick rim, a soft rainbow film
// and a white highlight, drifting slowly up and wobbling. One draw call (instanced).
function heroBubbles({ scene, TR, TS, mascot, updaters, time }) {
  const list = HERO.bubbles, n = list.length, sphere = new THREE.SphereGeometry(1, 32, 20);
  const g = new THREE.InstancedBufferGeometry();
  g.index = sphere.index; g.setAttribute('position', sphere.attributes.position); g.setAttribute('normal', sphere.attributes.normal);
  const inst = new Float32Array(n * 4), v = new THREE.Vector3();
  list.forEach(([u, x, h, r], i) => { TR.map(x, h, TS + u, v); inst.set([v.x, v.y, v.z, r], i * 4); });
  g.setAttribute('inst', new THREE.InstancedBufferAttribute(inst, 4)); g.instanceCount = n;
  const mat = new THREE.ShaderMaterial({ uniforms: { uTime: time }, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    vertexShader: /* glsl */ `attribute vec4 inst; uniform float uTime; varying vec3 vN; varying vec3 vV; varying float vSeed;
void main() {
  vSeed = fract(inst.x * 3.1 + inst.z * 7.7);
  vec3 c = inst.xyz + vec3(sin(uTime * 0.9 + vSeed * 6.0) * 0.04, mod(uTime * 0.12 + vSeed, 1.0) * 0.3 - 0.15, 0.0);
  vec3 p = position * inst.w * (1.0 + 0.03 * sin(uTime * 3.0 + vSeed * 9.0 + position.y * 3.0));
  vec4 w = modelMatrix * vec4(c + p, 1.0); vN = normalize(position); vV = normalize(cameraPosition - w.xyz);
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
    fragmentShader: /* glsl */ `uniform float uTime; varying vec3 vN; varying vec3 vV; varying float vSeed;
void main() {
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float rim = pow(f, 3.0), body = 0.06 + 0.1 * pow(f, 1.5);
  vec3 film = 0.6 + 0.4 * cos(6.2832 * (f * 1.4 + vN.y * 0.4 + vec3(0.0, 0.33, 0.67) + uTime * 0.05 + vSeed));
  vec3 col = vec3(0.92, 0.97, 1.0) * body + mix(vec3(1.0), film, 0.55) * rim * 0.9;
  vec3 L = normalize(vec3(-0.45, 0.6, 0.65));
  float spec = pow(max(dot(reflect(-L, normalize(vN)), vV), 0.0), 40.0);
  float a = clamp(body + rim * 0.85 + spec, 0.0, 1.0);
  gl_FragColor = vec4(col + vec3(1.0) * spec * 1.2, a);
}` });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'heroBubbles'; mesh.frustumCulled = false; mesh.renderOrder = 6;
  scene.add(mesh);
  updaters.push(() => { mesh.visible = mascot.z > TS - 9 && mascot.z < TS + 6; });
  return { count: n };
}

// ---------------------------------------------------------------- the bright centre of the whirlpool
function heroGlow({ scene, TR, L, mascot, updaters, time, axisH, U }) {
  const P = HERO.glow;
  const u = { uTime: time, uCore: { value: P.core }, uHalo: { value: P.halo }, uAlpha: { value: P.alpha } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, transparent: true, depthWrite: false, depthTest: true,
    vertexShader: /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
uniform float uTime, uCore, uHalo, uAlpha; varying vec2 vUv;
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p), a = atan(p.y, p.x);
  float core = exp(-r * r / 0.03);
  float halo = exp(-r * r / 0.28);
  float rays = (0.6 + 0.4 * sin(a * 7.0 + uTime * 0.8)) * exp(-r * 3.0);
  vec3 col = vec3(1.0, 0.99, 0.96) * core * uCore + vec3(0.82, 0.93, 1.0) * halo * uHalo + vec3(1.0, 0.96, 1.0) * rays * 0.25;
  float al = clamp(core * uCore + halo * uHalo * 0.8 + rays * 0.2, 0.0, 1.0) * (1.0 - smoothstep(0.75, 1.0, r)) * uAlpha;
  gl_FragColor = vec4(min(col, vec3(1.25)), al);
}` });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat); mesh.name = 'heroGlow'; mesh.frustumCulled = false; mesh.renderOrder = 3;
  mesh.onBeforeRender = (r, s, cam) => {
    // on the axis, a fixed distance ahead of the camera; sized as a share of the screen width
    const at = Math.min(U.uHeroCam.value.z + P.ahead, L.tunnelEnd + 2);
    TR.frame(at, F2); mesh.position.copy(F2.P).addScaledVector(F2.U, axisH);
    const d = mesh.position.distanceTo(cam.position);
    mesh.scale.setScalar(P.size * U.uHeroTanW.value * d * 0.5 / 0.5);
    mesh.quaternion.copy(cam.quaternion); mesh.updateMatrixWorld();
  };
  const F2 = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  scene.add(mesh);
  updaters.push(() => { mesh.visible = mascot.z > L.tunnelStart - 7 && mascot.z < L.tunnelEnd - 2; });
  return { ahead: P.ahead, size: P.size };
}
