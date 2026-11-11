// Bubble Wash Kingdom: playable browser version of approved Screen 3 ("Let's go! Into the
// washing machine!"), built from the user's Meshy models and the layout of the Unity project.
// The Unity project stays the real game; this is a separate demonstration.
import { INTUNNEL_ON, INTUNNEL, WATER7_ON, WATER7 } from './tunnel_s4_bt.js';   // first: ?s3=bt (the breakthrough pass) hands `focus` on to every switch module; ?s3=intunnel: the run starts inside the tunnel
import { SWIM_ON, SWIM, swimPose } from './tunnel_s4_swim.js';   // ?s3=intunnel,swim: her swim rhythm (visual only) and R7's droplet cap
import { SWIM2_ON, SWIM2, SWIM2_POINT, swim2CapPx } from './tunnel_s4_swim2.js';   // ?s3=intunnel,swim2: R7's droplet cap once she swims (visual only)
import { BLEND_ON, blendPose, blendFurCentre } from './tunnel_s4_blend.js';   // ?s3=intunnel,blend: her drawn proportions, ride height and landing (visual only)
import { STRUCT_PARTS, structCrown, structFurFragment, structFill, structFurUniforms, structPrivately, structShellFur } from './tunnel_s4_struct.js';   // ?s3=intunnel,structmatch: the fill between her legs (and, with ,hero2, her crown and fur); visual only
import { HOME_ON, homeHolds } from './screens12.js';   // ?s3=...,home: Screen 1 (Home) and Screen 2 (Laundry Toss) in front of the live game
import { LEVEL1_ON, COURSE, buildLevel1 } from './level1.js';
import { TRIPO1_ON, SCENE07_ON, applyTripo1, scene07Camera } from './tripo_l1.js';   // ?s3=...,level1,tripo1 (session 57091b57): Tripo models from the original board, looks only
import { flowCamX } from './level1_flow.js';
import { S56_ON, buildS56 } from './s56_tunnel.js';
import { SWIM7_ON, SWIM7, swim7Reset, swim7Burst, swim7Dive, swim7Speed, swim7Pose, swim7Camera } from './swim7.js';   // ?s3=...,level1,swim7 (session 8da775c4): natural swimming controls (swipe up = swim burst, swipe down = dive; no jump gesture)
import { ENV6_ON, env6Post, env6Grade, installFin6Grade } from './s56_env6.js';   // ?s3=...,s56,...,env6 (session ddf175f2): the integrated Screen 6 candidate's post (bloom only on HDR lights)
import { installHud56 } from './hud56.js';   // ?s3=...,s56: the approved screens' HUD look (hud56.js, CSS under body.s56 only)   // ?s3=...,level1,s56 (session ac4e3449): the approved Scene 5 / 6 lavender laundry-machine tunnel as the run's environment (s56_tunnel.js)   // ?s3=...,level1 (flow on by default; ,noflow = before): the camera on Level 1's side paths   // ?s3=...,level1: the run goes on through Level 1's sections (no loop), her swim strokes; the 3D Laundry Toss opening
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as W from './world.js';
import * as SH from './shaders.js';
import { makeTrack } from './track.js';
import { buildScenery } from './scenery.js';
import { buildDecor, DECOR } from './decor.js';
import { buildOpening, OPENING_ON, OPENING_PARTS, withPrivateRandom, withPrivateRandomAsync, makeRandom } from './opening.js';
import { S3 as S3_SWITCHES } from './screen3_models.js';
import { SOCK3_ON, COIN3_ON, COIN6_ON, PLAY3, play3Loader, coin3Prepare } from './play_tripo3.js';   // ?s3=...,six,sock3 / coin3 (session 6ddc157f): the user's new Tripo sock and paw coin, looks only
import { pawCoinGeometry, pawCoinMaterial } from './paw_coin.js';
import { ROUND3, mulberry } from './tunnel_r3.js';
import { ROUND4 } from './tunnel_r4.js';
import { ROUND5 } from './tunnel_r5.js';
import { ROUND6, R6_ON, R7_ON, lemonGold } from './tunnel_r6.js';
import { HERO_ON, HERO } from './tunnel_r7_hero.js';
import { MATCH_ON, MATCH, MATCH_READY, matchCollectibles } from './tunnel_r9_match.js';   // ?s3=match only (Round 9)
import { phoneFov } from './match_phone.js';   // ?s3=match only: the phone framing (the original's vertical framing on taller screens)
// ?s3=round2 (test only): the Screen 4 controls and the tidied tunnel. Hearts that the brushes take, Bubble Blast, Turbo Spin,
// a pause button in place of the gameplay gear, embossed gold paw coins, and collectibles laid out in clean lane lines.
// Without the switch none of it runs and the game is drawn exactly as before.
const R2 = !!S3_SWITCHES.round2;
const R2_RULES = {
  hearts: 5, hurtGuard: 1.0,            // a knock takes one heart; no second knock for this long
  outOfHearts: 1.4,                     // with no hearts left, back to Tap to Start (5 hearts again) after this long
  blasts: 3, blastTime: 3.0, blastReach: 13,   // Bubble Blast: brushes up to 13 m ahead are pushed back to the wall, for 3 s
  turbos: 3, turboTime: 2.5, turboSpeed: 1.45, // Turbo Spin: faster, spinning, brushes cannot knock the mascot
  // the tunnel's collectibles in clean lines (u: metres along the path; lane 0 left, 1 middle, 2 right). Coin trails lead
  // through the safe lane past each brush and end at a sock; brushes stand at 6.0 L, 6.7 R, 16.6 R, 18.8 L, 26.0 L, 26.7 R.
  coinH: 0.7, sockH: 0.88, gemH: 0.85,
  coinLines: [[1, 4.4, 5], [0, 10.8, 3], [1, 16.8, 2], [2, 18.6, 3], [1, 23.4, 5], [0, 29.8, 3]], coinStep: 1.0,
  socks: [[1, 9.6], [0, 14.0], [2, 21.8], [1, 28.6], [0, 33.0]],
  gems: [[1, 15.6], [0, 34.2]],
};
const r2Hooks = {};   // filled in by tunnel_s4.js (clearBrushes, hazards); pop is set below
// ?s3=round3 (test only, on top of round2): the third visual pass toward the approved Screen 4 (tunnel_r3.js). Here: the
// collectibles arranged around the mascot as in the approved picture (big coins rising on both sides, a purple gem up on the
// left, a sock on the right, the middle lane ahead left open to show the tunnel's depth), all still real and collectable
// (every coin is within reach while riding: 1.1 m at most); a purple gem; white spray and sparkles; and the drum camera
// tilted a little up, so the mascot sits lower in the picture as in the approved screen. Brushes, lanes and rules as round2.
const R3 = !!S3_SWITCHES.round3;
const R5 = !!S3_SWITCHES.round5;   // ?s3=round5 (tunnel_r5.js): the major visual reconstruction, on top of round4
const R4 = !!S3_SWITCHES.round4;   // ?s3=round4 (tunnel_r4.js): the reconstruction of the approved Screen 4, on top of round3
if (R3) Object.assign(R2_RULES, {
  // [lane, first u, count, step, height at the ends, extra height in the middle of the line]
  coinLines: [[1, 4.0, 3, 1.0, 0.7, 0], [2, 10.1, 1, 1.0, 0.55, 0], [0, 11.2, 3, 1.4, 0.92, 0.18], [1, 15.0, 3, 1.0, 0.72, 0], [2, 18.4, 3, 1.0, 0.7, 0], [1, 23.4, 5, 1.0, 0.7, 0], [0, 29.8, 3, 1.0, 0.7, 0]],
  socks: [[1, 7.6], [2, 12.1], [2, 21.8], [1, 28.6], [0, 33.0]],
  gems: [[0, 14.6], [0, 34.2]], gemH: 1.0,
});
if (R3 && R6_ON) {   // ?s3=round6 pass 3: the collectibles at the drum's mouth as in the exact target board (tunnel_r6.js layout)
  const Lt = ROUND6.layout;
  R2_RULES.coinLines = [...Lt.coinLines, ...R2_RULES.coinLines.slice((R7_ON && Lt.replace) || 1)];   // round7: replaces more of round3's lines (moved, none lost)
  R2_RULES.socks = [Lt.firstSock, ...R2_RULES.socks.slice(1)];
  R2_RULES.gems = [Lt.extraGem, ...R2_RULES.gems];
  if (MATCH_ON && MATCH.farGem) R2_RULES.gems[1] = MATCH.farGem;   // ?s3=match: the far gem off the vanishing point (tunnel_r9_match.js)
  if (MATCH_ON && MATCH.secondSock) R2_RULES.socks[1] = MATCH.secondSock;   // ?s3=match: the second sock off the centre coin (tunnel_r9_match.js)
}
const r3Rnd = R3 ? mulberry(0x3e3b) : null;   // round3's own random numbers (the game's own sequence is unchanged)

const TEST = !!window.__BW_TEST__;
if (INTUNNEL_ON) document.body.classList.add('intunnel');   // ?s3=intunnel (page.html: no Screen 3 banner)
// Debug views for play-test recordings: ?side shows the run from the side with the camera fixed in
// height (proves the mascot's real climbs and drops); ?touches draws each finger trail and the gesture
// it was read as (proves the swipes are recognised).
const SIDE = !!window.__BW_SIDE__ || /[?&]side(=|&|$)/.test(location.search);
const SHOW_TOUCHES = !!window.__BW_TOUCHES__ || /[?&]touches(=|&|$)/.test(location.search);
if (SIDE) document.body.classList.add('side');
const $ = (id) => document.getElementById(id);
const V3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
const C = (hex) => new THREE.Color(hex);

// ------------------------------------------------------------------ renderer, scene, camera
const stage = $('stage');
const canvas = $('view');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.05;
let pixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
renderer.setPixelRatio(pixelRatio);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, 0.5, 0.1, 200);
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
// Soft glow over the bright parts of the scene, as in the approved artwork.
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 512), 0.32, 0.45, 0.97);
composer.addPass(bloom);
const gradePass = new ShaderPass(SH.GradeShader);
composer.addPass(gradePass);
composer.addPass(new OutputPass());

scene.add(new THREE.HemisphereLight(0xffe9ff, 0x6ea8ff, 1.1));
const sun = new THREE.DirectionalLight(0xfff2e6, 1.7);
sun.position.set(-3, 6, -4);
scene.add(sun);
const SUN_DIR = sun.position.clone().normalize();
// A cool rim light from behind and above: bright edges on the machinery and wheels.
const rimLight = new THREE.DirectionalLight(0xcfe8ff, 1.3);
rimLight.position.set(2, 7, 12);
scene.add(rimLight);

// ------------------------------------------------------------------ loading
const files = {
  layout: 'models/layout.json', castle: 'models/castle.glb', drum: 'models/drum.glb',
  mascot: 'models/mascot.glb', roller: 'models/roller.glb', gem: 'models/gem.glb', sock: SOCK3_ON ? PLAY3.sock : 'models/sock.glb', machinery: 'models/machinery.glb',
  coin3: PLAY3.coin, coin3Lo: PLAY3.coinLo,   // (?s3=...,six,coin3 only)
  tower: 'models/tower.glb', gear: 'models/gear.glb', pipe: 'models/pipe.glb', crown: 'models/crown.glb',
  // ?s3=round5: the gold paw coin generated with Tripo P2 from the user's coin sheet (both faces embossed), and a light copy
  coinP2: 'models/coin_p2.glb', coinP2Lo: 'models/coin_p2_lo.glb',
};
const progress = {};
function showProgress() {
  let loaded = 0, total = 0;
  for (const p of Object.values(progress)) { loaded += p.loaded; total += p.total || p.loaded; }
  const pct = total > 0 ? Math.round((loaded / total) * 100) : 0;
  $('loadBar').style.width = pct + '%';
  $('loadPct').textContent = pct + '%';
}
const gltfLoader = play3Loader(new GLTFLoader());   // (the meshopt decoder only with sock3 / coin3 / enemy3)
async function fetchBytes(url, key) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  const total = +res.headers.get('content-length') || 0;
  const reader = res.body.getReader(), chunks = [];
  let loaded = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value); loaded += value.length;
    progress[key] = { loaded, total: Math.max(total, loaded) }; showProgress();
  }
  const out = new Uint8Array(loaded); let o = 0;
  for (const c of chunks) { out.set(c, o); o += c.length; }
  return out;
}
// Each model is a .glb; where a host cannot serve .glb (the published preview), the same bytes come
// as base64 inside models/<name>.glb.json.
const JSON_MODELS = window.__BW_MODEL_FORMAT__ === 'json';
async function loadGltf(key) {
  let bytes;
  try { if (JSON_MODELS) throw new Error('json'); bytes = await fetchBytes(files[key], key); }
  catch {
    const json = JSON.parse(new TextDecoder().decode(await fetchBytes(files[key] + '.json', key)));
    const bin = atob(json.data); bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  }
  return gltfLoader.parseAsync(bytes.buffer, '');
}

let L; // exported Unity layout
let TR; // the run's 3D path (track.js)
const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };   // scratch frame
const state = {
  phase: 'loading', time: INTUNNEL_ON ? INTUNNEL.clock : 0, coins: 1280, gems: 36, socks: 0, sound: true,   // (?s3=intunnel: the clock of the approved moment, so the start screen's animations are in its pose)
  collected: { coins: 0, gems: 0 }, laps: 0,
};
if (R2) Object.assign(state, { hearts: R2_RULES.hearts, blasts: R2_RULES.blasts, turbos: R2_RULES.turbos, paused: false, blastT: 0, turboT: 0, guardT: 0, outT: -1, knocks: 0, restarts: 0 });

