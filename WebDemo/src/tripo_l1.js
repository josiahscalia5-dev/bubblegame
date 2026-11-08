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
import { WALL15_ON, WALL15, buildWall15 } from './scene07_wall15.js';   // scene07 pass 15 (session f70c9bd1): opt-in `,norecon16,wall15` only
import { RECON16_ON, RECON16, buildRecon16, reconFacadeTexture, ART16_ON, applyArt16, FAR16_ON, applyFar16, MACH16 } from './scene07_recon16.js';
import { RECON17_ON, JEWEL17_ON, R17, jewelFacadeTexture, prepRecon17, buildRecon17, patchShaders17 } from './scene07_recon17.js';   // scene07 pass 17 (session bb87ba9f): receding rows, a machinery far end, the stretch's lighter water; `,norecon17` = pass 16 v5   // scene07 pass 16 (session f70c9bd1): the reconstruction from the user's Screen 09 kit; `,norecon16` = pass 13b

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
  bubbles: { n: 18, u0: 222, u1: 264 }, drawDist: 46,
  particles: 0.55, stretch: [222, 268],   // the bursts' size while the camera is in this stretch (u)
  // pass 6 (the user's environment correction: "not another pass that only adds decorations to the wrong tunnel"): the tube is OPENED
  // above the water in this stretch (level1.js's wall shader patched at run time, its hoops hidden here) into one large, open laundry
  // CHAMBER: a pink-lavender facade shell, platforms either side of the water, gold-pink portal rings where the tube enters and leaves
  chamber: { u0: 218, u1: 254, halfW: 4.6, height: 5.4, wallH: 3.6, open: 2.3, portalR: 2.62, deck: 0.12, deckIn: 2.25, vault: 0xf2c4ec, vaultGlow: 0.16 },   // (pass 10, session ce30359f: vault tint 0x8f9cff -> 0xf2c4ec, toward the original's pink-lavender; the art director's measured correction)   // (pass 8, the specialists' review: a corridor, vertical windowed walls to 3.6 m, a lower darker periwinkle vault)   // (vault: the upper shell fades to a light lavender, bright like the original's top, without the window pattern)
  // the original's LEFT big circular washer housing [u, x, h, ring radius] and RIGHT curved pink-gold star tubs [u, inner x, radius, height]
  housings: [[237.5, 3.4, 3.0, 1.0]],   // (pass 7: [237, 2.75, 1.85, 1.05], off-screen left; pass 13: its ring where the original's is, (0.04, 0.32) of the screen, radius 0.19 W)
  tubs: [[232.5, 1.35, 2.0, 1.6], [240, 1.5, 1.4, 1.2]],   // (pass 7: three small tubs [236|242|248, 2.3, ~1.1, ~1.2]; pass 13: the original's ONE big curved drum at the right edge beside lane 2, and a smaller one behind)
  // pass 13: the original's left washer housing is a TALL rounded body (screen x 0-0.24, y 0.18-0.47) with the ring on it, standing on a
  // gold-rimmed ledge (x 0-0.40, y 0.43-0.48): [u0, u1, inner x, height] for the ledge; the body's width, top height and depth
  ledge: [233.5, 241.5, 2.3, 0.95], houseBody: { w: 2.7, top: 5.1, depth: 1.3 },
  // pass 13: the enemy as the original draws it (0.31 W, upper right, high over the far channel): 0.75 of its size, and floating `high` m
  // higher while it is far ahead, coming down to its own height over the last metres to her (its hit test is level1.js's, unchanged)
  enemy: { scale: 0.95, high: 1.9, near: 5.5, far: 8.5 },   // (pass 13b, the art director: 0.75 / 1.25 drew it 0.26 W at y 0.50; the original 0.33 W at 0.36)
  // pass 7 (the user's review of pass 6: "replace the flat pink upper background with actual layered 3D scenery ... machinery, architecture"):
  // the game's OWN colourful machinery models stacked high on the chamber's walls [model, side, u, x, h, size]; pink rings high; a left
  // gold balustrade on posts along the walkway; the exit portal bright at the vanishing point; soft coloured lights in the air
  upper: { files: { machine: 'models/s3_machinery.glb', tower: 'models/tower.glb', pipe: 'models/pipe.glb' },
    items: [['machine', 1, 233, 3.7, 2.2, 1.9], ['tower', 1, 239, 3.75, 2.0, 2.3], ['pipe', 1, 244, 3.4, 3.7, 1.5], ['machine', 1, 249, 3.7, 2.2, 1.9],
      ['tower', -1, 234, 3.75, 2.0, 2.3], ['machine', -1, 240, 3.7, 2.2, 1.9], ['pipe', -1, 245, 3.4, 3.8, 1.5], ['tower', -1, 251, 3.75, 2.0, 2.2],
      ['pipe', 1, 236, 2.9, 4.4, 1.3], ['pipe', -1, 248, 2.9, 4.4, 1.3]],
    rings: [[1, 246, 3.9, 3.0, 0.75], [-1, 237, 3.9, 3.1, 0.7]], railU: [227, 253], railX: 2.32, railH: 0.62, postEvery: 1.5,
    glow: { r: 2.2, opacity: 0.85 }, lights: 30, bulbs: { every: 2.0, h: 3.45, x: 4.45 } },
};
// pass 13 (session ce30359f, the user's layout-first correction and the art director's layout map of 09_Avoid_Enemies.png): the
// original looks DOWN the channel to a vanishing point at (0.48, 0.41) of the screen; the game's camera looked level, to (0.33, 0.51),
// so the upper half was ceiling. Inside this stretch only (blended in over u[0..1], out over u[2..3]) the camera's aim point moves
// (lookX: + aims screen-left, which moves the picture RIGHT; lookY: + up) and the camera moves (offX: + = screen-left, offY: up, offZ: + = forward). Looks only: the camera is not part of the gameplay state.
// A test may override it with window.__BW_S07_CAM__ (the layout probe).
SCENE07.camera = { u: [212, 220, 250, 258], lookX: 0.5, lookY: -0.85, offX: -0.35, offY: 0, offZ: 0 };   // (pass 13b: the art director's 'mascot 0.05 W right', a gentler look-down for the foreground water)   // (probed: a steeper look-down, lookY -1.6, put the vanishing point exactly at (0.46, 0.41) but showed the edge of the surf that rides with her; -1.0 keeps the foreground clean: (0.48, 0.45))
export function scene07Camera(z, off, lk) {
  const C = (typeof window !== 'undefined' && window.__BW_S07_CAM__) || SCENE07.camera, [a, b, c, d] = C.u;
  const w = THREE.MathUtils.smoothstep(z, a, b) * (1 - THREE.MathUtils.smoothstep(z, c, d));
  if (w <= 0) return;
  off.x += (C.offX || 0) * w; off.y += (C.offY || 0) * w; off.z += (C.offZ || 0) * w; lk.x += C.lookX * w; lk.y += C.lookY * w;
}
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

