// ?s3=match (test only): Round 9's water, owned by the Water & VFX specialist. The water floor's material and reflections
// through the tunnel, and the turbulent water round the pink character (glossy turquoise-blue waves, semi-translucent bubbly
// crests with blue beneath, spray and droplets, broken foam accents, never a white blanket), on top of Round 8's liquid
// (tunnel_r8_liquid.js) and the splash pass (tunnel_r8_splash.js). The ONLY target is the ORIGINAL APPROVED Screen 4
// (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg). Nothing here runs without
// the switch. Private random numbers only.
import * as THREE from 'three';
import { MATCH_ON, MATCH_FOAM, deepMerge } from './tunnel_r9_match.js';

export const MATCH_WATER = {};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.matchWater;
  if (tune) deepMerge(MATCH_WATER, tune);
}

// Called at the end of buildHero (tunnel_r7_hero.js), right after buildMatch.
export function buildMatchWater({ scene, TR, L, W, mascot, updaters, time, U, HERO, waterSheets, drumSheet }) {
  const report = { on: MATCH_ON, foam: MATCH_FOAM };
  return report;
}
