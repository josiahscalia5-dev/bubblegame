// arch56 (9 November 2026, session d847dce2): THE APPROVED SCENE 5 / SCENE 6 ARCHITECTURE in the live game, on top of s56 (`?s3=...,s56,arch56`).
// Targets (the user's reference pack of 9 November, the ONLY targets): Design/ReferencePacks/2026-11-09_Scenes5_6_Approved_Visual_Reference_Pack_from_user/
// 02_APPROVED_SCENE_5.png, 03_APPROVED_SCENE_6.png and the crops 04-08. Lane arch56 (Tools/lanes.json) owns this file; s56_tunnel.js calls it
// (coordinator hook, section 0) and skips the sections it replaces. Real 3D only (no painted backgrounds); gameplay is game.js's own, untouched.
// Private random numbers only: every three.js object here is made with Math.random swapped for a private generator (three.js draws each new
// object's UUID from Math.random), so the game's seeded sequence is not consumed by this pass.
//
// The layout is solved from measurements of approved Scene 5 at 864x1536 (fractions of the frame) against the game's Tap to Start camera
// (s56: 3.0 m behind him, 0.92 m above the water, vertical fov 66, so f ~ 1183 px):
//   - the near arch is a circle of radius ~412 px round the vanishing point (0.50, 0.49): the camera is ON the drum's axis, so the drum's axis
//     is at the camera's height (0.95 m above the water; s56's 1.5 m centred every ring above the vanishing point);
//   - the near-left pink housing's inner face at x 0.16 W, its cap top 0.41 H, its paw medallion (0.10, 0.59); the near-right housing from 0.87 W:
//     housings ~4.8 m ahead of the camera with their inner faces at 1.23 m (the lanes are +/-0.7 m and his half-width 0.45 m, so |x| < 1.2 m
//     stays clear up to his jump's top, 1.9 m above the water);
//   - the violet glass chambers (0.18, 0.41), (0.30, 0.44), ... receding on the left; the cobalt gear's hub at (0.87, 0.465), radius ~160 px;
//   - the amber lamp (0.50, 0.255) hanging under the crown; a thick brass pipe (~0.25 m) from it to the right and down (elbow ~(0.73, 0.33));
//     warm light strips at +/-41 degrees on the near arch.
// In Level 1's wider sections (flow: the raised side path u 62-91 at x 1.22-2.02, the drop's lanes at +/-1.38 m for u 100-142) the drum and the
// banks move outward with level1_flow.js's own widen(), and the modules stand on the drop's raised ledges (ledgeLift): no route is blocked.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { widen as flowWiden, ledgeLift } from './level1_flow.js';
import { BRUSH6_ON, BRUSH6 } from './s56_brush6.js';   // (ddf175f2) read only: where lane brush6's roller brushes stand (their bays keep low modules)

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const ARCH56_ON = LIST.includes('arch56') && LIST.includes('s56') && LIST.includes('level1');
const FLOW = LIST.includes('level1') && !LIST.includes('nowet') && !LIST.includes('noflow');

// every number (window.__bwArch56 in the browser; read at build time)
export const ARCH56 = {
  A: 0.84,              // the drum's axis above the water (= the camera's height: the rings are concentric with the vanishing point)
  R: 2.55,              // the drum's wall radius (the rings stand 0.32 m proud of it)
  chunk: 30,
  // the rings: ring 0 is 6.4 m ahead of the camera at Tap to Start (the near arch, radius ~412 px) and ring 55 the same at u 206 (Scene 6)
  ring: { u0: 5.0, step: 3.768, band: 0.16, z: 1.1, strips: [-0.72, 0.72], topStrip: true },
  lampEvery: 5,         // a hanging lamp (and its thick pipe down the right wall) on every fifth ring: rings 0 and 55 (Scenes 5 and 6)
  mod: { off: -1.6, aEvery: 5 },   // the modules of ring k stand at its u + off on both banks; every fifth the tall housing (A), else a model bay (M; B with ,notm)
  gearK: [0, 7, 14, 21, 28, 35, 42, 49, 56, 63],   // rings with the cobalt gear on the right wall (dz behind the ring)
  // (session 47f75e22, the user's Scene 6 mandate) the user's Tripo cobalt gear blue_jt (mobile LOD1), d 1.4 m, its axle turned to the oncoming
  // camera and 20 degrees out to the wall: at u 206 (ring 56) it stands ~8.3 m ahead, centre ~(0.78, 0.39), d ~0.20 W, behind the right chamber
  // as in approved Scene 6 (the art director: centre (0.807, 0.392), ~0.24 W); ring 0 has its own place for Scene 5 (gear0: centre ~(0.815, 0.44), d ~0.23 W)
  gear: { d: 1.42, x: 1.92, h: 1.75, dz: -1.85, out: 0.35, spin: 0.45 },   // (inner edge x - d/2 = 1.21 m: the lanes stay clear)
  gear0: { d: 1.35, x: 1.88, h: 1.25, dz: 1.6, out: 0.35 },
  pipe: { r: 0.12, x: 1.38 },
  // (session 47f75e22) the user's Tripo models in every bay that is not a tall housing (A): left the Machinery cluster (control box with two
  // screen eyes, glass chamber, pink paw housing, railings, brass elbow), right a pink star housing with the violet glass chamber 913_914 on its
  // near outer corner. h = drawn height (m), inner = the clear distance from the track centre (lanes +/-0.7, his half-width 0.45), ang = the
  // front turned toward the oncoming camera (rad), dz = along the run from the bay's centre. LOD1 near him, LOD2 further on (per chunk).
  // (the art director's measure, approved Scene 6: the machine tops, with their brass elbows, reach y 0.26-0.30 -> ~2.4 m tall)
  // (the R 2.55 drum is only ~1.2 m deep beside the lanes: the Machinery's depth is squashed by sx so its tall front stays inside the wall)
  tm: {
    mach: { h: 2.7, sx: 0.6, inner: 1.25, ang: 0.25, dz: -0.9, y: -0.08 },
    star: { r: 0.62, zs: 1.55, h: 1.05, inner: 1.25, dz: 0.0 },
    ch: { h: 1.15, x: 2.05, y: 1.08, dz: -0.95, ang: 0.55 },
    near: 22,   // metres ahead of him drawn with LOD1
  },
  // the camera: null = s56's own (S56.cam). (session 47f75e22) the coordinator's call: keep it (his width and the vanishing point already match;
  // his height in the water is the water lane's S56.hero.sink). Set { off, look, fov } (track frame, from his ride height) to own the framing.
  cam: null,
  ungrade: 1.0,   // how much of the base grade the lit arch56 materials undo past the old drum (see UNGRADE)
  hideDecoBrushes: true,   // the old drum's high decorative wall brushes (s4Brush with hazard false: they never collide) cover the gear and the crown
  // (session ddf175f2, the user's URGENT Scene 6 mandate: the COMPLETE approved environment, big structure first) past `from` the drum widens to
  // R6 (the approved Scene 6 machinery stands ~2.9 m tall inside it: with R 2.55 its tank tops would cut the wall) and every bay between two
  // arches holds the approved Scene 6 modules: left (L) a pink oval cabinet with a gold paw medallion, a lavender deck and a gold railing, a
  // tall violet glowing glass tank on a pedestal, a lavender control box with two glowing bulbs over a panel with a yellow and a teal light,
  // a gold elbow pipe from the box over into the tank's dome; right (Rt) a violet glowing tank nearest the camera, then a pink oval drum
  // housing with two big gold stars and a railing on its deck. Laid out with the live camera at u 206 (tools/arch56/proj6.js, camfit.py,
  // inv.py) against TARGETS.md. The arches beyond `from` are shifted by `shift` (the near arch's lamp bars land on the approved's) and carry
  // big capsule lamp bars at +-bar.a and smaller dashes; the hanging lamp is the approved's size and height, its pipe ends above the gear.
  // `,noarch6` = arch56 exactly as before this pass.
  s6: {
    from: 30, ramp: 10, R: 3.0, shift: 0.5, off: -1.884,
    bar: { a: 0.68, len: 0.78, r: 0.075 }, dash: { a: [-1.08, -0.32, 0.32, 1.08], len: 0.42, r: 0.05 },
    lamp: { y: 2.57, z: 0.0 },   // the lamp's top under the crown (axis frame) and its z behind the ring
    lampPipe: [[-0.17, 2.4, 0], [-0.95, 1.8, 0], [-1.3, 1.45, 0], [-1.3, 1.45, 1.3]],   // axis frame (y from the axis), from the bell
    gear: { dz: -2.35, h: 1.95 },
    L: { cab: { x: 1.95, rx: 0.65, rz: 1.62, top: 1.05, z: 0.0 }, paw: { ang: 0.62, y: 0.55, r: 0.24 },
      tank: { x: 1.56, z: 0.1, ped: 1.6, rg: 0.31, hg: 0.82 }, box: { x: 2.0, z: -0.65, y0: 1.62, w: 0.56, h: 0.56, d: 0.44, ang: 0.45 },
      panel: { y: 1.62, h: 0.42 } },
    Rt: { cab: { x: 2.15, rx: 0.62, rz: 1.15, top: 1.2, z: 0.45 }, tank: { x: 2.12, z: -1.45, ped: 1.36, rg: 0.33, hg: 0.68 } },
    // (ddf175f2, the coordinator's relay of the user's directive: MODELED assets as the main machinery) the user's Tripo housings 911 / 912
    // (alternating) as the left bank's main module, large; the procedural glowing tank stands behind each (mtank); on the right the user's
    // 913_914 glass chamber (glowing) on the star drum's pedestal with the user's gold_jj elbow on top. Colour: violet -> the approved hot pink.
    M: { h: 2.85, sx: 0.62, inner: 1.25, ang: 0.32, dz: -0.35, y: -0.1, pink: 1.0, gold: 1.0 },
    mtank: { x: 1.62, z: 1.42, ped: 1.55, rg: 0.3, hg: 0.85 },
    ch6: { h: 1.5, ped: 1.0, ang: 0.5, glow: [0.15, -0.02, 0.0] }, jj: { k: 0.62, up: 0.0 },
  },
};
const NOTM = LIST.includes('notm');   // ,arch56,notm: the procedural modules (B) instead of the user's models
const S6 = !LIST.includes('noarch6');   // (session ddf175f2) the Scene 6 pass (see ARCH56.s6); ,noarch6 = before it
if (ARCH56_ON && typeof window !== 'undefined') window.__bwArch56 = ARCH56;

function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const f = (v) => (Number.isInteger(v) ? v.toFixed(1) : String(+v.toFixed(5)));

