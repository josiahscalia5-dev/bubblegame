// scene07 pass 15 (8 November 2026, session f70c9bd1; the handoff's next step for "Avoid Enemies!", authority
// Design/ApprovedScreens/09_Avoid_Enemies.png): the UPPER 40 % of the screen. The original is wall-to-wall cream / gold / lavender
// machinery and arcades under a bright warm ceiling; pass 13b showed a saturated purple vault (measured: the original's upper area has
// ~50 more green in every region, i.e. warmer and paler). Passes 11-12 (machinery floating in the vault) and 14b (washers as "stickers")
// were rejected, so here everything is ATTACHED: a continuous band of machine cabinets, tanks and pipe stacks standing on the decks
// against both walls (on the right drums where they stand), a gold pipe running the whole length, cream-and-gold arcade ribs across the
// vault (a washer drum's ribs), and the vault itself lit a warm cream-lavender. Procedural three.js, merged per material (a handful of
// draw calls); no random numbers (a fixed hash). Superseded by pass 16 (the user's reconstruction kit arrived): only `,norecon16,wall15`.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const WALL15_ON = LIST.includes('wall15') && LIST.includes('norecon16');   // (opt-in only: superseded by pass 16, scene07_recon16.js, before the user saw it)
export const WALL15 = {
  u: [221, 253.4],               // the band's extent along the track (the chamber is u 218-254)
  // the band's BACK line, m from the centre line: not at the walls (4.6 m), which this camera never sees (the left housing and the
  // right drum stand in front of them; probed), but just behind the walkway's balustrade (2.32 m), where the original stacks its
  // machinery beside the housing and round the far end; [left, right]
  back: [3.05, 3.1],
  skipLeft: [232.6, 239.2],      // the left washer housing stands here (pass 13); the band starts behind it
  depth: [0.55, 0.85], height: [2.5, 3.9], width: [1.1, 1.6], maxTop: 4.55,   // maxTop: under the vault (4.96 m at 3 m from the centre)
  pipe: { h: 4.62, r: 0.09 },    // a gold pipe along the top of each band
  ribs: { every: 2.4, r: 0.13, inset: 0.18, foot: 3.25 },   // foot: the ribs come down the walls to this height
  facade: ['#dcc6f0', '#f4d6ea', '#ffc6dc'],   // the chamber facade's gradient (pass 13b: #b58ae8 / #e2a6f2 / #ff9fd2, a saturated purple-pink)
  vaultRGB: [1.25, 1.35, 1.05],   // the vault's vertex colour (it multiplies the facade's top colour): a warm cream-lavender, ~(243, 226, 245)
  gear: [-1, 239, 2.55, 3.95, 1.2, -1],   // the original's big blue gear high on the right (pass 13b: [-1, 237, 2.9, 3.0, 0.95])
};
const hash = (i, k) => { const s = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return s - Math.floor(s); };

