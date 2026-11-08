# water-vfx-engineer: flume and lower-path water spec (read-only)

Session b0abcf95, 8 November 2026.

Tools used successfully: Read, Bash (grep, sed, wc). Nothing was edited and no browser was launched.

# Spec: side flumes and lower-path chute for the Level 1 water

**Where the water sits now:** past u 37.2, `W.baseHeight` is 0, because its `inside` and `before` terms are both zero. So everything below can be added to it as an offset.

## 1. Chute heightfield (`wetChunk`)
```js
const D = { u0: 168, len: 3, depth: 1.4, inner: 0.5, step: 0.16, ledge: [172, 175], rec: [176, 186] };
const keepD = (u) => 1 - smooth(D.rec[0], D.rec[1], u);   // back to 0 during the track's own downhill (pitch bump 176-186): reads as downhill, not a climb
const dropOff = (x, u) => -D.depth * keepD(u) * Math.max(smooth(D.u0, D.u0 + D.len, u) * (1 - smooth(D.inner, D.inner + D.step, Math.abs(x))), smooth(D.ledge[0], D.ledge[1], u));
const fine = (u) => (u > D.u0 - 0.8 && u < D.u0 + D.len + 0.8) || (u > D.ledge[0] - 0.5 && u < D.ledge[1] + 0.5);
const us = [u0]; while (us.at(-1) < u1 - 1e-6) us.push(Math.min(u1, us.at(-1) + (fine(us.at(-1)) ? 0.15 : 0.4)));
// rows = us.length; u = us[i]; h = W.baseHeight(L, x, u) + dropOff(x, u). Keep nx = 96: the step is 3.5 columns wide, and chunk edges still meet exactly
```
- **Texture:** keep `aXU = (x, u)`. Do not re-map u by arc length. The steepest slope is 0.7, so the pattern stretches by at most 1.22 on the chute face, which reads as water speeding up. Re-mapping u would shift her wake and rings against `uRider.y`.
- **Drum floor (this one matters):** the wall's bottom is at h = 1.5 - 2.55 = -1.05. A channel at -1.4 is outside the drum, so the wall's opaque bottom arc would cover it. In `tubeChunk`, after computing `h`:
```js
const uni = -D.depth * keepD(u) * smooth(D.ledge[0], D.ledge[1], u), deep = Math.min(0, dropOff(x * 0.6, u) - uni);
h += uni + (h < 0 ? deep * smooth(0, -0.6, h) : 0);   // the waterline on the walls is unchanged; the ledge water hides the lowered arc
```
- The hoop at u 180 and the coins at 176-187 need `uni` too.