// ------------------------------------------------------------------ materials
const mats = {};
function bakedMaterial(src, opts = {}) {
  // Meshy colour texture rendered as baked art with a saturation/brightness lift (Unity MeshyBaked).
  const m = new THREE.MeshBasicMaterial({ map: src.map || null, color: 0xffffff, vertexColors: !!opts.vertexColors, side: THREE.DoubleSide });
  const sat = opts.saturation ?? 1.15, bright = opts.brightness ?? 1.0, glow = opts.glow ?? 0.0;
  const haze = opts.haze;   // [amount, near m, far m, colour]: soft distance haze, as over the approved castle
  const shade = opts.shade;   // [base, light amount, rim]: soft directional light and a bright rim on the baked colour
  m.onBeforeCompile = (s) => {
    if (shade) {
      s.vertexShader = s.vertexShader.replace('void main() {', 'varying vec3 vShadeN; varying vec3 vShadeP;\nvoid main() {\n  vShadeN = normalize(mat3(modelMatrix) * normal);\n  vShadeP = (modelMatrix * vec4(position, 1.0)).xyz;');
      s.fragmentShader = 'varying vec3 vShadeN; varying vec3 vShadeP;\n' + s.fragmentShader;
    }
    if (haze) {
      s.vertexShader = s.vertexShader.replace('void main() {', 'varying float vHazeDepth;\nvoid main() {')
        .replace('#include <project_vertex>', '#include <project_vertex>\n  vHazeDepth = -mvPosition.z;');
      s.fragmentShader = 'varying float vHazeDepth;\n' + s.fragmentShader;
    }
    if (opts.afterColor) {   // extra colour work after the vertex colours, with the mesh's own position
      s.vertexShader = s.vertexShader.replace('void main() {', 'varying vec3 vObj;\nvoid main() {\n  vObj = position;');
      s.fragmentShader = s.fragmentShader.replace('void main() {', 'varying vec3 vObj;\nvoid main() {')
        .replace('#include <color_fragment>', '#include <color_fragment>\n' + opts.afterColor);
    }
    if (opts.grade || opts.afterColor) s.fragmentShader = s.fragmentShader.replace('void main() {', `${SH.HSV_GLSL}\nvoid main() {`);
    s.fragmentShader = s.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
      ${opts.grade || ''}
      { float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
        diffuseColor.rgb = mix(vec3(l), diffuseColor.rgb, ${sat.toFixed(3)}) * ${bright.toFixed(3)};
        diffuseColor.rgb += diffuseColor.rgb * smoothstep(0.55, 0.95, l) * ${glow.toFixed(3)};
        diffuseColor.rgb += (1.0 - min(diffuseColor.rgb, 1.0)) * ${(opts.lift ?? 0).toFixed(3)}; }
      ${shade ? `{ vec3 N = normalize(vShadeN) * (gl_FrontFacing ? 1.0 : -1.0);
        vec3 V = normalize(cameraPosition - vShadeP);
        float key = dot(N, normalize(vec3(0.45, 0.75, -0.5)));
        float rim = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 3.0) * clamp(dot(N, vec3(0.0, 0.6, 0.8)) + 0.4, 0.0, 1.0);
        diffuseColor.rgb *= ${shade[0].toFixed(3)} + ${shade[1].toFixed(3)} * key;
        diffuseColor.rgb += vec3(0.85, 0.9, 1.0) * rim * ${shade[2].toFixed(3)}; }` : ''}
      ${haze ? `diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${haze[3].map((v) => v.toFixed(3)).join(', ')}), ${haze[0].toFixed(3)} * smoothstep(${haze[1].toFixed(2)}, ${haze[2].toFixed(2)}, vHazeDepth));` : ''}`);
  };
  // three.js caches compiled shaders by the onBeforeCompile source text, which is the same for every
  // baked material; without its own key, a material could reuse another's shader and its settings
  // (a model once rendered with the brushes' recolour). The key holds everything the code above bakes in.
  const key = 'baked:' + JSON.stringify([sat, bright, glow, opts.lift ?? 0, haze || 0, shade || 0, opts.grade || '', opts.afterColor || '']);
  m.customProgramCacheKey = () => key;
  return m;
}

// ------------------------------------------------------------------ world
let water, waterU, mascot, rig, fx, scenery, decor, opening = null;
let level1 = null;   // ?s3=...,level1 (level1.js)
let s56 = null;   // ?s3=...,level1,s56 (s56_tunnel.js)
const coins = [], gems = [], socks = [], rollers = [], fallsU = [];
const tmpM = new THREE.Matrix4(), tmpM2 = new THREE.Matrix4(), tmpQ = new THREE.Quaternion();

function buildSky() {
  const sky = new THREE.Mesh(new THREE.SphereGeometry(170, 32, 16), new THREE.ShaderMaterial({
    vertexShader: SH.skyVertex, fragmentShader: SH.skyFragment, side: THREE.BackSide, depthWrite: false,
    // Pale lavender haze behind the castle, as in the approved Screen 3 (it was a pink-violet gradient).
    uniforms: { uTop: { value: C(0xc2b0ff) }, uMid: { value: C(0xe6d6ff) }, uHorizon: { value: C(0xfaeeff) }, uBottom: { value: C(0x8fbcff) } },
  }));
  sky.renderOrder = -10;
  scene.add(sky);
  // Environment reflections for the gold, blue and gems: the same sky plus a few bright soft panels
  // (white overhead, warm pink and cool cyan at the sides), so glossy surfaces catch highlights and
  // read round, like the approved artwork, instead of mirroring an even pastel sky.
  const envScene = new THREE.Scene();
  const envSky = sky.clone();   // a deeper copy of the sky, so metals show shading as well as highlights
  envSky.material = sky.material.clone();
  envSky.material.uniforms = { uTop: { value: C(0x6f5fc0) }, uMid: { value: C(0x9a86d8) }, uHorizon: { value: C(0xd6b8f0) }, uBottom: { value: C(0x23306f) } };
  envScene.add(envSky);
  for (const [pos, size, col] of [[[0, 60, 10], [90, 50], [3.2, 3.0, 3.2]], [[-70, 25, 20], [40, 60], [2.6, 1.6, 2.4]],
    [[70, 20, 10], [40, 60], [1.4, 2.4, 3.0]], [[0, 18, -80], [70, 30], [2.0, 1.9, 2.2]], [[0, 10, 85], [60, 25], [1.6, 2.0, 2.8]]]) {
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(...size), new THREE.MeshBasicMaterial({ color: new THREE.Color(...col), side: THREE.DoubleSide }));
    panel.position.set(...pos); panel.lookAt(0, 0, 0); envScene.add(panel);
  }
  const pmrem = new THREE.PMREMGenerator(renderer);
  mats.env = pmrem.fromScene(envScene, 0.02, 0.1, 400).texture;   // far plane beyond the 170 m sky
  mats.gold = new THREE.MeshStandardMaterial({ color: 0xffbf45, metalness: 1, roughness: 0.22, envMap: mats.env, envMapIntensity: 1.25, emissive: 0x3a2200, emissiveIntensity: 0.35 });
}

/** Replace zero-length or invalid normals (left by Meshy's decimation) so lighting never produces NaN. */
function repairNormals(root) {
  let fixed = 0;
  root.traverse((o) => {
    if (!o.isMesh) return;
    // The web copy of an unlit model has no normals (the optimiser drops unused attributes): rebuild them.
    if (!o.geometry.attributes.normal) { o.geometry.computeVertexNormals(); fixed += 1e6; }
    const src = o.geometry.attributes.normal, n = new Float32Array(src.count * 3);
    for (let i = 0; i < src.count; i++) {
      let x = src.getX(i), y = src.getY(i), z = src.getZ(i);
      const len = Math.hypot(x, y, z);
      if (!(len > 1e-4)) { x = 0; y = 1; z = 0; fixed++; } else { x /= len; y /= len; z /= len; }
      n[i * 3] = x; n[i * 3 + 1] = y; n[i * 3 + 2] = z;
    }
    o.geometry.setAttribute('normal', new THREE.BufferAttribute(n, 3));
  });
  return fixed;
}

function place(obj, matrixArray) {
  const g = new THREE.Group();
  g.matrixAutoUpdate = false;
  g.matrix.fromArray(matrixArray);
  g.add(obj);
  scene.add(g);
  return g;
}

function bake(root, opts, perMesh) {
  root.traverse((o) => {
    if (!o.isMesh) return;
    o.material = bakedMaterial(o.material, { ...opts, ...(perMesh ? perMesh(o) : {}), vertexColors: !!o.geometry.attributes.color });
    o.frustumCulled = true;
  });
}

function buildWater() {
  const cols = [];
  for (let i = 0; i <= 10; i++) cols.push(-30 + (30 - 3.2) * Math.pow(i / 10, 0.55));
  for (let i = 1; i < 40; i++) cols.push(-3.2 + 6.4 * (i / 40));
  for (let i = 10; i >= 0; i--) cols.push(30 - (30 - 3.2) * Math.pow(i / 10, 0.55));
  // A grid in track coordinates; every vertex carries the path frame at its u, so the vertex shader
  // lays the sheet onto the 3D path (it climbs, drops and banks with the bent drum).
  const sheet = (xs, z0, z1, dz) => {
    const rows = Math.ceil((z1 - z0) / dz) + 1, nv = rows * xs.length;
    const pos = new Float32Array(nv * 3), tr = new Float32Array(nv * 2);
    const aP = new Float32Array(nv * 3), aR = new Float32Array(nv * 3), aU = new Float32Array(nv * 3), aT = new Float32Array(nv * 3);
    const idx = [];
    for (let r = 0; r < rows; r++) {
      const z = z0 + ((z1 - z0) * r) / (rows - 1);
      TR.frame(z, F);
      for (let c = 0; c < xs.length; c++) {
        const k = r * xs.length + c, x = xs[c];
        tr[k * 2] = x; tr[k * 2 + 1] = z;
        F.P.toArray(aP, k * 3); F.R.toArray(aR, k * 3); F.U.toArray(aU, k * 3); F.T.toArray(aT, k * 3);
        pos[k * 3] = F.P.x + F.R.x * x; pos[k * 3 + 1] = F.P.y + F.R.y * x; pos[k * 3 + 2] = F.P.z + F.R.z * x;
      }
    }
    for (let r = 0; r < rows - 1; r++) for (let c = 0; c < xs.length - 1; c++) {
      const a = r * xs.length + c, b = a + xs.length;
      idx.push(a, b, a + 1, b, b + 1, a + 1);   // counter-clockwise from above (three.js front face)
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aTrack', new THREE.BufferAttribute(tr, 2));
    for (const [name, arr] of [['aP', aP], ['aR', aR], ['aU', aU], ['aT', aT]]) g.setAttribute(name, new THREE.BufferAttribute(arr, 3));
    g.setIndex(idx);
    g.computeBoundingSphere();
    g.boundingSphere.radius += 3;
    return g;
  };
  const ripples = []; for (let i = 0; i < SH.RIPPLES; i++) ripples.push(new THREE.Vector4(0, 0, -99, 0));
  waterU = {
    uTime: { value: 0 }, uTunnel: { value: new THREE.Vector4(L.tunnelStart, L.tunnelEnd, L.tunnelRadius, L.axisHeight) },
    uRipples: { value: ripples }, uPlayer: { value: new THREE.Vector3() }, uPlayerMove: { value: new THREE.Vector3() },
    uFlow: { value: 9 }, uSlideHalf: { value: W.SLIDE.half },
    uDeep: { value: C(0x0636d8) }, uShallow: { value: C(0x1f9bff) }, uTurq: { value: C(0x3eeaf8) }, uGlow: { value: C(0x9af2ff) },
    uSky: { value: C(0xa9c4ff) }, uPink: { value: C(0xff9be0) }, uGold: { value: C(0xffcc5a) },
    uRingA: { value: C(0xffd873) }, uRingB: { value: C(0x8ce6ff) }, uFog: { value: C(0xccccff) }, uSunDir: { value: SUN_DIR },
    uRings: { value: new THREE.Vector3(L.tunnelStart + 0.25, L.segmentLength - Math.max(0.02, L.segmentLength * 0.005), 4) },
    uOpen: { value: 0 },   // the Screen 3 opening look on the slide (opening.js); 0 = the original water
  };
  const mat = new THREE.ShaderMaterial({ vertexShader: SH.waterVertex, fragmentShader: SH.waterFragment, uniforms: waterU });
  const drumXs = []; for (let i = 0; i <= 28; i++) drumXs.push(-2.1 + 4.2 * (i / 28));
  water = new THREE.Group();
  water.add(new THREE.Mesh(sheet(cols, L.startZ - 30, L.tunnelStart + 2.5, 0.3), mat));
  water.add(new THREE.Mesh(sheet(drumXs, L.tunnelStart - 0.5, L.tunnelEnd + 6, 0.25), mat));
  scene.add(water);
}

function buildRails() {
  // The raised slide is a flume, as in the approved Screen 3: a pearly lavender wall along each edge,
  // capped by a thick gold rail and a row of chunky gold segments set with blue gem studs, all riding
  // the slide's hills.
  const blueGem = new THREE.MeshStandardMaterial({ color: 0x2f6bff, metalness: 0.2, roughness: 0.12, envMap: mats.env, envMapIntensity: 1.6, emissive: 0x0a2a9a, emissiveIntensity: 0.5 });
  const pearl = new THREE.MeshStandardMaterial({ color: 0xe6d8ff, metalness: 0.15, roughness: 0.32, envMap: mats.env, envMapIntensity: 1.0, side: THREE.DoubleSide });
  const goldWarm = new THREE.MeshStandardMaterial({ color: 0xf2a93b, metalness: 1, roughness: 0.3, envMap: mats.env, envMapIntensity: 1.25, emissive: 0x3a2200, emissiveIntensity: 0.6 });
  const z0 = L.startZ - 24, z1 = -0.6, step = 0.62;
  const nSeg = Math.floor((z1 - z0) / step) + 1;
  const segs = new THREE.InstancedMesh(new RoundedBoxGeometry(0.22, 0.26, 0.5, 2, 0.06), goldWarm, nSeg * 2);
  const studs = new THREE.InstancedMesh(new THREE.SphereGeometry(0.055, 12, 8), blueGem, nSeg * 2);
  // Wall cross-section (sideways offset from the slide edge, height above the edge's water level).
  const profile = [[-0.06, -0.06], [0.04, 0.1], [0.14, 0.2], [0.26, 0.2], [0.34, 0.08], [0.36, -0.8]];
  let k = 0;
  for (const side of [-1, 1]) {
    const pos = [], idx = [], top = [];
    let rows = 0;
    for (let z = z0; z <= z1 + 1e-6; z += 0.25, rows++) {
      const y = W.baseHeight(L, side * W.SLIDE.half, z);
      for (const [dx, dy] of profile) pos.push(side * (W.SLIDE.half + dx), y + dy, z);
      top.push(new THREE.Vector3(side * (W.SLIDE.half + 0.2), y + 0.26, z));
    }
    const n = profile.length;
    for (let r = 0; r < rows - 1; r++) for (let c = 0; c < n - 1; c++) { const a = r * n + c, b = a + n; idx.push(a, b, a + 1, b, b + 1, a + 1); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    scene.add(new THREE.Mesh(g, pearl));
    scene.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(top), top.length * 2, 0.1, 14), mats.gold));
    for (let i = 0; i < nSeg; i++, k++) {
      const z = z0 + i * step, y = W.baseHeight(L, side * W.SLIDE.half, z);
      const slope = (W.baseHeight(L, side * W.SLIDE.half, z + 0.2) - W.baseHeight(L, side * W.SLIDE.half, z - 0.2)) / 0.4;
      tmpQ.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.atan(slope));
      segs.setMatrixAt(k, tmpM.compose(new THREE.Vector3(side * (W.SLIDE.half + 0.36), y + 0.1, z), tmpQ, new THREE.Vector3(1, 1, 1)));
      studs.setMatrixAt(k, tmpM.makeTranslation(side * (W.SLIDE.half + 0.48), y + 0.1, z));
    }
  }
  scene.add(segs, studs);
}

function fallGeometry(throwDist, drop, w0, w1, across = 12, along = 26) {
  // Port of ProceduralMeshes.Waterfall: ballistic half-ellipse column, rows evenly spaced along the curve.
  const samples = 200, arc = [0];
  let prev = new THREE.Vector3();
  for (let k = 1; k <= samples; k++) {
    const t = k / samples, p = new THREE.Vector3(0, -drop * t * t, throwDist * t);
    arc.push(arc[k - 1] + p.distanceTo(prev)); prev = p;
  }
  const total = arc[samples];
  const pos = [], nor = [], uv = [], prog = [], idx = [];
  let seek = 0;
  for (let r = 0; r <= along; r++) {
    const s = r / along, target = s * total;
    while (seek < samples - 1 && arc[seek + 1] < target) seek++;
    const tau = (seek + Math.min(1, Math.max(0, (target - arc[seek]) / Math.max(1e-6, arc[seek + 1] - arc[seek])))) / samples;
    const centre = new THREE.Vector3(0, -drop * tau * tau, throwDist * tau);
    const tan = new THREE.Vector3(0, -2 * drop * tau, throwDist).normalize();
    const out = new THREE.Vector3(0, tan.z, -tan.y);
    const w = w0 + (w1 - w0) * s, a = w * 0.5, b = w * 0.35;
    for (let j = 0; j <= across; j++) {
      const th = (Math.PI * j) / across, cx = -Math.cos(th), sy = Math.sin(th);
      const p = centre.clone().add(new THREE.Vector3(cx * a, 0, 0)).addScaledVector(out, sy * b);
      const n = new THREE.Vector3(cx / a, 0, 0).addScaledVector(out, sy / b).normalize();
      pos.push(p.x, p.y, p.z); nor.push(n.x, n.y, n.z); uv.push(j / across, target); prog.push(s);
    }
  }
  for (let r = 0; r < along; r++) for (let j = 0; j < across; j++) {
    const i0 = r * (across + 1) + j, i1 = i0 + across + 1;
    idx.push(i0, i0 + 1, i1, i1, i0 + 1, i1 + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('progress', new THREE.Float32BufferAttribute(prog, 1));
  g.setIndex(idx);
  return g;
}

function buildWaterfalls() {
  const u = { uTime: { value: 0 }, uLipSpeed: { value: 1.2 }, uStreakLen: { value: 0.35 },
    uDeep: { value: C(0x0052ff) }, uBright: { value: C(0x40dbff) }, uSky: { value: C(0xd9b8ff) }, uPink: { value: C(0xff99e6) } };
  fallsU.push(u);
  const falls = new THREE.Group(); scene.add(falls); mats.falls = falls;
  const mat = new THREE.ShaderMaterial({ vertexShader: SH.fallVertex, fragmentShader: SH.fallFragment, uniforms: u,
    transparent: true, depthWrite: false, side: THREE.DoubleSide });
  mats.fallMat = mat;   // shared with the water pouring from the Meshy towers' pipe elbows (decor.js)
  const addFall = (from, to, w0, w1) => {
    const flat = to.clone().sub(from); const drop = from.y - to.y; flat.y = 0;
    const mesh = new THREE.Mesh(fallGeometry(Math.max(0.02, flat.length()), Math.max(0.05, drop), w0, w1), mat);
    mesh.position.copy(from);
    mesh.lookAt(from.clone().add(flat.lengthSq() > 1e-6 ? flat.normalize() : new THREE.Vector3(0, 0, -1)));
    mesh.renderOrder = 2;
    falls.add(mesh);
  };
  const pipe = (a, b, r) => {
    const d = b.clone().sub(a), len = d.length();
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 16), mats.gold);
    m.position.copy(a).add(b).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    falls.add(m);
  };
  for (const f of L.waterfalls) {
    const lip = V3(f.lip), basin = V3(f.basin), over = V3(f.overflow), land = V3(f.landing), tower = V3(f.tower);
    const w = f.width, pipeR = w * 0.42;
    addFall(lip, basin.clone().add(new THREE.Vector3(0, -0.02, 0)), w * 0.7, w * 0.85);
    addFall(over, land, w * 0.9, w * 1.15);
    pipe(lip.clone().add(new THREE.Vector3(0, pipeR * 0.45, 0)), tower.clone().add(new THREE.Vector3(0, pipeR * 0.45, 0.3)), pipeR);
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(f.basinRadius, f.basinRadius * 0.8, 0.18, 24), mats.gold);
    bowl.position.copy(basin).add(new THREE.Vector3(0, -0.1, 0)); falls.add(bowl);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(f.basinRadius, 0.07, 8, 32), mats.gold);
    rim.position.copy(basin); rim.rotation.x = Math.PI / 2; falls.add(rim);
    pipe(basin.clone().add(new THREE.Vector3(0, -0.12, 0)), V3(f.basinTower).add(new THREE.Vector3(0, -0.12, 0.3)), 0.08);
    fx.addSource({ pos: land.clone().setY(-0.6), rate: 22, kind: 1, spread: w * 0.5, up: 1.6, size: 0.55 });
    fx.addSource({ pos: land.clone().setY(-0.6), rate: 30, kind: 0, spread: w * 0.4, up: 2.4, size: 0.12 });
    fx.addSource({ pos: basin.clone(), rate: 10, kind: 1, spread: w * 0.3, up: 0.9, size: 0.35 });
  }
}

function buildDrumLights() {
  const ring = new THREE.TorusGeometry(L.tunnelRadius * 0.965, 0.075, 8, 72);
  const zs = [];
  const step = L.segmentLength - Math.max(0.02, L.segmentLength * 0.005);
  for (let i = 0; i < 3; i++) zs.push(L.tunnelStart + i * step + 0.25);
  zs.push(L.tunnelEnd - 0.25);
  zs.forEach((z, i) => {
    const m = new THREE.Mesh(ring, new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? new THREE.Color(2.6, 2.0, 0.95) : new THREE.Color(1.4, 2.2, 2.9) }));
    m.matrixAutoUpdate = false;
    TR.mapMatrix(new THREE.Matrix4().makeTranslation(0, W.WATER + W.AXIS_H, z), m.matrix);
    m.userData.pulse = i * 0.9;
    m.userData.base = m.material.color.clone();
    scene.add(m);
    mats.rings = mats.rings || []; mats.rings.push(m);
  });
  // The tunnel's far end opens onto a bright portal of light (white core, pale cyan, lavender and pink
  // rays), like the glowing heart of the approved vortex, instead of plain sky. The run flashes back to
  // the slide inside this light (Screens 5 onward are not built yet).
  const atEnd = (du, size, mat, order) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
    m.matrixAutoUpdate = false; m.renderOrder = order;
    TR.mapMatrix(new THREE.Matrix4().makeTranslation(0, W.WATER + W.AXIS_H, L.tunnelEnd + du).multiply(new THREE.Matrix4().makeRotationY(Math.PI)), m.matrix);
    scene.add(m);
    return m;
  };
  mats.exitLight = [atEnd(4.5, 16, new THREE.MeshBasicMaterial({ map: lightTexture(), toneMapped: false }), 0)];
  mats.exitLight[1] = atEnd(1.5, 7,new THREE.MeshBasicMaterial({ map: radialTexture(), color: new THREE.Color(0.9, 1.1, 1.4), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }), 3);
}

function lightTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(256, 256, 0, 256, 256, 256);
  grd.addColorStop(0, '#ffffff'); grd.addColorStop(0.22, '#f4fbff'); grd.addColorStop(0.45, '#bfe9ff');
  grd.addColorStop(0.7, '#d9c4ff'); grd.addColorStop(1, '#ffc6ec');
  g.fillStyle = grd; g.fillRect(0, 0, 512, 512);
  g.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 18; i++) {   // soft rays
    const a = (i / 18) * Math.PI * 2 + (i % 2) * 0.09, w = 0.05 + (i % 3) * 0.025;
    const ray = g.createRadialGradient(256, 256, 30, 256, 256, 256);
    ray.addColorStop(0, 'rgba(255,255,255,0.32)'); ray.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = ray; g.beginPath(); g.moveTo(256, 256);
    g.arc(256, 256, 256, a - w, a + w); g.closePath(); g.fill();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function radialTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'); const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.4, 'rgba(255,255,255,0.45)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// Screen 3 washing brushes (the Meshy roller), spinning beside the slide: one high on the left above the
// Meshy side machinery (which holds the approved lower-left spot), seen nearly end-on, and one on the
// right showing its pink fringe. [track x, h, u], axis, diameter (m), spin (deg/s).
const SCREEN3_BRUSHES = [
  { at: [2.55, 2.25, -3.4], axis: [-0.3, 0.05, -0.95], d: 1.8, spin: 110 },   // upper left, above the Meshy side machinery (which holds the lower-left spot)
  { at: [-2.45, 1.3, -5.0], axis: [0.3, 0.05, -0.95], d: 1.8, spin: -95 },   // right, above the gold wheel: pink fringe
];
// The three Meshy drum segments, chained as in the Unity layout and then bent along the 3D path:
// every vertex's straight-layout z becomes its distance along the path and its x/y are carried by
// the path frame there. The segments stay seamless because they share one continuous frame.
function buildDrum(gltf) {
  // Lighter than the raw texture, and misting to a bright pale core with distance, like the white,
  // light-blue and pink vortex of the approved Screens 3 and 4.
  bake(gltf.scene, { saturation: 1.25, brightness: 1.1, glow: 0.9, lift: 0.08, haze: [0.45, 6, 32, [0.78, 0.86, 1.0]], shade: [0.88, 0.22, 0.25] });
  gltf.scene.updateMatrixWorld(true);
  const meshes = [];
  gltf.scene.traverse((o) => { if (o.isMesh) meshes.push(o); });
  const seg = new THREE.Matrix4(), full = new THREE.Matrix4(), v = new THREE.Vector3(), out = new THREE.Vector3();
  mats.drumMeshes = [];
  for (const arr of L.drumSegments) {
    seg.fromArray(arr);
    for (const mesh of meshes) {
      full.multiplyMatrices(seg, mesh.matrixWorld);
      const src = mesh.geometry, pos = src.attributes.position, p = new Float32Array(pos.count * 3);
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i).applyMatrix4(full);
        TR.map(v.x, v.y, v.z, out);
        p[i * 3] = out.x; p[i * 3 + 1] = out.y; p[i * 3 + 2] = out.z;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(p, 3));
      for (const name of ['uv', 'color']) if (src.attributes[name]) g.setAttribute(name, src.attributes[name]);
      g.setIndex(src.index);
      g.computeVertexNormals();   // for the soft shading on the baked colour
      g.computeBoundingSphere();
      const m = new THREE.Mesh(g, mesh.material);
      scene.add(m);
      mats.drumMeshes.push(m);
    }
  }
}

function buildRollers(gltf) {
  const src = gltf.scene;
  // Bristles recoloured as the approved brushes: blue toward the hub, a white band, a pink fringe.
  repairNormals(src);
  bake(src, { saturation: 1.25, brightness: 1.08, shade: [0.8, 0.38, 0.45] }, (o) => {
    if (!/Bristles/.test(o.material.name)) return {};
    const p = o.geometry.attributes.position; let rMax = 0;
    for (let i = 0; i < p.count; i++) rMax = Math.max(rMax, Math.hypot(p.getX(i), p.getZ(i)));
    return { afterColor: SH.brushGrade(rMax) };
  });
  // Screen 4 rollers from the Unity layout, carried onto the 3D path inside the drum.
  for (const r of L.rollers) {
    if (r.centre[2] < L.tunnelStart) continue;   // Screen 3's roller is replaced by SCREEN3_BRUSHES
    const g = new THREE.Group(); g.matrixAutoUpdate = false;
    g.add(src.clone());
    scene.add(g);
    if (R2) g.visible = false;   // round2: the drum's old rollers would stand beside the new spinning brushes (tunnel_s4.js)
    const c = V3(r.centre);
    rollers.push({ g, m0: TR.mapMatrix(new THREE.Matrix4().fromArray(r.matrix)), centre: TR.map(c.x, c.y, c.z), axis: TR.dir(r.axis[0], r.axis[1], r.axis[2], c.z).normalize(), speed: THREE.MathUtils.degToRad(r.spin), angle: 0 });
  }
  // Screen 3 brushes: fit the roller (its long axis is model Y) to the diameter and turn Y onto the axis.
  const box = new THREE.Box3().setFromObject(src), size = box.getSize(new THREE.Vector3()), mid = box.getCenter(new THREE.Vector3());
  for (const b of SCREEN3_BRUSHES) {
    const s = b.d / Math.max(size.x, size.z);
    const axis = new THREE.Vector3(...b.axis).normalize();
    const centre = TR.map(b.at[0], b.at[1], b.at[2]);
    const m0 = new THREE.Matrix4().compose(centre, new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), axis), new THREE.Vector3(s, s, s))
      .multiply(new THREE.Matrix4().makeTranslation(-mid.x, -mid.y, -mid.z));
    const g = new THREE.Group(); g.matrixAutoUpdate = false;
    g.add(src.clone());
    scene.add(g);
    rollers.push({ g, m0, centre, axis, speed: THREE.MathUtils.degToRad(b.spin), angle: Math.random() * 6 });
  }
}

// Your Meshy giant side washing machinery (Design/MeshyDeliveries/SideMachinery, the Medium copy
// unchanged in models/machinery.glb; the Balanced copy showed thin gold cracks across the bristles): the big blue wheel with pink, white and blue bristles, gold
// housing, pink star and piping, standing at the lower left of the slide as in the approved Screen 3.
// Its bristle wheel (model +Z) faces the camera, turned a little toward the slide; the pump and pipe
// (model -X) end up on the outer side. It is one combined mesh, so it stays still: the separate
// Meshy washing roller is the brush that spins. It keeps its own PBR textures (colour, metal and
// roughness, normals) with the scene's studio reflections, plus a little glow from its colours so the
// bristles stay bright without glare on the gold.
const SIDE_MACHINERY = { at: [2.7, 1.05, -8.0], yaw: 0.08, height: 2.8 };   // measured against the approved screen; nearest point to the lanes 1.18 m (the mascot reaches 1.10 m)
function buildSideMachinery(gltf) {
  const model = gltf.scene;
  model.traverse((o) => {
    if (!o.isMesh) return;
    const src = o.material;
    o.material = new THREE.MeshStandardMaterial({ map: src.map, metalnessMap: src.metalnessMap, roughnessMap: src.roughnessMap, normalMap: src.normalMap,
      metalness: 1, roughness: 1, envMap: mats.env, envMapIntensity: 1.05, emissive: 0xffffff, emissiveMap: src.map, emissiveIntensity: 0.2, side: THREE.DoubleSide });
  });
  const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3()), centre = box.getCenter(new THREE.Vector3());
  mats.sideMachineryModel = { model, size, centre };
  const g = new THREE.Group(); g.name = 'sideMachinery'; g.add(model);
  scene.add(g);
  mats.sideMachinery = g;
  placeSideMachinery();
}
/** Place it from SIDE_MACHINERY, and measure how close it comes to the lanes (its nearest point to the slide's middle at ride height). */
function placeSideMachinery() {
  const { model, size, centre } = mats.sideMachineryModel, g = mats.sideMachinery;
  const s = SIDE_MACHINERY.height / size.y;
  model.scale.setScalar(s); model.position.copy(centre).multiplyScalar(-s);
  g.position.set(...SIDE_MACHINERY.at); g.rotation.y = Math.PI + SIDE_MACHINERY.yaw;
  g.updateMatrixWorld(true);
  let inner = Infinity; const v = new THREE.Vector3();
  model.traverse((o) => {
    if (!o.isMesh) return;
    const p = o.geometry.attributes.position;
    for (let i = 0; i < p.count; i += 7) { v.fromBufferAttribute(p, i).applyMatrix4(o.matrixWorld); if (v.y < 1.4) inner = Math.min(inner, Math.abs(v.x)); }
  });
  state.machineryInnerX = +inner.toFixed(2);   // the mascot's body reaches |x| = lane 0.70 + radius 0.40 = 1.10
}

function buildBubbles() {
  const base = new THREE.PlaneGeometry(2, 2);
  const geo = new THREE.InstancedBufferGeometry();
  geo.index = base.index; geo.attributes.position = base.attributes.position; geo.attributes.uv = base.attributes.uv;
  const onPath = (x, h, u, r) => [...TR.map(x, h, u).toArray(), r];
  const list = L.bubbles.map((b) => onPath(b.pos[0], b.pos[1], b.pos[2], b.size * 0.5));
  // The big iridescent bubbles of the approved Screen 3: lower corners and the right side.
  for (const b of [[0.72, 0.42, -17.9, 0.24], [-0.82, 0.3, -17.6, 0.3], [-1.2, 1.05, -16.4, 0.2], [-2.05, 1.55, -13.6, 0.55],
    [-1.75, 0.55, -14.4, 0.3], [1.9, 1.75, -12.6, 0.24], [-2.4, 2.6, -10.2, 0.4], [1.4, 0.15, -15.6, 0.22]]) list.push(onPath(...b));
  for (let i = 0; i < 30; i++) {   // ambient bubbles floating over the slide and in the drum (never right in front of the start camera)
    const z = L.startZ + 2 + Math.random() * (L.tunnelEnd - L.startZ - 2);
    const inside = z > L.tunnelStart;
    let x = (Math.random() * 2 - 1) * (inside ? 1.6 : 4.5), h = (inside ? 1.0 : 0.8) + Math.random() * 2.2, r = 0.06 + Math.random() * 0.2;
    if (R2 && inside) { x = Math.sign(x || 1) * (1.35 + Math.abs(x) * 0.3); h = 2.1 + (h - 1.0) * 0.45; r *= 0.6; }   // round2: up on the walls, smaller, out of the lanes' view
    list.push(onPath(x, h, z, r));
  }
  geo.setAttribute('inst', new THREE.InstancedBufferAttribute(new Float32Array(list.flat()), 4));
  geo.setAttribute('phase', new THREE.InstancedBufferAttribute(new Float32Array(list.map(() => Math.random() * 6.28)), 1));
  geo.instanceCount = list.length;
  mats.bubbleU = { uTime: { value: 0 } };
  const m = new THREE.Mesh(geo, new THREE.ShaderMaterial({ vertexShader: SH.bubbleVertex, fragmentShader: SH.bubbleFragment, uniforms: mats.bubbleU,
    transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor }));
  m.frustumCulled = false; m.renderOrder = 5;
  scene.add(m); mats.bubbles = m;
}

// ------------------------------------------------------------------ collectibles
// ?s3=round5: the Tripo coin (its own PBR textures) with the round2 paw coin's warm self-glow and golden rim light, so it stays
// bright gold when backlit in the drum. Same size and orientation as the paw coin (radius 0.3, faces along +Z and -Z).
function tripoCoin([hiG, loG], env) {
  const first = (g) => { let m = null; g.scene.traverse((o) => { if (o.isMesh && !m) m = o; }); return m; };
  const hi = first(hiG), lo = first(loG), mat = hi.material;
  mat.envMap = env; mat.envMapIntensity = 1.5;
  mat.color.setRGB(...(R7_ON ? ROUND6.r7.coin.color : [1.0, 1.14, 0.72]));   // Tripo's warm orange gold toward the approved bright yellow gold (round7: brighter yellow)
  mat.onBeforeCompile = (s) => {
    s.fragmentShader = s.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${R7_ON ? ROUND6.r7.coin.glow.toFixed(2) : '0.5'} + vec3(1.0, 0.92, 0.5) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 3.0) * 0.45;`);
  };
  mat.customProgramCacheKey = () => 'tripoCoin';
  if (R7_ON) lemonGold(mat, ROUND6.r7.coin.lemon, 'tripoCoinR7');   // round7: the original's lemon-gold paw coins
  return { hi: hi.geometry, lo: lo.geometry, mat };
}

