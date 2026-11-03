// Repairs the Meshy washer tunnel interior liner as delivered, before it is made into a web copy.
//   node tools/repair_liner.mjs <delivered.glb> <repaired.glb> [tolerance=0.015]
//
// What was wrong with the delivered file (all three variants; the web copy was not the cause):
//   - It is 4,426 separate pieces, about one per texture island. When the 7.6-million-triangle Meshy
//     original was simplified, each island's edge moved on its own, so thin cracks (mostly 0.003-0.02
//     model units, 1-9 cm in the game) opened between neighbouring pieces: 91,501 open edges.
//   - About 4,000 edges join triangles wound in opposite directions, and about 11,000 triangles are
//     wound against their own normals, which spoils smoothed normals (dark patches).
// What this does:
//   1. Stitches the cracks: each open-edge vertex moves to halfway between itself and the nearest open
//      edge of another piece, if that edge is within the tolerance and its surface faces the same way.
//      Done three times, so both sides of a crack meet. The texture coordinates are unchanged.
//   2. Makes each piece's winding consistent (spreading out across shared edges), then turns every piece
//      to face the tube's axis (where the rider is). The model's own normals cannot decide this: they
//      disagree with each other inside a piece.
// It prints the open edges and crack widths before and after.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

const [input, output, tolArg = '0.015'] = process.argv.slice(2);
const TOL = +tolArg;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(input);
const node = doc.getRoot().listNodes().find((nd) => nd.getMesh());
const prim = node.getMesh().listPrimitives()[0];
const pa = prim.getAttribute('POSITION'), na = prim.getAttribute('NORMAL'), ia = prim.getIndices();
const n = pa.getCount();
const P = new Float64Array(n * 3), N = new Float64Array(n * 3), v = [0, 0, 0];
for (let i = 0; i < n; i++) { pa.getElement(i, v); P.set(v, i * 3); na.getElement(i, v); N.set(v, i * 3); }
const idx = Uint32Array.from(ia.getArray()), T = idx.length / 3;

function topology() {
  // weld by position, pieces, open (boundary) edges
  const key = (i) => `${Math.round(P[i * 3] * 1e5)},${Math.round(P[i * 3 + 1] * 1e5)},${Math.round(P[i * 3 + 2] * 1e5)}`;
  const m = new Map(), W = new Int32Array(n);
  for (let i = 0; i < n; i++) { const k = key(i); if (!m.has(k)) m.set(k, m.size); W[i] = m.get(k); }
  const par = new Int32Array(m.size).map((_, i) => i);
  const find = (x) => { while (par[x] !== x) { par[x] = par[par[x]]; x = par[x]; } return x; };
  for (let t = 0; t < T; t++) { const a = find(W[idx[t * 3]]), b = find(W[idx[t * 3 + 1]]), c = find(W[idx[t * 3 + 2]]); par[a] = b; par[find(c)] = b; }
  const edges = new Map();
  for (let t = 0; t < T; t++) for (let e = 0; e < 3; e++) {
    const a = idx[t * 3 + e], b = idx[t * 3 + (e + 1) % 3], A = W[a], B = W[b];
    if (A === B) continue;
    const k = A < B ? A * 4194304 + B : B * 4194304 + A;
    const r = edges.get(k); if (r) { r.n++; r.faces.push(t); r.dirs.push(A < B ? 1 : -1); } else edges.set(k, { n: 1, a, b, faces: [t], dirs: [A < B ? 1 : -1] });
  }
  return { W, find, edges };
}

