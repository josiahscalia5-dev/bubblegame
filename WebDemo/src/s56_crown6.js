// crown6 (9 November 2026, session ddf175f2, the coordinator; part of `fin6`, the Screen 6 finishing pass). The approved Screen 6's WHITE SPLASH
// CROWN round the swimming mascot: spray blades rising at his sides and a broken foam ring at his waterline (the approved: x 0.22-0.35 and
// 0.62-0.78, y 0.65-0.78; the art director and the water lane: "no splash crown", the pale ring round him 7.9 % vs the approved 33.4 %).
// Built directly in three.js: ~40 camera-facing spray blades (instanced, one draw call; a ragged splash shape drawn in the fragment shader,
// animated height and flicker) on a ring round his body, tallest at his sides, and a foam annulus (noise-broken) on the water. It rides his
// root (lanes, jumps) at the water line and fades out while he is in the air. Drawn only: no gameplay effect. Without fin6 nothing is built.
import * as THREE from 'three';
const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const CROWN6_ON = LIST.includes('s56') && LIST.includes('level1') && LIST.includes('fin6') && !LIST.includes('nocrown6');

export const CROWN6 = {
  n: 84, R: 0.54, y: -0.4, foamY: 0.12,   // (y: measured in game, -0.30 too high / -0.50 hidden; foamY: the foam lifted over the wave troughs)   // blades, ring radius (m, round his drawn body), height offset of the ring over the water line
  h: [0.14, 0.40], w: [0.07, 0.15], side: 1.25, back: 0.0,   // blade height / width ranges (m); side: extra height at his sides; back: height share on the far side
  speed: 5.0, color: [1.05, 1.12, 1.25], edge: [0.55, 0.78, 1.05],   // flicker speed; core white (slightly HDR so the bloom glints it); edge blue-white
  foam: { r: [0.38, 0.92], alpha: 1.0, scale: 9.0 },   // the foam annulus: radii (m), opacity, noise scale
  sink: 0.78,   // = S56.hero6.sink: his drawn body sits this much below the water line in his root frame
};
if (CROWN6_ON && typeof window !== 'undefined') window.__bwCrown6 = CROWN6;

