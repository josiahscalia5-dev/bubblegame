// The inside of the washing machine, rebuilt toward the approved Screen 4 (test only, ?s3=tunnel; combine with
// ?s3=paint,tunnel for the painted opening and this tunnel together). Without the switch nothing here runs.
//
//   - rings:   a deep "vortex" of glowing rings all along the drum (violet, pink, cyan and pale blue, about every 0.85 m),
//              flat bands between 2.0 and 2.5 m from the tube's axis, so the tunnel reads as concentric light receding
//              to a bright centre, as in the approved screen. The drum's rectangular pink panels are hidden.
//   - brushes: large spinning brushes on the tunnel's sides: the user's Number 1 brush (royal-blue face, pink and white
//              bristles; pink all over on the left, as the approved left brush), its wheel turning about its own axis (the bracket under it is left out, since it was welded on
//              and would have turned with it). Low ones reach into an outer lane: a mascot in that lane is knocked back
//              toward the middle lane, slowed, with a splash (game.js bumpMascot). The middle lane is always clear.
//              High ones on the upper walls are scenery only.
//   - bubbles: soap-film bubbles floating in the drum (the same transparent film as the opening's bubbles).
//   - water:   inside the drum, a white foam collar and trailing foam around the mascot and a more turquoise tint, on
//              the drum's own copy of the water shader.
//
// Visual changes only, except the brushes' knock, which is a new hazard. Lanes, controls, camera, collectibles and the
// tunnel's path are unchanged. Brush positions avoid every coin, gem and sock in their lane.
import * as THREE from 'three';
import { ROUND3, buildRound3 } from './tunnel_r3.js';
import { ROUND4, buildRound4 } from './tunnel_r4.js';

export const TUNNEL = {
  ringStep: 0.85, ringIn: 2.0, ringOut: 2.5,
  // hazards: u (metres along the path), side (+1 left lane 0, -1 right lane 2); deco: high on the wall, angle up from level
  hazards: [[6.0, 1], [6.7, -1], [16.6, -1], [18.8, 1], [26.0, 1], [26.7, -1]],
  deco: [[11.2, 1, 52], [21.8, -1, 50], [31.5, 1, 55]],
  brushR: 1.0, brushX: 1.62, brushY: 0.9, turnIn: 24, spin: 2.2,
  bubbles: 46,
  cluster: 0.03,   // model units (the brush is about 1.9 across)
  showAhead: 18, showBehind: 6,   // a brush is drawn only while the mascot is this close to it (metres along the path)
};
// ?s3=round2: the second round of polish (all on top of the above; without round2 nothing here changes)
export const ROUND2 = {
  ringColours: [[1.0, 0.36, 0.8], [0.62, 0.42, 1.0], [0.16, 0.88, 1.0], [0.95, 0.45, 0.95], [1.0, 0.74, 0.26]],   // pink, lavender, cyan, orchid, gold
  sparkle: 0.955,            // fewer ring sparkles (0.9 before)
  bubbles: 22, bubbleAngle: [28, 152], bubbleR: [1.5, 1.95], bubbleMax: 0.3,   // fewer soap bubbles, kept up on the walls
  clearOut: 1.15,            // Bubble Blast pushes a brush this far back toward the wall
  hazardWarn: [7.5, 3.0],    // the water glows pink in a brush's lane from this far before it, full from here (the last ~2 m are hidden behind the brush)
  hazardWidth: 0.34,         // the glow's half-width across the lane (lanes are 0.7 m apart)
  hazardMix: 0.8,            // how strongly the pink covers the water at full warning
  grade: { vibrance: 0.25, knee: 0.62, roll: 1.6 }, bloom: 0.22,
  wallDeep: [[0.1, 0.08, 0.46], [0.58, 0.38, 0.98]],   // the drum's walls a little more violet and magenta, as the approved upper tunnel
  brushBlue: [0.62, 0.66, 1.0], brushBlueMix: 0.45, brushPink: [1.0, 0.5, 0.82],   // lighter, softer brushes (still pink and blue)
};

