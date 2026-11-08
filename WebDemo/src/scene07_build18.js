// scene07 pass 18, BUILD18 (8 November 2026, session bb87ba9f; the user's construction mandate of ~23:00 UTC: "STOP THE CURRENT COLOR-TUNING APPROACH.
// I WANT AN ACTUAL 3D BACKGROUND RECONSTRUCTION", with the marked six-zone map Design/ReferencePacks/2026-11-08_Avoid_Enemies_3D_Reconstruction_Map_from_user/).
// Target: ONLY the user's approved LEFT "Avoid Enemies!" image (00_AUTHENTIC_APPROVED_SCREEN09.png). Part of the opt-in scene07 (NOT approved);
// `,nobuild18` = pass 17c exactly. BACKGROUND ONLY: no hit test, lane, camera, water, mascot, enemy, HUD or collectible changes. One switch per zone:
//   1 HOUSING (`,nohousing18`): the left washing-machine portal as a MACHINE: a curved pink-metal housing body with the porthole set in it (a hole
//     through the body for the drum's glowing interior), layered rings, bolt studs, a hinge, a control strip with knobs and lights, a pipe up.
//   2 GEAR (`,nogear18`): the right cobalt gear ASSEMBLY (main gear, two meshing gears, backing plate, bolts, axle housing), camera-facing, in the gap
//     the game's HUD leaves right of the banner (the master's gear area is under the game's lowered banner and mission panel).
//   3 DENSE (`,nodense18`): the deep machine interior: several hundred small instanced parts (pipe runs with joints and valve wheels, longitudinal
//     pipes, small gears, lamp fixtures with warm / cool bulbs, angled hatch panels, canisters) on both receding machine faces, on their tops and
//     in a hanging cluster before the far wall; no transverse ceiling ribs (the user rejected a rib ceiling).
//   4 RAIL (`,norail18`): the left counter as a layered catwalk: a lower step tier with its own gold lip, front piping on brackets, ornamental lamps,
//     a gold railing with glowing finials along the top.
//   5 WALL (`,nowall18`): the right pink tub as a bulging decorated cabinet: a convex bulge band, gold-framed panels, vertical pipes, rim lights, a
//     taller stepped back tier with its own rim and small machines and a pipe on top.
//   6 DECO (`,nodeco18`): wall-mounted gold paw medallions on backing plates (never floating like the collectible coins; all above 3.3 m or beside the
//     channel), bubble clusters at several depths, warm / cool lamp glows.
// Real three.js geometry, baked per material or instanced. No random numbers (a fixed hash).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RECON16, hash, canvasTex, gearShape, bake, at } from './scene07_recon16.js';
import { RECON17_ON, R17 } from './scene07_recon17.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const BUILD18_ON = RECON17_ON && !LIST.includes('nobuild18');
const on = (k) => BUILD18_ON && !LIST.includes('no' + k + '18');
export const B18 = { housing: on('housing'), gear: on('gear'), dense: on('dense'), rail: on('rail'), wall: on('wall'), deco: on('deco') };
export const P18 = {
  housing: { len: 1.5, body: 1.25, green: { u: 241.3, x: 2.2, h: 4.25, r: 0.5, hh: 1.0 } },   // the drum body (in the drum's frame): length, radius (in R); the green-topped machine
  gear: { u: 238.0, x: -2.78, h: 4.0, R: 1.0 },                                // centre ~(0.92, 0.31) of the screen at the checkpoint (right of the game's banner)
  rail: { skip: [236.4, 239.6], step: { x: 2.0, h: 1.15 }, post: 0.8, railX: 2.42, top: 2.72 },
  dense: { seed: 18 },
  deco: { medallions: [[244.2, 1.97, 3.55, 1], [247.4, 1.97, 3.3, 1], [250.6, 1.67, 5.0, 1], [244.6, -1.77, 5.0, -1], [249.0, -1.77, 5.9, -1], [250.2, -0.3, 6.35, 0], [252.15, 1.55, 3.37, 0], [252.15, -1.55, 3.37, 0]] },
};
// ROWS17's machine faces (where DENSE mounts its parts): [side, x of the face, h0, h1, u0, u1]
const FACES = [[1, 2.0, 2.05, 4.15, 240.8, 253.0], [1, 1.7, 4.35, 6.4, 242.2, 253.0], [-1, -1.8, 4.45, 6.5, 241.7, 253.0]];

export function prepBuild18() { if (B18.gear && R17.gear) R17.gear.hide = true; }

