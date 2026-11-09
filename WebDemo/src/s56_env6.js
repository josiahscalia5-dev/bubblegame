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
const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const ENV6_ON = LIST.includes('s56') && LIST.includes('level1') && LIST.includes('env6');

export const ENV6 = {
  bloom: { strength: 0.3, radius: 0.35, threshold: 1.05 },
};
if (ENV6_ON && typeof window !== 'undefined') window.__bwEnv6 = ENV6;

// called by game.js render() just before composer.render() (the last word over every module's bloom updater), only when ENV6_ON
export function env6Post(bloom) {
  if (!bloom) return;
  const B = ENV6.bloom;
  bloom.strength = B.strength; bloom.radius = B.radius; bloom.threshold = B.threshold;
}
