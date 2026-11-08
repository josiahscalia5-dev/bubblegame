// scene07 pass 17 (8 November 2026, session bb87ba9f; the user's account-transfer mandate of ~22:10 UTC: "the upper-middle scenery still does
// not resemble the original's dense, colorful, layered magical laundry machinery; the distant end still resembles a generic ring tunnel; the
// water channel is wider, straighter and darker than my approved image ... actual dimensional 3D architecture ... no screenshot pasted behind
// the character, no fake wallpaper, no repeated projection cards"). Master: Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/
// 00_AUTHENTIC_APPROVED_SCREEN09.png. Part of the opt-in scene07 (NOT approved); `,norecon17` builds pass 16 v5 exactly.
// Built on the art director's three named obstacles of v5 (77_.../ART_DIRECTOR_REVIEW_pass16_v2.md), one switch each:
//   ROWS17  (`,norows17`): the upper middle RECEDES: rows of machine cabinets along both sides with their fronts turned to the channel (round
//           glowing doors, gold bands, saturated cobalt / violet / magenta / mint / cyan), the left row on the ledge in two tiers, the right row
//           high above the enemy, glowing light conduits along them (in perspective they converge on the vanishing point, the master's light
//           streaks) and small glints over the machinery (the master's sparkle).
//   FAR17   (`,nofar17`): the far end is machinery, not a ring tunnel: the far end wall covered with real machine fronts (washer doors, tanks,
//           gears, pipes) instead of the master's pixels (FAR16), the round portal broken by two machine jambs and a gantry bridge (bottom 3.1 m:
//           above her highest jump), and the level tube's glowing rings beyond the portal suppressed while the camera is far (they fade back in
//           within 16..8 m of the portal, so the run goes on into the normal tube).
//   WATER17 (opt-in `,water17` ONLY; the user then forbade any water change): the channel's water in this stretch only: the master's lighter azure with dense white sparkle and white crests
//           along both banks (a narrower blue ribbon). Level 1's own water shader, patched at run time for this stretch; the accepted Screen 4
//           water and every other stretch are untouched.
// Real three.js geometry, baked per material (a few draw calls). No random numbers (a fixed hash). Looks only: no hit test changes.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RECON16_ON, MACH16_ON, PASTEL16, RECON16, hash, canvasTex, gearShape, bake, at } from './scene07_recon16.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const RECON17_ON = RECON16_ON && MACH16_ON && !LIST.includes('norecon17') && !LIST.includes('walls6');
export const ROWS17_ON = RECON17_ON && !LIST.includes('norows17');
export const FAR17_ON = RECON17_ON && !LIST.includes('nofar17');
// JEWEL17 (`,nojewel17`; the user, 8 Nov ~22:40 UTC: "saturated jewel tones ... without washing everything out into pale lavender"; measured: the
// master's background is darker than the game's in every zone, value 0.76-0.89 against 0.83-0.97, its right gear deep cobalt where the game's reads
// pale lavender): the hall's whitening and self-glow (PASTEL16) lowered, a deep blue-violet chamber surface, the far glow smaller and softer
export const JEWEL17_ON = RECON17_ON && !LIST.includes('nojewel17');
export const WATER17_ON = RECON17_ON && LIST.includes('water17');   // OPT-IN ONLY: the user's background-only mandate (8 Nov ~22:40 UTC): "do NOT modify my existing water appearance"

