// ?s3=round4 (test only): a reconstruction of the approved Screen 4's scenery in the real 3D game, on top of round3.
// The approved picture is the specification; nothing of it is shown in the game. Everything here is geometry, animated
// shaders and particles, drawn only inside the drum (Tap to Start is round3's).
//
//   - tunnel:  a new lining along the ride's path: deep electric blue, with glowing cyan rings and gold trim rings built as
//              real 3D tori (they have thickness and parallax), white water swirling over the walls, sparkles. The Meshy
//              drum's pastel walls and round2's flat light rings are hidden behind it. The path starts with a longer
//              straight (track.js, opts.straight), so the view looks straight down the rings as in the approved picture.
//   - water:   flowing turquoise with rolling crests and streaks of white froth, instead of the cell pattern that read as
//              a tiled floor (tunnel_s4.js, waterR4); a crown of curving water sheets splashing round the pink character.
//   - brushes: big round pom-poms of fluffy tufts (tunnel_s4.js, r4PomPom) instead of the wheel look.
//   - colour:  a richer, higher-contrast grade inside the drum (less pastel).
// Lanes, controls, brushes' knocks, collectibles and the mission are round2/round3's.
import * as THREE from 'three';
import { NOISE } from './shaders.js';

export const ROUND4 = {
  straight: 4,   // metres of extra straight drum before the climb and turns (track.js)
  lining: { radius: 2.0, from: -56, to: 236, rowStep: 0.25, around: 96,
    deep: [0.004, 0.018, 0.16], mid: [0.015, 0.09, 0.5], cyan: [0.06, 0.55, 0.9], spacing: 1.15, streaks: 0.4, line: 0.7, far: 0.25 },
  rings: { radius: 1.93, tube: 0.045, glow: [0.25, 0.9, 1.25], every: 1.15 },
  gold: { radius: 1.97, tube: 0.085, every: 3, color: [1.0, 0.72, 0.28] },
  grade: { contrast: 1.16, saturation: 1.18, exposure: 0.94 },
  // pom-pom brushes (wheel units, rim 0.95): clumps over a flattened dome facing the rider (cap: its angle from the middle,
  // depth: how far it bulges), a rim of bigger clumps; colour bands from the middle outward ([up to share of cap, colours])
  pompom: { count: 230, rim: 40, radius: 0.92, depth: 0.55, cap: 78, size: 0.13, long: 1.15, glow: 0.3, sheen: 0.3,
    right: [[0.38, [[0.1, 0.2, 0.85], [0.14, 0.26, 0.95]]], [0.55, [[0.16, 0.3, 1.0], [1.0, 0.92, 0.98]]], [0.8, [[1.0, 0.94, 0.98], [1.0, 0.55, 0.82]]], [9, [[1.0, 0.95, 0.98], [1.0, 0.45, 0.78], [1.0, 0.95, 0.98]]]],
    left: [[0.35, [[1.0, 0.4, 0.76], [1.0, 0.3, 0.7]]], [0.6, [[1.0, 0.93, 0.97], [1.0, 0.8, 0.92]]], [9, [[1.0, 0.36, 0.74], [1.0, 0.5, 0.82], [1.0, 0.9, 0.96]]]] },
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.round4;
  const merge = (dst, src) => { for (const k of Object.keys(src)) { if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k]) && dst[k]) merge(dst[k], src[k]); else dst[k] = src[k]; } };
  if (tune) merge(ROUND4, tune);
}

export function buildRound4({ scene, TR, L, W, updaters, time, env, hide = [] }) {
  const TS = L.tunnelStart, TE = L.tunnelEnd, axisH = W.WATER + W.AXIS_H;
  for (const o of hide) if (o) o.visible = false;   // the Meshy drum's walls and round2's flat rings, behind the new lining
  const report = { hidden: hide.filter(Boolean).length };
  report.lining = lining({ scene, TR, TS, TE, axisH, time });
  report.rings = rings3d({ scene, TR, TS, TE, axisH, env, time });
  return report;
}

