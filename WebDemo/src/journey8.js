// journey8 (9 November 2026, session 8da775c4): THE CONNECTED SWIMMING JOURNEY of Level 1 (the user's STRICT LEVEL 1 IMPLEMENTATION DIRECTIVE and the
// three references in Design/ReferencePacks/2026-11-09_Three_Journey_References_from_user/: 01 BEGINNING, 02 MIDDLE, 03 FINAL DESTINATION).
// Switch `?s3=...,s56,arch56,...,journey8` (on top of the Screen 6 candidate). Without it nothing here runs and every build is as before.
//
// What it adds to the existing Screen 6 world (s56 + arch56 keep their drum, arches, banks, tanks, gears, brushes and water):
//   - BEGINNING (u 40-100): machines that really pour water into the channel: pink-and-gold outlet housings with a gold-rimmed arched opening
//     (dark recess, lamp dots, stars, a glowing tank on top), a thick gold pipe pouring a column of water onto a curved pink chute with gold rims
//     beside a cobalt gear, twin round outlets under a lavender control box;
//   - MIDDLE (u 143-262): the same family as landmarks between the rows of machines (rows of three glowing tanks on a pink bench with gold pipes,
//     more outlets, chutes on both banks), each bay different from its neighbours, so the scenery changes as he travels;
//   - FINAL DESTINATION (u 262-352): the tunnel goes on (it ended at u 262 in a bare pink hall), widens into a finishing chamber and ends in the
//     huge round washer portal: a lavender-silver bezel with gold trim and lamps, a pink-and-gold crown, swirling cyan-blue water inside, a wide
//     waterfall pouring from it into the channel, foam clouds at its foot, cobalt gears and glowing tanks at its sides, a thick gold pipe overhead.
//     Level 1's finish (u 340, level1.js) is in front of it: the existing Level Complete runs there.
// Every waterfall is real geometry with a flowing shader (opaque, no sorting): ribbons that leave the opening, arc and fall; where each lands the
// s56 water itself draws churned white foam on its own waves (uniforms J8FOAM, s56_tunnel.js) and droplets fly.
// The static parts are built through arch56's own chunk merger and materials (s56_arch.js calls buildJourney8 with its kit), so they share the
// Screen 6 look, haze and grade and cost a few draw calls per 30 m chunk. Private random numbers only.
import * as THREE from 'three';
import { BRUSH6 } from './s56_brush6.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const JOURNEY8_ON = LIST.includes('journey8') && LIST.includes('s56') && LIST.includes('arch56') && LIST.includes('level1');

const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// every number (window.__bwJ8 in the browser; read at build time)
export const J8 = {
  end: 352,                                   // the portal wall (u). Level 1's finish is at u 340 (level1.js)
  final: { u0: 300, u1: 318, dR: 1.7 },       // the finishing chamber: the drum's radius grows by dR between u0 and u1
  waterHalf: 4.75,                            // the water's half width in the chamber (2.08 in the tunnel)
  portal: { r: 2.2, y: 2.15, depth: 1.9, sill: 1.5, fallHalf: 1.55, throw: 1.05 },
  // [bay, side (+1 = screen-left), type]: bay k is arch56's bay behind ring k (its centre u = 3.616 + 3.768 k). Left bays 14-23 are the raised
  // side path's, bays 26-36 the drop's ledges: none there. Right bays 6, 13, 20 ... 62 hold arch56's gear.
  pieces: [
    [10, 1, 'outlet'], [11, -1, 'pipefall'], [14, -1, 'outlet'], [17, -1, 'outlet2'], [19, -1, 'pipefall'], [24, 1, 'outlet'], [25, -1, 'outlet2'],
    [39, 1, 'outlet2'], [43, -1, 'pipefall'], [44, 1, 'tanks3'], [46, -1, 'outlet'], [50, 1, 'pipefall'], [52, -1, 'outlet2'], [57, 1, 'outlet'], [59, -1, 'tanks3'], [63, 1, 'outlet2'], [65, -1, 'pipefall'],
    [70, 1, 'outlet'], [72, -1, 'outlet'], [75, 1, 'pipefall'], [77, -1, 'outlet2'], [80, 1, 'tanks3'], [82, -1, 'tanks3'], [85, 1, 'outlet'], [86, -1, 'outlet'], [88, 1, 'tanks3'], [88, -1, 'tanks3'],
  ],
  endBay: 91,                                 // bays from this one on are left to the portal's own machinery
  gearBays: [6, 13, 20, 27, 34, 41, 48, 55, 62],
  outlet: { x: 2.55, rx: 0.78, rz: 1.15, top: 1.38, ang: 0.32, arch: 0.5, side: 0.32, sleeve: 0.3, sill: 0.42, throw: 0.4 },
  pipefall: { cab: [2.5, 0.55, 0.68, 0.95, 1.0], pipeY: 2.38, pipeR: 0.22, mouth: [2.3, 1.9, 0.6] },
  foam: 6,                                    // landings whose foam the water draws at once (the nearest ahead)
  drops: { n: 200, perFall: 26, speed: 1.7 },
  water: { deep: [0.0, 0.10, 0.62], mid: [0.0, 0.36, 0.76], turq: [0.06, 0.72, 0.98], white: [1.9, 2.0, 2.15] },   // (the s56 water's calibrated hero ramp; white over 1: the scene grade dims white to grey)
};
if (JOURNEY8_ON && typeof window !== 'undefined') window.__bwJ8 = J8;
// (the big side brushes of approved Screen 6 go on through the approach and the chamber: pairs at 284, 310 and 336, the last beside the finish)
if (JOURNEY8_ON) BRUSH6.spans = [[150, 346]];

