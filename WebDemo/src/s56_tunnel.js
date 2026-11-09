// s56 (9 November 2026, session ac4e3449): THE APPROVED SCENE 5 / SCENE 6 LAUNDRY-MACHINE TUNNEL as the live game's environment
// (Design/ReferencePacks/2026-11-09_Scene5_Scene6_Full_Kit_from_user/01_APPROVED_SCENE_5_FULL.png, 02_APPROVED_SCENE_6_FULL.png).
// The user's direction (9 November): ONE continuous pink-and-gold, lavender-purple laundry world from the girl's washer through Scene 5 into
// the actual swimming game; the old blue spiral tunnel is a rollback only. Switch `s56` (with `level1`).
//
// What it is (real 3D, fixed to the track, so it streams past as he swims; the game's own gameplay is untouched):
//   - the drum: a perforated lavender-purple metal shell (oval holes, polished streaks, seams and rivets, warm glow at every arch, the far
//     end a luminous violet-white), radius 2.42 m round the drum axis, from the run's start through the enemy stretch (Pass 18);
//   - rounded metal arches every 2.6 m with a pink inner band, gold edges, amber lamp bars and brass ceiling lamps;
//   - both banks lined with pink-and-gold machinery: the user's Tripo machine housing (housing_tripo_821.glb), pink drum housings with gold
//     bands and gold paw medallions, glowing violet glass tanks with gold caps and bright cores, gold elbow pipes into the wall, gold
//     railings, round control lights, crown pipes along the ceiling;
//   - the user's Tripo cobalt gear (gear_v2_tripo.glb) turning on the right wall (Scene 5) and again along the run;
//   - the water: a real displaced 3D wave surface (5 travelling waves + the course's own base height), cobalt to turquoise with glints,
//     controlled white crests, a contact ring and wake round him, splashes that follow his motion;
//   - he rides the SAME wave function (visual only: his state, lanes, jumps and collisions are game.js's own);
//   - the Scene 5 camera: low behind his back, his fluffy back large at the lower centre, the tunnel's vanishing point at ~(0.50, 0.44).
// Private random numbers only (the game's seeded Math.random is never used).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const S56_ON = LIST.includes('s56') && LIST.includes('level1');

// every number (window.__bwS56 in the browser)
export const S56 = {
  u0: -4, u1: 262, chunk: 20,
  R: 2.42, axisH: 1.5,
  arch: { step: 2.6, from: 3.4 },
  bank: { step: 3.9, inner: 1.5 },
  gears: [[7.2, -1], [44, 1], [88, -1], [132, 1], [176, -1], [214, 1], [240, -1]],   // [u, side] (side +1 = screen-left)
  gear: { d: 1.45, h: 1.05, x: 1.72, spin: 0.55 },
  // the Scene 5 / 6 camera (track frame, from his ride height): behind and above his back, looking down the tunnel
  cam: { off: [0, 0.9, -3.0], look: [0, 0.16, 6.0], fov: 66 },
  hero: { sink: 0.1, follow: 1.0 },
  splash: { rate: 26, burst: 22, speed: 2.1 },
};
if (S56_ON && typeof window !== 'undefined') window.__bwS56 = S56;

// ---------------------------------------------------------------- the waves (one table: GLSL and JS stay in step)
// [amplitude m, k across, k along, angular speed, phase]: h = sum A sin(kx x + ku u - w t + p). Phase speeds 2-3 m/s forward (he swims at 7.2).
export const WAVES = [
  [0.095, 0.22, 0.60, 2.0, 0.0],
  [0.055, -0.85, 1.30, 3.1, 1.3],
  [0.032, 1.60, 2.60, 4.4, 0.4],
  [0.018, -2.40, 4.90, 6.2, 2.1],
  [0.022, 2.10, 0.45, -1.2, 0.7],
];
export function s56Wave(x, u, t) {
  let h = 0; for (const [A, kx, ku, w, p] of WAVES) h += A * Math.sin(kx * x + ku * u - w * t + p);
  return h;
}
const f = (v) => (Number.isInteger(v) ? v.toFixed(1) : String(+v.toFixed(5)));
const WAVE_GLSL = /* glsl */ `
vec3 s56Wave(float x, float u, float t) {   // (height, d/dx, d/du)
  vec3 r = vec3(0.0); float ph;
${WAVES.map(([A, kx, ku, w, p]) => `  ph = ${f(kx)} * x + ${f(ku)} * u - ${f(w)} * t + ${f(p)}; r += vec3(${f(A)} * sin(ph), ${f(A * kx)} * cos(ph), ${f(A * ku)} * cos(ph));`).join('\n')}
  return r;
}`;