export const R17 = {
  // ROWS17: [side (+1 = screen-left), u0, u1, front x (m from the centre line, the face toward the channel), base h, tiers [[h0, h1], ...]]
  rows: [[1, 240.6, 253.2, 2.05, 1.95, [[1.95, 3.05], [3.05, 4.25]]],
    [1, 242.0, 253.2, 1.75, 4.25, [[4.25, 5.35], [5.35, 6.5]]],
    [-1, 241.5, 253.2, -1.85, 4.35, [[4.35, 5.45], [5.45, 6.6]]]],
  cell: 0.95,                 // cabinet width along the track (m)
  // light conduits along the rows: [x, h, u0, u1, colour, radius]
  conduits: [[2.0, 3.08, 240.6, 253.4, 'cyan', 0.045], [2.0, 4.28, 240.6, 253.4, 'gold', 0.05], [1.7, 5.38, 242.0, 253.4, 'pink', 0.045], [1.7, 6.55, 242.0, 253.4, 'cyan', 0.05],
    [-1.8, 4.32, 241.5, 253.4, 'gold', 0.05], [-1.8, 5.48, 241.5, 253.4, 'cyan', 0.045], [-1.8, 6.65, 241.5, 253.4, 'pink', 0.05]],
  glints: { n: 520, u: [238.5, 253.8], seed: 17 },
  // FAR17: machine fronts on the far end wall (a grid over it, the portal opening left free), the jambs and the bridge
  far: { du: 0.4, step: [0.98, 1.0], hTop: 7.0, open: [2.0, 3.1], jambs: [[2.42, [['w', 1.2, 0.95, 'blue', 'c'], ['t', 0.95, 0.42, 'pink', 'mint'], ['g', 0.36]]],
    [-2.42, [['w', 1.2, 0.95, 'violet', 'p'], ['w', 0.95, 0.85, 'cyan', 'w'], ['d', 0.4, 'pink']]]], jambU: 252.85,
    bridge: { u: 252.55, h: 3.1, depth: 0.7, thick: 0.55, half: 2.95 }, ringFade: [8, 16] },
  // WATER17: the stretch [u0, u1] with a blend of `blend` m at each end; the azure mix and the banks' white crest
  water: { u: [221, 256], blend: 3.5, mix: 0.78, crest: [1.05, 0.45], spark: 0.85 },
  // JEWEL17: PASTEL16 replaced (whitening, self-glow), the pass 17 machines' self-glow, the chamber surface's glow, the far glow sprite
  jewel: { pastel: { k: 0.0, kLandmark: 0.0, glow: 0.2 }, machineGlow: 0.2, shellGlow: 0.24, glow: { r: 4.2, opacity: 0.55 } },
  // the level tube's hoops beyond the far portal (not in the approved image): kept out of view while the camera is in the stretch before the portal
  hoops: { beyond: 1.0, reach: 46 },
};
const COL = { blue: 0x3f63e6, deep: 0x2a3ab8, violet: 0x8a5ad8, pink: 0xf06ab8, rose: 0xff9fd0, mint: 0x7fdcae, cyan: 0x62c8ff, cream: 0xf6e2c0, lilac: 0xbfa2f2, gold: 0xffcf5a };
const ROWCOLS = ['blue', 'violet', 'pink', 'mint', 'cyan', 'deep', 'lilac', 'cream'];

// JEWEL17: the chamber's own surface behind the machinery: the master's deep blue-violet recesses (#5f66af / #726eb0) with magenta seams and faint
// panels, darker toward the top, a little warmer toward the decks (it shows only in the gaps)
export function jewelFacadeTexture() {
  return canvasTex(512, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#3f3f9a'); gr.addColorStop(0.5, '#5e58b4'); gr.addColorStop(1, '#8a5aae');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 46; i++) {
      const x = (i * 97) % w, y = (i * 53) % h, rw = 26 + (i * 37) % 58, rh = 20 + (i * 29) % 46;
      g.fillStyle = ['rgba(30,24,90,0.35)', 'rgba(150,120,230,0.22)', 'rgba(200,64,140,0.22)'][i % 3]; g.beginPath(); g.roundRect(x, y, rw, rh, 6); g.fill();
    }
    for (let i = 0; i < 70; i++) { g.fillStyle = ['rgba(255,236,190,0.9)', 'rgba(190,240,255,0.9)', 'rgba(255,170,220,0.85)'][i % 3]; g.beginPath(); g.arc((i * 71) % w, (i * 43 + (i * i) % 17) % h, 1.5 + (i % 3), 0, Math.PI * 2); g.fill(); }
  }, true);
}

function starTexture() {   // a soft four-point glint
  return canvasTex(64, 64, (g, w) => {
    const c = w / 2, gr = g.createRadialGradient(c, c, 0, c, c, c * 0.5); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, w);
    g.fillStyle = 'rgba(255,255,255,0.9)'; g.beginPath(); g.moveTo(c, 2); g.lineTo(c + 3, c); g.lineTo(c, w - 2); g.lineTo(c - 3, c); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(2, c); g.lineTo(c, c + 3); g.lineTo(w - 2, c); g.lineTo(c, c - 3); g.closePath(); g.fill();
  });
}

