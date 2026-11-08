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
// scene07 (8 November 2026, session 57091b57, the user's correction: "the ENTIRE gameplay screen [of board 07 'Avoid Enemies!'] ...
// pink and purple side scenery, decorative building / castle-like elements around the sides ... do not let the current build look too
// bare"): OPT-IN `?s3=...,level1,scene07` (with tripo1 for the enemy). The game's OWN washer models (no credits), dressed along the
// tunnel's walls in the enemy stretch as board 07 frames it: on the left wall the gold porthole ring (s3_entrance), a big pink / white /
// blue wheel brush (machinery) and a gold-blue gear; on the right castle-like towers (tower), a wheel brush and gears; big iridescent
// bubbles in the air. All against the walls, clear of the three lanes; each piece drawn only within 42 m of the camera (phone cost).
// Gears turn with her travel (no clock, no random numbers). Report: window.__bwTripo1.scene07.
export const SCENE07_ON = LIST.includes('level1') && LIST.includes('scene07');
// [model, side (+1 = screen-left, -1 = screen-right), u, x (m from the centre line), h (m above the water), size (largest side, m), spin]
export const SCENE07 = {
  files: { entrance: 'models/s3_entrance.glb', machinery: 'models/machinery_lod.glb', gear: 'models/gear.glb', tower: 'models/tower.glb' },
  // (pass 2: denser, bigger, so both sides are framed at every moment, as on the board; machinery_lod = machinery.glb simplified 15 %)
  items: [
    ['machinery', 1, 226, 1.75, 1.0, 2.0, 0], ['entrance', 1, 231, 1.85, 1.35, 2.4, 0], ['gear', 1, 236, 1.55, 2.35, 1.4, 1],
    ['machinery', 1, 240, 1.75, 1.0, 2.0, 0], ['entrance', 1, 245, 1.85, 1.35, 2.4, 0], ['gear', 1, 250, 1.55, 2.35, 1.4, -1],
    ['machinery', 1, 254, 1.75, 1.0, 2.0, 0], ['entrance', 1, 259, 1.85, 1.35, 2.4, 0],
    ['tower', -1, 228, 1.9, 1.25, 2.6, 0], ['gear', -1, 233, 1.55, 2.4, 1.4, -1], ['machinery', -1, 238, 1.75, 1.0, 2.0, 0],
    ['tower', -1, 242, 1.9, 1.25, 2.6, 0], ['gear', -1, 247, 1.55, 2.4, 1.4, 1], ['machinery', -1, 252, 1.75, 1.0, 2.0, 0],
    ['tower', -1, 256, 1.9, 1.25, 2.6, 0], ['gear', -1, 261, 1.55, 2.4, 1.4, -1],
  ],
  facing: 0.6,   // radians toward the camera from facing the centre line
  glow: 0.3,     // their own texture as a glow (the board's bright pastel gold, pink and blue under the tunnel's purple light)
  bubbles: { n: 18, u0: 222, u1: 264 }, drawDist: 30,
};
export const TRIPO1_FILES = { enemy: 'models/l1_enemy_tripo.glb' };
// the new look's diameter against the code ball's (its bounding sphere); (v2, the user's "Avoid Enemies!" mandate: "larger, raised so
// it clearly floats above the water, its lighting separating it from the tunnel") the look raised in its own frame so the whole ball
// clears the water (v1 sat half sunk: centre 0.36 m, radius ~0.73 m), a little larger, glossier, a faint navy self-light and a soft
// light halo behind it. The hit test stays level1.js's own (0.56 m from her centre, inside her 0.7 m lane).
export const TRIPO1_SIZE = { enemy: 1.3, float: 0.45, gloss: 0.7, env: 1.3, glow: 0.45, halo: 1.3, haloOpacity: 0.38 };

async function applyScene07({ scene, loader, env, TR, camera, report }) {
  const load = (url) => new Promise((ok, no) => loader.load(url, ok, undefined, no));
  const names = Object.keys(SCENE07.files), models = {};
  (await Promise.all(names.map((k) => load(SCENE07.files[k])))).forEach((gl, i) => { models[names[i]] = gl.scene; });
  const root = new THREE.Group(); root.name = 'scene07'; scene.add(root);
  const items = [], tmp = new THREE.Vector3();
  for (const [kind, side, u, x, h, size, spin] of SCENE07.items) {
    const src = models[kind]; const look = src.clone(true);
    look.traverse((o) => { if (o.isMesh) { o.castShadow = o.receiveShadow = false; for (const m of [].concat(o.material)) if (m.isMeshStandardMaterial) { if (env) { m.envMap = env; m.envMapIntensity = 1.2; } if (m.map) { m.emissiveMap = m.map; m.emissive = new THREE.Color(0xffffff); m.emissiveIntensity = SCENE07.glow; } } } });
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
