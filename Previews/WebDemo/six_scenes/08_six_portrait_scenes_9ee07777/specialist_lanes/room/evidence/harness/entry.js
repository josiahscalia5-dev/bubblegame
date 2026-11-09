// room-only preview: the opening's renderer, lights and env (opening3d.js L481-495) + buildRoom2 + proxies for the washer / basket / girl
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { buildRoom2, applyRoomLight } from '/home/user/bubblegame_lanes/room/WebDemo/src/opening_six2_room.js';
const W = 432, H = 768;
const canvas = document.createElement('canvas'); document.body.appendChild(canvas);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true }); renderer.setSize(W, H, false); renderer.setPixelRatio(1);
renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = 1.18;
const scene = new THREE.Scene(); scene.background = new THREE.Color(0xb59af0);
const camera = new THREE.PerspectiveCamera(52.8, W / H, 0.02, 60);
scene.add(new THREE.HemisphereLight(0xf4e6ff, 0xff9fdc, 2.1));
const rim = new THREE.DirectionalLight(0xff9fe0, 1.4); rim.position.set(3, 2, -1); scene.add(rim);
const key0 = new THREE.DirectionalLight(0xfff0dc, 2.4); key0.position.set(-2.5, 3, 2.5); scene.add(key0);
const glowL = new THREE.PointLight(0x6fd8ff, 2.5, 3.0, 1.5); glowL.position.set(0.3, 0.62, 0.67); scene.add(glowL);
const pmrem = new THREE.PMREMGenerator(renderer);
const envScene = new THREE.Scene(); envScene.background = new THREE.Color(0x8f7fd0);
for (const [p, c, s] of [[[0, 4, 1], [3, 3, 3.2], [6, 3]], [[-4, 1, 2], [2.4, 1.6, 2.6], [3, 5]], [[4, 1, 2], [1.4, 2.4, 3.0], [3, 5]], [[0, 1, -5], [2, 1.9, 2.4], [6, 3]]]) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(...s), new THREE.MeshBasicMaterial({ color: new THREE.Color(...c), side: THREE.DoubleSide })); m.position.set(...p); m.lookAt(0, 0, 0); envScene.add(m);
}
const env = pmrem.fromScene(envScene, 0.04).texture;
applyRoomLight(scene);
const R2 = buildRoom2(env); scene.add(R2.g);
// proxies (rough screen silhouettes of the game's washer, basket, girl) so occlusion can be judged
const prox = new THREE.Group(); scene.add(prox);
const pinkM = new THREE.MeshStandardMaterial({ color: 0xf27ab8, metalness: 0.3, roughness: 0.3, envMap: env, emissive: 0x6a1050, emissiveIntensity: 0.32 });
const wb = new THREE.Mesh(new RoundedBoxGeometry(0.95, 1.0, 0.7, 3, 0.08), pinkM); wb.position.set(0.55, 0.5, -0.05); prox.add(wb);
const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.18, 20), new THREE.MeshStandardMaterial({ color: 0x3aa0ff })); bottle.position.set(0.4, 1.09, 0.0); prox.add(bottle);
const bas = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.3, 0.33, 30), new THREE.MeshStandardMaterial({ color: 0x9a3ef0 })); bas.position.set(-0.055, 0.165, 1.47); prox.add(bas);
const girl = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 16), new THREE.MeshStandardMaterial({ color: 0x6a3a20 })); girl.position.set(-0.4, 0.95, 1.1); girl.scale.set(0.9, 1.5, 0.9); prox.add(girl);
R2.rug.position.set(-0.005, 0.004, 1.45); R2.shadows.basket.position.set(-0.055, 0.008, 1.49); R2.shadows.girl.position.set(-0.4, 0.007, 1.0);
const CAMS = [[[0.436, 0.45, 3.508], [-0.296, 0.581, 0.661], 52.8], [[0.78, 0.507, 3.358], [-0.198, 0.627, 0.619], 43.8], [[0.3, 0.73, 3.29], [0.3, 0.72, 0.27], 36], [[0.18, 0.8, 1.55], [0.32, 0.6, -0.2], 50]];
window.__render = (i, proxies = true) => { const [p, t, f] = CAMS[i]; camera.position.set(...p); camera.lookAt(...t); camera.fov = f; camera.updateProjectionMatrix(); prox.visible = proxies; renderer.render(scene, camera); return canvas.toDataURL('image/png'); };
window.__ready = true;
