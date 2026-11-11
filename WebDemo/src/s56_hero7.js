// hero7 (9 November 2026, session ddf175f2, the coordinator; the user's targeted character request: "make the actual playable pink furry character
// look as close as technically possible to the approved Screen 6": a rounded, full, fluffy DOME with dense soft strands radiating outward, saturated
// bubblegum pink with soft highlights, swimming IN the water; "not another pink mound"). Target: ONLY
// Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png (the hero: x 0.255-0.74, top y 0.59,
// water line ~0.76; radial centre ~(0.50, 0.66); colours measured top #fb7bf2, upper #f93dc5, lower #ee1aa5, base #a7068e).
//
// Why a new drawn body: the game's mascot (models/mascot.glb, a 137k-triangle Meshy figure with arms) is squat; seen from behind it reads as a mound
// (hero6 stretched it 1.6x and sank it 0.78 m). The approved Screen 6 shows his BACK: a fur ball with two nubs, strands combed away from the point
// facing the viewer. That is built here directly in three.js as real-time shell fur: a sphere (the body) and two small spheres (the nubs), each
// drawn as 32 instanced shells in ONE draw call; strands are tapered, soft-edged (no hard alpha test noise), combed away from a pole, with a
// strand highlight (Kajiya-Kay), occlusion toward the roots and the measured colour ramp. Blender particle hair does not export to glTF, so the
// fur is generated in the shader. The body follows the game mascot's drawn motion (tilt: roll, pitch, lean, yaw, spin; squash: stretch, swim bob)
// on its own transform, WITHOUT hero6's 1.6x stretch; his state (position, lanes, jumps, pickups) is the game's and untouched. While it is shown
// (phase running), the old drawn body (m.squash) is hidden; Tap to Start (Scene 5) and Level Complete keep the old model (his face).
// Switch: `?s3=...,s56,...,hero7` (Screen 6 only). Without it nothing here runs.
import * as THREE from 'three';
const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const HERO7_ON = LIST.includes('s56') && LIST.includes('level1') && LIST.includes('hero7');

export const HERO7 = {
  R: 0.32,         // body radius (m) (fitted on the u 206 frame by render difference: width / top / water line vs the approved)
  y: -0.24,        // body centre relative to the game's water-line estimate (m) (fitted)
  airY: 0.0,       // the body centre above his root while in the air (the old body's centre)
  sink: 0.78,      // = S56.hero6.sink (the game's sunk body: its water line sits this far above tilt.position.y)
  nub: { r: 0.52, x: 1.02, y: -0.28, z: -0.3 },   // the nubs: radius and centre in body radii (x out to the sides, z toward the camera = -)
  shells: 32, len: 0.22, comb: 0.75, droop: 0.1,   // shell count; strand length (body radii); comb along the surface away from the pole; droop
  pole: [0.0, 0.62, -0.79],   // the point the strands radiate from (body frame: +y up, -z toward the camera)
  // strands: two layers of cells per body radius, strand radius (cell units) at the root, length variation, softness
  dens: [24.0, 36.0], rad: 0.45, lenVar: 0.45, soft: 0.35,   // (2x crops: soft 0.7 read smudged; 0.35 crisp)
  // tufts (the approved fur is plush clumps with light tips and darker gaps): clump cells per body radius, how far the strands gather toward
  // their clump's centre at the tip, the clump's own length and shade variation
  clump: { dens: 14.0, k: 0.9, len: 0.3, shade: 0.25 },   // (strong gathering: pointed tufts with gaps, as the approved)
  // colours (linear, before the grade): the measured ramp base -> lower -> upper -> top; root occlusion; tip lift; highlight
  // (measured band medians, game vs approved: top #ee69ec / #fb67e9, upper #eb1dc2 / #f935bb, lower #eb10ac / #f21ca6, base #d80699 / #b70891)
  base: [0.28, 0.0, 0.15], lower: [1.3, 0.03, 0.55], upper: [1.35, 0.12, 0.85], top: [1.35, 0.45, 1.25],
  ramp: [-0.25, 0.1, 0.5, 0.92], vary: 0.8,   // the colour ramp's heights on the body (body radii) and the per-strand light / dark spread
  ao: 0.62, tip: 0.42, spec: 0.8, specExp: 24.0, rim: 0.25, light: [0.25, 0.9, -0.45],
  contact: [0.58, 0.5],   // the water's contact radii round him (m: across, along): the pile-up and the white collar hug the dome and nubs
  // the water's white at his base: its foam over white so it survives the scene grade (fin6 exposure 0.72 dimmed white to grey: 0 % near-white at
  // his base vs the approved 11 %); its collar and side froth stronger and less broken (measured: 5.2 % near-white with these). S56.water fields.
  water: { foam: [2.2, 2.3, 2.5], collar: 2.2, froth: 4.5, gap: 0.45, ripple: 0.4 },   // (waterline test: broken white highlights, not a continuous collar; contact 0.58 / 0.5 keeps the nubs above the water)   // (ripple 1.0 -> 0.4: the spreading ring lines read as white rings; the contact white kept)
  hideOld: 1,   // hide the game mascot's drawn body while hero7 shows (0: both, for comparison)
};
if (HERO7_ON && typeof window !== 'undefined') window.__bwHero7 = HERO7;

