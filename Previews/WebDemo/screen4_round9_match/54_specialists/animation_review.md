# Swim animation review: her swimming as a drawn layer (`?s3=intunnel,swim2`)

The swim-animation reviewer, sixteenth session, 6 November 2026. This is a rerun of the 22:30 UTC inspection, which was lost
to a usage limit. It was read-only: no browser, no build and no game file changed.

**What I read:**
- `game.js` 971-1086 and 1195-1240;
- `tunnel_r7_hero_water.js` 81-210;
- `tunnel_r8_liquid.js` 385-503;
- `tunnel_r8_splash.js` 155-165;
- `tunnel_s4_swim.js`;
- `mascot.glb` (decoded vertices);
- `trace_accepted|swim_swipejump.json` and `trace_R9_swipejump.json` (rows at 30 fps);
- `clip_R9.mp4` and `clip_swim.mp4`, as frames.

Row numbers refer to the accepted trace:
- the swipe left at row 31;
- the swipe right at row 58;
- the jump at row 85;
- the landing at row 107;
- brush knocks at rows 36 and 112.

## What she does now (measured)

- **Straight running (rows 2-30):**
  - Her root heaves 73 px peak to peak on the 1536-px screen. That heave is the water's waves (0.5, 1.7 and 4 Hz) plus
    the 1.7 Hz bob of ±5 cm, both inside `yAbs`.
  - Against the swell's base she moves 9.9 cm peak to peak.
  - Her only rotation is the idle sway: ±2.3° at 0.35 Hz.
  - Nothing has the rhythm of a stroke. She is a floating toy.
- **Swerve:**
  - Her sideways speed `xv` peaks at row +3 (2.85 m/s). The lean peaks at row +5 or +6 (22-24°).
  - The swell's `uLat` peaks at 1.87, two to three rows after `xv`.
  - The swell trails her sideways by up to 12.5 cm (`x - swellLagX`, row 36): she slides off her own mound, which reads as
    the pedestal.
- **Jump:**
  - 21 airborne rows, with the apex 1.03 m up.
  - `rotation.x = -flip` turns her a full 360° nose-up: a back somersault in 0.62 s.
  - In `clip_R9` frames n149-n154 her face, belly and blue feet show upside down.
- **Landing (row 107):**
  - `yAbs` sits 17 cm below her float line for exactly one row, because the game resets it only on the next frame.
  - Then the squash goes to 0.836 about her centre, which lifts her bottom out of the water while her top drops.
  - `uLand` raises the swell by 12 % (swim: 25 %).
  - `clip_R9` and `clip_swim` frames n165-n172 show her buried to the top of her back for about 0.3 s. That breaks the
    "never sunk" rule.
- **Gameplay is safe to draw over:** the accepted, swim and R9 traces have identical gameplay fields in all 152 rows.

## Decisions

### 1. The forward swim cycle: an alternating paddle at 1.25 Hz

The cycle is 24 frames at 30 fps. It is scaled down to 0.6x when she is slowed, for example after a knock.

**Why 1.25 Hz:**
- It sits apart from every heave line (0.5, 0.95, 1.7 and 4 Hz), so it reads as her own action, not the water's.
- The swim candidate's 1.2 Hz measured well.

**The parts of the cycle:**
- **Roll toward the pulling arm, ±6° at 1.25 Hz, about her centre.**
  - This is the main cue from behind, because the waves never rotate her.
  - About her centre, because a floating sphere's metacentre is its centre. Her crown moves about 15 px.
- **Lift (2 cm) and breath (1.2 %), once per pull,** 0.6 rad after the pull. A surge pitch of ±1.5°.
- **The game's 1.7 Hz bob is taken out of the drawing only.** It stays in `yAbs` and in the camera's 35 %.
- **Arms (secondary action):**
  - Measured on the model: nubs at |x| 0.42-0.52 m, y 0.09-0.22, |z| < 0.1.
  - A paddle wheel: the arm goes up and forward over the top, then down and back. Flap ±18°, sweep ±24°, the two arms
    half a cycle apart.
  - Done in the vertex shader, because the model has no rig.
  - If the art director reads them as waving, set both to 0: the shader then takes the plain path.
