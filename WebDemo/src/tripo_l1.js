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
// OPT-IN `?s3=...,level1,scene07` (with tripo1 for the enemy). REAL 3D geometry along the track (no picture), only what Screen 07 shows:
// pass 5 (the user's review of pass 4: "replace the incorrect-looking copper gear, straight side railings and overly dominant plain blue
// tunnel"): ROUND pink-lavender star ENCLOSURES with gold rims (kit crop 10: chunky tubs at the water's edge, not straight rails), alternating
// along both sides; large pink PORTHOLE rings with gold rims and an iridescent bubble on both upper walls (crop 09), covering more of the
// plain tube; BLUE GEARS with a lavender rim and a gold hub (the board's top corners), built here, not the copper gear.glb; big iridescent
// bubbles; and, only while the camera is in this stretch, the game's particle bursts (sparkles, droplets) at 55 % size (the user: "rich
// saturated blue water without excessive white sparkles"; the exact previous value restored outside). No credits; no random numbers.
export const SCENE07_ON = LIST.includes('level1') && LIST.includes('scene07');
export const SCENE07 = {
  facing: 0.6,   // radians toward the camera from facing the centre line
  // [side (+1 = screen-left, -1 = screen-right), u, radius, wall height, inner edge x (m from the centre line)]
  enclosures: [[-1, 228, 1.25, 1.0, 1.5], [1, 233, 1.15, 0.95, 1.5], [-1, 239, 1.3, 1.05, 1.5], [1, 245, 1.2, 1.0, 1.5],
    [-1, 251, 1.25, 1.0, 1.5], [1, 257, 1.15, 0.95, 1.5], [-1, 263, 1.3, 1.05, 1.5]],
  // [side, u, x, h, ring radius]
  portholes: [[1, 230, 1.9, 1.95, 1.0], [-1, 236, 1.95, 2.05, 0.9], [1, 243, 1.9, 1.95, 1.0], [-1, 249, 1.95, 2.05, 0.9],
    [1, 256, 1.9, 1.95, 1.0], [-1, 262, 1.95, 2.05, 0.9]],
  // [side, u, x, h, radius, spin]
  gears: [[-1, 232, 1.45, 2.65, 0.75, -1], [1, 238, 1.5, 2.6, 0.65, 1], [-1, 245, 1.45, 2.65, 0.75, 1], [1, 252, 1.5, 2.6, 0.65, -1], [-1, 259, 1.45, 2.65, 0.75, -1]],
  bubbles: { n: 18, u0: 222, u1: 264 }, drawDist: 34,
  particles: 0.55, stretch: [222, 268],   // the bursts' size while the camera is in this stretch (u)
};
export const TRIPO1_FILES = { enemy: 'models/l1_enemy_tripo.glb' };
// the new look's diameter against the code ball's (its bounding sphere); (v2, the user's "Avoid Enemies!" mandate: "larger, raised so
// it clearly floats above the water, its lighting separating it from the tunnel") the look raised in its own frame so the whole ball
// clears the water (v1 sat half sunk: centre 0.36 m, radius ~0.73 m), a little larger, glossier, a faint navy self-light and a soft
// light halo behind it. The hit test stays level1.js's own (0.56 m from her centre, inside her 0.7 m lane).
export const TRIPO1_SIZE = { enemy: 1.3, float: 0.45, gloss: 0.7, env: 1.3, glow: 0.45, halo: 1.3, haloOpacity: 0.38 };

