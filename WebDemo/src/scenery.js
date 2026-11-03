// The washing-machine works around the approved Screen 3 entrance that are built in code: a huge gold
// washing wheel on the lower right seen almost edge-on, a cream-and-gold housing under the left brush,
// curved gold pipes along the lower sides, pink fluffy trim and glowing bulbs, and inside the tunnel its
// glowing cyan rings, glowing pink panels in gold frames and turning gold gears.
// The water towers, the gears at the portal mouth and high on the left, the pipe elbows and the crown
// over the portal are the user's Meshy models (decor.js); the code-built towers and gears that stood in
// for them were removed when those models arrived.
//
// Positions were worked out from the approved screen for the Tap to Start camera (game.js S3): each
// piece sits where the approved image shows it. In front of the castle the run is the straight +Z
// line, so these are plain world coordinates (+X is screen-left).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export function buildScenery({ scene, mats, track }) {
  const root = new THREE.Group();
  root.name = 'scenery';
  scene.add(root);
  const spinners = [];   // { obj, axis (local), speed rad/s }
  const env = mats.env;

  // ---------------------------------------------------------------- materials
  const gold = mats.gold;
  const goldWarm = new THREE.MeshStandardMaterial({ color: 0xf2a93b, metalness: 1, roughness: 0.3, envMap: env, envMapIntensity: 1.25, emissive: 0x3a2200, emissiveIntensity: 0.6 });
  const blue = new THREE.MeshStandardMaterial({ color: 0x2457ff, metalness: 0.35, roughness: 0.26, envMap: env, envMapIntensity: 1.2 });
  const blueDeep = new THREE.MeshStandardMaterial({ color: 0x1736b8, metalness: 0.3, roughness: 0.3, envMap: env, envMapIntensity: 1.0 });
  const teal = new THREE.MeshStandardMaterial({ color: 0x14808c, metalness: 0.3, roughness: 0.25, envMap: env, envMapIntensity: 1.0 });
  const cream = new THREE.MeshStandardMaterial({ color: 0xf6dcb4, metalness: 0.25, roughness: 0.35, envMap: env, envMapIntensity: 0.9 });
  const fluff = fluffMaterial(0xff6fc8);
  const fluffWhite = fluffMaterial(0xfff0fa);
  const bulb = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 2.05, 1.35) });   // above 1: blooms

  const add = (obj, parent = root) => { parent.add(obj); return obj; };
  const mesh = (geo, mat, pos, parent) => { const m = new THREE.Mesh(geo, mat); if (pos) m.position.set(...pos); return add(m, parent); };
  /** A group whose local +Z (the face) looks along `dir` (world), placed at `pos`. */
  const facing = (pos, dir, parent = root) => {
    const g = new THREE.Group(); g.position.set(...pos);
    g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...dir).normalize());
    return add(g, parent);
  };
  /** Small glowing bulbs (or rivets) around a circle of radius r in the local XY plane at depth z. */
  const ring = (parent, r, n, size, mat, z = 0, phase = 0) => {
    const im = new THREE.InstancedMesh(new THREE.SphereGeometry(size, 10, 8), mat, n);
    const m4 = new THREE.Matrix4();
    for (let i = 0; i < n; i++) { const a = phase + (i / n) * Math.PI * 2; im.setMatrixAt(i, m4.makeTranslation(Math.cos(a) * r, Math.sin(a) * r, z)); }
    return add(im, parent);
  };
  /** Fluffy pink tufts around a circle (local XY plane). */
  const fluffRing = (parent, r, n, size, mat, z = 0) => {
    const geo = fluffGeometry();
    const im = new THREE.InstancedMesh(geo, mat, n);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2, k = size * (0.8 + 0.4 * hash(i * 7.1));
      q.setFromEuler(new THREE.Euler(hash(i) * 6, hash(i + 3) * 6, hash(i + 9) * 6)); s.set(k, k, k);
      im.setMatrixAt(i, m4.compose(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, z + (hash(i + 5) - 0.5) * size), q, s));
    }
    return add(im, parent);
  };

  // ---------------------------------------------------------------- shapes
  /** Chunky cartoon gear (local XY plane, face +Z): rounded teeth, bevelled, with a coloured hub. */
  const gearGeoCache = new Map();
  function gearGeometry(r, teeth, depth) {
    const key = `${r}|${teeth}|${depth}`;
    if (gearGeoCache.has(key)) return gearGeoCache.get(key);
    const sh = new THREE.Shape(), r0 = r * 0.8, step = (Math.PI * 2) / teeth;
    for (let i = 0; i < teeth; i++) {
      const a = i * step;
      const pts = [[r0, a], [r * 0.97, a + step * 0.1], [r, a + step * 0.22], [r, a + step * 0.34], [r * 0.97, a + step * 0.46], [r0, a + step * 0.56]];
      pts.forEach(([rr, aa], j) => { const x = Math.cos(aa) * rr, y = Math.sin(aa) * rr; if (i === 0 && j === 0) sh.moveTo(x, y); else sh.lineTo(x, y); });
    }
    sh.closePath();
    const hole = new THREE.Path(); hole.absarc(0, 0, r * 0.42, 0, Math.PI * 2, true); sh.holes.push(hole);
    const g = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: true, bevelThickness: depth * 0.35, bevelSize: r * 0.05, bevelSegments: 3, curveSegments: 6 });
    g.translate(0, 0, -depth / 2);
    gearGeoCache.set(key, g);
    return g;
  }

  // ---------------------------------------------------------------- the huge gold washing wheel (lower right)
  // Seen almost edge-on from the slide, as in the approved screen: a thick gold tyre with a toothed
  // outer band, blue spokes and drum face, glowing bulbs and pink fluffy trim.
  {
    const R = 1.3;
    const g = facing([-2.25, -0.3, -10.0], [0.94, 0.05, -0.34]);
    const wheel = add(new THREE.Group(), g);
    mesh(new THREE.TorusGeometry(R, 0.24, 20, 72), gold, null, wheel);
    mesh(new THREE.TorusGeometry(R - 0.32, 0.1, 12, 64), goldWarm, null, wheel);
    // toothed outer band
    const teeth = new THREE.InstancedMesh(new RoundedBoxGeometry(0.26, 0.2, 0.5, 2, 0.05), goldWarm, 28);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion();
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      q.setFromAxisAngle(new THREE.Vector3(0, 0, 1), a);
      teeth.setMatrixAt(i, m4.compose(new THREE.Vector3(Math.cos(a) * (R + 0.2), Math.sin(a) * (R + 0.2), 0), q, new THREE.Vector3(1, 1, 1)));
    }
    add(teeth, wheel);
    // blue drum face and gold spokes
    mesh(new THREE.CylinderGeometry(R - 0.36, R - 0.36, 0.16, 48), blue, null, wheel).rotation.x = Math.PI / 2;
    for (let i = 0; i < 6; i++) {
      const s = mesh(new RoundedBoxGeometry(0.16, R * 1.75, 0.12, 2, 0.05), gold, [0, 0, 0.12], wheel);
      s.rotation.z = (i / 6) * Math.PI;
    }
    mesh(new THREE.CylinderGeometry(0.32, 0.36, 0.4, 32), gold, null, wheel).rotation.x = Math.PI / 2;
    mesh(new THREE.SphereGeometry(0.2, 20, 14), blue, [0, 0, 0.24], wheel);
    ring(wheel, R - 0.08, 18, 0.05, bulb, 0.24);
    ring(wheel, R - 0.08, 18, 0.05, bulb, -0.24, 0.17);
    fluffRing(wheel, R + 0.42, 22, 0.17, fluff, -0.15);
    spinners.push({ obj: wheel, axis: new THREE.Vector3(0, 0, 1), speed: -0.55 });
    // the axle housing it turns in
    const axle = mesh(new THREE.CylinderGeometry(0.22, 0.22, 1.2, 24), goldWarm, null, g);
    axle.rotation.x = Math.PI / 2; axle.position.z = -0.6;
    mesh(new THREE.TorusGeometry(0.3, 0.06, 10, 28), blueDeep, [0, 0, -0.35], g);
  }

  // ---------------------------------------------------------------- cream-and-gold housing (under the left brush)
  {
    const g = add(new THREE.Group()); g.position.set(2.05, -0.55, -12.0); g.rotation.y = 0.3;
    mesh(new RoundedBoxGeometry(1.3, 1.1, 1.4, 4, 0.2), cream, null, g);
    for (const y of [-0.25, 0.27]) mesh(new RoundedBoxGeometry(1.36, 0.12, 1.46, 2, 0.05), goldWarm, [0, y, 0], g);
    mesh(new THREE.TorusGeometry(0.3, 0.07, 10, 32), gold, [0, 0.02, -0.72], g);
    mesh(new THREE.CircleGeometry(0.26, 32), blue, [0, 0.02, -0.71], g).rotation.y = Math.PI;
    ring(g, 0.3, 10, 0.035, bulb, -0.77);
    const top = add(new THREE.Group(), g); top.position.y = 0.6; top.rotation.x = Math.PI / 2;
    fluffRing(top, 0.45, 9, 0.2, fluff);
    fluffRing(top, 0.15, 4, 0.18, fluffWhite);
  }

  // ---------------------------------------------------------------- curved gold pipes along the lower sides
  for (const side of [1, -1]) {
    const pts = [[side * 2.9, -0.7, -12.5], [side * 2.5, 0.25, -10.8], [side * 2.75, 0.55, -7.5], [side * 2.45, 1.15, -4.6], [side * 2.9, 1.5, -2.2]];
    const c = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)));
    mesh(new THREE.TubeGeometry(c, 60, 0.1, 14), gold);
    for (let t = 0.08; t < 1; t += 0.16) {
      const p = c.getPoint(t), d = c.getTangent(t);
      const band = mesh(new THREE.TorusGeometry(0.12, 0.045, 8, 20), blueDeep, [p.x, p.y, p.z]);
      band.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), d);
    }
  }

  // ---------------------------------------------------------------- the illuminated tunnel
  // Glowing cyan rings all the way down the drum (two tones, each set with bulbs, with a soft halo), glowing
  // pink panels in gold frames around the upper walls between them, and gold gears with blue and teal hubs
  // turning on the upper walls, all carried onto the bent 3D path so they climb, drop and bank with the
  // tube. The rings and panels brighten in a slow wave that runs down the tunnel ahead of the rider. Only
  // they are bright enough to bloom; the drum's walls keep their colour.
  const tunnel = new THREE.Group(); tunnel.name = 'tunnelDecor'; scene.add(tunnel);
  const glowRings = [];
  let panels = null;
  if (track) {
    const { TR, L, W } = track;
    const ringCols = [[0.0, 1.25, 2.1], [0.2, 1.6, 2.3]];   // electric cyan, two tones (above 1: they glow; low red keeps them cyan, not white)
    const R = L.tunnelRadius * 0.955, step = 2.3;
    const ringGeo = new THREE.TorusGeometry(R, 0.06, 8, 112);
    const haloGeo = new THREE.TorusGeometry(R, 0.17, 8, 112);
    const bulbGeo = new THREE.SphereGeometry(0.055, 8, 6);
    let i = 0;
    for (let u = L.tunnelStart + 1.4; u < L.tunnelEnd - 0.8; u += step, i++) {
      const base = new THREE.Color(...ringCols[i % 2]);
      const mat = new THREE.MeshBasicMaterial({ color: base.clone() });
      const ringMesh = new THREE.Mesh(ringGeo, mat);
      ringMesh.matrixAutoUpdate = false;
      TR.mapMatrix(new THREE.Matrix4().makeTranslation(0, W.WATER + W.AXIS_H, u), ringMesh.matrix);
      tunnel.add(ringMesh);
      // a soft cyan halo around the ring (additive, so it only adds light)
      const haloMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.0, 0.22, 0.42), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.matrixAutoUpdate = false; halo.matrix.copy(ringMesh.matrix); halo.renderOrder = 3;
      tunnel.add(halo);
      const bulbs = new THREE.InstancedMesh(bulbGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 2.8, 2.9) }), 28);
      const m4 = new THREE.Matrix4(), local = new THREE.Matrix4();
      for (let k = 0; k < 28; k++) {
        const a = (k / 28) * Math.PI * 2;
        local.makeTranslation(Math.cos(a) * R, W.WATER + W.AXIS_H + Math.sin(a) * R, u + 0.08);
        TR.mapMatrix(local, m4); bulbs.setMatrixAt(k, m4);
      }
      bulbs.frustumCulled = false;
      tunnel.add(bulbs);
      glowRings.push({ mat, base, haloMat, haloBase: haloMat.color.clone(), u });
    }
    // glowing pink panels in gold frames, seven around the upper walls (clear of the water and the gears),
    // half-way between the rings
    const angles = [-10, 15, 65, 90, 115, 165, 190].map((d) => THREE.MathUtils.degToRad(d));
    const stations = [];
    for (let u = L.tunnelStart + 1.4 + step / 2; u < L.tunnelEnd - 1.5; u += step) stations.push(u);
    const count = stations.length * angles.length, PR = L.tunnelRadius * 0.92;
    const panelMat = new THREE.MeshBasicMaterial({ map: panelTexture(), color: 0xffffff, alphaTest: 0.5, side: THREE.DoubleSide });
    const panelMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.62, 0.34), panelMat, count);
    const frameMesh = new THREE.InstancedMesh(new RoundedBoxGeometry(0.72, 0.44, 0.06, 2, 0.04), gold, count);
    const basis = new THREE.Matrix4(), local = new THREE.Matrix4(), m4 = new THREE.Matrix4(), push = new THREE.Matrix4();
    const ax = new THREE.Vector3(), ay = new THREE.Vector3(0, 0, 1), az = new THREE.Vector3();
    const panelU = [];
    let k = 0;
    for (const u of stations) for (const a of angles) {
      // the panel's face (its local +Z) looks at the tube's axis; its long side runs around the tube
      ax.set(Math.sin(a), -Math.cos(a), 0); az.set(-Math.cos(a), -Math.sin(a), 0);
      basis.makeBasis(ax, ay, az).setPosition(Math.cos(a) * PR, W.WATER + W.AXIS_H + Math.sin(a) * PR, u);
      TR.mapMatrix(basis, m4); panelMesh.setMatrixAt(k, m4);
      local.multiplyMatrices(basis, push.makeTranslation(0, 0, -0.04));   // the frame just behind the panel
      TR.mapMatrix(local, m4); frameMesh.setMatrixAt(k, m4);
      panelMesh.setColorAt(k, new THREE.Color(1, 1, 1));
      panelU.push(u); k++;
    }
    panelMesh.frustumCulled = frameMesh.frustumCulled = false;
    tunnel.add(frameMesh, panelMesh);
    panels = { mesh: panelMesh, u: panelU, c: new THREE.Color() };
    // gold gears on the upper walls, both sides, every few metres
    let j = 0;
    for (let u = L.tunnelStart + 3.0; u < L.tunnelEnd - 2; u += 4.6, j++) {
      for (const side of [1, -1]) {
        const a = side * (0.62 + 0.12 * (j % 2));   // angle up from the side wall
        const x = side * Math.cos(a * side) * (L.tunnelRadius - 0.12), h = W.WATER + W.AXIS_H + Math.sin(Math.abs(a)) * (L.tunnelRadius - 0.12);
        const holder = new THREE.Group(); holder.matrixAutoUpdate = false;
        // face the gear toward the tube's axis
        const inward = new THREE.Vector3(-x, W.WATER + W.AXIS_H - h, 0).normalize();
        const local = new THREE.Matrix4().compose(new THREE.Vector3(x, h, u), new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), inward), new THREE.Vector3(1, 1, 1));
        TR.mapMatrix(local, holder.matrix);
        tunnel.add(holder);
        const r = 0.34 + 0.08 * ((j + (side > 0 ? 1 : 0)) % 2);
        const g = new THREE.Group(); holder.add(g);
        const wheel = mesh(gearGeometry(r, Math.round(r * 26), r * 0.3), gold, null, g);
        const hub = mesh(new THREE.CylinderGeometry(r * 0.4, r * 0.4, r * 0.3, 24), (j + side) % 2 ? teal : blue, null, wheel); hub.rotation.x = Math.PI / 2;
        mesh(new THREE.SphereGeometry(r * 0.15, 14, 10), gold, [0, 0, r * 0.18], wheel);
        ring(wheel, r * 0.62, 6, r * 0.06, bulb, r * 0.18);
        spinners.push({ obj: wheel, axis: new THREE.Vector3(0, 0, 1), speed: side * (0.8 + 0.2 * (j % 3)) });
      }
    }
  }

  return {
    root, tunnel,
    update(dt, t) {
      for (const g of glowRings) {
        const k = chase(g.u, t);
        g.mat.color.copy(g.base).multiplyScalar(0.75 + 0.4 * k);
        g.haloMat.color.copy(g.haloBase).multiplyScalar(0.6 + 0.8 * k);
      }
      if (panels) {
        for (let i = 0; i < panels.u.length; i++) panels.mesh.setColorAt(i, panels.c.setScalar(1.15 + 0.6 * chase(panels.u[i] + 1.15, t)));
        panels.mesh.instanceColor.needsUpdate = true;
      }
      for (const s of spinners) s.obj.rotateOnAxis(s.axis, s.speed * dt);
    },
  };
}

