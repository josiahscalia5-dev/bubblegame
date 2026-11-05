// ---------------------------------------------------------------- 3. soap bubbles throughout the tunnel (?s3=match only)
// Each bubble has a place in the drum's own frame (u along the path, an angle round the axis, a radius from it). Every frame
// it turns round the tube with the water, drifts toward the camera and rises a little (buoyancy), looping over its stretch of
// the drum, placed on the bent path with the track's frame (CPU, a table lookup each). Drawn as camera-facing discs in one
// instanced draw call, depth-tested (the walls, the water, the rim and the collectibles hide what is behind them): a clear
// body, a rainbow soap-film rim kept at least rimPx wide (so far ones read as small rings), a white glint up and to the left.
// In the same draw call, the white water streaks: short white crescents and dashes on the walls' water, along the bands (bent
// round the vanishing point) and turning with them. Faded where they would cover a collectible's face from in front (its
// screen circle and depth, set just before the draw with the real camera). Private random numbers; no textures.
function tunnelBubbles({ scene, TR, L, W, updaters, time, U }) {
  const B = MATCH_WATER.bubbles, FL = B.flecks, rnd = mulberryMw(0x6b0b5), TS = L.tunnelStart, TE = L.tunnelEnd;
  const axisH = W.WATER + W.AXIS_H, R0 = B.tube, D2R = Math.PI / 180;
  const pick = (zs) => { const tot = zs.reduce((t, z) => t + z[0], 0); let p = rnd() * tot; for (const z of zs) { if (p < z[0]) return z; p -= z[0]; } return zs[zs.length - 1]; };
  const R = (a) => a[0] + rnd() * (a[1] - a[0]);
  const span = (from, to) => [TS + from, to < 0 ? TE + to : TS + to];
  const list = [];
  for (let i = 0; i < B.count; i++) {
    const [, ang, rad, [from, to]] = pick(B.zones), [, size] = pick(B.sizes), [u0, u1] = span(from, to);
    list.push({ kind: 0, u0, u1, uB: R([u0, u1]), th: R(ang) * D2R, rho: R(rad) * R0, r: R(size), w2: 0, bend: 0, drift: R(B.drift), w: R(B.swirl), rise: R(B.rise), seed: rnd() });
  }
  for (let i = 0; i < FL.count; i++) {
    const [u0, u1] = span(FL.from[0], FL.from[1]);
    list.push({ kind: 1, u0, u1, uB: R([u0, u1]), th: R(FL.angles) * D2R, rho: R(FL.rho) * R0, r: R(FL.size[0]), w2: R(FL.size[1]), bend: R(FL.bend) * (rnd() < 0.75 ? -1 : 1),
      drift: R(B.drift), w: 0.075 * (0.85 + 0.3 * rnd()), rise: 0, seed: rnd() });
  }
  const n = list.length, quad = new THREE.PlaneGeometry(1, 1), g = new THREE.InstancedBufferGeometry();
  g.index = quad.index; g.setAttribute('position', quad.attributes.position);
  const aC = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4), aB = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4);
  aC.setUsage(THREE.DynamicDrawUsage); aB.setUsage(THREE.DynamicDrawUsage);
  g.setAttribute('aC', aC); g.setAttribute('aB', aB); g.instanceCount = n;
  const avoid = Array.from({ length: 10 }, () => new THREE.Vector4());
  const uVP = { value: new THREE.Vector2() }, uRes = { value: new THREE.Vector2(1, 1) };
  const mat = new THREE.ShaderMaterial({ uniforms: { uTime: time, uAvoid: { value: avoid }, uVP, uRes }, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    vertexShader: /* glsl */ `
attribute vec4 aC, aB;   // centre (world), radius or half length (m) | fade, seed, kind (0 bubble, 1 streak), streak half width (m) and bend packed
uniform vec4 uAvoid[10];  // the collectibles on screen: NDC centre, radius (NDC y units), view depth (0: none)
uniform vec2 uVP, uRes;   // the vanishing point (NDC), the drawing buffer (px)
varying vec2 vQ; varying float vA, vSeed, vKind, vRimW, vBend;
void main() {
  vec4 mv = viewMatrix * vec4(aC.xyz, 1.0), cc = projectionMatrix * mv;
  float k = step(0.05, cc.w) * aB.x;
  vec2 ndc = cc.xy / max(cc.w, 1e-3), asp = vec2(projectionMatrix[1][1] / projectionMatrix[0][0], 1.0);
  float pxPerM = projectionMatrix[1][1] / max(cc.w, 1e-3) * 0.5 * uRes.y;   // pixels per metre at the bubble
  float r = max(aC.w, ${f4(B.minPx)} / pxPerM);                              // never under minPx
  float rN = r * projectionMatrix[1][1] / max(cc.w, 1e-3);
  for (int i = 0; i < 10; i++) {   // (only from in front of the object: behind it the depth test hides the bubble)
    float dd = length((ndc - uAvoid[i].xy) * asp);
    float inFront = step(0.01, uAvoid[i].w) * step(cc.w, uAvoid[i].w);
    k *= mix(1.0, smoothstep(uAvoid[i].z * ${f4(B.avoid)} + rN * 0.5, uAvoid[i].z * ${f4(B.avoid)} + rN * 1.5 + 0.01, dd), inFront);
  }
  vKind = aB.z; vSeed = aB.y; vA = k;
  if (aB.z < 0.5) {
    mv.xy += position.xy * 2.0 * r;
    vRimW = clamp(${f4(B.rimPx)} / max(r * pxPerM, 0.5), 0.0, 0.9);
    vBend = 0.0;
  } else {
    // a streak along the band: its long side across the line to the vanishing point (on screen), bent round it
    vec2 radial = (ndc - uVP) * asp; float rl = length(radial);
    vec2 dirR = rl > 1e-4 ? radial / rl : vec2(0.0, 1.0), dirT = vec2(-dirR.y, dirR.x);
    float hw = max(fract(aB.w) * 0.1, 0.9 / pxPerM);          // half width (m), at least about a pixel
    vec2 off = dirT * position.x * 2.0 * r + dirR * position.y * 2.0 * hw * 2.5;
    mv.xy += off;
    vRimW = hw / r; vBend = (floor(aB.w) - 50.0) / 10.0;
  }
  gl_Position = projectionMatrix * mv;
  vQ = position.xy * 2.0;
}`,
    fragmentShader: /* glsl */ `
uniform float uTime;
varying vec2 vQ; varying float vA, vSeed, vKind, vRimW, vBend;
void main() {
  if (vA < 0.003) discard;
  if (vKind > 0.5) {   // a white streak: a tapered, slightly bent dash (y across it: 2.5 x its half width)
    float x = vQ.x, y = vQ.y * 2.5 - vBend * (x * x - 0.35);
    float body = exp(-y * y * 2.2) * (1.0 - smoothstep(0.55, 1.0, abs(x)));
    float a = clamp(body * 1.3, 0.0, 1.0) * ${f4(FL.alpha)} * vA;
    if (a < 0.004) discard;
    gl_FragColor = vec4(vec3(0.93, 0.98, 1.0) * a, a);
    return;
  }
  float rr = dot(vQ, vQ);
  if (rr > 1.0) discard;
  float rad = sqrt(rr);
  float f = 1.0 - sqrt(1.0 - rr);   // 0 at the middle .. 1 at the outline
  // the outline: a thin bright ring at least rimPx wide (far bubbles read as small rings), the soap film inside it
  float ring = smoothstep(1.0 - vRimW * 1.6, 1.0 - vRimW * 0.4, rad) * (1.0 - smoothstep(0.985, 1.0, rad));
  float rim = max(pow(f, 2.5), ring);
  float body = ${f4(B.body)} * (0.6 + 0.8 * pow(f, 1.5));
  vec3 film = 0.6 + 0.4 * cos(6.2832 * (f * 1.3 + vQ.y * 0.4 + vec3(0.0, 0.33, 0.67) + uTime * 0.05 + vSeed));
  vec3 col = vec3(0.85, 0.95, 1.0) * body + mix(vec3(1.0), film, ${f4(B.film)}) * rim * ${f4(B.rim)};
  vec2 g1 = vQ - vec2(-0.42, 0.42), g2 = vQ - vec2(0.4, -0.38);
  float gs = max(0.018, vRimW * vRimW * 0.5);
  float gl = (exp(-dot(g1, g1) / gs) + 0.45 * exp(-dot(g2, g2) / (gs * 0.45))) * ${f4(B.glint)};
  float a = clamp(body + rim * 0.8 + gl, 0.0, 1.0) * vA;
  gl_FragColor = vec4((col + vec3(1.0) * gl) * vA, a);
}` });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'mwTunnelBubbles'; mesh.frustumCulled = false; mesh.renderOrder = 4;
  scene.add(mesh);
  // the collectibles (as tunnel_r8_liquid.js finds them for their reflections): coins are LODs, the gem, socks and hearts are
  // groups at the scene's root with a halo sprite
  const objs = [];
  scene.traverse((o) => { if (o.isLOD || (o.isGroup && o.parent === scene && o.children.some((c) => c.isSprite && c.name === 'r2Halo'))) objs.push(o); });
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  const sm = (x, a, b) => THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
  updaters.push(() => {
    const t = time.value, c = aC.array, b = aB.array;
    for (let i = 0; i < n; i++) {
      const q = list[i], sp = q.u1 - q.u0;
      const u = q.u0 + ((((q.uB - q.u0 - q.drift * t) % sp) + sp) % sp);
      const th = q.th + q.w * t;
      // buoyancy: the bubble rises through its own band of heights and starts again lower (faded at both ends)
      const lift = q.rise ? ((q.seed * 7.0 + q.rise * t) % 0.6) : 0;
      const rho = q.rho * (1 + 0.03 * Math.sin(t * 1.3 + q.seed * 6.28));
      TR.frame(u, F);
      const x = rho * Math.cos(th), h = axisH + rho * Math.sin(th) + (q.kind ? 0 : 0.04 * Math.sin(t * 0.9 + q.seed * 9.0) + lift - 0.3);
      c[i * 4] = F.P.x + F.R.x * x + F.U.x * h; c[i * 4 + 1] = F.P.y + F.R.y * x + F.U.y * h; c[i * 4 + 2] = F.P.z + F.R.z * x + F.U.z * h;
      const din = u - TS;
      c[i * 4 + 3] = q.r * (1 + B.far[2] * sm(din, B.far[0], B.far[1]));
      // fade in and out at the ends of the loop and of the rise, and never under the water
      const fadeRise = q.rise ? sm(lift, 0, 0.08) * (1 - sm(lift, 0.5, 0.6)) : 1;
      b[i * 4] = sm(u, q.u0, q.u0 + 1.2) * (1 - sm(u, q.u1 - 1.2, q.u1)) * sm(h - W.WATER, 0.15, 0.35) * fadeRise;
      b[i * 4 + 1] = q.seed; b[i * 4 + 2] = q.kind;
      b[i * 4 + 3] = q.kind ? Math.round(50 + q.bend * 10) + Math.min(q.w2 * (1 + B.far[2] * sm(din, B.far[0], B.far[1])) / 0.1, 0.999) : 0;   // bend, half width / 0.1 m
    }
    aC.needsUpdate = true; aB.needsUpdate = true;
  });
  const wp = new THREE.Vector3(), near = [], vpW = new THREE.Vector3();
  mesh.onBeforeRender = (renderer, sc, cam) => {   // the collectibles' screen circles and the vanishing point, with the camera actually drawing
    near.length = 0;
    const P11 = cam.projectionMatrix.elements[5];
    for (const o of objs) {
      if (!o.visible) continue;
      o.getWorldPosition(wp);
      const dz = wp.clone().applyMatrix4(cam.matrixWorldInverse).z;
      if (dz > -0.3 || dz < -45) continue;
      wp.project(cam);
      if (Math.abs(wp.x) > 1.3 || Math.abs(wp.y) > 1.3) continue;
      const s = (o.isLOD ? 0.62 : 0.55) * Math.max(o.scale.x, o.scale.y, o.scale.z);
      near.push([wp.x, wp.y, s * P11 / -dz, -dz]);
    }
    near.sort((a, b2) => b2[2] - a[2]);
    for (let i = 0; i < avoid.length; i++) { const a = near[i]; if (a) avoid[i].set(a[0], a[1], a[2], a[3]); else avoid[i].set(0, 0, 0, 0); }
    TR.frame(Math.min((U && U.uHeroCam ? U.uHeroCam.value.z : TS) + 30, TE - 2), F);   // (the far axis point: the vanishing point)
    vpW.copy(F.P).addScaledVector(F.U, axisH).project(cam); uVP.value.set(vpW.x, vpW.y);
    renderer.getDrawingBufferSize(uRes.value);
  };
  return { count: B.count, flecks: FL.count, drawCalls: 1, triangles: n * 2, avoiding: objs.length };
}