// Screen 07's architecture as real geometry along the track: round star enclosures, pink porthole rings, blue gears (pass 5)
function starTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 128; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, '#f6d2ff'); gr.addColorStop(0.16, '#c58cf0'); gr.addColorStop(0.22, '#ecbcff');
  gr.addColorStop(0.68, '#ff9fd9'); gr.addColorStop(1, '#cf6cc0'); g.fillStyle = gr; g.fillRect(0, 0, 256, 128);
  const star = (cx, cy, r) => { g.beginPath(); for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.45 : r; g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } g.closePath();
    g.fillStyle = '#ffd94a'; g.fill(); g.lineWidth = 3; g.strokeStyle = '#f0901e'; g.stroke(); };
  star(64, 76, 24); star(192, 76, 24); g.fillStyle = 'rgba(255,255,255,0.35)'; g.fillRect(0, 30, 256, 4);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.anisotropy = 4; return t;
}
function gearGeometry(R, teeth = 10) {
  const sh = new THREE.Shape(), n = teeth * 4;
  for (let i = 0; i <= n; i++) { const a = (i / n) * Math.PI * 2, r = (i % 4 < 2) ? R : R * 0.8; const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i) sh.lineTo(x, y); else sh.moveTo(x, y); }
  const hole = new THREE.Path(); hole.absarc(0, 0, R * 0.32, 0, Math.PI * 2, true); sh.holes.push(hole);
  const g = new THREE.ExtrudeGeometry(sh, { depth: R * 0.28, bevelEnabled: true, bevelThickness: R * 0.06, bevelSize: R * 0.05, bevelSegments: 2, curveSegments: 6 });
  g.translate(0, 0, -R * 0.14); return g;
}
function buildArchitecture(root, TR, env, items) {
  const face = (o, side, u) => { TR.quaternion(u, o.quaternion); o.rotateY(side > 0 ? -Math.PI / 2 - SCENE07.facing : Math.PI / 2 + SCENE07.facing); };
  const tex = starTexture();
  const wallM = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.42, metalness: 0.2, envMap: env || null, envMapIntensity: 0.8,
    emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.32, side: THREE.DoubleSide });
  const goldM = new THREE.MeshStandardMaterial({ color: 0xffdc7a, metalness: 1, roughness: 0.22, envMap: env || null, envMapIntensity: 1.4, emissive: 0x7a5a1c, emissiveIntensity: 0.55 });
  const lavM = new THREE.MeshStandardMaterial({ color: 0xc9a8ff, metalness: 0.4, roughness: 0.3, envMap: env || null, envMapIntensity: 1.0, emissive: 0x6a52b0, emissiveIntensity: 0.35 });
  // round enclosures: an open drum of star-decorated pink-lavender metal, a gold rim on top, a lavender band at the water
  for (const [side, u, R, H, inner] of SCENE07.enclosures) {
    const g = new THREE.Group(); g.name = 'scene07_enclosure';
    const t = tex.clone(); t.needsUpdate = true; t.repeat.set(Math.round(R * 4), 1);
    const m = wallM.clone(); m.map = t; m.emissiveMap = t;
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(R, R * 1.04, H, 48, 1, true), m); drum.position.y = H / 2 - 0.2; g.add(drum);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.08, 10, 56), goldM); rim.rotation.x = Math.PI / 2; rim.position.y = H - 0.2; g.add(rim);
    const band = new THREE.Mesh(new THREE.TorusGeometry(R * 1.03, 0.07, 8, 56), lavM); band.rotation.x = Math.PI / 2; band.position.y = 0.05; g.add(band);
    const top = new THREE.Mesh(new THREE.CircleGeometry(R * 0.97, 40), lavM); top.rotation.x = -Math.PI / 2; top.position.y = H - 0.24; g.add(top);
    TR.map(side * (inner + R), 0, u, g.position); TR.quaternion(u, g.quaternion);
    root.add(g); items.push({ holder: g, turn: null, spin: 0, pos: g.position.clone() });
  }
  // pink porthole rings with gold rims and an iridescent bubble, on the upper walls
  const pinkM = new THREE.MeshStandardMaterial({ color: 0xff6cbc, metalness: 0.35, roughness: 0.33, envMap: env || null, envMapIntensity: 1.0, emissive: 0xff4fa8, emissiveIntensity: 0.3 });
  const deepM = new THREE.MeshStandardMaterial({ color: 0xb73a8e, metalness: 0.3, roughness: 0.4, emissive: 0x6a1550, emissiveIntensity: 0.4 });
  const glassM = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.05, envMap: env || null, envMapIntensity: 1.6, transparent: true, opacity: 0.45, iridescence: 1, iridescenceIOR: 1.3, clearcoat: 1, depthWrite: false });
  for (const [side, u, x, h, R] of SCENE07.portholes) {
    const g = new THREE.Group(); g.name = 'scene07_porthole';
    g.add(new THREE.Mesh(new THREE.TorusGeometry(R, R * 0.24, 18, 56), pinkM));
    const inner = new THREE.Mesh(new THREE.TorusGeometry(R * 0.74, R * 0.07, 10, 48), deepM); inner.position.z = R * 0.08; g.add(inner);
    for (const rr of [R * 1.25, R * 0.76]) { const rim = new THREE.Mesh(new THREE.TorusGeometry(rr, R * 0.045, 8, 56), goldM); rim.position.z = R * 0.1; g.add(rim); }
    const bub = new THREE.Mesh(new THREE.SphereGeometry(R * 0.62, 28, 18), glassM); bub.position.z = R * 0.15; g.add(bub);
    TR.map(side * x, h, u, g.position); face(g, side, u);
    root.add(g); items.push({ holder: g, turn: null, spin: 0, pos: g.position.clone() });
  }
  // blue gears (the board's top corners): blue teeth, a lavender ring, a gold hub
  const blueM = new THREE.MeshStandardMaterial({ color: 0x1f46ff, metalness: 0.45, roughness: 0.3, envMap: env || null, envMapIntensity: 0.9, emissive: 0x0a1f9a, emissiveIntensity: 0.45 });   // (deeper: pass 5's read pale lavender-grey)
  for (const [side, u, x, h, R, spin] of SCENE07.gears) {
    const turn = new THREE.Group();
    turn.add(new THREE.Mesh(gearGeometry(R), blueM));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(R * 0.55, R * 0.07, 8, 40), lavM); ring.position.z = R * 0.2; turn.add(ring);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.3, R * 0.3, R * 0.4, 24), goldM); hub.rotation.x = Math.PI / 2; turn.add(hub);
    const g = new THREE.Group(); g.add(turn); g.name = 'scene07_gear';
    TR.map(side * x, h, u, g.position); face(g, side, u);
    root.add(g); items.push({ holder: g, turn, spin, pos: g.position.clone() });
  }
}

