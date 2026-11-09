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
};
const NOTM = LIST.includes('notm');   // ,arch56,notm: the procedural modules (B) instead of the user's models
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
  const group = priv(() => new THREE.Group()); group.name = 'arch56'; root.add(group);
  const stats = { rings: 0, lamps: 0, modsA: 0, modsB: 0, gears: 0 };

  // ------------------------------------------------ materials (colours from the reference's own pixels; linear values kept under the Neutral
  // tone-mapping knee ~0.76 so they stay saturated; glow only in small cores). Every one fades into the far end's haze like the s56 water.
  // (session 47f75e22) past the old drum's end (L.tunnelEnd) the game's hero grade (uHero, tunnel_r7_hero.js: saturation 1.16) gives way to the
  // base grade (shaders.js GradeShader: saturation 1.32 then contrast 1.12 per channel, on linear values before tone mapping): every gold turned
  // orange-red and every pink red at u 206 (measured: rail #f53c3b, housing #df4262; the lights are the same at tap and 206). The lit arch56
  // materials undo that base grade themselves (its exact inverse, by P.ungrade) wherever the hero grade is off, so they read as designed all run.
  const UNG = { value: 0 };
  const UNGRADE = /* glsl */ `
uniform float uA56Ungrade;
vec3 a56Ungrade(vec3 c) { vec3 g = (c - 0.18) / 1.12 + 0.18; float l = dot(g, vec3(0.2126, 0.7152, 0.0722)); return max(vec3(l) + (g - l) / 1.32, 0.0); }`;
  const hazeIt = (m) => {
    m.onBeforeCompile = (sh) => {
      sh.uniforms.uA56Ungrade = UNG;
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vHzW;')
        .replace('#include <project_vertex>', '#include <project_vertex>\n{ vec4 hz = vec4(transformed, 1.0);\n#ifdef USE_INSTANCING\n hz = instanceMatrix * hz;\n#endif\n vHzW = (modelMatrix * hz).xyz; }');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vHzW;\n' + HAZE + UNGRADE)
        .replace('#include <opaque_fragment>', 'outgoingLight = a56Haze(outgoingLight, vHzW);\noutgoingLight = mix(outgoingLight, a56Ungrade(outgoingLight), uA56Ungrade);\n#include <opaque_fragment>');
    };
    m.customProgramCacheKey = () => 'a56haze';
    return m;
  };
  const heroGradeOn = (z) => { const L = ctx.L, sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    return L ? sm(L.tunnelStart - 12, L.tunnelStart - 8, z) * (1 - sm(L.tunnelEnd - 2, L.tunnelEnd + 4, z)) : 1; };   // = tunnel_r7_hero.js's uHero
  const std = (o) => hazeIt(new THREE.MeshStandardMaterial({ envMap: env, ...o }));
  const basic = (r, g, b, o = {}) => hazeIt(new THREE.MeshBasicMaterial({ color: new THREE.Color(r, g, b), ...o }));
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
    uniforms: { uTime: timeU, uArch: { value: new THREE.Vector2(P.ring.step, P.ring.u0) } },
    vertexShader: /* glsl */ `
      attribute vec2 aAU; varying vec2 vAU; varying vec3 vW; varying vec3 vN;
      void main() { vAU = aAU; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(normal); gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; uniform vec2 uArch; varying vec2 vAU; varying vec3 vW; varying vec3 vN;
      ${NOISE}
      ${HAZE}
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
        float da = u - uArch.y, ka = da - uArch.x * floor(da / uArch.x + 0.5);
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
        const u = ua + (ub - ua) * (i / (rows - 1)); TR.frame(u, F); const Rr = P.R + wid(u);
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
  const LAMP = priv(() => {   // axis coordinates; hanging from the crown 0.5 m behind its ring
    const z = 0.5, ly = Ri + 0.15, out = [];
    // a solid brass lamp housing (~0.5 m wide, as the reference's): a short fitting, a domed top, a cylinder with two gold bands, a flared rim,
    // the white-gold glass under it and a warm halo
    out.push([G.cyl(0.05, 0.05, P.R + 0.02 - ly, 10).translate(0, (P.R + 0.02 + ly) / 2, z), MT.brass]);
    const prof = [[0.0, 0.02], [0.1, 0.02], [0.2, -0.02], [0.245, -0.07], [0.245, -0.3], [0.285, -0.33], [0.285, -0.37], [0.2, -0.38]].map(([r, y]) => new THREE.Vector2(r, y));
    out.push([new THREE.LatheGeometry(prof, 32).translate(0, ly, z), MT.brass]);
    for (const y of [-0.12, -0.24]) out.push([G.tor(0.25, 0.024, 32, 6).rotateX(Math.PI / 2).translate(0, ly + y, z), MT.gold]);
    out.push([G.sph(0.2, 24, 14).scale(1, 0.85, 1).translate(0, ly - 0.45, z), MT.lamp]);
    out.push([G.sph(0.32, 16, 10).scale(1, 0.8, 1).translate(0, ly - 0.47, z), MT.lampHalo]);
    // the thick brass supply pipe: out of the bell to the right (-x), along under the crown, a rounded elbow down the right wall (outside the
    // lanes' clear space), then out into the wall above the gear; gold joint collars
    const r = P.pipe.r, xe = -P.pipe.x, y0 = ly - 0.18, yh = 1.9, yb = 1.05, xw = -(Math.sqrt(P.R * P.R - (yb - 0.07) ** 2) + 0.06);
    out.push([pipe([[-0.17, y0, z], [xe, yh, z], [xe, yb, z], [xw, yb - 0.07, z]], r, 0.42), MT.brass]);
    for (const [p, d] of [[[-0.26, y0 - 0.01, z], [1, -0.07, 0]], [[-0.85, (y0 + yh) / 2, z], [1, -0.07, 0]], [[xe, 1.45, z], [0, 1, 0]], [[(xe + xw) / 2, yb - 0.035, z], [1, -0.07, 0]]]) out.push([collar(p, d, r * 1.35), MT.gold]);
    return out;
  });
  const ringUs = [];
  for (let k = Math.ceil((U0 + 1 - P.ring.u0) / P.ring.step); ; k++) { const u = P.ring.u0 + k * P.ring.step; if (u > U1 - 1) break; ringUs.push([k, u]); }
  const mod = (k, n) => ((k % n) + n) % n;
  priv(() => {
    for (const [k, u] of ringUs) {
      const sc = (P.R + wid(u)) / P.R, L = new THREE.Matrix4().makeTranslation(0, P.A, 0).multiply(new THREE.Matrix4().makeScale(sc, sc, 1));
      for (const [g, m] of RING) put(u, g, m, L);
      const lampRing = mod(k, P.lampEvery) === 0, strips = P.ring.strips.map((a) => stripG(a));
      if (P.ring.topStrip && !lampRing) strips.push(stripG(0, 0.5));
      put(u, merge(strips), MT.strip, L);
      if (lampRing) { for (const [g, m] of LAMP) put(u, g, m, L); stats.lamps++; }
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
  const MOD = priv(() => ({ A: { 1: moduleA(1), [-1]: moduleA(-1) }, B: { 1: moduleB(1, P.ring.step), [-1]: moduleB(-1, P.ring.step) }, S: { [-1]: moduleStar(-1), 1: moduleStar(1) } }));
  const gearSet = new Set(P.gearK);

  // ------------------------------------------------ 3b. (session 47f75e22) the user's Tripo models, mobile copies in models/s56tm/ (made from the
  // user's originals of 9 November with gltfpack; no Tripo job): Machinery_tiny (the left cluster) and 913_914 (the glowing violet glass chamber).
  // One InstancedMesh per chunk, model and level of detail: LOD1 near him, a lighter copy further on (switched per chunk in update()).
  const loadG = (url) => new Promise((ok, no) => loader.load(url, ok, undefined, no));
  let TM = null;
  if (!NOTM) try {
    const files = ['Machinery_tiny_lod1', 'Machinery_tiny_far', '913_914_lod1', '913_914_lod2'];
    const got = await Promise.all(files.map((n) => loadG(`models/s56tm/${n}.glb`)));
    TM = priv(() => {
      const toF = (a) => { const o = new Float32Array(a.count * 3); for (let i = 0; i < a.count; i++) { o[i * 3] = a.getX(i); o[i * 3 + 1] = a.getY(i); o[i * 3 + 2] = a.getZ(i); } return new THREE.BufferAttribute(o, 3); };
      // h: drawn height; the model is re-based (its base at y 0, centred across and along) in metres; at(p) maps a point of the original model
      const prep = (gltf, h, emis) => {
        let mesh = null; gltf.scene.updateMatrixWorld(true); gltf.scene.traverse((c) => { if (c.isMesh && !mesh) mesh = c; });
        const g = new THREE.BufferGeometry(); g.setAttribute('position', toF(mesh.geometry.attributes.position)); g.setAttribute('normal', toF(mesh.geometry.attributes.normal));
        g.setAttribute('uv', mesh.geometry.attributes.uv); g.setIndex(mesh.geometry.index);
        g.applyMatrix4(mesh.matrixWorld); g.normalizeNormals(); g.computeBoundingBox();
        const b = g.boundingBox.clone(), k = h / (b.max.y - b.min.y), off = new THREE.Vector3(-(b.min.x + b.max.x) / 2, -b.min.y, -(b.min.z + b.max.z) / 2);
        g.translate(off.x, off.y, off.z); g.scale(k, k, k); g.computeBoundingBox(); g.computeBoundingSphere();
        const mat = mesh.material.clone(); mat.envMap = env; mat.envMapIntensity = 0.9;
        if (mat.map) { mat.emissiveMap = mat.map; mat.emissive = new THREE.Color(...emis); mat.emissiveIntensity = 1.0; }
        hazeIt(mat);
        return { g, mat, size: g.boundingBox.getSize(new THREE.Vector3()), at: (x, y, z) => new THREE.Vector3(x, y, z).add(off).multiplyScalar(k), k };
      };
      return { mach: [prep(got[0], P.tm.mach.h, [0.3, 0.27, 0.32]), prep(got[1], P.tm.mach.h, [0.3, 0.27, 0.32])],
        ch: [prep(got[2], P.tm.ch.h, [0.34, 0.26, 0.38]), prep(got[3], P.tm.ch.h, [0.34, 0.26, 0.38])] };
    });
  } catch (e) { report.errors.push('arch56 models: ' + ((e && e.message) || e)); TM = null; }
  const inst = { mach: Array.from({ length: nCh }, () => []), ch: Array.from({ length: nCh }, () => []) };
  const ry = (t) => new THREE.Matrix4().makeRotationY(t);
  const turn = (s, ang) => (s > 0 ? Math.PI - ang : ang);   // the models' front (local +x) to the channel, ang toward the oncoming camera
  const firstGear = P.gearK.length ? P.gearK[0] : null;
  priv(() => {
    for (const [k, ur] of ringUs) {
      const u = ur + P.mod.off; if (u < U0 + 0.5) continue;
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
      for (const key of ['mach', 'ch']) {
        const list = inst[key][ci]; if (!list.length) continue;
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
        const Q = k === 0 && P.gear0 ? { ...P.gear, ...P.gear0 } : P.gear, kg = Q.d / dia;
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
  report.parts.push(`arch56: drum (axis ${P.A} m, R ${P.R} m), rings x${stats.rings}, lamps x${stats.lamps}, modules A x${stats.modsA} B x${stats.modsB} M x${stats.modsM || 0}, gears x${stats.gears}, ${meshes} chunk meshes, ${lodSets.length} model chunks`);
  if (typeof window !== 'undefined') window.__bwArch56Info = { stats, meshes, mats: MT };

  function update(dt, time, phase, m) {
    if (m) UNG.value = P.ungrade * (1 - heroGradeOn(m.z));
    for (const g of gears) { if (g.userData.axleX) g.rotation.x = time * P.gear.spin; else g.rotation.z = time * P.gear.spin; }
    if (m && lodSets.length) { const a = m.z - 6, b = m.z + P.tm.near;
      for (const [ua, ub, near, far] of lodSets) { const n = ub > a && ua < b; for (const x of near) x.visible = n; for (const x of far) x.visible = !n; } }
  }
  return { skip: { shell: true, arches: true, banks: true, models: true }, update, cam: P.cam };
}
