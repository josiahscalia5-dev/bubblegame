// The little golden helper of the approved Screen 3: a round golden duck-like friend with closed,
// happy eyes, a small purple mouth and a white tuft, riding a pink-and-white pool float on the slide in
// front of the portal and facing the mascot. Built from simple shapes (no model file). Its face is on
// local -Z; game.js turns it to face the mascot and lets it ride ahead into the washing machine.
import * as THREE from 'three';

export function buildHelper(env) {
  const root = new THREE.Group();
  root.name = 'helper';
  const bob = new THREE.Group(); root.add(bob);

  const yellow = new THREE.MeshStandardMaterial({ color: 0xffc22a, metalness: 0.45, roughness: 0.3, envMap: env, envMapIntensity: 1.0, emissive: 0x6b3a00, emissiveIntensity: 0.4 });   // glossy golden yellow
  const goldTrim = new THREE.MeshStandardMaterial({ color: 0xf0a020, metalness: 0.9, roughness: 0.3, envMap: env, envMapIntensity: 1.2, emissive: 0x3a2000, emissiveIntensity: 0.5 });
  const white = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, emissive: 0x8888aa, emissiveIntensity: 0.35 });
  const purple = new THREE.MeshStandardMaterial({ color: 0x9a3ce0, roughness: 0.3, envMap: env, envMapIntensity: 0.6, emissive: 0x2a0050, emissiveIntensity: 0.4 });
  const ink = new THREE.MeshBasicMaterial({ color: 0x3b1636 });
  const blush = new THREE.MeshBasicMaterial({ color: 0xff7fb0, transparent: true, opacity: 0.8, depthWrite: false });

  // Pink-and-white striped pool float, lying flat on the water.
  const floatGeo = new THREE.TorusGeometry(0.36, 0.13, 20, 56);
  const col = [], p = floatGeo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const a = (Math.atan2(p.getY(i), p.getX(i)) + Math.PI) / (Math.PI * 2);
    const band = Math.abs(((a * 4) % 1) - 0.5) < 0.06;   // four thin white bands on a pink ring
    const c = new THREE.Color(band ? 0xfff0f6 : 0xff4a92);
    col.push(c.r, c.g, c.b);
  }
  floatGeo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  const floatMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.22, metalness: 0.05, envMap: env, envMapIntensity: 1.0, emissive: 0x30101e, emissiveIntensity: 0.4 });
  const ring = new THREE.Mesh(floatGeo, floatMat);
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.06;
  bob.add(ring);

  // Body, gold collar where it sits in the float, head.
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.24, 32, 24), yellow);
  body.scale.set(1.08, 0.78, 0.95); body.position.y = 0.13;
  bob.add(body);
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.205, 0.04, 10, 36), goldTrim);
  collar.rotation.x = Math.PI / 2; collar.position.y = 0.08; collar.scale.setScalar(1.12);
  bob.add(collar);
  const head = new THREE.Group(); head.position.set(0, 0.4, -0.03); bob.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.235, 36, 26), yellow);
  skull.scale.set(1.28, 1.0, 1.05);   // a broad face, as in the approved screen
  head.add(skull);

  // Face (on -Z): closed happy eyes, blush, a small purple mouth.
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.TorusGeometry(0.046, 0.013, 8, 18, Math.PI), ink);
    eye.position.set(s * 0.1, 0.03, -0.226); eye.rotation.set(0.2, s * 0.25, Math.PI); eye.scale.setScalar(1.15);   // a downward-curved arc
    head.add(eye);
    const cheek = new THREE.Mesh(new THREE.CircleGeometry(0.038, 20), blush);
    cheek.position.set(s * 0.19, -0.03, -0.19); cheek.rotation.y = Math.PI + s * 0.65;
    head.add(cheek);
  }
  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.06, 20, 14), purple);
  mouth.scale.set(1.45, 0.8, 0.95); mouth.position.set(0, -0.06, -0.232);
  head.add(mouth);

  // White tuft on top.
  for (const [x, y, z, r] of [[0, 0.25, 0.0, 0.085], [-0.07, 0.225, 0.03, 0.065], [0.075, 0.23, 0.02, 0.07], [0.02, 0.31, -0.01, 0.055], [-0.03, 0.27, -0.06, 0.05]]) {
    const t = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), white); t.position.set(x, y, z); head.add(t);
  }

  // Little wings, waving.
  const wings = [];
  for (const s of [-1, 1]) {
    const pivot = new THREE.Group(); pivot.position.set(s * 0.25, 0.17, 0.0);
    const w = new THREE.Mesh(new THREE.SphereGeometry(0.1, 20, 14), yellow);
    w.scale.set(0.55, 1.15, 0.45); w.position.set(s * 0.05, 0.07, 0);
    pivot.add(w); bob.add(pivot); wings.push({ pivot, s });
  }

  return {
    root,
    /** Bob on the water, rock, wave and tilt the head. */
    animate(t, speed01 = 0) {
      bob.position.y = Math.sin(t * 2.2) * 0.035;
      bob.rotation.z = Math.sin(t * 1.7) * 0.08;
      bob.rotation.x = Math.sin(t * 1.3 + 0.7) * 0.05 + speed01 * 0.08;
      head.rotation.z = Math.sin(t * 1.25) * 0.12;
      for (const { pivot, s } of wings) pivot.rotation.z = s * (0.55 + 0.4 * Math.sin(t * 7.0 + (s > 0 ? 0 : 1.2)));
    },
  };
}
