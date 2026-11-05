// ?s3=liquid (test only): Round 8, REAL animated water for Screen 4's hero scene. `liquid` turns on everything `hero` does
// (tunnel_r7_hero.js) plus this file; `?s3=liquid,nofoam` is the same with the foam layer off (no white crest caps, flecks,
// foam streaks, splash strokes or splash particles: only the liquid). `?s3=hero` and everything older are unchanged:
// nothing here runs without the switch, and the hooks elsewhere (tunnel_r7_hero.js, tunnel_r6.js, screen3_models.js) only
// add `|| liquid` to the hero switch and one call at the end of buildHero.
//
// Why a custom ShaderMaterial and not three.js's Water (examples/jsm/objects/Water.js) or Water2 (Water2.js): both are
// planar mirrors. Water renders the scene again from a mirrored camera into a render target every frame; Water2 adds a
// Reflector and a Refractor (two more scene renders a frame). Both need a flat plane, and this water curves (it climbs,
// banks and turns with the drum) and lines the tube's walls. So the liquid here is one shader model with an ANALYTIC
// environment (no extra render pass): Water2's flow-map method is borrowed (two normal-map samples at flow offsets half a
// cycle apart, crossfaded by abs(halfCycle - offset0) / halfCycle: continuous flow, no stretching), on a tileable normal
// and height texture generated once here (a DataTexture, not per-pixel noise everywhere).
//
// The ONE liquid model (lqShade below) shades every water surface the camera sees, so they read as one body of water:
//   - the floor: a ribbon mesh along the track frame (TR.frame) from 12 m before the drum's mouth through the drum, on the
//     game's own water height (crown, hills, the drum's swells and waves, the splash rings) plus a V wake, a bow ring and
//     landing rings from the character's movement; it replaces the drum's water sheet and the slide's last metres;
//   - the walls (heroWalls, the hero lining) and the water round the collar: the hero scene's concentric screen-space ring
//     layout (the approved composition), but each ring is a band of moving water with a crest and a trough (its own
//     normal tilt), not a painted stripe;
//   - the swell round the character (heroSwell's geometry, its crest made level as measured on the approved picture): the
//     same material, translucent near the crest so the pink fur shows through violet, as in the approved close-up.
// Look: depth colour (cobalt in the troughs and far away, saturated azure in the body, lit-through turquoise and cyan on
// crests), fresnel reflection of the tunnel's light (a warm white-gold centre, cyan rings, cobalt walls), sharp true-white
// and cyan specular glints including the sun-glint path down the floor toward the glowing centre, warm gold reflection
// streaks and glints under the coins, moving caustics on the walls near the waterline.
// Foam is a separate layer on top (LQ_FOAM, compiled out with nofoam): broken white crests, sparse flecks, wake streaks,
// splash strokes along the spirals, and heroSplash's droplets.
// Colours are sRGB hex (as on screen) converted to the renderer's linear light by THREE.Color. Private random numbers only.
import * as THREE from 'three';
import { HEIGHT_GLSL, SLIDE } from './world.js';
import { RIPPLES } from './shaders.js';
import { HERO_WATER } from './tunnel_r7_hero_water.js';

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const LIQUID_ON = LIST.includes('liquid');
export const LIQUID_FOAM = LIQUID_ON && !LIST.includes('nofoam');

export const LIQUID = {
  // metres from the drum's mouth: the liquid fades in over the slide's water as the character comes (the hero moment is at
  // -3.27; the hero grade comes in over -12 .. -8)
  fade: [-13, -9],
  // the floor ribbon: from `from` m before the mouth to `to` m past the drum's end, half-width before the mouth and inside
  // the drum (it runs on under the walls), rows every `step` m, `cols` across
  ribbon: { from: -12, to: 6, half: [3.0, 1.5], step: 0.22, cols: 44 },
  // the water's colours (sRGB, as on screen), from the Art Director's measurements of the approved Screen 4 and the user's
  // two water references: cobalt troughs far away, the body, lit-through turquoise and cyan crests, true-white glints
  colours: {
    abyss: '#0b36b0', cobalt: '#1747cc', troughFar: '#2257d6', troughNear: '#2c88ec', body: '#2e95f1', electric: '#1f7ff0',
    turq: '#14b4f2', turqHi: '#1ec8f5', cyan: '#5ec7f9', cyanHi: '#79eefc', glint: '#ffffff', sheen: '#b4e6ff',
    gold: '#fceab3', goldDeep: '#f2c46a', lilac: '#e9dcff', lavender: '#8f8ae8', warm: '#ffe2b0', warmCore: '#fff3dc',
    pastel: '#d9c8f6', foam: '#f6fbff', foamShade: '#cfe6ff',
  },
  // the rings (the hero layout: tunnel_r7_hero.js HERO.vortex), each a band of water: [radius share of the width, trough,
  // body, crest] colours by screen radius round the vanishing point
  stops: [
    [0.015, '#ffd9a8', '#ffeccc', '#fffaf0'],  // a small warm white-gold core (the approved core is peach and gold)
    [0.04, '#f6b46e', '#ffcf8f', '#ffe6bd'],   // peach-gold
    [0.075, '#1a8fe8', '#22b6f4', '#8eeaff'],  // saturated cyan straight round the core (no pale haze)
    [0.11, '#1650d4', '#2a8cf0', '#5fd2fb'],
    [0.14, '#1747cc', '#2e95f1', '#79eefc'],
    [0.185, '#1747cc', '#2e95f1', '#5ec7f9'],
    [0.24, '#1d5fe0', '#4aa6f4', '#d4f3ff'],   // ring 2 (a thin pastel rainbow line on it, tinted by angle)
    [0.29, '#1747cc', '#18a8f4', '#79eefc'],   // turquoise-cyan
    [0.36, '#0b36b0', '#1f78f0', '#5ec7f9'],   // the darkest electric blue
    [0.43, '#1747cc', '#2e95f1', '#06cffd'],
  ],
  ring: { spiral: 2.0, swirl: 0.22, amp: 1.1, floor: 0.75, rainbow: 0.35, rainbowAt: 0.235, rainbowW: 0.018, own: [0.6, 0.3], ownAt: [0.03, 0.06] },
  // the depth model (lqShade): depth = base + band * (1 - ring band) + det * (1 - wave height) - shallow * (thin water)
  // + deep * (extra) + far * (distance) - face * (facets toward the light); 0 lit cyan .. 0.5 body .. 1 trough .. 1.6 abyss
  shade: { base: 0.05, band: 1.5, det: 0.6, shallow: 0.8, deep: 0.5, far: 0.35, face: 0.3 },
  // the detail waves: two flow-mapped layers of the generated texture [tile size (m) across, along, strength]
  waves: { big: [1.5, 0.9, 0.85], small: [0.5, 0.34, 0.6], flow: 3.2, swirl: 0.45, cycle: 0.45, around: 0.55 },
  // light: the glowing centre `glowAhead` m ahead of the camera on the axis (the sun-glint path), a key light from behind
  // the camera, up and to the left (glints on the swell and near ripples)
  light: { glowAhead: 16, glint: 3.6, path: 0.6, key: 2.4, sparkle: 1.3, fresnel: 0.42, wallFresnel: 0.2, caustic: 0.6, wallGlint: 1.0 },
  // the collectibles reflected in the water (gold streaks and glints): how many, how far ahead (m)
  objects: { count: 6, reach: 16, gold: 1.0 },
  // the swell round the character (heroSwell, tunnel_r7_hero_water.js), reshaped: crest heights every 5 degrees from -110 to
  // 110 solved from the hero camera at 2.85 s (tools: the hero probe's camera) so the waterline is LEVEL across the body at
  // 0.822 of the screen height and 0.836 at the edges (the approved, measured by the Art Director: 0.81-0.836, crests to
  // 0.807, just under the arms), instead of a V; small rounded mounds on it; translucent near the crest (the fur shows
  // through violet), solid lower down
  swell: {
    line: [0.19, 0.205, 0.224, 0.246, 0.269, 0.291, 0.313, 0.334, 0.355, 0.375, 0.394, 0.415, 0.439, 0.461, 0.482, 0.501, 0.517,
      0.529, 0.538, 0.544, 0.547, 0.548, 0.547, 0.545, 0.541, 0.535, 0.525, 0.513, 0.496, 0.477, 0.456, 0.433, 0.409, 0.384, 0.363,
      0.342, 0.321, 0.299, 0.277, 0.255, 0.232, 0.21, 0.19, 0.175, 0.161],
    mounds: [[48, 0.035, 9], [24, 0.04, 8], [-6, 0.03, 7], [-30, 0.04, 8], [-52, 0.035, 9]], dip: 0.0, out: 0.34, clear: [0.6, 0.015, 0.075],
  },
  // the walls' moving water light near the waterline: caustics up to `caustic` m above the water
  walls: { caustic: 1.25 },
  // the hero grade's vignette colour (sRGB) and the glowing centre's size (share of the width; the hero's is 0.12)
  grade: { vignetteCol: '#2a5fe0', glowSize: 0.085 },
  // the foam layer (off with nofoam)
  foam: { crests: 0.85, flecks: 0.7, wake: 0.8, strokes: 0.9, lace: 0.6, swellCrest: 0.72, splash: 0.5,
    // translucent spray sheets rising from the waterline either side of the character, the biggest just right of it (the
    // approved splash at 71% across): [phi (degrees on the crest, - is screen right), height (m), lean outward (-1..1)]
    plumes: [[-27, 0.42, 1], [-41, 0.4, 1], [-17, 0.26, 0.6], [28, 0.4, -1], [41, 0.3, -1], [-55, 0.3, 1]], plumeAlpha: 0.42,
    // clusters of clear soap bubbles sitting on the waterline: [phi, how many]
    bubbles: [[-52, 6], [-28, 5], [30, 5], [52, 6]], bubbleR: [0.022, 0.065] },
  // hidden while the liquid is up (replaced by it): round6's bow wave sheets; with nofoam also the splash particles
  hide: ['r6BowWave'], hideNoFoam: ['heroSplash', 'r5Droplets'],
  debug: 0,   // 1: the swell in flat green, 2: its depth and opacity, 3: green without the depth test, 4: the floor in flat red
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.liquid;
  if (tune) for (const k of Object.keys(tune)) LIQUID[k] = (tune[k] && typeof tune[k] === 'object' && !Array.isArray(tune[k]) && LIQUID[k]) ? { ...LIQUID[k], ...tune[k] } : tune[k];
}
// The swell's new crest (applied to the hero water's settings before buildHeroWater builds it; ?s3=hero keeps its own)
if (LIQUID_ON) {
  const S = LIQUID.swell;
  Object.assign(HERO_WATER.swell, { line: S.line, mounds: S.mounds, dip: S.dip, out: S.out });
}

