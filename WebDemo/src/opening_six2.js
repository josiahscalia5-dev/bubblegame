// six2 (9 November 2026, session 9ee07777): the user's SIX APPROVED PORTRAIT SCREENS (Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/,
// 864 x 1536) as the opening of the active game. Switch `six2` (with `six`; in the plain launch). Without it the opening is exactly the previous build
// (`?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3`, rollback branch claude/bubble-wash-rollback-before-six2).
//
// What it changes (the same girl, washer, door, hero, towels and drum; the same renderer and timeline clock; new staging and motion):
//   1 "The surprise hideout": the portrait camera of reference 01 (girl kneeling on the LEFT, the purple basket on a rug in the CENTRE-LOW foreground,
//     the pink-and-gold washer on the RIGHT, its door shut); the laundry room behind (sunset window, blue curtains, shelves of folded towels and
//     bottles, lavender-pink walls, a tiled floor, bubbles); the pink hero hides under the blue towel (a cloth hood: his eyes peek out at the player);
//     she breathes, blinks, pats the towel and looks at the washer, never at him.
//   2 "She loads the laundry": the door swings open; she grips the blue towel with both hands and lifts it off (cloth hanging from her hands), rises to
//     her knees and knee-walks to the open door (knees planted: no sliding), and pushes the towel into the drum (reference 02: he is left peeking from
//     the yellow towels in the basket, "!", and she never notices him).
//   3 "Oops! He goes in too": she scoops the next armful, the yellow towel, with him hidden in it, and pushes it in; the camera follows it to the door
//     rim (open door on the LEFT) and into the lavender-silver drum: he tumbles out, the blue towel flips over his head, the yellow towel beside him,
//     surprised "Oops!", cobalt water starts to run along the bottom.
//   4 "The wash begins": the front view of the washer (reference 04); she swings the door shut (swing, stop, latch, bounce) and moves out of shot;
//     the lights come on in sequence; the water rises and swirls round him, seen through the glass.
//   5 "Into the laundry tunnel": the current pulls him in and the camera follows through the porthole into the drum tunnel (darker lavender
//     perforated metal, pink-gold machinery, cobalt water with crests), behind him, into the live game.
// Looks and staging only: the game's seeded Math.random is never used (private generator), gameplay is untouched.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const SIX2_ON = LIST.includes('six') && LIST.includes('six2');

// every number the staging uses (window.__bwSix2 in the browser, for live tuning; the timeline reads them each frame)
export const SIX2 = {
  handOver: 9.15, seqEnd: 9.95,
  girl: { scale: 1.42, k1: [-0.5, 1.1], yaw1: 1.5, k2: [-0.5, 0.66], yaw2: 1.62, sit: 0.35 },   // knee spots (x, z) for scenes 1 and 2
  basket: { pos: [-0.14, 1.16], scale: 1.12, yaw: 0.0 },
  door: { open: -2.92 },
  cam: [   // [t (s after START; -1 = waiting), position, target, vertical fov]
    [-1, [-0.04, 0.6, 3.35], [-0.28, 0.56, 0.76], 52],
    [0.0, [-0.04, 0.6, 3.35], [-0.28, 0.56, 0.76], 52],
    [0.9, [-0.02, 0.62, 3.3], [-0.24, 0.58, 0.74], 51],
    [2.2, [0.05, 0.7, 2.75], [-0.18, 0.6, 0.55], 50],
    [3.2, [0.05, 0.7, 2.75], [-0.18, 0.6, 0.55], 50],
    [4.0, [0.22, 0.74, 1.3], [0.32, 0.6, -0.2], 52],
    [4.9, [0.25, 0.7, 1.05], [0.33, 0.58, -0.3], 50],
    [5.35, [0.28, 0.78, 3.0], [0.3, 0.72, 0.27], 36],
    [6.85, [0.3, 0.76, 2.7], [0.3, 0.71, 0.27], 36],
    [7.6, [0.3, 0.64, 0.24], [0.3, 0.56, -2.0], 54],
  ],
  scenes: [[-1, 1], [0.0, 2], [3.25, 3], [5.3, 4], [7.3, 5], [9.15, 6]],   // [from t, scene number] for the captions
  water: { rise: 0.17 },
};
if (SIX2_ON && typeof window !== 'undefined') window.__bwSix2 = SIX2;

// ---------------------------------------------------------------- small helpers
let seed = 0x51c2;
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };   // private (never the game's Math.random)
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const sm = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const V = (a, b, c) => new THREE.Vector3(a, b, c);
function keys(t, ks) {   // smooth keys over arrays or numbers
  if (t <= ks[0][0]) return ks[0][1];
  for (let i = 0; i < ks.length - 1; i++) { const [t0, v0] = ks[i], [t1, v1] = ks[i + 1]; if (t <= t1) { const k = sm(t0, t1, t); return Array.isArray(v0) ? v0.map((v, j) => v + (v1[j] - v) * k) : v0 + (v1 - v0) * k; } }
  return ks[ks.length - 1][1];
}
function canvasTex(w, h, draw, srgb = true) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }
function terryTex(base, dark, light) {   // a soft looped terry-cloth texture
  return canvasTex(256, 256, (g, w, h) => { g.fillStyle = base; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 5200; i++) { const x = rnd() * w, y = rnd() * h, r = 1 + rnd() * 2.2; g.fillStyle = rnd() < 0.5 ? light : dark; g.globalAlpha = 0.18 + rnd() * 0.25; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
    g.globalAlpha = 0.5; g.fillStyle = light; g.fillRect(0, h * 0.84, w, h * 0.05); g.fillRect(0, h * 0.92, w, h * 0.015); g.globalAlpha = 1; });
}