// ROWS17 replaces v5's camera-facing mounted machines where its rows stand (they "face the camera instead of receding"); call before buildRecon16
export function prepRecon17(M16) {
  if (JEWEL17_ON) { Object.assign(PASTEL16, R17.jewel.pastel); Object.assign(RECON16.glow, R17.jewel.glow); }
  if (!ROWS17_ON || !M16 || !M16.mounted) return 0;
  const n0 = M16.mounted.length;
  M16.mounted = M16.mounted.filter(([u, x, hc]) => !((x >= 1.2 && u >= 240 && hc >= 2.2 && hc <= 6.9) || (x <= -1.2 && u >= 241 && hc >= 4.3 && hc <= 6.9)));
  return n0 - M16.mounted.length;
}

export function buildRecon17(root, TR, env, goldM, Ch, items) {
  const out = { parts: [] };
  const mat = (color, ei = 0.42, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.36, metalness: 0.25, envMap: env || null, envMapIntensity: 0.9, emissive: color, emissiveIntensity: ei, ...extra });
  const gi = JEWEL17_ON ? R17.jewel.machineGlow : 0.42;
  const B = {}; for (const k of Object.keys(COL)) B[k] = mat(COL[k], k === 'cream' ? gi * 0.76 : gi);
  B.gold = goldM;
  const G = { c: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.75, 1.2, 1.6) }), p: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.5, 0.95, 1.35) }), w: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.65, 1.3, 0.8) }) };
  const hi = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 1.8, 1.9) });
  const lamp = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.3, 0.85) });
  const btn = [0xff7fbf, 0x8fe3b0, 0x7fa8ff].map((c) => new THREE.MeshBasicMaterial({ color: c }));
  const add = (g, geo, m, x, y, z, rx = 0, ry = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.set(rx, ry, 0); g.add(o); return o; };
  // shared geometries (baked, so sharing only saves build time)
  const torus = (r, t) => new THREE.TorusGeometry(r, t, 8, 28);
  const door = (g, y, z, r, glass) => {   // a round washer door facing +z
    add(g, torus(r, r * 0.14), B.gold, 0, y, z + r * 0.05);
    add(g, torus(r * 0.8, r * 0.07), B.pink, 0, y, z + r * 0.08);
    add(g, new THREE.CircleGeometry(r * 0.74, 22), G[glass] || G.c, 0, y, z + r * 0.04);
    add(g, new THREE.CircleGeometry(r * 0.2, 10), hi, -r * 0.3, y + r * 0.3, z + r * 0.06);
  };
  const module = (g, y, md) => {   // as MACH16's modules, chunkier: ['w' washer, h, w, colour, glass] ['t' tank, h, r, colour, dome] ['g' gear, R] ['d' dome, r, colour]
    if (md[0] === 'w') { const [, h, w, col, glass] = md, d = w * 0.8;
      add(g, new RoundedBoxGeometry(w, h, d, 2, Math.min(w, h) * 0.14), B[col], 0, y + h / 2, 0);
      door(g, y + h * 0.44, d / 2, Math.min(w, h) * 0.31, glass);
      add(g, new THREE.BoxGeometry(w * 0.8, 0.1, 0.06), B.gold, 0, y + h * 0.86, d / 2 + 0.01);
      btn.forEach((m, i) => add(g, new THREE.SphereGeometry(0.045, 8, 6), m, (i - 1) * w * 0.18, y + h * 0.86, d / 2 + 0.05));
      return h; }
    if (md[0] === 't') { const [, h, r, col, dome] = md;
      add(g, new THREE.CylinderGeometry(r, r * 1.05, h, 22), B[col], 0, y + h / 2, 0);
      for (const f of [0.1, 0.55, 0.94]) add(g, torus(r * 1.04, 0.04), B.gold, 0, y + h * f, 0, Math.PI / 2);
      door(g, y + h * 0.36, r * 0.92, r * 0.42, 'c');
      add(g, new THREE.SphereGeometry(r, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), B[dome] || B.gold, 0, y + h, 0);
      return h + r * 0.9; }
    if (md[0] === 'g') { const R = md[1], q = new THREE.Group(); q.position.set(0, y + R * 1.3, 0); g.add(q);
      add(q, new THREE.ExtrudeGeometry(gearShape(R * 1.35, 16, 0.86, true), { depth: R * 0.12, bevelEnabled: false, curveSegments: 3 }), B.cyan, 0, 0, -R * 0.12);
      add(q, new THREE.ExtrudeGeometry(gearShape(R, 10, 0.8), { depth: R * 0.24, bevelEnabled: false, curveSegments: 3 }), B.blue, 0, 0, 0);
      add(q, new THREE.CylinderGeometry(R * 0.3, R * 0.3, R * 0.3, 6), B.gold, 0, 0, R * 0.3, Math.PI / 2); return R * 2.6; }
    if (md[0] === 'd') { const [, r, col] = md; add(g, new THREE.SphereGeometry(r, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), B[col], 0, y, 0); return r; }
    return 0;
  };
  const stack = (t, x, base, u, yaw, mods) => { const g = at(TR, new THREE.Group(), x, base, u, yaw); t.add(g); let y = 0; for (const md of mods) y += module(g, y, md); return base + y; };
  const camYaw = (x, u) => Math.atan2(-0.62 - x, 226.7 - u);

  // ---- ROWS17: receding machine rows, light conduits, glints -----------------------------------------------------------------------------------
  if (ROWS17_ON) {
    const t = new THREE.Group(); let i = 1700;
    for (const [side, u0, u1, fx, , tiers] of R17.rows) {
      for (let u = u0 + R17.cell / 2; u < u1; u += R17.cell, i++) {
        for (const [ti, [h0, h1]] of tiers.entries()) {
          const k = i * 3 + ti, H = h1 - h0 - 0.06, W = R17.cell - 0.06, D = 0.55 + 0.25 * hash(k, 1);
          // a cabinet whose front faces the channel (yaw -90 deg on the left, +90 on the right): local +z is its front
          const g = at(TR, new THREE.Group(), fx + side * D / 2, h0, u, side > 0 ? -Math.PI / 2 : Math.PI / 2); t.add(g);
          const col = ROWCOLS[Math.floor(hash(k, 2) * ROWCOLS.length)], f = hash(k, 3);
          add(g, new RoundedBoxGeometry(W, H, D, 2, 0.08), B[col], 0, H / 2, 0);
          add(g, new THREE.BoxGeometry(W * 0.96, 0.06, 0.04), B.gold, 0, H - 0.05, D / 2 + 0.01);   // a gold band along the top of every front
          if (f < 0.5) door(g, H * 0.47, D / 2, Math.min(W, H) * 0.32, ['c', 'p', 'w'][Math.floor(hash(k, 4) * 3)]);
          else if (f < 0.7) { const q = new THREE.Group(); q.position.set(0, H * 0.5, D / 2 + 0.02); g.add(q); const R = Math.min(W, H) * 0.3;
            add(q, new THREE.ExtrudeGeometry(gearShape(R, 10, 0.8), { depth: 0.08, bevelEnabled: false, curveSegments: 3 }), B[col === 'blue' ? 'cyan' : 'blue'], 0, 0, 0);
            add(q, new THREE.CylinderGeometry(R * 0.32, R * 0.32, 0.12, 6), B.gold, 0, 0, 0.06, Math.PI / 2); }
          else if (f < 0.85) { for (let j = 0; j < 3; j++) add(g, new THREE.CircleGeometry(0.09, 10), [G.c, G.p, G.w][(j + Math.floor(hash(k, 5) * 3)) % 3], (j - 1) * W * 0.26, H * 0.55, D / 2 + 0.02); }   // a row of lamps
          else { add(g, new THREE.CylinderGeometry(0.11, 0.11, W * 0.9, 12), B.gold, 0, H * 0.5, D / 2 + 0.08, 0, 0).rotation.z = Math.PI / 2; }   // a pipe across the front
          if (hash(k, 6) < 0.35 && ti === tiers.length - 1) module(g, H, hash(k, 7) < 0.5 ? ['d', 0.3, ['pink', 'mint', 'cyan'][Math.floor(hash(k, 8) * 3)]] : ['t', 0.5, 0.22, ['lilac', 'cyan', 'pink'][Math.floor(hash(k, 9) * 3)], 'gold']);
        }
      }
    }
    // glowing light conduits along the rows (bright, unlit: they read as the master's light streaks converging on the far end)
    const glow = { cyan: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.9, 1.5, 1.8) }), gold: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 1.45, 0.8) }), pink: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 1.0, 1.5) }) };
    for (const [x, h, u0, u1, col, r] of R17.conduits) {
      const pts = []; for (let u = u0; u <= u1 + 1e-6; u += 0.5) pts.push(TR.map(x, h, u, new THREE.Vector3()));
      t.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 2, r, 6, false), glow[col]));
    }
    out.rows = bake(t, root, 'scene07_r17_rows'); out.parts.push('rows');
    // glints: small four-point sparkles over the machinery (one draw call; additive; their size falls off with distance)
    const Gl = R17.glints, pos = [], cl = [], tints = [[1, 1, 1], [1, 0.92, 0.7], [0.75, 0.95, 1], [1, 0.8, 0.95]], P = new THREE.Vector3();
    for (let n = 0, k = 0; n < Gl.n && k < Gl.n * 4; k++) {
      const u = Gl.u[0] + (Gl.u[1] - Gl.u[0]) * hash(k, Gl.seed), side = hash(k, Gl.seed + 1) < 0.5 ? 1 : -1, h = 1.9 + 5.6 * hash(k, Gl.seed + 2);
      const x = side * (1.55 + 2.6 * hash(k, Gl.seed + 3));
      if (side < 0 && h < 4.2) continue;   // never over the right lane's gameplay space or in front of the enemy's height
      TR.map(x, h, u, P); pos.push(P.x, P.y, P.z); const c = tints[Math.floor(hash(k, Gl.seed + 4) * 4)]; cl.push(...c); n++;
    }
    const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); gg.setAttribute('color', new THREE.Float32BufferAttribute(cl, 3));
    const pts = new THREE.Points(gg, new THREE.PointsMaterial({ size: 0.2, map: starTexture(), vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
    pts.name = 'scene07_r17_glints'; root.add(pts); out.glints = pts; out.glintCount = pos.length / 3;
  }

  // ---- FAR17: the far end wall covered with machine fronts, the jambs and the bridge ------------------------------------------------------------
  if (FAR17_ON) {
    const F = R17.far, t = new THREE.Group(), u = Ch.u1 - F.du, a = Ch.halfW, b = Ch.height - Ch.wallH; let i = 1800;
    for (let h = 0.25, row = 0; h < F.hTop; h += F.step[1], row++) {
      for (let x = -a + 0.5 + (row % 2) * F.step[0] / 2; x < a - 0.3; x += F.step[0], i++) {
        if (Math.abs(x) < F.open[0] + 0.45 && h < F.open[1] + 0.2) continue;   // the opening (and the jambs) stay free
        const top = h > Ch.wallH ? Ch.wallH + b * Math.sqrt(Math.max(0, 1 - (x / a) ** 2)) : 99; if (h + 0.9 > top) continue;   // inside the vault's arc
        const f = hash(i, 1), col = ROWCOLS[Math.floor(hash(i, 2) * ROWCOLS.length)], yaw = camYaw(x, u);
        if (f < 0.45) stack(t, x, h, u, yaw, [['w', 0.86, 0.9, col, ['c', 'p', 'w'][Math.floor(hash(i, 3) * 3)]]]);
        else if (f < 0.7) stack(t, x, h, u, yaw, [['t', 0.6, 0.3, col, ['gold', 'pink', 'mint', 'cyan'][Math.floor(hash(i, 4) * 4)]]]);
        else if (f < 0.85) stack(t, x, h - 0.1, u, yaw, [['g', 0.32]]);
        else { const g = at(TR, new THREE.Group(), x, h, u, yaw); t.add(g); add(g, new RoundedBoxGeometry(0.9, 0.85, 0.4, 2, 0.08), B[col], 0, 0.42, 0);
          for (let j = 0; j < 3; j++) add(g, new THREE.CylinderGeometry(0.07, 0.07, 0.95, 10), B.gold, (j - 1) * 0.26, 0.42, 0.24); }   // a pipe bank
      }
    }
    for (const [x, mods] of F.jambs) stack(t, x, 0.02, F.jambU, camYaw(x, F.jambU), mods);
    const Br = F.bridge, g = at(TR, new THREE.Group(), 0, Br.h, Br.u, Math.PI); t.add(g);
    add(g, new RoundedBoxGeometry(Br.half * 2, Br.thick, Br.depth, 2, 0.1), B.lilac, 0, Br.thick / 2, 0);
    for (const y of [0.04, Br.thick - 0.04]) add(g, new THREE.BoxGeometry(Br.half * 2 + 0.02, 0.07, Br.depth + 0.02), B.gold, 0, y, 0);
    for (let x = -Br.half + 0.6; x < Br.half - 0.3; x += 0.85) { add(g, new THREE.CircleGeometry(0.13, 12), [G.c, G.w, G.p][Math.round((x + 3) / 0.85) % 3], x, Br.thick / 2, Br.depth / 2 + 0.01); add(g, torus(0.15, 0.03), B.gold, x, Br.thick / 2, Br.depth / 2 + 0.02); }
    for (const x of [-1.4, 0, 1.4]) { add(g, new THREE.SphereGeometry(0.09, 10, 8), lamp, x, -0.12, 0.1); add(g, new THREE.CylinderGeometry(0.02, 0.02, 0.1, 6), B.gold, x, -0.04, 0.1); }
    add(g, new THREE.CylinderGeometry(0.12, 0.12, Br.half * 2, 14), B.cyan, 0, Br.thick + 0.12, -0.12).rotation.z = Math.PI / 2;   // a pipe along its top
    out.far = bake(t, root, 'scene07_r17_far'); out.parts.push('far');
  }
  const mid = TR.map(0, 2, 246, new THREE.Vector3());
  for (const k of ['rows', 'far']) if (out[k]) items.push({ holder: out[k], turn: null, spin: 0, pos: mid });
  if (out.glints) items.push({ holder: out.glints, turn: null, spin: 0, pos: mid });
  let tris = 0; root.traverse((o) => { if (o.isMesh && /^scene07_r17/.test(o.name)) tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3; });
  out.triangles = Math.round(tris);
  return out;
}

// FAR17 (the level tube beyond the far portal) and WATER17 (the stretch's water): Level 1's own shaders, patched at run time for scene07 only.
// Returns a per-frame update (the rings' suppression follows the camera's distance to the portal).
export function patchShaders17(scene, TR, Ch) {
  const rep = { wall: false, water: 0, hoops: 0 }, portal = TR.map(0, 1.5, Ch.u1, new THREE.Vector3()), dir = TR.map(0, 1.5, Ch.u1 + 1, new THREE.Vector3()).sub(portal).normalize();
  let wallMat = null; const waterMats = new Set();
  scene.traverse((o) => { if (o.name === 'l1Wall' && o.material && !wallMat) wallMat = o.material; if (o.name === 'l1Water' && o.material && o.material.uniforms && o.material.uniforms.uRider) waterMats.add(o.material); });
  const far = { value: new THREE.Vector4(Ch.u1 - 0.5, 1, 0, 0) };
  if (FAR17_ON && wallMat && wallMat.fragmentShader) {
    const a = 'ring = exp(-pow((rg - 0.5) / 0.07, 2.0))';
    if (wallMat.fragmentShader.split(a).length === 2) {
      wallMat.uniforms.uFar17 = far;
      wallMat.fragmentShader = wallMat.fragmentShader.replace(/void main\(\)\s*\{/, 'uniform vec4 uFar17;\nvoid main() {')
        .replace(a, a + ' * (1.0 - uFar17.y * step(uFar17.x, u))');
      wallMat.needsUpdate = true; rep.wall = true;
    }
  }
  if (WATER17_ON) {
    const Wt = R17.water, uW = { value: new THREE.Vector4(Wt.u[0], Wt.u[1], Wt.blend, 1) };
    const a1 = '  col *= mix(0.86 + 1.6 * clamp(vH, -0.05, 0.12), 1.0, smoothstep(9.0, 26.0, length(vW - uCam)));';
    for (const m of waterMats) {
      let s = m.fragmentShader; if (!s || !s.includes(a1) || !s.includes('vHalf')) continue;
      const foam = s.match(/  col = mix\(col, vec3\([^)]*\), white\);/); if (!foam) continue;
      s = s.replace(/void main\(\)\s*\{/, 'uniform vec4 uW17;\nvoid main() {')
        // the master's lighter azure: mid blue to sky blue with pale cyan currents (linear values), and the waves' light kept
        .replace(a1, a1 + `\n  float w17 = uW17.w * smoothstep(uW17.x, uW17.x + uW17.z, u) * (1.0 - smoothstep(uW17.y - uW17.z, uW17.y, u));
  vec3 az = mix(vec3(0.07, 0.25, 0.80), vec3(0.24, 0.55, 1.0), smoothstep(0.3, 0.75, n));
  az = mix(az, vec3(0.5, 0.82, 1.0), smoothstep(0.55, 0.85, n2) * 0.55);
  col = mix(col, az * (0.92 + 1.2 * clamp(vH, -0.05, 0.12)), w17 * ${R17.water.mix.toFixed(2)});`)
        // white crests along both banks (a ragged edge riding the current) and dense small sparkles
        .replace(foam[0], `  { float bank = smoothstep(vHalf - ${R17.water.crest[0].toFixed(2)}, vHalf - ${R17.water.crest[1].toFixed(2)}, abs(x) + 0.35 * (l1n(vec2(uf * 0.8, x * 1.5)) - 0.5));
    float spk = smoothstep(0.8, 0.88, l1n(vec2(x * 15.0, uf * 6.0 + t * 0.7))) * (1.0 - aaW);
    white = max(white, w17 * clamp(bank * (0.72 + 0.28 * l1n(vec2(u * 3.0 - t * 3.0, x * 7.0))) + spk * ${R17.water.spark.toFixed(2)}, 0.0, 1.0)); }\n` + foam[0]);
      m.fragmentShader = s; m.uniforms.uW17 = uW; m.needsUpdate = true; rep.water++;
    }
  }
  // the hoops beyond the far portal: collapsed (each instance scaled to nothing about its own centre) while the camera is in the stretch before
  // the portal; they grow back as it comes within 16..8 m (instanced draws only; every other use of these materials is unchanged)
  const hoopU = { value: new THREE.Vector4(portal.x, portal.y, portal.z, 0) }, hoopD = { value: dir.clone() }, seen = new Set();
  if (FAR17_ON) scene.traverse((o) => {
    if (o.name !== 'l1Hoops' || !o.isInstancedMesh || seen.has(o.material)) return; const m = o.material; seen.add(m);
    const prev = m.onBeforeCompile;
    m.onBeforeCompile = (sh, r) => { if (prev) prev(sh, r); sh.uniforms.uHoop17 = hoopU; sh.uniforms.uHoop17D = hoopD;
      sh.vertexShader = 'uniform vec4 uHoop17; uniform vec3 uHoop17D;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
#ifdef USE_INSTANCING
  { vec3 ip17 = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz; transformed *= 1.0 - uHoop17.w * step(${R17.hoops.beyond.toFixed(1)}, dot(ip17 - uHoop17.xyz, uHoop17D)); }
#endif`); };
    const key = m.customProgramCacheKey ? m.customProgramCacheKey.bind(m) : null;
    m.customProgramCacheKey = () => (key ? key() : '') + '|hoop17'; m.needsUpdate = true; rep.hoops++;
  });
  const F = R17.far.ringFade, V = new THREE.Vector3();
  // (only while the camera is in this stretch BEFORE the portal: past it, or far before the chamber, the tube keeps its rings and hoops)
  return { report: rep, update: (cam) => { const before = V.copy(cam).sub(portal).dot(dir) < 0 && portal.distanceTo(cam) < R17.hoops.reach;
    const k = before ? THREE.MathUtils.smoothstep(portal.distanceTo(cam), F[0], F[1]) : 0; far.value.y = k; hoopU.value.w = k; } };
}