- **At each pull's deepest point:**
  - a ripple at her side, which replaces the game's 0.45 s bob ripple while running;
  - four small droplets from a private generator, under R7's 12-px cap.
- **Envelopes:**
  - 0 at Tap to Start, so the start frame stays the accepted one;
  - in over 0.3 s after the tap;
  - out over 0.08 s in the air.

### 2. The swerve: no sideways body offset; the lead is in the bank and the water

The drawn x equals the gameplay x. Pickups and brush hits use her root, and the player steers her lane.

**The bank:**
- A damped spring driven by her sideways speed and its change: `spring(-(0.12·xv + 0.0105·ẍ))`, with ω 16, ζ 0.4 and a cap
  of 24°.
- It peaks at about 20° at row +4. The game's lean peaks at 22° at row +6.
- Then it rocks back about 3° at rows +11/+12 (follow-through) and settles by row +18.
- During the bank the stroke's roll drops to 30 %.

**The water:**
- `lat` is a fast-attack (0.03 s) / slow-release (0.15 s) copy of `xv`. `uLat` therefore peaks at 2.67 on row +3, the
  same row as `xv`.
- The swell's `swerve` goes from 0.05 to 0.08:
  - the leading side piles up 21 %;
  - the trailing side drops 21 %, the open water she leaves behind;
  - the sides alternate ±5 % with the strokes.
- The swell stays centred on her: a 0.03 s lag, at most 4.4 cm.
- The far ends still drag behind, through the existing `p.x -= uLat·0.025`.

### 3. The jump: not a somersault, a dolphin arc

A swimmer leaves the water head first along her path. A back somersault reads as a gymnast or a toy, and shows her face
and feet to the camera.

**The drawn pitch:**
- `-0.55·atan2(vy, max(speed, 3))`, through a spring (ω 20, ζ 0.5).
- About -21° (nose up) at row +3, about 0° at the apex, about +21° (nose down) at the entry.

**Unchanged:** `m.flip` is still computed (`flipDeg` identical); it is only not drawn.

**The arms** rise to an "open wings" pose (flap +24°, sweep -16°) with the slump signal.

**The water:**
- At take-off a `uLand` pulse of 0.5, decaying at 4/s (0.12 s), throws the crest and its spray up with her.
- The accepted slump then closes the water under her by row +8.
- A closing ring (strength 0.7) appears where she left the water, 0.27 s after take-off.

### 4. The landing: a dip and a resurface, 0.5 s in all

**Her body:**
- The one-row drop of 17 cm is not drawn (`comp = rideY - yAbs`).
- The dip is a damped sine keyed on the time since landing (ω 14, ζ 0.45, a 0.04 s lead), with depth
  `A = clamp(0.013·|vy|, 0.03, 0.08)`:

  | rows after landing | 0 | +1 / +2 | +7 | +9 | +15 |
  |---|---|---|---|---|---|
  | dip | -6 cm | -8 cm | 0 | +1.3 cm (rebound) | settled |

- **Pitch:** the spring on the water (ω 12, ζ 0.45) brings her from +21° (nose down) to about -4° (nose up) near row +9,
  which is the resurfacing. She is level by row +15.
- **Squash:** 0.15 per unit (the game uses 0.25), about her waterline. The deepest squash is 0.90.

**The water:**
- **Crater:** `uAir = max(slump, 0.45·dip)` lowers the crest about 17 % while she dips, so her waterline stays put. She
  stays on top, never buried.
- **Crown splash:** `uLand = 1`, decaying at 2.5/s (0.4 s): the crown splash and the outward push.
- **The floor's ring:** `uLqMove.w`, 0.55 m out to 3.15 m over 0.7 s (as now).

## What the water receives each frame

`updateMascot` computes `m.sw2`. The water's updaters (`opening.update`, `game.js:1600`) run later in the same frame and
copy it, so there is no one-frame lag.

