// tripo1 (8 November 2026, session 57091b57, the user's standing Tripo authorization: "use Tripo wherever it provides a genuine
// visual improvement ... use the actual approved artwork as the reference for Tripo image-to-3D"): OPT-IN on top of level1,
// `?s3=...,level1,tripo1`. Nothing changes without it.
//   - enemy:  board panel 09's grime ball (glossy navy ball, angry pink eyes, dark brows), Tripo P2 image-to-3D from the original
//             board's crop (Design/TripoDeliveries/2026-11-08_session_57091b57_Level1_assets/), in place of the code-built ball;
//   - castle: board panels 01 / 02 / 08's Bubble Wash Kingdom castle (round lavender keep with portholes, the crown, the blue swirl
//             portal, towers with peach-gold roofs and waterfalls), Tripo P2 from the board's panel 02 crop, in place of the
//             pink-gold gateway model (models/castle.glb, kept unchanged for every other switch).
// LOOKS ONLY, swapped after buildLevel1(): each enemy's hit box, lane, patrol, pop and timing, the castle's place and the course are
// level1.js's own, untouched. The code-built meshes are hidden, not removed (level1.js still turns them). No random numbers.
// Off per part: ,notripoenemy  ,notripocastle.  Report: window.__bwTripo1.
import * as THREE from 'three';

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const TRIPO1_ON = LIST.includes('level1') && LIST.includes('tripo1');
export const TRIPO1_PARTS = { enemy: TRIPO1_ON && !LIST.includes('notripoenemy'), castle: TRIPO1_ON && !LIST.includes('notripocastle') };
export const TRIPO1_FILES = { enemy: 'models/l1_enemy_tripo.glb', castle: 'models/l1_castle_tripo.glb' };
// the look's size against the part it replaces: the enemy's diameter as a share of the code ball's (board 09's ball reads a little
// bigger than the code ball beside her), the castle's footprint as a share of the old model's widest side
export const TRIPO1_SIZE = { enemy: 1.15, castle: 1.0, castleMaxH: 1.25 };

function fitted(src, env) {
  const m = src.clone(true);
  m.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = false; o.receiveShadow = false;
    for (const mat of [].concat(o.material)) if (mat && mat.isMeshStandardMaterial && !mat.envMap && env) { mat.envMap = env; mat.envMapIntensity = 0.8; }
  });
  const box = new THREE.Box3().setFromObject(m);
  return { m, box, size: box.getSize(new THREE.Vector3()), mid: box.getCenter(new THREE.Vector3()) };
}

export async function applyTripo1({ scene, loader, env }) {
  const report = { on: true, enemy: null, castle: null, errors: [] };
  if (typeof window !== 'undefined') window.__bwTripo1 = report;
  const load = (url) => new Promise((ok, no) => loader.load(url, ok, undefined, no));
  const holders = (name) => { const a = []; scene.traverse((o) => { if (o.name === name) a.push(o); }); return a; };

  if (TRIPO1_PARTS.enemy) {
    try {
      const gl = await load(TRIPO1_FILES.enemy); let n = 0;
      for (const holder of holders('l1Enemy')) {
        const body = holder.children[0]; if (!body || !body.children.length) continue;
        const ball = body.children[0]; if (!ball.geometry.boundingSphere) ball.geometry.computeBoundingSphere();
        const D = ball.geometry.boundingSphere.radius * 2 * TRIPO1_SIZE.enemy;
        const f = fitted(gl.scene, env); const s = D / Math.max(f.size.x, f.size.y, f.size.z);
        f.m.scale.setScalar(s); f.m.position.set(-f.mid.x * s, -f.mid.y * s, -f.mid.z * s);
        for (const c of body.children) c.visible = false;   // the code ball, eyes, pupils, brows (level1.js keeps turning the ball)
        f.m.name = 'l1EnemyTripo'; body.add(f.m); n++;
        report.enemy = { count: n, diameter: +D.toFixed(3), scale: +s.toFixed(4) };
      }
    } catch (e) { report.errors.push('enemy: ' + (e && e.message || e)); }
  }
  if (TRIPO1_PARTS.castle) {
    try {
      const gl = await load(TRIPO1_FILES.castle);
      for (const holder of holders('l1Castle')) {
        const old = holder.children[0]; if (!old) continue;
        const ob = new THREE.Box3().setFromObject(old.clone());   // in the holder's frame (the clone has no parent) const os = ob.getSize(new THREE.Vector3());
        const f = fitted(gl.scene, env);
        const s = Math.min(Math.max(os.x, os.z) * TRIPO1_SIZE.castle / Math.max(f.size.x, f.size.z), os.y * TRIPO1_SIZE.castleMaxH / f.size.y);
        f.m.scale.setScalar(s); f.m.position.set((ob.min.x + ob.max.x) / 2 - f.mid.x * s, ob.min.y - f.box.min.y * s, (ob.min.z + ob.max.z) / 2 - f.mid.z * s);
        old.visible = false; f.m.name = 'l1CastleTripo'; holder.add(f.m);
        report.castle = { scale: +s.toFixed(4), w: +(Math.max(f.size.x, f.size.z) * s).toFixed(2), h: +(f.size.y * s).toFixed(2), oldW: +Math.max(os.x, os.z).toFixed(2), oldH: +os.y.toFixed(2) };
      }
    } catch (e) { report.errors.push('castle: ' + (e && e.message || e)); }
  }
  return report;
}
