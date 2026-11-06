// ?s3=intunnel,swim (test only; 6 November 2026, sixteenth session): ONE candidate for the user's two goals, VISUAL
// MATCHING and NATURAL SWIMMING, built on the engineering diagnosis
// (Previews/WebDemo/screen4_round9_match/52_diagnosis/README.md). The ORIGINAL approved Screen 4 stays the only target.
//
// The diagnosis: the pale water that travels with her is heroSwell alone (73-76 % of the band's pixels change when it is
// hidden; every other layer under 13 %): a 1.9 m wide horseshoe mound built in her own frame and moved with her, covering
// the bottom fifth of the screen; since water2 its face is a still picture of the original's foam pinned to her. So the
// water touching her never flows past her (optical flow at her contact: streaming 41-56 px/s against 153-162 px/s of
// wobble), the floor's existing wake, ring and ripples are hidden under it, and its straight crest cuts her round
// silhouette flat. Her bob, lean, somersault and squash exist (game.js updateMascot) but read as a toy riding a cushion.
//
// The candidate (nothing here runs without the switch; ?s3=intunnel, R7-R9 and the normal game are unchanged):
//   1. collar: heroSwell reshaped into a tight contact collar round her body (the same mesh and draw call): the crest
//      ellipse 0.47 m sideways and 0.40 m toward the camera (was 0.95 / 0.55), a 0.16 m outer face (was 0.34), the crest
//      heights solved through the start camera so her waterline follows the ORIGINAL's own outline on her
//      (53_swim/scripts/solve_collar.py), sinking into the floor behind her widest point. Applied in buildHeroWater
//      (tunnel_r7_hero_water.js) before the swell and the layers that follow its crest are built.
//   2. look: the collar shaded as the same flowing water (swimCollarGLSL, the last step of the swell's Round 9 shading,
//      tunnel_r9_match_water.js): deep cobalt where the surface turns from the light, azure, turquoise currents on the lit
//      side streaming down the face at about her speed, crisp blue-white glints, small clear bubbles, a thin broken white
//      lip only where it touches her fur; its foot continues the floor's own water. No picture, no froth band.
//   3. wake: the floor's own wake (lqFloor's V arms, the ring round her, the landing rings and the game's ripples,
//      tunnel_r8_liquid.js lqWake) coloured: turquoise-lit crests, deeper cobalt churned water inside the V, a few small
//      white flecks close to her, anchored in the water (she leaves them behind) and fading over about 2.5 m.
//   4. motion: the collar's base follows the water surface under her (not her bob), flattens in the air, is thrown up on
//      landing and piles up on the side she swerves to; her model gets a calmer swim rhythm (swimPose, game.js): a 1.2 Hz
//      bob in place of the visible 1.7 Hz one, a small pitch rock and side sway. Visual only: her gameplay state (x, yAbs,
//      air, lanes, jumps, collisions) is untouched.
//   5. spray: R7's cap (every droplet at most 12 px of the 1536-px canvas).
// Colours are written as sRGB hex as they should appear on screen (through mtUndisplay, the inverse display transform).
import { SWIM_ON } from './tunnel_s4_bt.js';
export { SWIM_ON };