function rnd(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/** Built once; update(dt, time, m) every frame (m = the game's mascot state: root, tilt, air). */
export function buildCrown6() {
  const P = CROWN6, r = rnd(0xc6c6), group = new THREE.Group(); group.name = 'crown6';
  // ---------------- spray blades: instanced camera-facing quads
  const quad = new THREE.PlaneGeometry(1, 1).translate(0, 0.5, 0);   // bottom edge at y 0
  const g = new THREE.InstancedBufferGeometry(); g.index = quad.index; g.setAttribute('position', quad.attributes.position); g.setAttribute('uv', quad.attributes.uv);
  const n = P.n, aP = new Float32Array(n * 4);   // angle, height, width, phase
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + (r() - 0.5) * 0.12, sideK = Math.abs(Math.sin(a)), backK = Math.cos(a) > 0.15 ? P.back : 1.0;   // (the far side, behind his body: his fur does not hide it)
    aP[i * 4] = a; aP[i * 4 + 1] = (P.h[0] + (P.h[1] - P.h[0]) * r()) * (0.55 + P.side * sideK) * backK; aP[i * 4 + 2] = P.w[0] + (P.w[1] - P.w[0]) * r(); aP[i * 4 + 3] = r() * 6.283;
  }
  const rr = Array.from({ length: n }, () => [r(), r(), r()]);
  const fill = () => { for (let i = 0; i < n; i++) { const a = aP[i * 4], sideK = Math.abs(Math.sin(a)), backK = Math.cos(a) > 0.15 ? P.back : 1.0;
    aP[i * 4 + 1] = (P.h[0] + (P.h[1] - P.h[0]) * rr[i][0]) * (0.55 + P.side * sideK) * backK; aP[i * 4 + 2] = P.w[0] + (P.w[1] - P.w[0]) * rr[i][1]; } };
  fill();
  const attrP = new THREE.InstancedBufferAttribute(aP, 4); g.setAttribute('aP', attrP); g.instanceCount = n;
  P.refill = () => { fill(); attrP.needsUpdate = true; };
  const uT = { value: 0 }, uR = { value: P.R }, uFade = { value: 1 }, uCol = { value: new THREE.Color(...P.color) }, uEdge = { value: new THREE.Color(...P.edge) }, uSpeed = { value: P.speed };
  const blades = new THREE.Mesh(g, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uT, uR, uFade, uCol, uEdge, uSpeed },
    vertexShader: /* glsl */ `
      attribute vec4 aP; uniform float uT, uR, uSpeed; varying vec2 vQ; varying float vPh;
      void main() {
        float a = aP.x, h = aP.y * (0.7 + 0.3 * sin(uT * uSpeed + aP.w)), w = aP.z;
        vec4 c = viewMatrix * modelMatrix * vec4(sin(a) * uR, 0.0, cos(a) * uR, 1.0);
        float lean = sin(a) * 0.35;   // the side blades lean outward
        c.xy += vec2((position.x + lean * position.y) * w * 2.0, position.y * h);
        vQ = vec2(position.x * 2.0, position.y); vPh = aP.w;
        gl_Position = projectionMatrix * c; }`,
    fragmentShader: /* glsl */ `
      uniform float uT, uFade; uniform vec3 uCol, uEdge; varying vec2 vQ; varying float vPh;
      float hsh(float x) { return fract(sin(x * 91.7 + vPh * 13.1) * 43758.5); }
      void main() {
        float v = vQ.y, u = vQ.x;
        float wv = pow(1.0 - v, 0.55) * (0.75 + 0.25 * sin(v * 23.0 + vPh * 5.0 + uT * 3.0));   // ragged splash outline, narrowing upward
        float a = smoothstep(wv, wv - 0.18, abs(u)) * (1.0 - smoothstep(0.7, 1.0, v));
        a *= 0.65 + 0.35 * step(0.35, hsh(floor(v * 9.0) + floor(u * 3.0)));               // broken streaks
        vec3 c = mix(uEdge, uCol, smoothstep(0.9, 0.2, abs(u) / max(wv, 1e-3)));
        gl_FragColor = vec4(c, a * uFade);
      }`,
  }));
  blades.frustumCulled = false; blades.renderOrder = 5; blades.name = 'crown6Blades';
  // ---------------- the foam ring on the water
  const ring = new THREE.RingGeometry(P.foam.r[0], P.foam.r[1], 64, 4).rotateX(-Math.PI / 2);
  const uFoam = { value: new THREE.Vector3(P.foam.r[0], P.foam.r[1], P.foam.alpha) }, uFS = { value: P.foam.scale };
  const foam = new THREE.Mesh(ring, new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { uT, uFade, uFoam, uFS, uCol },
    vertexShader: 'varying vec3 vP; void main() { vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */ `
      uniform float uT, uFade, uFS; uniform vec3 uFoam, uCol; varying vec3 vP;
      float h2(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      float n2(vec2 p) { vec2 i = floor(p), q = fract(p); q = q * q * (3.0 - 2.0 * q); return mix(mix(h2(i), h2(i + vec2(1, 0)), q.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), q.x), q.y); }
      void main() {
        float rr = length(vP.xz), t = (rr - uFoam.x) / (uFoam.y - uFoam.x), ang = atan(vP.x, vP.z);
        float k = n2(vP.xz * uFS + vec2(uT * 0.7, -uT * 0.5)) * 0.6 + n2(vP.xz * uFS * 2.3 - vec2(uT, uT * 0.3)) * 0.4;
        float side = 0.55 + 0.45 * abs(sin(ang));
        float a = smoothstep(0.42, 0.62, k * (1.15 - t) * side + 0.18 * (1.0 - t)) * (1.0 - smoothstep(0.75, 1.0, t)) * uFoam.z;
        gl_FragColor = vec4(uCol * (0.85 + 0.2 * k), a * uFade);
      }`,
  }));
  foam.frustumCulled = false; foam.renderOrder = 4; foam.name = 'crown6Foam';
  foam.position.y = P.foamY; group.add(foam, blades);
  let attached = null;
  function update(dt, time, m, phase) {
    if (!m || !m.root) return;
    if (attached !== m.root) { if (group.parent) group.parent.remove(group); m.root.add(group); attached = m.root; }
    uT.value = time; uR.value = P.R; uCol.value.setRGB(...P.color); uEdge.value.setRGB(...P.edge); uSpeed.value = P.speed;
    uFoam.value.set(P.foam.r[0], P.foam.r[1], P.foam.alpha); uFS.value = P.foam.scale; foam.position.y = P.foamY;
    // the water line in his root frame: his drawn body (tilt) is sunk by `sink` below it
    const wl = (m.tilt ? m.tilt.position.y : 0) + P.sink;
    group.position.set(0, wl + P.y, 0);
    const swimming = !phase || phase === 'running';   // (Tap to Start, pause overlays and Level Complete pose him differently: no crown there)
    const target = m.air || !swimming ? 0 : 1; uFade.value += (target - uFade.value) * Math.min(1, dt * 8); if (!swimming && phase === 'complete') uFade.value = 0;
    group.visible = uFade.value > 0.02;
  }
  return { update, group };
}