## 2. Main-water whitewater and level gate
Build it at the material with `waterFragWet().replace('uniform vec4 uRider;', 'uniform vec4 uRider; uniform vec4 uLand;').replace(WHITE, CHUTE + NEW_WHITE)`. `WHITE` is the unchanged line `float white = clamp(fl * 0.75 + glint + wake * uRider.z * 0.9 + rings * 0.55, 0.0, 1.0);`.
```glsl
float mid = 1.0 - smoothstep(DI, DI + DS, abs(x)), kC = clamp((u - D0) / DL, 0.0, 1.0);
float off = -DD * (1.0 - smoothstep(R0, R1, u)) * max(smoothstep(0.0, 1.0, kC) * mid, smoothstep(G0, G1, u));
float steep = 4.0 * kC * (1.0 - kC) * mid;
float lip = exp(-pow((u - D0 - 0.3) / 0.3, 2.0)) * mid;
float pool = smoothstep(D0 + DL - 0.3, D0 + DL + 0.3, u) * (1.0 - smoothstep(D0 + DL + 0.3, D0 + DL + 2.2, u)) * mid;
float fast = l1n(vec2(x * 9.0, (u - t * 6.5) * 0.7));        // its own CONSTANT speed
float aaX = clamp(fwidth(x) * 9.0 - 0.6, 0.0, 1.0);
float ww = lip * smoothstep(0.38, 0.62, fast) * 0.7 + steep * smoothstep(0.66, 0.82, fast) * 0.3
         + pool * smoothstep(0.58, 0.76, l1n(vec2(x * 7.0, uf * 3.0))) * 0.55;
col = mix(col, vec3(0.03, 0.5, 1.0), steep * 0.35);         // face: lighter turquoise, not white
float lvl = 1.0 - smoothstep(0.3, 0.7, abs(off - uRider.w));
float age = t - uLand.z, lr = length(vec2(x - uLand.x, (u - uLand.y) * 1.2));
float pulse = (1.0 - smoothstep(0.0, 0.05 + age * 0.06, abs(lr - 0.3 - age * 1.8))) * exp(-age * 3.0) * step(0.0, age) * uLand.w;
float white = clamp(fl * 0.75 + glint + (wake * uRider.z * 0.9 + rings * 0.55 + pulse) * lvl + ww * (1.0 - max(aaW, aaX)), 0.0, 1.0);
```
- **How much white:** a broken crest about 0.3 m deep at the lip, about 15% streak coverage on the face, and broken flecks in a 2 m plunge band that fade out downstream.
- **`riderU.w` becomes her level:** set it to `hAt(m.x, m.z) - W.baseHeight(...)`. It currently carries `m.xv`, which no water shader reads. Her rings and wake then stop showing on the ledges while she is in the channel, and on the main water while she is up on a flume.

## 3. Flume strips (built inside `privately(0x7e72, …)`)
Every new geometry, material and mesh takes a UUID from `Math.random`, so building them outside `privately` would shift the game's seeded sequence.
```js
const FL = { u0: S0, u1: S1, ramp: 4, h: 1.1, half: 0.5, c: 1.85, cEnd: 1.45 }, fk = (u) => smooth(FL.u1 - FL.ramp, FL.u1, u);
const flumeH = (u) => (FL.h + 0.12) * (1 - fk(u)) - 0.12;   // ends 0.12 m under the main water: crosses it at ~16°, no flat coplanar z-fight
const flumeC = (u) => FL.c + (FL.cEnd - FL.c) * fk(u);      // the drum wall is at x 2.06 at h 0: a fixed 1.85 centre pokes the ramp's end through it
// per vertex (nx 20, rows every 0.25 m, TR.frame(u, F)): xl in [-0.5, 0.5]; x = sg*flumeC(u) + xl  (GLOBAL x: same waves and colour as the main water at the merge)
// h = W.baseHeight(L, x, u) + flumeH(u) + 0.05 * smooth(0.3, 0.5, |xl|) ** 2;  aXU = (x, u); aUp = F.U; aHalf = 0.5; aFl = (sg*flumeC(u), flumeH(u))
const FV = WATER_VERT_WET.replace('attribute float aHalf;', 'attribute float aHalf; attribute vec2 aFl; varying vec2 vFl;').replace('vHalf = aHalf;', 'vHalf = aHalf; vFl = aFl;');
const FF = waterFragWet().replace('varying float vHalf;', 'varying float vHalf; varying vec2 vFl;').replace('uniform vec4 uRider;', 'uniform vec4 uRider; uniform vec4 uLand;')
  .replace('smoothstep(vHalf - 0.75, vHalf - 0.05, abs(x))', 'smoothstep(vHalf - 0.24, vHalf - 0.03, abs(x - vFl.x))')
  .replace('(vHalf > 2.0 ? 0.7 : 0.25)', '0.7')
  .replace(WHITE, PULSE_AND_LVL_WITH('abs(vFl.y - uRider.w)') + 'float merge = (1.0 - smoothstep(0.03, 0.3, vFl.y)) * smoothstep(0.42, 0.68, l1n(vec2(x * 8.0, uf * 2.5))) * 0.6;\n' + NEW_WHITE_WITH('merge'));
```
- **Why `vHalf` = 0.5 alone is wrong:** with the stock width, `smoothstep(-0.25, 0.45, |x|)` already gives 0.29 of the wall foam at the middle of the strip.
- **With the replace:** the foam climbs only the outer 0.21 m on each side (|xl| from 0.26 to 0.47).
- **Far sheen:** the `0.7` replace matters. Without it, the strip would look darker than the water beside it in the distance.
- **Material:** build it with an explicit uniforms object (`uTime: timeU, uCam: camU, uRider: riderU, uLand: landU`), not `.clone()`, which deep-copies the uniforms and stops them updating.
- **Trough:** put the trough's inner walls at |xl| = 0.47 so the water's edge tucks under them.

