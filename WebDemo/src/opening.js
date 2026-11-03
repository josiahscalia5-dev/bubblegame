// The Screen 3 opening look: a separate, reversible cosmetic layer over the working game, so the
// start of Level 1 reads closer to the approved Screen 3. Nothing here touches gameplay: no
// collider, lane, speed, jump, camera, collectible, mission or HUD logic, and no original model file.
//
//   - portal:  a thick polished gold washer-door rim with bolts, a dark violet door seal with glowing cyan
//              rings in its folds, and a lavender wall facing over the castle's pastel funnel, all outside
//              the ride volume (nearest 2.2 m from the axis; the mascot reaches 1.8 m at the portal, the
//              camera is held within 1.61 m there) and all in front of the tunnel (z < tunnelStart).
//   - foam:    bubbly white froth wrapping the mascot's lower body (instanced foam blobs and small glossy
//              bubbles), curling side splashes and spray off the slide walls (own particle pool), and
//              bubble-lace foam, edge whitewater, flow streaks and a brighter caustic web on the slide
//              (water shader, slide only: uOpen x onPath, so the tunnel's water is computed as before).
//   - bubbles: glossy iridescent soap bubbles at three depths (big ones at the foreground edges, medium
//              ones by the brushes, small ones drifting toward the entrance).
//   - brushes: the Meshy side machinery larger and lower at the left edge (still 1.22 m from the lanes),
//              fibre detail on its bristles; of the two Screen 3 Meshy rollers, the extra one beside the
//              portal is hidden and the right one turned to show its fluffy side, not its axle end
//              (scene-instance transforms and per-instance material copies; the .glb files, the spin
//              axes and the tunnel's own rollers are unchanged).
//   - slide:   the code-built flume walls in a glassy aqua finish instead of pearly lavender.
//   - mascot:  the same Meshy mascot drawn a little more upright, with crisper strands and water droplets.
//   - light:   a targeted grade for the opening (vibrance, controlled highlights, depth), faded to zero
//              before the camera reaches the portal, so the tunnel renders exactly as before.
//
// The whole layer is built with a private random-number generator (withPrivateRandom), so building it
// never shifts the game's own random numbers (three.js draws one for every object it creates, and the
// coins' bobbing phases come from the same sequence). Gameplay is therefore frame-for-frame identical.
// Open the page with ?classic to turn the layer off and see the original opening.
import * as THREE from 'three';

export const OPENING_ON = !(typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search)));

