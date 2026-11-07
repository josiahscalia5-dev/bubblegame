

#define LQ_FOAM 1
uniform sampler2D uLqTex;
#ifndef LQ_SHARED_HERO
uniform float uTime, uHeroTravel, uHeroTanW;
uniform vec3 uHeroCam;            // the camera in the track frame (x sideways, h above the water, u along the path)
#endif
uniform vec3 uLqGlow;             // the glowing centre (world)
uniform vec3 uLqKey;              // the key light's direction (world): behind the camera, up and to the left
uniform vec3 uLqFwd, uLqUp, uLqSide;   // the track frame at the camera (world)
uniform vec4 uLqObj[6];   // collectibles near the camera: world position, radius (+ gold coin, - sock or gem)
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
  float sa = ang + uTime * 0.2200;   // the swirl turns round the tube
  vec2 cq = vec2(cos(sa), sin(sa));
  float wob = texture2D(uLqTex, cq * 0.31 + vec2(lr * 0.37 - uTime * 0.012, uTime * 0.02)).b;
  float s = lr * 4.5000 + sa / 6.2832 * 2.0000 + (wob - 0.5) * 0.5000 - uTime * 0.3000 - uHeroTravel * 0.1000;
  id = floor(s);
  spacing = du / 4.5000;   // metres along the path between rings here
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
  float k = fract(log(max(rw, 0.003)) * 4.5000 - uTime * 0.3000 - uHeroTravel * 0.1000);
  vec3 c = mix(vec3(1.0000, 0.8963, 0.7157), vec3(1.0000, 0.7605, 0.4342), smoothstep(0.01, 0.05, rw));
  c = mix(c, vec3(0.1912, 0.8550, 0.9734), smoothstep(0.05, 0.12, rw));
  c = mix(c, vec3(0.1119, 0.5711, 0.9473), smoothstep(0.12, 0.22, rw));
  c = mix(c, vec3(0.0273, 0.3005, 0.8796), smoothstep(0.22, 0.5, rw));
  c = mix(c, vec3(0.0086, 0.0630, 0.6038), smoothstep(0.5, 1.4, rw));
  c = mix(c, vec3(0.1912, 0.8550, 0.9734), exp(-pow((k - 0.62) / 0.08, 2.0)) * smoothstep(0.1, 0.25, rw) * (1.0 - smoothstep(0.6, 1.2, rw)) * 0.55);   // the rings' bright crests
  c = mix(c, vec3(0.2747, 0.2542, 0.8070), smoothstep(0.15, -0.35, f));   // behind: the washer's face and the collar
  return c;
}
// the collectibles in the water: a warm gold reflection streak under each coin (the reflected ray finds the coin, stretched
// up and down by the ripples) and glints on the ripples round it (lilac-white for the socks and the gem)
vec3 lqObjects(vec3 W, vec3 N, vec3 V, vec3 R, float hDet, float onFloor) {
  vec3 acc = vec3(0.0);
  // the water's place on the screen (the camera looks along the path): sideways and up, per metre ahead
  vec3 cw = W - cameraPosition; float fw = max(dot(cw, uLqFwd), 0.1);
  vec2 sw = vec2(dot(cw, uLqSide), dot(cw, uLqUp)) / fw;
  for (int i = 0; i < 6; i++) {
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
    vec3 col = o.w > 0.0 ? mix(vec3(0.8879, 0.5520, 0.1441), vec3(0.9734, 0.8228, 0.4508), 0.6) : vec3(0.8148, 0.7157, 1.0000);
    acc += col * (refl * 0.8500 + under * broken * 0.9000 + g * 2.4);
  }
  return acc;
}
// The liquid's shading, shared by every water surface. W: world position; N0: the surface's normal; TA, TB: unit tangents
// along the flow and across it; uv: the surface in metres (across, along); flow: the flow map's direction (uv per cycle);
// scroll: the steady scroll (uv); band, tilt: the ring band's height (0 trough .. 1 crest) and its slope along TA;
// shallow: how thin and lit-through (0 .. 1); deep: extra depth (0 .. 1); fres: how much it reflects; N: the final normal.
vec3 lqShade(vec3 W, vec3 N0, vec3 TA, vec3 TB, vec2 uv, vec2 flow, vec2 scroll, float band, float tilt, float shallow, float deep,
             float fres, float turqK, float onFloor, out vec3 N, out float hDet, out float caus) {
  vec4 A = lqFlow(uv / vec2(1.5000, 0.9000) + scroll, flow, 1.1111, uTime);
  vec4 B = lqFlow(uv / vec2(0.5000, 0.3400) + scroll * 1.7 + vec2(0.31, 0.17), flow * 1.4, 1.5873, uTime + 0.23);
  vec2 nxy = (A.xy * 2.0 - 1.0) * 0.8500 + (B.xy * 2.0 - 1.0) * 0.6000;
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
  float depth = 0.0500 + 1.5000 * (1.0 - band) + 0.6000 * (1.0 - hDet) - 0.8000 * shallow + 0.5000 * deep
    + 0.3500 * far - smoothstep(-0.05, 0.3, face) * 0.3000;
  vec3 cLit = mix(vec3(0.1119, 0.5711, 0.9473), vec3(0.1912, 0.8550, 0.9734), turqK * 0.4);
  vec3 cMid = mix(vec3(0.0273, 0.3005, 0.8796), vec3(0.0070, 0.4564, 0.8879), turqK);
  vec3 cDeep = mix(mix(vec3(0.0252, 0.2462, 0.8388), vec3(0.0160, 0.0953, 0.6724), far), vec3(0.0137, 0.2122, 0.8714), turqK * 0.5);
  vec3 col = mix(cLit, mix(vec3(0.0130, 0.5776, 0.9131), cMid, 0.5 + 0.5 * (1.0 - turqK)), smoothstep(0.05, 0.4, depth));
  col = mix(col, cMid, smoothstep(0.35, 0.7, depth));
  col = mix(col, cDeep, smoothstep(0.75, 1.1, depth));
  col = mix(col, vec3(0.0086, 0.0630, 0.6038), smoothstep(1.05, 1.4, depth));
  col = mix(col, vec3(0.0033, 0.0369, 0.4342), smoothstep(1.4, 1.85, depth));
  // light through the thin crests when looking toward the glow
  float back = pow(clamp(dot(-V, Lg), 0.0, 1.0), 3.0);
  col += vec3(0.1912, 0.8550, 0.9734) * smoothstep(0.6, 0.95, hDet) * (0.15 + 0.5 * back) * (0.3 + 0.7 * band) * 0.35;
  // caustic light playing in the water
  col += vec3(0.1912, 0.8550, 0.9734) * caus * caus * 0.3000 * (0.4 + 0.6 * band);
  // fresnel reflection of the tunnel's light
  vec3 R = reflect(-V, N);
  float F = clamp(0.03 + 0.97 * pow(1.0 - ndv, 4.0), 0.0, 1.0) * fres;
  col = mix(col, lqEnv(R), F);
  // specular: the glowing centre's sun-glint path (true white pinpoints in a cyan sheen) and the key light's glints
  vec3 Hg = normalize(Lg + V);
  float ng = max(dot(N, Hg), 0.0);
  float glint = pow(ng, 700.0) * 3.6000 + pow(ng, 90.0) * 0.6000 * (0.4 + 0.6 * hDet);
  float nk = max(dot(N, normalize(uLqKey + V)), 0.0);
  float key = pow(nk, 320.0) * 2.4000;
  col += vec3(0.4564, 0.7913, 1.0000) * pow(ng, 24.0) * 0.12;
  col += vec3(1.0000, 1.0000, 1.0000) * (glint + key);
  // twinkling pinpoints on the crests of the ripples
  vec2 sp = uv * vec2(3.0, 2.0) + scroll * 2.0, sc = floor(sp);
  float sh = lqHash(sc + 31.7);
  float star = 1.0 - smoothstep(0.0, 0.16, length(fract(sp) - 0.5 - (vec2(lqHash(sc + 3.1), lqHash(sc + 8.3)) - 0.5) * 0.6));
  col += vec3(1.0000, 1.0000, 1.0000) * step(0.93, sh) * star * smoothstep(0.55, 0.85, hDet) * pow(max(0.0, sin(uTime * (3.0 + sh * 4.0) + sh * 40.0)), 4.0) * 1.3000 * 2.0;
  // the coins, the socks and the gem reflected in the water
  col += lqObjects(W, N, V, R, hDet, onFloor);
  return col;
}