const VERT = /* glsl */ `
attribute float aShell;
uniform float uN, uLen, uComb, uDroop, uScaleR; uniform vec3 uPole;
varying vec3 vRoot; varying vec3 vN; varying vec3 vT; varying vec3 vV; varying float vH; varying vec3 vBody;
void main() {
  vec3 n = normalize(position); float h = aShell / max(uN - 1.0, 1.0);
  vec3 P = normalize(uPole);
  vec3 t = n - P * dot(n, P); float tl = length(t); t = tl > 1e-4 ? t / tl : vec3(0.0);
  float away = smoothstep(0.0, 0.6, tl);                                   // near the pole the strands stand up (toward the viewer)
  vec3 d = n * (1.0 - 0.55 * uComb * away) + t * uComb * away + vec3(0.0, -uDroop, 0.0) * h;
  vec3 p = n + d * uLen * h;
  vRoot = n; vH = h; vN = normalize(mat3(modelMatrix) * n); vT = normalize(mat3(modelMatrix) * normalize(d));
  vec4 w = modelMatrix * vec4(p, 1.0); vV = normalize(cameraPosition - w.xyz); vBody = n;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;
const FRAG = /* glsl */ `
uniform vec2 uDens; uniform vec4 uClump, uRamp; uniform float uVary; uniform float uRad, uLenVar, uSoft, uAO, uTip, uSpec, uSpecExp, uRim; uniform vec3 uBase, uLower, uUpper, uTop, uLight;
varying vec3 vRoot; varying vec3 vN; varying vec3 vT; varying vec3 vV; varying float vH; varying vec3 vBody;
float h31(vec3 p) { p = fract(p * vec3(0.1031, 0.1030, 0.0973)); p += dot(p, p.yxz + 33.33); return fract((p.x + p.y) * p.z); }
vec3 h33(vec3 p) { p = fract(p * vec3(0.1031, 0.1030, 0.0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx); }
// a strand at a random point of each cell: coverage (soft edge) and the strand's random length / shade
vec2 strand(vec3 q, float h, float seed) {
  vec3 c = floor(q), f = fract(q); vec3 o = 0.2 + 0.6 * h33(c + seed);
  float L = 1.0 - uLenVar * h31(c + seed + 7.1);
  if (h > L) return vec2(0.0, 0.0);
  float r = uRad * pow(1.0 - h / L, 0.6);
  float dd = length(f - o), aa = fwidth(dd) * uSoft + 1e-4;
  return vec2(1.0 - smoothstep(r - aa, r + aa, dd), h31(c + seed + 3.3));
}
void main() {
  float h = vH;
  // tufts: organic (Voronoi) clumps on the body: each fragment belongs to the nearest clump centre (3x3x3 cells); with height the strand lookup
  // gathers toward that centre (strands bunch into a tuft), the tuft's border opens into a darker gap, each tuft has its own length and shade
  vec3 cq = vRoot * uClump.x, cb = floor(cq); float f1 = 9.0, f2 = 9.0; vec3 cid = cb, cpos = cq;
  for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) for (int k = -1; k <= 1; k++) {
    vec3 cc = cb + vec3(float(i), float(j), float(k)), pp = cc + 0.15 + 0.7 * h33(cc + 41.0); float dd = length(pp - cq);
    if (dd < f1) { f2 = f1; f1 = dd; cid = cc; cpos = pp; } else if (dd < f2) f2 = dd; }
  float cl = 1.0 - uClump.z * h31(cid + 5.0), cs = 1.0 - uClump.w + 2.0 * uClump.w * h31(cid + 9.0);
  if (h > cl + 0.02) discard;
  float hc = h / max(cl, 0.05);
  float edge = f2 - f1;                                                   // 0 on a tuft border
  if (hc > 0.15 && edge < uClump.y * 0.35 * smoothstep(0.15, 1.0, hc)) discard;   // the gaps between tufts open toward the tips
  vec3 q = mix(vRoot, cpos / uClump.x, uClump.y * 0.6 * hc);           // strands gather toward the tuft centre
  vec2 s1 = strand(q * uDens.x, hc, 0.0), s2 = strand(q * uDens.y + 17.3, hc, 11.0);
  float cov = max(s1.x, s2.x), var = (s1.x > s2.x ? s1.y : s2.y) * 0.5 + 0.5 * h31(cid + 13.0);
  cov = max(cov, (1.0 - smoothstep(0.0, 0.55, f1)) * (1.0 - hc) * 0.9);   // the tuft's dense core near its centre
  cov *= 1.0 - smoothstep(0.8, 1.0, hc) * 0.6;
  float a = h < 0.001 ? 1.0 : cov;
  if (a < 0.02) discard;
  // the measured colour ramp by height on the body (base -> lower -> upper -> top), varied per strand
  float y = vBody.y;
  vec3 c = mix(uBase, uLower, smoothstep(uRamp.x, uRamp.y, y));   // (the ramp over the VISIBLE body: the water line is ~0.2 R below the centre)
  c = mix(c, uUpper, smoothstep(uRamp.y, uRamp.z, y));
  c = mix(c, uTop, smoothstep(uRamp.z, uRamp.w, y));
  c *= (1.0 - uVary * 0.5 + uVary * var) * cs;
  // occlusion toward the roots, lighter tips
  c *= mix(1.0 - uAO, 1.0, smoothstep(0.0, 0.85, hc));
  c += uTip * smoothstep(0.55, 1.0, hc) * vec3(1.0, 0.32, 0.5);
  // soft light on the body and a strand highlight along the hair (Kajiya-Kay)
  vec3 L = normalize(uLight), N = normalize(vN), T = normalize(vT), V = normalize(vV), H = normalize(L + V);
  float dif = 0.55 + 0.45 * clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);
  float th = dot(T, H), sp = pow(sqrt(max(1.0 - th * th, 0.0)), uSpecExp);
  c = c * dif + vec3(1.0, 0.45, 0.68) * sp * uSpec * smoothstep(0.3, 1.0, h);
  c += vec3(1.0, 0.28, 0.55) * pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 3.0) * uRim * h;
  gl_FragColor = vec4(c, a);
  #include <colorspace_fragment>
}`;

function shellGeometry(seg, rings, N) {
  const base = new THREE.SphereGeometry(1, seg, rings);
  const g = new THREE.InstancedBufferGeometry();
  g.index = base.index; g.setAttribute('position', base.attributes.position); g.setAttribute('normal', base.attributes.normal);
  g.setAttribute('aShell', new THREE.InstancedBufferAttribute(new Float32Array([...Array(N).keys()]), 1)); g.instanceCount = N;
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 2.0);
  return g;
}

/** ctx: { mascot (the game's mascot state), report }. Returns { update(dt, time, phase, m) }. */
export function buildHero7(ctx) {
  const P = HERO7, report = ctx.report;
  if (ctx.S && ctx.S.water) Object.assign(ctx.S.water, P.water);   // (water6's own settings, only with hero7)
  const U = {
    uN: { value: P.shells }, uLen: { value: P.len }, uComb: { value: P.comb }, uDroop: { value: P.droop }, uScaleR: { value: 1 }, uPole: { value: new THREE.Vector3(...P.pole) },
    uDens: { value: new THREE.Vector2(...P.dens) }, uClump: { value: new THREE.Vector4(P.clump.dens, P.clump.k, P.clump.len, P.clump.shade) }, uRad: { value: P.rad }, uLenVar: { value: P.lenVar }, uSoft: { value: P.soft },
    uRamp: { value: new THREE.Vector4(...P.ramp) }, uVary: { value: P.vary }, uAO: { value: P.ao }, uTip: { value: P.tip }, uSpec: { value: P.spec }, uSpecExp: { value: P.specExp }, uRim: { value: P.rim },
    uBase: { value: new THREE.Color(...P.base) }, uLower: { value: new THREE.Color(...P.lower) }, uUpper: { value: new THREE.Color(...P.upper) }, uTop: { value: new THREE.Color(...P.top) },
    uLight: { value: new THREE.Vector3(...P.light) },
  };
  const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: true });
  const group = new THREE.Group(); group.name = 'hero7';
  const body = new THREE.Mesh(shellGeometry(56, 36, P.shells), mat); body.name = 'hero7Body'; body.frustumCulled = false; body.renderOrder = 2;
  const nubs = [-1, 1].map((s) => { const n = new THREE.Mesh(shellGeometry(28, 18, P.shells), mat); n.name = 'hero7Nub'; n.frustumCulled = false; n.renderOrder = 2; n.userData.s = s; return n; });
  group.add(body, ...nubs);
  let attached = null, waterK = 1;
  const sync = () => {
    U.uN.value = P.shells; U.uLen.value = P.len; U.uComb.value = P.comb; U.uDroop.value = P.droop; U.uPole.value.set(...P.pole);
    U.uDens.value.set(...P.dens); U.uClump.value.set(P.clump.dens, P.clump.k, P.clump.len, P.clump.shade); U.uRad.value = P.rad; U.uLenVar.value = P.lenVar; U.uSoft.value = P.soft;
    U.uRamp.value.set(...P.ramp); U.uVary.value = P.vary; U.uAO.value = P.ao; U.uTip.value = P.tip; U.uSpec.value = P.spec; U.uSpecExp.value = P.specExp; U.uRim.value = P.rim;
    U.uBase.value.setRGB(...P.base); U.uLower.value.setRGB(...P.lower); U.uUpper.value.setRGB(...P.upper); U.uTop.value.setRGB(...P.top); U.uLight.value.set(...P.light);
    for (const n of nubs) { const N = P.nub; n.position.set(n.userData.s * N.x * P.R, N.y * P.R, N.z * P.R); n.scale.setScalar(N.r * P.R); }
    body.scale.setScalar(P.R);
  };
  P.sync = sync; sync();
  const tris = (body.geometry.index.count / 3 + 2 * nubs[0].geometry.index.count / 3) * P.shells;
  report.parts.push(`hero7: fur body + 2 nubs, ${P.shells} shells, ${tris} triangles, 3 draw calls`);
  function update(dt, time, phase, m) {
    if (!m || !m.root) return;
    if (attached !== m.root) { if (group.parent) group.parent.remove(group); m.root.add(group); attached = m.root; }
    sync();
    const on = phase === 'running';
    group.visible = on;
    if (typeof window !== 'undefined' && window.__bwS56HeroR) { if (on) window.__bwS56HeroR.value.set(...P.contact); else window.__bwS56HeroR.value.set(0.66, 0.6); }
    if (P.hideOld && m.squash) m.squash.visible = !on;
    if (!on) return;
    // his drawn motion: the tilt's rotation (roll, pitch, lean, yaw, spin), the squash's stretch and swim bob, the water line from the tilt's sink
    // in the water: the body centre sits P.y from the water line (tilt.position.y + sink); in the air (the game's heroOff eases to 0) it eases
    // to the old body's place (the root), at the same rate as the game's own sink (dt * 14), so jumps keep their height and stay in frame
    waterK += ((m.air ? 0 : 1) - waterK) * Math.min(1, dt * 14);
    const cy = m.tilt.position.y + (P.sink + P.y) * waterK + P.airY * (1 - waterK);
    group.position.set(m.tilt.position.x, cy + (m.squash ? m.squash.position.y : 0), m.tilt.position.z);
    group.quaternion.copy(m.tilt.quaternion);
    if (m.squash) group.scale.copy(m.squash.scale); else group.scale.set(1, 1, 1);
  }
  return { update, group, tris };
}