/** A small seeded generator (mulberry32). */
export function makeRandom(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
/** Run fn with Math.random swapped for a private generator, then put the game's own one back. */
export function withPrivateRandom(rand, fn) {
  const saved = Math.random;
  Math.random = rand;
  try { return fn(); } finally { Math.random = saved; }
}

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function buildOpening(ctx) {
  const { scene, env, TR, L, W, mascot, camera, Particles, fxScale, waterU, grade, bubbles, rollers, sideMachinery, setSideMachinery, fur, mascotModel } = ctx;
  const rand = makeRandom(0x5c3e3);
  const root = new THREE.Group(); root.name = 'openingLook';
  scene.add(root);
  const AXIS = W.WATER + W.AXIS_H, TS = L.tunnelStart;
  const updaters = [];

  // ---------------------------------------------------------------- materials
  const gold = new THREE.MeshStandardMaterial({ color: 0xffc552, metalness: 1, roughness: 0.17, envMap: env, envMapIntensity: 1.55, emissive: 0x4a2a00, emissiveIntensity: 0.45 });
  const goldDeep = new THREE.MeshStandardMaterial({ color: 0xe8962e, metalness: 1, roughness: 0.26, envMap: env, envMapIntensity: 1.35, emissive: 0x3a1c00, emissiveIntensity: 0.5 });
  const seal = new THREE.MeshStandardMaterial({ color: 0x2a1a7a, metalness: 0.1, roughness: 0.34, envMap: env, envMapIntensity: 0.9, emissive: 0x12063f, emissiveIntensity: 0.5, side: THREE.DoubleSide });

  // ---------------------------------------------------------------- 1. the washer-door entrance
  // Measured on the meshes: the castle's opening is 2.74 m from the axis at z 2.0-2.5 and 2.52 m at
  // z 3.0-3.5; the drum's lip starts at z 3.75 (2.57 m) and its ribs inside are at 2.1 m. The rim sits
  // in the castle's opening, the seal steps in from it like a washing machine's door gasket, and the
  // rings glow in its folds. All are rings about the tunnel axis, so the path through them is open.
  if (OPENING_PARTS.portal) {
    const door = new THREE.Group(); door.name = 'washerDoor';
    door.position.set(0, AXIS, 0);
    root.add(door);
    const around = (geo) => { geo.rotateX(Math.PI / 2); return geo; };   // lathe axis (Y) -> tunnel axis (Z)
    // thick round gold rim, a raised outer lip and a slim inner bead
    const rim = new THREE.Mesh(new THREE.TorusGeometry(2.74, 0.25, 28, 140), gold); rim.position.z = 2.72; door.add(rim);
    const lip = new THREE.Mesh(new THREE.TorusGeometry(3.02, 0.075, 14, 140), goldDeep); lip.position.z = 2.62; door.add(lip);
    const bead = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.06, 12, 140), goldDeep); bead.position.z = 2.98; door.add(bead);
    // round gold bolts on the rim's face
    const bolts = new THREE.InstancedMesh(new THREE.SphereGeometry(0.075, 14, 10), goldDeep, 28);
    const m4 = new THREE.Matrix4();
    for (let i = 0; i < 28; i++) { const a = (i / 28) * Math.PI * 2; bolts.setMatrixAt(i, m4.makeTranslation(Math.cos(a) * 2.76, Math.sin(a) * 2.76, 2.47)); }
    door.add(bolts);
    // the dark violet door seal: folds stepping in from the rim to the drum's mouth
    const prof = [[2.56, 3.02], [2.47, 3.12], [2.5, 3.24], [2.41, 3.36], [2.44, 3.48], [2.35, 3.6], [2.37, 3.7], [2.27, 3.8], [2.24, 3.88]];
    const sealGeo = around(new THREE.LatheGeometry(prof.map(([r, z]) => new THREE.Vector2(r, z)), 140));
    door.add(new THREE.Mesh(sealGeo, seal));
    // glowing rings in the seal's folds (above 1: they bloom)
    const ringCols = [new THREE.Color(0.08, 1.0, 1.9), new THREE.Color(0.4, 1.35, 2.1), new THREE.Color(0.08, 1.0, 1.9)];
    const glows = [];
    [[2.43, 3.15], [2.39, 3.4], [2.31, 3.64]].forEach(([r, z], i) => {
      const mat = new THREE.MeshBasicMaterial({ color: ringCols[i].clone() });
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.022, 8, 140), mat); ring.position.z = z; door.add(ring);
      glows.push({ mat, base: ringCols[i], u: z });
    });
    // a thin line of cyan light at the seal's inner edge (2.26 m from the axis; additive, so it only adds light)
    const haloMat = new THREE.ShaderMaterial({ uniforms: { uColor: { value: new THREE.Color(0.25, 0.95, 1.6) }, uGain: { value: 1 } },
      vertexShader: 'varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'uniform vec3 uColor; uniform float uGain; varying vec2 vP; void main() { float r = length(vP); float k = exp(-pow((r - 2.26) / 0.04, 2.0)); gl_FragColor = vec4(uColor * k * uGain, 1.0); }',
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const halo = new THREE.Mesh(new THREE.RingGeometry(2.2, 2.34, 140, 1), haloMat); halo.position.z = 3.87; halo.renderOrder = 3; door.add(halo);
    // The castle's opening narrows like a funnel (3.8 m from the axis at its face, 2.74 m at the rim), and
    // its pastel bands made the entrance read as a rainbow archway. In the approved screen the gold door
    // ring sits straight in the lavender wall: a wall facing on the castle's face covers the funnel, darker
    // toward the gold (its shadow) and fading softly into the castle at its outer edge. Its hole (2.95 m)
    // is far outside the ride; below the water line it is hidden by the water.
    const wallMat = new THREE.ShaderMaterial({ uniforms: { uWall: { value: new THREE.Color(0.66, 0.56, 0.93) }, uShade: { value: new THREE.Color(0.2, 0.13, 0.45) } },
      vertexShader: 'varying vec2 vP; void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `uniform vec3 uWall, uShade; varying vec2 vP;
        void main() {
          float r = length(vP);
          float shade = 1.0 - smoothstep(2.95, 3.35, r);                 // soft shadow next to the gold ring
          vec3 c = mix(uWall, uShade, shade * 0.55);
          c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);               // a little lighter toward the top
          c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));      // a dark outline right at the ring
          float a = 1.0 - smoothstep(3.55, 3.92, r);                     // fades into the castle's own wall
          gl_FragColor = vec4(c * a, a);
        }`,
      transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor, side: THREE.DoubleSide });
    const wall = new THREE.Mesh(new THREE.RingGeometry(2.93, 3.92, 160, 1), wallMat); wall.position.z = 0.86; wall.renderOrder = 1; door.add(wall);
    // twinkling sparkles on the rim
    const sparkMat = new THREE.SpriteMaterial({ map: starTexture(), color: new THREE.Color(2.2, 2.0, 1.6), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const sparks = [];
    for (let i = 0; i < 7; i++) {
      const a = 0.35 + i * 0.36 + rand() * 0.2, sp = new THREE.Sprite(sparkMat.clone());
      sp.position.set(Math.cos(a) * 2.9, Math.sin(a) * 2.9, 2.45); sp.renderOrder = 4; door.add(sp);
      sparks.push({ sp, ph: rand() * 6.28, rate: 1.3 + rand() * 1.4 });
    }
    updaters.push((dt, t) => {
      for (const g of glows) g.mat.color.copy(g.base).multiplyScalar(0.82 + 0.25 * Math.sin(t * 2.6 - g.u * 2.2));
      haloMat.uniforms.uGain.value = 0.8 + 0.2 * Math.sin(t * 1.7);
      for (const s of sparks) { const k = Math.pow(Math.max(0, Math.sin(t * s.rate + s.ph)), 8); s.sp.scale.setScalar(0.05 + 0.42 * k); s.sp.material.opacity = k; }
    });
  }

  // ---------------------------------------------------------------- 2. foam and splashes around the mascot
  const px = new Particles(700);   // its own splash particles (the game's own pool is left as it was)
  px.u.uScale = fxScale;            // the same size scale as the game's particles, kept up to date by the game
  // Foam: bright white froth lit from above, cool turquoise-blue where it turns away and dips into the
  // water, a pale rim and tiny glints (its own shader: a PBR foam reflected the violet sky and read grey).
  const foamMat = new THREE.ShaderMaterial({ uniforms: { uTime: { value: 0 } }, vertexShader: FOAM_VERTEX, fragmentShader: FOAM_FRAGMENT });
  const N_FOAM = 64;
  const foam = new THREE.InstancedMesh(lumpyBall(rand), foamMat, N_FOAM);
  foam.frustumCulled = false; foam.name = 'mascotFoam';
  root.add(foam);
  // Each blob: angle around the body, distance, size, bob phase, and whether it is in the outer froth.
  const blobs = [];
  for (let i = 0; i < N_FOAM; i++) {
    // 48 in a thick collar hugging the body, 72 in the froth spreading behind and beside it across the
    // slide (the side the camera sees), as in the approved screen
    const outer = i >= 40;
    const a = outer ? Math.PI + (rand() * 2 - 1) * Math.PI * 0.62 : (i / 40) * Math.PI * 2 + rand() * 0.12;
    const r = outer ? 0.56 + Math.pow(rand(), 0.8) * 0.4 : 0.41 + rand() * 0.08;
    blobs.push({ a, r, s: outer ? 0.03 + rand() * 0.04 : 0.055 + rand() * 0.05, ph: rand() * 6.28, spin: rand() * 6.28, outer, drift: rand() });
  }
  const fq = new THREE.Quaternion(), fe = new THREE.Euler(), fs = new THREE.Vector3(), fp = new THREE.Vector3(), fm = new THREE.Matrix4();
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  let lagX = mascot.x, carry = { side: 0, wall: 0, puff: 0, bow: 0 };
  /** How much of the opening look applies at the mascot: all of it on the slide, none in the drum. */
  const onSlide = (u) => 1 - smooth(TS - 3.5, TS - 0.8, u);
  updaters.push((dt, t, phase) => {
    const m = mascot, running = phase === 'running';
    const gate = OPENING_PARTS.foam ? onSlide(m.z) : 0;
    const ride = W.surface(L, m.x, m.z, t) + W.FLOAT_H;
    const up = Math.max(0, m.yAbs - ride);                           // height of a jump
    const k = gate * (1 - smooth(0.08, 0.45, up));
    const speed01 = Math.min(1.4, m.speed / W.CRUISE);
    lagX += (m.x - lagX) * Math.min(1, dt * 5);
    for (let i = 0; i < N_FOAM; i++) {
      const b = blobs[i];
      // at rest a full collar; when running the foam streams back along the sides and trails behind
      const flow = running ? ((t * (1.1 + 1.4 * b.drift) + b.drift) % 1) : 0;
      const back = flow * speed01 * (b.outer ? 0.9 : 0.5);
      const cx = b.outer ? lagX : m.x;
      const x = cx + Math.sin(b.a) * b.r * (1 + 0.25 * speed01 * flow), u = m.z + Math.cos(b.a) * b.r * 0.85 - back;
      const surf = W.surface(L, x, u, t);
      const bob = Math.sin(t * 2.3 + b.ph) * 0.015;
      const life = running ? Math.sin(Math.PI * Math.min(1, flow * 1.05)) * 0.6 + 0.4 : 1;
      // while running the froth stays close to the body (the water shader draws the wake behind it)
      const s = b.s * k * life * (running ? (b.outer ? 0.5 : 0.9) : 1) * (1 + 0.12 * Math.sin(t * 1.7 + b.ph));
      TR.frame(u, F);
      fp.copy(F.P).addScaledVector(F.R, x).addScaledVector(F.U, surf + 0.01 + s * 0.3 + bob);
      fe.set(b.spin + t * 0.4, b.ph + t * 0.3, 0); fq.setFromEuler(fe); fs.set(s * 1.25, s * 0.8, s * 1.25);
      foam.setMatrixAt(i, fm.compose(fp, fq, fs));
    }
    foam.instanceMatrix.needsUpdate = true; foamMat.uniforms.uTime.value = t;
    foam.visible = k > 0.001;
    // splashes: little curls of spray at the mascot's sides, foam puffs, spray off the slide walls, bow spray
    if (k > 0.01 && !m.air) {
      carry.side += (running ? 20 + 30 * speed01 : 16) * k * dt;
      for (; carry.side >= 1; carry.side--) {
        const side = rand() < 0.5 ? -1 : 1, a = (rand() - 0.5) * 1.4;
        const x = m.x + side * (0.44 + rand() * 0.14), u = m.z + a * 0.35, surf = W.surface(L, x, u, t);
        px.emitT(x, surf + 0.04, u, side * (0.4 + rand() * 0.7), 1.0 + rand() * 1.3, m.speed * 0.6 + (rand() - 0.5) * 0.5,
          0.03 + rand() * 0.045, 0.45 + rand() * 0.35, 0);
      }
      carry.puff += (running ? 6 : 7) * k * dt;
      for (; carry.puff >= 1; carry.puff--) {
        const a = Math.PI + (rand() - 0.5) * 2.6, r = 0.5 + rand() * 0.35;
        const x = m.x + Math.sin(a) * r, u = m.z + Math.cos(a) * r * 0.85, surf = W.surface(L, x, u, t);
        px.emitT(x, surf + 0.03, u, Math.sin(a) * 0.12, 0.12 + rand() * 0.12, m.speed * 0.8, 0.12 + rand() * 0.12, 0.6 + rand() * 0.5, 1, 0.08);
      }
    }
    if (OPENING_PARTS.foam) {
      // spray hopping off both slide walls ahead of the mascot, all the way to the portal
      carry.wall += 30 * dt;
      for (; carry.wall >= 1; carry.wall--) {
        const u = Math.min(TS - 1.2, m.z - 2 + rand() * 18);
        if (onSlide(u) < 0.5) continue;
        const side = rand() < 0.5 ? -1 : 1, x = side * (W.SLIDE.half - 0.04), surf = W.surface(L, x, u, t);
        px.emitT(x, surf + 0.05, u, -side * (0.2 + rand() * 0.5), 0.8 + rand() * 1.2, 1.5 + rand() * 2.0, 0.035 + rand() * 0.04, 0.4 + rand() * 0.3, 0);
        if (rand() < 0.25) px.emitT(x - side * 0.08, surf + 0.03, u, -side * 0.1, 0.1, 2.0, 0.1 + rand() * 0.08, 0.5 + rand() * 0.4, 1, 0.05);
      }
    }
    px.update(dt);
  });
  if (waterU) waterU.uOpen.value = OPENING_PARTS.foam ? 1 : 0;

  // ---------------------------------------------------------------- 3. soap bubbles
  const bubbleU = { uTime: { value: 0 } };
  const bubbleMat = new THREE.ShaderMaterial({ vertexShader: BUBBLE_VERTEX, fragmentShader: BUBBLE_FRAGMENT, uniforms: bubbleU,
    transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  const makeBubbleMesh = (n) => {
    const base = new THREE.PlaneGeometry(2, 2);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = base.index; geo.attributes.position = base.attributes.position; geo.attributes.uv = base.attributes.uv;
    geo.setAttribute('inst', new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('motion', new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4));
    geo.instanceCount = 0;
    const mesh = new THREE.Mesh(geo, bubbleMat); mesh.frustumCulled = false; mesh.renderOrder = 5;
    root.add(mesh);
    return mesh;
  };
  let staticBubbles = null, placed = false;
  const ref = new THREE.PerspectiveCamera(40, 0.5, 0.1, 200);   // made here, not while running: three.js draws a random id for every object
  const taken = [];   // the game's own bubbles on the slide, redrawn here with the glossier bubble look
  if (OPENING_PARTS.bubbles && bubbles) {
    const inst = bubbles.geometry.attributes.inst, ph = bubbles.geometry.attributes.phase;
    for (let i = 0; i < inst.count; i++) {
      if (inst.getZ(i) > TS - 0.5) continue;   // the bubbles in the drum stay exactly as they were
      taken.push([inst.getX(i), inst.getY(i), inst.getZ(i), inst.getW(i), ph.getX(i)]);
      inst.setW(i, 0);
    }
    inst.needsUpdate = true;
    staticBubbles = makeBubbleMesh(taken.length + BUBBLES_AT_START.length);
  }
  // Bubbles caught in the foam around the mascot (they ride with it).
  const N_FB = 44;
  const foamBubbles = OPENING_PARTS.bubbles ? makeBubbleMesh(N_FB) : null;
  const fbs = [];
  for (let i = 0; i < N_FB; i++) fbs.push({ a: Math.PI + (rand() - 0.5) * 3.4, r: 0.46 + Math.pow(rand(), 1.4) * 0.6, s: 0.025 + Math.pow(rand(), 2) * 0.075, ph: rand() * 6.28 });
  updaters.push((dt, t, phase) => {
    bubbleU.uTime.value = t;
    if (staticBubbles && !placed && phase === 'intro') {
      // Placed from the approved screen's layout, through the Tap to Start camera (a 1:2 portrait view).
      placed = true;
      const aspect = camera.aspect;
      ref.fov = aspect >= 0.5 ? camera.fov : THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * aspect / 0.5));
      ref.position.copy(camera.position); ref.quaternion.copy(camera.quaternion); ref.updateProjectionMatrix(); ref.updateMatrixWorld(true);
      const fwd = ref.getWorldDirection(new THREE.Vector3()), dir = new THREE.Vector3();
      const inst = staticBubbles.geometry.attributes.inst, mot = staticBubbles.geometry.attributes.motion;
      let n = 0;
      for (const b of taken) { inst.setXYZW(n, b[0], b[1], b[2], b[3]); mot.setXYZW(n, b[4], 0, 0.02, 0); n++; }
      const pxPerM = (d) => 1076 / (2 * d * Math.tan(THREE.MathUtils.degToRad(ref.fov) / 2));
      for (const [sx, sy, d, rpx, rise, sway] of BUBBLES_AT_START) {
        dir.set((sx / 538) * 2 - 1, 1 - (sy / 1076) * 2, 0.5).unproject(ref).sub(ref.position).normalize();
        const p = ref.position.clone().addScaledVector(dir, d / dir.dot(fwd));
        inst.setXYZW(n, p.x, p.y, p.z, rpx / pxPerM(d)); mot.setXYZW(n, rand() * 6.28, rise, sway, 0); n++;
      }
      staticBubbles.geometry.instanceCount = n;
      inst.needsUpdate = mot.needsUpdate = true;
    }
    if (foamBubbles) {
      const m = mascot, k = onSlide(m.z) * (m.air ? 0 : 1);
      const inst = foamBubbles.geometry.attributes.inst, mot = foamBubbles.geometry.attributes.motion;
      for (let i = 0; i < N_FB; i++) {
        const b = fbs[i], flow = phase === 'running' ? ((t * 0.9 + b.ph) % 1) * (m.speed / W.CRUISE) : 0;
        const x = lagX + Math.sin(b.a) * b.r, u = m.z + Math.cos(b.a) * b.r * 0.85 - flow * 1.2;
        const surf = W.surface(L, x, u, t);
        TR.frame(u, F);
        fp.copy(F.P).addScaledVector(F.R, x).addScaledVector(F.U, surf + b.s * 0.9);
        inst.setXYZW(i, fp.x, fp.y, fp.z, b.s * k); mot.setXYZW(i, b.ph, 0, 0, 0);
      }
      foamBubbles.geometry.instanceCount = N_FB;
      inst.needsUpdate = true; mot.needsUpdate = true;
    }
  });

  // ---------------------------------------------------------------- 4. the side brushes (Meshy side machinery and rollers)
  if (OPENING_PARTS.brushes) {
    // The Meshy side machinery, larger and lower at the left edge as the approved brush, still clear
    // of the lanes (setSideMachinery measures its nearest point to the slide's middle).
    if (setSideMachinery) {
      const p = { ...BRUSH_PLACEMENT.machinery, at: [...BRUSH_PLACEMENT.machinery.at] };
      let inner = setSideMachinery(p);
      // never closer to the lanes than the original placement kept it (1.18 m; the mascot reaches 1.10 m)
      for (let i = 0; i < 20 && !(inner >= MACHINERY_CLEAR); i++) { p.at[0] += 0.03; inner = setSideMachinery(p); }
      ctx.machineryInnerX = inner;
    }
    // The machinery is one combined mesh: its bristles are told apart from the gold by the metal map.
    if (sideMachinery) sideMachinery.traverse((o) => { if (o.isMesh) o.material = fibreMaterial(o.material, 'machinery', 'face', o.geometry); });
    // The two Screen 3 rollers (the game's own spinning Meshy roller copies, outside the drum) get their
    // own copies of the bristle material with fibre detail, so the tunnel's rollers keep theirs.
    const s3 = rollers.filter((r) => r.centre.z < TS);
    s3.forEach((r, i) => {
      r.g.traverse((o) => { if (o.isMesh && /Bristles/.test(o.material.name)) o.material = fibreMaterial(o.material, 'roller' + i, 'roller', o.geometry); });
      const p = BRUSH_PLACEMENT.rollers[i];
      if (p && p.hide) r.g.visible = false;
      else if (p) placeRoller(r, p);
    });
  }
  function placeRoller(r, p) {
    // Same model, same spin about its own long axis: only where it stands, which way the axis points, and its size.
    const box = new THREE.Box3(), size = new THREE.Vector3(), mid = new THREE.Vector3();
    const inner = r.g.children[0];
    r.g.remove(inner); inner.updateMatrixWorld(true);   // measured on its own, without the group's placement
    box.setFromObject(inner); box.getSize(size); box.getCenter(mid);
    r.g.add(inner);
    const sc = p.d / Math.max(size.x, size.z);
    const axis = new THREE.Vector3(...p.axis).normalize();
    const centre = TR.map(p.at[0], p.at[1], p.at[2]);
    r.m0 = new THREE.Matrix4().compose(centre, new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), axis), new THREE.Vector3(sc, sc, sc))
      .multiply(new THREE.Matrix4().makeTranslation(-mid.x, -mid.y, -mid.z));
    r.centre = centre; r.axis = axis;
  }

  // ---------------------------------------------------------------- 4b. the slide's walls
  // The code-built flume walls (game.js buildRails, only on the slide in front of the castle) were pearly
  // lavender; the approved slide's edges read as crystal-clear blue water. Same geometry, a glassy aqua finish.
  if (OPENING_PARTS.slide) {
    scene.traverse((o) => {
      if (o.isMesh && o.material && o.material.isMeshStandardMaterial && o.material.color.getHex() === 0xe6d8ff) {
        const m = o.material.clone();
        m.color.set(0x8fd2ff); m.roughness = 0.16; m.metalness = 0.1; m.envMapIntensity = 1.35; m.emissive.set(0x1d6fd8); m.emissiveIntensity = 0.35;
        o.material = m;
      }
    });
  }

  // ---------------------------------------------------------------- 4c. the pink mascot's presentation
  // The same Meshy mascot, mesh, controller and animation: only how it is drawn. The approved mascot is a
  // little more upright, with crisper spiky strands and water droplets on its fur tips.
  if (OPENING_PARTS.mascot && mascotModel) {
    const k = new THREE.Vector3(...MASCOT_PRESENTATION.stretch);
    mascotModel.scale.multiply(k); mascotModel.position.multiply(k);   // about the body's centre (the model is centred on it)
    if (fur) fur.uSpike.value = MASCOT_PRESENTATION.spike;
  }

  // ---------------------------------------------------------------- 5. light: a targeted grade for the opening
  if (grade) grade.uniforms.uOpen.value = 0;
  updaters.push(() => {
    if (!grade) return;
    // Full in front of the castle, fading out as the camera comes up to the portal, none in the drum.
    const cz = camera.position.z;
    grade.uniforms.uOpen.value = OPENING_PARTS.light ? 1 - smooth(-6, 1.2, cz) : 0;
  });

  return {
    root,
    update(dt, t, phase) { for (const f of updaters) f(dt, t, phase); },
  };

  /**
   * A per-instance copy of a Meshy material with fine fibre detail on the bristles (and, for the PBR
   * machinery, glossier gold). Strands run outward: around the hub of the machinery's bristle wheel
   * (model +Z faces the camera) and out from the roller's long axis (model Y). Frequencies are set from
   * the mesh's own size, so the strands are a few millimetres wide whatever the model's units.
   */
  function fibreMaterial(src, key, mode, geometry) {
    const m = src.clone();
    const prev = src.onBeforeCompile, prevKey = src.customProgramCacheKey.bind(src);
    const pbr = mode === 'face';
    if (pbr) { m.envMapIntensity = 1.4; m.emissiveIntensity = 0.15; }
    geometry.computeBoundingBox();
    const bb = geometry.boundingBox, c = bb.getCenter(new THREE.Vector3()), sz = bb.getSize(new THREE.Vector3());
    const R = pbr ? Math.max(sz.x, sz.y) * 0.5 : Math.max(sz.x, sz.z) * 0.5;
    m.onBeforeCompile = (s, r) => {
      prev.call(src, s, r);
      s.vertexShader = s.vertexShader.replace('void main() {', 'varying vec3 vFibreP;\nvoid main() {\n  vFibreP = position;');
      s.fragmentShader = s.fragmentShader.replace('void main() {', `varying vec3 vFibreP;\n${FIBRE_NOISE}\nvoid main() {`);
      // after the material's own colour work (the rollers' recolour runs at color_fragment)
      const hook = pbr ? '#include <emissivemap_fragment>' : '#include <alphamap_fragment>';
      const rel = `(vFibreP - vec3(${c.x.toFixed(4)}, ${c.y.toFixed(4)}, ${c.z.toFixed(4)})) / ${R.toFixed(4)}`;
      const coords = pbr ? 'vec3(atan(q.y, q.x) * 160.0, length(q.xy) * 9.0, q.z * 30.0)' : 'vec3(atan(q.z, q.x) * 150.0, q.y * 120.0, length(q.xz) * 8.0)';
      s.fragmentShader = s.fragmentShader.replace(hook, `${hook}
        { vec3 cc = diffuseColor.rgb;
          float mx = max(cc.r, max(cc.g, cc.b));
          float soft = ${pbr ? '(1.0 - smoothstep(0.3, 0.6, metalnessFactor))' : '1.0'} * smoothstep(0.04, 0.2, mx);
          vec3 q = ${rel};
          vec3 fc = ${coords};
          float strand = fibreNoise(fc) * 0.65 + fibreNoise(fc * vec3(2.1, 1.7, 1.0) + 7.3) * 0.35;
          float f = mix(0.74, 1.18, smoothstep(0.2, 0.8, strand));
          diffuseColor.rgb *= mix(1.0, f, soft * 0.85);
          ${pbr ? 'totalEmissiveRadiance *= mix(1.0, f, soft);' : ''} }`);
    };
    m.customProgramCacheKey = () => prevKey() + '|fibre:' + key;
    return m;
  }
}

// Which parts are on (all, unless the page is opened with ?classic).
export const OPENING_PARTS = { portal: OPENING_ON, foam: OPENING_ON, bubbles: OPENING_ON, brushes: OPENING_ON, slide: OPENING_ON, mascot: OPENING_ON, light: OPENING_ON };
// For checks: window.__BW_OPENING_OFF__ = ['mascot', ...] (set before the page loads) leaves those parts out.
if (typeof window !== 'undefined' && Array.isArray(window.__BW_OPENING_OFF__)) for (const k of window.__BW_OPENING_OFF__) OPENING_PARTS[k] = false;
// The mascot's presentation: [sideways, up, forward] stretch of the drawn model (not its collider or ride
// height), and how much crisper the strands and droplets are (0 = the original fur).
export const MASCOT_PRESENTATION = { stretch: [0.95, 1.07, 0.95], spike: 1 };

// Bubbles from the approved Screen 3 layout: [screen x, screen y (on the 538 x 1076 portrait screen),
// distance from the Tap to Start camera (m), radius on screen (px), rise speed (m/s, 0 = float in place),
// sway (m)]. Big ones at the foreground edges, medium ones by the brushes and machinery, small ones
// drifting toward the entrance (none on the mascot, the portal mouth or the coin line).
export const BUBBLES_AT_START = [
  [512, 655, 7.5, 30, 0, 0.03], [36, 815, 5.4, 52, 0, 0.03], [503, 848, 5.2, 46, 0, 0.03],
  [165, 592, 13, 26, 0, 0.04], [92, 470, 15, 20, 0, 0.04], [120, 700, 9, 14, 0.12, 0.05],
  [420, 720, 9, 12, 0.1, 0.05], [205, 440, 22, 8, 0.15, 0.06], [345, 430, 22, 9, 0.12, 0.06], [372, 540, 18, 10, 0.1, 0.05],
  [160, 520, 18, 9, 0.14, 0.05], [60, 640, 9, 16, 0.08, 0.04], [250, 400, 26, 6, 0.1, 0.05],
  [300, 395, 26, 5, 0.12, 0.05], [24, 560, 12, 22, 0, 0.03],
];
// The brushes, presented as in the approved Screen 3 (measured with the game's hooks: the machinery's
// nearest point stays at least 1.18 m from the slide's middle; the mascot's body reaches 1.10 m).
const MACHINERY_CLEAR = 1.18;
export const BRUSH_PLACEMENT = {
  machinery: { at: [2.9, 0.92, -9.7], yaw: 0.1, height: 3.1 },   // nearest point 1.22 m from the slide's middle
  rollers: [
    // [0] the roller high on the left beside the portal: an extra brush the approved screen does not have
    // (its spot holds the castle towers); hidden in the opening view, still built and turning (?classic shows it)
    { hide: true },
    // [1] the roller on the right showed its end (yellow axle and blue cap) to the camera; the approved screen
    // shows the soft pink side of the brush there, so its long axis now stands nearly upright
    { at: [-2.7, 1.1, -5.8], axis: [0.12, 1, 0.25], d: 1.35 },
  ],
};

const FIBRE_NOISE = /* glsl */ `
float fibreHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float fibreNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(fibreHash(i), fibreHash(i + vec3(1, 0, 0)), f.x), mix(fibreHash(i + vec3(0, 1, 0)), fibreHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(fibreHash(i + vec3(0, 0, 1)), fibreHash(i + vec3(1, 0, 1)), f.x), mix(fibreHash(i + vec3(0, 1, 1)), fibreHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
`;

// Glossy soap bubbles: camera-facing discs drawn as thin-film spheres. Nearly clear in the middle, a
// coloured film toward the edge (pink, violet, cyan and gold reflections), a thin bright rim and a soft
// window highlight. Small bubbles can rise and loop; all drift and wobble gently.
const BUBBLE_VERTEX = /* glsl */ `
attribute vec4 inst;     // centre xyz, radius
attribute vec4 motion;   // phase, rise speed, sway
uniform float uTime;
varying vec2 vUv; varying float vPhase; varying float vFade;
void main() {
  float ph = motion.x, rise = motion.y, sway = motion.z;
  float lift = 0.0, fade = 1.0;
  if (rise > 0.0) { float k = fract(uTime * rise / 1.4 + ph * 0.159); lift = k * 1.4 - 0.4; fade = smoothstep(0.0, 0.15, k) * (1.0 - smoothstep(0.8, 1.0, k)); }
  vec3 centre = inst.xyz + vec3(sin(uTime * 0.55 + ph) * sway, lift + sin(uTime * 0.9 + ph * 1.3) * inst.w * 0.08, cos(uTime * 0.45 + ph) * sway * 0.6);
  float wob = 1.0 + 0.03 * sin(uTime * 2.3 + ph * 3.0);
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 p = centre + (right * position.x * wob + up * position.y / wob) * inst.w;
  vUv = uv; vPhase = ph; vFade = fade * step(0.0005, inst.w);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`;
const BUBBLE_FRAGMENT = /* glsl */ `
uniform float uTime;
varying vec2 vUv; varying float vPhase; varying float vFade;
void main() {
  vec2 p = vUv * 2.0 - 1.0; float r = length(p);
  if (r > 1.0 || vFade <= 0.0) discard;
  float nz = sqrt(max(0.0, 1.0 - r * r));
  float fres = pow(1.0 - nz, 1.8);
  // thin-film colours, swirling slowly
  float film = (1.0 - nz) * 2.2 + p.y * 0.3 + 0.18 * sin(atan(p.y, p.x) * 2.0 + uTime * 0.35 + vPhase) + uTime * 0.04 + vPhase;
  vec3 thin = 0.5 + 0.5 * cos(6.28318 * (film + vec3(0.0, 0.33, 0.67)));
  // what the bubble reflects: pink on one side, cyan on the other, a little gold underneath
  vec3 envc = mix(vec3(1.0, 0.5, 0.92), vec3(0.42, 0.88, 1.0), smoothstep(-0.8, 0.8, p.x + 0.2 * p.y));
  envc = mix(envc, vec3(1.0, 0.82, 0.45), smoothstep(0.25, 0.95, -p.y) * 0.35);
  vec3 col = mix(envc, thin, 0.6) * (0.4 + 1.15 * fres);
  float rim = smoothstep(0.88, 0.975, r) * (1.0 - smoothstep(0.985, 1.0, r));
  col += mix(vec3(0.95, 0.97, 1.0), thin * 1.3, 0.6) * rim * 0.85;
  // soft window highlight up and to the left, a small one down and to the right
  float hl = exp(-pow(length((p - vec2(-0.4, 0.44)) * vec2(1.0, 1.5)) * 3.0, 2.0));
  float hl2 = exp(-pow(length(p - vec2(0.46, -0.48)) * 6.5, 2.0)) * 0.55;
  col += vec3(1.0, 0.98, 1.0) * (hl * 1.25 + hl2);
  float a = clamp(0.09 + fres * 0.66 + rim * 0.55 + hl * 0.75 + hl2 * 0.5, 0.0, 1.0) * vFade;
  gl_FragColor = vec4(col * a, a);   // premultiplied
}
`;

const FOAM_VERTEX = /* glsl */ `
varying vec3 vN; varying vec3 vW;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 w = m * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(m) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const FOAM_FRAGMENT = /* glsl */ `
uniform float uTime;
varying vec3 vN; varying vec3 vW;
float fh(vec3 p) { p = fract(p * 0.3183 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float key = clamp(dot(N, normalize(vec3(-0.25, 0.85, -0.45))) * 0.55 + 0.45, 0.0, 1.0);
  float up = N.y * 0.5 + 0.5;
  vec3 col = mix(vec3(0.3, 0.62, 1.0), vec3(1.0, 1.0, 1.0), smoothstep(0.18, 0.82, key * 0.65 + up * 0.45));
  float rim = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 2.5);
  col = mix(col, vec3(0.78, 0.92, 1.0), rim * 0.45);
  vec3 cell = floor(vW * 70.0);
  col += step(0.985, fh(cell)) * (0.5 + 0.5 * sin(uTime * 6.0 + fh(cell + 3.0) * 30.0)) * 0.6 * up;
  gl_FragColor = vec4(col * 0.97, 1.0);
}
`;

/** A soft lumpy ball (foam blob). */
function lumpyBall(rand) {
  const g = new THREE.IcosahedronGeometry(1, 4), p = g.attributes.position, v = new THREE.Vector3();
  const k1 = 4 + rand() * 2, k2 = 5 + rand() * 2;
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = 1 + 0.1 * Math.sin(v.x * k1 + v.y * 3.1) * Math.sin(v.y * k2 + v.z * 3.7) + 0.035 * Math.sin(v.z * 9.0 + v.x * 7.0);
    v.multiplyScalar(n); p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

function starTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32); grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.25, 'rgba(255,255,255,0.35)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  g.fillStyle = 'rgba(255,255,255,0.9)';
  g.beginPath(); g.moveTo(32, 2); g.lineTo(35, 29); g.lineTo(62, 32); g.lineTo(35, 35); g.lineTo(32, 62); g.lineTo(29, 35); g.lineTo(2, 32); g.lineTo(29, 29); g.closePath(); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
