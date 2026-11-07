// ?s3=intunnel,fidelity (7 November 2026): ONE reference-driven pass on the relationship between her and the water, on top
// of the accepted ?s3=intunnel (swim2 stays on). Visual only: nothing here writes her gameplay state (x, yAbs, air, lane,
// speed, vy, pickups), the camera or the game's seeded Math.random; every hook is gated on FIDELITY_ON.
//
// The structural diagnosis (Previews/WebDemo/screen4_round9_match/60_fidelity/README.md), against the ORIGINAL only:
//   1. her crown is narrow and peaked because her MODEL is: with every water layer hidden her silhouette is 78 / 153 / 187 px
//      wide 20 / 40 / 60 px below her top, the ORIGINAL's 151 / 209 / 241 (a dome of about 152 px radius). The glTF body is an
//      egg (half-width 0.12 at the tuft, 0.33-0.67 over the crown, 0.95 under the arms), so no water setting can make it the
//      original's broad dome. -> `crown`: her crown's envelope broadened once at load (x and z about her axis, strongest at
//      the top, none from her arms down) and the tuft's tip rounded; the fur's strands, colours and lighting are hers.
//   2. her waterline is one band: heroSwell's crest cut into even spiky teeth (focusSwellGLSL fsCutT), with nothing rising
//      over her base and nothing that lets her pink show through the water, so every tint read as a flat film. The ORIGINAL's
//      contact is a few low glassy water mounds over her base, violet where her pink shows through them, white-rimmed on the
//      lit edge, merged into broken white splash. -> `caps`: a few low water caps sunk into the swell's crest at her base
//      (one mesh pair, 2 draw calls), drawn as real transmission: a multiply pass tints whatever is behind them (her pink ->
//      violet, the water -> deeper blue), an additive pass gives their reflection, scattered light, a highlight on the lit
//      edge and broken foam where they meet the swell. They roll back off her base and sink as she swims (her distance swum,
//      swim2's), are reborn at her base, slump in a jump and are thrown up on landing, like the swell they sit on. The teeth
//      in front of her are softened so the caps make the waterline there.
//   3. from blend (tunnel_s4_blend.js, imported): her drawn ride height and the damped landing (no one-frame drop), and the
//      swell's crest lower. NOT blend's flat lavender tint (its blendSwellGLSL is not used).
import * as THREE from 'three';
import { FIDELITY_ON } from './tunnel_s4_bt.js';
import { BLEND, blendPose, blendFurCentre } from './tunnel_s4_blend.js';
export { FIDELITY_ON };

export const FIDELITY = {
  // her crown (the glTF's own units, y from -0.943 to +0.943): x and z scaled by 1 + A w(h), w = (1 - smoothstep(0, h1, h))^pw
  // with h the depth below her top; the tuft's tip lowered by B (1 - smoothstep(0, h2, h))^2
  crown: { A: 0.5, h1: 0.75, pw: 1.6, B: 0.03, h2: 0.12, kz: 1.0 },
  body: { ky: 0.88, dy: 0.05 },        // blend's: her drawn vertical stretch and lift (m)
  swell: { scale: 0.84 },              // blend's: the swell's crest heights scaled (its two extra crest mounds not used)
  // the water caps: [phi round her (degrees, + screen-left), peak radius (m), phase at the start, side drift (share)]
  // (sizes and places from the ORIGINAL at her base: a dome about 55 px in radius left of her centre, one of about 40 px just
  // right of it, a small one further right; at the crest 439 px per m across and 470 up)
  caps: {
    list: [[12, 0.18, 0.2, 0.5], [-3, 0.13, 0.3, -0.5], [-17, 0.09, 0.25, -0.5], [30, 0.1, 0.65, 0.5], [-32, 0.1, 0.8, -0.5], [3, 0.085, 0.95, 0.5]],
    squash: 0.72,                      // their height / width
    sink: [0.0, 0.8],                  // share of the half-height below the crest, at birth and at the end of a life
    out: [-0.03, 0.08],                // m out from the crest toward the camera over a life (- toward her)
    life: 3.2,                         // m swum per life (about 0.45 s at her 7.2 m/s); plus `idle` per second at the start
    idle: 0.04,
    wobble: 0.1,                       // surface wobble (share of the radius)
    // transmission (multiply, linear): what is behind is multiplied by tint; scatter / sky (sRGB): light added inside / reflected
    tint: '#6f86ff', tintK: 0.6,
    scatter: '#8a7ee6', scatterK: 0.9, sky: '#d8ecff', skyK: 0.8, spec: 2.0, rim: 2.0, foam: 0.8,
  },
  teethFront: 0.35,                    // focus's spiky teeth: the valleys' depth in front of her (1 = as accepted)
};
{
  const t = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.fidelity;
  if (t) for (const k of Object.keys(t)) FIDELITY[k] = t[k] && typeof t[k] === 'object' && !Array.isArray(t[k]) ? { ...FIDELITY[k], ...t[k] } : t[k];
}
// blend's pose with fidelity's proportions (blendPose reads BLEND.body; BLEND_ON stays off under fidelity alone); the
// settings readable from the page for inspection (window.__BW_FIDELITY__, live DevTools)
if (FIDELITY_ON) { Object.assign(BLEND.body, FIDELITY.body); window.__BW_FIDELITY__ = FIDELITY; }
// the face's water settings for tunnel_r9_match_water.js (deepMerge'd after focus's under FIDELITY_ON)
export const FIDELITY_WATER = { face: { teeth: { front: FIDELITY.teethFront } } };

