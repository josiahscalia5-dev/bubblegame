// The washing-machine works around the approved Screen 3 entrance that are built in code: a huge gold
// washing wheel on the lower right seen almost edge-on, a cream-and-gold housing under the left brush,
// curved gold pipes along the lower sides, pink fluffy trim and glowing bulbs.
// The water towers, the gears at the portal mouth and high on the left, the pipe elbows and the crown
// over the portal are the user's Meshy models (decor.js); the code-built towers and gears that stood in
// for them were removed when those models arrived.
//
// Positions were worked out from the approved screen for the Tap to Start camera (game.js S3): each
// piece sits where the approved image shows it. In front of the castle the run is the straight +Z
// line, so these are plain world coordinates (+X is screen-left).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export function buildScenery({ scene, mats }) {
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

  return {
    root,
    update(dt, t) {
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