function buildCollectibles(gemGltf, face, coinP2 = null) {
  face.colorSpace = THREE.SRGBColorSpace;   // loaded before the first frame, so the portal coins never show dark
  // Coins glow gold even when backlit in the portal, as in the approved screens.
  const goldFace = new THREE.MeshStandardMaterial({ map: face, color: 0xffffff, metalness: 0.6, roughness: 0.3, envMap: mats.env, emissive: 0x8a5a00, emissiveMap: face, emissiveIntensity: 1.25 });
  const coinRim = new THREE.MeshStandardMaterial({ color: 0xffc24a, metalness: 1, roughness: 0.25, envMap: mats.env, envMapIntensity: 1.3, emissive: 0x7a4a00, emissiveIntensity: 0.8 });
  const coinGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.08, 36);
  coinGeo.rotateX(Math.PI / 2);
  const coinMats = [coinRim, goldFace, goldFace];
  // round2: embossed gold paw coins, a detailed one near the camera and a lighter one further away (made with private random
  // numbers, so the game's own random sequence is unchanged)
  const paw = R2 ? withPrivateRandom(makeRandom(0x9a3c), () => (coinP2 ? tripoCoin(coinP2, mats.env)   // round5: the Tripo coin
    : { hi: pawCoinGeometry('high'), lo: pawCoinGeometry('low'), mat: pawCoinMaterial(mats.env) })) : null;
  const addCoin = (p, compose) => {
    const u0 = p.z;
    p = TR.map(p.x, p.y, p.z);   // straight layout -> 3D path
    const m = paw ? withPrivateRandom(makeRandom(0x9a3d + coins.length), () => { const lod = new THREE.LOD(); lod.addLevel(new THREE.Mesh(paw.hi, paw.mat), 0); lod.addLevel(new THREE.Mesh(paw.lo, paw.mat), 9);
      if (HERO_ON) for (const lv of lod.levels) lv.object.scale.setScalar(HERO.coinScale);   // ?s3=hero: the approved picture's bigger coins
      if (COIN6_ON) for (const lv of lod.levels) lv.object.scale.multiplyScalar(PLAY3.coin6Scale);   // ?s3=...,coin6 (session 3849f5c8): approved Screen 6's smaller coins, looks only
      return lod; })
      : new THREE.Mesh(coinGeo, coinMats);
    m.position.copy(p); scene.add(m);
    coins.push({ obj: m, home: p.clone(), kind: 'coin', live: true, pop: -1, phase: Math.random() * 6, compose, u: u0, q0: R2 ? TR.quaternion(u0, new THREE.Quaternion()) : null });
  };
  const onLanes = (p) => V3(p).multiply(new THREE.Vector3(W.LANE / W.LAYOUT_LANE, 1, 1));   // layout lanes -> this slide's lanes
  const z0 = L.tunnelStart, zAfter = L.screen4Z + 11;
  const onWater = (x, yAbove, z) => new THREE.Vector3(x, W.baseHeight(L, x, z) + yAbove, z);
  if (R2) {
    // round2: the two coins in front of the portal (part of the approved opening) stay; in the tunnel, clean lane lines.
    for (const p of L.coins3) if (p[2] < z0) addCoin(onLanes(p), true);
    for (const [lane, u0, n, step, h0, arc] of R2_RULES.coinLines) for (let i = 0; i < n; i++) {
      const h = R3 ? h0 + arc * Math.sin(Math.PI * i / Math.max(1, n - 1)) : R2_RULES.coinH;   // round3: each line its own height, some arching
      addCoin(onWater(W.laneX(lane), h, u0 + i * (R3 ? step : R2_RULES.coinStep)));
    }
  } else {
  for (const p of L.coins3) addCoin(onLanes(p), true);
  for (const p of L.coins4) addCoin(onLanes(p), true);
  for (let i = 0; i < 6; i++) addCoin(onWater(W.laneX(1), 0.65, z0 + 2.5 + i * 1.6));
  for (let i = 0; i < 5; i++) addCoin(onWater(W.laneX(2), 0.65 + Math.sin((i / 4) * Math.PI) * 0.9, z0 + 4 + i * 1.5));
  for (let i = 0; i < 5; i++) addCoin(onWater(W.laneX(0), 0.65, zAfter + i * 1.3));
  }

  // Meshy pink gemstones: one shared mesh and material, glossy crystal with the Meshy colours.
  const gemSrc = gemGltf.scene;
  repairNormals(gemSrc);
  const box = new THREE.Box3().setFromObject(gemSrc), size = box.getSize(new THREE.Vector3()), centre = box.getCenter(new THREE.Vector3());
  const gemScale = 0.42 / size.y;
  gemSrc.traverse((o) => {
    if (!o.isMesh) return;
    const map = o.material.map;
    o.material = new THREE.MeshStandardMaterial({ map, metalness: 0.0, roughness: 0.12, envMap: mats.env, envMapIntensity: 1.6,
      emissive: 0xffffff, emissiveMap: map, emissiveIntensity: 0.35, side: THREE.DoubleSide });
  });
  mats.gemMaterials = [];
  gemSrc.traverse((o) => { if (o.isMesh) mats.gemMaterials.push(o.material); });
  if (R3) for (const m of mats.gemMaterials) { m.color.setRGB(...ROUND3.gem.color); m.emissive.setRGB(...ROUND3.gem.emissive); }   // round3: the approved purple gem
  const addGem = (p, compose) => {
    const u0 = p.z;
    p = TR.map(p.x, p.y, p.z);
    const holder = new THREE.Group();
    const inner = gemSrc.clone();
    const gs = gemScale * (R2 ? 1.2 : 1);
    inner.scale.setScalar(gs);
    inner.position.copy(centre).multiplyScalar(-gs);
    holder.add(inner);
    holder.position.copy(p);
    scene.add(holder);
    gems.push({ obj: holder, home: p.clone(), kind: 'gem', live: true, pop: -1, phase: Math.random() * 6, spin: Math.random() * 6, compose, u: u0 });
  };
  if (LEVEL1_ON) { mats.l1AddCoin = addCoin; mats.l1AddGem = addGem; }   // ?s3=...,level1: the course's coins and gems go in the same lists
  if (R2) { for (const [lane, u, h] of R2_RULES.gems) addGem(onWater(W.laneX(lane), h ?? R2_RULES.gemH, u)); return; }   // h: ?s3=hero only (its own height)
  addGem(onLanes(L.gem4), true);
  addGem(onWater(W.laneX(1), 1.7, L.tunnelEnd - 1.5));
  addGem(onWater(W.laneX(0), 1.35, z0 + 10.5));
  addGem(onWater(W.laneX(1), 0.7, z0 + 12));
  addGem(onWater(W.laneX(2), 0.7, zAfter + 1.5));
}
// round2: a soft glow behind each rescue sock, a little further down the tunnel than it (so it shows around it, not over it):
// warm white-pink with a gold edge. Coins have their own gold glow (paw_coin.js); gems are a bigger, clear magenta.
const haloTextures = {};
function haloSprite(kind, size) {
  if (!haloTextures[kind]) {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d'), grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    if (kind === 'sock') { grd.addColorStop(0, 'rgba(255,248,236,0.95)'); grd.addColorStop(0.42, 'rgba(255,190,232,0.62)'); grd.addColorStop(0.7, 'rgba(255,214,120,0.42)'); grd.addColorStop(0.78, 'rgba(255,170,220,0.18)'); grd.addColorStop(1, 'rgba(255,160,220,0)'); }
    else { grd.addColorStop(0, 'rgba(255,170,250,0.8)'); grd.addColorStop(0.5, 'rgba(210,90,255,0.35)'); grd.addColorStop(1, 'rgba(160,60,255,0)'); }
    g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
    haloTextures[kind] = new THREE.CanvasTexture(c); haloTextures[kind].colorSpace = THREE.SRGBColorSpace;
  }
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: haloTextures[kind], transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: kind === 'sock' ? 0.7 : 0.6 }));
  s.scale.setScalar(size); s.position.z = 0.32; s.renderOrder = 4; s.name = 'r2Halo';
  return s;
}