const CELL = Math.max(0.02, TOL);
function cracks(topo, apply) {
  const { W, find, edges } = topo;
  const open = [...edges.values()].filter((e) => e.n === 1);
  const grid = new Map(), gk = (x, y, z) => `${Math.floor(x / CELL)},${Math.floor(y / CELL)},${Math.floor(z / CELL)}`;
  open.forEach((e, ei) => {
    const s = new Set();
    for (let k = 0; k <= 4; k++) { const t = k / 4; s.add(gk(P[e.a * 3] + (P[e.b * 3] - P[e.a * 3]) * t, P[e.a * 3 + 1] + (P[e.b * 3 + 1] - P[e.a * 3 + 1]) * t, P[e.a * 3 + 2] + (P[e.b * 3 + 2] - P[e.a * 3 + 2]) * t)); }
    for (const k of s) (grid.get(k) || grid.set(k, []).get(k)).push(ei);
  });
  const verts = new Map();   // welded id -> one original vertex
  for (const e of open) { verts.set(W[e.a], e.a); verts.set(W[e.b], e.b); }
  const hist = [0, 0, 0, 0, 0];   // <0.001, <0.003, <0.01, <0.02, none within 0.02
  const moves = [];
  for (const [w, i] of verts) {
    const px = P[i * 3], py = P[i * 3 + 1], pz = P[i * 3 + 2], piece = find(w);
    const gx = Math.floor(px / CELL), gy = Math.floor(py / CELL), gz = Math.floor(pz / CELL);
    let best = Infinity, bq = null;
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) for (const ei of grid.get(`${gx + dx},${gy + dy},${gz + dz}`) || []) {
      const e = open[ei]; if (find(W[e.a]) === piece) continue;
      const ax = P[e.a * 3], ay = P[e.a * 3 + 1], az = P[e.a * 3 + 2], ex = P[e.b * 3] - ax, ey = P[e.b * 3 + 1] - ay, ez = P[e.b * 3 + 2] - az;
      const l2 = ex * ex + ey * ey + ez * ez; let t = l2 > 0 ? ((px - ax) * ex + (py - ay) * ey + (pz - az) * ez) / l2 : 0; t = Math.max(0, Math.min(1, t));
      const qx = ax + ex * t, qy = ay + ey * t, qz = az + ez * t, dd = Math.hypot(px - qx, py - qy, pz - qz);
      if (dd >= best) continue;
      // only join surfaces that face the same way (not the two sides of a thin flange)
      const nx = N[e.a * 3] + N[e.b * 3], ny = N[e.a * 3 + 1] + N[e.b * 3 + 1], nz = N[e.a * 3 + 2] + N[e.b * 3 + 2];
      if (nx * N[i * 3] + ny * N[i * 3 + 1] + nz * N[i * 3 + 2] < 0.3 * Math.hypot(nx, ny, nz)) continue;
      best = dd; bq = [qx, qy, qz];
    }
    hist[best < 0.001 ? 0 : best < 0.003 ? 1 : best < 0.01 ? 2 : best < 0.02 ? 3 : 4]++;
    if (apply && bq && best <= TOL && best > 1e-6) moves.push([w, (px + bq[0]) / 2, (py + bq[1]) / 2, (pz + bq[2]) / 2]);
  }
  if (apply) {
    const to = new Map(moves.map(([w, x, y, z]) => [w, [x, y, z]]));
    for (let i = 0; i < n; i++) { const m = to.get(W[i]); if (m) P.set(m, i * 3); }
  }
  return { openEdges: open.length, crackWidthAtOpenEdgeVertices: { '<0.001': hist[0], '0.001-0.003': hist[1], '0.003-0.01': hist[2], '0.01-0.02': hist[3], 'none within 0.02': hist[4] }, moved: moves.length };
}

