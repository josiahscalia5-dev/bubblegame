// girl13 (10 November 2026, session b57cc1e7): the user's three approved girl references
// (Design/ReferencePacks/2026-11-10_Girl_Opening_Approved_References_from_user/) for the girl-and-laundry-basket opening. A CANDIDATE behind the
// switch `girl13` (with six + six2). Without it the opening is exactly the previous build.
//   - the face layer: a thin grid that hugs her real face surface (raycast onto her skinned mesh in her rest pose), parented to her head bone so it
//     follows every head turn, with its own painted texture (the approved open smile, blush, freckles, eye highlights) over her Tripo atlas.
// Looks only: private generators only (never the game's seeded Math.random), gameplay untouched.
import * as THREE from 'three';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const G13_ON = LIST.includes('six') && LIST.includes('six2') && LIST.includes('girl13');

// the numbers of the candidate (window.__bwGirl13.G13 in the browser; window.__bwGirl13Init merges into it before the build)
export const G13 = {
  // the face layer's box in her model's own coordinates (x across, y up, z toward her front), the grid and the lift off the surface
  face: { x0: -0.16, x1: 0.16, y0: 0.6, y1: 0.92, n: 56, lift: 0.0016, maxStep: 0.035, debug: false },
};

const merge = (a, b) => { for (const k in b) { if (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k] && typeof a[k] === 'object') merge(a[k], b[k]); else a[k] = b[k]; } return a; };
const api = { G13, ready: false };
if (G13_ON && typeof window !== 'undefined') { if (window.__bwGirl13Init) merge(G13, window.__bwGirl13Init); window.__bwGirl13 = api; }

// the girl's skinned positions in her current pose, as a plain triangle soup limited to a box in her root's coordinates (fast raycasts)
function bakeRegion(skinned, root, box) {
  const pos = skinned.geometry.attributes.position, idx = skinned.geometry.index, v = new THREE.Vector3();
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const W = new Float32Array(pos.count * 3), inBox = new Uint8Array(pos.count);
  skinned.updateMatrixWorld(true); skinned.skeleton.update();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i); skinned.applyBoneTransform(i, v); v.applyMatrix4(skinned.matrixWorld);
    W[i * 3] = v.x; W[i * 3 + 1] = v.y; W[i * 3 + 2] = v.z;
    v.applyMatrix4(inv); inBox[i] = v.x > box.x0 - 0.05 && v.x < box.x1 + 0.05 && v.y > box.y0 - 0.05 && v.y < box.y1 + 0.05 && v.z > 0 ? 1 : 0;
  }
  const tri = [];
  const n = idx ? idx.count : pos.count;
  for (let t = 0; t < n; t += 3) {
    const a = idx ? idx.getX(t) : t, b = idx ? idx.getX(t + 1) : t + 1, c = idx ? idx.getX(t + 2) : t + 2;
    if (inBox[a] + inBox[b] + inBox[c] < 2) continue;
    for (const q of [a, b, c]) tri.push(W[q * 3], W[q * 3 + 1], W[q * 3 + 2]);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(tri, 3)); g.computeVertexNormals();
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
}

// build everything once her model is in its rest pose (root at the origin, unrotated, at its opening scale)
export function buildGirl13(g2) {
  if (!G13_ON || api.ready) return;
  const root = g2.root, B = g2.B; let skinned = null;
  root.traverse((o) => { if (o.isSkinnedMesh && !skinned) skinned = o; });
  if (!skinned) return;
  root.updateMatrixWorld(true);
  const F = G13.face, region = bakeRegion(skinned, root, F);
  // the grid: raycast each point straight back onto her face (model -z), lift it off the surface along the surface normal
  const N = F.n, P = [], ok = [], ray = new THREE.Raycaster(), dir = new THREE.Vector3(0, 0, -1).transformDirection(root.matrixWorld);
  const nm = new THREE.Matrix3();
  for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
    const x = F.x0 + (F.x1 - F.x0) * i / N, y = F.y0 + (F.y1 - F.y0) * j / N;
    ray.set(root.localToWorld(new THREE.Vector3(x, y, 0.8)), dir);
    const h = ray.intersectObject(region, false)[0];
    if (!h) { P.push(new THREE.Vector3()); ok.push(false); continue; }
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
  const cv = document.createElement('canvas'); cv.width = cv.height = 1024; paintFace(cv, F);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const gm = skinned.material;
  const mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4,
    roughness: 0.62, metalness: 0, emissive: gm.emissive ? gm.emissive.clone() : new THREE.Color(0), emissiveIntensity: gm.emissiveIntensity || 0, envMap: gm.envMap || null, envMapIntensity: gm.envMapIntensity || 1 });
  const face = new THREE.Mesh(geo, mat); face.name = 'girl13Face'; face.frustumCulled = false; face.renderOrder = 2;
  B.head.add(face);
  region.geometry.dispose();
  Object.assign(api, { ready: true, face, canvas: cv, tex, cells: index.length / 6, redraw: () => { paintFace(cv, G13.face); tex.needsUpdate = true; } });
}