// ---------------------------------------------------------------- the cloth (a 24 x 24 grid placed every frame)
// shapes: drape over a sphere (r: what is under it; L: half side; wrap 0 draped .. 1 bundle), or hang from two held corners
export function makeCloth(material, n = 24) {
  const geo = new THREE.PlaneGeometry(1, 1, n, n), mesh = new THREE.Mesh(geo, material); mesh.frustumCulled = false;
  const U = geo.attributes.position.array.slice(), cnt = geo.attributes.position.count, A = new Float32Array(cnt * 3), B = new Float32Array(cnt * 3);
  const drape = (out, r, L, wrap, hang, t, flut, sh = 0) => {
    const D = L * Math.SQRT2, arc = r * Math.PI * 0.5;
    for (let i = 0; i < cnt; i++) {
      const u = U[i * 3] * 2, v = U[i * 3 + 1] * 2 - sh, d = Math.hypot(u, v) * L, th = Math.atan2(v, u);
      const wr = 0.014 * Math.sin(th * 7 + d * 22) * Math.min(1, d / L) * (r / 0.15);
      let ax, ay, az;
      if (d < arc) { const ph = d / r, rr = r + wr; ax = Math.sin(ph) * Math.cos(th) * rr; ay = Math.cos(ph) * rr; az = Math.sin(ph) * Math.sin(th) * rr; }
      else { const e = d - arc, rr = r + e * 0.25 + wr * 2; ax = Math.cos(th) * rr; az = Math.sin(th) * rr; ay = -Math.min(e, hang) * 0.95 - Math.max(0, e - hang) * 0.15; }
      const ph2 = (d / D) * 2.75, tuft = 1 + 0.32 * sm(0.82, 1, d / D), rb = r * 1.04 * tuft + wr;
      const bx = Math.sin(ph2) * Math.cos(th) * rb, by = Math.cos(ph2) * rb, bz = Math.sin(ph2) * Math.sin(th) * rb;
      const f = flut * Math.min(1, d / L) * Math.sin(t * 7 + d * 14 + th * 2) * 0.012;
      out[i * 3] = ax + (bx - ax) * wrap + f; out[i * 3 + 1] = ay + (by - ay) * wrap + f * 0.6; out[i * 3 + 2] = az + (bz - az) * wrap;
    }
  };
  // hanging from two corners (world points pL, pR), side length S, swaying; the result is in WORLD space (the mesh then sits at the origin)
  const hangW = (out, pL, pR, S, t, sway, inward, camRight = null) => {
    const across = new THREE.Vector3().subVectors(pR, pL), w = Math.max(0.05, across.length()); across.normalize();
    const fwd = new THREE.Vector3(-across.z, 0, across.x).normalize();   // horizontal, perpendicular to the held edge
    const cr = camRight ? V(camRight.x, 0, camRight.z).normalize() : null, cf = cr ? V(-cr.z, 0, cr.x) : null;
    for (let i = 0; i < cnt; i++) {
      const u = U[i * 3] + 0.5, v = 0.5 - U[i * 3 + 1];   // u 0..1 along the held edge, v 0 (held) .. 1 (bottom)
      const drop = v * S * 0.98, sag = Math.sin(u * Math.PI) * 0.06 * (1 - v * 0.5) * (w / S);
      const fold = 0.025 * Math.sin(u * 15 + v * 4 + t * 2.1) * (0.3 + v) + 0.018 * Math.sin(u * 31 - v * 9) * v;
      const sw = sway * Math.sin(t * 3.1 + v * 2.2) * v * v * 0.06, bunch = (u - 0.5) * (1 - 0.35 * v);   // corners gather toward the middle lower down
      let px = pL.x + across.x * w * (0.5 + bunch) + fwd.x * (fold + sw + inward * v * v * 0.25), pz = pL.z + across.z * w * (0.5 + bunch) + fwd.z * (fold + sw + inward * v * v * 0.25);
      if (cr) { const mx = (pL.x + pR.x) / 2, mz = (pL.z + pR.z) / 2, fan = (u - 0.5) * S * (0.35 + 0.5 * Math.sin(Math.min(1, v * 1.6) * Math.PI / 2));
        px = mx + cr.x * fan + cf.x * (fold * 1.6 + sw) + fwd.x * inward * v * v * 0.25; pz = mz + cr.z * fan + cf.z * (fold * 1.6 + sw) + fwd.z * inward * v * v * 0.25; }
      const py = pL.y + (pR.y - pL.y) * u - drop - sag + 0.02 * Math.sin(u * 9 + t) * v;
      out[i * 3] = px; out[i * 3 + 1] = py; out[i * 3 + 2] = pz;
    }
  };
  const _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _b = new THREE.Vector3();
  const hood = (out, c, r, L, rx, ry, hang, t, sh, flut = 0.3) => {
    _q.setFromEuler(_e.set(rx, ry, 0, 'YXZ')); const arc = r * Math.PI * 0.5;
    for (let i = 0; i < cnt; i++) {
      const u = U[i * 3] * 2, v = U[i * 3 + 1] * 2 - sh, d = Math.hypot(u, v) * L, th = Math.atan2(v, u);
      const wr = 0.01 * Math.sin(th * 7 + d * 22) * Math.min(1, d / L) * (r / 0.12), f = flut * Math.min(1, d / L) * Math.sin(t * 2.2 + d * 14 + th * 2) * 0.006;
      if (d < arc) { const ph = d / r, rr = r + wr; _p.set(Math.sin(ph) * Math.cos(th) * rr, Math.cos(ph) * rr, Math.sin(ph) * Math.sin(th) * rr).applyQuaternion(_q).add(c); }
      else { const e = d - arc; _b.set(Math.cos(th) * (r + wr), 0, Math.sin(th) * (r + wr)).applyQuaternion(_q); const o = V(_b.x, 0, _b.z).normalize();
        _p.copy(_b).add(c).addScaledVector(o, 0.012 + e * 0.16 + wr * 1.5).add(V(0, -Math.min(e, hang) - Math.max(0, e - hang) * 0.12, 0)); }
      out[i * 3] = _p.x + f; out[i * 3 + 1] = _p.y; out[i * 3 + 2] = _p.z + f * 0.5;
    }
  };
  const apply = (src) => { const pa = geo.attributes.position; pa.array.set(src); pa.needsUpdate = true; geo.computeVertexNormals(); };
  return { mesh, A, B, drape, hangW, hood, apply, blend: (k) => { const o = new Float32Array(cnt * 3); for (let i = 0; i < o.length; i++) o[i] = A[i] + (B[i] - A[i]) * k; return o; } };
}