// The Meshy lost socks of approved Screen 4 ("Rescue 5 lost socks"): five float along the drum,
// bobbing and rocking with their faces toward the camera. Touching one rescues it.
function buildSocks(gltf) {
  const src = gltf.scene;
  src.traverse((o) => {
    if (!o.isMesh) return;
    // Keep the white knit and purple stripes bright (the Meshy material is fully metallic, which reads black here).
    o.material = new THREE.MeshLambertMaterial({ map: o.material.map, emissive: 0xffffff, emissiveMap: o.material.map, emissiveIntensity: 0.32 });
  });
  const box = new THREE.Box3().setFromObject(src), size = box.getSize(new THREE.Vector3()), mid = box.getCenter(new THREE.Vector3());
  const s = (R2 ? 0.74 : 0.62) / size.y, ts = L.tunnelStart;
  // h: ?s3=hero only (a sock's own height)
  const spots = R2 ? R2_RULES.socks.map(([lane, u, h]) => [lane, h ?? R2_RULES.sockH, u]) : [[1, 0.8, ts + 7.5], [0, 0.95, ts + 11.8], [2, 1.0, ts + 15.6], [1, 0.85, ts + 21.0], [0, 0.9, ts + 26.4]];
  if (R2) src.traverse((o) => { if (o.isMesh) o.material.emissiveIntensity = 0.42; });   // a cleaner, brighter white knit
  const addSockAt = (lane, above, u) => {
    const x = W.laneX(lane);
    const holder = new THREE.Group(), turn = new THREE.Group(), inner = src.clone();
    inner.scale.setScalar(s); inner.position.copy(mid).multiplyScalar(-s);
    turn.add(inner); turn.rotation.y = Math.PI;      // the sock's face is on its +Z side: turn it to the camera
    holder.add(turn);
    TR.map(x, W.baseHeight(L, x, u) + above, u, holder.position);
    TR.quaternion(u, holder.quaternion);
    if (R2) withPrivateRandom(makeRandom(0x50c0 + socks.length), () => holder.add(haloSprite('sock', 1.25)));
    scene.add(holder);
    socks.push({ obj: holder, turn, home: holder.position.clone(), kind: 'sock', live: true, pop: -1, phase: Math.random() * 6, u, lane });   // (lane: tests' autopilot)
  };
  for (const [lane, above, u] of spots) addSockAt(lane, above, u);
  if (LEVEL1_ON) mats.l1AddSock = addSockAt;   // ?s3=...,level1: the course's socks
}

// ------------------------------------------------------------------ particles (splashes, foam, sparkles)
class Particles {
  constructor(n) {
    this.n = n; this.next = 0;
    this.p = new Float32Array(n * 3); this.v = new Float32Array(n * 3);
    this.life = new Float32Array(n); this.max = new Float32Array(n).fill(1); this.size0 = new Float32Array(n);
    this.kind = new Float32Array(n); this.grav = new Float32Array(n);
    this.sizeA = new Float32Array(n); this.alphaA = new Float32Array(n);
    this.fl = new Float32Array(n * 6);   // water plane each droplet falls back into: point, normal (zero = none)
    const g = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(this.p, 3).setUsage(THREE.DynamicDrawUsage);
    this.sizeAttr = new THREE.BufferAttribute(this.sizeA, 1).setUsage(THREE.DynamicDrawUsage);
    this.alphaAttr = new THREE.BufferAttribute(this.alphaA, 1).setUsage(THREE.DynamicDrawUsage);
    this.kindAttr = new THREE.BufferAttribute(this.kind, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.posAttr); g.setAttribute('size', this.sizeAttr); g.setAttribute('alpha', this.alphaAttr); g.setAttribute('kind', this.kindAttr);
    this.u = { uScale: { value: 400 } };
    this.points = new THREE.Points(g, new THREE.ShaderMaterial({ vertexShader: SH.dropVertex, fragmentShader: SH.dropFragment, uniforms: this.u,
      transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor }));
    this.points.frustumCulled = false; this.points.renderOrder = 6;
    this.sources = [];
    scene.add(this.points);
  }
  emit(x, y, z, vx, vy, vz, size, life, kind, grav = 1, floor = null) {
    const i = this.next; this.next = (this.next + 1) % this.n;
    this.p.set([x, y, z], i * 3); this.v.set([vx, vy, vz], i * 3);
    this.life[i] = life; this.max[i] = life; this.size0[i] = size; this.kind[i] = kind; this.grav[i] = grav;
    if (floor) this.fl.set(floor, i * 6); else this.fl.fill(0, i * 6, i * 6 + 6);
  }
  /** Emit at a track point (sideways x, height h, along u) with a track-space velocity (sideways, up, forward). */
  emitT(x, h, u, vx, vy, vz, size, life, kind, grav = 1) {
    TR.frame(u, F);
    const surf = W.baseHeight(L, x, u);
    const px = F.P.x + F.R.x * x + F.U.x * h, py = F.P.y + F.R.y * x + F.U.y * h, pz = F.P.z + F.R.z * x + F.U.z * h;
    this.emit(px, py, pz,
      F.R.x * vx + F.U.x * vy + F.T.x * vz, F.R.y * vx + F.U.y * vy + F.T.y * vz, F.R.z * vx + F.U.z * vy + F.T.z * vz,
      size, life, kind, grav,
      [F.P.x + F.R.x * x + F.U.x * surf, F.P.y + F.R.y * x + F.U.y * surf, F.P.z + F.R.z * x + F.U.z * surf, F.U.x, F.U.y, F.U.z]);
  }
  burstT(x, h, u, count, power, opts = {}) {
    for (let k = 0; k < count; k++) {
      const a = Math.random() * Math.PI * 2, s = (0.4 + Math.random()) * power;
      const dir = opts.dir || 0;
      this.emitT(x + Math.cos(a) * 0.25, h, u + Math.sin(a) * 0.25,
        Math.cos(a) * s * 0.9 + dir * power * 0.9, (1.2 + Math.random() * 1.6) * power * (opts.up ?? 1), Math.sin(a) * s * 0.9 + (opts.vz || 0),
        (opts.size || 0.11) * (0.6 + Math.random() * 0.8), 0.5 + Math.random() * 0.5, opts.kind ?? 0, opts.grav ?? 1);
    }
  }
  sparkle(pos, count) {
    for (let k = 0; k < count; k++) {
      const d = new THREE.Vector3().randomDirection().multiplyScalar(1 + Math.random() * 2.5);
      this.emit(pos.x, pos.y, pos.z, d.x, d.y + 0.6, d.z, 0.16 + Math.random() * 0.2, 0.45 + Math.random() * 0.45, 2, -0.1);
    }
  }
  addSource(s) { s.carry = 0; this.sources.push(s); }
  update(dt) {
    for (const s of this.sources) {
      s.carry += s.rate * dt;
      for (; s.carry >= 1; s.carry--) {
        const a = Math.random() * Math.PI * 2, r = Math.random() * s.spread;
        this.emit(s.pos.x + Math.cos(a) * r, s.pos.y + 0.05, s.pos.z + Math.sin(a) * r, Math.cos(a) * 0.6, s.up * (0.5 + Math.random() * 0.7), Math.sin(a) * 0.6,
          s.size * (0.6 + Math.random() * 0.8), 0.5 + Math.random() * 0.6, s.kind, s.kind === 1 ? 0.15 : 1, [s.pos.x, s.pos.y, s.pos.z, 0, 1, 0]);
      }
    }
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.alphaA[i] = 0; this.sizeA[i] = 0; continue; }
      this.life[i] -= dt;
      const k = i * 3;
      this.v[k + 1] -= 9.81 * this.grav[i] * dt;
      if (this.kind[i] === 1) { this.v[k] *= 1 - dt * 2; this.v[k + 2] *= 1 - dt * 2; this.v[k + 1] *= 1 - dt * 3; }
      this.p[k] += this.v[k] * dt; this.p[k + 1] += this.v[k + 1] * dt; this.p[k + 2] += this.v[k + 2] * dt;
      const t = 1 - this.life[i] / this.max[i];
      this.alphaA[i] = Math.min(1, t * 8) * (1 - t * t);
      this.sizeA[i] = this.size0[i] * (this.kind[i] === 1 ? 0.7 + t * 1.2 : this.kind[i] === 2 ? Math.sin(Math.min(1, t * 1.4) * Math.PI) : 1);
      const f = i * 6, nx = this.fl[f + 3], ny = this.fl[f + 4], nz = this.fl[f + 5];
      if (this.kind[i] === 0 && (nx !== 0 || ny !== 0 || nz !== 0)) {   // droplets vanish back into the water they left
        const d = (this.p[k] - this.fl[f]) * nx + (this.p[k + 1] - this.fl[f + 1]) * ny + (this.p[k + 2] - this.fl[f + 2]) * nz;
        if (d < -0.05 && this.v[k] * nx + this.v[k + 1] * ny + this.v[k + 2] * nz < 0) this.life[i] = 0;
      }
    }
    this.posAttr.needsUpdate = this.sizeAttr.needsUpdate = this.alphaAttr.needsUpdate = this.kindAttr.needsUpdate = true;
  }
}

let rippleIdx = 0;
function addRipple(x, z, strength) {
  waterU.uRipples.value[rippleIdx].set(x, z, state.time, strength);
  rippleIdx = (rippleIdx + 1) % SH.RIPPLES;
}

// ------------------------------------------------------------------ mascot
const MASCOT_WIDTH = 1.04;   // arms-to-arms: 0.41 of the screen width at Tap to Start, as in the approved Screen 3
function buildMascot(gltf) {
  const model = gltf.scene;
  state.repairedNormals = repairNormals(model);
  const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3()), centre = box.getCenter(new THREE.Vector3());
  const s = MASCOT_WIDTH / size.x;                      // arms-to-arms, matched to the approved Screen 3
  model.position.copy(centre).multiplyScalar(-s);
  model.scale.setScalar(s);
  if (STRUCT_PARTS.hero) structPrivately(0x57a0, () => structCrown(model));   // ?s3=intunnel,structmatch,hero2: her crown as a smooth arc (drawn only; her size and fit unchanged)
  // Fur: the Meshy colour with soft round light (a blend of the fur's own normals and the body's
  // sphere), strand-by-strand light and shade, glowing pink fur tips around the silhouette, deeper
  // magenta toward the water and droplets twinkling in the fur (shaders.js furFragment).
  mats.fur = {
    uCentre: { value: new THREE.Vector3() }, uUp: { value: new THREE.Vector3(0, 1, 0) }, uRadius: { value: size.y * s * 0.5 },
    uKey: { value: new THREE.Vector3(0.35, 0.85, -0.42).normalize() }, uTime: { value: 0 },
    uSky: { value: new THREE.Color(1.0, 0.86, 1.0) }, uGround: { value: new THREE.Color(0.55, 0.42, 0.95) },
    uRim: { value: new THREE.Color(1.0, 0.55, 0.88) }, uTip: { value: new THREE.Color(1.0, 0.8, 0.96) },
    uSpike: { value: 0 },   // the Screen 3 presentation (opening.js); 0 = the original fur
  };
  model.traverse((o) => {
    if (!o.isMesh) return;
    o.material = new THREE.ShaderMaterial({ uniforms: { map: { value: o.material.map }, ...mats.fur },
      vertexShader: SH.furVertex, fragmentShader: STRUCT_PARTS.hero ? structFurFragment(SH.furFragment) : SH.furFragment, side: THREE.DoubleSide });   // (?s3=...,structmatch,hero2: Screen 4's fur)
  });
  if (STRUCT_PARTS.hero) structFurUniforms(mats.fur);   // ?s3=intunnel,structmatch,hero2: a whiter rim
  if (STRUCT_PARTS.water || STRUCT_PARTS.hero) state.structFill = structPrivately(0x57a2, () => structFill(model, mats.fur, SH.furVertex, SH.furFragment));   // ?s3=intunnel,structmatch: the gap between her legs closed (drawn only)
  if (STRUCT_PARTS.match4) state.structShellFur = structPrivately(0x57a4, () => structShellFur(model, mats.fur, structFurFragment(SH.furFragment)));   // ?s3=intunnel,structmatch (match4): her fur as long fine strands (drawn only)
  const squash = new THREE.Group(); squash.add(model);
  const tilt = new THREE.Group(); tilt.add(squash);
  const root = new THREE.Group(); root.add(tilt);
  scene.add(root);
  mascot = {
    root, tilt, squash, height: size.y * s,
    lane: 1, x: 0, xv: 0, z: INTUNNEL_ON ? INTUNNEL.u : L.startZ, y: 0, speed: 0, air: false, vy: 0, yAbs: 0,   // (?s3=intunnel: at the approved inside-tunnel start)
    // ?s3=intunnel: the speed the WATER shows while she waits at the start (the hero water's swell and the liquid's bow wave
    // rise with her speed; at Tap to Start she is already riding the tunnel's water). Visual only; undefined elsewhere
    visSpeed: INTUNNEL_ON ? INTUNNEL.speed : undefined,
    pitch: 0, lean: 0, yaw: 0, flip: 0, spin: 0, spinV: 0, sq: 0, sqV: 0, look: 0, lookT: 2.5,
    lastSlope: 0, downhill: 0, wakeCarry: 0, foamCarry: 0, bobRipple: 0,
  };
}

function resetRun() {
  const m = mascot;
  // (?s3=intunnel: every run and lap starts inside the tunnel, at the approved viewpoint, not on the slide outside)
  const z0 = INTUNNEL_ON ? INTUNNEL.u : L.startZ;
  Object.assign(m, { lane: 1, x: 0, xv: 0, z: z0, speed: 0, air: false, vy: 0, pitch: 0, lean: 0, yaw: 0, flip: 0, spin: 0, spinV: 0, sq: 0, sqV: 0 });
  m.yAbs = W.surface(L, 0, z0, state.time) + W.FLOAT_H;
  for (const c of [...coins, ...gems, ...socks]) { c.live = true; c.pop = -1; c.obj.visible = true; c.obj.scale.setScalar(1); c.obj.position.copy(c.home); }
  state.socks = 0; if (state.phase !== 'loading') refreshHud();
  if (side) side.n = 0;
  rig.snap = true;
  if (level1) level1.reset();   // ?s3=...,level1
  if (SWIM7_ON) swim7Reset(m);   // ?s3=...,swim7
}

