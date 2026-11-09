// sock3 / coin3 / enemy3 (9 November 2026, session 6ddc157f; the user's new Tripo models of 9 November,
// Design/TripoDeliveries/2026-11-09_New_Models_from_user/): OPT-IN, each on its own, with `six`, e.g.
// `?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,sock3,coin3,enemy3`. Nothing changes without them.
// LOOKS ONLY: the game's own collectible and enemy code places, animates (bob, rock, spin), collects and counts them exactly as before (the
// rescue counter, the coin and gem totals, the collision radii and the seeded random numbers are untouched); only the model file changes:
//   - sock3: "sock 2026 750 pm" (06_Sock_Character): a white knit sock with lavender cuff stripes, toe and heel and a big glossy-eyed face,
//     8k triangles (from 1.97M), its face turned to +Z like models/sock.glb, so buildSocks() sizes, lights and turns it as before;
//   - coin3: "818 pm nov 8" (02_Gold_Pipe_Candidate: it is a gold PAW COIN, not a pipe): 3k / 1k triangle levels (from 1.97M), sized here to
//     the round5 Tripo coin's 0.6 m diameter (its thickness x 0.75), drawn by the game's own tripoCoin() material and LOD;
//   - enemy3: "812 pm nov 8" (01_Purple_Enemy_Candidate): a purple grime ball with angry brows and pink eyes, 5k triangles (from 1.92M), in
//     place of tripo1's blue ball (tripo_l1.js sizes it to the code ball as before).
// All three are meshopt-compressed: the game's GLTFLoader gets three.js's own MeshoptDecoder, only when one of these switches is on.
import * as THREE from 'three';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
const SIX = LIST.includes('six');
export const SOCK3_ON = SIX && LIST.includes('sock3');
export const COIN3_ON = SIX && (LIST.includes('coin3') || LIST.includes('s56'));   // (s56: the approved Scene 6's embossed gold paw coin)
export const ENEMY3_ON = SIX && (LIST.includes('enemy3') || LIST.includes('s56'));   // (s56: the approved Scene 6's angry purple enemy)
export const PLAY3 = {
  sock: 'models/sock_v2_tripo.glb', coin: 'models/coin_v2_tripo.glb', coinLo: 'models/coin_v2_tripo_lo.glb', enemy: 'models/l1_enemy_v2_tripo.glb',
  coinD: 0.6, coinThick: 0.75,
};
// (9 November 2026, session 3849f5c8, the user's Screen 6 visual-match mandate) `coin6`: the coins DRAWN about half size, as on approved Screen 6
// (near pair ~0.10-0.12 W at u 206, art director's O2; today ~0.21-0.27 W). Applied in game.js addCoin() to each coin's LOD levels (the coin used
// at u 206 is round5's Tripo coin, not coin3), like ?s3=hero's coinScale. Looks only: the pickup radius, placement, spin, pop and counting are the
// game's own code, unchanged. Without `coin6` nothing changes.
export const COIN6_ON = LIST.includes('coin6');
PLAY3.coin6Scale = 0.53;
export function play3Loader(loader) { if (SOCK3_ON || COIN3_ON || ENEMY3_ON) loader.setMeshoptDecoder(MeshoptDecoder); return loader; }
// the new coin's geometry, centred and sized to the Tripo coin the game's tripoCoin() / LOD code was made for (its face on +Z)
export function coin3Prepare(gltfs) {
  for (const g of gltfs) g.scene.traverse((o) => {
    if (!o.isMesh) return;
    o.updateWorldMatrix(true, false); o.geometry.applyMatrix4(o.matrixWorld); o.geometry.computeBoundingBox();
    const b = o.geometry.boundingBox, c = b.getCenter(new THREE.Vector3()), s = b.getSize(new THREE.Vector3()), k = PLAY3.coinD / Math.max(s.x, s.y);
    o.geometry.translate(-c.x, -c.y, -c.z); o.geometry.scale(k, k, k * PLAY3.coinThick); o.geometry.computeBoundingSphere();
  });
  if (typeof window !== 'undefined') window.__bwPlay3 = Object.assign(window.__bwPlay3 || {}, { coin: true });
  return gltfs;
}
if (typeof window !== 'undefined') window.__bwPlay3 = { sock: SOCK3_ON, coin: false, enemy: ENEMY3_ON };
