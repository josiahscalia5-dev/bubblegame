// girl13 (10 November 2026, session b57cc1e7): the user's three approved girl references
// (Design/ReferencePacks/2026-11-10_Girl_Opening_Approved_References_from_user/) for the girl-and-laundry-basket opening. A CANDIDATE behind the
// switch `girl13` (with six + six2). Without it the opening is exactly the previous build.
//   - the face layer: a thin grid that hugs her real face surface (raycast onto her skinned mesh in her rest pose), parented to her head bone so it
//     follows every head turn, with its own painted texture over her Tripo atlas: the approved eyes (white, a large amber-brown iris, two bold
//     highlights, thick lashes with outer flicks), the open laugh (upper teeth, tongue), freckles, cheek blush, a button nose, brows.
//   - her atlas graded toward the references (art director's measurements, session b57cc1e7): warm peach skin, chocolate hair, candy-pink (less
//     magenta) hoodie and bow, a softer lavender backpack.
//   - Scene 1's head held up (the references' upright head: her eyes at 55 % of the head, not 74 %) and the foreground towel stack removed so
//     her kneeling legs show.
// Looks only: private generators only (never the game's seeded Math.random), gameplay untouched.
import * as THREE from 'three';
import { ROOM2 } from './opening_six2_room.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const G13_ON = LIST.includes('six') && LIST.includes('six2') && LIST.includes('girl13');

// the numbers of the candidate (window.__bwGirl13.G13 in the browser; window.__bwGirl13Init merges into it before the build)
export const G13 = {
  // the face layer's box in her model's own coordinates (x across, y up, z toward her front), the grid and the lift off the surface
  face: { x0: -0.16, x1: 0.16, y0: 0.6, y1: 0.92, n: 56, lift: 0.0016, maxStep: 0.035, debug: false, off: false,
    skin: '#f6a175',   // the graded atlas skin (below) as an albedo: the layer's skin patches use it so they melt into the atlas
    // eyes: centre (model x, y), half width, half height; iris radius, its offset (where she looks); the outer corner is away from x = 0
    // (measured on her painted face through the debug grid: her face is rolled ~10.5 deg in her model, the eyes at (-0.078, 0.756) and (0.034, 0.777))
    roll: 0.185, eyes: [{ x: -0.078, y: 0.756 }, { x: 0.034, y: 0.777 }], ew: 0.032, eh: 0.029, ir: 0.019, look: [0.004, -0.002],
    mouth: { x: -0.03, y: 0.708, w: 0.041, top: 0.008, open: 0.034 },   // half width; the top edge's rise at the corners; the drop at the centre
    nose: { x: -0.02, y: 0.736 }, blush: { x: 0.07, y: 0.722, r: 0.027, a: 0.46 }, brow: null, lower: false,
    freckles: 14,
  },
  tex: { on: true, skin: [3, 0.88, 1.05], hair: [3, 0.92, 0.9], pink: [7, 0.76, 1.05], purple: [6, 0.82, 1.06] },   // hue shift (deg), saturation x, value x
  pose: { headUp: 0.36, neckUp: 0.1 },
  // the bow (art director: 1.5x too wide in the frame, flat on the crown; the references' bow is smaller, further back at the ponytail's base,
  // tilted): her pink texels above yCut on the head are scaled about their centre, moved (model units) and tilted (rad about her x axis)
  // ringlets: springy curls on her head bone, anchored on her own hair surface (the ponytail behind, and a few framing her face)
  hair: { on: true, tail: 34, face: 6, coil: 0.022, tube: 0.0085, len: [0.1, 0.24], turns: [2.6, 4.2], cols: ['#3b1407', '#6e3015', '#a35a2a'] },
  bow: { on: false, yCut: 0.97, scale: 0.78, move: [0, -0.01, -0.06], tilt: 0.3, roll: -0.2 },   // (rad) Scene 1's head lift, easing out by s 0.9
  fgTowels: false,   // the lower-left towel stack of Scene 1
};


const merge = (a, b) => { for (const k in b) { if (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k] && typeof a[k] === 'object') merge(a[k], b[k]); else a[k] = b[k]; } return a; };
const api = { G13, ready: false };
if (G13_ON && typeof window !== 'undefined') { if (window.__bwGirl13Init) merge(G13, window.__bwGirl13Init); window.__bwGirl13 = api; }
if (G13_ON && !G13.fgTowels) ROOM2.fgTowels = [];   // (the room is built after this module is evaluated)