// ---------------------------------------------------------------- the laundry room of references 01 / 02
export function buildRoom2(env) {
  const g = new THREE.Group(); g.name = 'six2Room';
  const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0, envMap: env, envMapIntensity: 0.6, emissive: color, emissiveIntensity: 0.22, ...o });
  // the back wall: lavender-pink with soft vertical panelling, brighter round the window
  const wallT = canvasTex(512, 512, (c, w, h) => { const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#8a62d8'); gr.addColorStop(0.5, '#b585e6'); gr.addColorStop(1, '#e49ad8'); c.fillStyle = gr; c.fillRect(0, 0, w, h);
    c.globalAlpha = 0.12; for (let x = 0; x < w; x += 32) { c.fillStyle = '#ffffff'; c.fillRect(x, 0, 3, h); c.fillStyle = '#7a52c0'; c.fillRect(x + 3, 0, 2, h); } c.globalAlpha = 1; });
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(7, 4.4), std(0xffffff, { map: wallT, emissiveMap: wallT, emissiveIntensity: 0.42, roughness: 0.8 })); wall.position.set(0, 2.0, -1.3); g.add(wall);
  const side = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 4.4), std(0xffffff, { map: wallT, emissiveMap: wallT, emissiveIntensity: 0.5, roughness: 0.8 })); side.rotation.y = Math.PI / 2; side.position.set(-2.4, 2.0, 0.9); g.add(side);
  // the floor: glossy pale pink tiles
  const floorT = canvasTex(512, 512, (c, w, h) => { c.fillStyle = '#eab0dc'; c.fillRect(0, 0, w, h); for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { c.fillStyle = (i + j) % 2 ? '#f2c2e4' : '#e6acd8'; c.fillRect(i * 128 + 3, j * 128 + 3, 122, 122); }
    c.fillStyle = 'rgba(190,140,210,0.6)'; for (let i = 0; i <= 4; i++) { c.fillRect(i * 128 - 2, 0, 4, h); c.fillRect(0, i * 128 - 2, w, 4); } });
  floorT.wrapS = floorT.wrapT = THREE.RepeatWrapping; floorT.repeat.set(5, 4);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(9, 7), std(0xffffff, { map: floorT, emissiveMap: floorT, emissiveIntensity: 0.35, roughness: 0.18, metalness: 0.1, envMapIntensity: 1.3 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, 1.2); g.add(floor);
  // the window: a tall sunlit window (warm sky, a sunlit garden glow), white frame, mullions, behind blue curtains
  const win = new THREE.Group(); win.name = 'six2Window'; win.position.set(0.04, 1.36, -1.27); g.add(win);
  const skyT = canvasTex(256, 384, (c, w, h) => { const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#ffe7b0'); gr.addColorStop(0.45, '#fff3cf'); gr.addColorStop(0.7, '#ffd6a0'); gr.addColorStop(1, '#f6b0c8'); c.fillStyle = gr; c.fillRect(0, 0, w, h);
    const r = c.createRadialGradient(w * 0.62, h * 0.55, 4, w * 0.62, h * 0.55, w * 0.7); r.addColorStop(0, 'rgba(255,255,240,1)'); r.addColorStop(1, 'rgba(255,240,200,0)'); c.fillStyle = r; c.fillRect(0, 0, w, h);
    c.fillStyle = 'rgba(150,190,120,0.45)'; for (let i = 0; i < 18; i++) { c.beginPath(); c.arc(rnd() * w, h * (0.72 + rnd() * 0.25), 18 + rnd() * 30, 0, 7); c.fill(); } });
  const skyM = new THREE.MeshBasicMaterial({ map: skyT, color: new THREE.Color(1.25, 1.18, 1.08) });
  const W = 0.6, H = 1.05; const sky = new THREE.Mesh(new THREE.PlaneGeometry(W, H), skyM); win.add(sky);
  const frameM = std(0xfff4fb, { emissiveIntensity: 0.45, roughness: 0.4 });
  for (const [w, h, x, y] of [[W + 0.1, 0.06, 0, H / 2], [W + 0.1, 0.07, 0, -H / 2], [0.06, H, -W / 2, 0], [0.06, H, W / 2, 0], [0.035, H, 0, 0], [W, 0.035, 0, H * 0.18]]) { const b = new THREE.Mesh(new RoundedBoxGeometry(w, h, 0.06, 2, 0.012), frameM); b.position.set(x, y, 0.03); win.add(b); }
  const sill = new THREE.Mesh(new RoundedBoxGeometry(W + 0.24, 0.05, 0.2, 2, 0.015), frameM); sill.position.set(0, -H / 2 - 0.04, 0.08); win.add(sill);
  // warm light from the window
  const sun = new THREE.PointLight(0xffc890, 3.6, 4.5, 1.6); sun.position.set(0.04, 1.45, -0.7); g.add(sun);
  const rayM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.0, 0.9, 0.7), transparent: true, opacity: 0.07, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  for (let i = 0; i < 3; i++) { const r = new THREE.Mesh(new THREE.PlaneGeometry(0.22 + i * 0.06, 2.2), rayM); r.position.set(0.1 + i * 0.16, 0.95, -0.7 + i * 0.12); r.rotation.set(0.25, 0, -0.45); g.add(r); }
  // blue curtains: velvet folds, a rod, gathered at the sides of the window
  const curT = canvasTex(64, 256, (c, w, h) => { const gr = c.createLinearGradient(0, 0, w, 0); for (let i = 0; i <= 8; i++) gr.addColorStop(i / 8, i % 2 ? '#3f5fd8' : '#7a98ff'); c.fillStyle = gr; c.fillRect(0, 0, w, h); });
  curT.wrapS = THREE.RepeatWrapping;
  const curM = std(0xffffff, { map: curT, emissiveMap: curT, emissiveIntensity: 0.35, roughness: 0.7, side: THREE.DoubleSide });
  for (const [x, w] of [[-0.43, 0.32], [0.45, 0.34]]) {
    const cg = new THREE.PlaneGeometry(w, 1.6, 24, 8), p = cg.attributes.position;
    for (let i = 0; i < p.count; i++) { const u = p.getX(i) / w + 0.5, v = p.getY(i) / 1.85 + 0.5; p.setZ(i, 0.04 * Math.sin(u * Math.PI * 5) * (0.6 + 0.4 * v)); p.setX(i, p.getX(i) * (1 - 0.35 * (1 - v) * sm(0.0, 0.5, 1 - v))); }
    cg.computeVertexNormals(); const c = new THREE.Mesh(cg, curM); c.position.set(win.position.x + x, 1.4, -1.18); g.add(c);
  }
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 2.3, 10), std(0xffd27a, { metalness: 0.9, roughness: 0.25, emissiveIntensity: 0.4 })); rod.rotation.z = Math.PI / 2; rod.position.set(win.position.x, 2.2, -1.16); g.add(rod);
  // shelves of folded towels and bottles: the left wall area and beside the window
  const shelfM = std(0xf8e2f2, { emissiveIntensity: 0.4, roughness: 0.45 });
  const towelCols = [0xd9b8ff, 0xffb3dc, 0xb7c8ff, 0xc9a2ff, 0xffc8e8, 0xa9d8ff];
  const bottleCols = [[0xe6b6ff, 0xb070f0], [0xffb8e2, 0xf060b0], [0xb8d8ff, 0x5a8cf0]];
  const towelT = terryTex('#ffffff', '#d8c8ee', '#ffffff');
  const shelf = (x0, x1, y, z, items) => {
    const sh = new THREE.Mesh(new RoundedBoxGeometry(x1 - x0, 0.045, 0.34, 2, 0.015), shelfM); sh.position.set((x0 + x1) / 2, y, z); g.add(sh);
    let x = x0 + 0.05;
    for (const it of items) {
      if (it === 'T') { const n = 2 + Math.floor(rnd() * 3); const col = towelCols[Math.floor(rnd() * towelCols.length)];
        for (let k = 0; k < n; k++) { const t = new THREE.Mesh(new RoundedBoxGeometry(0.3, 0.07, 0.24, 3, 0.032), std(col, { map: towelT, emissiveIntensity: 0.4, roughness: 0.95 })); t.position.set(x + 0.15 + (rnd() - 0.5) * 0.015, y + 0.058 + k * 0.072, z + 0.02); g.add(t); }
        x += 0.33; }
      else { const [bc, cap] = bottleCols[Math.floor(rnd() * bottleCols.length)], hgt = 0.2 + rnd() * 0.1;
        const pts = [[0, 0], [0.06, 0], [0.068, 0.02], [0.068, hgt * 0.7], [0.045, hgt * 0.84], [0.025, hgt * 0.9], [0.025, hgt], [0, hgt]].map(([a, b]) => new THREE.Vector2(a, b));
        const bo = new THREE.Mesh(new THREE.LatheGeometry(pts, 24), new THREE.MeshPhysicalMaterial({ color: bc, roughness: 0.1, metalness: 0, envMap: env, envMapIntensity: 1.4, transmission: 0, transparent: true, opacity: 0.92, emissive: bc, emissiveIntensity: 0.35, clearcoat: 1 }));
        bo.position.set(x + 0.075, y + 0.022, z); g.add(bo);
        const cp = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.05, 14), std(cap, { emissiveIntensity: 0.4 })); cp.position.set(x + 0.075, y + 0.022 + hgt + 0.02, z); g.add(cp);
        x += 0.16; }
    }
  };
  shelf(-2.3, -0.5, 0.95, -1.08, ['B', 'T', 'T', 'B', 'T']); shelf(-2.3, -0.5, 1.45, -1.08, ['T', 'B', 'T', 'T', 'B']); shelf(-2.3, -0.5, 1.95, -1.08, ['B', 'B', 'T', 'T', 'B']);
  shelf(1.3, 2.6, 1.25, -1.08, ['T', 'B', 'T']); shelf(1.3, 2.6, 1.75, -1.08, ['B', 'T', 'T']);
  // a low cabinet under the left shelves
  const cab = new THREE.Mesh(new RoundedBoxGeometry(1.8, 0.62, 0.4, 3, 0.04), std(0xf6d6ee, { emissiveIntensity: 0.35, roughness: 0.4 })); cab.position.set(-1.4, 0.31, -1.05); g.add(cab);
  // the round fluffy rug under the basket
  const rugT = canvasTex(256, 256, (c, w, h) => { const r = c.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 2); r.addColorStop(0, '#b98af2'); r.addColorStop(0.8, '#a77ae8'); r.addColorStop(0.93, '#c9a6f6'); r.addColorStop(1, 'rgba(201,166,246,0)'); c.fillStyle = r; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 3000; i++) { const a = rnd() * 7, d = rnd() * w * 0.48; c.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.18)' : 'rgba(110,60,170,0.18)'; c.fillRect(w / 2 + Math.cos(a) * d, h / 2 + Math.sin(a) * d, 2, 2); } });
  const rug = new THREE.Mesh(new THREE.CircleGeometry(0.62, 48), new THREE.MeshStandardMaterial({ map: rugT, transparent: true, roughness: 1, emissive: 0xffffff, emissiveMap: rugT, emissiveIntensity: 0.3, depthWrite: false }));
  rug.rotation.x = -Math.PI / 2; rug.scale.set(1.25, 0.85, 1); rug.position.set(0, 0.004, 0); rug.name = 'six2Rug'; g.add(rug);
  // folded towels on the floor in the foreground corners (references 01 / 02: yellow and lavender at the left, sky blue at the right)
  const fg = [];
  for (const [x, z, col, n] of [[-0.95, 1.95, 0xffd25a, 2], [-0.95, 1.95, 0xc6a2ff, 1], [0.75, 2.0, 0x8fd0ff, 2]]) {
    for (let k = 0; k < n; k++) { const t = new THREE.Mesh(new RoundedBoxGeometry(0.36, 0.09, 0.26, 3, 0.04), std(col, { map: towelT, emissiveIntensity: 0.45, roughness: 0.95 })); t.position.set(x + (rnd() - 0.5) * 0.04, 0.045 + (col === 0xc6a2ff ? 0.18 : k * 0.09), z); t.rotation.y = (rnd() - 0.5) * 0.4; g.add(t); fg.push(t); }
  }
  const shT = canvasTex(128, 128, (c, w, h) => { const r = c.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2); r.addColorStop(0, 'rgba(60,20,90,0.55)'); r.addColorStop(0.6, 'rgba(60,20,90,0.25)'); r.addColorStop(1, 'rgba(60,20,90,0)'); c.fillStyle = r; c.fillRect(0, 0, w, h); });
  const shadow = (sx, sz) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: shT, transparent: true, depthWrite: false })); m.rotation.x = -Math.PI / 2; m.scale.set(sx, sz, 1); m.renderOrder = 1; g.add(m); return m; };
  const shadows = { girl: shadow(0.7, 0.55), basket: shadow(0.75, 0.55), washer: shadow(1.5, 0.5) };
  shadows.washer.position.set(0.3, 0.006, 0.32);
  return { g, rug, win, sun, shadows };
}