const NOISE = /* glsl */ `
float a5h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float a5n(vec2 p) { vec2 i = floor(p), q = fract(p); q = q * q * (3.0 - 2.0 * q);
  return mix(mix(a5h(i), a5h(i + vec2(1.0, 0.0)), q.x), mix(a5h(i + vec2(0.0, 1.0)), a5h(i + vec2(1.0, 1.0)), q.x), q.y); }
float a5f(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * a5n(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
`;
// the far end: the reference's lavender-white glow (#b0adfa), the same reach as s56's water haze, so the walls and the water meet in it
const HAZE = /* glsl */ `
vec3 a56Haze(vec3 c, vec3 wp) {
  float d = length(wp - cameraPosition);
  float k = smoothstep(9.0, 70.0, d);
  vec3 far = mix(vec3(0.16, 0.10, 0.62), vec3(0.40, 0.40, 0.98), smoothstep(26.0, 75.0, d));
  return mix(c, far, k * 0.9);
}`;

/**
 * ctx: { scene, TR, W, L, env, loader, root, S (S56), M (s56 materials), F, frameM(u) -> Matrix4, T4(x,y,z,rx,ry,rz,s), timeU, heroU, report }.
 * Returns { skip: { shell, arches, banks, models }, update(dt, time, phase, m), cam: null | { off: [x,y,z], look: [x,y,z], fov } }.
 */
