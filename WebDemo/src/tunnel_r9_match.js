// ?s3=match (test only): Round 9, the bounded art-match pass toward the user's ORIGINAL CLASSIC APPROVED Screen 4
// (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg, the ONLY target).
// `match` turns on everything `splash` does (Round 8's real water + the translucent splashes) plus this pass;
// `?s3=match,nofoam` is the same without the white foam layer. `?s3=splash`, `liquid`, `hero` and everything older are
// unchanged: nothing here runs without the switch, and the hooks elsewhere only add `|| match` to the hero switch, gated
// settings merges and one gated build call.
//
// Owned by the Tunnel & Lighting specialist (tunnel shape, proportions, depth, camera composition, wall/ring/centre light,
// the gold rim and lavender housing, object sizes and placement). The water floor and the water round the character are
// the Water & VFX specialist's: tunnel_r9_match_water.js.
// Colours are sRGB hex converted to linear light by THREE.Color. Private random numbers only (never the game's seeded
// Math.random).
import * as THREE from 'three';

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const MATCH_ON = LIST.includes('match');
export const MATCH_FOAM = MATCH_ON && !LIST.includes('nofoam');

export const MATCH = {
  hero: {},        // deep-merged into HERO (tunnel_r7_hero.js) at load, before anything is built (camera, rim, collar, layout...)
  liquid: {},      // deep-merged into LIQUID (tunnel_r8_liquid.js) after the splash pass's settings
  splash: {},      // deep-merged into SPLASH (tunnel_r8_splash.js)
  heroWater: {},   // deep-merged into HERO_WATER (tunnel_r7_hero_water.js) after the splash pass's settings
};
// a deep merge: objects merge key by key at every level, arrays and values replace
export function deepMerge(target, over) {
  for (const k of Object.keys(over || {})) {
    const v = over[k], t = target[k];
    if (v && typeof v === 'object' && !Array.isArray(v) && t && typeof t === 'object' && !Array.isArray(t)) deepMerge(t, v);
    else target[k] = v;
  }
  return target;
}
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.match;
  if (tune) deepMerge(MATCH, tune);
}

// Called at the end of buildHero (tunnel_r7_hero.js), after the liquid and the splash bank are built.
export function buildMatch({ scene, TR, L, W, mascot, updaters, time, U, HERO, waterSheets, drumSheet }) {
  const report = {};
  return report;
}

// a private random sequence (never the game's seeded Math.random)
export function mulberryMt(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