// the gold paw medallion (the basket's badge and the washer's crest)
export function pawMedallion(goldM, r = 0.06) {
  const g = new THREE.Group();
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(r, r, r * 0.35, 40), goldM); disc.rotation.x = Math.PI / 2; g.add(disc);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(r * 0.98, r * 0.12, 10, 40), goldM); rim.position.z = r * 0.12; g.add(rim);
  const pawM = goldM.clone(); pawM.color = new THREE.Color(0xffe9a8); pawM.emissiveIntensity = (goldM.emissiveIntensity || 0.4) * 1.3;
  const pad = new THREE.Mesh(new THREE.SphereGeometry(r * 0.32, 18, 12), pawM); pad.scale.set(1.25, 1, 0.45); pad.position.set(0, -r * 0.16, r * 0.2); g.add(pad);
  for (const [x, y] of [[-0.42, 0.18], [-0.15, 0.42], [0.15, 0.42], [0.42, 0.18]]) { const t = new THREE.Mesh(new THREE.SphereGeometry(r * 0.13, 12, 10), pawM); t.scale.set(1, 1.2, 0.5); t.position.set(x * r, y * r, r * 0.2); g.add(t); }
  return g;
}

// the yellow "!" alert marks (references 01 / 02) as three little bars that pop round him
export function alertMarks() {
  const g = new THREE.Group(), m = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.3, 0.25), transparent: true });
  for (const a of [-0.55, 0, 0.55]) { const b = new THREE.Mesh(new RoundedBoxGeometry(0.018, 0.06, 0.01, 2, 0.006), m); b.position.set(Math.sin(a) * 0.09, Math.cos(a) * 0.09, 0); b.rotation.z = -a; g.add(b); }
  g.userData.m = m; return g;
}

export { keys as six2Keys, sm as six2Sm, clamp01 as six2Clamp, V as six2V, terryTex };

