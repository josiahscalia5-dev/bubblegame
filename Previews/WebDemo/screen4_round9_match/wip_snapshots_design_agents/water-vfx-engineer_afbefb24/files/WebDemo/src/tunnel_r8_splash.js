// ?s3=splash (test only): Round 8 pass 2, the VISIBLE translucent splashes round the character and a deeper swirl, on top of
// Round 8's real water (tunnel_r8_liquid.js). `splash` turns on everything `liquid` does plus this file; `?s3=splash,nofoam`
// is the same with the foam layer off (only the deeper swirl and the warmer core, no white). `?s3=liquid`, `?s3=hero` and
// everything older are unchanged: nothing here runs without the switch, and the hooks elsewhere only add `|| splash` to the
// hero switch, one settings merge and gated GLSL lines in tunnel_r8_liquid.js.
//
// Why (the user, 5 November 2026, after Round 8): "the foam-on version looks almost the same as foam-off". Round 8 kept white
// at 5-19% beside the character; the ORIGINAL APPROVED Screen 4 has about 35% white in the band beside and under it, as a
// bank of sculpted splash and bubbles with the blue water showing between. Blue water stays the first thing seen: every
// white here is translucent or broken, and sits on the blue.
//
// The splash bank (foam layer only, all in the character's frame, riding with the swell; it reacts to movement: bigger on the
// side the character swerves to, a burst on landing, smaller in the air):
//   1. spCurls: curling sheets of see-through water rising from the waterline either side of the body and curling outward,
//      the biggest just right of it (the approved splash at 60-71% across); turquoise glass with a broken white lip that
//      breaks into fingers, white streaks running up, whiter where seen edge-on (one draw call);
//   2. spLumps: clusters of rounded foam lumps on the waterline beside the body: white where lit, see-through blue in their
//      shade, a fine web of foam cells, a glossy rim (one instanced draw call);
//   3. stronger spray (heroSplash: more droplets, nearly opaque instead of 40%), bigger clusters of clear bubbles, a wider
//      broken foam crest along the swell beside the body (kept thin in front of it: the contact strip stays near the
//      approved's 19% white), and lacy foam on the water round the swell's foot.
// The deeper swirl (with or without foam): deep cobalt in the troughs between the wall's bands (the approved has 6% deep
// cobalt on the side walls; Round 8 had 1-3%), and a bigger, warmer peach-gold core.
// Colours are sRGB hex converted to linear light by THREE.Color. Private random numbers only (the game's seeded Math.random is
// untouched).
import * as THREE from 'three';
import { HERO_WATER } from './tunnel_r7_hero_water.js';
import { MATCH_ON, MATCH, deepMerge } from './tunnel_r9_match.js';   // ?s3=match: Round 9's settings
import { FOCUS_ON } from './tunnel_r9_focus.js';   // ?s3=focus: the seventh session's froth lobes are `match` only
import { matchLumpGLSL, matchLumpDecl, focusFrontBubbles } from './tunnel_r9_match_water.js';   // ?s3=match: Round 9's water (imported here so its settings reach MATCH before the merges below)

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const SPLASH_ON = LIST.includes('splash') || LIST.includes('match') || LIST.includes('focus');   // ?s3=match: Round 9 builds on this pass
export const SPLASH_FOAM = SPLASH_ON && !LIST.includes('nofoam');