| layer | uniform | value |
|---|---|---|
| heroSwell, heroSplash, splash bank, waterline plumes (shared objects) | `uLat` | `sw2.swellLat` = lat ± 0.6·(pull L - pull R) |
| | `uAir` | `sw2.swellAir` = max(slump, crater) |
| | `uLand` | `sw2.land`: 0.5 at take-off, 1 at landing |
| | `uPX` / `uC` | `sw2.waterX`; the base blends from the accepted `ride + dip` to the water surface by `sw2.run` |
| lqFloor | `uLqPlayer.x` | `sw2.waterX` |
| | `uLqMove` | (`sw2.lat`, speed share, `sw2.air` (no crater), `sw2.ring`) |
| ripples | `uRipples` | stroke rings, take-off closing ring (via `addRipple`) |
| fur | `uSw2Arm` | flap L, flap R, sweep L, sweep R (rad) |

## How to verify with `motion_trace.cjs` (`S3=intunnel,swim2 SCRIPT=swipejump`)

1. **Gameplay:** these fields must match `trace_accepted` in all 152 rows: `t`, `x`, `xv`, `lane`, `air`, `yAbs`, `z`,
   `speed`, `coins`, `gems`, `socks`, `hearts`, `knocks`, `bumps`, `flipDeg`, `her` and `cam`. To prove that
   `Math.random` is untouched, add one line to the init script that counts its calls; the count must be equal.
2. **Rows 0-1:** every field identical, so the start frame is unchanged.
3. **Straight running (rows 2-30, 125-150):**
   - `rollDeg - 2.29·sin(2.2t)`: a 1.25 Hz line of ±6°.
   - `drawnAboveSwellBase`: a 2.5 Hz line of about 2 cm; the 1.7 Hz line under 0.5 cm.
4. **Swerve, right (rows 58-76):**
   - `rollDeg` peaks at +20 ±2° at row 62 or 63, then about -3° at rows 69-70.
   - `swellLat` reaches about -2.67 at row 61.
   - `|x - swellLagX|` ≤ 0.05 on every row.
5. **Jump (rows 86-106):** `pitchDeg` is about -21 at row 88, |pitchDeg| ≤ 4 at rows 95-96, about +21 at row 106, and
   never beyond ±30 (tolerance ±2° for the idle pitch). `swellLand` is about 0.5 at row 86 and 0 by row 90.
6. **Landing:**
   - `drawnAboveSwellBase - 0.34` follows the dip table above.
   - `drawn[1]` changes direction only once between rows 104 and 112.
   - `squashY` ≥ 0.89.
   - `swellAir` is about 0.44 at rows 108-109 and ≤ 0.05 by row 114.
   - `swellLand` falls from 0.92 at row 107 to 0 by row 118.
7. **By eye:** `clip_swim2` against `clip_R9` at n149-n154 (no face showing) and n165-n172 (her back stays above the
   water). Optionally log `m.sw2` in the trace.

**Risk:** the arm deformation of the bristled Meshy mesh must be checked at four phases. The four uniform-gated paths
must still give 0 differing pixels against `?s3=intunnel` at the start frame.

## Code

### New file `WebDemo/src/tunnel_s4_swim2.js` (the motion part)

Keep it free of imports from the water modules, so there is no import cycle.

