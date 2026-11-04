// ?s3=round6 (test only): round5 plus the architecture of the approved Screen 4's washing machine, rebuilt as real geometry.
// Round 5 and everything older are unchanged; nothing here runs without the switch.
//
//   - entrance: the drum's mouth is a washing-machine porthole: a large lavender drum face (brushed metal, a soft lavender
//               sheen up and to the left, cyan light bouncing back from the tunnel round the opening), a THICK rounded gold
//               bezel (a lathe profile about half a metre across, not a thin torus), a bronze step ring inside it, a glossy
//               royal-blue door seal, and gold rivets round the face. Round 5's thin torus rims are hidden.
//   - tunnel:   the thin neon rings are replaced by layered flanges: thick stepped rings standing out of the wall (royal-blue
//               face, a glowing cyan lip on the inner edge, darker underside), some with a gold lip, so the tube reads as
//               a structured drum with physical depth rather than a striped pipe.
//   - settings: ROUND6.round5 overrides round5's own settings (camera, water, vortex) when round6 is on. They are applied in
//               tunnel_r5.js before its shaders are written, so ?s3=round5 itself stays exactly as it was.
import * as THREE from 'three';
import { NOISE } from './shaders.js';

// The switch is read here (not from screen3_models.js) so tunnel_r5.js can use it without an import cycle.
const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const R6_ON = LIST.includes('round6');

export const ROUND6 = {
  // where the camera has finished blending from the Tap to Start framing into the drum framing (metres from the drum's
  // mouth; round5 and older: 3 m inside it, so the entry was seen through a half-blended camera)
  camBlendEnd: -2,
  // the porthole at the drum's mouth (metres; z is along the path, negative toward the rider, from the drum's start)
  porthole: {
    bezel: { inner: 1.98, outer: 2.5, front: -0.34, back: 0.16, round: 0.55 },   // the thick gold bezel's cross-section
    step: { inner: 1.9, outer: 2.04, z: 0.22, depth: 0.14 },                       // a bronze step ring just inside it
    seal: { radius: 1.99, tube: 0.075, z: 0.36 },                                   // the royal-blue rubber door seal
    face: { inner: 2.42, outer: 9.0, z: -0.2, dish: 0.35 },                          // the lavender drum face
    rivets: { count: 20, radius: 2.82, size: 0.07 },
    lavender: [0.68, 0.6, 0.98], lilac: [0.88, 0.8, 1.0], shade: [0.34, 0.26, 0.62],
  },
  // layered flanges standing out of the tunnel wall (replace round4's thin glow rings)
  flanges: { every: 2.3, from: 1.0, wall: 2.03, lip: 1.8, depth: 0.16, goldEvery: 3, arc: [-56, 236],
    face: [0.03, 0.1, 0.62], deep: [0.01, 0.03, 0.26], cyan: [0.45, 1.0, 1.25], gold: [1.0, 0.74, 0.32] },
  // round5's own settings, overridden for round6 (merged in tunnel_r5.js before its shaders are written)
  round5: {
    // the camera: level with the tube's axis and aimed straight down it, so the bright centre sits just below the middle of
    // the screen (approved 52%); a little closer and lower so the character is about half the frame wide at the bottom
    // Worked out from the approved picture: the character is about 0.87 of the gold rim's radius wide on screen, so the rim
    // is about 2.4 times further away than the character; a 72 degree lens then gives both their approved sizes. Then swept
    // in real captures (aim 0.6 to 2.7, height 0.45 to 0.9, distance 2.0 to 2.7): low and aimed high puts, at the hero moment
    // 3.1 s, the gold rim's arc at about 19% of the height with the lavender face in the top corners, the tunnel's centre at
    // about 48% (approved 52%) and the character at about 77% (approved 80%), about 40% of the screen wide.
    camera: { off: [0, 0.45, -2.7], lookY: 2.2, fov: 72 },
    // the water vortex on the walls: round5's evenly spaced glowing crest lines read as a striped pipe and hid the flanges;
    // fewer, softer bands with more swirl, deeper troughs, more white water, so the flanges carry the structure
    vortex: { bands: 1.0, twist: 0.12, warp: 0.6, crestLine: 0.45, lip: 0.2, ribs: 0.3, foam: 0.55, streaks: 0.35, deep: [0.0, 0.03, 0.32] },
  },
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.round6;
  if (tune) mergeDeep(ROUND6, tune);
}
export function mergeDeep(dst, src) { for (const k of Object.keys(src)) { if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k]) && dst[k]) mergeDeep(dst[k], src[k]); else dst[k] = src[k]; } return dst; }