function changeLane(dir) {
  if (state.phase !== 'running') return;
  // (?s3=...,level1 flow: Level 1's routes decide: onto the raised side path only from the air, never back up from the lower path)
  const lane = level1 && level1.flow ? level1.flow.changeLane(dir) : Math.max(0, Math.min(2, mascot.lane + dir));
  if (lane === mascot.lane) { mascot.sqV += 2; return; }
  mascot.lane = lane;
  const m = mascot;
  // Side spray thrown the way the mascot is moving.
  fx.burstT(m.x, W.surface(L, m.x, m.z, state.time) + 0.05, m.z, 16, 1.0, { dir: W.laneX(lane) > m.x ? 1 : -1, vz: m.speed * 0.5 });
  addRipple(m.x, m.z, 1);
  state.lastGesture = { t: state.time, lane };
  sfx('swish');
}
function jump() {
  if (state.phase !== 'running' || mascot.air) return;
  mascot.air = true; mascot.vy = W.JUMP_V; mascot.flip = 0; mascot.sqV += 6;
  const m = mascot;
  fx.burstT(m.x, m.yAbs - W.FLOAT_H + 0.05, m.z, 20, 1.1, { vz: m.speed * 0.4 });
  addRipple(m.x, m.z, 1.2);
  sfx('splash');
}
function spin() { if (state.phase === 'running') { mascot.spinV = Math.PI * 2 / 0.5; mascot.spinLeft = Math.PI * 2; sfx('swish'); } }
// ?s3=...,swim7 (swim7.js): swipe up = a forward swimming burst, swipe down = a short dive under the surface (no jump gesture). Their particles
// are drawn on a private random sequence (the game's seeded one is not consumed by them).
const swim7Rnd = makeRandom(0x5717);
const swim7Fx = { emit: (...a) => fx.emitT(...a), burst: (...a) => withPrivateRandom(swim7Rnd, () => fx.burstT(...a)), ripple: (x, u, s) => addRipple(x, u, s), sfx: (n) => sfx(n), rnd: swim7Rnd };
function swimUp() {
  if (state.phase !== 'running' || !swim7Burst(mascot)) return false;
  const m = mascot; m.sqV += 4;
  swim7Fx.burst(m.x, W.surface(L, m.x, m.z, state.time) + 0.05, m.z - 0.2, 18, 1.0, { vz: m.speed * 0.2 });
  addRipple(m.x, m.z, 1.1); sfx('swish');
  return true;
}
function swimDown() {
  if (state.phase !== 'running' || !swim7Dive(mascot)) return false;
  const m = mascot; m.sqV -= 5;
  swim7Fx.burst(m.x, W.surface(L, m.x, m.z, state.time) + 0.05, m.z, 14, 0.8, { vz: m.speed * 0.5 });
  addRipple(m.x, m.z, 1.4); sfx('splash');
  return true;
}
// A knock from a spinning brush (only the ?s3=tunnel test calls this; screen3_models.js / tunnel_s4.js): the mascot is
// bounced toward the middle lane, slowed (its speed comes back over about a second), squashed and splashed.
function bumpMascot(side) {
  if (state.phase !== 'running') return false;
  const m = mascot;
  // round2: Turbo Spin and Bubble Blast protect the mascot (the brush is only knocked spinning, tunnel_s4.js), and so does
  // the short guard after a knock and the moment after the last heart is lost. Otherwise a knock takes one heart.
  if (R2) {
    if (state.turboT > 0 || state.blastT > 0 || state.guardT > 0 || state.outT >= 0) {
      fx.sparkle(m.root.position.clone().add(new THREE.Vector3(side * 0.5, 0.4, 0)), 14); sfx('swish');
      return false;
    }
    state.hearts = Math.max(0, state.hearts - 1); state.knocks++; state.guardT = R2_RULES.hurtGuard;
    refreshHud(); popHud('heartPill'); hurtFlash();
    if (state.hearts === 0) { state.outT = 0; $('r2Toast').classList.add('show'); }
  }
  m.lane = 1; m.speed *= 0.55; m.sqV -= 12;
  const surf = W.surface(L, m.x, m.z, state.time);
  fx.burstT(m.x, surf + 0.1, m.z, 40, 1.6, { dir: -side, vz: m.speed * 0.3 });
  fx.burstT(m.x, surf + 0.05, m.z, 8, 0.9, { kind: 1, size: 0.24, grav: 0.15, up: 0.6 });
  addRipple(m.x, m.z, 1.6); sfx('splash');
  state.bumps = (state.bumps || 0) + 1;
  return true;
}

function updateMascot(dt) {
  const m = mascot, t = state.time;
  const running = state.phase === 'running';
  if (INTUNNEL_ON) m.visSpeed = running ? undefined : INTUNNEL.speed;   // (?s3=intunnel: see the mascot's visSpeed)
  const slope = W.slopeAt(L, m.x, m.z);                 // the slide's hills and swells (track space)
  const slopeAll = slope + Math.tan(TR.pitch(m.z));     // plus the climb or drop of the tube itself
  const targetSpeed = running ? W.CRUISE * (1 + THREE.MathUtils.clamp(-slopeAll * 1.6, -0.22, 0.4)) * (R2 && state.turboT > 0 ? R2_RULES.turboSpeed : 1) : 0;
  const s7 = SWIM7_ON ? swim7Speed(m, dt, running) : null;   // ?s3=...,swim7: the current's pace and the swim burst (swim7.js)
  m.speed += ((s7 ? targetSpeed * s7.mul : targetSpeed) - m.speed) * Math.min(1, dt * (running ? (s7 ? s7.rate : 2.2) : 4));
  m.z += m.speed * dt;
  // Lane change: Unity's Mathf.SmoothDamp with the runner's 0.18 s lane-change time.
  {
    const omega = 2 / (SWIM7_ON ? SWIM7.lane.time : 0.18), k = omega * dt, ex = 1 / (1 + k + 0.48 * k * k + 0.235 * k * k * k);
    const target = level1 && level1.flow ? level1.flow.laneTarget() : W.laneX(m.lane), change = m.x - target, temp = (m.xv + omega * change) * dt;   // (flow: the routes' lanes)
    m.xv = (m.xv - omega * temp) * ex;
    m.x = target + (change + temp) * ex;
  }

  const surf = W.surface(L, m.x, m.z, t);
  const bob = Math.sin(t * 1.7 * Math.PI * 2) * 0.05;
  const rideY = surf + W.FLOAT_H + bob;
  if (m.air) {
    m.vy -= W.GRAVITY * dt; m.yAbs += m.vy * dt;
    if (!m.falling) m.flip = Math.min(Math.PI * 2, m.flip + dt * (Math.PI * 2) / 0.62);   // (flow: no somersault when she drops off a ledge)
    if (m.yAbs <= rideY && m.vy < 0) {
      m.air = false; m.flip = 0; m.falling = false; m.sqV -= 9 + Math.min(8, -m.vy);
      fx.burstT(m.x, surf + 0.05, m.z, 34, 1.4, { vz: m.speed * 0.5 }); fx.burstT(m.x, surf + 0.05, m.z, 6, 0.8, { kind: 1, size: 0.22, grav: 0.15, up: 0.5 });
      addRipple(m.x, m.z, 1.6); sfx('splash');
    }
  } else if (level1 && level1.flow && running && rideY < m.yAbs - 0.2) {
    m.air = true; m.vy = 0; m.falling = true;   // (flow: off the raised side path or a ledge, she really falls to the water below)
  } else {
    m.yAbs = rideY;
  }
  // Downhill drops: count how hard the ride is falling for spray, foam and speed.
  m.downhill += (THREE.MathUtils.clamp(-slopeAll * 4, 0, 1) - m.downhill) * Math.min(1, dt * 4);
  // Bottom of a drop: the water levels out under the mascot and throws a splash forward and sideways.
  const flatten = Math.max(0, slopeAll - m.lastSlope) / Math.max(dt, 1e-3);
  if (running && !m.air && flatten > 0.35 && m.lastSlope < -0.1) {
    m.splashCarry = (m.splashCarry || 0) + flatten * dt * 36;
    for (; m.splashCarry >= 1; m.splashCarry--) fx.emitT(m.x + (Math.random() * 2 - 1) * 0.55, surf + 0.05, m.z + 0.2 + Math.random() * 0.4,
      (Math.random() * 2 - 1) * 2.2, 2.2 + Math.random() * 2.4, m.speed * (0.6 + Math.random() * 0.3), 0.07 + Math.random() * 0.08, 0.6 + Math.random() * 0.4, 0);
    m.sqV -= flatten * dt * 25;
    if (!m.splashRipple || state.time - m.splashRipple > 0.4) { addRipple(m.x, m.z, 1.4); m.splashRipple = state.time; sfx('splash'); }
  }

  // Body motion (no rig): pitch with the slope, lean into lane changes, tumble on jumps, spins,
  // squash and stretch on the water, and an over-the-shoulder look back while waiting to start.
  m.pitch += (Math.atan(slope) * 0.9 - m.pitch) * Math.min(1, dt * 6);
  m.lean += (THREE.MathUtils.clamp(-m.xv * 0.22, -0.45, 0.45) - m.lean) * Math.min(1, dt * 10);
  m.yaw += (THREE.MathUtils.clamp(m.xv * 0.1, -0.3, 0.3) - m.yaw) * Math.min(1, dt * 8);
  if (m.spinLeft > 0) { const s = Math.min(m.spinLeft, m.spinV * dt); m.spin += s; m.spinLeft -= s; } else m.spin = 0;
  m.sqV += (-m.sq * 90 - m.sqV * 9) * dt; m.sq += m.sqV * dt;
  if (!running) {
    m.lookT -= dt;
    if (m.lookT < 0) { m.look = Math.min(1, m.look + dt / 0.55); if (m.lookT < -1.6) m.lookT = 4.5; }
    else m.look = Math.max(0, m.look - dt / 0.55);
  } else m.look = Math.max(0, m.look - dt / 0.3);
  const lookYaw = THREE.MathUtils.smoothstep(m.look, 0, 1) * Math.PI * 0.92;

  TR.map(m.x, m.yAbs, m.z, m.root.position);           // the 3D path: climbs, drops, banked turns
  TR.quaternion(m.z, m.root.quaternion);
  m.tilt.rotation.set(-m.pitch + (m.air ? -m.flip : 0) + Math.sin(t * 3.4) * 0.03 * (running ? 1 : 0.4), m.yaw + m.spin + lookYaw, m.lean + Math.sin(t * 2.2) * 0.04, 'YXZ');
  const st = 1 + m.sq * 0.25;
  m.squash.scale.set(1 / Math.sqrt(st), st, 1 / Math.sqrt(st));
  if (SWIM_ON || STRUCT_PARTS.swim3) {   // ?s3=intunnel,swim and ?s3=intunnel,structmatch (swim3): her swim rhythm, drawn on her model only (her state m.yAbs, lanes and jumps untouched)
    m.swimK = m.air ? 0 : Math.min(1, (m.swimK ?? 1) + dt / SWIM.motion.settle);
    const sp = swimPose(t, m.swimK, m.air);
    m.squash.position.y = sp.dy;
    m.tilt.rotation.x += sp.pitch; m.tilt.rotation.z += sp.roll;
    m.squash.scale.y *= sp.sy;
  }
  if (level1) level1.swim(m, t, dt, running, surf, fx);   // ?s3=...,level1: her swim strokes, drawn only (level1.js); her state is untouched
  if (BLEND_ON) blendPose(m, dt, rideY);   // ?s3=intunnel,blend: drawn only (tunnel_s4_blend.js); her state is untouched
  if (s56) s56.heroOffset(m, t, dt, BLEND_ON);   // ?s3=...,s56: he rides the s56 water's own waves, a little submerged (drawn only; his state is untouched)
  if (SWIM7_ON) swim7Pose(m, t, dt, running, surf, swim7Fx);   // ?s3=...,swim7: the swim rhythm, the burst's dip-and-surge, the dive (drawn only, m.tilt)

  // Splashes that answer the motion: wake spray (more when fast or dropping downhill), bow foam,
  // side spray while changing lanes, gentle ripples while bobbing at the start.
  if (!m.air && !m.s7under) {   // (swim7: none while he is under the surface)
    const speed01 = m.speed / W.CRUISE;
    m.wakeCarry += (running ? 8 + 22 * speed01 + 50 * m.downhill + Math.abs(m.xv) * 18 : 2) * dt;
    for (; m.wakeCarry >= 1; m.wakeCarry--) {
      const side = Math.random() < 0.5 ? -1 : 1;
      fx.emitT(m.x + side * (0.25 + Math.random() * 0.25), surf + 0.04, m.z - 0.15 - Math.random() * 0.3,
        side * (0.5 + Math.random() * 1.2) - m.xv * 0.4, 1.0 + Math.random() * (1.6 + 2.2 * m.downhill), m.speed * (0.35 + Math.random() * 0.3),
        0.04 + Math.random() * 0.07, 0.45 + Math.random() * 0.4, 0);
    }
    // Bow spray: clear droplets thrown up and outward where the body pushes the current.
    m.bowCarry = (m.bowCarry || 0) + (running ? 6 + 18 * speed01 + 24 * m.downhill : 0) * dt;
    for (; m.bowCarry >= 1; m.bowCarry--) {
      const side = Math.random() < 0.5 ? -1 : 1, a = Math.random() * 0.9;
      fx.emitT(m.x + side * (0.42 + Math.random() * 0.15), surf + 0.08, m.z + 0.15 + a * 0.3,
        side * (0.9 + Math.random() * 1.1) - m.xv * 0.3, 1.4 + Math.random() * 1.6, m.speed * (0.55 + Math.random() * 0.25),
        0.04 + Math.random() * 0.05, 0.4 + Math.random() * 0.3, 0);
    }
    m.foamCarry += (running ? 1.5 + 3 * speed01 + 5 * m.downhill : 0.8) * dt;
    for (; m.foamCarry >= 1; m.foamCarry--) {
      const side = Math.random() < 0.5 ? -1 : 1;
      fx.emitT(m.x + side * (0.32 + Math.random() * 0.25), surf + 0.05, m.z - 0.35 - Math.random() * 0.6,
        side * 0.45, 0.2, m.speed * 0.75, 0.1 + Math.random() * 0.12, 0.45 + Math.random() * 0.3, 1, 0.1);
    }
    if (!running) {   // while waiting at Tap to Start: little bubbles rising around the body, as in the approved screen
      m.restBubbles = (m.restBubbles || 0) + 14 * dt;
      for (; m.restBubbles >= 1; m.restBubbles--) {
        const a = Math.random() * Math.PI * 2, r = 0.42 + Math.random() * 0.28;
        fx.emitT(m.x + Math.cos(a) * r, surf + 0.02, m.z + Math.sin(a) * r * 0.7, Math.cos(a) * 0.15, 0.25 + Math.random() * 0.3, 0, 0.07 + Math.random() * 0.09, 1.0 + Math.random() * 0.8, 0, -0.03);
      }
    }
    m.bobRipple -= dt;
    if (m.bobRipple < 0) { addRipple(m.x, m.z, running ? 0.35 : 0.6); m.bobRipple = running ? 0.45 : 1.2; }
  }
  waterU.uPlayer.value.set(m.x, surf, m.z);
  waterU.uPlayerMove.value.set(m.xv, m.speed / W.CRUISE, m.downhill);
  m.lastSlope = slopeAll;
  mats.fur.uTime.value = t;
  mats.fur.uCentre.value.copy(m.root.position);
  if (BLEND_ON) blendFurCentre(mats.fur.uCentre.value, m);
  if (s56) s56.furCentre(mats.fur.uCentre.value, m);   // ?s3=...,s56: the fur's light centre on his drawn body   // ?s3=intunnel,blend: the fur's light centre on her drawn body
  TR.frame(m.z, F); mats.fur.uUp.value.copy(F.U);

  document.body.classList.toggle('inDrum', (running || INTUNNEL_ON && state.phase === 'intro') && m.z > L.tunnelStart - (R7_ON ? ROUND6.r7.hudEarly : 0.5));   // (?s3=intunnel: the tunnel's HUD from Tap to Start)   // round7: the mission card at the hero moment
  if (side) sideTrail();
  if (running && m.z > L.tunnelEnd - 2.0 && !LEVEL1_ON) loopRun();   // flash back to the slide just before the drum ends (?s3=...,level1: no loop, the course goes on)
}

