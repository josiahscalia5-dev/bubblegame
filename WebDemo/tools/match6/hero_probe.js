// hero_probe (session 3849f5c8): EVAL body for tools/s56/shots56.cjs. Lists what actually DRAWS the pink character at the shot: every visible mesh
// under mascot.root (and m.tilt), with its local scale, world scale, geometry size, material type / shader name, instance count, and its projected
// screen box (fractions of the frame), so the boxy silhouette can be traced to the layer that makes it. Read-only.
const cam = d.camera, root = d.mascot, M = d.mascotState, V = cam.position.constructor; cam.updateMatrixWorld(); root.updateMatrixWorld(true);
const proj = (v) => { const p = v.clone().project(cam); return [(p.x + 1) / 2, (1 - p.y) / 2, p.z]; };
const sbox = (o) => { const g = o.geometry; if (!g) return null; if (!g.boundingBox) g.computeBoundingBox(); const b = g.boundingBox; if (!b) return null; const pts = [];
  for (let i = 0; i < 8; i++) pts.push(proj(new V(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).applyMatrix4(o.matrixWorld)));
  const f = pts.filter((p) => p[2] < 1); if (!f.length) return null; const r = (k, fn) => +fn(...f.map((p) => p[k])).toFixed(3);
  return [r(0, Math.min), r(1, Math.min), r(0, Math.max), r(1, Math.max)]; };
const rows = []; let n = 0;
root.traverse((o) => { n++; if (!o.isMesh && !o.isPoints && !o.isInstancedMesh) return; let vis = true; for (let p = o; p; p = p.parent) if (!p.visible) vis = false;
  const ws = new V(); o.getWorldScale(ws); const sz = o.geometry && o.geometry.boundingBox ? o.geometry.boundingBox.getSize(new V()) : null;
  rows.push({ name: o.name || '(unnamed)', parent: o.parent && (o.parent.name || o.parent.type), type: o.type, vis, layers: o.layers.mask, ro: o.renderOrder,
    mat: o.material && (o.material.name || o.material.type) + (o.material.customProgramCacheKey ? ':' + String(o.material.customProgramCacheKey()).slice(0, 30) : ''),
    verts: o.geometry && o.geometry.attributes.position ? o.geometry.attributes.position.count : 0, inst: o.count || 0,
    scaleLocal: o.scale.toArray().map((v) => +v.toFixed(3)), scaleWorld: ws.toArray().map((v) => +v.toFixed(3)), geoSize: sz && sz.toArray().map((v) => +v.toFixed(3)), screen: vis ? sbox(o) : null }); });
const chain = []; for (const k of ['root', 'tilt', 'body', 'model', 'fur']) if (M[k]) chain.push({ k, pos: M[k].position.toArray().map((v) => +v.toFixed(3)), scale: M[k].scale.toArray().map((v) => +v.toFixed(3)), rot: [M[k].rotation.x, M[k].rotation.y, M[k].rotation.z].map((v) => +v.toFixed(3)) });
return { nodes: n, meshes: rows.length, chain, mascotKeys: Object.keys(M).slice(0, 60), rows };
