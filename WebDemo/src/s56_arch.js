// arch56 (9 November 2026, session d847dce2): THE APPROVED SCENE 5 / SCENE 6 ARCHITECTURE in the live game, on top of s56 (`?s3=...,s56,arch56`).
// Targets (the user's reference pack of 9 November, the ONLY targets): Design/ReferencePacks/2026-11-09_Scenes5_6_Approved_Visual_Reference_Pack_from_user/
// 02_APPROVED_SCENE_5.png, 03_APPROVED_SCENE_6.png and the crops 04-08. Lane arch56 (Tools/lanes.json) owns this file; s56_tunnel.js calls it
// (coordinator hook, section 0) and skips the sections it replaces. Real 3D only (no painted backgrounds); gameplay is game.js's own, untouched.
// Private random numbers only (the game's seeded Math.random is never used).
import * as THREE from 'three';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const ARCH56_ON = LIST.includes('arch56') && LIST.includes('s56') && LIST.includes('level1');

// every number (window.__bwArch56 in the browser, live-tunable)
export const ARCH56 = {};
if (ARCH56_ON && typeof window !== 'undefined') window.__bwArch56 = ARCH56;

/**
 * ctx: { scene, TR, W, L, env, loader, root, S (S56), M (s56 materials), F, frameM(u) -> Matrix4, T4(x,y,z,rx,ry,rz,s), timeU, heroU, report }.
 * Returns { skip: { shell, arches, banks, models }, update(dt, time, phase, m), cam: null | { off: [x,y,z], look: [x,y,z], fov } }.
 */
export async function buildArch56(ctx) {
  ctx.report.parts.push('arch56 (stub)');
  return { skip: {}, update() {}, cam: null };
}
