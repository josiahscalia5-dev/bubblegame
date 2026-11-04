// Golden paw coins for the ?s3=round2 test (game.js buildCollectibles): real 3D coins in the approved Screen 3 and 4 style,
// thick polished yellow gold with a raised outer rim, a raised inner ring, and a raised paw print (four toes over a big pad)
// on both faces. The coin is the same size as before (0.3 m radius), so collecting is unchanged.
// Made in code (lathe profile plus extruded, bevelled paw shapes), so no new model file is needed.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const PAW_COIN = {
  radius: 0.3, half: 0.05,
  // colours (linear): bright yellow gold for the rims and the paw, a warmer gold in the recessed field, orange gold on the edge
  bright: [1.0, 0.78, 0.26], field: [0.96, 0.6, 0.12], edge: [0.95, 0.52, 0.08],
  metalness: 0.75, roughness: 0.26, glow: 0.3,
};

/** detail: 'high' or 'low' (fewer segments, for coins far from the camera). Faces look along +Z and -Z, as the old coin's. */
export function pawCoinGeometry(detail = 'high') {
  const P = PAW_COIN, hi = detail === 'high';
  // profile from the middle of the front face out to the edge and back across the rear face: (radius, height)
  const front = [[0, 0.03], [0.188, 0.03], [0.2, 0.038], [0.214, 0.044], [0.228, 0.038], [0.237, 0.034], [0.248, 0.047], [0.266, 0.052], [0.287, 0.047], [0.299, 0.032]];
  const pts = [...front, ...front.slice().reverse().map(([r, h]) => [r, -h])].map(([r, h]) => new THREE.Vector2(r, h));
  pts.reverse();   // from the rear centre up to the front centre, so the lathe's faces point outward
  const body = new THREE.LatheGeometry(pts, hi ? 56 : 28).toNonIndexed();
  body.rotateX(Math.PI / 2);   // the lathe's axis (y) becomes z: faces toward +z and -z
  tint(body, (x, y, z) => { const r = Math.hypot(x, y); return Math.abs(z) < 0.034 && r > 0.29 ? P.edge : r < 0.196 ? P.field : P.bright; });

  const pawParts = [];
  const opts = { depth: 0.004, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.007, bevelSegments: hi ? 3 : 1, curveSegments: hi ? 14 : 6 };
  const pad = new THREE.Shape();
  pad.moveTo(0, 0.03);
  pad.bezierCurveTo(0.058, 0.03, 0.084, -0.008, 0.084, -0.042);
  pad.bezierCurveTo(0.084, -0.076, 0.06, -0.094, 0.036, -0.09);
  pad.bezierCurveTo(0.016, -0.087, 0.009, -0.1, 0, -0.1);
  pad.bezierCurveTo(-0.009, -0.1, -0.016, -0.087, -0.036, -0.09);
  pad.bezierCurveTo(-0.06, -0.094, -0.084, -0.076, -0.084, -0.042);
  pad.bezierCurveTo(-0.084, -0.008, -0.058, 0.03, 0, 0.03);
  pawParts.push(new THREE.ExtrudeGeometry(pad, opts));
  for (const [x, y, rx, ry, rot] of [[-0.106, 0.04, 0.03, 0.04, 0.5], [-0.039, 0.093, 0.031, 0.042, 0.14], [0.039, 0.093, 0.031, 0.042, -0.14], [0.106, 0.04, 0.03, 0.04, -0.5]]) {
    const toe = new THREE.Shape(); toe.absellipse(0, 0, rx, ry, 0, Math.PI * 2, false, 0);
    const g = new THREE.ExtrudeGeometry(toe, opts); g.rotateZ(rot); g.translate(x, y, 0); pawParts.push(g);
  }
  let paw = mergeGeometries(pawParts.map((g) => { g.deleteAttribute('uv'); return g.index ? g.toNonIndexed() : g; }));
  paw.translate(0, -0.005, 0.03 + opts.bevelThickness - 0.002);   // standing on the recessed field of the front face
  tint(paw, () => P.bright);
  const back = paw.clone(); back.rotateY(Math.PI);
  body.deleteAttribute('uv');
  const coin = mergeGeometries([body, paw, back]);
  coin.computeBoundingSphere();
  return coin;
}

function tint(g, fn) {
  const p = g.attributes.position, c = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) c.set(fn(p.getX(i), p.getY(i), p.getZ(i)), i * 3);
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
}

/** Polished gold: metallic, glossy, reflecting the scene's environment, with a little glow of its own so the coins stay bright
 *  gold when backlit in the portal and the drum (as in the approved screens), rather than turning orange-brown. */
export function pawCoinMaterial(env) {
  const P = PAW_COIN;
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: P.metalness, roughness: P.roughness, envMap: env, envMapIntensity: 1.35 });
  m.onBeforeCompile = (s) => {
    s.fragmentShader = s.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
  totalEmissiveRadiance += diffuseColor.rgb * ${P.glow.toFixed(3)} + vec3(1.0, 0.9, 0.55) * pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 3.0) * 0.35;`);
  };
  m.customProgramCacheKey = () => 'pawCoin';
  return m;
}
