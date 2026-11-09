// six2 ROOM (session 9ee07777): the laundry room of the user's references 01 / 02 (window, blue curtains, shelves of folded towels and bottles,
// walls, glossy tiled floor, rug, foreground towels, contact shadows) and the scenes 1-2 light. Owned by the lighting specialist; looks only.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { canvasTex, terryTex, six2Rnd as rnd, six2Sm as sm } from './opening_six2.js';
// ---------------------------------------------------------------- the laundry room of references 01 / 02
export function buildRoom2(env) {
  const g = new THREE.Group(); g.name = 'six2Room';
  const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0, envMap: env, envMapIntensity: 0.6, emissive: color, emissiveIntensity: 0.22, ...o });
  // the back wall: lavender-pink with soft vertical panelling, brighter round the window
  const wallT = canvasTex(512, 512, (c, w, h) => { const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#7a4ccc'); gr.addColorStop(0.5, '#a66ee0'); gr.addColorStop(1, '#d884d0'); c.fillStyle = gr; c.fillRect(0, 0, w, h);
    c.globalAlpha = 0.12; for (let x = 0; x < w; x += 32) { c.fillStyle = '#ffffff'; c.fillRect(x, 0, 3, h); c.fillStyle = '#7a52c0'; c.fillRect(x + 3, 0, 2, h); } c.globalAlpha = 1; });
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(7, 4.4), std(0xffffff, { map: wallT, emissiveMap: wallT, emissiveIntensity: 0.42, roughness: 0.8 })); wall.position.set(0, 2.0, -1.3); g.add(wall);
  const side = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 4.4), std(0xffffff, { map: wallT, emissiveMap: wallT, emissiveIntensity: 0.5, roughness: 0.8 })); side.rotation.y = Math.PI / 2; side.position.set(-2.4, 2.0, 0.9); g.add(side);
  // the floor: glossy pale pink tiles
  const floorT = canvasTex(512, 512, (c, w, h) => { c.fillStyle = '#d690cc'; c.fillRect(0, 0, w, h); for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { c.fillStyle = (i + j) % 2 ? '#e8a8dc' : '#d898d0'; c.fillRect(i * 128 + 3, j * 128 + 3, 122, 122); }
    c.fillStyle = 'rgba(190,140,210,0.6)'; for (let i = 0; i <= 4; i++) { c.fillRect(i * 128 - 2, 0, 4, h); c.fillRect(0, i * 128 - 2, w, 4); } });
  floorT.wrapS = floorT.wrapT = THREE.RepeatWrapping; floorT.repeat.set(5, 4);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(9, 7), std(0xffffff, { map: floorT, emissiveMap: floorT, emissiveIntensity: 0.28, roughness: 0.14, metalness: 0.15, envMapIntensity: 1.4 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, 1.2); g.add(floor);
  // the window: a tall sunlit window (warm sky, a sunlit garden glow), white frame, mullions, behind blue curtains
  const win = new THREE.Group(); win.name = 'six2Window'; win.position.set(-0.25, 1.55, -1.27); g.add(win);
  const skyT = canvasTex(256, 384, (c, w, h) => { const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#ffe7b0'); gr.addColorStop(0.45, '#fff3cf'); gr.addColorStop(0.7, '#ffd6a0'); gr.addColorStop(1, '#f6b0c8'); c.fillStyle = gr; c.fillRect(0, 0, w, h);
    const r = c.createRadialGradient(w * 0.62, h * 0.55, 4, w * 0.62, h * 0.55, w * 0.7); r.addColorStop(0, 'rgba(255,255,240,1)'); r.addColorStop(1, 'rgba(255,240,200,0)'); c.fillStyle = r; c.fillRect(0, 0, w, h);
    c.fillStyle = 'rgba(150,190,120,0.45)'; for (let i = 0; i < 18; i++) { c.beginPath(); c.arc(rnd() * w, h * (0.72 + rnd() * 0.25), 18 + rnd() * 30, 0, 7); c.fill(); } });
  const skyM = new THREE.MeshBasicMaterial({ map: skyT, color: new THREE.Color(1.25, 1.18, 1.08) });
  const W = 0.56, H = 1.08; const sky = new THREE.Mesh(new THREE.PlaneGeometry(W, H), skyM); win.add(sky);
  const frameM = std(0xfff4fb, { emissiveIntensity: 0.45, roughness: 0.4 });
  for (const [w, h, x, y] of [[W + 0.1, 0.06, 0, H / 2], [W + 0.1, 0.07, 0, -H / 2], [0.06, H, -W / 2, 0], [0.06, H, W / 2, 0], [0.035, H, 0, 0], [W, 0.035, 0, H * 0.18]]) { const b = new THREE.Mesh(new RoundedBoxGeometry(w, h, 0.06, 2, 0.012), frameM); b.position.set(x, y, 0.03); win.add(b); }
  const sill = new THREE.Mesh(new RoundedBoxGeometry(W + 0.24, 0.05, 0.2, 2, 0.015), frameM); sill.position.set(0, -H / 2 - 0.04, 0.08); win.add(sill);
  // warm light from the window
  const sun = new THREE.PointLight(0xffc890, 3.6, 4.5, 1.6); sun.position.set(-0.2, 1.5, -0.7); g.add(sun);
  const rayM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.0, 0.9, 0.7), transparent: true, opacity: 0.07, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  for (let i = 0; i < 3; i++) { const r = new THREE.Mesh(new THREE.PlaneGeometry(0.22 + i * 0.06, 2.2), rayM); r.position.set(0.1 + i * 0.16, 0.95, -0.7 + i * 0.12); r.rotation.set(0.25, 0, -0.45); g.add(r); }
  // blue curtains: velvet folds, a rod, gathered at the sides of the window
  const curT = canvasTex(64, 256, (c, w, h) => { const gr = c.createLinearGradient(0, 0, w, 0); for (let i = 0; i <= 8; i++) gr.addColorStop(i / 8, i % 2 ? '#3f5fd8' : '#7a98ff'); c.fillStyle = gr; c.fillRect(0, 0, w, h); });
  curT.wrapS = THREE.RepeatWrapping;
  const curM = std(0xffffff, { map: curT, emissiveMap: curT, emissiveIntensity: 0.35, roughness: 0.7, side: THREE.DoubleSide });
  for (const [x, w] of [[-0.42, 0.34], [0.42, 0.34]]) {
    const cg = new THREE.PlaneGeometry(w, 1.6, 24, 8), p = cg.attributes.position;
    for (let i = 0; i < p.count; i++) { const u = p.getX(i) / w + 0.5, v = p.getY(i) / 1.85 + 0.5; p.setZ(i, 0.04 * Math.sin(u * Math.PI * 5) * (0.6 + 0.4 * v)); p.setX(i, p.getX(i) * (1 - 0.35 * (1 - v) * sm(0.0, 0.5, 1 - v))); }
    cg.computeVertexNormals(); const c = new THREE.Mesh(cg, curM); c.position.set(win.position.x + x, 1.4, -1.18); g.add(c);
  }
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 2.3, 10), std(0xffd27a, { metalness: 0.9, roughness: 0.25, emissiveIntensity: 0.4 })); rod.rotation.z = Math.PI / 2; rod.position.set(win.position.x, 2.2, -1.16); g.add(rod);
  // shelves of folded towels and bottles: the left wall area and beside the window
  const shelfM = std(0xf8e2f2, { emissiveIntensity: 0.4, roughness: 0.45 });
  const towelCols = [0xd9b8ff, 0xffb3dc, 0xb7c8ff, 0xc9a2ff, 0xffc8e8, 0xa9d8ff];
  const bottleCols = [[0xe6b6ff, 0xb070f0], [0xffb8e2, 0xf060b0], [0xb8d8ff, 0x5a8cf0]];
  const towelT = terryTex('#ffffff', '#d8c8ee', '#ffffff');
  const shelf = (x0, x1, y, z, items) => {
    const sh = new THREE.Mesh(new RoundedBoxGeometry(x1 - x0, 0.045, 0.34, 2, 0.015), shelfM); sh.position.set((x0 + x1) / 2, y, z); g.add(sh);
    let x = x0 + 0.05;
    for (const it of items) {
      if (it === 'T') { const n = 2 + Math.floor(rnd() * 3); const col = towelCols[Math.floor(rnd() * towelCols.length)];
        for (let k = 0; k < n; k++) { const t = new THREE.Mesh(new RoundedBoxGeometry(0.3, 0.07, 0.24, 3, 0.032), std(col, { map: towelT, emissiveIntensity: 0.4, roughness: 0.95 })); t.position.set(x + 0.15 + (rnd() - 0.5) * 0.015, y + 0.058 + k * 0.072, z + 0.02); g.add(t); }
        x += 0.33; }
      else { const [bc, cap] = bottleCols[Math.floor(rnd() * bottleCols.length)], hgt = 0.2 + rnd() * 0.1;
        const pts = [[0, 0], [0.06, 0], [0.068, 0.02], [0.068, hgt * 0.7], [0.045, hgt * 0.84], [0.025, hgt * 0.9], [0.025, hgt], [0, hgt]].map(([a, b]) => new THREE.Vector2(a, b));
        const bo = new THREE.Mesh(new THREE.LatheGeometry(pts, 24), new THREE.MeshPhysicalMaterial({ color: bc, roughness: 0.1, metalness: 0, envMap: env, envMapIntensity: 1.4, transmission: 0, transparent: true, opacity: 0.92, emissive: bc, emissiveIntensity: 0.35, clearcoat: 1 }));
        bo.position.set(x + 0.075, y + 0.022, z); g.add(bo);
        const cp = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.05, 14), std(cap, { emissiveIntensity: 0.4 })); cp.position.set(x + 0.075, y + 0.022 + hgt + 0.02, z); g.add(cp);
        x += 0.16; }
    }
  };
  shelf(-2.4, -0.78, 0.95, -1.08, ['B', 'T', 'T', 'B', 'T']); shelf(-2.4, -0.78, 1.45, -1.08, ['T', 'B', 'T', 'T', 'B']); shelf(-2.4, -0.78, 1.95, -1.08, ['B', 'B', 'T', 'T', 'B']); shelf(-2.4, -0.78, 2.45, -1.08, ['T', 'T', 'B', 'T']);
  shelf(1.3, 2.6, 1.25, -1.08, ['T', 'B', 'T']); shelf(1.3, 2.6, 1.75, -1.08, ['B', 'T', 'T']);
  // a low cabinet under the left shelves
  const cab = new THREE.Mesh(new RoundedBoxGeometry(1.6, 0.62, 0.4, 3, 0.04), std(0xf6d6ee, { emissiveIntensity: 0.35, roughness: 0.4 })); cab.position.set(-1.55, 0.31, -1.05); g.add(cab);
  // the round fluffy rug under the basket
  const rugT = canvasTex(256, 256, (c, w, h) => { const r = c.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 2); r.addColorStop(0, '#b98af2'); r.addColorStop(0.8, '#a77ae8'); r.addColorStop(0.93, '#c9a6f6'); r.addColorStop(1, 'rgba(201,166,246,0)'); c.fillStyle = r; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 3000; i++) { const a = rnd() * 7, d = rnd() * w * 0.48; c.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.18)' : 'rgba(110,60,170,0.18)'; c.fillRect(w / 2 + Math.cos(a) * d, h / 2 + Math.sin(a) * d, 2, 2); } });
  const rug = new THREE.Mesh(new THREE.CircleGeometry(0.62, 48), new THREE.MeshStandardMaterial({ map: rugT, transparent: true, roughness: 1, emissive: 0xffffff, emissiveMap: rugT, emissiveIntensity: 0.3, depthWrite: false }));
  rug.rotation.x = -Math.PI / 2; rug.scale.set(1.25, 0.85, 1); rug.position.set(0, 0.004, 0); rug.name = 'six2Rug'; g.add(rug);
  // folded towels on the floor in the foreground corners (references 01 / 02: yellow and lavender at the left, sky blue at the right)
  const fg = [];
  for (const [x, z, col, n] of [[-0.62, 1.9, 0xffd25a, 2], [-0.62, 1.9, 0xc6a2ff, 1], [0.55, 2.0, 0x8fd0ff, 2]]) {
    for (let k = 0; k < n; k++) { const t = new THREE.Mesh(new RoundedBoxGeometry(0.36, 0.09, 0.26, 3, 0.04), std(col, { map: towelT, emissiveIntensity: 0.45, roughness: 0.95 })); t.position.set(x + (rnd() - 0.5) * 0.04, 0.045 + (col === 0xc6a2ff ? 0.18 : k * 0.09), z); t.rotation.y = (rnd() - 0.5) * 0.4; g.add(t); fg.push(t); }
  }
  const shT = canvasTex(128, 128, (c, w, h) => { const r = c.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2); r.addColorStop(0, 'rgba(60,20,90,0.55)'); r.addColorStop(0.6, 'rgba(60,20,90,0.25)'); r.addColorStop(1, 'rgba(60,20,90,0)'); c.fillStyle = r; c.fillRect(0, 0, w, h); });
  const shadow = (sx, sz) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: shT, transparent: true, depthWrite: false })); m.rotation.x = -Math.PI / 2; m.scale.set(sx, sz, 1); m.renderOrder = 1; g.add(m); return m; };
  const shadows = { girl: shadow(0.7, 0.55), basket: shadow(0.75, 0.55), washer: shadow(1.5, 0.5) };
  shadows.washer.position.set(0.3, 0.006, 0.32);
  return { g, rug, win, sun, shadows };
}


// the scenes 1-2 light: less flat sky fill (the references' rich colour), a warmer key (called once by installSix2)
export function applyRoomLight(scene) {
  scene.traverse((o) => { if (o.isHemisphereLight) o.intensity *= 0.7; if (o.isDirectionalLight && o.color.r > 0.99 && o.color.b < 0.9) { o.color.setHex(0xffe2c0); o.intensity *= 1.1; } });
}