export const SPLASH = {
  // merged into LIQUID (tunnel_r8_liquid.js) under splash, before LIQUID's own tune; arrays replace, objects merge one level
  liquid: {
    // the rings by screen radius: the warm core bigger and warmer (peach and gold, as approved), the cyan round it pushed out
    stops: [
      [0.02, '#ffd29c', '#ffe7c4', '#fff8ec'],
      [0.05, '#f4a85a', '#ffc47a', '#ffe0b0'],
      [0.08, '#d9a6ee', '#f2c8f2', '#fff0fb'],   // a pastel pink-lavender and white ring round the warm core (approved)
      [0.11, '#168ae6', '#20b2f4', '#8eeaff'],
      [0.135, '#1450d0', '#2a8cf0', '#5fd2fb'],
      [0.15, '#1747cc', '#2e95f1', '#79eefc'],
      [0.19, '#1747cc', '#2e95f1', '#5ec7f9'],
      [0.24, '#1d5fe0', '#4aa6f4', '#d4f3ff'],
      [0.29, '#123fc0', '#18a8f4', '#79eefc'],
      [0.36, '#0a2fa6', '#1f78f0', '#5ec7f9'],
      [0.43, '#123fc0', '#2e95f1', '#06cffd'],
    ],
    ring: { own: [0.6, 0.3], ownAt: [0.075, 0.105] },
    grade: { glowSize: 0.105 },
    // the foam layer: heroSplash's droplets nearly opaque, more and bigger waterline bubbles; the
    // old flat spray sheets are replaced by spCurls (kept, fainter, as a mist)
    foam: { splash: 0.92, plumeAlpha: 0.12,
      bubbles: [[-74, 6], [-56, 8], [-38, 6], [-20, 3], [22, 3], [40, 6], [58, 8], [76, 6]], bubbleR: [0.026, 0.085] },
  },
  // merged into HERO_WATER (tunnel_r7_hero_water.js) under splash: more spray, most of it either side of the body
  heroWater: {
    splash: { count: 900, flecks: 0.72, puffSize: 3.0, trail: 0.02, rest: [0.1, 0.7],
      zones: [[0.36, [-50, -18], [1.4, 3.4], [0.25, 0.9], [0.013, 0.03], 0.14], [0.3, [18, 50], [1.3, 3.0], [0.25, 0.8], [0.012, 0.028], 0.12],
        [0.17, [-80, -24], [0.7, 2.0], [0.15, 0.6], [0.009, 0.02], 0.04], [0.17, [24, 80], [0.7, 2.0], [0.15, 0.6], [0.009, 0.02], 0.04]] },
  },
  // the deeper swirl: deep cobalt in each band's trough on the walls, [trough start, trough end] in the band's phase
  swirl: { cobalt: '#0a2ea4', amount: 0.42, from: 0.3, to: 0.8, sides: 1.0 },
  // 1. curling sheets: [phi (degrees on the crest; - is screen right), height (m), width (m), curl (radians at the top),
  //    lean (radians outward at the base), sideways shift along the crest (m)]
  curls: [
    [-34, 0.5, 0.42, 0.75, 0.04, 0], [-54, 0.42, 0.38, 0.8, 0.06, 0], [-74, 0.32, 0.34, 0.8, 0.08, 0],
    [34, 0.38, 0.38, 0.75, 0.04, 0], [54, 0.28, 0.32, 0.8, 0.06, 0], [74, 0.24, 0.28, 0.8, 0.08, 0],
    [-16, 0.14, 0.26, 0.6, 0.1, 0], [16, 0.13, 0.24, 0.6, 0.1, 0],
  ],
  // the sheets face the camera (it looks along the path): they span the screen's width and curl toward the camera and
  // outward by this much sideways per metre toward the camera
  curlFlare: 0.55,
  curlAlpha: 0.5, curlLip: 0.97, curlGrid: [12, 14],
  // 2. foam lump clusters: [phi, how many, biggest radius (m), outward from the crest (m), height from the crest (m)]
  lumps: [
    [-38, 4, 0.15, 0.02, 0.0], [-52, 6, 0.21, 0.05, -0.02], [-67, 6, 0.22, 0.07, -0.03], [-82, 5, 0.16, 0.08, -0.04],
    [38, 3, 0.12, 0.02, -0.01], [52, 5, 0.16, 0.05, -0.04], [67, 5, 0.17, 0.07, -0.06], [82, 3, 0.11, 0.08, -0.07],
    [-20, 2, 0.055, 0.18, -0.15], [20, 2, 0.055, 0.18, -0.15],
  ],
  lumpSquash: 0.8, lumpAlpha: [0.38, 0.95],
  // 3. the swell's foam crest beside the body: width (m) in front (none: the fur shows through violet there) and at the sides
  crest: { front: 0.0, side: 0.06, amount: 0.85, sideFrom: 0.35, sideTo: 0.8 },
  // lacy foam on the water round the swell's foot: [inner, outer] radius (m) from the character, how much
  apron: { radius: [0.75, 2.4], amount: 0.25 },
  debug: 0,   // 1: the curls in flat magenta and the lumps in flat green (to see where they land)
  colours: { white: '#ffffff', foam: '#f4fbff', shade: '#6dbcf7', deepShade: '#2584ec', glass: '#5ec7f9', glassDeep: '#2a8fee', lip: '#f8fdff' },
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.splash;
  if (tune) for (const k of Object.keys(tune)) SPLASH[k] = (tune[k] && typeof tune[k] === 'object' && !Array.isArray(tune[k]) && SPLASH[k]) ? { ...SPLASH[k], ...tune[k] } : tune[k];
}
// one-level merge (as the files' own tune blocks do)
export function mergeSettings(target, over) {
  for (const k of Object.keys(over || {})) target[k] = (over[k] && typeof over[k] === 'object' && !Array.isArray(over[k]) && target[k] && typeof target[k] === 'object') ? { ...target[k], ...over[k] } : over[k];
}
// more spray (applied to the hero water's settings before buildHeroWater builds heroSplash; ?s3=liquid keeps its own)
if (SPLASH_FOAM) mergeSettings(HERO_WATER, SPLASH.heroWater);
if (MATCH_ON) { deepMerge(SPLASH, MATCH.splash); deepMerge(HERO_WATER, MATCH.heroWater); }   // ?s3=match (tunnel_r9_match.js)