// the girl's skinned positions in her current pose, as a plain triangle soup limited to a box in her root's coordinates (fast raycasts)
function bakeRegion(skinned, root, box) {
  const pos = skinned.geometry.attributes.position, uvA = skinned.geometry.attributes.uv, idx = skinned.geometry.index, v = new THREE.Vector3();
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const W = new Float32Array(pos.count * 3), inBox = new Uint8Array(pos.count);
  skinned.updateMatrixWorld(true); skinned.skeleton.update();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i); skinned.applyBoneTransform(i, v); v.applyMatrix4(skinned.matrixWorld);
    W[i * 3] = v.x; W[i * 3 + 1] = v.y; W[i * 3 + 2] = v.z;
    v.applyMatrix4(inv); inBox[i] = v.x > box.x0 - 0.05 && v.x < box.x1 + 0.05 && v.y > box.y0 - 0.05 && v.y < box.y1 + 0.05 && v.z > 0.05 ? 1 : 0;
  }
  const tri = [], tuv = [];
  const n = idx ? idx.count : pos.count;
  for (let t = 0; t < n; t += 3) {
    const a = idx ? idx.getX(t) : t, b = idx ? idx.getX(t + 1) : t + 1, c = idx ? idx.getX(t + 2) : t + 2;
    if (inBox[a] + inBox[b] + inBox[c] < 2) continue;
    for (const q of [a, b, c]) { tri.push(W[q * 3], W[q * 3 + 1], W[q * 3 + 2]); tuv.push(uvA ? uvA.getX(q) : 0, uvA ? uvA.getY(q) : 0); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(tri, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(tuv, 2)); g.computeVertexNormals();
  return new THREE.Mesh(g, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }));
}

