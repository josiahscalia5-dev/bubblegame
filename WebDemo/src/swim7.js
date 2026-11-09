// swim7 (9 November 2026, session 8da775c4): NATURAL SWIMMING CONTROLS (the user's task C and the STRICT LEVEL 1 DIRECTIVE, section 4-6:
// "I do not want the primary gameplay to be jumping. The pink furry character should continuously swim through the water").
// Switch `?s3=...,level1,...,swim7`. Without it nothing here runs and the game is exactly as before.
//
// What changes with the switch (the game's own systems stay: lanes, pickups, hearts, spin, Bubble Blast, Turbo Spin, Level Complete):
//   - swipe left / right: the same three lanes (Level 1's routes need them), swum more smoothly (a longer ease, a turn and bank into the move);
//   - swipe UP: a forward SWIMMING BURST (a short, eased speed boost drawn as a dip-and-surge stroke with a wake kick), NOT a jump;
//   - swipe DOWN: a short DIVE under the surface (drawn under the water; grime balls and soap bars pass over him), instead of jumping them;
//   - the raised side path is reached by a WATER RAMP (level1_flow.js: its water rises from the main water), not from a bounce pad;
//   - the current carries him at SWIM7.speed x the game's cruise (7 m/s) without any input; all numbers below are live (window.__bwSwim7)
//     and the pace can be set from the address: &swimspeed=0.8 ... 1.2.
// Jumping stays in the code for every other switch (and for the Level Complete hop); with swim7 no gesture jumps.
// Drawn offsets go on m.tilt only (the pickups measure from m.root, CLAUDE.md), so collecting coins, gems and socks is unchanged.
const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const SWIM7_ON = LIST.includes('swim7') && LIST.includes('level1');
const qnum = (name, def) => { if (typeof location === 'undefined') return def; const m = location.search.match(new RegExp('[?&]' + name + '=(-?[0-9.]+)')); return m ? +m[1] : def; };

export const SWIM7 = {
  speed: Math.min(1.4, Math.max(0.5, qnum('swimspeed', 0.92))),   // the current's pace: a share of the game's 7 m/s cruise (0.92 = 6.4 m/s)
  // swipe up: speed x mul at the peak, lasting secs (rise = the share of it spent accelerating), then cool before the next one;
  // drawn: dips dip m and noses down pitch rad, then surges forward lunge m; the camera opens fov degrees and falls back `back` m
  burst: { mul: 1.42, secs: 0.95, rise: 0.16, cool: 0.3, dip: 0.12, pitch: 0.28, lunge: 0.28, fov: 4.5, back: 0.3 },
  // swipe down: under the surface for secs, depth m at the deepest; hazards pass over him between under[0] and under[1] of it
  dive: { secs: 0.85, depth: 0.62, under: [0.14, 0.82], cool: 0.3, pitch: 0.5 },
  // lane changes: the ease time (the game's runner: 0.18 s), the extra turn and bank into the move (rad per m/s)
  lane: { time: 0.24, yaw: 0.07, roll: 0.05 },
  // the swim rhythm: strokes per second, bob (m), nod and roll (rad)
  stroke: { rate: 1.2, bob: 0.03, pitch: 0.04, roll: 0.045 },
};
if (SWIM7_ON && typeof window !== 'undefined') window.__bwSwim7 = SWIM7;

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const fresh = () => ({ burst: -1, burstCool: 0, dive: -1, diveCool: 0, kick: 0, bursts: 0, dives: 0 });
const S = (m) => m.s7 || (m.s7 = fresh());

export function swim7Reset(m) { m.s7 = fresh(); m.s7under = false; }

/** Swipe up. True when the burst started (false: in the air, already bursting or cooling). */
export function swim7Burst(m) {
  const s = S(m);
  if (m.air || s.burst >= 0 || s.burstCool > 0) return false;
  s.burst = 0; s.bursts++; return true;
}
/** Swipe down. True when the dive started. */
export function swim7Dive(m) {
  const s = S(m);
  if (m.air || s.dive >= 0 || s.diveCool > 0) return false;
  s.dive = 0; s.dives++; return true;
}

/** Once per step, before his speed is eased: advances the timers; returns the speed multiplier and the easing rate (1/s). */
export function swim7Speed(m, dt, running) {
  const s = S(m), B = SWIM7.burst, D = SWIM7.dive;
  s.burstCool = Math.max(0, s.burstCool - dt); s.diveCool = Math.max(0, s.diveCool - dt);
  let env = 0, rising = false;
  if (s.burst >= 0) {
    s.burst += dt;
    const p = s.burst / B.secs;
    if (p >= 1 || !running) { s.burst = -1; s.burstCool = B.cool; }
    else { rising = p < B.rise; env = rising ? p / B.rise : Math.pow(1 - (p - B.rise) / (1 - B.rise), 1.4); }
  }
  if (s.dive >= 0) {
    s.dive += dt;
    if (s.dive >= D.secs || !running) { s.dive = -1; s.diveCool = D.cool; s.surfaced = true; }
  }
  const pd = s.dive >= 0 ? s.dive / D.secs : -1;
  m.s7under = pd > D.under[0] && pd < D.under[1];
  s.env = env;
  return { mul: SWIM7.speed * (1 + (B.mul - 1) * env), rate: rising ? 7 : env > 0 ? 3 : 2.2 };
}

