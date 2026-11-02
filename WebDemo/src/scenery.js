// The washing-machine works around the approved Screen 3 entrance, built in code (no extra models):
// a huge gold washing wheel on the lower right seen almost edge-on, a blue-and-gold wheel high on the
// left, a cream-and-gold housing under the left brush, tall gold machinery towers with flowing blue
// water tubes and waterfalls on both sides of the castle, chunky gold gears with teal and navy hubs at
// the portal mouth, curved gold pipes, pink fluffy trim and glowing bulbs.
//
// Positions were worked out from the approved screen for the Tap to Start camera (game.js S3): each
// piece sits where the approved image shows it. In front of the castle the run is the straight +Z
// line, so these are plain world coordinates (+X is screen-left).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as SH from './shaders.js';

export function buildScenery({ scene, mats, fallGeometry, fallMaterial, fx, track }) {
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
  const navy = new THREE.MeshStandardMaterial({ color: 0x1a2a78, metalness: 0.3, roughness: 0.3, envMap: env, envMapIntensity: 1.0 });
  const cream = new THREE.MeshStandardMaterial({ color: 0xf6dcb4, metalness: 0.25, roughness: 0.35, envMap: env, envMapIntensity: 0.9 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x9fe2ff, metalness: 0.1, roughness: 0.04, envMap: env, envMapIntensity: 1.8,
    transparent: true, opacity: 0.22, depthWrite: false, emissive: 0x2a6fd0, emissiveIntensity: 0.2 });
  const fluff = fluffMaterial(0xff6fc8);
  const fluffWhite = fluffMaterial(0xfff0fa);
  const bulb = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 2.05, 1.35) });   // above 1: blooms
  const tubeWaterU = { uTime: { value: 0 } };
  const tubeWater = new THREE.ShaderMaterial({ vertexShader: SH.tubeWaterVertex, fragmentShader: SH.tubeWaterFragment, uniforms: tubeWaterU });

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
  function gear(pos, dir, r, hubMat, speed, opts = {}) {
    const teeth = opts.teeth || Math.max(9, Math.round(r * 26));
    const g = facing(pos, dir);
    const wheel = mesh(gearGeometry(r, teeth, r * 0.32), opts.mat || gold, null, g);
    mesh(new THREE.TorusGeometry(r * 0.43, r * 0.08, 10, 36), goldWarm, null, wheel);
    const hub = mesh(new THREE.CylinderGeometry(r * 0.4, r * 0.4, r * 0.3, 32), hubMat, null, wheel); hub.rotation.x = Math.PI / 2;
    mesh(new THREE.SphereGeometry(r * 0.16, 16, 12), gold, [0, 0, r * 0.18], wheel);
    ring(wheel, r * 0.6, 6, r * 0.055, goldWarm, r * 0.2);
    spinners.push({ obj: wheel, axis: new THREE.Vector3(0, 0, 1), speed });
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

  // ---------------------------------------------------------------- upper left
  // (The code-built blue-and-gold wheel that stood here was replaced by the user's Meshy side machinery
  // below it and the Meshy washing roller, which now turns here.)
  {
    gear([2.05, 3.15, -2.6], [-0.3, 0, -0.95], 0.55, navy, -0.7);
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

  // ---------------------------------------------------------------- gold machinery towers (both sides of the castle)
  // A gold base, a blue glass tube with water rushing up through it, gear-toothed gold collars with
  // glowing bulbs, a blue glass dome, and a spout pouring a waterfall outward.
  const towers = [];
  for (const side of [1, -1]) {
    const x = side * 3.05, z = -0.6;
    const g = add(new THREE.Group()); g.position.set(x, 0, z);
    mesh(new THREE.CylinderGeometry(0.85, 0.95, 0.9, 40), goldWarm, [0, -0.45, 0], g);
    mesh(new THREE.TorusGeometry(0.9, 0.09, 12, 48), gold, [0, 0.0, 0], g).rotation.x = Math.PI / 2;
    const h0 = 0.05, h1 = 5.9;
    const water = mesh(new THREE.CylinderGeometry(0.4, 0.4, h1 - h0, 32, 1, true), tubeWater, [0, (h0 + h1) / 2, 0], g);
    water.renderOrder = 1;
    const shell = mesh(new THREE.CylinderGeometry(0.5, 0.5, h1 - h0, 40, 1, true), glass, [0, (h0 + h1) / 2, 0], g);
    shell.renderOrder = 4;
    for (const y of [0.9, 2.4, 3.9, 5.4]) {
      const collar = add(new THREE.Group(), g); collar.position.y = y; collar.rotation.x = Math.PI / 2;
      mesh(gearGeometry(0.72, 18, 0.22), gold, null, collar);
      mesh(new THREE.TorusGeometry(0.55, 0.08, 10, 40), goldWarm, null, collar);
      ring(collar, 0.62, 12, 0.045, bulb, -0.16);
      spinners.push({ obj: collar, axis: new THREE.Vector3(0, 0, 1), speed: side * (y > 3 ? 0.35 : -0.35) });
    }
    mesh(new THREE.SphereGeometry(0.58, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), glass, [0, h1 + 0.05, 0], g).renderOrder = 4;
    mesh(new THREE.TorusGeometry(0.58, 0.09, 12, 48), gold, [0, h1 + 0.05, 0], g).rotation.x = Math.PI / 2;
    mesh(new THREE.ConeGeometry(0.12, 0.5, 16), gold, [0, h1 + 0.85, 0], g);
    mesh(new THREE.SphereGeometry(0.1, 14, 10), gold, [0, h1 + 1.12, 0], g);
    // spout and waterfall pouring outward (away from the slide)
    const spoutY = 3.15;
    const spout = mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.7, 20), gold, [side * 0.55, spoutY, -0.05], g);
    spout.rotation.z = Math.PI / 2;
    mesh(new THREE.TorusGeometry(0.17, 0.05, 8, 24), goldWarm, [side * 0.9, spoutY, -0.05], g).rotation.y = Math.PI / 2;
    if (fallGeometry && fallMaterial) {
      const fall = new THREE.Mesh(fallGeometry(0.9, spoutY + 0.6, 0.3, 0.42), fallMaterial);
      fall.position.set(x + side * 0.92, spoutY, z - 0.05);
      fall.lookAt(fall.position.clone().add(new THREE.Vector3(side, 0, 0)));
      fall.renderOrder = 2;
      add(fall);
      if (fx) fx.addSource({ pos: new THREE.Vector3(x + side * 1.8, -0.6, z), rate: 14, kind: 1, spread: 0.25, up: 1.2, size: 0.32 });
    }
    // a curved gold pipe from the tower into the castle wall, banded in blue
    const pipe = new THREE.CatmullRomCurve3([new THREE.Vector3(x - side * 0.45, 1.6, z), new THREE.Vector3(x - side * 0.9, 1.75, z + 0.4), new THREE.Vector3(x - side * 1.05, 2.4, z + 1.3)]);
    mesh(new THREE.TubeGeometry(pipe, 24, 0.12, 14), gold, null, root);
    for (const t of [0.2, 0.55, 0.85]) {
      const p = pipe.getPoint(t), d = pipe.getTangent(t);
      const band = mesh(new THREE.TorusGeometry(0.14, 0.05, 8, 20), blue, [p.x, p.y, p.z]);
      band.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), d);
    }
    towers.push(g);
  }

  // ---------------------------------------------------------------- gears at the portal mouth
  gear([1.5, 1.05, -1.7], [-0.2, 0.05, -0.98], 0.36, teal, 0.9);
  gear([1.95, 0.45, -2.4], [-0.25, 0.1, -0.96], 0.42, navy, -0.75);
  gear([1.25, 0.25, -3.1], [-0.1, 0.1, -0.99], 0.26, teal, 1.2);
  gear([-1.35, 1.0, -1.7], [0.2, 0.05, -0.98], 0.34, navy, -0.9);
  gear([-1.9, 0.5, -2.5], [0.25, 0.1, -0.96], 0.44, teal, 0.7);
  gear([-1.2, 0.22, -3.2], [0.1, 0.1, -0.99], 0.25, navy, -1.2);

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
  // Glowing rings all the way down the drum (gold, pink, cyan and lavender, each set with bulbs that
  // twinkle), and gold gears with blue and teal hubs turning on the upper walls, carried onto the
  // bent 3D path so they climb, drop and bank with the tube.
  const tunnel = new THREE.Group(); tunnel.name = 'tunnelDecor'; scene.add(tunnel);
  const glowRings = [];
  if (track) {
    const { TR, L, W } = track;
    const ringCols = [[2.6, 1.9, 0.9], [2.6, 0.9, 2.0], [0.9, 2.2, 2.8], [1.9, 1.4, 2.8]];   // gold, pink, cyan, lavender (above 1: they glow)
    const R = L.tunnelRadius * 0.955, step = 2.3;
    const ringGeo = new THREE.TorusGeometry(R, 0.05, 8, 96);
    const bulbGeo = new THREE.SphereGeometry(0.055, 8, 6);
    let i = 0;
    for (let u = L.tunnelStart + 1.4; u < L.tunnelEnd - 0.8; u += step, i++) {
      const base = new THREE.Color(...ringCols[i % 4]);
      const mat = new THREE.MeshBasicMaterial({ color: base.clone() });
      const ringMesh = new THREE.Mesh(ringGeo, mat);
      ringMesh.matrixAutoUpdate = false;
      TR.mapMatrix(new THREE.Matrix4().makeTranslation(0, W.WATER + W.AXIS_H, u), ringMesh.matrix);
      tunnel.add(ringMesh);
      const bulbs = new THREE.InstancedMesh(bulbGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(2.8, 2.6, 2.2) }), 28);
      const m4 = new THREE.Matrix4(), local = new THREE.Matrix4();
      for (let k = 0; k < 28; k++) {
        const a = (k / 28) * Math.PI * 2;
        local.makeTranslation(Math.cos(a) * R, W.WATER + W.AXIS_H + Math.sin(a) * R, u + 0.08);
        TR.mapMatrix(local, m4); bulbs.setMatrixAt(k, m4);
      }
      bulbs.frustumCulled = false;
      tunnel.add(bulbs);
      glowRings.push({ mat, base, phase: i * 0.8 });
    }
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
    root, towers, tunnel,
    update(dt, t) {
      for (const g of glowRings) g.mat.color.copy(g.base).multiplyScalar(0.75 + 0.3 * Math.sin(t * 2.2 + g.phase));
      tubeWaterU.uTime.value = t;
      for (const s of spinners) s.obj.rotateOnAxis(s.axis, s.speed * dt);
    },
  };
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