/** The finishing chamber's extra radius at u (0 outside it). */
export const j8Widen = (u) => (JOURNEY8_ON ? J8.final.dR * sm(J8.final.u0, J8.final.u1, u) : 0);
/** The water's half width at u (the tunnel's 2.08 m, to the chamber's walls in the chamber). */
export const j8WaterHalf = (u, base) => (JOURNEY8_ON ? base + (J8.waterHalf - base) * sm(J8.final.u0 - 4, J8.final.u1, u) : base);
/** True when bay k on side s is a journey piece's (arch56 leaves it empty). */
export const j8Bay = (k, s) => JOURNEY8_ON && (k >= J8.endBay || J8.pieces.some(([pk, ps]) => pk === k && ps === s));
/** The landings' foam for the s56 water shader: (x, u, radius, strength) of the nearest ones. */
export const J8FOAM = { value: Array.from({ length: J8.foam }, () => new THREE.Vector4(0, -999, 1, 0)) };

const f = (v) => (Number.isInteger(v) ? v.toFixed(1) : String(+v.toFixed(5)));
const v3 = (c) => `vec3(${f(c[0])}, ${f(c[1])}, ${f(c[2])})`;
function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

const NOISE = /* glsl */ `
float j8h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float j8n(vec2 p) { vec2 i = floor(p), q = fract(p); q = q * q * (3.0 - 2.0 * q);
  return mix(mix(j8h(i), j8h(i + vec2(1.0, 0.0)), q.x), mix(j8h(i + vec2(0.0, 1.0)), j8h(i + vec2(1.0, 1.0)), q.x), q.y); }
float j8f(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 3; i++) { s += a * j8n(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s / 0.875; }
`;
// the far end's haze, the same reach and colours as the s56 water and the arch56 walls (fin6's icy vanishing point)
const HAZE = /* glsl */ `
vec3 j8Haze(vec3 c, vec3 wp) {
  float d = length(wp - cameraPosition);
  vec3 far = mix(vec3(0.20, 0.10, 0.66), vec3(1.10, 1.28, 1.85), smoothstep(30.0, 80.0, d));
  return mix(c, far, smoothstep(9.0, 70.0, d) * 0.9);
}`;
const VERT = /* glsl */ `
varying vec2 vUv; varying vec3 vW;
void main() { vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;
// falling / flowing water: uv.x = across (fraction) + 4 x the sheet's length in m (integer part), uv.y = along (fraction, 0 at the source) + 4 x its
// width in m; the pattern is laid out in metres, so every sheet's streaks are the same size and speed whatever its shape
const fallFrag = (ragged) => /* glsl */ `
uniform float uTime; varying vec2 vUv; varying vec3 vW;
${NOISE}
${HAZE}
void main() {
  float len = max(0.25, floor(vUv.x) * 0.25), wd = max(0.25, floor(vUv.y) * 0.25);
  float a = clamp((fract(vUv.x) - 0.01) / 0.98, 0.0, 1.0), l = clamp((fract(vUv.y) - 0.01) / 0.98, 0.0, 1.0);
  vec2 p = vec2(a * wd, l * len);
  float sp = 1.9 + 1.5 * l, t = uTime;
  float n1 = j8f(vec2(p.x * 3.2, p.y * 1.1 - t * sp));
  float n2 = j8f(vec2(p.x * 7.5 + 3.1, p.y * 1.9 - t * sp * 1.3));
  float streak = smoothstep(0.55, 0.82, j8f(vec2(p.x * 17.0, p.y * 0.8 - t * sp * 0.9)));
  vec3 c = mix(${v3(J8.water.deep)}, ${v3(J8.water.mid)}, smoothstep(0.3, 0.62, n1));
  c = mix(c, ${v3(J8.water.turq)}, smoothstep(0.48, 0.78, n2) * 0.8);
  float edge = min(a, 1.0 - a);
  ${ragged ? `c = mix(c, ${v3(J8.water.turq)} * 1.12, smoothstep(0.24, 0.02, edge) * 0.55);` : ''}
  c = mix(c, ${v3(J8.water.white)}, streak * (0.3 + 0.55 * l));
  float foam = smoothstep(0.6, 1.0, l + (n2 - 0.5) * 0.4);
  c = mix(c, ${v3(J8.water.white)}, foam * 0.92);
  ${ragged ? 'if (edge < 0.03 + 0.12 * n2 * smoothstep(0.08, 0.6, l)) discard;\n  if (l > 0.93 && n1 > 0.58) discard;' : ''}
  c = j8Haze(c, vW);
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`;

/**
 * Called by s56_arch.js before its chunk merge. kit: arch56's own helpers and materials { put, G, merge, pipe, collar, seg, railing, starG, tank,
 * ovalCab, onOvalAt, facing, MT, std, basic, wid(u), frameM(u), bayU(k), timeU, group, P, Q6, report }.
 * Returns { gears: [{ u, s, x, h, d, out }], update(dt, time, phase, m) }.
 */
export function buildJourney8(kit) {
  const { put, G, merge, pipe, collar, seg, railing, starG, tank, ovalCab, onOvalAt, facing, MT, std, basic, wid, frameM, bayU, timeU, group, P, report } = kit;
  const rnd = mulberry(0x10a8), gears = [], landings = [];
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const M4 = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z);

  // ------------------------------------------------ materials (arch56's for everything solid; these few are the journey's own)
  const fallMat = new THREE.ShaderMaterial({ uniforms: { uTime: timeU }, vertexShader: VERT, fragmentShader: fallFrag(true), side: THREE.DoubleSide });
  const tubeMat = new THREE.ShaderMaterial({ uniforms: { uTime: timeU }, vertexShader: VERT, fragmentShader: fallFrag(false), side: THREE.DoubleSide });
  const dark = basic(0.035, 0.02, 0.17, { side: THREE.DoubleSide });                       // an opening's recess
  const glowIn = basic(0.05, 0.42, 1.25, { side: THREE.DoubleSide });                      // the blue light inside an opening
  const foamM = std({ color: 0xffffff, emissive: 0xc4d2ff, emissiveIntensity: 1.35, metalness: 0.0, roughness: 0.9, envMapIntensity: 0.3 });   // foam puffs (HDR white, still shaded)
  const chuteM = std({ color: 0xc23ab2, emissive: 0x5a0a50, emissiveIntensity: 0.45, metalness: 0.35, roughness: 0.25, envMapIntensity: 1.0 });

  // ------------------------------------------------ geometry helpers
  // a ribbon along centre points cs: across = side(t, tangent) (unit), half width hw(t); bulge = how far its middle stands out along (side x tangent).
  // uv as the fall shader reads it (see fallFrag)
  const ribbon = (cs, side, hw, nx = 6, bulge = 0) => {
    const ny = cs.length - 1, pos = [], uv = [], idx = [];
    let len = 0; for (let i = 1; i <= ny; i++) len += cs[i].distanceTo(cs[i - 1]);
    const wAvg = hw(0.5) * 2, eu = Math.round(len * 4), ev = Math.max(1, Math.round(wAvg * 4));
    let run = 0;
    for (let i = 0; i <= ny; i++) {
      if (i) run += cs[i].distanceTo(cs[i - 1]);
      const t = run / len, T = cs[Math.min(ny, i + 1)].clone().sub(cs[Math.max(0, i - 1)]).normalize(), sd = side(t, T).clone().normalize(), n = new THREE.Vector3().crossVectors(sd, T).normalize(), h = hw(t);
      for (let j = 0; j <= nx; j++) { const a = j / nx, o = (a * 2 - 1) * h, b = bulge * Math.sin(Math.PI * a);
        pos.push(cs[i].x + sd.x * o + n.x * b, cs[i].y + sd.y * o + n.y * b, cs[i].z + sd.z * o + n.z * b); uv.push(eu + 0.01 + 0.98 * a, ev + 0.01 + 0.98 * t); }
    }
    for (let i = 0; i < ny; i++) for (let j = 0; j < nx; j++) { const a = i * (nx + 1) + j, b = a + nx + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
  };
  // a falling column (a tube of water) from y1 down to y0 at (x, z), radius r1 at the top, r0 at the foot; uv for the fall shader
  const column = (x, z, y1, y0, r1, r0) => {
    const h = y1 - y0, g = new THREE.CylinderGeometry(r1, r0, h, 14, 6, true), uv = g.attributes.uv, eu = Math.round(h * 4), ev = Math.max(1, Math.round(Math.PI * (r0 + r1) * 4));
    for (let i = 0; i < uv.count; i++) { const a = uv.getX(i), l = 1 - uv.getY(i); uv.setXY(i, eu + 0.01 + 0.98 * a, ev + 0.01 + 0.98 * l); }
    return g.translate(x, (y0 + y1) / 2, z);
  };
  // a parabola of water leaving p0 along dir (horizontal unit vector) at speed v and falling to height yEnd
  const arc = (p0, dir, v, yEnd, n = 9, lead = 0.25) => {
    const cs = [], g = 4.4, tEnd = Math.sqrt(Math.max(0.01, 2 * (p0.y - yEnd) / g));
    if (lead > 0) cs.push(p0.clone().addScaledVector(dir, -lead));
    for (let i = 0; i <= n; i++) { const t = tEnd * i / n; cs.push(V(p0.x + dir.x * v * t, p0.y - 0.5 * g * t * t, p0.z + dir.z * v * t)); }
    return cs;
  };
  // a cluster of foam puffs round (x, y, z): spheres half in the water
  const puffs = (x, y, z, r, n, spread, flat = 0.75) => {
    const list = [];
    for (let i = 0; i < n; i++) { const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * spread, rr = r * (0.55 + 0.6 * rnd());
      list.push(G.sph(rr, 9, 6).scale(1, flat, 1).translate(x + Math.cos(a) * d, y + rr * 0.15 * rnd(), z + Math.sin(a) * d * 0.8)); }
    return merge(list);
  };
  // an arch outline (facing +z, base on y = 0): straight sides `side` high, a half circle of radius r on top
  const archPts = (r, side, n = 14) => { const pts = [[-r, -0.12], [-r, side]]; for (let i = 1; i < n; i++) { const a = Math.PI - (i / n) * Math.PI; pts.push([Math.cos(a) * r, side + Math.sin(a) * r]); } pts.push([r, side], [r, -0.12]); return pts; };
  const strip = (pts, z0, z1, flip) => {   // a band from z0 to z1 along an outline
    const pos = [], idx = []; pts.forEach(([x, y], i) => { pos.push(x, y, z0, x, y, z1); if (i) { const a = (i - 1) * 2, b = i * 2; if (flip) idx.push(a, a + 1, b, b, a + 1, b + 1); else idx.push(a, b, a + 1, b, b + 1, a + 1); } });
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
  };
  const tubeAlong = (pts3, r, seg8 = 8) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts3.map((p) => (p.isVector3 ? p : V(...p))), false, 'centripetal'), Math.max(12, pts3.length * 4), r, seg8, false);
  const place = (u, s, list) => { const L = M4(s * wid(u), 0, 0); for (const [g, m] of list) put(u, g, m, L); };
  // where a fall lands (module frame at u, side s): remembered for the water's foam, the droplets and the foam puffs
  const land = (u, s, x, z, r, power = 1) => { const xx = x + s * wid(u), M = frameM(u), p = V(xx, 0.02, z).applyMatrix4(M), e = M.elements;
    landings.push({ u: u + z, x: xx, r, power, p, R: V(e[0], e[1], e[2]), U: V(e[4], e[5], e[6]), T: V(e[8], e[9], e[10]) }); };

  // ------------------------------------------------ A. the outlet housing: a glossy pink oval drum with a gold-rimmed arched opening pouring water
  function outlet(u, s) {
    const O = J8.outlet, out = [], X = (v) => s * v, cx = X(O.x);
    ovalCab(out, cx, 0, O.rx, O.rz, O.top, MT.pink6);
    // the opening, built facing +z with its base on the water, then set on the drum's face turned to the channel and the oncoming camera
    const r = O.arch, pts = archPts(r, O.side), rim = pts.map(([x, y]) => [x, y, O.sleeve]), face = [];
    face.push([tubeAlong(rim, 0.075, 10), MT.gold], [tubeAlong(pts.map(([x, y]) => [x * 1.13, y * 1.06 + 0.01, 0.03]), 0.04, 8), MT.gold]);
    face.push([strip(pts.map(([x, y]) => [x * 1.06, y * 1.04]), -0.3, O.sleeve, false), MT.ring6], [strip(pts, -0.3, O.sleeve + 0.01, true), dark]);
    { const sh = new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y))); face.push([new THREE.ShapeGeometry(sh, 10).translate(0, 0, 0.02), dark]); }
    // the blue light deep inside, the gold sill the water runs over, the lamp dots round the rim
    face.push([G.sph(r * 0.72, 14, 10).scale(1, 0.75, 0.12).translate(0, O.sill + 0.22, 0.03), glowIn]);
    face.push([G.cyl(0.06, 0.06, 2 * r + 0.06, 10).rotateZ(Math.PI / 2).translate(0, O.sill - 0.05, O.sleeve - 0.02), MT.gold]);
    { const dots = []; for (let i = 0; i <= 8; i++) { const a = Math.PI - (i / 8) * Math.PI; dots.push(G.sph(0.034, 8, 6).translate(Math.cos(a) * r, O.side + Math.sin(a) * r, O.sleeve + 0.07)); } face.push([merge(dots), MT.strip]); }
    // the water: level inside the opening, then over the sill, arcing down into the channel
    const cs = arc(V(0, O.sill + 0.06, O.sleeve - 0.02), V(0, 0, 1), 1.0, -0.1, 9, O.sleeve + 0.2);
    face.push([ribbon(cs, () => V(1, 0, 0), (t) => (r - 0.09) * (1 + 0.28 * t), 6, 0.07), fallMat]);
    out.push(...onOvalAt(cx, 0, O.rx, O.rz, s, O.ang, 0, face, 0.0));
    // stars on its flanks, a railing on its deck, a glowing tank on top with its elbow pipe into the wall, the feed pipe over its back
    out.push(...onOvalAt(cx, 0, O.rx, O.rz, s, -0.62, 0.72, [[starG(0.24), MT.gold]], -0.005), ...onOvalAt(cx, 0, O.rx, O.rz, s, 1.2, 0.74, [[starG(0.2), MT.gold]], -0.005));
    const yd = O.top + 0.08, xi = O.x - O.rx + 0.12;
    out.push(...railing([[X(xi + 0.14), -O.rz * 0.8], [X(xi), -O.rz * 0.4], [X(xi), O.rz * 0.8]], yd, 0.28));
    const dome = tank(out, X(O.x + 0.12), 0.1, yd + 0.02, 0.3, 0.62);
    out.push([pipe([[X(O.x + 0.12), dome - 0.05, 0.1], [X(O.x + 0.12), dome + 0.26, 0.1], [X(O.x + 1.1), dome + 0.3, 0.1]], 0.085, 0.22), MT.brass], [collar([X(O.x + 0.12), dome + 0.06, 0.1], [0, 1, 0], 0.11), MT.gold]);
    out.push([pipe([[X(O.x - 0.1), yd, -0.78], [X(O.x - 0.1), yd + 0.75, -0.78], [X(O.x + 1.1), yd + 0.95, -0.78]], 0.13, 0.32), MT.gold], [collar([X(O.x - 0.1), yd + 0.12, -0.78], [0, 1, 0], 0.165, 0.09), MT.brass]);
    // where it lands: on the face's own normal, past the sleeve
    const n = [-s * Math.cos(O.ang), -Math.sin(O.ang)], tS = 1 / Math.sqrt((n[0] * n[0]) / (O.rx * O.rx) + (n[1] * n[1]) / (O.rz * O.rz)), d = tS + cs[cs.length - 1].z;
    const lx = cx + n[0] * d, lz = n[1] * d;
    out.push([puffs(lx, 0.0, lz, 0.13, 9, 0.42), foamM]);
    place(u, s, out); land(u, s, lx, lz, 0.62, 1.0);
  }

  // ------------------------------------------------ B. the pipe fall: a thick gold pipe pours a column onto a curved pink chute with gold rims
  function pipefall(u, s, ownGear) {
    const Q = J8.pipefall, out = [], X = (v) => s * v, [cx, cz, crx, crz, ctop] = Q.cab;
    ovalCab(out, X(cx), cz, crx, crz, ctop, MT.pink6);
    out.push(...onOvalAt(X(cx), cz, crx, crz, s, 0.9, 0.52, [[starG(0.2), MT.gold]], -0.005));
    const [mx, my, mz] = Q.mouth;
    // the pipe out of the wall, its elbow down and its flanged mouth
    out.push([pipe([[X(mx + 1.25), Q.pipeY, mz], [X(mx), Q.pipeY, mz], [X(mx), my, mz]], Q.pipeR, 0.42, 14), MT.gold]);
    out.push([collar([X(mx), my + 0.05, mz], [0, 1, 0], Q.pipeR + 0.07, 0.11), MT.brass], [collar([X(mx + 0.55), Q.pipeY, mz], [1, 0, 0], Q.pipeR + 0.055, 0.1), MT.brass]);
    out.push([G.cyl(Q.pipeR - 0.03, Q.pipeR - 0.03, 0.02, 16).translate(X(mx), my + 0.01, mz), dark]);
    // the chute: a shallow trough curving down across the bank and a little toward the oncoming camera
    const path = [[mx + 0.05, 1.36, mz], [mx - 0.28, 1.2, mz - 0.22], [mx - 0.62, 0.84, mz - 0.55], [mx - 0.9, 0.42, mz - 0.9], [mx - 1.08, 0.06, mz - 1.16], [mx - 1.17, -0.14, mz - 1.28]].map(([x, y, z]) => V(X(x), y, z));
    const curve = new THREE.CatmullRomCurve3(path, false, 'centripetal'), cs = curve.getPoints(18), up = V(0, 1, 0);
    const sideOf = (t, T) => new THREE.Vector3().crossVectors(up, T).normalize();
    out.push([ribbon(cs, sideOf, () => 0.38, 6, -0.1), chuteM]);
    for (const e of [-1, 1]) out.push([tubeAlong(cs.map((c, i) => { const T = cs[Math.min(18, i + 1)].clone().sub(cs[Math.max(0, i - 1)]).normalize(), sd = sideOf(0, T); return c.clone().addScaledVector(sd, e * 0.38).add(V(0, 0.06, 0)); }), 0.055, 8), MT.gold]);
    out.push([seg([X(mx - 0.3), 0.0, mz - 0.3], [X(mx - 0.3), 1.12, mz - 0.26], 0.05), MT.gold], [seg([X(mx - 0.82), -0.1, mz - 0.78], [X(mx - 0.8), 0.5, mz - 0.76], 0.045), MT.gold]);
    // the water: the column out of the pipe, the splash where it hits the chute, the stream down the chute
    out.push([column(X(mx), mz, my + 0.02, 1.3, Q.pipeR - 0.05, Q.pipeR + 0.02), tubeMat]);
    out.push([puffs(X(mx), 1.36, mz, 0.11, 7, 0.26, 0.9), foamM]);
    out.push([ribbon(cs.map((c) => c.clone().add(V(0, 0.045, 0))), sideOf, (t) => 0.27 + 0.06 * t, 6, 0.05), fallMat]);
    // a glowing tank on a pedestal beside it
    out.push([G.cyl(0.38, 0.44, 1.5, 28).translate(X(cx + 0.05), 0.55, cz - 1.55), MT.lav]);
    for (const y of [0.14, 1.18]) out.push([G.tor(0.43, 0.036, 28, 6).rotateX(Math.PI / 2).translate(X(cx + 0.05), y, cz - 1.55), MT.gold]);
    const dome = tank(out, X(cx + 0.05), cz - 1.55, 1.3, 0.31, 0.66);
    out.push([pipe([[X(cx + 0.05), dome - 0.05, cz - 1.55], [X(cx + 0.05), dome + 0.24, cz - 1.55], [X(cx + 1.0), dome + 0.28, cz - 1.55]], 0.08, 0.2), MT.brass]);
    const e = path[path.length - 1];
    out.push([puffs(e.x, 0.0, e.z, 0.12, 8, 0.36), foamM]);
    place(u, s, out); land(u, s, e.x, e.z, 0.55, 0.9);
    if (ownGear) gears.push({ u: u + cz + 0.95, s, x: Math.abs(cx) + 0.32 + wid(u), h: 1.82, d: 1.5, out: 0.32 });
  }

  // ------------------------------------------------ C. twin round outlets in a pink block under a lavender control box
  function outlet2(u, s) {
    const out = [], X = (v) => s * v, fx = 1.98, len = 2.5;
    out.push([G.box(1.2, 1.25, len).translate(X(fx + 0.6), 0.4, 0), MT.pink6], [G.box(1.26, 0.1, len + 0.06).translate(X(fx + 0.6), 1.07, 0), MT.gold], [G.box(1.22, 0.07, len + 0.03).translate(X(fx + 0.6), 0.14, 0), MT.gold]);
    out.push([G.box(1.14, 0.12, len - 0.1).translate(X(fx + 0.6), 1.18, 0), MT.lav]);
    for (const z of [-0.72, 0.72]) {
      const F = facing(X(fx), 0.62, z, -s, 0), face = [];
      face.push([G.tor(0.27, 0.06, 28, 8), MT.gold], [G.cyl(0.25, 0.25, 0.3, 24, 1).rotateX(Math.PI / 2).translate(0, 0, 0.14), MT.gold], [G.cyl(0.2, 0.2, 0.02, 20).rotateX(Math.PI / 2).translate(0, 0, 0.3), dark]);
      face.push([G.tor(0.26, 0.035, 24, 6).translate(0, 0, 0.29), MT.brass]);
      const cs = arc(V(0, -0.1, 0.27), V(0, 0, 1), 0.85, -0.74, 8, 0.12);
      face.push([ribbon(cs, () => V(1, 0, 0), (t) => 0.15 + 0.1 * t, 4, 0.06), fallMat]);
      for (const [g, m] of face) out.push([g.clone().applyMatrix4(F), m]);
      const lx = X(fx - cs[cs.length - 1].z);
      out.push([puffs(lx, 0.0, z, 0.1, 6, 0.26), foamM]);
      land(u, s, lx, z, 0.42, 0.6);
    }
    out.push([starG(0.19).applyMatrix4(facing(X(fx - 0.005), 0.66, 0, -s, 0)), MT.gold]);
    { const riv = []; for (let i = 0; i < 9; i++) riv.push(G.sph(0.024, 6, 4).translate(X(fx - 0.005), 1.07, -len / 2 + 0.15 + i * (len - 0.3) / 8)); out.push([merge(riv), MT.paw]); }
    // the control box: lavender, a dark screen, a teal and an amber light glowing toward the channel
    const by = 1.24, bw = 0.62, bh = 0.5;
    out.push([G.box(0.5, bh, bw).translate(X(fx + 0.42), by + bh / 2, -0.55), MT.lav], [G.box(0.03, bh * 0.62, bw * 0.78).translate(X(fx + 0.165), by + bh / 2, -0.55), MT.screen]);
    for (const [dz, mat, halo] of [[-0.15, MT.teal, MT.tealHalo], [0.15, MT.amberLight, MT.amberHalo]]) out.push([G.sph(0.075, 12, 8).translate(X(fx + 0.14), by + bh / 2, -0.55 + dz), mat], [G.sph(0.14, 12, 8).translate(X(fx + 0.13), by + bh / 2, -0.55 + dz), halo]);
    out.push(...railing([[X(fx + 0.1), 0.0], [X(fx + 0.1), len / 2 - 0.08]], 1.24, 0.28));
    out.push([pipe([[X(fx + 0.5), by + bh, -0.55], [X(fx + 0.5), by + bh + 0.4, -0.55], [X(fx + 1.5), by + bh + 0.5, -0.55]], 0.09, 0.22), MT.brass]);
    place(u, s, out);
  }

  // ------------------------------------------------ D. a row of three glowing tanks on a pink bench, their domes joined by a gold pipe
  function tanks3(u, s) {
    const out = [], X = (v) => s * v, fx = 1.95, len = 3.1;
    out.push([G.box(1.0, 1.15, len).translate(X(fx + 0.5), 0.3, 0), MT.pink6], [G.box(1.06, 0.1, len + 0.06).translate(X(fx + 0.5), 0.9, 0), MT.gold], [G.box(1.02, 0.07, len + 0.03).translate(X(fx + 0.5), 0.13, 0), MT.gold]);
    for (const z of [-0.78, 0.78]) out.push([starG(0.2).applyMatrix4(facing(X(fx - 0.005), 0.5, z, -s, 0)), MT.gold]);
    let dome = 0; for (const z of [-1.0, 0, 1.0]) dome = tank(out, X(fx + 0.5), z, 0.95, 0.27, 0.7);
    out.push([pipe([[X(fx + 0.5), dome - 0.05, -1.0], [X(fx + 0.5), dome + 0.22, -1.0], [X(fx + 0.5), dome + 0.22, 1.0], [X(fx + 0.5), dome - 0.05, 1.0]], 0.07, 0.16), MT.gold]);
    out.push([pipe([[X(fx + 0.5), dome - 0.05, 0], [X(fx + 0.5), dome + 0.5, 0], [X(fx + 1.5), dome + 0.55, 0]], 0.085, 0.22), MT.brass]);
    out.push(...railing([[X(fx + 0.07), -len / 2 + 0.08], [X(fx + 0.07), len / 2 - 0.08]], 0.95, 0.26));
    place(u, s, out);
  }

  const gearBay = new Set(J8.gearBays);
  const count = { outlet: 0, pipefall: 0, outlet2: 0, tanks3: 0 };
  for (const [k, s, type] of J8.pieces) {
    const u = bayU(k); count[type]++;
    if (type === 'outlet') outlet(u, s); else if (type === 'pipefall') pipefall(u, s, !(s < 0 && gearBay.has(k + 1))); else if (type === 'outlet2') outlet2(u, s); else tanks3(u, s);
  }

  // ------------------------------------------------ E. THE FINAL DESTINATION: the great washer portal closing the chamber, its waterfall and machinery
  {
    const E = J8.end, PT = J8.portal, A = P.A, Rw = kit.Ru(E) + wid(E), out = [], yp = PT.y, rp = PT.r;
    // the end wall: the drum's violet metal with oval holes in rings round the portal, lit by the portal's rays (its uv = metres from the track centre)
    const wallM = new THREE.ShaderMaterial({ uniforms: { uTime: timeU }, vertexShader: VERT, fragmentShader: /* glsl */ `
      uniform float uTime; varying vec2 vUv; varying vec3 vW;
      ${NOISE}
      ${HAZE}
      void main() {
        vec2 p = vUv - vec2(0.0, ${f(yp)}); float r = length(p), a = atan(p.y, p.x);
        vec3 c = mix(vec3(0.15, 0.05, 0.34), vec3(0.30, 0.11, 0.55), smoothstep(-2.5, 3.5, p.y));
        c *= 0.86 + 0.24 * j8f(vec2(a * 6.0, r * 1.5));
        float ring = r / 0.46, row = floor(ring), n = max(8.0, floor(row * 2.6)), ca = a / 6.2832 * n + 0.5 * mod(row, 2.0);
        vec2 q = vec2((fract(ca) - 0.5) * 6.2832 * r / n / 0.19, (fract(ring) - 0.5) / 0.36);
        float hole = (1.0 - smoothstep(0.82, 1.0, length(q))) * step(${f(rp + 0.9)}, r), lip = smoothstep(0.8, 1.0, length(q)) * (1.0 - smoothstep(1.0, 1.25, length(q))) * step(${f(rp + 0.9)}, r);
        c = mix(c, vec3(0.04, 0.01, 0.12), hole * 0.92); c += vec3(0.40, 0.2, 0.46) * lip * clamp(0.6 + q.y, 0.0, 1.0);
        float rays = 0.55 + 0.45 * sin(a * 22.0 + j8n(vec2(a * 3.0, uTime * 0.4)) * 3.0);
        c += vec3(0.30, 0.55, 1.25) * exp(-max(r - ${f(rp)}, 0.0) * 0.85) * rays * 0.75;
        c += vec3(0.85, 0.20, 0.75) * exp(-max(r - ${f(rp)}, 0.0) * 2.2) * 0.35;
        c = j8Haze(c, vW);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`, side: THREE.DoubleSide });
    { const sh = new THREE.Shape(); sh.absarc(0, A, Rw + 0.7, 0, Math.PI * 2, false); const hole = new THREE.Path(); hole.absarc(0, yp, rp + 0.28, 0, Math.PI * 2, true); sh.holes.push(hole);
      out.push([new THREE.ShapeGeometry(sh, 72), wallM]); }
    const ringAt = (r, tube, z, n = 72, rs = 10) => G.tor(r, tube, n, rs).translate(0, yp, z);
    // the bezel: a broad lavender-silver ring with gold trim inside and out, lamp capsules and bolts round it
    out.push([ringAt(rp + 0.42, 0.34, -0.12), MT.lav], [ringAt(rp + 0.04, 0.15, -0.3), MT.gold], [ringAt(rp + 0.82, 0.1, -0.2), MT.gold], [ringAt(rp + 0.42, 0.06, -0.47, 72, 6), MT.lip]);
    { const lamps = [], bolts = [];
      for (let i = 0; i < 12; i++) { const a = (i + 0.5) / 12 * Math.PI * 2; if (Math.abs(a - Math.PI * 1.5) < 0.9) continue; const g = new THREE.CapsuleGeometry(0.075, 0.42, 4, 10); g.rotateZ(a); g.translate(Math.cos(a) * (rp + 0.42), yp + Math.sin(a) * (rp + 0.42), -0.5); lamps.push(g); }
      for (let i = 0; i < 28; i++) { const a = i / 28 * Math.PI * 2; bolts.push(G.sph(0.045, 8, 6).translate(Math.cos(a) * (rp + 0.82), yp + Math.sin(a) * (rp + 0.82), -0.3)); }
      out.push([merge(lamps), MT.strip], [merge(bolts), MT.paw]); }
    // the crown on top: a glossy pink dome on a gold band with a gold finial and its lamp
    { const cy = yp + rp + 0.78;
      out.push([G.cyl(0.92, 1.0, 0.3, 32).translate(0, cy, -0.25), MT.gold], [new THREE.SphereGeometry(0.86, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2).scale(1, 0.72, 1).translate(0, cy + 0.14, -0.25), MT.pink6],
        [G.cyl(0.2, 0.26, 0.22, 16).translate(0, cy + 0.78, -0.25), MT.gold], [G.sph(0.16, 14, 10).translate(0, cy + 0.98, -0.25), MT.lamp], [G.tor(0.9, 0.05, 32, 6).rotateX(Math.PI / 2).translate(0, cy + 0.16, -0.25), MT.paw]); }
    // inside: a short bright drum, the swirling vortex at its back, the hot core
    const inM = basic(0.10, 0.34, 1.05, { side: THREE.BackSide });
    out.push([new THREE.CylinderGeometry(rp + 0.05, rp + 0.05, PT.depth, 48, 1, true).rotateX(Math.PI / 2).translate(0, yp, PT.depth / 2), inM]);
    for (const z of [0.5, 1.15]) out.push([ringAt(rp - 0.02, 0.05, z, 64, 6), MT.lip]);
    const vortexM = new THREE.ShaderMaterial({ uniforms: { uTime: timeU }, vertexShader: VERT, fragmentShader: /* glsl */ `
      uniform float uTime; varying vec2 vUv; varying vec3 vW;
      ${NOISE}
      void main() {
        vec2 p = vUv * 2.0 - 1.0; float r = length(p), a = atan(p.y, p.x), t = uTime;
        float sw = a + 3.4 * log(r + 0.07) - t * 1.1;
        float wob = j8f(vec2(r * 3.5 - t * 0.5, a * 1.6)) * 2.4;
        float arms = 0.5 + 0.5 * sin(sw * 3.0 + wob), fine = 0.5 + 0.5 * sin(sw * 8.0 + r * 13.0 - wob * 1.5);
        vec3 c = mix(${v3(J8.water.deep)}, ${v3(J8.water.mid)}, arms);
        c = mix(c, ${v3(J8.water.turq)} * 1.15, smoothstep(0.5, 0.95, arms * (0.55 + 0.45 * fine)));
        c += vec3(1.0, 1.4, 1.9) * smoothstep(0.86, 1.0, arms) * smoothstep(1.0, 0.25, r) * 0.7;
        c += vec3(1.5, 2.1, 3.0) * exp(-r * r * 7.0) * 1.7;
        c += vec3(0.45, 0.85, 1.4) * exp(-r * 2.4) * (0.6 + 0.4 * sin(a * 14.0 + t * 1.6)) * 0.55;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }` });
    out.push([new THREE.CircleGeometry(rp + 0.05, 64).rotateY(Math.PI).translate(0, yp, PT.depth), vortexM]);
    // the waterfall: the water runs level out of the portal, over its gold sill and down into the channel
    const csF = [V(0, PT.sill + 0.04, PT.depth - 0.05), V(0, PT.sill + 0.04, 0.7), ...arc(V(0, PT.sill + 0.04, -0.3), V(0, 0, -1), PT.throw, -0.12, 12, 0.5)];
    out.push([ribbon(csF, () => V(-1, 0, 0), (t) => PT.fallHalf * (1 + 0.07 * t), 14, 0.09), fallMat]);
    out.push([G.cyl(0.09, 0.09, PT.fallHalf * 2 + 0.3, 12).rotateZ(Math.PI / 2).translate(0, PT.sill - 0.06, -0.34), MT.gold]);
    const fz = csF[csF.length - 1].z;
    // foam clouds along its foot and banked in the corners beside it
    out.push([puffs(0, 0.02, fz + 0.1, 0.24, 26, PT.fallHalf + 0.25, 0.8), foamM]);
    for (const e of [-1, 1]) out.push([puffs(e * (PT.fallHalf + 0.75), 0.25, -0.7, 0.42, 14, 0.85, 0.9), foamM], [puffs(e * (PT.fallHalf + 1.5), 0.2, -0.55, 0.34, 9, 0.6, 0.9), foamM]);
    for (const dx of [-1.0, 0, 1.0]) land(E, 1, dx * PT.fallHalf * 0.7, fz, 1.05, 1.5);
    // the thick gold pipe curving over from the left wall into the wall above the crown, with its joints
    out.push([pipe([[Rw - 0.2, 3.1, -5.2], [Rw - 1.0, yp + rp + 1.75, -5.2], [1.3, yp + rp + 2.0, -3.0], [1.3, yp + rp + 1.95, 0.2]], 0.3, 1.0, 16), MT.gold]);
    out.push([collar([1.3, yp + rp + 1.97, -1.2], [0, 0, 1], 0.37, 0.14), MT.brass], [collar([Rw - 0.62, yp + rp + 0.9, -5.2], [-0.35, 1, 0], 0.37, 0.14), MT.brass]);
    // glowing tanks on lavender pedestals stepping out from the portal on both sides, gold railings between them
    for (const e of [-1, 1]) {
      for (const [dx, dz, ped, rg, hg] of [[3.55, -1.0, 1.25, 0.4, 0.95], [4.05, -3.2, 1.05, 0.36, 0.85]]) {
        out.push([G.cyl(rg + 0.1, rg + 0.18, ped + 0.4, 30).translate(e * dx, (ped - 0.4) / 2, dz), MT.pink6]);
        for (const y of [0.16, ped - 0.1]) out.push([G.tor(rg + 0.15, 0.045, 30, 6).rotateX(Math.PI / 2).translate(e * dx, y, dz), MT.gold]);
        out.push([starG(0.2).applyMatrix4(facing(e * (dx - rg - 0.13), ped * 0.52, dz - 0.05, -e, -0.35)), MT.gold]);
        const dome = tank(out, e * dx, dz, ped + 0.04, rg, hg);
        out.push([pipe([[e * dx, dome - 0.05, dz], [e * dx, dome + 0.35, dz], [e * (dx + 0.9), dome + 0.45, dz]], 0.1, 0.25), MT.brass]);
      }
      out.push(...railing([[e * 3.0, -0.35], [e * 3.05, -2.1], [e * 3.5, -4.0]], 0.02, 0.5, 0.4));
      gears.push({ u: E - 0.75, s: -e, x: 3.4, h: 3.25, d: 2.0, out: 0.12 }, { u: E - 2.6, s: -e, x: Rw - 0.55, h: 1.9, d: 1.3, out: 0.5 });
    }
    for (const [g, m] of out) put(E, g, m);
  }
  report.parts.push(`journey8: outlets x${count.outlet}, pipe falls x${count.pipefall}, twin outlets x${count.outlet2}, tank rows x${count.tanks3}, landings x${landings.length}, the washer portal at u ${J8.end}, extra gears x${gears.length}`);

  // ------------------------------------------------ per frame: the nearest landings' foam on the water, droplets thrown up where the falls land
  const D = J8.drops, drops = [], dropMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.75, 1.95), transparent: true, opacity: 0.92, depthWrite: false });
  const dropMesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), dropMat, D.n); dropMesh.name = 'j8Drops'; dropMesh.frustumCulled = false; dropMesh.renderOrder = 3; group.add(dropMesh);
  for (let i = 0; i < D.n; i++) drops.push({ life: 1, max: 1, p: V(0, 0, 0), v: V(0, 0, 0), s: 0.02 });
  const mm = new THREE.Matrix4(), qq = new THREE.Quaternion(), sv = V(0, 0, 0), zero = new THREE.Matrix4().makeScale(0, 0, 0);
  let dropI = 0, carry = 0;
  landings.sort((a, b) => a.u - b.u);
  function update(dt, time, phase, m) {
    const u0 = m ? m.z : 0, near = [];
    for (const L of landings) { if (L.u < u0 - 7) continue; if (L.u > u0 + 75) break; near.push(L); if (near.length >= J8.foam) break; }
    J8FOAM.value.forEach((v, i) => { const L = near[i]; if (L) v.set(L.x, L.u, L.r, L.power); else v.set(0, -999, 1, 0); });
    carry += dt * D.perFall * Math.min(near.length, 4);
    for (; carry >= 1; carry--) {
      const L = near[Math.floor(rnd() * Math.min(near.length, 4))]; if (!L) break;
      const d = drops[dropI]; dropI = (dropI + 1) % D.n;
      const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * L.r * 0.7, sp = D.speed * L.power * (0.5 + rnd() * 0.8);
      d.p.copy(L.p).addScaledVector(L.R, Math.cos(a) * r).addScaledVector(L.T, Math.sin(a) * r);
      d.v.copy(L.R).multiplyScalar(Math.cos(a) * sp * 0.45).addScaledVector(L.T, Math.sin(a) * sp * 0.45).addScaledVector(L.U, sp * (0.8 + rnd() * 0.7));
      d.life = 0; d.max = 0.35 + rnd() * 0.4; d.s = 0.018 + rnd() * 0.032;
    }
    for (let i = 0; i < D.n; i++) {
      const d = drops[i];
      if (d.life >= d.max) { dropMesh.setMatrixAt(i, zero); continue; }
      d.life += dt; d.v.y -= 7.5 * dt; d.p.addScaledVector(d.v, dt);
      sv.setScalar(d.s * (0.45 + 0.55 * (1 - d.life / d.max))); mm.compose(d.p, qq, sv); dropMesh.setMatrixAt(i, mm);
    }
    dropMesh.instanceMatrix.needsUpdate = true;
  }
  if (typeof window !== 'undefined') window.__bwJ8Info = { landings, gears, count };
  return { gears, update, landings };
}