// ------------------------------------------------------------------ round2 (?s3=round2): hearts, Bubble Blast, Turbo Spin, pause
function stepRound2(dt) {
  const m = mascot;
  state.guardT = Math.max(0, state.guardT - dt);
  if (state.blastT > 0) {
    state.blastT = Math.max(0, state.blastT - dt);
    if (r2Hooks.clearBrushes) r2Hooks.clearBrushes(m.z - 1, m.z + R2_RULES.blastReach);   // brushes coming into reach are cleared too
  }
  if (state.turboT > 0) {
    state.turboT = Math.max(0, state.turboT - dt);
    if (!m.spinLeft || m.spinLeft < 0.5) { m.spinV = Math.PI * 2 / 0.32; m.spinLeft = Math.PI * 2; }
    m.turboCarry = (m.turboCarry || 0) + dt * 60;
    for (; m.turboCarry >= 1; m.turboCarry--) {
      const a = Math.random() * Math.PI * 2, surf = W.surface(L, m.x, m.z, state.time);
      fx.emitT(m.x + Math.cos(a) * 0.5, surf + 0.1 + Math.random() * 0.4, m.z + Math.sin(a) * 0.3, Math.cos(a) * 2.2, 0.8 + Math.random(), m.speed * 0.4, 0.08 + Math.random() * 0.07, 0.4 + Math.random() * 0.3, 0);
    }
  }
  if (state.outT >= 0) {
    state.outT += dt;
    if (state.outT >= R2_RULES.outOfHearts) restartRound2();
  }
  $('r2Shield').classList.toggle('on', state.blastT > 0 || state.turboT > 0);
}
// round3: white spray thrown up round the mascot as it ploughs through the drum's water, and sparkles twinkling down the
// tunnel ahead (approved Screen 4), only inside the drum and with round3's own random numbers
function stepRound3(dt) {
  const m = mascot, R = r3Rnd;
  if (state.phase !== 'running' || m.z < L.tunnelStart - 0.3) return;
  const P = R4 ? { ...ROUND3.spray, ...ROUND4.spray, ...(R5 ? ROUND5.spray : {}) } : ROUND3.spray, surf = W.surface(L, m.x, m.z, state.time);   // round4: heavier spray
  if (!m.air) {
    m.r3Spray = (m.r3Spray || 0) + P.rate * dt;
    for (; m.r3Spray >= 1; m.r3Spray--) {
      const side = R() < 0.5 ? -1 : 1, a = R();
      fx.emitT(m.x + side * (0.38 + R() * 0.3), surf + 0.05, m.z - 0.25 + a * 0.5,
        side * (0.4 + R() * 1.4) - m.xv * 0.3, 1.6 + R() * 2.2, m.speed * (0.45 + R() * 0.35), P.size[0] + R() * (P.size[1] - P.size[0]), 0.45 + R() * 0.35, 3, 0.9);
    }
  }
  const S = ROUND3.sparkles;
  m.r3Spark = (m.r3Spark || 0) + S.rate * dt;
  for (; m.r3Spark >= 1; m.r3Spark--) {
    const a = R() * Math.PI * 2, r = S.r[0] + R() * (S.r[1] - S.r[0]), du = S.du[0] + R() * (S.du[1] - S.du[0]);
    TR.frame(m.z + du, F);
    const h = W.WATER + W.AXIS_H + Math.sin(a) * r;
    if (h < 0.35) continue;
    const p = F.P.clone().addScaledVector(F.R, Math.cos(a) * r).addScaledVector(F.U, h);
    fx.emit(p.x, p.y, p.z, 0, 0.05, 0, 0.1 + R() * 0.14, 0.5 + R() * 0.5, 2, 0);
  }
}
function useBlast() {
  if (!R2 || state.phase !== 'running' || state.paused || state.blasts <= 0 || state.blastT > 0 || state.outT >= 0) return false;
  state.blasts--; state.blastT = R2_RULES.blastTime;
  const m = mascot, surf = W.surface(L, m.x, m.z, state.time);
  for (let k = 0; k < 46; k++) {   // a stream of bubbles thrown forward down the tunnel
    const a = Math.random() * Math.PI * 2, r = Math.random() * 0.5;
    fx.emitT(m.x + Math.cos(a) * r * 0.6, surf + 0.5 + Math.sin(a) * r * 0.5, m.z + 0.4, Math.cos(a) * 0.9, 0.4 + Math.random() * 0.8, m.speed + 4 + Math.random() * 5, 0.16 + Math.random() * 0.2, 0.9 + Math.random() * 0.6, 1, -0.05);
  }
  if (r2Hooks.clearBrushes) r2Hooks.clearBrushes(m.z - 1, m.z + R2_RULES.blastReach);
  popHud('blastBtn'); sfx('gem'); refreshHud();
  return true;
}
function useTurbo() {
  if (!R2 || state.phase !== 'running' || state.paused || state.turbos <= 0 || state.turboT > 0 || state.outT >= 0) return false;
  state.turbos--; state.turboT = R2_RULES.turboTime;
  popHud('turboBtn'); sfx('swish'); refreshHud();
  return true;
}
function setPaused(on) {
  if (!R2 || state.phase !== 'running') on = false;
  state.paused = !!on;
  document.body.classList.toggle('paused', state.paused);
  $('pausePanel').hidden = !state.paused;
  if (actx) { if (state.paused) actx.suspend?.(); else actx.resume?.(); }
  last = performance.now();
  if (state.paused) $('resumeBtn').focus({ preventScroll: true });
}
function hurtFlash() { const el = $('r2Hurt'); el.classList.remove('go'); void el.offsetWidth; el.classList.add('go'); }
// No hearts left: a moment later the run starts again from Tap to Start, with full hearts and power-ups.
function restartRound2() {
  state.outT = -1; state.restarts++;
  $('r2Toast').classList.remove('show');
  Object.assign(state, { hearts: R2_RULES.hearts, blasts: R2_RULES.blasts, turbos: R2_RULES.turbos, blastT: 0, turboT: 0, guardT: 0 });
  resetRun();
  state.phase = 'intro'; document.body.classList.remove('running', 'inDrum');
  refreshHud();
}
if (R2) r2Hooks.pop = (p) => { fx.sparkle(p, 22); for (let k = 0; k < 14; k++) { const d = new THREE.Vector3().randomDirection(); fx.emit(p.x + d.x * 0.6, p.y + d.y * 0.6, p.z + d.z * 0.6, d.x, d.y + 0.5, d.z, 0.2 + Math.random() * 0.2, 0.7, 1, -0.05); } };

function loopRun() {
  // Screens 5 onward are not built yet: the run loops back to the slide, as in the Unity project.
  state.laps++;
  const flash = $('flash'); flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go');
  resetRun();
  state.phase = 'running';
  if (INTUNNEL_ON) mascot.speed = INTUNNEL.speed;   // ?s3=intunnel: on through the tunnel at once
}

// ------------------------------------------------------------------ camera rig
// Tap to Start framing, measured against the approved Screen 3 at the same 1:2 size: a longer lens
// from further back keeps the mascot's size and place (43 % of the width, from 58 % to 75 % of the
// height) while the portal arch grows to the approved size.
const S3 = { off: new THREE.Vector3(0, 1.0, -6.4), look: new THREE.Vector3(0, 0.5, 5.97), fov: 40 };
const S4 = { off: new THREE.Vector3(0, 1.03, -3.58), look: new THREE.Vector3(0, 0.89, 6.42), fov: 60 };
if (R3) S4.look.y = ROUND3.camera.lookY;   // round3: tilted up a little inside the drum, so the mascot sits lower (Tap to Start unchanged)
if (R4) S4.look.y = ROUND4.camera.lookY;   // round4: a little higher still: the mascot and the tunnel's centre sit as in the approved Screen 4
if (R5 && ROUND5.camera) { const C = ROUND5.camera; S4.off.set(...C.off); S4.look.y = C.lookY; S4.fov = C.fov; if (C.lookX != null) S4.look.x = C.lookX; }   // round5: further back and wider (tunnel_r5.js); lookX: ?s3=hero only
if (MATCH_ON && ROUND5.camera && ROUND5.camera.lookZ != null) S4.look.z = ROUND5.camera.lookZ;   // ?s3=match: the hero camera moved with its aim point (tunnel_r9_match.js MATCH_CAM)
rig = { snap: true, x: 0, y: 0, tilt: 0, shake: 0 };
function updateCamera(dt) {
  const m = mascot;
  const k = THREE.MathUtils.smoothstep(m.z, -4, L.tunnelStart + (R6_ON ? ROUND6.camBlendEnd : 3));   // round6: the drum framing is set before the mouth
  const off = S3.off.clone().lerp(S4.off, k), lk = S3.look.clone().lerp(S4.look, k);
  let fovV = THREE.MathUtils.lerp(S3.fov, S4.fov, k);
  if (s56) fovV = s56.camera(off, lk);   // ?s3=...,s56: the approved Scene 5 / 6 framing for the whole run (one camera, one tunnel)
  if (SWIM7_ON) fovV = swim7Camera(m, off, lk, fovV, dt);   // ?s3=...,swim7: the camera opens a little and falls back during a swim burst
  else if (SCENE07_ON) scene07Camera(m.z, off, lk);   // ?s3=...,scene07 (pass 13, session ce30359f): the Avoid Enemies stretch's own aim (tripo_l1.js)
  // Follow: 55 % of lane moves, the ride height fully (smoothed), 35 % of jumps and bobbing.
  const rideY = W.baseHeight(L, m.x, m.z) + W.FLOAT_H;
  const targetX = level1 && level1.flow ? flowCamX(m.x) : m.x * 0.55, targetY = rideY + (m.yAbs - rideY) * 0.35;   // (flow: more of a move onto a side path or ledge)
  // Tilt with the path: look along the average slope of the next few metres (only once running,
  // so the Tap-to-Start view is exactly the approved framing).
  let ahead = 0; for (let d = 1; d <= 6; d++) ahead += W.slopeAt(L, m.x, m.z + d * 1.2); ahead /= 6;
  const tiltTarget = state.phase === 'running' || INTUNNEL_ON ? ahead : 0;   // (?s3=intunnel: Tap to Start is the running view)
  const snap = rig.snap;
  if (rig.snap) { rig.x = targetX; rig.y = targetY; rig.tilt = tiltTarget; rig.snap = false; }
  const a = 1 - Math.exp(-dt / 0.14);
  rig.x += (targetX - rig.x) * a; rig.y += (targetY - rig.y) * (1 - Math.exp(-dt / 0.12)); rig.tilt += (tiltTarget - rig.tilt) * (1 - Math.exp(-dt / 0.35));
  // Camera and aim point are set out from the mascot in its own path frame (smoothed over about a
  // quarter second), so the mascot keeps the approved place on screen while the tube climbs, crests,
  // drops and banks. (Placing them through the frames 4 m behind and 6 m ahead left the mascot high
  // in the frame at the crest.) On the straight slide this is the same as the plain layout offsets.
  const cx = rig.x + off.x, ch = rig.y + off.y + rig.tilt * off.z * 0.6;   // ride behind and below on climbs, above on drops
  const cu = m.z + off.z;
  TR.frame(m.z, F);
  if (snap || !rig.fT) { rig.fP = F.P.clone(); rig.fR = F.R.clone(); rig.fU = F.U.clone(); rig.fT = F.T.clone(); }
  const fa = 1 - Math.exp(-dt / 0.25);
  rig.fP.copy(F.P); rig.fT.lerp(F.T, fa).normalize(); rig.fU.lerp(F.U, fa); rig.fR.crossVectors(rig.fU, rig.fT).normalize(); rig.fU.crossVectors(rig.fT, rig.fR).normalize();
  const inFrame = (x, h, u, out) => out.copy(rig.fP).addScaledVector(rig.fR, x).addScaledVector(rig.fU, h).addScaledVector(rig.fT, u);
  const pos = inFrame(cx, ch, off.z, new THREE.Vector3());
  const target = inFrame(rig.x + lk.x, rig.y + lk.y + rig.tilt * lk.z, lk.z, new THREE.Vector3());
  // Stay inside the castle portal and the drum (checked in the path frame where the camera is).
  TR.frame(cu, F);
  if (cu > -0.25 && cu < L.tunnelEnd) {
    const rel = pos.clone().sub(F.P), dx = rel.dot(F.R), dy = rel.dot(F.U) - (W.WATER + W.AXIS_H), du = rel.dot(F.T);
    const r = Math.hypot(dx, dy), max = L.clearRadius - 0.4;
    if (r > max) pos.copy(F.P).addScaledVector(F.R, (dx / r) * max).addScaledVector(F.U, W.WATER + W.AXIS_H + (dy / r) * max).addScaledVector(F.T, du);
  }
  // Bank gently with the water (three quarters of its tilt).
  camera.up.set(0, 1, 0).lerp(F.U, 0.75).normalize();
  camera.position.copy(pos);
  camera.lookAt(target);
  // Keep the approved horizontal coverage on narrow phones (FOV fitted at a 1:2 portrait screen).
  const aspect = camera.aspect;
  camera.fov = MATCH_ON ? phoneFov(fovV, aspect)   // ?s3=match: keeps the original's vertical framing on phones (match_phone.js)
    : aspect >= 0.5 ? fovV : THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(fovV) / 2) * 0.5 / aspect));
  camera.updateProjectionMatrix();
}

// ------------------------------------------------------------------ collectibles update
function updateCollectibles(dt) {
  const t = state.time, mp = mascot.root.position;
  const near = (o) => o.obj.position.distanceTo(mp) < W.BODY_R + 0.42;
  for (const c of coins) {
    if (!c.live && c.pop < 0) continue;
    if (c.pop >= 0) { popTowardMascot(c, dt); continue; }
    c.obj.position.y = c.home.y + Math.sin(t * 1.2 * 6.283 + c.phase) * 0.08;
    // round2: the paw face kept toward the rider, rocking gently in a wave along each line (instead of turning edge-on)
    if (c.q0) c.obj.quaternion.copy(c.q0).multiply(rockQ.setFromAxisAngle(UP_Y, Math.sin(t * 2.0 - c.u * 0.9) * 0.5));
    else c.obj.rotation.y += dt * THREE.MathUtils.degToRad(120);
    if (R2) passBy(c);
    if (state.phase === 'running' && near(c)) collect(c);
  }
  for (const g of gems) {
    if (!g.live && g.pop < 0) continue;
    if (g.pop >= 0) { popTowardMascot(g, dt); continue; }
    g.spin += dt * THREE.MathUtils.degToRad(70);
    g.obj.position.y = g.home.y + Math.sin(t * 0.75 * 6.283 + g.phase) * 0.1;
    g.obj.rotation.set(Math.sin(t * 0.9 + g.phase) * 0.16, g.spin, Math.sin(t * 0.7 + g.phase * 1.3) * 0.12);
    if (R2) passBy(g);
    if (state.phase === 'running' && near(g)) collect(g);
    if (Math.random() < dt * (1.2 + 10 * Math.max(0, 1 - g.obj.position.distanceTo(mp) / 6))) {
      const q = g.obj.position.clone().add(new THREE.Vector3().randomDirection().multiplyScalar(0.22));
      fx.emit(q.x, q.y, q.z, 0, 0.1, 0, 0.12 + Math.random() * 0.1, 0.35, 2, 0);
    }
  }
  for (const k of socks) {
    if (!k.live && k.pop < 0) continue;
    if (k.pop >= 0) { popTowardMascot(k, dt); continue; }
    k.obj.position.y = k.home.y + Math.sin(t * 0.9 * 6.283 + k.phase) * 0.09;
    k.turn.rotation.set(Math.sin(t * 1.3 + k.phase) * 0.12, Math.PI + Math.sin(t * 0.8 + k.phase) * 0.45, Math.sin(t * 1.1 + k.phase * 1.7) * 0.15);
    if (R2) passBy(k);
    if (state.phase === 'running' && near(k)) collect(k);
  }
  const glowNear = gems.reduce((best, g) => g.live ? Math.max(best, 1 - Math.min(1, g.obj.position.distanceTo(mp) / 6)) : best, 0);
  for (const m of mats.gemMaterials || []) m.emissiveIntensity = 0.35 + 0.6 * glowNear;
}
const rockQ = new THREE.Quaternion(), UP_Y = new THREE.Vector3(0, 1, 0);
// round2: a collectible the mascot has passed in another lane shrinks away over the next metre, instead of sweeping past
// close to the camera (back to full size when the run loops)
function passBy(c) {
  const behind = mascot.z - c.u;
  const k = THREE.MathUtils.clamp((behind - 0.6) / 1.0, 0, 1);
  c.obj.scale.setScalar(1 - k + 1e-3); c.obj.visible = k < 1;
}
function popTowardMascot(c, dt) {
  c.pop += dt;
  const k = Math.min(1, c.pop / 0.35);
  c.obj.position.lerp(mascot.root.position.clone().add(new THREE.Vector3(0, R2 ? 1.0 : 0.6, 0)), k);
  // (round2: it rises over the mascot and shrinks, without first swelling over it)
  c.obj.scale.setScalar((1 + (R2 ? 0.15 : 0.6) * Math.sin(k * Math.PI)) * (1 - k) + 1e-3);
  if (k >= 1) { c.pop = -1; c.obj.visible = false; }
}
function collect(c) {
  c.live = false; c.pop = 0;
  if (c.kind === 'coin') { state.coins++; state.collected.coins++; fx.sparkle(c.obj.position, 7); sfx('coin'); }
  else if (c.kind === 'sock') { state.socks++; state.collected.socks = (state.collected.socks || 0) + 1; fx.sparkle(c.obj.position, 16); sfx('gem'); popHud('sockPanel'); }
  else { state.gems++; state.collected.gems++; fx.sparkle(c.obj.position, 18); sfx('gem'); popHud('gemPill'); }
  refreshHud();
}

