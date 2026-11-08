// scene07 pass 16, RECONSTRUCTION (8 November 2026, session f70c9bd1; the user's Screen 09 reconstruction mandate and approved-reference
// kit, Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/; master 00_AUTHENTIC_APPROVED_SCREEN09.png). Part of the
// opt-in scene07 (NOT approved); `,norecon16` builds pass 13b exactly. The original's recognizable ENVIRONMENT, in the user's order:
//   1. LEFT: the large circular washer housing: a thick pink drum ring with gold bands, a deep lavender interior, a glowing emblem bubble,
//      the drum's lavender-cream body behind it, standing on a raised cream-and-gold ledge with a pink panelled front (master: ring centre
//      (0.07, 0.31) of the screen, outer radius 0.125 of its height; the ledge top at y 0.45, receding to (0.42, 0.47)).
//   2. RIGHT: the large curved pink-and-gold wall round the water: a big round wall whose convex face meets the channel, pink star panels
//      between lavender pilasters, a thick cream rim with gold lines and rail, a lavender-blue base band at the water; towers behind it
//      (master: x 0.70-1.0, rim y 0.55-0.60).
//   3. ABOVE AND BEYOND: no empty vault. The chamber's upper surfaces are covered with layered real geometry (instanced cabinets, tanks
//      along the track, portholes with glowing glass, small blue gears, lamps), arches over the channel framing the far end, and the big
//      blue gear with its lavender frilled ring at the upper right (master: centre (0.93, 0.20)).
// Real three.js geometry, merged per material or instanced (a few draw calls per structure). No random numbers (a fixed hash).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const RECON16_ON = LIST.includes('scene07') && !LIST.includes('norecon16');
export const RECON16 = {
  chamber: { wallH: 4.8, height: 7.2 },   // a higher chamber (pass 13b: 3.6 / 5.4) so the upper machinery and the gear have room
  // the left drum: face centre (x, h, u), outer ring radius R, body depth (in R), yaw: how far the face turns from facing straight back
  // down the track toward the left wall (radians; the drum's body then shows on the face's right, as in the original)
  // (fitted with a projection grid of the real camera at the u 229.5 checkpoint, 77_.../scripts: centre (0.075, 0.30), gold band radius 0.125 H)
  drum: { u: 238, x: 3.0, h: 4.0, R: 1.52, depth: 0.45, yaw: 0.62 },
  ledge: { u: [232.2, 253.2], x: 2.25, h: 1.95 },
  // a long gentle curve (radius 5 m) whose face runs 1.3 m from the centre line (as close as the right lane allows; the master's wall would
  // stand at 0.5 m, inside the lane): from the right screen edge (u 234) to x 0.70 (u 240)
  right: { u: 237, inner: 1.3, R: 5.0, H: 0.85 },
  towers: [[239.6, -3.35, 0.72, 2.3, 'pink'], [244.2, -3.55, 0.9, 3.0, 'mint'], [249.5, -3.3, 0.75, 2.6, 'pink']],   // [u, x, radius, height, dome] behind the right wall
  leftTiers: [[242.8, 3.35, 0.8, 1.9, 'mint'], [246.6, 3.45, 0.7, 2.4, 'pink'], [250.6, 3.3, 0.75, 2.0, 'mint']],    // the same, on the ledge beyond the drum
  gear: { u: 237, x: -2.5, h: 5.0, R: 0.72 },   // master: centre (0.93, 0.205), the frill's radius 0.16 W
  arches: [[244.2, 'cream'], [248.6, 'blue'], [252.9, 'pink']],
  greebles: { u: [230.6, 253.6], du: 0.85, ds: 0.8, hMin: [2.3, 1.6] },   // hMin: lowest height on the walls [left, right]
};
const hash = (i, k) => { const s = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return s - Math.floor(s); };
const C = { pink: 0xff86c8, rose: 0xff9fd0, lav: 0xc9b2f6, lavDeep: 0x8e6fe0, cream: 0xf7e2c4, blue: 0x7fa8ff, mint: 0x9fe3b8, peach: 0xffc8a2, gold: 0xffdc7a };

