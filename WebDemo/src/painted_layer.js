// ?s3=paint (test only, not approved): the far part of the approved Screen 3 painting (the castle, its towers and the
// gold washer-door ring) placed in the real 3D opening as painted scenery, with everything near the camera still real 3D:
// the pink mascot, the slide, the water, foam and bubbles, the brush and the machinery. Off by default; without the
// switch nothing here is loaded or run and the page is unchanged.
//
// How it works
//   - The painting is a flat facade standing across the run at the door (z = PAINT.planeZ), projected from the camera
//     that shows Tap to Start (the opening camera, ?s3=...,cine), so at Tap to Start it lines up with the approved
//     screen exactly, and after the tap it moves like a real wall at that distance as the camera rides toward it.
//   - Its colours are shown exactly as painted: it is laid in after the game's bloom, grade and tone mapping (one extra
//     step in the game's final output pass), not lit or tone mapped like the 3D scene, which cannot reproduce the
//     painting's brightest pinks and golds.
//   - It is hidden wherever the 3D scene has something solid nearer than the facade (read from the scene's depth), so
//     the slide, water, mascot, brush, machinery and coins stay in front of it. Glass-like soap bubbles in front of the
//     facade's opaque parts are covered by it (the painting has its own bubbles there).
//   - The door's centre is cut open here (a circle of PAINT.doorHole px in the painting): the real tunnel shows through
//     it, and the mascot and the camera ride through the opening (radius about 2.2 m at the door; the mascot reaches
//     1.98 m from the axis at most, the camera 1.61 m). With ?s3=paint,vortex the painted vortex fills the opening at Tap
//     to Start (without the duck below it, tools/paint_prep.py) and opens into the real tunnel just after the tap.
//     Once the camera is past the facade it is not drawn at all.
//   - Hidden while the test is on (scenery the painting replaces, all in front of the facade): the old castle model, the
//     door's lavender wall facing, the four Meshy entrance decorations and the code-built waterfalls.
// Visual only: no collider, lane, speed, jump, camera, collectible, mascot, path or tunnel change.
import * as THREE from 'three';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// The prepared image (tools/paint_prep.py writes the image and its .json; these match it): the approved frame
// (735 x 1476) sits at frameAt inside the texture, which adds margins for wider and taller screens.
export const PAINT = { file: 'ui/s3_painted_far.png', planeZ: 2.45, frame: [735, 1476], texture: [1103, 1040], frameAt: [184, 200],
  door: [367.5, 651.6], doorHole: 176, doorFeather: 5,
  // ?s3=paint,vortex: the painted vortex opens this long after the tap, over this many seconds (game time)
  openDelay: 0.1, openTime: 0.6 };

