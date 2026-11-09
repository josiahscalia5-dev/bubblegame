// six2 ROOM (session 9ee07777): the laundry room of the user's references 01 / 02 and the scenes 1-2 light. Owned by the lighting specialist; looks only.
// Pass 2 (the user's strict Scene 1 / Scene 2 brief: "the room looks too empty, flat and pale; the window is hidden"): deeper lavender-violet walls with
// panelling and a warm glow round the window, a multi-pane sunlit window (warm sky, garden foliage, cream frame, transoms) with royal-blue velvet curtains,
// a near shelving unit full of folded pastel towels and detergent bottles on the left, cubbies of towels at the back, a pilaster and a second window
// edge at the right, glossy pink-lavender tiles with painted reflections (the washer's pink, the window's warm light), a plush purple rug with a fluffy
// rim, firmer contact shadows, a warm window rim light, and less flat sky fill.
// Placed for the lead's refitted cameras: Scene 1 (0.154, 0.50, 3.697) -> (-0.297, 0.473, 1.181), fov 49.7; Scene 2 (0.584, 0.45, 4.193) ->
// (-0.214, 0.57, 0.462), fov 37.4 (aspect 864 / 1536). Reference 01 screen boxes are noted beside each piece.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { canvasTex, six2Sm as sm } from './opening_six2.js';

// a private generator for the room's textures and props (never the game's Math.random, and not the shared six2 sequence)
let seed = 0x7a11c3;
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

// the room's layout (world metres)
export const ROOM2 = {
  wallZ: -1.3,
  win: { c: [-0.19, 1.24, -1.258], w: 0.54, h: 1.04 },   // reference 01 x 0.60-0.81, y 0.215-0.44 (Scene 1)
  curL: { x: -0.55, w: 0.2 }, curR: { x: 0.15, w: 0.3 }, curZ: -1.18, rodY: 1.98, curBottom: 0.12,   // reference 01 x 0.53-0.60 and 0.78-0.90
  nearUnit: { x0: -2.3, x1: -1.22, z: -0.5, d: 0.36, boards: [0.35, 0.66, 0.97, 1.28, 1.63, 1.98], top: 2.34 },   // reference 01 x 0-0.2, y 0.13-0.62
  midUnit: { x0: -1.1, x1: -0.66, z: -1.12, d: 0.3, boards: [0.7, 1.08, 1.46, 1.84], top: 2.12 },   // reference 01 x 0.36-0.53, y 0.2-0.45
  rug: { rx: 0.64, rz: 0.45 },
  fgTowels: [[-0.53, 2.4, 0xffd25a, 0], [-0.55, 2.42, 0xb894ff, -1]],   // reference 01's yellow / lavender towels in the lower-left corner (Scene 1 only:
  // the right corner's blue towel cannot sit in both cameras' corners without covering Scene 2's foreground, so it is left out)
};

