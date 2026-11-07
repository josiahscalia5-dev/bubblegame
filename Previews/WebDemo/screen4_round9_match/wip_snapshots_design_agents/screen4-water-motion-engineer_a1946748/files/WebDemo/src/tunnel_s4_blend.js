// ?s3=intunnel,blend (7 November 2026): the ORIGINAL's relationship between her and the water, on top of the accepted
// ?s3=intunnel (swim2 stays on). Visual only: nothing here writes her gameplay state (x, yAbs, air, lane, speed, vy,
// pickups), the camera or the game's seeded Math.random; every hook is gated on BLEND_ON.
//
// Measured at the original's framing (Previews/WebDemo/screen4_round9_match/59_blend/README.md): in the ORIGINAL her visible
// body is a round ball (a circle of about 150 px radius from her crown down) whose centre is about 70 px above the
// waterline; in the accepted game her drawn body is a taller egg (her presentation stretch 0.95 / 1.07 / 0.95) with the
// crest of the swell at her centre, so only her upper half shows: "too flat and too low". Four small pieces:
//   1. body: her drawn model a little less tall (its vertical stretch x ky, about her centre: a rounder crown) and drawn dy
//      higher on the water (the tilt group's offset along the path's up, so it does not swing with her pitch or flip). The
//      fur's light centre follows the drawn body, so her fur is lit exactly as before.
//   2. swell: the crest of heroSwell (the water round her lower body) lower (x scale), with the ORIGINAL's two rounded water
//      domes at her base (a higher one at her front-left, a broad low one at her front-right) as two more crest mounds. The
//      same mesh, footprint and draw call; the layers that follow its crest (splash bank, waterline foam) follow it.
//   3. look: on the swell's face, a lavender tint along the waterline in front of her body (her pink seen through the
//      water: the original's #a294ee domes) and the pale face lower down deepened toward the original's azure / turquoise
//      (#79c9f6 / #47abf1). No white, no bubbles added.
//   4. land: the landing's one-frame drop (yAbs one frame below the ride height) not drawn; a damped dip and resurface
//      (the animation report, 54_specialists/animation_review.md section 4, depth capped smaller) in its place, and the swell
//      sinks with her drawn dip as it did with her drop (so the water never swallows her).
import * as THREE from 'three';
import { BLEND_ON } from './tunnel_s4_bt.js';
export { BLEND_ON };

export const BLEND = {
  body: { ky: 0.88, dy: 0.06 },                       // vertical stretch factor (about her centre); drawn lift (m)
  swell: { scale: 0.84, mounds: [[16, 0.1, 12], [-12, 0.03, 14]] },   // crest heights x scale; [phi (deg), height (m), half width (deg)]
  look: { lav: '#a69af0', lavK: 0.5, lavD: 0.08, deep: [0.74, 0.92, 1.0], deepK: 0.7, deepD: [0.05, 0.25] },
  land: { omega: 14, zeta: 0.45, perV: 0.008, min: 0.025, max: 0.05, hold: 1.0 },   // damped dip: peak depth clamp(perV |vy|, min, max) m
};

// 2. the swell's crest (HERO_WATER.swell), set in buildHeroWater before the swell and its followers are built
export function blendSwell(P) {
  const k = BLEND.swell.scale;
  P.line = P.line.map((h) => +(h * k).toFixed(4));
  P.mounds = P.mounds.map(([c, a, w]) => [c, +(a * k).toFixed(4), w]).concat(BLEND.swell.mounds.map((m) => m.slice()));
}

// 1 + 4. her drawn pose, after updateMascot has set the game's own (rideY: her ride height on the water this frame)
const PEAK = 0.51;   // the damped sine's first trough (omega 14, zeta 0.45) per unit amplitude
export function blendPose(m, dt, rideY) {
  const B = BLEND.body, Ld = BLEND.land;
  const S = m.blend || (m.blend = { t: 9, A: 0, wasAir: !!m.air });
  if (S.wasAir && !m.air) { S.t = 0; S.A = THREE.MathUtils.clamp(Ld.perV * Math.abs(m.vy), Ld.min, Ld.max) / PEAK; }
  S.wasAir = !!m.air;
  let dip = 0;
  if (!m.air && S.t < Ld.hold) {
    const w = Ld.omega, z = Ld.zeta, wd = w * Math.sqrt(1 - z * z);
    dip = -S.A * Math.exp(-z * w * S.t) * Math.sin(wd * S.t);
    S.t += dt;
  }
  const fix = m.air ? 0 : rideY - m.yAbs;   // the landing frame's drop below the ride height, not drawn
  m.blendY = m.yAbs + fix + dip;             // her drawn ride height (without the lift), for the swell under her
  m.tilt.position.y = B.dy + fix + dip;
  m.squash.scale.y *= B.ky;
}
const _up = new THREE.Vector3();
export function blendFurCentre(c, m) {   // the fur's light centre on her drawn body
  c.addScaledVector(_up.set(0, 1, 0).applyQuaternion(m.root.quaternion), m.tilt.position.y);
}

// 3. the swell's face colours, last in matchSwellGLSL (its block: d = m below the crest, mwFront = 1 in front of her body)
const lin = (h) => new THREE.Color(h).toArray().map((v) => v.toFixed(5)).join(', ');
const f = (v) => (+v).toFixed(5);
export function blendSwellGLSL() {
  const K = BLEND.look;
  return /* glsl */ `    {   // ?s3=intunnel,blend: lavender where her body shows through at the waterline, the pale face deepened (tunnel_s4_blend.js)
      float blE = (1.0 - smoothstep(${f(K.lavD * 0.4)}, ${f(K.lavD)}, d)) * mwFront;
      mwCol = mix(mwCol, mtUndisplay(vec3(${lin(K.lav)})), blE * ${f(K.lavK)});
      mwCol = mix(mwCol, mwCol * mtUndisplay(vec3(${K.deep.map(f).join(', ')})), smoothstep(${f(K.deepD[0])}, ${f(K.deepD[1])}, d) * ${f(K.deepK)});
    }
`;
}