const f3 = (x) => (+x).toFixed(4);
const lin = (hex) => new THREE.Color(hex);
const v3 = (hex) => { const c = lin(hex); return `vec3(${f3(c.r)}, ${f3(c.g)}, ${f3(c.b)})`; };

// ---------------------------------------------------------------- the generated wave texture
// 256 x 256 RGBA, tileable: RG the wave normal (xy), B the wave height (rounded crests, sharper ridges: the "wave facets"),
// A a caustic web (the bright edges of a jittered cell pattern). Made once, with a private random sequence.
function liquidTexture(N = 256) {
  const rnd = mulberryLq(0x11a9d);
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const table = (P) => { const g = new Float32Array(P * P * 2); for (let i = 0; i < P * P; i++) { const a = rnd() * Math.PI * 2; g[i * 2] = Math.cos(a); g[i * 2 + 1] = Math.sin(a); } return g; };
  const noise = (g, P, x, y) => {   // periodic gradient noise, x and y in [0, P)
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const d = (ix, iy, dx, dy) => { const k = (((iy % P) + P) % P * P + ((ix % P) + P) % P) * 2; return g[k] * dx + g[k + 1] * dy; };
    const u = fade(xf), v = fade(yf);
    const a = d(xi, yi, xf, yf) + (d(xi + 1, yi, xf - 1, yf) - d(xi, yi, xf, yf)) * u;
    const b = d(xi, yi + 1, xf, yf - 1) + (d(xi + 1, yi + 1, xf - 1, yf - 1) - d(xi, yi + 1, xf, yf - 1)) * u;
    return a + (b - a) * v;
  };
  const oct = [[3, 0.42, 1], [6, 0.3, 1], [12, 0.18, 0], [24, 0.1, 0]].map(([P, a, ridge]) => ({ P, a, ridge, g: table(P) }));
  const H = new Float32Array(N * N);
  let lo = Infinity, hi = -Infinity;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    let h = 0;
    for (const o of oct) {
      const n = noise(o.g, o.P, i / N * o.P, j / N * o.P);
      h += o.a * (o.ridge ? 0.7 - Math.abs(n) * 2.0 : n);   // ridged octaves: sharp crests between rounded troughs
    }
    H[j * N + i] = h; lo = Math.min(lo, h); hi = Math.max(hi, h);
  }
  for (let k = 0; k < N * N; k++) H[k] = (H[k] - lo) / (hi - lo);
  // the caustic web: a periodic jittered grid of M x M cells; the bright line where the two nearest points are equally far
  const M = 7, pts = [];
  for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) pts.push([(i + 0.15 + 0.7 * rnd()) / M, (j + 0.15 + 0.7 * rnd()) / M]);
  const data = new Uint8Array(N * N * 4), at = (i, j) => H[((j + N) % N) * N + ((i + N) % N)];
  let s2 = 0;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const dx = at(i + 1, j) - at(i - 1, j), dy = at(i, j + 1) - at(i, j - 1); s2 += dx * dx + dy * dy; }
  const slope = 0.55 / Math.sqrt(s2 / (N * N));   // RMS slope 0.55
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const k = j * N + i;
    let nx = -(at(i + 1, j) - at(i - 1, j)) * slope, ny = -(at(i, j + 1) - at(i, j - 1)) * slope, nz = 1;
    const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l;
    const x = i / N, y = j / N;
    let d1 = 9, d2 = 9;
    for (const [px, py] of pts) {
      let dx = Math.abs(x - px), dy = Math.abs(y - py); dx = Math.min(dx, 1 - dx); dy = Math.min(dy, 1 - dy);
      const d = Math.hypot(dx, dy) * M;
      if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
    }
    const c = Math.exp(-Math.pow((d2 - d1) / 0.09, 2)) * (0.55 + 0.45 * Math.min(1, d1 * 1.6));
    data[k * 4] = Math.round((nx * 0.5 + 0.5) * 255); data[k * 4 + 1] = Math.round((ny * 0.5 + 0.5) * 255);
    data[k * 4 + 2] = Math.round(H[k] * 255); data[k * 4 + 3] = Math.round(Math.min(1, c) * 255);
  }
  const tex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true; tex.anisotropy = 4; tex.needsUpdate = true;
  return tex;
}