export async function buildTunnelS4({ scene, TR, L, W, camera, updaters, mascot, bump, brushBytes, waterSheets, soap, loaderParse, drumMeshes, round2 }) {
  const R2 = round2 ? ROUND2 : null, hooks = (round2 && round2.hooks) || {};
  const R3 = round2 && round2.round3 ? ROUND3 : null;   // ?s3=round3 (tunnel_r3.js): its colours replace round2's below
  const R4 = round2 && round2.round4 ? ROUND4 : null;   // ?s3=round4 (tunnel_r4.js): the reconstruction, on top of round3
  const report = { rings: 0, brushes: 0, bubbles: 0, panelsHidden: 0, waterCopy: false };
  const P = TUNNEL, TS = L.tunnelStart, TE = L.tunnelEnd, axisH = W.WATER + W.AXIS_H;
  const time = { value: 0 };
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };

  // ---------------------------------------------------------------- 1. the ring vortex
  {
    const us = []; for (let u = TS + 0.6; u < TE - 0.6 + (R2 ? 4.4 : 0); u += P.ringStep) us.push(u);   // (round2: on into the exit's light)
    const geo = new THREE.RingGeometry(P.ringIn, P.ringOut, 112, 1);
    const mat = new THREE.ShaderMaterial({ uniforms: { uTime: time, uIn: { value: P.ringIn }, uOut: { value: P.ringOut }, uSpark: { value: R2 ? R2.sparkle : 0.9 } }, vertexShader: RING_VERTEX, fragmentShader: R3 ? r3Rings(R3) : RING_FRAGMENT,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    const rings = new THREE.InstancedMesh(geo, mat, us.length);
    const cols = R2 ? (R3 || R2).ringColours.map((c) => new THREE.Color(...c)) : [new THREE.Color(0.5, 0.22, 1.0), new THREE.Color(1.0, 0.3, 0.78), new THREE.Color(0.12, 0.85, 1.0), new THREE.Color(0.45, 0.65, 1.0)];
    const m4 = new THREE.Matrix4(), uAttr = new Float32Array(us.length);
    us.forEach((u, i) => { TR.mapMatrix(new THREE.Matrix4().makeTranslation(0, axisH, u), m4); rings.setMatrixAt(i, m4); rings.setColorAt(i, cols[i % cols.length]); uAttr[i] = u; });
    geo.setAttribute('aU', new THREE.InstancedBufferAttribute(uAttr, 1));
    rings.frustumCulled = false; rings.renderOrder = 3; rings.name = 's4Rings';
    scene.add(rings);
    report.rings = us.length;
    // the drum's rectangular pink light panels (scenery.js) are not in the approved screen
    const deco = scene.getObjectByName('tunnelDecor'); let panelCount = 0;
    if (deco) deco.traverse((o) => {
      if (!o.isInstancedMesh) return;
      const p = o.geometry.parameters || {};
      if (o.geometry.type === 'PlaneGeometry' && Math.abs(p.width - 0.62) < 1e-3) { o.visible = false; report.panelsHidden++; panelCount = o.count; }
    });
    // and the gold frames behind them (one instanced mesh with as many copies, built with the panels)
    if (deco && panelCount) deco.traverse((o) => { if (o.isInstancedMesh && o.visible && o.count === panelCount && o.material && o.material.metalness === 1) { o.visible = false; report.panelsHidden++; } });
    // round2: the gold gears on the upper walls read brown in the dark drum; their own copy of the gold glows a little
    if (R2 && deco) {
      const glowGold = new Map(); let n = 0;
      deco.traverse((o) => {
        if (!o.isMesh || o.isInstancedMesh || !o.material || o.material.metalness < 0.9) return;
        const hsl = {}; o.material.color.getHSL(hsl);
        if (hsl.h < 0.06 || hsl.h > 0.18) return;
        if (!glowGold.has(o.material)) { const m = o.material.clone(); m.emissive = new THREE.Color(1.0, 0.68, 0.18); m.emissiveIntensity = 0.45; m.roughness = Math.min(m.roughness, 0.3); glowGold.set(o.material, m); }
        o.material = glowGold.get(o.material); n++;
      });
      report.goldGlow = n;
    }
  }

  // the drum's walls in the approved screen's deep royal blue and violet (its own baked colours, darker and richer)
  const tinted = new Map();
  for (const mesh of drumMeshes || []) {
    const src = mesh.material;
    if (!tinted.has(src)) {
      const m = src.clone(), prev = src.onBeforeCompile, prevKey = src.customProgramCacheKey.bind(src);
      m.onBeforeCompile = (sh, r) => {
        prev.call(src, sh, r);
        sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
          { float l = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
            vec3 deep = mix(vec3(${(R2 ? (R3 || R2).wallDeep[0] : [0.06, 0.08, 0.42]).map((v) => v.toFixed(3)).join(', ')}), vec3(${(R2 ? (R3 || R2).wallDeep[1] : [0.42, 0.36, 0.95]).map((v) => v.toFixed(3)).join(', ')}), smoothstep(0.05, 0.75, l));
            diffuseColor.rgb = mix(diffuseColor.rgb * vec3(0.5, 0.55, 0.95), deep, 0.55); }`);
      };
      m.customProgramCacheKey = () => prevKey() + '|s4-deep' + (R3 ? '3' : R2 ? '2' : '');
      tinted.set(src, m);
    }
    mesh.material = tinted.get(src);
  }
  report.drumMaterialsTinted = tinted.size;

  // ---------------------------------------------------------------- 2. the spinning brushes
  const brushes = [];
  if (brushBytes) {
    const gltf = await loaderParse(brushBytes);
    let src = null; gltf.scene.traverse((o) => { if (o.isMesh && !src) src = o; });
    // the wheel without the bracket welded under it: drop the bracket's gold and lavender triangles at the bottom and
    // anything outside the bristle disc
    const g0 = src.geometry, pos = g0.attributes.position, colA = g0.attributes.color, idx = g0.index.array, keep = [];
    const c = new THREE.Color();
    for (let t = 0; t < idx.length; t += 3) {
      const a = idx[t], b = idx[t + 1], d = idx[t + 2];
      const cx = (pos.getX(a) + pos.getX(b) + pos.getX(d)) / 3, cy = (pos.getY(a) + pos.getY(b) + pos.getY(d)) / 3;
      const r = Math.hypot(cx, cy);
      c.setRGB((colA.getX(a) + colA.getX(b) + colA.getX(d)) / 3, (colA.getY(a) + colA.getY(b) + colA.getY(d)) / 3, (colA.getZ(a) + colA.getZ(b) + colA.getZ(d)) / 3);
      const hsl = {}; c.getHSL(hsl);
      const metal = (hsl.h > 0.07 && hsl.h < 0.17 && hsl.s > 0.35) || (hsl.h > 0.66 && hsl.h < 0.84 && hsl.s < 0.45 && hsl.l > 0.55);
      if (r > 0.96 || (cy < -0.58 && metal) || cy < -0.86) continue;
      keep.push(a, b, d);
    }
    // lighter for phones: nearby points merged (vertex clustering, the method the delivered file was made with), colours
    // averaged, so each brush draws about a quarter of the triangles with the same silhouette and colours
    const wheelGeo = clusterGeometry(g0, keep, P.cluster);
    if (R2) smoothColours(wheelGeo, 2, 0.6);   // round2: the speckled bristle colours evened out, so each brush reads as one soft shape
    report.brushTriangles = wheelGeo.index.count / 3; report.brushTrianglesDelivered = idx.length / 3;
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, metalness: 0.15, side: THREE.DoubleSide });
    // round2: a soft pale sheen around the rim of each brush (fresnel), so the shape stays clean against the walls
    const glowLine = R2 ? '\n  totalEmissiveRadiance += vec3(1.0, 0.88, 0.97) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.5) * 0.4;' : '';
    if (R2) mat.roughness = 0.85;
    const lightBlue = R2 ? `{ vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
        diffuseColor.rgb = mix(c, vec3(${R2.brushBlue.join(', ')}) * (0.6 + 0.6 * dot(c, vec3(0.333))), blue * ${R2.brushBlueMix}); }` : '';
    mat.onBeforeCompile = (s) => { s.fragmentShader = s.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\n' + lightBlue).replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance += diffuseColor.rgb * 0.35;' + glowLine); };
    mat.customProgramCacheKey = () => 's4:brush' + (R2 ? '2' : '');
    if (R3) r3Brush(mat, false, glowLine);
    const hubMat = new THREE.MeshStandardMaterial({ color: 0xffc552, metalness: 1, roughness: 0.2, emissive: 0x4a2a00, emissiveIntensity: 0.5 });
    // the left-hand brushes pink all over, as the approved screen's left brush (its blue face turned pink)
    const matPink = mat.clone();
    matPink.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
        { vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
          diffuseColor.rgb = mix(c, vec3(${R2 ? R2.brushPink.join(', ') : '1.0, 0.42, 0.78'}) * (${R2 ? '0.62 + 0.6' : '0.5 + 0.7'} * dot(c, vec3(0.333))), blue * 0.92); }`)
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance += diffuseColor.rgb * 0.35;' + glowLine);
    };
    matPink.customProgramCacheKey = () => 's4:brushPink' + (R2 ? '2' : '');
    if (R3) r3Brush(matPink, true, glowLine);
    const place = (u, side, angleDeg, hazard) => {
      TR.frame(u, F);
      const holder = new THREE.Group();
      let x, y;
      if (hazard) { x = side * P.brushX; y = P.brushY; }
      else { const a = THREE.MathUtils.degToRad(angleDeg), rr = 1.95; x = side * Math.cos(a) * rr; y = axisH + Math.sin(a) * rr; }
      holder.position.copy(F.P).addScaledVector(F.R, x).addScaledVector(F.U, y);
      // its face looks back down the tunnel toward the coming rider, turned in toward the middle
      const back = F.T.clone().negate(), inward = F.R.clone().multiplyScalar(-side);
      const face = back.multiplyScalar(Math.cos(THREE.MathUtils.degToRad(P.turnIn))).addScaledVector(inward, Math.sin(THREE.MathUtils.degToRad(P.turnIn))).normalize();
      const basis = new THREE.Matrix4().lookAt(new THREE.Vector3(), face.clone().negate(), F.U);   // object +Z toward `face`
      holder.quaternion.setFromRotationMatrix(basis);
      const wheel = new THREE.Mesh(wheelGeo, side > 0 ? matPink : mat); wheel.scale.setScalar(P.brushR / 0.95);
      const spinner = new THREE.Group(); spinner.add(wheel); holder.add(spinner);
      if (R4) { spinner.add(r4PomPom(side > 0, wheel.scale.x)); wheel.visible = false; }   // round4: a fluffy pom-pom instead of the wheel, turning as it did
      // a gold axle and arm back to the wall where the bracket was
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.1, 16), hubMat); arm.rotation.x = Math.PI / 2; arm.position.z = -0.75; holder.add(arm);
      holder.name = 's4Brush'; scene.add(holder);
      const b = { holder, spinner, u, side, hazard, hit: false, dir: side * (hazard ? 1 : 0.6), base: holder.position.clone(), out: F.R.clone().multiplyScalar(side), cleared: false, clear: 0, bonk: 0 };
      brushes.push(b);
      return b;
    };
    for (const [u, side] of P.hazards) place(u, side, 0, true);   // u: metres along the path from its start (the drum begins at 3.9)
    for (const [u, side, a] of P.deco) place(u, side, a, false);
    report.brushes = brushes.length; report.hazards = P.hazards.length;
  }
  const hits = [];
  // round2: Bubble Blast (game.js) pushes the low brushes between u0 and u1 back to the wall for this lap; a brush the mascot
  // touches while it is protected (Turbo Spin, Bubble Blast) is only knocked spinning, without a knock to the mascot.
  hooks.clearBrushes = (u0, u1) => {
    let n = 0;
    for (const b of brushes) if (b.hazard && !b.cleared && b.u >= u0 && b.u <= u1) { b.cleared = true; n++; if (hooks.pop) hooks.pop(b.holder.position); }
    return n;
  };
  hooks.hazards = () => brushes.filter((b) => b.hazard).map((b) => ({ u: b.u, side: b.side, cleared: b.cleared }));
  updaters.push((dt, t, phase) => {
    time.value = t;
    for (const b of brushes) {
      const ahead = b.u - mascot.z;
      b.holder.visible = mascot.z > TS - 14 && ahead < P.showAhead && ahead > -P.showBehind;
      if (b.cleared && mascot.z > b.u + P.showBehind) b.cleared = false;   // back in place, out of sight, for the next lap
      const tgt = b.cleared ? 1 : 0;
      // round4: brushes slide out of the tunnel's wall as the rider comes within reach (hidden behind the lining until then),
      // so the far tunnel stays open and its bright heart shows, as in the approved picture; where they stand is unchanged
      const emerge = R4 ? THREE.MathUtils.smoothstep(ahead, R4.emerge[0], R4.emerge[1]) * R4.emerge[2] : 0;
      if (b.clear !== tgt || R4) {
        if (b.clear !== tgt) b.clear = b.holder.visible ? THREE.MathUtils.clamp(b.clear + Math.sign(tgt - b.clear) * dt / 0.35, 0, 1) : tgt;
        const e = b.clear * b.clear * (3 - 2 * b.clear);
        b.holder.position.copy(b.base).addScaledVector(b.out, e * (R2 ? R2.clearOut : 0) + emerge);
      }
      b.bonk = Math.max(0, b.bonk - dt);
      if (b.holder.visible) b.spinner.rotation.z += P.spin * b.dir * dt * (1 - 0.7 * b.clear + 5 * b.bonk);
    }
    if (hazU) hazU.forEach((v, i) => { const b = hazardList[i]; v.z = b.cleared ? 0 : 1; });
    if (phase !== 'running') return;
    const m = mascot;
    for (const b of brushes) {
      if (!b.hazard) continue;
      if (Math.abs(m.z - b.u) > 1.25) { if (m.z > b.u + 1.5) b.hit = false; continue; }   // re-armed for the next lap
      if (b.hit || b.cleared || m.air && m.yAbs - W.surface(L, m.x, m.z, t) > 2.2) continue;
      if (b.side * m.x > 0.33) {
        b.hit = true;
        const knocked = bump(b.side);
        hits.push({ t: +t.toFixed(2), u: b.u, side: b.side, lane: m.lane, knocked: knocked !== false });
        if (knocked === false) b.bonk = 0.5;
      }
    }
  });
  report.hits = hits;
  const hazardList = brushes.filter((b) => b.hazard);
  const hazU = R2 ? hazardList.map((b) => new THREE.Vector4(b.u, W.laneX(b.side > 0 ? 0 : 2), 1, 0)) : null;
  while (hazU && hazU.length < 6) hazU.push(new THREE.Vector4(-999, 0, 0, 0));

  // ---------------------------------------------------------------- 3. soap bubbles in the drum
  if (soap) {
    const n = R2 ? R2.bubbles : P.bubbles, rnd = mulberry(0x5b0b);
    const sphere = new THREE.SphereGeometry(1, 26, 16);
    const g = new THREE.InstancedBufferGeometry();
    g.index = sphere.index; g.setAttribute('position', sphere.attributes.position); g.setAttribute('normal', sphere.attributes.normal);
    const inst = new Float32Array(n * 4), mot = new Float32Array(n * 4), v = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      const u = TS + 1.5 + rnd() * (TE - TS - 3);
      let a = THREE.MathUtils.degToRad(-10 + rnd() * 200), rr = 1.05 + rnd() * 0.85;   // above the water, around the sides and top
      if (R2) { a = THREE.MathUtils.degToRad(R2.bubbleAngle[0] + (a / Math.PI * 180 + 10) / 200 * (R2.bubbleAngle[1] - R2.bubbleAngle[0])); rr = R2.bubbleR[0] + (rr - 1.05) / 0.85 * (R2.bubbleR[1] - R2.bubbleR[0]); }
      TR.map(Math.cos(a) * rr, axisH + Math.sin(a) * rr, u, v);
      const r0 = 0.06 + Math.pow(rnd(), 2.2) * 0.42;
      inst.set([v.x, v.y, v.z, R2 ? 0.05 + (r0 - 0.06) * (R2.bubbleMax - 0.05) / 0.42 : r0], i * 4); mot.set([rnd() * 6.28, rnd() < 0.3 ? 0.08 : 0, 0.04, 0], i * 4);
    }
    g.setAttribute('inst', new THREE.InstancedBufferAttribute(inst, 4)); g.setAttribute('motion', new THREE.InstancedBufferAttribute(mot, 4));
    g.instanceCount = n;
    const u = { uTime: time, uMotion: { value: 1 }, uAvoid: { value: new THREE.Vector3(0, -99, 0) }, uCentreAlpha: { value: 0.035 }, uFilm: { value: 1.3 } };
    const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: soap.vertex, fragmentShader: soap.fragment, transparent: true, depthWrite: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
    const mesh = new THREE.Mesh(g, mat); mesh.frustumCulled = false; mesh.renderOrder = 5; mesh.name = 's4Bubbles';
    scene.add(mesh);
    updaters.push(() => { u.uAvoid.value.copy(mascot.root.position); });
    report.bubbles = n;
  }

  // ---------------------------------------------------------------- 4. the drum's water: foam around the mascot, turquoise
  const drumSheet = (waterSheets || []).find((s) => { s.geometry.computeBoundingBox(); return s.geometry.boundingBox.min.z > TS - 5; });
  const anchor = '  vec3 lit = col * (0.8 + 0.3 * NdotL);';
  if (drumSheet && drumSheet.material.fragmentShader.includes(anchor)) {
    const src = drumSheet.material, m = src.clone();
    m.uniforms = src.uniforms;
    if (R2) {
      src.uniforms.uS4Haz = { value: hazU }; src.uniforms.uS4Warn = { value: new THREE.Vector3(...R2.hazardWarn, R2.hazardWidth) };
      // The slide's water sheet runs on 2.5 m into the drum (to u 6.4) over the drum's sheet, and the two fought for depth in
      // streaks, so half of the first brushes' warning was covered by the slide's water. The drum's sheet now wins there.
      m.polygonOffset = true; m.polygonOffsetFactor = -1; m.polygonOffsetUnits = -4;
    }
    m.fragmentShader = (R2 ? 'uniform vec4 uS4Haz[6]; uniform vec3 uS4Warn;\n' : '') + src.fragmentShader.replace(anchor, R2 ? (R3 ? WATER_R2.replace(anchor, waterR3() + (R4 ? waterR4() : '') + anchor) : WATER_R2) : `  if (inDrum > 0.0) {   // Screen 4 tunnel look (?s3=tunnel)
    vec2 toM = xz - uPlayer.xz; float rM = length(toM * vec2(1.0, 0.85));
    float collar = exp(-pow(max(0.0, rM - 0.42) / 0.42, 2.0));
    float behindM = clamp(-toM.y / 3.2, 0.0, 1.0);
    float trailV = exp(-pow((abs(toM.x) - (0.45 + behindM * 0.95)) / 0.17, 2.0)) * step(toM.y, 0.2) * (1.0 - behindM);
    float st = bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - flowT * 0.5));
    foam = max(foam, smoothstep(0.28, 0.72, (collar + trailV * 0.85) * (0.7 + 0.6 * st)) * inDrum);
    col = mix(col, mix(uShallow, uTurq, 0.55), 0.35 * inDrum);
  }
` + anchor);
    if (R2) m.fragmentShader = m.fragmentShader.replace(FOG_ANCHOR, WATER_R2_LATE + FOG_ANCHOR);
    drumSheet.material = m; report.waterCopy = true;
    if (R2) report.warnShader = m.fragmentShader.includes("a brush's warning");
  }
  if (R2) report.round2 = round2Light({ scene, round2, mascot, updaters, time, TS });
  if (R3) report.round3 = buildRound3({ scene, TR, L, W, mascot, updaters, time, soap, round4: !!R4 });
  if (R4) report.round4 = buildRound4({ scene, TR, L, W, updaters, time, env: round2.env, mascot,
    hide: [scene.getObjectByName('s4Rings'), scene.getObjectByName('r3Swirl'), ...(drumMeshes || [])] });
  return report;
}