// the face layer's painting, in the box's coordinates (u across, v up); debug draws a labelled grid in model units
function paintFace(cv, F) {
  const c = cv.getContext('2d'), W = cv.width, H = cv.height;
  c.clearRect(0, 0, W, H);
  const X = (x) => (x - F.x0) / (F.x1 - F.x0) * W, Y = (y) => (1 - (y - F.y0) / (F.y1 - F.y0)) * H;
  if (F.debug) {
    c.lineWidth = 1;
    for (let x = Math.ceil(F.x0 * 100) / 100; x <= F.x1 + 1e-9; x += 0.01) { const k = Math.round(x * 100); c.strokeStyle = k % 5 === 0 ? 'rgba(0,90,255,0.95)' : 'rgba(0,200,255,0.55)'; c.lineWidth = k % 5 === 0 ? 3 : 1; c.beginPath(); c.moveTo(X(x), 0); c.lineTo(X(x), H); c.stroke(); }
    for (let y = Math.ceil(F.y0 * 100) / 100; y <= F.y1 + 1e-9; y += 0.01) { const k = Math.round(y * 100); c.strokeStyle = k % 5 === 0 ? 'rgba(0,160,0,0.95)' : 'rgba(80,255,80,0.55)'; c.lineWidth = k % 5 === 0 ? 3 : 1; c.beginPath(); c.moveTo(0, Y(y)); c.lineTo(W, Y(y)); c.stroke(); }
    c.font = 'bold 26px sans-serif';
    for (let x = Math.ceil(F.x0 * 20) / 20; x <= F.x1 + 1e-9; x += 0.05) for (let y = Math.ceil(F.y0 * 20) / 20; y <= F.y1 + 1e-9; y += 0.05) { c.fillStyle = '#fff'; c.fillText(`${Math.round(x * 100)},${Math.round(y * 100)}`, X(x) + 3, Y(y) - 4); }
    return;
  }
  if (F.off) return;
  const k = W / (F.x1 - F.x0);   // canvas px per model unit
  const P = (x, y) => [X(x), Y(y)];
  const clear = (col) => { const t = document.createElement('canvas').getContext('2d'); t.fillStyle = col; t.fillRect(0, 0, 1, 1); const d = t.getImageData(0, 0, 1, 1).data; return `rgba(${d[0]},${d[1]},${d[2]},0)`; };
  const soft = (x, y, rx, ry, col, a = 1, hard = 0.55) => {   // a feathered ellipse (fading to the same colour, never toward black)
    c.save(); c.translate(X(x), Y(y)); c.scale(1, ry / rx); const g = c.createRadialGradient(0, 0, 0, 0, 0, rx * k);
    g.addColorStop(0, col); g.addColorStop(hard, col); g.addColorStop(1, clear(col)); c.globalAlpha = a; c.fillStyle = g;
    c.beginPath(); c.arc(0, 0, rx * k, 0, 6.2832); c.fill(); c.restore(); };
  // skin patches over the painted mouth and round the painted eyes (the new features are larger and cover the rest)
  const M = F.mouth;
  soft(M.x, M.y - 0.004, M.w * 1.75, 0.032, F.skin, 1, 0.7);
  for (const e of F.eyes) soft(e.x, e.y, F.ew * 1.5, F.eh * 1.5, F.skin, 1, 0.66);
  // blush and freckles
  const fcx = (F.eyes[0].x + F.eyes[1].x) / 2, fcy = (F.eyes[0].y + F.eyes[1].y) / 2, ca = Math.cos(F.roll || 0), sa = Math.sin(F.roll || 0);
  const rot = (dx, dy) => [fcx + dx * ca - dy * sa, fcy + dx * sa + dy * ca];   // (face-relative offsets, rolled with her face)
  for (const sx of [-1, 1]) {
    const [bx, by] = rot(F.blush.x * sx, F.blush.y - 0.767); c.save(); c.translate(X(bx), Y(by)); c.scale(1, 0.62); const g = c.createRadialGradient(0, 0, 0, 0, 0, F.blush.r * k);
    g.addColorStop(0, `rgba(255,96,120,${F.blush.a})`); g.addColorStop(0.55, `rgba(255,110,130,${F.blush.a * 0.55})`); g.addColorStop(1, 'rgba(255,120,140,0)'); c.fillStyle = g; c.beginPath(); c.arc(0, 0, F.blush.r * k, 0, 6.2832); c.fill(); c.restore();
  }
  let sd = 0x5eed13; const r = () => { sd = (sd * 1664525 + 1013904223) >>> 0; return sd / 4294967296; };   // (private)
  for (let i = 0; i < F.freckles; i++) {
    const side = i % 2 ? 1 : -1, dx = side * (0.012 + r() * 0.06), [fx, fy] = rot(dx, F.blush.y - 0.767 + 0.004 + (r() - 0.5) * 0.02 + Math.abs(dx) * 0.08);
    c.fillStyle = `rgba(176,84,48,${0.45 + r() * 0.25})`; c.beginPath(); c.ellipse(X(fx), Y(fy), (0.0013 + r() * 0.0009) * k, (0.0011 + r() * 0.0007) * k, r() * 3, 0, 6.2832); c.fill();
  }
  // the button nose: a soft shadow under it and a pink tip
  soft(F.nose.x, F.nose.y - 0.006, 0.011, 0.004, 'rgba(196,92,62,0.5)', 1, 0.2);
  soft(F.nose.x, F.nose.y, 0.008, 0.006, 'rgba(255,128,120,0.55)', 1, 0.15);
  // brows: soft brown arcs (off: her own painted brows stay)
  if (F.brow) for (const e of F.eyes) {
    const sx = Math.sign(e.x), bx = e.x + sx * 0.004, by = F.brow.y, w = F.brow.w;
    c.strokeStyle = 'rgba(88,40,20,0.9)'; c.lineCap = 'round'; c.lineWidth = F.brow.t * k;
    c.beginPath(); c.moveTo(...P(bx - sx * w * 0.95, by - 0.004)); c.quadraticCurveTo(...P(bx - sx * w * 0.1, by + 0.007), ...P(bx + sx * w, by - 0.002)); c.stroke();
  }
  // eyes
  for (const e of F.eyes) {
    const sx = Math.sign(e.x) || 1, ex = X(e.x), ey = Y(e.y), w = F.ew * k, h = F.eh * k;
    c.save(); c.translate(ex, ey); c.rotate(-(F.roll || 0)); c.translate(-ex, -ey);   // (her face's roll in her model)
    const shape = () => { c.beginPath(); c.moveTo(ex - w, ey + h * 0.15); c.bezierCurveTo(ex - w * 0.9, ey - h * 1.25, ex + w * 0.9, ey - h * 1.25, ex + w, ey + h * 0.05);
      c.bezierCurveTo(ex + w * 0.85, ey + h * 1.12, ex - w * 0.85, ey + h * 1.12, ex - w, ey + h * 0.15); c.closePath(); };
    c.save(); shape(); c.fillStyle = '#fffaf8'; c.fill(); c.clip();
    const lid = c.createLinearGradient(0, ey - h, 0, ey); lid.addColorStop(0, 'rgba(150,110,140,0.55)'); lid.addColorStop(1, 'rgba(150,110,140,0)'); c.fillStyle = lid; c.fillRect(ex - w, ey - h * 1.3, w * 2, h * 1.3);
    const ix = ex + F.look[0] * k * sx * 0 + F.look[0] * k, iy = ey - F.look[1] * k, ir = F.ir * k;
    const ig = c.createRadialGradient(ix, iy + ir * 0.25, ir * 0.15, ix, iy, ir);
    ig.addColorStop(0, '#d08a3a'); ig.addColorStop(0.45, '#9a5520'); ig.addColorStop(0.8, '#5a2a0e'); ig.addColorStop(1, '#2a1006');
    c.fillStyle = ig; c.beginPath(); c.ellipse(ix, iy, ir, ir * 1.08, 0, 0, 6.2832); c.fill();
    c.fillStyle = '#120604'; c.beginPath(); c.ellipse(ix, iy, ir * 0.52, ir * 0.58, 0, 0, 6.2832); c.fill();
    const top = c.createLinearGradient(0, iy - ir, 0, iy); top.addColorStop(0, 'rgba(20,6,2,0.55)'); top.addColorStop(1, 'rgba(20,6,2,0)'); c.fillStyle = top; c.beginPath(); c.ellipse(ix, iy, ir, ir * 1.08, 0, 0, 6.2832); c.fill();
    c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(ix - ir * 0.38, iy - ir * 0.42, ir * 0.36, ir * 0.3, -0.5, 0, 6.2832); c.fill();
    c.beginPath(); c.arc(ix + ir * 0.42, iy + ir * 0.38, ir * 0.15, 0, 6.2832); c.fill();
    c.restore();
    // the upper lash line (thick, dark) with flicks at the outer corner, a fine lower line
    c.save(); c.strokeStyle = '#1c0a06'; c.fillStyle = '#1c0a06'; c.lineCap = 'round'; c.lineJoin = 'round';
    c.lineWidth = h * 0.24; c.beginPath(); c.moveTo(ex - w * 1.02, ey + h * 0.1); c.bezierCurveTo(ex - w * 0.9, ey - h * 1.28, ex + w * 0.9, ey - h * 1.28, ex + w * 1.04, ey + h * 0.0); c.stroke();
    const ox = ex + sx * w, oy = ey - h * 0.05;
    for (let f = 0; f < 3; f++) { c.lineWidth = h * (0.16 - f * 0.03); c.beginPath(); c.moveTo(ox - sx * w * (0.1 + f * 0.22), oy - h * (0.35 + f * 0.25)); c.quadraticCurveTo(ox + sx * w * 0.2, oy - h * (0.6 + f * 0.3), ox + sx * w * (0.32 + f * 0.05), oy - h * (0.65 + f * 0.38)); c.stroke(); }
    if (F.lower) { c.lineWidth = h * 0.07; c.strokeStyle = 'rgba(60,24,14,0.7)'; c.beginPath(); c.moveTo(ex - w * 0.7, ey + h * 0.9); c.quadraticCurveTo(ex, ey + h * 1.12, ex + w * 0.75, ey + h * 0.85); c.stroke(); }
    c.restore();
    c.restore();
  }
  // the open laugh: a D-shaped mouth, the upper teeth along its top, the tongue at the bottom, a soft lip edge
  {
    const mx = X(M.x), my = Y(M.y), w = M.w * k, rise = M.top * k, open = M.open * k;
    c.save(); c.translate(mx, my); c.rotate(-(F.roll || 0)); c.translate(-mx, -my);
    const shape = () => { c.beginPath(); c.moveTo(mx - w, my - rise); c.quadraticCurveTo(mx, my + rise * 0.35, mx + w, my - rise);
      c.bezierCurveTo(mx + w * 0.82, my + open * 0.95, mx - w * 0.82, my + open * 0.95, mx - w, my - rise); c.closePath(); };
    c.save(); shape(); c.fillStyle = '#5a1222'; c.fill(); c.clip();
    c.fillStyle = '#ff7c8e'; c.beginPath(); c.ellipse(mx + w * 0.05, my + open * 0.78, w * 0.62, open * 0.42, 0, 0, 6.2832); c.fill();
    c.fillStyle = '#ffffff'; c.beginPath(); c.moveTo(mx - w, my - rise); c.quadraticCurveTo(mx, my + rise * 0.35, mx + w, my - rise); c.lineTo(mx + w, my - rise + open * 0.2);
    c.quadraticCurveTo(mx, my + rise * 0.35 + open * 0.24, mx - w, my - rise + open * 0.2); c.closePath(); c.fill();
    c.restore();
    c.save(); shape(); c.strokeStyle = 'rgba(150,50,40,0.75)'; c.lineWidth = 0.0018 * k; c.stroke(); c.restore();
    for (const sx of [-1, 1]) { c.strokeStyle = 'rgba(190,80,60,0.45)'; c.lineWidth = 0.0016 * k; c.lineCap = 'round'; c.beginPath(); c.moveTo(mx + sx * w * 1.02, my - rise * 1.1); c.quadraticCurveTo(mx + sx * w * 1.18, my - rise * 0.6, mx + sx * w * 1.12, my - rise * 0.05); c.stroke(); }
    c.restore();
  }
  if (F.mask) { c.save(); c.globalCompositeOperation = 'destination-in'; c.imageSmoothingEnabled = true; c.drawImage(F.mask, 0, 0, W, H); c.restore(); }   // (hair strands in front of her face stay as they are)
}