// ---------------------------------------------------------------- the shared liquid model (GLSL)
function ringRamp(stops) {
  let s = `  vec3 tr = ${v3(stops[0][1])}, bd = ${v3(stops[0][2])}, cr = ${v3(stops[0][3])};\n`;
  for (let i = 1; i < stops.length; i++) {
    const [r0] = stops[i - 1], [r1, t1, b1, c1] = stops[i];
    s += `  { float q = smoothstep(${f3(r0)}, ${f3(r1)}, rw); tr = mix(tr, ${v3(t1)}, q); bd = mix(bd, ${v3(b1)}, q); cr = mix(cr, ${v3(c1)}, q); }\n`;
  }
  return s;
}
function liquidGLSL(HERO) {
  const K = LIQUID.colours, V = HERO.vortex, Wv = LIQUID.waves, Lt = LIQUID.light, Rg = LIQUID.ring, Fm = LIQUID.foam, Sd = LIQUID.shade;
  return /* glsl */ `
#define LQ_FOAM ${LIQUID_FOAM ? 1 : 0}
uniform sampler2D uLqTex;
#ifndef LQ_SHARED_HERO
uniform float uTime, uHeroTravel, uHeroTanW;
uniform vec3 uHeroCam;            // the camera in the track frame (x sideways, h above the water, u along the path)
#endif
uniform vec3 uLqGlow;             // the glowing centre (world)
uniform vec3 uLqKey;              // the key light's direction (world): behind the camera, up and to the left
uniform vec3 uLqFwd, uLqUp, uLqSide;   // the track frame at the camera (world)
uniform vec4 uLqObj[${LIQUID.objects.count}];   // collectibles near the camera: world position, radius (+ gold coin, - sock or gem)
float lqHash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
// Water2's flow map: two samples whose offsets along the flow run half a cycle apart, each faded out while its offset resets
vec4 lqFlow(vec2 uv, vec2 flow, float rate, float t) {
  float p0 = fract(t * rate), p1 = fract(t * rate + 0.5);
  vec4 a = texture2D(uLqTex, uv + flow * (p0 - 0.5));
  vec4 b = texture2D(uLqTex, uv + flow * (p1 - 0.5) + vec2(0.37, 0.61));
  return mix(a, b, abs(0.5 - p0) * 2.0);
}
// the hero's whirlpool layout: the ring phase from the screen radius round the vanishing point (rw, a share of the width)
float lqRing(vec2 cs, float u, out float rw, out float ang, out float id, out float spacing) {
  vec2 rel = cs - uHeroCam.xy;
  float du = max(u - uHeroCam.z, 0.25);
  rw = length(rel) / du / uHeroTanW;
  ang = atan(rel.y, rel.x);
  float lr = log(max(rw, 0.003));
  float sa = ang + uTime * ${f3(Rg.swirl)};   // the swirl turns round the tube
  vec2 cq = vec2(cos(sa), sin(sa));
  float wob = texture2D(uLqTex, cq * 0.31 + vec2(lr * 0.37 - uTime * 0.012, uTime * 0.02)).b;
  float s = lr * ${f3(V.perLog)} + sa / 6.2832 * ${f3(Rg.spiral)} + (wob - 0.5) * ${f3(V.wobble)} - uTime * ${f3(V.flow)} - uHeroTravel * ${f3(V.travel)};
  id = floor(s);
  spacing = du / ${f3(V.perLog)};   // metres along the path between rings here
  return fract(s);
}
// a band of water across each ring: a long back slope up to the crest, a steeper face down to the trough
float lqBand(float k) { return smoothstep(0.0, 0.64, k) * (1.0 - smoothstep(0.64, 0.97, k)); }
// the tunnel's light reflected in the water (analytic, no extra pass): the warm white-gold centre straight ahead, cyan and
// electric-blue rings round it, cobalt walls, the lavender washer behind
vec3 lqEnv(vec3 R) {
  float f = dot(R, uLqFwd);
  vec2 q = vec2(dot(R, uLqSide), dot(R, uLqUp));
  float rw = length(q) / max(f, 0.04) / uHeroTanW;
  float k = fract(log(max(rw, 0.003)) * ${f3(V.perLog)} - uTime * ${f3(V.flow)} - uHeroTravel * ${f3(V.travel)});
  vec3 c = mix(${v3(K.warmCore)}, ${v3(K.warm)}, smoothstep(0.01, 0.05, rw));
  c = mix(c, ${v3(K.cyanHi)}, smoothstep(0.05, 0.12, rw));
  c = mix(c, ${v3(K.cyan)}, smoothstep(0.12, 0.22, rw));
  c = mix(c, ${v3(K.body)}, smoothstep(0.22, 0.5, rw));
  c = mix(c, ${v3(K.cobalt)}, smoothstep(0.5, 1.4, rw));
  c = mix(c, ${v3(K.cyanHi)}, exp(-pow((k - 0.62) / 0.08, 2.0)) * smoothstep(0.1, 0.25, rw) * (1.0 - smoothstep(0.6, 1.2, rw)) * 0.55);   // the rings' bright crests
  c = mix(c, ${v3(K.lavender)}, smoothstep(0.15, -0.35, f));   // behind: the washer's face and the collar
  return c;
}
// the collectibles in the water: a warm gold reflection streak under each coin (the reflected ray finds the coin, stretched
// up and down by the ripples) and glints on the ripples round it (lilac-white for the socks and the gem)
vec3 lqObjects(vec3 W, vec3 N, vec3 V, vec3 R, float hDet, float onFloor) {
  vec3 acc = vec3(0.0);
  // the water's place on the screen (the camera looks along the path): sideways and up, per metre ahead
  vec3 cw = W - cameraPosition; float fw = max(dot(cw, uLqFwd), 0.1);
  vec2 sw = vec2(dot(cw, uLqSide), dot(cw, uLqUp)) / fw;
  for (int i = 0; i < ${LIQUID.objects.count}; i++) {
    vec4 o = uLqObj[i];
    if (o.w == 0.0) continue;
    vec3 d = o.xyz - W; float L = length(d); d /= L;
    float rad = abs(o.w) / L, c = dot(R, d);
    vec3 e = R - d * c;
    float ev = dot(e, uLqUp), es = length(e - uLqUp * ev);
    // the true reflection (the reflected ray finds the object), stretched up and down by the ripples
    float refl = (1.0 - smoothstep(0.6, 1.3, length(vec2(es / (rad * 1.1), ev / (rad * 3.2))))) * step(0.0, c);
    // and the painted kind: a broken streak of light on the water straight under the object on the screen
    vec3 co = o.xyz - cameraPosition; float fo = max(dot(co, uLqFwd), 0.1);
    vec2 so = vec2(dot(co, uLqSide), dot(co, uLqUp)) / fo;
    float ro = abs(o.w) / fo;   // the object's radius on the screen (per metre ahead)
    float below = so.y - ro * 0.6 - sw.y;
    float under = (1.0 - smoothstep(ro * 0.35, ro * 0.95, abs(sw.x - so.x))) * smoothstep(-ro * 0.2, ro * 0.3, below) * (1.0 - smoothstep(ro * 1.2, ro * 3.6, below))
      * step(dot(cw, uLqFwd), dot(co, uLqFwd) + 1.5) * onFloor;
    float broken = smoothstep(0.42, 0.72, hDet);
    vec3 Hc = normalize(d + V);
    float g = pow(max(dot(N, Hc), 0.0), 260.0) * exp(-L * 0.3);
    vec3 col = o.w > 0.0 ? mix(${v3(K.goldDeep)}, ${v3(K.gold)}, 0.6) : ${v3(K.lilac)};
    acc += col * (refl * ${f3(LIQUID.objects.gold * 0.85)} + under * broken * ${f3(LIQUID.objects.gold * 0.9)} + g * 2.4);
  }
  return acc;
}
// The liquid's shading, shared by every water surface. W: world position; N0: the surface's normal; TA, TB: unit tangents
// along the flow and across it; uv: the surface in metres (across, along); flow: the flow map's direction (uv per cycle);
// scroll: the steady scroll (uv); band, tilt: the ring band's height (0 trough .. 1 crest) and its slope along TA;
// shallow: how thin and lit-through (0 .. 1); deep: extra depth (0 .. 1); fres: how much it reflects; N: the final normal.
vec3 lqShade(vec3 W, vec3 N0, vec3 TA, vec3 TB, vec2 uv, vec2 flow, vec2 scroll, float band, float tilt, float shallow, float deep,
             float fres, float turqK, float onFloor, out vec3 N, out float hDet, out float caus) {
  vec4 A = lqFlow(uv / vec2(${f3(Wv.big[0])}, ${f3(Wv.big[1])}) + scroll, flow, ${f3(1 / Wv.cycle / 2)}, uTime);
  vec4 B = lqFlow(uv / vec2(${f3(Wv.small[0])}, ${f3(Wv.small[1])}) + scroll * 1.7 + vec2(0.31, 0.17), flow * 1.4, ${f3(1 / Wv.cycle / 1.4)}, uTime + 0.23);
  vec2 nxy = (A.xy * 2.0 - 1.0) * ${f3(Wv.big[2])} + (B.xy * 2.0 - 1.0) * ${f3(Wv.small[2])};
  hDet = A.z * 0.62 + B.z * 0.38;
  caus = A.w * B.w;
  N = normalize(N0 + TB * nxy.x + TA * (nxy.y - tilt));
  vec3 V = normalize(cameraPosition - W);
  float dist = length(cameraPosition - W);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  vec3 Lg = normalize(uLqGlow - W);
  float far = smoothstep(4.0, 16.0, dist);
  // depth: wave troughs, ring troughs and far water look through more water (cobalt); crests and the swell's top are thin
  // and lit through (turquoise, cyan); facets turned toward the light ahead are lit, the others in shade
  float face = dot(N - N0 * dot(N, N0), Lg);
  float depth = ${f3(Sd.base)} + ${f3(Sd.band)} * (1.0 - band) + ${f3(Sd.det)} * (1.0 - hDet) - ${f3(Sd.shallow)} * shallow + ${f3(Sd.deep)} * deep
    + ${f3(Sd.far)} * far - smoothstep(-0.05, 0.3, face) * ${f3(Sd.face)};
  vec3 cLit = mix(${v3(K.cyan)}, ${v3(K.cyanHi)}, turqK * 0.4);
  vec3 cMid = mix(${v3(K.body)}, ${v3(K.turq)}, turqK);
  vec3 cDeep = mix(mix(${v3(K.troughNear)}, ${v3(K.troughFar)}, far), ${v3(K.electric)}, turqK * 0.5);
  vec3 col = mix(cLit, mix(${v3(K.turqHi)}, cMid, 0.5 + 0.5 * (1.0 - turqK)), smoothstep(0.05, 0.4, depth));
  col = mix(col, cMid, smoothstep(0.35, 0.7, depth));
  col = mix(col, cDeep, smoothstep(0.75, 1.1, depth));
  col = mix(col, ${v3(K.cobalt)}, smoothstep(1.05, 1.4, depth));
  col = mix(col, ${v3(K.abyss)}, smoothstep(1.4, 1.85, depth));
  // light through the thin crests when looking toward the glow
  float back = pow(clamp(dot(-V, Lg), 0.0, 1.0), 3.0);
  col += ${v3(K.cyanHi)} * smoothstep(0.6, 0.95, hDet) * (0.15 + 0.5 * back) * (0.3 + 0.7 * band) * 0.35;
  // caustic light playing in the water
  col += ${v3(K.cyanHi)} * caus * caus * ${f3(Lt.caustic * 0.5)} * (0.4 + 0.6 * band);
  // fresnel reflection of the tunnel's light
  vec3 R = reflect(-V, N);
  float F = clamp(0.03 + 0.97 * pow(1.0 - ndv, 4.0), 0.0, 1.0) * fres;
  col = mix(col, lqEnv(R), F);
  // specular: the glowing centre's sun-glint path (true white pinpoints in a cyan sheen) and the key light's glints
  vec3 Hg = normalize(Lg + V);
  float ng = max(dot(N, Hg), 0.0);
  float glint = pow(ng, 700.0) * ${f3(Lt.glint)} + pow(ng, 90.0) * ${f3(Lt.path)} * (0.4 + 0.6 * hDet);
  float nk = max(dot(N, normalize(uLqKey + V)), 0.0);
  float key = pow(nk, 320.0) * ${f3(Lt.key)};
  col += ${v3(K.sheen)} * pow(ng, 24.0) * 0.12;
  col += ${v3(K.glint)} * (glint + key);
  // twinkling pinpoints on the crests of the ripples
  vec2 sp = uv * vec2(3.0, 2.0) + scroll * 2.0, sc = floor(sp);
  float sh = lqHash(sc + 31.7);
  float star = 1.0 - smoothstep(0.0, 0.16, length(fract(sp) - 0.5 - (vec2(lqHash(sc + 3.1), lqHash(sc + 8.3)) - 0.5) * 0.6));
  col += ${v3(K.glint)} * step(0.93, sh) * star * smoothstep(0.55, 0.85, hDet) * pow(max(0.0, sin(uTime * (3.0 + sh * 4.0) + sh * 40.0)), 4.0) * ${f3(Lt.sparkle)} * 2.0;
  // the coins, the socks and the gem reflected in the water
  col += lqObjects(W, N, V, R, hDet, onFloor);
  return col;
}
`;
}