/** round3: the brushes recoloured as the approved Screen 4's: the bristles (and the gold rings on the wheel, which the
 *  approved brushes do not show) become soft clumps of hot pink and white, and the blue face a deep royal blue on the
 *  right-hand brushes (round2 made it a pale periwinkle) or pink and white on the left-hand ones. Worked out on the wheel's own colours and shape (angle and distance from its axle), so the
 *  model's light and shade are kept. Its colours are uniforms (window.__bwR3.brushU) so they can be tried live in tests. */
const r3BrushU = { uR3Pink: { value: new THREE.Color() }, uR3White: { value: new THREE.Color() }, uR3Royal: { value: new THREE.Color() }, uR3Deep: { value: new THREE.Color() }, uR3Tufts: { value: 26 }, uR3Core: { value: 0.45 } };
/** round4: the approved Screen 4's brushes are big round pom-poms made of fluffy clumps, pink and white outside and royal blue
 *  in the middle (pink and white all over on the left). Here: a dome of soft clumps (instanced, 80 triangles each) spread
 *  evenly over a flattened half-sphere facing the rider, plus a fluffy rim round its back edge, on the brush's own spinning
 *  axle. The user's brush wheel underneath is hidden; the hazard (where it stands, what it knocks) is unchanged. */
let tuftGeo = null; const tuftMats = {};
function r4PomPom(left, wheelScale) {
  const B = ROUND4.pompom;
  if (!tuftGeo) {
    tuftGeo = new THREE.SphereGeometry(1, 10, 8);   // indexed, so the bumps below are smooth-shaded, not faceted
    const p = tuftGeo.attributes.position, v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); const n = 1 + 0.16 * Math.sin(v.x * 7.1 + v.y * 3.3) * Math.sin(v.z * 5.7 - v.y * 4.1); v.multiplyScalar(n); p.setXYZ(i, v.x, v.y, v.z); }
    tuftGeo.computeVertexNormals();
  }
  const key = left ? 'L' : 'R';
  if (!tuftMats[key]) {
    const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, metalness: 0 });
    m.onBeforeCompile = (sh) => {
      // fine strands along each clump (darker grooves between them) and a soft pale sheen round its edge: fluff, not plastic
      sh.vertexShader = 'varying vec3 vTuft;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vTuft = position;');
      sh.fragmentShader = 'varying vec3 vTuft;\n' + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
  { float ang = atan(vTuft.z, vTuft.x);
    float strand = 0.5 + 0.5 * sin(ang * 14.0 + vTuft.y * 3.0) * sin(ang * 23.0 - vTuft.y * 5.0 + 1.3);
    diffuseColor.rgb *= 1.0 - ${B.strands.toFixed(3)} * (1.0 - strand) * smoothstep(-0.6, 0.6, vTuft.y); }`)
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${B.glow.toFixed(3)} + vec3(1.0, 0.92, 0.98) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.0) * ${B.sheen.toFixed(3)};`);
    };
    m.customProgramCacheKey = () => 's4:tuft4b';
    tuftMats[key] = m;
  }
  const n = B.count + B.rim;
  const mesh = new THREE.InstancedMesh(tuftGeo, tuftMats[key], n);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3(), col = new THREE.Color(), nrm = new THREE.Vector3();
  const rnd = mulberry(left ? 0x7a1 : 0x7a2), golden = Math.PI * (3 - Math.sqrt(5));
  const pick = (t) => { const bands = left ? B.left : B.right; t += (rnd() - 0.5) * 0.06; for (const b of bands) if (t <= b[0]) return b[1][Math.floor(rnd() * b[1].length)]; return bands[bands.length - 1][1][0]; };
  for (let i = 0; i < n; i++) {
    let th, ph;
    if (i < B.count) { const f = (i + 0.5) / B.count; th = Math.acos(1 - f * (1 - Math.cos(THREE.MathUtils.degToRad(B.cap)))); ph = i * golden; }   // even over the dome
    else { th = THREE.MathUtils.degToRad(B.cap + 4 + rnd() * 10); ph = (i - B.count) / B.rim * Math.PI * 2 + rnd() * 0.2; }                          // the rim
    nrm.set(Math.sin(th) * Math.cos(ph), Math.sin(th) * Math.sin(ph), Math.cos(th));
    pos.set(nrm.x * B.radius, nrm.y * B.radius, nrm.z * B.radius * B.depth - B.radius * B.depth * 0.35);
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), nrm);
    const s0 = B.size * (0.8 + rnd() * 0.4) * (i < B.count ? 1 : 1.15);
    sc.set(s0, s0 * B.long, s0);
    m4.compose(pos, q, sc); mesh.setMatrixAt(i, m4);
    col.setRGB(...pick(th / THREE.MathUtils.degToRad(B.cap))).multiplyScalar(0.9 + rnd() * 0.18); mesh.setColorAt(i, col);
  }
  mesh.scale.setScalar(wheelScale); mesh.name = 'r4PomPom'; mesh.frustumCulled = false;
  return mesh;
}