/** A slow wave of light running down the tunnel (0..1), at u metres along the path, time t. */
function chase(u, t) { const s = 0.5 + 0.5 * Math.sin(u * 0.55 - t * 2.6); return s * s; }

// A glowing pink light panel: a rounded rectangle, deep pink at the edge and brighter inside, with pale
// light bars across it (transparent corners, cut out with alphaTest).
function panelTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 140;
  const g = c.getContext('2d');
  const rr = (x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
  rr(4, 4, 248, 132, 26); g.fillStyle = '#d61c9a'; g.fill();
  const grd = g.createLinearGradient(0, 14, 0, 126); grd.addColorStop(0, '#ff9be2'); grd.addColorStop(0.5, '#ff5cc8'); grd.addColorStop(1, '#f23cb4');
  rr(14, 14, 228, 112, 18); g.fillStyle = grd; g.fill();
  g.fillStyle = 'rgba(255, 236, 250, 0.92)';
  for (let i = 0; i < 7; i++) { rr(36 + i * 28, 34, 12, 72, 6); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

// Pink fluff: a soft, slightly lumpy ball lit with a bright rim, so it reads as fluffy trim.
function fluffMaterial(color) {
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.95, metalness: 0, emissive: color, emissiveIntensity: 0.18 });
  m.onBeforeCompile = (s) => {
    s.fragmentShader = s.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      { float rim = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 2.0);
        totalEmissiveRadiance += diffuseColor.rgb * rim * 0.55; }`);
  };
  return m;
}
let fluffGeo = null;
function fluffGeometry() {
  if (fluffGeo) return fluffGeo;
  const g = new THREE.IcosahedronGeometry(1, 3), p = g.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = 1 + 0.16 * Math.sin(v.x * 9.1 + v.y * 4.3) * Math.sin(v.y * 7.7 + v.z * 5.9) + 0.08 * Math.sin(v.z * 17.0 + v.x * 13.0);
    v.multiplyScalar(n); p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  fluffGeo = g;
  return g;
}
function hash(n) { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
