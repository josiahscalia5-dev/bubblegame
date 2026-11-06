// ?s3=intunnel,domes (test only; 6 November 2026, fourteenth session): real 3D translucent BUBBLE DOMES along the pink
// character's base, as the ORIGINAL approved Screen 4 has them
// (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg): glossy lavender-blue soap
// domes sitting on the water at her base and sides, the blue water and her fur showing through them, a white highlight arc
// and a bright glint on each, and a few light aqua water domes among them. The region comparison measured what is missing
// there (Previews/WebDemo/screen4_round9_match/40_intunnel_start/regions_baseline/): lavender 0.3 % against the original's
// 6.5 % round her base and 0.6 % against 6.5 % in the foreground water; LPIPS 0.59 and 0.65, the two largest differences.
// Not the rejected candidates: the water is NOT lowered (step 8's waterline stays) and there is no white shader froth.
//
// One instanced draw call: spheres riding in the character's water frame (the swell's own frame uniforms, so they move with
// her swerves, jumps and landings and hide with the swell), each centred just below the crest so the swell's depth hides
// its lower part and it reads as a dome sitting on the water. Built by tunnel_r8_liquid.js's waterlineFoam (its crest()
// helper); no Math.random (a private generator), nothing else changed.
import * as THREE from 'three';
import { matchLumpDecl } from './tunnel_r9_match_water.js';
import { DOMES, BANK_ON, BANK } from './tunnel_s4_bt.js';

const f4 = (x) => (+x).toFixed(5);
const v3 = (hex) => { const n = parseInt(hex.slice(1), 16); return `vec3(${f4((n >> 16 & 255) / 255)}, ${f4((n >> 8 & 255) / 255)}, ${f4((n & 255) / 255)})`; };

export function buildBaseDomes({ scene, crest, frame }) {
  const D = DOMES, list = [];
  // [phi (degrees round her; + screen-left), radius (m), out from the crest (m, toward the camera), sink (share of the radius
  // below the crest), kind (0 a lavender soap dome, 1 a light aqua water dome)]
  for (const [phi, r, out, sink, kind] of BANK_ON ? BANK.domes : D.list) {   // (?s3=...,bank: its 3 side domes)
    const c = crest(phi);
    list.push([c.x + c.nx * out, c.h - r * sink, c.u + c.nu * out, r, kind, (phi * 0.137 + r * 7.3) % 1]);
  }
  const n = list.length, sphere = new THREE.SphereGeometry(1, 28, 18), g = new THREE.InstancedBufferGeometry();
  g.index = sphere.index; g.setAttribute('position', sphere.attributes.position); g.setAttribute('normal', sphere.attributes.normal);
  const a1 = new Float32Array(n * 4), a2 = new Float32Array(n * 4);
  list.forEach((b, i) => { a1.set(b.slice(0, 4), i * 4); a2.set([b[4], b[5], 0, 0], i * 4); });
  g.setAttribute('inst', new THREE.InstancedBufferAttribute(a1, 4)); g.setAttribute('inst2', new THREE.InstancedBufferAttribute(a2, 4)); g.instanceCount = n;
  const K = D.look;
  const mat = new THREE.ShaderMaterial({ uniforms: frame, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    vertexShader: /* glsl */ `
attribute vec4 inst, inst2; uniform vec3 uC, uR, uU, uT; uniform float uTime, uFade, uAir, uLand;
varying vec3 vN, vV, vL; varying float vKind, vSeed, vA, vUp;
void main() {
  vSeed = inst2.y; vKind = inst2.x;
  float lift = uFade * (1.0 - 0.6 * uAir) * (1.0 + uLand * 0.6);
  vec3 c = uC + uR * inst.x + uU * (inst.y * lift + 0.008 * sin(uTime * 3.1 + vSeed * 40.0)) + uT * inst.z;
  float br = 1.0 + 0.035 * sin(uTime * 4.3 + vSeed * 17.0);   // a soap film breathing a little
  vec3 w = c + (uR * position.x + uU * position.y + uT * position.z) * inst.w * br * clamp(uFade * 1.2, 0.0, 1.0);
  vN = normalize(uR * normal.x + uU * normal.y + uT * normal.z); vV = normalize(cameraPosition - w);
  vL = position; vUp = position.y; vA = uFade;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}`,
    fragmentShader: /* glsl */ `
uniform float uTime; varying vec3 vN, vV, vL; varying float vKind, vSeed, vA, vUp;
${matchLumpDecl()}
void main() {
  vec3 N = normalize(vN), V = normalize(vV);
  float ndv = abs(dot(N, V)), f = 1.0 - ndv;
  float rim = pow(f, ${f4(K.rimPow)});
  // the film's colour: lavender soap (kind 0) or light aqua water (kind 1), lighter at the top, the water's aqua at the foot
  vec3 body = mix(${v3(K.lavender)}, ${v3(K.aqua)}, vKind);
  body = mix(body, ${v3(K.top)}, smoothstep(0.1, 0.9, vUp) * 0.55);
  body = mix(${v3(K.foot)}, body, smoothstep(-0.55, 0.1, vUp));
  // a faint thin-film shimmer at the rim
  vec3 film = 0.5 + 0.5 * cos(6.2832 * (f * 1.6 + vUp * 0.3 + vec3(0.0, 0.33, 0.67) + vSeed + uTime * 0.04));
  vec3 rimC = mix(${v3(K.rim)}, film * 0.35 + 0.65, ${f4(K.film)});
  // the white highlight arc (upper left, as the original's) and a bright glint, and a small second glint low right
  vec3 L1 = normalize(vec3(-0.55, 0.65, 0.52)), L2 = normalize(vec3(0.5, -0.25, 0.83));
  vec3 H1 = normalize(L1 + V), H2 = normalize(L2 + V);
  float arc = smoothstep(${f4(K.arc[0])}, ${f4(K.arc[1])}, dot(N, L1)) * smoothstep(0.08, 0.35, f);
  float glint = pow(max(dot(N, H1), 0.0), ${f4(K.glintPow)}) + 0.45 * pow(max(dot(N, H2), 0.0), ${f4(K.glintPow * 0.7)});
  vec3 col = mix(body, rimC, rim);
  float a = mix(${f4(K.alpha[0])}, ${f4(K.alpha[1])}, vKind) + rim * ${f4(K.rimAlpha)};
  col = mix(col, vec3(1.0), clamp(arc * ${f4(K.arcK)} + glint, 0.0, 1.0));
  a = clamp(max(a, clamp(arc * ${f4(K.arcK)} + glint, 0.0, 1.0)), 0.0, 1.0) * vA;
  gl_FragColor = vec4(mwUndisp(col) * a, a);
}` });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'btBaseDomes'; mesh.frustumCulled = false; mesh.renderOrder = 7;
  scene.add(mesh);
  return { mesh, count: n, drawCalls: 1, triangles: n * sphere.index.count / 3 };
}