// her atlas graded toward the references (per texel, by colour class; returns a new texture in the same UV layout)
function gradeAtlas(map, T) {
  const img = map.image, W = img.width, H = img.height, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const c = cv.getContext('2d'); c.drawImage(img, 0, 0); const d = c.getImageData(0, 0, W, H), p = d.data;
  for (let i = 0; i < p.length; i += 4) {
    const r = p[i] / 255, g = p[i + 1] / 255, b = p[i + 2] / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), dd = mx - mn;
    if (dd < 1e-4) continue;
    let h = mx === r ? ((g - b) / dd) % 6 : mx === g ? (b - r) / dd + 2 : (r - g) / dd + 4; h *= 60; if (h < 0) h += 360;
    let s = dd / mx, v = mx, f = null;
    if (h >= 5 && h <= 38 && s > 0.28 && s < 0.82 && v > 0.6) f = T.skin;
    else if ((h <= 42 || h >= 345) && s > 0.38 && v <= 0.6 && v > 0.05) f = T.hair;
    else if ((h >= 300 || h < 5) && s > 0.35 && v > 0.42) f = T.pink;
    else if (h >= 240 && h < 300 && s > 0.3) f = T.purple;
    if (!f) continue;
    h = (h + f[0] + 360) % 360; s = Math.min(1, s * f[1]); v = Math.min(1, v * f[2]);
    const C = v * s, X2 = C * (1 - Math.abs(((h / 60) % 2) - 1)), m = v - C, sx = Math.floor(h / 60) % 6;
    const [rr, gg, bb] = [[C, X2, 0], [X2, C, 0], [0, C, X2], [0, X2, C], [X2, 0, C], [C, 0, X2]][sx];
    p[i] = (rr + m) * 255; p[i + 1] = (gg + m) * 255; p[i + 2] = (bb + m) * 255;
  }
  c.putImageData(d, 0, 0);
  const t = new THREE.CanvasTexture(cv); t.flipY = map.flipY; t.colorSpace = map.colorSpace; t.wrapS = map.wrapS; t.wrapT = map.wrapT; t.anisotropy = map.anisotropy; t.channel = map.channel;
  return t;
}