// ---------------------------------------------------------------- build
export function buildLiquid({ scene, TR, L, W, mascot, updaters, time, U, HERO, waterSheets, drumSheet }) {
  const TS = L.tunnelStart, TE = L.tunnelEnd, axisH = W.WATER + W.AXIS_H, report = { foam: LIQUID_FOAM };
  const tex = liquidTexture();
  const waterU = (waterSheets && waterSheets[0] && waterSheets[0].material.uniforms) || {};
  const objs = []; for (let i = 0; i < LIQUID.objects.count; i++) objs.push(new THREE.Vector4(0, 0, 0, 0));
  const LU = { ...U, uTime: time, uLqTex: { value: tex }, uLqGlow: { value: new THREE.Vector3() }, uLqKey: { value: new THREE.Vector3(0, 1, 0) },
    uLqFwd: { value: new THREE.Vector3(0, 0, 1) }, uLqUp: { value: new THREE.Vector3(0, 1, 0) }, uLqSide: { value: new THREE.Vector3(1, 0, 0) },
    uLqObj: { value: objs } };
  const GL = liquidGLSL(HERO);
  // the character's state for the wake and the swell (as the hero water works it out)
  const S = { k: 0, lagX: mascot.x || 0, lat: 0, air: 0, land: 0, speed: 0, wasAir: false };
  const P = { uLqPlayer: { value: new THREE.Vector3() }, uLqMove: { value: new THREE.Vector4() }, uLqAlpha: { value: 0 } };

  report.walls = liquidWalls({ scene, TR, axisH, TS, GL, LU, HERO });
  report.collar = liquidCollar({ scene, GL, LU, HERO });
  const { mesh: floorMesh, ...floorInfo } = liquidFloor({ scene, TR, L, TS, TE, GL, LU, P, waterU, drumSheet });
  report.floor = floorInfo;
  report.swell = liquidSwell({ scene, GL, LU });
  report.glow = warmGlow({ scene });
  // the hero grade's vignette pulled light cyan toward lavender round the edges: under liquid it is a cobalt that keeps the
  // hue (heroGrade is built after this); the bright centre a little smaller (the approved core is small and warm)
  if (HERO.grade) HERO.grade.vignetteCol = LIQUID.grade.vignetteCol;
  if (HERO.glow) HERO.glow.size = LIQUID.grade.glowSize;
  if (LIQUID_FOAM) report.splash = translucentSplash({ scene });
  if (LIQUID_FOAM) report.waterlineFoam = waterlineFoam({ scene, updaters, time, tex });
  // the slide's water sheet is not drawn under the floor once the liquid is fully in; the drum's sheet is replaced
  const slide = (waterSheets || []).find((m) => m !== drumSheet);
  const cut = { value: 0 }, cutU = TS + LIQUID.ribbon.from + 2.5;
  if (slide && slide.material.fragmentShader.includes('void main() {') && slide.material.fragmentShader.includes('varying vec2 vTrack;')) {
    slide.material.uniforms.uLqCut = cut;
    slide.material.fragmentShader = slide.material.fragmentShader.replace('void main() {', `uniform float uLqCut;
void main() {
  if (uLqCut > 0.5 && vTrack.y > ${f3(cutU)} && abs(vTrack.x) < ${f3(LIQUID.ribbon.half[0] - 0.1)}) discard;   // ?s3=liquid: under the liquid floor`);
    slide.material.needsUpdate = true; report.slideCut = true;
  }
  const hide = [...LIQUID.hide, ...(LIQUID_FOAM ? [] : LIQUID.hideNoFoam)].map((n) => scene.getObjectByName(n)).filter(Boolean);
  let fxPoints = null;
  if (!LIQUID_FOAM) scene.traverse((o) => { if (!fxPoints && o.isPoints && o.material && o.material.fragmentShader && o.material.fragmentShader.includes('vKind > 2.5')) fxPoints = o; });
  report.hidden = hide.map((o) => o.name).concat(fxPoints ? ['game spray particles'] : []);

  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  const coins = [], others = [], wp = new THREE.Vector3(), cand = [];
  scene.traverse((o) => { if (o.isLOD) coins.push(o); else if (o.isGroup && o.parent === scene && o.children.some((c) => c.isSprite && c.name === 'r2Halo')) others.push(o); });
  report.objects = { coins: coins.length, others: others.length };
  updaters.push((dt) => {
    dt = Math.min(dt || 0, 0.1);
    const z = mascot.z, e = (tau) => 1 - Math.exp(-dt / tau);
    S.k = THREE.MathUtils.smoothstep(z, TS + LIQUID.fade[0], TS + LIQUID.fade[1]) * (1 - THREE.MathUtils.smoothstep(z, TE + 6, TE + 8));
    S.lagX += (mascot.x - S.lagX) * e(0.05);
    S.lat += ((mascot.xv || 0) - S.lat) * e(0.1);
    S.speed += ((mascot.speed || 0) - S.speed) * e(0.3);
    const ride = W.baseHeight(L, mascot.x, z), lift = Math.max(0, mascot.yAbs - ride - W.FLOAT_H);
    S.air += ((mascot.air ? THREE.MathUtils.smoothstep(lift, 0.08, 0.6) : 0) - S.air) * e(0.08);
    if (S.wasAir && !mascot.air) S.land = 1;
    S.wasAir = !!mascot.air; S.land = Math.max(0, S.land - dt * 1.4);
    P.uLqPlayer.value.set(S.lagX, ride, z);
    P.uLqMove.value.set(THREE.MathUtils.clamp(S.lat, -6, 6), S.speed / W.CRUISE, S.air, S.land);
    P.uLqAlpha.value = S.k;
    floorMesh.visible = S.k > 0.001;
    cut.value = S.k > 0.999 ? 1 : 0;
    if (drumSheet) drumSheet.visible = !(S.k > 0.999);
    if (S.k > 0.05) { for (const o of hide) o.visible = false; if (fxPoints) fxPoints.visible = false; }
    else if (fxPoints) fxPoints.visible = true;
    // the collectibles nearest ahead of the camera, for their reflections
    cand.length = 0;
    const camU = U.uHeroCam.value.z;
    for (const list of [coins, others]) for (const o of list) {
      if (!o.visible) continue;
      o.getWorldPosition(wp);
      const ahead = wp.z - (camU);   // the hero stretch is straight (+z) up to the drum's first turn; good enough to rank them
      if (ahead < -1 || ahead > LIQUID.objects.reach) continue;
      cand.push([ahead, wp.x, wp.y, wp.z, list === coins ? 0.34 : -0.3]);
    }
    cand.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < objs.length; i++) { const c = cand[i]; if (c) objs[i].set(c[1], c[2], c[3], c[4]); else objs[i].set(0, 0, 0, 0); }
  });
  // the camera's frame and the glow's place, worked out just before the frame is drawn (after the hero's camera)
  const prev = scene.onBeforeRender;
  scene.onBeforeRender = function (renderer, sc, cam, rt) {
    if (prev) prev.call(this, renderer, sc, cam, rt);
    if (!cam || !cam.isPerspectiveCamera || S.k <= 0.001) return;
    const u = U.uHeroCam.value.z;
    TR.frame(u, F);
    LU.uLqFwd.value.copy(F.T); LU.uLqUp.value.copy(F.U); LU.uLqSide.value.copy(F.R);
    TR.frame(Math.min(u + LIQUID.light.glowAhead, TE + 2), F);
    LU.uLqGlow.value.copy(F.P).addScaledVector(F.U, axisH);
    // the key light: from behind the camera, up and a little to the left (screen-left is +R)
    LU.uLqKey.value.set(0, 0, 0).addScaledVector(LU.uLqUp.value, 0.8).addScaledVector(LU.uLqFwd.value, -0.45).addScaledVector(LU.uLqSide.value, 0.35).normalize();
  };
  report.cost = { drawCalls: 1, textures: 1, texture: '256 x 256 RGBA (normal, height, caustics), mipmapped' };
  return report;
}

