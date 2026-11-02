// Bubble Wash Kingdom: playable browser version of approved Screen 3 ("Let's go! Into the
// washing machine!"), built from the user's Meshy models and the layout of the Unity project.
// The Unity project stays the real game; this is a separate demonstration.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import * as W from './world.js';
import * as SH from './shaders.js';
import { makeTrack } from './track.js';

const TEST = !!window.__BW_TEST__;
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
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 512), 0.32, 0.45, 0.97);
composer.addPass(bloom);
composer.addPass(new ShaderPass(SH.GradeShader));
composer.addPass(new OutputPass());

scene.add(new THREE.HemisphereLight(0xffe9ff, 0x6ea8ff, 1.1));
const sun = new THREE.DirectionalLight(0xfff2e6, 1.7);
sun.position.set(-3, 6, -4);
scene.add(sun);
const SUN_DIR = sun.position.clone().normalize();

// ------------------------------------------------------------------ loading
const files = {
  layout: 'models/layout.json', castle: 'models/castle.glb', drum: 'models/drum.glb',
  mascot: 'models/mascot.glb', roller: 'models/roller.glb', gem: 'models/gem.glb', sock: 'models/sock.glb',
};
const progress = {};
function showProgress() {
  let loaded = 0, total = 0;
  for (const p of Object.values(progress)) { loaded += p.loaded; total += p.total || p.loaded; }
  const pct = total > 0 ? Math.round((loaded / total) * 100) : 0;
  $('loadBar').style.width = pct + '%';
  $('loadPct').textContent = pct + '%';
}
const gltfLoader = new GLTFLoader();
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
  phase: 'loading', time: 0, coins: 1280, gems: 36, socks: 0, sound: true,
  collected: { coins: 0, gems: 0 }, laps: 0,
};