const R3_NOISE = `float r3h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float r3n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(r3h(i), r3h(i + vec2(1, 0)), f.x), mix(r3h(i + vec2(0, 1)), r3h(i + vec2(1, 1)), f.x), f.y); }
`;
function r3Brush(m, left, glowLine) {
  const B = ROUND3.brush;
  r3BrushU.uR3Pink.value.setRGB(...B.pink); r3BrushU.uR3White.value.setRGB(...B.white); r3BrushU.uR3Royal.value.setRGB(...B.royal); r3BrushU.uR3Deep.value.setRGB(...B.deep); r3BrushU.uR3Tufts.value = B.tufts; r3BrushU.uR3Core.value = B.core;
  if (typeof window !== 'undefined') window.__bwR3 = Object.assign(window.__bwR3 || {}, { brushU: r3BrushU, ROUND3 });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, r3BrushU);
    sh.vertexShader = 'varying vec3 vR3Obj;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vR3Obj = position;');
    sh.fragmentShader = 'varying vec3 vR3Obj; uniform vec3 uR3Pink, uR3White, uR3Royal, uR3Deep; uniform float uR3Tufts, uR3Core;\n' + R3_NOISE + sh.fragmentShader
      .replace('#include <color_fragment>', `#include <color_fragment>
        { vec3 c = diffuseColor.rgb; float l = dot(c, vec3(0.333));
          float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
          float rr = length(vR3Obj.xy), ang = atan(vR3Obj.y, vR3Obj.x);
          vec2 q = vec2(ang * uR3Tufts / 6.2832, rr * 8.0);   // tufts round the wheel and outward from the axle
          float clump = r3n(vR3Obj.xy * 7.0) * 0.65 + r3n(vR3Obj.xy * 15.0 + 7.0) * 0.35;   // soft clumps (no seam round the wheel)
          float tuft = 0.74 + 0.26 * r3n(q * vec2(3.0, 5.0) + 3.0);
          float shade = 0.72 + 0.5 * smoothstep(0.1, 0.8, l);
          vec3 fluff = mix(uR3Pink, uR3White, smoothstep(${left ? '0.55, 0.68' : '0.38, 0.52'}, clump)) * tuft * shade;
          vec3 face = ${left ? 'fluff' : 'mix(uR3Royal, uR3Deep, smoothstep(0.35, 0.75, clump) * 0.7) * (0.85 + 0.3 * tuft) * shade'};
          diffuseColor.rgb = mix(fluff, face, blue * (1.0 - smoothstep(uR3Core, uR3Core + 0.1, rr))); }`)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance += diffuseColor.rgb * 0.35;' + glowLine);
  };
  m.customProgramCacheKey = () => 's4:brush3' + (left ? 'L' : 'R');
}