export function buildRound6({ scene, TR, L, W, mascot, updaters, time, env }) {
  const TS = L.tunnelStart, TE = L.tunnelEnd, axisH = W.WATER + W.AXIS_H, report = {};
  for (const n of ['r5Entrance', 'r4GlowRings']) { const o = scene.getObjectByName(n); if (o) o.visible = false; }
  report.porthole = porthole({ scene, TR, TS, axisH, env, time });
  report.flanges = flanges({ scene, TR, TS, TE, axisH, env, time });
  return report;
}

// ---------------------------------------------------------------- geometry helpers
// A ring swept from a closed or open (r, z) profile round the local Z axis, between two angles (degrees; 0 = +X, 90 = up).
function sweep(profile, arc = [0, 360], seg = 160) {
  const a0 = THREE.MathUtils.degToRad(arc[0]), a1 = THREE.MathUtils.degToRad(arc[1]), n = profile.length;
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= seg; i++) {
    const a = a0 + (a1 - a0) * i / seg, c = Math.cos(a), s = Math.sin(a);
    for (let j = 0; j < n; j++) { const [r, z] = profile[j]; pos.push(c * r, s * r, z); uv.push(i / seg, j / (n - 1)); }
  }
  for (let i = 0; i < seg; i++) for (let j = 0; j < n - 1; j++) {
    const q = i * n + j; idx.push(q, q + 1, q + n, q + 1, q + n + 1, q + n);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals(); return g;
}
// a rounded-rectangle cross-section (superellipse), as an (r, z) loop; round: 0 a box, 1 an ellipse
function roundedSection(r0, r1, z0, z1, round, n = 40) {
  const rc = (r0 + r1) / 2, zc = (z0 + z1) / 2, hr = (r1 - r0) / 2, hz = (z1 - z0) / 2, e = Math.max(0.1, round), out = [];
  for (let i = 0; i <= n; i++) {
    const t = Math.PI * 2 * i / n, c = Math.cos(t), s = Math.sin(t);
    out.push([rc + hr * Math.sign(c) * Math.pow(Math.abs(c), e), zc + hz * Math.sign(s) * Math.pow(Math.abs(s), e)]);
  }
  return out;
}
function frameAt(TR, u, axisH) {
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  TR.frame(u, F);
  const m = new THREE.Matrix4().makeBasis(F.R, F.U, F.T); m.setPosition(F.P.clone().addScaledVector(F.U, axisH)); return m;
}