```js
// ?s3=intunnel,swim2: HER SWIMMING, drawn only (Previews/WebDemo/screen4_round9_match/54_specialists/animation_review.md).
// Her gameplay state (x, yAbs, air, lane, speed, flip, pickups) is only read; no Math.random (a private generator).
import * as THREE from 'three';
import { SWIM2_ON } from './tunnel_s4_bt.js';
export { SWIM2_ON };

export const SWIM2 = {
  // the stroke: Hz at cruise (`slow`: the share kept at rest speed), roll (deg, toward the pulling arm), lift (m) and breath
  // (share) twice a cycle `lag` rad after each pull, surge pitch (deg), fades (s), the game's bob taken out of the drawing
  stroke: { hz: 1.25, slow: 0.6, roll: 6, bob: 0.02, breath: 0.012, lag: 0.6, pitch: 1.5, fadeIn: 0.3, fadeOut: 0.08, cancel: 1 },
  // arms (her body's metres, measured on mascot.glb): pivot [|x|, y]; weight ramps on |x|, |y - pivot y|, |z|; degrees
  arms: { pivot: [0.42, 0.155], wx: [0.40, 0.47], wy: [0.07, 0.13], wz: [0.10, 0.16], flap: 18, sweep: 24, airFlap: 24, airSweep: -16 },
  // the swerve: bank = spring(-(kv xv + ka accel)), cap (rad), the stroke roll kept while banking; the water's lateral
  // signal (attack / release, s), the swell centre's lag (s), the swell's pile per m/s, the stroke's alternating pile
  swerve: { kv: 0.12, ka: 0.0105, accTau: 0.05, w: 16, z: 0.4, cap: 0.42, roll: 0.3, attack: 0.03, release: 0.15, waterLag: 0.03,
    pile: 0.08, strokeLat: 0.6 },
  // the jump: the dive arc (share of the flight angle), its spring in the air / on the water, the take-off splash (uLand)
  // and its decay (/s), the closing ring (s after take-off, strength)
  jump: { arc: 0.55, airW: 20, airZ: 0.5, waterW: 12, waterZ: 0.45, pulse: 0.5, pulseDecay: 4, close: 0.27, closeRipple: 0.7 },
  // the landing: dip (m per m/s of impact, [min, max]), its damped sine, lead (s), crater (uAir at the deepest dip), splash
  // and ring decays (/s), squash per unit (game: 0.25)
  land: { dipK: 0.013, dip: [0.03, 0.08], w: 14, z: 0.45, lead: 0.04, crater: 0.45, splashDecay: 2.5, ringDecay: 1.4, squash: 0.15 },
  // each pull: a ring at her side (m out, strength) and a few small droplets
  pull: { side: 0.42, ripple: 0.4, drops: 4, size: [0.03, 0.05], up: [1.2, 1.9], out: [0.5, 1.0], life: [0.3, 0.45] },
};
{ const t = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.swim2;   // (test tunes only)
  if (t) for (const k of Object.keys(t)) SWIM2[k] = (t[k] && typeof t[k] === 'object' && !Array.isArray(t[k])) ? { ...SWIM2[k], ...t[k] } : t[k]; }

export const SW2U = { uSw2Arm: { value: new THREE.Vector4() } };   // flap L, flap R, sweep L, sweep R (rad; + = tip up / forward)
const D2R = Math.PI / 180, { clamp, smoothstep: ss } = THREE.MathUtils;
function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const rnd = mulberry(0x5a172), R = (a) => a[0] + rnd() * (a[1] - a[0]);

// game.js updateMascot, after her pose is set. c: { t, dt, running, rideY, bob, surf, W, L, fx, addRipple }
export function swim2Pose(m, c) {
  const S = SWIM2, K = S.stroke, Sw = S.swerve, J = S.jump, Ld = S.land, P = S.pull, A = S.arms, W = c.W;
  const dt = Math.min(c.dt, 0.05), t = c.t, e = (tau) => 1 - Math.exp(-dt / tau);
  const q = m.sw2 || (m.sw2 = { run: 0, k: 0, ph: 0, ph0: 0, lat: 0, waterX: m.x, xv0: m.xv, acc: 0, roll: 0, rollV: 0, pitch: 0, pitchV: 0,
    air: 0, land: 0, decay: 2.5, ring: 0, crater: 0, dipA: 0, tLand: -9, tJump: -9, jx: 0, jz: 0, closed: true, wasAir: false });
  // envelopes: run (0 at Tap to Start: the start frame stays the accepted one), k (the stroke; out in the air)
  q.run = c.running ? Math.min(1, q.run + dt / K.fadeIn) : 0;
  q.k = m.air ? Math.max(0, q.k - dt / K.fadeOut) : Math.min(q.run, q.k + dt / K.fadeIn);
  // 1. the stroke: her left arm (+x, screen-left) pulls deepest at ph = pi, her right at 0 / 2 pi
  if (c.running) q.ph += 2 * Math.PI * K.hz * (K.slow + (1 - K.slow) * clamp(m.speed / W.CRUISE, 0, 1.5)) * dt;
  const cs = Math.cos(q.ph), lift = Math.cos(2 * q.ph - K.lag), pullL = Math.max(0, -cs) ** 3, pullR = Math.max(0, cs) ** 3;
  // 2. the swerve: the bank leads with her sideways speed and its change, then rocks back (a damped spring)
  const acc = (m.xv - q.xv0) / Math.max(dt, 1e-3); q.xv0 = m.xv;
  q.acc += (acc - q.acc) * e(Sw.accTau);
  const bank = clamp(-(Sw.kv * m.xv + Sw.ka * q.acc), -Sw.cap, Sw.cap);
  q.rollV += (Sw.w * Sw.w * (bank - q.roll) - 2 * Sw.z * Sw.w * q.rollV) * dt; q.roll += q.rollV * dt;
  q.lat += (m.xv - q.lat) * e(Math.abs(m.xv) > Math.abs(q.lat) ? Sw.attack : Sw.release);
  q.waterX += (m.x - q.waterX) * e(Sw.waterLag);
  // 3-4. take-off and landing: the edges of her gameplay `air` (read only)
  if (m.air && !q.wasAir) { q.tJump = t; q.jx = m.x; q.jz = m.z; q.closed = false; q.land = Math.max(q.land, J.pulse); q.decay = J.pulseDecay; }
  if (!m.air && q.wasAir) { q.tLand = t; q.land = 1; q.decay = Ld.splashDecay; q.ring = 1; q.dipA = clamp(Ld.dipK * Math.abs(m.vy), Ld.dip[0], Ld.dip[1]); }
  q.wasAir = m.air;
  q.land = Math.max(0, q.land - dt * q.decay); q.ring = Math.max(0, q.ring - dt * Ld.ringDecay);
  if (!q.closed && t - q.tJump >= J.close) { q.closed = true; c.addRipple(q.jx, q.jz, J.closeRipple); }   // the water closing where she left it
  const hgt = Math.max(0, m.yAbs - W.baseHeight(c.L, m.x, m.z) - W.FLOAT_H);
  q.air += ((m.air ? ss(hgt, 0.08, 0.6) : 0) - q.air) * e(0.08);   // the swell's slump in the air (as the hero water's own)
  const zw = Ld.z * Ld.w, wd = Ld.w * Math.sqrt(1 - Ld.z * Ld.z), tp = Math.atan(wd / zw) / wd, tau = t - q.tLand + Ld.lead;
  const dipN = tau < 1.5 ? Math.exp(-zw * tau) * Math.sin(wd * tau) / (Math.exp(-zw * tp) * Math.sin(wd * tp)) : 0;   // 1 at the deepest
  q.crater = Ld.crater * Math.max(0, dipN);
  // the dive arc: her body along her flight path (her gameplay flip is not drawn); on the water she resurfaces nose-up
  const arc = m.air ? -J.arc * Math.atan2(m.vy, Math.max(m.speed, 3)) : 0, pw = m.air ? J.airW : J.waterW, pz = m.air ? J.airZ : J.waterZ;
  q.pitchV += (pw * pw * (arc - q.pitch) - 2 * pz * pw * q.pitchV) * dt; q.pitch += q.pitchV * dt;
  // the drawing: her model's groups only
  const comp = m.air ? 0 : c.rideY - m.yAbs;                  // the landing row's one-frame drop in yAbs, not drawn
  const cancel = m.air ? 0 : K.cancel * q.run * c.bob;        // the game's 1.7 Hz bob (it stays in yAbs and the camera)
  m.tilt.position.set(0, comp - cancel + q.k * K.bob * lift - q.dipA * dipN, 0);
  m.tilt.rotation.x += (m.air ? m.flip : 0) + q.pitch + q.k * K.pitch * D2R * Math.sin(2 * q.ph);
  m.tilt.rotation.z += q.roll - m.lean + q.k * (1 - (1 - Sw.roll) * ss(Math.abs(q.lat), 0.6, 2.0)) * K.roll * D2R * cs;
  const st = (1 + m.sq * Ld.squash) * (1 + q.k * K.breath * lift);
  m.squash.scale.set(1 / Math.sqrt(st), st, 1 / Math.sqrt(st));
  m.squash.position.y = -W.FLOAT_H * (1 - st);                // squash and stretch about her waterline, not her centre
  // the arms: a paddle wheel, half a cycle apart; raised in the air
  const fa = A.flap * D2R * q.k, sa = A.sweep * D2R * q.k, ka = q.air, sn = Math.sin(q.ph);
  SW2U.uSw2Arm.value.set(fa * cs + ka * A.airFlap * D2R, -fa * cs + ka * A.airFlap * D2R, sa * sn + ka * A.airSweep * D2R, -sa * sn + ka * A.airSweep * D2R);
  // each pull's deepest point: a ring at her side and a few small droplets (private random)
  const n0 = Math.floor(q.ph0 / Math.PI), n1 = Math.floor(q.ph / Math.PI); q.ph0 = q.ph;
  if (n1 > n0 && q.k > 0.5) {
    const side = n1 % 2 ? 1 : -1, x = m.x + side * P.side;
    c.addRipple(x, m.z + 0.05, P.ripple * q.k);
    for (let i = 0; i < P.drops; i++) c.fx.emitT(x + side * R([0, 0.08]), c.surf + 0.04, m.z + R([-0.1, 0.15]),
      side * R(P.out) - m.xv * 0.3, R(P.up), m.speed * R([0.55, 0.8]), R(P.size), R(P.life), 0);
  }
  // what the water receives this frame (copied by the hero water's and the liquid floor's updaters)
  q.swellLat = q.lat + Sw.strokeLat * q.k * (pullL - pullR);
  q.swellAir = Math.max(q.air, q.crater);
}

// the fur's vertex shader with the arms (the original path when uSw2Arm is zero), and its per-mesh uniforms
export function swim2FurUniforms(o) {
  o.updateWorldMatrix(true, false);   // the model is not parented yet: this is its place inside her squash group
  return { uSw2Arm: SW2U.uSw2Arm, uSw2ToBody: { value: o.matrixWorld.clone() }, uSw2FromBody: { value: o.matrixWorld.clone().invert() } };
}
const f4 = (x) => (+x).toFixed(4), AR = SWIM2.arms;
export const SWIM2_FUR_VERTEX = /* glsl */ `
varying vec2 vUv; varying vec3 vN; varying vec3 vWorld;
uniform mat4 uSw2ToBody, uSw2FromBody; uniform vec4 uSw2Arm;
vec3 sw2Rot(vec3 v, vec3 a, float g) { float c = cos(g), s = sin(g); return v * c + cross(a, v) * s + a * dot(a, v) * (1.0 - c); }
void main() {
  vUv = uv;
  vec3 p = position, n = normal;
  if (dot(uSw2Arm, uSw2Arm) > 0.0) {
    vec3 b = (uSw2ToBody * vec4(position, 1.0)).xyz;   // her body, metres: x screen-left, y up, z forward
    float sd = b.x >= 0.0 ? 1.0 : -1.0;
    float k = smoothstep(${f4(AR.wx[0])}, ${f4(AR.wx[1])}, abs(b.x)) * (1.0 - smoothstep(${f4(AR.wy[0])}, ${f4(AR.wy[1])}, abs(b.y - ${f4(AR.pivot[1])})))
      * (1.0 - smoothstep(${f4(AR.wz[0])}, ${f4(AR.wz[1])}, abs(b.z)));
    if (k > 0.0) {
      vec3 piv = vec3(sd * ${f4(AR.pivot[0])}, ${f4(AR.pivot[1])}, 0.0);
      float fl = (sd > 0.0 ? uSw2Arm.x : uSw2Arm.y) * sd * k, sw = -(sd > 0.0 ? uSw2Arm.z : uSw2Arm.w) * sd * k;
      p = (uSw2FromBody * vec4(piv + sw2Rot(sw2Rot(b - piv, vec3(0.0, 0.0, 1.0), fl), vec3(0.0, 1.0, 0.0), sw), 1.0)).xyz;
      n = mat3(uSw2FromBody) * sw2Rot(sw2Rot(mat3(uSw2ToBody) * normal, vec3(0.0, 0.0, 1.0), fl), vec3(0.0, 1.0, 0.0), sw);
    }
  }
  vec4 w = modelMatrix * vec4(p, 1.0);
  vWorld = w.xyz;
  vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
```

### `WebDemo/src/game.js` (every edit gated)

```js
// line 5, after the SWIM import
import { SWIM2_ON, swim2Pose, swim2FurUniforms, SWIM2_FUR_VERTEX } from './tunnel_s4_swim2.js';   // ?s3=intunnel,swim2: her swimming (drawn only)
// lines 895-896 (buildMascot)
    o.material = new THREE.ShaderMaterial({ uniforms: { map: { value: o.material.map }, ...mats.fur, ...(SWIM2_ON ? swim2FurUniforms(o) : {}) },
      vertexShader: SWIM2_ON ? SWIM2_FUR_VERTEX : SH.furVertex, fragmentShader: SH.furFragment, side: THREE.DoubleSide });
// after line 1039 (after the SWIM block, before the spray)
  if (SWIM2_ON) swim2Pose(m, { t, dt, running, rideY, bob, surf, W, L, fx, addRipple });   // ?s3=intunnel,swim2 (tunnel_s4_swim2.js)
// line 1074: the strokes make the ripples while she swims
    if (m.bobRipple < 0 && !(SWIM2_ON && running)) { addRipple(m.x, m.z, running ? 0.35 : 0.6); m.bobRipple = running ? 0.45 : 1.2; }
// after line 1080: the fur's round light on her DRAWN body
  if (SWIM2_ON) mats.fur.uCentre.value.copy(m.tilt.position).applyQuaternion(m.root.quaternion).add(m.root.position);
// line 1650: the droplet cap
    if (WATER7_ON || SWIM_ON || SWIM2_ON) {
```

### `WebDemo/src/tunnel_r7_hero_water.js`

```js
// after line 30
import { SWIM2_ON } from './tunnel_s4_bt.js';
import { SWIM2 } from './tunnel_s4_swim2.js';
// after line 87 (before the swell and its followers are built)
  if (SWIM2_ON) HERO_WATER.swell.swerve = SWIM2.swerve.pile;   // ?s3=...,swim2: the leading side piles, the trailing side opens
// in the updater, lines 96-110, as:
    const Q = SWIM2_ON && mascot.sw2;   // ?s3=intunnel,swim2: her swim state, worked out in updateMascot this frame
    S.lagX += (mascot.x - S.lagX) * e(SWIM_ON ? SWIM.collar.lag : 0.07);
    if (Q) S.lagX = Q.waterX;
    S.lat += ((mascot.xv || 0) - S.lat) * e(0.12);
    if (Q) S.lat = Q.swellLat;
    // (S.speed, ride, lift, air: unchanged)
    S.air += (air - S.air) * e(0.08);
    if (S.wasAir && !mascot.air) S.land = 1;
    S.wasAir = !!mascot.air; S.land = Math.max(0, S.land - dt * 2.0);
    if (Q) { S.air = Q.swellAir; S.land = Q.land; }
    const dip = mascot.air ? 0 : Math.min(0, mascot.yAbs - W.FLOAT_H - ride);
    if (SWIM_ON) S.base += (W.surface(L, S.lagX, z, time.value) - S.base) * e(0.05);
    else if (Q) S.base += (ride + dip + Q.run * (W.surface(L, S.lagX, z, time.value) - ride - dip) - S.base) * e(0.05);   // on the water under her once she swims
    else S.base += (ride + dip - S.base) * e(0.05);
```

### `WebDemo/src/tunnel_r8_liquid.js`

```js
// after line 42
import { SWIM2_ON } from './tunnel_s4_bt.js';
// in the updater, after line 395
    const Q = SWIM2_ON && mascot.sw2;   // ?s3=intunnel,swim2: the floor's wake and rings follow her swim state
    if (Q) { S.lagX = Q.waterX; S.lat = Q.lat; S.air = Q.air; S.land = Q.ring; }
```