/** Vertex clustering: points in the same cell of size `cell` become one (averaged position and colour); triangles that
 *  collapse are dropped. Only the triangles in `keep` (indices into g0) are used. */
function clusterGeometry(g0, keep, cell) {
  const pos = g0.attributes.position, col = g0.attributes.color, ids = new Map(), acc = [], vid = new Map();
  const idOf = (i) => {
    if (vid.has(i)) return vid.get(i);
    const k = Math.floor(pos.getX(i) / cell) + ',' + Math.floor(pos.getY(i) / cell) + ',' + Math.floor(pos.getZ(i) / cell);
    let id = ids.get(k);
    if (id === undefined) { id = acc.length; ids.set(k, id); acc.push([0, 0, 0, 0, 0, 0, 0]); }
    const a = acc[id]; a[0] += pos.getX(i); a[1] += pos.getY(i); a[2] += pos.getZ(i);
    if (col) { a[3] += col.getX(i); a[4] += col.getY(i); a[5] += col.getZ(i); }
    a[6]++; vid.set(i, id); return id;
  };
  const tri = [];
  for (let t = 0; t < keep.length; t += 3) {
    const a = idOf(keep[t]), b = idOf(keep[t + 1]), c = idOf(keep[t + 2]);
    if (a !== b && b !== c && a !== c) tri.push(a, b, c);
  }
  const n = acc.length, P = new Float32Array(n * 3), C = new Float32Array(n * 3);
  acc.forEach((a, i) => { P.set([a[0] / a[6], a[1] / a[6], a[2] / a[6]], i * 3); C.set([a[3] / a[6], a[4] / a[6], a[5] / a[6]], i * 3); });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(P, 3)); if (col) g.setAttribute('color', new THREE.BufferAttribute(C, 3));
  g.setIndex(tri); g.computeVertexNormals(); g.computeBoundingSphere();
  return g;
}

