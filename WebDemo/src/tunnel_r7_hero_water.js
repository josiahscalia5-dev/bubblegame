// ?s3=hero (test only): the water and foam round the character in Round 7's Screen 4 hero scene. Owned by the Water & VFX
// specialist (.claude/agents/water-vfx-engineer.md); called last-but-one by buildHero (tunnel_r7_hero.js). Nothing here runs
// without the switch.
//
// Target (the ORIGINAL APPROVED Screen 4, the user's correction of 4 November 2026: "the pink character is swimming through
// BRIGHT BLUE / TURQUOISE WATER ... not sitting on a white blanket of foam", and the lead's: the water visibly round and under
// the character, climbing its sides): the character's lower body sits inside a raised body of saturated, glossy blue water
// that climbs both sides of the body to about 73% of the screen height and dips to about 81% in front of it, in rounded
// mounds; white only as accents on top of the water (broken crests, flecks, splashes and spray), the brightest splash just
// right of the character.
//
//   1. heroSwell: one mesh (one draw call, 13.4k triangles), a horseshoe-shaped swell of water round the front and sides of
//      the character, built in the character's frame (it rides with it, bobs and dips with it). Its crest heights were solved
//      from the hero camera at the hero moment (2.85 s) so the silhouette lands where wanted; then rounded mounds on top.
//      Shaded as water: lit-through turquoise near the crest (a little see-through, so the body below reads as under water),
//      azure down the face, electric blue in the ripples and the shaded sides, a cyan sheen, glossy highlights and sky
//      reflections, pale streaks, bubbles caught in the water, white flecks and a white crest broken into short pieces. It
//      reacts to movement: the side the character swerves to piles up, the far ends drag behind, it slumps while the
//      character is high in a jump and is thrown up and out on landing.
//   2. heroSplash: white droplets, streaks and soft puffs of spray thrown up from the crest either side of the character (one
//      instanced draw call), most just right of it, more on the side it swerves to and on landings, fewer in the air.
//   3. the water floor round the character (injected into the slide's and the drum's water sheets, after the hero floor):
//      turquoise and azure water with flow streaks and flecks, instead of the pale whirlpool rings, near the character only.
//   4. round7's white foam lumps (r7FoamBank), the Screen 3 opening's foam round the mascot (mascotFoam) - the "white
//      blanket" - and round7's white specks (r7Spray, replaced by heroSplash) are hidden while the swell is up.
// Colours are written as sRGB hex (as seen on screen) and converted to the renderer's linear light by THREE.Color.
// Private random numbers only (the game's seeded Math.random is untouched).
import * as THREE from 'three';
import { NOISE } from './shaders.js';
import { SWIM_ON, SWIM } from './tunnel_s4_swim.js';   // ?s3=intunnel,swim: the contact collar (nothing changes without it)