async function applyScene07({ scene, env, TR, camera, fx, report }) {
  const root = new THREE.Group(); root.name = 'scene07'; scene.add(root);
  const items = [];
  buildArchitecture(root, TR, env, items);
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
  // the stretch's two ends, for the particle size
  const ends = SCENE07.stretch.map((u) => TR.map(0, 0, u, new THREE.Vector3()));
  const seg = ends[1].clone().sub(ends[0]), segL2 = seg.lengthSq();
  const base = fx && fx.u && fx.u.uScale ? fx.u.uScale.value : null;
  const prev = scene.onBeforeRender;
  scene.onBeforeRender = function (...a) {
    if (prev) prev.apply(this, a);
    const cam = camera.position, along = cam.x * 0.7 + cam.z * 0.7;
    for (const it of items) {
      it.holder.visible = it.pos.distanceTo(cam) < SCENE07.drawDist;
      if (it.spin && it.holder.visible) it.turn.rotation.z = along * 0.35 * it.spin;
    }
    if (base !== null) { const k = cam.clone().sub(ends[0]).dot(seg) / segL2; fx.u.uScale.value = k > 0 && k < 1 ? base * SCENE07.particles : base; }
  };
  report.scene07 = { enclosures: SCENE07.enclosures.length, portholes: SCENE07.portholes.length, gears: SCENE07.gears.length, bubbles: SCENE07.bubbles.n, particleBase: base };
}

export async function applyTripo1({ scene, loader, env, TR, camera, fx }) {
  const report = { on: true, enemy: null, scene07: null, errors: [] };
  if (typeof window !== 'undefined') window.__bwTripo1 = report;
  if (SCENE07_ON && TR && camera) { try { await applyScene07({ scene, env, TR, camera, fx, report }); } catch (e) { report.errors.push('scene07: ' + ((e && e.message) || e)); } }
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