// ------------------------------------------------------------------ HUD
function refreshHud() {
  if (R2) {
    $('hearts').innerHTML = state.hearts >= R2_RULES.hearts ? `${state.hearts} <small>Full</small>` : String(state.hearts);
    $('blastCount').textContent = String(state.blasts); $('turboCount').textContent = String(state.turbos);
    $('blastBtn').disabled = state.blasts <= 0; $('turboBtn').disabled = state.turbos <= 0;
  }
  $('coins').textContent = state.coins.toLocaleString('en-US');
  $('gems').textContent = String(state.gems);
  $('sockCount').textContent = `${Math.min(5, state.socks)}/5`;
  $('sockBar').style.width = `${Math.min(5, state.socks) * 20}%`;
}
function popHud(id) { const el = $(id); el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
function startRun() {
  if (state.phase !== 'intro') return;
  state.phase = 'running';
  state.startedAt = state.time;
  if (s56) s56.hideLegacy();   // ?s3=...,s56 (anything the run made since loading)
  if (INTUNNEL_ON) mascot.speed = INTUNNEL.speed;   // ?s3=intunnel: she is already riding the tunnel's water when the run starts
  document.body.classList.add('running');
  unlockAudio();
}
// After Tap to Start, the "Let's go!" banner and the Tap to Start panel slide down a little and fade out
// over 0.45 s, and the steering hint shows from 0.3 s to 3.8 s. Timed in game seconds (not the wall
// clock), so every frame shows the right state, also when frames are stepped for a recording.
const startPanels = ['banner', 'startPanel'].map((id) => $(id));
const openingArt = $('openingArt');
function fadeStartPanels() {
  const since = state.phase === 'running' || state.phase === 'complete' ? state.time - state.startedAt : -1;   // ('complete': ?s3=...,level1's finish)
  const k = since < 0 ? 0 : THREE.MathUtils.smoothstep(since, 0, 0.45);
  for (const el of startPanels) {
    el.style.opacity = (1 - k).toFixed(3);
    el.style.transform = `translateX(-50%) translateY(calc(var(--u) * ${(12 * k).toFixed(2)}))`;
    el.style.visibility = k >= 1 ? 'hidden' : '';
  }
  $('hint').classList.toggle('show', since >= 0.3 && since < 3.8 && state.laps === 0);
  // Test version: the approved Screen 3 artwork (page.html #openingArt) is the Tap to Start screen, once the game is
  // ready and the picture has loaded. It fades out with the start panels while the settings button fades in over its
  // painted twin. Off with ?classic, and on a page without the picture (the live banner and panel show as before).
  if (openingArt) {
    const on = OPENING_PARTS.art && k < 1 && openingArt.complete && openingArt.naturalWidth > 0 && document.body.classList.contains('ready');
    document.body.classList.toggle('openingArt', on);
    openingArt.style.visibility = on ? 'visible' : 'hidden';
    openingArt.style.opacity = (1 - k).toFixed(3);
    $('soundBtn').style.opacity = on ? k.toFixed(3) : '';
  }
  // round2: once the run starts, the gameplay gear gives way to the pause button and the Bubble Blast and Turbo Spin buttons
  // come up at the bottom (the Tap to Start screen keeps the approved gear).
  if (R2) {
    const g = INTUNNEL_ON ? 1 : since < 0 ? 0 : THREE.MathUtils.smoothstep(since, 0.1, 0.55);   // (?s3=intunnel: the approved screen's buttons from the start)
    document.body.classList.toggle('r2Play', g > 0);
    const artOn = document.body.classList.contains('openingArt');
    $('soundBtn').style.opacity = String(artOn ? k * (1 - g) : 1 - g);
    $('soundBtn').style.visibility = g >= 1 ? 'hidden' : '';
    for (const id of ['pauseBtn', 'blastBtn', 'turboBtn']) { const el = $(id); el.style.opacity = g.toFixed(3); el.style.visibility = g > 0 ? '' : 'hidden'; }
  }
}

// ------------------------------------------------------------------ sound (generated, no files)
let actx = null, master = null;
function unlockAudio() {
  if (actx || TEST) return;
  try {
    actx = new (window.AudioContext || window.webkitAudioContext)();
    master = actx.createGain(); master.gain.value = state.sound ? 0.5 : 0; master.connect(actx.destination);
    // Rushing water: soft filtered noise.
    const buf = actx.createBuffer(1, actx.sampleRate * 2, actx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = actx.createBufferSource(); src.buffer = buf; src.loop = true;
    const lp = actx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
    const g = actx.createGain(); g.gain.value = 0.06;
    src.connect(lp).connect(g).connect(master); src.start();
  } catch { actx = null; }
}
function tone(freq, start, dur, gain, type = 'sine') {
  const o = actx.createOscillator(), g = actx.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(0, start); g.gain.linearRampToValueAtTime(gain, start + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  o.connect(g).connect(master); o.start(start); o.stop(start + dur + 0.05);
}
function sfx(name) {
  if (!actx || !state.sound) return;
  const t = actx.currentTime;
  if (name === 'coin') { tone(1318.5, t, 0.12, 0.25, 'triangle'); tone(1975.5, t + 0.06, 0.22, 0.2, 'triangle'); }
  else if (name === 'gem') [1567.98, 2093, 2637.02, 3135.96].forEach((f, i) => tone(f, t + i * 0.045, 0.5, 0.18));
  else if (name === 'splash' || name === 'swish') {
    const len = name === 'splash' ? 0.35 : 0.18;
    const buf = actx.createBuffer(1, actx.sampleRate * len, actx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2);
    const s = actx.createBufferSource(); s.buffer = buf;
    const bp = actx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = name === 'splash' ? 700 : 1800; bp.Q.value = 0.8;
    const g = actx.createGain(); g.gain.value = name === 'splash' ? 0.5 : 0.18;
    s.connect(bp).connect(g).connect(master); s.start(t);
  }
}

// ------------------------------------------------------------------ input: swipes, taps, keys
let touch = null;
const LANE_NAME = ['left', 'middle', 'right'];
const trail = [];          // finger positions for the ?touches overlay (stage pixels, game time)
let gesture = null;        // the last gesture and what it did, for the overlay
function noteTouch(e, down) {
  if (!SHOW_TOUCHES) return;
  const r = stage.getBoundingClientRect();
  trail.push({ x: e.clientX - r.left, y: e.clientY - r.top, t: state.time, down });
  if (trail.length > 80) trail.shift();
}
function noteGesture(text) { if (SHOW_TOUCHES) gesture = { text, t: state.time }; }
stage.addEventListener('pointerdown', (e) => { if (e.target.closest('button') || (R2 && state.paused)) return; touch = { x: e.clientX, y: e.clientY, t: performance.now(), used: false }; stage.setPointerCapture?.(e.pointerId); noteTouch(e, true); });
stage.addEventListener('pointermove', (e) => {
  if (!touch) return;
  noteTouch(e, true);
  if (touch.used) return;
  const dx = e.clientX - touch.x, dy = e.clientY - touch.y, th = Math.max(24, stage.clientWidth * 0.06);
  if (Math.abs(dx) > th && Math.abs(dx) > Math.abs(dy)) {
    touch.used = true; if (state.phase === 'intro') startRun();
    const before = mascot.lane; changeLane(dx < 0 ? -1 : 1);
    noteGesture(`Swipe ${dx < 0 ? '←' : '→'}  ·  ${before === mascot.lane ? 'edge lane' : `lane ${LANE_NAME[before]} → ${LANE_NAME[mascot.lane]}`}`);
  } else if (dy < -th && Math.abs(dy) > Math.abs(dx)) {
    touch.used = true; if (state.phase === 'intro') startRun();
    if (SWIM7_ON) { swimUp(); noteGesture('Swipe ↑  ·  swim burst'); } else { jump(); noteGesture('Swipe ↑  ·  jump'); }
  } else if (SWIM7_ON && dy > th && Math.abs(dy) > Math.abs(dx)) {   // ?s3=...,swim7: swipe down = dive
    touch.used = true; if (state.phase === 'intro') startRun(); swimDown(); noteGesture('Swipe ↓  ·  dive');
  }
});
stage.addEventListener('pointerup', (e) => {
  if (!touch) return;
  noteTouch(e, false);
  if (!touch.used && performance.now() - touch.t < 400) {
    if (state.phase === 'intro') { startRun(); noteGesture('Tap  ·  start'); } else { spin(); noteGesture('Tap  ·  spin'); }
  }
  touch = null;
});
window.addEventListener('keydown', (e) => {
  if (state.phase === 'loading') return;
  const k = e.key;
  if (R2 && state.phase === 'running') {   // round2: P or Escape pauses and resumes; B is Bubble Blast, T is Turbo Spin
    if (k === 'p' || k === 'P' || k === 'Escape') { setPaused(!state.paused); e.preventDefault(); return; }
    if (state.paused) return;
    if (k === 'b' || k === 'B') { useBlast(); return; }
    if (k === 't' || k === 'T') { useTurbo(); return; }
  }
  if (state.phase === 'intro' && [' ', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'a', 'd', 'w'].includes(k)) { startRun(); if (k === ' ' || k === 'Enter') { e.preventDefault(); return; } }
  if (k === 'ArrowLeft' || k === 'a') changeLane(-1);
  else if (k === 'ArrowRight' || k === 'd') changeLane(1);
  else if (k === 'ArrowUp' || k === 'w') { if (SWIM7_ON) swimUp(); else jump(); }
  else if (SWIM7_ON && (k === 'ArrowDown' || k === 's')) swimDown();
  else if (k === ' ') { e.preventDefault(); spin(); }
});
function toggleSound() {
  state.sound = !state.sound;
  $('soundBtn').setAttribute('aria-pressed', String(!state.sound));
  $('soundBtn').title = state.sound ? 'Sound on' : 'Sound off';
  if (master) master.gain.value = state.sound ? 0.5 : 0;
  if (R2) { $('pauseSound').textContent = state.sound ? 'Sound: On' : 'Sound: Off'; $('pauseSound').setAttribute('aria-pressed', String(state.sound)); }
}
$('soundBtn').addEventListener('click', toggleSound);
if (R2) {
  document.body.classList.add('r2');
  $('hint').after($('r2Hud').content.cloneNode(true));   // the round2 controls (page.html template)
  for (const id of ['pauseBtn', 'blastBtn', 'turboBtn', 'pausePanel', 'r2Toast', 'r2Hurt', 'r2Shield']) $(id).hidden = false;
  $('pausePanel').hidden = true;
  // (each button lets go of the keyboard focus after a click, so the space bar keeps meaning "spin")
  $('blastBtn').addEventListener('click', (e) => { e.currentTarget.blur(); useBlast(); });
  $('turboBtn').addEventListener('click', (e) => { e.currentTarget.blur(); useTurbo(); });
  $('pauseBtn').addEventListener('click', (e) => { e.currentTarget.blur(); setPaused(true); });
  $('resumeBtn').addEventListener('click', () => setPaused(false));
  $('pauseSound').addEventListener('click', toggleSound);
  $('restartBtn').addEventListener('click', () => { setPaused(false); restartRound2(); });
}

// ------------------------------------------------------------------ side view (debug, ?side)
let side = null;
function buildSideView() {
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 500);
  const g = new THREE.Group();
  scene.add(g);
  // The water profile along the middle of the run, and the tube's roof and floor through the drum.
  const pos = [], idx = [];
  let i = 0;
  for (let u = L.startZ - 10; u <= L.tunnelEnd + 8; u += 0.2, i++) {
    const a = TR.map(0, W.baseHeight(L, 0, u), u);
    pos.push(a.x, a.y, a.z, a.x, a.y - 0.45, a.z);
    if (i) { const k = i * 2; idx.push(k - 2, k - 1, k, k - 1, k + 1, k); }
  }
  const bg = new THREE.BufferGeometry(); bg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); bg.setIndex(idx);
  g.add(new THREE.Mesh(bg, new THREE.MeshBasicMaterial({ color: 0x1f7dff, side: THREE.DoubleSide })));
  for (const h of [W.AXIS_H + L.tunnelRadius, W.AXIS_H - L.tunnelRadius]) {
    const pts = []; for (let u = L.tunnelStart; u <= L.tunnelEnd; u += 0.5) pts.push(TR.map(0, h, u));
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 2, 0.05, 6), new THREE.MeshBasicMaterial({ color: 0xe0a020 })));
  }
  const N = 1200, tp = new Float32Array(N * 3), tg = new THREE.BufferGeometry();
  tg.setAttribute('position', new THREE.BufferAttribute(tp, 3)); tg.setDrawRange(0, 0);
  const dots = new THREE.Points(tg, new THREE.PointsMaterial({ color: 0xff1f9e, size: 5, sizeAttenuation: false }));
  dots.frustumCulled = false; g.add(dots);
  // Only the run itself: the castle, drum, scenery and water sheet would hide the mascot from the side.
  for (const o of [mats.castle, water, mats.machinery, mats.sideMachinery, decor && decor.root, scenery && scenery.tunnel, mats.falls, mats.bubbles, ...(mats.drumMeshes || []), ...(mats.exitLight || []), ...rollers.map((r) => r.g)]) if (o) o.visible = false;
  side = { cam, g, dots, tp, n: 0, N, yc: 1.0, width: 22, startY: mascot.root.position.y };
}
function sideTrail() {
  const p = mascot.root.position;
  if (side.n >= side.N) { side.tp.copyWithin(0, 3); side.n = side.N - 1; }
  p.toArray(side.tp, side.n * 3); side.n++;
  side.dots.geometry.attributes.position.needsUpdate = true; side.dots.geometry.setDrawRange(0, side.n);
}
function sideFrame() {
  const w = stage.clientWidth, h = stage.clientHeight, p = mascot.root.position, cam = side.cam;
  const width = side.width, height = width * h / w;
  cam.left = -width * 0.36; cam.right = width * 0.64; cam.top = height / 2; cam.bottom = -height / 2; cam.updateProjectionMatrix();
  cam.position.set(p.x - 60, side.yc, p.z); cam.up.set(0, 1, 0); cam.lookAt(p.x, side.yc, p.z);   // fixed height: travel to the right
  return { width, height, left: p.z + cam.left };
}

// ------------------------------------------------------------------ overlay (debug views)
const overlay = $('overlay'), octx = overlay.getContext('2d');
function drawOverlay() {
  const w = stage.clientWidth, h = stage.clientHeight;
  if (overlay.width !== w || overlay.height !== h) { overlay.width = w; overlay.height = h; }
  octx.clearRect(0, 0, w, h);
  if (side) drawSideHud(w, h);
  if (SHOW_TOUCHES) drawTouches(w, h);
}
function pill(text, x, y, size, alpha = 1, align = 'center') {
  octx.font = `600 ${size}px Fredoka, system-ui, sans-serif`;
  const tw = octx.measureText(text).width, pad = size * 0.6, bx = align === 'center' ? x - tw / 2 - pad : x - pad;
  octx.globalAlpha = alpha * 0.82; octx.fillStyle = '#141c5c';
  octx.beginPath(); octx.roundRect(bx, y - size * 0.95, tw + pad * 2, size * 1.6, size * 0.8); octx.fill();
  octx.globalAlpha = alpha; octx.fillStyle = '#fff'; octx.textAlign = align === 'center' ? 'center' : 'left';
  octx.fillText(text, align === 'center' ? x : x, y + size * 0.1); octx.globalAlpha = 1;
}
function drawTouches(w, h) {
  const recent = trail.filter((p) => state.time - p.t < 0.5);
  if (recent.length) {
    octx.lineCap = 'round'; octx.lineJoin = 'round';
    for (let i = 1; i < recent.length; i++) {
      const a = recent[i - 1], b = recent[i], age = state.time - b.t;
      octx.strokeStyle = `rgba(255,255,255,${Math.max(0, 0.85 - age * 1.6)})`; octx.lineWidth = 14 * (1 - age);
      octx.beginPath(); octx.moveTo(a.x, a.y); octx.lineTo(b.x, b.y); octx.stroke();
    }
    const last = recent[recent.length - 1], age = state.time - last.t;
    octx.fillStyle = `rgba(255,255,255,${Math.max(0, 0.9 - age * 1.8)})`; octx.strokeStyle = `rgba(255,79,184,${Math.max(0, 0.9 - age * 1.8)})`; octx.lineWidth = 3;
    octx.beginPath(); octx.arc(last.x, last.y, 15, 0, Math.PI * 2); octx.fill(); octx.stroke();
  }
  if (gesture && state.time - gesture.t < 1.0) pill(gesture.text, w / 2, h * 0.86, Math.round(h * 0.024), Math.min(1, (1.0 - (state.time - gesture.t)) * 3));
}
function drawSideHud(w, h) {
  const f = side.frame, p = mascot.root.position;
  const sy = (y) => (side.cam.top - (y - side.yc)) / f.height * h;
  octx.font = `500 ${Math.round(h * 0.022)}px Fredoka, system-ui, sans-serif`; octx.textAlign = 'left';
  for (let y = -3; y <= 6; y += 0.5) {
    const yy = sy(y); if (yy < 0 || yy > h) continue;
    const major = Math.abs(y - Math.round(y)) < 1e-6;
    octx.strokeStyle = major ? 'rgba(40,30,110,0.45)' : 'rgba(40,30,110,0.18)'; octx.lineWidth = major ? 1.5 : 1;
    octx.beginPath(); octx.moveTo(0, yy); octx.lineTo(w, yy); octx.stroke();
    if (major) { octx.fillStyle = 'rgba(30,20,90,0.85)'; octx.fillText(`${y >= 0 ? '+' : ''}${y.toFixed(0)} m`, 8, yy - 4); }
  }
  const mx = (p.z - f.left) / f.width * w, my = sy(p.y);
  octx.strokeStyle = '#ff1f9e'; octx.setLineDash([6, 5]); octx.lineWidth = 2;
  octx.beginPath(); octx.moveTo(mx, my); octx.lineTo(w * 0.9, my); octx.stroke(); octx.setLineDash([]);
  const a = TR.angles(mascot.z), s = Math.round(h * 0.028);
  pill(`height ${p.y >= 0 ? '+' : ''}${p.y.toFixed(2)} m`, w * 0.9 - 4, my + s * 0.35, s, 1, 'left');
  pill('SIDE VIEW (debug) · camera fixed in height · pink dots = the mascot\'s real path', w / 2, s * 1.5, s);
  pill(`tube pitch ${a.pitch >= 0 ? '+' : ''}${a.pitch.toFixed(0)}°  ·  bank ${a.bank >= 0 ? '+' : ''}${a.bank.toFixed(0)}°  ·  speed ${mascot.speed.toFixed(1)} m/s${mascot.air ? '  ·  jumping' : ''}`, w / 2, h - s * 1.2, s);
}

// ------------------------------------------------------------------ frame loop
function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  composer.setPixelRatio(pixelRatio);
  bloom.resolution.set(Math.round(w * 0.5), Math.round(h * 0.5));
  camera.aspect = w / h;
  if (fx) fx.u.uScale.value = (h * pixelRatio * 0.5) / Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
  if (fx && fx.u.uMaxPx) fx.u.uMaxPx.value = h * pixelRatio * WATER7.maxPx;   // (?s3=...,water7 only)
  stage.style.setProperty('--u', Math.min(h / 537, w / 269).toFixed(4) + 'px');   // approved board pixels
}
new ResizeObserver(resize).observe(stage);

