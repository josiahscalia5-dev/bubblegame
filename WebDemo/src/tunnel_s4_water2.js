// ?s3=intunnel,water2 (test only; 6 November 2026, the user's brief: "stop adding new objects to the water ... correct the
// existing water itself"): heroSwell's OWN face material takes the ORIGINAL approved Screen 4's foreground water.
//
// The investigation (Previews/WebDemo/screen4_round9_match/44_water_material/diag/): in the water band at her base the
// accepted build is 40.6 % icy pale blue against the original's 27.5 %, 0.3 % lavender against 15.3 %, and its white is
// the face's procedural comma arcs (off: white 14.2 -> 5.4 %). Hiding heroSwell drops the icy pale blue to 20.3 %; its
// palette (#acdffc / #78c4f8) is the game's two largest colour clusters there. Bloom, grade, floor and the extra splash
// layers each move it 1-2.5 points. So the pale flat water is heroSwell's face material itself.
//
// The change: the face's water colour is the original's own foreground water (textures/screen4/foreground_water_original.png,
// tools/screen4/derive_water_map.py: the original from y 0.72 down, the character, coins and power buttons filled from the
// water round them), placed on the face in HER water frame: each point of the face (in the swell's frame uniforms uC, uR,
// uU, uT) projected through the camera as it was at the start view (uBwRef, captured once), so at the start it lands where
// the original has it and while she moves the pattern rides with her water (not a screen overlay); a slow flow distortion
// keeps it moving; the comma arcs off (the original's own whites are in it). Colours through mtUndisplay (exact on screen).
// The swell's geometry, crest, waterline, her model and everything else unchanged. Code gated on WATER2_ON.
import * as THREE from 'three';
import { WATER2_ON, WATER2, WATER7, WATER8 } from './tunnel_s4_bt.js';

const f4 = (x) => (+x).toFixed(5);
const v3 = (c) => `vec3(${c.slice(0, 3).map(f4).join(', ')})`;
// ?s3=intunnel,water7 (R7): the spray particles' fragment shader (shaders.js dropFragment) with the droplets drawn as clear
// blue drops with a small blue-white glint, the foam puffs fainter and blue; the sparkle stars as before (tunnel_s4_bt.js WATER7)
export const water7DropFragment = () => /* glsl */ `
varying float vAlpha; varying float vKind;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0; float r = length(p);
  if (r > 1.0) discard;
  vec3 col; float a;
  if (vKind < 0.5) {            // (R7) water droplet: a clear blue drop, a thin rim and a small blue-white glint
    float hl = 1.0 - smoothstep(0.0, 0.3, length(p - vec2(-0.32, -0.32)));
    a = (1.0 - smoothstep(0.8, 1.0, r)) * (${f4(WATER7.body)} + ${f4(WATER7.rim)} * smoothstep(0.5, 0.92, r)) + hl * ${f4(WATER7.hl)};
    col = mix(${v3(WATER7.drop)}, ${v3(WATER7.glint)}, clamp(hl + smoothstep(0.7, 0.98, r) * 0.25, 0.0, 1.0));
  } else if (vKind < 1.5) {     // (R7) foam puff: fainter and blue
    a = (1.0 - smoothstep(0.15, 1.0, r)) * ${f4(WATER7.foam[3])};
    col = ${v3(WATER7.foam)};
  } else {                      // sparkle star (unchanged)
    float cross_ = max((1.0 - smoothstep(0.0, 0.14, abs(p.x))) * (1.0 - abs(p.y)), (1.0 - smoothstep(0.0, 0.14, abs(p.y))) * (1.0 - abs(p.x)));
    a = clamp(cross_ + (1.0 - smoothstep(0.0, 0.35, r)), 0.0, 1.0);
    col = vec3(2.2, 1.6, 2.0);
  }
  a *= vAlpha;
  gl_FragColor = vec4(col * a, a);   // premultiplied
}
`;
// ?s3=intunnel,water8 (R8): the bloom pass's own blend (UnrealBloomPass.blendMaterial, three's CopyShader, added onto the
// frame) faded over the lower part of the screen, where the foreground water is (tunnel_s4_bt.js WATER8). Only the glow
// it adds changes; the frame under it, the bloom above the band and every other pass are as before.
export function water8Bloom(bloom) {
  const [b0, b1] = WATER8.band;
  bloom.blendMaterial.fragmentShader = /* glsl */ `
uniform float opacity; uniform sampler2D tDiffuse; varying vec2 vUv;
void main() {
  vec4 texel = texture2D(tDiffuse, vUv);
  float k = mix(1.0, ${f4(WATER8.keep)}, smoothstep(${f4(b0)}, ${f4(b1)}, 1.0 - vUv.y));   // (R8) screen y from the top
  gl_FragColor = opacity * texel * k;
}`;
  bloom.blendMaterial.needsUpdate = true;
}
// (R7) round3's kind 3 white spray (game.js, the patch after `fx`): the same particles drawn as clear blue drops. Puts R7's
// branch in front of round3's white one (which stays, unreached), so the shader is otherwise exactly round3's.
export const water7Spray = (src) => { const S = WATER7.spray; return src.replace('if (vKind > 2.5) {', `if (vKind > 2.5) {   // (R7) a clear blue drop with a small blue-white glint
    float hl = 1.0 - smoothstep(0.0, 0.3, length(p - vec2(-0.3, -0.3)));
    a = (1.0 - smoothstep(0.75, 1.0, r)) * (${f4(S.body)} + ${f4(S.rim)} * smoothstep(0.5, 0.92, r)) + hl * ${f4(S.hl)};
    col = mix(${v3(S.drop)}, ${v3(S.glint)}, clamp(hl + smoothstep(0.7, 0.98, r) * 0.3, 0.0, 1.0));
  } else if (vKind > 2.5) {`); };
