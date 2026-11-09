// six2 TUNNEL + WASHER LOOK (session 9ee07777): the washer's materials (reference 04) and scene 5's tunnel richness (reference 05): ring arches, tanks,
// pipes, lamps (the drum wall itself is SIX2_DRUM_END in opening3d.js). Owned by the lighting specialist; looks only.
//
// Pass 4/5 (the user's Scenes 4 + 5 mandate, 9 November), measured causes:
//   scene 4: the Tripo washer's own texture is right (gold #eb9432, pink #e1458b), but it rendered lemon gold (hue 62-73) and salmon / pale pink:
//     (a) the opening's cyan porthole light (glowL, up to 6.6 at 0.4 m in FRONT of the glass) washed the gold ring and the pink round it;
//     (b) its ORM marks pink and gold alike as polished (roughness 0.06) quarter-metal, so both mirror the lavender environment.
//     -> glowL moves behind the glass in scene 4 (it lights the drum and him, not the washer's front); the Tripo materials get a per-texel look:
//        gold texels deep orange polished metal, pink texels saturated glossy paint (richPinkGold, no texture or model change).
//   scene 5: the props existed but sat outside the narrow portrait camera (33 deg wide): the banks' housings were only on screen 3-7 m away (each
//     1-3 % of the frame, low at the waterline), the gear 1 m from the camera (cut by the right edge), the arches thin, the lamps flat beige
//     dots, the crown pipes crossing the view as two diagonal bars; the far end a white disc (vortex.cap, 84-93 % white).
//     -> the housings re-placed as two dense banks close to his channel (1.25 x, on the water), glowing violet tanks with orbs and gold elbow
//        pipes on them, gold railings on both banks, the gear 4.4 m in on the right wall (0.6 m), thick pink arches with gold edges and amber lamp
//        bars, hanging ceiling lamps, more bubbles, the cap a violet glow.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { six2Sm as sm, six2V as V } from './opening_six2.js';

// seq7 (session 3849f5c8, lane arch56, CANDIDATE, not approved): the washer-to-tunnel transition. Without `seq7` nothing below the SEQ7 checks runs.
//   Cause (measured): the room's back wall (z -1.3) stands INSIDE the drum tube (d 1.57 m behind the porthole), its curtains at d ~1.41 and the
//   window's light shafts down to d 1.094, so through the porthole the room was what showed behind him (scenes 2-4) and at real 8.5 s.
//   Fix: (1) a closed, perforated drum back (approved 03 / 04) at d 1.02 (dish centre 1.07, in front of every room piece), opaque;
//   (2) the room's MESHES (never its lights: the washer's light must not jump) hidden once the washer's face covers the whole frame
//       (the four frame corners land inside a conservative rectangle of the face; measured story ~7.79 = real ~8.29 s);
//   (3) the fly-through: its holes glow (the tunnel's light behind), a six-blade iris opens onto the tunnel's violet light (story 7.45-7.82),
//       and only once the room is hidden does that light dissolve, centre first, into the real tunnel (discard, opaque: no sorting issues).
const LIST7 = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const SEQ7_ON = LIST7.includes('seq7');

// every number (window.__bwSix2Tunnel in the browser)
export const SIX2T = {
  glowIn: { z: -0.08, k: 0.32 },   // scene 4: glowL behind the glass (porthole z + this), its intensity x k
  rich: { goldTint: [1.0, 0.8, 0.58], goldMetal: 0.8, goldRough: 0.3, goldGlow: 0.35, pinkTint: [0.95, 0.74, 1.0], pinkMetal: 0.05, pinkRough: 0.32 },
  banks: { scale: 1.25, x: 0.54, yaw: 0.12, left: [2.75, 3.6, 4.45, 5.3, 6.15, 7.0], right: [2.75, 3.6, 5.3, 6.15, 7.0, 7.85] },
  gear: { d: 4.4, x: 0.6, y: 0.13, diam: 0.6, turn: 0.85 },
  arches: { from: 2.2, step: 0.62, to: 8.7, lampAt: 0.72 },
  // seq7 only: the drum back (d m behind the porthole, dish m deeper at its centre), its holes' glow, the iris, the dissolve (story seconds),
  // the washer face's conservative rectangle [x0, x1, y0, y1] on the plane z = faceZ (measured on the real 6.7 s frame, inset 0.08 m)
  back: { d: 1.02, dish: 0.05, holes: [7.25, 7.5], open: [7.45, 7.82], fade: 0.13, from: 7.3, face: [-0.12, 0.74, 0.2, 1.0], faceZ: 0.26 },
};

