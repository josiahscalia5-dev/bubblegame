// Geometry check of a GLB's mesh, for judging a Meshy delivery before using it: holes (open edges after welding
// by position), non-manifold edges, winding flips, triangles wound against their normals, texture islands and
// separate pieces. This is what showed the tunnel liner's cracks (see Design/MeshyDeliveries/TunnelInterior).
//   node tools/mesh_check.mjs <file.glb> [shellCut]   (run from WebDemo/)
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
const [file, shellCutArg] = process.argv.slice(2);
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(file);
const node = doc.getRoot().listNodes().find((n) => n.getMesh());
const prim = node.getMesh().listPrimitives()[0];
const M = node.getWorldMatrix();
const pa = prim.getAttribute('POSITION'), na = prim.getAttribute('NORMAL'), ua = prim.getAttribute('TEXCOORD_0');
const n = pa.getCount(), P = new Float64Array(n * 3), N = new Float64Array(n * 3), v = [0, 0, 0];
for (let i = 0; i < n; i++) {
  pa.getElement(i, v);
  P[i * 3] = M[0] * v[0] + M[4] * v[1] + M[8] * v[2] + M[12]; P[i * 3 + 1] = M[1] * v[0] + M[5] * v[1] + M[9] * v[2] + M[13]; P[i * 3 + 2] = M[2] * v[0] + M[6] * v[1] + M[10] * v[2] + M[14];
  if (na) { na.getElement(i, v); N.set(v, i * 3); }
}
const idx = prim.getIndices().getArray(); const T = idx.length / 3;
// weld by position (1e-4 units)
const key = (i) => `${Math.round(P[i * 3] * 1e4)},${Math.round(P[i * 3 + 1] * 1e4)},${Math.round(P[i * 3 + 2] * 1e4)}`;
const map = new Map(), W = new Int32Array(n);
for (let i = 0; i < n; i++) { const k = key(i); if (!map.has(k)) map.set(k, map.size); W[i] = map.get(k); }
// optional shell cut (as liner.js): bore profile, then drop triangles deeper than shellCut
let keep = new Uint8Array(T).fill(1);
let zMin = Infinity, zMax = -Infinity; for (let i = 0; i < n; i++) { zMin = Math.min(zMin, P[i * 3 + 2]); zMax = Math.max(zMax, P[i * 3 + 2]); }
const SL = 24, bore = new Float64Array(SL).fill(Infinity);
const slice = (z) => Math.min(SL - 1, Math.max(0, Math.floor(((z - zMin) / (zMax - zMin)) * SL)));
for (let i = 0; i < n; i++) { const r = Math.hypot(P[i * 3], P[i * 3 + 1]); const k = slice(P[i * 3 + 2]); bore[k] = Math.min(bore[k], r); }
const boreS = Array.from(bore).map((_, k) => { let s = 0, c = 0; for (let j = k - 2; j <= k + 2; j++) if (j >= 0 && j < SL) { s += bore[j]; c++; } return s / c + 0.03; });
const boreAt = (z) => { const f = ((z - zMin) / (zMax - zMin)) * SL - 0.5, k = Math.max(0, Math.min(SL - 2, Math.floor(f))), t = Math.min(1, Math.max(0, f - k)); return boreS[k] * (1 - t) + boreS[k + 1] * t; };
const depth = (i) => Math.hypot(P[i * 3], P[i * 3 + 1]) - boreAt(P[i * 3 + 2]);
if (shellCutArg) for (let t = 0; t < T; t++) if (Math.max(depth(idx[t * 3]), depth(idx[t * 3 + 1]), depth(idx[t * 3 + 2])) > +shellCutArg) keep[t] = 0;
// edges on welded vertices
const edges = new Map(); let degenerate = 0, kept = 0;
const fn = [0, 0, 0];
let normalDisagree = 0, inwardFaces = 0, boreFaces = 0;
for (let t = 0; t < T; t++) {
  if (!keep[t]) continue; kept++;
  const a = idx[t * 3], b = idx[t * 3 + 1], c = idx[t * 3 + 2], A = W[a], B = W[b], Cc = W[c];
  if (A === B || B === Cc || A === Cc) { degenerate++; continue; }
  for (const [p, q] of [[A, B], [B, Cc], [Cc, A]]) {
    const k = p < q ? `${p}_${q}` : `${q}_${p}`; const e = edges.get(k) || { n: 0, dir: 0 };
    e.n++; e.dir += p < q ? 1 : -1; edges.set(k, e);
  }
  // face normal from winding
  const ux = P[b * 3] - P[a * 3], uy = P[b * 3 + 1] - P[a * 3 + 1], uz = P[b * 3 + 2] - P[a * 3 + 2];
  const vx = P[c * 3] - P[a * 3], vy = P[c * 3 + 1] - P[a * 3 + 1], vz = P[c * 3 + 2] - P[a * 3 + 2];
  const fx = uy * vz - uz * vy, fy = uz * vx - ux * vz, fz = ux * vy - uy * vx;
  if (na) { const sx = N[a * 3] + N[b * 3] + N[c * 3], sy = N[a * 3 + 1] + N[b * 3 + 1] + N[c * 3 + 1], sz = N[a * 3 + 2] + N[b * 3 + 2] + N[c * 3 + 2]; if (fx * sx + fy * sy + fz * sz < 0) normalDisagree++; }
  // on the bore (within 0.04 of its surface): does the face point toward the axis?
  if (Math.max(depth(a), depth(b), depth(c)) < 0.04) {
    boreFaces++;
    const cx = (P[a * 3] + P[b * 3] + P[c * 3]) / 3, cy = (P[a * 3 + 1] + P[b * 3 + 1] + P[c * 3 + 1]) / 3;
    if (fx * -cx + fy * -cy < 0 === false) inwardFaces++;
  }
}
let boundary = 0, nonManifold = 0, flipped = 0, boundaryBore = 0;
const posOfW = new Float64Array(map.size * 3); for (let i = 0; i < n; i++) posOfW.set([P[i * 3], P[i * 3 + 1], P[i * 3 + 2]], W[i] * 3);
let boundaryLen = 0;
for (const [k, e] of edges) {
  if (e.n === 1) {
    boundary++;
    const [p, q] = k.split('_').map(Number);
    boundaryLen += Math.hypot(posOfW[p * 3] - posOfW[q * 3], posOfW[p * 3 + 1] - posOfW[q * 3 + 1], posOfW[p * 3 + 2] - posOfW[q * 3 + 2]);
  } else if (e.n > 2) nonManifold++;
  else if (e.dir !== 0) flipped++;
}
// UV islands = connected components by shared vertex index (unwelded)
const parent = new Int32Array(n).map((_, i) => i); const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
for (let t = 0; t < T; t++) { const a = find(idx[t * 3]), b = find(idx[t * 3 + 1]), c = find(idx[t * 3 + 2]); parent[a] = b; parent[find(c)] = b; }
const islands = new Set(); for (let t = 0; t < T; t++) islands.add(find(idx[t * 3]));
// pieces = connected components on welded vertices
const par2 = new Int32Array(map.size).map((_, i) => i); const f2 = (x) => { while (par2[x] !== x) { par2[x] = par2[par2[x]]; x = par2[x]; } return x; };
for (let t = 0; t < T; t++) if (keep[t]) { const a = f2(W[idx[t * 3]]), b = f2(W[idx[t * 3 + 1]]), c = f2(W[idx[t * 3 + 2]]); par2[a] = b; par2[f2(c)] = b; }
const pieces = new Map(); for (let t = 0; t < T; t++) if (keep[t]) { const r = f2(W[idx[t * 3]]); pieces.set(r, (pieces.get(r) || 0) + 1); }
const sizes = [...pieces.values()].sort((x, y) => y - x);
console.log(JSON.stringify({
  file: file.split('/').pop(), shellCut: shellCutArg || 'none', vertices: n, weldedVertices: map.size, triangles: T, kept, degenerate,
  holeEdges: boundary, holeEdgeLength: +boundaryLen.toFixed(2), nonManifoldEdges: nonManifold, windingFlips: flipped,
  facesWhereWindingDisagreesWithNormals: na ? normalDisagree : 'no normals', boreFaces, boreFacesPointingInward: inwardFaces,
  uvIslands: islands.size, separatePieces: pieces.size, largestPieces: sizes.slice(0, 5), piecesUnder20Tris: sizes.filter((s) => s < 20).length,
}));