export function buildWall15(root, TR, env, goldM, Ch, tubs, ledge, items) {
  const W = WALL15, Q = new THREE.Quaternion(), P = new THREE.Vector3(), N = new THREE.Vector3();
  const parts = { cream: [], lav: [], blue: [], pink: [], gold: [], glow: [], mint: [] };
  // lay a local geometry (x sideways, y up, z along the track) at track point (x, h, u); it follows the track's frame
  const put = (key, geo, x, h, u, rot) => {
    const g = geo.index ? geo.toNonIndexed() : geo.clone(); if (rot) g.applyMatrix4(rot);
    const p = g.attributes.position, n = g.attributes.normal; TR.quaternion(u, Q);
    for (let i = 0; i < p.count; i++) {
      TR.map(x + p.getX(i), h + p.getY(i), u + p.getZ(i), P); p.setXYZ(i, P.x, P.y, P.z);
      if (n) { N.set(n.getX(i), n.getY(i), n.getZ(i)).applyQuaternion(Q); n.setXYZ(i, N.x, N.y, N.z); }
    }
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(p.count * 2), 2));
    parts[key].push(g);
  };
  const faceX = new THREE.Matrix4().makeRotationY(Math.PI / 2), upright = new THREE.Matrix4();
  const baseAt = (s, u) => {   // the floor under a unit: the deck, the left ledge, or the top of a right-side drum where one stands
    let b = Ch.deck;
    if (s > 0 && ledge && u > ledge[0] && u < ledge[1]) b = ledge[3];
    if (s < 0) for (const [tu, inner, R, H] of tubs) if (Math.abs(u - tu) < R * 0.95 && inner < W.back[1]) b = Math.max(b, H - 0.15);
    return b;
  };
  // the cabinets, tanks and pipe stacks, edge to edge along both walls
  for (const s of [1, -1]) {
    let u = W.u[0], i = s > 0 ? 0 : 50;
    while (u < W.u[1]) {
      const w = W.width[0] + (W.width[1] - W.width[0]) * hash(i, 1), uc = u + w / 2; u += w; i++;
      if (s > 0 && uc > W.skipLeft[0] && uc < W.skipLeft[1]) continue;
      const d = W.depth[0] + (W.depth[1] - W.depth[0]) * hash(i, 2), H = W.height[0] + (W.height[1] - W.height[0]) * hash(i, 3);
      const back = W.back[s > 0 ? 0 : 1], xc = s * (back - d / 2), base = baseAt(s, uc), hTop = Math.min(H, W.maxTop - base);
      const xf = xc - s * d / 2;   // the unit's front (toward the water)
      const type = Math.floor(hash(i, 4) * 3);
      if (type === 0) {   // a cream cabinet: rounded box, a gold top band, a glowing round window with a gold ring
        put('cream', new RoundedBoxGeometry(d, hTop, w * 0.94, 2, 0.12), xc, base + hTop / 2, uc);
        put('gold', new THREE.BoxGeometry(d * 1.02, 0.1, w * 0.96), xc, base + hTop - 0.05, uc);
        const r = Math.min(w, hTop) * 0.26, wy = base + hTop * 0.62;
        put('gold', new THREE.TorusGeometry(r, r * 0.16, 8, 28), xf - s * 0.03, wy, uc, faceX);
        put('glow', new THREE.CircleGeometry(r * 0.88, 24), xf - s * 0.02, wy, uc, new THREE.Matrix4().makeRotationY(s > 0 ? -Math.PI / 2 : Math.PI / 2));
        put('lav', new RoundedBoxGeometry(d * 0.5, 0.42, w * 0.6, 2, 0.08), xc - s * d * 0.2, base + hTop + 0.21, uc);   // a lavender cap block
      } else if (type === 1) {   // a lavender tank: an upright cylinder with gold bands and a pink dome
        const r = Math.min(d, w) * 0.5, tx = s * (back - r - 0.05);
        put('lav', new THREE.CylinderGeometry(r, r * 1.04, hTop, 22), tx, base + hTop / 2, uc, upright);
        for (const f of [0.18, 0.55, 0.9]) put('gold', new THREE.TorusGeometry(r * 1.03, 0.045, 6, 26), tx, base + hTop * f, uc, new THREE.Matrix4().makeRotationX(Math.PI / 2));
        put(hash(i, 5) > 0.5 ? 'pink' : 'mint', new THREE.SphereGeometry(r * 0.98, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), tx, base + hTop, uc);
        put('glow', new THREE.SphereGeometry(0.09, 10, 8), tx, base + hTop + r * 0.98 + 0.06, uc);
      } else {   // a pale-blue pipe stack: three uprights with gold collars on a cream plinth, a small gear
        put('cream', new RoundedBoxGeometry(d, 0.55, w * 0.94, 2, 0.1), xc, base + 0.275, uc);
        for (let k = 0; k < 3; k++) {
          const pz = uc + (k - 1) * w * 0.28, ph = hTop - 0.2 * k;
          put('blue', new THREE.CylinderGeometry(0.13, 0.13, ph - 0.55, 12), xc, base + 0.55 + (ph - 0.55) / 2, pz, upright);
          put('gold', new THREE.CylinderGeometry(0.17, 0.17, 0.12, 12), xc, base + ph - 0.1, pz, upright);
          put('gold', new THREE.CylinderGeometry(0.17, 0.17, 0.12, 12), xc, base + 0.62, pz, upright);
        }
        put('blue', new THREE.TorusGeometry(Math.min(w, 1.2) * 0.3, 0.07, 6, 10), xf - s * 0.05, base + hTop * 0.55, uc, faceX);
      }
    }
    // one gold pipe the whole length, and warm bulbs on it (the original's gold glows)
    const u0 = s > 0 ? W.skipLeft[1] : W.u[0], pts = []; for (let uu = u0; uu <= W.u[1] + 1e-6; uu += 0.5) pts.push(new THREE.Vector3(0, 0, uu));
    const pipe = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 2, W.pipe.r, 8, false);
    const g = pipe.toNonIndexed(), p = g.attributes.position;
    for (let k = 0; k < p.count; k++) { TR.map(s * (W.back[s > 0 ? 0 : 1] - 0.15) + p.getX(k), W.pipe.h + p.getY(k), p.getZ(k), P); p.setXYZ(k, P.x, P.y, P.z); }
    g.computeVertexNormals(); parts.gold.push(g);
    for (let uu = u0 + 0.7; uu < W.u[1]; uu += 1.6) put('glow', new THREE.SphereGeometry(0.075, 8, 6), s * (W.back[s > 0 ? 0 : 1] - 0.15), W.pipe.h - 0.16, uu);
  }
  // the arcade ribs across the vault: cream bands with a gold edge, following the chamber's own cross-section
  const sec = []; for (let j = 0; j <= 24; j++) { const a = Math.PI * j / 24; sec.push([Ch.halfW * Math.cos(a), Ch.wallH + (Ch.height - Ch.wallH) * Math.sin(a)]); }
  for (let u = W.u[0]; u <= W.u[1]; u += W.ribs.every) {
    const kx = (Ch.halfW - W.ribs.inset) / Ch.halfW, ky = (Ch.height - Ch.wallH - W.ribs.inset) / (Ch.height - Ch.wallH);
    const pts = sec.map(([x, h]) => new THREE.Vector3(x * kx, Ch.deck + Ch.wallH + (h - Ch.wallH) * ky, u));
    pts.unshift(new THREE.Vector3(pts[0].x, Ch.deck + W.ribs.foot, u)); pts.push(new THREE.Vector3(pts[pts.length - 1].x, Ch.deck + W.ribs.foot, u));
    for (const [key, r, du] of [['cream', W.ribs.r, 0], ['gold', W.ribs.r * 0.45, -W.ribs.r * 0.95]]) {
      const tg = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((q) => q.clone().setZ(u + du))), 48, r, 8, false).toNonIndexed(), p = tg.attributes.position;
      for (let k = 0; k < p.count; k++) { TR.map(p.getX(k), p.getY(k), p.getZ(k), P); p.setXYZ(k, P.x, P.y, P.z); }
      tg.computeVertexNormals(); parts[key].push(tg);
    }
  }
  const std = (color, emissive, ei, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.42, metalness: 0.18, envMap: env || null, envMapIntensity: 0.9, emissive, emissiveIntensity: ei, ...extra });
  const mats = {
    cream: std(0xf7e4c4, 0x8a6e52, 0.55), lav: std(0xcdb6f6, 0x6a52b0, 0.42), blue: std(0x8db6ff, 0x2f55b8, 0.45, { metalness: 0.4 }),
    pink: std(0xff9fd0, 0xff4fa8, 0.32), mint: std(0x9fe0b4, 0x3a8a5a, 0.35), gold: goldM,
    glow: new THREE.MeshBasicMaterial({ color: new THREE.Color(1.55, 1.3, 0.85), side: THREE.DoubleSide }),
  };
  const group = new THREE.Group(); group.name = 'scene07_wall15';
  for (const [k, list] of Object.entries(parts)) {
    if (!list.length) continue;
    const m = new THREE.Mesh(mergeGeometries(list, false), mats[k]); m.name = 'scene07_wall15_' + k; group.add(m);
  }
  root.add(group);
  const mid = TR.map(0, 2, (W.u[0] + W.u[1]) / 2, new THREE.Vector3());
  items.push({ holder: group, turn: null, spin: 0, pos: mid });
  return { meshes: group.children.length, triangles: group.children.reduce((a, m) => a + m.geometry.attributes.position.count / 3, 0) };
}