function canvasTex(w, h, draw, repeat) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
// the chamber's own surface behind the machinery: deep lavender-blue recesses with faint panels (it shows only in the gaps)
export function reconFacadeTexture() {
  return canvasTex(512, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#8f84dc'); gr.addColorStop(0.5, '#b4a2ec'); gr.addColorStop(1, '#d9aee6');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 40; i++) {
      const x = (i * 97) % w, y = (i * 53) % h, rw = 30 + (i * 37) % 60, rh = 24 + (i * 29) % 50;
      g.fillStyle = i % 3 ? 'rgba(255,240,255,0.12)' : 'rgba(60,40,140,0.16)'; g.beginPath(); g.roundRect(x, y, rw, rh, 8); g.fill();
    }
    for (let i = 0; i < 24; i++) { g.fillStyle = 'rgba(255,226,150,0.55)'; g.beginPath(); g.arc((i * 71) % w, (i * 43) % h, 3, 0, Math.PI * 2); g.fill(); }
  }, true);
}
function starPanelTexture() {   // the right wall's pink star panels (master crop 04): pink-magenta panels, gold stars, lavender seams
  return canvasTex(256, 128, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#ffb8e2'); gr.addColorStop(0.55, '#ff86c8'); gr.addColorStop(1, '#c95cc0');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    const star = (cx, cy, r) => { g.beginPath(); for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.45 : r; g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } g.closePath();
      g.fillStyle = '#ffe07a'; g.fill(); g.lineWidth = 2.5; g.strokeStyle = '#e8902a'; g.stroke(); };
    star(64, 62, 26); star(192, 70, 20); star(150, 30, 9); star(30, 100, 8);
    g.fillStyle = 'rgba(255,255,255,0.35)'; g.fillRect(0, 10, w, 3);
  }, true);
}
function ledgeTexture() {   // the left ledge's front (master: pink panels with gold trim lines under a cream top)
  return canvasTex(256, 128, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#ffc2e0'); gr.addColorStop(1, '#e978c4'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = '#c9a8f4'; for (const x of [0, 128]) g.fillRect(x, 0, 14, h);
    g.fillStyle = '#ffd36a'; g.fillRect(0, 22, w, 6); g.fillRect(0, h - 18, w, 5);
    g.fillStyle = 'rgba(255,255,255,0.3)'; g.fillRect(0, 34, w, 3);
  }, true);
}
function interiorTexture() {   // the drum's deep interior: light lavender at the centre to a deep purple at the edge
  return canvasTex(256, 256, (g, w) => {
    const gr = g.createRadialGradient(w * 0.55, w * 0.45, 8, w / 2, w / 2, w / 2); gr.addColorStop(0, '#efe2ff'); gr.addColorStop(0.55, '#b394f2'); gr.addColorStop(1, '#5d3cb0');
    g.fillStyle = gr; g.fillRect(0, 0, w, w);
  });
}
function gearShape(R, teeth, inner, round) {
  const sh = new THREE.Shape(), n = teeth * 4;
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2, r = round ? R * (0.9 + 0.1 * Math.cos(a * teeth)) : (i % 4 < 2 ? R : R * inner);
    const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i) sh.lineTo(x, y); else sh.moveTo(x, y);
  }
  return sh;
}

// bake a temporary hierarchy into one merged mesh per material (world space), added to `root`
function bake(temp, root, name) {
  temp.updateMatrixWorld(true);
  const byMat = new Map();
  temp.traverse((o) => {
    if (!o.isMesh) return;
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone(); g.applyMatrix4(o.matrixWorld);
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    if (!byMat.has(o.material)) byMat.set(o.material, []);
    byMat.get(o.material).push(g);
  });
  const group = new THREE.Group(); group.name = name;
  let i = 0; for (const [m, list] of byMat) { const mesh = new THREE.Mesh(mergeGeometries(list, false), m); mesh.name = `${name}_${i++}`; group.add(mesh); }
  root.add(group); return group;
}
const at = (TR, o, x, h, u, yaw = 0) => { TR.map(x, h, u, o.position); TR.quaternion(u, o.quaternion); if (yaw) o.rotateY(yaw); return o; };