function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

const RING_VERTEX = /* glsl */ `
attribute float aU;
varying float vR; varying vec3 vC; varying float vU; varying float vA; varying float vDepth;
void main() {
  vR = length(position.xy); vA = atan(position.y, position.x); vU = aU;
  vC = instanceColor;
  vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`;
// a bright line on the band's inner edge, a soft glow across it, a fainter line at its outer edge, sparkles, a slow
// light wave down the tunnel; the far rings dim a little so the near ones read, the overlap still brightens the centre
const RING_FRAGMENT = /* glsl */ `
uniform float uTime, uIn, uOut, uSpark;
varying float vR; varying vec3 vC; varying float vU; varying float vA; varying float vDepth;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  float k = (vR - uIn) / (uOut - uIn);
  float core = exp(-pow((k - 0.06) / 0.045, 2.0)) * 1.9 + exp(-pow((k - 0.9) / 0.035, 2.0)) * 0.5;
  float glow = (1.0 - smoothstep(0.0, 0.7, k)) * 0.12;
  vec2 g = vec2(vA * 28.0, vU * 3.0); vec2 c = floor(g);
  float sp = step(uSpark, h21(c)) * (1.0 - smoothstep(0.0, 0.25, length(fract(g) - 0.5))) * pow(max(0.0, sin(uTime * 3.5 + h21(c + 3.0) * 30.0)), 6.0);
  float wave = 0.72 + 0.28 * sin(vU * 0.9 - uTime * 3.0);
  float fade = 1.0 - 0.45 * smoothstep(6.0, 26.0, vDepth);
  vec3 col = vC * (core + glow) * wave * fade + vec3(1.0) * sp * 0.9;
  gl_FragColor = vec4(col, 1.0);
}
`;

/** round3: the rings' light scaled down near the camera (so the deep blue between them shows) and, further down the tube,
 *  whiter and undimmed, so they gather into the bright white-cyan heart of the approved Screen 4's tunnel. */
function r3Rings(R3) {
  const F = R3.ringFar;
  return RING_FRAGMENT.replace('float fade = 1.0 - 0.45 * smoothstep(6.0, 26.0, vDepth);', `float fade = 1.0 - ${(0.45 * (1 - F.keep)).toFixed(3)} * smoothstep(6.0, 26.0, vDepth);`)
    .replace('gl_FragColor = vec4(col, 1.0);', `float far = smoothstep(${F.from.toFixed(2)}, ${F.to.toFixed(2)}, vDepth);
  col = mix(col * ${R3.ringGlow.toFixed(3)}, vec3(0.85, 0.95, 1.0) * (core + glow) * wave * ${F.bright.toFixed(3)}, far * ${F.white.toFixed(3)});
  gl_FragColor = vec4(col, 1.0);`);
}

/** round2: neighbouring vertices' colours averaged `iters` times (mixed by `k`), so speckled bristle colours read as soft areas. */
function smoothColours(g, iters, k) {
  const col = g.attributes.color, idx = g.index.array, n = col.count, nb = Array.from({ length: n }, () => new Set());
  for (let t = 0; t < idx.length; t += 3) { const a = idx[t], b = idx[t + 1], c = idx[t + 2]; nb[a].add(b).add(c); nb[b].add(a).add(c); nb[c].add(a).add(b); }
  let cur = Float32Array.from(col.array);
  for (let it = 0; it < iters; it++) {
    const next = new Float32Array(cur.length);
    for (let i = 0; i < n; i++) {
      let r = 0, gg = 0, bb = 0, m = 0;
      for (const j of nb[i]) { r += cur[j * 3]; gg += cur[j * 3 + 1]; bb += cur[j * 3 + 2]; m++; }
      if (!m) { next.set(cur.subarray(i * 3, i * 3 + 3), i * 3); continue; }
      next[i * 3] = cur[i * 3] * (1 - k) + (r / m) * k; next[i * 3 + 1] = cur[i * 3 + 1] * (1 - k) + (gg / m) * k; next[i * 3 + 2] = cur[i * 3 + 2] * (1 - k) + (bb / m) * k;
    }
    cur = next;
  }
  col.array.set(cur); col.needsUpdate = true;
}

/** round2: the light inside the drum. The exit's white burst of rays becomes a coloured vortex (a small white heart, cyan, then
 *  pink and lavender spiral arms on deep blue), its extra glow is dimmed, and while the mascot is in the drum the picture is
 *  graded so pale areas regain colour and the brightest areas roll off instead of turning white (grade pass, own uniform). */
