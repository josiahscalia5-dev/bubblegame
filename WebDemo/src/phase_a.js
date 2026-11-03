// Phase A, first test (?phaseA, not yet approved): the real 3D opening's castle colours and glow, and the slide's
// water and foam, brought closer to the approved Screen 3. Off unless the page is opened with ?phaseA; without it,
// nothing here runs and every shader is exactly the one the approved opening uses.
//
//   - castle: per-mesh copies of the castle's own baked materials with one more colour step: its near-white
//     lavender walls become the approved soft pink-lavender stone, the gold turns softer and peachier, the hot pink
//     trims calmer, and a soft pink-white light glows around the top of the washer door.
//   - water:  the slide's water sheet (in front of the castle) gets its own copy of the water shader, sharing the
//     game's water uniforms, with one more block in the opening section: icy cyan water, a bold white crackle web at
//     two scales, a thicker white foam collar around the mascot and along the slide edges, more sparkles, and less of
//     the pale sky reflection. The drum's water sheet keeps the original shader, so the tunnel is drawn as before.
//
// Visual only: no geometry, collider, lane, camera, collectible, mascot or tunnel change. Called from opening.js
// while the opening layer is built (inside its private random generator, so the game's random numbers are untouched).
// For trying settings without a rebuild: window.__BW_PHASE_A_TUNE__ = { castle: {...}, water: {...} } before load.
export const PHASE_A = typeof window !== 'undefined' && !window.__BW_CLASSIC__ && !/[?&]classic(=|&|$)/.test(location.search)
  && !!(window.__BW_PHASE_A__ || /[?&]phase-?a(=|&|$)/i.test(location.search));

// Settings chosen by measuring Tap to Start screenshots against the approved Screen 3 (castle area: average colour
// difference 11.5 -> 3.3; slide water: white lines and foam 2 % -> 28 % of the surface, approved 27 %).
// The approved castle: soft rose-mauve and pink-lavender stone, peach gold, a pink-white glow at the door top.
export const PHASE_A_CASTLE = { wallHue: 305, wallSat: 0.32, wallDim: 0.14, goldHue: 36, goldSoften: 0.18, hotSoften: 0.2,
  glowAbove: 3.3, glowZ: 1.2, glowSize: [4.5, 3.2, 8.0], glowColor: [1.0, 0.86, 0.98], glowMix: 0.35, glowAdd: 0.06 };
// The Meshy water towers either side of the castle: calmer rose collars instead of hot pink, softer peach gold.
export const PHASE_A_TOWER = { hotHue: 300, hotSoften: 0.22, goldHue: 34, goldSoften: 0.3 };
// The lavender wall facing around the gold door ring (opening.js): the approved pink-lavender stone, lit by a soft
// pink-white glow next to the ring (linear colours).
export const PHASE_A_WALL = { stone: [0.62, 0.38, 0.66], glow: [0.95, 0.8, 0.95], glowMix: 0.55, glowReach: 3.6 };
// The approved slide water: luminous icy cyan cells, bold white crackle lines, thick white foam around the mascot.
export const PHASE_A_WATER = { deep: [0.03, 0.4, 0.88], light: [0.3, 0.75, 1.0], icyMix: 0.85, crackScale: [4.4, 2.2], crack: 1.0, crackW: 0.11,
  collarR: 0.5, collarW: 0.7, edgeFoam: 1.0, sparkle: 2.0, skyCut: 0.6 };
const TUNE = (typeof window !== 'undefined' && window.__BW_PHASE_A_TUNE__) || {};
Object.assign(PHASE_A_CASTLE, TUNE.castle || {});
Object.assign(PHASE_A_TOWER, TUNE.tower || {});
Object.assign(PHASE_A_WALL, TUNE.wall || {});
Object.assign(PHASE_A_WATER, TUNE.water || {});

const f = (v) => (+v).toFixed(4), v2 = (a) => `vec2(${a.map(f).join(', ')})`, v3 = (a) => `vec3(${a.map(f).join(', ')})`;
const PA_HSV = /* glsl */ `
vec3 paRgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 paHsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;

export function applyPhaseA({ scene, castle, waterSheets, axisY, tunnelStart }) {
  const report = { castleMaterials: 0, towerMeshes: 0, wallFacing: false, waterSheet: false };
  // ---- the Meshy water towers (one shared material, 'decor:tower'): a copy with calmer pink and softer gold
  let towerSrc = null, towerCopy = null;
  scene.traverse((o) => {
    if (!o.isMesh || !o.material || !o.material.customProgramCacheKey || o.material.customProgramCacheKey() !== 'decor:tower') return;
    if (!towerCopy) {
      towerSrc = o.material;
      const P = PHASE_A_TOWER, prev = towerSrc.onBeforeCompile;
      towerCopy = towerSrc.clone();
      towerCopy.onBeforeCompile = (s, r) => {
        prev.call(towerSrc, s, r);
        s.fragmentShader = s.fragmentShader.replace('void main() {', `${PA_HSV}
