// girl3 (10 November 2026, session b57cc1e7): PIPELINE CHECK of the user's Blender + DeepMotion workflow for the girl. A CANDIDATE behind the switch
// `girl3` (with six + six2). Without it the opening is exactly the previous build.
//   - her Blender-prepared model girl_v3 (WebDemo/tools/blender/prepare_girl_v3.py: T-pose rest, ankles and toes, limb skin weights; her mesh,
//     UVs and textures unchanged) with ONE skeletal clip keyed in Blender (tools/blender/make_test_clip.py: stand, kneel, reach, lift), played by
//     three.js's AnimationMixer on her own bones. The clip only proves the path Blender/DeepMotion -> GLB -> game; the motion itself is to come
//     from DeepMotion Animate 3D.
//   - she wears the current girl's in-game material (the same textures and light), so only the skeleton and the motion differ; the previous
//     girl is hidden while this one is shown.
// window.__bwGirl3: { ready, t (clip seconds; null = follow the story clock), dur, G3 }.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const G3_ON = LIST.includes('six') && LIST.includes('six2') && LIST.includes('girl3');

export const G3 = { file: 'models/opening/girl_v3_test_clip.glb', clip: 'girl3_test' };
const api = { G3, ready: false, t: null, dur: 0, errors: [] };
if (G3_ON && typeof window !== 'undefined') window.__bwGirl3 = api;

// load her once; g2 is the current girl (her material is shared so the look is the same)
export function installGirl3({ scene, g2 }) {
  if (!G3_ON) return null;
  const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
  loader.load(G3.file, (gl) => {
    const root = new THREE.Group(); root.name = 'girl3'; root.add(gl.scene); scene.add(root);
    let mesh = null; gl.scene.traverse((o) => { if (o.isSkinnedMesh) { mesh = o; o.frustumCulled = false; } });
    const clip = gl.animations.find((a) => a.name === G3.clip) || gl.animations[0];
    if (!mesh || !clip) { api.errors.push(`girl3: ${mesh ? '' : 'no skinned mesh '}${clip ? '' : 'no clip'}`); return; }
    const mixer = new THREE.AnimationMixer(gl.scene), action = mixer.clipAction(clip); action.play();
    Object.assign(api, { ready: true, root, mesh, mixer, action, clip: clip.name, dur: clip.duration, tracks: clip.tracks.length, bones: mesh.skeleton.bones.length, shared: false });
    const share = () => { if (g2.ready && !api.shared) { let m = null; g2.root.traverse((o) => { if (o.isSkinnedMesh && !m) m = o.material; }); if (m) { mesh.material = m; api.shared = true; } } };
    share(); api.share = share;
  }, undefined, (e) => api.errors.push('girl3 load: ' + (e && e.message)));
  return api;
}

// every frame, after the opening has posed and shown the current girl: put the new one at her knee spot, hide the old one, set the clip time
export function updateGirl3(s, { g2, S, inDrum }) {
  if (!G3_ON || !api.ready) return;
  if (!api.shared && api.share) api.share();
  const k = S.girl.k1, root = api.root;
  root.position.set(k[0], 0, k[1]); root.rotation.set(0, S.girl.yaw1, 0); root.scale.setScalar(S.girl.scale);
  root.visible = !inDrum;
  if (g2.ready) g2.root.visible = false;
  const t = api.t != null ? api.t : Math.min(api.dur, Math.max(0, s));
  api.mixer.setTime(Math.min(api.dur - 1e-4, Math.max(0, t)));
}