function round2Light({ round2, mascot, updaters, time, TS }) {
  const out = { exit: false, grade: false };
  const { exitLight, grade, bloomPass } = round2;
  if (exitLight && exitLight[0]) {
    exitLight[0].material = new THREE.ShaderMaterial({ uniforms: { uTime: time }, vertexShader: EXIT_VERTEX, fragmentShader: EXIT_FRAGMENT });
    if (exitLight[1]) exitLight[1].material.color.setRGB(0.12, 0.16, 0.3);
    out.exit = true;
  }
  const G = ROUND2.grade;
  if (grade && grade.material.fragmentShader.includes('if (uOpen > 0.0) {')) {
    grade.uniforms.uS4Grade = { value: 0 };
    grade.material.fragmentShader = grade.material.fragmentShader.replace('uniform sampler2D tDiffuse;', 'uniform sampler2D tDiffuse; uniform float uS4Grade;')
      .replace('if (uOpen > 0.0) {', `if (uS4Grade > 0.0) {   // ?s3=round2: inside the drum, rich and never washed out
        vec3 g = c.rgb;
        float lg = dot(g, vec3(0.2126, 0.7152, 0.0722));
        float mx = max(g.r, max(g.g, g.b)), mn = min(g.r, min(g.g, g.b));
        float sat = (mx - mn) / max(mx, 1e-4);
        g = max(mix(vec3(lg), g, 1.0 + ${G.vibrance.toFixed(3)} * (1.0 - sat) * smoothstep(0.05, 0.35, lg)), 0.0);
        float l2 = dot(g, vec3(0.2126, 0.7152, 0.0722));
        float kn = l2 > ${G.knee.toFixed(3)} ? ${G.knee.toFixed(3)} + (l2 - ${G.knee.toFixed(3)}) / (1.0 + (l2 - ${G.knee.toFixed(3)}) * ${G.roll.toFixed(3)}) : l2;
        g *= kn / max(l2, 1e-4);
        c.rgb = mix(c.rgb, g, uS4Grade);${round2.round4 ? `
        { vec3 h = c.rgb * ${ROUND4.grade.exposure.toFixed(3)};   // ?s3=round4: richer and less pastel inside the drum
          float lh = dot(h, vec3(0.2126, 0.7152, 0.0722));
          h = mix(vec3(lh), h, ${ROUND4.grade.saturation.toFixed(3)});
          h = (h - ${ROUND4.grade.pivot.toFixed(3)}) * ${ROUND4.grade.contrast.toFixed(3)} + ${ROUND4.grade.pivot.toFixed(3)};
          c.rgb = mix(c.rgb, max(h, 0.0), uS4Grade); }` : ''}
      }
      if (uOpen > 0.0) {`);
    grade.material.needsUpdate = true;
    out.grade = true;
  }
  const bloom0 = bloomPass ? bloomPass.strength : 0;
  updaters.push(() => {
    const k = THREE.MathUtils.smoothstep(mascot.z, TS - 0.5, TS + 2.5);
    if (out.grade) grade.uniforms.uS4Grade.value = k;
    if (bloomPass) bloomPass.strength = bloom0 + (ROUND2.bloom - bloom0) * k;
  });
  return out;
}

const EXIT_VERTEX = /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const EXIT_FRAGMENT = /* glsl */ `
uniform float uTime; varying vec2 vUv;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  vec2 p = (vUv - 0.5) * 16.0; float r = length(p), a = atan(p.y, p.x), lr = log(max(r, 0.05));
  float sw = a * 3.0 + lr * 4.5 - uTime * 2.0;
  float armP = smoothstep(0.55, 0.9, 0.5 + 0.5 * sin(sw));             // pink spiral arms
  float armC = smoothstep(0.55, 0.9, 0.5 + 0.5 * sin(sw + 3.1416));    // cyan arms between them
  float rings = smoothstep(0.8, 0.98, 0.5 + 0.5 * sin(lr * 10.0 - uTime * 3.0));
  vec3 col = mix(vec3(0.3, 0.22, 0.8), vec3(0.07, 0.09, 0.42), smoothstep(0.8, 3.5, r));   // violet into deep blue
  float band = smoothstep(0.35, 1.0, r) * (1.0 - smoothstep(3.0, 6.5, r));
  col += vec3(1.0, 0.36, 0.78) * armP * band * 0.75;
  col += vec3(0.2, 0.85, 1.0) * armC * band * 0.6;
  col += vec3(0.75, 0.6, 1.0) * rings * band * 0.35;
  col = mix(col, vec3(0.55, 0.92, 1.0), 1.0 - smoothstep(0.25, 1.2, r));   // a cyan glow round
  col = mix(col, vec3(1.0), 1.0 - smoothstep(0.08, 0.45, r));               // a small white heart
  vec2 g = vec2(a * 10.0, lr * 6.0 - uTime * 0.8), c = floor(g);
  float sp = step(0.93, h21(c)) * (1.0 - smoothstep(0.05, 0.3, length(fract(g) - 0.5))) * (0.5 + 0.5 * sin(uTime * 5.0 + h21(c + 2.0) * 20.0));
  col += vec3(1.0) * sp * 0.7 * smoothstep(0.6, 1.5, r);
  gl_FragColor = vec4(col, 1.0);
}
`;