vec3 paTower(vec3 lin) {
  vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = paRgb2hsv(c); float h = hsv.x * 360.0;
  float hot = smoothstep(295.0, 312.0, h) * smoothstep(0.45, 0.7, hsv.y);
  hsv.x = mix(hsv.x, ${f(P.hotHue / 360)}, hot * 0.5); hsv.y *= 1.0 - ${f(P.hotSoften)} * hot; hsv.z *= 1.0 - 0.05 * hot;
  float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
  hsv.x = mix(hsv.x, ${f(P.goldHue / 360)}, gold * 0.4); hsv.y *= 1.0 - ${f(P.goldSoften)} * gold;
  return pow(paHsv2rgb(hsv), vec3(2.2));
}
void main() {`)
          .replace('#include <map_fragment>', '#include <map_fragment>\n  diffuseColor.rgb = paTower(diffuseColor.rgb);   // Phase A')
          .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n  totalEmissiveRadiance = paTower(totalEmissiveRadiance);   // Phase A');
      };
      towerCopy.customProgramCacheKey = () => 'decor:tower|phaseA:' + JSON.stringify(PHASE_A_TOWER);
    }
    o.material = towerCopy;
    report.towerMeshes++;
  });
  // ---- the wall facing around the gold door ring: the approved pink-lavender stone with a soft glow by the ring
  scene.traverse((o) => {
    if (report.wallFacing || !o.isMesh || !o.material || !o.material.uniforms || !o.material.uniforms.uWall) return;
    const P = PHASE_A_WALL, m = o.material.clone();
    m.fragmentShader = `uniform vec3 uWall, uShade; varying vec2 vP;
      void main() {   // Phase A (?phaseA)
        float r = length(vP);
        vec3 c = mix(${v3(P.stone)}, ${v3(P.glow)}, (1.0 - smoothstep(2.95, ${f(P.glowReach)}, r)) * ${f(P.glowMix)});
        c *= 0.94 + 0.08 * smoothstep(-2.0, 3.5, vP.y);
        c = mix(c, uShade * 0.6, 1.0 - smoothstep(2.95, 3.0, r));   // the thin dark line right at the ring stays
        float a = 1.0 - smoothstep(3.55, 3.92, r);                 // fades into the castle's own wall, as before
        gl_FragColor = vec4(c * a, a);
      }`;
    o.material = m;
    report.wallFacing = true;
  });
  // ---- castle
  if (castle) {
    const P = PHASE_A_CASTLE;
    const block = `
      { // Phase A (?phaseA): the approved castle's pink-lavender stone, softer peach gold, calmer pink, and a soft glow
        vec3 c = pow(max(diffuseColor.rgb, 0.0), vec3(1.0 / 2.2));
        vec3 hsv = bwRgb2hsv(c);
        float h = hsv.x * 360.0;
        float lav = smoothstep(215.0, 245.0, h) * (1.0 - smoothstep(330.0, 345.0, h));
        float pale = max(lav, 1.0 - smoothstep(0.04, 0.09, hsv.y)) * (1.0 - smoothstep(0.22, 0.42, hsv.y)) * smoothstep(0.45, 0.75, hsv.z);
        hsv.x = mix(hsv.x, ${f(P.wallHue / 360)}, pale * 0.75);
        hsv.y = mix(hsv.y, max(hsv.y, ${f(P.wallSat)}), pale);
        hsv.z *= 1.0 - ${f(P.wallDim)} * pale;
        float gold = smoothstep(16.0, 26.0, h) * (1.0 - smoothstep(58.0, 70.0, h)) * smoothstep(0.3, 0.5, hsv.y);
        hsv.x = mix(hsv.x, ${f(P.goldHue / 360)}, gold * 0.4);
        hsv.y *= 1.0 - ${f(P.goldSoften)} * gold;
        hsv.z *= 1.0 - 0.06 * gold;
        float hot = smoothstep(300.0, 318.0, h) * smoothstep(0.55, 0.8, hsv.y);
        hsv.y *= 1.0 - ${f(P.hotSoften)} * hot;
        c = bwHsv2rgb(hsv);
        vec3 dg = (vShadeP - vec3(0.0, ${f(axisY + P.glowAbove)}, ${f(P.glowZ)})) / ${v3(P.glowSize)};
        float glowK = exp(-dot(dg, dg));
        c = mix(c, ${v3(P.glowColor)}, glowK * ${f(P.glowMix)}) + ${v3(P.glowColor)} * glowK * ${f(P.glowAdd)};
        diffuseColor.rgb = pow(c, vec3(2.2));
      }`;
    castle.traverse((o) => {
      if (!o.isMesh || !o.material || !o.material.onBeforeCompile) return;
      const src = o.material, prev = src.onBeforeCompile, prevKey = src.customProgramCacheKey.bind(src);
      const m = src.clone();
      m.onBeforeCompile = (s, r) => {
        prev.call(src, s, r);
        // only where the castle's own colour work has the pieces this needs (its grade and its world position)
        if (s.fragmentShader.includes('bwRgb2hsv') && s.fragmentShader.includes('vShadeP')) s.fragmentShader = s.fragmentShader.replace('#include <color_fragment>', block + '\n#include <color_fragment>');
      };
      m.customProgramCacheKey = () => prevKey() + '|phaseA-castle:' + JSON.stringify(P);
      o.material = m;
      report.castleMaterials++;
    });
  }
  // ---- slide water
  const slide = (waterSheets || []).find((s) => { s.geometry.computeBoundingBox(); return s.geometry.boundingBox.min.z < tunnelStart - 5; });
  if (slide) {
    const src = slide.material, s0 = src.fragmentShader;
    const A1 = '  float bubbleShade = 0.0;\n';
    const A2 = '    col += (vec3(0.55, 0.92, 1.0) * lines * 0.3 + vec3(0.75, 0.95, 1.0) * caustic * 0.3 * (1.0 - moat)) * openK;\n  }';
    const A3 = '  vec3 foamCol = vec3(0.9, 0.97, 1.0) * (0.92 + 0.18 * NdotL);';
    if ([A1, A2, A3].every((a) => s0.split(a).length === 2)) {
      const m = src.clone();
      m.uniforms = src.uniforms;   // the same live values (time, mascot, flow) as the game's water
      m.fragmentShader = s0.replace(A1, A1 + '  float paSlide = 0.0;   // Phase A\n')
        .replace(A2, A2.replace(/\n  }$/, '') + '\n' + waterBlock(PHASE_A_WATER) + '\n  }')
        .replace(A3, `  lit -= env * fresnel * 0.28 * (1.0 - inDrum * 0.6) * ${f(PHASE_A_WATER.skyCut)} * paSlide;   // Phase A: less pale sky on the slide\n` + A3);
      slide.material = m;
      report.waterSheet = true;
    }
  }
  return report;
}

