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
  bubbles: { n: 18, u0: 222, u1: 264 }, drawDist: 46,
  particles: 0.55, stretch: [222, 268],   // the bursts' size while the camera is in this stretch (u)
  // pass 6 (the user's environment correction: "not another pass that only adds decorations to the wrong tunnel"): the tube is OPENED
  // above the water in this stretch (level1.js's wall shader patched at run time, its hoops hidden here) into one large, open laundry
  // CHAMBER: a pink-lavender facade shell, platforms either side of the water, gold-pink portal rings where the tube enters and leaves
  chamber: { u0: 218, u1: 270, halfW: 7.2, height: 6.2, open: 2.3, portalR: 2.62, deck: 0.12, deckIn: 2.25 },
  // the original's LEFT big circular washer housing [u, x, h, ring radius] and RIGHT curved pink-gold star tubs [u, inner x, radius, height]
  housings: [[239, 3.7, 2.35, 1.75], [257, 3.7, 2.35, 1.6]],
  tubs: [[234, 2.35, 2.1, 1.45], [249, 2.35, 1.9, 1.35], [263, 2.35, 2.0, 1.4]],
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

// pass 6: open the tube in this stretch and build the chamber (real geometry along the track)
function facadeTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#b58ae8'); gr.addColorStop(0.45, '#e2a6f2'); gr.addColorStop(1, '#ff9fd2');
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
  for (let u = Ch.u0; u <= Ch.u1; u += 1) ctr.push(TR.map(0, 1.5, u));
  let hidden = 0;
  for (const h of hoops) { for (let i = 0; i < h.count; i++) { h.getMatrixAt(i, M); P.setFromMatrixPosition(M); if (ctr.some((c) => c.distanceTo(P) < 3.4)) { h.setMatrixAt(i, Z); hidden++; } } h.instanceMatrix.needsUpdate = true; }
  return { patched: !!wallMat, hoopsHidden: hidden };
}
function buildChamber(root, TR, env) {
  const Ch = SCENE07.chamber, P = new THREE.Vector3();
  const tex = facadeTexture();
  const shellM = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.15, envMap: env || null, envMapIntensity: 0.6, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.45, side: THREE.DoubleSide });
  // the shell: a half-ellipse over the stretch, from the deck on one side over the top to the other
  const pos = [], uv = [], idx = [], nA = 36, step = 1; let rows = 0;
  for (let u = Ch.u0 - 1; u <= Ch.u1 + 1 + 1e-6; u += step, rows++) {
    for (let j = 0; j <= nA; j++) { const a = -Math.PI / 2 + Math.PI * j / nA; TR.map(Math.sin(a) * Ch.halfW, Ch.deck + Math.cos(a) * Ch.height, u, P); pos.push(P.x, P.y, P.z); uv.push((u - Ch.u0) / 4, j / nA * 6); }
  }
  for (let i = 0; i < rows - 1; i++) for (let j = 0; j < nA; j++) { const a = i * (nA + 1) + j, b = a + nA + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); sg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); sg.setIndex(idx); sg.computeVertexNormals();
  const shell = new THREE.Mesh(sg, shellM); shell.name = 'scene07_chamberShell'; root.add(shell);
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
    const sh = new THREE.Shape(); for (let j = 0; j <= 48; j++) { const a = -Math.PI / 2 + Math.PI * j / 48, x = Math.sin(a) * Ch.halfW, y = Ch.deck + Math.cos(a) * Ch.height; if (j) sh.lineTo(x, y); else sh.moveTo(x, y); }
    sh.lineTo(-Ch.halfW, Ch.deck - 1.5); sh.lineTo(Ch.halfW, Ch.deck - 1.5); sh.closePath();
    const hole = new THREE.Path(); hole.absarc(0, 1.5, Ch.portalR, 0, Math.PI * 2, true); sh.holes.push(hole);
    const wall = new THREE.Mesh(new THREE.ShapeGeometry(sh, 48), shellM); const ring = new THREE.Mesh(new THREE.TorusGeometry(Ch.portalR + 0.12, 0.26, 16, 72), goldM);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(Ch.portalR + 0.62, 0.3, 14, 72), pinkM); ring.position.y = ring2.position.y = 1.5;
    const g = new THREE.Group(); g.add(wall, ring, ring2); g.name = 'scene07_portal';
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
    TR.map(x, h, u, g.position); TR.quaternion(u, g.quaternion); g.rotateY(-Math.PI / 2 - 0.75);
    root.add(g); items.push({ holder: g, turn: null, spin: 0, pos: g.position.clone() });
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

async function applyScene07({ scene, env, TR, camera, fx, report }) {
  const root = new THREE.Group(); root.name = 'scene07'; scene.add(root);
  const items = [];
  const opened = openTube(scene, TR, SCENE07.chamber);
  const goldM = buildChamber(root, TR, env);
  buildLandmarks(root, TR, env, goldM, items);
  SCENE07.enclosures.length = 0; SCENE07.portholes.length = 0;   // (pass 6: the chamber's landmarks replace pass 5's small pieces)
  for (const gr of SCENE07.gears) { gr[2] = 4.2; gr[3] = 4.4; gr[4] *= 1.6; }   // gears high on the chamber's walls
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
  report.scene07 = { opened, enclosures: SCENE07.enclosures.length, portholes: SCENE07.portholes.length, gears: SCENE07.gears.length, bubbles: SCENE07.bubbles.n, particleBase: base };
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
