// tripo1 (8 November 2026, session 57091b57, the user's standing Tripo authorization: "use Tripo wherever it provides a genuine
// visual improvement ... use the actual approved artwork as the reference for Tripo image-to-3D"): OPT-IN on top of level1,
// `?s3=...,level1,tripo1`. Nothing changes without it.
//   - enemy: board panel 09's grime ball (glossy navy-cobalt ball, angry pink eyes, dark brows, the pink mouth shape), Tripo P2
//            image-to-3D from the original board's own crop (Design/TripoDeliveries/2026-11-08_session_57091b57_Level1_assets/),
//            textures reduced for mobile and turned to face +Z (models/l1_enemy_tripo.glb), in place of the code-built ball.
//   (The castle generated from board panel 02 was REJECTED: a flat painted card, not a castle; models/castle.glb stays. See that
//   folder's README.)
// LOOKS ONLY, swapped after buildLevel1(): each enemy's hit box, lane, patrol, pop and timing are level1.js's own, untouched. The
// code-built meshes are hidden, not removed (level1.js still turns the ball, and the wobble on `body` moves the new look too).
// No random numbers. Report: window.__bwTripo1.
import * as THREE from 'three';

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const TRIPO1_ON = LIST.includes('level1') && LIST.includes('tripo1');
// scene07 (8 November 2026, session 57091b57, the user's Screen 07 mandate and reference kit,
// Design/ReferencePacks/2026-11-08_Screen07_Claude_Tripo_Reference_Kit_from_user/; master: Design/ApprovedScreens/09_Avoid_Enemies.png):
// OPT-IN `?s3=...,level1,scene07` (with tripo1 for the enemy). Pass 4 builds what Screen 07 itself shows (its crops 09, 10, 13), as REAL
// 3D geometry along the track (no picture): both sides of the water channel bordered by curved pink-lavender channel walls with yellow
// star ornaments and a gold top rail; on the upper left wall thick pink porthole rings with an iridescent bubble inside, gold rims; blue-
// gold gears high on the walls (the game's own gear.glb, lifted toward the board's pastel); big iridescent bubbles. (Passes 2-3 used the
// big rosette wheel brushes and towers: those are board 05's, not 07's, and their gold read orange-copper: removed.) Everything outside
// the three lanes; no credits; gears turn with her travel (no clock, no random numbers). Report: window.__bwTripo1.scene07.
export const SCENE07_ON = LIST.includes('level1') && LIST.includes('scene07');
export const SCENE07 = {
  files: { gear: 'models/gear.glb' },
  // [model, side (+1 = screen-left, -1 = screen-right), u, x (m from the centre line), h (m above the water), size (m), spin]
  items: [['gear', -1, 233, 1.6, 2.45, 1.4, -1], ['gear', 1, 241, 1.7, 2.45, 1.2, 1], ['gear', -1, 249, 1.6, 2.45, 1.4, 1], ['gear', 1, 258, 1.7, 2.45, 1.2, -1]],
  facing: 0.6,          // radians toward the camera from facing the centre line
  lift: 0x3a3366,       // a flat lavender added to the gears (the board's pastel, not the grade's orange-copper)
  walls: { u0: 216, u1: 268, x: 1.55, lean: 0.14, bottom: -0.25, top: 0.82, step: 0.5, rail: 0.075, starEvery: 1.4 },
  portholes: [[1, 233, 1.95, 1.9, 0.85], [1, 251, 1.95, 1.9, 0.85], [-1, 264, 1.95, 2.0, 0.75]],   // side, u, x, h, ring radius
  bubbles: { n: 18, u0: 222, u1: 264 }, drawDist: 34,
};
export const TRIPO1_FILES = { enemy: 'models/l1_enemy_tripo.glb' };
// the new look's diameter against the code ball's (its bounding sphere); (v2, the user's "Avoid Enemies!" mandate: "larger, raised so
// it clearly floats above the water, its lighting separating it from the tunnel") the look raised in its own frame so the whole ball
// clears the water (v1 sat half sunk: centre 0.36 m, radius ~0.73 m), a little larger, glossier, a faint navy self-light and a soft
// light halo behind it. The hit test stays level1.js's own (0.56 m from her centre, inside her 0.7 m lane).
export const TRIPO1_SIZE = { enemy: 1.3, float: 0.45, gloss: 0.7, env: 1.3, glow: 0.45, halo: 1.3, haloOpacity: 0.38 };

