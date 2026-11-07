
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
  float pile = 1.0 + clamp(side * uLat * 0.0500, -0.3, 0.3) * smoothstep(0.1, 0.8, abs(p.x));
  float lift = uFade * pile * (1.0 - uAir * 0.5500) * (1.0 + uLand * 0.1200);
  if (p.y > 0.0) p.y = p.y * lift + run * 0.0160 * top * uFade;
  // landing: thrown outward; swerving: the far ends drag behind
  float r = length(p.xz); p.xz += (r > 1e-3 ? p.xz / r : vec2(0.0)) * uLand * 0.12 * top;
  p.x -= uLat * 0.025 * smoothstep(0.3, 1.0, abs(p.x));
  float X = uPX + p.x; X = sign(X) * min(abs(X), uXMax); p.x = X - uPX;   // inside the drum: off the walls
  vec3 w = uC + uR * p.x + uU * p.y + uT * p.z;
  vW = w; vN = normalize(uR * normal.x + uU * normal.y + uT * normal.z);
  vS = vec4(s, aSurf.y, max(aSurf.z * max(lift, 0.3) - run * 0.0160 * top * uFade, 0.0), H);
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
