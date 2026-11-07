
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
uniform float uSw2T, uLat, uAir, uPX;
varying vec3 vSw2W0;

// ---- block
    {   // ?s3=...,swim2: the heaps' water (tunnel_s4_swim2.js)
      float sw2Sa = s - 0.03000, sw2A = abs(sw2Sa), sw2Side = sw2Sa >= 0.0 ? 1.0 : -1.0, sw2B = (0.5 - vS.y) * 1.9;
      vec2 sw2G; vec4 sw2L;
      float sw2Hh = sw2Field(sw2A, sw2B, sw2Side, uSw2T, uLat, uAir, uLand, uPX, sw2G, sw2L);
      // 1. the heap's normal: the base surface's tangents from screen derivatives (no sign conventions), its slope added
      vec3 sw2N = N0;
      { vec3 px = dFdx(vSw2W0), py = dFdy(vSw2W0);
        vec2 ux = dFdx(vec2(sw2Sa, sw2B)), uy = dFdy(vec2(sw2Sa, sw2B));
        float det = ux.x * uy.y - ux.y * uy.x, sg = dot(normalize(vN), N0) >= 0.0 ? 1.0 : -1.0;
        if (abs(det) > 1e-12) {
          vec3 tS = (px * uy.y - py * ux.y) / det, tB = (py * ux.x - px * uy.x) / det;
          sw2N = normalize(N0 - sg * (tS * (sw2G.x * sw2Side) / max(dot(tS, tS), 1e-4) + tB * sw2G.y / max(dot(tB, tB), 1e-4)));
        } }
      float sw2Rho = sw2L.z, sw2In = sw2S(0.003, 0.02, sw2Hh);             // on a heap (0 in the creases between them)
      float sw2Up = clamp(hUp / max(vS.w, 0.05), 0.0, 1.0);                // 0 at the floor's water .. 1 at the crest
      float sw2Front = (1.0 - sw2S(0.3, 0.48, abs(dot(vW - uC, uR)))) * sw2S(0.45, 0.8, sw2Up);   // tops in front of her body
      float sw2Ndv = clamp(dot(sw2N, V), 0.0, 1.0), sw2Key = clamp(dot(sw2N, uLqKey), 0.0, 1.0);
      // 2. the water between them: currents anchored in her travel, streaming down the face; the floor's own water at the foot
      float sw2Cur = texture2D(uLqTex, vec2(sw2Sa * 1.3, (sw2B - 0.11200 * uSw2T) * 2.1)).b * 0.65
        + texture2D(uLqTex, vec2(sw2Sa * 3.1 + 0.4, (sw2B - 0.16800 * uSw2T) * 4.3)).b * 0.35;
      vec3 sw2C = mix(vec3(0.18431, 0.54118, 0.90196), vec3(0.30980, 0.70196, 0.96471), sw2S(0.3, 0.6, sw2Cur));
      sw2C = mix(sw2C, vec3(0.52549, 0.80000, 0.97255), sw2S(0.68, 0.85, sw2Cur));
      sw2C = mix(sw2C, vec3(0.10196, 0.37255, 0.83922), (1.0 - sw2In) * 0.55 * sw2S(0.15, 0.5, sw2Up));   // cobalt creases
      // 3. the heaps: azure, periwinkle toward the crest and in front of her, turquoise-cyan on the lit upper left, a darker
      //    blue-violet core low on the side facing the camera
      vec3 sw2Hc = mix(vec3(0.23922, 0.62353, 0.94902), vec3(0.56078, 0.60784, 0.90196), clamp(sw2Up * 0.5 + sw2Front * 0.7, 0.0, 1.0));
      sw2Hc = mix(sw2Hc, vec3(0.49804, 0.82353, 0.97255), sw2S(0.55, 0.85, sw2Key) * 0.6);
      sw2Hc = mix(sw2Hc, vec3(0.22745, 0.37255, 0.81176), (1.0 - sw2S(0.0, 0.65, sw2Rho)) * sw2S(-0.25, 0.45, sw2L.y) * 0.55);
      sw2C = mix(sw2C, sw2Hc, sw2In);
      vec3 sw2Col = mix(mwFloor, mtUndisplay(sw2C), sw2S(0.0, 0.3, sw2Up));
      // 4. white, all moving with the heaps: a crisp rim on each heap's upper outline (broken), the grazing rim of its
      //    silhouette, the key light's glint, broken froth caps on the side heaps, droplets in the creases
      float sw2Brk = step(0.28, fract(sin(sw2L.w * 91.7 + floor(atan(sw2L.y, sw2L.x) * 2.2) * 13.1) * 4375.85));
      float sw2Rim = sw2S(0.62000, 0.72000, sw2Rho) * (1.0 - sw2S(0.90000, 1.0, sw2Rho))
        * sw2S(0.0, 0.6, 0.3 - sw2L.y / max(sw2Rho, 1e-3)) * sw2Brk * sw2In;
      float sw2Fr = sw2S(0.55000, 0.80000, 1.0 - sw2Ndv) * sw2In * sw2S(0.4, 0.8, sw2Up);
      float sw2Sp = pow(max(dot(sw2N, normalize(uLqKey + V)), 0.0), 90.0) * 1.10000 * sw2In;
      // (froth with holes on each heap's upper part, riding with it; none on the glassy domes in front of her body)
      float sw2Cap = (1.0 - sw2Front) * (1.0 - sw2S(-0.45, -0.15, sw2L.y)) * sw2In
        * step(0.5, texture2D(uLqTex, sw2L.xy * 0.35 + sw2L.w * 7.0).b);
      // (broken foam patches on the face below the crest band, anchored in her travel: they stream toward the camera)
      float sw2Fn = texture2D(uLqTex, vec2(sw2Sa * 2.3 + 0.7, (sw2B - 0.12600 * uSw2T) * 1.6)).b;
      float sw2Fh = texture2D(uLqTex, vec2(sw2Sa * 9.0, (sw2B - 0.12600 * uSw2T) * 7.0) + 0.3).b;
      sw2Cap = max(sw2Cap, sw2S(0.64000, 0.74000, sw2Fn) * step(0.42, sw2Fh) * (1.0 - sw2S(0.6, 0.85, sw2Up)) * (1.0 - sw2Front) * 0.80000);
      vec2 sw2Dq = vec2(sw2Sa, sw2B - 0.10500 * uSw2T) * 24.00000, sw2Di = floor(sw2Dq);
      float sw2Dr = step(0.93000, sw2H(sw2Di + 3.3)) * (1.0 - sw2S(0.12, 0.28, length(fract(sw2Dq) - 0.5)))
        * (1.0 - sw2In) * sw2S(0.2, 0.5, sw2Up);
      sw2Col = mix(sw2Col, mtUndisplay(vec3(0.86275, 0.92549, 0.98431)), sw2Cap * 0.85000);
      float sw2W = clamp(max(max(sw2Rim, sw2Fr), sw2Dr * 0.90000) + sw2Sp, 0.0, 1.0);
      sw2Col = mix(sw2Col, mtUndisplay(vec3(0.93333, 0.95686, 0.99216)), sw2W);
      // 5. solid water, except each heap's top right in front of her body: her fur shows through as the original's lavender
      //    domes with darker cores (never in a jump: no glass)
      float sw2Clr = sw2Front * sw2In * (1.0 - sw2S(0.55, 0.85, sw2Rho)) * (1.0 - uAir);
      mwCol = sw2Col;
      mwA = clamp(max(mix(1.0, 0.62000, sw2Clr), max(sw2W, sw2Cap * 0.85000)), 0.0, 1.0);
    }