## 4. Splashes (in `update`, private `lprnd = mulberry(0x1a4d)`; use `emitT`, never `burstT`, which draws from `Math.random`)
```js
if (wasAir && !m.air && running) { const lv = riderLevel; landU.value.set(m.x, m.z, t, lv > 0.5 ? 1 : 0.5);
  if (lv > 0.5) { const c = Math.sign(m.x) * flumeC(m.z), s0 = W.baseHeight(L, m.x, m.z) + lv;   // water slapping up both trough walls
    for (const s of [-1, 1]) for (let i = 0; i < 5; i++) ctx.fx.emitT(c + s * (0.42 + lprnd() * 0.05), s0 + 0.04, m.z + lprnd() * 0.5,
      -s * (0.2 + lprnd() * 0.4), 2.0 + lprnd() * 1.2, m.speed * (0.6 + lprnd() * 0.25), 0.04 + lprnd() * 0.035, 0.4 + lprnd() * 0.25, 0); } }
wasAir = m.air;
```
- `game.js` 1010 already throws its landing burst, and the 12 px droplet cap still applies.
- On a flume, 20 droplets at power 1.0 (`up` 0.85) instead of 34 at power 1.4 keeps most of them inside the 1 m trough.
- **Lip spray:** when she crosses `D.u0 + 0.2`, emit about 8 droplets through `fx.emit(..., null)` with no floor. `emitT`'s floor plane is at the lip's level, so its droplets would vanish right at the edge.
- **Plunge splash:** it comes for free from `game.js` 1019-1026, as long as `slopeAt` includes the chute.

## 5. Risks of dark streaks and seams
- **Dark line at the lip:** where the surface is seen nearly edge-on (the lip crest, the chute while she descends), `aaW` switches to its average blue (about #1d59da). That is darker than the lightened water ahead of her (about #3fadff), so a dark line forms exactly at the lip. The turquoise lift and the lip white are applied after `aaW`, and the lift is not scaled by `(1 - aaW)`.
- **Flow speed:** never write `uf = u - t*speed(x,u)` with a speed that varies in space. Its gradient grows with time, so `fwidth(uf)` keeps rising and within about a minute `aaW` darkens the chute area in bands. Use the separate constant-speed layer (`fast`) instead.
- **`fwidth` in a branch:** if you gate the chute block with an `if`, compute `aaX` (and anything else using `fwidth`) before it. `fwidth` inside a branch that varies per pixel is undefined.
- **The 1.4 m step between channel and ledge:** it spans only 0.16 m of x, so the pattern smears about 9 times into vertical stripes, and `aaW` cannot catch it because u is constant down the face. The golden divider has to cover the full height (h -1.45 to +0.1), not a 0.2 m rail.
- **Height routing in `game.js`:** these all use `W.baseHeight` and need one shared `hAt` (base + chute + flume): 825 (the `emitT` floor), 989 (`slopeAt`, which drives her pitch, speed and the plunge splash), 1002 (`surf`), 1218 and 1222 (the camera's height and tilt), plus `level1.js` 590-592 (coins and gems).
- **Her ride height on the slope:** use `W.FLOAT_H * Math.hypot(1, slope)`. With the plain value, her back sinks into the chute face, which breaks the rule that she sits on top of the water.