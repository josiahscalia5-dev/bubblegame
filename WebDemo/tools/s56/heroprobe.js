// Lane s56 (session 3849f5c8): WHAT DRAWS HIM at a live-game checkpoint. EVAL body for shots56.cjs (d = __bw.debug(), scene, B = __bw):
//   EVAL="$(cat tools/s56/heroprobe.js)" S3=... ZS=206 node tools/s56/shots56.cjs ...
// Returns: the mascot's node chain (root -> tilt -> squash -> model ...) with each mesh's material kind; every fur-shader mesh in the scene and
// whether it hangs under mascot.tilt; the pink-fur screen bbox (the art director's hero.py class) of the real render, then the same after
// (a) each child of the model hidden alone, (b) tilt.scale.y 0.6, (c) tilt.position.y -0.3, (d) everything under tilt hidden: so the frame's
// pink silhouette is attributed to the exact nodes, and the drawn-only transforms are shown to move it. Everything is restored after.
const R = d.renderer, cv = R.domElement;
const M = d.mascotState && d.mascotState.tilt ? d.mascotState : null;   // (debug().mascot is the root group; mascotState the mascot object)
const out = { haveMascot: !!M };
if (!M) return out;
const desc = (o, depth = 0, acc = []) => { const mat = Array.isArray(o.material) ? o.material[0] : o.material;
  acc.push(`${'  '.repeat(depth)}${o.name || '(noname)'}:${o.type}${o.isMesh ? ' ' + (mat && mat.type) + (mat && mat.uniforms && mat.uniforms.uCentre ? ' FUR' : '') + ' v' + o.visible + ' tris ' + (o.geometry.index ? o.geometry.index.count / 3 : o.geometry.attributes.position.count / 3) : ''} s(${o.scale.x.toFixed(2)},${o.scale.y.toFixed(2)},${o.scale.z.toFixed(2)})`);
  if (depth < 4) for (const c of o.children) desc(c, depth + 1, acc); return acc; };
out.chain = desc(M.root);
const under = (o, p) => { while (o) { if (o === p) return true; o = o.parent; } return false; };
const fur = []; scene.traverse((o) => { if (!o.isMesh) return; const mat = Array.isArray(o.material) ? o.material[0] : o.material; if (mat && mat.uniforms && (mat.uniforms.uCentre || mat.uniforms.uRadius)) fur.push({ name: o.name || '(noname)', parent: o.parent && (o.parent.name || o.parent.type), visible: o.visible, underTilt: under(o, M.tilt) }); });
out.furMeshes = fur;
const c2 = document.createElement('canvas'), W = 216, H = 384; c2.width = W; c2.height = H; const g = c2.getContext('2d', { willReadFrequently: true });
const pink = () => { B.render(); g.drawImage(cv, 0, 0, W, H); const px = g.getImageData(0, 0, W, H).data; let x0 = W, x1 = -1, y0 = H, y1 = -1, n = 0;
  for (let y = Math.floor(H * 0.45); y < H * 0.80; y++) for (let x = Math.floor(W * 0.18); x < W * 0.82; x++) { const i = (y * W + x) * 4, r = px[i] / 255, gg = px[i + 1] / 255, b = px[i + 2] / 255, mx = Math.max(r, gg, b), mn = Math.min(r, gg, b), dd = mx - mn;
    if (mx < 0.45 || dd / mx <= 0.3) continue; let h = 0; if (mx === r) h = ((gg - b) / dd + 6) % 6; else if (mx === gg) h = (b - r) / dd + 2; else h = (r - gg) / dd + 4; h *= 60;
    if (h >= 295) { n++; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; } }
  return n ? { n, x: [+(x0 / W).toFixed(3), +(x1 / W).toFixed(3)], y: [+(y0 / H).toFixed(3), +(y1 / H).toFixed(3)] } : { n: 0 }; };
out.full = pink();
const model = M.squash.children[0]; out.ablate = {};
if (model) model.children.forEach((c, i) => { const v = c.visible; c.visible = false; out.ablate[i + ':' + (c.name || c.type)] = pink(); c.visible = v; });
const sy = M.tilt.scale.y; M.tilt.scale.y = sy * 0.6; M.tilt.updateMatrixWorld(true); out.tiltScaleY06 = pink(); M.tilt.scale.y = sy; M.tilt.updateMatrixWorld(true);
const py = M.tilt.position.y; M.tilt.position.y = py - 0.3; M.tilt.updateMatrixWorld(true); out.tiltDown03 = pink(); M.tilt.position.y = py; M.tilt.updateMatrixWorld(true);
const tv = M.squash.visible; M.squash.visible = false; out.squashHidden = pink(); M.squash.visible = tv;
out.tilt = { pos: M.tilt.position.toArray().map((v) => +v.toFixed(3)), rot: [M.tilt.rotation.x, M.tilt.rotation.y, M.tilt.rotation.z].map((v) => +v.toFixed(3)), scale: M.tilt.scale.toArray().map((v) => +v.toFixed(3)) };
out.squashNode = { pos: M.squash.position.toArray().map((v) => +v.toFixed(3)), scale: M.squash.scale.toArray().map((v) => +v.toFixed(3)) };
B.render();
return out;