// Screen 07's channel walls (pink-lavender, yellow stars, a gold top rail) on both sides, and its pink porthole rings: real geometry along the track
function buildArchitecture(root, TR, env) {
  const Wl = SCENE07.walls, P = new THREE.Vector3();
  const wallTex = (() => { const c = document.createElement('canvas'); c.width = 256; c.height = 128; const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, '#f2c8ff'); gr.addColorStop(0.18, '#c58cf0'); gr.addColorStop(0.24, '#e9b6ff');
    gr.addColorStop(0.7, '#ff9ed8'); gr.addColorStop(1, '#d873c8'); g.fillStyle = gr; g.fillRect(0, 0, 256, 128);
    const star = (cx, cy, r) => { g.beginPath(); for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.45 : r; g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } g.closePath();
      g.fillStyle = '#ffd94a'; g.fill(); g.lineWidth = 3; g.strokeStyle = '#f0901e'; g.stroke(); };
    star(64, 74, 26); star(192, 74, 26);
    g.fillStyle = 'rgba(255,255,255,0.35)'; g.fillRect(0, 34, 256, 4);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.anisotropy = 4; return t; })();
  const wallM = new THREE.MeshStandardMaterial({ map: wallTex, roughness: 0.42, metalness: 0.2, envMap: env || null, envMapIntensity: 0.8,
    emissive: 0xffffff, emissiveMap: wallTex, emissiveIntensity: 0.32, side: THREE.DoubleSide });
  const goldM = new THREE.MeshStandardMaterial({ color: 0xffd76e, metalness: 1, roughness: 0.22, envMap: env || null, envMapIntensity: 1.4, emissive: 0x7a5414, emissiveIntensity: 0.55 });
  for (const side of [1, -1]) {
    const pos = [], uv = [], idx = [], rail = []; let k = 0;
    for (let u = Wl.u0; u <= Wl.u1 + 1e-6; u += Wl.step, k++) {
      TR.map(side * Wl.x, Wl.bottom, u, P); pos.push(P.x, P.y, P.z); uv.push((u - Wl.u0) / (Wl.starEvery * 2), 0);
      TR.map(side * (Wl.x + Wl.lean), Wl.top, u, P); pos.push(P.x, P.y, P.z); uv.push((u - Wl.u0) / (Wl.starEvery * 2), 1);
      rail.push(P.clone());
      if (k) { const a = 2 * (k - 1); idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    const wall = new THREE.Mesh(g, wallM); wall.name = 'scene07_channelWall'; root.add(wall);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rail), rail.length * 2, Wl.rail, 10, false), goldM); tube.name = 'scene07_goldRail'; root.add(tube);
  }
  const pinkM = new THREE.MeshStandardMaterial({ color: 0xff6cbc, metalness: 0.35, roughness: 0.33, envMap: env || null, envMapIntensity: 1.0, emissive: 0xff4fa8, emissiveIntensity: 0.3 });
  const deepM = new THREE.MeshStandardMaterial({ color: 0xb73a8e, metalness: 0.3, roughness: 0.4, emissive: 0x6a1550, emissiveIntensity: 0.4 });
  const glassM = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.05, envMap: env || null, envMapIntensity: 1.6, transparent: true, opacity: 0.45, iridescence: 1, iridescenceIOR: 1.3, clearcoat: 1, depthWrite: false });
  for (const [side, u, x, h, R] of SCENE07.portholes) {
    const g = new THREE.Group(); g.name = 'scene07_porthole';
    g.add(new THREE.Mesh(new THREE.TorusGeometry(R, R * 0.24, 18, 56), pinkM));
    const inner = new THREE.Mesh(new THREE.TorusGeometry(R * 0.74, R * 0.07, 10, 48), deepM); inner.position.z = R * 0.08; g.add(inner);
    for (const rr of [R * 1.25, R * 0.76]) { const rim = new THREE.Mesh(new THREE.TorusGeometry(rr, R * 0.045, 8, 56), goldM); rim.position.z = R * 0.1; g.add(rim); }
    const bub = new THREE.Mesh(new THREE.SphereGeometry(R * 0.62, 28, 18), glassM); bub.position.z = R * 0.15; g.add(bub);
    TR.map(side * x, h, u, g.position); TR.quaternion(u, g.quaternion); g.rotateY(side > 0 ? -Math.PI / 2 - SCENE07.facing : Math.PI / 2 + SCENE07.facing);
    root.add(g);
  }
}

