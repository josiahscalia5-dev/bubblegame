// ?s3=round7 (test only): Screen 4's water, splash collar, immersion and bubbles, owned by the Water & VFX specialist.
// Round 7 is round6 plus the rich preview plus this pass; ?s3=round6 and ?s3=round6,rich are unchanged.
// Imports: only 'three' and './shaders.js' (tunnel_r6.js imports this file, so importing it back would be a cycle).
//
//   R7_WATER.round6: settings merged into ROUND6 (tunnel_r6.js) when round7 is on, before any shader text is written.
//                    ROUND6.round5 inside it reaches round5's settings (contact collar, soft bubbles, spray, water ...).
//   buildR7Water(ctx): called at the end of buildRound6 with { scene, TR, L, W, mascot, updaters, time, motion }
//                    (motion: { lat, speed, lift, landing, ride }, updated every frame). Returns a small report object.
// (import * as THREE from 'three' and { NOISE } from './shaders.js' when needed; use THREE.<name>, never the bare namespace,
// or the bundler keeps all of three.js)

export const R7_WATER = {
  round6: {},
};

export function buildR7Water(/* { scene, TR, L, W, mascot, updaters, time, motion } */) {
  return { stub: true };
}