// Scene 1's upright head (called after the opening's own head turns; k eases it out as the story starts)
export function poseGirl13(B, lat, s, rotateBoneWorld) {
  if (!G13_ON) return;
  const k = 1 - Math.min(1, Math.max(0, (s - 0.2) / 0.7));
  if (k <= 0) return;
  rotateBoneWorld(B.neck, lat, -G13.pose.neckUp * k);
  rotateBoneWorld(B.head, lat, -G13.pose.headUp * k);
}

// the bow: select her pink vertices high on her head (in her root's coordinates, rest pose) and scale / move / tilt them in place
function reshapeBow(skinned, root, texel, Bw) {
  const g = skinned.geometry, pos = g.attributes.position, uv = g.attributes.uv, v = new THREE.Vector3(), u = new THREE.Vector2();
  const M = new THREE.Matrix4().copy(root.matrixWorld).invert().multiply(skinned.matrixWorld), Mi = M.clone().invert();
  const sel = [], pts = [];
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).applyMatrix4(M); if (v.y < Bw.yCut) continue;
    const t = texel(u.fromBufferAttribute(uv, i)); if (!t) continue;
    const mx = Math.max(...t), mn = Math.min(...t), sat = (mx - mn) / Math.max(1, mx); const pink = t[0] >= t[1] && t[2] > t[1] && sat > 0.3 && mx > 120;
    if (pink) { sel.push(i); pts.push(v.clone()); }
  }
  if (!sel.length) return { n: 0 };
  const box = new THREE.Box3().setFromPoints(pts), c = box.getCenter(new THREE.Vector3());
  const stats = { n: sel.length, c: c.toArray().map((x) => +x.toFixed(3)), min: box.min.toArray().map((x) => +x.toFixed(3)), max: box.max.toArray().map((x) => +x.toFixed(3)) };
  if (!Bw.on) return stats;
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(Bw.tilt, 0, Bw.roll)), mv = new THREE.Vector3(...Bw.move);
  sel.forEach((i, k) => { const p = pts[k].clone().sub(c).multiplyScalar(Bw.scale).applyQuaternion(q).add(c).add(mv).applyMatrix4(Mi); pos.setXYZ(i, p.x, p.y, p.z); });
  pos.needsUpdate = true; g.computeBoundingSphere();
  return stats;
}