export async function setupPaintedLayer({ scene, composer, renderPass, updaters, hide, vortex = false }) {
  const report = {};
  let tex;
  try { tex = await new THREE.TextureLoader().loadAsync(PAINT.file); } catch { return { error: 'image not found: ' + PAINT.file }; }
  tex.colorSpace = THREE.NoColorSpace;          // read as painted (sRGB values) and written straight to the screen
  tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter; tex.anisotropy = 4;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;

  // The scene's depth, kept with the image the 3D scene is drawn into (both of the composer's buffers, so it works
  // whichever one the scene is drawn into).
  for (const rt of [composer.renderTarget1, composer.renderTarget2]) {
    rt.depthTexture = new THREE.DepthTexture(rt.width, rt.height);
    rt.dispose();   // rebuilt with the depth texture on its next use
  }
  let sceneTarget = null, placed = false;
  const drawScene = renderPass.render.bind(renderPass);
  renderPass.render = (renderer, writeBuffer, readBuffer, dt, mask) => { sceneTarget = readBuffer; return drawScene(renderer, writeBuffer, readBuffer, dt, mask); };

  // The final output pass: the game's own (tone mapping and sRGB, unchanged), then the painting laid in.
  const out = new OutputPass();
  const U = out.uniforms;
  Object.assign(U, {
    tDepth: { value: null }, tPaint: { value: tex }, uOn: { value: 1 },
    uProjInv: { value: new THREE.Matrix4() }, uCamWorld: { value: new THREE.Matrix4() }, uRefVP: { value: new THREE.Matrix4() },
    uNear: { value: 0.1 }, uFar: { value: 200 }, uPlaneZ: { value: PAINT.planeZ },
    // texture uv = (approved-frame uv) * xy + zw, both with v pointing up
    uFrame: { value: new THREE.Vector4(PAINT.frame[0] / PAINT.texture[0], PAINT.frame[1] / PAINT.texture[1],
      PAINT.frameAt[0] / PAINT.texture[0], 1 - (PAINT.frameAt[1] + PAINT.frame[1]) / PAINT.texture[1]) },
    // the door's opening in texture uv: centre, radius across and up; its soft edge; how far open (1 = fully)
    uDoor: { value: new THREE.Vector4((PAINT.frameAt[0] + PAINT.door[0]) / PAINT.texture[0], 1 - (PAINT.frameAt[1] + PAINT.door[1]) / PAINT.texture[1],
      PAINT.doorHole / PAINT.texture[0], PAINT.doorHole / PAINT.texture[1]) },
    uDoorSoft: { value: PAINT.doorFeather / (2 * PAINT.doorHole) }, uOpen: { value: 1 },
  });
  const fs = out.material.fragmentShader;
  const end = fs.lastIndexOf('}');
  out.material.fragmentShader = fs.slice(0, end).replace('#include <colorspace_pars_fragment>', `#include <colorspace_pars_fragment>\n${PAINT_UNIFORMS}`) + PAINT_COMPOSITE + '\n}';
  const finish = out.render.bind(out);
  out.render = (renderer, writeBuffer, readBuffer, dt, mask) => {
    const cam = renderPass.camera;
    U.tDepth.value = sceneTarget ? sceneTarget.depthTexture : null;
    U.uOn.value = placed && U.tDepth.value ? 1 : 0;
    U.uProjInv.value.copy(cam.projectionMatrixInverse); U.uCamWorld.value.copy(cam.matrixWorld);
    U.uNear.value = cam.near; U.uFar.value = cam.far;
    finish(renderer, writeBuffer, readBuffer, dt, mask);
  };
  const i = composer.passes.findIndex((p) => p instanceof OutputPass);
  if (i < 0) return { error: 'no output pass' };
  composer.passes[i] = out;

  // Projected from the camera that shows Tap to Start, as on a 1:2 portrait screen (the approved screen's shape): taken
  // on the first Tap to Start frame, after the opening camera has been placed.
  const ref = new THREE.PerspectiveCamera(40, 0.5, 0.1, 200);
  updaters.push((dt, t, phase) => {
    if (placed || phase !== 'intro') return;
    const c = renderPass.camera;
    c.updateMatrixWorld(true);
    ref.fov = c.aspect >= 0.5 ? c.fov : THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(c.fov) / 2) * c.aspect / 0.5));
    ref.position.copy(c.position); ref.quaternion.copy(c.quaternion); ref.updateProjectionMatrix(); ref.updateMatrixWorld(true);
    U.uRefVP.value.multiplyMatrices(ref.projectionMatrix, ref.matrixWorldInverse);
    placed = true;
    report.projectedFrom = { position: ref.position.toArray().map((v) => +v.toFixed(3)), fov: +ref.fov.toFixed(3) };
  });

  // The door's opening: always open, or (vortex) closed by the painted vortex at Tap to Start and opening after the tap.
  let t0 = null;
  updaters.push((dt, t, phase) => {
    if (!vortex) { U.uOpen.value = 1; return; }
    if (phase === 'running' && t0 === null) t0 = t;
    U.uOpen.value = phase === 'intro' ? 0 : t0 === null ? 1 : THREE.MathUtils.smoothstep(t - t0, PAINT.openDelay, PAINT.openDelay + PAINT.openTime);
  });
  report.vortex = vortex;

  // The scenery the painting replaces (all of it stands in front of the facade, so it would cover the painting).
  report.hidden = [];
  for (const [name, o] of Object.entries(hide)) if (o) { o.visible = false; report.hidden.push(name); }
  scene.traverse((o) => { if (o.isMesh && o.material && o.material.uniforms && o.material.uniforms.uWall) { o.visible = false; report.hidden.push('doorWallFacing'); } });
  report.planeZ = PAINT.planeZ;
  return report;
}

const PAINT_UNIFORMS = /* glsl */ `
uniform sampler2D tDepth, tPaint;
uniform mat4 uProjInv, uCamWorld, uRefVP;
uniform vec4 uFrame, uDoor;
uniform float uNear, uFar, uPlaneZ, uOn, uDoorSoft, uOpen;
// distance in front of the camera for a perspective depth value (three.js perspectiveDepthToViewZ, negated)
float paintDepthToDist(float d) { return (uNear * uFar) / (uFar - (uFar - uNear) * d); }
`;
const PAINT_COMPOSITE = /* glsl */ `
  // the painted facade, laid in after tone mapping: where this pixel's view ray meets the facade, and whether anything
  // solid in the 3D scene is nearer than that point
  if (uOn > 0.5) {
    vec4 fv = uProjInv * vec4(vUv * 2.0 - 1.0, 1.0, 1.0);
    vec3 rayV = normalize(fv.xyz / fv.w);
    vec3 dirW = normalize((uCamWorld * vec4(rayV, 0.0)).xyz);
    vec3 camW = uCamWorld[3].xyz;
    float t = (uPlaneZ - camW.z) / max(dirW.z, 1e-5);
    if (dirW.z > 1e-4 && t > 0.0) {
      vec3 hit = camW + dirW * t;
      float hitDist = -rayV.z * t;
      float sceneDist = paintDepthToDist(texture2D(tDepth, vUv).x);
      vec4 rc = uRefVP * vec4(hit, 1.0);
      vec2 uv = (rc.xy / rc.w) * 0.5 + 0.5;
      uv = uv * uFrame.xy + uFrame.zw;
      if (sceneDist > hitDist - 0.05 && rc.w > 0.0 && all(greaterThanEqual(uv, vec2(0.0))) && all(lessThanEqual(uv, vec2(1.0)))) {
        vec4 p = texture2D(tPaint, uv);
        float inDoor = 1.0 - smoothstep(1.0 - uDoorSoft, 1.0 + uDoorSoft, length((uv - uDoor.xy) / uDoor.zw));
        p.a *= 1.0 - inDoor * uOpen;
        gl_FragColor.rgb = mix(gl_FragColor.rgb, p.rgb, p.a);
      }
    }
  }
`;
