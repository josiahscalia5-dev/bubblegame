// The user's four Meshy entrance decorations for approved Screen 3 (Design/MeshyDeliveries/EntranceDecor,
// web copies of the Balanced GLBs in models/tower.glb, gear.glb, pipe.glb and crown.glb):
//   - Glowing water tower: a tall pink-and-gold tower with a blue glass fluid chamber, one on each side
//     of the castle as in the approved image. The fluid glows, swirls and bubbles (shaders.js
//     TOWER_FLUID), a soft light pulses in each chamber, and water pours from a gold elbow on its side.
//   - Blue-and-gold gear wheel: around the portal mouth and high on the left, each turning about its own
//     centred axle (the whole wheel turns; its parts are one mesh).
//   - Curved golden pipe: an elbow used as modular plumbing. Its open ends sit against a tower, the
//     castle wall, the gold washing wheel or under the water, never in mid-air.
//   - Crown and curved trim: the keystone on top of the portal arch.
// Every copy reuses its model's geometry, textures and material; only the transform differs.
//
// Coordinates: in front of the castle the run is the straight +Z line, so these are plain world
// coordinates (+X is screen-left; the Tap to Start camera looks along +Z from z = -23).
// Everything stays at least LANE_CLEAR from the slide's middle up to the mascot's highest jump.
import * as THREE from 'three';
import * as SH from './shaders.js';

export const LANE_CLEAR = 1.18;   // the mascot's body reaches |x| = lane 0.70 + radius 0.40 = 1.10
const JUMP_TOP = 2.6;             // highest point of the mascot's body on the slide (crest, top of a jump)

export const DECOR = {
  // at: the centre of the tower's base. height in metres. yaw in degrees (0: model +Z faces the castle).
  // Both portholes face the camera (front on the left, back on the right) and the pipe stubs face the slide.
  // Measured against the approved image: the domes near the top of the screen, the glass chambers beside
  // the banner and the pumps behind the brushes; each stands on a gold plinth rising from the water.
  towers: [
    { at: [3.0, 1.2, -2.0], height: 5.9, yaw: 180 },
    { at: [-3.0, 1.2, -2.0], height: 5.9, yaw: 0 },
  ],
  // at: the centre. d: diameter over the teeth (m). dir: the way its face looks. spin: rad/s about its axle.
  // Six at the portal mouth beside the slide (where the code-built gears stood, nudged outward to clear the
  // lanes) and a larger one high on the left.
  gears: [
    { at: [1.72, 1.05, -1.7], dir: [-0.2, 0.05, -0.98], d: 0.8, spin: 0.9 },
    { at: [2.0, 0.45, -2.4], dir: [-0.25, 0.1, -0.96], d: 0.92, spin: -0.75 },
    { at: [1.53, 0.26, -3.1], dir: [-0.1, 0.1, -0.99], d: 0.56, spin: 1.2 },
    { at: [-1.66, 1.0, -1.7], dir: [0.2, 0.05, -0.98], d: 0.76, spin: -0.9 },
    { at: [-2.0, 0.5, -2.5], dir: [0.25, 0.1, -0.96], d: 0.96, spin: 0.7 },
    { at: [-1.53, 0.23, -3.2], dir: [0.1, 0.1, -0.99], d: 0.55, spin: -1.2 },
    { at: [2.05, 3.15, -2.6], dir: [-0.3, 0, -0.95], d: 1.1, spin: -0.7 },
  ],
  // The model's open ends face -X (side) and -Y (down). at: where the `anchor` end's centre goes (or the
  // middle of the elbow, anchor 'centre'). size: the elbow's longest side (m). rot: Euler angles in degrees.
  // onTower: the anchor sits on that tower's pipe stub (the short gold pipe on its inner side), raised
  // by `lift` on a gold riser so the elbow clears the collar. pour: water pours out of its other end.
  pipes: [
    // Each pours from the tower's inner side, turned 45 degrees outward so the elbow shows in three-quarter
    // view (pointing straight at the camera, its own water hid it) and the water falls in front of the pump.
    { onTower: 0, lift: 0.3, anchor: 'down', size: 0.95, rot: [0, -135, 0], pour: true },
    { onTower: 1, lift: 0.3, anchor: 'down', size: 0.95, rot: [0, -45, 0], pour: true },
  ],
  // at: the centre. width (m). rot: Euler angles in degrees. Its face (+Z) looks at the camera.
  // On the gold band at the top of the portal arch (its face measured at z = 2.3, top at y = 4.8).
  crowns: [
    { at: [0, 4.72, 2.12], width: 2.1, rot: [0, 180, 0] },
  ],
};