// ---------------------------------------------------------------- the staging and timeline (called from mountOpening3D in opening3d.js)
// ctx: the opening's own objects and helpers (scene, camera, env, room, washer, basket, g2, GIRL2, girl, hero, heroBody, heroExpr, six, vortex,
// laundry, splash, glowL, bub, fb, front, foam, rotateBoneWorld, aimBone, reachBones, blinkAt, bez, OPENING3D, SIX, onScene)
export function installSix2(ctx) {
  const { scene, camera, env, washer, basket, g2, GIRL2, hero, heroBody, heroExpr, six, vortex, splash, glowL, rotateBoneWorld, aimBone, reachBones, blinkAt, bez, OPENING3D } = ctx;
  const P = OPENING3D.porthole, S = SIX2, hk = OPENING3D.heroW / 0.34;
  ctx.room.visible = false; ctx.room.userData.six2Hidden = true;
  const R2 = buildRoom2(env); scene.add(R2.g);
  six.stand.visible = false;
  // the basket on the rug, its gold paw badge toward the camera
  const badge = pawMedallion(washer.goldM, 0.085); badge.name = 'six2BasketBadge'; basket.add(badge);
  // the blue towel and the yellow towel as cloth (the blue one is the six towel's own material)
  const blueM = six.cloth.material.clone(); blueM.map = terryTex('#86c2ff', '#4f8fe8', '#d6ecff'); blueM.map.wrapS = blueM.map.wrapT = THREE.RepeatWrapping; blueM.map.repeat.set(2, 2); blueM.color = new THREE.Color(0xffffff); blueM.emissive = new THREE.Color(0x2a5cc0); blueM.emissiveIntensity = 0.3;
  const yelM = blueM.clone(); yelM.map = terryTex('#ffd85a', '#e8b030', '#fff2b0'); yelM.map.wrapS = yelM.map.wrapT = THREE.RepeatWrapping; yelM.map.repeat.set(2, 2); yelM.emissive = new THREE.Color(0x8a6010);
  const blue = makeCloth(blueM), yel = makeCloth(yelM);
  six.towel.visible = false;   // (the six towel is replaced by the cloths below; the six timeline never runs with six2)
  const bG = new THREE.Group(), yG = new THREE.Group(); bG.add(blue.mesh); yG.add(yel.mesh); scene.add(bG, yG); bG.name = 'six2BlueTowel'; yG.name = 'six2YellowTowel';
  const marks = alertMarks(); scene.add(marks);
  // the heap in the basket (tripo2's yellow, blue, pink towels): the blue heap towel is the cloth now; the pink one becomes lavender
  let heap = null;
  Promise.resolve(typeof window !== 'undefined' && window.__bwTripo2Ready).then(() => {
    const h = []; basket.traverse((o) => { if (o.name === 'heapTripo') h.push(o); });
    if (h.length >= 3) { h[1].visible = false; h[2].traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.color = new THREE.Color(0xc9a6ff); } }); heap = h; }
  });
  // the girl's measured legs (filled when her model has loaded)
  const legs = { ready: false };
  const measure = () => {
    const B = g2.B, root = g2.root; root.position.set(0, 0, 0); root.rotation.set(0, 0, 0); root.scale.setScalar(S.girl.scale);
    for (const b of Object.values(B)) b.quaternion.copy(b.userData.rest); root.updateMatrixWorld(true);
    const w = (b) => b.getWorldPosition(new THREE.Vector3());
    const hip = w(B.hips), tL = w(B.thighL), sL = w(B.shinL);
    legs.Lt = tL.distanceTo(sL); legs.kneeY0 = sL.y; legs.hipY0 = hip.y; legs.thighY0 = tL.y; legs.hipFwd = hip.z; legs.half = Math.abs(tL.x);
    legs.kr = 0.045 * S.girl.scale;   // the knee's radius above the floor
    for (const side of ['L', 'R']) { const sh = B['shin' + side], tail = new THREE.Object3D(); tail.name = 'six2ShinTail' + side; const p = w(sh).add(V(0, -legs.kneeY0 * 0.85, 0)); sh.attach(tail); tail.position.copy(sh.worldToLocal(p)); legs['tail' + side] = tail; }
    legs.ready = true; g2.stool.visible = false;
  };
  // ---- the girl's knee timeline: states (knee midpoint on the floor, yaw, sit) and the steps between them (one knee swings, the other stays planted)
  const st = (kx, kz, yaw, sit) => ({ kx, kz, yaw, sit });
  const G = S.girl;
  const S1 = st(G.k1[0], G.k1[1], G.yaw1, 0.62), S1u = st(G.k1[0], G.k1[1], G.yaw1 + 0.12, 0.08);
  const mid = st((G.k1[0] + G.k2[0]) / 2 + 0.02, (G.k1[1] + G.k2[1]) / 2, (G.yaw1 + G.yaw2) / 2 + 0.1, 0.08), S2 = st(G.k2[0], G.k2[1], G.yaw2, 0.08);
  const S2b = st(G.k2[0] + 0.02, G.k2[1] + 0.05, G.yaw2 - 0.95, 0.12);   // turned toward the basket for the second armful
  const S3 = st(-0.66, 1.12, 1.0, 0.1);   // back, out of the door's sweep, to swing it shut
  // [t0, t1, from, to, swinging knee ('L' | 'R' | null = both planted)]
  const MOVES = [[0.25, 0.85, S1, S1u, null], [0.95, 1.35, S1u, mid, 'R'], [1.35, 1.75, mid, S2, 'L'], [2.65, 2.95, S2, { ...S2b, yaw: (S2.yaw + S2b.yaw) / 2 }, 'R'], [2.95, 3.25, { ...S2b, yaw: (S2.yaw + S2b.yaw) / 2 }, S2b, 'L'],
    [3.45, 3.7, S2b, { ...S2, yaw: S2.yaw - 0.3 }, 'L'], [3.7, 3.95, { ...S2, yaw: S2.yaw - 0.3 }, S2, 'R'], [5.0, 5.35, S2, { ...S3, kx: (S2.kx + S3.kx) / 2, kz: (S2.kz + S3.kz) / 2, yaw: 1.3 }, 'L'], [5.35, 5.7, { ...S3, kx: (S2.kx + S3.kx) / 2, kz: (S2.kz + S3.kz) / 2, yaw: 1.3 }, S3, 'R']];
  const lerpSt = (a, b, k) => ({ kx: a.kx + (b.kx - a.kx) * k, kz: a.kz + (b.kz - a.kz) * k, yaw: a.yaw + (b.yaw - a.yaw) * k, sit: a.sit + (b.sit - a.sit) * k });
  const fwdOf = (yaw) => V(Math.sin(yaw), 0, Math.cos(yaw)), latOf = (yaw) => V(Math.cos(yaw), 0, -Math.sin(yaw));   // her forward, her left (+X of the model)
  const kneeAt = (side, s) => { const sg = side === 'L' ? 1 : -1; return V(s.kx, 0, s.kz).addScaledVector(latOf(s.yaw), sg * legs.half * 1.15); };
  function girlState(t) {
    let cur = S1, knees = { L: kneeAt('L', S1), R: kneeAt('R', S1) }, lift = { L: 0, R: 0 };
    for (const [t0, t1, a, b, leg] of MOVES) {
      if (t <= t0) break;
      const k = sm(t0, t1, t); cur = lerpSt(a, b, k);
      for (const side of ['L', 'R']) { if (leg === side) { knees[side] = kneeAt(side, a).lerp(kneeAt(side, b), k); lift[side] = Math.sin(Math.PI * clamp01((t - t0) / (t1 - t0))) * 0.05; } else if (leg === null || t >= t1) knees[side] = kneeAt(side, leg === null ? cur : b); }
      if (t >= t1) { knees.L = kneeAt('L', b); knees.R = kneeAt('R', b); }
    }
    return { s: cur, knees, lift };
  }
  // the door: hinge on the LEFT (opening_tripo3.js mirrors the door with six2); open = S.door.open
  const doorEdge = () => { washer.door.updateMatrixWorld(true); return washer.door.localToWorld(V(washer.door.userData.edge || 0.78, 0, 0.03)); };   // its free edge (opening_tripo3.js sets userData.edge)
  // ---- the hero's path and the cloth
  const inDoor = V(P.x - 0.06, P.y + 0.04, P.z - 0.02), heroSit = V(P.x + 0.03, OPENING3D.waterY + 0.1 * hk + 0.02, P.z - 0.36), heroLand = V(P.x, OPENING3D.waterY + 0.1 * hk, P.z - 2.8);
  const lieBlue = V(P.x - 0.02, OPENING3D.waterY + 0.02, P.z - 0.4), lieYel = V(P.x - 0.17, OPENING3D.waterY + 0.05, P.z - 0.3);
  let landed = false, scene0 = 0;
  const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3();
  const sparkWin = [3.95, 4.5];
  function pose(it, st0) {
    const s = st0 < 0 ? -1 : st0, t = Math.max(0, s);
    // ---- captions
    let sc = 1; for (const [t0, n] of S.scenes) if (s >= t0) sc = n; if (sc !== scene0) { scene0 = sc; if (ctx.onScene) ctx.onScene(sc); }
    // ---- basket on the rug (badge to the camera)
    const BS = S.basket; basket.position.set(BS.pos[0], 0.135 * BS.scale, BS.pos[1]); basket.rotation.set(0, BS.yaw, 0); basket.scale.set(BS.scale * 1.18, BS.scale * 0.86, BS.scale * 1.1);
    badge.position.set(0, 0.03, 0.262); badge.rotation.set(-0.16, 0, 0);
    R2.rug.position.set(BS.pos[0] + 0.05, 0.004, BS.pos[1] - 0.02);
    R2.shadows.basket.position.set(BS.pos[0], 0.008, BS.pos[1] + 0.02);
    basket.updateMatrixWorld(true);
    const rimC = V(0, 0.2, 0.02).applyMatrix4(basket.matrixWorld);   // the laundry's top in the basket (world)
    // ---- the door: shut while waiting; it swings open at START (with a bounce); she swings it shut in scene 4 (swing, stop, latch)
    const dOpen = S.door.open;
    let dr = 0;
    if (s < 0) dr = 0;
    else if (s < 5.55) dr = dOpen * sm(0.05, 0.6, s) + (s > 0.6 && s < 1.2 ? 0.06 * Math.sin((s - 0.6) * 18) * Math.exp(-(s - 0.6) * 6) : 0);
    else if (s < 6.05) dr = dOpen + (-1.55 - dOpen) * sm(5.55, 6.05, s);   // her hand on the edge
    else { const k = clamp01((s - 6.05) / 0.32); dr = -1.55 * (1 - k * k); if (s > 6.37) dr = -0.07 * Math.exp(-(s - 6.37) * 10) * Math.abs(Math.sin((s - 6.37) * 26)); }   // swings on, stops at the latch, a little bounce
    washer.door.rotation.y = dr;
    // ---- the girl
    const gs = girlState(t), s0 = gs.s, fwd = fwdOf(s0.yaw);
    const blink = blinkAt(it, 3.1, 0.4);
    if (g2.ready && !legs.ready) measure();
    const handsW = { near: null, far: null };
    // hand targets (world): [the hand toward the washer, the other]
    const bluePickL = rimC.clone().add(V(-0.1, 0.1, 0.06)), bluePickR = rimC.clone().add(V(0.1, 0.1, 0.06));
    const chestFront = (k = 0.32, up = 0.66) => V(s0.kx, up * G.scale, s0.kz).addScaledVector(fwd, k);
    let gripA, gripB;   // the two hands (screen-left hand, screen-right hand)
    const lat = latOf(s0.yaw);
    const hold = (c, w) => [c.clone().addScaledVector(lat, w), c.clone().addScaledVector(lat, -w)];
    if (s < 0) { const pat = 0.015 * Math.max(0, Math.sin(it * 2.6)); gripA = rimC.clone().add(V(-0.02, 0.17 + pat, 0.04)); gripB = V(s0.kx, 0.36 * G.scale, s0.kz).addScaledVector(fwd, 0.2).addScaledVector(lat, -0.14); }
    else if (s < 0.45) { const k = sm(0.0, 0.45, s); [gripA, gripB] = [rimC.clone().add(V(-0.02, 0.17, 0.04)).lerp(bluePickL, k), V(s0.kx, 0.36 * G.scale, s0.kz).addScaledVector(fwd, 0.2).addScaledVector(lat, -0.14).lerp(bluePickR, k)]; }
    else if (s < 0.95) { const k = sm(0.45, 0.95, s), c = rimC.clone().add(V(0, 0.1, 0.06)).lerp(chestFront(0.3, 0.68), k); [gripA, gripB] = hold(c, 0.12); }
    else if (s < 1.95) { [gripA, gripB] = hold(chestFront(0.3, 0.68 + 0.02 * Math.sin(s * 9)), 0.12); }
    else if (s < 2.55) { const k = sm(1.95, 2.45, s), c = chestFront(0.3, 0.68).lerp(inDoor.clone().add(V(0.0, 0.0, 0.05)), k); [gripA, gripB] = hold(c, 0.12 - 0.04 * k); }
    else if (s < 3.25) { const k = sm(2.6, 3.15, s), c = inDoor.clone().lerp(rimC.clone().add(V(0, 0.06, 0.04)), k); [gripA, gripB] = hold(c, 0.08 + 0.05 * k); }
    else if (s < 3.95) { const k = sm(3.3, 3.85, s), c = rimC.clone().add(V(0, 0.12, 0.04)).lerp(inDoor.clone().add(V(0.02, 0.0, 0.0)), k); [gripA, gripB] = hold(c, 0.13 - 0.05 * k); }
    else if (s < 5.5) { [gripA, gripB] = hold(chestFront(0.18, 0.4), 0.16); }
    else if (s < 6.1) { const e = doorEdge(); gripA = e.clone(); gripB = chestFront(0.15, 0.4).addScaledVector(lat, -0.16); }
    else { const k = sm(6.1, 6.6, s); [gripA, gripB] = hold(chestFront(0.18 + 0.1 * (1 - k), 0.4 + 0.15 * (1 - k)), 0.16); }
    if (g2.ready && legs.ready) {
      const B = g2.B, root = g2.root;
      for (const b of Object.values(B)) b.quaternion.copy(b.userData.rest);
      const a = s0.sit * 1.05, hipY = legs.kr + legs.Lt * Math.cos(a), hipOff = legs.Lt * Math.sin(a);
      root.scale.setScalar(G.scale); root.rotation.set(0, s0.yaw, 0);
      const breathe = 0.004 * Math.sin(it * 2.2);
      root.position.set(s0.kx - fwd.x * (hipOff + legs.hipFwd), hipY - legs.thighY0 + breathe, s0.kz - fwd.z * (hipOff + legs.hipFwd));
      root.updateMatrixWorld(true);
      // legs: thighs to the planted knees, shins back and up so the toes rest on the floor
      for (const side of ['L', 'R']) {
        const th = B['thigh' + side], sh = B['shin' + side], T = th.getWorldPosition(new THREE.Vector3());
        const K = gs.knees[side].clone(); K.y = legs.kr + gs.lift[side];
        aimBone(th, sh, K.sub(T));
        const sd = fwd.clone().multiplyScalar(-Math.cos(0.62)).add(V(0, Math.sin(0.62), 0)); aimBone(sh, legs['tail' + side], sd);
      }
      // body: lean, turn, breathing; the head looks at the washer (never at the basket's hero)
      const lean = keys(s, [[-1, 0.18], [0.3, 0.25], [0.9, 0.05], [1.95, 0.08], [2.4, 0.3], [2.6, 0.12], [3.1, 0.42], [3.3, 0.2], [3.85, 0.3], [4.2, 0.08], [5.6, 0.25], [6.1, 0.1]]);
      const lat2 = latOf(s0.yaw);
      rotateBoneWorld(B.spine, lat2, lean * 0.7 + 0.02 * Math.sin(it * 1.3));
      rotateBoneWorld(B.chest, lat2, lean * 0.35);
      rotateBoneWorld(B.chest, V(0, 1, 0), 0.03 * Math.sin(it * 0.9));
      const toWasher = Math.atan2(P.x - s0.kx, P.z - s0.kz) - s0.yaw;   // the washer's bearing from her body
      const headYaw = keys(s, [[-1, -0.35], [0.0, -0.3], [1.0, 0.0], [2.6, 0.1], [2.9, -0.2], [3.3, 0.1], [5.5, 0.4], [6.2, 0.3]]);
      const headUp = keys(s, [[-1, 0.18], [0.4, 0.1], [1.0, 0.0], [2.6, 0.05], [3.0, -0.15], [3.4, 0.05]]);
      rotateBoneWorld(B.head, V(0, 1, 0), (s < 0 ? -0.2 : 0) + headYaw + 0.06 * Math.sin(it * 0.6) + 0.0 * toWasher);
      rotateBoneWorld(B.head, lat2, -headUp * 0.8 + 0.03 * Math.sin(it * 0.8));
      rotateBoneWorld(B.head, fwd, 0.08 + 0.05 * Math.sin(it * 0.7));
      // arms: two-bone IK to the hand targets (the hand nearer each target takes it)
      const cw = B.chest.getWorldPosition(new THREE.Vector3());
      const hl = B.handL.getWorldPosition(new THREE.Vector3()), hr = B.handR.getWorldPosition(new THREE.Vector3());
      const right = V(1, 0, 0).applyQuaternion(camera.quaternion);   // screen right
      const lFirst = hl.dot(right) < hr.dot(right);   // her L hand is the screen-left one
      const [tL, tR] = lFirst ? [gripA, gripB] : [gripB, gripA];
      reachBones(B.upperarmL, B.forearmL, B.handL, tL, cw.clone().addScaledVector(latOf(s0.yaw), 0.5).add(V(0, -0.35, 0)).addScaledVector(fwd, -0.1));
      reachBones(B.upperarmR, B.forearmR, B.handR, tR, cw.clone().addScaledVector(latOf(s0.yaw), -0.5).add(V(0, -0.35, 0)).addScaledVector(fwd, -0.1));
      for (const l of g2.lids) { l.visible = blink > 0.04; l.scale.set(1.08, 0.04 + blink * 1.02, 0.5); }
      handsW.near = B.handL.getWorldPosition(new THREE.Vector3()); handsW.far = B.handR.getWorldPosition(new THREE.Vector3());
      const km = gs.knees.L.clone().add(gs.knees.R).multiplyScalar(0.5).addScaledVector(fwd, -0.12); R2.shadows.girl.position.set(km.x, 0.007, km.z); R2.shadows.girl.rotation.z = s0.yaw;
    }
    const hA = handsW.near && handsW.far ? (handsW.near.dot(V(1, 0, 0).applyQuaternion(camera.quaternion)) < handsW.far.dot(V(1, 0, 0).applyQuaternion(camera.quaternion)) ? [handsW.near, handsW.far] : [handsW.far, handsW.near]) : [gripA, gripB];
    // ---- the hero: under the blue towel in the basket (peeking); left in the yellow laundry when the blue towel is lifted ("!"); scooped inside the
    // yellow towel; tumbling into the drum; sitting in the drum (towel on his head); the water rises; carried into the tunnel
    let hp, scl = 0.62, surprise = 0; const rot = new THREE.Euler();
    const camYaw = Math.atan2(camera.position.x - rimC.x, camera.position.z - rimC.z);
    const inBasket = rimC.clone().add(V(0.0, 0.085 + 0.008 * Math.abs(Math.sin(it * 1.6)), 0.0));
    if (s < 2.95) { hp = inBasket; rot.set(0.05 * Math.sin(it * 0.9), camYaw + 0.12 * Math.sin(it * 0.5), 0.04 * Math.sin(it * 1.3)); surprise = sm(0.5, 0.65, s) * (1 - sm(1.6, 1.9, s)) + sm(2.5, 2.6, s); if (s > 2.7) hp.y -= sm(2.7, 2.95, s) * 0.05; }
    else if (s < 3.95) { hp = (gripA.clone().add(gripB).multiplyScalar(0.5)).add(V(0, -0.06, 0)); rot.set(0.1 * Math.sin(s * 6), camYaw - 0.3, 0.1 * Math.sin(s * 5)); surprise = 1; scl = 0.62; }
    else if (s < 4.75) { const k = sm(3.95, 4.75, s); const from = inDoor.clone().add(V(0, -0.02, 0)); hp = bez(from, V(P.x - 0.02, P.y + 0.2, P.z - 0.16), heroSit, k); rot.set(-k * Math.PI * 2, (1 - k) * 0.5, 0.25 * Math.sin(k * 6)); scl = 0.62 + (1 - 0.62) * k; surprise = 1; }
    else if (s < 7.45) { const wet = sm(6.6, 7.2, s); hp = heroSit.clone(); hp.y += 0.01 * Math.sin((s - 4.75) * 9) * Math.exp(-(s - 4.75) * 3) + wet * (0.03 + 0.015 * Math.sin((s - 6.6) * 6.5)); rot.set(0.04 * Math.sin(s * 3), 0.25 * Math.sin((s - 4.6) * 1.7) * (s < 6.6 ? 1 : 0.4), 0.05 * Math.sin(s * 2.4)); scl = 1; surprise = s < 6.7 ? 1 : 0; }
    else { const k = sm(7.4, 8.6, s), tn = sm(7.45, 8.0, s); hp = heroSit.clone().lerp(heroLand, k); hp.y += 0.012 * Math.sin((s - 7.45) * 6.5); rot.set(0.04 * Math.sin(s * 4), Math.PI * tn, 0.04 * Math.sin(s * 3.1)); scl = 1; }
    hero.position.copy(hp); hero.rotation.copy(rot); heroBody.scale.setScalar(scl);
    heroExpr({ lid: blinkAt(it, 2.6, 1.1), surprise, open: 0.55 + 0.25 * Math.sin(it * 2) + (s > 4.0 && s < 5.4 ? 0.4 : 0) });
    // the "!" marks: while he peeks (waiting) and when the towel is lifted off him
    const mk = s < 0 ? 0.6 + 0.4 * Math.max(0, Math.sin(it * 1.4)) : sm(0.55, 0.7, s) * (1 - sm(1.4, 1.6, s));
    marks.visible = mk > 0.02; marks.position.copy(hp).add(V(0.02, 0.2 * scl / 0.62 + 0.04, 0.02)); marks.quaternion.copy(camera.quaternion); marks.scale.setScalar(0.9 + 0.15 * Math.sin(it * 8)); marks.userData.m.opacity = mk;
    if (!landed && s >= 4.75) { landed = true; for (let i = 0; i < 60; i++) { const a = rnd() * Math.PI * 2, v = 0.3 + rnd() * 0.7; splash.emit(V(hp.x + Math.cos(a) * 0.12, OPENING3D.waterY + 0.02, hp.z + Math.sin(a) * 0.1), V(Math.cos(a) * v * 0.5, 0.6 + rnd() * 0.9, Math.sin(a) * v * 0.3), 0.5 + rnd() * 0.4); } vortex.WU.uHit.value.set(hp.x - P.x, 1, P.z - hp.z); }
    if (s < 0) landed = false;
    if (s > 4.75) vortex.WU.uHit.value.y = Math.max(0, 1 - (s - 4.75) * 0.8);
    // ---- the blue towel: draped over him (a hood) -> lifted by both hands (hanging cloth) -> pushed into the drum -> lying in the drum -> flipped onto his head
    const rB = OPENING3D.heroW * 0.5 * 0.62, camRight = V(1, 0, 0).applyQuaternion(camera.quaternion);
    const hoodAt = (out, c) => blue.hood(out, c, rB * 1.08, rB * 2.4, -0.95, camYaw, rB * 0.95, it, 0.35);
    bG.visible = true; bG.position.set(0, 0, 0); bG.rotation.set(0, 0, 0); bG.scale.setScalar(1);
    const placeLocal = (src, pos, rx, ry, rz, k = 1) => { const m = new THREE.Matrix4().compose(pos, new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'YXZ')), V(k, k, k)); const o = new Float32Array(src.length); const v = new THREE.Vector3(); for (let i = 0; i < src.length; i += 3) { v.set(src[i], src[i + 1], src[i + 2]).applyMatrix4(m); o[i] = v.x; o[i + 1] = v.y; o[i + 2] = v.z; } return o; };
    const hoodPos = inBasket.clone().add(V(0, 0.012, -0.01)), hoodRot = [-0.32, camYaw, 0];
    if (s < 0.45) { hoodAt(blue.A, hoodPos); blue.apply(blue.A); }
    else if (s < 2.55) {
      hoodAt(blue.A, hoodPos); const A = blue.A;
      const pL = hA[0].clone(), pR = hA[1].clone(); blue.hangW(blue.B, pL, pR, 0.46, it, s < 1.95 ? 1 : 0.4, s > 1.95 ? sm(1.95, 2.45, s) * -0.6 : 0, camRight);
      const k = sm(0.45, 0.85, s); const o = new Float32Array(A.length); for (let i = 0; i < A.length; i++) o[i] = A[i] + (blue.B[i] - A[i]) * k; blue.apply(o);
    } else if (s < 4.75) {   // in the drum: let go at the door, it slides in and lies on the drum floor
      const k = sm(2.5, 2.9, s); blue.drape(blue.A, 0.08, 0.2, 0, 0.02, it, 0.2); const A = placeLocal(blue.A, lieBlue.clone().add(V(0, -0.06, 0)), 0, 0.3, 0, 1);
      blue.hangW(blue.B, inDoor.clone().add(V(-0.1, 0, 0.02)), inDoor.clone().add(V(0.1, 0, 0.02)), 0.46, it, 0.4, -0.6, camRight);
      const o = new Float32Array(A.length); for (let i = 0; i < A.length; i++) o[i] = blue.B[i] + (A[i] - blue.B[i]) * k; blue.apply(o);
    } else {   // flipped onto his head by his landing; the water lifts it off and carries it away in scene 4
      const off = sm(6.7, 7.3, s), kk = scl, flip = sm(4.75, 5.05, s);
      blue.drape(blue.A, rB / 0.62 * kk * 0.95, rB / 0.62 * kk * 1.3, 0, rB / 0.62 * kk * (0.35 + off * 0.5), it, 0.6 + off);
      const hat = placeLocal(blue.A, hp.clone().add(V(-0.03, rB / 0.62 * kk * 0.28 + off * 0.12, -off * 0.5)), -0.5 - off * 0.8 - (1 - flip) * 2.5, rot.y, rot.z - 0.3 - off * 0.5, 1 - off * 0.7);
      blue.apply(hat); bG.visible = s < 7.5;
    }
    // ---- the yellow towel: in the basket heap until she scoops it (with him inside: a bundle), pushed in, unrolling beside him in the drum
    yG.visible = s >= 2.9 && s < 7.5;
    if (heap) heap[0].visible = s < 2.9;
    if (yG.visible) {
      if (s < 3.95) { yel.drape(yel.A, rB * 1.05, rB * 1.6, sm(2.9, 3.2, s), rB * 0.5, it, 1.0); yel.apply(placeLocal(yel.A, hp.clone().add(V(0, 0.01, 0)), 0.2, camYaw, 0.1 * Math.sin(s * 5))); }
      else { const k = sm(3.95, 4.6, s), p = bez(inDoor, V(P.x - 0.1, P.y + 0.12, P.z - 0.1), lieYel, k);
        yel.drape(yel.A, rB * (1.05 - 0.5 * k), rB * 1.6, 1 - k, rB * (0.5 - 0.3 * k), it, 0.6); yel.apply(placeLocal(yel.A, p, 0.3 * (1 - k), 0.4 + k, 0.2 - 0.4 * k, 1)); }
    }
    // ---- the washer: lights in sequence once the door has latched; the water floods the drum, rises round him, swirls; then flows into the tunnel
    const on = (i) => sm(6.55 + i * 0.16, 6.75 + i * 0.16, s);
    six.lights6.forEach((l, i) => l.material.color.copy(l.userData.c).multiplyScalar(0.3 + on(i) * (1.0 + 0.3 * Math.sin(it * 5 + i * 2))));
    six.dial.rotation.y = on(0) * Math.max(0, s - 6.55) * 3;
    const lit = on(2);
    glowL.intensity = 2.0 + lit * 4.0 + 0.6 * Math.sin(it * 2.0);
    vortex.U.uTime.value = it; vortex.U.uGlow.value = 0.55 + 0.45 * lit; vortex.U.uFlow.value = s > 0 ? Math.max(0, s - 6.6) * lit * 1.8 + sm(7.4, 9.0, s) * 6 : 0;
    vortex.WU.uFrom.value = s < 3.6 ? 9.5 : 9.5 * (1 - sm(3.6, 4.6, s));
    const rise = S.water.rise * sm(6.6, 7.4, s) * (1 - sm(7.6, 8.4, s));
    vortex.water.position.y = rise; vortex.water.scale.x = 1 + rise * 2.2;
    // ---- the camera
    const C = S.cam; camPos.fromArray(keys(s, C.map(([tt, c]) => [tt, c]))); camTgt.fromArray(keys(s, C.map(([tt, , g]) => [tt, g]))); camera.fov = keys(s, C.map(([tt, , , f]) => [tt, f]));
    if (s < 0) camPos.add(V(0.015 * Math.sin(it * 0.3), 0.01 * Math.sin(it * 0.4), 0));
    if (s > 6.37 && s < 6.6) camPos.y += 0.005 * Math.sin((s - 6.37) * 60) * (1 - sm(6.37, 6.6, s));   // the latch's thunk
    camera.position.copy(camPos); camera.lookAt(camTgt); camera.updateProjectionMatrix();
    const inDrum = camera.position.z < P.z - 0.05;
    R2.g.visible = washer.g.visible = basket.visible = !inDrum;
    if (g2.ready) { g2.root.visible = !inDrum; g2.stool.visible = false; }
    ctx.girl.root.visible = false;
    ctx.bubbles.visible = !inDrum; ctx.front.visible = false; ctx.foam.visible = !inDrum && s > 4.0;
    marks.visible = marks.visible && !inDrum;
  }
  if (typeof window !== 'undefined') window.__bwSix2dbg = { g2, legs, basket, hero, heroBody, camera, scene, R2, blue, yel, washer };   // (for the live DevTools checks)
  return { pose, sparkWin, room2: R2 };
}
