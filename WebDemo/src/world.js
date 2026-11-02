// Shared world maths for the Bubble Wash browser demo, ported from the Unity project
// (WaveField.cs / BubbleWashCommon.hlsl, LevelLayout.cs, BubbleRunner.cs). The same water height is
// used by the GPU (water mesh) and the CPU (the mascot floats on it), so they always agree.
//
// three.js is right-handed and Unity left-handed; the scenes look identical with Unity's X mirrored
// (as glTFast does on import). +Z is the travel direction; screen-left is +X when looking along +Z.
// Heights here are in track coordinates (x sideways, u along the run): track.js bends them onto the
// 3D path. On the straight part in front of the castle, track coordinates are world x and z.

export const WATER = 0;
export const AXIS_H = 1.5;          // drum axis above the water
export const LANE = 0.7;            // lane spacing (three lanes on the approved narrow slide)
export const LAYOUT_LANE = 0.85;    // lane spacing of the Unity layout's coin and gem positions
export const FLOAT_H = 0.34;        // body centre above the water
export const BODY_R = 0.4;
export const CRUISE = 7;            // m/s
export const JUMP_V = 6.2;
export const GRAVITY = 17;
// The approved Screen 3 slide is narrow: at the mascot it is only about 1.6 mascots wide, with the
// brushes, gold machinery and bubbles close beside it (the Unity layout's 2 m half-width left them off
// screen). 2.2 m keeps three lanes playable.
export const SLIDE = { half: 1.1, moat: -0.6, crown: 0.1 };

// The raised water slide in front of the castle runs downhill, climbs a crest and drops into the
// portal (approved Screen 3: "a raised water slide that rises into the portal"). The crest stays
// low enough that the slide is still seen all the way into the portal from the Tap to Start view.
// Keyframes (z, height above the crown); smoothstep between them, flat at each key.
export const HILLS = [[-16.7, 0], [-11.8, -0.5], [-5.6, 0.36], [-1.0, 0]];
// Inside the drum the tube itself climbs, crests, drops and banks (track.js); the water on top of
// that rolls in gentle standing swells.
export const SWELL = { amp: 0.1, wavelength: 7.4 };

export const clamp01 = (v) => Math.min(1, Math.max(0, v));
export const smoothstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const laneX = (lane) => (1 - lane) * LANE;   // lane 0 = screen-left = +X

export function hills(z) {
  if (z <= HILLS[0][0] || z >= HILLS[HILLS.length - 1][0]) return 0;
  for (let i = 0; i < HILLS.length - 1; i++) {
    const [z0, h0] = HILLS[i], [z1, h1] = HILLS[i + 1];
    if (z < z1) return h0 + (h1 - h0) * smoothstep(z0, z1, z);
  }
  return 0;
}

/** Everything except the moving waves: raised slide with crown and hills, moat, drum swells, wall curl. */
export function baseHeight(L, x, z) {
  const before = clamp01((L.tunnelStart - z) * 0.5);
  const ax = Math.abs(x);
  const crown = SLIDE.crown * clamp01(1 - (ax * ax) / (SLIDE.half * SLIDE.half));
  const edge = smoothstep(SLIDE.half, SLIDE.half + 0.55, ax);
  const slide = before * ((crown + hills(z)) * (1 - edge) + SLIDE.moat * edge);
  const inside = clamp01((z - L.tunnelStart) * 0.5) * clamp01((L.tunnelEnd - z) * 0.5);
  const swell = inside * SWELL.amp * Math.sin(((z - L.tunnelStart) * 2 * Math.PI) / SWELL.wavelength);
  const half = Math.sqrt(Math.max(0.01, L.tunnelRadius * L.tunnelRadius - AXIS_H * AXIS_H));
  const u = clamp01((ax - (half - 0.45)) / 0.45);
  return WATER + slide + swell + inside * 0.45 * u * u;
}

export function waves(x, z, t) {
  return 0.06 * Math.sin(z * 0.9 - t * 3.1 + x * 0.35)
    + 0.035 * Math.sin(z * 2.3 - t * 5.3 - x * 1.1 + 1.7)
    + 0.02 * Math.sin(z * 4.7 - t * 7.9 + x * 2.3 + 0.4)
    + 0.012 * Math.sin(x * 6.0 + t * 4.0 + z * 0.5);
}

export const surface = (L, x, z, t) => baseHeight(L, x, z) + waves(x, z, t);

/** Slope of the ride (dy/dz) at the centre of a lane, without the small waves. */
export const slopeAt = (L, x, z) => (baseHeight(L, x, z + 0.25) - baseHeight(L, x, z - 0.25)) / 0.5;

// GLSL version of the same height function (kept in step with the JS above).
export const HEIGHT_GLSL = /* glsl */ `
uniform vec4 uTunnel;   // start z, end z, radius, axis height
uniform float uTime;
float bwSmooth(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
float bwHills(float z) {
  if (z <= ${HILLS[0][0].toFixed(3)} || z >= ${HILLS[3][0].toFixed(3)}) return 0.0;
  if (z < ${HILLS[1][0].toFixed(3)}) return mix(${HILLS[0][1].toFixed(3)}, ${HILLS[1][1].toFixed(3)}, bwSmooth(${HILLS[0][0].toFixed(3)}, ${HILLS[1][0].toFixed(3)}, z));
  if (z < ${HILLS[2][0].toFixed(3)}) return mix(${HILLS[1][1].toFixed(3)}, ${HILLS[2][1].toFixed(3)}, bwSmooth(${HILLS[1][0].toFixed(3)}, ${HILLS[2][0].toFixed(3)}, z));
  return mix(${HILLS[2][1].toFixed(3)}, ${HILLS[3][1].toFixed(3)}, bwSmooth(${HILLS[2][0].toFixed(3)}, ${HILLS[3][0].toFixed(3)}, z));
}
float bwBase(vec2 xz) {
  float before = clamp((uTunnel.x - xz.y) * 0.5, 0.0, 1.0);
  float ax = abs(xz.x);
  float crown = ${SLIDE.crown.toFixed(3)} * clamp(1.0 - ax * ax / ${(SLIDE.half * SLIDE.half).toFixed(3)}, 0.0, 1.0);
  float edge = bwSmooth(${SLIDE.half.toFixed(3)}, ${(SLIDE.half + 0.55).toFixed(3)}, ax);
  float slide = before * mix(crown + bwHills(xz.y), ${SLIDE.moat.toFixed(3)}, edge);
  float inside = clamp((xz.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xz.y) * 0.5, 0.0, 1.0);
  float swell = inside * ${SWELL.amp.toFixed(3)} * sin((xz.y - uTunnel.x) * ${((2 * Math.PI) / SWELL.wavelength).toFixed(5)});
  float half_ = sqrt(max(0.01, uTunnel.z * uTunnel.z - uTunnel.w * uTunnel.w));
  float u = clamp((ax - (half_ - 0.45)) / 0.45, 0.0, 1.0);
  return slide + swell + inside * 0.45 * u * u;
}
float bwWaves(vec2 xz, float t) {
  return 0.06 * sin(xz.y * 0.9 - t * 3.1 + xz.x * 0.35)
       + 0.035 * sin(xz.y * 2.3 - t * 5.3 - xz.x * 1.1 + 1.7)
       + 0.02 * sin(xz.y * 4.7 - t * 7.9 + xz.x * 2.3 + 0.4)
       + 0.012 * sin(xz.x * 6.0 + t * 4.0 + xz.y * 0.5);
}
float bwHeight(vec2 xz, float t) { return bwBase(xz) + bwWaves(xz, t); }
`;