function windingReport(topo) {
  let flips = 0, against = 0;
  for (const e of topo.edges.values()) if (e.n === 2 && e.dirs[0] === e.dirs[1]) flips++;
  for (let t = 0; t < T; t++) { const f = faceNormal(t); const a = idx[t * 3], b = idx[t * 3 + 1], c = idx[t * 3 + 2]; if (f[0] * (N[a * 3] + N[b * 3] + N[c * 3]) + f[1] * (N[a * 3 + 1] + N[b * 3 + 1] + N[c * 3 + 1]) + f[2] * (N[a * 3 + 2] + N[b * 3 + 2] + N[c * 3 + 2]) < 0) against++; }
  // on the inner wall (within 0.06 of the bore's smallest radius at that depth, roughly): faces toward the axis
  let inward = 0, inner = 0;
  for (let t = 0; t < T; t++) {
    const a = idx[t * 3], b = idx[t * 3 + 1], c = idx[t * 3 + 2];
    const cx = (P[a * 3] + P[b * 3] + P[c * 3]) / 3, cy = (P[a * 3 + 1] + P[b * 3 + 1] + P[c * 3 + 1]) / 3;
    if (Math.hypot(cx, cy) > 0.72) continue;
    const f = faceNormal(t), l = Math.hypot(...f) || 1; if (Math.abs(f[0] * cx + f[1] * cy) / (l * Math.hypot(cx, cy)) < 0.5) continue;   // mostly radial faces only
    inner++; if (f[0] * -cx + f[1] * -cy > 0) inward++;
  }
  return { edgesJoiningOppositeWinding: flips, trianglesAgainstTheirNormals: against, innerWallFacesFacingTheAxis: `${inward} of ${inner}` };
}
function faceNormal(t) {
  const a = idx[t * 3], b = idx[t * 3 + 1], c = idx[t * 3 + 2];
  const ux = P[b * 3] - P[a * 3], uy = P[b * 3 + 1] - P[a * 3 + 1], uz = P[b * 3 + 2] - P[a * 3 + 2], vx = P[c * 3] - P[a * 3], vy = P[c * 3 + 1] - P[a * 3 + 1], vz = P[c * 3 + 2] - P[a * 3 + 2];
  return [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx];
}

let topo = topology();
console.log('delivered:', JSON.stringify({ ...cracks(topo, false), ...windingReport(topo) }));
for (let pass = 1; pass <= 3; pass++) { topo = topology(); const r = cracks(topo, true); console.log(`stitch pass ${pass}: moved ${r.moved} vertices`); }

// winding: consistent within each piece, then every piece turned to agree with the model's normals
topo = topology();
{
  const faceEdges = Array.from({ length: T }, () => []);
  for (const e of topo.edges.values()) if (e.n === 2) { faceEdges[e.faces[0]].push(e); faceEdges[e.faces[1]].push(e); }
  const flip = new Int8Array(T), seen = new Uint8Array(T);
  const dirOf = (e, k) => e.dirs[k] * (flip[e.faces[k]] ? -1 : 1);
  for (let s = 0; s < T; s++) {
    if (seen[s]) continue;
    const comp = [s]; seen[s] = 1;
    for (let q = 0; q < comp.length; q++) for (const e of faceEdges[comp[q]]) {
      const other = e.faces[0] === comp[q] ? 1 : 0, me = 1 - other, o = e.faces[other];
      if (seen[o]) continue;
      seen[o] = 1;
      if (dirOf(e, me) === e.dirs[other]) flip[o] = 1;   // same direction as its neighbour: turn it over
      comp.push(o);
    }
    let vote = 0;
    for (const t of comp) {   // area-weighted: does the piece face the tube's axis?
      let f = faceNormal(t); if (flip[t]) f = f.map((x) => -x);
      const a = idx[t * 3], b = idx[t * 3 + 1], c = idx[t * 3 + 2];
      const cx = (P[a * 3] + P[b * 3] + P[c * 3]) / 3, cy = (P[a * 3 + 1] + P[b * 3 + 1] + P[c * 3 + 1]) / 3, r = Math.hypot(cx, cy) || 1;
      vote += (f[0] * -cx + f[1] * -cy) / r;
    }
    if (vote < 0) for (const t of comp) flip[t] ^= 1;
  }
  for (let t = 0; t < T; t++) if (flip[t]) { const b = idx[t * 3 + 1]; idx[t * 3 + 1] = idx[t * 3 + 2]; idx[t * 3 + 2] = b; }
}
topo = topology();
console.log('repaired: ', JSON.stringify({ ...cracks(topo, false), ...windingReport(topo) }));

const pos = new Float32Array(n * 3); pos.set(P);
pa.setArray(pos);
ia.setArray(n > 65535 ? idx : Uint16Array.from(idx));
await io.write(output, doc);
console.log('wrote', output);
