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
import { WATER2_ON, WATER2, WATER9_ON, WATER9 } from './tunnel_s4_bt.js';
// ?s3=intunnel,water9 (R9): the swell's opacity `a` faded out beyond the contact zone round her (tunnel_s4_bt.js WATER9),
// placed in the swell's fragment shader just before its output (tunnel_r8_liquid.js liquidSwell; vW, uC, uR, uT, a in scope)
export function water9GLSL() {
  if (!WATER9_ON) return '';
  const P = WATER9, f = (x) => (+x).toFixed(5);
  return /* glsl */ `  {   // ?s3=...,water9: the swell only where the water touches her; beside and behind her the tunnel's own water
    vec3 swO = vW - uC;
    float swE = length(vec2(dot(swO, uR) / ${f(P.keep[0])}, dot(swO, uT) / ${f(P.keep[1])}));
    a *= 1.0 - smoothstep(${f(P.fade[0])}, ${f(P.fade[1])}, swE);
  }
`;
}

const f4 = (x) => (+x).toFixed(5);
// the uniforms added to the swell's material (tunnel_r8_liquid.js liquidSwell)
export function water2Uniforms() {
  const u = { uBwRef: { value: new THREE.Matrix4() }, uBwOn: { value: 0 }, uBwTex: { value: null } };
  // the texture, loaded with a private random sequence (a new Texture draws a UUID from Math.random)
  const keep = Math.random; let a = 0xb2a7; Math.random = () => { a = (a * 1664525 + 1013904223) >>> 0; return a / 4294967296; };
  try {
    const blank = new THREE.DataTexture(new Uint8Array([90, 160, 240, 255]), 1, 1); blank.needsUpdate = true; u.uBwTex.value = blank;
    new THREE.TextureLoader().load(`textures/screen4/${WATER2.file}`, (t) => {
      t.colorSpace = THREE.NoColorSpace; t.flipY = false; t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
      t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.needsUpdate = true;
      u.uBwTex.value = t;
    });
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
export const water2Decl = () => WATER2_ON ? 'uniform mat4 uBwRef; uniform float uBwOn; uniform sampler2D uBwTex;\n' : '';
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
${P.mirror ? `        // (R7) beyond the texture's edges the original's water mirrored back in, not the edge texel smeared: the first 4
        // columns are the original screenshot's dark frame border, clamped into a dark grey fin at the lower left when she
        // steers left, and the last rows into vertical streaks at the bottom of the start view
        vec2 bwUV = bwQ + bwD * ${f4(P.wobble)};
        { float bwL0 = ${f4(P.mirror[0])}, bwR1 = ${f4(1 - P.mirror[1])}, bwB1 = ${f4(1 - P.mirror[2])};
          bwUV.x = bwUV.x < bwL0 ? 2.0 * bwL0 - bwUV.x : (bwUV.x > bwR1 ? 2.0 * bwR1 - bwUV.x : bwUV.x);
          bwUV.y = bwUV.y > bwB1 ? 2.0 * bwB1 - bwUV.y : bwUV.y; }
` : ''}${P.alpha ? `        vec4 bwT4 = texture2D(uBwTex, clamp(${P.mirror ? 'bwUV' : `bwQ + bwD * ${f4(P.wobble)}`}, vec2(0.002), vec2(0.998)));
        // (R8) where the original has her body the face is dropped: its edge in front of her follows the original's outline
        if (uBwOn > 0.5 && bwT4.a < 0.5 && bwS.y > ${f4(P.y0 + 0.004)}) discard;
        vec3 bwT = bwT4.rgb;` : `        vec3 bwT = texture2D(uBwTex, clamp(${P.mirror ? 'bwUV' : `bwQ + bwD * ${f4(P.wobble)}`}, vec2(0.002), vec2(0.998))).rgb;`}
${P.gain ? `        { float bwL = dot(bwT, vec3(0.2126, 0.7152, 0.0722));   // (R3) the colours lifted against the bloom's haze; white stays white
          bwT = pow(clamp(bwL + (bwT - bwL) * ${f4(P.gain[0])}, 0.0, 1.0), vec3(${f4(P.gain[1])})); }
` : ''}        float bwK = ${f4(P.amount)} * uBwOn * smoothstep(${f4(P.y0)}, ${f4(P.y0 + 0.03)}, bwS.y);
        mwCol = mix(mwCol, mtUndisplay(bwT), bwK);
      }
`;
}