export const SWIM = {
  // 1. the collar's shape (HERO_WATER.swell): the crest ellipse (ax sideways, au toward the camera, m), the outer face,
  // the inner face, the crest heights every 5 degrees from -110 (screen right) to 110 (screen left), solved at the start
  // view; small rounded mounds along it [phi, height (m), half width (degrees)]; how it answers her (swerve: piles up per
  // m/s on the side she moves to; air: how much it flattens in a jump; land: thrown up on landing); lag: how far behind
  // her sideways moves it follows (s)
  collar: {
    ax: 0.47, au: 0.40, out: 0.16, inner: 0.14, dip: 0.0,
    line: [0.03, 0.03, 0.071, 0.146, 0.187, 0.202, 0.217, 0.232, 0.246, 0.257, 0.26, 0.262, 0.264, 0.278, 0.281, 0.305, 0.342,
      0.337, 0.352, 0.38, 0.404, 0.412, 0.41, 0.406, 0.41, 0.449, 0.48, 0.492, 0.49, 0.478, 0.464, 0.442, 0.414, 0.391, 0.375,
      0.363, 0.353, 0.342, 0.329, 0.315, 0.299, 0.229, 0.1, 0.03, 0.03],
    mounds: [[62, 0.03, 9], [38, 0.035, 8], [14, 0.025, 7], [-8, 0.03, 7], [-30, 0.03, 8], [-55, 0.03, 9]],
    swerve: 0.14, air: 0.92, land: 0.25, lag: 0.07,
    lift: 0.03,   // (c2) the whole crest raised by about a lobe's rounding, so the lobes' tops meet her outline and their gaps dip
  },
  // 2. the collar's water (sRGB on screen): deep cobalt, azure body, lit azure, turquoise currents, glint, lip
  look: { deep: '#1450d2', body: '#1f7fe8', lit: '#39b2f5', turq: '#58def7', glint: '#eef9ff', lip: '#f2fbff', bubble: '#dff1ff',
    flow: [1.2, 2.4], spec: 1.2, sparkle: 0.8, lip0: [0.012, 0.03], crestClear: 0.82,
    // (c2, after the first look: c1's smooth face read as a ribbed blue bucket round her, a water wall) the face broken into
    // large irregular rounded water lobes, as the original's rounded shapes at her base: cells per m [along the crest, down
    // the face], a lobe's radius as a share of its cell, the share of cells with one, how fast they stream down the face
    // and out along the crest (m/s at her cruising speed), the top band (m) where only the lobes stand (so her waterline is
    // scalloped by their rounded tops), and the lobes' colours: gap (between them), rim, highlight
    lobe: { cell: [5.2, 5.0], r: [0.46, 0.66], share: 0.92, down: 0.55, out: 0.18, top: 0.075, gap: '#0f47c4', rim: '#b8e4ff',
      hi: '#7fe8fb', amount: 1.0 },
    // (c3) how opaque the collar's water is: near the crest .. lower down (her fur shows through, violet)
    // (c5, after c4 showed her whole lower body as a large plain violet blob: water seen at this shallow angle mostly
    // reflects the bright tunnel, so her body under it shows only as a violet hint) [0.55, 0.86] -> [0.74, 0.9]
    clear: [0.74, 0.9],
    // (c5) the original's sparkling splash along her waterline (small white specks and a broken froth line, never a
    // cushion): specks per m, the share of cells with one, their size (share of a cell), how far down the face (m), the
    // froth line's width (m) [min, extra] and how often it breaks
    froth: { cell: 34, share: 0.4, dot: [0.12, 0.3], reach: 0.2, line: [0.018, 0.04], gaps: 0.42, amount: 0.95 },
    // (c6) the share of the face's cells with a twinkling glint (c1-c5: 0.07): the original's waterline glitters
    glints: 0.12,
    // (c4) beside her body: from / to (m sideways from her centre), how much of that opacity is left there
    sideClear: [0.42, 0.56, 0.18] },
  // 3. the wake on the floor: the V arms (where they start beside her, how fast they open per m behind her, their width),
  // how far behind her it fades (m), the ring round her (radius m), colours (sRGB) and strengths
  wake: { arm: [0.62, 0.42, 0.13], fade: 2.5, ring: 0.68, cobalt: '#1757d8', turq: '#5fdcf7', white: '#f2faff',
    crest: 0.75, trough: 0.65, fleck: 0.8 },
  // 4. her swim rhythm (visual only): bob (m) and its rate (Hz), the pitch rock and the side sway (degrees; the sway at half
  // the rate), the breath (share of her height); `cancel`: how much of the game's own 1.7 Hz bob is taken out of the drawing
  motion: { bob: 0.035, rate: 1.2, pitch: 3.0, sway: 2.0, breath: 0.015, cancel: 1.0, settle: 0.3 },
};
{ const t = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.swim;   // (test tunes only)
  if (t) for (const k of Object.keys(t)) SWIM[k] = (t[k] && typeof t[k] === 'object' && !Array.isArray(t[k])) ? { ...SWIM[k], ...t[k] } : t[k]; }

const f4 = (x) => (+x).toFixed(5);
const v3s = (hex) => { const n = parseInt(hex.slice(1), 16); return `vec3(${f4((n >> 16 & 255) / 255)}, ${f4((n >> 8 & 255) / 255)}, ${f4((n & 255) / 255)})`; };