// ---------------------------------------------------------------- the floor: a ribbon of water along the track
function liquidFloor({ scene, TR, L, TS, TE, GL, LU, P, waterU, drumSheet }) {
  const R = LIQUID.ribbon, u0 = TS + R.from, u1 = TE + R.to, rows = Math.ceil((u1 - u0) / R.step) + 1, cols = R.cols + 1;
  const nv = rows * cols, tr = new Float32Array(nv * 2), aP = new Float32Array(nv * 3), aR = new Float32Array(nv * 3), aU = new Float32Array(nv * 3), aT = new Float32Array(nv * 3), pos = new Float32Array(nv * 3), idx = [];
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  for (let j = 0; j < rows; j++) {
    const u = u0 + (u1 - u0) * j / (rows - 1), half = R.half[0] + (R.half[1] - R.half[0]) * THREE.MathUtils.smoothstep(u, TS - 0.3, TS + 1.2);
    TR.frame(u, F);
    for (let i = 0; i < cols; i++) {
      const k = j * cols + i, x = half * (2 * i / (cols - 1) - 1);
      tr[k * 2] = x; tr[k * 2 + 1] = u;
      F.P.toArray(aP, k * 3); F.R.toArray(aR, k * 3); F.U.toArray(aU, k * 3); F.T.toArray(aT, k * 3);
      pos[k * 3] = F.P.x + F.R.x * x; pos[k * 3 + 1] = F.P.y + F.R.y * x; pos[k * 3 + 2] = F.P.z + F.R.z * x;
      if (i < cols - 1 && j < rows - 1) idx.push(k, k + cols, k + 1, k + cols, k + cols + 1, k + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aTrack', new THREE.BufferAttribute(tr, 2));
  for (const [n, a] of [['aP', aP], ['aR', aR], ['aU', aU], ['aT', aT]]) g.setAttribute(n, new THREE.BufferAttribute(a, 3));
  g.setIndex(idx); g.computeBoundingSphere();
  const haz = drumSheet && drumSheet.material.uniforms.uS4Haz ? { uS4Haz: drumSheet.material.uniforms.uS4Haz, uS4Warn: drumSheet.material.uniforms.uS4Warn } : null;
  const uniforms = { ...LU, ...P, uTime: waterU.uTime || LU.uTime, uTunnel: waterU.uTunnel || { value: new THREE.Vector4(TS, TE, L.tunnelRadius, L.axisHeight) },
    uRipples: waterU.uRipples || { value: [] }, ...(haz || {}) };
  const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: floorVertex(TS, u0), fragmentShader: floorFragment(GL, TS, !!haz), transparent: true, depthWrite: true,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -8 });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'lqFloor'; mesh.frustumCulled = false; mesh.renderOrder = -1; mesh.visible = false;
  scene.add(mesh);
  return { mesh, triangles: idx.length / 3, rows, cols, hazards: !!haz };
}
const WAKE_GLSL = (TS) => /* glsl */ `
uniform vec3 uLqPlayer;   // the character: x, the water's height under it, u
uniform vec4 uLqMove;     // sideways speed (m/s), speed (share of the cruise speed), in the air (0..1), just landed (1 .. 0)
uniform vec4 uRipples[${RIPPLES}];
// the game's water level, with the slide's spill beside it rising to the slide's level in front of the washer (one pool)
float lqBase(vec2 xz) {
  float before = clamp((uTunnel.x - xz.y) * 0.5, 0.0, 1.0);
  float ax = abs(xz.x);
  float crown = ${f3(SLIDE.crown)} * clamp(1.0 - ax * ax / ${f3(SLIDE.half * SLIDE.half)}, 0.0, 1.0);
  float edge = bwSmooth(${f3(SLIDE.half)}, ${f3(SLIDE.half + 0.55)}, ax);
  float moat = ${f3(SLIDE.moat)} * (1.0 - bwSmooth(${f3(TS - 7.5)}, ${f3(TS - 4.5)}, xz.y));
  float slide = before * mix(crown + bwHills(xz.y), moat, edge);
  float inside = clamp((xz.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xz.y) * 0.5, 0.0, 1.0);
  float swell = inside * ${f3(0.1)} * sin((xz.y - uTunnel.x) * ${f3(2 * Math.PI / 7.4)});
  return slide + swell;
}
// the water the character moves: a V wake behind it (toward the camera) that swings out as it swerves, a ring pushed out
// round it, rings thrown out when it lands, and the game's own splash rings
float lqWake(vec2 xz, float t) {
  vec2 d = xz - uLqPlayer.xz;
  float spd = max(uLqMove.y * 7.0, 1.0);
  float behind = max(-d.y, 0.0);
  float px = d.x + uLqMove.x * behind / spd * 0.8;             // where the character was when it passed here
  float arm = 0.42 + behind * 0.36;                             // the Kelvin wake's arms open at about 20 degrees
  float decay = exp(-behind / 4.0) * smoothstep(0.0, 0.6, behind) * (0.3 + 0.7 * min(uLqMove.y, 1.2));
  float ridge = exp(-pow((abs(px) - arm) / 0.16, 2.0)) * decay * (0.055 + 0.03 * sin(behind * 9.0 - t * 11.0));
  float trans = sin(behind * 10.0 - t * 12.0) * 0.012 * exp(-pow(px / (arm * 0.8), 2.0)) * decay;   // the waves across the wake
  float r = length(d * vec2(1.0, 0.8));
  float ring = sin(r * 11.0 - t * 9.0) * 0.012 * exp(-r * 1.1) * smoothstep(0.35, 0.7, r) * (1.0 - uLqMove.z);
  float rr = 0.55 + (1.0 - uLqMove.w) * 2.6;
  float land = exp(-pow((r - rr) / 0.18, 2.0)) * uLqMove.w * 0.09;
  float rip = 0.0;
  for (int i = 0; i < ${RIPPLES}; i++) {
    vec4 q = uRipples[i];
    float age = t - q.z;
    if (age < 0.0 || age > 2.5 || q.w <= 0.0) continue;
    float dd = length(xz - q.xy) - age * 2.4;
    rip += sin(dd * 9.0) * exp(-dd * dd * 6.0) * exp(-age * 1.6) * 0.045 * q.w;
  }
  return ridge + trans + ring + land + rip;
}
float lqHeight(vec2 xz, float t) { return lqBase(xz) + bwWaves(xz, t) + lqWake(xz, t); }
`;
const floorVertex = (TS, u0) => /* glsl */ `
${HEIGHT_GLSL}
${WAKE_GLSL(TS)}
uniform float uLqAlpha;
attribute vec2 aTrack;
attribute vec3 aP, aR, aU, aT;
varying vec3 vW, vN, vTrk, vR, vT; varying float vA;
void main() {
  float h = lqHeight(aTrack, uTime);
  const float e = 0.08;
  float hx = (lqHeight(aTrack + vec2(e, 0.0), uTime) - lqHeight(aTrack - vec2(e, 0.0), uTime)) / (2.0 * e);
  float hu = (lqHeight(aTrack + vec2(0.0, e), uTime) - lqHeight(aTrack - vec2(0.0, e), uTime)) / (2.0 * e);
  vec3 w = aP + aR * aTrack.x + aU * h;
  vW = w; vN = normalize(aU - aR * hx - aT * hu); vTrk = vec3(aTrack.x, h, aTrack.y); vR = aR; vT = aT;
  vA = uLqAlpha * smoothstep(${f3(u0)}, ${f3(u0 + 2.5)}, aTrack.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`;
function floorFragment(GL, TS, haz) {
  const Fm = LIQUID.foam, K = LIQUID.colours, Rg = LIQUID.ring, Wv = LIQUID.waves;
  return /* glsl */ `
${GL}
uniform vec4 uTunnel; uniform vec3 uLqPlayer; uniform vec4 uLqMove;
${haz ? 'uniform vec4 uS4Haz[6]; uniform vec3 uS4Warn;' : ''}
varying vec3 vW, vN, vTrk, vR, vT; varying float vA;
void main() {
  vec2 xu = vTrk.xz;
  float inDrum = clamp((xu.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xu.y) * 0.5, 0.0, 1.0);
  // the rings run on over the water from the walls (one whirlpool): weaker close to the character, where its own water is
  float rw, ang, id, spacing;
  float k = lqRing(vec2(xu.x, vTrk.y), xu.y, rw, ang, id, spacing);
  vec2 toP = xu - uLqPlayer.xz; float rP = length(toP * vec2(1.0, 0.7));
  float ringK = ${f3(Rg.floor)} * smoothstep(1.2, 3.5, rP) * smoothstep(0.02, 0.06, rw);
  float aa = clamp(1.0 - fwidth(k + id) * 1.5, 0.0, 1.0);
  float band = mix(0.75, lqBand(k), ringK * aa);
  float tilt = (lqBand(k + 0.03) - lqBand(k - 0.03)) / 0.06 * ${f3(Rg.amp * 0.5)} * ringK * aa;
  // meeting the walls: the water climbs them (its normal turns toward the wall's), so floor and walls are one liquid
  float halfW = 1.32;
  float side = smoothstep(halfW - 0.35, halfW, abs(xu.x)) * inDrum;
  vec3 wallN = normalize(vec3(0.0) - vR * sign(xu.x) * 0.66 + normalize(cross(vT, vR)) * 0.75);
  vec3 N0 = normalize(mix(normalize(vN), wallN, side * 0.6));
  // flow: along the path, a slow swirl in the drum, and round the character (the water parts round its body)
  float sw = sin(xu.y * 0.45 - uTime * 0.5) * ${f3(Wv.swirl)} * (0.3 + 0.7 * inDrum);
  vec2 part = toP / max(rP, 0.3) * exp(-rP * rP / 1.2) * 0.5;
  vec2 flow = vec2(sw + part.x, 0.25 + part.y * 0.5);
  vec2 scroll = vec2(0.0, uTime * ${f3(Wv.flow)} / ${f3(Wv.big[1])});   // toward the rider
  vec3 TA = normalize(vT - N0 * dot(vT, N0)), TB = normalize(cross(TA, N0));
  vec3 N; float hDet, caus;
  float near = exp(-rP * rP / 2.5);
  vec3 col = lqShade(vW, N0, TA, TB, vec2(xu.x, xu.y), flow, scroll, band, tilt, near * 0.15, 0.0, ${f3(LIQUID.light.fresnel)}, 1.0 - side * 0.4, 1.0, N, hDet, caus);
  // far away the floor joins the whirlpool's rings round the centre
  ${rampDecl()}
  col = mix(col, mix(bd, cr, lqBand(k) * 0.5), smoothstep(0.14, 0.04, rw) * 0.8);
  float s4Haz = 0.0;
${haz ? `  if (inDrum > 0.0) {   // a brush's warning, as on the drum's own water (tunnel_s4.js): a pulsing pink glow down its lane
    float haz = 0.0;
    for (int i = 0; i < 6; i++) {
      vec4 h = uS4Haz[i];
      float du = h.x - xu.y;
      float along = (1.0 - smoothstep(uS4Warn.y, uS4Warn.x, du)) * smoothstep(-1.0, -0.2, du);
      float dx = (xu.x - h.y) / uS4Warn.z;
      float across = exp(-dx * dx);
      float stripes = 0.55 + 0.45 * smoothstep(0.25, 0.55, fract(du * 1.2 + uTime * 1.6)) * (1.0 - smoothstep(0.75, 0.95, fract(du * 1.2 + uTime * 1.6)));
      haz = max(haz, along * across * h.z * stripes);
    }
    s4Haz = haz * (0.82 + 0.18 * sin(uTime * 7.0)) * inDrum;
    float dash = smoothstep(0.35, 0.5, fract(xu.y * 0.55 - uTime * 1.6)) * (1.0 - smoothstep(0.85, 1.0, fract(xu.y * 0.55 - uTime * 1.6)));
    col += ${v3('#bfefff')} * exp(-pow((abs(xu.x) - 0.35) / 0.035, 2.0)) * dash * 0.12 * inDrum;   // faint lane guides
  }
` : ''}
#if LQ_FOAM
  {   // the foam layer: thin broken white on the crests, sparse flecks, streaks along the wake, lace where it meets the walls
    float patchF = texture2D(uLqTex, xu * vec2(0.13, 0.07) + vec2(0.0, -uTime * 0.06)).b;
    float crestF = smoothstep(0.8, 0.93, hDet) * smoothstep(0.55, 0.8, patchF) * ${f3(Fm.crests)};
    vec2 fc = xu * vec2(9.0, 5.0) + vec2(0.0, -uTime * ${f3(Wv.flow)} * 5.0 / ${f3(Wv.big[1])} * 0.0), fi = floor(fc);
    float fleck = step(0.955, lqHash(fi + 5.3)) * (1.0 - smoothstep(0.12, 0.3, length(fract(fc) - 0.5))) * ${f3(Fm.flecks)};
    float behind = max(-toP.y, 0.0), arm = 0.42 + behind * 0.36;
    float px = toP.x + uLqMove.x * behind / max(uLqMove.y * 7.0, 1.0) * 0.8;
    float wakeF = exp(-pow((abs(px) - arm) / 0.09, 2.0)) * exp(-behind / 3.0) * smoothstep(0.2, 0.8, behind) * smoothstep(0.45, 0.7, hDet + patchF * 0.3) * ${f3(Fm.wake)};
    float laceF = side * smoothstep(0.5, 0.75, hDet + caus * 0.5) * ${f3(Fm.lace)};
    float foam = clamp(max(max(crestF, fleck), max(wakeF, laceF)), 0.0, 1.0) * (1.0 - s4Haz);
    col = mix(col, mix(${v3(K.foamShade)}, ${v3(K.foam)}, smoothstep(0.3, 0.8, hDet)), foam * 0.78);   // translucent: blue shows through
  }
#endif
${haz ? `  col = mix(col, vec3(1.0, 0.12, 0.5) * 0.95, clamp(s4Haz * 1.7, 0.0, 1.0) * 0.35);   // softer than the drum sheet (0.8): a glow under the water\n` : ''}
  gl_FragColor = vec4(col, vA);
${LIQUID.debug === 4 ? '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);' : ''}
}
`;
}
const rampDecl = () => ringRamp(LIQUID.stops).replace(/\n/g, '\n  ');

// ---------------------------------------------------------------- the walls: the whirlpool's rings as bands of water
function liquidWalls({ scene, TR, axisH, TS, GL, LU, HERO }) {
  const wall = scene.getObjectByName('heroWalls');
  if (!wall || !wall.geometry.attributes.aAU) return null;
  const radius = (typeof window !== 'undefined' && window.__BW_HERO_LINING__ && window.__BW_HERO_LINING__.radius) || 2.0;
  // each vertex's point on the tube's axis and the path's direction there (for the wall's normal and the flow)
  const au = wall.geometry.attributes.aAU, n = au.count, ax = new Float32Array(n * 3), tn = new Float32Array(n * 3);
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  let lastU = NaN;
  for (let i = 0; i < n; i++) {
    const u = au.getY(i);
    if (u !== lastU) { TR.frame(u, F); lastU = u; }
    ax[i * 3] = F.P.x + F.U.x * axisH; ax[i * 3 + 1] = F.P.y + F.U.y * axisH; ax[i * 3 + 2] = F.P.z + F.U.z * axisH;
    F.T.toArray(tn, i * 3);
  }
  wall.geometry.setAttribute('aLqAxis', new THREE.BufferAttribute(ax, 3));
  wall.geometry.setAttribute('aLqT', new THREE.BufferAttribute(tn, 3));
  wall.material = new THREE.ShaderMaterial({ uniforms: { ...LU, uStart: { value: TS } }, side: THREE.DoubleSide,
    vertexShader: /* glsl */ `attribute vec2 aAU; attribute vec3 aLqAxis, aLqT; varying vec2 vAU; varying vec3 vW, vN, vT;
void main() { vAU = aAU; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(aLqAxis - w.xyz); vT = aLqT; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: wallFragment(GL, radius, axisH, HERO) });
  wall.name = 'heroWalls';
  return { radius, attributes: ['aLqAxis', 'aLqT'] };
}
// the wall shading (also used round the collar): cs is the point's place in the tube's cross-section, u along the path
function wallCode(HERO) {
  const Rg = LIQUID.ring, K = LIQUID.colours, Fm = LIQUID.foam, Wv = LIQUID.waves;
  return /* glsl */ `
vec3 lqWall(vec3 W, vec3 N0, vec3 T0, vec2 cs, float a, float u, float arc) {
  float rw, ang, id, spacing;
  float k = lqRing(cs, u, rw, ang, id, spacing);
  float aa = clamp(1.0 - fwidth(k + id) * 1.2, 0.0, 1.0);
  ${rampDecl()}
  float band = mix(0.5, lqBand(k), aa);
  // each ring a band of water: its slope tilts the normal along the path (the crest's face toward the rider)
  float tilt = (lqBand(k + 0.03) - lqBand(k - 0.03)) / 0.06 * ${f3(Rg.amp)} * aa;
  vec3 TA = normalize(T0 - N0 * dot(T0, N0)), TB = normalize(cross(N0, TA));
  // the water swirls round the tube and along it
  vec2 uv = vec2(arc, u);
  vec2 flow = vec2(0.6, 0.2);
  vec2 scroll = vec2(uTime * ${f3(Wv.around)}, uTime * ${f3(Wv.flow * 0.8)} / ${f3(Wv.big[1])});
  vec3 N; float hDet, caus;
  float hW = cs.y;   // height above the water
  vec3 col = lqShade(W, N0, TA, TB, uv, flow, scroll, band, -tilt, 0.0, 0.0, ${f3(LIQUID.light.wallFresnel)}, 0.7 * (1.0 - smoothstep(0.0, 0.7, hW)), 1.0 - smoothstep(0.1, 0.5, hW), N, hDet, caus);
  // the ring's own colours by radius (the measured bands): trough, body and crest; the liquid's light on top
  vec3 ringCol = mix(bd, tr, clamp(1.0 - smoothstep(0.0, 0.25, k) + smoothstep(0.86, 1.0, k), 0.0, 1.0) * aa);
  ringCol = mix(ringCol, cr, smoothstep(0.45, 0.66, k) * (1.0 - smoothstep(0.7, 0.8, k)) * aa);
  float own = 1.0 - smoothstep(${f3(Rg.ownAt[0])}, ${f3(Rg.ownAt[1])}, rw);   // the small warm core keeps its own colours
  col = mix(col, ringCol, ${f3(Rg.own[1])} + ${f3(Rg.own[0])} * own);
  col += (col * 0.6 + ${v3(K.cyanHi)} * 0.4) * (hDet - 0.5) * 0.5 * (1.0 - own);   // the waves' light and shade over the rings
  col += ${v3(K.cyanHi)} * pow(band, 6.0) * smoothstep(0.55, 0.8, hDet) * 0.35 * (1.0 - own);   // the lit cyan crest of each band
  // the hero's pastel rainbow ring, tinted by angle
  float upA = clamp((cs.y - uHeroCam.y) / max(length(cs - uHeroCam.xy), 1e-3), -1.0, 1.0), rightA = -(cs.x - uHeroCam.x) / max(length(cs - uHeroCam.xy), 1e-3);
  vec3 tint = mix(${v3('#b98cf0')}, ${v3('#8fdcf6')}, smoothstep(-0.6, 0.6, rightA));
  tint = mix(tint, ${v3('#ffc27a')}, smoothstep(0.5, 0.95, upA));
  tint = mix(tint, ${v3('#f59ad8')}, smoothstep(0.1, 0.6, upA) * smoothstep(0.0, 0.6, -rightA) * 0.8);
  col = mix(col, mix(tint, vec3(1.0), 0.15), ${f3(Rg.rainbow)} * exp(-pow((rw - ${f3(Rg.rainbowAt)}) / ${f3(Rg.rainbowW)}, 2.0)));
  // moving caustic light on the lower walls near the waterline, and the water's light reflected up onto them
  float wl = smoothstep(-0.15, 0.05, hW) * (1.0 - smoothstep(0.2, ${f3(LIQUID.walls.caustic)}, hW));
  vec2 cuv = vec2(arc * 0.8 + uTime * 0.07, u * 0.55 - uTime * 0.42);
  float c1 = texture2D(uLqTex, cuv).a, c2 = texture2D(uLqTex, cuv * 1.37 + vec2(0.41, -uTime * 0.11)).a;
  col += ${v3(K.cyanHi)} * pow(c1 * c2, 1.4) * wl * 1.1 * smoothstep(0.05, 0.14, rw);
  col += ${v3(K.turqHi)} * wl * 0.12 * (0.6 + 0.4 * sin(u * 3.0 - uTime * 4.0 + arc * 2.0));
  float c3 = texture2D(uLqTex, vec2(arc * 0.35 - uTime * 0.12, u * 0.22 + uTime * 0.3)).a, c4 = texture2D(uLqTex, vec2(arc * 0.47 + uTime * 0.09, u * 0.3 + uTime * 0.21) + 0.5).a;
  col += ${v3(K.cyanHi)} * pow(c3 * c4, 1.6) * 0.55 * smoothstep(0.06, 0.16, rw) * (0.5 + 0.5 * band) * (1.0 - wl * 0.5);
  // sharp white glints on the bands' crests, twinkling as the water moves
  vec2 gq = vec2(arc * 2.2 + uTime * 0.9, u * 1.3 + uTime * 2.4), gc = floor(gq);
  float gh = lqHash(gc + 13.7);
  float gs = 1.0 - smoothstep(0.0, 0.14, length(fract(gq) - 0.5 - (vec2(lqHash(gc + 1.3), lqHash(gc + 6.1)) - 0.5) * 0.6));
  col += vec3(1.0) * step(0.9, gh) * gs * smoothstep(0.5, 0.9, band) * smoothstep(0.5, 0.8, hDet) * smoothstep(0.08, 0.16, rw) * ${f3(LIQUID.light.wallGlint)} * 1.6;
#if LQ_FOAM
  {   // white splash strokes along the spirals (broken, irregular) and droplets thrown off them
    float ringPh = log(max(rw, 0.003)) * ${f3(HERO.vortex.perLog)} - uTime * ${f3(HERO.vortex.flow)} - uHeroTravel * ${f3(HERO.vortex.travel)};
    float sa = ang + uTime * ${f3(Rg.swirl)};
    vec2 cq = vec2(cos(sa), sin(sa));
    float s1 = texture2D(uLqTex, cq * 0.45 + vec2(id * 0.37, ringPh * 0.9)).b;
    float s2 = texture2D(uLqTex, cq * 0.9 + vec2(id * 0.13, ringPh * 0.25)).b;
    float onCrest = smoothstep(0.4, 0.62, k) * (1.0 - smoothstep(0.7, 0.82, k));
    float stroke = smoothstep(0.8, 0.88, s1 * 0.6 + s2 * 0.6 + hDet * 0.25) * onCrest * smoothstep(0.1, 0.17, rw) * (1.0 - smoothstep(0.45, 0.52, rw));
    vec2 dg = vec2(ang * 40.0, ringPh * 16.0), dc = floor(dg);
    float drop = step(0.9, lqHash(dc + 71.0)) * (1.0 - smoothstep(0.08, 0.22, length(fract(dg) - 0.5))) * smoothstep(0.1, 0.16, rw) * (1.0 - smoothstep(0.44, 0.5, rw));
    col = mix(col, ${v3(K.foam)}, clamp(stroke * ${f3(Fm.strokes)} + drop * 0.8, 0.0, 1.0));
  }
#endif
  return col;
}
`;
}
function wallFragment(GL, radius, axisH, HERO) {
  return /* glsl */ `
${GL}
${wallCode(HERO)}
uniform float uStart; varying vec2 vAU; varying vec3 vW, vN, vT;
void main() {
  float a = vAU.x, u = vAU.y;
  vec2 cs = vec2(cos(a) * ${f3(radius)}, ${f3(axisH)} + sin(a) * ${f3(radius)});
  vec3 col = lqWall(vW, normalize(vN), normalize(vT), cs, a, u, a * ${f3(radius)});
  col = mix(col, ${v3(HERO.collar.edge)}, exp(-pow((u - uStart - 0.1) / 0.07, 2.0)) * 0.9);   // the thin navy edge of the mouth
  col = mix(col, ${v3('#c4b8f0')}, 1.0 - smoothstep(uStart - 0.06, uStart + 0.06, u));   // the washer's lavender shell before the mouth
  gl_FragColor = vec4(col, 1.0);
}
`;
}
// the collar (the drum's front wall from the gold rim back to the tube): its sides and bottom are the whirlpool's water, so
// they take the same liquid as the walls; its lavender top arc is kept
function liquidCollar({ scene, GL, LU, HERO }) {
  const c = scene.getObjectByName('heroCollar');
  if (!c || !c.material.fragmentShader.includes('float rw; vec3 water = heroVortex(vXHU.xy, vXHU.z, rw);')) return null;
  const m = c.material;
  // the collar's shader already declares the hero's camera uniforms and the time
  const fs = m.fragmentShader.replace('void main() {', `#define LQ_SHARED_HERO\n${GL}\n${wallCode(HERO)}\nvarying vec3 vLqW;\nvoid main() {`)
    .replace('float rw; vec3 water = heroVortex(vXHU.xy, vXHU.z, rw);', `vec3 lqN = normalize(cross(dFdx(vLqW), dFdy(vLqW))); if (dot(lqN, cameraPosition - vLqW) < 0.0) lqN = -lqN;
  vec3 lqT = normalize(uLqFwd);
  vec3 water = lqWall(vLqW, lqN, lqT, vXHU.xy, a, vXHU.z, a * 2.2);`);
  const vs = m.vertexShader.replace('void main() {', 'varying vec3 vLqW;\nvoid main() { vLqW = (modelMatrix * vec4(position, 1.0)).xyz;');
  c.material = new THREE.ShaderMaterial({ uniforms: { ...m.uniforms, ...LU }, vertexShader: vs, fragmentShader: fs, side: THREE.DoubleSide });
  return true;
}