const NOISE = /* glsl */ `
float s5h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float s5n(vec2 p) { vec2 i = floor(p), q = fract(p); q = q * q * (3.0 - 2.0 * q);
  return mix(mix(s5h(i), s5h(i + vec2(1.0, 0.0)), q.x), mix(s5h(i + vec2(0.0, 1.0)), s5h(i + vec2(1.0, 1.0)), q.x), q.y); }
float s5f(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * s5n(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
`;
// the far end of the tunnel: a luminous violet-white (shared by the shell and the water so they meet in one glow)
const HAZE = /* glsl */ `
vec3 s56Haze(vec3 c, vec3 wp) {
  float d = length(wp - cameraPosition);
  float k = smoothstep(9.0, 70.0, d);
  vec3 far = mix(vec3(0.16, 0.10, 0.62), vec3(0.42, 0.55, 1.02), smoothstep(26.0, 75.0, d));
  return mix(c, far, k * 0.9);
}`;

// ---------------------------------------------------------------- helpers
function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

/**
 * Builds the s56 tunnel into the live game. ctx: { scene, TR, L, W, env, loader, mascot, renderer }.
 * Returns { update(dt, time, phase), camera(off, look) -> fov, heroOffset(m, t, dt), hideLegacy(), report }.
 */
export async function buildS56(ctx) {
  const { scene, TR, W, env, loader } = ctx, S = S56, rnd = mulberry(0x5c56);
  const report = { on: true, parts: [], hidden: [], errors: [] };
  const root = new THREE.Group(); root.name = 's56Tunnel'; scene.add(root);
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  const frameM = (u, out = new THREE.Matrix4()) => { TR.frame(u, F); return out.makeBasis(F.R, F.U, F.T).setPosition(F.P); };
  const U0 = S.u0, U1 = S.u1, nCh = Math.ceil((U1 - U0) / S.chunk);
  const timeU = { value: 0 }, heroU = { value: new THREE.Vector4(0, 0, 0, 0) };

  // ------------------------------------------------ materials
  const M = {
    pink: new THREE.MeshStandardMaterial({ color: 0xe8459f, emissive: 0xa0106a, emissiveIntensity: 0.5, metalness: 0.15, roughness: 0.3, envMap: env, envMapIntensity: 0.9 }),
    pinkDeep: new THREE.MeshStandardMaterial({ color: 0xe63a9a, emissive: 0x8a0e55, emissiveIntensity: 0.35, metalness: 0.2, roughness: 0.35, envMap: env, envMapIntensity: 0.8 }),
    gold: new THREE.MeshStandardMaterial({ color: 0xf7993f, emissive: 0x7a2c00, emissiveIntensity: 0.6, metalness: 0.92, roughness: 0.26, envMap: env, envMapIntensity: 1.25 }),
    lav: new THREE.MeshStandardMaterial({ color: 0xa070d0, emissive: 0x4a1a70, emissiveIntensity: 0.45, metalness: 0.75, roughness: 0.28, envMap: env, envMapIntensity: 1.1 }),
    deck: new THREE.MeshStandardMaterial({ color: 0x9a6fd8, emissive: 0x3a1a70, emissiveIntensity: 0.4, metalness: 0.6, roughness: 0.35, envMap: env }),
    glass: new THREE.MeshStandardMaterial({ color: 0xd845f7, emissive: 0xb020f0, emissiveIntensity: 1.35, metalness: 0.1, roughness: 0.08, transparent: true, opacity: 0.82, envMap: env, envMapIntensity: 1.4 }),
    core: new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.35, 2.6) }),
    amber: new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.35, 0.55) }),
    cyan: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.5, 1.9, 2.2) }),
    yellow: new THREE.MeshBasicMaterial({ color: new THREE.Color(2.0, 1.7, 0.4) }),
    pinkGloss: new THREE.MeshStandardMaterial({ color: 0xf592ee, emissive: 0x9a2a8a, emissiveIntensity: 0.55, metalness: 0.3, roughness: 0.15, envMap: env, envMapIntensity: 1.2 }),
    cream: new THREE.MeshStandardMaterial({ color: 0xffe2a0, emissive: 0x8a5a10, emissiveIntensity: 0.6, metalness: 0.7, roughness: 0.3, envMap: env }),
  };

  // ------------------------------------------------ 1. the drum shell (perforated lavender metal), in chunks so each can be culled
  const shellMat = new THREE.ShaderMaterial({
    uniforms: { uTime: timeU, uArch: { value: new THREE.Vector2(S.arch.step, S.arch.from) } },
    vertexShader: /* glsl */ `
      attribute vec2 aAU; varying vec2 vAU; varying vec3 vW; varying vec3 vN;
      void main() { vAU = aAU; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(normal); gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; uniform vec2 uArch; varying vec2 vAU; varying vec3 vW; varying vec3 vN;
      ${NOISE}
      ${HAZE}
      void main() {
        float a = vAU.x, u = vAU.y, up = cos(a), s = a * ${f(S.R)};
        // lavender metal: lighter toward the crown, violet toward the water, brushed streaks round the drum
        float dc = length(vW - cameraPosition);
        vec3 c = mix(vec3(0.14, 0.05, 0.30), vec3(0.28, 0.10, 0.48), smoothstep(-0.75, 0.6, up));
        c = mix(c, vec3(0.34, 0.15, 0.60), smoothstep(0.55, 1.0, up) * 0.6);
        c = mix(c, vec3(0.16, 0.08, 0.58), smoothstep(5.0, 16.0, dc) * 0.8);
        c *= 0.88 + 0.22 * s5f(vec2(s * 6.0, u * 0.35));
        // polished streaks along the run (the bright sheen of the reference's upper walls)
        float st = pow(0.5 + 0.5 * cos(a * 5.0 + 0.35), 12.0) * smoothstep(-0.5, 0.6, up);
        c += vec3(0.55, 0.20, 0.55) * st;
        // seams between panels and their rivets
        float pu = fract(u / 1.3 + 0.5);
        float seam = 1.0 - smoothstep(0.0, 0.025 + fwidth(u / 1.3), min(pu, 1.0 - pu));
        c *= 1.0 - 0.35 * seam;
        // the oval perforations: dark violet holes with a lit lip, staggered rows, faded where they would alias
        vec2 g = vec2(s / 0.30, u / 0.26); g.x += 0.5 * mod(floor(g.y), 2.0);
        vec2 q = (fract(g) - 0.5) * vec2(1.0, 1.55);
        float hr = length(q), aa = max(0.04, 2.0 * length(fwidth(g)));
        float hole = 1.0 - smoothstep(0.26 - aa, 0.26 + aa, hr), lip = smoothstep(0.24, 0.30, hr) * (1.0 - smoothstep(0.30, 0.38 + aa, hr));
        float vis = 1.0 - smoothstep(0.25, 0.6, aa);
        c = mix(c, mix(vec3(0.05, 0.01, 0.11), vec3(0.05, 0.03, 0.35), smoothstep(5.0, 14.0, dc)), hole * 0.92 * vis);
        c += vec3(0.45, 0.22, 0.48) * lip * clamp(0.6 - q.y * 2.2, 0.0, 1.0) * vis;
        // warm pink-gold glow round every arch, amber lamp light on the upper walls
        float da = u - uArch.y, ka = da - uArch.x * floor(da / uArch.x + 0.5);
        float glow = exp(-ka * ka / 0.35) * step(uArch.y - 1.0, u);
        c += vec3(0.78, 0.05, 0.41) * glow * 0.5 * (0.4 + 0.6 * smoothstep(-0.6, 0.6, up));
        c += vec3(1.0, 0.62, 0.25) * glow * 0.35 * (exp(-pow((abs(a) - 0.65) / 0.22, 2.0)) + exp(-a * a / 0.05));
        // the view: a soft sheen where the wall turns from the camera
        vec3 V = normalize(cameraPosition - vW); float fr = pow(1.0 - abs(dot(V, vN)), 3.0);
        c += vec3(0.55, 0.22, 0.55) * fr * 0.6;
        // darker just above the water line (the water's shadow), a turquoise reflection on it
        c = mix(c, c * vec3(0.55, 0.6, 1.0) + vec3(0.0, 0.08, 0.18), smoothstep(-0.45, -0.68, up));
        c = s56Haze(c, vW);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
    side: THREE.BackSide,
  });
  {
    const NA = 72, A0 = -2.36, A1 = 2.36, du = 0.5;
    for (let ci = 0; ci < nCh; ci++) {
      const ua = U0 + ci * S.chunk, ub = Math.min(U1, ua + S.chunk), rows = Math.round((ub - ua) / du) + 1;
      const pos = new Float32Array(rows * (NA + 1) * 3), nor = new Float32Array(rows * (NA + 1) * 3), au = new Float32Array(rows * (NA + 1) * 2), idx = [];
      for (let i = 0; i < rows; i++) {
        const u = ua + (ub - ua) * (i / (rows - 1)); TR.frame(u, F);
        for (let j = 0; j <= NA; j++) {
          const a = A0 + (A1 - A0) * (j / NA), sx = Math.sin(a), cy = Math.cos(a), k = i * (NA + 1) + j;
          const x = S.R * sx, h = S.axisH + S.R * cy;
          const p = F.P.clone().addScaledVector(F.R, x).addScaledVector(F.U, h), n = F.R.clone().multiplyScalar(-sx).addScaledVector(F.U, -cy);
          pos.set([p.x, p.y, p.z], k * 3); nor.set([n.x, n.y, n.z], k * 3); au.set([a, u], k * 2);
        }
      }
      for (let i = 0; i < rows - 1; i++) for (let j = 0; j < NA; j++) { const a = i * (NA + 1) + j, b = a + NA + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
      g.setAttribute('aAU', new THREE.BufferAttribute(au, 2)); g.setIndex(idx); g.computeBoundingSphere();
      const mesh = new THREE.Mesh(g, shellMat); mesh.name = 's56Shell'; root.add(mesh);
    }
    report.parts.push('shell x' + nCh);
  }

  // ------------------------------------------------ 2. the arches (instanced along the run in the track's frames)
  {
    const r = S.R - 0.06, beta = Math.asin(S.axisH / r), arc = Math.PI + 2 * beta;
    const ring = (rad, tube, rs, ts, zScale, z = 0) => { const g = new THREE.TorusGeometry(rad, tube, rs, ts, arc); g.rotateZ(-beta); g.scale(1, 1, zScale); g.translate(0, S.axisH, z); return g; };
    const lampAt = (ang, rad) => { const g = new THREE.CapsuleGeometry(0.055, 0.46, 4, 10); g.rotateZ(-ang); g.translate(Math.sin(ang) * rad, S.axisH + Math.cos(ang) * rad, -0.05); return g; };
    const parts = [
      [ring(r, 0.11, 10, 72, 2.2), M.lav],
      [ring(r - 0.1, 0.05, 8, 72, 3.2), M.pink],
      [mergeGeometries([ring(r - 0.03, 0.03, 6, 72, 1, 0.25), ring(r - 0.03, 0.03, 6, 72, 1, -0.25)]), M.pinkGloss],
      [mergeGeometries([lampAt(0.65, r - 0.14), lampAt(-0.65, r - 0.14), lampAt(0.0, r - 0.14)]), M.amber],
    ];
    const us = []; for (let u = S.arch.from; u < U1; u += S.arch.step) us.push(u);
    const mm = new THREE.Matrix4();
    for (const [g, mat] of parts) {
      const im = new THREE.InstancedMesh(g, mat, us.length); im.name = 's56Arches';
      us.forEach((u, i) => im.setMatrixAt(i, frameM(u, mm))); im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); root.add(im);
    }
    // brass ceiling lamps on every second arch, between the lamp bars
    const lamp = mergeGeometries([new THREE.CylinderGeometry(0.012, 0.012, 0.22, 6).translate(0, -0.11, 0), new THREE.CylinderGeometry(0.1, 0.17, 0.16, 18).translate(0, -0.28, 0)]);
    lamp.translate(0, S.axisH + r - 0.08, 0.9);
    const bulb = new THREE.SphereGeometry(0.1, 16, 10); bulb.translate(0, S.axisH + r - 0.44, 0.9);
    const lus = us.filter((_, i) => i % 2 === 0);
    for (const [g, mat] of [[lamp, M.gold], [bulb, M.amber]]) {
      const im = new THREE.InstancedMesh(g, mat, lus.length); im.name = 's56Lamps';
      lus.forEach((u, i) => im.setMatrixAt(i, frameM(u, mm))); im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); root.add(im);
    }
    report.parts.push('arches x' + us.length);
  }

  // ------------------------------------------------ 3. the banks: pink-and-gold machinery on both sides (merged per material per chunk)
  const chunks = Array.from({ length: nCh }, () => new Map());
  const put = (u, geo, mat, local) => {   // geo in a module's local frame (x across, y up, z along), placed at track distance u
    const ci = Math.min(nCh - 1, Math.max(0, Math.floor((u - U0) / S.chunk)));
    const g = geo.clone(); if (local) g.applyMatrix4(local); g.applyMatrix4(frameM(u));
    const c = chunks[ci]; if (!c.has(mat)) c.set(mat, []); c.get(mat).push(g);
  };
  const T4 = (x, y, z, rx = 0, ry = 0, rz = 0, s = 1) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(s, s, s));
  const G = {
    cyl: (rt, rb, h, n = 28) => new THREE.CylinderGeometry(rt, rb, h, n),
    tor: (r, t, n = 28) => new THREE.TorusGeometry(r, t, 8, n),
    sph: (r) => new THREE.SphereGeometry(r, 18, 12),
    box: (x, y, z) => new THREE.BoxGeometry(x, y, z),
  };
  const pawMedal = (s) => {   // a gold paw medallion facing the channel (local: centred, facing -s x)
    const out = [];
    const disc = G.cyl(0.21, 0.21, 0.06, 32); disc.rotateZ(Math.PI / 2); out.push([disc, M.gold]);
    const rim = G.tor(0.205, 0.03, 32); rim.rotateY(Math.PI / 2); rim.translate(-s * 0.03, 0, 0); out.push([rim, M.gold]);
    const pad = G.sph(0.075); pad.scale(0.45, 0.85, 1.05); pad.translate(-s * 0.035, -0.035, 0); out.push([pad, M.cream]);
    for (const [y, z] of [[0.06, -0.1], [0.11, -0.035], [0.11, 0.035], [0.06, 0.1]]) { const t = G.sph(0.032); t.scale(0.45, 1.2, 1); t.translate(-s * 0.035, y, z); out.push([t, M.cream]); }
    return out;
  };
  const bankX = (h) => Math.sqrt(Math.max(0, S.R * S.R - (h - S.axisH) ** 2));
  let tankN = 0;
  for (let u = S.u0 + 2, k = 0; u < U1 - 1; u += S.bank.step / 2, k++) {
    const s = k % 2 === 0 ? 1 : -1, variant = Math.floor(k / 2) % 3, xi = S.bank.inner;
    // the deck along the bank (the platform the machines stand on, lapped by the water) and its gold railing
    const deck = G.box(bankX(0.0) - xi + 0.3, 0.34, S.bank.step); put(u, deck, M.deck, T4(s * (xi + (bankX(0) - xi + 0.3) / 2), -0.1, 0));
    const lip = G.box(0.06, 0.06, S.bank.step); put(u, lip, M.gold, T4(s * xi, 0.08, 0));
    for (let z = -S.bank.step / 2 + 0.25; z < S.bank.step / 2; z += 0.65) put(u, G.cyl(0.022, 0.022, 0.5, 8), M.gold, T4(s * (xi + 0.06), 0.33, z));
    for (const y of [0.36, 0.56]) { const rail = G.cyl(0.02, 0.02, S.bank.step, 8); rail.rotateX(Math.PI / 2); put(u, rail, M.gold, T4(s * (xi + 0.06), y, 0)); }
    if (variant !== 1) {
      // a pink drum housing with gold bands, its paw medallion and control lights to the channel, a glowing violet tank on top, a pipe into the wall
      const x = s * (xi + 0.52), z = variant === 0 ? -0.5 : 0.6;
      put(u, G.cyl(0.42, 0.46, 0.66, 32), M.pink, T4(x, 0.38, z));
      for (const y of [0.08, 0.68]) { const b = G.tor(0.445, 0.04, 32); b.rotateX(Math.PI / 2); put(u, b, M.gold, T4(x, y, z)); }
      for (const [g, mat] of pawMedal(s)) put(u, g, mat, T4(x - s * 0.43, 0.4, z));
      put(u, G.sph(0.05), variant === 0 ? M.cyan : M.yellow, T4(x - s * 0.36, 0.62, z + 0.3));
      put(u, G.sph(0.045), M.amber, T4(x - s * 0.36, 0.62, z - 0.3));
      put(u, G.cyl(0.34, 0.4, 0.08, 32), M.gold, T4(x, 0.75, z));
      put(u, G.cyl(0.27, 0.27, 0.6, 28), M.glass, T4(x, 1.08, z));
      put(u, G.sph(0.15), M.core, T4(x, 1.06, z)); tankN++;
      for (const y of [0.8, 1.38]) put(u, G.cyl(0.31, 0.31, 0.07, 28), M.gold, T4(x, y, z));
      const dome = new THREE.SphereGeometry(0.22, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2); put(u, dome, M.pinkDeep, T4(x, 1.41, z));
      const wx = bankX(1.9) - 0.05, pts = [new THREE.Vector3(x, 1.58, z), new THREE.Vector3(x, 1.85, z), new THREE.Vector3((x + s * wx) / 2, 2.05, z + 0.2), new THREE.Vector3(s * wx, 2.1, z + 0.35)];
      put(u, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.055, 10), M.gold);
      for (const p of [pts[1], pts[3]]) { const fl = G.tor(0.07, 0.02, 14); fl.rotateX(Math.PI / 2); put(u, fl, M.gold, T4(p.x, p.y, p.z)); }
    } else {
      // a tall glass tank on a pink base (the reference's left-hand tanks) with a gold cage
      const x = s * (xi + 0.48), z = 0;
      put(u, G.cyl(0.36, 0.4, 0.34, 28), M.pinkDeep, T4(x, 0.2, z));
      put(u, G.cyl(0.3, 0.3, 0.9, 28), M.glass, T4(x, 0.82, z));
      put(u, G.sph(0.19), M.core, T4(x, 0.82, z)); tankN++;
      for (const y of [0.38, 1.28]) put(u, G.cyl(0.35, 0.35, 0.08, 28), M.gold, T4(x, y, z));
      for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2 + 0.4; put(u, G.cyl(0.016, 0.016, 0.9, 6), M.gold, T4(x + Math.cos(a) * 0.32, 0.82, z + Math.sin(a) * 0.32)); }
      const lid = new THREE.SphereGeometry(0.3, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2); put(u, lid, M.gold, T4(x, 1.31, z));
    }
  }
  // crown pipes along the ceiling (both sides of the lamps), with flanges at every arch
  for (const side of [-1, 1]) {
    const ang = side * 0.36, rr = S.R - 0.2;
    for (let ci = 0; ci < nCh; ci++) {
      const ua = U0 + ci * S.chunk, ub = Math.min(U1, ua + S.chunk), pts = [];
      for (let u = ua; u <= ub + 0.01; u += 0.5) { TR.frame(u, F); pts.push(F.P.clone().addScaledVector(F.R, Math.sin(ang) * rr).addScaledVector(F.U, S.axisH + Math.cos(ang) * rr)); }
      const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), Math.max(8, pts.length * 2), 0.06, 10);
      const c = chunks[ci]; if (!c.has(M.gold)) c.set(M.gold, []); c.get(M.gold).push(g);
    }
  }
  chunks.forEach((c, ci) => { for (const [mat, list] of c) { const g = mergeGeometries(list.map((x) => (x.index ? x : x)), false); if (!g) continue; g.computeBoundingSphere(); const m = new THREE.Mesh(g, mat); m.name = 's56Bank' + ci; root.add(m); for (const x of list) x.dispose(); } });
  report.parts.push('banks (' + tankN + ' tanks)');

  // ------------------------------------------------ 4. the user's Tripo models: machine housings on the banks, the cobalt gear
  const load = (url) => new Promise((ok, no) => loader.load(url, ok, undefined, no));
  const dress = (o) => o.traverse((c) => { if (c.isMesh) { c.material = c.material.clone(); c.material.envMap = env; c.material.envMapIntensity = 1.0; c.material.emissive = new THREE.Color(0x3a0f30); c.material.emissiveIntensity = 0.5; } });
  const gears = [];
  try {
    const [gh, gg] = await Promise.all([load('models/opening/housing_tripo_821.glb'), load('models/opening/gear_v2_tripo.glb')]);
    // housings: one instanced mesh per chunk (culled per chunk), between the drum housings, long side along the run
    let hm = null; gh.scene.traverse((c) => { if (c.isMesh && !hm) hm = c; });
    if (hm) {
      hm.updateWorldMatrix(true, false); const hg = hm.geometry.clone(); hg.applyMatrix4(hm.matrixWorld); hg.computeBoundingBox();
      const bb = hg.boundingBox, sz = bb.getSize(new THREE.Vector3()), kh = 1.55 / sz.z; hg.translate(-(bb.min.x + bb.max.x) / 2, -bb.min.y, -(bb.min.z + bb.max.z) / 2); hg.scale(kh, kh, kh);
      const hmat = hm.material.clone(); hmat.envMap = env; hmat.envMapIntensity = 1.1; hmat.emissive = new THREE.Color(0x40102a); hmat.emissiveIntensity = 0.45;
      const per = Array.from({ length: nCh }, () => []);
      for (let u = S.u0 + 2 + S.bank.step * 0.5, k = 0; u < U1 - 1; u += S.bank.step / 2, k++) {
        const s = k % 2 === 0 ? -1 : 1, x = s * (S.bank.inner + 0.36);
        per[Math.min(nCh - 1, Math.floor((u - U0) / S.chunk))].push(frameM(u).multiply(T4(x, 0.02, 0)));
      }
      per.forEach((list, ci) => { if (!list.length) return; const im = new THREE.InstancedMesh(hg, hmat, list.length); im.name = 's56Housing' + ci; list.forEach((m, i) => im.setMatrixAt(i, m)); im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); root.add(im); });
      report.parts.push('housing_tripo_821');
    }
    // gears: face to the channel, turning on their hubs
    const gb = new THREE.Box3().setFromObject(gg.scene), gs = gb.getSize(new THREE.Vector3()), gc = gb.getCenter(new THREE.Vector3()), kg = S.gear.d / Math.max(gs.x, gs.y);
    for (const [u, side] of S.gears) {
      if (u > U1) continue;
      const holder = new THREE.Group(); holder.name = 's56Gear'; holder.matrixAutoUpdate = false;
      holder.matrix.copy(frameM(u).multiply(T4(side * S.gear.x, S.gear.h, 0, 0, -side * Math.PI / 2, 0)));
      const spin = new THREE.Group(); holder.add(spin);
      const m = gg.scene.clone(true); dress(m); m.scale.setScalar(kg); m.position.copy(gc).multiplyScalar(-kg); spin.add(m);
      const hub = new THREE.Mesh(G.cyl(0.2, 0.26, 0.5, 24), M.gold); hub.rotation.x = Math.PI / 2; hub.position.z = -0.25; holder.add(hub);
      root.add(holder); gears.push({ spin, side });
    }
    report.parts.push('gear_v2_tripo x' + gears.length);
  } catch (e) { report.errors.push('models: ' + ((e && e.message) || e)); }

  // ------------------------------------------------ 5. the water: a real displaced wave surface along the run
  const waterMat = new THREE.ShaderMaterial({
    uniforms: { uTime: timeU, uHero: heroU },
    vertexShader: /* glsl */ `
      attribute vec2 aXU; attribute vec3 aR; attribute vec3 aUp;
      uniform float uTime; uniform vec4 uHero;   // hero x, u, speed across, swim power
      varying vec3 vW; varying vec3 vN; varying vec2 vXU; varying float vH; varying float vRing; varying float vWake;
      ${WAVE_GLSL}
      void main() {
        vec3 wv = s56Wave(aXU.x, aXU.y, uTime);
        // the water piles round him (a rounded collar) and dips just inside it; a V wake behind him
        vec2 d = vec2((aXU.x - uHero.x) / 0.66, (aXU.y - uHero.y) / 0.6);
        float rr = length(d), ring = exp(-pow((rr - 1.0) / 0.28, 2.0)) * uHero.w;
        float bu = aXU.y - uHero.y, side = abs(aXU.x - uHero.x);
        float wake = bu < 0.0 ? exp(-pow((side - 0.55 - 0.32 * (-bu)) / 0.16, 2.0)) * exp(bu / 4.5) * uHero.w : 0.0;
        float h = wv.x + 0.09 * ring - 0.08 * exp(-rr * rr * 2.5) * uHero.w + 0.05 * wake;
        vec3 aT = cross(aR, aUp);
        vec3 p = position + aUp * h;
        vN = normalize(aUp - wv.y * aR - wv.z * aT);
        vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz; vXU = aXU; vH = wv.x; vRing = ring; vWake = wake;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uTime; uniform vec4 uHero;
      varying vec3 vW; varying vec3 vN; varying vec2 vXU; varying float vH; varying float vRing; varying float vWake;
      ${NOISE}
      ${HAZE}
      void main() {
        vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
        // fine moving ripples on top of the geometry's waves (normal detail)
        vec2 rp = vec2(vXU.x * 3.2, vXU.y * 1.6 - uTime * 2.2);
        float n1 = s5f(rp), n2 = s5f(rp * 2.3 + vec2(4.1, -uTime * 1.3));
        N = normalize(N + vec3(n1 - 0.5, 0.0, n2 - 0.5) * 0.35);
        float ndv = clamp(dot(N, V), 0.0, 1.0);
        // body colour: deep cobalt in the troughs, saturated azure on the slopes, turquoise on the lifted crests
        vec3 deep = vec3(0.0, 0.07, 0.67), cob = vec3(0.0, 0.26, 0.95), turq = vec3(0.06, 0.54, 0.98);
        float lift = smoothstep(-0.12, 0.16, vH + (n1 - 0.5) * 0.08);
        vec3 c = mix(deep, cob, smoothstep(-0.2, 0.05, vH));
        c = mix(c, turq, lift * 0.75);
        c = mix(c, turq * 1.15, (1.0 - ndv) * 0.35);
        // reflection of the lavender drum and pink lamps at grazing angles
        float fr = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);
        c = mix(c, vec3(0.72, 0.55, 1.0), fr * 0.55);
        // glints: the tunnel's far glow and the lamps on the crests
        vec3 Rf = reflect(-V, N), Dv = vW - cameraPosition; Dv.y = 0.0; Dv = normalize(Dv);
        float sp = pow(clamp(dot(Rf, normalize(Dv + vec3(0.0, 0.12, 0.0))), 0.0, 1.0), 90.0);   // the tunnel's bright far end
        float gl = pow(clamp(dot(Rf, normalize(Dv * 0.6 + vec3(0.0, 1.0, 0.0))), 0.0, 1.0), 45.0);   // the ceiling lamps
        c += vec3(0.9, 0.97, 1.2) * sp * 1.1 + vec3(1.0, 0.75, 0.9) * gl * 0.45 * (0.4 + lift);
        // white: controlled crests (high and broken), his contact collar and wake, a few streaks
        float crest = smoothstep(0.13, 0.2, vH + (n2 - 0.5) * 0.09) * smoothstep(0.45, 0.75, s5f(vXU * vec2(4.0, 2.0) + uTime * 0.6));
        float collar = smoothstep(0.35, 0.75, vRing * (0.6 + 0.8 * s5f(vXU * vec2(9.0, 7.0) + vec2(0.0, -uTime * 3.0))));
        float wk = smoothstep(0.3, 0.7, vWake * (0.5 + s5f(vXU * vec2(8.0, 5.0) + vec2(0.0, -uTime * 2.0))));
        float streak = smoothstep(0.78, 0.86, s5f(vec2(vXU.x * 2.0, vXU.y * 0.5 - uTime * 0.9))) * 0.5;
        float white = clamp(crest + collar + wk * 0.8 + streak * lift, 0.0, 1.0);
        c = mix(c, vec3(0.92, 0.97, 1.05), white * 0.85);
        c = s56Haze(c, vW);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  {
    const NX = 44, X0 = -2.08, X1 = 2.08, du = 0.3;
    for (let ci = 0; ci < nCh; ci++) {
      const ua = U0 + ci * S.chunk, ub = Math.min(U1, ua + S.chunk), rows = Math.round((ub - ua) / du) + 1, n = rows * (NX + 1);
      const pos = new Float32Array(n * 3), xu = new Float32Array(n * 2), aR = new Float32Array(n * 3), aUp = new Float32Array(n * 3), idx = [];
      for (let i = 0; i < rows; i++) {
        const u = ua + (ub - ua) * (i / (rows - 1)); TR.frame(u, F);
        for (let j = 0; j <= NX; j++) {
          const x = X0 + (X1 - X0) * (j / NX), k = i * (NX + 1) + j, b = W.baseHeight(ctx.L, x, u);
          const p = F.P.clone().addScaledVector(F.R, x).addScaledVector(F.U, b);
          pos.set([p.x, p.y, p.z], k * 3); xu.set([x, u], k * 2); aR.set([F.R.x, F.R.y, F.R.z], k * 3); aUp.set([F.U.x, F.U.y, F.U.z], k * 3);
        }
      }
      for (let i = 0; i < rows - 1; i++) for (let j = 0; j < NX; j++) { const a = i * (NX + 1) + j, b = a + NX + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aXU', new THREE.BufferAttribute(xu, 2));
      g.setAttribute('aR', new THREE.BufferAttribute(aR, 3)); g.setAttribute('aUp', new THREE.BufferAttribute(aUp, 3)); g.setIndex(idx); g.computeBoundingSphere(); g.boundingSphere.radius += 0.5;
      const mesh = new THREE.Mesh(g, waterMat); mesh.name = 's56Water'; root.add(mesh);
    }
    report.parts.push('water x' + nCh);
  }

  // ------------------------------------------------ 6. splashes: small droplets thrown from his sides, more when he steers or strokes
  const NS = 220, drops = [], dropMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.15, 1.25, 1.35), transparent: true, opacity: 0.9, depthWrite: false });
  const dropMesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), dropMat, NS); dropMesh.name = 's56Splash'; dropMesh.frustumCulled = false; dropMesh.renderOrder = 3; root.add(dropMesh);
  for (let i = 0; i < NS; i++) drops.push({ life: 0, max: 1, p: new THREE.Vector3(), v: new THREE.Vector3(), s: 0.02 });
  let dropI = 0, carry = 0, lastX = null;
  const emit = (m, t, n, power) => {
    for (let i = 0; i < n; i++) {
      const d = drops[dropI]; dropI = (dropI + 1) % NS;
      const side = rnd() < 0.5 ? -1 : 1, ang = (rnd() - 0.5) * 1.9, x = m.x + side * (0.5 + rnd() * 0.12) * Math.cos(ang * 0.5), u = m.z + Math.sin(ang) * 0.42 - 0.05;
      const h = W.baseHeight(ctx.L, x, u) + s56Wave(x, u, t) + 0.05;
      TR.frame(u, F); d.p.copy(F.P).addScaledVector(F.R, x).addScaledVector(F.U, h);
      const sp = S.splash.speed * power * (0.5 + rnd() * 0.7);
      d.v.copy(F.R).multiplyScalar(side * sp * (0.35 + rnd() * 0.5)).addScaledVector(F.U, sp * (0.7 + rnd() * 0.6)).addScaledVector(F.T, (rnd() - 0.6) * sp * 0.5);
      d.life = 0; d.max = 0.35 + rnd() * 0.35; d.s = 0.018 + rnd() * 0.03;
    }
  };

  // ------------------------------------------------ 7. hiding the old blue tunnel's water and overlays where s56 is drawn
  function hideLegacy() {
    const names = /^(heroSwell|heroSplash|heroFloor|heroWalls|lqFloor|lqWaterlineBubbles|lqSpraySheets|spCurls|spLumps|matchFloor|matchWall|r3Swirl|structWater|waterChunk|wetChunk|l1Water|swirl)/i;
    scene.traverse((o) => { if (o === root || !o.name || o.userData.s56Keep) return; let p = o; while (p) { if (p === root) return; p = p.parent; } if (names.test(o.name) && o.visible) { o.visible = false; o.userData.s56Hidden = true; report.hidden.push(o.name); } });
  }

  // ------------------------------------------------ per frame
  const mm = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  let heroOff = 0;
  function update(dt, time, phase, m) {
    timeU.value = time;
    for (const g of gears) g.spin.rotation.z = -time * S.gear.spin * g.side;
    if (m) {
      const vx = lastX === null ? 0 : (m.x - lastX) / Math.max(dt, 1e-3); lastX = m.x;
      const running = phase === 'running', inWater = !m.air;
      heroU.value.set(m.x, m.z, vx, inWater ? 1 : Math.max(0, heroU.value.w - dt * 4));
      if (inWater) {
        carry += dt * S.splash.rate * (running ? 1 : 0.35) * (1 + Math.min(2, Math.abs(vx) * 0.5));
        const n = Math.floor(carry); carry -= n; if (n) emit(m, time, n, running ? 1 : 0.6);
        if (Math.abs(vx) > 2.5 && rnd() < dt * 8) emit(m, time, S.splash.burst / 4, 1.3);
      }
    }
    for (let i = 0; i < NS; i++) {
      const d = drops[i];
      if (d.life >= d.max) { mm.makeScale(0, 0, 0); dropMesh.setMatrixAt(i, mm); continue; }
      d.life += dt; d.v.y -= 9.8 * dt; d.p.addScaledVector(d.v, dt);
      const k = 1 - d.life / d.max; sv.setScalar(d.s * (0.4 + 0.6 * k)); mm.compose(d.p, q, sv); dropMesh.setMatrixAt(i, mm);
    }
    dropMesh.instanceMatrix.needsUpdate = true;
  }
  // his ride on the s56 waves (visual only): the difference between the new wave and the game's own small waves, a little lower (submerged)
  function heroOffset(m, t, dt) {
    const target = m.air ? 0 : (s56Wave(m.x, m.z, t) - W.waves(m.x, m.z, t)) * S.hero.follow - S.hero.sink;
    heroOff += (target - heroOff) * Math.min(1, dt * 14);
    TR.frame(m.z, F); m.root.position.addScaledVector(F.U, heroOff);
    // lean with the slope of the water under him (a gentle roll and pitch)
    const e = 0.25, hx = s56Wave(m.x + e, m.z, t) - s56Wave(m.x - e, m.z, t), hu = s56Wave(m.x, m.z + e, t) - s56Wave(m.x, m.z - e, t);
    if (!m.air) { m.root.rotateZ(-hx * 0.9); m.root.rotateX(-hu * 0.6); }
  }
  function camera(off, look) { off.set(...S.cam.off); look.set(...S.cam.look); return S.cam.fov; }
  if (typeof window !== 'undefined') window.__bwS56Report = report;
  return { update, heroOffset, camera, hideLegacy, report, root };
}