// 2. the collar's water: the last step of matchSwellGLSL (tunnel_r9_match_water.js), replacing mwCol and mwA. In scope: vW,
// V, N (the rippled normal), d (m below the crest), s / as (m along the crest from the front), vS (vS.y: 0 outer foot ..
// 0.5 crest .. 1 inner foot; vS.w the crest height), fl (the flow, faster with her speed), hUp (m above the collar's base),
// mwFloor (the floor's own water here), mwKey (the key light on N), mwSpec, uC, uR, uTime, uLqTex, lqHash, mtUndisplay
export function swimCollarGLSL() {
  if (!SWIM_ON) return '';
  const K = SWIM.look, L = K.lobe, F = K.froth;
  return /* glsl */ `    {   // ?s3=...,swim: the contact collar as the same flowing water (tunnel_s4_swim.js)
      float swX = dot(vW - uC, uR);                                    // m sideways from her centre (screen left +)
      float swPd = (0.5 - vS.y) * 1.9;                                 // about m down the outer face from the crest
      float swUp = clamp(hUp / max(vS.w, 0.05), 0.0, 1.0);            // 0 at the floor's water .. 1 at the crest
      // the currents, streaming down the face (toward the camera) and out along the crest as she swims
      float swC1 = texture2D(uLqTex, vec2(as * 1.6 + fl * 0.10, swPd * 2.0 - fl * ${f4(K.flow[0])})).b;
      float swC2 = texture2D(uLqTex, vec2(as * 3.7 - fl * 0.05, swPd * 4.6 - fl * ${f4(K.flow[1])}) + 0.37).b;
      float swCur = swC1 * 0.65 + swC2 * 0.35;
      // lit by its real shape: faces turned from the light deep cobalt, lit faces azure, turquoise currents on the lit side
      float swKey = mwKey + (swCur - 0.5) * 0.55;
      vec3 swW = mix(${v3s(K.deep)}, ${v3s(K.body)}, smoothstep(0.22, 0.52, swKey));
      swW = mix(swW, ${v3s(K.lit)}, smoothstep(0.55, 0.82, swKey));
      swW = mix(swW, ${v3s(K.turq)}, smoothstep(0.6, 0.8, swCur) * smoothstep(0.35, 0.7, mwKey) * 0.5);
      swW = mix(swW, ${v3s(K.turq)}, (1.0 - smoothstep(0.0, 0.06, d)) * 0.45);   // thin water at the crest, lit through
      // (c2) large irregular rounded water lobes streaming down the face and out along the crest (the 2 x 2 nearest cells:
      // the highest lobe wins), each lit as a rounded bulge from above and the screen's left: turquoise-white highlight,
      // azure body, cobalt shade and deep cobalt gaps between them, a thin pale rim
      vec2 swLq = vec2(as * ${f4(L.cell[0])} + fl * ${f4(L.out * L.cell[0])}, swPd * ${f4(L.cell[1])} - fl * ${f4(L.down * L.cell[1])}), swLb = floor(swLq - 0.5);
      float swLh = 0.0; vec2 swLv = vec2(0.0);
      for (int j = 0; j < 4; j++) {
        vec2 swLi = swLb + vec2(mod(float(j), 2.0), floor(float(j) * 0.5));
        if (lqHash(swLi + 61.0) > ${f4(L.share)}) continue;
        vec2 swLo = swLq - swLi - 0.5 - (vec2(lqHash(swLi + 63.0), lqHash(swLi + 67.0)) - 0.5) * 0.5;
        float swLr = mix(${f4(L.r[0])}, ${f4(L.r[1])}, lqHash(swLi + 71.0));
        swLo.x *= 1.0 + 0.25 * (lqHash(swLi + 73.0) - 0.5);                       // irregular: a little wider or narrower
        float swLd = length(swLo) / swLr;
        if (swLd >= 1.0) continue;
        float h = sqrt(1.0 - swLd * swLd);
        if (h > swLh) { swLh = h; swLv = swLo / swLr; }
      }
      float swSide = s >= 0.0 ? 1.0 : -1.0;                                       // (s > 0: screen left of her)
      vec3 swLnrm = normalize(vec3(swLv.x * swSide, -swLv.y, swLh + 0.2));       // the lobe's normal: x screen right, y up, z out
      float swLlit = clamp(dot(swLnrm, normalize(vec3(-0.4, 0.62, 0.68))), 0.0, 1.0);
      float swLin = smoothstep(0.0, 0.1, swLh) * smoothstep(0.05, 0.4, swUp);
      // (c3, after c2's opaque lobes read as a quilted blue basket) the lobes are bulges of CLEAR water, not balls: each shows
      // as a turquoise sheen on its lit upper left, a thin pale rim along its upper outline and a white glint; between them
      // the water lies a little deeper (cobalt, a little less clear)
      float swRimL = (1.0 - smoothstep(0.0, 0.25, swLh)) * smoothstep(0.0, 0.04, swLh) * smoothstep(-0.2, 0.5, swLv.y * -1.0) * swLin;
      float swSheen = smoothstep(0.72, 0.95, swLlit) * smoothstep(0.2, 0.6, swLh) * swLin;
      swW = mix(swW, ${v3s(L.gap)}, (1.0 - smoothstep(0.0, 0.1, swLh)) * 0.5 * smoothstep(0.05, 0.4, swUp));
      swW = mix(swW, ${v3s(L.hi)}, swSheen * 0.7 * ${f4(L.amount)});
      vec3 swCol = mix(mwFloor, mtUndisplay(swW), smoothstep(0.0, 0.35, swUp));   // its foot: the floor's own water
      swCol = mix(swCol, mtUndisplay(${v3s(L.rim)}), swRimL * 0.65 * ${f4(L.amount)});
      // crisp blue-white glints: the key light's specular points and sparkles travelling down the face
      vec2 swGq = vec2(as * 26.0, swPd * 26.0 - fl * 14.0), swGi = floor(swGq);
      float swGh = lqHash(swGi + 41.0);
      float swGl = step(${f4(1 - K.glints)}, swGh) * (1.0 - smoothstep(0.08, 0.2, length(fract(swGq) - 0.5 - (vec2(lqHash(swGi + 43.0), lqHash(swGi + 47.0)) - 0.5) * 0.5)))
        * (0.5 + 0.5 * sin(uTime * 7.0 + swGh * 40.0)) * smoothstep(0.2, 0.6, swUp);
      swCol += ${v3s(K.glint)} * (mwSpec * ${f4(K.spec)} + swGl * ${f4(K.sparkle)});
      // small clear bubbles riding the water near the crest
      vec2 swBq = vec2(as * 11.0 + 0.2 * sin(uTime * 0.7), swPd * 11.0 - fl * 2.0), swBi = floor(swBq);
      vec2 swBo = fract(swBq) - 0.5 - (vec2(lqHash(swBi + 31.0), lqHash(swBi + 37.0)) - 0.5) * 0.3;
      float swBr = mix(0.18, 0.34, lqHash(swBi + 29.0)), swBl = length(swBo);
      float swBub = step(0.8, lqHash(swBi + 23.0)) * (1.0 - smoothstep(0.12, 0.4, swPd));
      float swRing = swBub * smoothstep(swBr - 0.07, swBr - 0.025, swBl) * (1.0 - smoothstep(swBr, swBr + 0.025, swBl));
      float swBgl = swBub * (1.0 - smoothstep(0.0, swBr * 0.25, length(swBo - vec2(-0.4, 0.4) * swBr)));
      swCol = mix(swCol, mtUndisplay(${v3s(K.bubble)}), clamp(swRing * 0.75 + swBgl, 0.0, 1.0));
      // a thin broken white lip only where the water touches her fur
      float swLn = texture2D(uLqTex, vec2(as * 2.4 - fl * 0.15, 0.71 + uTime * 0.06)).b;
      float swLw = ${f4(K.lip0[0])} + ${f4(K.lip0[1])} * swLn;
      float swLip = (1.0 - smoothstep(swLw * 0.5, swLw, d)) * smoothstep(0.45, 0.62, swLn) * (1.0 - smoothstep(0.36, 0.5, abs(swX)));
      swCol = mix(swCol, mtUndisplay(${v3s(K.lip)}), swLip * 0.85);
      // (c5) sparkling splash along her waterline: a broken froth line with bubbly holes and small white specks just under
      // it, streaming out along the crest and down the face as she swims
      float swFn = texture2D(uLqTex, vec2(as * 3.3 - fl * 0.25, 0.17 + uTime * 0.08)).b;
      float swFw = ${f4(F.line[0])} + ${f4(F.line[1])} * swFn;
      float swFl = (1.0 - smoothstep(swFw * 0.6, swFw, swPd)) * smoothstep(${f4(F.gaps)}, ${f4(F.gaps + 0.1)}, swFn * 0.7 + swC2 * 0.4);
      vec2 swFq = vec2(as * ${f4(F.cell)} - fl * 3.0, swPd * ${f4(F.cell)} - fl * 9.0), swFi = floor(swFq);
      float swFh = lqHash(swFi + 83.0), swFr = mix(${f4(F.dot[0])}, ${f4(F.dot[1])}, lqHash(swFi + 89.0));
      float swFd = length(fract(swFq) - 0.5 - (vec2(lqHash(swFi + 91.0), lqHash(swFi + 97.0)) - 0.5) * 0.5);
      swFl *= 1.0 - (1.0 - smoothstep(swFr * 0.8, swFr, swFd)) * step(0.55, swFh);                 // bubbly holes in the froth
      float swSpk = step(${f4(1 - F.share)}, swFh) * (1.0 - smoothstep(swFr * 0.7, swFr, swFd)) * (1.0 - smoothstep(${f4(F.reach * 0.4)}, ${f4(F.reach)}, swPd));
      float swFroth = clamp(max(swFl, swSpk) * ${f4(F.amount)}, 0.0, 1.0);
      swCol = mix(swCol, mtUndisplay(${v3s(K.lip)}), swFroth);
      // white glints on the lobes' lit tops
      float swLg = smoothstep(0.95, 0.995, swLlit) * smoothstep(0.45, 0.8, swLh) * swLin;
      swCol = mix(swCol, mtUndisplay(${v3s(K.glint)}), swLg);
      mwCol = swCol;
      // (c3) clear water: her fur shows through it (violet where the blue water lies over her pink, as the original's
      // lavender at her base), clearer near the crest and deeper lower down; the gaps a little less clear; the rims, sheens,
      // glints, bubbles and lip more opaque
      float swClr = mix(${f4(K.clear[0])}, ${f4(K.clear[1])}, smoothstep(0.03, 0.42, swPd)) + (1.0 - swLin) * 0.08 * smoothstep(0.05, 0.4, swUp);
      // (c4, after c3 read as a glass jar: its sides stood as walls beside her) beside her body the water is nearly clear,
      // only its rims, glints and bubbles show: water climbing her sides, not a container
      swClr *= mix(1.0, ${f4(K.sideClear[2])}, smoothstep(${f4(K.sideClear[0])}, ${f4(K.sideClear[1])}, abs(swX)));
      mwA = clamp(max(swClr, max(max(swRimL * 0.7, swSheen * 0.55), max(swLg, max(swRing * 0.75 + swBgl, max(swLip * 0.85, swFroth))))), 0.0, 1.0);
      // (c2) in the top band only the lobes stand: her waterline is the row of their rounded tops (pink between them)
      float swTop = 1.0 - smoothstep(${f4(L.top * 0.6)}, ${f4(L.top)}, swPd);
      mwA *= mix(1.0, smoothstep(0.0, max(fwidth(swLh) * 1.5, 0.02), swLh), swTop);
    }
`;
}