// ---------------------------------------------------------------- the swell round the character: the same liquid
function liquidSwell({ scene, GL, LU }) {
  const s = scene.getObjectByName('heroSwell');
  if (!s || !s.material.vertexShader.includes('varying vec3 vW, vN; varying vec4 vS;')) return null;
  const old = s.material, C = LIQUID.swell.clear, Fm = LIQUID.foam, K = LIQUID.colours, Wv = LIQUID.waves;
  const fs = /* glsl */ `
${GL}
uniform float uFade, uFlow, uLand;
uniform vec3 uC, uR, uU, uT;
varying vec3 vW, vN; varying vec4 vS;
void main() {
  float s = vS.x, as = abs(s), d = vS.z;
  vec3 N0 = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  if (dot(N0, V) < 0.0) N0 = -N0;
  // its tangents: along the crest and down the face (the water runs down the face toward the camera and out along the bank)
  vec3 along = normalize(cross(uU, N0) + 1e-4), down = normalize(cross(N0, along));
  float fl = uTime * uFlow;
  vec2 uv = vec2(as, d * 1.6);
  vec2 flow = vec2(0.4, 0.6);
  vec2 scroll = vec2(-fl * 0.3, -fl * 1.1);
  vec3 N; float hDet, caus;
  float thin = 1.0 - smoothstep(0.0, 0.05, d);
  vec3 col = lqShade(vW, N0, down, along, uv, flow, scroll, 0.75 - 0.35 * smoothstep(0.0, 0.25, d), 0.0, thin * 0.35, smoothstep(0.04, 0.3, d), ${f3(LIQUID.light.fresnel)}, 0.35, 1.0, N, hDet, caus);
  // the height above the water round it: the foot fades into the floor's water (one surface)
  float hUp = dot(vW - uC, uU);
  float a = mix(${f3(C[0])}, 1.0, smoothstep(${f3(C[1])}, ${f3(C[2])}, d)) * smoothstep(-0.06, 0.06, hUp + 0.02);
#if LQ_FOAM
  {   // a thin white crest broken into short pieces, and flecks of spray down the face
    float nc = texture2D(uLqTex, vec2(as * 0.9 - fl * 0.12, uTime * 0.05)).b, nc2 = texture2D(uLqTex, vec2(as * 2.3 - fl * 0.2, 0.5 + uTime * 0.07)).b;
    float cw = 0.005 + 0.032 * nc * nc;
    float crest = (1.0 - smoothstep(cw * 0.45, cw, d)) * smoothstep(0.5, 0.64, nc * 0.7 + nc2 * 0.5) * ${f3(Fm.swellCrest)};
    crest *= 1.0 - 0.7 * smoothstep(0.35, 0.6, caus + (1.0 - hDet) * 0.4) * smoothstep(0.006, 0.02, d);   // lacy: blue shows through
    vec2 fc = vec2(as * 30.0 - fl * 1.5, d * 26.0 - fl * 3.5), fi = floor(fc);
    float fleck = step(0.965, lqHash(fi + 5.3)) * (1.0 - smoothstep(0.1, 0.3, length(fract(fc) - 0.5))) * (1.0 - smoothstep(0.05, 0.3, d)) * ${f3(Fm.flecks)};
    float white = clamp(crest + fleck, 0.0, 1.0);
    col = mix(col, ${v3(K.foam)}, white * 0.8); a = max(a, white * 0.8);   // translucent: blue shows through
  }
#endif
  gl_FragColor = vec4(col, a * step(0.001, uFade));
${LIQUID.debug === 1 || LIQUID.debug === 3 ? '  gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);' : LIQUID.debug === 2 ? '  gl_FragColor = vec4(d * 2.0, a, hUp * 2.0, 1.0);' : ''}
}
`;
  s.material = new THREE.ShaderMaterial({ uniforms: { ...old.uniforms, ...LU, uTime: old.uniforms.uTime || LU.uTime }, vertexShader: old.vertexShader, fragmentShader: fs,
    transparent: true, depthWrite: false, depthTest: LIQUID.debug !== 3 });
  return { restyled: 'heroSwell', drawCalls: 0 };
}