// ?s3=match: the walls' material derived from the approved picture (tunnel_r9_match.js)
uniform sampler2D uMatchCol, uMatchBase, uMatchDet, uMatchNrm, uMatchVar, uMatchRim; uniform float uMatchOn;
uniform vec2 uMatchVP, uMatchRes; uniform sampler2D uFocusRings;

vec3 mtRimS(vec2 d, float rho) {
  float ang = atan(d.y, -d.x);
  float uu = ang < 0.0 ? (ang < -1.5708 ? 1.0 : 0.0) : ang / 3.14159265;
  return texture2D(uMatchRim, vec2(uu, clamp((1.04000 - rho) / 0.24000, 0.0, 1.0))).rgb;
}


vec3 mtLin(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
vec3 mtUndisplay(vec3 c) {
  vec3 T = clamp(mtLin(c), 0.0, 0.93000);
  float np = max(T.r, max(T.g, T.b));
  vec3 x = T;
  if (np >= 0.76) {
    float peak = 0.0576 / (1.0 - np) - 0.24 + 0.76;
    float g = 1.0 - 1.0 / (0.15 * (peak - np) + 1.0);
    x = (T - np * g) / (1.0 - g) * (peak / np);
  }
  float mn = min(x.r, min(x.g, x.b));
  float off = mn >= 0.04 ? 0.04 : sqrt(max(mn, 0.0) / 6.25) - mn;
  vec3 g = max((x + off) / 1.05, 0.0);
  float L1 = max(dot(g, vec3(0.2126, 0.7152, 0.0722)), 1e-5);
  vec3 h = L1 + (g - L1) / 1.16000;
  float L0 = pow(L1 * pow(0.18, 0.08000) / 1.00000, 0.92593);
  return max(h * (L0 / L1), 0.0);
}

uniform vec2 uMatchPathVP;

void mtPlace(vec2 cs, float u, vec3 W, out float rw, out float tu) {
  vec2 rel = cs - uHeroCam.xy;
  float du = max(u - uHeroCam.z, 0.25);
  {   // ?s3=focus step 6: the point's real place seen from the camera, in the camera's own track frame (x along the track's
      // R, screen-left, as cs; h along its U; depth along its T). On a straight tube this is exactly cs - uHeroCam.xy and
      // u - uHeroCam.z; where the far tube bends it follows the bend, so the rings stay concentric on screen
    vec3 cw = W - cameraPosition;
    rel = vec2(dot(cw, uLqSide), dot(cw, uLqUp));
    du = max(dot(cw, uLqFwd), 0.25);
  }
  rw = length(rel) / du / uHeroTanW;
  vec2 at = vec2(-rel.x, rel.y);
  {   // ?s3=focus with the ring map (step 3): the whole ring field concentric round uMatchVP (where the original has its
      // centre), not only the inner part: the walls' 3D offset from the path's own vanishing point (uMatchPathVP), less
      // the offset of uMatchVP from it, in widths of the 1:2 reference frame (y up). Still on the 3D tube: as the camera moves
      // the rings move with it
    vec2 mtOff = (uMatchVP - uMatchPathVP) * uMatchRes / max(min(uMatchRes.x, 0.5 * uMatchRes.y), 1.0);
    vec2 mtV = at / du / uHeroTanW - mtOff * step(1.0, uMatchRes.x);
    rw = length(mtV); at = mtV;
  }
  vec2 sd = gl_FragCoord.xy - uMatchVP * uMatchRes;
  // (in widths of the 1:2 reference frame: on screens narrower than 1:2 the camera keeps the original's vertical framing
  // and uHeroTanW carries the 1:2 width, so the reference width is half the height; identical at 1:2)
  float rs = length(sd) / max(min(uMatchRes.x, 0.5 * uMatchRes.y), 1.0);
  float k = (1.0 - smoothstep(0.09000, 0.14000, rs)) * step(1.0, uMatchRes.x);
  rw = mix(rw, rs, k);
  vec2 ab = mix(at / max(length(at), 1e-5), sd / max(length(sd), 1e-5), k);
  tu = atan(ab.y, ab.x) / 6.2831853;
}


float fcH(vec2 i, float s) { return fract(sin(dot(i, vec2(12.9898, 78.233)) + s * 17.17) * 43758.5453); }
float fcNz(vec2 p, float s) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(fcH(i, s), fcH(i + vec2(1.0, 0.0), s), f.x), mix(fcH(i + vec2(0.0, 1.0), s), fcH(i + vec2(1.0, 1.0), s), f.x), f.y);
}