export function installSix2Tunnel(ctx) {
  const { scene, env, washer, six, vortex, glowL, OPENING3D } = ctx, P = OPENING3D.porthole, T = SIX2T;
  if (typeof window !== 'undefined') window.__bwSix2Tunnel = T;
  const wy = OPENING3D.waterY;

  // ------------------------------------------------ the washer (scene 4) and the tunnel machinery: rich pink and deep gold per texel
  const R = T.rich, f3 = (a) => a.map((x) => x.toFixed(3)).join(', ');
  const richPinkGold = (m) => {
    if (!m || !m.isMeshStandardMaterial || m.userData.six2Rich) return; m.userData.six2Rich = true;
    m.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        vec3 t6 = diffuseColor.rgb; float mx6 = max(t6.r, max(t6.g, t6.b)), sat6 = (mx6 - min(t6.r, min(t6.g, t6.b))) / max(mx6, 1e-4), gr6 = t6.g / max(t6.r, 1e-4);
        float gold6 = step(t6.b, t6.g) * step(t6.g, t6.r) * smoothstep(0.08, 0.18, gr6) * (1.0 - smoothstep(0.8, 0.97, gr6)) * smoothstep(0.45, 0.65, sat6) * smoothstep(0.04, 0.12, mx6);
        float pink6 = step(t6.g, t6.b) * step(t6.b, t6.r) * smoothstep(0.4, 0.6, sat6);
        diffuseColor.rgb = mix(diffuseColor.rgb, t6 * vec3(${f3(R.goldTint)}), gold6); diffuseColor.rgb = mix(diffuseColor.rgb, t6 * vec3(${f3(R.pinkTint)}), pink6);
        metalnessFactor = mix(mix(metalnessFactor, ${R.goldMetal.toFixed(3)}, gold6), ${R.pinkMetal.toFixed(3)}, pink6);
        roughnessFactor = mix(mix(roughnessFactor, ${R.goldRough.toFixed(3)}, gold6), ${R.pinkRough.toFixed(3)}, pink6);`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance *= mix(1.0, ${R.goldGlow.toFixed(3)}, gold6);`);
    };
    m.customProgramCacheKey = () => 'six2rich:' + JSON.stringify(T.rich);   // (shader review, session ac4e3449: the key follows the tuned numbers) m.needsUpdate = true;
  };
  const deepGold = new THREE.MeshStandardMaterial({ color: 0xd9822a, metalness: 0.85, roughness: 0.3, envMap: env, envMapIntensity: 0.9, emissive: 0x4a1e00, emissiveIntensity: 0.4 });
  Promise.resolve(typeof window !== 'undefined' && window.__bwTripo3Ready).then(() => {
    const mats = new Set();
    for (const n of ['washerTripo3', 'doorTripo3']) { const o = washer.g.getObjectByName(n); if (o) o.traverse((k) => { if (k.isMesh) mats.add(k.material); }); }
    for (const h of six.housings || []) h.traverse((k) => { if (k.isMesh && k.parent && k.visible) mats.add(k.material); });
    if (six.gear) six.gear.traverse((k) => { if (k.isMesh && k.visible) mats.add(k.material); });
    for (const m of mats) richPinkGold(m);
    // the code gold left on the washer (the hinge plate, its rivets and knuckles): the deep orange gold
    washer.g.traverse((k) => { if (k.isMesh && k.visible && k.material === washer.goldM) k.material = deepGold; });
  });

  // ------------------------------------------------ the drum's far end: a violet glow, not a white disc (vortex.cap; reference 05's luminous violet end)
  vortex.cap.material.fragmentShader = `uniform float uGlow; varying vec2 vUv; void main() { float r = length(vUv - 0.5) * 2.0;
    vec3 c = mix(vec3(0.94, 0.86, 1.0), vec3(0.72, 0.52, 1.0), smoothstep(0.0, 0.14 + 0.1 * uGlow, r)); c = mix(c, vec3(0.44, 0.27, 0.84), smoothstep(0.3, 0.95, r));
    float q6 = (r - 0.55) / 0.08; c += vec3(0.25, 0.08, 0.2) * exp(-q6 * q6);   // a pink ring of distant lamps
    gl_FragColor = vec4(c, 1.0); }`;
  vortex.cap.material.needsUpdate = true;

  // ------------------------------------------------ scene 5 (reference 05): the machinery on both banks, close to his channel
  const radT = (d) => THREE.MathUtils.lerp(OPENING3D.rOpen, 0.42, sm(0.0, 0.7, d)) + 0.43 * sm(1.6, 2.6, d);
  const B = T.banks, hs = six.housings || [];
  const slots = [...B.left.map((d) => [-1, d]), ...B.right.map((d) => [1, d])];
  hs.forEach((g, i) => { const [side, d] = slots[i % slots.length]; g.position.set(P.x + side * B.x, wy - 0.02, P.z - d); g.rotation.set(0, side * B.yaw, 0); g.scale.setScalar(B.scale); });
  if (six.gear) { const G = T.gear; six.gear.position.set(P.x + G.x, P.y + G.y, P.z - G.d); six.gear.rotation.set(0, -Math.PI / 2 + G.turn, 0); six.gear.scale.setScalar(1.35 * G.diam / 0.8); }
  // the opening's flat beige crown dots and its single left rail make way for the lamps and both rails below
  const bubM = []; if (six.tun) for (const c of six.tun.children) {
    if (c.isMesh && c.material.isMeshBasicMaterial && c.geometry.type === 'SphereGeometry') c.visible = false;
    else if (c.isMesh && (c.geometry.type === 'TubeGeometry' || (c.geometry.type === 'CylinderGeometry' && c.geometry.parameters.radiusTop < 0.01))) c.visible = false;
    else if (c.isMesh && c.material.isShaderMaterial) bubM.push(c.material);
  }

  const T5 = new THREE.Group(); T5.name = 'six2TunnelArches'; scene.add(T5);
  const pinkA = new THREE.MeshStandardMaterial({ color: 0xff4fb8, emissive: 0xc0208a, emissiveIntensity: 0.55, metalness: 0.5, roughness: 0.28, envMap: env, envMapIntensity: 0.8 });
  const tankM = new THREE.MeshStandardMaterial({ color: 0xc89aff, emissive: 0x9a4cff, emissiveIntensity: 1.25, roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.86, envMap: env });
  const lampM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.75, 1.05, 0.42) });
  const orbM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.7, 1.0, 1.9) });
  const haloTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.25, 'rgba(255,255,255,0.55)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const halo = (col, op) => new THREE.SpriteMaterial({ map: haloTex, color: col, transparent: true, opacity: op, blending: THREE.AdditiveBlending, depthWrite: false });
  const haloLamp = halo(0xffa040, 0.55), haloOrb = halo(0xd070ff, 0.6), haloCeil = halo(0xffb060, 0.6);
  const parts = new Map();   // static pieces, merged per material below (few draw calls)
  const put = (geo, mat, pos, rot = null, scl = null) => { const m = new THREE.Object3D(); m.position.copy(pos); if (rot) m.rotation.copy(rot); if (scl) m.scale.copy(scl); m.updateMatrix();
    const g = geo.clone(); g.applyMatrix4(m.matrix); if (!parts.has(mat)) parts.set(mat, []); parts.get(mat).push(g); };
  const sprite = (mat, pos, s) => { const sp = new THREE.Sprite(mat); sp.position.copy(pos); sp.scale.setScalar(s); T5.add(sp); return sp; };
  // the arches: thick pink bands with gold edges from bank to bank, two amber lamp bars each
  const A = T.arches;
  for (let d = A.from; d <= A.to; d += A.step) {
    const r = radT(d) * 0.985, half = Math.acos(THREE.MathUtils.clamp((wy - P.y) / r, -1, 1)), arc = 2 * half, z = P.z - d;
    const rz = new THREE.Euler(0, 0, Math.PI / 2 - half);
    put(new THREE.TorusGeometry(r - 0.02, 0.032, 8, 56, arc), pinkA, V(P.x, P.y, z), rz, V(1, 1, 2.1));
    for (const k of [-1, 1]) put(new THREE.TorusGeometry(r - 0.055, 0.011, 6, 56, arc), deepGold, V(P.x, P.y, z + k * 0.062), rz);
    for (const k of [-1, 1]) { const ph = k * A.lampAt, rr = r - 0.07, p = V(P.x + Math.sin(ph) * rr, P.y + Math.cos(ph) * rr, z);
      put(new THREE.CapsuleGeometry(0.02, 0.15, 4, 10), lampM, p, new THREE.Euler(0, 0, -ph - Math.PI / 2)); sprite(haloLamp, p, 0.32); }
  }
  // hanging ceiling lamps between the arches
  for (let d = A.from + A.step / 2; d <= A.to; d += A.step * 2) {
    const top = P.y + radT(d) * 0.985, z = P.z - d;
    put(new THREE.CylinderGeometry(0.006, 0.006, 0.06, 6), deepGold, V(P.x, top - 0.03, z));
    put(new THREE.CylinderGeometry(0.035, 0.05, 0.06, 16), deepGold, V(P.x, top - 0.08, z));
    put(new THREE.SphereGeometry(0.034, 14, 10), lampM, V(P.x, top - 0.125, z)); sprite(haloCeil, V(P.x, top - 0.125, z), 0.42);
  }
  // pipes along the upper walls, with flanges at each arch
  for (const side of [-1, 1]) {
    const ph = side * 1.05, pts = []; for (let d = 2.4; d <= 8.9; d += 0.25) { const r = radT(d) * 0.94; pts.push(V(P.x + Math.sin(ph) * r, P.y + Math.cos(ph) * r, P.z - d)); }
    put(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 80, 0.022, 8), deepGold, V(0, 0, 0));
    for (let d = A.from + A.step; d <= 8.7; d += A.step) { const r = radT(d) * 0.94; put(new THREE.TorusGeometry(0.03, 0.009, 6, 14), deepGold, V(P.x + Math.sin(ph) * r, P.y + Math.cos(ph) * r, P.z - d)); }
  }
  // on every housing: a glowing violet tank (gold caps, a bright orb) and a gold elbow pipe into the wall
  const hTop = wy - 0.02 + 0.31 * B.scale, tanks = [];
  for (const [side, d] of slots.slice(0, hs.length || slots.length)) {
    const x = P.x + side * (B.x + 0.02), z = P.z - d, y0 = hTop + 0.015, th = 0.22;
    put(new THREE.CylinderGeometry(0.068, 0.068, th, 20), tankM, V(x, y0 + th / 2, z));
    for (const y of [y0, y0 + th]) put(new THREE.CylinderGeometry(0.08, 0.08, 0.03, 20), deepGold, V(x, y, z));
    put(new THREE.SphereGeometry(0.032, 12, 10), orbM, V(x, y0 + th / 2, z)); tanks.push(sprite(haloOrb, V(x, y0 + th / 2, z), 0.34));
    const yt = y0 + th + 0.015, yw = yt + 0.13, rw = radT(d) * 0.97, xw = P.x + side * Math.sqrt(Math.max(0, rw * rw - (yw - P.y) ** 2));
    put(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(V(x, yt, z), V(x, yw, z), V(xw, yw, z)), 12, 0.02, 8), deepGold, V(0, 0, 0));
  }
  // gold railings along both banks (on the housings' inner edge) with posts
  for (const side of [-1, 1]) {
    const x = P.x + side * (B.x - 0.13), pts = [V(x, hTop + 0.075, P.z - 2.4), V(x, hTop + 0.075, P.z - 8.4)];
    put(new THREE.CylinderGeometry(0.009, 0.009, 6.0, 6), deepGold, pts[0].clone().lerp(pts[1], 0.5), new THREE.Euler(Math.PI / 2, 0, 0));
    for (let d = 2.4; d <= 8.4; d += 0.3) put(new THREE.CylinderGeometry(0.006, 0.006, 0.075, 6), deepGold, V(x, hTop + 0.037, P.z - d));
  }
  for (const [mat, list] of parts) { const m = new THREE.Mesh(mergeGeometries(list), mat); m.name = 'six2T5_' + (mat === pinkA ? 'arches' : mat === deepGold ? 'gold' : mat === tankM ? 'tanks' : 'lamps'); T5.add(m); }
  // more soap bubbles drifting in the tunnel (the opening's own bubble material), clear of his face
  const bubs = [];
  if (bubM.length) { let q = 0x6b1d; const rr = () => { q = (q * 1664525 + 1013904223) >>> 0; return q / 4294967296; };
    for (let i = 0; i < 16; i++) { const side = i % 2 ? 1 : -1, d = 2.5 + rr() * 4.8, low = rr() < 0.4, x = P.x + side * (low ? 0.3 + rr() * 0.3 : rr() * 0.6), y = low ? wy + 0.12 + rr() * 0.25 : P.y + 0.15 + rr() * 0.45;
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.022 + rr() * 0.035, 16, 12), bubM[0]); b.position.set(x, y, P.z - d); b.userData.y0 = y; b.userData.ph = rr() * 6.28; T5.add(b); bubs.push(b); } }

  // ------------------------------------------------ seq7: the closed drum back, its iris and the dissolve into the tunnel (see the header)
  const S7 = SEQ7_ON ? (() => {
    const K = T.back, R = THREE.MathUtils.lerp(OPENING3D.rOpen, 0.42, sm(0.0, 0.7, K.d)) + 0.43 * sm(1.6, 2.6, K.d) + 0.02;   // (buildVortex's radius at d, a little over)
    const geo = new THREE.CircleGeometry(R, 120, 0, Math.PI * 2); { const pa = geo.attributes.position; for (let i = 0; i < pa.count; i++) { const q = Math.hypot(pa.getX(i), pa.getY(i)) / R; pa.setZ(i, -K.dish * (1 - q * q)); } }
    // (CircleGeometry has one ring: subdivide radially so the dish is curved)
    const ring = new THREE.RingGeometry(0.0005, R, 120, 24); { const pa = ring.attributes.position; for (let i = 0; i < pa.count; i++) { const q = Math.hypot(pa.getX(i), pa.getY(i)) / R; pa.setZ(i, -K.dish * (1 - q * q)); } }
    geo.dispose();
    const U = { uTime: vortex.U.uTime, uGlow: vortex.U.uGlow, uFill: vortex.U.uFill, uR: { value: R }, uOpen: { value: 0 }, uDiss: { value: 0 }, uHoles: { value: 0 } };
    const mat = new THREE.ShaderMaterial({ uniforms: U,
      vertexShader: 'uniform float uR; varying vec2 vXY; void main() { vXY = position.xy / uR; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: /* glsl */ `uniform float uTime, uGlow, uFill, uOpen, uDiss, uHoles; varying vec2 vXY;
        float h7(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        float n7(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h7(i), h7(i + vec2(1.0, 0.0)), f.x), mix(h7(i + vec2(0.0, 1.0)), h7(i + vec2(1.0, 1.0)), f.x), f.y); }
        void main() {
          float r = length(vXY), th = atan(vXY.y, vXY.x), up = vXY.y, out7 = smoothstep(1.8, 2.7, cameraPosition.z);
          // the dissolve into the tunnel (only once the room is hidden): a ragged front from the centre outward
          float e = r + n7(vec2(th * 3.0, r * 6.0)) * 0.3 + n7(vec2(th * 9.0, r * 14.0)) * 0.12 - (uDiss * 1.75 - 0.3);
          if (uDiss > 0.0 && e < 0.0) discard;
          // perforated lavender-silver drum metal, lit from above, darker toward the hub (approved 03)
          vec3 m = mix(vec3(0.19, 0.15, 0.46), vec3(0.58, 0.52, 0.88), smoothstep(0.1, 0.95, r) * (0.72 + 0.28 * up));
          m += vec3(0.16, 0.14, 0.24) * smoothstep(0.1, 0.95, up) * smoothstep(0.3, 0.9, r);
          float st = pow(0.5 + 0.5 * cos(th * 7.0 + 0.4), 12.0) * smoothstep(0.25, 0.8, r); m += vec3(0.22, 0.2, 0.32) * st * (0.4 + 0.6 * smoothstep(-0.3, 0.8, up));
          m = mix(m, vec3(0.70, 0.64, 0.95), smoothstep(0.9, 0.94, r) * 0.6); m += vec3(0.25, 0.2, 0.3) * exp(-pow((r - 0.935) / 0.012, 2.0));   // the back's rolled edge
          float dr = 0.082, ri = floor(r / dr), rc = (ri + 0.5) * dr, nh = max(6.0, floor(6.2832 * rc / 0.082));
          vec2 hc = vec2(fract(th / 6.2832 * nh + 0.5 * mod(ri, 2.0)) - 0.5, (r - rc) / dr); float hr = length(hc * vec2(1.0, 1.15));
          float hole = (1.0 - smoothstep(0.24, 0.3, hr)) * step(1.5, ri) * step(ri, 10.5);
          m += vec3(0.28, 0.24, 0.40) * smoothstep(0.3, 0.33, hr) * (1.0 - smoothstep(0.33, 0.42, hr)) * clamp(0.5 - hc.y * 2.5, 0.0, 1.0) * step(1.5, ri) * step(ri, 10.5);   // lit lips
          m = mix(m, mix(vec3(0.09, 0.05, 0.24), vec3(0.80, 0.62, 1.0), uHoles), hole * 0.9);
          float b = fract((th + 2.4 * r) * 0.95493);   // six iris blades (a pinwheel), their seams
          m = mix(m, vec3(0.10, 0.06, 0.26), (1.0 - smoothstep(0.0, 0.035, min(b, 1.0 - b))) * smoothstep(0.12, 0.16, r) * (1.0 - smoothstep(0.84, 0.88, r)) * 0.7);
          m = mix(m, mix(vec3(0.16, 0.12, 0.40), vec3(0.42, 0.34, 0.78), smoothstep(-0.12, 0.12, up)), 1.0 - smoothstep(0.12, 0.135, r));   // the hub
          m += vec3(0.55, 0.42, 0.25) * exp(-pow((r - 0.13) / 0.01, 2.0));   // its gold ring
          m = mix(m, mix(vec3(0.07, 0.09, 0.34), vec3(0.24, 0.30, 0.72), smoothstep(-0.8, 0.9, up)) + vec3(0.12, 0.10, 0.24) * st, out7 * 0.85 * (1.0 - hole * uHoles));   // from outside: the tube's deep navy
          // the water climbing round the drum (the tube's uFill swirl)
          float fl = -0.9 + uFill * 0.95 + 0.07 * sin(th * 3.0 - uTime * 2.4) * uFill;
          float sw = sin((r * 2.2 + th * 0.15915 + n7(vec2(th * 1.2 + uTime * 0.4, r * 3.0)) * 1.5 - uTime * 0.6) * 6.2832);
          vec3 bl = mix(vec3(0.02, 0.1, 0.78), vec3(0.08, 0.4, 1.0), smoothstep(-0.7, 0.3, sw)); bl = mix(bl, vec3(0.3, 0.9, 1.0), smoothstep(0.4, 0.95, sw) * 0.6);
          vec3 c = mix(bl, m, smoothstep(fl, fl + 0.18, up));
          // the iris: inside its aperture, the tunnel's violet light (the far end's glow, not white)
          float ap = uOpen * (1.0 + 0.22 * b);
          vec3 L = mix(vec3(0.92, 0.82, 1.0), vec3(0.70, 0.50, 0.98), smoothstep(0.0, 0.55, r)); L = mix(L, vec3(0.52, 0.34, 0.90), smoothstep(0.5, 1.0, r));
          float q = (r - 0.55) / 0.08; L += vec3(0.25, 0.08, 0.2) * exp(-q * q);
          c = mix(c, L, 1.0 - smoothstep(ap - 0.012, ap, r));
          c += vec3(0.5, 0.25, 0.55) * exp(-pow((r - ap) / 0.025, 2.0)) * step(0.001, uOpen);   // the blades' hot edge
          c += vec3(0.7, 0.4, 0.9) * (1.0 - smoothstep(0.0, 0.06, e)) * step(0.001, uDiss);   // the dissolve's glowing edge
          gl_FragColor = vec4(c, 1.0);
        }` });
    const back = new THREE.Mesh(ring, mat); back.name = 'seq7DrumBack'; back.position.set(P.x, P.y, P.z - K.d); scene.add(back);
    // the washer face covers the whole frame: the four frame corners land inside its rectangle (convex: the whole frame does)
    const _v = new THREE.Vector3(), cam = ctx.camera;
    const covered = () => { for (const [x, y] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { _v.set(x, y, 0.5).unproject(cam).sub(cam.position);
      if (_v.z > -1e-4) return false; const k = (K.faceZ - cam.position.z) / _v.z; if (k < 0) return false; const px = cam.position.x + _v.x * k, py = cam.position.y + _v.y * k;
      if (px < K.face[0] || px > K.face[1] || py < K.face[2] || py > K.face[3]) return false; } return true; };
    // the room's meshes (not its lights) off / on
    let roomGroup = null, roomOff = false;
    const setRoom = (off) => { if (off === roomOff) return; roomOff = off; if (!roomGroup) roomGroup = scene.getObjectByName('six2Room'); if (!roomGroup) return;
      for (const c of roomGroup.children) { if (c.isLight || !c.isObject3D || c.type === 'Object3D') continue; if (off) { c.userData.s7v = c.visible; c.visible = false; } else if (c.userData.s7v !== undefined) c.visible = c.userData.s7v; } };
    let lastS = -9, dk = 0;
    return { back, U, update(s) {
      const dt = Math.min(0.1, Math.max(0, s - lastS)); lastS = s; if (s < K.from) dk = 0;
      const cov = s >= K.from && covered(); setRoom(cov);
      if (cov) dk = Math.min(1, dk + dt / K.fade);
      const lit = THREE.MathUtils.clamp((vortex.U.uGlow.value - 0.55) / 0.45, 0, 1);
      U.uHoles.value = 0.2 * lit + 0.8 * sm(K.holes[0], K.holes[1], s);
      U.uOpen.value = 1.12 * sm(K.open[0], K.open[1], s); U.uDiss.value = dk;
      back.visible = dk < 1;
    } };
  })() : null;

  // per frame: s = the story clock (seconds after START), it = the idle clock
  const glow0 = glowL.position.clone();
  function update(s, it) {
    if (S7) S7.update(s);
    T5.visible = s > 7.6;
    // scene 4: the porthole light behind the glass (the drum and him glow; the washer's pink and gold front keeps its own colours)
    const inW = sm(4.9, 5.4, s) * (1 - sm(7.7, 8.0, s));
    glowL.position.set(glow0.x, glow0.y, glow0.z + (P.z + T.glowIn.z - glow0.z) * inW);
    glowL.intensity *= 1 + (T.glowIn.k - 1) * inW;
    if (!T5.visible) return;
    for (const t of tanks) t.material.opacity = 0.5 + 0.12 * Math.sin(it * 3.1);
    for (const b of bubs) b.position.y = b.userData.y0 + 0.04 * Math.sin(it * 0.9 + b.userData.ph);
  }
  return { update, group: T5 };
}