// pass 6: open the tube in this stretch and build the chamber (real geometry along the track)
function facadeTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256; const g = c.getContext('2d');
  const F = WALL15_ON ? WALL15.facade : ['#b58ae8', '#e2a6f2', '#ff9fd2'];   // (pass 15: the original's paler, warmer cream-lavender-pink)
  const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, F[0]); gr.addColorStop(0.45, F[1]); gr.addColorStop(1, F[2]);
  g.fillStyle = gr; g.fillRect(0, 0, 512, 256);
  for (let i = 0; i < 4; i++) {   // columns, arched windows with a warm glow, gold frames
    const x = 18 + i * 128; g.fillStyle = 'rgba(255,240,255,0.45)'; g.fillRect(x - 10, 0, 12, 256);
    for (const [y, h] of [[40, 70], [150, 70]]) {
      g.beginPath(); g.moveTo(x + 22, y + h); g.lineTo(x + 22, y + 22); g.arc(x + 54, y + 22, 32, Math.PI, 0); g.lineTo(x + 86, y + h); g.closePath();
      const wg = g.createLinearGradient(0, y, 0, y + h); wg.addColorStop(0, '#fff3b0'); wg.addColorStop(1, '#8fd8ff'); g.fillStyle = wg; g.fill();
      g.lineWidth = 6; g.strokeStyle = '#f2c14a'; g.stroke();
    }
  }
  g.fillStyle = '#f2c14a'; g.fillRect(0, 128, 512, 8); g.fillRect(0, 0, 512, 6);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; return t;
}
function openTube(scene, TR, Ch) {
  let wallMat = null; const hoops = [];
  scene.traverse((o) => { if (o.name === 'l1Wall' && o.material && !wallMat) wallMat = o.material; if (o.name === 'l1Hoops' && o.isInstancedMesh) hoops.push(o); });
  if (wallMat && wallMat.fragmentShader && wallMat.uniforms) {
    wallMat.uniforms.uOpen07 = { value: new THREE.Vector3(Ch.u0, Ch.u1, Ch.open) };
    wallMat.fragmentShader = wallMat.fragmentShader.replace(/void main\(\)\s*\{/, 'uniform vec3 uOpen07;\nvoid main() { if (vTU.y > uOpen07.x && vTU.y < uOpen07.y && abs(vTU.x) < uOpen07.z) discard;');
    wallMat.needsUpdate = true;
  }
  const M = new THREE.Matrix4(), P = new THREE.Vector3(), Z = new THREE.Matrix4().makeScale(0, 0, 0), ctr = [];
  for (let u = Ch.u0; u <= Ch.u1 + (RECON16_ON ? 18 : 0); u += 1) ctr.push(TR.map(0, 1.5, u));   // (pass 16 v4: also the tube's hoops for 18 m beyond the far end: they read as a ring tunnel at the vanishing point)
  let hidden = 0;
  for (const h of hoops) { for (let i = 0; i < h.count; i++) { h.getMatrixAt(i, M); P.setFromMatrixPosition(M); if (ctr.some((c) => c.distanceTo(P) < 3.4)) { h.setMatrixAt(i, Z); hidden++; } } h.instanceMatrix.needsUpdate = true; }
  return { patched: !!wallMat, hoopsHidden: hidden };
}
function buildChamber(root, TR, env) {
  const Ch = SCENE07.chamber, P = new THREE.Vector3();
  const tex = JEWEL17_ON ? jewelFacadeTexture() : RECON16_ON ? reconFacadeTexture() : facadeTexture();   // (pass 17: the master's deep blue-violet recesses)   // (pass 16: the chamber's own surface behind the machinery)
  const shellM = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.15, envMap: env || null, envMapIntensity: 0.6, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: JEWEL17_ON ? R17.jewel.shellGlow : 0.45, side: THREE.DoubleSide });
  // the shell: a half-ellipse over the stretch, from the deck on one side over the top to the other
  const pos = [], uv = [], idx = [], nA = 36, step = 1; let rows = 0;
  const col = [], vc = RECON16_ON ? new THREE.Color(1, 1, 1) : WALL15_ON ? new THREE.Color().setRGB(...WALL15.vaultRGB) : new THREE.Color(Ch.vault), cc = new THREE.Color();   // (pass 15: a warm cream-lavender vault)
  // the cross-section (pass 8): up the left wall to wallH, the vault over the top, down the right wall
  const sec = []; for (let j = 0; j <= 6; j++) sec.push([Ch.halfW, -0.3 + (Ch.wallH + 0.3) * j / 6]);
  for (let j = 1; j < 24; j++) { const a = Math.PI * j / 24; sec.push([Ch.halfW * Math.cos(a), Ch.wallH + (Ch.height - Ch.wallH) * Math.sin(a)]); }
  for (let j = 6; j >= 0; j--) sec.push([-Ch.halfW, -0.3 + (Ch.wallH + 0.3) * j / 6]);
  const nS = sec.length - 1;
  for (let u = Ch.u0 - 1; u <= Ch.u1 + 1 + 1e-6; u += step, rows++) {
    for (const [sx, sh] of sec) { TR.map(sx, Ch.deck + sh, u, P); pos.push(P.x, P.y, P.z);
      uv.push((u - Ch.u0) / 4, RECON16_ON ? Math.max(0, sh) / 1.8 : sh < Ch.wallH ? Math.max(0, sh) / 1.8 : 1.95);   // the windows on the walls; above: the texture's lavender
      const k = THREE.MathUtils.smoothstep(sh, Ch.wallH - 0.2, Ch.wallH + 0.8); cc.setRGB(1, 1, 1).lerp(vc, k); col.push(cc.r, cc.g, cc.b); }
  }
  for (let i = 0; i < rows - 1; i++) for (let j = 0; j < nS; j++) { const a = i * (nS + 1) + j, b = a + nS + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); sg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); sg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); sg.setIndex(idx); sg.computeVertexNormals();
  const vaultM = shellM.clone(); vaultM.vertexColors = true; vaultM.emissiveIntensity = JEWEL17_ON ? R17.jewel.shellGlow : 0.42; vaultM.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance *= vColor.rgb;'); };   // (pass 8: the walls keep their glow, the vault glows a dim periwinkle)
  // (pass 9, session ce30359f: in pass 8 the next statement sat inside the comment above, so the walls and vault were never drawn)
  const shell = new THREE.Mesh(sg, vaultM); shell.name = 'scene07_chamberShell'; root.add(shell);
  // the decks either side of the water: lavender with a gold edge at the water
  const deckM = new THREE.MeshStandardMaterial({ color: 0xc7a2f0, roughness: 0.45, metalness: 0.2, envMap: env || null, envMapIntensity: 0.6, emissive: 0x6a4aa8, emissiveIntensity: 0.45, side: THREE.DoubleSide });
  const goldM = new THREE.MeshStandardMaterial({ color: 0xffdc7a, metalness: 1, roughness: 0.22, envMap: env || null, envMapIntensity: 1.4, emissive: 0x7a5a1c, emissiveIntensity: 0.55 });
  for (const side of [1, -1]) {
    const dp = [], di = [], edge = []; let k = 0;
    for (let u = Ch.u0 - 1; u <= Ch.u1 + 1 + 1e-6; u += step, k++) {
      TR.map(side * Ch.deckIn, Ch.deck, u, P); dp.push(P.x, P.y, P.z); edge.push(P.clone());
      TR.map(side * Ch.halfW, Ch.deck, u, P); dp.push(P.x, P.y, P.z);
      if (k) { const a = 2 * (k - 1); di.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    }
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.Float32BufferAttribute(dp, 3)); dg.setIndex(di); dg.computeVertexNormals();
    const deck = new THREE.Mesh(dg, deckM); deck.name = 'scene07_deck'; root.add(deck);
    const lip = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(edge), edge.length * 2, 0.07, 8, false), goldM); lip.name = 'scene07_deckGold'; root.add(lip);
  }
  // the end walls with the portal where the tube enters and leaves: the chamber's cross-section with a round hole, a gold-pink ring
  const pinkM = new THREE.MeshStandardMaterial({ color: 0xff6cbc, metalness: 0.35, roughness: 0.33, envMap: env || null, envMapIntensity: 1.0, emissive: 0xff4fa8, emissiveIntensity: 0.3 });
  for (const u of [Ch.u0, Ch.u1]) {
    const sh = new THREE.Shape(); sec.forEach(([x, y], j) => { if (j) sh.lineTo(x, Ch.deck + y); else sh.moveTo(x, Ch.deck + y); });
    sh.closePath();
    const hole = new THREE.Path(); hole.absarc(0, 1.5, Ch.portalR, 0, Math.PI * 2, true); sh.holes.push(hole);
    const wall = new THREE.Mesh(new THREE.ShapeGeometry(sh, 48), shellM); const ring = new THREE.Mesh(new THREE.TorusGeometry(Ch.portalR + 0.12, 0.26, 16, 72), goldM);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(Ch.portalR + 0.62, 0.3, 14, 72), pinkM); ring.position.y = ring2.position.y = 1.5;
    const g = new THREE.Group(); g.add(wall); if (!RECON16_ON) g.add(ring, ring2); g.name = 'scene07_portal';   // (pass 16 v5: no portal rings either: concentric rings)   // (pass 16: no thick pink outer ring; with the gold one it read as a ring tunnel)
    TR.map(0, 0, u, g.position); TR.quaternion(u, g.quaternion); root.add(g);
  }
  return goldM;
}
function buildLandmarks(root, TR, env, goldM, items) {
  // LEFT: the original's big circular washer housing: a thick pink drum ring, gold rims, a lavender back, an iridescent bubble
  const pinkM = new THREE.MeshStandardMaterial({ color: 0xff70be, metalness: 0.35, roughness: 0.32, envMap: env || null, envMapIntensity: 1.0, emissive: 0xff4fa8, emissiveIntensity: 0.32 });
  const lavM = new THREE.MeshStandardMaterial({ color: 0xc9a8ff, metalness: 0.4, roughness: 0.3, envMap: env || null, envMapIntensity: 1.0, emissive: 0x6a52b0, emissiveIntensity: 0.4 });
  const glassM = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.05, envMap: env || null, envMapIntensity: 1.6, transparent: true, opacity: 0.5, iridescence: 1, iridescenceIOR: 1.3, clearcoat: 1, depthWrite: false });
  for (const [u, x, h, R] of SCENE07.housings) {
    const g = new THREE.Group(); g.name = 'scene07_housing';
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(R * 1.15, R * 1.15, R * 0.9, 48, 1, true), lavM); drum.rotation.x = Math.PI / 2; drum.position.z = -R * 0.45; g.add(drum);
    const back = new THREE.Mesh(new THREE.CircleGeometry(R * 1.15, 48), lavM); back.position.z = -R * 0.9; g.add(back);
    g.add(new THREE.Mesh(new THREE.TorusGeometry(R, R * 0.26, 20, 64), pinkM));
    for (const rr of [R * 1.27, R * 0.74]) { const rim = new THREE.Mesh(new THREE.TorusGeometry(rr, R * 0.05, 8, 64), goldM); rim.position.z = R * 0.12; g.add(rim); }
    const bub = new THREE.Mesh(new THREE.SphereGeometry(R * 0.62, 32, 20), glassM); bub.position.z = R * 0.1; g.add(bub);
    if (SCENE07.houseBody) {   // pass 13: the tall rounded washer body behind the ring (a rounded-top slab with a gold outline), down to the ledge
      const B = SCENE07.houseBody, hw = B.w / 2, y0 = SCENE07.ledge[3] - h, y1 = B.top - h - hw, sh = new THREE.Shape();
      sh.moveTo(-hw, y0); sh.lineTo(hw, y0); sh.lineTo(hw, y1); sh.absarc(0, y1, hw, 0, Math.PI, false); sh.lineTo(-hw, y0);
      const body = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: B.depth, bevelEnabled: true, bevelSize: 0.12, bevelThickness: 0.12, bevelSegments: 3, curveSegments: 32 }), pinkM);
      body.position.z = -B.depth - R * 0.2; body.name = 'scene07_houseBody'; g.add(body);
      const edge = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(sh.getSpacedPoints(80).map((q) => new THREE.Vector3(q.x, q.y, 0)), true), 160, 0.07, 8, true), goldM);
      edge.position.z = R * 0.02; g.add(edge);
    }
    TR.map(x, h, u, g.position); TR.quaternion(u, g.quaternion); g.rotateY(-Math.PI / 2 - 1.05);
    root.add(g); items.push({ holder: g, turn: null, spin: 0, pos: g.position.clone() });
  }
  if (SCENE07.ledge) {   // pass 13: the raised lavender ledge under the housing, its front edge gold (the original's gold-rimmed ledge, left)
    const [u0, u1, x0, lh] = SCENE07.ledge, top = [], front = [], ti = [], fi = [], lip = [], P = new THREE.Vector3(); let k = 0;
    for (let u = u0; u <= u1 + 1e-6; u += 0.5, k++) {
      TR.map(x0, lh, u, P); top.push(P.x, P.y, P.z); lip.push(P.clone()); TR.map(SCENE07.chamber.halfW, lh, u, P); top.push(P.x, P.y, P.z);
      TR.map(x0, lh, u, P); front.push(P.x, P.y, P.z); TR.map(x0, SCENE07.chamber.deck, u, P); front.push(P.x, P.y, P.z);
      if (k) { const a = 2 * (k - 1); ti.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); fi.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    }
    const mk = (pos, idx) => { const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals(); return geo; };
    const lm = lavM.clone(); lm.side = THREE.DoubleSide;
    root.add(Object.assign(new THREE.Mesh(mk(top, ti), lm), { name: 'scene07_ledge' }), Object.assign(new THREE.Mesh(mk(front, fi), pinkM.clone()), { name: 'scene07_ledgeFront' }));
    root.add(Object.assign(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lip), lip.length * 2, 0.08, 8, false), goldM), { name: 'scene07_ledgeGold' }));
  }
  // RIGHT: the original's curved pink-gold structure: big round star tubs at the water's edge, gold rims
  const tex = starTexture();
  for (const [u, inner, R, H] of SCENE07.tubs) {
    const g = new THREE.Group(); g.name = 'scene07_tub'; const t = tex.clone(); t.needsUpdate = true; t.repeat.set(Math.round(R * 4), 1);
    const m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.42, metalness: 0.2, envMap: env || null, envMapIntensity: 0.8, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: 0.35, side: THREE.DoubleSide });
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(R, R * 1.05, H, 56, 1, true), m); drum.position.y = H / 2 - 0.1; g.add(drum);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.11, 12, 64), goldM); rim.rotation.x = Math.PI / 2; rim.position.y = H - 0.1; g.add(rim);
    const top = new THREE.Mesh(new THREE.CircleGeometry(R * 0.97, 48), lavM); top.rotation.x = -Math.PI / 2; top.position.y = H - 0.14; g.add(top);
    TR.map(-(inner + R), 0, u, g.position); TR.quaternion(u, g.quaternion);
    root.add(g); items.push({ holder: g, turn: null, spin: 0, pos: g.position.clone() });
  }
}