// one ringlet: a tapered tube round a helix hanging from a (root-space) anchor along dir; vertex colours dark at the root, caramel toward the tip
function ringlet(A, dir, L, turns, coil, tube, phase, cols) {
  const d = dir.clone().normalize(), e1 = new THREE.Vector3().crossVectors(d, Math.abs(d.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0)).normalize(), e2 = new THREE.Vector3().crossVectors(d, e1);
  const pts = [];
  for (let i = 0; i <= 80; i++) { const t = i / 80, th = phase + t * turns * 6.2832, rc = coil * (0.55 + 0.45 * Math.min(1, t * 4)) * (1 + 0.15 * t);
    pts.push(A.clone().addScaledVector(d, t * L).addScaledVector(e1, Math.cos(th) * rc).addScaledVector(e2, Math.sin(th) * rc)); }
  const curve = new THREE.CatmullRomCurve3(pts), seg = 120, rad = 7;
  const g = new THREE.TubeGeometry(curve, seg, tube, rad, false);
  // taper and colour along the tube
  const pos = g.attributes.position, nor = g.attributes.normal, col = new Float32Array(pos.count * 3), C = cols.map((h) => new THREE.Color(h)), tmp = new THREE.Color(), p = new THREE.Vector3(), q = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    const t = Math.floor(i / (rad + 1)) / seg, c = curve.getPointAt(Math.min(1, t)), w = 1 - 0.65 * t * t;
    p.fromBufferAttribute(pos, i); q.copy(p).sub(c).multiplyScalar(w); pos.setXYZ(i, c.x + q.x, c.y + q.y, c.z + q.z);
    const hi = Math.max(0, nor.getY(i)) * 0.5 + 0.5 * Math.max(0, -nor.getZ(i));
    tmp.copy(C[0]).lerp(C[1], Math.min(1, t * 2.2)).lerp(C[2], 0.35 * hi * Math.min(1, t * 1.5)); col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
  return g;
}

// the ringlets: anchors on her hair (pink-free brown texels) behind her head (the ponytail) and at her temples (the face-framing curls)
function buildHair(skinned, root, B, texel, Hh, mat) {
  const g = skinned.geometry, pos = g.attributes.position, uv = g.attributes.uv, nrm = g.attributes.normal, v = new THREE.Vector3(), n = new THREE.Vector3(), u = new THREE.Vector2();
  const M = new THREE.Matrix4().copy(root.matrixWorld).invert().multiply(skinned.matrixWorld), Nm = new THREE.Matrix3().getNormalMatrix(M);
  const back = [], temple = [];
  for (let i = 0; i < pos.count; i += 3) {
    v.fromBufferAttribute(pos, i).applyMatrix4(M);
    const t = texel(u.fromBufferAttribute(uv, i)); if (!t) continue; const mx = Math.max(...t), mn = Math.min(...t);
    if (!(mx < 170 && (mx - mn) / Math.max(1, mx) > 0.4 && t[0] > t[2])) continue;   // brown hair
    n.fromBufferAttribute(nrm, i).applyMatrix3(Nm).normalize();
    if (v.z < -0.06 && v.y > 0.62 && v.y < 1.02 && n.z < -0.2 && n.y < 0.4) back.push([v.clone(), n.clone()]);
    else if (Math.abs(v.x) > 0.11 && Math.abs(v.x) < 0.2 && v.y > 0.7 && v.y < 0.84 && v.z > -0.02 && v.z < 0.1 && n.y < 0.2) temple.push([v.clone(), n.clone()]);
  }
  let sd = 0x4a17; const r = () => { sd = (sd * 1664525 + 1013904223) >>> 0; return sd / 4294967296; };   // (private)
  const grp = new THREE.Group(); grp.name = 'girl13Ringlets';
  const add = (list, count, scale, down) => {
    for (let k = 0; k < count && list.length; k++) {
      const [A, nn] = list[Math.floor(r() * list.length)];
      const dir = new THREE.Vector3(0, -1, 0).multiplyScalar(down).addScaledVector(nn, 1 - down * 0.6).add(new THREE.Vector3((r() - 0.5) * 0.4, 0, (r() - 0.5) * 0.3));
      const L = (Hh.len[0] + r() * (Hh.len[1] - Hh.len[0])) * scale, turns = Hh.turns[0] + r() * (Hh.turns[1] - Hh.turns[0]);
      const geo = ringlet(A.clone().addScaledVector(nn, -0.004), dir, L, turns * (0.7 + 0.3 * scale), Hh.coil * (0.8 + r() * 0.45) * (0.6 + 0.4 * scale), Hh.tube * (0.85 + r() * 0.3) * (0.7 + 0.3 * scale), r() * 6.28, Hh.cols);
      geo.applyMatrix4(root.matrixWorld);   // root space -> world (rest pose)
      const m = new THREE.Mesh(geo, mat); m.frustumCulled = false; grp.add(m);
    }
  };
  add(back, Hh.tail, 1, 0.75);
  add(temple, Hh.face, 0.55, 0.9);
  // into the head bone's space (they follow her head)
  B.head.updateMatrixWorld(true); const inv = new THREE.Matrix4().copy(B.head.matrixWorld).invert();
  for (const m of grp.children) m.geometry.applyMatrix4(inv);
  B.head.add(grp);
  return { back: back.length, temple: temple.length, n: grp.children.length };
}