export const HERO_WATER = {
  // where the swell rises out of the water, in metres from the drum's mouth (the hero moment is at -3.27)
  fade: [-7.5, -5.0],
  hide: ['r7FoamBank', 'mascotFoam', 'r7Spray'],
  swell: {
    // the crest line: an ellipse arc round the character (ax sideways, au toward the camera, metres), phi from -phiMax
    // (screen right) to +phiMax (screen left); the cross-section: out (the face toward the camera), inner (toward the
    // character), foot (below the water), skirt (a straight drop under the outer foot, hidden by the water)
    ax: 0.95, au: 0.55, phiMax: 108, cols: 216, rows: 30, out: 0.3, inner: 0.22, foot: -0.32, skirt: -0.9,
    // crest heights (metres above the water) every 5 degrees from -110 to 110, solved from the hero camera at the hero moment
    // (2.85 s) so the water wraps the character: it climbs both sides of the body to about 73% of the screen height (at 25%
    // and 75% across), dips to about 81% in front of it (its lower part under the water) and settles to 76-78% at the edges
    line: [0.376, 0.386, 0.397, 0.41, 0.425, 0.44, 0.457, 0.475, 0.494, 0.514, 0.535, 0.556, 0.577, 0.608, 0.645, 0.684, 0.72,
      0.712, 0.632, 0.548, 0.478, 0.471, 0.474, 0.513, 0.562, 0.645, 0.7, 0.733, 0.697, 0.659, 0.62, 0.583, 0.555, 0.533, 0.511,
      0.49, 0.471, 0.452, 0.434, 0.417, 0.402, 0.389, 0.377, 0.367, 0.358],
    dip: 0.015,
    // the rounded mounds: [phi (degrees), height (m), half width (degrees)]; at the hero moment they sit at 5, 17, 32, 50,
    // 60, 78 and 92% of the screen width
    mounds: [[60, 0.025, 7], [35.4, 0.03, 8], [17, 0.03, 7], [-1.2, 0.035, 6], [-11, 0.025, 5], [-30.5, 0.03, 7], [-51.9, 0.03, 8]],
    wave: 0.016,        // small waves running out along the crest (m)
    flow: 1.0,          // how fast the water's pattern runs down the face and out along the bank
    swerve: 0.05,       // the side it swerves to piles up by this much per m/s (clamped)
    air: 0.55,          // how much it slumps while the character is high in a jump
    land: 0.12,         // how much it is thrown up on landing
    clear: 0.86,
    azure: 0.42,        // how much of the face is azure rather than electric blue        // how opaque the water is at the crest (it is solid lower down)
  },
  // the water's colours (sRGB, as on screen)
  colours: { crest: '#8fe3ff', turq: '#2fb4f5', azure: '#4bbbf7', electric: '#1e8ff0', deep: '#0f6fe0', pale: '#aad6f8',
    white: '#f4fbff', sky: '#d4f0ff' },
  white: { crest: 0.95, cap: 0.07, lace: 0.0, flecks: 0.85, lines: 0.55, gloss: 1.0, rim: 0.45 },
  // the splash droplets (see heroSplash): zones [share, phi range (degrees), up speed (m/s), outward speed, size (m)]
  // (and the share of soft puffs, puffSize times bigger); flecks: the share of round droplets; trail: the streaks' length (s)
  splash: { count: 560, flecks: 0.4, puffSize: 3.2, trail: 0.03, rest: [0.1, 0.9],
    zones: [[0.42, [-36, -16], [1.6, 3.4], [0.2, 0.8], [0.012, 0.026], 0.14], [0.3, [14, 36], [1.4, 3.0], [0.2, 0.7], [0.011, 0.024], 0.1],
      [0.28, [-60, 60], [0.8, 2.0], [0.1, 0.5], [0.009, 0.018], 0.0]] },
  // the water floor round the character: [inner, outer] radius (m) of the blend, how much
  floor: { radius: [1.15, 2.1], ahead: 1.6, amount: 0.9 },
  debug: false,   // true: the swell in flat green (to measure its silhouette)
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.heroWater;
  if (tune) for (const k of Object.keys(tune)) HERO_WATER[k] = (tune[k] && typeof tune[k] === 'object' && !Array.isArray(tune[k]) && HERO_WATER[k]) ? { ...HERO_WATER[k], ...tune[k] } : tune[k];
}

const f3 = (x) => (+x).toFixed(4);
const lin = (hex) => new THREE.Color(hex);   // sRGB hex -> the renderer's linear light
const D2R = Math.PI / 180;

export function buildHeroWater({ scene, TR, L, W, mascot, updaters, time, waterSheets, drumSheet, fogAnchor }) {
  const TS = L.tunnelStart, TE = L.tunnelEnd, report = {};
  const half = Math.sqrt(Math.max(0.01, L.tunnelRadius * L.tunnelRadius - W.AXIS_H * W.AXIS_H));
  // ?s3=intunnel,swim: the swell as a tight contact collar round her body (tunnel_s4_swim.js SWIM.collar), set here, after
  // every module's settings and before the swell and the layers that follow its crest (splash bank, plumes) are built
  if (SWIM_ON) { const Cc = SWIM.collar; Object.assign(HERO_WATER.swell, { ax: Cc.ax, au: Cc.au, out: Cc.out, inner: Cc.inner, dip: Cc.dip,
    line: Cc.line.map((h) => +(h + (Cc.lift || 0)).toFixed(4)), mounds: Cc.mounds.map((m) => m.slice()), swerve: Cc.swerve, air: Cc.air, land: Cc.land }); }
  // the character's frame at the water under it and its movement, worked out once a frame (first) for everything below
  const S = { k: 0, F: { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() }, C: new THREE.Vector3(),
    lagX: mascot.x || 0, base: 0, lat: 0, air: 0, land: 0, speed: mascot.visSpeed || 0, xMax: 3, wasAir: false };   // (visSpeed: ?s3=intunnel only)
  updaters.push((dt) => {
    dt = Math.min(dt || 0, 0.1);
    const z = mascot.z;
    S.k = THREE.MathUtils.smoothstep(z, TS + HERO_WATER.fade[0], TS + HERO_WATER.fade[1]);
    const e = (tau) => 1 - Math.exp(-dt / tau);
    S.lagX += (mascot.x - S.lagX) * e(SWIM_ON ? SWIM.collar.lag : 0.07);
    S.lat += ((mascot.xv || 0) - S.lat) * e(0.12);
    S.speed += ((mascot.visSpeed ?? (mascot.speed || 0)) - S.speed) * e(0.3);   // (?s3=intunnel: visSpeed at the start; undefined elsewhere)
    const ride = W.baseHeight(L, S.lagX, z);
    const lift = Math.max(0, mascot.yAbs - ride - W.FLOAT_H);
    const air = mascot.air ? THREE.MathUtils.smoothstep(lift, 0.08, 0.6) : 0;
    S.air += (air - S.air) * e(0.08);
    if (S.wasAir && !mascot.air) S.land = 1;
    S.wasAir = !!mascot.air; S.land = Math.max(0, S.land - dt * 2.0);
    // the swell sits on the water under the character and sinks with it when it dips after a landing (so it never swallows
    // it); in the air it stays on the water
    const dip = mascot.air ? 0 : Math.min(0, mascot.yAbs - W.FLOAT_H - ride);
    // (?s3=...,swim: the collar sits on the water surface under her, not on her bob, so she bobs in it)
    if (SWIM_ON) S.base += (W.surface(L, S.lagX, z, time.value) - S.base) * e(0.05);
    else S.base += (ride + dip - S.base) * e(0.05);
    TR.frame(z, S.F); TR.map(S.lagX, S.base, z, S.C);
    const inside = THREE.MathUtils.clamp((z - TS) * 0.5, 0, 1) * THREE.MathUtils.clamp((TE - z) * 0.5, 0, 1);
    S.xMax = 3 + (half - 0.22 - 3) * inside;   // inside the drum: off the walls
  });
  report.swell = heroSwell({ scene, updaters, time, S });
  report.splash = heroSplash({ scene, updaters, time, S });
  report.floor = heroFloor({ waterSheets, drumSheet, fogAnchor, updaters, S });
  // the white blanket: round7's foam lumps and the opening's foam round the mascot, hidden while the swell is up
  const hidden = HERO_WATER.hide.map((n) => scene.getObjectByName(n)).filter(Boolean);
  updaters.push(() => { if (S.k > 0.05) for (const o of hidden) o.visible = false; });
  report.hidden = hidden.map((o) => o.name);
  return report;
}

