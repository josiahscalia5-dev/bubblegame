
// ?s3=...,swim2: the travelling heaps on the swell (tunnel_s4_swim2.js)
float sw2H(vec2 p) { p = mod(p, 289.0); return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float sw2S(float e0, float e1, float x) { float t = clamp((x - e0) / (e1 - e0), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
// one rounded heap (1 - e)^2 over an ellipse; the union keeps the tallest, so neighbours meet in crisp creases
void sw2Dome(float a, float b, float ca, float cb, float ra, float rb, float A, float id, inout float h, inout vec2 g, inout vec4 L) {
  vec2 o = vec2((a - ca) / ra, (b - cb) / rb);
  float e = dot(o, o);
  if (e >= 1.0 || A <= 0.0) return;
  float k = 1.0 - e, v = A * k * k;
  if (v <= h) return;
  h = v; g = -4.0 * A * k * vec2(o.x / ra, o.y / rb); L = vec4(o, sqrt(e), id);
}
// a: m along the crest from the bow (per side), b: m down the outer face (< 0: the inner face), side: +1 screen-left,
// T: her travel (m, plus the idle drift), lat: her sideways speed, px: her x. Returns the height (m) along the surface's
// normal; g: its gradient (d/da, d/db); L: the tallest heap's (x along, y down) normalised offset, radius share, id
float sw2Field(float a, float b, float side, float T, float lat, float air, float land, float px, out vec2 g, out vec4 L) {
  float h = 0.0; g = vec2(0.0); L = vec4(0.0, 0.0, 1.0, 0.0);
  float dT = T - 1.23095, la = side * 0.60000 * px;
  float kD = 1.0 - sw2S(6.00000, 12.00000, dT);
    if (side * 1.00000 > 0.0) sw2Dome(a, b, 0.14000 + 0.05500 * dT - la, 0.02000 + 0.07000 * dT, 0.23000, 0.15000, 0.15000 * kD, 0.10000, h, g, L);
    if (side * -1.00000 > 0.0) sw2Dome(a, b, 0.08000 + 0.05500 * dT - la, 0.02000 + 0.07000 * dT, 0.20000, 0.15000, 0.07000 * kD, 0.30000, h, g, L);
    if (side * 1.00000 > 0.0) sw2Dome(a, b, 0.42000 + 0.05500 * dT - la, 0.03000 + 0.07000 * dT, 0.17000, 0.14000, 0.16000 * kD, 0.50000, h, g, L);
    if (side * -1.00000 > 0.0) sw2Dome(a, b, 0.64000 + 0.05500 * dT - la, 0.03000 + 0.07000 * dT, 0.17000, 0.14000, 0.12000 * kD, 0.70000, h, g, L);
  // the lattice: staggered rows moving outward and down the face with her travel
  vec2 q = vec2(a - 0.05500 * T + la, b - 0.07000 * T);
  vec2 qc = q / vec2(0.50000, 0.24000);
  float zone = (1.0 - sw2S(0.55, 0.75, a)) * (1.0 - sw2S(0.08, 0.16, b));
  float latK = 1.0 - zone * (1.0 - sw2S(0.0, 3.00000, dT));   // the start frame's front is the designed heaps'
  float r0 = floor(qc.y);
  for (int i = 0; i < 3; i++) {
    float r = r0 + float(i) - 1.0, off = 0.5 * mod(r, 2.0), c0 = floor(qc.x + off);
    for (int j = 0; j < 3; j++) {
      vec2 id = vec2(c0 + float(j) - 1.0, r + side * 37.0);
      if (sw2H(id) > 0.72000) continue;
      float ca = (id.x + 0.5 + (sw2H(id + 5.1) - 0.5) * 0.44 - off) * 0.50000;
      float cb = (r + 0.5 + (sw2H(id + 9.3) - 0.5) * 0.44) * 0.24000;
      float ra = 0.50000 * mix(0.32000, 0.60000, sw2H(id + 13.7));
      float rb = 0.24000 * mix(0.35000, 0.60000, sw2H(id + 17.1));
      float A = mix(0.04000, 0.12000, pow(sw2H(id + 21.3), 1.6)) * latK;
      sw2Dome(q.x, q.y, ca, cb, ra, rb, A, sw2H(id + 29.0), h, g, L);
    }
  }
  // born at the bow, sinking at the arms' ends; rolling over the crest from her side, flattening toward the foot; taller
  // at the sides; the side she swims to piles up, the far side drops (open water behind); collapsed in a jump; up on landing
  float env = sw2S(0.00000, 0.07000, a) * (1.0 - sw2S(1.15000, 1.60000, a))
    * sw2S(-0.22000, -0.06000, b) * (1.0 - sw2S(0.35000, 0.65000, b));
  env *= (1.0 + 0.20000 * sw2S(0.25, 0.6, a)) * clamp(1.0 + side * lat * 0.12000, 0.45000, 1.50000);
  env *= (1.0 - 0.90000 * air) * (1.0 + 0.80000 * land);
  h *= env; g *= env;   // (the envelope's own slope is gentle: left out of the gradient)
  return h;
}
uniform float uSw2T;
varying vec3 vSw2W0;

// ---- main insert
  {   // ?s3=...,swim2: the travelling heaps, raised along the surface's normal (tunnel_s4_swim2.js)
    vSw2W0 = uC + uR * p.x + uU * p.y + uT * p.z;   // (the undisplaced surface: the fragment's tangents)
    float sw2Sa = s - 0.03000;
    vec2 sw2G; vec4 sw2L;
    float sw2Hh = sw2Field(abs(sw2Sa), (0.5 - aSurf.y) * 1.9, sw2Sa >= 0.0 ? 1.0 : -1.0, uSw2T, uLat, uAir, uLand, uPX, sw2G, sw2L);
    p += normal * sw2Hh * uFade;
    p.xz *= 1.0 - uAir * 0.30000 * top;   // in a jump the ring closes in under her
  }