export function buildRecon16(root, TR, env, goldM, Ch, items) {
  const R16 = RECON16, P = new THREE.Vector3();
  const std = (color, emissive, ei, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.2, envMap: env || null, envMapIntensity: 0.9, emissive, emissiveIntensity: ei, ...extra });
  const M = {
    pink: std(C.pink, 0xff4fa8, 0.34, { metalness: 0.3, roughness: 0.32 }), rose: std(C.rose, 0xff5fb0, 0.3),
    lav: std(C.lav, 0x6a52b0, 0.42), lavD: std(0xb79cf2, 0x5a3fb0, 0.35, { side: THREE.DoubleSide }), cream: std(C.cream, 0x8a6e52, 0.5),
    blue: std(0x2f5cff, 0x0f2a9a, 0.5, { metalness: 0.45, roughness: 0.3 }), blueL: std(C.blue, 0x2f55b8, 0.45), mint: std(C.mint, 0x3a8a5a, 0.38),
    gold: goldM, white: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.35, 1.2, 1.5) }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0xf2e6ff, roughness: 0.05, envMap: env || null, envMapIntensity: 1.6, transparent: true, opacity: 0.55, iridescence: 1, iridescenceIOR: 1.3, clearcoat: 1, depthWrite: false, emissive: 0x9a7ae0, emissiveIntensity: 0.35 }),
  };
  const out = {};
  const mesh = (geo, mat, parent, fn) => { const m = new THREE.Mesh(geo, mat); if (fn) fn(m); parent.add(m); return m; };
  const toZ = (m) => { m.rotation.x = Math.PI / 2; };

  // ---- 1. LEFT: the circular washer housing on its ledge ------------------------------------------------------------------------
  {
    const D = R16.drum, R = D.R, t = new THREE.Group(), g = at(TR, new THREE.Group(), D.x, D.h, D.u, Math.PI - D.yaw); t.add(g);
    mesh(new THREE.TorusGeometry(R, 0.2 * R, 20, 72), M.pink, g);                                                       // the thick pink door ring
    mesh(new THREE.TorusGeometry(R * 1.2, 0.05 * R, 10, 80), M.gold, g, (m) => { m.position.z = 0.04 * R; });           // gold outer band
    mesh(new THREE.TorusGeometry(R * 0.8, 0.045 * R, 10, 72), M.gold, g, (m) => { m.position.z = 0.12 * R; });          // gold inner band
    const intM = new THREE.MeshStandardMaterial({ map: interiorTexture(), emissive: 0xffffff, emissiveMap: null, emissiveIntensity: 0.0, roughness: 0.5, metalness: 0.1, envMap: env || null, envMapIntensity: 0.6 });
    intM.emissiveMap = intM.map; intM.emissiveIntensity = 0.55;
    mesh(new THREE.CylinderGeometry(R * 0.8, R * 0.8, 0.45 * R, 56, 1, true), M.lavD, g, (m) => { toZ(m); m.position.z = -0.225 * R; });   // the deep interior wall
    mesh(new THREE.CircleGeometry(R * 0.8, 56), intM, g, (m) => { m.position.z = -0.45 * R; });                          // its back, glowing lavender
    mesh(new THREE.SphereGeometry(R * 0.4, 32, 20), M.glass, g, (m) => { m.position.z = -0.12 * R; });                   // the emblem bubble
    const paw = new THREE.Group(); paw.position.set(0.02 * R, -0.02 * R, -0.3 * R); g.add(paw);                           // its circular paw emblem
    mesh(new THREE.CircleGeometry(0.15 * R, 24), M.white, paw, (m) => { m.scale.set(1.15, 0.9, 1); m.position.y = -0.06 * R; });
    for (const [x, y, r] of [[-0.17, 0.08, 0.06], [-0.07, 0.16, 0.065], [0.07, 0.16, 0.065], [0.17, 0.08, 0.06]]) mesh(new THREE.CircleGeometry(r * R, 18), M.white, paw, (m) => m.position.set(x * R, y * R, 0));
    const dep = D.depth * R;
    mesh(new THREE.CylinderGeometry(R * 1.2, R * 1.2, dep, 64, 1, true), M.cream, g, (m) => { toZ(m); m.position.z = -dep / 2; });   // the drum's body
    for (const z of [-0.18 * R, -dep + 0.06 * R]) mesh(new THREE.TorusGeometry(R * 1.21, 0.035 * R, 8, 72), M.gold, g, (m) => { m.position.z = z; });
    mesh(new THREE.CylinderGeometry(R * 1.205, R * 1.205, 0.16 * R, 64, 1, true), M.lav, g, (m) => { toZ(m); m.position.z = -dep * 0.55; });   // a lavender band
    mesh(new THREE.CircleGeometry(R * 1.2, 64), M.lav, g, (m) => { m.position.z = -dep; m.rotation.y = Math.PI; });
    // the ledge it stands on: cream top, pink panelled front with gold lines, gold lips
    const L = R16.ledge, top = [], front = [], ti = [], fi = [], fuv = [], lip = [], mid = []; let k = 0;
    for (let u = L.u[0]; u <= L.u[1] + 1e-6; u += 0.5, k++) {
      TR.map(L.x, L.h, u, P); top.push(P.x, P.y, P.z); lip.push(P.clone()); TR.map(Ch.halfW, L.h, u, P); top.push(P.x, P.y, P.z);
      TR.map(L.x, L.h, u, P); front.push(P.x, P.y, P.z); TR.map(L.x, -0.25, u, P); front.push(P.x, P.y, P.z);
      TR.map(L.x - 0.02, L.h - 0.32, u, P); mid.push(P.clone());
      fuv.push((u - L.u[0]) / 1.6, 1, (u - L.u[0]) / 1.6, 0);
      if (k) { const a = 2 * (k - 1); ti.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); fi.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    }
    const geo = (pos, idx, uv) => { const q = new THREE.BufferGeometry(); q.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); if (uv) q.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); q.setIndex(idx); q.computeVertexNormals(); return q; };
    const frontM = std(0xffffff, 0xffffff, 0.3, { map: ledgeTexture(), side: THREE.DoubleSide }); frontM.emissiveMap = frontM.map;
    t.add(Object.assign(new THREE.Mesh(geo(top, ti), std(C.cream, 0x8a6e52, 0.5, { side: THREE.DoubleSide })), { name: 'ledgeTop' }));
    t.add(new THREE.Mesh(geo(front, fi, fuv), frontM));
    t.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lip), lip.length * 2, 0.085, 8, false), M.gold));
    t.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(mid), mid.length * 2, 0.04, 6, false), M.gold));
    const pl = at(TR, new THREE.Group(), D.x, L.h, D.u); t.add(pl);
    mesh(new RoundedBoxGeometry(1.7, Math.max(0.2, D.h - 1.2 * R - L.h + 0.1), 1.3, 1, 0.08), M.cream, pl, (m) => { m.position.y = Math.max(0.2, D.h - 1.2 * R - L.h + 0.1) / 2; });
    // a lavender block joins the drum to the wall behind it (attached, not floating)
    const blk = at(TR, new THREE.Group(), (D.x + Ch.halfW) / 2 + 0.35, L.h, D.u + 0.4); t.add(blk);
    mesh(new RoundedBoxGeometry(Ch.halfW - D.x + 0.4, 2 * R, 2.4, 2, 0.18), M.lav, blk, (m) => { m.position.y = R; });
    // tiers of machinery beyond the drum on the ledge: lavender tanks with gold bands and domes
    for (const [u, x, r, h, dome] of R16.leftTiers) {
      const q = at(TR, new THREE.Group(), x, L.h, u); t.add(q);
      mesh(new THREE.CylinderGeometry(r, r * 1.05, h, 28), M.lav, q, (m) => { m.position.y = h / 2; });
      for (const f of [0.15, 0.6, 0.95]) mesh(new THREE.TorusGeometry(r * 1.04, 0.05, 6, 28), M.gold, q, (m) => { m.rotation.x = Math.PI / 2; m.position.y = h * f; });
      mesh(new THREE.SphereGeometry(r, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), M[dome], q, (m) => { m.position.y = h; });
      mesh(new THREE.TorusGeometry(r * 0.45, r * 0.09, 8, 24), M.gold, q, (m) => { m.position.set(-r * 0.98, h * 0.42, 0); m.rotation.y = Math.PI / 2; });
      mesh(new THREE.CircleGeometry(r * 0.42, 20), M.white, q, (m) => { m.position.set(-r * 1.0, h * 0.42, 0); m.rotation.y = -Math.PI / 2; });
    }
    out.left = bake(t, root, 'scene07_r16_left');
  }

  // ---- 2. RIGHT: the curved pink-and-gold wall round the water, towers behind it ------------------------------------------------------
  {
    const W = R16.right, t = new THREE.Group(), g = at(TR, new THREE.Group(), -(W.inner + W.R), 0, W.u); t.add(g);
    const tex = starPanelTexture(); tex.repeat.set(Math.round(2 * Math.PI * W.R / 1.15), 1);
    const wallM = std(0xffffff, 0xffffff, 0.34, { map: tex, side: THREE.DoubleSide }); wallM.emissiveMap = tex;
    mesh(new THREE.CylinderGeometry(W.R, W.R, W.H + 0.3, 96, 1, true), wallM, g, (m) => { m.position.y = (W.H - 0.3) / 2; });
    for (let a = -44; a <= 44; a += 8) {   // lavender pilasters with gold caps on the face toward the channel (+x)
      const r = (a * Math.PI) / 180, p = new THREE.Group(); p.position.set(Math.cos(r) * (W.R + 0.04), 0, -Math.sin(r) * (W.R + 0.04)); p.rotation.y = r; g.add(p);
      mesh(new RoundedBoxGeometry(0.12, W.H + 0.2, 0.2, 1, 0.04), M.lav, p, (m) => { m.position.y = W.H / 2 - 0.05; });
      mesh(new THREE.BoxGeometry(0.16, 0.08, 0.26), M.gold, p, (m) => { m.position.y = W.H - 0.12; });
    }
    const flat = (m, y) => { m.rotation.x = Math.PI / 2; m.position.y = y; };
    mesh(new THREE.TorusGeometry(W.R, 0.17, 12, 112), M.cream, g, (m) => flat(m, W.H));                  // the thick cream rim
    mesh(new THREE.TorusGeometry(W.R + 0.07, 0.04, 6, 112), M.gold, g, (m) => flat(m, W.H - 0.2));        // a gold line under it
    mesh(new THREE.TorusGeometry(W.R - 0.2, 0.05, 6, 112), M.gold, g, (m) => flat(m, W.H + 0.17));        // the gold rail on top
    mesh(new THREE.CircleGeometry(W.R, 72), M.cream, g, (m) => { m.rotation.x = -Math.PI / 2; m.position.y = W.H + 0.06; });
    mesh(new THREE.TorusGeometry(W.R + 0.05, 0.12, 8, 112), M.blueL, g, (m) => flat(m, 0.02));            // the lavender-blue base band
    mesh(new THREE.TorusGeometry(W.R + 0.08, 0.035, 6, 112), M.gold, g, (m) => flat(m, 0.17));
    const cx = -(W.inner + W.R);
    for (const [u, x, r, h, dome] of R16.towers) {
      const q = at(TR, new THREE.Group(), x, (x - cx) ** 2 + (u - W.u) ** 2 < W.R * W.R ? W.H : Ch.deck, u); t.add(q);
      mesh(new THREE.CylinderGeometry(r, r * 1.05, h, 28), M.lav, q, (m) => { m.position.y = h / 2; });
      for (const f of [0.12, 0.55, 0.92]) mesh(new THREE.TorusGeometry(r * 1.04, 0.05, 6, 28), M.gold, q, (m) => { m.rotation.x = Math.PI / 2; m.position.y = h * f; });
      mesh(new THREE.SphereGeometry(r, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), M[dome], q, (m) => { m.position.y = h; });
      mesh(new THREE.TorusGeometry(r * 0.45, r * 0.09, 8, 24), M.gold, q, (m) => { m.position.set(r * 0.98, h * 0.45, 0); m.rotation.y = Math.PI / 2; });
      mesh(new THREE.CircleGeometry(r * 0.42, 20), M.white, q, (m) => { m.position.set(r * 1.0, h * 0.45, 0); m.rotation.y = Math.PI / 2; });
    }
    // the big blue gear with its lavender frilled ring, high on the right (master: the upper right corner)
    const G = R16.gear, q = at(TR, new THREE.Group(), G.x, G.h, G.u, Math.PI / 2 + 0.75); t.add(q);
    const ext = (sh, d) => new THREE.ExtrudeGeometry(sh, { depth: d, bevelEnabled: true, bevelThickness: d * 0.2, bevelSize: d * 0.15, bevelSegments: 2, curveSegments: 4 });
    mesh(ext(gearShape(G.R * 1.38, 22, 0.86, true), G.R * 0.12), M.lav, q, (m) => { m.position.z = -G.R * 0.2; });
    const blueG = ext(gearShape(G.R, 12, 0.8), G.R * 0.26); mesh(blueG, M.blue, q);
    mesh(new THREE.TorusGeometry(G.R * 0.55, G.R * 0.07, 8, 40), M.lav, q, (m) => { m.position.z = G.R * 0.36; });
    mesh(new THREE.CylinderGeometry(G.R * 0.3, G.R * 0.3, G.R * 0.4, 24), M.blueL, q, (m) => { m.rotation.x = Math.PI / 2; m.position.z = G.R * 0.25; });
    mesh(new THREE.CylinderGeometry(G.R * 0.36, G.R * 0.36, G.R * 0.4, 6), M.gold, q, (m) => { m.rotation.x = Math.PI / 2; m.position.z = G.R * 0.12; });
    // its wall bracket (attached to the right wall)
    const beam = at(TR, new THREE.Group(), -(Math.abs(G.x) + Ch.halfW) / 2, G.h, G.u + 0.35); t.add(beam);
    mesh(new RoundedBoxGeometry(Ch.halfW - Math.abs(G.x) + 0.3, 0.42, 0.5, 1, 0.08), M.cream, beam);
    mesh(new THREE.BoxGeometry(Ch.halfW - Math.abs(G.x) + 0.32, 0.06, 0.52), M.gold, beam, (m) => { m.position.y = 0.2; });
    out.right = bake(t, root, 'scene07_r16_right');
  }

  // ---- 3. arches over the channel, framing the far end ---------------------------------------------------------------------------------
  {
    const t = new THREE.Group(), cols = { cream: M.cream, blue: M.blueL, pink: M.rose };
    for (const [u, col] of R16.arches) {
      const g = at(TR, new THREE.Group(), 0, 1.25, u); t.add(g);
      const ro = 3.35, ri = 2.75, sh = new THREE.Shape(); sh.absarc(0, 0, ro, 0, Math.PI, false); sh.lineTo(-ri, 0); sh.absarc(0, 0, ri, Math.PI, 0, true); sh.lineTo(ro, 0);
      mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.5, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 2, curveSegments: 40 }), cols[col], g, (m) => { m.position.z = -0.25; });
      for (const r of [ro + 0.04, ri - 0.04]) mesh(new THREE.TorusGeometry(r, 0.05, 6, 64, Math.PI), M.gold, g, (m) => { m.position.z = -0.3; });
      mesh(new THREE.TorusGeometry(0.34, 0.07, 8, 28), M.gold, g, (m) => { m.position.set(0, (ro + ri) / 2, -0.33); });
      mesh(new THREE.CircleGeometry(0.3, 24), M.white, g, (m) => { m.position.set(0, (ro + ri) / 2, -0.32); m.rotation.y = Math.PI; });
      for (const s of [1, -1]) mesh(new RoundedBoxGeometry(0.62, 2.0, 0.6, 1, 0.08), cols[col], g, (m) => { m.position.set(s * (ro + ri) / 2, -1.0, 0); });
    }
    out.arches = bake(t, root, 'scene07_r16_arches');
  }

  // ---- 4. the upper surfaces covered with layered machinery (instanced) -----------------------------------------------------------------
  {
    const Gp = R16.greebles, a = Ch.halfW, b = Ch.height - Ch.wallH;
    // points along the chamber's upper section, by arc length: up the right wall, over the vault, down the left wall
    const path = [];
    for (let h = Gp.hMin[1]; h < Ch.wallH; h += 0.1) path.push([-a, h, 1, 0]);
    for (let j = 0; j <= 200; j++) { const s = Math.PI * (1 - j / 200), x = a * Math.cos(s), h = Ch.wallH + b * Math.sin(s); const nx = -b * Math.cos(s), ny = -a * Math.sin(s), l = Math.hypot(nx, ny); path.push([x, h, nx / l, ny / l]); }
    for (let h = Ch.wallH; h >= Gp.hMin[0]; h -= 0.1) path.push([a, h, -1, 0]);
    const len = [0]; for (let i = 1; i < path.length; i++) len.push(len[i - 1] + Math.hypot(path[i][0] - path[i - 1][0], path[i][1] - path[i - 1][1]));
    const total = len[len.length - 1], pick = (s) => { let i = 1; while (i < len.length - 1 && len[i] < s) i++; return path[i]; };
    const slots = []; let row = 0;
    for (let u = Gp.u[0]; u <= Gp.u[1]; u += Gp.du, row++) for (let s = (row % 2) * Gp.ds / 2; s < total; s += Gp.ds) slots.push([u, s, slots.length]);
    const palette = [C.cream, C.lav, C.rose, C.blue, C.peach, C.cream, C.lav, C.mint].map((c) => new THREE.Color(c));
    const glowCols = [new THREE.Color(0.75, 1.15, 1.55), new THREE.Color(1.55, 0.95, 1.35), new THREE.Color(1.55, 1.3, 0.85)];
    const kinds = { box: [], tank: [], ring: [], disc: [], gear: [], lamp: [] };
    const Q = new THREE.Quaternion(), Ql = new THREE.Quaternion(), Z = new THREE.Vector3(0, 0, 1), S = new THREE.Vector3(), Mx = new THREE.Matrix4();
    const add = (kind, x, h, u, nx, ny, off, sx, sy, sz, col) => {
      TR.map(x + nx * off, h + ny * off, u, P); TR.quaternion(u, Q); Ql.setFromAxisAngle(Z, Math.atan2(-nx, ny)); Q.multiply(Ql);
      kinds[kind].push([Mx.compose(P, Q, S.set(sx, sy, sz)).clone(), col]);
    };
    // skip what the drum, the right wall's towers and the gear already occupy, and the far end's opening
    const D = R16.drum;
    const free = (x, h, u) => !(x > 1.2 && Math.abs(u - D.u) < 2.6 && h < D.h + D.R * 1.35) && !(u > 252.6 && Math.abs(x) < 3.1 && h < 4.6);
    for (const [u, s, i] of slots) {
      const [x, h, nx, ny] = pick(s); if (!free(x, h, u)) continue;
      const bw = 0.55 + 0.6 * hash(i, 1), bd = 0.25 + 0.3 * hash(i, 2), bl = 0.55 + 0.5 * hash(i, 3);
      add('box', x, h, u, nx, ny, bd / 2, bw, bd, bl, palette[Math.floor(hash(i, 4) * palette.length)]);
      const f = hash(i, 5), o = bd;
      if (f < 0.22) { const r = 0.2 + 0.18 * hash(i, 6), l = 0.7 + 0.8 * hash(i, 7); add('tank', x, h, u, nx, ny, o + r, r, l, r, palette[1 + Math.floor(hash(i, 8) * 3)]); }
      else if (f < 0.42) { const r = 0.2 + 0.14 * hash(i, 6); add('ring', x, h, u, nx, ny, o + 0.04, r, r, r, null); add('disc', x, h, u, nx, ny, o + 0.03, r * 0.85, 1, r * 0.85, glowCols[Math.floor(hash(i, 9) * 2)]); }
      else if (f < 0.55) { const r = 0.26 + 0.22 * hash(i, 6); add('gear', x, h, u, nx, ny, o + 0.06, r, r, r, null); }
      else if (f < 0.75) { const w2 = 0.3 + 0.35 * hash(i, 6), d2 = 0.25 + 0.4 * hash(i, 7); add('box', x, h, u, nx, ny, o + d2 / 2, w2, d2, w2 * 1.2, palette[Math.floor(hash(i, 10) * palette.length)]); }
      if (hash(i, 11) < 0.3) add('lamp', x, h, u + 0.35, nx, ny, o + 0.12, 0.09, 0.09, 0.09, glowCols[2]);
    }
    const instM = (base) => { base.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance *= vColor.rgb;'); }; return base; };
    const gStd = instM(std(0xffffff, 0xffffff, 0.34));
    const ringGeo = new THREE.TorusGeometry(1, 0.16, 8, 24); ringGeo.rotateX(Math.PI / 2);
    const discGeo = new THREE.CircleGeometry(1, 20); discGeo.rotateX(-Math.PI / 2);
    const tankGeo = new THREE.CylinderGeometry(1, 1, 1, 18); tankGeo.rotateX(Math.PI / 2);
    const gearGeo = new THREE.ExtrudeGeometry(gearShape(1, 9, 0.78), { depth: 0.22, bevelEnabled: false, curveSegments: 3 }); gearGeo.rotateX(-Math.PI / 2);
    const defs = { box: [new RoundedBoxGeometry(1, 1, 1, 1, 0.12), gStd], tank: [tankGeo, gStd], ring: [ringGeo, M.gold], disc: [discGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })],
      gear: [gearGeo, M.blue], lamp: [new THREE.SphereGeometry(1, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffffff })] };
    const g = new THREE.Group(); g.name = 'scene07_r16_upper'; let n = 0;
    for (const [k, list] of Object.entries(kinds)) {
      if (!list.length) continue;
      const im = new THREE.InstancedMesh(defs[k][0], defs[k][1], list.length); im.name = 'scene07_r16_upper_' + k;
      list.forEach(([m, col], i) => { im.setMatrixAt(i, m); if (col) im.setColorAt(i, col); });
      if (im.instanceColor) im.instanceColor.needsUpdate = true; im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); g.add(im); n += list.length;
    }
    root.add(g); out.upper = g; out.instances = n;
  }
  const mid = TR.map(0, 2, 242, new THREE.Vector3());
  for (const k of ['left', 'right', 'arches', 'upper']) items.push({ holder: out[k], turn: null, spin: 0, pos: mid });
  let tris = 0; root.traverse((o) => { if (o.isMesh && /^scene07_r16/.test(o.name)) tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3 * (o.isInstancedMesh ? o.count : 1); });
  return { instances: out.instances, triangles: Math.round(tris) };
}
