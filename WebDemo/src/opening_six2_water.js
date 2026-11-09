// six2 WATER (session 9ee07777): the water of scenes 3-5: the drum floor water as he lands (scene 3), the water rising and swirling round him behind
// the porthole glass (scene 4, reference 04), the tunnel water he swims into (scene 5, reference 05). It drives the opening's own vortex water
// (opening3d.js buildVortex: vortex.water / vortex.WU, the drum wall's uFill swirl) and may add its own meshes. Owned by the water specialist.
import * as THREE from 'three';
import { six2Sm as sm, SIX2 } from './opening_six2.js';
import { installWash8 } from './opening_six2_wash8.js';   // (session 8da775c4, seq7 only) the wash water behind the glass, the spin into the tunnel, the tunnel's waves
const SEQ7_W = typeof window !== 'undefined' && (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(',')).includes('seq7');
export function installSix2Water(ctx) {
  const { scene, vortex, OPENING3D } = ctx, S = SIX2;
  const W8 = SEQ7_W ? installWash8(ctx) : null;
  // per frame: s = the story clock (seconds after START), it = the idle clock, o = { hero (position), heroSit, heroLand, lit (0..1 the wash lights) }
  function update(s, it, o) {
    vortex.WU.uFrom.value = s < 3.6 ? 9.5 : 9.5 * (1 - sm(3.6, 4.6, s));
    const rise = W8 ? 0 : S.water.rise * sm(6.6, 7.4, s) * (1 - sm(7.9, 8.5, s));   // (seq7: no lifted plane; wash8's water)
    vortex.water.position.y = rise; vortex.water.scale.x = 1 + rise * 2.2;
    vortex.U.uFill.value = sm(6.6, 7.3, s) * (1 - sm(7.9, 8.6, s)) * 0.75;   // the water climbs round the drum (the swirl of reference 04)
  }
  if (W8) return { update: (s, it, o) => { update(s, it, o); W8.update(s, it, o); }, hero: W8.hero };
  return { update };
}