// 3. the wake: declarations for the floor's fragment shader (tunnel_r8_liquid.js floorFragment)
export const swimWakeDecl = (RIPPLES) => SWIM_ON ? `uniform vec4 uRipples[${RIPPLES}];\n` : '';
// after the floor's Round 9 colour (in scope: xu (track x, u), col, uLqPlayer, uLqMove (sideways speed, speed share, in the
// air, just landed), uTime, uRipples, lqHash, uLqTex, mtUndisplay)
export function swimWakeGLSL(RIPPLES) {
  if (!SWIM_ON) return '';
  const K = SWIM.wake;
  return /* glsl */ `  {   // ?s3=...,swim: the wake she leaves in the water, coloured (tunnel_s4_swim.js)
    vec2 swD = xu - uLqPlayer.xz;
    float swBeh = max(-swD.y, 0.0);                                   // m behind her (toward the camera)
    float swSpd = max(uLqMove.y * 7.0, 1.0);
    float swPx = swD.x + uLqMove.x * swBeh / swSpd * 0.8;             // across from where she was when she passed here
    float swArm = ${f4(K.arm[0])} + swBeh * ${f4(K.arm[1])};
    float swRun = (0.3 + 0.7 * min(uLqMove.y, 1.2)) * (1.0 - uLqMove.z);
    float swDecay = exp(-swBeh / ${f4(K.fade)}) * (1.0 - smoothstep(0.0, 0.35, swD.y)) * swRun;
    float swArmK = exp(-pow((abs(swPx) - swArm) / ${f4(K.arm[2])}, 2.0)) * swDecay;
    float swIn = (1.0 - smoothstep(swArm * 0.55, swArm, abs(swPx))) * swDecay;
    float swSt = texture2D(uLqTex, vec2(xu.x * 1.8, xu.y * 0.35)).b;   // streaks left in the water (anchored in it)
    float swR = length(swD * vec2(1.0, 0.85));
    float swRing = exp(-pow((swR - ${f4(K.ring)}) / 0.12, 2.0)) * (1.0 - uLqMove.z);
    float swLand = exp(-pow((swR - (0.6 + (1.0 - uLqMove.w) * 2.4)) / 0.15, 2.0)) * uLqMove.w;
    float swRip = 0.0;
    for (int i = 0; i < ${RIPPLES}; i++) {
      vec4 q = uRipples[i];
      float age = uTime - q.z;
      if (age < 0.0 || age > 2.0 || q.w <= 0.0) continue;
      float dd = length(xu - q.xy) - age * 2.4;
      swRip += sin(dd * 9.0) * exp(-dd * dd * 6.0) * exp(-age * 1.8) * q.w;
    }
    float swCrest = clamp(swArmK * 0.9 + swRing * 0.6 + swLand * 0.9 + max(swRip, 0.0) * 0.5, 0.0, 1.0);
    float swTrough = clamp(swIn * (0.6 + 0.6 * swSt) * 0.55 + max(-swRip, 0.0) * 0.4, 0.0, 1.0);
    col = mix(col, mtUndisplay(${v3s(K.cobalt)}), swTrough * ${f4(K.trough)});
    col = mix(col, mtUndisplay(${v3s(K.turq)}), swCrest * ${f4(K.crest)});
    vec2 swFq = xu * 18.0, swFi = floor(swFq);
    float swFk = step(0.9, lqHash(swFi + 7.7)) * (1.0 - smoothstep(0.12, 0.3, length(fract(swFq) - 0.5))) * swArmK * exp(-swBeh / 0.8);
    col = mix(col, mtUndisplay(${v3s(K.white)}), swFk * ${f4(K.fleck)});
  }
`;
}