export function buildRoom2(env) {
  const g = new THREE.Group(); g.name = 'six2Room';
  const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, metalness: 0, envMap: env, envMapIntensity: 0.35, emissive: color, emissiveIntensity: 0.08, ...o });
  const L = ROOM2;
  // ---------------------------------------------------------------- the back wall: a world-mapped painted texture (7 x 4.4 m)
  const WX0 = -3.5, WX1 = 3.5, WY0 = -0.2, WY1 = 4.2;
  const wallT = canvasTex(1024, 644, (c, w, h) => {
    const X = (x) => (x - WX0) / (WX1 - WX0) * w, Y = (y) => (WY1 - y) / (WY1 - WY0) * h, M = w / (WX1 - WX0);
    const gr = c.createLinearGradient(0, 0, 0, h);
    for (const [y, col] of [[4.2, '#2e1d62'], [2.9, '#4b3190'], [2.2, '#6345ac'], [1.4, '#7a52bc'], [0.9, '#8a58bf'], [0.4, '#9a5cbc'], [-0.2, '#a060b6']]) gr.addColorStop(Y(y) / h, col);
    c.fillStyle = gr; c.fillRect(0, 0, w, h);
    // plaster mottling
    for (let i = 0; i < 700; i++) { const x = rnd() * w, y = rnd() * h, r = 8 + rnd() * 40; const rg = c.createRadialGradient(x, y, 0, x, y, r); rg.addColorStop(0, rnd() < 0.5 ? 'rgba(220,190,255,0.06)' : 'rgba(40,10,80,0.07)'); rg.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = rg; c.fillRect(x - r, y - r, 2 * r, 2 * r); }
    // vertical board panelling above the wainscot (grooves with a lit edge)
    for (let x = WX0; x < WX1; x += 0.3) { c.fillStyle = 'rgba(30,10,70,0.30)'; c.fillRect(X(x), Y(2.6), 2, Y(0.95) - Y(2.6)); c.fillStyle = 'rgba(225,200,255,0.13)'; c.fillRect(X(x) + 2, Y(2.6), 2, Y(0.95) - Y(2.6)); }
    // crown molding
    c.fillStyle = '#b48ee0'; c.fillRect(0, Y(2.72), w, Y(2.6) - Y(2.72)); c.fillStyle = 'rgba(30,10,70,0.45)'; c.fillRect(0, Y(2.6), w, 4); c.fillStyle = 'rgba(255,235,255,0.35)'; c.fillRect(0, Y(2.72), w, 2);
    // wainscot: pinker panels with moldings, a chair rail and a baseboard
    c.fillStyle = '#9c5cba'; c.fillRect(0, Y(0.92), w, Y(0) - Y(0.92));
    for (let x = WX0 + 0.05; x < WX1; x += 0.6) { const x0 = X(x), x1 = X(x + 0.5), y0 = Y(0.8), y1 = Y(0.18);
      c.fillStyle = 'rgba(255,215,250,0.22)'; c.fillRect(x0, y0, x1 - x0, 3); c.fillRect(x0, y0, 3, y1 - y0); c.fillStyle = 'rgba(40,10,70,0.35)'; c.fillRect(x0, y1 - 3, x1 - x0, 3); c.fillRect(x1 - 3, y0, 3, y1 - y0); }
    c.fillStyle = '#d29ad8'; c.fillRect(0, Y(0.97), w, Y(0.9) - Y(0.97)); c.fillStyle = 'rgba(40,10,70,0.4)'; c.fillRect(0, Y(0.9), w, 4); c.fillStyle = 'rgba(255,240,255,0.45)'; c.fillRect(0, Y(0.97), w, 2);
    c.fillStyle = '#c48ccc'; c.fillRect(0, Y(0.12), w, Y(0) - Y(0.12)); c.fillStyle = 'rgba(255,235,255,0.4)'; c.fillRect(0, Y(0.12), w, 2);
    // the window's warm glow on the wall round it, and the dimmer far-left corner and ceiling
    const wc = L.win.c, rg = c.createRadialGradient(X(wc[0]), Y(wc[1] + 0.15), 0.1 * M, X(wc[0]), Y(wc[1] + 0.15), 1.5 * M);
    rg.addColorStop(0, 'rgba(255,196,150,0.75)'); rg.addColorStop(0.35, 'rgba(255,170,160,0.38)'); rg.addColorStop(1, 'rgba(255,160,190,0)'); c.fillStyle = rg; c.fillRect(0, 0, w, h);
    const lg = c.createLinearGradient(X(-2.6), 0, X(-1.2), 0); lg.addColorStop(0, 'rgba(20,6,50,0.35)'); lg.addColorStop(1, 'rgba(20,6,50,0)'); c.fillStyle = lg; c.fillRect(0, 0, X(-1.2), h);
  });
  const wallM = std(0xffffff, { map: wallT, emissiveMap: wallT, emissiveIntensity: 0.1, roughness: 0.85 });
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(WX1 - WX0, WY1 - WY0), wallM); wall.position.set((WX0 + WX1) / 2, (WY0 + WY1) / 2, L.wallZ); g.add(wall);
  const side = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 4.4), std(0x7a52bc, { emissiveIntensity: 0.06, roughness: 0.85 })); side.rotation.y = Math.PI / 2; side.position.set(-2.45, 2.0, 0.9); g.add(side);
  // ---------------------------------------------------------------- the floor: glossy pink-lavender tiles with painted reflections
  const floorT = canvasTex(512, 512, (c, w, h) => {
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) { const x = i * 256, y = j * 256, lg = c.createLinearGradient(x, y, x + 256, y + 256);
      const a = (i + j) % 2 ? ['#c27ac2', '#b06bb8'] : ['#b873c0', '#a865b4']; lg.addColorStop(0, a[0]); lg.addColorStop(1, a[1]); c.fillStyle = lg; c.fillRect(x, y, 256, 256);
      for (let k = 0; k < 60; k++) { c.fillStyle = rnd() < 0.5 ? 'rgba(255,220,255,0.05)' : 'rgba(60,20,90,0.05)'; c.fillRect(x + rnd() * 256, y + rnd() * 256, 6 + rnd() * 30, 2 + rnd() * 8); } }
    c.fillStyle = '#e8c4ec'; for (let i = 0; i <= 2; i++) { c.fillRect(i * 256 - 3, 0, 6, h); c.fillRect(0, i * 256 - 3, w, 6); }
    c.fillStyle = 'rgba(90,40,120,0.35)'; for (let i = 0; i <= 2; i++) { c.fillRect(i * 256 + 3, 0, 2, h); c.fillRect(0, i * 256 + 3, w, 2); }
  });
  floorT.wrapS = floorT.wrapT = THREE.RepeatWrapping; floorT.repeat.set(9 / 1.1, 7 / 1.1);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(9, 7), std(0xffffff, { map: floorT, emissiveMap: floorT, emissiveIntensity: 0.06, roughness: 0.16, metalness: 0.05, envMapIntensity: 0.9 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, 1.2); g.add(floor);
  // reflections painted on the floor (soft streaks: the washer's pink below it, the window's warm light below the window)
  const streakT = (r, gg, b) => canvasTex(128, 256, (c, w, h) => { for (let i = 0; i < 26; i++) { const x = rnd() * w, ww = 4 + rnd() * 16, a = 0.12 + rnd() * 0.3, lg = c.createLinearGradient(0, 0, 0, h);
    lg.addColorStop(0, `rgba(${r},${gg},${b},${a})`); lg.addColorStop(0.55 + rnd() * 0.3, `rgba(${r},${gg},${b},0)`); c.fillStyle = lg; c.fillRect(x - ww / 2, 0, ww, h); }
    const ed = c.createLinearGradient(0, 0, w, 0); ed.addColorStop(0, 'rgba(0,0,0,1)'); ed.addColorStop(0.15, 'rgba(0,0,0,0)'); ed.addColorStop(0.85, 'rgba(0,0,0,0)'); ed.addColorStop(1, 'rgba(0,0,0,1)'); c.globalCompositeOperation = 'destination-out'; c.fillStyle = ed; c.fillRect(0, 0, w, h); });
  const refl = (tex, x, z, w, d, op, add = false) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: op, depthWrite: false, blending: add ? THREE.AdditiveBlending : THREE.NormalBlending }));
    m.rotation.x = -Math.PI / 2; m.position.set(x, 0.003, z + d / 2); m.renderOrder = 1; g.add(m); return m; };
  refl(streakT(255, 110, 200), 0.32, 0.32, 1.05, 0.9, 0.55);   // the washer's pink (its front is at z ~0.3)
  refl(streakT(255, 214, 170), L.win.c[0], -1.28, 0.62, 1.1, 0.6, true);   // the window's warm light
  refl(streakT(120, 140, 255), L.curL.x, -1.2, 0.2, 0.8, 0.35);   // the curtains' blue
  refl(streakT(120, 140, 255), L.curR.x, -1.2, 0.3, 0.8, 0.35);
  // ---------------------------------------------------------------- the window: a multi-pane sunlit window (cream frame, a central mullion, two transoms)
  const skyT = (sx) => canvasTex(256, 512, (c, w, h) => {
    const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#fff2cf'); gr.addColorStop(0.3, '#ffe4a4'); gr.addColorStop(0.55, '#f0d688'); gr.addColorStop(1, '#d9c070'); c.fillStyle = gr; c.fillRect(0, 0, w, h);
    const sun = c.createRadialGradient(w * sx, h * 0.16, 2, w * sx, h * 0.16, w * 0.75); sun.addColorStop(0, 'rgba(255,253,236,1)'); sun.addColorStop(0.4, 'rgba(255,240,200,0.6)'); sun.addColorStop(1, 'rgba(255,230,180,0)'); c.fillStyle = sun; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 40; i++) { const y = h * (0.42 + rnd() * 0.36), r = 18 + rnd() * 42; c.fillStyle = ['rgba(185,200,106,0.55)', 'rgba(150,182,88,0.5)', 'rgba(222,212,122,0.55)', 'rgba(132,166,76,0.45)'][i % 4]; c.beginPath(); c.arc(rnd() * w, y, r, 0, 7); c.fill(); }
    for (let i = 0; i < 26; i++) { const y = h * (0.74 + rnd() * 0.26), r = 22 + rnd() * 44; c.fillStyle = ['rgba(104,142,64,0.6)', 'rgba(128,160,72,0.55)', 'rgba(92,128,58,0.55)'][i % 3]; c.beginPath(); c.arc(rnd() * w, y, r, 0, 7); c.fill(); }
    for (let i = 0; i < 70; i++) { c.fillStyle = `rgba(255,248,205,${0.25 + rnd() * 0.4})`; c.beginPath(); c.arc(rnd() * w, h * (0.35 + rnd() * 0.6), 2 + rnd() * 6, 0, 7); c.fill(); }
  });
  const frameM = std(0xf6d8d6, { emissive: 0xffc8a0, emissiveIntensity: 0.22, roughness: 0.4 });
  const makeWindow = (c, W, H, sx, name) => {
    const win = new THREE.Group(); win.name = name; win.position.set(...c); g.add(win);
    const sky = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ map: skyT(sx), color: new THREE.Color(1.0, 0.96, 0.88) })); win.add(sky);
    const bars = [[W + 0.07, 0.06, 0, H / 2], [W + 0.07, 0.06, 0, -H / 2], [0.06, H + 0.06, -W / 2, 0], [0.06, H + 0.06, W / 2, 0], [0.034, H, 0, 0], [W, 0.034, 0, H * 0.28], [W, 0.034, 0, -H * 0.11]];
    for (const [bw, bh, x, y] of bars) { const b = new THREE.Mesh(new RoundedBoxGeometry(bw, bh, 0.06, 2, 0.012), frameM); b.position.set(x, y, 0.03); win.add(b); }
    const sill = new THREE.Mesh(new RoundedBoxGeometry(W + 0.2, 0.05, 0.18, 2, 0.015), frameM); sill.position.set(0, -H / 2 - 0.045, 0.07); win.add(sill);
    // a soft glow spilling over the frame (behind the curtains)
    const haloT = canvasTex(128, 128, (cc, w, h) => { const r = cc.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2); r.addColorStop(0, 'rgba(255,214,160,0.9)'); r.addColorStop(0.55, 'rgba(255,190,150,0.35)'); r.addColorStop(1, 'rgba(255,170,160,0)'); cc.fillStyle = r; cc.fillRect(0, 0, w, h); });
    const halo = new THREE.Mesh(new THREE.PlaneGeometry(W * 2.0, H * 1.5), new THREE.MeshBasicMaterial({ map: haloT, transparent: true, opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending })); halo.position.z = 0.07; win.add(halo);
    return win;
  };
  const win = makeWindow(L.win.c, L.win.w, L.win.h, 0.7, 'six2Window');
  { const dish = new THREE.Mesh(new RoundedBoxGeometry(0.14, 0.05, 0.09, 2, 0.02), std(0xff9ad0, { emissiveIntensity: 0.15 })); dish.position.set(L.win.c[0] - 0.12, L.win.c[1] - L.win.h / 2 - 0.0, L.win.c[2] + 0.08); g.add(dish); }
  makeWindow([0.78, 1.3, -1.258], 0.5, 1.0, 0.3, 'six2Window2');   // the second window's edge at the right (reference 01 x 0.97-1.0)
  const pil = new THREE.Mesh(new RoundedBoxGeometry(0.12, 2.75, 0.1, 2, 0.02), std(0xc9a6ea, { emissiveIntensity: 0.1, roughness: 0.6 })); pil.position.set(0.42, 1.37, -1.24); g.add(pil);   // a pilaster (x 0.92-0.96)
  // warm light from the window: a point light in front of it and a soft rim light from it across the room (the references' warm edge light)
  const sun = new THREE.PointLight(0xffc890, 3.2, 4.2, 1.6); sun.position.set(L.win.c[0], 1.3, -0.75); g.add(sun);
  const winKey = new THREE.DirectionalLight(0xffcf9a, 0.9); winKey.position.set(L.win.c[0], 2.3, -1.2); winKey.target.position.set(-0.35, 0.5, 1.5); g.add(winKey, winKey.target);
  const rayM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.0, 0.86, 0.62), transparent: true, opacity: 0.045, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  for (let i = 0; i < 3; i++) { const r = new THREE.Mesh(new THREE.PlaneGeometry(0.16 + i * 0.05, 1.7), rayM); r.position.set(L.win.c[0] - 0.12 + i * 0.13, 0.95, -0.95 + i * 0.06); r.rotation.set(0.3, 0, 0.32); g.add(r); }
  // ---------------------------------------------------------------- blue velvet curtains on a gold rod, gathered by tiebacks
  const curT = canvasTex(128, 512, (c, w, h) => {
    for (let x = 0; x < w; x++) { const t = x / w, f = 0.5 + 0.5 * Math.sin(t * Math.PI * 2 * 3 - 0.6), k = Math.pow(f, 1.4);
      const r = 28 + (104 - 28) * k, gg = 42 + (132 - 42) * k, b = 150 + (236 - 150) * k; c.fillStyle = `rgb(${r | 0},${gg | 0},${b | 0})`; c.fillRect(x, 0, 1, h); }
    for (let x = 0; x < w; x += 1) { const t = x / w, s = Math.max(0, Math.sin(t * Math.PI * 2 * 3 - 0.2)); if (s > 0.92) { c.fillStyle = `rgba(190,205,255,${(s - 0.92) * 4})`; c.fillRect(x, 0, 1, h); } }
    const vg = c.createLinearGradient(0, 0, 0, h); vg.addColorStop(0, 'rgba(10,10,60,0.25)'); vg.addColorStop(0.2, 'rgba(10,10,60,0)'); vg.addColorStop(0.8, 'rgba(10,10,60,0)'); vg.addColorStop(1, 'rgba(10,10,60,0.35)'); c.fillStyle = vg; c.fillRect(0, 0, w, h);
  });
  const curM = std(0xffffff, { map: curT, emissive: 0x2a3cb0, emissiveIntensity: 0.18, roughness: 0.72, envMapIntensity: 0.25, side: THREE.DoubleSide });
  const goldM = std(0xffcf6a, { metalness: 0.9, roughness: 0.25, emissive: 0x8a5a10, emissiveIntensity: 0.35, envMapIntensity: 1.2 });
  const curH = L.rodY - L.curBottom, tieY = 0.95;
  for (const [cx, cw, outer] of [[L.curL.x, L.curL.w, -1], [L.curR.x, L.curR.w, 1]]) {
    const cg = new THREE.PlaneGeometry(cw * 1.5, curH, 30, 16), p = cg.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i) + curH / 2 + L.curBottom, u = x / (cw * 1.5) + 0.5;
      const gth = 1 - 0.42 * Math.exp(-(((y - tieY) / 0.42) ** 2)), xo = outer * cw * 0.75, nx = xo + (x - xo) * gth * (0.62 + 0.08 * (y > tieY ? 1 : 0));
      p.setX(i, nx); p.setZ(i, 0.035 * Math.sin(u * Math.PI * 2 * 3 - 0.6) * (0.7 + 0.5 * (1 - gth))); }
    cg.computeVertexNormals(); const cm = new THREE.Mesh(cg, curM); cm.position.set(cx, L.curBottom + curH / 2, L.curZ); g.add(cm);
    const tb = new THREE.Mesh(new RoundedBoxGeometry(cw * 0.7, 0.04, 0.09, 2, 0.015), goldM); tb.position.set(cx + outer * cw * 0.05, tieY, L.curZ + 0.03); g.add(tb);
  }
  const rodX0 = L.curL.x - L.curL.w, rodX1 = L.curR.x + L.curR.w;
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, rodX1 - rodX0, 10), goldM); rod.rotation.z = Math.PI / 2; rod.position.set((rodX0 + rodX1) / 2, L.rodY + 0.02, L.curZ + 0.02); g.add(rod);
  for (const x of [rodX0, rodX1]) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.035, 14, 10), goldM); f.position.set(x, L.rodY + 0.02, L.curZ + 0.02); g.add(f); }
  // ---------------------------------------------------------------- shelving: folded pastel towels and detergent bottles (instanced towels)
  const terry = (base, dark, light) => canvasTex(128, 128, (c, w, h) => { c.fillStyle = base; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 1800; i++) { c.fillStyle = rnd() < 0.5 ? light : dark; c.globalAlpha = 0.2 + rnd() * 0.25; c.beginPath(); c.arc(rnd() * w, rnd() * h, 0.8 + rnd() * 1.6, 0, 7); c.fill(); }
    c.globalAlpha = 0.45; c.fillStyle = light; c.fillRect(0, h * 0.8, w, h * 0.06); c.globalAlpha = 1; });
  const towelTex = terry('#ffffff', '#cdbde6', '#ffffff');
  const towelCols = [0xb48cf0, 0xff96cc, 0x9cc4ff, 0xc9a2ff, 0xffb8dc, 0x8fd8e8, 0xa47ce8];
  const towelMats = towelCols.map((col) => std(col, { map: towelTex, emissiveIntensity: 0.12, roughness: 0.95, envMapIntensity: 0.2 }));
  const towelGeo = { s: new RoundedBoxGeometry(0.34, 0.075, 0.26, 3, 0.03), l: new RoundedBoxGeometry(0.42, 0.085, 0.3, 3, 0.035) };
  const inst = new Map();   // [geometry key, material index] -> matrices
  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler();
  const addTowel = (key, mi, x, y, z, ry) => { const k = key + mi; if (!inst.has(k)) inst.set(k, { key, mi, list: [] }); inst.get(k).list.push(_m.compose(new THREE.Vector3(x, y, z), _q.setFromEuler(_e.set(0, ry, 0)), new THREE.Vector3(1, 1, 1)).clone()); };
  const bottleCols = [[0xff7cc4, 0xffffff], [0xc8a0ff, 0xffcf6a], [0x86b4ff, 0xffffff], [0xf2a6ff, 0xffcf6a], [0xff9ad6, 0xffcf6a]];
  const bottleMats = bottleCols.map(([b]) => new THREE.MeshPhysicalMaterial({ color: b, roughness: 0.12, metalness: 0, envMap: env, envMapIntensity: 1.1, emissive: b, emissiveIntensity: 0.14, clearcoat: 1, clearcoatRoughness: 0.1 }));
  const capMats = { 0xffffff: std(0xfff4fb, { emissiveIntensity: 0.15, roughness: 0.3 }), 0xffcf6a: goldM };
  const labelT = canvasTex(128, 128, (c, w, h) => { c.fillStyle = '#fff6fb'; c.beginPath(); c.roundRect(8, 14, w - 16, h - 28, 18); c.fill(); c.fillStyle = '#f2b640'; c.beginPath(); c.ellipse(w / 2, h * 0.58, 20, 16, 0, 0, 7); c.fill();
    for (const [x, y] of [[-24, -14], [-9, -28], [9, -28], [24, -14]]) { c.beginPath(); c.ellipse(w / 2 + x, h * 0.58 + y, 7, 9, 0, 0, 7); c.fill(); } });
  const labelM = std(0xffffff, { map: labelT, transparent: true, emissiveIntensity: 0.12, roughness: 0.4 });
  const bottleGeo = new Map();
  const bottle = (x, y, z, hgt, rad, ci, jug = false) => {
    const k = hgt.toFixed(2) + rad.toFixed(2) + jug; if (!bottleGeo.has(k)) { const sh = jug ? [[0, 0], [rad, 0], [rad * 1.08, hgt * 0.06], [rad * 1.08, hgt * 0.74], [rad * 0.62, hgt * 0.86], [rad * 0.34, hgt * 0.9], [rad * 0.34, hgt], [0, hgt]] : [[0, 0], [rad, 0], [rad * 1.1, hgt * 0.08], [rad * 1.1, hgt * 0.68], [rad * 0.7, hgt * 0.83], [rad * 0.4, hgt * 0.9], [rad * 0.4, hgt], [0, hgt]];
      bottleGeo.set(k, new THREE.LatheGeometry(sh.map(([a, b]) => new THREE.Vector2(a, b)), 22)); }
    const [, cap] = bottleCols[ci]; const bo = new THREE.Mesh(bottleGeo.get(k), bottleMats[ci]); bo.position.set(x, y, z); g.add(bo);
    const cp = new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.44, rad * 0.44, hgt * 0.14, 14), capMats[cap]); cp.position.set(x, y + hgt * 1.04, z); g.add(cp);
    if (jug || rnd() < 0.6) { const lb = new THREE.Mesh(new THREE.PlaneGeometry(rad * 1.5, rad * 1.5), labelM); lb.position.set(x, y + hgt * 0.4, z + rad * 1.12); g.add(lb); }
  };
  const unitM = std(0xead2f2, { emissiveIntensity: 0.1, roughness: 0.45 }), backM = std(0x5a3c98, { emissiveIntensity: 0.08, roughness: 0.8 });
  const unit = (U, items) => {
    const { x0, x1, z, d, boards, top } = U, wdt = x1 - x0, cx = (x0 + x1) / 2;
    const back = new THREE.Mesh(new THREE.BoxGeometry(wdt, top, 0.02), backM); back.position.set(cx, top / 2, z - d / 2); g.add(back);
    for (const x of [x0, x1]) { const s = new THREE.Mesh(new RoundedBoxGeometry(0.045, top, d + 0.02, 2, 0.012), unitM); s.position.set(x, top / 2, z); g.add(s); }
    const cr = new THREE.Mesh(new RoundedBoxGeometry(wdt + 0.1, 0.06, d + 0.06, 2, 0.015), unitM); cr.position.set(cx, top, z); g.add(cr);
    boards.forEach((by, bi) => {
      const b = new THREE.Mesh(new RoundedBoxGeometry(wdt, 0.035, d, 2, 0.01), unitM); b.position.set(cx, by - 0.0175, z); g.add(b);
      let x = x0 + 0.04;
      for (const it of items[bi] || []) {
        if (it[0] === 'T') { const big = it[1] === 'L', tw = big ? 0.42 : 0.34, th = big ? 0.085 : 0.075, n = 2 + Math.floor(rnd() * 3); if (x + tw > x1 - 0.02) break;
          const mi = Math.floor(rnd() * towelCols.length); for (let k = 0; k < n; k++) addTowel(big ? 'l' : 's', (mi + (k === n - 1 && rnd() < 0.4 ? 1 : 0)) % towelCols.length, x + tw / 2 + (rnd() - 0.5) * 0.02, by + th / 2 + k * th * 0.96, z + 0.02, (rnd() - 0.5) * 0.08);
          x += tw + 0.02; }
        else { const jug = it === 'J', hgt = jug ? 0.3 : 0.16 + rnd() * 0.08, rad = jug ? 0.085 : 0.05 + rnd() * 0.012; if (x + rad * 2.2 > x1 - 0.02) break;
          bottle(x + rad * 1.1, by, z + 0.03, hgt, rad, Math.floor(rnd() * bottleCols.length), jug); x += rad * 2.3 + 0.02; }
      }
    });
  };
  // the near unit at the left (reference 01: big detergent jugs on the top shelf, folded towels below, bottles on the counter, a cabinet)
  const N = L.nearUnit;
  unit(N, [['B', 'B', 'J', 'B'], ['TL', 'TL'], ['B', 'TL', 'B'], ['TL', 'TL'], ['J', 'B', 'J', 'J'], ['TL', 'TL']]);
  { const cab = new THREE.Mesh(new RoundedBoxGeometry(N.x1 - N.x0 - 0.04, N.boards[0] - 0.04, 0.04, 2, 0.01), std(0xdcb8ec, { emissiveIntensity: 0.1, roughness: 0.4 })); cab.position.set((N.x0 + N.x1) / 2, N.boards[0] / 2, N.z + N.d / 2 - 0.01); g.add(cab);
    for (const x of [-0.12, 0.12]) { const kn = new THREE.Mesh(new THREE.SphereGeometry(0.018, 12, 8), goldM); kn.position.set((N.x0 + N.x1) / 2 + x, N.boards[0] * 0.6, N.z + N.d / 2 + 0.02); g.add(kn); } }
  // the cubbies at the back (reference 01 x 0.36-0.53) and a wall shelf between (reference 01 x 0.13-0.36, y 0.19-0.25)
  unit(L.midUnit, [['T'], ['T'], ['T'], ['T']]);
  { const sh = new THREE.Mesh(new RoundedBoxGeometry(0.62, 0.035, 0.26, 2, 0.01), unitM); sh.position.set(-1.42, 1.72, -1.15); g.add(sh);
    let x = -1.71; for (let i = 0; i < 2; i++) { const mi = Math.floor(rnd() * towelCols.length), n = 2 + Math.floor(rnd() * 2); for (let k = 0; k < n; k++) addTowel('s', mi, x + 0.17, 1.74 + 0.0375 + k * 0.072, -1.13, (rnd() - 0.5) * 0.08); x += 0.37; } }
  // folded towels on the floor in the lower-left foreground (Scene 1)
  for (const [x, z, col, k] of L.fgTowels) { const m = std(col, { map: towelTex, emissiveIntensity: 0.14, roughness: 0.95, envMapIntensity: 0.2 });
    for (let j = 0; j < 2; j++) { const t = new THREE.Mesh(towelGeo.l, m); t.position.set(x + (j - 0.5) * 0.03, 0.043 + (k < 0 ? 0 : 0.17) + j * 0.082, z + (j - 0.5) * 0.02); t.rotation.y = 0.25 + j * 0.12; g.add(t); } }
  for (const { key, mi, list } of inst.values()) { const im = new THREE.InstancedMesh(towelGeo[key], towelMats[mi], list.length); list.forEach((m, i) => im.setMatrixAt(i, m)); im.instanceMatrix.needsUpdate = true; im.frustumCulled = false; g.add(im); }
  // ---------------------------------------------------------------- the plush purple rug under the basket (a fluffy raised rim)
  const rugT = canvasTex(512, 512, (c, w, h) => {
    const r = c.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 2); r.addColorStop(0, '#9a62dc'); r.addColorStop(0.75, '#8e58d4'); r.addColorStop(0.9, '#b48af0'); r.addColorStop(0.97, 'rgba(196,160,246,0.9)'); r.addColorStop(1, 'rgba(196,160,246,0)'); c.fillStyle = r; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) { const a = rnd() * 6.283, d = Math.sqrt(rnd()) * w * 0.47, x = w / 2 + Math.cos(a) * d, y = h / 2 + Math.sin(a) * d, l = 2 + rnd() * 5, b = rnd() * 6.283;
      c.strokeStyle = rnd() < 0.5 ? 'rgba(225,200,255,0.28)' : 'rgba(80,30,140,0.3)'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(b) * l, y + Math.sin(b) * l); c.stroke(); }
    c.globalCompositeOperation = 'destination-out'; for (let i = 0; i < 900; i++) { const a = rnd() * 6.283, d = w * (0.47 + rnd() * 0.04); c.fillStyle = 'rgba(0,0,0,0.6)'; c.beginPath(); c.arc(w / 2 + Math.cos(a) * d, h / 2 + Math.sin(a) * d, 2 + rnd() * 3, 0, 7); c.fill(); }
  });
  const rugM = new THREE.MeshStandardMaterial({ map: rugT, transparent: true, roughness: 1, envMap: env, envMapIntensity: 0.25, emissive: 0xffffff, emissiveMap: rugT, emissiveIntensity: 0.1, depthWrite: false });
  const rug = new THREE.Mesh(new THREE.CircleGeometry(0.5, 64), rugM); rug.rotation.x = -Math.PI / 2; rug.scale.set(L.rug.rx / 0.5, L.rug.rz / 0.5, 1); rug.position.set(0, 0.004, 0); rug.name = 'six2Rug'; rug.renderOrder = 2; g.add(rug);
  const rimT = canvasTex(256, 32, (c, w, h) => { c.fillStyle = '#b088ee'; c.fillRect(0, 0, w, h); for (let i = 0; i < 1400; i++) { c.fillStyle = rnd() < 0.5 ? 'rgba(235,215,255,0.4)' : 'rgba(90,40,150,0.35)'; c.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 2, 2 + rnd() * 4); } });
  rimT.wrapS = THREE.RepeatWrapping; rimT.repeat.set(12, 1);
  const rugRim = new THREE.Mesh(new THREE.TorusGeometry(0.47, 0.03, 8, 72), std(0xffffff, { map: rimT, emissiveMap: rimT, emissiveIntensity: 0.1, roughness: 1, envMapIntensity: 0.2 }));
  rugRim.scale.set(1, 1, 0.7); rugRim.position.z = 0.012; rug.add(rugRim);
  // ---------------------------------------------------------------- contact shadows (the girl's and the basket's are moved by the timeline)
  const shT = canvasTex(128, 128, (c, w, h) => { const r = c.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2); r.addColorStop(0, 'rgba(46,12,76,0.72)'); r.addColorStop(0.55, 'rgba(46,12,76,0.32)'); r.addColorStop(1, 'rgba(46,12,76,0)'); c.fillStyle = r; c.fillRect(0, 0, w, h); });
  const shadow = (sx, sz) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: shT, transparent: true, depthWrite: false })); m.rotation.x = -Math.PI / 2; m.scale.set(sx, sz, 1); m.renderOrder = 3; g.add(m); return m; };
  const shadows = { girl: shadow(0.7, 0.55), basket: shadow(0.85, 0.6), washer: shadow(1.4, 0.55) };
  shadows.washer.position.set(0.3, 0.006, 0.3);
  { const s = shadow(1.25, 0.5); s.position.set((N.x0 + N.x1) / 2, 0.006, N.z + 0.05); }   // under the near unit
  return { g, rug, win, sun, shadows };
}

// the scenes 1-2 light: less flat sky fill than the opening's (the references' richer colour and contrast, ~20 % less fill than pass 1), a warmer key
// (called once by installSix2, before buildRoom2: the room's own window lights are not scaled)
export function applyRoomLight(scene) {
  scene.traverse((o) => { if (o.isHemisphereLight) o.intensity *= 0.56; if (o.isDirectionalLight && o.color.r > 0.99 && o.color.b < 0.9) { o.color.setHex(0xffe2c0); o.intensity *= 1.12; } });
}
