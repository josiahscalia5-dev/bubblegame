# Swim animation review (`?s3=intunnel,swim2`)

The swim-animation reviewer, sixteenth session: a read-only rerun of the lost 22:30 UTC run.

**Read:**
- `game.js` 971-1240;
- the hero-water, liquid and splash updaters;
- `tunnel_s4_swim.js`;
- `mascot.glb` (decoded);
- the three traces and both clips.

Rows are the accepted trace's: swipes at rows 31 and 58, jump 85, landing 107, knocks at 36 and 112.

## Measured now

- **Straight:**
  - Her root heaves 73 px peak to peak: the waves plus the 1.7 Hz ±5 cm bob, all in `yAbs`.
  - That is 9.9 cm against the swell's base.
  - Her only rotation is a ±2.3° sway. No stroke rhythm.
- **Swerve:**
  - `xv` peaks at +3 rows; the lean (22-24°) at +5/+6; `uLat` (1.87) 2-3 rows after `xv`.
  - The swell trails her by up to 12.5 cm, so she slides off her own mound: the pedestal read.
- **Jump:** `rotation.x = -flip` is a 360° back somersault in 0.62 s. `clip_R9` n149-n154 shows her face and feet upside
  down.
- **Landing:**
  - `yAbs` dips 17 cm for one row.
  - The squash is 0.836 about her centre.
  - `uLand` raises the swell 12 % (swim: 25 %).
  - Both clips, n165-n172: she is buried to her back for about 0.3 s.
- **Safe to draw over:** the gameplay fields are identical across the three traces.

## Decisions

### 1. Forward cycle: an alternating paddle at 1.25 Hz

24 frames at 30 fps, scaled x0.6-1 with her speed. It sits apart from every heave line (0.5, 0.95, 1.7, 4 Hz), so it
reads as her own action.
- **Roll:** ±6° toward the pulling arm, about her centre (a floating sphere's metacentre). It is the main cue from
  behind: waves never rotate her.
- **Lift and breath:** 2 cm and 1.2 % per pull (2.5 Hz). Surge pitch ±1.5°.
- **The game's bob** is cancelled in the drawing only; the camera is unchanged.
- **Arms (secondary):**
  - a paddle wheel on the measured nubs (|x| 0.42-0.52 m), flap ±18°, sweep ±24°, the two arms half a cycle apart;
  - in the vertex shader, because the model has no rig;
  - set both to 0 if they read as waving.
- **Each pull:** a ripple at her side (replacing the bob ripple) and 4 small private-random droplets.
- **Envelopes:** 0 at Tap to Start (the start frame unchanged), in over 0.3 s, out in the air.

### 2. Swerve: no body offset

The drawn x is the gameplay x: pickups use her root.
- **Bank:** `spring(-(0.12·xv + 0.0105·dxv/dt))`, ω 16, ζ 0.4, cap 24°.
  - About 20° at +4 rows: it leads the game's lean.
  - It rocks back 3° at +11/+12.
  - The stroke's roll falls to 30 % while banking.
- **Water:**
  - `lat` follows `xv` with a 0.03 s attack and a 0.15 s release, so `uLat` (2.67) peaks with `xv` at +3.
  - The swell's `swerve` goes 0.05 -> 0.08: the leading side +21 %, the trailing side -21 % (open water), ±5 % alternating
    with the strokes.
  - The swell stays centred within 4.4 cm.

### 3. Jump: a dolphin arc, not a somersault

A swimmer leaves the water head first along her path; the flip reads as a toy.
- **Pitch:** `-0.55·atan2(vy, max(speed, 3))` through a spring (ω 20, ζ 0.5): -21° at take-off, 0 at the apex, +21° at
  entry.
- **`m.flip`:** still computed, only not drawn.
- **Arms:** they rise.
- **Water:**
  - a `uLand` pulse of 0.5 (0.12 s) throws the crest up with her;
  - the slump closes the water under her by +8 rows;
  - a closing ring where she left it, at +0.27 s.

### 4. Landing: a dip and a resurface, 0.5 s

- **The one-row drop:** not drawn.
- **Dip:** a damped sine (ω 14, ζ 0.45), depth `clamp(0.013·|vy|, 0.03, 0.08)`:
  - -6 cm on the contact row, -8 cm at +1/+2;
  - 0 at +7, a +1.3 cm rebound at +9;
  - settled by +15.
- **Pitch:** from +21° to about -4° nose-up at +9 (she resurfaces).
- **Squash:** 0.15 per unit about her waterline (minimum 0.90).
- **Water:**
  - **Crater:** `uAir = max(slump, 0.45·dip)` lowers the crest about 17 % while she dips, so her waterline holds: never
    buried.
  - `uLand = 1` for 0.4 s: the crown splash.
  - The floor's ring as now.

## The water's inputs, each frame

`updateMascot` writes `m.sw2`; the updaters copy it later in the same frame (`game.js:1600`).

| layer | uniform | value |
|---|---|---|
| heroSwell and its followers | `uLat` / `uAir` / `uLand` | `sw2.swellLat` / `sw2.swellAir` / `sw2.land` |
| | `uPX`, base | `sw2.waterX`; from `ride + dip` to the water surface by `sw2.run` |
| lqFloor | `uLqPlayer.x`, `uLqMove` | `sw2.waterX`; (`lat`, speed, `air`, `ring`) |
| water | `uRipples` | strokes, closing ring |
| fur | `uSw2Arm` | flaps, sweeps (rad) |

## Verify with `motion_trace.cjs` (`S3=intunnel,swim2`)

1. **Gameplay** (`x`, `xv`, `lane`, `air`, `yAbs`, `z`, `speed`, pickups, `flipDeg`, `her`, `cam`): identical in all
   152 rows. A `Math.random` call counter must give equal counts.
2. **Rows 0-1:** all fields identical.
3. **Straight:** `rollDeg` carries a 1.25 Hz ±6° line; `drawnAboveSwellBase` a 2.5 Hz line of about 2 cm, with no 1.7 Hz.
4. **Swerve right:**
   - `rollDeg` +20 ±2° at rows 62-63, -3° at rows 69-70;
   - `swellLat` -2.67 at row 61;
   - `|x - swellLagX|` ≤ 0.05.
5. **Jump:** `pitchDeg` -21 at row 88, ≤ 4 at rows 95-96, +21 at row 106.
6. **Landing:**
   - `drawnAboveSwellBase - 0.34` follows the dip;
   - `squashY` ≥ 0.89;
   - `swellAir` about 0.44 at rows 108-109.
7. **By eye:** the clip at n149-n154 and n165-n172. Check the arm bend at four phases.

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