export function buildDecor({ scene, models, env, gold, glowTexture, fallGeometry, fallMaterial, fx }) {
  const root = new THREE.Group();
  root.name = 'entranceDecor';
  scene.add(root);
  const time = { value: 0 };
  const blue = new THREE.MeshStandardMaterial({ color: 0x2457ff, metalness: 0.35, roughness: 0.26, envMap: env, envMapIntensity: 1.2 });
  const spinners = [], glows = [], splashes = [];

  // ---------------------------------------------------------------- materials (one per model, shared by its copies)
  // The models' own colour, metal/roughness and normal maps, lit by the scene's studio reflections, with a
  // little glow from their colours so the pink and blue stay bright beside the gold (as the side machinery).
  const pbr = (src, key, opts = {}) => {
    const m = new THREE.MeshStandardMaterial({ map: src.map, metalnessMap: src.metalnessMap, roughnessMap: src.roughnessMap, normalMap: src.normalMap,
      metalness: 1, roughness: 1, envMap: env, envMapIntensity: opts.envI ?? 1.1, emissive: 0xffffff, emissiveMap: src.map, emissiveIntensity: opts.glow ?? 0.2, side: THREE.DoubleSide });
    if (opts.fluid) {
      m.onBeforeCompile = (s) => {
        s.uniforms.uFluidTime = time;
        s.vertexShader = s.vertexShader.replace('void main() {', 'varying vec3 vFluidP;\nvoid main() {\n  vFluidP = position;');
        s.fragmentShader = s.fragmentShader.replace('void main() {', `varying vec3 vFluidP;\nuniform float uFluidTime;\n${SH.NOISE}\nvoid main() {`)
          .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n' + SH.TOWER_FLUID);
      };
    }
    m.customProgramCacheKey = () => 'decor:' + key;
    return m;
  };
  const prep = (gltf, key, opts) => {
    let mat = null;
    gltf.scene.traverse((o) => { if (o.isMesh) { mat = mat || pbr(o.material, key, opts); o.material = mat; } });
    gltf.scene.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(gltf.scene);
    return { scene: gltf.scene, box, size: box.getSize(new THREE.Vector3()), centre: box.getCenter(new THREE.Vector3()), mat };
  };
  const M = {
    tower: prep(models.tower, 'tower', { fluid: true, glow: 0.18 }),
    gear: prep(models.gear, 'gear', { glow: 0.22 }),
    pipe: prep(models.pipe, 'pipe', { glow: 0.2 }),
    crown: prep(models.crown, 'crown', { glow: 0.25 }),
  };

  /** A copy of a model scaled by s, with the point `anchor` (model space) at the group's origin. */
  const copy = (m, s, anchor) => {
    const inner = m.scene.clone();   // shares geometry, textures and material
    inner.scale.setScalar(s);
    inner.position.copy(anchor).multiplyScalar(-s);
    return inner;
  };
  /** The centre of a model's open end facing `dir` (model space): the mean of the vertices nearest that side. */
  const port = (m, dir) => {
    const d = new THREE.Vector3(...dir), v = new THREE.Vector3(), sum = new THREE.Vector3();
    let best = -Infinity, n = 0;
    const pts = [];
    m.scene.traverse((o) => {
      if (!o.isMesh) return;
      const p = o.geometry.attributes.position;
      for (let i = 0; i < p.count; i += 3) { v.fromBufferAttribute(p, i).applyMatrix4(o.matrixWorld); const k = v.dot(d); pts.push(v.clone(), k); best = Math.max(best, k); }
    });
    for (let i = 0; i < pts.length; i += 2) if (pts[i + 1] > best - 0.04) { sum.add(pts[i]); n++; }
    return sum.divideScalar(Math.max(1, n));
  };
  const pipePorts = { down: port(M.pipe, [0, -1, 0]), side: port(M.pipe, [-1, 0, 0]), centre: M.pipe.centre };
  // The top of the tower's pipe stub (model space): the stub stands on the +X side of the pump.
  const stub = (() => {
    const v = new THREE.Vector3(); let top = -Infinity, sx = 0, sz = 0, n = 0;
    const b = M.tower.box, w = b.max.x - b.min.x;
    M.tower.scene.traverse((o) => {
      if (!o.isMesh) return;
      const p = o.geometry.attributes.position;
      for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i).applyMatrix4(o.matrixWorld); if (v.x > b.max.x - w * 0.16 && v.y < b.min.y + (b.max.y - b.min.y) * 0.55) { top = Math.max(top, v.y); } }
      for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i).applyMatrix4(o.matrixWorld); if (v.x > b.max.x - w * 0.16 && Math.abs(v.y - top) < 0.02) { sx += v.x; sz += v.z; n++; } }
    });
    return new THREE.Vector3(sx / Math.max(1, n), top, sz / Math.max(1, n));
  })();
  const deg = (a) => a.map((v) => THREE.MathUtils.degToRad(v));

  const groups = { towers: [], gears: [], pipes: [], crowns: [] };
  const extras = [];   // waterfalls and risers, rebuilt with each placement
  function place() {
    for (const list of Object.values(groups)) for (const g of list) root.remove(g);
    for (const e of extras) root.remove(e);
    for (const k of Object.keys(groups)) groups[k] = [];
    extras.length = 0; spinners.length = 0; glows.length = 0;

    for (const t of DECOR.towers) {
      const m = M.tower, s = t.height / m.size.y;
      const g = new THREE.Group(); g.position.set(...t.at); g.rotation.y = THREE.MathUtils.degToRad(t.yaw);
      g.add(copy(m, s, new THREE.Vector3(m.centre.x, m.box.min.y, m.centre.z)));
      // a soft light in the main fluid chamber (about 55 % of the way up), pulsing; it blooms
      if (glowTexture) {
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, color: new THREE.Color(0.25, 0.75, 1.6), transparent: true, opacity: 0.55,
          blending: THREE.AdditiveBlending, depthWrite: false }));
        sp.position.set(0, t.height * 0.57, 0); sp.scale.setScalar(t.height * 0.42); sp.renderOrder = 3;
        g.add(sp); glows.push({ sp, phase: glows.length * 1.7 });
      }
      // a gold plinth from the water up to its base (code-built), so it never floats as the camera moves
      if (t.at[1] > -0.4 && gold) {
        const r = m.size.x * s * 0.36, h = t.at[1] + 0.75;
        const plinth = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.12, h, 32), gold);
        plinth.position.y = -h / 2; g.add(plinth);
        for (const y of [-0.12, -h * 0.55]) { const band = new THREE.Mesh(new THREE.TorusGeometry(r * 1.03, 0.07, 10, 40), blue); band.rotation.x = Math.PI / 2; band.position.y = y; g.add(band); }
      }
      g.updateMatrixWorld(true);
      g.userData.stubTop = stub.clone().sub(new THREE.Vector3(m.centre.x, m.box.min.y, m.centre.z)).multiplyScalar(s).applyMatrix4(g.matrixWorld);
      root.add(g); groups.towers.push(g);
    }
    for (const c of DECOR.gears) {
      const m = M.gear, s = c.d / Math.max(m.size.x, m.size.y);
      const g = new THREE.Group(); g.position.set(...c.at);
      g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...c.dir).normalize());
      const wheel = new THREE.Group(); wheel.rotation.z = c.at[0] * 7.3;   // vary the starting angle
      wheel.add(copy(m, s, m.centre)); g.add(wheel);
      spinners.push({ obj: wheel, speed: c.spin });
      root.add(g); groups.gears.push(g);
    }
    for (const p of DECOR.pipes) {
      const m = M.pipe, s = p.size / Math.max(m.size.x, m.size.y, m.size.z);
      const anchor = pipePorts[p.anchor || 'centre'];
      const at = p.onTower !== undefined ? groups.towers[p.onTower].userData.stubTop.clone() : new THREE.Vector3(...p.at);
      const g = new THREE.Group();
      if (p.lift && gold) {   // a gold riser continuing the tower's stub up to the elbow
        const r = p.size * 0.16, riser = new THREE.Mesh(new THREE.CylinderGeometry(r, r, p.lift + 0.1, 20), gold);
        riser.position.copy(at).add(new THREE.Vector3(0, (p.lift - 0.1) / 2, 0)); root.add(riser); extras.push(riser);
        at.y += p.lift;
      }
      g.position.copy(at); g.rotation.set(...deg(p.rot));
      if (p.mirror) g.scale.x = -1;
      g.add(copy(m, s, anchor));
      root.add(g); groups.pipes.push(g);
      if (p.pour && fallGeometry && fallMaterial) {
        // water pours from the open end that is not the anchor: out of the side end it arcs forward and down
        g.updateMatrixWorld(true);
        const outEnd = p.anchor === 'side' ? 'down' : 'side';
        const mouth = pipePorts[outEnd].clone().sub(anchor).multiplyScalar(s).applyMatrix4(g.matrixWorld);
        const dir = new THREE.Vector3(...(outEnd === 'side' ? [-1, 0, 0] : [0, -1, 0])).applyQuaternion(g.getWorldQuaternion(new THREE.Quaternion()));
        dir.y = 0; if (dir.lengthSq() < 1e-4) dir.set(Math.sign(at.x) || 1, 0, 0); dir.normalize();
        const drop = Math.max(0.3, mouth.y + 0.62), throwDist = outEnd === 'side' ? 0.55 : 0.15;
        const bore = p.size * 0.36;
        const fall = new THREE.Mesh(fallGeometry(throwDist, drop, bore, bore * 1.5), fallMaterial);
        fall.position.copy(mouth);
        fall.lookAt(mouth.clone().add(dir));
        fall.renderOrder = 2;
        root.add(fall); extras.push(fall);
        const land = mouth.clone().addScaledVector(dir, throwDist); land.y = -0.6;
        if (fx) {   // foam where it lands (one source per pipe, moved when the pipes are placed again)
          const k = DECOR.pipes.indexOf(p);
          if (!splashes[k]) { splashes[k] = { pos: land, rate: 14, kind: 1, spread: 0.25, up: 1.1, size: 0.34 }; fx.addSource(splashes[k]); } else splashes[k].pos.copy(land);
        }
      }
    }
    for (const c of DECOR.crowns) {
      const m = M.crown, s = c.width / m.size.x;
      const g = new THREE.Group(); g.position.set(...c.at); g.rotation.set(...deg(c.rot));
      g.add(copy(m, s, m.centre));
      root.add(g); groups.crowns.push(g);
    }
    root.updateMatrixWorld(true);
    return clearance();
  }

  /** How close each kind comes to the slide's middle, over the slide and up to the mascot's highest jump. */
  function clearance(slideEndZ = 3.9) {
    const out = {}, v = new THREE.Vector3();
    for (const [k, list] of Object.entries(groups)) {
      let inner = Infinity;
      for (const g of list) g.traverse((o) => {
        if (!o.isMesh) return;
        const p = o.geometry.attributes.position;
        for (let i = 0; i < p.count; i += 5) {
          v.fromBufferAttribute(p, i).applyMatrix4(o.matrixWorld);
          if (v.z < slideEndZ && v.y < JUMP_TOP) inner = Math.min(inner, Math.abs(v.x));
        }
      });
      out[k] = Number.isFinite(inner) ? +inner.toFixed(2) : null;
    }
    return out;
  }

  const clear = place();
  return {
    root, clear,
    place,
    update(dt, t) {
      time.value = t;
      for (const s of spinners) s.obj.rotation.z += s.speed * dt;
      for (const g of glows) g.sp.material.opacity = 0.42 + 0.16 * Math.sin(t * 2.3 + g.phase);
    },
  };
}
