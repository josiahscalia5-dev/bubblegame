// Tripo GLB texture round trip (8 November 2026, session 57091b57), with glTF Transform's core (~/.bubblewash-tools/node):
//   node glb_textures.cjs dump <in.glb> <dir>            writes <dir>/<i>_<slot>.<ext> and <dir>/textures.json
//   node glb_textures.cjs pack <in.glb> <dir> <out.glb> [yawDeg]   puts the (edited) images back, and turns the scene's root
//                                                        nodes about +Y by yawDeg (a Tripo model faces +X; the game's looks face +Z)
const path = require('path'), fs = require('fs');
const T = path.join(process.env.HOME, '.bubblewash-tools/node/node_modules/@gltf-transform/core');
const { NodeIO } = require(T);
const [cmd, inp, dir, out, yaw] = process.argv.slice(2);
(async () => {
  const io = new NodeIO(); const doc = await io.read(inp); const root = doc.getRoot();
  const slots = new Map();
  for (const m of root.listMaterials()) for (const [slot, t] of [['baseColor', m.getBaseColorTexture()], ['normal', m.getNormalTexture()], ['metallicRoughness', m.getMetallicRoughnessTexture()], ['emissive', m.getEmissiveTexture()], ['occlusion', m.getOcclusionTexture()]]) if (t) slots.set(t, slot);
  const list = root.listTextures();
  if (cmd === 'dump') {
    fs.mkdirSync(dir, { recursive: true }); const info = [];
    list.forEach((t, i) => { const ext = (t.getMimeType() || 'image/png').split('/')[1].replace('jpeg', 'jpg'); const f = `${i}_${slots.get(t) || 'other'}.${ext}`;
      fs.writeFileSync(path.join(dir, f), t.getImage()); info.push({ i, slot: slots.get(t) || 'other', file: f, mime: t.getMimeType(), bytes: t.getImage().length }); });
    fs.writeFileSync(path.join(dir, 'textures.json'), JSON.stringify(info, null, 1)); console.log(JSON.stringify(info));
  } else if (cmd === 'pack') {
    const info = JSON.parse(fs.readFileSync(path.join(dir, 'textures.json')));
    for (const e of info) { const f = path.join(dir, e.out || e.file); list[e.i].setImage(fs.readFileSync(f)).setMimeType(f.endsWith('.png') ? 'image/png' : 'image/jpeg').setURI(''); }
    if (yaw) { const a = (+yaw * Math.PI) / 180, q = [0, Math.sin(a / 2), 0, Math.cos(a / 2)];
      for (const s of root.listScenes()) for (const n of s.listChildren()) { const [x, y, z, w] = n.getRotation();
        n.setRotation([q[3] * x + q[0] * w + q[1] * z - q[2] * y, q[3] * y - q[0] * z + q[1] * w + q[2] * x, q[3] * z + q[0] * y - q[1] * x + q[2] * w, q[3] * w - q[0] * x - q[1] * y - q[2] * z]);
        const [px, py, pz] = n.getTranslation(); n.setTranslation([px * Math.cos(a) + pz * Math.sin(a), py, -px * Math.sin(a) + pz * Math.cos(a)]); } }
    await io.write(out, doc); console.log('wrote', out, fs.statSync(out).size, 'bytes');
  }
})().catch((e) => { console.error(e); process.exit(1); });
