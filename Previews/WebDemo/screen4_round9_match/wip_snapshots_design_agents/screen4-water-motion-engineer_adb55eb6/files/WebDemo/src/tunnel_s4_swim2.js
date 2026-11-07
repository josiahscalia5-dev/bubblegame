// ?s3=intunnel,swim2 (7 November 2026): the moving tunnel's water kept cobalt, and the water touching her flowing past her
// as she swims. Visual only; nothing here reads or writes her gameplay state (x, yAbs, air, lane, speed, pickups) or the
// game's seeded Math.random. Without the switch nothing changes (every hook is gated on SWIM2_ON).
//
// From the measured diagnosis (Previews/WebDemo/screen4_round9_match/52_diagnosis/README.md) and the specialists' reports
// (54_specialists/), the smallest pieces:
//   1. hide: round3's swirl, whirlpool and inner bubbles. Round 4 hides the swirl once at build, but each layer's own
//      updater (tunnel_r3.js:286, :358, :388) shows it again once she passes u 3.0 m, so every moving frame had the paper-white
//      swirl bands and the white heart over the tunnel's cobalt rings (lighting report S1). Hidden after their updaters by the
//      hero scene's per-frame hide (tunnel_r7_hero.js), so round3's private random numbers are untouched. They are already
//      off at the start view (u 1.592 m).
//   2. flow: the swell's face (heroSwell: its currents, white crest pieces, bubble rings, glints and wave normals all run on
//      one phase, `fl`, tunnel_r8_liquid.js liquidSwell) ran on the clock alone, about 0.17-0.19 m/s down the face at her
//      7.2 m/s, so the water touching her rode with her (the diagnosis: streaming 56 px/s against a 153 px/s wobble). Its phase
//      now also advances with the distance she swims (perM per metre along the path), so the same water streams down the face
//      toward the camera and out along the bank at a pace tied to her travel; at the start view (no travel yet) it is the
//      accepted frame. The swell's shape, size and colours are unchanged (never a collar, container or pedestal).
//   3. maxPx: R7's droplet cap (tunnel_s4_bt.js WATER7, game.js): the game's spray droplets drawn no bigger than 12 px of the
//      canvas height, so the wake spray no longer piles up as white cotton balls in front of her while she moves (the water
//      report keeps it on).
import { SWIM2_ON } from './tunnel_s4_bt.js';
export { SWIM2_ON };

export const SWIM2 = {
  hide: ['r3Swirl', 'r3Whirlpool', 'r3Bubbles'],
  flow: { perM: 0.5, maxStep: 1.0 },   // phase per metre travelled (the clock adds about 1.0 per second); a frame's step clamped (m)
  cap: true,                           // R7's droplet cap
  capRamp: [0.5, 3.0],                 // m swum over which it eases in (none at the start view: its resting bubbles keep their size)
};
{
  const t = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.swim2;
  if (t) for (const k of Object.keys(t)) SWIM2[k] = t[k] && typeof t[k] === 'object' && !Array.isArray(t[k]) ? { ...SWIM2[k], ...t[k] } : t[k];
}

// the distance she has swum (m, along the path), accumulated once a frame from her z (read only); a restart or a lap,
// where z jumps back, adds nothing
export function swim2Travel(S, z) {
  if (S.sw2Z === undefined) { S.sw2Z = z; S.sw2T = 0; }
  S.sw2T += Math.min(Math.max(z - S.sw2Z, 0), SWIM2.flow.maxStep);
  S.sw2Z = z; SW2.T = S.sw2T;
}
export const swim2FlowPhase = (S) => (S.sw2T || 0) * SWIM2.flow.perM;
const SW2 = { T: 0 };   // the distance swum, shared with game.js's droplet cap
export function swim2CapPx(H, maxPx) {   // the droplets' largest size (px) for a canvas H px high
  const r = SWIM2.capRamp, x = Math.min(Math.max((SW2.T - r[0]) / (r[1] - r[0]), 0), 1), k = x * x * (3 - 2 * x);
  return H * (1 + (maxPx - 1) * k);
}