// ---------------------------------------------------------------- the lining: a tube along the path, open under the water
function lining({ scene, TR, TS, TE, axisH, time }) {
  const P = ROUND4.lining;
  const u0 = TS - 0.4, u1 = TE + 4, rows = Math.ceil((u1 - u0) / P.rowStep) + 1, cols = P.around + 1;
  const pos = new Float32Array(rows * cols * 3), au = new Float32Array(rows * cols * 2), idx = [];
  const v = new THREE.Vector3();
  for (let j = 0; j < rows; j++) {
    const u = u0 + j * P.rowStep;
    for (let i = 0; i < cols; i++) {
      const a = THREE.MathUtils.degToRad(P.from + (P.to - P.from) * i / P.around);
      TR.map(Math.cos(a) * P.radius, axisH + Math.sin(a) * P.radius, u, v);
      pos.set([v.x, v.y, v.z], (j * cols + i) * 3); au.set([a, u], (j * cols + i) * 2);
      if (i < P.around && j < rows - 1) { const q = j * cols + i; idx.push(q, q + cols, q + 1, q + 1, q + cols, q + cols + 1); }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aAU', new THREE.BufferAttribute(au, 2)); g.setIndex(idx);
  g.computeBoundingSphere();
  const u = { uTime: time, uDeep: { value: new THREE.Color(...P.deep) }, uMid: { value: new THREE.Color(...P.mid) }, uCyan: { value: new THREE.Color(...P.cyan) },
    uSpacing: { value: P.spacing }, uStreaks: { value: P.streaks }, uStart: { value: TS }, uLine: { value: P.line }, uFar: { value: P.far } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: LINING_VERTEX, fragmentShader: LINING_FRAGMENT, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'r4Lining'; mesh.frustumCulled = false;
  scene.add(mesh);
  return { triangles: idx.length / 3, rows, cols };
}
const LINING_VERTEX = /* glsl */ `
attribute vec2 aAU; varying vec2 vAU; varying float vDepth;
void main() { vAU = aAU; vec4 mv = modelViewMatrix * vec4(position, 1.0); vDepth = -mv.z; gl_Position = projectionMatrix * mv; }
`;
// deep electric blue, brighter toward each ring; a bright cyan-white line at every ring with a soft glow; faint panel
// seams; white water swirling over the walls; twinkling sparkles; the far tube a little brighter (the luminous depth)
const LINING_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uSpacing, uStreaks, uStart, uLine, uFar; uniform vec3 uDeep, uMid, uCyan;
varying vec2 vAU; varying float vDepth;
void main() {
  float a = vAU.x, u = vAU.y;
  float k = fract((u - uStart) / uSpacing), d = min(k, 1.0 - k) * uSpacing;
  float line = exp(-pow(d / 0.045, 2.0)), glow = exp(-pow(d / 0.32, 2.0));
  float side = abs(cos(a));
  vec3 col = mix(uDeep, uMid, clamp(0.25 + 0.55 * glow + 0.15 * side, 0.0, 1.0));
  col += uCyan * glow * 0.55 + vec3(0.7, 0.95, 1.0) * line * uLine;
  float seam = exp(-pow((fract(a * 12.0 / 6.2832) - 0.5) / 0.015, 2.0)) * (1.0 - glow);
  col = mix(col, uCyan * 0.5, seam * 0.25);
  float sw = bwFbm(vec2(a * 2.2 + u * 0.45 - uTime * 0.9, u * 0.6 - uTime * 0.35));
  float sw2 = bwFbm(vec2(a * 5.0 - u * 0.3 + uTime * 0.6, u * 1.4));
  col += vec3(0.55, 0.85, 1.0) * (smoothstep(0.6, 0.78, sw) * 0.5 + smoothstep(0.68, 0.82, sw2) * 0.25) * uStreaks;
  vec2 g = vec2(a * 26.0, u * 3.5 - uTime * 0.5), c = floor(g);
  float hs = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453);
  col += vec3(1.0) * step(0.94, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.6 + 0.4 * sin(uTime * 5.0 + hs * 40.0)) * 0.9;
  col *= 1.0 + uFar * smoothstep(9.0, 24.0, vDepth);
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- 3D rings: glowing cyan tubes and gold trims
function rings3d({ scene, TR, TS, TE, axisH, env, time }) {
  const R = ROUND4.rings, G = ROUND4.gold, P = ROUND4.lining;
  const us = []; for (let u = TS + 0.4; u < TE + 3.5; u += R.every) us.push(u);
  const m4 = new THREE.Matrix4(), place = (u, out) => TR.mapMatrix(new THREE.Matrix4().makeTranslation(0, axisH, u), out);
  // glowing tubes: brightest on the side facing the rider, softly pulsing in a wave down the tunnel
  const glowGeo = new THREE.TorusGeometry(R.radius, R.tube, 8, 128);
  const gu = { uTime: time, uGlow: { value: new THREE.Color(...R.glow) } };
  const glowMat = new THREE.ShaderMaterial({ uniforms: gu, vertexShader: TUBE_VERTEX, fragmentShader: TUBE_FRAGMENT });
  const glowRings = new THREE.InstancedMesh(glowGeo, glowMat, us.length);
  const aU = new Float32Array(us.length);
  us.forEach((u, i) => { place(u, m4); glowRings.setMatrixAt(i, m4); aU[i] = u; });
  glowGeo.setAttribute('aU', new THREE.InstancedBufferAttribute(aU, 1));
  glowRings.name = 'r4GlowRings'; glowRings.frustumCulled = false;
  scene.add(glowRings);
  // gold trims, every few rings, just in front of the wall
  const goldUs = us.filter((_, i) => i % G.every === 1).map((u) => u + 0.3);
  const goldGeo = new THREE.TorusGeometry(G.radius, G.tube, 10, 128);
  const goldMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(...G.color), metalness: 1, roughness: 0.22, envMap: env || null, envMapIntensity: 1.4,
    emissive: new THREE.Color(0.55, 0.32, 0.05), emissiveIntensity: 0.6 });
  const gold = new THREE.InstancedMesh(goldGeo, goldMat, goldUs.length);
  goldUs.forEach((u, i) => { place(u, m4); gold.setMatrixAt(i, m4); });
  gold.name = 'r4GoldRings'; gold.frustumCulled = false;
  scene.add(gold);
  return { glow: us.length, gold: goldUs.length, trianglesEach: [glowGeo.index.count / 3, goldGeo.index.count / 3] };
}
const TUBE_VERTEX = /* glsl */ `
attribute float aU; uniform float uTime; varying float vWave; varying vec3 vN; varying vec3 vW;
void main() {
  vWave = 0.75 + 0.25 * sin(aU * 0.9 - uTime * 3.0);
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const TUBE_FRAGMENT = /* glsl */ `
uniform vec3 uGlow; varying float vWave; varying vec3 vN; varying vec3 vW;
void main() {
  float face = clamp(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0, 1.0);
  vec3 col = mix(uGlow * 0.6, uGlow * 1.5 + vec3(0.2), pow(face, 3.0) * 0.6) * vWave;
  gl_FragColor = vec4(col, 1.0);
}
`;