// ------------------------------------------------------------------ materials
const mats = {};
function bakedMaterial(src, opts = {}) {
  // Meshy colour texture rendered as baked art with a saturation/brightness lift (Unity MeshyBaked).
  const m = new THREE.MeshBasicMaterial({ map: src.map || null, color: 0xffffff, vertexColors: !!opts.vertexColors, side: THREE.DoubleSide });
  const sat = opts.saturation ?? 1.15, bright = opts.brightness ?? 1.0, glow = opts.glow ?? 0.0;
  m.onBeforeCompile = (s) => {
    s.fragmentShader = s.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
      { float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
        diffuseColor.rgb = mix(vec3(l), diffuseColor.rgb, ${sat.toFixed(3)}) * ${bright.toFixed(3)};
        diffuseColor.rgb += diffuseColor.rgb * smoothstep(0.55, 0.95, l) * ${glow.toFixed(3)}; }`);
  };
  return m;
}

// ------------------------------------------------------------------ world
let water, waterU, mascot, rig, fx;
const coins = [], gems = [], socks = [], rollers = [], fallsU = [];
const tmpM = new THREE.Matrix4(), tmpM2 = new THREE.Matrix4(), tmpQ = new THREE.Quaternion();

function buildSky() {
  const sky = new THREE.Mesh(new THREE.SphereGeometry(170, 32, 16), new THREE.ShaderMaterial({
    vertexShader: SH.skyVertex, fragmentShader: SH.skyFragment, side: THREE.BackSide, depthWrite: false,
    uniforms: { uTop: { value: C(0xb59cff) }, uMid: { value: C(0xf4b8f0) }, uHorizon: { value: C(0xffe2f4) }, uBottom: { value: C(0x7fb6ff) } },
  }));
  sky.renderOrder = -10;
  scene.add(sky);
  // Environment reflections for the gold and the gems, from the same sky.
  const envScene = new THREE.Scene();
  envScene.add(sky.clone());
  const pmrem = new THREE.PMREMGenerator(renderer);
  mats.env = pmrem.fromScene(envScene, 0.02, 0.1, 400).texture;   // far plane beyond the 170 m sky
  mats.gold = new THREE.MeshStandardMaterial({ color: 0xffc24a, metalness: 1, roughness: 0.28, envMap: mats.env, envMapIntensity: 1.3 });
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

function bake(root, opts) {
  root.traverse((o) => {
    if (!o.isMesh) return;
    o.material = bakedMaterial(o.material, { ...opts, vertexColors: !!o.geometry.attributes.color });
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
    uDeep: { value: C(0x0636e8) }, uShallow: { value: C(0x0a86ff) }, uTurq: { value: C(0x14d9ef) }, uGlow: { value: C(0x5ee8ff) },
    uSky: { value: C(0xa9c4ff) }, uPink: { value: C(0xff9be0) }, uGold: { value: C(0xffcc5a) },
    uRingA: { value: C(0xffd873) }, uRingB: { value: C(0x8ce6ff) }, uFog: { value: C(0xccccff) }, uSunDir: { value: SUN_DIR },
    uRings: { value: new THREE.Vector3(L.tunnelStart + 0.25, L.segmentLength - Math.max(0.02, L.segmentLength * 0.005), 4) },
  };
  const mat = new THREE.ShaderMaterial({ vertexShader: SH.waterVertex, fragmentShader: SH.waterFragment, uniforms: waterU });
  const drumXs = []; for (let i = 0; i <= 28; i++) drumXs.push(-2.1 + 4.2 * (i / 28));
  water = new THREE.Group();
  water.add(new THREE.Mesh(sheet(cols, L.startZ - 30, L.tunnelStart + 2.5, 0.3), mat));
  water.add(new THREE.Mesh(sheet(drumXs, L.tunnelStart - 0.5, L.tunnelEnd + 6, 0.25), mat));
  scene.add(water);
}

function buildRails() {
  // Gold rims along the raised slide (they ride its hills), like the Unity PLACEHOLDER_WaterSlideRails.
  for (const side of [-1, 1]) {
    const pts = [];
    const rx = side * (W.SLIDE.half + 0.12);
    for (let z = L.startZ - 24; z <= -2.5; z += 0.5) pts.push(new THREE.Vector3(rx, W.baseHeight(L, side * W.SLIDE.half, z) + 0.12, z));
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 2, 0.07, 8), mats.gold);
    scene.add(tube);
    for (let z = L.startZ - 24; z <= -2.5; z += 3) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 8), mats.gold);
      post.position.set(rx, W.baseHeight(L, side * W.SLIDE.half, z) - 0.2, z);
      scene.add(post);
    }
  }
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
  const glowTex = radialTexture();
  const end = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshBasicMaterial({ map: glowTex, color: new THREE.Color(0.45, 0.7, 1.1), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
  end.matrixAutoUpdate = false;
  TR.mapMatrix(new THREE.Matrix4().makeTranslation(0, W.WATER + W.AXIS_H, L.tunnelEnd + 1.5).multiply(new THREE.Matrix4().makeRotationY(Math.PI)), end.matrix);
  scene.add(end);
}

function radialTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'); const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.4, 'rgba(255,255,255,0.45)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// Screen 3 washing brushes (the Meshy roller), placed in view beside the narrower slide as in the
// approved screen: a big one close on the left, seen nearly end-on (blue hub, fluffy pink ring), and
// more along both sides toward the castle. [track x, h, u], axis, diameter (m), spin (deg/s).
const SCREEN3_BRUSHES = [
  { at: [2.22, 1.05, -13.6], axis: [-0.45, 0.05, -0.89], d: 2.2, spin: 110 },
  { at: [2.75, 1.1, -7.4], axis: [-0.3, 0.0, -0.95], d: 1.7, spin: -95 },
];
// The three Meshy drum segments, chained as in the Unity layout and then bent along the 3D path:
// every vertex's straight-layout z becomes its distance along the path and its x/y are carried by
// the path frame there. The segments stay seamless because they share one continuous frame.
function buildDrum(gltf) {
  bake(gltf.scene, { saturation: 1.3, brightness: 1.05, glow: 0.9 });
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
      g.computeBoundingSphere();
      const m = new THREE.Mesh(g, mesh.material);
      scene.add(m);
      mats.drumMeshes.push(m);
    }
  }
}

function buildRollers(gltf) {
  const src = gltf.scene;
  bake(src, { saturation: 1.25, brightness: 1.08 });
  // Screen 4 rollers from the Unity layout, carried onto the 3D path inside the drum.
  for (const r of L.rollers) {
    if (r.centre[2] < L.tunnelStart) continue;   // Screen 3's roller is replaced by SCREEN3_BRUSHES
    const g = new THREE.Group(); g.matrixAutoUpdate = false;
    g.add(src.clone());
    scene.add(g);
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

// Gold-and-blue washing-machine works beside the slide, as in the approved Screen 3: turning gears
// with blue hubs, blue barrel tanks banded in gold, and portholes of blue glass in gold rims.
function buildMachinery() {
  const blue = new THREE.MeshStandardMaterial({ color: 0x2a5cff, metalness: 0.35, roughness: 0.3, envMap: mats.env, envMapIntensity: 1.1 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x5fc4ff, metalness: 0.1, roughness: 0.06, envMap: mats.env, envMapIntensity: 1.6, emissive: 0x0b3a8a, emissiveIntensity: 0.6 });
  const works = new THREE.Group(); scene.add(works); mats.machinery = works;
  const face = (g, at, yaw) => { g.position.set(...at); g.rotation.y = yaw; works.add(g); return g; };
  mats.gears = [];
  const gearGeo = (r, teeth) => {
    const sh = new THREE.Shape(), r0 = r * 0.8, step = (Math.PI * 2) / teeth;
    for (let i = 0; i < teeth; i++) {
      const a = i * step;
      const pts = [[r0, a], [r, a + step * 0.12], [r, a + step * 0.42], [r0, a + step * 0.56]];
      pts.forEach(([rr, aa], j) => { const x = Math.cos(aa) * rr, y = Math.sin(aa) * rr; if (i === 0 && j === 0) sh.moveTo(x, y); else sh.lineTo(x, y); });
    }
    sh.closePath();
    const hole = new THREE.Path(); hole.absarc(0, 0, r * 0.36, 0, Math.PI * 2, true); sh.holes.push(hole);
    const g = new THREE.ExtrudeGeometry(sh, { depth: r * 0.2, bevelEnabled: true, bevelThickness: r * 0.05, bevelSize: r * 0.03, bevelSegments: 2, curveSegments: 8 });
    g.center();
    return g;
  };
  const gear = (at, r, teeth, yaw, speed) => {
    const g = new THREE.Group();
    const wheel = new THREE.Mesh(gearGeo(r, teeth), mats.gold);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.38, r * 0.38, r * 0.32, 28), blue); hub.rotation.x = Math.PI / 2;
    const cap = new THREE.Mesh(new THREE.SphereGeometry(r * 0.17, 18, 12), mats.gold); cap.position.z = -r * 0.16;
    g.add(wheel, hub, cap);
    mats.gears.push({ obj: wheel, speed });
    return face(g, at, yaw);
  };
  const tank = (at, r, h, yaw) => {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 32), blue);
    g.add(body);
    for (const y of [-h / 2, -h / 6, h / 6, h / 2]) { const band = new THREE.Mesh(new THREE.TorusGeometry(r * 1.01, r * 0.07, 8, 40), mats.gold); band.rotation.x = Math.PI / 2; band.position.y = y; g.add(band); }
    const dome = new THREE.Mesh(new THREE.SphereGeometry(r, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), mats.gold); dome.position.y = h / 2; g.add(dome);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(r * 0.22, 16, 10), blue); knob.position.y = h / 2 + r * 0.95; g.add(knob);
    return face(g, at, yaw);
  };
  const porthole = (at, r, yaw) => {
    const g = new THREE.Group();
    const rim = new THREE.Mesh(new THREE.TorusGeometry(r, r * 0.18, 12, 40), mats.gold);
    const pane = new THREE.Mesh(new THREE.CircleGeometry(r * 0.92, 40), glass); pane.position.z = -0.01; pane.rotation.y = Math.PI;
    g.add(rim, pane);
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2, b = new THREE.Mesh(new THREE.SphereGeometry(r * 0.07, 10, 8), mats.gold); b.position.set(Math.cos(a) * r, Math.sin(a) * r, -r * 0.14); g.add(b); }
    return face(g, at, yaw);
  };
  const pipe = (a, b, r) => {
    const d = new THREE.Vector3(...b).sub(new THREE.Vector3(...a)), len = d.length();
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 20), mats.gold);
    m.position.set(...a).add(new THREE.Vector3(...b)).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize());
    works.add(m);
    for (let s = 0.12; s < 1; s += 0.38) { const ring = new THREE.Mesh(new THREE.TorusGeometry(r * 1.15, r * 0.3, 8, 24), blue); ring.position.set(...a).addScaledVector(d, s); ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), d.clone().normalize()); works.add(ring); }
  };
  // Left (screen-left = +x), behind the big brush.
  tank([2.95, 0.15, -10.4], 0.5, 1.7, 0.4);
  gear([2.6, 2.35, -11.4], 0.75, 16, -0.35, 0.7);
  porthole([2.25, 2.55, -8.3], 0.42, -0.3);
  gear([3.3, 1.55, -6.2], 0.8, 18, -0.25, -0.45);
  pipe([2.05, -0.5, -9.2], [2.05, 3.1, -9.2], 0.09);
  // Right (screen-right = -x).
  gear([-2.75, 2.0, -9.6], 1.0, 20, 0.35, 0.5);
  gear([-2.0, 0.95, -11.4], 0.45, 11, 0.35, -1.1);
  tank([-2.9, 0.2, -13.4], 0.48, 1.5, -0.4);
  porthole([-2.1, 1.05, -14.9], 0.48, 0.3);
  pipe([-2.15, -0.5, -12.6], [-2.15, 3.3, -12.6], 0.16);
  porthole([-3.0, 2.7, -12.4], 0.45, 0.35);
  pipe([-1.95, 0.35, -17.5], [-1.95, 0.35, -5.5], 0.08);
  pipe([-2.35, -0.5, -8.0], [-2.35, 3.4, -8.0], 0.1);
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
    const x = (Math.random() * 2 - 1) * (inside ? 1.6 : 4.5);
    list.push(onPath(x, (inside ? 1.0 : 0.8) + Math.random() * 2.2, z, 0.06 + Math.random() * 0.2));
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
function buildCollectibles(gemGltf) {
  const face = new THREE.TextureLoader().load('ui/coin_face.png'); face.colorSpace = THREE.SRGBColorSpace;
  // Coins glow gold even when backlit in the portal, as in the approved screens.
  const goldFace = new THREE.MeshStandardMaterial({ map: face, color: 0xffffff, metalness: 0.6, roughness: 0.3, envMap: mats.env, emissive: 0x8a5a00, emissiveMap: face, emissiveIntensity: 1.25 });
  const coinRim = new THREE.MeshStandardMaterial({ color: 0xffc24a, metalness: 1, roughness: 0.25, envMap: mats.env, envMapIntensity: 1.3, emissive: 0x7a4a00, emissiveIntensity: 0.8 });
  const coinGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.08, 36);
  coinGeo.rotateX(Math.PI / 2);
  const coinMats = [coinRim, goldFace, goldFace];
  const addCoin = (p, compose) => {
    p = TR.map(p.x, p.y, p.z);   // straight layout -> 3D path
    const m = new THREE.Mesh(coinGeo, coinMats);
    m.position.copy(p); scene.add(m);
    coins.push({ obj: m, home: p.clone(), kind: 'coin', live: true, pop: -1, phase: Math.random() * 6, compose });
  };
  for (const p of L.coins3) addCoin(V3(p), true);
  for (const p of L.coins4) addCoin(V3(p), true);
  const z0 = L.tunnelStart, zAfter = L.screen4Z + 11;
  const onWater = (x, yAbove, z) => new THREE.Vector3(x, W.baseHeight(L, x, z) + yAbove, z);
  for (let i = 0; i < 6; i++) addCoin(onWater(W.laneX(1), 0.65, z0 + 2.5 + i * 1.6));
  for (let i = 0; i < 5; i++) addCoin(onWater(W.laneX(2), 0.65 + Math.sin((i / 4) * Math.PI) * 0.9, z0 + 4 + i * 1.5));
  for (let i = 0; i < 5; i++) addCoin(onWater(W.laneX(0), 0.65, zAfter + i * 1.3));

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
  const addGem = (p, compose) => {
    p = TR.map(p.x, p.y, p.z);
    const holder = new THREE.Group();
    const inner = gemSrc.clone();
    inner.scale.setScalar(gemScale);
    inner.position.copy(centre).multiplyScalar(-gemScale);
    holder.add(inner);
    holder.position.copy(p);
    scene.add(holder);
    gems.push({ obj: holder, home: p.clone(), kind: 'gem', live: true, pop: -1, phase: Math.random() * 6, spin: Math.random() * 6, compose });
  };
  addGem(V3(L.gem4), true);
  addGem(onWater(W.laneX(1), 1.7, L.tunnelEnd - 1.5));
  addGem(onWater(W.laneX(0), 1.35, z0 + 10.5));
  addGem(onWater(W.laneX(1), 0.7, z0 + 12));
  addGem(onWater(W.laneX(2), 0.7, zAfter + 1.5));
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
  const s = 0.62 / size.y, ts = L.tunnelStart;
  const spots = [[1, 0.8, ts + 7.5], [0, 0.95, ts + 11.8], [2, 1.0, ts + 15.6], [1, 0.85, ts + 21.0], [0, 0.9, ts + 26.4]];
  for (const [lane, above, u] of spots) {
    const x = W.laneX(lane);
    const holder = new THREE.Group(), turn = new THREE.Group(), inner = src.clone();
    inner.scale.setScalar(s); inner.position.copy(mid).multiplyScalar(-s);
    turn.add(inner); turn.rotation.y = Math.PI;      // the sock's face is on its +Z side: turn it to the camera
    holder.add(turn);
    TR.map(x, W.baseHeight(L, x, u) + above, u, holder.position);
    TR.quaternion(u, holder.quaternion);
    scene.add(holder);
    socks.push({ obj: holder, turn, home: holder.position.clone(), kind: 'sock', live: true, pop: -1, phase: Math.random() * 6 });
  }
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
  // Fur: the Meshy colour with soft round light (a blend of the fur's own normals and the body's
  // sphere), strand-by-strand light and shade, glowing pink fur tips around the silhouette, deeper
  // magenta toward the water and droplets twinkling in the fur (shaders.js furFragment).
  mats.fur = {
    uCentre: { value: new THREE.Vector3() }, uUp: { value: new THREE.Vector3(0, 1, 0) }, uRadius: { value: size.y * s * 0.5 },
    uKey: { value: new THREE.Vector3(0.35, 0.85, -0.42).normalize() }, uTime: { value: 0 },
    uSky: { value: new THREE.Color(1.0, 0.86, 1.0) }, uGround: { value: new THREE.Color(0.55, 0.42, 0.95) },
    uRim: { value: new THREE.Color(1.0, 0.5, 0.86) }, uTip: { value: new THREE.Color(1.0, 0.72, 0.94) },
  };
  model.traverse((o) => {
    if (!o.isMesh) return;
    o.material = new THREE.ShaderMaterial({ uniforms: { map: { value: o.material.map }, ...mats.fur },
      vertexShader: SH.furVertex, fragmentShader: SH.furFragment, side: THREE.DoubleSide });
  });
  const squash = new THREE.Group(); squash.add(model);
  const tilt = new THREE.Group(); tilt.add(squash);
  const root = new THREE.Group(); root.add(tilt);
  scene.add(root);
  mascot = {
    root, tilt, squash, height: size.y * s,
    lane: 1, x: 0, xv: 0, z: L.startZ, y: 0, speed: 0, air: false, vy: 0, yAbs: 0,
    pitch: 0, lean: 0, yaw: 0, flip: 0, spin: 0, spinV: 0, sq: 0, sqV: 0, look: 0, lookT: 2.5,
    lastSlope: 0, downhill: 0, wakeCarry: 0, foamCarry: 0, bobRipple: 0,
  };
}

function resetRun() {
  const m = mascot;
  Object.assign(m, { lane: 1, x: 0, xv: 0, z: L.startZ, speed: 0, air: false, vy: 0, pitch: 0, lean: 0, yaw: 0, flip: 0, spin: 0, spinV: 0, sq: 0, sqV: 0 });
  m.yAbs = W.surface(L, 0, L.startZ, state.time) + W.FLOAT_H;
  for (const c of [...coins, ...gems, ...socks]) { c.live = true; c.pop = -1; c.obj.visible = true; c.obj.scale.setScalar(1); c.obj.position.copy(c.home); }
  state.socks = 0; if (state.phase !== 'loading') refreshHud();
  if (side) side.n = 0;
  rig.snap = true;
}

function changeLane(dir) {
  if (state.phase !== 'running') return;
  const lane = Math.max(0, Math.min(2, mascot.lane + dir));
  if (lane === mascot.lane) { mascot.sqV += 2; return; }
  mascot.lane = lane;
  const m = mascot;
  // Side spray thrown the way the mascot is moving.
  fx.burstT(m.x, W.surface(L, m.x, m.z, state.time) + 0.05, m.z, 26, 1.1, { dir: W.laneX(lane) > m.x ? 1 : -1, vz: m.speed * 0.5 });
  addRipple(m.x, m.z, 1);
  state.lastGesture = { t: state.time, lane };
  sfx('swish');
}
function jump() {
  if (state.phase !== 'running' || mascot.air) return;
  mascot.air = true; mascot.vy = W.JUMP_V; mascot.flip = 0; mascot.sqV += 6;
  const m = mascot;
  fx.burstT(m.x, m.yAbs - W.FLOAT_H + 0.05, m.z, 30, 1.2, { vz: m.speed * 0.4 });
  addRipple(m.x, m.z, 1.2);
  sfx('splash');
}
function spin() { if (state.phase === 'running') { mascot.spinV = Math.PI * 2 / 0.5; mascot.spinLeft = Math.PI * 2; sfx('swish'); } }

function updateMascot(dt) {
  const m = mascot, t = state.time;
  const running = state.phase === 'running';
  const slope = W.slopeAt(L, m.x, m.z);                 // the slide's hills and swells (track space)
  const slopeAll = slope + Math.tan(TR.pitch(m.z));     // plus the climb or drop of the tube itself
  const targetSpeed = running ? W.CRUISE * (1 + THREE.MathUtils.clamp(-slopeAll * 1.6, -0.22, 0.4)) : 0;
  m.speed += (targetSpeed - m.speed) * Math.min(1, dt * (running ? 2.2 : 4));
  m.z += m.speed * dt;
  // Lane change: Unity's Mathf.SmoothDamp with the runner's 0.18 s lane-change time.
  {
    const omega = 2 / 0.18, k = omega * dt, ex = 1 / (1 + k + 0.48 * k * k + 0.235 * k * k * k);
    const target = W.laneX(m.lane), change = m.x - target, temp = (m.xv + omega * change) * dt;
    m.xv = (m.xv - omega * temp) * ex;
    m.x = target + (change + temp) * ex;
  }

  const surf = W.surface(L, m.x, m.z, t);
  const bob = Math.sin(t * 1.7 * Math.PI * 2) * 0.05;
  const rideY = surf + W.FLOAT_H + bob;
  if (m.air) {
    m.vy -= W.GRAVITY * dt; m.yAbs += m.vy * dt;
    m.flip = Math.min(Math.PI * 2, m.flip + dt * (Math.PI * 2) / 0.62);
    if (m.yAbs <= rideY && m.vy < 0) {
      m.air = false; m.flip = 0; m.sqV -= 9 + Math.min(8, -m.vy);
      fx.burstT(m.x, surf + 0.05, m.z, 55, 1.5, { vz: m.speed * 0.5 }); fx.burstT(m.x, surf + 0.05, m.z, 10, 0.8, { kind: 1, size: 0.26, grav: 0.15, up: 0.5 });
      addRipple(m.x, m.z, 1.6); sfx('splash');
    }
  } else {
    m.yAbs = rideY;
  }
  // Downhill drops: count how hard the ride is falling for spray, foam and speed.
  m.downhill += (THREE.MathUtils.clamp(-slopeAll * 4, 0, 1) - m.downhill) * Math.min(1, dt * 4);
  // Bottom of a drop: the water levels out under the mascot and throws a splash forward and sideways.
  const flatten = Math.max(0, slopeAll - m.lastSlope) / Math.max(dt, 1e-3);
  if (running && !m.air && flatten > 0.35 && m.lastSlope < -0.1) {
    m.splashCarry = (m.splashCarry || 0) + flatten * dt * 60;
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

  // Splashes that answer the motion: wake spray (more when fast or dropping downhill), bow foam,
  // side spray while changing lanes, gentle ripples while bobbing at the start.
  if (!m.air) {
    const speed01 = m.speed / W.CRUISE;
    m.wakeCarry += (running ? 14 + 40 * speed01 + 90 * m.downhill + Math.abs(m.xv) * 30 : 3) * dt;
    for (; m.wakeCarry >= 1; m.wakeCarry--) {
      const side = Math.random() < 0.5 ? -1 : 1;
      fx.emitT(m.x + side * (0.25 + Math.random() * 0.25), surf + 0.04, m.z - 0.15 - Math.random() * 0.3,
        side * (0.5 + Math.random() * 1.2) - m.xv * 0.4, 1.0 + Math.random() * (1.6 + 2.2 * m.downhill), m.speed * (0.35 + Math.random() * 0.3),
        0.04 + Math.random() * 0.07, 0.45 + Math.random() * 0.4, 0);
    }
    m.foamCarry += (running ? 3 + 6 * speed01 + 10 * m.downhill : 1.2) * dt;
    for (; m.foamCarry >= 1; m.foamCarry--) {
      const side = Math.random() < 0.5 ? -1 : 1;
      fx.emitT(m.x + side * (0.32 + Math.random() * 0.25), surf + 0.05, m.z - 0.35 - Math.random() * 0.6,
        side * 0.45, 0.2, m.speed * 0.75, 0.1 + Math.random() * 0.12, 0.45 + Math.random() * 0.3, 1, 0.1);
    }
    m.bobRipple -= dt;
    if (m.bobRipple < 0) { addRipple(m.x, m.z, running ? 0.35 : 0.6); m.bobRipple = running ? 0.45 : 1.2; }
  }
  waterU.uPlayer.value.set(m.x, surf, m.z);
  waterU.uPlayerMove.value.set(m.xv, m.speed / W.CRUISE, m.downhill);
  m.lastSlope = slopeAll;
  mats.fur.uTime.value = t;
  mats.fur.uCentre.value.copy(m.root.position);
  TR.frame(m.z, F); mats.fur.uUp.value.copy(F.U);

  document.body.classList.toggle('inDrum', running && m.z > L.tunnelStart - 0.5);
  if (side) sideTrail();
  if (running && m.z > L.tunnelEnd - 2.0) loopRun();   // flash back to the slide just before the drum ends
}

function loopRun() {
  // Screens 5 onward are not built yet: the run loops back to the slide, as in the Unity project.
  state.laps++;
  const flash = $('flash'); flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go');
  resetRun();
  state.phase = 'running';
}

// ------------------------------------------------------------------ camera rig
const S3 = { off: new THREE.Vector3(0, 1.11, -4.01), look: new THREE.Vector3(0, 0.45, 5.97), fov: 55 };
const S4 = { off: new THREE.Vector3(0, 1.03, -3.58), look: new THREE.Vector3(0, 0.89, 6.42), fov: 60 };
rig = { snap: true, x: 0, y: 0, tilt: 0, shake: 0 };
function updateCamera(dt) {
  const m = mascot;
  const k = THREE.MathUtils.smoothstep(m.z, -4, L.tunnelStart + 3);
  const off = S3.off.clone().lerp(S4.off, k), lk = S3.look.clone().lerp(S4.look, k);
  const fovV = THREE.MathUtils.lerp(S3.fov, S4.fov, k);
  // Follow: 55 % of lane moves, the ride height fully (smoothed), 35 % of jumps and bobbing.
  const rideY = W.baseHeight(L, m.x, m.z) + W.FLOAT_H;
  const targetX = m.x * 0.55, targetY = rideY + (m.yAbs - rideY) * 0.35;
  // Tilt with the path: look along the average slope of the next few metres (only once running,
  // so the Tap-to-Start view is exactly the approved framing).
  let ahead = 0; for (let d = 1; d <= 6; d++) ahead += W.slopeAt(L, m.x, m.z + d * 1.2); ahead /= 6;
  const tiltTarget = state.phase === 'running' ? ahead : 0;
  if (rig.snap) { rig.x = targetX; rig.y = targetY; rig.tilt = tiltTarget; rig.snap = false; }
  const a = 1 - Math.exp(-dt / 0.14);
  rig.x += (targetX - rig.x) * a; rig.y += (targetY - rig.y) * (1 - Math.exp(-dt / 0.12)); rig.tilt += (tiltTarget - rig.tilt) * (1 - Math.exp(-dt / 0.35));
  // Camera and aim point in track coordinates, each placed through the path frame at its own distance
  // along the run: the camera rides the tube's climbs, drops and banked turns behind the mascot.
  let cx = rig.x + off.x, ch = rig.y + off.y + rig.tilt * off.z * 0.6;   // ride behind and below on climbs, above on drops
  const cu = m.z + off.z;
  // Stay inside the castle portal and the drum.
  if (cu > -0.25 && cu < L.tunnelEnd) {
    const dx = cx, dy = ch - (W.WATER + W.AXIS_H), r = Math.hypot(dx, dy), max = L.clearRadius - 0.4;
    if (r > max) { cx = (dx / r) * max; ch = W.WATER + W.AXIS_H + (dy / r) * max; }
  }
  const pos = TR.map(cx, ch, cu);
  const target = TR.map(rig.x + lk.x, rig.y + lk.y + rig.tilt * lk.z, m.z + lk.z);
  // Bank gently with the water (three quarters of its tilt).
  TR.frame(cu, F);
  camera.up.set(0, 1, 0).lerp(F.U, 0.75).normalize();
  camera.position.copy(pos);
  camera.lookAt(target);
  // Keep the approved horizontal coverage on narrow phones (FOV fitted at a 1:2 portrait screen).
  const aspect = camera.aspect;
  camera.fov = aspect >= 0.5 ? fovV : THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(fovV) / 2) * 0.5 / aspect));
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
    c.obj.rotation.y += dt * THREE.MathUtils.degToRad(120);
    if (state.phase === 'running' && near(c)) collect(c);
  }
  for (const g of gems) {
    if (!g.live && g.pop < 0) continue;
    if (g.pop >= 0) { popTowardMascot(g, dt); continue; }
    g.spin += dt * THREE.MathUtils.degToRad(70);
    g.obj.position.y = g.home.y + Math.sin(t * 0.75 * 6.283 + g.phase) * 0.1;
    g.obj.rotation.set(Math.sin(t * 0.9 + g.phase) * 0.16, g.spin, Math.sin(t * 0.7 + g.phase * 1.3) * 0.12);
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
    if (state.phase === 'running' && near(k)) collect(k);
  }
  const glowNear = gems.reduce((best, g) => g.live ? Math.max(best, 1 - Math.min(1, g.obj.position.distanceTo(mp) / 6)) : best, 0);
  for (const m of mats.gemMaterials || []) m.emissiveIntensity = 0.35 + 0.6 * glowNear;
}
function popTowardMascot(c, dt) {
  c.pop += dt;
  const k = Math.min(1, c.pop / 0.35);
  c.obj.position.lerp(mascot.root.position.clone().add(new THREE.Vector3(0, 0.6, 0)), k);
  c.obj.scale.setScalar((1 + 0.6 * Math.sin(k * Math.PI)) * (1 - k) + 1e-3);
  if (k >= 1) { c.pop = -1; c.obj.visible = false; }
}
function collect(c) {
  c.live = false; c.pop = 0;
  if (c.kind === 'coin') { state.coins++; state.collected.coins++; fx.sparkle(c.obj.position, 10); sfx('coin'); }
  else if (c.kind === 'sock') { state.socks++; state.collected.socks = (state.collected.socks || 0) + 1; fx.sparkle(c.obj.position, 26); sfx('gem'); popHud('sockPanel'); }
  else { state.gems++; state.collected.gems++; fx.sparkle(c.obj.position, 30); sfx('gem'); popHud('gemPill'); }
  refreshHud();
}

// ------------------------------------------------------------------ HUD
function refreshHud() {
  $('coins').textContent = state.coins.toLocaleString('en-US');
  $('gems').textContent = String(state.gems);
  $('sockCount').textContent = `${Math.min(5, state.socks)}/5`;
  $('sockBar').style.width = `${Math.min(5, state.socks) * 20}%`;
}
function popHud(id) { const el = $(id); el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
function startRun() {
  if (state.phase !== 'intro') return;
  state.phase = 'running';
  document.body.classList.add('running');
  unlockAudio();
  setTimeout(() => $('hint').classList.add('show'), 300);
  setTimeout(() => $('hint').classList.remove('show'), 3800);
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
stage.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) return; touch = { x: e.clientX, y: e.clientY, t: performance.now(), used: false }; stage.setPointerCapture?.(e.pointerId); noteTouch(e, true); });
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
    touch.used = true; if (state.phase === 'intro') startRun(); jump(); noteGesture('Swipe ↑  ·  jump');
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
  if (state.phase === 'intro' && [' ', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'a', 'd', 'w'].includes(k)) { startRun(); if (k === ' ' || k === 'Enter') { e.preventDefault(); return; } }
  if (k === 'ArrowLeft' || k === 'a') changeLane(-1);
  else if (k === 'ArrowRight' || k === 'd') changeLane(1);
  else if (k === 'ArrowUp' || k === 'w') jump();
  else if (k === ' ') { e.preventDefault(); spin(); }
});
$('soundBtn').addEventListener('click', () => {
  state.sound = !state.sound;
  $('soundBtn').setAttribute('aria-pressed', String(!state.sound));
  $('soundBtn').title = state.sound ? 'Sound on' : 'Sound off';
  if (master) master.gain.value = state.sound ? 0.5 : 0;
});

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
  for (const o of [mats.castle, water, mats.machinery, mats.falls, mats.bubbles, ...(mats.drumMeshes || []), ...rollers.map((r) => r.g)]) if (o) o.visible = false;
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
  stage.style.setProperty('--u', Math.min(h / 537, w / 269).toFixed(4) + 'px');   // approved board pixels
}
new ResizeObserver(resize).observe(stage);

function step(dt) {
  state.time += dt;
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
  for (const g of mats.gears) g.obj.rotation.z += g.speed * dt;
  for (const ring of mats.rings) ring.material.color.copy(ring.userData.base).multiplyScalar(0.8 + 0.25 * Math.sin(state.time * 2.4 + ring.userData.pulse));
  fx.update(dt);
  updateCamera(dt);
}

let fpsAvg = 60, lowFor = 0;
function render() {
  if (side) {
    side.frame = sideFrame();
    if (fx) fx.u.uScale.value = (stage.clientHeight * pixelRatio) / side.frame.height;   // ortho: pixels per metre
    renderer.render(scene, side.cam);
  } else {
    if (fx) fx.u.uScale.value = (stage.clientHeight * pixelRatio * 0.5) / Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
    composer.render();
  }
  if (side || SHOW_TOUCHES) drawOverlay();
}
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  if (state.phase === 'loading' || TEST) return;
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
    TR = makeTrack(L);
    buildSky();
    const [castle, drum, mascotG, roller, gem, sock] = await Promise.all(['castle', 'drum', 'mascot', 'roller', 'gem', 'sock'].map(loadGltf));
    fx = new Particles(1400);
    bake(castle.scene, { saturation: 1.2, brightness: 1.04, glow: 0.35 });
    mats.castle = place(castle.scene, L.castle);
    buildDrum(drum);
    buildWater();
    buildRails();
    buildWaterfalls();
    buildDrumLights();
    buildRollers(roller);
    buildMachinery();
    buildBubbles();
    buildCollectibles(gem);
    buildSocks(sock);
    buildMascot(mascotG);
    if (SIDE) buildSideView();
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
    particles: fx ? fx.life.reduce((n, l) => n + (l > 0 ? 1 : 0), 0) : 0, repairedNormals: state.repairedNormals,
  }),
  tap: () => { if (state.phase === 'intro') startRun(); else spin(); },
  swipe: (dir) => { if (state.phase === 'intro') startRun(); if (dir === 'left') changeLane(-1); else if (dir === 'right') changeLane(1); else if (dir === 'up') jump(); },
  advance: (seconds, fps = 30) => { const n = Math.max(1, Math.round(seconds * fps)); for (let i = 0; i < n; i++) step(1 / fps); render(); return window.__bw.state(); },
  render,
  lookBack: (v) => { mascot.look = v; mascot.lookT = -0.5; },
  setBloom: (on) => { bloom.enabled = !!on; },
  debug: () => ({ scene, water, mascot: mascot.root, particles: fx.points }),
};