// cs: the point in the tube's cross-section (x sideways, + screen-left; h above the water), u along the path; W world, N0 its
// normal (toward the axis), T0 the path's direction
vec3 matchWall(vec2 cs, float u, vec3 W, vec3 N0, vec3 T0) {
  float rw, tu;
  mtPlace(cs, u, W, rw, tu);
  float lr = log(max(rw, 1e-4));
  vec2 bv = vec2(tu, (lr - -3.68888) / 3.52636);
  vec2 dx = dFdx(bv), dy = dFdy(bv);
  dx.x -= floor(dx.x + 0.5); dy.x -= floor(dy.x + 0.5);  // no mip seam where the angle wraps
  vec3 base = textureGrad(uMatchBase, bv, dx, dy).rgb;
  // the approved's own colours flowing outward (toward the viewer) and round: Water2's flow map on the clean colour map, two
  // samples whose offsets run half a cycle apart (each at most half a band from its place, so the approved's colour zones
  // stay where they are), cross-faded, the blend keeping the contrast round the static base (a plain cross-fade greys it)
  float cyc = uTime / 0.70000;
  float p0 = fract(cyc), p1 = fract(cyc + 0.5), wB = abs(0.5 - p0) * 2.0, wA = 1.0 - wB;
  vec2 oA = vec2(-0.01200 * (p0 - 0.5), -0.02269 * (p0 - 0.5));
  vec2 oB = vec2(-0.01200 * (p1 - 0.5) + 0.0037, -0.02269 * (p1 - 0.5));
  vec3 cA = textureGrad(uMatchCol, bv + oA, dx, dy).rgb, cB = textureGrad(uMatchCol, bv + oB, dx, dy).rgb;
  // (on the walls the bands round the blur a little crisper: the gate's F3)
  float wz = smoothstep(0.12000, 0.18000, rw);
  vec3 c = clamp(base + ((cA - base) * wA + (cB - base) * wB) / sqrt(wA * wA + wB * wB) * mix(1.0, 1.20000, wz), 0.0, 1.0);
  // the colourless maps (relief, streaks) scroll on continuously, without a seam (periodic)
  float fl = uTime * 0.07000 + uHeroTravel * 0.03000;
  vec2 dv = vec2(tu + uTime * 0.01200, (lr - -3.68888 - fl) / 2.99947);
  vec2 ddx = vec2(dx.x, dx.y * 1.17566), ddy = vec2(dy.x, dy.y * 1.17566);
  vec3 det = textureGrad(uMatchDet, dv, ddx, ddy).rgb - 0.5;
  vec4 vr = textureGrad(uMatchVar, dv, ddx, ddy);
  c = mix(c, vec3(1.0), vr.r * 0.06000 * (0.5 + 0.5 * sin(uTime * 3.1 + vr.b * 25.0 + tu * 40.0)));
  // the gate's F3 / F4 on the walls (not the centre, not the warm patches): the relief's troughs deep cobalt, its crests and
  // the streak map's highlights cyan
  float dl = dot(det, vec3(0.2126, 0.7152, 0.0722));
  float wk = wz * (1.0 - smoothstep(-0.02, 0.08, c.r - c.b));
  c = mix(c, vec3(0.23529, 0.33725, 0.81176), smoothstep(0.08000, 0.12000, -dl) * 0.42000 * wk);
  float gl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(c, vec3(0.18431, 0.69804, 0.96078), smoothstep(0.02000, 0.06000, dl + vr.r * 0.12000) * 0.85000 * wk * (1.0 - smoothstep(0.8, 0.94, gl)));   // (the whites kept)
  // the mid vortex's pastel lilac (blue above red above green) toward pale blue: red brought under green turns its hue
  // under 235 degrees
  float lil = clamp((c.b - c.r + 0.03) * 15.0, 0.0, 1.0) * smoothstep(0.03000, 0.06000, rw) * (1.0 - smoothstep(0.17000, 0.24000, rw));
  c.r = mix(c.r, min(c.r, c.g * 0.9), lil * 1.00000);
  // the approved's concentric bands spiralling into the centre (the user's first priority, 14:16 UTC: crisp bands, 7-10 per
  // sector, cobalt depth between them, no smooth open tube): a band phase in log r with a one-band-per-turn spiral, an
  // irregular spacing (the approved's log spacing varies by about 60%) and a wobble from the variation map, flowing outward;
  // in each band a dark cobalt gap and a broken cyan-white rim on the water's own colours. Faded where the bands get finer
  // than the pixels (seam-free: from the wrap-corrected derivatives)
  float mtEdge = 0.0; float mtFleck = 0.0;
  {
    float bs = lr * 3.40000 + tu * 1.00000 + 0.30000 * sin(lr * 2.60000 + 1.3) + (vr.b - 0.5) * 0.30000
      - uTime * 0.17000 - uHeroTravel * 0.10200;
    float bk = fract(bs);
    float aw = (abs(dx.y) + abs(dy.y)) * 11.98963 + (abs(dx.x) + abs(dy.x)) * 1.00000;
    float bz = smoothstep(0.03500, 0.06500, rw) * (1.0 - smoothstep(0.50000, 0.62000, rw)) * (1.0 - smoothstep(0.2, 0.45, aw));
    // (the water's cell pattern softened toward its blur inside the bands: it broke the rings up)
    c = mix(c, clamp(base + (c - base) * 0.5, 0.0, 1.0), 0.70000 * bz);
    // (the cobalt gaps and the azure light kept out of the warm core: the approved's inner rings are pink, peach and white)
    float bout = smoothstep(0.11000, 0.14000, rw);
    float gapK = smoothstep(0.60000, 0.86000, bk) * (1.0 - smoothstep(0.965, 1.0, bk)) * bz * bout;
    float rimK = (1.0 - smoothstep(0.00000, 0.11000, bk)) * mix(1.0, smoothstep(-0.12, 0.04, dl), 0.80000) * bz;
    float glowK = smoothstep(0.00000, 0.11000, bk) * (1.0 - smoothstep(0.30000, 0.60000, bk)) * bz * bout;
    float bl = dot(c, vec3(0.2126, 0.7152, 0.0722)), bkeep = 1.0 - smoothstep(0.0, 0.1, c.r - c.b);   // (the warm patches kept)
    c = mix(c, vec3(0.24706, 0.73725, 0.96863) * mix(0.9, 1.1, bl), glowK * 0.50000 * bkeep);
    c = mix(c, vec3(0.14902, 0.27451, 0.76863) * mix(0.85, 1.2, bl), gapK * 0.95000 * bkeep);
    // (inside the core's reach, where the cobalt is kept out, the gaps pastel pink: the approved's tight inner rings, pink,
    // peach and white, run right down to the centre coin)
    float ginK = smoothstep(0.60000, 0.86000, bk) * (1.0 - smoothstep(0.965, 1.0, bk)) * bz * (1.0 - bout);
    c = mix(c, vec3(0.90980, 0.65098, 0.81569) * mix(0.9, 1.08, bl), ginK * 0.80000);
    c = mix(c, vec3(0.81176, 0.91373, 1.00000), rimK * 0.40000);
    // white water broken over each band's lit part where the relief crests (the approved's turbulent splash bits along the
    // rings; blobs of the relief's own cells, not star shapes)
    float spK = smoothstep(0.09000, 0.14000, dl) * (1.0 - smoothstep(0.40000, 0.75000, bk)) * bz;
    c = mix(c, vec3(0.94902, 0.97255, 1.00000), spK * 1.00000);
    float fRq = bs;   // (?s3=focus: the ring map replaces the ribbons; the flecks follow the band phase)
    {   // ?s3=focus: the white splash flecks and streaks (tunnel_r9_focus.js)
      float fz = smoothstep(0.07000, 0.12000, rw) * (1.0 - smoothstep(0.62000, 0.80000, rw)) * bz;
      float flit = mix(1.0, 1.0 - smoothstep(0.35, 0.7, fract(fRq)), 0.30000);   // more on each ribbon's lit edge
      float fa = tu + uTime * 0.01920;
      vec2 fq = vec2(fa * 36.00000, fRq * 1.50000);
      vec2 fi = floor(fq); fi.x = mod(fi.x, 36.00000);
      float fh = fract(sin(dot(fi, vec2(12.9898, 78.233))) * 43758.5453);
      float fh2 = fract(fh * 17.13), fh3 = fract(fh * 31.71);
      vec2 fo = fract(fq) - 0.5 - (vec2(fh2, fh3) - 0.5) * vec2(0.35, 0.45);
      fo.y += fo.x * fo.x * (fh2 - 0.5) * 2.20000;
      float fe = length(vec2(fo.x / mix(0.20000, 0.46000, fh3), fo.y / mix(0.07000, 0.14000, fh2)));
      float fpx = 1.0 - smoothstep(0.22000, 0.50000, aw * 1.50000);
      float fk = step(0.88000, fh) * (1.0 - smoothstep(0.78000, 0.90000, fe)) * fpx;
      // (the Art Director's item 4: broken splash shapes, not clean dashes: the shape's edge eaten by smooth noise, so it
      // breaks into an irregular blob with a ragged outline and a gap or two)
      fk *= smoothstep(0.42, 0.58, fcNz(fq * vec2(6.00000, 3.00000) + fh * 31.0, 7.0) + (1.0 - fe) * 0.55000);
      vec2 dq = vec2(fa * 64.00000, fRq * 2.00000 + 0.37);
      vec2 di = floor(dq); di.x = mod(di.x, 64.00000);
      float dh = fract(sin(dot(di, vec2(39.3468, 11.1351))) * 24634.6345);
      vec2 dO = fract(dq) - 0.5 - (vec2(fract(dh * 13.7), fract(dh * 7.31)) - 0.5) * 0.4;
      float dr = mix(0.16000, 0.28000, fract(dh * 23.1));
      float dpx = 1.0 - smoothstep(0.22000, 0.50000, aw * 2.00000);
      float dk = step(0.96000, dh) * (1.0 - smoothstep(dr * 0.7, dr, length(dO * vec2(0.72, 1.0)))) * dpx;
      mtFleck = clamp(max(fk, dk * 0.9) * fz * flit, 0.0, 1.0) * 0.00000;
    }
    // the approved's brightest texels are a dense net of thin ice-blue (#cae0ff) ring lines across every band: a thin line
    // at each band's inner edge and a sparser one inside it, both broken into arcs by the relief (MATCH.walls.bands.edge)
    float eK = (1.0 - smoothstep(0.02000, 0.04500, bk)) * smoothstep(-0.13000, -0.07000, dl) * bz;
    float e2 = (1.0 - smoothstep(0.01250, 0.02500, abs(bk - 0.42000))) * smoothstep(0.0, 0.05, dl) * bz * bout;
    mtEdge = max(eK, e2 * 0.60000) * 0.20000;   // (drawn after the display compensation, below)
  }
  {   // the approved's pastel rainbow arc above the centre (pink at the left, peach and pale yellow over the top and right),
      // across the bands, on the upper half (MATCH.walls.rainbow)
    float ra = tu * 6.2831853;                         // 0 = screen right, pi/2 = up
    float rk = exp(-pow((rw - 0.22500) / 0.02800, 2.0)) * smoothstep(-0.15, 0.35, sin(ra)) * 0.45000;
    float rq = clamp((rw - 0.22500) / 0.02800 * 0.5 + 0.5, 0.0, 1.0);   // inner -> outer across the arc
    vec3 rc = mix(vec3(0.95686, 0.72549, 0.90196), vec3(1.00000, 0.82745, 0.62745), smoothstep(0.0, 0.5, rq));
    rc = mix(rc, vec3(1.00000, 0.94510, 0.69020), smoothstep(0.5, 1.0, rq));
    rc = mix(rc, vec3(0.96078, 0.60392, 0.84706), smoothstep(0.2, -0.6, cos(ra)) * 0.6);   // pinker on the left
    float rl = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = mix(c, rc * mix(0.85, 1.08, rl), rk);
  }
  {   // the mid vortex's bright pale blue toward the approved's white water (MATCH.walls.midWhite; the warm patches kept)
    float mz = smoothstep(0.04000, 0.07000, rw) * (1.0 - smoothstep(0.12000, 0.17000, rw));
    float ml = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float mk = mz * smoothstep(0.66000, 0.82000, ml) * (1.0 - smoothstep(0.0, 0.1, c.r - c.b)) * 0.90000;
    c = mix(c, min(vec3(ml * 0.97, ml * 1.0, ml * 1.04) + 0.04, 1.0), mk);
  }
  // the core's pale lilac rows toward warm white (blue brought down to the larger of red and green)
  float coreK = 1.0 - smoothstep(0.03500, 0.08500, rw);
  c.b = mix(c.b, min(c.b, max(c.r, c.g) * 1.02), coreK * 1.00000);
  gl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(c, c * vec3(0.76000,0.86000,1.00000), smoothstep(0.88000, 0.98000, gl) * 0.70000 * wz * (1.0 - smoothstep(0.0, 0.08, c.r - c.b)));
  c = mix(c, min(c * vec3(1.00000,0.94000,0.92000), 1.0), (1.0 - smoothstep(0.03500, 0.08500, rw)) * 0.50000);
  {   // ?s3=focus: the original's pastel inner rings round the warm core (tunnel_r9_focus.js walls.innerRings)
    float iz = smoothstep(0.03000, 0.04500, rw) * (1.0 - smoothstep(0.11500, 0.13500, rw));
    float ik = fract(lr * 3.40000 + tu * 1.00000 + (vr.b - 0.5) * 0.30000 - uTime * 0.17000 - uHeroTravel * 0.10200
      + 0.18000 * sin(6.2831853 * tu * 2.0 + lr * 1.6 + uTime * 0.35));   // (bent a little, as the original's: not a target)
    float ipk = smoothstep(0.43000, 0.53000, ik) * (1.0 - smoothstep(0.75000, 0.85000, ik));
    vec3 iring = mix(vec3(0.87455, 0.67612, 0.89860), vec3(0.90810, 0.71869, 0.66758), 1.0 - smoothstep(0.07000, 0.08500, rw));
    float iwk = smoothstep(0.17000, 0.27000, ik) * (1.0 - smoothstep(0.35000, 0.45000, ik));
    vec3 icol = mix(mix(vec3(0.66487, 0.76710, 0.92945), vec3(0.96598, 0.95396, 0.97801), iwk), iring, ipk);
    c = mix(c, icol, iz * 0.90000);
  }
  {   // ?s3=focus: the left wall's pale glowing water (tunnel_r9_focus.js walls.leftGlow)
    float lw = smoothstep(0.45000, 0.80000, cos(6.2831853 * tu - 3.40339)) * smoothstep(0.20000, 0.30000, rw);
    float ll = dot(c, vec3(0.2126, 0.7152, 0.0722));
    vec3 lpal = mix(c, vec3(0.66660, 0.80490, 0.94320), smoothstep(0.25000, 0.50000, ll));   // (dark null: the darks kept vivid)
    lpal = mix(lpal, vec3(0.97230, 0.97831, 0.99335), smoothstep(0.45000, 0.66000, ll));
    c = mix(c, lpal, lw * 0.90000);
  }
  {   // the walls' electric blue toward the approved's royal hue (its median 215 degrees against our 210): hue 203-216 pulled
      // to about 218 by bringing green down; the cyan streaks (205 degrees and under) and the warm patches kept (MATCH.walls.royal)
    float tq = (c.g - c.r) / max(c.b - c.r, 1e-4);   // 0 at 240 degrees, 1 at 180 (blue above green above red)
    float rk = step(c.r, c.g) * step(c.g, c.b) * smoothstep(0.3, 0.42, tq) * (1.0 - smoothstep(0.52, 0.58, tq)) * wz * 0.10000;
    c.g = mix(c.g, c.r + 0.37000 * (c.b - c.r), rk);
  }
  {   // ?s3=focus: the original's own rings (tunnel_rings_original.png, tools/screen4/derive_ring_map.py)
    vec3 rmS = clamp(textureGrad(uFocusRings, bv, dx, dy).rgb + dl * 0.00000, 0.0, 1.0);
    {   // (step 8, ringMap.gain [saturation, depth]: the map's colours calibrated so the RENDERED walls show the original's
        // measured cobalt; the whites stay white: saturation round the luminance, then a power curve that deepens the
        // mid-tones and leaves 1.0 at 1.0)
      float gL = dot(rmS, vec3(0.2126, 0.7152, 0.0722));
      rmS = pow(clamp(gL + (rmS - gL) * 1.15000, 0.0, 1.0), vec3(1.15000));
    }
    float rmL = dot(rmS, vec3(0.2126, 0.7152, 0.0722));
    vec3 rmP = clamp((rmL + (rmS - rmL) / 1.20000) * 0.92000 + 0.08000, 0.0, 1.0);
    float rmK = 1.00000 * smoothstep(0.00000, 0.00500, rw) * (1.0 - smoothstep(0.46000, 0.56000, rw));
    c = mix(c, rmP, rmK);
    mtEdge *= 1.0 - rmK * 1.00000;
  }
  c = clamp((c - 0.08000) / 0.92000, 0.0, 1.0);   // (focus: match's one lift at 9a95c06)
  float cl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = clamp(cl + (c - cl) * 1.20000, 0.0, 1.0);
  vec3 col = mtUndisplay(c);
  // the thin ice-blue ring lines, a little over the whites' cap so they are the brightest texels (as the approved's)
  col = mix(col, mtUndisplay(vec3(0.76078, 0.86275, 1.00000)) * 1.12000, mtEdge);
  col = mix(col, mtUndisplay(vec3(0.96471, 0.98431, 1.00000)), mtFleck);   // ?s3=focus: the white splashes (focusFlecksGLSL, late)

  // glossy light on the derived relief: the glowing centre ahead and the key light behind the camera
  vec2 nm = textureGrad(uMatchNrm, dv, ddx, ddy).rg * 2.0 - 1.0;
  vec3 TA = normalize(T0 - N0 * dot(T0, N0)), TB = normalize(cross(N0, TA));
  vec3 N = normalize(N0 + TB * nm.x * 1.4 - TA * nm.y * 1.4);
  vec3 V = normalize(cameraPosition - W);
  float sg = pow(max(dot(N, normalize(normalize(uLqGlow - W) + V)), 0.0), 90.0);
  float sk = pow(max(dot(N, normalize(uLqKey + V)), 0.0), 160.0);
  float crest = smoothstep(-0.02, 0.12, dot(det, vec3(0.2126, 0.7152, 0.0722)));
  col += vec3(0.82, 0.95, 1.0) * (sg * 0.8 + sk) * 0.15000 * crest;
  return col;
}
uniform mat4 uBwRef; uniform float uBwOn; uniform sampler2D uBwTex;