const f3 = (x) => (+x).toFixed(4);
const v3 = (hex) => { const c = new THREE.Color(hex); return `vec3(${f3(c.r)}, ${f3(c.g)}, ${f3(c.b)})`; };
const D2R = Math.PI / 180;

// ---------------------------------------------------------------- GLSL pieces used inside tunnel_r8_liquid.js's shaders
// the walls (inside lqWall, after the bands' own light): deep cobalt in each band's trough
export function splashWallGLSL() {
  const S = SPLASH.swirl;
  return /* glsl */ `  {   // ?s3=splash: the deeper swirl, deep cobalt in the troughs between the bands (tunnel_r8_splash.js)
    float trough = clamp(1.0 - smoothstep(0.0, ${f3(S.from)}, k) + smoothstep(${f3(S.to)}, 1.0, k), 0.0, 1.0) * aa;
    float onSides = mix(1.0, ${f3(S.sides)}, smoothstep(0.3, 0.9, abs(cos(ang))));
    col = mix(col, ${v3(S.cobalt)}, trough * ${f3(S.amount)} * onSides * smoothstep(0.1, 0.19, rw) * (1.0 - own));
  }
`;
}
// the floor (inside floorFragment's foam block): lacy foam left on the water round the swell's foot
export function splashFloorGLSL() {
  const A = SPLASH.apron, K = SPLASH.colours;
  return /* glsl */ `  {   // ?s3=splash: lacy foam on the water round the swell's foot, beside and in front of the character (tunnel_r8_splash.js)
    float ap = smoothstep(${f3(A.radius[0])}, ${f3(A.radius[0] + 0.35)}, rP) * (1.0 - smoothstep(${f3(A.radius[1] - 0.9)}, ${f3(A.radius[1])}, rP));
    ap *= 0.3 + 0.7 * smoothstep(0.35, 1.2, abs(toP.x));   // mostly beside it: the water straight in front stays blue
    vec2 fu = xu * vec2(0.9, 0.65) + vec2(0.0, uTime * 0.3);
    float b1 = texture2D(uLqTex, fu).b, b2 = texture2D(uLqTex, fu * 2.3 + vec2(0.43, 0.17)).b, web = texture2D(uLqTex, fu * 3.1 + 0.2).a;
    float lace = smoothstep(0.6, 0.7, b1 * 0.62 + b2 * 0.5 + hDet * 0.12) * (1.0 - 0.55 * smoothstep(0.4, 0.8, web));   // foam clumps, bubbly inside
    float ak = clamp(lace * ap * ${f3(A.amount)} * (1.0 + uLqMove.w * 0.6) * (1.0 - s4Haz), 0.0, 1.0);
    col = mix(col, mix(${v3(K.shade)}, ${v3(K.foam)}, smoothstep(0.5, 0.75, b1 + hDet * 0.2)), ak * 0.88);
  }
`;
}
// the swell (inside its foam block): a wider, broken foam crest beside the body, thin in front of it
export function splashSwellGLSL() {
  const C = SPLASH.crest, K = SPLASH.colours;
  return /* glsl */ `  {   // ?s3=splash: the foam crest beside the body (tunnel_r8_splash.js)
    float sideK = smoothstep(${f3(C.sideFrom)}, ${f3(C.sideTo)}, as);
    float bw = mix(${f3(C.front)}, ${f3(C.side)}, sideK);
    float n1 = texture2D(uLqTex, vec2(as * 1.6 - fl * 0.15, d * 3.0 + uTime * 0.06)).a, n2 = texture2D(uLqTex, vec2(as * 3.1 + 0.3, d * 5.0 - fl * 0.2)).b;
    float edge = bw * (0.55 + 0.9 * n2);
    float band = (1.0 - smoothstep(edge * 0.6, edge, d)) * smoothstep(0.3, 0.55, n1 * 0.6 + n2 * 0.6);
    float cells = smoothstep(0.35, 0.7, n1);
    float wf = clamp(band * ${f3(C.amount)} * (0.65 + 0.35 * cells), 0.0, 1.0);
    col = mix(col, mix(${v3(K.shade)}, ${v3(K.foam)}, 0.55 + 0.45 * cells), wf); a = max(a, wf * 0.92);
  }
`;
}

