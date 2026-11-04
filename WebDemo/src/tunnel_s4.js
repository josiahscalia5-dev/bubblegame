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

export async function buildTunnelS4({ scene, TR, L, W, camera, updaters, mascot, bump, brushBytes, waterSheets, soap, loaderParse, drumMeshes }) {
  const report = { rings: 0, brushes: 0, bubbles: 0, panelsHidden: 0, waterCopy: false };
  const P = TUNNEL, TS = L.tunnelStart, TE = L.tunnelEnd, axisH = W.WATER + W.AXIS_H;
  const time = { value: 0 };
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };

  // ---------------------------------------------------------------- 1. the ring vortex
  {
    const us = []; for (let u = TS + 0.6; u < TE - 0.6; u += P.ringStep) us.push(u);
    const geo = new THREE.RingGeometry(P.ringIn, P.ringOut, 112, 1);
    const mat = new THREE.ShaderMaterial({ uniforms: { uTime: time, uIn: { value: P.ringIn }, uOut: { value: P.ringOut } }, vertexShader: RING_VERTEX, fragmentShader: RING_FRAGMENT,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    const rings = new THREE.InstancedMesh(geo, mat, us.length);
    const cols = [new THREE.Color(0.5, 0.22, 1.0), new THREE.Color(1.0, 0.3, 0.78), new THREE.Color(0.12, 0.85, 1.0), new THREE.Color(0.45, 0.65, 1.0)];
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
            vec3 deep = mix(vec3(0.06, 0.08, 0.42), vec3(0.42, 0.36, 0.95), smoothstep(0.05, 0.75, l));
            diffuseColor.rgb = mix(diffuseColor.rgb * vec3(0.5, 0.55, 0.95), deep, 0.55); }`);
      };
      m.customProgramCacheKey = () => prevKey() + '|s4-deep';
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
    report.brushTriangles = wheelGeo.index.count / 3; report.brushTrianglesDelivered = idx.length / 3;
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, metalness: 0.15, side: THREE.DoubleSide });
    mat.onBeforeCompile = (s) => { s.fragmentShader = s.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance += diffuseColor.rgb * 0.35;'); };
    mat.customProgramCacheKey = () => 's4:brush';
    const hubMat = new THREE.MeshStandardMaterial({ color: 0xffc552, metalness: 1, roughness: 0.2, emissive: 0x4a2a00, emissiveIntensity: 0.5 });
    // the left-hand brushes pink all over, as the approved screen's left brush (its blue face turned pink)
    const matPink = mat.clone();
    matPink.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
        { vec3 c = diffuseColor.rgb; float blue = smoothstep(0.03, 0.2, c.b - max(c.r, c.g));
          diffuseColor.rgb = mix(c, vec3(1.0, 0.42, 0.78) * (0.5 + 0.7 * dot(c, vec3(0.333))), blue * 0.92); }`)
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance += diffuseColor.rgb * 0.35;');
    };
    matPink.customProgramCacheKey = () => 's4:brushPink';
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
      // a gold axle and arm back to the wall where the bracket was
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.1, 16), hubMat); arm.rotation.x = Math.PI / 2; arm.position.z = -0.75; holder.add(arm);
      holder.name = 's4Brush'; scene.add(holder);
      const b = { holder, spinner, u, side, hazard, hit: false, dir: side * (hazard ? 1 : 0.6) };
      brushes.push(b);
      return b;
    };
    for (const [u, side] of P.hazards) place(u, side, 0, true);   // u: metres along the path from its start (the drum begins at 3.9)
    for (const [u, side, a] of P.deco) place(u, side, a, false);
    report.brushes = brushes.length; report.hazards = P.hazards.length;
  }
  const hits = [];
  updaters.push((dt, t, phase) => {
    time.value = t;
    for (const b of brushes) {
      const ahead = b.u - mascot.z;
      b.holder.visible = mascot.z > TS - 14 && ahead < P.showAhead && ahead > -P.showBehind;
      if (b.holder.visible) b.spinner.rotation.z += P.spin * b.dir * dt;
    }
    if (phase !== 'running') return;
    const m = mascot;
    for (const b of brushes) {
      if (!b.hazard) continue;
      if (Math.abs(m.z - b.u) > 1.25) { if (m.z > b.u + 1.5) b.hit = false; continue; }   // re-armed for the next lap
      if (b.hit || m.air && m.yAbs - W.surface(L, m.x, m.z, t) > 2.2) continue;
      if (b.side * m.x > 0.33) { b.hit = true; hits.push({ t: +t.toFixed(2), u: b.u, side: b.side, lane: m.lane }); bump(b.side); }
    }
  });
  report.hits = hits;

  // ---------------------------------------------------------------- 3. soap bubbles in the drum
  if (soap) {
    const n = P.bubbles, rnd = mulberry(0x5b0b);
    const sphere = new THREE.SphereGeometry(1, 26, 16);
    const g = new THREE.InstancedBufferGeometry();
    g.index = sphere.index; g.setAttribute('position', sphere.attributes.position); g.setAttribute('normal', sphere.attributes.normal);
    const inst = new Float32Array(n * 4), mot = new Float32Array(n * 4), v = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      const u = TS + 1.5 + rnd() * (TE - TS - 3);
      const a = THREE.MathUtils.degToRad(-10 + rnd() * 200), rr = 1.05 + rnd() * 0.85;   // above the water, around the sides and top
      TR.map(Math.cos(a) * rr, axisH + Math.sin(a) * rr, u, v);
      inst.set([v.x, v.y, v.z, 0.06 + Math.pow(rnd(), 2.2) * 0.42], i * 4); mot.set([rnd() * 6.28, rnd() < 0.3 ? 0.08 : 0, 0.04, 0], i * 4);
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
    m.fragmentShader = src.fragmentShader.replace(anchor, `  if (inDrum > 0.0) {   // Screen 4 tunnel look (?s3=tunnel)
    vec2 toM = xz - uPlayer.xz; float rM = length(toM * vec2(1.0, 0.85));
    float collar = exp(-pow(max(0.0, rM - 0.42) / 0.42, 2.0));
    float behindM = clamp(-toM.y / 3.2, 0.0, 1.0);
    float trailV = exp(-pow((abs(toM.x) - (0.45 + behindM * 0.95)) / 0.17, 2.0)) * step(toM.y, 0.2) * (1.0 - behindM);
    float st = bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - flowT * 0.5));
    foam = max(foam, smoothstep(0.28, 0.72, (collar + trailV * 0.85) * (0.7 + 0.6 * st)) * inDrum);
    col = mix(col, mix(uShallow, uTurq, 0.55), 0.35 * inDrum);
  }
` + anchor);
    drumSheet.material = m; report.waterCopy = true;
  }
  return report;
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
uniform float uTime, uIn, uOut;
varying float vR; varying vec3 vC; varying float vU; varying float vA; varying float vDepth;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  float k = (vR - uIn) / (uOut - uIn);
  float core = exp(-pow((k - 0.06) / 0.045, 2.0)) * 1.9 + exp(-pow((k - 0.9) / 0.035, 2.0)) * 0.5;
  float glow = (1.0 - smoothstep(0.0, 0.7, k)) * 0.12;
  vec2 g = vec2(vA * 28.0, vU * 3.0); vec2 c = floor(g);
  float sp = step(0.9, h21(c)) * (1.0 - smoothstep(0.0, 0.25, length(fract(g) - 0.5))) * pow(max(0.0, sin(uTime * 3.5 + h21(c + 3.0) * 30.0)), 6.0);
  float wave = 0.72 + 0.28 * sin(vU * 0.9 - uTime * 3.0);
  float fade = 1.0 - 0.45 * smoothstep(6.0, 26.0, vDepth);
  vec3 col = vC * (core + glow) * wave * fade + vec3(1.0) * sp * 0.9;
  gl_FragColor = vec4(col, 1.0);
}
`;
