// brush6 (9 November 2026, session 47f75e22, lane brush6): Scene 6's large rotating laundry brushes at the left and right foreground,
// matched to the user's ORIGINAL APPROVED Scene 6
// (Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png).
// Switch `?s3=...,s56,brush6` (with s56 and level1). Without `brush6` nothing is built and the game is unchanged.
// Called by the coordinator hook in s56_tunnel.js section 0 (after arch56); it may return { update(dt, time, phase, m) }.
// Lane brush6 owns this file and WebDemo/tools/brush6/ only (Tools/lanes.json, PARALLEL_LANES.md).
const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const BRUSH6_ON = LIST.includes('brush6') && LIST.includes('s56');

/** ctx: the same context as buildArch56 plus { arch, ctx } (the s56 build context: mascot, renderer). Returns null or { update }. */
export async function buildBrush6(ctx) { // eslint-disable-line no-unused-vars
  return null;
}