async function buildUpper(root, TR, env, loader, goldM, items) {
  const U = SCENE07.upper, load = (url) => new Promise((ok, no) => loader.load(url, ok, undefined, no));
  const names = Object.keys(U.files), models = {};
  (await Promise.all(names.map((k) => load(U.files[k])))).forEach((gl, i) => { models[names[i]] = gl.scene; });
  for (const [kind, side, u, x, h, size] of RECON16_ON ? [] : U.items) {   // (pass 16: not the game's generic machinery models)
    const look = models[kind].clone(true);
    look.traverse((o) => { if (o.isMesh) for (const m of [].concat(o.material)) if (m.isMeshStandardMaterial) { if (env) { m.envMap = env; m.envMapIntensity = 1.1; } if (m.map) { m.emissiveMap = m.map; m.emissive = new THREE.Color(0xffffff); m.emissiveIntensity = 0.28; } } });
    const box = new THREE.Box3().setFromObject(look), sz = box.getSize(new THREE.Vector3()), mid = box.getCenter(new THREE.Vector3()), k = size / Math.max(sz.x, sz.y, sz.z);
    look.scale.setScalar(k); look.position.set(-mid.x * k, -mid.y * k, -mid.z * k);
    const g = new THREE.Group(); g.add(look); g.name = 'scene07_upper_' + kind;
    TR.map(side * x, h, u, g.position); TR.quaternion(u, g.quaternion); g.rotateY(side > 0 ? -Math.PI / 2 - SCENE07.facing : Math.PI / 2 + SCENE07.facing);
    root.add(g); items.push({ holder: g, turn: null, spin: 0, pos: g.position.clone() });
  }
  SCENE07.portholes.push(...U.rings);
  // the walkway's gold balustrade on posts (the original's left ledge)
  const pts = [], P = new THREE.Vector3();
  for (let u = U.railU[0]; u <= U.railU[1]; u += 1) pts.push(TR.map(U.railX, U.railH, u, new THREE.Vector3()));
  if (!RECON16_ON) root.add(Object.assign(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 2, 0.06, 8, false), goldM), { name: 'scene07_rail' }));   // (pass 16: the raised ledge replaces the walkway's rail)
  const postG = new THREE.CylinderGeometry(0.045, 0.06, U.railH, 10);
  for (let u = U.railU[0]; u <= (RECON16_ON ? U.railU[0] - 1 : U.railU[1]); u += U.postEvery) { const p = new THREE.Mesh(postG, goldM); TR.map(U.railX, U.railH / 2, u, p.position); TR.quaternion(u, p.quaternion); p.name = 'scene07_post'; root.add(p); }
  // the exit portal bright (the original's luminous vanishing point) and soft coloured lights in the air
  const soft = (r, g, b) => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const gr = x.createRadialGradient(32, 32, 2, 32, 32, 32);
    gr.addColorStop(0, `rgba(${r},${g},${b},1)`); gr.addColorStop(1, `rgba(${r},${g},${b},0)`); x.fillStyle = gr; x.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
  const GL = RECON16_ON ? RECON16.glow : U.glow;   // (pass 16: the original's luminous far end, larger and brighter)
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: soft(...(GL.rgb || [255, 248, 230])), transparent: true, opacity: GL.opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.scale.setScalar(GL.r * 2); TR.map(0, 1.6, SCENE07.chamber.u1 + (GL.du || 0.5), glow.position); glow.name = 'scene07_portalGlow'; root.add(glow);
  if (GL.fade) SCENE07._glow = { sprite: glow, ...GL };
  const cols = [[255, 170, 230], [150, 210, 255], [255, 230, 140], [200, 170, 255]];
  for (let i = 0; i < U.lights; i++) {
    const l = new THREE.Sprite(new THREE.SpriteMaterial({ map: soft(...cols[i % 4]), transparent: true, opacity: 0.8, depthWrite: false, blending: THREE.AdditiveBlending }));
    l.scale.setScalar(0.5 + 0.35 * ((i * 5) % 4)); const side = i % 2 ? 1 : -1;
    TR.map(side * (0.9 + 2.6 * ((i * 3) % 5) / 4), 2.4 + 2.2 * ((i * 7) % 6) / 5, 228 + 26 * (i + 0.5) / U.lights, l.position); l.name = 'scene07_light'; root.add(l);
  }
  // rows of warm bulbs along both walls under the vault (the original's gold glows and light bulbs)
  const bulbM = new THREE.SpriteMaterial({ map: soft(255, 214, 120), transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending });
  const coreM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.35, 0.9) }), coreG = new THREE.SphereGeometry(0.07, 10, 8);
  for (const side of [1, -1]) for (let u = 220; u <= 252; u += U.bulbs.every) {
    const g = new THREE.Group(); g.add(new THREE.Mesh(coreG, coreM)); const halo = new THREE.Sprite(bulbM); halo.scale.setScalar(0.55); g.add(halo);
    TR.map(side * U.bulbs.x, U.bulbs.h, u, g.position); g.name = 'scene07_bulb'; root.add(g);
  }
}