// build everything once her model is in its rest pose (root at the origin, unrotated, at its opening scale)
export function buildGirl13(g2) {
  if (!G13_ON || api.ready) return;
  const t0 = performance.now();
  const root = g2.root, B = g2.B; let skinned = null;
  root.traverse((o) => { if (o.isSkinnedMesh && !skinned) skinned = o; });
  if (!skinned) return;
  root.updateMatrixWorld(true);
  const F = G13.face, region = bakeRegion(skinned, root, F);
  // the grid: raycast each point straight back onto her face (model -z), lift it off the surface along the surface normal
  const gm = skinned.material;
  if (G13.tex.on && gm.map && gm.map.image) { const old = gm.map; gm.map = gradeAtlas(old, G13.tex); gm.needsUpdate = true; api.atlas = gm.map; api.atlasOld = old; }
  // the (graded) atlas's texels: her skin colour and the hair test
  const AT = gm.map && gm.map.image, aw = AT ? AT.width : 0, ah = AT ? AT.height : 0;
  const ad = AT ? (() => { const cc = document.createElement('canvas'); cc.width = aw; cc.height = ah; const x2 = cc.getContext('2d'); x2.drawImage(AT, 0, 0); return x2.getImageData(0, 0, aw, ah).data; })() : null;
  const texel = (uv) => { if (!ad || !uv) return null; const px = Math.min(aw - 1, Math.max(0, Math.floor(uv.x * aw))), py = Math.min(ah - 1, Math.max(0, Math.floor(uv.y * ah))), i = (py * aw + px) * 4; return [ad[i], ad[i + 1], ad[i + 2]]; };
  const hairAt = (uv) => { const t = texel(uv); if (!t) return true; const mx = Math.max(...t), mn = Math.min(...t); return mx < 150 && (mx - mn) / Math.max(1, mx) > 0.35; };
  api.bow = reshapeBow(skinned, root, texel, G13.bow);
  if (G13.hair.on) {
    const hm = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.42, metalness: 0, sheen: 1, sheenColor: new THREE.Color('#c87a48'), sheenRoughness: 0.32,
      emissive: gm.emissive ? gm.emissive.clone() : new THREE.Color(0), emissiveIntensity: (gm.emissiveIntensity || 0) * 0.6, envMap: gm.envMap || null, envMapIntensity: (gm.envMapIntensity || 1) * 1.2 });
    api.hair = buildHair(skinned, root, B, texel, G13.hair, hm);
  }
  const strand = [];
  const N = F.n, P = [], ok = [], ray = new THREE.Raycaster(), dir = new THREE.Vector3(0, 0, -1).transformDirection(root.matrixWorld);
  const nm = new THREE.Matrix3();
  for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
    const x = F.x0 + (F.x1 - F.x0) * i / N, y = F.y0 + (F.y1 - F.y0) * j / N;
    ray.set(root.localToWorld(new THREE.Vector3(x, y, 0.8)), dir);
    const hs = ray.intersectObject(region, false), h = hs[0];
    if (!h) { P.push(new THREE.Vector3()); ok.push(false); strand.push(false); continue; }
    strand.push((y > 0.745 || Math.abs(x) > 0.095) && hs.length > 1 && hs[1].distance - h.distance < 0.07 && hairAt(h.uv));
    const nrm = h.face.normal.clone().applyMatrix3(nm.getNormalMatrix(region.matrixWorld)).normalize();
    if (nrm.dot(dir) > 0) nrm.negate();
    P.push(h.point.clone().addScaledVector(nrm, F.lift)); ok.push(true);
  }
  const zOf = (p) => root.worldToLocal(p.clone()).z;
  const pos = [], uv = [], index = [];
  B.head.updateMatrixWorld(true);
  for (let k = 0; k < P.length; k++) { const l = B.head.worldToLocal(P[k].clone()); pos.push(l.x, l.y, l.z); uv.push((k % (N + 1)) / N, Math.floor(k / (N + 1)) / N); }
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const a = j * (N + 1) + i, b = a + 1, c = a + N + 1, d = c + 1;
    if (!(ok[a] && ok[b] && ok[c] && ok[d])) continue;
    const zs = [zOf(P[a]), zOf(P[b]), zOf(P[c]), zOf(P[d])];
    if (Math.max(...zs) - Math.min(...zs) > F.maxStep) continue;   // no sheets stretched across her silhouette (face to hair or ear)
    index.push(a, b, d, a, d, c);
  }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setIndex(index); geo.computeVertexNormals();
  // her skin colour: the median graded atlas texel under her cheeks, chin and the bridge of her nose
  if (F.skinAuto !== false) {
    const S = []; for (const [x, y] of [[-0.085, 0.715], [0.085, 0.715], [-0.07, 0.73], [0.07, 0.73], [0, 0.665], [0.03, 0.668], [-0.03, 0.668], [0, 0.755], [-0.1, 0.74], [0.1, 0.74]]) {
      ray.set(root.localToWorld(new THREE.Vector3(x, y, 0.8)), dir); const h = ray.intersectObject(region, false)[0]; const t = h && texel(h.uv); if (t) S.push(t); }
    if (S.length) { const med = (i) => S.map((t) => t[i]).sort((p, q) => p - q)[S.length >> 1]; F.skin = `rgb(${med(0)},${med(1)},${med(2)})`; api.skinSamples = S; }
  }
  // the mask: 1 on her face, 0 where a hair strand hangs in front of it (in the layer's own u, v)
  const mk = document.createElement('canvas'); mk.width = mk.height = N + 1; { const c2 = mk.getContext('2d'), id = c2.createImageData(N + 1, N + 1);
    for (let k2 = 0; k2 < P.length; k2++) { const i = k2 % (N + 1), j = Math.floor(k2 / (N + 1)), row = N - j; id.data[(row * (N + 1) + i) * 4 + 3] = ok[k2] && !strand[k2] ? 255 : 0; }
    c2.putImageData(id, 0, 0); }
  F.mask = mk; api.strands = strand.filter(Boolean).length;
  const cv = document.createElement('canvas'); cv.width = cv.height = 1024; paintFace(cv, F);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4,
    roughness: 0.62, metalness: 0, emissive: gm.emissive ? gm.emissive.clone() : new THREE.Color(0), emissiveIntensity: gm.emissiveIntensity || 0, envMap: gm.envMap || null, envMapIntensity: gm.envMapIntensity || 1 });
  const face = new THREE.Mesh(geo, mat); face.name = 'girl13Face'; face.frustumCulled = false; face.renderOrder = 2;
  B.head.add(face);
  region.geometry.dispose();
  const restQ = B.head.getWorldQuaternion(new THREE.Quaternion()), rootQ = root.getWorldQuaternion(new THREE.Quaternion());
  const centre = B.head.worldToLocal(root.localToWorld(new THREE.Vector3(0, 0.76, 0.2)));
  // the face's world centre and forward direction now (for frontal captures)
  const frame = () => { const q = B.head.getWorldQuaternion(new THREE.Quaternion()).multiply(restQ.clone().invert()).multiply(rootQ);
    return { c: B.head.localToWorld(centre.clone()), f: new THREE.Vector3(0, 0, 1).applyQuaternion(q).normalize(), up: new THREE.Vector3(0, 1, 0).applyQuaternion(q).normalize() }; };
  Object.assign(api, { ready: true, face, canvas: cv, tex, frame, ms: Math.round(performance.now() - t0), cells: index.length / 6, redraw: () => { paintFace(cv, G13.face); tex.needsUpdate = true; } });
}