// the uniforms added to the swell's material (tunnel_r8_liquid.js liquidSwell)
export function water2Uniforms() {
  const u = { uBwRef: { value: new THREE.Matrix4() }, uBwOn: { value: 0 }, uBwTex: { value: null } };
  if (WATER2.body) u.uBwBody = { value: null };   // (R6) her body as the original draws it: the face is cut there
  // the texture, loaded with a private random sequence (a new Texture draws a UUID from Math.random)
  const keep = Math.random; let a = 0xb2a7; Math.random = () => { a = (a * 1664525 + 1013904223) >>> 0; return a / 4294967296; };
  try {
    const blank = new THREE.DataTexture(new Uint8Array([90, 160, 240, 255]), 1, 1); blank.needsUpdate = true; u.uBwTex.value = blank;
    const load = (file, key) => new THREE.TextureLoader().load(`textures/screen4/${file}`, (t) => {
      t.colorSpace = THREE.NoColorSpace; t.flipY = false; t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
      t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.needsUpdate = true;
      u[key].value = t;
    });
    load(WATER2.file, 'uBwTex');
    if (WATER2.body) {   // (R6) no cut until the mask has loaded
      const none = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1); none.needsUpdate = true; u.uBwBody.value = none;
      load(WATER2.body, 'uBwBody');
    }
  } finally { Math.random = keep; }
  return u;
}
// the start view, captured once: the matrix taking a point of the swell's frame (x, h, u) to the start camera's clip space
export function installWater2({ scene, swell }) {
  const U = swell.material.uniforms, F = new THREE.Matrix4(), M = new THREE.Matrix4();
  const prev = scene.onBeforeRender;
  scene.onBeforeRender = function (renderer, sc, cam, rt) {
    if (prev) prev.call(this, renderer, sc, cam, rt);
    if (U.uBwOn.value || !cam || !cam.isPerspectiveCamera || !swell.visible || U.uFade.value < 0.99) return;
    const C = U.uC.value, R = U.uR.value, Up = U.uU.value, T = U.uT.value;
    F.set(R.x, Up.x, T.x, C.x, R.y, Up.y, T.y, C.y, R.z, Up.z, T.z, C.z, 0, 0, 0, 1);
    cam.updateMatrixWorld(); M.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse).multiply(F);
    U.uBwRef.value.copy(M); U.uBwOn.value = 1;
  };
}
export const water2Decl = () => WATER2_ON ? 'uniform mat4 uBwRef; uniform float uBwOn; uniform sampler2D uBwTex;\n' + (WATER2.body ? 'uniform sampler2D uBwBody;\n' : '') : '';
// inside focusSwellGLSL's block (s, fsPd, fsE, fl, mwCol, vW and the swell's frame uniforms are in scope)
export function water2GLSL() {
  const P = WATER2;
  return /* glsl */ `      {   // ?s3=...,water2: the original's own foreground water on the face, in her water frame
        vec3 bwO = vW - uC;
        vec4 bwC = uBwRef * vec4(dot(bwO, uR), dot(bwO, uU), dot(bwO, uT), 1.0);
        vec2 bwS = vec2(bwC.x / bwC.w * 0.5 + 0.5, 0.5 - bwC.y / bwC.w * 0.5);       // the start view's screen place (y down)
${P.shift ? `        bwS.y += ${f4(P.shift / 1536)};   // (R5) the registration: the original's water where the original has it at the start frame
` : ''}        vec2 bwQ = vec2(bwS.x, (bwS.y - ${f4(P.y0)}) / ${f4(1 - P.y0)});
        vec2 bwD = vec2(texture2D(uLqTex, bwQ * vec2(2.1, 1.3) + vec2(0.13, -uTime * ${f4(P.flow)})).b,
                        texture2D(uLqTex, bwQ * vec2(1.7, 2.3) + vec2(0.57, -uTime * ${f4(P.flow * 1.3)})).b) - 0.5;
        vec3 bwT = texture2D(uBwTex, clamp(bwQ + bwD * ${f4(P.wobble)}, vec2(0.002), vec2(0.998))).rgb;
${P.body ? `        // (R6) the contact edge: where the original draws her body the face is cut, so her own fur shows down to the
        // original's lobe outline, which becomes the water's top edge in front of her (the same place and flow as the colour)
        if (uBwOn > 0.5 && bwS.y > ${f4(P.y0)} && texture2D(uBwBody, clamp(bwQ + bwD * ${f4(P.wobble)}, vec2(0.002), vec2(0.998))).r > ${f4(P.cut)}) discard;
` : ''}${P.gain ? `        { float bwL = dot(bwT, vec3(0.2126, 0.7152, 0.0722));   // (R3) the colours lifted against the bloom's haze; white stays white
          bwT = pow(clamp(bwL + (bwT - bwL) * ${f4(P.gain[0])}, 0.0, 1.0), vec3(${f4(P.gain[1])})); }
` : ''}        float bwK = ${f4(P.amount)} * uBwOn * smoothstep(${f4(P.y0)}, ${f4(P.y0 + 0.03)}, bwS.y);
        mwCol = mix(mwCol, mtUndisplay(bwT), bwK);
      }
`;
}
