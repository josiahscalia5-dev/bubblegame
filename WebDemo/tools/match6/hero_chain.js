// hero_chain (session 3849f5c8): EVAL body for tools/s56/shots56.cjs: the parent chain from the mascot's drawn mesh up to the scene, with each node's
// name, type, local scale / position / rotation, and which mascot-state field it is (root, tilt, squash ...), sampled 6 times 0.1 s apart (the swim
// squash animates). Read-only.
const M = d.mascotState; let mesh = null; d.mascot.traverse((o) => { if (!mesh && o.isMesh && /Mascot/i.test(o.name)) mesh = o; });
const fieldOf = (o) => Object.keys(M).filter((k) => M[k] === o).join(',');
const snap = () => { const out = []; for (let p = mesh; p; p = p.parent) { out.push({ name: p.name || p.type, field: fieldOf(p), s: p.scale.toArray().map((v) => +v.toFixed(3)), y: +p.position.y.toFixed(3), r: [p.rotation.x, p.rotation.z].map((v) => +v.toFixed(3)) }); if (p === d.scene) break; } return out; };
const samples = []; for (let i = 0; i < 6; i++) { samples.push({ sq: M.sq !== undefined ? +(+M.sq).toFixed(3) : null, chain: snap().slice(0, 6) }); B.advance && B.advance(0.1); }
return { samples };