async function applyScene07({ scene, loader, env, TR, camera, report }) {
  const load = (url) => new Promise((ok, no) => loader.load(url, ok, undefined, no));
  const names = Object.keys(SCENE07.files), models = {};
  (await Promise.all(names.map((k) => load(SCENE07.files[k])))).forEach((gl, i) => { models[names[i]] = gl.scene; });
  const root = new THREE.Group(); root.name = 'scene07'; scene.add(root);
  buildArchitecture(root, TR, env);
  const items = [], tmp = new THREE.Vector3();
  for (const [kind, side, u, x, h, size, spin] of SCENE07.items) {
    const src = models[kind]; const look = src.clone(true);
    look.traverse((o) => { if (o.isMesh) { o.castShadow = o.receiveShadow = false; for (const m of [].concat(o.material)) if (m.isMeshStandardMaterial) { if (env) { m.envMap = env; m.envMapIntensity = 1.2; } m.emissiveMap = null; m.emissive = new THREE.Color(SCENE07.lift); m.emissiveIntensity = 1; } } });
    const box = new THREE.Box3().setFromObject(look), sz = box.getSize(new THREE.Vector3()), mid = box.getCenter(new THREE.Vector3());
    const s = size / Math.max(sz.x, sz.y, sz.z); look.scale.setScalar(s); look.position.set(-mid.x * s, -mid.y * s, -mid.z * s);
    const turn = new THREE.Group(); turn.add(look);        // the gear turns about its own facing axis
    const holder = new THREE.Group(); holder.add(turn); holder.name = 'scene07_' + kind;
    TR.map(side * x, h, u, holder.position); TR.quaternion(u, holder.quaternion);
    holder.rotateY(side > 0 ? -Math.PI / 2 - SCENE07.facing : Math.PI / 2 + SCENE07.facing);   // face the centre line, turned toward the camera
    root.add(holder); items.push({ holder, turn, spin, pos: holder.position.clone() });
  }
  // big iridescent bubbles near the walls (board 07's large bubbles at its sides); a fixed pattern, no random numbers
  const bubM = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.06, metalness: 0, envMap: env || null, envMapIntensity: 1.6, transparent: true,
    opacity: 0.5, iridescence: 0.9, iridescenceIOR: 1.3, clearcoat: 1, depthWrite: false });
  const bubG = new THREE.SphereGeometry(1, 24, 16);
  for (let i = 0; i < SCENE07.bubbles.n; i++) {
    const f = (i + 0.5) / SCENE07.bubbles.n, side = i % 2 ? 1 : -1, r = 0.12 + 0.18 * ((i * 7) % 5) / 4;
    const b = new THREE.Mesh(bubG, bubM); b.scale.setScalar(r); b.name = 'scene07_bubble';
    TR.map(side * (1.15 + 0.5 * ((i * 3) % 4) / 3), 0.7 + 1.6 * ((i * 5) % 6) / 5, SCENE07.bubbles.u0 + f * (SCENE07.bubbles.u1 - SCENE07.bubbles.u0), b.position);
    root.add(b); items.push({ holder: b, turn: null, spin: 0, pos: b.position.clone() });
  }
  // per frame: draw only what is near the camera; turn the gears with her travel
  const prev = scene.onBeforeRender;
  scene.onBeforeRender = function (...a) {
    if (prev) prev.apply(this, a);
    const cam = camera.position, along = cam.x * 0.7 + cam.z * 0.7;
    for (const it of items) {
      it.holder.visible = it.pos.distanceTo(cam) < SCENE07.drawDist;
      if (it.spin && it.holder.visible) it.turn.rotation.z = along * 0.35 * it.spin;
    }
  };
  report.scene07 = { items: SCENE07.items.length, bubbles: SCENE07.bubbles.n };
}

