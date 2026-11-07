

uniform vec4 uTunnel;   // start z, end z, radius, axis height
uniform float uTime;
float bwSmooth(float a, float b, float x) { float t = clamp((x - a) / (b - a), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
float bwHills(float z) {
  if (z <= -16.700 || z >= -1.000) return 0.0;
  if (z < -11.800) return mix(0.000, -0.500, bwSmooth(-16.700, -11.800, z));
  if (z < -5.600) return mix(-0.500, 0.360, bwSmooth(-11.800, -5.600, z));
  return mix(0.360, 0.000, bwSmooth(-5.600, -1.000, z));
}
float bwBase(vec2 xz) {
  float before = clamp((uTunnel.x - xz.y) * 0.5, 0.0, 1.0);
  float ax = abs(xz.x);
  float crown = 0.100 * clamp(1.0 - ax * ax / 1.210, 0.0, 1.0);
  float edge = bwSmooth(1.100, 1.650, ax);
  float slide = before * mix(crown + bwHills(xz.y), -0.600, edge);
  float inside = clamp((xz.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xz.y) * 0.5, 0.0, 1.0);
  float swell = inside * 0.100 * sin((xz.y - uTunnel.x) * 0.84908);
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


uniform vec3 uLqPlayer;   // the character: x, the water's height under it, u
uniform vec4 uLqMove;     // sideways speed (m/s), speed (share of the cruise speed), in the air (0..1), just landed (1 .. 0)
uniform vec4 uRipples[8];
// the game's water level, with the slide's spill beside it rising to the slide's level in front of the washer (one pool)
float lqBase(vec2 xz) {
  float before = clamp((uTunnel.x - xz.y) * 0.5, 0.0, 1.0);
  float ax = abs(xz.x);
  float crown = 0.1000 * clamp(1.0 - ax * ax / 1.2100, 0.0, 1.0);
  float edge = bwSmooth(1.1000, 1.6500, ax);
  float moat = -0.6000 * (1.0 - bwSmooth(-3.5993, -0.5993, xz.y));
  float slide = before * mix(crown + bwHills(xz.y), moat, edge);
  float inside = clamp((xz.y - uTunnel.x) * 0.5, 0.0, 1.0) * clamp((uTunnel.y - xz.y) * 0.5, 0.0, 1.0);
  float swell = inside * 0.1000 * sin((xz.y - uTunnel.x) * 0.8491);
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
  for (int i = 0; i < 8; i++) {
    vec4 q = uRipples[i];
    float age = t - q.z;
    if (age < 0.0 || age > 2.5 || q.w <= 0.0) continue;
    float dd = length(xz - q.xy) - age * 2.4;
    rip += sin(dd * 9.0) * exp(-dd * dd * 6.0) * exp(-age * 1.6) * 0.045 * q.w;
  }
  return ridge + trans + ring + land + rip;
}
float lqHeight(vec2 xz, float t) { return lqBase(xz) + bwWaves(xz, t) + lqWake(xz, t); }

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
  vA = uLqAlpha * smoothstep(-8.0993, -5.5993, aTrack.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