export function buildBuild18(root, TR, env, goldM, Ch, items) {
  const out = { parts: [], instances: 0 };
  const std = (color, ei = 0.16, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.32, metalness: 0.35, envMap: env || null, envMapIntensity: 0.7, emissive: color, emissiveIntensity: ei, ...o });
  const basic = (r, g, b) => new THREE.MeshBasicMaterial({ color: new THREE.Color(r, g, b) });
  const M = {
    pink: std(0xe2559f, 0.16, { metalness: 0.55, roughness: 0.28 }), magenta: std(0xb02a7e, 0.18), lilac: std(0xc4a6f0, 0.2), silver: std(0xdcd2f2, 0.12, { metalness: 0.75, roughness: 0.25 }),
    violet: std(0x5a44b8, 0.2), deep: std(0x2a2a8a, 0.15), cobalt: std(0x1a3fc4, 0.25, { metalness: 0.15, roughness: 0.34, envMapIntensity: 0.35 }),
    blueL: std(0x4a74ea, 0.3, { metalness: 0.15, envMapIntensity: 0.35 }), cyan: std(0x58c8ff, 0.3), cream: std(0xf4dcc0, 0.2), frill: std(0xc9b0f0, 0.32, { metalness: 0.15, envMapIntensity: 0.35 }),
    gold: goldM,
  };
  const GL = { warm: basic(1.7, 1.35, 0.8), cool: basic(0.8, 1.3, 1.75), pink: basic(1.7, 0.9, 1.4), lilac: basic(1.35, 1.15, 1.7), hi: basic(1.8, 1.8, 1.9) };
  const add = (g, geo, m, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); g.add(o); return o; };
  const camYaw = (x, u) => Math.atan2(-0.62 - x, 226.7 - u);
  const glows = [];   // [x, h, u, 'warm' | 'cool' | 'pink'] for the lamp glows (DECO)

  // ---- 1. HOUSING: the left washer portal as the master draws it (its zone 1 at full resolution): a huge drum seen three-quarters on: the thick
  // pink rim with gold bolt studs and layered rings, the lilac interior with the crystal paw bubble (pass 16's), and a LONG lavender-silver drum body
  // running back toward the channel with gold bands and bolt rows; the master's green-topped machine on its far end; a pipe up into the machinery
  if (B18.housing) {
    const D = RECON16.drum, R = D.R, H = P18.housing, t = new THREE.Group(), g = at(TR, new THREE.Group(), D.x, D.h, D.u, Math.PI - D.yaw); t.add(g);
    const zb = -0.25, len = H.len, rb = R * H.body;
    const bodyM = std(0xd8c6f2, 0.18, { metalness: 0.6, roughness: 0.28 });
    add(g, new THREE.CylinderGeometry(rb, rb, len, 64, 1, true), bodyM, 0, 0, zb - len / 2, Math.PI / 2);
    add(g, new THREE.CircleGeometry(rb, 64), bodyM, 0, 0, zb - len, 0, Math.PI);
    for (const z of [zb - 0.12, zb - len * 0.5, zb - len + 0.1]) add(g, new THREE.TorusGeometry(rb + 0.01, 0.055, 8, 72), M.gold, 0, 0, z);
    for (let k = 0; k < 18; k++) { const a = (k / 18) * Math.PI * 2; add(g, new THREE.SphereGeometry(0.05, 8, 6), M.gold, Math.cos(a) * (rb + 0.02), Math.sin(a) * (rb + 0.02), zb - len * 0.27); }
    add(g, new THREE.TorusGeometry(R * 1.38, 0.05, 8, 80), M.gold, 0, 0, 0.02);                    // layered rings round the rim
    add(g, new THREE.TorusGeometry(R * 1.27, 0.07, 8, 80), M.lilac, 0, 0, -0.02);
    for (let k = 0; k < 16; k++) { const a = (k / 16) * Math.PI * 2; add(g, new THREE.SphereGeometry(0.06, 10, 8), M.gold, Math.cos(a) * R, Math.sin(a) * R, R * 0.33); }   // bolt studs on the rim's face
    add(g, new THREE.SphereGeometry(R * 0.08, 12, 8), GL.hi, -R * 0.2, R * 0.22, -R * 0.05);       // a highlight on the paw bubble
    add(g, new THREE.CylinderGeometry(0.11, 0.11, 2.6, 14), M.gold, rb * 0.3, rb + 1.2, zb - len * 0.7);   // a pipe up into the machinery
    add(g, new THREE.TorusGeometry(0.15, 0.045, 8, 18), M.gold, rb * 0.3, rb + 0.15, zb - len * 0.7, Math.PI / 2);
    // the master's green-topped machine on the drum body's far end: a pink tank with a broad mint dome and gold bands
    const Gm = H.green, q = at(TR, new THREE.Group(), Gm.x, Gm.h, Gm.u, camYaw(Gm.x, Gm.u)); t.add(q);
    add(q, new THREE.CylinderGeometry(Gm.r, Gm.r * 1.08, Gm.hh, 28), M.pink, 0, Gm.hh / 2, 0);
    for (const f of [0.12, 0.6, 0.95]) add(q, new THREE.TorusGeometry(Gm.r * 1.05, 0.04, 6, 28), M.gold, 0, Gm.hh * f, 0, Math.PI / 2);
    add(q, new THREE.SphereGeometry(Gm.r * 1.25, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), std(0x7fdcae, 0.25), 0, Gm.hh, 0).scale.set(1, 0.55, 1);
    add(q, new THREE.TorusGeometry(Gm.r * 0.42, 0.05, 8, 24), M.gold, 0, Gm.hh * 0.42, Gm.r * 0.98); add(q, new THREE.CircleGeometry(Gm.r * 0.38, 20), GL.cool, 0, Gm.hh * 0.42, Gm.r * 0.97);
    out.housing = bake(t, root, 'scene07_b18_housing'); out.parts.push('housing');
  }

  // ---- 2. GEAR: the right cobalt gear assembly ---------------------------------------------------------------------------------------------------
  if (B18.gear) {
    const Gp = P18.gear, R = Gp.R, t = new THREE.Group(), q = at(TR, new THREE.Group(), Gp.x, Gp.h, Gp.u, camYaw(Gp.x, Gp.u)); t.add(q);
    const ext = (s, d) => new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: true, bevelThickness: d * 0.2, bevelSize: d * 0.12, bevelSegments: 2, curveSegments: 5 });
    add(q, new RoundedBoxGeometry(2.9, 2.9, 0.22, 2, 0.2), M.deep, 0, 0, -R * 0.42);
    for (const [x, y] of [[-1.25, -1.25], [1.25, -1.25], [-1.25, 1.25], [1.25, 1.25], [0, 1.3], [0, -1.3], [1.3, 0], [-1.3, 0]]) add(q, new THREE.SphereGeometry(0.07, 10, 8), M.gold, x, y, -R * 0.3);
    const gear = (x, y, z, r, teeth) => {
      add(q, ext(gearShape(r * 1.42, Math.round(teeth * 1.6), 0.9, true), r * 0.08), M.frill, x, y, z - r * 0.16);
      add(q, ext(gearShape(r * 1.14, teeth, 0.84), r * 0.24), M.cobalt, x, y, z);
      add(q, new THREE.TorusGeometry(r * 0.74, r * 0.08, 10, 48), M.blueL, x, y, z + r * 0.3);
      add(q, new THREE.CylinderGeometry(r * 0.6, r * 0.6, r * 0.12, 40), M.cobalt, x, y, z + r * 0.27, Math.PI / 2);
      add(q, new THREE.TorusGeometry(r * 0.42, r * 0.05, 8, 40), M.blueL, x, y, z + r * 0.35);
      add(q, new THREE.CylinderGeometry(r * 0.22, r * 0.22, r * 0.22, 24), M.deep, x, y, z + r * 0.38, Math.PI / 2);
      add(q, new THREE.CylinderGeometry(r * 0.1, r * 0.1, r * 0.08, 12), M.gold, x, y, z + r * 0.5, Math.PI / 2);
    };
    gear(0, 0, 0, R, 18); gear(0.98, -1.22, -0.1, 0.55, 12); gear(-1.12, 1.08, -0.14, 0.45, 10);
    add(q, new THREE.CylinderGeometry(0.28, 0.28, 0.5, 20), M.deep, 0, 0, -0.1, Math.PI / 2);
    out.gear = bake(t, root, 'scene07_b18_gear'); out.parts.push('gear');
  }

  // ---- 3. DENSE: the deep machine interior (instanced) -------------------------------------------------------------------------------------------
  if (B18.dense) {
    const S = P18.dense.seed, kinds = {}, P = new THREE.Vector3(), Qt = new THREE.Quaternion(), Qy = new THREE.Quaternion(), Qo = new THREE.Quaternion(), E = new THREE.Euler(), Y = new THREE.Vector3(0, 1, 0), Sv = new THREE.Vector3(), Mx = new THREE.Matrix4();
    const pal = { cobalt: 0x2a4fd0, blue: 0x4a74ea, violet: 0x6a50c8, pink: 0xe2559f, magenta: 0xb02a7e, lilac: 0xc4a6f0, mint: 0x6fd8a8, cyan: 0x58c8ff, gold: 0xffc552, silver: 0xdcd2f2 };
    const C = (k) => new THREE.Color(pal[k]);
    // one instance: kind, track position (x, h, u), the yaw of its front, a local rotation (Euler), scale, colour; `off` = metres along the front
    const put = (kind, x, h, u, yaw, ex, ey, ez, sx, sy, sz, col, off = 0) => {
      TR.quaternion(u, Qt); Qy.setFromAxisAngle(Y, yaw); Qt.multiply(Qy); TR.map(x + Math.sin(yaw) * off, h, u + Math.cos(yaw) * off, P);
      Qo.setFromEuler(E.set(ex, ey, ez)); Qt.multiply(Qo); (kinds[kind] = kinds[kind] || []).push([Mx.compose(P, Qt, Sv.set(sx, sy, sz)).clone(), col]);
    };
    const faceCols = ['cobalt', 'gold', 'cyan', 'pink', 'silver', 'mint', 'violet'];
    let n = 0;
    // parts mounted on a machine face (front = yaw): pipe runs with joints and a valve, longitudinal pipes, small gears, lamp fixtures, hatches
    const facePart = (i, x, h, u, yaw, side) => {
      const f = hash(i, S), c = faceCols[Math.floor(hash(i, S + 1) * faceCols.length)];
      if (f < 0.24) { const len = 0.7 + 1.1 * hash(i, S + 2), r = 0.045 + 0.04 * hash(i, S + 3);
        put('pipe', x, h, u, yaw, 0, 0, 0, r, len, r, C(c), 0.12); put('joint', x, h + len / 2, u, yaw, 0, 0, 0, r * 1.5, r * 1.5, r * 1.5, C('gold'), 0.12); put('joint', x, h - len / 2, u, yaw, 0, 0, 0, r * 1.5, r * 1.5, r * 1.5, C('gold'), 0.12);
        if (hash(i, S + 4) < 0.5) put('valve', x, h, u, yaw, 0, 0, 0, 0.13, 0.13, 0.13, C(hash(i, S + 5) < 0.5 ? 'gold' : 'magenta'), 0.2); }
      else if (f < 0.4) { const len = 1.0 + 1.6 * hash(i, S + 2), r = 0.05 + 0.035 * hash(i, S + 3);   // along the track (it converges on the far end)
        put('pipe', x, h, u, yaw, 0, 0, Math.PI / 2, r, len, r, C(c), 0.1); }
      else if (f < 0.56) { const r = 0.16 + 0.17 * hash(i, S + 2); put('gear', x, h, u, yaw, 0, 0, hash(i, S + 6) * 3, r, r, r, C(['cobalt', 'gold', 'cyan', 'pink'][Math.floor(hash(i, S + 7) * 4)]), 0.06);
        put('joint', x, h, u, yaw, 0, 0, 0, r * 0.32, r * 0.32, r * 0.32, C('gold'), 0.12); }
      else if (f < 0.74) { put('lampBody', x, h, u, yaw, Math.PI / 2, 0, 0, 0.09, 0.12, 0.09, C('gold'), 0.06); const warm = hash(i, S + 8) < 0.55;
        put('bulb', x, h, u, yaw, 0, 0, 0, 0.075, 0.075, 0.075, warm ? new THREE.Color(1.7, 1.35, 0.8) : new THREE.Color(0.8, 1.3, 1.75), 0.15);
        glows.push([x - side * 0.15, h, u, warm ? 'warm' : 'cool']); }
      else { const w = 0.35 + 0.3 * hash(i, S + 2), hh = 0.25 + 0.2 * hash(i, S + 3); put('panel', x, h, u, yaw, -0.35 - 0.4 * hash(i, S + 9), 0, 0, w, hh, 0.04, C(['lilac', 'pink', 'mint', 'cyan', 'violet'][Math.floor(hash(i, S + 10) * 5)]), 0.1); }
      n++;
    };
    let i = 18000;
    for (const [side, fx, h0, h1, u0, u1] of FACES) {
      const yaw = side > 0 ? -Math.PI / 2 : Math.PI / 2, cnt = Math.round((u1 - u0) * (h1 - h0) * 2.6);
      for (let k = 0; k < cnt; k++, i++) facePart(i, fx, h0 + (h1 - h0) * hash(i, S + 20), u0 + (u1 - u0) * hash(i, S + 21), yaw, side);
    }
    // the rows' tops: canisters with domes, lamps and pipes rising toward the gantries
    for (const [side, x0, x1, h, u0, u1] of [[1, 1.8, 2.5, 6.5, 242.4, 253], [-1, -1.9, -2.6, 6.6, 241.8, 253]]) {
      for (let k = 0; k < 26; k++, i++) {
        const x = x0 + (x1 - x0) * hash(i, S + 30), u = u0 + (u1 - u0) * hash(i, S + 31), f = hash(i, S + 32), c = ['lilac', 'cyan', 'pink', 'mint', 'cobalt', 'gold'][Math.floor(hash(i, S + 33) * 6)];
        if (f < 0.5) { const r = 0.14 + 0.12 * hash(i, S + 34), hh = 0.35 + 0.5 * hash(i, S + 35); put('can', x, h + hh / 2, u, 0, 0, 0, 0, r, hh, r, C(c)); put('dome', x, h + hh, u, 0, 0, 0, 0, r, r, r, C(hash(i, S + 36) < 0.5 ? 'gold' : 'pink')); }
        else if (f < 0.75) { const len = 0.6 + 0.9 * hash(i, S + 34); put('pipe', x, h + len / 2, u, 0, 0, 0, 0, 0.05, len, 0.05, C('gold')); put('valve', x, h + len * 0.6, u, camYaw(x, u), 0, 0, 0, 0.11, 0.11, 0.11, C('magenta')); }
        else { put('bulb', x, h + 0.12, u, 0, 0, 0, 0, 0.08, 0.08, 0.08, new THREE.Color(1.7, 1.35, 0.8)); glows.push([x, h + 0.12, u, 'warm']); }
        n++;
      }
    }
    // the hanging cluster before the far wall (the centre of the master's machine world), camera-facing, above the gameplay space (h > 4.4 m)
    for (let k = 0; k < 90; k++, i++) {
      const x = -1.6 + 3.2 * hash(i, S + 40), h = 4.5 + 2.8 * hash(i, S + 41), u = 248.6 + 4.5 * hash(i, S + 42), yaw = camYaw(x, u), f = hash(i, S + 43);
      if (f < 0.2) { const r = 0.15 + 0.2 * hash(i, S + 44), hh = 0.3 + 0.45 * hash(i, S + 45); put('can', x, h, u, yaw, 0, 0, 0, r, hh, r, C(['pink', 'cyan', 'lilac', 'mint', 'cobalt'][Math.floor(hash(i, S + 46) * 5)])); put('dome', x, h + hh / 2, u, yaw, 0, 0, 0, r, r, r, C('gold')); }
      else if (f < 0.35) put('box', x, h, u, yaw, 0, 0, 0, 0.35 + 0.35 * hash(i, S + 44), 0.3 + 0.3 * hash(i, S + 45), 0.3, C(['violet', 'cobalt', 'pink', 'lilac', 'cyan'][Math.floor(hash(i, S + 46) * 5)]));
      else facePart(i, x, h, u, yaw, 0);
      if (hash(i, S + 47) < 0.25) put('pipe', x, h + 0.6, u, yaw, 0, 0, 0, 0.03, 1.2, 0.03, C('gold'));   // a hanger rod
      n++;
    }
    const instM = (base) => { base.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance *= vColor.rgb;'); }; base.customProgramCacheKey = () => 'b18inst'; return base; };
    const W = () => instM(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.32, metalness: 0.35, envMap: env || null, envMapIntensity: 0.6, emissive: 0xffffff, emissiveIntensity: 0.16 }));
    const valveG = new THREE.TorusGeometry(1, 0.2, 6, 16), gearG = new THREE.ExtrudeGeometry(gearShape(1, 9, 0.78), { depth: 0.25, bevelEnabled: false, curveSegments: 3 });
    const domeG = new THREE.SphereGeometry(1, 14, 7, 0, Math.PI * 2, 0, Math.PI / 2);
    const defs = { pipe: [new THREE.CylinderGeometry(1, 1, 1, 10), W()], joint: [new THREE.SphereGeometry(1, 10, 8), W()], valve: [valveG, W()], gear: [gearG, W()],
      lampBody: [new THREE.CylinderGeometry(1, 0.75, 1, 12), W()], bulb: [new THREE.SphereGeometry(1, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffffff })],
      panel: [new THREE.BoxGeometry(1, 1, 1), W()], can: [new THREE.CylinderGeometry(1, 1, 1, 14), W()], dome: [domeG, W()], box: [new RoundedBoxGeometry(1, 1, 1, 1, 0.1), W()] };
    const g = new THREE.Group(); g.name = 'scene07_b18_dense'; let ni = 0;
    for (const [k, list] of Object.entries(kinds)) {
      const im = new THREE.InstancedMesh(defs[k][0], defs[k][1], list.length); im.name = 'scene07_b18_dense_' + k;
      list.forEach(([m, col], j) => { im.setMatrixAt(j, m); im.setColorAt(j, col); });
      im.instanceMatrix.needsUpdate = true; im.instanceColor.needsUpdate = true; im.computeBoundingSphere(); g.add(im); ni += list.length;
    }
    root.add(g); out.dense = g; out.parts.push('dense'); out.instances += ni; out.denseParts = n;
  }

  // ---- 4. RAIL: the left counter as a layered catwalk --------------------------------------------------------------------------------------------
  if (B18.rail) {
    const L = RECON16.ledge, Rl = P18.rail, t = new THREE.Group(), P = new THREE.Vector3();
    const strip = (pts, idx) => { const q = new THREE.BufferGeometry(); q.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)); q.setIndex(idx); q.computeVertexNormals(); return q; };
    const top = [], front = [], ti = [], fi = [], lip = [], pipe = [];
    let k = 0;
    for (let u = L.u[0] + 0.4; u <= L.u[1] + 1e-6; u += 0.5, k++) {
      TR.map(Rl.step.x, Rl.step.h, u, P); top.push(P.x, P.y, P.z); lip.push(P.clone()); TR.map(L.x, Rl.step.h, u, P); top.push(P.x, P.y, P.z);
      TR.map(Rl.step.x, Rl.step.h, u, P); front.push(P.x, P.y, P.z); TR.map(Rl.step.x, 0.3, u, P); front.push(P.x, P.y, P.z);
      pipe.push(TR.map(L.x - 0.05, 1.62, u, new THREE.Vector3()));
      if (k) { const a = 2 * (k - 1); ti.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); fi.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    }
    t.add(new THREE.Mesh(strip(top, ti), Object.assign(M.cream.clone(), { side: THREE.DoubleSide })));
    t.add(new THREE.Mesh(strip(front, fi), Object.assign(M.magenta.clone(), { side: THREE.DoubleSide })));
    t.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lip), lip.length * 2, 0.07, 8, false), M.gold));
    t.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lip.map((p, j) => TR.map(Rl.step.x - 0.01, 0.62, L.u[0] + 0.4 + j * 0.5, new THREE.Vector3()))), lip.length * 2, 0.035, 6, false), M.gold));
    t.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pipe), pipe.length * 2, 0.055, 8, false), M.silver));   // front piping
    for (let u = L.u[0] + 1; u < L.u[1]; u += 1.6) { const b = at(TR, new THREE.Group(), L.x - 0.05, 1.62, u); t.add(b); add(b, new THREE.BoxGeometry(0.14, 0.16, 0.12), M.gold, 0.02, 0, 0); }
    for (let u = L.u[0] + 0.6, j = 0; u < L.u[1]; u += 1.1, j++) { const b = at(TR, new THREE.Group(), L.x - 0.02, 1.84, u); t.add(b); add(b, new THREE.SphereGeometry(0.05, 10, 8), j % 2 ? GL.warm : GL.pink, 0, 0, 0); glows.push([L.x - 0.1, 1.84, u, j % 2 ? 'warm' : 'pink']); }
    // the railing along the top (two runs either side of the housing)
    const runs = [[L.u[0] + 0.3, Rl.skip[0]], [Rl.skip[1], L.u[1] - 0.2]];
    for (const [ua, ub] of runs) {
      const rails = [[], []];
      for (let u = ua, j = 0; u <= ub + 1e-6; u += Rl.post, j++) {
        const p = at(TR, new THREE.Group(), Rl.railX, L.h, u); t.add(p);
        add(p, new THREE.CylinderGeometry(0.035, 0.045, Rl.top - L.h, 8), M.gold, 0, (Rl.top - L.h) / 2, 0);
        if (j % 3 === 0) { add(p, new THREE.SphereGeometry(0.065, 10, 8), GL.warm, 0, Rl.top - L.h + 0.07, 0); glows.push([Rl.railX, Rl.top + 0.07, u, 'warm']); }
        rails[0].push(TR.map(Rl.railX, Rl.top, u, new THREE.Vector3())); rails[1].push(TR.map(Rl.railX, L.h + 0.42, u, new THREE.Vector3()));
      }
      if (rails[0].length > 1) { t.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rails[0]), rails[0].length * 3, 0.045, 8, false), M.gold));
        t.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rails[1]), rails[1].length * 3, 0.03, 6, false), M.gold)); }
    }
    out.rail = bake(t, root, 'scene07_b18_rail'); out.parts.push('rail');
  }

  // ---- 5. WALL: the right pink tub as a bulging decorated cabinet ---------------------------------------------------------------------------------
  if (B18.wall) {
    const Wr = RECON16.right, R = Wr.R, t = new THREE.Group(), g = at(TR, new THREE.Group(), -(Wr.inner + R), 0, Wr.u); t.add(g);
    const ring = (rad, tube, y, m, arcDeg) => { const o = new THREE.Group(); o.rotation.y = THREE.MathUtils.degToRad(arcDeg / 2); g.add(o);
      add(o, new THREE.TorusGeometry(rad, tube, 12, 140, THREE.MathUtils.degToRad(arcDeg)), m, 0, y, 0, Math.PI / 2); };
    ring(R + 0.05, 0.16, 0.5, M.pink, 140);                                                     // the convex bulge band
    ring(R + 0.12, 0.035, 0.66, M.gold, 140); ring(R + 0.12, 0.035, 0.34, M.gold, 140);
    for (let a = -44; a <= 44 + 1e-6; a += 8.8) {                                               // gold-framed panels with vertical pipes between them
      const r = THREE.MathUtils.degToRad(a), p = new THREE.Group(); p.position.set(Math.cos(r) * (R + 0.04), 0, -Math.sin(r) * (R + 0.04)); p.rotation.y = r; g.add(p);
      for (const [y0, y1] of [[0.06, 0.3], [0.7, 0.9]]) { const yc = (y0 + y1) / 2, hh = y1 - y0;
        for (const z of [-0.36, 0.36]) add(p, new THREE.BoxGeometry(0.04, hh, 0.035), M.gold, 0.02, yc, z);
        for (const y of [y0, y1]) add(p, new THREE.BoxGeometry(0.04, 0.035, 0.75), M.gold, 0.02, y, 0); }
      const r2 = THREE.MathUtils.degToRad(a + 4.4), pp = new THREE.Group(); pp.position.set(Math.cos(r2) * (R + 0.06), 0, -Math.sin(r2) * (R + 0.06)); pp.rotation.y = r2; g.add(pp);
      if (a < 44) add(pp, new THREE.CylinderGeometry(0.04, 0.04, 0.88, 8), M.gold, 0, 0.5, 0);
    }
    for (let a = -44, j = 0; a <= 44 + 1e-6; a += 4.4, j++) { const r = THREE.MathUtils.degToRad(a), m = [GL.warm, GL.cool, GL.pink][j % 3];
      add(g, new THREE.SphereGeometry(0.045, 10, 8), m, Math.cos(r) * (R + 0.1), 0.82, -Math.sin(r) * (R + 0.1)); }
    // the taller stepped back tier, its rim, rail and small machines on top
    const Rb = R - 0.7, tex = canvasTex(256, 128, (c, w, h) => { const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#ff9fd0'); gr.addColorStop(1, '#d24d9e'); c.fillStyle = gr; c.fillRect(0, 0, w, h);
      c.fillStyle = '#ffd36a'; c.fillRect(0, 8, w, 6); c.fillRect(0, h - 14, w, 6); c.fillStyle = 'rgba(120,40,140,0.35)'; for (const x of [0, 128]) c.fillRect(x, 14, 4, h - 28);
      for (const x of [64, 192]) { c.beginPath(); c.arc(x, h / 2, 18, 0, Math.PI * 2); c.fillStyle = '#ffe9a0'; c.fill(); c.beginPath(); c.arc(x, h / 2, 12, 0, Math.PI * 2); c.fillStyle = '#9fe6ff'; c.fill(); } }, true);
    tex.repeat.set(Math.round(2 * Math.PI * Rb / 1.6 / 3), 1);
    const backM = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.34, metalness: 0.3, envMap: env || null, envMapIntensity: 0.7, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.22, side: THREE.DoubleSide });
    add(g, new THREE.CylinderGeometry(Rb, Rb, 0.95, 96, 1, true, Math.PI / 6, (2 * Math.PI) / 3), backM, 0, 0.95 + 0.47, 0);
    ring(Rb, 0.09, 1.9, M.cream, 120); ring(Rb + 0.06, 0.03, 1.78, M.gold, 120); ring(Rb - 0.18, 0.04, 2.06, M.gold, 120);
    for (const a of [-30, -15, 0, 15, 30]) { const r = THREE.MathUtils.degToRad(a), x = Math.cos(r) * (Rb - 0.45), z = -Math.sin(r) * (Rb - 0.45);
      add(g, new THREE.CylinderGeometry(0.22, 0.24, 0.5, 18), a % 30 ? M.lilac : M.cyan, x, 2.15, z); add(g, new THREE.TorusGeometry(0.23, 0.03, 6, 20), M.gold, x, 2.05, z, Math.PI / 2);
      add(g, new THREE.SphereGeometry(0.22, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), a % 30 ? M.pink : M.gold, x, 2.4, z); }
    ring(Rb - 0.45, 0.05, 2.62, M.gold, 70);
    out.wall = bake(t, root, 'scene07_b18_wall'); out.parts.push('wall');
  }

  // ---- 6. DECO: wall-mounted gold medallions, bubble clusters, lamp glows ---------------------------------------------------------------------------
  if (B18.deco) {
    const t = new THREE.Group();
    const coinM = new THREE.MeshStandardMaterial({ color: 0xffc23a, metalness: 0.9, roughness: 0.25, envMap: env || null, envMapIntensity: 1.2, emissive: 0x8a5a10, emissiveIntensity: 0.5 });
    const pawM = new THREE.MeshStandardMaterial({ color: 0xffe28a, metalness: 0.7, roughness: 0.3, envMap: env || null, envMapIntensity: 1.0, emissive: 0x9a7020, emissiveIntensity: 0.45 });
    for (const [u, x, h, side] of P18.deco.medallions) {
      const yaw = side > 0 ? -Math.PI / 2 : side < 0 ? Math.PI / 2 : camYaw(x, u), g = at(TR, new THREE.Group(), x, h, u, yaw); t.add(g);
      add(g, new RoundedBoxGeometry(0.66, 0.66, 0.08, 2, 0.06), M.violet, 0, 0, 0);                 // the backing plate (it reads as mounted, not as a pickup)
      add(g, new THREE.TorusGeometry(0.27, 0.035, 8, 32), M.gold, 0, 0, 0.06);
      add(g, new THREE.CylinderGeometry(0.24, 0.24, 0.07, 32), coinM, 0, 0, 0.08, Math.PI / 2);
      add(g, new THREE.SphereGeometry(0.075, 12, 8), pawM, 0, -0.04, 0.12).scale.set(1.15, 0.9, 0.4);
      for (const [px, py] of [[-0.085, 0.05], [-0.03, 0.1], [0.03, 0.1], [0.085, 0.05]]) add(g, new THREE.SphereGeometry(0.03, 8, 6), pawM, px, py, 0.12).scale.set(1, 1, 0.5);
      for (const [px, py] of [[-0.29, -0.29], [0.29, -0.29], [-0.29, 0.29], [0.29, 0.29]]) add(g, new THREE.SphereGeometry(0.03, 8, 6), M.gold, px, py, 0.05);
    }
    out.deco = bake(t, root, 'scene07_b18_deco');
    // bubble clusters at several depths (instanced glass)
    const bubM = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.06, metalness: 0, envMap: env || null, envMapIntensity: 1.6, transparent: true, opacity: 0.55, iridescence: 0.9, iridescenceIOR: 1.3, clearcoat: 1, depthWrite: false, emissive: 0xe8f4ff, emissiveIntensity: 0.25 });
    const list = [], P = new THREE.Vector3(), Mx = new THREE.Matrix4(), Q = new THREE.Quaternion(), Sv = new THREE.Vector3();
    for (let k = 0, c = 0; c < 64 && k < 400; k++) {
      const side = hash(k, 181) < 0.5 ? 1 : -1, x = side * (1.45 + 1.9 * hash(k, 182)), h = 2.6 + 4.8 * hash(k, 183), u = 238.5 + 15 * hash(k, 184), r = 0.07 + 0.22 * hash(k, 185) ** 2;
      if (side < 0 && h < 4.3) continue;
      // clusters: each bubble brings two small neighbours
      for (const [dx, dh, du, s] of [[0, 0, 0, 1], [0.12, r * 1.4, 0.1, 0.45], [-0.1, -r * 1.2, -0.12, 0.35]]) { TR.map(x + dx, h + dh, u + du, P); list.push(Mx.compose(P, Q, Sv.setScalar(r * s)).clone()); }
      c++;
    }
    const bm = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 20, 14), bubM, list.length); bm.name = 'scene07_b18_bubbles';
    list.forEach((m, j) => bm.setMatrixAt(j, m)); bm.instanceMatrix.needsUpdate = true; bm.computeBoundingSphere(); root.add(bm); out.bubbles = bm; out.instances += list.length;
    // warm / cool lamp glows round every lit fixture (additive, size falls off with distance)
    const glowTex = canvasTex(64, 64, (c, w) => { const gr = c.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(0.35, 'rgba(255,255,255,0.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = gr; c.fillRect(0, 0, w, w); });
    const tint = { warm: [1, 0.78, 0.45], cool: [0.5, 0.8, 1], pink: [1, 0.55, 0.85] }, pos = [], col = [];
    for (const [x, h, u, k] of glows) { TR.map(x, h, u, P); pos.push(P.x, P.y, P.z); col.push(...tint[k]); }
    if (pos.length) { const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); gg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      const pts = new THREE.Points(gg, new THREE.PointsMaterial({ size: 0.42, map: glowTex, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
      pts.name = 'scene07_b18_glows'; root.add(pts); out.glows = pts; out.glowCount = pos.length / 3; }
    // reflective sparkle at many depths (the master's white glints: its background has 10-15 % near-white against the game's 1-3 %): two layers
    // of four-point glints, white-dominant, densest round the far cluster, the drum and the right cabinet; never over the right lane's play space
    const starTex = canvasTex(64, 64, (c, w) => { const m = w / 2, gr = c.createRadialGradient(m, m, 0, m, m, m * 0.45); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      c.fillStyle = gr; c.fillRect(0, 0, w, w); c.fillStyle = 'rgba(255,255,255,0.95)';
      c.beginPath(); c.moveTo(m, 1); c.lineTo(m + 2.5, m); c.lineTo(m, w - 1); c.lineTo(m - 2.5, m); c.closePath(); c.fill(); c.beginPath(); c.moveTo(1, m); c.lineTo(m, m + 2.5); c.lineTo(w - 1, m); c.lineTo(m, m - 2.5); c.closePath(); c.fill(); });
    const SPK = [[1, 0.5, 0.17, 700], [2, 0.28, 0.3, 260]];   // [seed, white share inverse, size, count]
    for (const [sd, , size, cnt] of SPK) {
      const sp = [], sc = [];
      for (let k = 0, c = 0; c < cnt && k < cnt * 5; k++) {
        const z = hash(k, 300 + sd), x = z < 0.35 ? -2.4 + 4.8 * hash(k, 310 + sd) : (hash(k, 320 + sd) < 0.6 ? 1 : -1) * (1.5 + 2.4 * hash(k, 330 + sd));
        const h = 2.2 + 5.6 * hash(k, 340 + sd), u = z < 0.35 ? 246 + 8 * hash(k, 350 + sd) : 236 + 18 * hash(k, 360 + sd);
        if (Math.abs(x) < 1.5 && h < 4.4) continue; if (x < -1.2 && h < 4.2 && u > 238) continue;
        TR.map(x, h, u, P); sp.push(P.x, P.y, P.z); const w = hash(k, 370 + sd); sc.push(...(w < 0.7 ? [1, 1, 1] : w < 0.85 ? [1, 0.9, 0.65] : [0.7, 0.9, 1])); c++;
      }
      const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3)); gg.setAttribute('color', new THREE.Float32BufferAttribute(sc, 3));
      const pts = new THREE.Points(gg, new THREE.PointsMaterial({ size, map: starTex, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
      pts.name = 'scene07_b18_sparkle' + sd; root.add(pts); out['sparkle' + sd] = pts; out.sparkles = (out.sparkles || 0) + sp.length / 3;
    }
    out.parts.push('deco');
  }

  const mid = TR.map(0, 2, 246, new THREE.Vector3());
  for (const k of ['housing', 'gear', 'dense', 'rail', 'wall', 'deco', 'bubbles', 'glows', 'sparkle1', 'sparkle2']) if (out[k]) items.push({ holder: out[k], turn: null, spin: 0, pos: mid });
  let tris = 0; root.traverse((o) => { if (o.isMesh && /^scene07_b18/.test(o.name)) tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3 * (o.isInstancedMesh ? o.count : 1); });
  out.triangles = Math.round(tris);
  return { parts: out.parts, instances: out.instances, denseParts: out.denseParts || 0, glows: out.glowCount || 0, sparkles: out.sparkles || 0, triangles: out.triangles };
}
