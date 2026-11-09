// arch56 (session ddf175f2): var6.cjs variant code. renderer.info (calls, triangles) of the whole frame and of arch56's parts (each part hidden
// in turn: the difference is its cost): the shell, the merged chunk meshes (rings, lamps, procedural modules), the instanced models per key, the gears.
const R = d.renderer; let a56 = null; scene.traverse((o) => { if (o.name === 'arch56') a56 = o; });
const meas = () => { R.info.autoReset = false; R.info.reset(); B.render(); const r = { calls: R.info.render.calls, tris: R.info.render.triangles }; R.info.autoReset = true; return r; };
const all = meas(); const out = { all };
const parts = { shell: (o) => o.name === 'a56Shell', chunks: (o) => o.name.startsWith('a56Chunk'), gears: (o) => o.name === 'a56Gear' };
for (const key of ['mach', 'ch', 'm911', 'm912', 'ch6', 'jj']) parts['M_' + key] = (o) => o.name.startsWith('a56M_' + key);
for (const [n, f] of Object.entries(parts)) { const hid = []; a56.children.forEach((o) => { if (f(o) && o.visible) { o.visible = false; hid.push(o); } });
  const r = meas(); hid.forEach((o) => { o.visible = true; }); out[n] = { calls: all.calls - r.calls, tris: all.tris - r.tris, n: hid.length }; }
a56.visible = false; const r0 = meas(); a56.visible = true; out.arch56 = { calls: all.calls - r0.calls, tris: all.tris - r0.tris };
return out;
