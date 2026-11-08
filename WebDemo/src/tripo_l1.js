// tripo1 (8 November 2026, session 57091b57, the user's standing Tripo authorization: "use Tripo wherever it provides a genuine
// visual improvement ... use the actual approved artwork as the reference for Tripo image-to-3D"): OPT-IN on top of level1,
// `?s3=...,level1,tripo1`. Nothing changes without it.
//   - enemy: board panel 09's grime ball (glossy navy-cobalt ball, angry pink eyes, dark brows, the pink mouth shape), Tripo P2
//            image-to-3D from the original board's own crop (Design/TripoDeliveries/2026-11-08_session_57091b57_Level1_assets/),
//            textures reduced for mobile and turned to face +Z (models/l1_enemy_tripo.glb), in place of the code-built ball.
//   (The castle generated from board panel 02 was REJECTED: a flat painted card, not a castle; models/castle.glb stays. See that
//   folder's README.)
// LOOKS ONLY, swapped after buildLevel1(): each enemy's hit box, lane, patrol, pop and timing are level1.js's own, untouched. The
// code-built meshes are hidden, not removed (level1.js still turns the ball, and the wobble on `body` moves the new look too).
// No random numbers. Report: window.__bwTripo1.
import * as THREE from 'three';

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const TRIPO1_ON = LIST.includes('level1') && LIST.includes('tripo1');
export const TRIPO1_FILES = { enemy: 'models/l1_enemy_tripo.glb' };
// the new look's diameter against the code ball's (its bounding sphere): board 09's ball reads a little larger beside her
export const TRIPO1_SIZE = { enemy: 1.15 };

export async function applyTripo1({ scene, loader, env }) {
  const report = { on: true, enemy: null, errors: [] };
  if (typeof window !== 'undefined') window.__bwTripo1 = report;
  try {
    const gl = await new Promise((ok, no) => loader.load(TRIPO1_FILES.enemy, ok, undefined, no));
    gl.scene.traverse((o) => { if (o.isMesh) for (const m of [].concat(o.material)) if (m.isMeshStandardMaterial && !m.envMap && env) { m.envMap = env; m.envMapIntensity = 0.8; } });
    const box = new THREE.Box3().setFromObject(gl.scene), size = box.getSize(new THREE.Vector3()), mid = box.getCenter(new THREE.Vector3());
    const holders = []; scene.traverse((o) => { if (o.name === 'l1Enemy') holders.push(o); });
    let n = 0;
    for (const holder of holders) {
      const body = holder.children[0]; if (!body || !body.children.length) continue;
      const ball = body.children[0]; if (!ball.geometry.boundingSphere) ball.geometry.computeBoundingSphere();
      const D = ball.geometry.boundingSphere.radius * 2 * TRIPO1_SIZE.enemy, s = D / Math.max(size.x, size.y, size.z);
      const look = gl.scene.clone(true); look.scale.setScalar(s); look.position.set(-mid.x * s, -mid.y * s, -mid.z * s); look.name = 'l1EnemyTripo';
      for (const c of body.children) c.visible = false;   // the code ball, eyes, pupils and brows
      body.add(look); n++;
      report.enemy = { count: n, diameter: +D.toFixed(3), scale: +s.toFixed(4) };
    }
  } catch (e) { report.errors.push('enemy: ' + ((e && e.message) || e)); }
  return report;
}