// ---------------------------------------------------------------- 1. the swell of water round the character
function crestAt(P, phi) {
  const i = THREE.MathUtils.clamp((phi + 110) / 5, 0, P.line.length - 1.0001), i0 = Math.floor(i);
  let h = P.line[i0] + (P.line[i0 + 1] - P.line[i0]) * (i - i0) - P.dip;
  let m = 0;
  for (const [c, a, w] of P.mounds) { const t = (phi - c) / w; if (Math.abs(t) < 1) m += a * (1 - t * t) ** 2; }
  const end = THREE.MathUtils.clamp((Math.abs(phi) - 96) / 12, 0, 1);
  h *= 1 - end * end * 0.85;   // the ends sink back into the water
  return [h + m, m];
}
function swellGeometry(P) {
  const cols = P.cols, rows = P.rows, pos = [], surf = [], idx = [];
  // arc length along the crest line, from the front (phi 0)
  const C = (phi) => [P.ax * Math.sin(phi * D2R), -P.au * Math.cos(phi * D2R)];
  const sOf = (phi) => { let s = 0, [x0, u0] = C(0); const n = 60; for (let i = 1; i <= n; i++) { const [x1, u1] = C(phi * i / n); s += Math.hypot(x1 - x0, u1 - u0); x0 = x1; u0 = u1; } return phi < 0 ? -s : s; };
  const R = rows + 2;   // the skirt row, the profile rows
  for (let i = 0; i <= cols; i++) {
    const phi = -P.phiMax + 2 * P.phiMax * i / cols, a = phi * D2R, [cx, cu] = C(phi);
    let nx = Math.sin(a) / P.ax, nu = -Math.cos(a) / P.au; const nl = Math.hypot(nx, nu); nx /= nl; nu /= nl;
    // the taller water beside the body is broader too (a mass of water, not a fin)
    const [H, m] = crestAt(P, phi), sc = Math.min(Math.max(H / 0.45, 1), 1.6) ** 0.8, wo = P.out * (1 + 0.4 * m / 0.05) * sc, wi = P.inner * sc, s = sOf(phi);
    for (let j = -1; j <= rows; j++) {
      const th = Math.PI * Math.max(j, 0) / rows;
      const o = (th <= Math.PI / 2 ? wo : wi) * Math.cos(th), h = j < 0 ? P.skirt : P.foot + (H - P.foot) * Math.sin(th);
      pos.push(cx + nx * o, h, cu + nu * o);
      surf.push(s, Math.max(j, 0) / rows, H - h, H);
    }
  }
  for (let i = 0; i < cols; i++) for (let j = 0; j < R - 1; j++) {
    const a = i * R + j, b = a + R;
    idx.push(a, b, a + 1, a + 1, b, b + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('aSurf', new THREE.Float32BufferAttribute(surf, 4));
  g.setIndex(idx); g.computeVertexNormals();
  // the crest's normal must point up (out of the water); if not, the winding is turned round
  const top = (Math.floor(cols / 2) * R + Math.floor(R / 2) + 1) * 3;
  if (g.attributes.normal.array[top + 1] < 0) {
    const ix = g.index.array; for (let k = 0; k < ix.length; k += 3) { const t = ix[k + 1]; ix[k + 1] = ix[k + 2]; ix[k + 2] = t; }
    g.computeVertexNormals();
  }
  return g;
}
function heroSwell({ scene, updaters, time, S }) {
  const P = HERO_WATER.swell, K = HERO_WATER.colours, Wt = HERO_WATER.white;
  const g = swellGeometry(P);
  const u = { uTime: time, uFade: { value: 0 }, uC: { value: new THREE.Vector3() }, uR: { value: new THREE.Vector3(1, 0, 0) }, uU: { value: new THREE.Vector3(0, 1, 0) },
    uT: { value: new THREE.Vector3(0, 0, 1) }, uLat: { value: 0 }, uAir: { value: 0 }, uLand: { value: 0 }, uPX: { value: 0 }, uXMax: { value: 3 }, uFlow: { value: P.flow } };
  for (const [k, v] of Object.entries(K)) u['uK' + k] = { value: lin(v) };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: swellVertex(P), fragmentShader: swellFragment(Wt), transparent: true, depthWrite: true });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'heroSwell'; mesh.frustumCulled = false; mesh.renderOrder = 5; mesh.visible = false;
  scene.add(mesh);
  updaters.push(() => {
    mesh.visible = S.k > 0.01; if (!mesh.visible) return;
    u.uFade.value = S.k; u.uC.value.copy(S.C); u.uR.value.copy(S.F.R); u.uU.value.copy(S.F.U); u.uT.value.copy(S.F.T);
    u.uLat.value = THREE.MathUtils.clamp(S.lat, -6, 6); u.uAir.value = S.air; u.uLand.value = S.land; u.uPX.value = S.lagX; u.uXMax.value = S.xMax;
    u.uFlow.value = P.flow * (0.6 + 0.4 * THREE.MathUtils.clamp(S.speed / 7, 0, 1.5));
  });
  return { drawCalls: 1, triangles: g.index.count / 3 };
}
function swellVertex(P) {
  return /* glsl */ `
attribute vec4 aSurf;   // s (m along the crest from the front), t (0 outer foot .. 1 inner foot), depth below the crest (m), crest height (m)
uniform vec3 uC, uR, uU, uT; uniform float uTime, uFade, uLat, uAir, uLand, uPX, uXMax;
varying vec3 vW, vN; varying vec4 vS;
void main() {
  vec3 p = position;   // x (screen-left), height above the water, u (along the path) in the character's frame
  float s = aSurf.x, H = aSurf.w;
  float top = clamp(p.y / max(H, 0.05), 0.0, 1.0); top *= top;
  // waves running out along the crest from the front, and a slower roll
  float run = 0.6 * sin(abs(s) * 7.0 - uTime * 4.0) + 0.4 * sin(s * 13.0 + uTime * 2.3 + 1.3);
  float side = p.x >= 0.0 ? 1.0 : -1.0;
  float pile = 1.0 + clamp(side * uLat * ${f3(P.swerve)}, -0.3, 0.3) * smoothstep(0.1, 0.8, abs(p.x));
  float lift = uFade * pile * (1.0 - uAir * ${f3(P.air)}) * (1.0 + uLand * ${f3(P.land)});
  if (p.y > 0.0) p.y = p.y * lift + run * ${f3(P.wave)} * top * uFade;
  // landing: thrown outward; swerving: the far ends drag behind
  float r = length(p.xz); p.xz += (r > 1e-3 ? p.xz / r : vec2(0.0)) * uLand * 0.12 * top;
  p.x -= uLat * 0.025 * smoothstep(0.3, 1.0, abs(p.x));
  float X = uPX + p.x; X = sign(X) * min(abs(X), uXMax); p.x = X - uPX;   // inside the drum: off the walls
  vec3 w = uC + uR * p.x + uU * p.y + uT * p.z;
  vW = w; vN = normalize(uR * normal.x + uU * normal.y + uT * normal.z);
  vS = vec4(s, aSurf.y, max(aSurf.z * max(lift, 0.3) - run * ${f3(P.wave)} * top * uFade, 0.0), H);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`;
}
function swellFragment(Wt) {
  if (HERO_WATER.debug) return 'void main() { gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0); }';
  return /* glsl */ `
${NOISE}
uniform float uTime, uFade, uFlow, uLand;
uniform vec3 uR, uU, uT;
uniform vec3 uKcrest, uKturq, uKazure, uKelectric, uKdeep, uKpale, uKwhite, uKsky;
varying vec3 vW, vN; varying vec4 vS;
void main() {
  // as: distance along the crest from the front, so the pattern flows outward on both sides and meets without a seam
  float s = vS.x, as = abs(s), d = vS.z, fl = uTime * uFlow;
  vec3 V = normalize(cameraPosition - vW), N = normalize(vN);
  float ndv0 = abs(dot(N, V));
  // the water's moving pattern: ripples running down the face toward the camera and out along the bank
  vec2 q = vec2(as * 3.2 - fl * 0.35, d * 7.0 - fl * 1.3);
  float n1 = bwFbm(q), n2 = bwFbm(q * vec2(2.1, 1.7) + 7.1), n3 = bwNoise(vec2(as * 1.3, d * 2.0) - fl * 0.2);
  // glossy ripples: the normal tilted by the pattern
  vec3 along = normalize(cross(uU, N) + 1e-4), down = normalize(cross(N, along));
  float n4 = bwNoise(vec2(as * 14.0 - fl * 0.9, d * 18.0 - fl * 2.6)), n5 = bwNoise(vec2(as * 17.0 + 4.0 - fl * 0.8, d * 15.0 - fl * 2.2));
  vec3 Nr = normalize(N + along * ((n1 - 0.5) * 0.7 + (n4 - 0.5) * 0.35) + down * ((n2 - 0.5) * 0.9 + (n5 - 0.5) * 0.35));
  float ndv = clamp(dot(Nr, V), 0.0, 1.0);
  // the mounds lit from the whirlpool's light ahead and above, a little from the left
  float key = clamp(dot(Nr, normalize(uU * 0.8 + uT * 0.45 + uR * 0.3)) * 0.5 + 0.5, 0.0, 1.0);
  // the body of the water: bright lit-through turquoise near the crest, azure down the face, electric blue in the ripple
  // troughs and the mounds' shaded sides, deep blue low down
  float rip = smoothstep(0.3, 0.7, n1 + (n3 - 0.5) * 0.4);
  vec3 col = mix(uKelectric, uKazure, clamp(rip * 0.8 + (key - 0.5) * 1.1 + ${f3(HERO_WATER.swell.azure)}, 0.0, 1.0));
  col = mix(col, uKturq, (1.0 - smoothstep(0.02, 0.14, d)) * 0.55);
  col = mix(col, uKdeep, smoothstep(0.45, 0.8, d) * (0.3 + 0.6 * (1.0 - rip)));
  // light through the thin crest (the whirlpool's glow behind it)
  col += uKcrest * (1.0 - smoothstep(0.0, 0.1, d)) * 0.14 * pow(1.0 - ndv, 1.5);
  // a cyan sheen on the lit side of every swell and ripple
  col += uKcrest * pow(key, 5.0) * 0.22;
  // soft brighter patches of light in the water
  col = mix(col, uKpale, smoothstep(0.62, 0.85, bwFbm(vec2(as * 2.2 - fl * 0.2, d * 4.0 - fl * 0.7) + 3.7)) * 0.3);
  // glossy: the pale sky in the ripples at grazing angles, the whirlpool's light reflected off the crest, and crisp
  // highlights from a light behind the camera, up and to the left (a white glint on every mound and ripple)
  vec3 Rv = reflect(-V, Nr);
  float toGlow = clamp(dot(Rv, normalize(uT * 0.9 + uU * 0.45)), 0.0, 1.0);
  float fres = pow(1.0 - ndv, 4.0);
  col = mix(col, uKsky, clamp(fres * mix(0.12, 0.3, smoothstep(0.04, 0.2, d)) + smoothstep(0.9, 0.99, toGlow) * 0.25, 0.0, 0.6));
  vec3 Hc = normalize(normalize(uU * 0.75 - uT * 0.35 + uR * 0.45) + V);
  float spec = pow(clamp(dot(Nr, Hc), 0.0, 1.0), 70.0) * smoothstep(0.35, 0.65, n2) * ${f3(Wt.gloss)} + pow(toGlow, 140.0) * smoothstep(0.4, 0.7, n2);
  // streaks of paler water swept out along the bank
  float st = bwFbm(vec2(as * 1.4 - fl * 0.7, d * 11.0 + n1 * 1.6));
  float streak = smoothstep(0.58, 0.76, st) * smoothstep(0.02, 0.07, d);
  col = mix(col, uKpale, streak * 0.6);
  // clear bubbles caught in the water: a pale rim, a white glint up and to the left
  vec2 bq = vec2(as * 11.0 - fl * 0.25, d * 11.0 - fl * 0.9), bi = floor(bq), bo = fract(bq) - 0.5 - (vec2(bwHash(bi + 3.3), bwHash(bi + 8.8)) - 0.5) * 0.3;
  float bh = bwHash(bi + 21.0), br = 0.16 + 0.22 * bwHash(bi + 4.4), bl = length(bo);
  float bub = step(0.78, bh) * smoothstep(0.03, 0.4, d);
  float bring = bub * exp(-pow((bl - br) / (0.05 * br + 0.012), 2.0));
  float bglint = bub * exp(-pow(length(bo - vec2(-0.45, 0.45) * br) / (0.18 * br), 2.0));
  col = mix(col, uKpale, bub * (1.0 - smoothstep(br * 0.8, br, bl)) * 0.25);
  col = mix(col, uKwhite, bring * 0.55);
  // a glassy rim on the crest and round every mound (the approved water's bright outlines)
  float rim = pow(1.0 - ndv0, 3.0) * (1.0 - smoothstep(0.0, 0.12, d)) * smoothstep(0.35, 0.7, bwNoise(vec2(as * 9.0 - fl * 0.7, uTime * 0.35) + 2.0));   // broken
  // white: a crest broken into short pieces, lacy foam patches just under it, flecks of spray in drifting bands down the
  // face (bigger and denser near the crest), the brightest streaks, the highlights
  float nc = bwNoise(vec2(as * 6.0 - fl * 0.5, uTime * 0.25)), nc2 = bwNoise(vec2(as * 13.0 - fl * 0.9, uTime * 0.4) + 5.0);
  float cw = 0.006 + ${f3(Wt.cap)} * nc * nc * nc + 0.008 * nc2;                       // the white cap's depth down the face (m)
  float crest = (1.0 - smoothstep(cw * 0.55, cw, d)) * smoothstep(0.42, 0.6, nc + 0.25 * nc2);
  vec2 lv = bwVoronoi(vec2(as * 30.0 - fl * 0.8, d * 34.0 - fl * 2.0));
  crest *= 1.0 - 0.75 * (1.0 - smoothstep(0.08, 0.3, lv.x)) * smoothstep(0.012, 0.03, d);   // bubbles in the foam (blue shows through)
  float lace = 0.0;
  float band = smoothstep(0.35, 0.75, bwFbm(vec2(as * 2.6 - fl * 0.5, d * 3.5 - fl * 1.2) + 11.0));
  float fleck = 0.0;
  for (int i = 0; i < 2; i++) {
    float sc = i == 0 ? 24.0 : 50.0;
    vec2 fc = vec2(as * sc - fl * 1.5, d * sc * 0.8 - fl * 3.5) + float(i) * 17.3, fi = floor(fc);
    float fh = bwHash(fi + 5.3), rr = i == 0 ? 0.26 : 0.34;
    float thr = (i == 0 ? 0.9 : 0.86) - 0.22 * band - 0.08 * (1.0 - smoothstep(0.02, 0.22, d));
    vec2 fo = (fract(fc) - 0.5 + (vec2(bwHash(fi + 1.7), bwHash(fi + 9.1)) - 0.5) * 0.4) * vec2(1.0, 0.8);   // a little drawn out down the face
    fleck = max(fleck, step(thr, fh) * (1.0 - smoothstep(rr * 0.4, rr, length(fo))));
  }
  fleck *= 1.0 - 0.3 * smoothstep(0.3, 0.65, d);
  float white = clamp(crest * ${f3(Wt.crest)} + lace * ${f3(Wt.lace)} + fleck * ${f3(Wt.flecks)} + streak * smoothstep(0.8, 0.9, st) * ${f3(Wt.lines)} + rim * ${f3(Wt.rim)} + spec + bglint, 0.0, 1.0);
  col = mix(col, uKwhite, white);
  // translucent near the top (what is behind shows through, tinted: the character's lower body reads lavender), solid lower
  float a = mix(${f3(HERO_WATER.swell.clear)}, 1.0, smoothstep(0.03, 0.2, d));
  a = max(a, white);
  gl_FragColor = vec4(col, a * step(0.001, uFade));
}
`;
}