// ---------------------------------------------------------------- the splash bank (built from waterlineFoam)
// crest(phi): the swell's crest point and outward normal in the character's frame; frame: the swell's frame uniforms
export function buildSplashBank({ scene, updaters, time, tex, crest, frame, swell }) {
  const report = {}, rnd = mulberrySp(0x5a1c3), SW = HERO_WATER.swell, K = SPLASH.colours;
  const U = { ...frame, uTime: time, uLqTex: { value: tex } };
  const LIFT = /* glsl */ `
uniform vec3 uC, uR, uU, uT; uniform float uTime, uFade, uLat, uAir, uLand;
// the swell's own lift (as its vertex shader): its crest rises and falls with these, so the splashes sit on it
float spSwellLift(float side) {
  float pile = 1.0 + clamp(side * uLat * ${f3(SW.swerve)}, -0.3, 0.3);
  return uFade * pile * (1.0 - uAir * ${f3(SW.air)}) * (1.0 + uLand * ${f3(SW.land)});
}
// the splash's own size: bigger on the side it swerves to and on landing, smaller in the air
float spBoost(float side) { return (1.0 + clamp(side * uLat * 0.12, -0.5, 0.8)) * (1.0 - 0.65 * uAir) * (1.0 + uLand * 0.8); }
vec3 spWorld(vec3 p) { return uC + uR * p.x + uU * p.y + uT * p.z; }
`;
  {   // 1. curling sheets of see-through water
    const [NS, NV] = SPLASH.curlGrid, pos = [], aBase = [], aOff = [], aSV = [], idx = [];
    SPLASH.curls.forEach(([phi, H, Wd, curl, lean, shift], ci) => {
      const c = crest(phi), seed = rnd(), side = phi < 0 ? -1 : 1, nl = Math.hypot(SPLASH.curlFlare, 1);
      const n = [side * SPLASH.curlFlare / nl, -1 / nl], t = [-n[1], n[0]];
      const bx = c.x + c.nx * 0.03 + t[0] * shift, bu = c.u + c.nu * 0.03 + t[1] * shift, bh = c.h - 0.04;
      // the profile up the sheet: it rises, leans out and curls over (the angle from vertical grows toward the top)
      const prof = [[0, 0]];
      for (let j = 1; j <= NV; j++) {
        const v = (j - 0.5) / NV, th = lean + curl * Math.pow(v, 1.7), [o, h] = prof[j - 1];
        prof.push([o + Math.sin(th) * H / NV, h + Math.cos(th) * H / NV]);
      }
      const v0 = pos.length / 3;
      for (let j = 0; j <= NV; j++) for (let i = 0; i <= NS; i++) {
        const s = 2 * i / NS - 1, v = j / NV, [o, h] = prof[j];
        const half = Wd * 0.5 * (0.45 + 0.75 * v), round = 1 - 0.38 * s * s;   // the fan spreads as it rises, its top rounded
        const cup = 0.22 * s * s * v * H;                                       // the edges cup outward
        const ox = n[0] * (o * round + cup) + t[0] * s * half, ou = n[1] * (o * round + cup) + t[1] * s * half, oh = h * round;
        pos.push(bx + ox, bh + oh, bu + ou); aBase.push(bx, bh, bu, side); aOff.push(ox, oh, ou); aSV.push(s, v, seed, ci);
        if (i < NS && j < NV) { const k = v0 + j * (NS + 1) + i; idx.push(k, k + NS + 1, k + 1, k + 1, k + NS + 1, k + NS + 2); }
      }
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('aBase', new THREE.Float32BufferAttribute(aBase, 4));
    g.setAttribute('aOff', new THREE.Float32BufferAttribute(aOff, 3)); g.setAttribute('aSV', new THREE.Float32BufferAttribute(aSV, 4));
    g.setIndex(idx); g.computeVertexNormals();
    const mat = new THREE.ShaderMaterial({ uniforms: U, transparent: true, depthWrite: false, side: THREE.DoubleSide,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
      vertexShader: /* glsl */ `
${LIFT}
attribute vec4 aBase, aSV; attribute vec3 aOff;
varying vec3 vW, vN; varying vec4 vSV; varying float vK;
void main() {
  float side = aBase.w, seed = aSV.z, v = aSV.y;
  float k = spBoost(side) * (0.86 + 0.16 * sin(uTime * 2.7 + seed * 6.28) + 0.06 * sin(uTime * 6.1 + seed * 17.0));
  vec3 b = aBase.xyz; b.y *= spSwellLift(side);
  vec3 o = aOff * k * uFade;
  o.y += 0.025 * sin(uTime * 5.0 + aSV.x * 3.0 + seed * 9.0) * v * k;   // the lip ripples
  vec3 p = b + o;
  vW = spWorld(p); vN = normalize(uR * normal.x + uU * normal.y + uT * normal.z); vSV = aSV; vK = k * uFade;
  gl_Position = projectionMatrix * viewMatrix * vec4(vW, 1.0);
}`,
      fragmentShader: /* glsl */ `
uniform sampler2D uLqTex; uniform float uTime;
varying vec3 vW, vN; varying vec4 vSV; varying float vK;
void main() {
  float s = vSV.x, v = vSV.y, seed = vSV.z;
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float edgeOn = 1.0 - abs(dot(N, V));   // a thin sheet seen edge-on looks whiter and more solid
  // streaks running up the sheet and fanning out, broken where the texture is low (the blue shows through)
  float st = texture2D(uLqTex, vec2(s * 0.42 + seed * 3.7, v * 0.5 - uTime * 0.95)).b;
  float st2 = texture2D(uLqTex, vec2(s * 0.9 + seed * 1.9, v * 0.8 - uTime * 1.4) + 0.5).b;
  float streak = smoothstep(0.55, 0.85, st * 0.65 + st2 * 0.55);
  // the top: a white lip broken into fingers, the sheet torn open just under it
  float rag = texture2D(uLqTex, vec2(s * 0.7 + seed * 5.1, uTime * 0.21 + seed)).b;
  float top = 0.8 + (rag - 0.5) * 0.45;
  if (v > top + 0.12) discard;
  float lip = smoothstep(top - 0.2, top - 0.02, v) * (1.0 - smoothstep(top + 0.06, top + 0.12, v));
  float sideFade = 1.0 - smoothstep(0.62, 1.0, abs(s) + (st - 0.5) * 0.3);
  float foot = smoothstep(0.0, 0.14, v);
  float glass = (${f3(SPLASH.curlAlpha)} * (0.55 + 0.6 * edgeOn) + 0.45 * streak) * sideFade * foot;
  float a = clamp(max(glass, lip * ${f3(SPLASH.curlLip)} * sideFade), 0.0, 1.0) * clamp(vK, 0.0, 1.0);
  vec3 col = mix(${v3(K.glassDeep)}, ${v3(K.glass)}, smoothstep(0.0, 0.6, v));
  col = mix(col, ${v3(K.white)}, clamp(streak * 0.75 + edgeOn * 0.35, 0.0, 1.0));
  col = mix(col, ${v3(K.lip)}, lip);
  col += vec3(1.0) * pow(max(dot(reflect(-normalize(vec3(0.0, 0.8, 0.0) + V * 0.3), N), V), 0.0), 24.0) * 0.25;
  gl_FragColor = vec4(col * a, a);
${SPLASH.debug === 1 ? '  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);' : ''}
}` });
    const mesh = new THREE.Mesh(g, mat); mesh.name = 'spCurls'; mesh.frustumCulled = false; mesh.renderOrder = 7;
    scene.add(mesh);
    report.curls = { count: SPLASH.curls.length, drawCalls: 1, triangles: idx.length / 3 };
  }
  {   // 2. rounded foam lumps on the waterline
    const list = [];
    for (const [phi0, count, rMax, out0, h0] of SPLASH.lumps) {
      for (let i = 0; i < count; i++) {
        const big = i === 0, phi = phi0 + (big ? 0 : (rnd() - 0.5) * 14), c = crest(phi);
        const r = big ? rMax : rMax * (MATCH_ON ? SPLASH.lumpMin + (0.85 - SPLASH.lumpMin) * rnd() : 0.35 + 0.5 * rnd());   // ?s3=match: no tiny lobes (their thin rims broke into specks)
        const out = out0 + (big ? 0 : (rnd() - 0.3) * rMax * 1.2), up = h0 + (big ? 0 : (rnd() - 0.2) * rMax * 1.1);
        list.push([c.x + c.nx * out, c.h + up, c.u + c.nu * out, r, rnd(), phi < 0 ? -1 : 1]);
      }
    }
    const n = list.length, sphere = new THREE.IcosahedronGeometry(1, MATCH_ON && !FOCUS_ON ? SPLASH.lumpDetail : 3), g = new THREE.InstancedBufferGeometry();
    g.index = sphere.index; g.setAttribute('position', sphere.attributes.position); g.setAttribute('normal', sphere.attributes.normal);
    if (!g.index) {   // IcosahedronGeometry is not indexed: index it as a plain list
      const cnt = sphere.attributes.position.count, ix = new Uint32Array(cnt); for (let i = 0; i < cnt; i++) ix[i] = i; g.setIndex(new THREE.BufferAttribute(ix, 1));
    }
    const a1 = new Float32Array(n * 4), a2 = new Float32Array(n * 4);
    list.forEach((b, i) => { a1.set([b[0], b[1], b[2], b[3]], i * 4); a2.set([b[4], b[5], 0, 0], i * 4); });
    g.setAttribute('aLump', new THREE.InstancedBufferAttribute(a1, 4)); g.setAttribute('aLump2', new THREE.InstancedBufferAttribute(a2, 4)); g.instanceCount = n;
    const mat = new THREE.ShaderMaterial({ uniforms: U, transparent: true, depthWrite: !MATCH_ON || !!SPLASH.lumpDepthWrite,   // ?s3=match: no depth write for see-through lobes; the focused pass's opaque froth writes it
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
      vertexShader: /* glsl */ `
${LIFT}
attribute vec4 aLump, aLump2;   // centre (x, h, u in the character's frame), radius | seed, side
varying vec3 vW, vN, vO; varying float vK, vSeed;
void main() {
  float seed = aLump2.x, side = aLump2.y;
  float k = spBoost(side) * uFade;
  vec3 q = position;
  // lumpy, and slowly boiling
  float bump = ${MATCH_ON ? f3(SPLASH.lumpBump) : '0.16'} * sin(q.x * 3.1 + seed * 11.0) * sin(q.y * 2.7 + seed * 5.0) * sin(q.z * 3.3 + seed * 7.0)
    + 0.06 * sin(q.x * 7.0 + q.z * 5.0 + uTime * (3.0 + seed * 2.0) + seed * 20.0)${MATCH_ON && !FOCUS_ON ? `
    + ${f3(SPLASH.lumpFroth)} * sin(q.x * 6.3 + seed * 17.0) * sin(q.y * 5.7 + seed * 3.0) * sin(q.z * 6.9 + seed * 13.0 + uTime * 0.6)   // ?s3=match: frothy bulges on the outline
   ` : ''};
  vec3 o = q * (1.0 + bump);
  o.y *= ${f3(SPLASH.lumpSquash)};
  if (o.y < -0.25) o.y = -0.25 + (o.y + 0.25) * 0.4;   // flattened where it sits in the water
  float r = aLump.w * k * (0.94 + 0.08 * sin(uTime * 3.4 + seed * 31.0));
  vec3 c = aLump.xyz; c.y *= spSwellLift(side);
  c.y += 0.01 * sin(uTime * 4.0 + seed * 40.0);
  vW = spWorld(c + o * r); vN = normalize(uR * normal.x + uU * normal.y + uT * normal.z); vO = q; vK = k; vSeed = seed;
  gl_Position = projectionMatrix * viewMatrix * vec4(vW, 1.0);
}`,
      fragmentShader: /* glsl */ `
uniform sampler2D uLqTex; uniform float uTime; uniform vec3 uR, uU, uT;
varying vec3 vW, vN, vO; varying float vK, vSeed;
${MATCH_ON && !FOCUS_ON ? matchLumpDecl() : ''}void main() {
  if (vK <= 0.001) discard;
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  vec3 L = normalize(uU * 0.85 + uR * 0.3 - uT * 0.4);   // the key light: up, a little left, from behind the camera
  float d = dot(N, L) * 0.5 + 0.5;
  // a fine web of foam cells (the bright edges of the generated caustic web), slowly turning
  vec2 cu = vO.xz * 0.55 + vO.y * vec2(0.21, -0.17) + vSeed * 3.0 + vec2(uTime * 0.03, 0.0);
  float cell = texture2D(uLqTex, cu).a, cell2 = texture2D(uLqTex, cu * 2.2 + 0.37).a;
  float web = clamp(cell * 0.7 + cell2 * 0.5, 0.0, 1.0);
  vec3 col = mix(${v3(K.deepShade)}, ${v3(K.shade)}, smoothstep(0.25, 0.5, d));
  col = mix(col, ${v3(K.foam)}, smoothstep(0.64, 0.8, d + web * 0.22));
  col = mix(col, ${v3(K.white)}, smoothstep(0.8, 0.97, d) * 0.6);
  col = mix(col, ${v3('#e6f8ff')}, smoothstep(0.55, 0.9, web) * (1.0 - smoothstep(0.45, 0.7, d)) * 0.7);   // bubble outlines in the shade
  col += ${v3('#bff0ff')} * pow(1.0 - ndv, 3.0) * 0.55;   // the glossy rim
  float spec = pow(max(dot(reflect(-L, N), V), 0.0), 60.0);
  col += vec3(1.0) * spec * 0.9;
  float a = mix(${f3(SPLASH.lumpAlpha[0])}, ${f3(SPLASH.lumpAlpha[1])}, smoothstep(0.3, 0.75, d + web * 0.15));
  a = clamp(a + pow(1.0 - ndv, 2.0) * 0.2 + spec * 0.3, 0.0, 1.0) * clamp(vK * 1.5, 0.0, 1.0);
${MATCH_ON ? matchLumpGLSL() : ''}  gl_FragColor = vec4(col * a, a);
${SPLASH.debug === 1 ? '  gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);' : ''}
}` });
    const mesh = new THREE.Mesh(g, mat); mesh.name = 'spLumps'; mesh.frustumCulled = false; mesh.renderOrder = 6;
    scene.add(mesh);
    report.lumps = { count: n, drawCalls: 1, triangles: n * g.index.count / 3 };
  }
  const meshes = ['spCurls', 'spLumps'].map((nm) => scene.getObjectByName(nm));
  updaters.push(() => { for (const m of meshes) m.visible = swell.visible; });   // with the swell
  if (FOCUS_ON) report.frontBubbles = focusFrontBubbles({ scene, updaters, time, crest, frame, swell });   // ?s3=focus (pass 4c): big clear bubbles round her base
  return report;
}

// a private random sequence (never the game's seeded Math.random)
function mulberrySp(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