// ---------------------------------------------------------------- the glowing centre, warmer (the approved core is peach and gold)
// the splash droplets round the character (heroSplash), translucent: the blue water shows through the spray
// the waterline's foam round the character (foam layer only), riding with the swell (its own frame uniforms):
//   - spray sheets: translucent fans of white rising from the crest either side, streaked, breaking into droplets at the
//     top, leaning outward; bigger on the side it swerves to and on landing, smaller in the air (one instanced draw call);
//   - clusters of clear soap bubbles sitting on the waterline (one instanced draw call)
function waterlineFoam({ scene, updaters, time, tex }) {
  const swell = scene.getObjectByName('heroSwell');
  if (!swell) return null;
  const SU = swell.material.uniforms, SW = HERO_WATER.swell, Fm = LIQUID.foam, D2R = Math.PI / 180, rnd = mulberryLq(0x5b1a5);
  const crest = (phi) => {   // the crest's height and place (the hero water's crest line, as it builds it)
    const i = THREE.MathUtils.clamp((phi + 110) / 5, 0, SW.line.length - 1.0001), i0 = Math.floor(i);
    let h = SW.line[i0] + (SW.line[i0 + 1] - SW.line[i0]) * (i - i0) - (SW.dip || 0);
    for (const [c, a, w] of SW.mounds) { const t = (phi - c) / w; if (Math.abs(t) < 1) h += a * (1 - t * t) ** 2; }
    const a = phi * D2R; let nx = Math.sin(a) / SW.ax, nu = -Math.cos(a) / SW.au; const nl = Math.hypot(nx, nu);
    return { x: SW.ax * Math.sin(a), u: -SW.au * Math.cos(a), h, nx: nx / nl, nu: nu / nl };
  };
  const frame = { uC: SU.uC, uR: SU.uR, uU: SU.uU, uT: SU.uT, uFade: SU.uFade, uLat: SU.uLat, uAir: SU.uAir, uLand: SU.uLand, uTime: time, uLqTex: { value: tex } };
  const report = {};
  {   // spray sheets
    const n = Fm.plumes.length, quad = new THREE.PlaneGeometry(1, 1), g = new THREE.InstancedBufferGeometry();
    g.index = quad.index; g.setAttribute('position', quad.attributes.position);
    const a1 = new Float32Array(n * 4), a2 = new Float32Array(n * 4);
    Fm.plumes.forEach(([phi, h, lean], i) => {
      const c = crest(phi);
      a1.set([c.x + c.nx * 0.05, c.h - 0.03, c.u + c.nu * 0.05, h], i * 4);
      a2.set([lean, rnd(), phi < 0 ? -1 : 1, 0], i * 4);
    });
    g.setAttribute('aPl', new THREE.InstancedBufferAttribute(a1, 4)); g.setAttribute('aPl2', new THREE.InstancedBufferAttribute(a2, 4)); g.instanceCount = n;
    const mat = new THREE.ShaderMaterial({ uniforms: frame, transparent: true, depthWrite: false, side: THREE.DoubleSide,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
      vertexShader: /* glsl */ `
attribute vec4 aPl, aPl2;   // place on the crest (x, h, u in the character's frame), height | lean, phase, side, -
uniform vec3 uC, uR, uU, uT; uniform float uTime, uFade, uLat, uAir, uLand;
varying vec2 vUv; varying float vA, vSeed;
void main() {
  float side = aPl2.z;
  float pile = 1.0 + clamp(side * uLat * 0.12, -0.5, 0.8);
  float k = uFade * pile * (1.0 - 0.7 * uAir) * (1.0 + uLand * 0.9);
  float pulse = 0.82 + 0.22 * sin(uTime * 3.1 + aPl2.y * 6.28) + 0.1 * sin(uTime * 7.3 + aPl2.y * 17.0);
  float H = aPl.w * k * pulse;
  vec3 base = uC + uR * aPl.x + uU * aPl.y + uT * aPl.z;
  vec3 camR = normalize(vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]));
  float y = position.y + 0.5;
  vec3 w = base + camR * (position.x * H * 0.85 * (0.4 + 0.6 * y) + aPl2.x * 0.4 * y * y * H) + uU * (y * H);
  vUv = vec2(position.x * 2.0, y); vA = k; vSeed = aPl2.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}`,
      fragmentShader: /* glsl */ `
uniform sampler2D uLqTex; uniform float uTime;
varying vec2 vUv; varying float vA, vSeed;
void main() {
  float x = vUv.x, y = vUv.y;
  float ax = abs(x);
  float body = 1.0 - smoothstep(0.45, 1.0, ax);
  // streaks rising and fanning out, broken where the texture is low (blue shows through)
  float st = texture2D(uLqTex, vec2(x / (y + 0.35) * 0.35 + vSeed * 3.7, y * 0.3 - uTime * 0.8)).b;
  float st2 = texture2D(uLqTex, vec2(x / (y + 0.35) * 0.8 + vSeed * 1.3, y * 0.55 - uTime * 1.3) + 0.5).b;
  float streak = smoothstep(0.42, 0.78, st * 0.6 + st2 * 0.6);
  float top = 1.0 - smoothstep(0.4, 1.0, y);
  float a = body * (0.15 + 0.85 * streak) * (0.25 + 0.75 * top) * smoothstep(0.0, 0.12, y);
  // droplets breaking off the top
  vec2 dq = vec2(x * 6.0 + vSeed * 9.0, y * 8.0 - uTime * 2.6), dc = floor(dq);
  float dh = fract(sin(dot(dc, vec2(12.9898, 78.233))) * 43758.5453);
  float drop = step(0.8, dh) * (1.0 - smoothstep(0.1, 0.28, length(fract(dq) - 0.5))) * smoothstep(0.3, 0.75, y) * (1.0 - smoothstep(0.75, 1.0, ax));
  a = max(a * ${f3(Fm.plumeAlpha)}, drop * 0.7) * vA;
  vec3 col = mix(vec3(0.74, 0.9, 1.0), vec3(1.0), clamp(streak * 0.75 + drop, 0.0, 1.0));
  gl_FragColor = vec4(col * a, a);
}` });
    const mesh = new THREE.Mesh(g, mat); mesh.name = 'lqSpraySheets'; mesh.frustumCulled = false; mesh.renderOrder = 7;
    scene.add(mesh);
    report.sheets = { count: n, drawCalls: 1, triangles: n * 2 };
  }
  {   // clear bubbles on the waterline
    const list = [];
    for (const [phi0, count] of Fm.bubbles) for (let i = 0; i < count; i++) {
      const phi = phi0 + (rnd() - 0.5) * 9, c = crest(phi), r = Fm.bubbleR[0] + (Fm.bubbleR[1] - Fm.bubbleR[0]) * rnd() ** 1.6;
      const out = 0.02 + rnd() * 0.05;
      list.push([c.x + c.nx * out, c.h - r * 0.35 + rnd() * 0.02, c.u + c.nu * out, r]);
    }
    const n = list.length, sphere = new THREE.SphereGeometry(1, 14, 10), g = new THREE.InstancedBufferGeometry();
    g.index = sphere.index; g.setAttribute('position', sphere.attributes.position); g.setAttribute('normal', sphere.attributes.normal);
    const inst = new Float32Array(n * 4); list.forEach((b, i) => inst.set(b, i * 4));
    g.setAttribute('inst', new THREE.InstancedBufferAttribute(inst, 4)); g.instanceCount = n;
    const mat = new THREE.ShaderMaterial({ uniforms: frame, transparent: true, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
      vertexShader: /* glsl */ `
attribute vec4 inst; uniform vec3 uC, uR, uU, uT; uniform float uTime, uFade, uAir;
varying vec3 vN, vV; varying float vSeed, vA;
void main() {
  vSeed = fract(inst.x * 7.1 + inst.z * 3.3);
  vec3 c = uC + uR * inst.x + uU * (inst.y + 0.012 * sin(uTime * 4.0 + vSeed * 30.0)) + uT * inst.z;
  vec3 w = c + (uR * position.x + uU * position.y + uT * position.z) * inst.w * (1.0 + 0.04 * sin(uTime * 6.0 + vSeed * 9.0));
  vN = normalize(uR * normal.x + uU * normal.y + uT * normal.z); vV = normalize(cameraPosition - w);
  vA = uFade * (1.0 - 0.6 * uAir);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}`,
      fragmentShader: /* glsl */ `
uniform float uTime; varying vec3 vN, vV; varying float vSeed, vA;
void main() {
  float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  float rim = pow(f, 2.5), body = 0.05 + 0.08 * pow(f, 1.5);
  vec3 film = 0.6 + 0.4 * cos(6.2832 * (f * 1.3 + vN.y * 0.4 + vec3(0.0, 0.33, 0.67) + uTime * 0.05 + vSeed));
  vec3 col = vec3(0.85, 0.95, 1.0) * body + mix(vec3(1.0), film, 0.5) * rim * 0.85;
  float spec = pow(max(dot(reflect(-normalize(vec3(-0.45, 0.6, 0.65)), normalize(vN)), vV), 0.0), 40.0);
  float a = clamp(body + rim * 0.75 + spec, 0.0, 1.0) * vA;
  gl_FragColor = vec4((col + vec3(1.0) * spec) * vA, a);
}` });
    const mesh = new THREE.Mesh(g, mat); mesh.name = 'lqWaterlineBubbles'; mesh.frustumCulled = false; mesh.renderOrder = 7;
    scene.add(mesh);
    report.bubbles = { count: n, drawCalls: 1, triangles: n * sphere.index.count / 3 };
  }
  const meshes = ['lqSpraySheets', 'lqWaterlineBubbles'].map((nm) => scene.getObjectByName(nm));
  updaters.push(() => { for (const m of meshes) m.visible = swell.visible; });   // with the swell
  return report;
}
function translucentSplash({ scene }) {
  const m = scene.getObjectByName('heroSplash');
  if (!m || !m.material.fragmentShader.includes('gl_FragColor = vec4(col * a, a);')) return null;
  m.material.fragmentShader = m.material.fragmentShader.replace('gl_FragColor = vec4(col * a, a);',
    `a *= ${f3(LIQUID.foam.splash)}; col = mix(col, ${v3('#bfeeff')}, 0.25); gl_FragColor = vec4(col * a, a);   // ?s3=liquid: translucent spray`);
  m.material.needsUpdate = true;
  return { alpha: LIQUID.foam.splash };
}
function warmGlow({ scene }) {
  const g = scene.getObjectByName('heroGlow');
  if (!g || !g.material.fragmentShader.includes('vec3(1.0, 0.99, 0.96) * core * uCore')) return null;
  g.material.fragmentShader = g.material.fragmentShader
    .replace('vec3(1.0, 0.99, 0.96) * core * uCore', `${v3('#fff1d6')} * core * uCore`)
    .replace('vec3(0.82, 0.93, 1.0) * halo * uHalo', `${v3('#ffd9a6')} * halo * uHalo`);
  g.material.needsUpdate = true;
  return true;
}

// a private random sequence (never the game's seeded Math.random)
function mulberryLq(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