const waterBlock = (P) => /* glsl */ `
    { // Phase A (?phaseA): icy cyan water, a bold white crackle web, a thicker white foam collar and more sparkles
      float slideK = openK * (1.0 - moat);
      paSlide = slideK;
      vec3 icy = mix(${v3(P.deep)}, ${v3(P.light)}, clamp(0.3 + crest * 0.4 + hollow * 0.3, 0.0, 1.0));
      col = mix(col, icy, ${f(P.icyMix)} * slideK);
      vec2 iw = bwVoronoi((xz + warp * 0.35) * ${v2(P.crackScale)} - vec2(0.0, flowT * 0.55) + 11.0);
      vec2 iw2 = bwVoronoi((xz + warp * 0.25) * ${v2(P.crackScale)} * 2.0 - vec2(0.0, flowT * 0.6) + 23.0);
      float crack = 1.0 - smoothstep(0.015, ${f(P.crackW)}, iw.y - iw.x);
      float crack2 = (1.0 - smoothstep(0.01, ${f(P.crackW * 0.66)}, iw2.y - iw2.x)) * 0.6;
      col = mix(col, vec3(0.93, 0.99, 1.0), clamp(max(crack, crack2) * (0.55 + 0.45 * patchy) * ${f(P.crack)}, 0.0, 1.0) * slideK);
      float collar = exp(-pow(max(0.0, rM - ${f(P.collarR)}) / ${f(P.collarW)}, 2.0));
      foam = max(foam, smoothstep(0.3, 0.75, collar * (0.75 + 0.5 * stream)) * openK);
      foam = max(foam, edgeBand * smoothstep(0.35, 0.7, stream) * ${f(P.edgeFoam)} * openK);
      vec2 sp2 = xz * vec2(11.0, 6.0) - vec2(0.0, flowT * 0.35), sc2 = floor(sp2);
      float sh2 = bwHash(sc2 + 57.3);
      float star2 = 1.0 - smoothstep(0.0, 0.035, length((fract(sp2) - 0.5) * vec2(0.09, 0.17)));
      glint += step(0.93, sh2) * star2 * pow(max(0.0, sin(t * (4.0 + sh2 * 5.0) + sh2 * 60.0)), 4.0) * ${f(P.sparkle)} * slideK;
    }`;