async function applyScene07({ scene, env, TR, camera, fx, loader, report }) {
  const root = new THREE.Group(); root.name = 'scene07'; scene.add(root);
  const items = [];
  if (RECON16_ON) Object.assign(SCENE07.chamber, RECON16.chamber);   // pass 16: a higher chamber for the upper machinery
  const opened = openTube(scene, TR, SCENE07.chamber);
  const goldM = buildChamber(root, TR, env);
  let recon16 = null, recon17 = null, sh17 = null;
  const dropped17 = RECON17_ON ? prepRecon17(MACH16) : 0;   // (pass 17: its receding rows replace the camera-facing mounted machines where they stand)
  if (RECON16_ON) recon16 = buildRecon16(root, TR, env, goldM, SCENE07.chamber, items);   // pass 16 (scene07_recon16.js): left housing, right wall, upper machinery
  else buildLandmarks(root, TR, env, goldM, items);
  await buildUpper(root, TR, env, loader, goldM, items);
  SCENE07.enclosures.length = 0; SCENE07.portholes.splice(0, SCENE07.portholes.length - SCENE07.upper.rings.length);   // (pass 6: landmarks replace pass 5's pieces; pass 7's high rings stay)
  SCENE07.gears.splice(0, SCENE07.gears.length, [-1, 237, 2.9, 3.0, 0.95, -1], [-1, 244, 2.4, 4.2, 0.8, 1], [1, 250, 1.2, 4.6, 0.75, 1]);   // (pass 7: the original's blue machinery, top right and top centre)
  if (RECON16_ON) { SCENE07.portholes.length = 0; SCENE07.gears.length = 0; }   // (pass 16 builds its own portholes and gears)
  let art16 = null;
  if (ART16_ON) { art16 = await applyArt16(root, TR, SCENE07.chamber, camera); if (SCENE07._glow) SCENE07._glow.opacity = 0.3; }
  if (FAR16_ON) { art16 = await applyFar16(root, TR, SCENE07.chamber, camera); }
  if (RECON17_ON) { const r = buildRecon17(root, TR, env, goldM, SCENE07.chamber, items); sh17 = patchShaders17(scene, TR, SCENE07.chamber); recon17 = { parts: r.parts, glints: r.glintCount || 0, triangles: r.triangles, droppedMounted: dropped17, shaders: sh17.report }; }   // pass 17 (scene07_recon17.js)   // pass 16: the master's distant scenery on the far end wall only   // pass 16: the master's distant scenery, projected (scene07_recon16.js)
  let wall15 = null;
  if (WALL15_ON) { SCENE07.gears[0] = WALL15.gear; wall15 = buildWall15(root, TR, env, goldM, SCENE07.chamber, SCENE07.tubs, SCENE07.ledge, items); }   // pass 15 (scene07_wall15.js)
  buildArchitecture(root, TR, env, items);
  // big iridescent bubbles near the walls (board 07's large bubbles at its sides); a fixed pattern, no random numbers
  const bubM = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.06, metalness: 0, envMap: env || null, envMapIntensity: 1.6, transparent: true,
    opacity: 0.5, iridescence: 0.9, iridescenceIOR: 1.3, clearcoat: 1, depthWrite: false, ...(RECON16_ON ? { emissive: 0xe8f4ff, emissiveIntensity: 0.28, opacity: 0.58 } : {}) });
  if (RECON16_ON && MACH16.bankBubbles) SCENE07.bubbles.n = MACH16.bankBubbles;
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
    if (art16) art16.update();
    if (sh17) sh17.update(cam);   // (pass 17: the tube's rings beyond the far portal fade back in near it)
    if (SCENE07._glow) { const G = SCENE07._glow; G.sprite.material.opacity = G.opacity * THREE.MathUtils.smoothstep(G.sprite.position.distanceTo(cam), G.fade[0], G.fade[1]); }   // (pass 16)
    if (base !== null) { const k = cam.clone().sub(ends[0]).dot(seg) / segL2; fx.u.uScale.value = k > 0 && k < 1 ? base * SCENE07.particles : base; }
  };
  if (typeof document !== 'undefined') {
    document.body.classList.add('scene07');
    const st = document.createElement('style'); st.id = 'scene07Banner';
    st.textContent = `body.scene07 #l1Banner.warn { background: linear-gradient(#ff5a78, #e3204f 60%, #c8143f); border: calc(var(--u, 2px) * 2.2) solid #ffd6e2;
      border-radius: calc(var(--u, 2px) * 22); padding: calc(var(--u, 2px) * 7) calc(var(--u, 2px) * 18) calc(var(--u, 2px) * 7) calc(var(--u, 2px) * 46);
      box-shadow: 0 calc(var(--u, 2px) * 3) 0 #8e1038, 0 0 calc(var(--u, 2px) * 16) rgba(255, 80, 130, .55); rotate: -4deg; white-space: nowrap; }
      body.scene07 #l1Banner.warn b { font-size: calc(var(--u, 2px) * 21); text-transform: capitalize; color: #fff; -webkit-text-stroke: calc(var(--u, 2px) * 0.6) #8e1038;
        text-shadow: 0 calc(var(--u, 2px) * 2) 0 #8e1038; position: relative; }
      body.scene07 #l1Banner.warn b::before { content: ''; position: absolute; left: calc(var(--u, 2px) * -38); top: 50%; translate: 0 -55%; width: calc(var(--u, 2px) * 30); height: calc(var(--u, 2px) * 27);
        background: no-repeat center / contain url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 27'%3E%3Cpath d='M15 1.5 L29 25.5 H1 Z' fill='%23ffffff' stroke='%23c8143f' stroke-width='2' stroke-linejoin='round'/%3E%3Crect x='13.4' y='8' width='3.2' height='10' rx='1.4' fill='%23e3204f'/%3E%3Ccircle cx='15' cy='21.6' r='1.8' fill='%23e3204f'/%3E%3C/svg%3E"); }
      body.scene07 #l1Banner.warn span { display: none; }`;
    document.head.appendChild(st);
  }
  report.scene07 = { recon16, recon17, art16: art16 && { cards: art16.cards, hidden: art16.hidden, farWall: art16.wall }, wall15, opened, enclosures: SCENE07.enclosures.length, portholes: SCENE07.portholes.length, gears: SCENE07.gears.length, bubbles: SCENE07.bubbles.n, particleBase: base };
}

