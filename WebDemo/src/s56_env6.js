// env6 (9 November 2026, session ddf175f2, the coordinator; the user's URGENT mandate: "rebuild the complete approved Screen 6 environment").
// Target: ONLY Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png (864x1536), game at u 206.
// The integrated Screen 6 candidate: `?s3=...,s56,coin6,hero6,water6,brush6,arch56,env6`. This file holds only what the coordinator owns
// (post, integration); the scenery is lane arch56's (s56_arch.js), the brushes lane brush6's (s56_brush6.js), the water lane s56's (s56_tunnel.js).
// Without `env6` nothing here runs (the plain launch and every older switch are unchanged).
//
// 1. The haze. Measured by ablation on one frozen frame (tools/env6/var6.cjs, Previews/WebDemo/six_scenes/17_screen6_env_ddf175f2/02_haze/):
//    the UnrealBloomPass (game.js `bloom`, strength 0.16 inside the drum, threshold under 1) laid a peach-lavender veil over the whole upper
//    tunnel: the perforated walls, arches and machinery lost their darks. With it off the walls are the approved dark violet metal with
//    black holes. env6 keeps a glow ONLY on what is brighter than white in linear light (the lamps, tank cores, the arch lamp bars):
//    threshold above 1, a small radius.
// 2. The grade. Past the old Classic Screen 4 drum (tunnel_r7_hero.js: uHero 0 after L.tunnelEnd) the whole run, u 206 included, runs the old
//    drum chain: the base grade, then uS4Grade's round4 contrast 1.4 round 0.5 (pink -> red, gold -> orange, green below ~0.2 crushed to violet).
//    Every lane worked round it on its own: the water (lane s56) with a second palette per grade; the architecture (lane arch56) by inverting the
//    chain in its materials, whose knee inverse divides by max(1 - 1.6 b, 0.05): every bright lamp, strip and tank core (linear ~2.2) left
//    the shader at up to x20 (measured: linear luminance up to 214, 1.6 % of the frame above 6), and the bloom smeared those pixels over the
//    whole tunnel (the peach veil). env6 runs the hero grade (uHero 1, the grade of Tap to Start / Scene 5, which the lanes' materials were made
//    for) inside the s56 tunnel, so arch56's inverse turns itself off (uA56Ungrade = 1 - uHero) and the water uses its hero palette.
import { S56 } from './s56_tunnel.js';
import { BRUSH6 } from './s56_brush6.js';
const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const ENV6_ON = LIST.includes('s56') && LIST.includes('level1') && LIST.includes('env6');

export const ENV6 = {
  bloom: { strength: 0.3, radius: 0.35, threshold: 1.05 },
  grade: { hero: 1.0 },
};
if (ENV6_ON && typeof window !== 'undefined') window.__bwEnv6 = ENV6;

// 3. `fin6` (the Screen 6 finishing pass; with s56): settings of the merged lanes changed BEFORE they build (their own files untouched).
//    Brushes: the approved second tier is WHITE (#f4f0fc with a lavender shade), not lavender; rounder, denser tufts with fewer stray spikes
//    (the art director: "see-through spikes, no distinct white tier").
export const FIN6_ON = LIST.includes('s56') && LIST.includes('level1') && LIST.includes('fin6');
export const FIN6 = {
  brush: { dark1: '#a596d2', med1: '#e6def9', lite1: '#ffffff', fur: { spike: 0.07, stray: 0.03, strands: 260, scallop: 0.16, tufts: 36 } },
};
if (FIN6_ON) {
  const C = BRUSH6.colours, B = FIN6.brush;
  C.dark[1] = B.dark1; C.med[1] = B.med1; C.lite[1] = B.lite1;
  Object.assign(BRUSH6.fur, B.fur);
  if (typeof window !== 'undefined') window.__bwFin6 = FIN6;
}

// called by game.js just before s56.update() (so arch56 and the water read it in the same step) and again in render()
export function env6Grade(grade, m) {
  if (!grade || !grade.uniforms || !grade.uniforms.uHero || !m) return;
  if (m.z > S56.u0 && m.z < S56.u1) grade.uniforms.uHero.value = ENV6.grade.hero;
}
// called by game.js render() just before composer.render() (the last word over every module's bloom updater), only when ENV6_ON
export function env6Post(bloom) {
  if (!bloom) return;
  const B = ENV6.bloom;
  bloom.strength = B.strength; bloom.radius = B.radius; bloom.threshold = B.threshold;
}