/**
 * His drawn swimming, after every other pose pass (m.tilt only). fxh: { emit(x, h, u, vx, vy, vz, size, life, kind, grav), burst(x, h, u, n, power, opts),
 * ripple(x, u, s), sfx(name), rnd() } (the game's own particle system; rnd = a private random sequence). surf = the water height at him.
 */
export function swim7Pose(m, t, dt, running, surf, fxh) {
  const s = S(m), B = SWIM7.burst, D = SWIM7.dive, ST = SWIM7.stroke, LN = SWIM7.lane;
  let dy = 0, dz = 0, rx = 0, ry = 0, rz = 0;
  const k = m.air ? 0 : running ? 1 : 0.45, ph = t * ST.rate * Math.PI * 2;
  dy += Math.sin(ph) * ST.bob * k; rx += Math.sin(ph + 1.1) * ST.pitch * k; rz += Math.sin(ph * 0.5 + 0.4) * ST.roll * k;
  if (!m.air) { ry += clamp(m.xv * LN.yaw, -0.32, 0.32); rz += clamp(-m.xv * LN.roll, -0.25, 0.25); }
  if (s.burst >= 0) {
    const p = s.burst / B.secs, on = Math.min(1, p / 0.12), w = Math.PI * 2 * p;
    dy += -B.dip * Math.sin(w) * (1 - p) * on;
    rx += B.pitch * Math.cos(w) * (1 - p) * on;
    dz += B.lunge * Math.sin(Math.PI * p);
    // the kick: spray thrown back from his sides through the burst's first half
    if (fxh && p < 0.5) { s.kickCarry = (s.kickCarry || 0) + dt * 70 * (1 - p * 2);
      for (; s.kickCarry >= 1; s.kickCarry--) { const side = fxh.rnd() < 0.5 ? -1 : 1;
        fxh.emit(m.x + side * (0.3 + fxh.rnd() * 0.25), surf + 0.05, m.z - 0.25 - fxh.rnd() * 0.3, side * (0.5 + fxh.rnd() * 1.1), 0.9 + fxh.rnd() * 1.3, m.speed * (0.15 + fxh.rnd() * 0.25), 0.035 + fxh.rnd() * 0.04, 0.35 + fxh.rnd() * 0.3, 0); } }
  }
  if (s.dive >= 0) {
    const p = s.dive / D.secs, sp = Math.sin(Math.PI * p);
    dy -= D.depth * Math.pow(sp, 0.6);
    rx += D.pitch * Math.cos(Math.PI * p) * Math.pow(sp, 0.3);
    // while he is under: a trail of small bubbles rising to the surface over him
    if (fxh && m.s7under) { s.bubCarry = (s.bubCarry || 0) + dt * 26;
      for (; s.bubCarry >= 1; s.bubCarry--) { const a = fxh.rnd() * Math.PI * 2, r = fxh.rnd() * 0.3;
        fxh.emit(m.x + Math.cos(a) * r, surf + 0.02, m.z - 0.1 + Math.sin(a) * r, Math.cos(a) * 0.2, 0.35 + fxh.rnd() * 0.4, m.speed * 0.5, 0.06 + fxh.rnd() * 0.07, 0.5 + fxh.rnd() * 0.4, 1, -0.02); } }
  }
  if (s.surfaced) {   // back up through the surface: a low splash and a ring
    s.surfaced = false;
    if (fxh && running) { fxh.burst(m.x, surf + 0.05, m.z, 22, 1.0, { vz: m.speed * 0.4 }); fxh.ripple(m.x, m.z, 1.3); fxh.sfx('splash'); }
  }
  m.tilt.position.y += dy; m.tilt.position.z = dz;
  m.tilt.rotation.x += rx; m.tilt.rotation.y += ry; m.tilt.rotation.z += rz;
}

/** The follow camera's answer to a burst: opens a little and falls back, eased (off, look: the rig's vectors in his track frame). Returns the fov. */
export function swim7Camera(m, off, look, fov, dt) {
  const s = S(m), B = SWIM7.burst;
  s.kick += ((s.env || 0) - s.kick) * Math.min(1, dt * 5);
  off.z -= B.back * s.kick;
  return fov + B.fov * s.kick;
}