// round2 water in the drum: saturated cyan-blue water with thin bubble lace around the mascot (a white contact line and a V
// trail, the water showing between the bubbles) instead of a solid white blanket; faint flowing lane guides between the
// three lanes; and a soft pulsing pink glow down the lane of each brush ahead (gone once Bubble Blast has cleared it).
const WATER_R2 = `  float s4Haz = 0.0;
  if (inDrum > 0.0) {   // Screen 4 tunnel, round 2 (?s3=round2)
    vec2 toM = xz - uPlayer.xz; float rM = length(toM * vec2(1.0, 0.85));
    float run = uPlayerMove.y;
    foam *= mix(1.0, 0.4, inDrum);
    vec2 bc = bwVoronoi(xz * vec2(9.0, 6.5) - vec2(0.0, flowT * 0.32));
    float rims = 1.0 - smoothstep(0.02, 0.075, bc.y - bc.x);
    float churn = exp(-pow(max(0.0, rM - 0.45) / 0.6, 2.0));
    float contact = exp(-pow((rM - 0.5) / 0.08, 2.0));
    float behindM = clamp(-toM.y / 3.0, 0.0, 1.0);
    float vTrail = exp(-pow((abs(toM.x) - (0.45 + behindM * 0.85)) / 0.12, 2.0)) * step(toM.y, 0.1) * (1.0 - behindM);
    float st = bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - flowT * 0.5));
    float lace = rims * clamp(churn * (0.6 + 0.5 * st) + vTrail * 0.8, 0.0, 1.0);
    foam = max(foam, clamp(max(lace * 0.8, smoothstep(0.35, 0.8, contact * (0.75 + 0.4 * st) + vTrail * 0.55)), 0.0, 1.0) * inDrum);
    col = mix(col, mix(uShallow, uTurq, 0.7) * 0.86, 0.5 * inDrum);
    col += uGlow * churn * smoothstep(0.12, 0.42, bc.x) * 0.1 * inDrum;
    float dash = smoothstep(0.35, 0.5, fract(xz.y * 0.55 - flowT * 0.18)) * (1.0 - smoothstep(0.85, 1.0, fract(xz.y * 0.55 - flowT * 0.18)));
    float guide = exp(-pow((abs(xz.x) - 0.35) / 0.035, 2.0)) * dash;
    col += vec3(0.75, 0.95, 1.0) * guide * 0.22 * inDrum;
    float haz = 0.0;
    for (int i = 0; i < 6; i++) {
      vec4 h = uS4Haz[i];
      float du = h.x - xz.y;
      float along = (1.0 - smoothstep(uS4Warn.y, uS4Warn.x, du)) * smoothstep(-1.0, -0.2, du);
      float dx = (xz.x - h.y) / uS4Warn.z;
      float across = exp(-dx * dx);
      float stripes = 0.55 + 0.45 * smoothstep(0.25, 0.55, fract(du * 1.2 + t * 1.6)) * (1.0 - smoothstep(0.75, 0.95, fract(du * 1.2 + t * 1.6)));
      haz = max(haz, along * across * h.z * stripes);
    }
    s4Haz = haz * (0.82 + 0.18 * sin(t * 7.0)) * inDrum;
    foam *= 1.0 - 0.8 * s4Haz;   // the warning stays clear of foam
  }
` + '  vec3 lit = col * (0.8 + 0.3 * NdotL);\n';
// ...and the pink is laid on last, after the reflections, ring light, glints and foam (just before the fog), so none of them
// wash it out. Applied earlier, under the reflections, it read as pale cyan in the game.
const FOG_ANCHOR = '  float dist = length(cameraPosition - vWorld);';
// round4: the drum's water rebuilt: the cell patterns (caustic web, bubble lace) that read as a tiled floor are taken out;
// turquoise in the middle and deeper blue at the sides; rolling crests moving with the flow; flowing streaks of white froth,
// thick and churned round the mascot
const waterR4 = () => { const P = ROUND4.water; return `  if (inDrum > 0.0) {   // ?s3=round4
    col -= mix(uGlow, vec3(1.0), 0.35) * caustic * (0.5 + 0.4 * crest) * (1.0 - moat * 0.6) * inDrum;
    vec2 toM4 = xz - uPlayer.xz; float rM4 = length(toM4 * vec2(1.0, 0.8));
    float centreW = 1.0 - smoothstep(0.25, 1.35, abs(xz.x));
    col = mix(col, mix(vec3(${P.side.join(', ')}), vec3(${P.middle.join(', ')}), centreW), ${P.mix.toFixed(3)} * inDrum);
    float roll = sin(xz.y * 2.4 - flowT * 1.15 + bwNoise(xz * vec2(1.5, 0.5)) * 3.0);
    float crestR = smoothstep(0.55, 1.0, roll);
    col += vec3(0.25, 0.8, 1.0) * crestR * ${P.crest.toFixed(3)} * inDrum;
    float st1 = bwFbm(vec2(xz.x * 5.0, xz.y * 0.7 - flowT * 0.55));
    float st2 = bwFbm(vec2(xz.x * 9.0 + 3.0, xz.y * 1.2 - flowT * 0.7));
    float froth = smoothstep(0.58, 0.78, st1) * 0.7 + smoothstep(0.62, 0.8, st2) * 0.4;
    float nearM = exp(-pow(max(0.0, rM4 - 0.4) / 1.5, 2.0));
    float churn = smoothstep(0.32, 0.72, bwFbm(xz * vec2(3.0, 1.6) - vec2(0.0, flowT * 0.5))) * nearM;
    float f4 = clamp(froth * (0.3 + 0.7 * crestR) * ${P.froth.toFixed(3)} + churn * ${P.churn.toFixed(3)}, 0.0, 1.0);
    foam = mix(foam, max(f4, foam * 0.25), inDrum) * (1.0 - s4Haz);
  }
`; };
// round3: the drum's water azure instead of turquoise, with white churned foam in patches across it, thicker near the
// mascot (the approved Screen 4's water is white-flecked blue, its turquoise only in thin streaks)
const waterR3 = () => { const P = ROUND3.water; return `  if (inDrum > 0.0) {   // ?s3=round3
    col = mix(col, vec3(${P.azure.join(', ')}), ${P.azureMix.toFixed(3)} * inDrum);
    vec2 b3 = bwVoronoi(xz * vec2(5.5, 3.8) - vec2(0.0, flowT * 0.42));
    float patch3 = smoothstep(0.42, 0.72, bwFbm(xz * vec2(1.7, 0.75) - vec2(0.0, flowT * 0.35)));
    float near3 = exp(-pow(max(0.0, length(xz - uPlayer.xz) - 0.5) / 1.8, 2.0));
    float lace3 = 1.0 - smoothstep(0.02, 0.11, b3.y - b3.x);
    foam = max(foam, clamp(lace3 * patch3 * (0.45 + 0.55 * near3) + smoothstep(0.62, 0.9, patch3) * near3 * 0.6, 0.0, 1.0) * ${P.foam.toFixed(3)} * inDrum * (1.0 - s4Haz));
  }
`; };
// The warning reaches full colour at s4Haz 0.6, so the soft stripes and pulse vary its strength without fading it to lavender
// (measured: a plain mix of s4Haz * 0.72 came out as RGB 179, 167, 243 after the tunnel's grade, not pink).
const WATER_R2_LATE = `  lit = mix(lit, vec3(1.0, 0.12, 0.5) * (0.85 + 0.25 * NdotL), clamp(s4Haz * 1.7, 0.0, 1.0) * ${ROUND2.hazardMix.toFixed(2)});   // ?s3=round2: a brush's warning\n`;
