// six2 TUNNEL + WASHER LOOK (session 9ee07777): the washer's materials (reference 04) and scene 5's tunnel richness (reference 05): ring arches, tanks,
// pipes, lamps (the drum wall itself is SIX2_DRUM_END in opening3d.js). Owned by the lighting specialist; looks only.
import * as THREE from 'three';
import { six2Sm as sm, six2V as V } from './opening_six2.js';
export function installSix2Tunnel(ctx) {
  const { scene, env, washer, OPENING3D } = ctx, P = OPENING3D.porthole;
  washer.glass.material.opacity = 0.07; washer.glass.material.color = new THREE.Color(0xd8e8ff);
  // scene 5 (reference 05): repeated pink-and-gold ring arches over the water, glowing violet tanks on both banks, brass pipes along the crown, lamps
  const T5 = new THREE.Group(); T5.name = 'six2TunnelArches'; scene.add(T5);
  const radT = (d) => THREE.MathUtils.lerp(OPENING3D.rOpen, 0.42, sm(0.0, 0.7, d)) + 0.43 * sm(1.6, 2.6, d);
  const pinkA = new THREE.MeshStandardMaterial({ color: 0xff6ec4, emissive: 0xd02a90, emissiveIntensity: 0.7, metalness: 0.4, roughness: 0.3, envMap: env });
  const goldA = washer.goldM, tankM = new THREE.MeshStandardMaterial({ color: 0xd6a8ff, emissive: 0xa45cff, emissiveIntensity: 1.3, roughness: 0.1, transparent: true, opacity: 0.88, envMap: env });
  const lampA = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.9, 1.5, 1.0) });
  const wyT = OPENING3D.waterY;
  for (let d = 2.2; d <= 8.6; d += 0.62) {
    const r = radT(d) * 0.985, half = Math.acos(THREE.MathUtils.clamp((wyT - P.y) / r, -1, 1));   // the arch above the water line
    const arc = Math.PI * 2 - 2 * (Math.PI - half), a0 = Math.PI / 2 - arc / 2 + Math.PI;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.022, 8, 48, arc), pinkA); ring.rotation.z = -Math.PI / 2 - arc / 2 + Math.PI / 2; ring.position.set(P.x, P.y, P.z - d); T5.add(ring);
    for (const k of [-1, 1]) { const g = new THREE.Mesh(new THREE.TorusGeometry(r - 0.028, 0.008, 6, 48, arc), goldA); g.rotation.copy(ring.rotation); g.position.set(P.x, P.y, P.z - d + k * 0.03); T5.add(g); }
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), lampA); lamp.position.set(P.x, P.y + r - 0.04, P.z - d); T5.add(lamp);
    for (const side of [-1, 1]) {   // a glowing tank on each bank, gold-capped
      const x = P.x + side * Math.sqrt(Math.max(0, (r * 0.86) ** 2 - (wyT + 0.15 - P.y) ** 2)), z = P.z - d - 0.3;
      const tk = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.2, 18), tankM); tk.position.set(x, wyT + 0.2, z); T5.add(tk);
      for (const y of [0.09, 0.31]) { const cp = new THREE.Mesh(new THREE.CylinderGeometry(0.064, 0.064, 0.025, 18), goldA); cp.position.set(x, wyT + y, z); T5.add(cp); }
    }
  }
  for (const side of [-1, 1]) {   // brass pipes along the crown
    const pts = []; for (let d = 1.8; d <= 9; d += 0.4) { const r = radT(d) * 0.9; pts.push(V(P.x + side * r * 0.42, P.y + r * 0.88, P.z - d)); }
    T5.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, 0.02, 8), goldA));
  }
  // per frame: s = the story clock (seconds after START), it = the idle clock
  function update(s, it) { T5.visible = s > 7.6; }
  return { update, group: T5 };
}