// 4. her swim rhythm on her model (game.js updateMascot, after her pose is set; visual only). k: 0 in the air .. 1 swimming
// (eased back in after a landing). Returns the offset (m, up) and the extra pitch / roll (radians) and height scale.
// The rhythm's phase is set so that at the start frame (game clock t0 = 3.517 s, the compared Tap to Start moment) her
// drawn pose is the accepted one: the swim bob there equals the game's own bob it replaces (so the collar's crest, solved
// at that frame, meets her as solved).
const D2R = Math.PI / 180;
const gameBobAt = (t) => Math.sin(t * 1.7 * Math.PI * 2) * 0.05;   // the game's own bob (game.js updateMascot), still in her state
const T0 = 3.517, PH0 = Math.asin(Math.max(-1, Math.min(1, gameBobAt(T0) / SWIM.motion.bob)));
export function swimPose(t, k, air) {
  const M = SWIM.motion, ph = (t - T0) * M.rate * Math.PI * 2 + PH0;
  const gameBob = air ? 0 : gameBobAt(t);
  return {
    dy: k * (M.bob * Math.sin(ph) - M.cancel * gameBob),
    pitch: k * M.pitch * D2R * Math.sin(ph),
    roll: k * M.sway * D2R * Math.sin((ph - PH0) * 0.5),
    sy: 1 + k * M.breath * Math.sin(ph),
  };
}