// ?s3=match: the floor's water, the walls' derived map at the same place (tunnel_r9_match_water.js). cs: (x, h) in the track's
// cross-section, u along the path; W world; N0 the surface's normal (up), T0 the path's direction; Nw the liquid's wave normal,
// hDet its wave height (0 trough .. 1 crest), caus its caustic web; onWall: 1 where the water meets the walls (the walls' own look);
// nearK: 1 round the character (the water there deeper, vivid electric blue as approved); soft: the map's blur instead of its
// detail (on the swell, where the lower water's cell pattern read as cracked glass)
vec3 matchFloor(vec2 cs, float u, vec3 W, vec3 N0, vec3 T0, vec3 Nw, float hDet, float caus, float onWall, float nearK, float soft, float fx) {
  float rw, tu;
  mtPlace(cs, u, W, rw, tu);   // the walls' place, corrected at the centre (tunnel_r9_match.js matchPlaceGLSL)
  float lr = log(max(rw, 1e-4));
  vec2 bv = vec2(tu, (lr - -3.68888) / 3.52636);
  vec2 dx = dFdx(bv), dy = dFdy(bv);
  dx.x -= floor(dx.x + 0.5); dy.x -= floor(dy.x + 0.5);
  vec3 base = textureGrad(uMatchBase, bv, dx, dy).rgb;
  // the walls' flow (the same two-phase flow map, so floor and walls meet without a seam)
  float cyc = uTime / 0.70000;
  float p0 = fract(cyc), p1 = fract(cyc + 0.5), wB = abs(0.5 - p0) * 2.0, wA = 1.0 - wB;
  vec2 oA = vec2(-0.01200 * (p0 - 0.5), -0.02269 * (p0 - 0.5));
  vec2 oB = vec2(-0.01200 * (p1 - 0.5) + 0.0037, -0.02269 * (p1 - 0.5));
  vec3 cA = textureGrad(uMatchCol, bv + oA, dx, dy).rgb, cB = textureGrad(uMatchCol, bv + oB, dx, dy).rgb;
  vec3 c = clamp(base + ((cA - base) * wA + (cB - base) * wB) / sqrt(wA * wA + wB * wB), 0.0, 1.0);
  c = mix(c, base, soft);
  float fl = uTime * 0.07000 + uHeroTravel * 0.03000;
  vec2 dv = vec2(tu + uTime * 0.01200, (lr - -3.68888 - fl) / 2.99947);
  vec2 ddx = vec2(dx.x, dx.y * 1.17566), ddy = vec2(dy.x, dy.y * 1.17566);
  vec3 det = textureGrad(uMatchDet, dv, ddx, ddy).rgb - 0.5;
  vec4 vr = textureGrad(uMatchVar, dv, ddx, ddy);
  c = mix(c, vec3(1.0), vr.r * 0.06000 * (0.5 + 0.5 * sin(uTime * 3.1 + vr.b * 25.0 + tu * 40.0)));
  float gl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(c, c * vec3(0.84000,0.92000,1.00000), smoothstep(0.78000, 0.96000, gl) * 0.85000);
  c = mix(c, min(c * vec3(1.00000,0.94000,0.92000), 1.0), (1.0 - smoothstep(0.03500, 0.08500, rw)) * 0.50000);
  // the map's pastel lilac (blue above red above green) pulled toward pale blue on the floor, away from the warm core
  float lil = clamp((c.r - c.g) * 12.0, 0.0, 1.0) * clamp((c.b - c.r) * 12.0, 0.0, 1.0) * smoothstep(0.05, 0.1, rw) * (1.0 - onWall);
  c.r = mix(c.r, c.g * 0.92, lil * 0.85000);
  // round the character the pale cyan streams turn toward vivid electric blue (the approved: electric blue beside the body)
  c = mix(c, c * vec3(0.60000,0.80000,1.00000), nearK * 0.85000);
  // the floor's own water on the map (none where it meets the walls): the liquid's moving waves lit toward the glow and shaded
  // away from it, cobalt in their troughs; fading out far away (the map's own detail is finer there than the waves)
  float fk = (1.0 - onWall) * smoothstep(0.035, 0.12, rw);
  vec3 Lg = normalize(uLqGlow - W);
  float face = clamp(dot(Nw - N0 * dot(Nw, N0), Lg) * 3.0, -1.0, 1.0);
  c = clamp(c * (1.0 + face * 0.22000 * fk), 0.0, 1.0);
  c = mix(c, vec3(0.05490, 0.30980, 0.81569), smoothstep(0.45, 0.1, hDet) * 0.35000 * fk);
  c = mix(c, (1.0 - (1.0 - c) * (1.0 - vec3(0.62, 0.9, 1.0))), clamp(caus * caus * 0.55000 * 2.0, 0.0, 1.0) * fk);
  c = clamp((c - 0.08000) / 0.92000, 0.0, 1.0);
  float cl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = clamp(cl + (c - cl) * 1.20000, 0.0, 1.0);
  {   // ?s3=focus: the floor ahead as the original's pale blue-white water (tunnel_r9_match_water.js focusFloorGLSL)
    float ffK = fk * fx;
    float ffLil = clamp((c.r - c.g) * 20.0, 0.0, 1.0) * clamp((c.b - c.r) * 20.0, 0.0, 1.0);
    c.r = mix(c.r, c.g * 0.8, ffLil * 1.00000 * ffK);
    c = mix(c, vec3(0.71373, 0.86275, 0.96471), 0.00000 * ffK);
    vec2 ffQ = vec2(tu * 20.00000, (lr - -3.68888 - fl) * 9.00000), ffI = floor(ffQ);
    ffQ.x += lqHash(vec2(ffI.y, 7.1)) * 0.5;   // (rows offset, so the streaks do not line up)
    ffI = floor(ffQ);
    vec2 ffO = fract(ffQ) - 0.5;
    float ffH = lqHash(ffI + 3.3);
    float ffL = mix(0.60000, 1.00000, lqHash(ffI + 5.7)) * 0.5;
    float ffT = mix(0.35000, 0.75000, lqHash(ffI + 9.1)) * 0.5;
    float ffAl = clamp(abs(ffO.x) / ffL, 0.0, 1.0);
    float ffY = ffO.y - (lqHash(ffI + 11.9) - 0.5) * 0.3 - 0.12000 * (ffAl * ffAl - 0.3) * (ffH > 0.5 ? 1.0 : -1.0);
    float ffShape = (1.0 - smoothstep(0.8, 1.0, ffAl)) * (1.0 - smoothstep(ffT * (1.0 - 0.6 * ffAl * ffAl) * 0.6, ffT * (1.0 - 0.6 * ffAl * ffAl), abs(ffY)));
    // clustered in irregular bands (white water) with blue dashes between (the original's floor ahead)
    float ffB = smoothstep(0.20000, 0.50000, texture2D(uLqTex, vec2(tu * 3.00000, (lr - -3.68888 - fl) * 1.50000)).b);
    float ffS = step(1.0 - 0.95000 * ffB, ffH) * ffShape;
    float ffD = step(ffH, 0.35000) * ffShape;
    c = mix(c, vec3(0.30980, 0.62353, 0.94118), ffD * 0.75000 * ffK);
    c = mix(c, vec3(0.96471, 0.98431, 1.00000), ffS * 0.95000 * ffK);
  }
  {   // ?s3=focus: the original's own floor water and rings (tunnel_r9_match_water.js focusFloorRingsGLSL)
    vec3 frS = clamp(textureGrad(uFocusRings, bv, dx, dy).rgb + dot(det, vec3(0.2126, 0.7152, 0.0722)) * 0.00000, 0.0, 1.0);
    c = mix(c, frS, 0.88000 * fx * (1.0 - smoothstep(0.22000, 0.32000, rw)));
  }
  vec3 col = mtUndisplay(c);
  // glossy light: the derived relief's glints (as on the walls) and the liquid waves' glints toward the glow and the key light
  vec2 nm = textureGrad(uMatchNrm, dv, ddx, ddy).rg * 2.0 - 1.0;
  vec3 TA = normalize(T0 - N0 * dot(T0, N0)), TB = normalize(cross(N0, TA));
  vec3 N = normalize(N0 + TB * nm.x * 1.4 - TA * nm.y * 1.4);
  vec3 V = normalize(cameraPosition - W);
  float sg = pow(max(dot(N, normalize(Lg + V)), 0.0), 90.0);
  float sk = pow(max(dot(N, normalize(uLqKey + V)), 0.0), 160.0);
  float crest = smoothstep(-0.02, 0.12, dot(det, vec3(0.2126, 0.7152, 0.0722)));
  col += vec3(0.82, 0.95, 1.0) * (sg * 0.8 + sk) * 0.15000 * crest;
  float wg = pow(max(dot(Nw, normalize(Lg + V)), 0.0), 400.0) + pow(max(dot(Nw, normalize(uLqKey + V)), 0.0), 300.0) * 0.6;
  col += vec3(0.85, 0.95, 1.0) * wg * 1.30000 * smoothstep(0.55, 0.85, hDet) * fk;
  return col;
}
uniform vec4 uTunnel; uniform vec3 uLqPlayer; uniform vec4 uLqMove;
uniform vec4 uS4Haz[6]; uniform vec3 uS4Warn;
varying vec3 vW, vN, vTrk, vR, vT; varying float vA;
void main() {
  vec2 xu = vTrk.xz;
  float inDrum = clamp((xu.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xu.y) * 0.5, 0.0, 1.0);
  // the rings run on over the water from the walls (one whirlpool): weaker close to the character, where its own water is
  float rw, ang, id, spacing;
  float k = lqRing(vec2(xu.x, vTrk.y), xu.y, rw, ang, id, spacing);
  vec2 toP = xu - uLqPlayer.xz; float rP = length(toP * vec2(1.0, 0.7));
  float ringK = 0.7500 * smoothstep(1.2, 3.5, rP) * smoothstep(0.02, 0.06, rw);
  float aa = clamp(1.0 - fwidth(k + id) * 1.5, 0.0, 1.0);
  float band = mix(0.75, lqBand(k), ringK * aa);
  float tilt = (lqBand(k + 0.03) - lqBand(k - 0.03)) / 0.06 * 0.5500 * ringK * aa;
  // meeting the walls: the water climbs them (its normal turns toward the wall's), so floor and walls are one liquid
  float halfW = 1.32;
  float side = smoothstep(halfW - 0.35, halfW, abs(xu.x)) * inDrum;
  vec3 wallN = normalize(vec3(0.0) - vR * sign(xu.x) * 0.66 + normalize(cross(vT, vR)) * 0.75);
  vec3 N0 = normalize(mix(normalize(vN), wallN, side * 0.6));
  // flow: along the path, a slow swirl in the drum, and round the character (the water parts round its body)
  float sw = sin(xu.y * 0.45 - uTime * 0.5) * 0.4500 * (0.3 + 0.7 * inDrum);
  vec2 part = toP / max(rP, 0.3) * exp(-rP * rP / 1.2) * 0.5;
  vec2 flow = vec2(sw + part.x, 0.25 + part.y * 0.5);
  vec2 scroll = vec2(0.0, uTime * 3.2000 / 0.9000);   // toward the rider
  vec3 TA = normalize(vT - N0 * dot(vT, N0)), TB = normalize(cross(TA, N0));
  vec3 N; float hDet, caus;
  float near = exp(-rP * rP / 2.5);
  vec3 col = lqShade(vW, N0, TA, TB, vec2(xu.x, xu.y), flow, scroll, band, tilt, near * 0.15, 0.0, 0.4200, 1.0 - side * 0.4, 1.0, N, hDet, caus);
  // far away the floor joins the whirlpool's rings round the centre
    vec3 tr = vec3(1.0000, 0.6445, 0.3325), bd = vec3(1.0000, 0.7991, 0.5520), cr = vec3(1.0000, 0.9387, 0.8388);
    { float q = smoothstep(0.0200, 0.0500, rw); tr = mix(tr, vec3(0.9047, 0.4564, 0.1946), q); bd = mix(bd, vec3(1.0000, 0.6514, 0.3515), q); cr = mix(cr, vec3(1.0000, 0.8070, 0.5776), q); }
    { float q = smoothstep(0.0500, 0.0800, rw); tr = mix(tr, vec3(0.8632, 0.5647, 0.4564), q); bd = mix(bd, vec3(0.9647, 0.7682, 0.6584), q); cr = mix(cr, vec3(1.0000, 0.9216, 0.8550), q); }
    { float q = smoothstep(0.0800, 0.1100, rw); tr = mix(tr, vec3(0.0080, 0.2542, 0.7913), q); bd = mix(bd, vec3(0.0144, 0.4452, 0.9047), q); cr = mix(cr, vec3(0.2705, 0.8228, 1.0000), q); }
    { float q = smoothstep(0.1100, 0.1350, rw); tr = mix(tr, vec3(0.0070, 0.0802, 0.6308), q); bd = mix(bd, vec3(0.0232, 0.2623, 0.8714), q); cr = mix(cr, vec3(0.1144, 0.6445, 0.9647), q); }
    { float q = smoothstep(0.1350, 0.1500, rw); tr = mix(tr, vec3(0.0086, 0.0630, 0.6038), q); bd = mix(bd, vec3(0.0273, 0.3005, 0.8796), q); cr = mix(cr, vec3(0.1912, 0.8550, 0.9734), q); }
    { float q = smoothstep(0.1500, 0.1900, rw); tr = mix(tr, vec3(0.0086, 0.0630, 0.6038), q); bd = mix(bd, vec3(0.0273, 0.3005, 0.8796), q); cr = mix(cr, vec3(0.1119, 0.5711, 0.9473), q); }
    { float q = smoothstep(0.1900, 0.2400, rw); tr = mix(tr, vec3(0.0123, 0.1144, 0.7454), q); bd = mix(bd, vec3(0.0685, 0.3813, 0.9047), q); cr = mix(cr, vec3(0.6584, 0.8963, 1.0000), q); }
    { float q = smoothstep(0.2400, 0.2900, rw); tr = mix(tr, vec3(0.0060, 0.0497, 0.5271), q); bd = mix(bd, vec3(0.0091, 0.3916, 0.9047), q); cr = mix(cr, vec3(0.1912, 0.8550, 0.9734), q); }
    { float q = smoothstep(0.2900, 0.3600, rw); tr = mix(tr, vec3(0.0030, 0.0284, 0.3813), q); bd = mix(bd, vec3(0.0137, 0.1878, 0.8714), q); cr = mix(cr, vec3(0.1119, 0.5711, 0.9473), q); }
    { float q = smoothstep(0.3600, 0.4300, rw); tr = mix(tr, vec3(0.0060, 0.0497, 0.5271), q); bd = mix(bd, vec3(0.0273, 0.3005, 0.8796), q); cr = mix(cr, vec3(0.0018, 0.6240, 0.9823), q); }
  
  col = mix(col, mix(bd, cr, lqBand(k) * 0.5), smoothstep(0.14, 0.04, rw) * 0.8);
  {   // ?s3=match: the walls' water continued onto the floor (tunnel_r9_match_water.js)
    float mwNear = exp(-rP * rP / 5.76000);
    vec3 mwCol = matchFloor(vec2(xu.x, vTrk.y), xu.y, vW, N0, normalize(vT), N, hDet, caus, side, mwNear, 0.0, 1.0);
    col = mix(col, mwCol, uMatchOn * 1.00000);
  }
  float s4Haz = 0.0;
  if (inDrum > 0.0) {   // a brush's warning, as on the drum's own water (tunnel_s4.js): a pulsing pink glow down its lane
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
    col += vec3(0.5210, 0.8632, 1.0000) * exp(-pow((abs(xu.x) - 0.35) / 0.035, 2.0)) * dash * 0.12 * inDrum;   // faint lane guides
  }

#if LQ_FOAM
  {   // the foam layer: thin broken white on the crests, sparse flecks, streaks along the wake, lace where it meets the walls
    float patchF = texture2D(uLqTex, xu * vec2(0.13, 0.07) + vec2(0.0, -uTime * 0.06)).b;
    float crestF = smoothstep(0.8, 0.93, hDet) * smoothstep(0.55, 0.8, patchF) * 0.8500;
    vec2 fc = xu * vec2(9.0, 5.0) + vec2(0.0, -uTime * 3.2000 * 5.0 / 0.9000 * 0.0), fi = floor(fc);
    float fleck = step(0.955, lqHash(fi + 5.3)) * (1.0 - smoothstep(0.12, 0.3, length(fract(fc) - 0.5))) * 0.3500;
    float behind = max(-toP.y, 0.0), arm = 0.42 + behind * 0.36;
    float px = toP.x + uLqMove.x * behind / max(uLqMove.y * 7.0, 1.0) * 0.8;
    float wakeF = exp(-pow((abs(px) - arm) / 0.09, 2.0)) * exp(-behind / 3.0) * smoothstep(0.2, 0.8, behind) * smoothstep(0.45, 0.7, hDet + patchF * 0.3) * 0.8000;
    float laceF = side * smoothstep(0.5, 0.75, hDet + caus * 0.5) * 0.6000;
    float foam = clamp(max(max(crestF, fleck), max(wakeF, laceF)), 0.0, 1.0) * (1.0 - s4Haz);
    col = mix(col, mix(vec3(0.6240, 0.7913, 1.0000), vec3(0.9216, 0.9647, 1.0000), smoothstep(0.3, 0.8, hDet)), foam * 0.78);   // translucent: blue shows through
  }
  {   // ?s3=splash: lacy foam on the water round the swell's foot, beside and in front of the character (tunnel_r8_splash.js)
    float ap = smoothstep(0.7500, 1.1000, rP) * (1.0 - smoothstep(1.5000, 2.4000, rP));
    ap *= 0.3 + 0.7 * smoothstep(0.35, 1.2, abs(toP.x));   // mostly beside it: the water straight in front stays blue
    vec2 fu = xu * vec2(0.9, 0.65) + vec2(0.0, uTime * 0.3);
    float b1 = texture2D(uLqTex, fu).b, b2 = texture2D(uLqTex, fu * 2.3 + vec2(0.43, 0.17)).b, web = texture2D(uLqTex, fu * 3.1 + 0.2).a;
    float lace = smoothstep(0.6, 0.7, b1 * 0.62 + b2 * 0.5 + hDet * 0.12) * (1.0 - 0.55 * smoothstep(0.4, 0.8, web));   // foam clumps, bubbly inside
    float ak = clamp(lace * ap * 0.1300 * (1.0 + uLqMove.w * 0.6) * (1.0 - s4Haz), 0.0, 1.0);
    col = mix(col, mix(vec3(0.1529, 0.5029, 0.9301), vec3(0.9047, 0.9647, 1.0000), smoothstep(0.5, 0.75, b1 + hDet * 0.2)), ak * 0.88);
  }
#endif
  col = mix(col, vec3(0.5520, 0.8879, 1.0000), clamp(s4Haz * 1.7, 0.0, 1.0) * 0.3000);   // softer than the drum sheet (0.8): a glow under the water (?s3=focus: in the water's colours, LIQUID.hazard)

  gl_FragColor = vec4(col, vA);

}