// ---------------------------------------------------------------- 2. splashes and droplets thrown up from the crest
// Droplets fly in arcs from the crest beside the character and fall back, drawn as short streaks along their screen motion
// (white core, pale cyan edge); a quarter are round flecks. Zones: [share, phi range (degrees), up speed, outward speed,
// size (m)], most right of the character (the approved picture's brightest splash, at 71% across and 74% down), then left
// of it, then a few along the whole crest. Every droplet loops on its own beat (a private random sequence).
function heroSplash({ scene, updaters, time, S }) {
  const P = HERO_WATER.splash, SW = HERO_WATER.swell, n = P.count, rnd = mulberryHW(0x5f1a5), R = (a) => a[0] + rnd() * (a[1] - a[0]);
  const quad = new THREE.PlaneGeometry(1, 1), g = new THREE.InstancedBufferGeometry();
  g.index = quad.index; g.setAttribute('position', quad.attributes.position);
  const aBase = new Float32Array(n * 4), aVel = new Float32Array(n * 4), aLife = new Float32Array(n * 4);
  const tot = P.zones.reduce((t, z) => t + z[0], 0);
  for (let i = 0; i < n; i++) {
    let pick = rnd() * tot, zone = P.zones[0];
    for (const z of P.zones) { if (pick < z[0]) { zone = z; break; } pick -= z[0]; }
    const [, phiR, upR, outR, sizeR, puffs] = zone, phi = R(phiR), a = phi * D2R;
    const kr = rnd(), kind = kr < (puffs || 0) ? 2 : kr < (puffs || 0) + P.flecks ? 1 : 0;   // 0 streak, 1 round fleck, 2 soft puff
    const cx = SW.ax * Math.sin(a), cu = -SW.au * Math.cos(a), [H] = crestAt(SW, phi);
    let nx = Math.sin(a) / SW.ax, nu = -Math.cos(a) / SW.au; const nl = Math.hypot(nx, nu); nx /= nl; nu /= nl;
    // from just inside the crest (where the water hits the body), outward and up, a little sideways away from the body
    const back = R([0.0, 0.12]), up = R(upR) * (kind === 2 ? 0.55 : 1), out = R(outR), away = Math.sign(cx || 1) * R([0.1, 0.5]);
    aBase.set([cx - nx * back, H * R([0.7, 1.0]), cu - nu * back, R(sizeR) * (kind === 2 ? P.puffSize : 1)], i * 4);
    const fly = 2 * up / 9.0;
    aVel.set([nx * out + away, up, nu * out * 0.6 + R([-0.2, 0.3]), rnd()], i * 4);
    aLife.set([fly, fly * R(P.rest), kind, phi], i * 4);
  }
  g.setAttribute('aBase', new THREE.InstancedBufferAttribute(aBase, 4)); g.setAttribute('aVel', new THREE.InstancedBufferAttribute(aVel, 4));
  g.setAttribute('aLife', new THREE.InstancedBufferAttribute(aLife, 4)); g.instanceCount = n;
  const u = { uTime: time, uFade: { value: 0 }, uC: { value: new THREE.Vector3() }, uR: { value: new THREE.Vector3(1, 0, 0) }, uU: { value: new THREE.Vector3(0, 1, 0) },
    uT: { value: new THREE.Vector3(0, 0, 1) }, uLat: { value: 0 }, uAir: { value: 0 }, uLand: { value: 0 } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: SPLASH_VERTEX(SW), fragmentShader: SPLASH_FRAGMENT, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'heroSplash'; mesh.frustumCulled = false; mesh.renderOrder = 8; mesh.visible = false;
  scene.add(mesh);
  updaters.push(() => {
    mesh.visible = S.k > 0.01; if (!mesh.visible) return;
    u.uFade.value = S.k; u.uC.value.copy(S.C); u.uR.value.copy(S.F.R); u.uU.value.copy(S.F.U); u.uT.value.copy(S.F.T);
    u.uLat.value = THREE.MathUtils.clamp(S.lat, -6, 6); u.uAir.value = S.air; u.uLand.value = S.land;
  });
  return { droplets: n, drawCalls: 1, triangles: n * 2 };
}
const SPLASH_VERTEX = (SW) => /* glsl */ `
attribute vec4 aBase, aVel, aLife;   // start x, h, u, size | velocity sideways, up, along, phase | flight time, rest, fleck, phi
uniform vec3 uC, uR, uU, uT; uniform float uTime, uFade, uLat, uAir, uLand;
varying vec2 vP; varying float vA, vRound;
vec3 at(float t, vec3 v, float lift) {
  vec3 p = aBase.xyz; p.y *= lift;
  p += v * t; p.y -= 4.5 * t * t;
  return uC + uR * p.x + uU * p.y + uT * p.z;
}
void main() {
  float fly = aLife.x, cyc = fly + aLife.y, age = mod(uTime + aVel.w * cyc, cyc);
  float side = aBase.x >= 0.0 ? 1.0 : -1.0;
  // the swell's own lift (as its vertex shader), and more spray on the side it swerves to and on landing, less in the air
  float pile = 1.0 + clamp(side * uLat * ${f3(SW.swerve)}, -0.3, 0.3);
  float lift = uFade * pile * (1.0 - uAir * ${f3(SW.air)}) * (1.0 + uLand * ${f3(SW.land)});
  float boost = (1.0 + clamp(side * uLat * 0.12, -0.5, 0.8) + uLand * 0.9) * (1.0 - 0.6 * uAir);
  vec3 v = aVel.xyz * vec3(1.0 + uLand * 0.5, boost, 1.0);
  float t = min(age, fly * boost);
  vec4 c1 = projectionMatrix * viewMatrix * vec4(at(t, v, lift), 1.0);
  vec4 c0 = projectionMatrix * viewMatrix * vec4(at(max(t - ${f3(HERO_WATER.splash.trail)}, 0.0), v, lift), 1.0);
  float asp = projectionMatrix[1][1] / projectionMatrix[0][0];
  vec2 a1 = c1.xy / c1.w * vec2(asp, 1.0), a0 = c0.xy / c0.w * vec2(asp, 1.0);
  float wN = aBase.w * projectionMatrix[1][1] / c1.w;
  vRound = aLife.z;
  vec2 dv = vRound > 0.5 ? vec2(0.0) : a1 - a0; float L = length(dv);
  vec2 ax = L > 1e-5 ? dv / L : vec2(0.0, 1.0), nx = vec2(ax.y, -ax.x);   // a right-handed quad (front-facing)
  float len = max(L, wN);
  vec2 p = (a0 + a1) * 0.5 + ax * position.y * (len + wN) + nx * position.x * wN;
  p.x /= asp;
  vP = position.xy * 2.0;
  vA = step(age, fly * boost) * smoothstep(0.0, 0.06, age / fly) * (1.0 - smoothstep(0.7, 1.0, age / (fly * boost))) * uFade * step(0.01, boost);
  gl_Position = vec4(p * c1.w, c1.z, c1.w);
}
`;
const SPLASH_FRAGMENT = /* glsl */ `
varying vec2 vP; varying float vA, vRound;
void main() {
  if (vA <= 0.0) discard;
  float a;
  if (vRound > 1.5) a = exp(-dot(vP, vP) * 2.6) * 0.6;   // a soft puff of spray
  else if (vRound > 0.5) a = 1.0 - smoothstep(0.35, 1.0, length(vP));
  else {
    // a streak: a round head (the leading end), fading toward the tail
    float y = vP.y * 0.5 + 0.5;
    a = (1.0 - smoothstep(0.35, 1.0, abs(vP.x))) * smoothstep(0.0, 0.7, y) * (1.0 - smoothstep(0.92, 1.0, y));
  }
  a *= vA;
  vec3 col = mix(vec3(1.0), vec3(0.62, 0.86, 1.0), smoothstep(0.2, 0.9, abs(vP.x)) * 0.6);
  gl_FragColor = vec4(col * a, a);
}
`;

// ---------------------------------------------------------------- 3. the water floor round the character
function heroFloor({ waterSheets, drumSheet, fogAnchor, updaters, S }) {
  const P = HERO_WATER.floor, K = HERO_WATER.colours, done = [], fade = { value: 0 };
  const code = /* glsl */ `  if (uHeroWater > 0.0) {   // ?s3=hero: turquoise water round the character (tunnel_r7_hero_water.js)
    vec2 hw = xz - uPlayer.xz;
    float hr = length(vec2(hw.x, hw.y > 0.0 ? hw.y / ${f3(P.ahead)} : hw.y));
    float hk = (1.0 - smoothstep(${f3(P.radius[0])}, ${f3(P.radius[1])}, hr)) * uHeroWater * ${f3(P.amount)};
    float hf = flowT;
    float hn = bwFbm(vec2(xz.x * 3.0, xz.y * 1.4 - hf * 0.5)), hn2 = bwFbm(vec2(xz.x * 7.0 + 3.1, xz.y * 2.5 - hf * 0.8));
    vec3 hc = mix(${v3(K.electric)}, ${v3(K.azure)}, smoothstep(0.35, 0.65, hn));
    hc = mix(hc, ${v3(K.turq)}, smoothstep(0.55, 0.8, hn2) * 0.6);
    float hl = smoothstep(0.85, 0.97, 1.0 - abs(2.0 * fract(bwFbm(vec2(xz.x * 4.0, xz.y * 0.9 - hf * 0.6)) * 4.0) - 1.0));
    hc = mix(hc, ${v3(K.pale)}, hl * 0.75);
    vec2 hfc = vec2(xz.x * 14.0, xz.y * 9.0 - hf * 1.2), hfi = floor(hfc);
    float hfl = step(0.9, bwHash(hfi + 2.7)) * (1.0 - smoothstep(0.1, 0.3, length(fract(hfc) - 0.5)));
    hc = mix(hc, ${v3(K.white)}, hfl * 0.85);
    hc *= 0.92 + 0.12 * NdotL;
    lit = mix(lit, hc, hk);
  }
`;
  for (const mesh of (waterSheets || [])) {
    const m = mesh.material;
    if (!m || !m.fragmentShader || !m.fragmentShader.includes(fogAnchor) || !m.fragmentShader.includes('vec3 lit') || !m.fragmentShader.includes('uniform vec3 uPlayer')) continue;
    if (m.fragmentShader.includes('uniform float uHeroWater;')) continue;   // a material shared by two sheets: once
    m.uniforms.uHeroWater = fade;
    m.fragmentShader = m.fragmentShader.replace(fogAnchor, code + fogAnchor).replace('void main() {', 'uniform float uHeroWater;\nvoid main() {');
    m.needsUpdate = true; done.push(mesh === drumSheet ? 'drum' : 'slide');
  }
  updaters.push(() => { fade.value = S.k; });
  return done;
}
function v3(hex) { const c = lin(hex); return `vec3(${f3(c.r)}, ${f3(c.g)}, ${f3(c.b)})`; }

// a private random sequence (never the game's seeded Math.random)
export function mulberryHW(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