// ---------------------------------------------------------------- the porthole at the drum's mouth
function porthole({ scene, TR, TS, axisH, env, time }) {
  const P = ROUND6.porthole, g = new THREE.Group(); g.name = 'r6Porthole';
  // thick gold bezel: champagne gold, mirror-like, warm self-light so it glows in the drum's blue light
  const B = P.bezel;
  const gold = new THREE.MeshStandardMaterial({ color: 0xffcf6e, metalness: 1.0, roughness: 0.2, envMap: env || null, envMapIntensity: 1.6,
    emissive: 0x8a5212, emissiveIntensity: 0.75 });
  const bezel = new THREE.Mesh(sweep(roundedSection(B.inner, B.outer, B.front, B.back, B.round), [0, 360], 192), gold);
  bezel.name = 'r6Bezel';
  // bronze step ring inside the bezel and the royal-blue rubber seal behind it
  const S = P.step;
  const bronze = new THREE.MeshStandardMaterial({ color: 0xd8904a, metalness: 1.0, roughness: 0.3, envMap: env || null, envMapIntensity: 1.3,
    emissive: 0x5a2a08, emissiveIntensity: 0.6 });
  const step = new THREE.Mesh(sweep(roundedSection(S.inner, S.outer, S.z - S.depth / 2, S.z + S.depth / 2, 0.4), [0, 360], 160), bronze);
  const seal = new THREE.Mesh(new THREE.TorusGeometry(P.seal.radius, P.seal.tube, 16, 160),
    new THREE.MeshStandardMaterial({ color: 0x1a2fb8, metalness: 0.2, roughness: 0.18, envMap: env || null, envMapIntensity: 1.2, emissive: 0x0a1460, emissiveIntensity: 0.6 }));
  seal.position.z = P.seal.z;
  // the lavender drum face: a shallow dish (it curves back toward the rim), shaded in its own shader so it never depends on
  // the scene's lights: brushed concentric grain, a lavender-lilac sheen up and to the left, cyan bounce light near the rim
  const F = P.face, prof = [];
  for (let i = 0; i <= 24; i++) { const t = i / 24, r = F.inner + (F.outer - F.inner) * t; prof.push([r, F.z - F.dish * Math.sin(t * Math.PI * 0.5)]); }
  const faceMat = new THREE.ShaderMaterial({ uniforms: { uTime: time, uIn: { value: F.inner }, uOut: { value: F.outer },
    uLav: { value: new THREE.Color(...P.lavender) }, uLilac: { value: new THREE.Color(...P.lilac) }, uShade: { value: new THREE.Color(...P.shade) } },
    vertexShader: FACE_VERTEX, fragmentShader: FACE_FRAGMENT, side: THREE.DoubleSide });
  const face = new THREE.Mesh(sweep(prof, [0, 360], 160), faceMat); face.name = 'r6Face';
  // gold rivets round the face
  const R = P.rivets, rivet = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 16, 10), gold, R.count), m4 = new THREE.Matrix4();
  for (let i = 0; i < R.count; i++) {
    const a = (i + 0.5) / R.count * Math.PI * 2, rr = R.radius, z = F.z - F.dish * Math.sin((rr - F.inner) / (F.outer - F.inner) * Math.PI * 0.5);
    m4.compose(new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, z - 0.02), new THREE.Quaternion(), new THREE.Vector3(R.size, R.size, R.size * 0.55));
    rivet.setMatrixAt(i, m4);
  }
  g.add(face, bezel, step, seal, rivet);
  g.applyMatrix4(frameAt(TR, TS, axisH));
  for (const o of g.children) o.frustumCulled = false;
  scene.add(g);
  return { bezel: [B.inner, B.outer], face: [F.inner, F.outer], rivets: R.count };
}
const FACE_VERTEX = /* glsl */ `
varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() { vL = position; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }
`;
const FACE_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uIn, uOut; uniform vec3 uLav, uLilac, uShade;
varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() {
  float r = length(vL.xy), a = atan(vL.y, vL.x), t = clamp((r - uIn) / (uOut - uIn), 0.0, 1.0);
  vec3 col = mix(uLav, uShade, smoothstep(0.15, 1.0, t) * 0.75);                         // lavender, deepening outward
  float grain = 0.9 + 0.1 * bwNoise(vec2(r * 38.0, a * 3.0)) + 0.04 * sin(r * 160.0);       // brushed concentric grain
  col *= grain;
  float sheen = pow(max(0.0, dot(normalize(vL.xy + 0.0001), normalize(vec2(-0.55, 0.85)))), 3.0) * (1.0 - t);   // up and to the left
  col = mix(col, uLilac * 1.15, sheen * 0.55);
  float bounce = exp(-pow((r - uIn) / 0.35, 2.0));                                           // cyan light from the tunnel
  col += vec3(0.25, 0.7, 1.0) * bounce * (0.45 + 0.15 * sin(a * 6.0 + uTime * 2.0));
  float groove = exp(-pow((r - (uIn + 0.95)) / 0.05, 2.0)) + exp(-pow((r - (uIn + 1.9)) / 0.07, 2.0));   // pressed rings
  col = mix(col, uShade * 0.8, groove * 0.5); col += uLilac * 0.25 * exp(-pow((r - (uIn + 1.0)) / 0.04, 2.0));
  float view = clamp(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0, 1.0);
  col *= 0.75 + 0.35 * view;
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- layered flanges along the tunnel
function flanges({ scene, TR, TS, TE, axisH, env, time }) {
  const P = ROUND6.flanges, us = [];
  for (let u = TS + P.from; u < TE + 3; u += P.every) us.push(u);
  // the section: a slab standing out of the wall, thick at the wall, rounded at its inner lip (r, z with z toward the drum)
  const prof = [[P.wall + 0.05, -P.depth * 0.5], [P.wall, -P.depth * 0.5], [P.lip + 0.08, -P.depth * 0.42], [P.lip + 0.02, -P.depth * 0.3],
    [P.lip, 0.0], [P.lip + 0.02, P.depth * 0.3], [P.lip + 0.08, P.depth * 0.42], [P.wall, P.depth * 0.5], [P.wall + 0.05, P.depth * 0.5]];
  const geo = sweep(prof, P.arc, 128);
  const aU = new Float32Array(us.length), aGold = new Float32Array(us.length);
  us.forEach((u, i) => { aU[i] = u; aGold[i] = (i % P.goldEvery === 1) ? 1 : 0; });
  geo.setAttribute('aU', new THREE.InstancedBufferAttribute(aU, 1)); geo.setAttribute('aGold', new THREE.InstancedBufferAttribute(aGold, 1));
  const mat = new THREE.ShaderMaterial({ uniforms: { uTime: time, uFace: { value: new THREE.Color(...P.face) }, uDeep: { value: new THREE.Color(...P.deep) },
    uCyan: { value: new THREE.Color(...P.cyan) }, uGold: { value: new THREE.Color(...P.gold) }, uLip: { value: P.lip }, uWall: { value: P.wall } },
    vertexShader: FLANGE_VERTEX, fragmentShader: FLANGE_FRAGMENT, side: THREE.DoubleSide });
  const mesh = new THREE.InstancedMesh(geo, mat, us.length);
  us.forEach((u, i) => mesh.setMatrixAt(i, frameAt(TR, u, axisH)));
  mesh.name = 'r6Flanges'; mesh.frustumCulled = false; scene.add(mesh);
  return { count: us.length, every: P.every, triangles: geo.index.count / 3 };
}
const FLANGE_VERTEX = /* glsl */ `
attribute float aU; attribute float aGold; varying vec3 vL; varying vec3 vN; varying vec3 vW; varying float vU; varying float vGold;
void main() {
  vL = position; vU = aU; vGold = aGold;
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const FLANGE_FRAGMENT = /* glsl */ `
uniform float uTime, uLip, uWall; uniform vec3 uFace, uDeep, uCyan, uGold;
varying vec3 vL; varying vec3 vN; varying vec3 vW; varying float vU; varying float vGold;
void main() {
  float r = length(vL.xy), a = atan(vL.y, vL.x);
  vec3 V = normalize(cameraPosition - vW), N = normalize(vN); if (!gl_FrontFacing) N = -N;
  float facing = clamp(dot(N, V), 0.0, 1.0);
  float toLip = 1.0 - smoothstep(uLip, uLip + 0.14, r);                                   // 1 on the rounded inner lip
  float front = step(vL.z, 0.0);                                                            // the face toward the rider
  vec3 col = mix(uDeep, uFace, (0.35 + 0.65 * facing) * mix(0.55, 1.0, front));
  col += uFace * 0.5 * smoothstep(uWall - 0.08, uWall, r) * front;                          // light catching the outer step
  float up = smoothstep(0.2, 1.0, sin(a));                                                  // lavender reflections on the upper wall
  col = mix(col, col + vec3(0.18, 0.08, 0.32), up * 0.5);
  float wave = 0.75 + 0.25 * sin(vU * 0.9 - uTime * 3.0);                                   // the glow pulses down the tunnel
  float sheen = pow(1.0 - facing, 2.0);
  vec3 lipCol = mix(uCyan * (0.8 + 0.5 * sheen), uGold * (1.0 + 0.8 * pow(abs(sin(a * 3.0 + uTime * 0.6)), 6.0)), vGold);
  col = mix(col, lipCol * wave, toLip);
  float caustic = pow(0.5 + 0.5 * sin(a * 14.0 + vU * 2.0 - uTime * 2.6) * sin(a * 9.0 - uTime * 1.7 + vU), 6.0);   // water light
  col += vec3(0.3, 0.8, 1.0) * caustic * 0.35 * front * (1.0 - toLip);
  gl_FragColor = vec4(col, 1.0);
}
`;