// ---------------------------------------------------------------- 1. her crown
const sm = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
export function fidelityCrown(model) {
  const C = FIDELITY.crown;
  model.traverse((o) => {
    if (!o.isMesh) return;
    const A = o.geometry.attributes.position, n = A.count, out = new Float32Array(n * 3);
    let top = -Infinity;
    for (let i = 0; i < n; i++) top = Math.max(top, A.getY(i));
    for (let i = 0; i < n; i++) {
      const x = A.getX(i), y = A.getY(i), z = A.getZ(i), h = top - y;
      const s = 1 + C.A * Math.pow(1 - sm(0, C.h1, h), C.pw);
      out[i * 3] = x * s; out[i * 3 + 1] = y - C.B * Math.pow(1 - sm(0, C.h2, h), 2); out[i * 3 + 2] = z * (1 + (s - 1) * C.kz);
    }
    o.geometry.setAttribute('position', new THREE.BufferAttribute(out, 3));   // (the glTF's is quantized and interleaved)
    o.geometry.computeBoundingBox(); o.geometry.computeBoundingSphere();
  });
}

// ---------------------------------------------------------------- 3. blend's pieces
export function fidelitySwell(P) {   // the crest lower (blend's scale), set in buildHeroWater before the swell is built
  const k = FIDELITY.swell.scale;
  P.line = P.line.map((h) => +(h * k).toFixed(4));
  P.mounds = P.mounds.map(([c, a, w]) => [c, +(a * k).toFixed(4), w]);
}
export { blendPose as fidelityPose, blendFurCentre as fidelityFurCentre };

