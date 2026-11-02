// The little yellow helper of the approved Screen 3: the Meshy duck sitting in its pink float
// (Design/MeshyDeliveries/DuckHelper, Balanced ColorSafe copy in models/duck.glb). It waits on the
// slide in front of the portal, facing the mascot, bobbing and rocking on the water; game.js lets it
// ride ahead into the washing machine and throws its gentle splashes.
//
// The model is one mesh with baked vertex colours and no normals or material, about 1.9 units across,
// its face on +Z. It is centred, its float's underside put at the waterline, and turned to face -Z
// (back up the run, toward the mascot and the camera).
import * as THREE from 'three';

/**
 * @param gltf the loaded duck model
 * @param material (mesh) => material for its baked colours (game.js uses the same soft key light and
 *   rim as the other Meshy models)
 * @param height its height on screen-space terms, in metres (float underside to tuft)
 */
export function buildHelper(gltf, material, height) {
  const root = new THREE.Group();
  root.name = 'helper';
  const bob = new THREE.Group(); root.add(bob);
  const model = gltf.scene;
  model.traverse((o) => { if (o.isMesh) { o.material = material(o); o.frustumCulled = false; } });
  const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3()), centre = box.getCenter(new THREE.Vector3());
  const s = height / size.y;
  model.scale.setScalar(s);
  // Centre it sideways and front to back; its lowest point (the float) sits slightly in the water.
  model.position.set(-centre.x * s, -box.min.y * s - height * 0.1, -centre.z * s);
  const turn = new THREE.Group(); turn.rotation.y = Math.PI;   // face (+Z) toward the mascot
  turn.add(model);
  bob.add(turn);
  return {
    root,
    width: size.x * s,
    /** Bob on the water and rock gently; lean forward a little while riding. */
    animate(t, riding = 0) {
      bob.position.y = Math.sin(t * 2.2) * 0.03;
      bob.rotation.z = Math.sin(t * 1.7) * 0.07;
      bob.rotation.x = Math.sin(t * 1.3 + 0.7) * 0.05 - riding * 0.06;
      bob.rotation.y = Math.sin(t * 0.9) * 0.08;
    },
  };
}