export async function applyTripo1({ scene, loader, env, TR, camera }) {
  const report = { on: true, enemy: null, scene07: null, errors: [] };
  if (typeof window !== 'undefined') window.__bwTripo1 = report;
  if (SCENE07_ON && TR && camera) { try { await applyScene07({ scene, loader, env, TR, camera, report }); } catch (e) { report.errors.push('scene07: ' + ((e && e.message) || e)); } }
  if (!TRIPO1_ON) return report;
  try {
    const gl = await new Promise((ok, no) => loader.load(TRIPO1_FILES.enemy, ok, undefined, no));
    gl.scene.traverse((o) => { if (o.isMesh) for (const m of [].concat(o.material)) if (m.isMeshStandardMaterial) {
      if (env) { m.envMap = env; m.envMapIntensity = TRIPO1_SIZE.env; }
      m.roughness = TRIPO1_SIZE.gloss;   // multiplies the model's roughness map: the board's glossy highlights
      m.emissive = new THREE.Color(0x101a52); m.emissiveIntensity = TRIPO1_SIZE.glow;   // a faint navy self-light: not lost in the dark water
    } });
    // a soft light halo behind the ball (board 07's enemy stands out against the tunnel), drawn before it, never written to depth
    const haloTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
      const r = g.createRadialGradient(64, 64, 20, 64, 64, 64); r.addColorStop(0, 'rgba(235,225,255,1)'); r.addColorStop(0.55, 'rgba(200,190,255,0.55)'); r.addColorStop(1, 'rgba(180,170,255,0)');
      g.fillStyle = r; g.fillRect(0, 0, 128, 128); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
    const haloM = new THREE.SpriteMaterial({ map: haloTex, transparent: true, opacity: TRIPO1_SIZE.haloOpacity, depthWrite: false });
    const box = new THREE.Box3().setFromObject(gl.scene), size = box.getSize(new THREE.Vector3()), mid = box.getCenter(new THREE.Vector3());
    const holders = []; scene.traverse((o) => { if (o.name === 'l1Enemy') holders.push(o); });
    let n = 0;
    for (const holder of holders) {
      const body = holder.children[0]; if (!body || !body.children.length) continue;
      const ball = body.children[0]; if (!ball.geometry.boundingSphere) ball.geometry.computeBoundingSphere();
      const D = ball.geometry.boundingSphere.radius * 2 * TRIPO1_SIZE.enemy, s = D / Math.max(size.x, size.y, size.z);
      const look = gl.scene.clone(true); look.scale.setScalar(s); look.position.set(-mid.x * s, -mid.y * s + TRIPO1_SIZE.float, -mid.z * s); look.name = 'l1EnemyTripo';
      for (const c of body.children) c.visible = false;   // the code ball, eyes, pupils and brows
      const halo = new THREE.Sprite(haloM); halo.scale.setScalar(D * TRIPO1_SIZE.halo); halo.position.set(0, TRIPO1_SIZE.float, -D * 0.15); halo.renderOrder = -1; halo.name = 'l1EnemyHalo';
      body.add(halo, look); n++;
      report.enemy = { count: n, diameter: +D.toFixed(3), scale: +s.toFixed(4), float: TRIPO1_SIZE.float };
    }
  } catch (e) { report.errors.push('enemy: ' + ((e && e.message) || e)); }
  return report;
}