// ---------------------------------------------------------------- 2. the water caps
const f = (v) => (+v).toFixed(5);
const srgb = (hex) => new THREE.Color(hex);   // sRGB hex -> the renderer's linear
const NC = FIDELITY.caps.list.length;
function capsGeometry() {   // NC unit spheres (14 x 10), each vertex with its cap's index
  const pos = [], idx = [], ci = [], U = 14, V = 10;
  for (let c = 0; c < NC; c++) {
    const b = pos.length / 3;
    for (let j = 0; j <= V; j++) for (let i = 0; i <= U; i++) {
      const th = Math.PI * j / V, ph = 2 * Math.PI * i / U;
      pos.push(Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)); ci.push(c);
    }
    for (let j = 0; j < V; j++) for (let i = 0; i < U; i++) {
      const a = b + j * (U + 1) + i, d = a + U + 1;
      idx.push(a, a + 1, d, a + 1, d + 1, d);   // (outward-facing for this parametrisation)
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('aCap', new THREE.Float32BufferAttribute(ci, 1));
  g.setIndex(idx);
  return g;
}
const capVertex = /* glsl */ `
attribute float aCap;
uniform vec4 uCap[${NC}];   // centre in her frame (x screen-left, height, u along the path), radius
uniform float uSink[${NC}];   // share of the half-height below the crest (vH = 0 where the cap meets the swell)
uniform vec3 uC, uR, uU, uT; uniform float uTime;
varying vec3 vW, vN; varying float vH, vI;
void main() {
  vec4 c = uCap[int(aCap + 0.5)];
  vec3 n = position;
  float wob = 1.0 + ${f(FIDELITY.caps.wobble)} * (0.6 * sin(n.x * 3.1 + n.z * 2.3 + uTime * 2.6 + aCap * 1.7) + 0.4 * sin(n.y * 4.3 - n.x * 2.0 - uTime * 3.4 + aCap * 4.1));
  vec3 p = c.xyz + vec3(n.x, n.y * ${f(FIDELITY.caps.squash)}, n.z) * c.w * wob;
  vec3 w = uC + uR * p.x + uU * p.y + uT * p.z;
  vW = w; vN = normalize(uR * n.x + uU * (n.y / ${f(FIDELITY.caps.squash)}) + uT * n.z);
  vH = n.y - uSink[int(aCap + 0.5)]; vI = aCap;   // (the crest is sink half-heights above the centre)
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`;
const capFragment = (pass) => /* glsl */ `
uniform vec3 uU, uR, uT, uTint, uScatter, uSky; uniform float uTime, uK, uTintK, uScatterK, uSkyK, uSpec, uRim, uFoam;
varying vec3 vW, vN; varying float vH, vI;
float fdH(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  vec3 V = normalize(cameraPosition - vW), N = normalize(vN);
  float ndv = clamp(dot(N, V), 0.0, 1.0), fr = pow(1.0 - ndv, 2.5);
  float edge = smoothstep(0.0, 0.25, ndv);                     // soft at the silhouette
${pass === 0 ? `  // transmission: what is behind, multiplied (her pink -> violet, the water -> deeper blue); thinner at the silhouette
  // (thinner toward its base, so it merges into the swell instead of sitting on it)
  float k = uTintK * uK * edge * (1.0 - 0.6 * fr) * (0.35 + 0.65 * smoothstep(0.0, 0.55, vH));
  gl_FragColor = vec4(mix(vec3(1.0), uTint, k), 1.0);
` : `  // the lit edge: the key light from the upper left (the original's white rims), the sky reflected at grazing angles
  vec3 L = normalize(uU * 0.75 + uR * 0.45 - uT * 0.35);
  float lit = clamp(dot(N, L), 0.0, 1.0);
  float spec = pow(clamp(dot(reflect(-V, N), L), 0.0, 1.0), 28.0) * uSpec;
  float rim = smoothstep(0.55, 0.85, 1.0 - ndv) * smoothstep(0.35, 0.85, lit) * uRim;   // a bright arc on the lit upper-left edge
  vec3 col = uScatter * uScatterK * (1.0 - fr) * edge;
  col += uSky * (fr * uSkyK * (0.25 + 0.75 * lit) + rim);
  col += vec3(1.0) * spec;
  // a thin, ragged band of white foam where the cap meets the swell, and a few small bubbles high on it
  float ang = atan(dot(N, uR), dot(N, -uT)) * 3.0 + vI * 3.7;
  float rag = 0.5 * sin(ang * 3.0 + uTime * 1.3) + 0.3 * sin(ang * 7.0 - uTime * 2.1 + vI) + 0.2 * sin(ang * 13.0 + vI * 5.0);
  float foam = (1.0 - smoothstep(0.03, 0.09 + 0.05 * rag, abs(vH + 0.02 * rag))) * smoothstep(-0.3, 0.2, rag) * uFoam;
  vec2 bq = vec2(ang * 2.2, vH * 9.0 - uTime * 0.8); vec2 bi = floor(bq);
  float bub = step(0.9, fdH(bi + vI * 7.0)) * (1.0 - smoothstep(0.1, 0.17, length(fract(bq) - 0.5))) * smoothstep(0.25, 0.6, vH);
  col = mix(col, vec3(1.0), clamp(foam + bub * 0.7, 0.0, 1.0));
  gl_FragColor = vec4(col * uK, 1.0);
`}}
`;
// S: the hero water's frame (tunnel_r7_hero_water.js buildHeroWater); P: the swell's settings; crestAt: its crest height
export function buildFidelityCaps({ scene, updaters, time, S, P, crestAt }) {
  const K = FIDELITY.caps, D2R = Math.PI / 180;
  const g = capsGeometry();
  const u = { uCap: { value: Array.from({ length: NC }, () => new THREE.Vector4()) }, uSink: { value: new Array(NC).fill(0) }, uC: { value: new THREE.Vector3() }, uR: { value: new THREE.Vector3(1, 0, 0) },
    uU: { value: new THREE.Vector3(0, 1, 0) }, uT: { value: new THREE.Vector3(0, 0, 1) }, uTime: time, uK: { value: 0 },
    uTint: { value: srgb(K.tint) }, uScatter: { value: srgb(K.scatter) }, uSky: { value: srgb(K.sky) }, uTintK: { value: K.tintK }, uScatterK: { value: K.scatterK },
    uSkyK: { value: K.skyK }, uSpec: { value: K.spec }, uRim: { value: K.rim }, uFoam: { value: K.foam } };
  const mk = (pass, ro) => {
    const m = new THREE.ShaderMaterial({ uniforms: u, vertexShader: capVertex, fragmentShader: capFragment(pass), transparent: true, depthWrite: false, depthTest: true,
      blending: THREE.CustomBlending, blendEquation: THREE.AddEquation,
      blendSrc: pass === 0 ? THREE.DstColorFactor : THREE.OneFactor, blendDst: pass === 0 ? THREE.ZeroFactor : THREE.OneFactor,
      blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor });
    const o = new THREE.Mesh(g, m); o.name = pass === 0 ? 'fidelityCapsTint' : 'fidelityCapsLight'; o.frustumCulled = false; o.renderOrder = ro; o.visible = false;
    scene.add(o); return o;
  };
  const tint = mk(0, 5.3), light = mk(1, 5.4);
  const swell = scene.getObjectByName('heroSwell');
  updaters.push(() => {
    const on = !!(swell && swell.visible) && S.k > 0.01;
    tint.visible = light.visible = on; if (!on) return;
    const su = swell.material.uniforms;
    for (const k of ['uC', 'uR', 'uU', 'uT']) u[k].value.copy(su[k].value);
    u.uK.value = S.k;
    // the swell's own lift (tunnel_r7_hero_water.js swellVertex): slumps in a jump, thrown up on landing
    const lift = (1 - S.air * P.air) * (1 + S.land * P.land);
    const flow = (S.sw2T || 0) / K.life + time.value * K.idle;
    for (let i = 0; i < NC; i++) {
      const [phi0, r0, c0, drift] = K.list[i];
      const p = (((c0 + flow) % 1) + 1) % 1;
      const env = sm(0, 0.18, p) * Math.pow(1 - p, 0.8) / 0.853 * (1 - 0.85 * S.air) * (1 + 0.35 * S.land);   // grows at her base, then sinks as it rolls back
      const phi = phi0 + drift * (12 + Math.abs(phi0)) * p, a = phi * D2R;   // outward along her base
      const [H] = crestAt(P, phi);
      let nx = Math.sin(a) / P.ax, nu = -Math.cos(a) / P.au; const nl = Math.hypot(nx, nu); nx /= nl; nu /= nl;
      const o = K.out[0] + (K.out[1] - K.out[0]) * p, wo = P.out;
      const fh = P.foot + (H - P.foot) * Math.sqrt(Math.max(0, 1 - (Math.max(o, 0) / wo) ** 2));   // the outer face's height there (the crest's inside it)
      const r = r0 * Math.max(env, 0), sink = K.sink[0] + (K.sink[1] - K.sink[0]) * p;
      u.uCap.value[i].set(P.ax * Math.sin(a) + nx * o, fh * lift - sink * r * K.squash, -P.au * Math.cos(a) + nu * o, r); u.uSink.value[i] = sink;
    }
  });
  return { drawCalls: 2, triangles: g.index.count / 3 * 2 };
}