function step(dt) {
  if (R2 && state.paused) return;   // round2 pause: the game stands still (the picture stays as it was)
  state.time += dt;
  if (R2) stepRound2(dt);
  if (R3) stepRound3(dt);
  waterU.uTime.value = state.time;
  for (const u of fallsU) u.uTime.value = state.time;
  mats.bubbleU.uTime.value = state.time;
  updateMascot(dt);
  updateCollectibles(dt);
  for (const r of rollers) {
    r.angle += r.speed * dt;
    tmpQ.setFromAxisAngle(r.axis, r.angle);
    tmpM.makeTranslation(r.centre.x, r.centre.y, r.centre.z).multiply(tmpM2.makeRotationFromQuaternion(tmpQ)).multiply(new THREE.Matrix4().makeTranslation(-r.centre.x, -r.centre.y, -r.centre.z));
    r.g.matrix.multiplyMatrices(tmpM, r.m0);
  }
  scenery.update(dt, state.time);
  decor.update(dt, state.time);
  for (const ring of mats.rings) ring.material.color.copy(ring.userData.base).multiplyScalar(0.8 + 0.25 * Math.sin(state.time * 2.4 + ring.userData.pulse));
  fx.update(dt);
  if (SWIM2_ON && fx.u.uMaxPx) fx.u.uMaxPx.value = swim2CapPx(renderer.domElement.height, WATER7.maxPx);   // ?s3=intunnel,swim2: the cap eases in as she starts
  updateCamera(dt);
  if (level1) level1.update(dt, state.time, state.phase);   // ?s3=...,level1 (after the camera: its water and walls use the camera's place)
  if (ENV6_ON && s56) env6Grade(gradePass, mascot);   // ?s3=...,env6: the hero grade inside the s56 tunnel (s56_env6.js), read by s56 / arch56 below
  if (s56) s56.update(dt, state.time, state.phase, mascot);   // ?s3=...,s56: the tunnel's water, gears and splashes
  fadeStartPanels();
  if (opening) opening.update(dt, state.time, state.phase);
}

let fpsAvg = 60, lowFor = 0;
function render() {
  if (side) {
    side.frame = sideFrame();
    if (fx) fx.u.uScale.value = (stage.clientHeight * pixelRatio) / side.frame.height;   // ortho: pixels per metre
    renderer.render(scene, side.cam);
  } else {
    if (fx) fx.u.uScale.value = (stage.clientHeight * pixelRatio * 0.5) / Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
    if (ENV6_ON && s56) { env6Grade(gradePass, mascot); env6Post(bloom); }   // ?s3=...,env6: the last word on the bloom (s56_env6.js)
    composer.render();
  }
  if (side || SHOW_TOUCHES) drawOverlay();
}
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  if (state.phase === 'loading' || TEST) return;
  if (HOME_ON && homeHolds()) { last = now; return; }   // (?s3=...,home: nothing to draw while the opening screens cover the game)
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  step(dt);
  render();
  // Keep it smooth on slower phones: drop bloom, then resolution, if the frame rate stays low.
  fpsAvg += (1 / Math.max(dt, 1e-3) - fpsAvg) * 0.05;
  lowFor = fpsAvg < 32 ? lowFor + dt : 0;
  if (lowFor > 2.5) {
    lowFor = 0;
    if (bloom.enabled) bloom.enabled = false;
    else if (pixelRatio > 0.75) { pixelRatio = Math.max(0.75, pixelRatio * 0.8); renderer.setPixelRatio(pixelRatio); resize(); }
  }
}

// ------------------------------------------------------------------ start
async function main() {
  try {
    const layoutRes = await fetch(files.layout);
    L = await layoutRes.json();
    TR = makeTrack(L, { ...(R4 ? { straight: ROUND4.straight, ...(R5 ? { curve: ROUND5.path.curve } : {}) } : {}), ...(LEVEL1_ON ? { course: COURSE } : {}) });   // round4: a longer straight start in the drum; round5: a gentler tube; level1: the course beyond the drum
    buildSky();
    const [castle, drum, mascotG, roller, gem, sock, machineryG, towerG, gearG, pipeG, crownG, coinFace] = await Promise.all([
      ...['castle', 'drum', 'mascot', 'roller', 'gem', 'sock', 'machinery', 'tower', 'gear', 'pipe', 'crown'].map(loadGltf), new THREE.TextureLoader().loadAsync('ui/coin_face.png')]);
    fx = new Particles(R3 ? 2200 : 1400);
    if (R3) {   // round3: kind 3, a white spray droplet (bright white body, cyan edge)
      fx.points.material.fragmentShader = fx.points.material.fragmentShader.replace('if (vKind < 0.5) {', `if (vKind > 2.5) {
    float hl = 1.0 - smoothstep(0.0, 0.4, length(p - vec2(-0.3, -0.3)));
    a = (1.0 - smoothstep(0.7, 1.0, r)) * 0.85 + hl * 0.15;
    col = mix(vec3(0.8, 0.93, 1.0), vec3(1.25), clamp(hl + (1.0 - r) * 0.5, 0.0, 1.0));
  } else if (vKind < 0.5) {`);
      fx.points.material.needsUpdate = true;
    }
    if (WATER7_ON || SWIM_ON || (SWIM2_ON && SWIM2.cap)) {   // ?s3=intunnel,water7 (R7), ?s3=intunnel,swim and ?s3=intunnel,swim2: every spray droplet drawn no bigger than a small fleck (tunnel_s4_bt.js WATER7)
      fx.u.uMaxPx = { value: renderer.domElement.height * WATER7.maxPx };
      const dm = fx.points.material;
      dm.vertexShader = dm.vertexShader.replace('uniform float uScale;', 'uniform float uScale, uMaxPx;')
        .replace('gl_PointSize = size * uScale / max(0.1, -mv.z);', WATER7_ON || SWIM_ON ? 'gl_PointSize = min(size * uScale / max(0.1, -mv.z), uMaxPx);' : SWIM2_POINT);   // (swim2: the sparkles, kind 2, keep their size)
      dm.needsUpdate = true;
    }
    // Lavender, white and gold as in the approved Screen 3 (shaders.js CASTLE_GRADE), softened by haze.
    repairNormals(castle.scene);
    bake(castle.scene, { saturation: 1.0, brightness: 1.06, glow: 0.35, grade: SH.CASTLE_GRADE, haze: [0.3, 14, 45, [0.86, 0.79, 1.0]], shade: [0.86, 0.26, 0.35] });
    mats.castle = place(castle.scene, L.castle);
    buildDrum(drum);
    buildWater();
    buildRails();
    buildWaterfalls();
    buildDrumLights();
    buildRollers(roller);
    scenery = buildScenery({ scene, mats, track: { TR, L, W } });
    mats.machinery = scenery.root;
    buildSideMachinery(machineryG);
    // The user's four Meshy entrance decorations: water towers, gear wheels, golden pipes, crown trim (decor.js).
    decor = buildDecor({ scene, models: { tower: towerG, gear: gearG, pipe: pipeG, crown: crownG }, env: mats.env, gold: mats.gold, glowTexture: radialTexture(),
      fallGeometry, fallMaterial: mats.fallMat, fx });
    state.decorClear = decor.clear;
    buildBubbles();
    const coinP2 = R5 ? await Promise.all([loadGltf('coinP2'), loadGltf('coinP2Lo')]) : null;   // round5 only: the Tripo coin
    const coin3 = !coinP2 && COIN3_ON && R2 ? coin3Prepare(await Promise.all([loadGltf('coin3'), loadGltf('coin3Lo')])) : null;   // six,coin3: the user's new paw coin
    buildCollectibles(gem, coinFace, coinP2 || coin3);   // (coin3: the same tripoCoin() path)
    buildSocks(sock);
    if (MATCH_ON) matchCollectibles({ coins, gems, socks });   // ?s3=match: visual sizes and looks only (tunnel_r9_match.js)
    buildMascot(mascotG);
    // The Screen 3 opening look (opening.js): a separate cosmetic layer, built with its own random numbers
    // so the game's own (coin bobbing, splashes) are drawn exactly as before. ?classic leaves it out.
    if (OPENING_ON && !SIDE) {
      opening = withPrivateRandom(makeRandom(0x0be5), () => buildOpening({ scene, env: mats.env, TR, L, W, mascot, camera, Particles, fxScale: fx.u.uScale,
        waterU, castle: mats.castle, waterSheets: water.children, renderPass: composer.passes[0], bumpMascot, drumMeshes: mats.drumMeshes, exitLight: mats.exitLight, r2: R2 ? r2Hooks : null, bloomPass: bloom, outputPass: composer.passes[composer.passes.length - 1], grade: gradePass, bubbles: mats.bubbles, rollers, sideMachinery: mats.sideMachinery, fur: mats.fur, mascotModel: mascot.squash.children[0],
        setSideMachinery: (m) => { Object.assign(SIDE_MACHINERY, m); placeSideMachinery(); return state.machineryInnerX; }, get rollerCandidate() { return state.rollerCandidate; }, set rollerCandidate(v) { state.rollerCandidate = v; } }));
      await withPrivateRandomAsync(makeRandom(0x0be6), opening.loadExtras);   // a roller candidate, only with ?roller=1|2
    }
    if (SIDE) buildSideView();
    if (LEVEL1_ON && !SIDE) {   // ?s3=...,level1: Level 1's sections after the drum (level1.js), built with its own random numbers
      level1 = withPrivateRandom(makeRandom(0x1e71), () => buildLevel1({ scene, camera, TR, L, W, state, mascot, mats, stage, sfx,
        castleModel: castle.scene, addCoin: mats.l1AddCoin, addGem: mats.l1AddGem, addSock: mats.l1AddSock,
        counts: () => ({ coins: coins.length, gems: gems.length, socks: socks.length }), gemsList: gems, coinsList: coins, socksList: socks,
        bumpMascot: (s) => withPrivateRandom(makeRandom(0x1e72 + (state.bumps || 0)), () => bumpMascot(s)),
        finish: () => { state.phase = 'complete'; },
        fx, refreshHud, padJump: (vy) => { if (mascot.air) return; jump(); mascot.vy = vy; },   // (flow: the pops, the rewards, the bounce pad)
        restart: () => { if (R2) restartRound2(); else { resetRun(); state.phase = 'intro'; document.body.classList.remove('running', 'inDrum'); refreshHud(); } } }));
    }
    if (level1 && (TRIPO1_ON || SCENE07_ON)) await applyTripo1({ scene, loader: gltfLoader, env: mats.env, TR, camera, fx });   // ?s3=...,level1,tripo1 / scene07 (tripo_l1.js): looks only
    if (MATCH_ON) await MATCH_READY;   // ?s3=match: the tunnel textures derived from the approved picture (tunnel_r9_match.js)
    if (S56_ON && level1) { s56 = await buildS56({ scene, TR, L, W, env: mats.env, loader: gltfLoader, mascot, legacy: [water] }); s56.hideLegacy(); installHud56(); installFin6Grade(composer); }   // ?s3=...,level1,s56 (s56_tunnel.js, hud56.js)
    resize();
    resetRun();
    state.phase = 'intro';
    refreshHud();
    step(1 / 60);
    render();
    document.body.classList.add('ready');
    $('loading').hidden = true;
    resolveReady();
  } catch (err) {
    console.error(err);
    $('loadMsg').textContent = 'The washing machine could not load: ' + (err && err.message ? err.message : err) + '. Reload the page to try again.';
    rejectReady(err);
  }
}
let resolveReady, rejectReady;
const ready = new Promise((res, rej) => { resolveReady = res; rejectReady = rej; });
requestAnimationFrame(frame);
main();

// ------------------------------------------------------------------ hooks for automated play-testing
window.__bw = {
  ready,
  state: () => ({
    phase: state.phase, time: +state.time.toFixed(3), z: +mascot.z.toFixed(3), x: +mascot.x.toFixed(3), y: +mascot.yAbs.toFixed(3),
    world: mascot.root.position.toArray().map((v) => +v.toFixed(3)), path: Object.fromEntries(Object.entries(TR.angles(mascot.z)).map(([k, v]) => [k, +v.toFixed(1)])),
    cameraUp: camera.up.toArray().map((v) => +v.toFixed(3)),
    lane: mascot.lane, speed: +mascot.speed.toFixed(2), air: mascot.air, slope: +mascot.lastSlope.toFixed(3), pitchDeg: +THREE.MathUtils.radToDeg(mascot.pitch).toFixed(1),
    leanDeg: +THREE.MathUtils.radToDeg(mascot.lean).toFixed(1), coins: state.coins, gems: state.gems, socks: state.socks, collected: { ...state.collected }, laps: state.laps,
    camera: camera.position.toArray().map((v) => +v.toFixed(3)), cameraPitchDeg: +THREE.MathUtils.radToDeg(Math.asin(camera.getWorldDirection(new THREE.Vector3()).y)).toFixed(2),
    particles: fx ? fx.life.reduce((n, l) => n + (l > 0 ? 1 : 0), 0) : 0, repairedNormals: state.repairedNormals, machineryInnerX: state.machineryInnerX ?? null, decorClear: state.decorClear ?? null,
    rollerCandidate: state.rollerCandidate ?? null,
    ...(SWIM7_ON && mascot.s7 ? { swim: { burst: mascot.s7.burst >= 0, dive: mascot.s7.dive >= 0, under: !!mascot.s7under, bursts: mascot.s7.bursts, dives: mascot.s7.dives } } : {}),
    ...(R2 ? { hearts: state.hearts, blasts: state.blasts, turbos: state.turbos, paused: state.paused, blastT: +state.blastT.toFixed(2), turboT: +state.turboT.toFixed(2), knocks: state.knocks, restarts: state.restarts, bumps: state.bumps || 0 } : {}),
  }),
  blast: () => useBlast(), turbo: () => useTurbo(), pause: (v) => setPaused(v),
  hazards: () => (r2Hooks.hazards ? r2Hooks.hazards() : null),
  tap: () => { if (state.phase === 'intro') startRun(); else spin(); },
  swipe: (dir) => { if (state.phase === 'intro') startRun(); if (dir === 'left') changeLane(-1); else if (dir === 'right') changeLane(1); else if (dir === 'up') { if (SWIM7_ON) swimUp(); else jump(); } else if (dir === 'down' && SWIM7_ON) swimDown(); },
  advance: (seconds, fps = 30) => { const n = Math.max(1, Math.round(seconds * fps)); for (let i = 0; i < n; i++) step(1 / fps); render(); return window.__bw.state(); },
  step: (seconds, fps = 30) => { const n = Math.max(1, Math.round(seconds * fps)); for (let i = 0; i < n; i++) step(1 / fps); },   // (tests: the same steps without drawing)
  info: () => ({ calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures }),
  render,
  lookBack: (v) => { mascot.look = v; mascot.lookT = -0.5; },
  setBloom: (on) => { bloom.enabled = !!on; },
  // Try a Tap to Start framing (camera offset and aim from the mascot, field of view) without a rebuild.
  setSideMachinery: (m) => { Object.assign(SIDE_MACHINERY, m); placeSideMachinery(); return state.machineryInnerX; },
  // Try placements of the Meshy entrance decor without a rebuild: kind is towers, gears, pipes or crowns.
  // Returns each kind's nearest distance to the slide's middle (decor.js LANE_CLEAR).
  setDecor: (kind, i, props) => { if (props === null) DECOR[kind].splice(i, 1); else DECOR[kind][i] = Object.assign(DECOR[kind][i] || {}, props); state.decorClear = decor.place(); return state.decorClear; },
  getDecor: () => JSON.parse(JSON.stringify(DECOR)),
  // The world point under a stage pixel (for measuring where the approved scene's parts sit).
  pick: (px, py) => {
    const r = stage.getBoundingClientRect(), ray = new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2((px / r.width) * 2 - 1, -(py / r.height) * 2 + 1), camera);
    const hit = ray.intersectObjects([mats.castle, decor.root, mats.sideMachinery].filter(Boolean), true)[0];
    return hit ? { p: hit.point.toArray().map((v) => +v.toFixed(2)), obj: hit.object.name || hit.object.parent?.name || '' } : null;
  },
  project: (p) => { const v = new THREE.Vector3(...p).project(camera), r = stage.getBoundingClientRect(); return [+((v.x + 1) / 2 * r.width).toFixed(1), +((1 - v.y) / 2 * r.height).toFixed(1)]; },
  setFraming: (f) => { if (f.off) S3.off.set(...f.off); if (f.look) S3.look.set(...f.look); if (f.fov) S3.fov = f.fov; rig.snap = true; },
  // Step without drawing and report, every frame, how far the mascot's body and the camera reach from the
  // tube's axis while they are inside the washer tunnel (null outside it). The drum's nearest surface
  // (its ribs) is 2.1 m from the axis; the glowing rings and panels sit further out.
  clearanceTrace: (seconds, fps = 30) => {
    const out = [], axisH = W.WATER + W.AXIS_H, rel = new THREE.Vector3();
    const inTube = (u) => u > L.tunnelStart + 0.5 && u < L.tunnelEnd - 0.5;
    for (let i = 0, n = Math.round(seconds * fps); i < n; i++) {
      step(1 / fps);
      const m = mascot, body = inTube(m.z) ? Math.hypot(m.x, m.yAbs - axisH) + W.BODY_R : null;
      // the camera's place along the tube: where its offset from the path is square to the path
      let best = null;
      for (let u = m.z - 9; u <= m.z + 0.5; u += 0.05) {
        TR.frame(u, F); rel.copy(camera.position).sub(F.P);
        const along = Math.abs(rel.dot(F.T));
        if (!best || along < best.along) best = { along, u, r: Math.hypot(rel.dot(F.R), rel.dot(F.U) - axisH) };
      }
      out.push({ t: +state.time.toFixed(3), z: +m.z.toFixed(2), body: body && +body.toFixed(3), camera: inTube(best.u) ? +best.r.toFixed(3) : null });
    }
    return out;
  },
  debug: () => ({ scene, water, mascot: mascot.root, particles: fx.points, renderer, composer, camera, track: TR, layout: L, world: W, mascotState: mascot }),
};
