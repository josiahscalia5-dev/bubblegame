
import * as THREE from 'three';
import { createBubbleWashRollerBrushModel as make } from './factory.ts';
const W = 600, H = 600;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(W, H); renderer.setPixelRatio(1); document.body.appendChild(renderer.domElement);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene(); scene.background = new THREE.Color('#2a5ad8');
scene.add(new THREE.HemisphereLight(0x9fd8ff, 0x2a3cc0, 0.9));
const key = new THREE.DirectionalLight(0xfff4fa, 2.2); key.position.set(0.35, 0.85, 0.42); scene.add(key);
const rim = new THREE.DirectionalLight(0xffd6f0, 1.2); rim.position.set(-0.5, 0.2, -0.8); scene.add(rim);
const model = make({});
scene.add(model);
const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3()), centre = box.getCenter(new THREE.Vector3());
const cam = new THREE.PerspectiveCamera(35, W / H, 0.01, 100);
const dist = Math.max(size.x, size.y, size.z) / (2 * Math.tan(THREE.MathUtils.degToRad(35 / 2))) * 1.25;
let tris = 0, draws = 0; model.traverse((o) => { if (o.isMesh) { draws++; const n = o.geometry.index ? o.geometry.index.count / 3 : o.geometry.attributes.position.count / 3; tris += n * (o.isInstancedMesh ? o.count : 1); } });
window.__stats = { triangles: Math.round(tris), drawCalls: draws, size: size.toArray().map((v) => +v.toFixed(3)), centre: centre.toArray().map((v) => +v.toFixed(3)) };
// the brush's face looks along +Z (the spec turns the hub's axis onto Z)
window.__view = (az) => { const a = THREE.MathUtils.degToRad(az); cam.position.set(centre.x + Math.sin(a) * dist, centre.y, centre.z + Math.cos(a) * dist); cam.lookAt(centre); renderer.render(scene, cam); };
window.__flat = () => { model.traverse((o) => { if (o.isMesh) { const c = o.material && o.material.color ? o.material.color.clone() : new THREE.Color(0x888888); o.material = new THREE.MeshBasicMaterial({ color: c }); } }); };
window.__ready = true;