export async function applyTripo1({ scene, loader, env, TR, camera, fx }) {
  const report = { on: true, enemy: null, scene07: null, errors: [] };
  if (typeof window !== 'undefined') window.__bwTripo1 = report;
  if (SCENE07_ON && TR && camera) { try { await applyScene07({ scene, env, TR, camera, fx, loader, report }); } catch (e) { report.errors.push('scene07: ' + ((e && e.message) || e)); } }
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
    let n = 0; const floaters = [];   // (pass 13: scene07's enemies, see SCENE07.enemy)
    for (const holder of holders) {
      const body = holder.children[0]; if (!body || !body.children.length) continue;
      const ball = body.children[0]; if (!ball.geometry.boundingSphere) ball.geometry.computeBoundingSphere();
      const D = ball.geometry.boundingSphere.radius * 2 * TRIPO1_SIZE.enemy, s = D / Math.max(size.x, size.y, size.z);
      const look = gl.scene.clone(true); look.scale.setScalar(s); look.position.set(-mid.x * s, -mid.y * s + TRIPO1_SIZE.float, -mid.z * s); look.name = 'l1EnemyTripo';
      for (const c of body.children) c.visible = false;   // the code ball, eyes, pupils and brows
      const halo = new THREE.Sprite(haloM); halo.scale.setScalar(D * TRIPO1_SIZE.halo); halo.position.set(0, TRIPO1_SIZE.float, -D * 0.15); halo.renderOrder = -1; halo.name = 'l1EnemyHalo';
      if (SCENE07_ON && SCENE07.enemy) { const E = SCENE07.enemy; look.scale.multiplyScalar(E.scale); look.position.multiplyScalar(E.scale); look.position.y += TRIPO1_SIZE.float * (1 - E.scale); halo.scale.multiplyScalar(E.scale); floaters.push({ holder, look, halo, y0: look.position.y, h0: halo.position.y }); }
      body.add(halo, look); n++;
      report.enemy = { count: n, diameter: +D.toFixed(3), scale: +s.toFixed(4), float: TRIPO1_SIZE.float };
    }
    if (floaters.length && camera) {   // pass 13: high while far ahead (the original's enemy over the far channel), down to its own height near her
      const E = SCENE07.enemy, W = new THREE.Vector3(), prev = scene.onBeforeRender;
      scene.onBeforeRender = function (...a) {
        if (prev) prev.apply(this, a);
        // pass 16 (the user's kit: ONE hero-sized enemy upper right at the checkpoint): only the nearest enemy ahead of the camera floats high;
        // the others keep their own height (small, low over the far water). Looks only: the hit tests are level1.js's.
        let hero = null, best = 1e9; const fw = camera.getWorldDirection(new THREE.Vector3());
        for (const f of floaters) { f.d = f.holder.getWorldPosition(W).distanceTo(camera.position); const ahead = W.sub(camera.position).dot(fw) > 0; if (ahead && f.d > E.near * 0.6 && f.d < best) { best = f.d; hero = f; } }
        for (const f of floaters) { const k = (!RECON16_ON || f === hero) ? THREE.MathUtils.smoothstep(f.d, E.near, E.far) * E.high : 0;
          f.look.position.y = f.y0 + k; f.halo.position.y = f.h0 + k; }
      };
    }
  } catch (e) { report.errors.push('enemy: ' + ((e && e.message) || e)); }
  return report;
}