export async function buildArch56(ctx) {
  const { TR, env, loader, root, S, F, frameM, T4, timeU, report } = ctx, P = ARCH56;
  const rnd = mulberry(0xa5c56);
  const priv = (fn) => { const save = Math.random; Math.random = rnd; try { return fn(); } finally { Math.random = save; } };
  const U0 = S.u0, U1 = S.u1, nCh = Math.ceil((U1 - U0) / P.chunk);
  const wid = (u) => (FLOW ? flowWiden(u) : 0);
  const lift = (u) => (FLOW ? ledgeLift(u) : 0);
  // (ddf175f2) the drum's radius along the run: P.R (Scene 5) widening to s6.R past s6.from; the arches past s6.from shifted by s6.shift
  const Q6 = P.s6, sm01 = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const Ru = (u) => (S6 ? P.R + (Q6.R - P.R) * sm01(Q6.from, Q6.from + Q6.ramp, u) : P.R);
  const in6 = (u) => S6 && u >= Q6.from;
  const group = priv(() => new THREE.Group()); group.name = 'arch56'; root.add(group);
  const stats = { rings: 0, lamps: 0, modsA: 0, modsB: 0, gears: 0 };

  // ------------------------------------------------ materials (colours from the reference's own pixels; linear values kept under the Neutral
  // tone-mapping knee ~0.76 so they stay saturated; glow only in small cores). Every one fades into the far end's haze like the s56 water.
  // (session 47f75e22) past the old drum's end (L.tunnelEnd) the game's hero grade (uHero, tunnel_r7_hero.js: saturation 1.16) gives way to the
  // base grade (shaders.js GradeShader: saturation 1.32 then contrast 1.12 per channel, on linear values before tone mapping): every gold turned
  // orange-red and every pink red at u 206 (measured: rail #f53c3b, housing #df4262; the lights are the same at tap and 206). The lit arch56
  // materials undo that base grade themselves (its exact inverse, by P.ungrade) wherever the hero grade is off, so they read as designed all run.
  // (session 3849f5c8, measured with the live grade shader) the cause of the RED tint at u 206 is the GRADE, not a light (the lights are neutral:
  // hemisphere ffe9ff / 6ea8ff, two white directionals): past the old drum (uHero 0) the whole chain runs on every pixel -- the base grade
  // (saturation 1.32, contrast 1.12 round 0.18), then uS4Grade's branch, 1 for the whole run: vibrance, a knee at 0.62, round4 (x 0.84, saturation 1.2,
  // CONTRAST 1.4 ROUND 0.5, clamped at 0: blue leaves the pinks and green the golds, so pink -> red, gold -> red-orange) and round7's warm peach light
  // added at the top right (vUv 0.9 / 0.8: +0.19 linear red on the gear). At Tap to Start uHero 1 replaces that chain by the gentle hero grade.
  // So every lit arch56 material renders what the hero grade makes of it, pre-inverted through the u 206 chain (checked numerically: error <= 0.015,
  // except under the warm light, which a dark colour cannot cancel). Driven by the LIVE uniforms (uA56Ungrade = 1 - uHero, uA56S4 = uS4Grade):
  // if the grade changes, this follows. Additive glows are not inverted (the inverse's offsets would light their whole quads).
  const UNG = { value: 0 }, US4 = { value: 0 };
  const UNGRADE = /* glsl */ `
uniform float uA56Ungrade, uA56S4; varying vec4 vA56Clip;
float a56L(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
vec3 a56Ungrade(vec3 c) {
  vec2 uv = vA56Clip.xy / vA56Clip.w * 0.5 + 0.5;
  // the hero grade (tunnel_r7_hero.js heroGrade): luminance contrast round 0.18, saturation 1.16, the cobalt vignette
  c = max(c, 0.0); float L0 = a56L(c); c *= pow(max(L0, 1e-4) / 0.18, 0.08); float L1 = a56L(c); c = max(L1 + (c - L1) * 1.16, 0.0);
  vec2 hv = (uv - 0.5) * vec2(0.6, 1.0); c *= mix(vec3(1.0), vec3(0.0232, 0.1144, 0.7454), smoothstep(0.42, 0.85, length(hv)) * 0.28);
  // the u 206 chain backwards: the warm light, round4, the knee, the vibrance, the base vignette, contrast and saturation
  vec2 wq = (uv - vec2(0.9, 0.8)) * vec2(0.5, 1.0); vec3 y = max(c - vec3(1.0, 0.7, 0.6) * exp(-dot(wq, wq) / 0.09) * 0.3 * uA56S4, 0.0);
  vec3 h = (y - 0.5) / 1.4 + 0.5; float lh = a56L(h); h = lh + (h - lh) / 1.2; y = mix(y, h / 0.84, uA56S4);
  // (session ddf175f2, measured: the uncapped knee inverse multiplied the HDR lamp / strip / core colours by up to 20x, linear luminance 214)
  // the knee's inverse is taken at most at b 0.45 (x2.08) and held there for brighter colours
  float lp = a56L(y); if (lp > 0.62) { float b = min(lp - 0.62, 0.45); y *= mix(1.0, (0.62 + b / max(1.0 - 1.6 * b, 0.05)) / (0.62 + b), uA56S4); }
  float lg = a56L(y); vec3 g = y;
  for (int i = 0; i < 2; i++) { float mx = max(g.r, max(g.g, g.b)), mn = min(g.r, min(g.g, g.b)); float k = 1.0 + 0.25 * (1.0 - (mx - mn) / max(mx, 1e-4)) * smoothstep(0.05, 0.35, lg) * uA56S4; g = lg + (y - lg) / k; }
  vec2 dv = (uv - 0.5) * vec2(0.6, 1.0); g /= mix(vec3(1.0), vec3(0.7, 0.66, 0.92), smoothstep(0.4, 0.8, length(dv)) * 0.36);
  g = (g - 0.18) / 1.12 + 0.18; float l = a56L(g); g = l + (g - l) / 1.32;
  g = max(g, 0.0); float lo = a56L(g); if (lo > 3.0) g *= 3.0 / lo;   // (ddf175f2) no lamp past ~3 linear
  return g;
}`;
  const hazeIt = (m, ungrade = true) => {
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uA56Ungrade = UNG; sh.uniforms.uA56S4 = US4;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vHzW; varying vec4 vA56Clip;')
        .replace('#include <project_vertex>', '#include <project_vertex>\nvA56Clip = gl_Position;\n{ vec4 hz = vec4(transformed, 1.0);\n#ifdef USE_INSTANCING\n hz = instanceMatrix * hz;\n#endif\n vHzW = (modelMatrix * hz).xyz; }');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vHzW;\n' + HAZE + UNGRADE)
        .replace('#include <opaque_fragment>', 'outgoingLight = a56Haze(outgoingLight, vHzW);\n' + (ungrade ? 'outgoingLight = mix(outgoingLight, a56Ungrade(outgoingLight), uA56Ungrade);\n' : '') + '#include <opaque_fragment>');
    };
    m.customProgramCacheKey = () => (ungrade ? 'a56haze' : 'a56haze0');
    return m;
  };
  // (ddf175f2) the user's housings 911 / 912 and the gold elbow: violet texels toward the approved hot pink (#e8459f), golds brighter and
  // yellower (the coordinator's relay: a material colour change in code is fine); the emissive follows the shifted colour
  const PINK6 = { value: 1 }, GOLD6 = { value: 1 };
  const pinkShift = (m) => {
    const prev = m.onBeforeCompile;
    m.onBeforeCompile = (sh, r) => { prev(sh, r); sh.uniforms.uPink6 = PINK6; sh.uniforms.uGold6 = GOLD6;
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uPink6, uGold6;')
        .replace('#include <map_fragment>', `#include <map_fragment>
  { vec3 t = diffuseColor.rgb;
    float pur = smoothstep(0.01, 0.08, min(t.r, t.b) - t.g) * smoothstep(-0.05, 0.05, t.b - t.g * 1.5);
    vec3 pk = vec3((t.r + t.b) * 1.15, t.g * 1.3 + 0.01, t.b * 0.72);
    float gol = smoothstep(0.02, 0.08, t.r - t.b) * smoothstep(0.0, 0.04, t.g - t.b);
    vec3 gd = t * vec3(1.3, 1.38, 0.95);
    diffuseColor.rgb = mix(mix(t, pk, pur * uPink6), gd, gol * uGold6); }`)
        .replace('#include <emissivemap_fragment>', 'totalEmissiveRadiance = emissive * diffuseColor.rgb;');
    };
    m.customProgramCacheKey = () => 'a56haze_pk6';
    return m;
  };
  let gradePass = null;   // the game's grade pass (its live uHero / uS4Grade), found once
  const liveGrade = () => { if (gradePass === null) { try { gradePass = window.__bw.debug().composer.passes.find((p) => p.uniforms && p.uniforms.uS4Grade) || false; } catch (e) { gradePass = false; } } return gradePass; };
  const heroGradeOn = (z) => { const L = ctx.L, sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    return L ? sm(L.tunnelStart - 12, L.tunnelStart - 8, z) * (1 - sm(L.tunnelEnd - 2, L.tunnelEnd + 4, z)) : 1; };   // = tunnel_r7_hero.js's uHero
  const std = (o) => hazeIt(new THREE.MeshStandardMaterial({ envMap: env, ...o }));
  const basic = (r, g, b, o = {}) => hazeIt(new THREE.MeshBasicMaterial({ color: new THREE.Color(r, g, b), ...o }), o.blending !== THREE.AdditiveBlending);
  const MT = priv(() => ({
    // glossy pink housings (#be2963 .. #eb478b), magenta on the right (#df22ca)
    pink: std({ color: 0xb8305f, emissive: 0x400418, emissiveIntensity: 0.4, metalness: 0.25, roughness: 0.24, envMapIntensity: 1.0 }),
    magenta: std({ color: 0xc02aae, emissive: 0x500848, emissiveIntensity: 0.4, metalness: 0.25, roughness: 0.24, envMapIntensity: 1.0 }),
    // metallic gold (#ec8c5a with #fdd98b highlights); the lamp's and pipes' darker copper brass (#9d4333 .. #cb6948)
    // (session 47f75e22: the art director saw the railings red-orange and the domes salmon at u 206 -- the peach base colour reflected the
    // magenta drum; a yellower base and a yellow-gold emissive floor hold the hue: approved gold #ec8c5a .. #fdd98b, brass #cb6948 .. #e8a050)
    gold: std({ color: 0xffd060, emissive: 0x7a5200, emissiveIntensity: 0.55, metalness: 0.9, roughness: 0.24, envMapIntensity: 1.15 }),
    brass: std({ color: 0xe0a060, emissive: 0x5a3000, emissiveIntensity: 0.45, metalness: 0.9, roughness: 0.28, envMapIntensity: 1.0 }),
    paw: std({ color: 0xffd98a, emissive: 0x6a4a10, emissiveIntensity: 0.5, metalness: 0.85, roughness: 0.3, envMapIntensity: 1.1 }),
    // the arches: magenta-lavender metal (#c739ad, #e448be lit, #7f2f8a dark), a lighter glossy lip
    ring: std({ color: 0xa83a9c, emissive: 0x3a0a40, emissiveIntensity: 0.35, metalness: 0.6, roughness: 0.28, envMapIntensity: 1.1 }),
    lip: std({ color: 0xe8a8f0, emissive: 0x5a2070, emissiveIntensity: 0.35, metalness: 0.7, roughness: 0.18, envMapIntensity: 1.3 }),
    // lavender-silver metal for walkways, bands, panels and mounts
    lav: std({ color: 0xa88ae0, emissive: 0x2a1450, emissiveIntensity: 0.35, metalness: 0.75, roughness: 0.3, envMapIntensity: 1.1 }),
    // violet glass with a light inside (#9c1ff1 .. #f65cfb)
    glass: std({ color: 0xb03af0, emissive: 0xa020e0, emissiveIntensity: 0.85, metalness: 0.1, roughness: 0.08, transparent: true, opacity: 0.6, envMapIntensity: 1.4, depthWrite: false }),
    halo: basic(0.85, 0.22, 1.05, { transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }),
    // the glow inside the models' glass chambers (approved glass #dc52f6 with a white-pink core): additive, so the model's violet glass reads lit
    tmHalo: basic(0.62, 0.10, 0.72, { transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }),
    tmCore: basic(1.0, 0.55, 1.0, { transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }),
    lampHalo: basic(1.0, 0.6, 0.2, { transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false }),
    bub: std({ color: 0xd8b8ff, emissive: 0x5a3aa0, emissiveIntensity: 0.5, metalness: 0.2, roughness: 0.1, transparent: true, opacity: 0.55, envMapIntensity: 1.4 }),
    core: basic(2.2, 1.0, 2.4),
    lamp: basic(2.2, 1.7, 0.95),         // the hanging lamp's hot white-gold glass (#fefefc with gold edges)
    strip: basic(2.3, 1.3, 0.42),        // the arches' amber light strips (yellow-white cores)
    teal: basic(0.25, 1.35, 1.55),       // the turquoise fittings and indicator lights
    amberLight: basic(1.9, 1.3, 0.3),
    // (ddf175f2) the control box's dark glossy screen and its two glowing white-violet bulbs
    screen: std({ color: 0x241050, emissive: 0x1a0848, emissiveIntensity: 0.6, metalness: 0.3, roughness: 0.14, envMapIntensity: 1.2 }),
    bulb: basic(1.8, 1.5, 2.4),
    // (ddf175f2) the approved Scene 6 cabinets' glossy hot pink (#e83ca0 lit, #c02a80 shade)
    pink6: std({ color: 0xf04aa8, emissive: 0x7a0a48, emissiveIntensity: 0.55, metalness: 0.2, roughness: 0.2, envMapIntensity: 0.9 }),
  }));
  // (ddf175f2) the approved Scene 6 tanks' glowing violet glass, opaque (no sorting): deep violet at the silhouette, magenta-violet body, a hot
  // white-pink core where the glass faces the camera (HDR: env6's bloom catches it), rising bubbles and a sharp vertical highlight
  const glass6 = priv(() => new THREE.ShaderMaterial({
    uniforms: { uTime: timeU, uA56Ungrade: UNG, uA56S4: US4 },
    vertexShader: /* glsl */ `
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vA56Clip;
      void main() { vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; vA56Clip = gl_Position; }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${NOISE}
      ${HAZE}
      ${UNGRADE}
      void main() {
        vec3 V = normalize(cameraPosition - vW), N = normalize(vN);
        float ndv = abs(dot(V, N)), h = vUv.y, mid = 1.0 - pow(abs(h - 0.5) * 2.0, 2.0);
        // (the approved tanks: blue-violet silhouette #5020c0, vivid violet body #a040f0, a round white-pink glowing core in the middle)
        vec3 c = mix(vec3(0.05, 0.01, 0.30), vec3(0.28, 0.03, 0.62), smoothstep(0.05, 0.55, ndv));
        float rr = length(vec2((1.0 - ndv) * 3.4, (h - 0.5) * 2.6));
        c = mix(c, vec3(0.55, 0.08, 0.72), exp(-rr * rr * 2.0) * 0.8);
        c += vec3(1.5, 0.75, 1.4) * exp(-rr * rr * 14.0);
        // bubbles rising inside (bright rims)
        vec2 bq = vec2(vUv.x * 14.0, h * 7.0 - uTime * 0.35); vec2 bi = floor(bq), bf = fract(bq) - 0.5;
        float br = 0.18 + 0.16 * a5h(bi), bd = length(bf + (vec2(a5h(bi + 3.1), a5h(bi + 7.7)) - 0.5) * 0.4);
        float bub = step(0.55, a5h(bi + 1.3)) * smoothstep(br, br - 0.05, bd) * smoothstep(br - 0.13, br - 0.04, bd);
        c += vec3(0.6, 0.4, 0.8) * bub * smoothstep(0.3, 0.8, ndv) * 0.6;
        // the sharp vertical highlight on the glass (the arch lamps' reflection)
        float side = dot(N, normalize(cross(vec3(0.0, 1.0, 0.0), V)));
        c += vec3(1.0, 0.85, 1.0) * smoothstep(0.55, 0.62, side) * smoothstep(0.75, 0.64, side) * 0.8;
        c = a56Haze(c, vW);
        c = mix(c, a56Ungrade(c), uA56Ungrade);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  }));

  // ------------------------------------------------ helpers: geometry merged per chunk and per material (as s56's banks), indexed
  const chunks = Array.from({ length: nCh }, () => new Map());
  const chunkOf = (u) => Math.min(nCh - 1, Math.max(0, Math.floor((u - U0) / P.chunk)));
  const put = (u, geo, mat, local) => {   // geo in a local frame (x across, +x screen-left; y up from the water; z along), at track distance u
    const g = geo.clone();
    if (!g.index) g.setIndex([...Array(g.attributes.position.count).keys()]);
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    if (local) g.applyMatrix4(local); g.applyMatrix4(frameM(u));
    const c = chunks[chunkOf(u)]; if (!c.has(mat)) c.set(mat, []); c.get(mat).push(g);
  };
  const G = {
    cyl: (rt, rb, h, n = 28) => new THREE.CylinderGeometry(rt, rb, h, n),
    tor: (r, t, n = 32, rs = 6, arc = Math.PI * 2) => new THREE.TorusGeometry(r, t, rs, n, arc),
    sph: (r, w = 12, h = 8) => new THREE.SphereGeometry(r, w, h),
    box: (x, y, z) => new THREE.BoxGeometry(x, y, z),
  };
  const merge = (list) => mergeGeometries(list.map((g) => { const q = g.index ? g : g.clone(); if (!q.index) q.setIndex([...Array(q.attributes.position.count).keys()]); return q; }));
  // a tube along a polyline with rounded elbows (corner radius rc): the reference's thick brass pipes
  const pipe = (pts, r, rc = 0.3, seg = 12) => {
    const path = new THREE.CurvePath(), V = pts.map((p) => new THREE.Vector3(...p));
    let cur = V[0].clone();
    for (let i = 1; i < V.length; i++) {
      const b = V[i];
      if (i < V.length - 1) {
        const a = V[i - 1], c = V[i + 1], la = Math.min(rc, a.distanceTo(b) / 2), lc = Math.min(rc, c.distanceTo(b) / 2);
        const p1 = b.clone().addScaledVector(a.clone().sub(b).normalize(), la), p2 = b.clone().addScaledVector(c.clone().sub(b).normalize(), lc);
        path.add(new THREE.LineCurve3(cur, p1)); path.add(new THREE.QuadraticBezierCurve3(p1, b.clone(), p2)); cur = p2;
      } else path.add(new THREE.LineCurve3(cur, b.clone()));
    }
    return new THREE.TubeGeometry(path, Math.max(12, Math.round(path.getLength() / 0.07)), r, seg, false);
  };
  const collar = (p, dir, r, len = 0.07) => {   // a gold joint ring round a pipe at p, along dir
    const g = G.cyl(r, r, len, 20); g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...dir).normalize())); g.translate(...p); return g;
  };
  const facing = (x, y, z, nx, nz) => T4(x, y, z, 0, Math.atan2(nx, nz), 0);   // local +z turned to the horizontal direction (nx, nz)

  // ------------------------------------------------ 1. the drum: perforated violet metal, its axis at the camera's height
  const shellMat = priv(() => new THREE.ShaderMaterial({
    uniforms: { uTime: timeU, uArch: { value: new THREE.Vector2(P.ring.step, P.ring.u0) }, uS6: { value: new THREE.Vector2(S6 ? Q6.from : 1e9, S6 ? Q6.shift : 0) }, uA56Ungrade: UNG, uA56S4: US4 },
    vertexShader: /* glsl */ `
      attribute vec2 aAU; varying vec2 vAU; varying vec3 vW; varying vec3 vN;
      varying vec4 vA56Clip;
      void main() { vAU = aAU; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(normal); gl_Position = projectionMatrix * viewMatrix * w; vA56Clip = gl_Position; }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; uniform vec2 uArch, uS6; varying vec2 vAU; varying vec3 vW; varying vec3 vN;
      ${NOISE}
      ${HAZE}
      ${UNGRADE}
      void main() {
        float a = vAU.x, u = vAU.y, up = cos(a), s = a * ${f(P.R)};
        float dc = length(vW - cameraPosition);
        // the reference's metal: mauve-violet near (#98519a, dark #592a6b), blue-violet in the depth (#684dca), lighter toward the crown
        vec3 c = mix(vec3(0.07, 0.02, 0.13), vec3(0.22, 0.07, 0.30), smoothstep(-0.75, 0.55, up));
        c = mix(c, vec3(0.26, 0.10, 0.36), smoothstep(0.55, 1.0, up) * 0.5);
        c = mix(c, vec3(0.10, 0.06, 0.46), smoothstep(4.0, 16.0, dc) * 0.85);
        c *= 0.85 + 0.25 * a5f(vec2(s * 6.0, u * 0.35));
        // polished streaks along the run (the reference's bright sheen, #dc98b1 / #cd9abc)
        float st = pow(0.5 + 0.5 * cos(a * 5.0 + 0.35), 14.0) * smoothstep(-0.4, 0.5, up);
        c += vec3(0.36, 0.16, 0.30) * st;
        // panel seams
        float pu = fract(u / 1.27 + 0.5);
        float seam = 1.0 - smoothstep(0.0, 0.025 + fwidth(u / 1.27), min(pu, 1.0 - pu));
        c *= 1.0 - 0.35 * seam;
        // the oval perforations: dark violet holes with a lit lip, staggered rows, faded where they would alias
        vec2 g = vec2(s / 0.34, u / 0.27); g.x += 0.5 * mod(floor(g.y), 2.0);
        vec2 q = (fract(g) - 0.5) * vec2(1.0, 1.7);
        float hr = length(q), aa = max(0.04, 2.0 * length(fwidth(g)));
        float hole = 1.0 - smoothstep(0.27 - aa, 0.27 + aa, hr), lip = smoothstep(0.25, 0.31, hr) * (1.0 - smoothstep(0.31, 0.39 + aa, hr));
        float vis = 1.0 - smoothstep(0.25, 0.6, aa);
        c = mix(c, mix(vec3(0.035, 0.008, 0.09), vec3(0.05, 0.03, 0.30), smoothstep(5.0, 14.0, dc)), hole * 0.92 * vis);
        c += vec3(0.38, 0.18, 0.40) * lip * clamp(0.6 - q.y * 2.2, 0.0, 1.0) * vis;
        // warm light round every arch (its light strips), a pool round each hanging lamp on the crown
        float da = u - uArch.y - (u >= uS6.x ? uS6.y : 0.0), ka = da - uArch.x * floor(da / uArch.x + 0.5);
        float glow = exp(-ka * ka / 0.3);
        c += vec3(0.62, 0.05, 0.36) * glow * 0.22 * (0.4 + 0.6 * smoothstep(-0.6, 0.6, up));
        c += vec3(1.0, 0.55, 0.18) * glow * 0.25 * exp(-pow((abs(a) - 0.72) / 0.2, 2.0));
        float kl = da - 0.5 - uArch.x * ${f(P.lampEvery)} * floor((da - 0.5) / (uArch.x * ${f(P.lampEvery)}) + 0.5);
        c += vec3(1.0, 0.6, 0.25) * exp(-kl * kl / 0.6) * exp(-a * a / 0.08) * 0.45;
        // a soft sheen where the wall turns from the camera
        vec3 V = normalize(cameraPosition - vW); float fr = pow(1.0 - abs(dot(V, vN)), 3.0);
        c += vec3(0.20, 0.12, 0.38) * fr * 0.4;
        // darker toward the water line, the water's turquoise reflected on it
        c = mix(c, c * vec3(0.5, 0.55, 1.0) + vec3(0.0, 0.07, 0.16), smoothstep(-0.25, -0.5, up));
        c = a56Haze(c, vW);
        c = mix(c, a56Ungrade(c), uA56Ungrade);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
    side: THREE.BackSide,
  }));
  priv(() => {
    const NA = 84, A0 = -2.3, A1 = 2.3, du = 0.5, p = new THREE.Vector3();
    for (let ci = 0; ci < nCh; ci++) {
      const ua = U0 + ci * P.chunk, ub = Math.min(U1, ua + P.chunk); if (ub <= ua) continue;
      const rows = Math.round((ub - ua) / du) + 1;
      const pos = new Float32Array(rows * (NA + 1) * 3), nor = new Float32Array(rows * (NA + 1) * 3), au = new Float32Array(rows * (NA + 1) * 2), idx = [];
      for (let i = 0; i < rows; i++) {
        const u = ua + (ub - ua) * (i / (rows - 1)); TR.frame(u, F); const Rr = Ru(u) + wid(u);
        for (let j = 0; j <= NA; j++) {
          const a = A0 + (A1 - A0) * (j / NA), sx = Math.sin(a), cy = Math.cos(a), k = i * (NA + 1) + j;
          p.copy(F.P).addScaledVector(F.R, Rr * sx).addScaledVector(F.U, P.A + Rr * cy);
          const n = F.R.clone().multiplyScalar(-sx).addScaledVector(F.U, -cy);
          pos.set([p.x, p.y, p.z], k * 3); nor.set([n.x, n.y, n.z], k * 3); au.set([a, u], k * 2);
        }
      }
      for (let i = 0; i < rows - 1; i++) for (let j = 0; j < NA; j++) { const a = i * (NA + 1) + j, b = a + NA + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
      g.setAttribute('aAU', new THREE.BufferAttribute(au, 2)); g.setIndex(idx); g.computeBoundingSphere();
      const mesh = new THREE.Mesh(g, shellMat); mesh.name = 'a56Shell'; group.add(mesh);
    }
  });

  // ------------------------------------------------ 2. the arches: magenta-lavender rings 0.32 m proud of the wall with a glossy lip, a gold edge,
  // rivets and amber light strips; on every second ring a hanging brass lamp with a white-gold glass and a thick brass pipe down the right wall
  const RB = P.R - P.ring.band, Ri = P.R - 2 * P.ring.band;   // band centre radius, inner radius
  const amax = Math.acos(-(P.A + 0.35) / Ri);                // the rings reach 0.35 m under the water
  const arcG = (rad, tube, rs, ts, zs, z) => { const g = new THREE.TorusGeometry(rad, tube, rs, ts, 2 * amax); g.rotateZ(Math.PI / 2 - amax); g.scale(1, 1, zs); g.translate(0, 0, z); return g; };
  const RING = priv(() => {
    const riv = [];
    for (let a = -amax + 0.08; a <= amax - 0.05; a += 0.16) riv.push(G.sph(0.028, 6, 4).translate(Math.sin(a) * (P.R - 0.07), Math.cos(a) * (P.R - 0.07), -0.13));
    return [[arcG(RB, P.ring.band, 10, 96, P.ring.z, 0), MT.ring], [arcG(Ri + 0.02, 0.045, 8, 96, 1, -0.11), MT.lip], [arcG(P.R - 0.02, 0.03, 6, 96, 1, -0.1), MT.gold], [merge(riv), MT.gold]];
  });
  const stripG = (a, len = 0.66, r = 0.055) => { const g = new THREE.CapsuleGeometry(r, len, 4, 10); g.rotateZ(Math.PI / 2 - a); g.translate(Math.sin(a) * RB, Math.cos(a) * RB, -P.ring.band * P.ring.z - 0.005); return g; };
  const LAMP = priv(() => makeLamp(P.R, Ri + 0.15, 0.5, null));
  // (ddf175f2) the Scene 6 lamp, built at s6.R: its top at s6.lamp.y under the crown (the approved lamp spans y 0.216-0.278 at u 206), its
  // thick pipe to the right ending above the gear, then back along the run into the wall (s6.lampPipe)
  const LAMP6 = S6 ? priv(() => makeLamp(Q6.R, Q6.lamp.y, Q6.lamp.z, Q6.lampPipe)) : null;
  function makeLamp(RR, lyy, zz, pipePts) {   // axis coordinates; hanging from the crown zz behind its ring
    const z = zz, ly = lyy, out = [], P_R = RR;
    // a solid brass lamp housing (~0.5 m wide, as the reference's): a short fitting, a domed top, a cylinder with two gold bands, a flared rim,
    // the white-gold glass under it and a warm halo
    out.push([G.cyl(0.05, 0.05, P_R + 0.02 - ly, 10).translate(0, (P_R + 0.02 + ly) / 2, z), MT.brass]);
    const prof = [[0.0, 0.02], [0.1, 0.02], [0.2, -0.02], [0.245, -0.07], [0.245, -0.3], [0.285, -0.33], [0.285, -0.37], [0.2, -0.38]].map(([r, y]) => new THREE.Vector2(r, y));
    out.push([new THREE.LatheGeometry(prof, 32).translate(0, ly, z), MT.brass]);
    for (const y of [-0.12, -0.24]) out.push([G.tor(0.25, 0.024, 32, 6).rotateX(Math.PI / 2).translate(0, ly + y, z), MT.gold]);
    out.push([G.sph(0.2, 24, 14).scale(1, 0.85, 1).translate(0, ly - 0.45, z), MT.lamp]);
    out.push([G.sph(0.32, 16, 10).scale(1, 0.8, 1).translate(0, ly - 0.47, z), MT.lampHalo]);
    // the thick brass supply pipe: out of the bell to the right (-x), along under the crown, a rounded elbow down the right wall (outside the
    // lanes' clear space), then out into the wall above the gear; gold joint collars
    const r = P.pipe.r, xe = -P.pipe.x, y0 = ly - 0.18, yh = 1.9, yb = 1.05, xw = -(Math.sqrt(P_R * P_R - (yb - 0.07) ** 2) + 0.06);
    if (pipePts) {   // (ddf175f2) the Scene 6 route, given in the lamp's axis frame (z added to the lamp's)
      const pts = pipePts.map(([x, y, zz2]) => [x, y, z + zz2]);
      out.push([pipe(pts, r * 1.1, 0.4), MT.brass]);
      for (let i = 1; i < pts.length - 1; i++) { const a = pts[i - 1], b = pts[i]; const m = a.map((v, j) => (v + b[j]) / 2); const dd = b.map((v, j) => v - a[j]); if (Math.hypot(...dd) > 0.3) out.push([collar(m, dd, r * 1.45, 0.08), MT.gold]); }
      return out;
    }
    out.push([pipe([[-0.17, y0, z], [xe, yh, z], [xe, yb, z], [xw, yb - 0.07, z]], r, 0.42), MT.brass]);
    for (const [p, d] of [[[-0.26, y0 - 0.01, z], [1, -0.07, 0]], [[-0.85, (y0 + yh) / 2, z], [1, -0.07, 0]], [[xe, 1.45, z], [0, 1, 0]], [[(xe + xw) / 2, yb - 0.035, z], [1, -0.07, 0]]]) out.push([collar(p, d, r * 1.35), MT.gold]);
    return out;
  }
  const ringUs = [];
  for (let k = Math.ceil((U0 + 1 - P.ring.u0) / P.ring.step); ; k++) { let u = P.ring.u0 + k * P.ring.step; if (in6(u)) u += Q6.shift; if (u > U1 - 1) break; ringUs.push([k, u]); }
  const mod = (k, n) => ((k % n) + n) % n;
  priv(() => {
    for (const [k, u] of ringUs) {
      const sc = (Ru(u) + wid(u)) / P.R, L = new THREE.Matrix4().makeTranslation(0, P.A, 0).multiply(new THREE.Matrix4().makeScale(sc, sc, 1));
      for (const [g, m] of RING) put(u, g, m, L);
      const lampRing = mod(k, P.lampEvery) === 0;
      let strips;
      if (in6(u)) {   // (ddf175f2) big capsule lamp bars at +-bar.a, smaller warm dashes round the arch, a dash on top unless the lamp hangs there
        strips = [-Q6.bar.a, Q6.bar.a].map((a) => stripG(a, Q6.bar.len, Q6.bar.r)).concat(Q6.dash.a.map((a) => stripG(a, Q6.dash.len, Q6.dash.r)));
        if (!lampRing) strips.push(stripG(0, Q6.dash.len, Q6.dash.r));
      } else {
        strips = P.ring.strips.map((a) => stripG(a));
        if (P.ring.topStrip && !lampRing) strips.push(stripG(0, 0.5));
      }
      put(u, merge(strips), MT.strip, L);
      if (lampRing) {
        if (in6(u) && LAMP6) { const s6 = (Ru(u) + wid(u)) / Q6.R, L6 = new THREE.Matrix4().makeTranslation(0, P.A, 0).multiply(new THREE.Matrix4().makeScale(s6, s6, 1)); for (const [g, m] of LAMP6) put(u, g, m, L6); }
        else for (const [g, m] of LAMP) put(u, g, m, L);
        stats.lamps++;
      }
      stats.rings++;
    }
  });

  // ------------------------------------------------ 3. the banks: pink-and-gold modules standing in the water on both sides
  // module frame: x across (s = +1 screen-left, -1 screen-right), y up from the water, z along the run; n = the face turned to the channel and
  // toward the oncoming camera
  const pawMedal = () => {   // facing +z: a gold disc and rim, a raised pale-gold paw
    const out = [[G.cyl(0.24, 0.24, 0.05, 36).rotateX(Math.PI / 2), MT.gold], [G.tor(0.23, 0.03, 36, 6).translate(0, 0, 0.025), MT.gold],
      [G.sph(0.085, 14, 10).scale(1.1, 0.85, 0.35).translate(0, -0.045, 0.03), MT.paw]];
    for (const [x, y] of [[-0.105, 0.055], [-0.04, 0.115], [0.04, 0.115], [0.105, 0.055]]) out.push([G.sph(0.04, 10, 8).scale(1, 1.25, 0.45).translate(x, y, 0.03), MT.paw]);
    return out;
  };
  const starG = (r = 0.13) => { const sh = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 + Math.PI / 2, rr = i % 2 ? r * 0.45 : r; if (i) sh.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); else sh.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    return new THREE.ExtrudeGeometry(sh, { depth: 0.03, bevelEnabled: true, bevelThickness: 0.015, bevelSize: 0.012, bevelSegments: 2 }); };
  const onFace = (list, cx, cy, cz, rad, n, extra = 0) => list.map(([g, m]) => [g.clone().applyMatrix4(facing(cx + n[0] * (rad + extra), cy, cz + n[1] * (rad + extra), n[0], n[1])), m]);
  const dirN = (s, ang) => [-s * Math.cos(ang), -Math.sin(ang)];   // toward the channel, turned ang toward the camera (-z)
  function moduleA(s) {   // the tall pink housing (Scene 5's near housings): gold bands and cap; left a paw medallion, right a panel with lights and stars
    const out = [], x = s * 1.78, r = 0.55;
    out.push([G.cyl(r, r + 0.02, 1.62, 44).translate(x, 0.34, 0), s > 0 ? MT.pink : MT.magenta]);
    for (const y of [0.08, 0.98]) out.push([G.tor(r + 0.015, 0.045, 44, 6).rotateX(Math.PI / 2).translate(x, y, 0), MT.gold]);
    out.push([G.cyl(r + 0.05, r + 0.05, 0.15, 44).translate(x, 1.2, 0), MT.gold], [G.cyl(r - 0.06, r + 0.02, 0.07, 44).translate(x, 1.31, 0), MT.gold]);
    const riv = []; for (let i = 0; i < 14; i++) { const a = (i / 14) * Math.PI * 2; for (const y of [0.17, 0.9]) riv.push(G.sph(0.022, 6, 4).translate(x + Math.cos(a) * (r + 0.01), y, Math.sin(a) * (r + 0.01))); }
    out.push([merge(riv), MT.gold]);
    const n = dirN(s, 0.6);
    if (s > 0) out.push(...onFace(pawMedal(), x, 0.3, 0, r, n));
    else {
      out.push(...onFace([[G.box(0.46, 0.22, 0.07), MT.lav]], x, 0.36, 0, r, n, -0.01), ...onFace([[G.box(0.5, 0.26, 0.04), MT.gold]], x, 0.36, 0, r, n, -0.035));
      out.push(...onFace([[G.sph(0.065, 14, 10).translate(-0.11, 0, 0.03), MT.amberLight], [G.sph(0.065, 14, 10).translate(0.11, 0, 0.03), MT.teal],
        [G.tor(0.075, 0.018, 20, 6).translate(-0.11, 0, 0.035), MT.gold], [G.tor(0.075, 0.018, 20, 6).translate(0.11, 0, 0.035), MT.gold]], x, 0.36, 0, r, n));
      out.push(...onFace([[starG(), MT.gold]], x, 0.72, 0, r, dirN(s, 1.05), -0.005), ...onFace([[starG(0.11), MT.gold]], x, 0.75, 0, r, dirN(s, 0.15), -0.005));
    }
    return out;
  }
  function moduleB(s, len) {   // a pink base with a lavender band and a turquoise porthole; a violet glass chamber with gold brackets and a light;
    // a lid and a thick brass elbow pipe into the wall; the walkway at the bases' top with a rounded gold railing (len = the bay's length)
    const out = [], x = s * 1.75, r = 0.42;
    out.push([G.cyl(r, r + 0.02, 1.45, 40).translate(x, 0.27, 0), MT.pink], [G.cyl(r + 0.015, r + 0.015, 0.2, 40).translate(x, 0.66, 0), MT.lav]);
    for (const y of [0.04, 0.99]) out.push([G.tor(r + 0.012, 0.035, 40, 6).rotateX(Math.PI / 2).translate(x, y, 0), MT.gold]);
    out.push(...onFace([[G.tor(0.15, 0.035, 28, 6), MT.gold], [G.cyl(0.125, 0.125, 0.03, 24).rotateX(Math.PI / 2), MT.teal]], x, 0.34, 0, r, dirN(s, 0.55), 0.01));
    // the chamber: 0.95 m of violet glass (the reference's chambers are ~1.2 m tall with their caps), a bright core in a violet halo
    out.push([G.cyl(0.43, 0.45, 0.1, 36).translate(x, 1.05, 0), MT.gold], [G.cyl(0.38, 0.38, 0.95, 32).translate(x, 1.57, 0), MT.glass], [G.sph(0.18, 16, 12).translate(x, 1.52, 0), MT.core],
      [G.sph(0.31, 16, 12).scale(1, 1.25, 1).translate(x, 1.54, 0), MT.halo]);
    for (const [dx, dy, dz, rr] of [[0.16, 1.28, 0.12, 0.08], [-0.14, 1.78, -0.1, 0.1], [0.08, 1.86, 0.16, 0.07], [-0.17, 1.24, 0.14, 0.08]]) out.push([G.sph(rr, 10, 8).translate(x + dx, dy, dz), MT.bub]);
    for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2 + Math.PI / 4; out.push([G.cyl(0.026, 0.026, 0.95, 8).translate(x + Math.cos(a) * 0.395, 1.57, Math.sin(a) * 0.395), MT.gold]); }
    for (const y of [1.22, 1.92]) out.push([G.tor(0.39, 0.022, 32, 6).rotateX(Math.PI / 2).translate(x, y, 0), MT.gold]);
    out.push([G.cyl(0.44, 0.44, 0.11, 36).translate(x, 2.08, 0), MT.gold], [new THREE.SphereGeometry(0.29, 24, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(x, 2.13, 0), MT.lav]);
    const hy = 2.5, xw = s * (Math.sqrt(P.R * P.R - (hy - P.A) ** 2) + 0.08);
    out.push([pipe([[x, 2.3, 0], [x, hy, 0], [xw, hy + 0.04, 0]], 0.085, 0.16), MT.brass]);
    out.push([collar([x, 2.34, 0], [0, 1, 0], 0.11), MT.gold]);
    const wx0 = 1.3, wx1 = 2.25;
    out.push([G.box(wx1 - wx0, 0.06, len).translate(s * (wx0 + wx1) / 2, 1.0, 0), MT.lav], [G.cyl(0.03, 0.03, len, 10).rotateX(Math.PI / 2).translate(s * wx0, 1.0, 0), MT.gold]);
    const posts = [];
    for (let z = -len / 2 + 0.2; z <= len / 2 - 0.1; z += 0.48) { posts.push(G.cyl(0.026, 0.026, 0.34, 8).translate(s * (wx0 + 0.03), 1.2, z), G.sph(0.042, 8, 6).translate(s * (wx0 + 0.03), 1.39, z)); }
    out.push([merge(posts), MT.gold]);
    for (const y of [1.36, 1.2]) out.push([G.cyl(0.03, 0.03, len, 10).rotateX(Math.PI / 2).translate(s * (wx0 + 0.03), y, 0), MT.gold]);
    return out;
  }
  // (session 47f75e22) the approved Scene 6 right bank: a wide glossy pink drum housing (an oval along the run) with two big gold stars and a
  // smaller one on its channel face, gold bands, a lavender deck on top with a gold railing along its inner edge; the user's glass chamber
  // (913_914) stands on its near outer corner (placed with the models below)
  function moduleStar(s) {
    const T = P.tm.star, r = T.r, zs = T.zs, x = s * (T.inner + r), out = [];
    const oval = (g) => g.scale(1, 1, zs).translate(x, 0, 0);
    out.push([oval(G.cyl(r, r + 0.02, T.h + 0.3, 48).translate(0, (T.h - 0.3) / 2, 0)), MT.pink]);
    for (const y of [0.1, T.h - 0.08]) out.push([oval(G.tor(r + 0.015, 0.045, 48, 6).rotateX(Math.PI / 2).translate(0, y, 0)), MT.gold]);
    out.push([oval(G.cyl(r + 0.05, r + 0.05, 0.08, 48).translate(0, T.h + 0.02, 0)), MT.gold], [oval(G.cyl(r - 0.02, r + 0.03, 0.06, 48).translate(0, T.h + 0.09, 0)), MT.lav]);
    const riv = []; for (let i = 0; i < 22; i++) { const a = (i / 22) * Math.PI * 2; for (const y of [0.2, T.h - 0.18]) riv.push(G.sph(0.022, 6, 4).translate(Math.cos(a) * (r + 0.012), y, Math.sin(a) * (r + 0.012) * zs)); }
    out.push([merge(riv).translate(x, 0, 0), MT.gold]);
    // the stars on the oval's channel face, turned toward the oncoming camera: two big (r 0.24) and a small one
    const onOval = (ang, y, sr) => { const n = dirN(s, ang), t = 1 / Math.sqrt((n[0] * n[0]) / (r * r) + (n[1] * n[1]) / (r * r * zs * zs));
      return [starG(sr).applyMatrix4(facing(x + n[0] * t, y, n[1] * t, n[0], n[1])), MT.gold]; };
    out.push(onOval(0.2, 0.5, 0.24), onOval(0.95, 0.5, 0.22), onOval(-0.45, 0.62, 0.13));
    // the railing along the deck's inner edge
    const xr = s * (T.inner + 0.12), len = 2 * r * zs * 0.82, posts = [];
    for (let z = -len / 2; z <= len / 2 + 1e-3; z += len / 4) posts.push(G.cyl(0.026, 0.026, 0.34, 8).translate(xr, T.h + 0.27, z), G.sph(0.042, 8, 6).translate(xr, T.h + 0.45, z));
    out.push([merge(posts), MT.gold]);
    for (const y of [T.h + 0.42, T.h + 0.26]) out.push([G.cyl(0.028, 0.028, len, 10).rotateX(Math.PI / 2).translate(xr, y, 0), MT.gold]);
    return out;
  }
  // ------------------------------------------------ 3c. (session ddf175f2) the approved Scene 6 modules (ARCH56.s6.L / .Rt), real geometry
  // module frame as above (x across, +x screen-left; y up from the water; z along the run from the bay's centre); s = +1 left, -1 right
  const seg = (a, b, r, n = 10) => { const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A), g = G.cyl(r, r, d.length(), n);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize())); g.translate(...A.clone().add(B).multiplyScalar(0.5).toArray()); return g; };
  const railing = (pts, y0, h, step = 0.34) => {   // gold posts with ball knobs and two rails along a polyline at deck height y0
    const posts = [], rails = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i], [bx, bz] = pts[i + 1], L = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.round(L / step));
      for (let j = 0; j <= n; j++) { if (i > 0 && j === 0) continue; const t = j / n, x = ax + (bx - ax) * t, z = az + (bz - az) * t;
        posts.push(G.cyl(0.024, 0.024, h, 8).translate(x, y0 + h / 2, z), G.sph(0.04, 8, 6).translate(x, y0 + h + 0.02, z)); }
      for (const y of [y0 + h, y0 + h * 0.55]) rails.push(seg([ax, y, az], [bx, y, bz], 0.026, 8));
    }
    return [[merge(posts), MT.gold], [merge(rails), MT.gold]];
  };
  const ovalCab = (out, x, z, rx, rz, top, mat) => {   // a glossy oval drum standing in the water: gold bands, a gold rim, a lavender deck, rivets
    const ov = (g) => g.scale(1, 1, rz / rx).translate(x, 0, z);
    out.push([ov(G.cyl(rx, rx + 0.02, top + 0.35, 48).translate(0, (top - 0.35) / 2, 0)), mat]);
    for (const y of [0.1, top - 0.12]) out.push([ov(G.tor(rx + 0.012, 0.042, 48, 6).rotateX(Math.PI / 2).translate(0, y, 0)), MT.gold]);
    out.push([ov(G.cyl(rx + 0.05, rx + 0.05, 0.08, 48).translate(0, top, 0)), MT.gold], [ov(G.cyl(rx + 0.02, rx + 0.04, 0.05, 48).translate(0, top + 0.06, 0)), MT.lav]);
    const riv = []; for (let i = 0; i < 28; i++) { const a = (i / 28) * Math.PI * 2; for (const y of [0.22, top - 0.24]) riv.push(G.sph(0.02, 6, 4).translate(Math.cos(a) * (rx + 0.01), y, Math.sin(a) * (rx + 0.01) * rz / rx)); }
    out.push([merge(riv).translate(x, 0, z), MT.gold]);
  };
  const onOvalAt = (x, z, rx, rz, s, ang, y, list, lift0 = 0) => {   // facing-+z pieces on an oval's surface, turned toward the channel by ang
    const n = dirN(s, ang), t = 1 / Math.sqrt((n[0] * n[0]) / (rx * rx) + (n[1] * n[1]) / (rz * rz));
    return list.map(([g, m]) => [g.clone().applyMatrix4(facing(x + n[0] * (t + lift0), y, z + n[1] * (t + lift0), n[0], n[1])), m]);
  };
  // a violet glowing glass tank: gold foot, glass with a hot white-pink core, a violet halo and bubbles, gold struts and rings, gold cap, a dome
  const tank = (out, x, z, y0, rg, hg) => {
    const yg = y0 + 0.12, yc = yg + hg;
    out.push([G.cyl(rg + 0.07, rg + 0.09, 0.12, 36).translate(x, y0 + 0.06, z), MT.gold]);
    out.push([new THREE.CylinderGeometry(rg, rg, hg, 32, 1, true).translate(x, yg + hg / 2, z), glass6]);
    for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2 + Math.PI / 4; out.push([G.cyl(0.022, 0.022, hg, 8).translate(x + Math.cos(a) * (rg + 0.01), yg + hg / 2, z + Math.sin(a) * (rg + 0.01)), MT.gold]); }
    for (const y of [yg + 0.03, yc - 0.03]) out.push([G.tor(rg + 0.012, 0.03, 32, 6).rotateX(Math.PI / 2).translate(x, y, z), MT.gold]);
    out.push([G.cyl(rg + 0.06, rg + 0.06, 0.15, 36).translate(x, yc + 0.075, z), MT.gold], [G.tor(rg + 0.06, 0.03, 36, 6).rotateX(Math.PI / 2).translate(x, yc + 0.15, z), MT.gold]);
    const riv = []; for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; riv.push(G.sph(0.018, 6, 4).translate(x + Math.cos(a) * (rg + 0.065), yc + 0.075, z + Math.sin(a) * (rg + 0.065))); }
    out.push([merge(riv), MT.paw]);
    out.push([new THREE.SphereGeometry(rg * 0.85, 24, 8, 0, Math.PI * 2, 0, Math.PI / 2).scale(1, 0.55, 1).translate(x, yc + 0.15, z), MT.gold]);
    return yc + 0.15 + rg * 0.47;   // the dome's top
  };
  function moduleL6(s, tall = true) {   // the approved Scene 6 left bank (TARGETS.md "Left machinery"); tall false: the low parts only (a brush's bay)
    const Q = Q6.L, out = [], X = (v) => s * v, C = Q.cab;
    if (tall === 'model') {   // beside the user's housing model: the tall glowing tank on a pink pedestal, a gold elbow pipe from its dome into the wall
      const T = Q6.mtank;
      out.push([G.cyl(T.rg + 0.06, T.rg + 0.12, T.ped + 0.35, 32).translate(X(T.x), (T.ped - 0.35) / 2, T.z), MT.pink6]);
      for (const y of [0.12, T.ped * 0.55, T.ped - 0.1]) out.push([G.tor(T.rg + 0.1, 0.035, 32, 6).rotateX(Math.PI / 2).translate(X(T.x), y, T.z), MT.gold]);
      const dome = tank(out, X(T.x), T.z, T.ped, T.rg, T.hg), ptop = dome + 0.28;
      out.push([pipe([[X(T.x), dome - 0.05, T.z], [X(T.x), ptop, T.z], [X(T.x + 0.95), ptop + 0.05, T.z]], 0.08, 0.2), MT.brass], [collar([X(T.x), dome + 0.06, T.z], [0, 1, 0], 0.105), MT.gold]);
      return out;
    }
    ovalCab(out, X(C.x), C.z, C.rx, C.rz, C.top, MT.pink6);
    out.push(...onOvalAt(X(C.x), C.z, C.rx, C.rz, s, Q.paw.ang, Q.paw.y, pawMedal().map(([g, m]) => [g.clone().scale(Q.paw.r / 0.24, Q.paw.r / 0.24, 1), m])));
    // the gold railing on the deck: along the deck's front edge (toward the camera) and its inner edge
    const yd = C.top + 0.08, xi = C.x - C.rx + 0.1;
    out.push(...railing([[X(C.x + C.rx * 0.75), C.z - C.rz * 0.72], [X(xi + 0.05), C.z - C.rz * 0.72], [X(xi), C.z - C.rz * 0.45], [X(xi), C.z + C.rz * 0.8]], yd, 0.3));
    if (!tall) return [];   // a brush's bay: the brush stands there (above it the approved shows only the arch and a pipe)
    // the tank on a pink pedestal with a gold band
    const T = Q.tank;
    out.push([G.cyl(T.rg + 0.05, T.rg + 0.1, T.ped - yd, 32).translate(X(T.x), (T.ped + yd) / 2, T.z), MT.pink6], [G.tor(T.rg + 0.08, 0.035, 32, 6).rotateX(Math.PI / 2).translate(X(T.x), T.ped - 0.1, T.z), MT.gold]);
    const dome = tank(out, X(T.x), T.z, T.ped, T.rg, T.hg);
    // the lavender control box on a column: two glowing white-violet bulbs in a dark screen; below it a panel with a yellow and a teal light
    const B = Q.box, R0 = new THREE.Matrix4().makeRotationY(s * B.ang), bx = X(B.x), bz = B.z, ph = Q.panel.h, by1 = B.y0 + ph + B.h;
    const pc = (g, x, y, z) => { g.translate(x, 0, z); g.applyMatrix4(R0); g.translate(bx, y, bz); return g; };
    out.push([pc(G.box(B.w * 0.7, B.y0 - yd + 0.02, B.d * 0.7), 0, (B.y0 + yd) / 2, 0), MT.lav]);
    out.push([pc(G.box(B.w + 0.06, ph, B.d), 0, B.y0 + ph / 2, 0), MT.lav], [pc(G.box(B.w + 0.1, 0.04, B.d + 0.04), 0, B.y0 + ph, 0), MT.gold]);
    out.push([pc(G.box(B.w, B.h, B.d), 0, B.y0 + ph + B.h / 2, 0), MT.lav], [pc(G.box(B.w + 0.06, 0.05, B.d + 0.06), 0, by1, 0), MT.gold]);
    for (const xx of [-1, 1]) out.push([pc(G.box(0.035, B.h + ph, 0.035), xx * (B.w / 2 + 0.03), B.y0 + (B.h + ph) / 2, -B.d / 2 - 0.01), MT.gold]);
    const fz = -B.d / 2 - 0.012, ys = B.y0 + ph + B.h * 0.55;   // the front face (toward the camera)
    out.push([pc(G.box(B.w * 0.78, B.h * 0.5, 0.03), 0, ys, fz), MT.screen]);
    for (const xx of [-0.12, 0.12]) out.push([pc(G.sph(0.072, 16, 12).scale(1, 1, 0.6), xx, ys, fz - 0.02), MT.bulb], [pc(G.tor(0.082, 0.014, 20, 6), xx, ys, fz - 0.01), MT.gold]);
    for (const [xx, mm] of [[-0.13, MT.amberLight], [0.13, MT.teal]]) out.push([pc(G.sph(0.075, 16, 12).scale(1, 1, 0.55), xx, B.y0 + ph * 0.5, fz - 0.015), mm], [pc(G.tor(0.088, 0.02, 20, 6), xx, B.y0 + ph * 0.5, fz - 0.01), MT.gold]);
    // the gold elbow pipe: up out of the box's top, over, down into the tank's dome; a second one from the dome back into the machinery
    const tx = X(T.x), ptop = Math.max(by1, dome) + 0.32;
    out.push([pipe([[bx, by1, bz], [bx, ptop, bz], [tx, ptop, T.z], [tx, dome - 0.05, T.z]], 0.08, 0.22), MT.brass]);
    out.push([collar([bx, by1 + 0.08, bz], [0, 1, 0], 0.105), MT.gold], [collar([tx, dome + 0.05, T.z], [0, 1, 0], 0.105), MT.gold]);
    out.push([pipe([[tx, dome - 0.05, T.z + 0.02], [tx, ptop - 0.1, T.z + 0.35], [X(T.x + 0.5), ptop - 0.1, T.z + 1.2]], 0.07, 0.25), MT.brass]);
    return out;
  }
  function moduleR6(s, tall = true) {   // the approved Scene 6 right bank (TARGETS.md "Right machinery"; the gear is placed with the gears below)
    const Q = Q6.Rt, out = [], X = (v) => s * v, C = Q.cab;
    ovalCab(out, X(C.x), C.z, C.rx, C.rz, C.top, MT.pink6);
    const big = (ang, y, r) => onOvalAt(X(C.x), C.z, C.rx, C.rz, s, ang, y, [[starG(r), MT.gold]], -0.005);
    out.push(...big(0.22, 0.58, 0.25), ...big(0.95, 0.58, 0.23), ...big(-0.55, 0.62, 0.15));
    const yd = C.top + 0.08, xi = C.x - C.rx + 0.1;
    out.push(...railing([[X(xi + 0.12), C.z - C.rz * 0.85], [X(xi), C.z - C.rz * 0.5], [X(xi), C.z + C.rz * 0.85]], yd, 0.3));
    if (!tall) return out;
    // the near tank on a pink pedestal standing in the water, a gold elbow pipe up out of its dome and into the wall
    const T = Q.tank;
    const ped = tall === 'model' ? Q6.ch6.ped : T.ped;
    out.push([G.cyl(T.rg + 0.06, T.rg + 0.1, ped + 0.35, 32).translate(X(T.x), (ped - 0.35) / 2, T.z), MT.pink6]);
    for (const y of [0.15, ped - 0.12]) out.push([G.tor(T.rg + 0.09, 0.038, 32, 6).rotateX(Math.PI / 2).translate(X(T.x), y, T.z), MT.gold]);
    if (tall === 'model') { out.push([G.cyl(T.rg + 0.12, T.rg + 0.12, 0.08, 32).translate(X(T.x), Q6.ch6.ped + 0.0, T.z), MT.gold]); return out; }
    const dome = tank(out, X(T.x), T.z, T.ped, T.rg, T.hg);
    const tx = X(T.x), ptop = dome + 0.35;
    out.push([pipe([[tx, dome - 0.05, T.z], [tx, ptop, T.z], [X(T.x + 0.9), ptop + 0.05, T.z]], 0.085, 0.22), MT.brass], [collar([tx, dome + 0.06, T.z], [0, 1, 0], 0.11), MT.gold]);
    return out;
  }
  const MOD = priv(() => ({ L6m: S6 ? moduleL6(1, 'model') : null, R6m: S6 ? moduleR6(-1, 'model') : null, L6: S6 ? moduleL6(1) : null, R6: S6 ? moduleR6(-1) : null, L6low: S6 ? moduleL6(1, false) : null, R6low: S6 ? moduleR6(-1, false) : null, A: { 1: moduleA(1), [-1]: moduleA(-1) }, B: { 1: moduleB(1, P.ring.step), [-1]: moduleB(-1, P.ring.step) }, S: { [-1]: moduleStar(-1), 1: moduleStar(1) } }));
  const gearSet = new Set(P.gearK);
  // (ddf175f2) lane brush6's roller brushes (read only, BRUSH6's placement rule): a bay within 2.4 m of one on its side keeps its low parts
  const brushUs = { 1: [], [-1]: [] };
  if (BRUSH6_ON && BRUSH6) for (let k = -40; k <= 40; k++) { const ub = BRUSH6.anchor + k * BRUSH6.every; if (BRUSH6.spans.some(([a, b]) => ub >= a && ub <= b)) { brushUs[1].push(ub + BRUSH6.left.du); brushUs[-1].push(ub + BRUSH6.right.du); } }
  const brushNear = (u, s) => brushUs[s].some((b) => Math.abs(b - u) < (s > 0 ? 2.4 : 1.2) || (s < 0 && Math.abs(b - (u + Q6.Rt.tank.z)) < 1.6));

  // ------------------------------------------------ 3b. (session 47f75e22) the user's Tripo models, mobile copies in models/s56tm/ (made from the
  // user's originals of 9 November with gltfpack; no Tripo job): Machinery_tiny (the left cluster) and 913_914 (the glowing violet glass chamber).
  // One InstancedMesh per chunk, model and level of detail: LOD1 near him, a lighter copy further on (switched per chunk in update()).
  const loadG = (url) => new Promise((ok, no) => loader.load(url, ok, undefined, no));
  let TM = null;
  if (!NOTM) try {
    const files = ['Machinery_tiny_lod1', 'Machinery_tiny_far', '913_914_lod1', '913_914_lod2'].concat(S6 ? ['911_tiny_lod1', '911_tiny_lod2', '912_tiny_lod1', '912_tiny_lod2', 'gold_jj_tiny_lod1', 'gold_jj_tiny_lod2'] : []);
    const got = await Promise.all(files.map((n) => loadG(`models/s56tm/${n}.glb`)));
    TM = priv(() => {
      const toF = (a) => { const o = new Float32Array(a.count * 3); for (let i = 0; i < a.count; i++) { o[i * 3] = a.getX(i); o[i * 3 + 1] = a.getY(i); o[i * 3 + 2] = a.getZ(i); } return new THREE.BufferAttribute(o, 3); };
      // h: drawn height; the model is re-based (its base at y 0, centred across and along) in metres; at(p) maps a point of the original model
      const prep = (gltf, h, emis, pinkIt = false) => {
        let mesh = null; gltf.scene.updateMatrixWorld(true); gltf.scene.traverse((c) => { if (c.isMesh && !mesh) mesh = c; });
        const g = new THREE.BufferGeometry(); g.setAttribute('position', toF(mesh.geometry.attributes.position)); g.setAttribute('normal', toF(mesh.geometry.attributes.normal));
        g.setAttribute('uv', mesh.geometry.attributes.uv); g.setIndex(mesh.geometry.index);
        g.applyMatrix4(mesh.matrixWorld); g.normalizeNormals(); g.computeBoundingBox();
        const b = g.boundingBox.clone(), k = h / (b.max.y - b.min.y), off = new THREE.Vector3(-(b.min.x + b.max.x) / 2, -b.min.y, -(b.min.z + b.max.z) / 2);
        g.translate(off.x, off.y, off.z); g.scale(k, k, k); g.computeBoundingBox(); g.computeBoundingSphere();
        const mat = mesh.material.clone(); mat.envMap = env; mat.envMapIntensity = 0.9;
        if (mat.map) { mat.emissiveMap = mat.map; mat.emissive = new THREE.Color(...emis); mat.emissiveIntensity = 1.0; }
        hazeIt(mat);
        if (pinkIt) pinkShift(mat);
        return { g, mat, size: g.boundingBox.getSize(new THREE.Vector3()), at: (x, y, z) => new THREE.Vector3(x, y, z).add(off).multiplyScalar(k), k };
      };
      const out = { mach: [prep(got[0], P.tm.mach.h, [0.3, 0.27, 0.32]), prep(got[1], P.tm.mach.h, [0.3, 0.27, 0.32])],
        ch: [prep(got[2], P.tm.ch.h, [0.34, 0.26, 0.38]), prep(got[3], P.tm.ch.h, [0.34, 0.26, 0.38])] };
      if (S6) {
        out.m911 = [prep(got[4], Q6.M.h, [0.32, 0.26, 0.3], true), prep(got[5], Q6.M.h, [0.32, 0.26, 0.3], true)];
        out.m912 = [prep(got[6], Q6.M.h, [0.32, 0.26, 0.3], true), prep(got[7], Q6.M.h, [0.32, 0.26, 0.3], true)];
        out.ch6 = [prep(got[2], Q6.ch6.h, [0.36, 0.26, 0.42]), prep(got[3], Q6.ch6.h, [0.36, 0.26, 0.42])];
        out.jj = [prep(got[8], 0.924 * Q6.jj.k, [0.3, 0.24, 0.12], true), prep(got[9], 0.924 * Q6.jj.k, [0.3, 0.24, 0.12], true)];
      }
      return out;
    });
  } catch (e) { report.errors.push('arch56 models: ' + ((e && e.message) || e)); TM = null; }
  const inst = {}; for (const key of ['mach', 'ch', 'm911', 'm912', 'ch6', 'jj']) inst[key] = Array.from({ length: nCh }, () => []);
  const ry = (t) => new THREE.Matrix4().makeRotationY(t);
  const turn = (s, ang) => (s > 0 ? Math.PI - ang : ang);   // the models' front (local +x) to the channel, ang toward the oncoming camera
  const firstGear = P.gearK.length ? P.gearK[0] : null;
  priv(() => {
    for (const [k, ur] of ringUs) {
      const u = ur + (in6(ur) ? Q6.off : P.mod.off); if (u < U0 + 0.5) continue;
      if (in6(u) && u >= Q6.from + Q6.ramp) {   // (ddf175f2) the approved Scene 6 modules in every bay; low ones where a roller brush stands
        for (const s of [1, -1]) { const L = new THREE.Matrix4().makeTranslation(s * wid(u), lift(u), 0), low = brushNear(u, s), ci = chunkOf(u);
          const useM = TM && TM.m911 && !low;
          for (const [g, m] of (s > 0 ? (low ? MOD.L6low : useM ? MOD.L6m : MOD.L6) : (low ? MOD.R6low : useM ? MOD.R6m : MOD.R6))) put(u, g, m, L);
          if (!useM) continue;
          if (s > 0) {   // the user's housing (911 / 912 alternating), front (model +x) to the channel turned toward the camera, squashed in depth
            const T = Q6.M, key = mod(k, 2) ? 'm912' : 'm911', z = TM[key][0].size, ext = (z.x * T.sx / 2) * Math.cos(T.ang) + (z.z / 2) * Math.sin(T.ang);
            const Lm = L.clone().multiply(new THREE.Matrix4().makeTranslation(s * (T.inner + ext), T.y, T.dz)).multiply(ry(turn(s, T.ang))).multiply(new THREE.Matrix4().makeScale(T.sx, 1, 1));
            inst[key][ci].push(frameM(u).multiply(Lm));
          } else {   // the user's glass chamber on the star drum's pedestal (glowing core), the user's gold elbow on top into the wall
            const T = Q6.Rt.tank, C6 = Q6.ch6;
            const Lc = L.clone().multiply(new THREE.Matrix4().makeTranslation(s * T.x, C6.ped + 0.04, T.z)).multiply(ry(turn(s, C6.ang)));
            inst.ch6[ci].push(frameM(u).multiply(Lc));
            const hp = TM.ch6[0].at(...C6.glow), kk = TM.ch6[0].k;
            put(u, G.sph(0.22 * kk, 16, 12).scale(0.6, 1.3, 1), MT.tmHalo, Lc.clone().multiply(new THREE.Matrix4().makeTranslation(hp.x, hp.y, hp.z)));
            put(u, G.sph(0.075 * kk, 12, 8).scale(1, 1.3, 1), MT.core, Lc.clone().multiply(new THREE.Matrix4().makeTranslation(hp.x + 0.07 * kk, hp.y, hp.z)));
            const top = C6.ped + 0.04 + TM.ch6[0].size.y;
            const Lj = L.clone().multiply(new THREE.Matrix4().makeTranslation(s * (T.x + 0.05), top - 0.06 + Q6.jj.up, T.z)).multiply(ry(-s * Math.PI / 2));
            inst.jj[ci].push(frameM(u).multiply(Lj));
          }
        }
        stats.mods6 = (stats.mods6 || 0) + 2; continue;
      }
      const type = mod(k, P.mod.aEvery) === 0 ? 'A' : TM ? 'M' : 'B';
      for (const s of [1, -1]) {
        const L = new THREE.Matrix4().makeTranslation(s * wid(u), lift(u), 0);
        if (type === 'M') {
          const ci = chunkOf(u);
          if (s > 0) {   // left: the Machinery cluster, its front to the channel, turned toward the camera, its far-front corner at `inner`
            const T = P.tm.mach, z = TM.mach[0].size, sx = T.sx || 1, ext = (z.x * sx / 2) * Math.cos(T.ang) + (z.z / 2) * Math.sin(T.ang);
            const Lm = L.clone().multiply(new THREE.Matrix4().makeTranslation(s * (T.inner + ext), T.y, T.dz)).multiply(ry(turn(s, T.ang))).multiply(new THREE.Matrix4().makeScale(sx, 1, 1));
            inst.mach[ci].push(frameM(u).multiply(Lm));
            // the glow on its glass chamber's front (original model coordinates, from the model's own front view); additive, so it shows on the glass
            const hp = TM.mach[0].at(0.16, 0.09, -0.26), kk = TM.mach[0].k;
            put(u, G.sph(0.085 * kk, 14, 10).scale(0.7 / sx, 1.2, 1), MT.tmHalo, Lm.clone().multiply(new THREE.Matrix4().makeTranslation(hp.x, hp.y, hp.z)));
            put(u, G.sph(0.03 * kk, 10, 8).scale(1 / sx, 1, 1), MT.tmCore, Lm.clone().multiply(new THREE.Matrix4().makeTranslation(hp.x + 0.02 * kk, hp.y, hp.z)));
          } else {   // right: the pink star housing (none in the bay right after the Scene 5 gear: the gear stands there)
            if (!(firstGear === 0 && k - 1 === 0)) { for (const [g, m] of MOD.S[s]) put(u, g, m, L); stats.stars = (stats.stars || 0) + 1; }
            const T = P.tm.ch, Lc = L.clone().multiply(new THREE.Matrix4().makeTranslation(s * T.x, T.y, T.dz)).multiply(ry(turn(s, T.ang)));
            inst.ch[ci].push(frameM(u).multiply(Lc));
            const hp = TM.ch[0].at(0.15, -0.02, 0), kk = TM.ch[0].k;
            put(u, G.sph(0.2 * kk, 16, 12).scale(0.55, 1.25, 1), MT.tmHalo, Lc.clone().multiply(new THREE.Matrix4().makeTranslation(hp.x, hp.y, hp.z)));
            put(u, G.sph(0.07 * kk, 12, 8), MT.tmCore, Lc.clone().multiply(new THREE.Matrix4().makeTranslation(hp.x + 0.06 * kk, hp.y, hp.z)));
          }
          stats.modsM = (stats.modsM || 0) + 1; continue;
        }
        if (type === 'B' && s < 0 && gearSet.has(k - 1)) continue;   // the gear stands in that bay (right after a gear ring, on the right)
        for (const [g, m] of MOD[type][s]) put(u, g, m, L);
        if (type === 'A') stats.modsA++; else stats.modsB++;
      }
    }
  });
  const lodSets = [];   // per chunk: [near meshes, far meshes]
  if (TM) priv(() => {
    for (let ci = 0; ci < nCh; ci++) {
      const near = [], far = [];
      for (const key of ['mach', 'ch', 'm911', 'm912', 'ch6', 'jj']) {
        const list = inst[key][ci]; if (!list.length || !TM[key]) continue;
        TM[key].forEach((lod, li) => {
          const im = new THREE.InstancedMesh(lod.g, lod.mat, list.length); im.name = 'a56M_' + key + li + '_' + ci;
          list.forEach((mm, i) => im.setMatrixAt(i, mm)); im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); im.visible = li === 1;
          group.add(im); (li === 0 ? near : far).push(im);
        });
      }
      lodSets.push([U0 + ci * P.chunk, U0 + (ci + 1) * P.chunk, near, far]);
    }
  });

  // ------------------------------------------------ 4. the user's Tripo cobalt gear (gear_v2_tripo.glb), large on the right wall, turned toward
  // the oncoming camera, turning on its gold hub; a lavender mount into the wall behind it
  // (session 47f75e22) the user's newer Tripo cobalt gear blue_jt (mobile LOD1, 16k triangles; its axle is the model's x, a gold hub on both faces):
  // the approved Scene 6 gear (cobalt #1e3cda, gold hub, nearly face-on). Its axle points back to the oncoming camera, turned `out` toward the
  // wall; no violet glow (the art director: s56's magenta emissive turned it navy-violet), its own texture lit a little instead. gear_v2 with ,gearv2.
  const gears = [];
  try {
    const V2 = LIST.includes('gearv2');
    const gg = await loadG(V2 ? 'models/opening/gear_v2_tripo.glb' : 'models/s56tm/blue_jt_tiny_lod1.glb');
    priv(() => {
      const gb = new THREE.Box3().setFromObject(gg.scene), gs = gb.getSize(new THREE.Vector3()), gc = gb.getCenter(new THREE.Vector3());
      const dressed = gg.scene.clone(true);
      dressed.traverse((c) => { if (c.isMesh) { c.material = c.material.clone(); c.material.envMap = env; c.material.envMapIntensity = 1.0;
        if (!V2 && c.material.map) { c.material.emissiveMap = c.material.map; c.material.emissive = new THREE.Color(0.28, 0.28, 0.3); c.material.emissiveIntensity = 1.0; }
        else { c.material.emissive = new THREE.Color(0x0a1250); c.material.emissiveIntensity = 0.5; }
        hazeIt(c.material); } });
      // the disc's plane: blue_jt's axle is x (its disc spans y, z); gear_v2's is z
      const axleX = !V2, dia = axleX ? Math.max(gs.y, gs.z) : Math.max(gs.x, gs.y);
      for (const [k, ur] of ringUs) {
        if (!gearSet.has(k)) continue;
        const Q = k === 0 && P.gear0 ? { ...P.gear, ...P.gear0 } : in6(ur) ? { ...P.gear, ...Q6.gear } : P.gear, kg = Q.d / dia;
        const u = ur + Q.dz, s = -1;
        const holder = new THREE.Group(); holder.name = 'a56Gear'; holder.matrixAutoUpdate = false;
        // the axle (local +x after the turn) to (-sin out, 0, -cos out) in the track frame (back to the camera, out to the right wall)
        holder.matrix.copy(frameM(u).multiply(T4(s * (Q.x + wid(u)), Q.h + lift(u), 0, 0, axleX ? Math.PI / 2 + Q.out : Math.PI + Q.out, 0)));
        const spin = new THREE.Group(); holder.add(spin); spin.userData.axleX = axleX;
        const m = dressed.clone(true); m.scale.setScalar(kg); m.position.copy(gc).multiplyScalar(-kg); spin.add(m);
        group.add(holder); gears.push(spin); stats.gears++;
      }
    });
  } catch (e) { report.errors.push('arch56 gear: ' + ((e && e.message) || e)); }

  // ------------------------------------------------ merge: one mesh per chunk and material (culled per chunk)
  let meshes = 0;
  priv(() => {
    chunks.forEach((c, ci) => { for (const [mat, list] of c) { const g = mergeGeometries(list, false); for (const x of list) x.dispose(); if (!g) continue; g.computeBoundingSphere(); const mesh = new THREE.Mesh(g, mat); mesh.name = 'a56Chunk' + ci; group.add(mesh); meshes++; } });
  });
  report.parts.push(`arch56: drum (axis ${P.A} m, R ${P.R} m${S6 ? ` -> ${Q6.R} m past u ${Q6.from}` : ''}), rings x${stats.rings}, lamps x${stats.lamps}, modules A x${stats.modsA} B x${stats.modsB} M x${stats.modsM || 0} S6 x${stats.mods6 || 0}, gears x${stats.gears}, ${meshes} chunk meshes, ${lodSets.length} model chunks`);
  if (typeof window !== 'undefined') window.__bwArch56Info = { stats, meshes, mats: MT };

  function update(dt, time, phase, m) {
    const gp = liveGrade();
    if (gp) { UNG.value = P.ungrade * (1 - (gp.uniforms.uHero ? gp.uniforms.uHero.value : 0)); US4.value = gp.uniforms.uS4Grade.value; }
    else if (m) { UNG.value = P.ungrade * (1 - heroGradeOn(m.z)); US4.value = 1; }
    for (const g of gears) { if (g.userData.axleX) g.rotation.x = time * P.gear.spin; else g.rotation.z = time * P.gear.spin; }
    if (m && lodSets.length) { const a = m.z - 6, b = m.z + P.tm.near;
      for (const [ua, ub, near, far] of lodSets) { const n = ub > a && ua < b; for (const x of near) x.visible = n; for (const x of far) x.visible = !n; } }
  }
  return { skip: { shell: true, arches: true, banks: true, models: true }, update, cam: P.cam };
}
