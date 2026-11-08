// ?s3=...,level1 + flow (8 November 2026, session b0abcf95): the user's 10-beat Level 1 gameplay blueprint
// (Design/ReferencePacks/2026-11-08_Level1_Blueprint_and_Strict_Prompt_from_user/, from the original 12-screen board,
// Design/ApprovedScreens/): after the existing girl, laundry toss and washer entry, ONE continuous wet level in the board's order:
//   01 washer entry ("Let's go! Into the washing machine!")      02 start swimming: rescue 5 lost socks (0/5)
//   03 JUMP TO A RAISED SIDE PATH (a real water flume, reached from a bounce pad + swipe, with its own sock, gem and coins)
//   04 DROP TO A LOWER PATH (the middle lane falls down a chute into a lower channel; the side lanes stay up on ledges; the
//      routes are real: she can fall from a ledge into the channel, she cannot climb back; they rejoin)
//   05 spinning brushes   06 coins, gems and socks   07 grime balls that roll at her and patrol across lanes; a tap-spin,
//      Turbo Spin or Bubble Blast pops them   08 the Bubble Kingdom inside the wet washer chamber   09 rescue progress 4/5 -> 5/5
//   10 Level Complete with the board's goals and rewards (+300 coins, +10 gems, +5 socks), still on the blue water.
// Exactly five lost socks can be rescued on ANY route, the fifth near the end: the Screen 4 drum's first three (the ones in the accepted
// Tap to Start picture: 3/5 by the drum's end; its two far ones, not in view, are parked, not removed, so the game's seeded random
// sequence is unchanged), one on each route of the drop (4/5), and the last one in the Kingdom (5/5). The side path rewards its
// riders with the special gem and a coin arc instead.
// Heights: the routes are shaped by one height offset in track space, flowLift(x, u) (>= 0), added to world.js baseHeight through
// its HOOK only with this switch, so her riding height, the camera, the spray, the water mesh and the water pad round her all agree.
// ,noflow draws the previous level1 exactly.
import * as THREE from 'three';

// the raised side path (screen-left, +X): its centre x, half width, height above the main water, start, end of its level part,
// ramp back down into the main water; the bounce pad before it (lane, u, launch speed)
export const FL = { x: 1.62, half: 0.4, lift: 0.9, u0: 62, u1: 86, ramp: 5, pad: { lane: 0, u: 56.6, vy: 7.4 } };
// the drop: the tube pitches down at d0 (about 1.2 m), the middle lane's water goes with it (the lower path), the side lanes' water is
// raised by the same amount (ledges that stay level) until e0, then ramps down to the lower path; lanes spread to sp between s0..s3
export const DR = { d0: 112, pitch: 0.46, half: 0.68, wall: 0.1, e0: 129, ramp: 6, sp: 1.38, s0: 100, s1: 106, s2: 136, s3: 142 };
// the tunnel widens round both (radius + dR between a..d)
export const WD = { a: 42, b: 50, c: 140, d: 148, dR: 0.85 };

const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const bump = (u, a, b, c, d) => sm(a, b, u) * (1 - sm(c, d, u));   // the same as track.js bump
const dropBump = (u) => bump(u, DR.d0, DR.d0 + 0.8, DR.d0 + 2.8, DR.d0 + 3.6);

// how far the tube has dropped since d0 (the integral of sin(pitch) along it, as track.js builds the path)
const LD = (() => {
  const du = 0.02, n = Math.ceil(3.7 / du) + 1, a = new Float64Array(n); let s = 0;
  for (let i = 1; i < n; i++) { s += Math.sin(DR.pitch * dropBump(DR.d0 + (i - 0.5) * du)) * du; a[i] = s; }
  return { du, a, n };
})();
export const DROP_TOTAL = LD.a[LD.n - 1];
export function ledgeLift(u) {
  if (u <= DR.d0 || u >= DR.e0 + DR.ramp) return 0;
  const k = (u - DR.d0) / LD.du, i = Math.floor(k);
  const h = i >= LD.n - 1 ? LD.a[LD.n - 1] : LD.a[i] + (LD.a[i + 1] - LD.a[i]) * (k - i);
  return h * (1 - sm(DR.e0, DR.e0 + DR.ramp, u));
}
const flumeLevel = (u) => FL.lift * sm(FL.u0 - 0.3, FL.u0, u) * (1 - sm(FL.u1, FL.u1 + FL.ramp, u));
export function flowLift(x, u) {
  let h = 0;
  if (u > FL.u0 - 0.3 && u < FL.u1 + FL.ramp) {
    const inX = 1 - sm(FL.half - 0.03, FL.half + 0.03, Math.abs(x - FL.x));
    if (inX > 0) h += flumeLevel(u) * inX;
  }
  if (u > DR.d0 && u < DR.e0 + DR.ramp) {
    const on = sm(DR.half, DR.half + DR.wall * 0.8, Math.abs(x));
    if (on > 0) h += ledgeLift(u) * on;
  }
  return h;
}
// lane centres (lane -1: the raised side path); in the drum this is exactly world.js laneX
export const flowLaneX = (lane, u) => (lane === -1 ? FL.x : (1 - lane) * (0.7 + (DR.sp - 0.7) * bump(u, DR.s0, DR.s1, DR.s2, DR.s3)));
// the camera follows 55 % of lane moves (as before) and most of a move out onto a side path or ledge, so she stays in the narrow
// portrait frame (for |x| <= 0.7 this is exactly the game's 0.55 * x)
export const flowCamX = (x) => { const c = Math.max(-0.7, Math.min(0.7, x)); return c * 0.55 + (x - c) * 0.92; };
export const widen = (u) => WD.dR * bump(u, WD.a, WD.b, WD.c, WD.d);

// the course in the board's order (on top of level1.js COURSE: the chamber, the gate, the finish, the swim and the drum hand-off stay)
export function flowCourse(B) {
  return { ...B, flow: true,
    pitch: (u, bmp) => -DR.pitch * bmp(u, DR.d0, DR.d0 + 0.8, DR.d0 + 2.8, DR.d0 + 3.6) - 0.05 * bmp(u, 276, 284, 330, 338),
    turn: (u, bmp) => 0.024 * bmp(u, 150, 156, 164, 170) - 0.026 * bmp(u, 190, 196, 204, 210) + 0.022 * bmp(u, 220, 226, 236, 242) - 0.014 * bmp(u, 286, 292, 304, 310),
    sections: [
      { u: 1.6, name: 'Washer drum', short: 'Drum' },
      { u: 39, name: 'Rescue the socks', short: 'Socks', banner: ['Rescue 5 lost socks!', 'Swipe ← → to swim'] },
      { u: 49, name: 'Side paths', short: 'Side', banner: ['Jump to', 'Side Paths!'], hint: ['Bounce pad, then', 'swipe ← onto the side path'] },
      { u: 101, name: 'Lower path', short: 'Drop', banner: ['Drop down to', 'the lower path!'] },
      { u: 141, name: 'Spinning brushes', short: 'Brushes', banner: ['Watch out!', 'Spinning brushes!'], warn: true },
      { u: 186, name: 'Treasure', short: 'Treasure', banner: ['Collect coins, gems', '& rescue socks!'] },
      { u: 213, name: 'Grime balls', short: 'Enemies', banner: ['Avoid enemies!', 'Tap to spin-attack them'], warn: true },
      { u: 256, name: 'Bubble Kingdom', short: 'Kingdom', banner: ['Enter the', 'Bubble Kingdom!'] },
      { u: 294, name: 'Rescue progress', short: 'Rescue', banner: ['Rescue 5 lost socks', '{socks}/5'] },
    ],
    // [u, lane]: the side paths' main route (the raised path avoids them), then the brushes
    brushes: [[68, 1], [74, 2], [80, 1], [86, 2],
      [148, 0], [154, 2], [160, 0], [160, 1], [167, 1], [167, 2], [174, 0], [174, 2], [181, 1]],
    // [u, lane]: a short soap bar on each upper ledge of the drop (a ledge is one lane wide: a bar can be jumped, a brush could not be dodged)
    bars: [[117, 2], [118.5, 0]],
    // [u, lane, patrol]: patrol (m) = how far it sways across the lanes
    enemies: [[222, 1], [228, 0, 0.7], [234, 2], [240, 1, 0.75], [246, 0], [246, 2]],
    // [lane, u0, count, step, height, arc] (lane -1: the raised side path)
    coins: [[1, 41, 5, 1.5, 0.55, 0],
      [0, 50, 4, 1.4, 0.55, 0], [1, 52, 3, 1.5, 0.55, 0],
      [-1, 64.5, 9, 1.5, 0.55, 0.45],
      [0, 69, 3, 1.4, 0.55, 0], [2, 75, 3, 1.1, 0.55, 0], [0, 81, 3, 1.4, 0.55, 0], [1, 91, 5, 1.4, 0.55, 0],
      [1, 102, 6, 1.4, 0.55, 0], [1, 116, 7, 1.3, 0.5, 0], [0, 113, 4, 1.4, 0.55, 0], [2, 119.5, 4, 1.3, 0.55, 0], [1, 136, 4, 1.4, 0.55, 0],
      [1, 143, 3, 1.5, 0.55, 0], [2, 146, 3, 1.4, 0.55, 0], [0, 152, 3, 1.4, 0.55, 0], [2, 158, 3, 1.4, 0.55, 0], [0, 165, 3, 1.4, 0.55, 0], [1, 172, 3, 1.4, 0.55, 0], [0, 179, 3, 1.4, 0.55, 0],
      [1, 189, 7, 1.3, 0.55, 0.9], [0, 197, 6, 1.3, 0.55, 0], [2, 205, 6, 1.3, 0.55, 0.7],
      [0, 216, 3, 1.4, 0.55, 0], [2, 224, 3, 1.4, 0.55, 0], [1, 231, 3, 1.4, 0.55, 0], [0, 237, 3, 1.4, 0.55, 0], [1, 243, 3, 1.4, 0.55, 0], [1, 250, 4, 1.4, 0.55, 0],
      [1, 262, 5, 1.5, 0.55, 0], [0, 280, 6, 1.4, 0.55, 0.8], [2, 296, 6, 1.4, 0.55, 0], [1, 312, 8, 1.3, 0.55, 0.6]],
    // [lane, height, u]: one sock on each route of the drop (4/5), the last one in the Kingdom (5/5)
    // (the side paths had one per route too; with the drum's third sock kept in the accepted picture that made 5/5 before the Kingdom)
    socks: [[1, 0.9, 127], [0, 0.85, 124], [2, 0.85, 125], [1, 0.9, 304]],
    gems: [[-1, 0.85, 82], [1, 0.8, 201]],
    // (the islands beyond the portal were at eye height and read as green slabs edge-on: lowered)
    chamber: { ...B.chamber, islands: B.chamber.islands.map(([u, x, h, r]) => [u, x, h - 2.4, r]) },
    parkDrumSocks: [25, 37],   // the Screen 4 drum's socks between these u are parked (see the top; the one at 21.8 is in the Tap to Start picture)
    coinTint: [1.0, 1.5, 0.42],   // the course's coins toward the original's lemon gold (#f7c826; they measured #f69c3a); the drum's coins untouched
  };
}

/**
 * The side paths' and the drop's structures, the bounce pad, the arrows, and the flow's rules. ctx: level1's build context plus
 * { root, radiusAt, timeU, mats: { goldM, silverM, violM, env }, fx, sfx, padJump, hint(text) }.
 */
export function buildFlow(ctx) {
  const { root, TR, L, W, mascot: m, timeU } = ctx;
  const env = ctx.mats.env, items = [];
  // the rims: the original's warm gold (goldM, shared with the gate, portal and finish, reads orange-brown here), a lavender metal
  // for the troughs' sides (the original's silver-lavender) and a cobalt glass for the lower channel's walls
  const rimGoldM = ctx.mats.goldM.clone(); rimGoldM.color.set(0xffd27a); rimGoldM.metalness = 0.8; rimGoldM.roughness = 0.3; rimGoldM.emissive.set(0x7a4a2a); rimGoldM.emissiveIntensity = 0.45; rimGoldM.envMapIntensity = 1.1;
  // the walls of the side path's trough and of the lower path: no flat lavender or purple box (the first captures read as a block
  // and as a lavender canyon) but streaming water, as the drum's own walls: cobalt ribbons with turquoise currents and a few broken
  // white streaks flowing along the route (the lighting review's metal-free wall), lighter toward the gold rim
  const troughM = new THREE.ShaderMaterial({ uniforms: { uTime: timeU }, side: THREE.DoubleSide,
    vertexShader: 'attribute vec2 aUH; varying vec2 vUH; void main() { vUH = aUH; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */ `uniform float uTime; varying vec2 vUH;
float fh(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float fn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(fh(i), fh(i + vec2(1.0, 0.0)), f.x), mix(fh(i + vec2(0.0, 1.0)), fh(i + vec2(1.0, 1.0)), f.x), f.y); }
float ff(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * fn(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
void main() {
  float u = vUH.x, h = vUH.y, t = uTime, aa = clamp(fwidth(u) * 1.2 - 0.1, 0.0, 1.0);
  float w = ff(vec2(u * 0.55 - t * 1.4, h * 1.6 + t * 0.2));
  float rib = sin((u * 0.7 + h * 1.1 + w * 1.9 - t * 1.3) * 6.2832) * (1.0 - aa), rib2 = sin((u * 1.3 - h * 0.8 + w * 2.4 - t * 0.9) * 6.2832) * (1.0 - aa);
  vec3 col = mix(vec3(0.02, 0.09, 0.62), vec3(0.06, 0.28, 0.95), smoothstep(-0.8, -0.05, rib));
  col = mix(col, vec3(0.1, 0.55, 1.0), smoothstep(0.25, 0.8, rib) * 0.6);
  col = mix(col, vec3(0.2, 0.85, 1.0), smoothstep(0.6, 0.95, rib2) * 0.45);
  col = mix(col, vec3(0.92, 0.97, 1.0), smoothstep(0.92, 0.985, rib) * smoothstep(0.45, 0.7, ff(vec2(u * 2.2 - t * 3.0, h * 3.0))) * 0.6 * (1.0 - aa));
  gl_FragColor = vec4(col, 1.0);
}` });
  const glassM = troughM;
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };

  // a thin wall along the path at x = xc (half thickness th) from hBot(u) to hTop(u), u in [ua, ub]: two faces and a top
  const wall = (xc, th, hBot, hTop, ua, ub, mat, name) => {
    const n = Math.max(2, Math.ceil((ub - ua) / 0.25) + 1), pos = new Float32Array(n * 4 * 3), uh = new Float32Array(n * 4 * 2), idx = [];
    for (let i = 0; i < n; i++) {
      const u = ua + (ub - ua) * i / (n - 1), b = hBot(u), t = hTop(u);
      [[xc - th, b], [xc - th, t], [xc + th, t], [xc + th, b]].forEach(([x, h], j) => { const p = TR.map(x, h, u); pos.set([p.x, p.y, p.z], (i * 4 + j) * 3); uh.set([u, h], (i * 4 + j) * 2); });
      if (i) for (let j = 0; j < 3; j++) { const a = (i - 1) * 4 + j, c = i * 4 + j; idx.push(a, c, a + 1, c, c + 1, a + 1); }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aUH', new THREE.BufferAttribute(uh, 2)); g.setIndex(idx); g.computeBoundingSphere();
    const mesh = new THREE.Mesh(g, mat); mesh.name = name; root.add(mesh); items.push({ o: mesh, u0: ua, u1: ub }); return mesh;
  };
  const rail = (x, hTop, ua, ub, r, mat, name) => {
    const pts = []; for (let u = ua; u <= ub + 1e-6; u += 0.5) pts.push(TR.map(x, hTop(u) + 0.02, u));
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), pts.length * 3, r, 10), mat); mesh.name = name; root.add(mesh);
    items.push({ o: mesh, u0: ua, u1: ub }); return mesh;
  };

  // ---------------- 03: the raised side path, a golden-rimmed trough of water standing in the main water
  {
    const ua = FL.u0 - 0.32, ub = FL.u1 + FL.ramp, top = (u) => flumeLevel(Math.max(u, FL.u0)) + 0.14, bot = () => -0.25;
    for (const s of [-1, 1]) {
      const xw = FL.x + s * (FL.half + 0.05);
      wall(xw, 0.05, bot, top, ua, ub, troughM, 'l1FlowFlumeWall');
      rail(xw, top, ua, ub, 0.07, rimGoldM, 'l1FlowFlumeRim');
    }
    // its front end, facing her: lavender with a gold rim
    const w = 2 * (FL.half + 0.1), h = FL.lift + 0.39, fg = new THREE.PlaneGeometry(w, h, 4, 4);
    { const p = fg.attributes.position, a = new Float32Array(p.count * 2); for (let i = 0; i < p.count; i++) { a[i * 2] = ua + p.getX(i); a[i * 2 + 1] = p.getY(i) + h / 2 - 0.25; } fg.setAttribute('aUH', new THREE.BufferAttribute(a, 2)); }
    const front = new THREE.Mesh(fg, troughM);
    TR.map(FL.x, -0.25 + h / 2, ua, front.position); TR.quaternion(ua, front.quaternion); front.name = 'l1FlowFlumeFront'; root.add(front); items.push({ o: front, u0: ua, u1: ua });
    const lip = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, w, 12), rimGoldM); lip.rotation.z = Math.PI / 2; lip.position.y = h / 2; front.add(lip);
  }
  // ---------------- 04: the lower path's walls (cobalt glass with gold rims) between it and the upper ledges
  {
    const ua = DR.d0, ub = DR.e0 + DR.ramp, top = (u) => ledgeLift(u) + 0.14, bot = () => -0.3;
    for (const s of [-1, 1]) {
      const xw = s * (DR.half + DR.wall * 0.3);
      wall(xw, DR.wall * 0.55, bot, top, ua, ub, glassM, 'l1FlowDivider');
      rail(xw, top, ua, ub, 0.065, rimGoldM, 'l1FlowDividerRim');
    }
  }
  // ---------------- the bounce pad (a gold ring round a cyan bubble dome with pink chevrons) and the pink arrows
  const pad = new THREE.Group(); pad.name = 'l1FlowPad';
  {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.06, 12, 48), rimGoldM); ring.rotation.x = Math.PI / 2; pad.add(ring);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.4, 28, 10, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x5bbff4, transparent: true, opacity: 0.72,
      roughness: 0.15, metalness: 0.1, envMap: env, emissive: 0x1a6fd0, emissiveIntensity: 0.6, depthWrite: false })); dome.scale.y = 0.35; pad.add(dome);
    const px = flowLaneX(FL.pad.lane, FL.pad.u); TR.map(px, W.baseHeight(L, px, FL.pad.u) + 0.02, FL.pad.u, pad.position); TR.quaternion(FL.pad.u, pad.quaternion); root.add(pad);
    items.push({ o: pad, u0: FL.pad.u, u1: FL.pad.u });
  }
  const arrowM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.25, 0.5, 1.05), transparent: true, opacity: 0.88, depthWrite: false, side: THREE.DoubleSide });
  const arrowShape = new THREE.Shape([[-0.13, 0.3], [0.13, 0.3], [0.13, 0], [0.3, 0], [0, -0.34], [-0.3, 0], [-0.13, 0]].map(([x, y]) => new THREE.Vector2(x, y)));
  const arrowG = new THREE.ShapeGeometry(arrowShape);
  const arrows = [];
  const addArrow = (x, h, u, rz) => { const a = new THREE.Mesh(arrowG, arrowM); const g = new THREE.Group(); g.add(a); a.rotation.z = rz; TR.map(x, h, u, g.position); TR.quaternion(u, g.quaternion); g.rotateY(Math.PI); g.name = 'l1FlowArrow'; root.add(g); arrows.push({ g, h, x, u }); items.push({ o: g, u0: u, u1: u }); };
  const chev = new THREE.Mesh(arrowG, arrowM); chev.scale.setScalar(0.55); chev.rotation.z = Math.PI; chev.position.set(0, 0.42, 0); pad.add(chev);   // up chevron on the pad
  addArrow(1.35, 1.75, FL.u0 - 1.2, -0.75);   // to the side path, down and to the left
  addArrow(0, 1.25, DR.d0 - 1.5, 0);          // down the chute

  // ---------------- the rules
  const rideAt = (x, u) => W.baseHeight(L, x, u) + W.FLOAT_H;
  const flumeOpen = (u) => u > FL.u0 - 7 && u < FL.u1 + FL.ramp - 1.5;
  let padUsed = false, padGlow = 0, hintT = 0;
  // a swipe: the lane she would go to, or her own lane if the move is not possible here (the game then squashes her)
  function changeLane(dir) {
    const u = m.z, to = m.lane + dir;
    if (to > 2 || to < (flumeOpen(u) ? -1 : 0)) return m.lane;
    if (to === -1) {   // onto the raised side path: only from the air, high enough to clear its rim
      const peak = m.yAbs + (m.air && m.vy > 0 ? (m.vy * m.vy) / (2 * W.GRAVITY) : 0) - rideAt(flowLaneX(0, u), u);
      if (!m.air || peak < FL.lift - 0.05) { ctx.hint(['Jump first!', 'Use the bounce pad']); return m.lane; }
      return to;
    }
    // in the drop: from the lower path she cannot climb back up onto a ledge
    if (m.lane === 1 && to !== 1 && ledgeLift(u) > 0.25 && m.yAbs < rideAt(flowLaneX(to, u), u) - 0.15) { ctx.hint(['Too high!', 'Stay on the lower path']); return m.lane; }
    return to;
  }
  // where her lane is (and the side path's own rules: she lands on it only if she clears its rim; it ends in the main water)
  function laneTarget() {
    const u = m.z;
    if (m.lane === -1) {
      const over = Math.abs(m.x - FL.x) < FL.half + 0.08;
      if (u > FL.u1 + FL.ramp - 1 || (!m.air && flowLift(m.x, u) < 0.3 && !over) || (!flumeOpen(u) && u < FL.u0)) m.lane = 0;
      else if (m.air && !over && m.vy < 0 && m.yAbs < rideAt(FL.x, Math.max(u, FL.u0)) - 0.12) { m.lane = 0; m.sqV += 4; }   // missed: back off its rim
    }
    return flowLaneX(m.lane, u);
  }
  function update(dt, t, running) {
    const u = m.z;
    for (const it of items) it.o.visible = it.u1 > u - 8 && it.u0 < u + 46;
    // the bounce pad: ridden over in its lane, it launches her (the game's own jump, faster)
    padGlow = Math.max(0, padGlow - dt * 2);
    pad.children[1].material.emissiveIntensity = 0.6 + 0.8 * padGlow + 0.2 * Math.sin(t * 5);
    chev.position.y = 0.42 + 0.08 * Math.sin(t * 6);
    if (running && !padUsed && !m.air && Math.abs(u - FL.pad.u) < 0.55 && Math.abs(m.x - flowLaneX(FL.pad.lane, u)) < 0.38) {
      padUsed = true; padGlow = 1; ctx.padJump(FL.pad.vy);
      if (ctx.fx) ctx.fx.sparkle(pad.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.3, 0)), 16);
      ctx.hint(['Swipe ←', 'onto the side path!']);
    }
    if (u > FL.pad.u + 3) padUsed = false;
    for (const a of arrows) { TR.map(a.x, a.h + 0.1 * Math.sin(t * 4 + a.u), a.u, a.g.position); }
    hintT = Math.max(0, hintT - dt);
  }
  function reset() { padUsed = false; padGlow = 0; }
  return { changeLane, laneTarget, update, reset, report: { flume: [FL.u0, FL.u1 + FL.ramp], drop: [DR.d0, DR.e0 + DR.ramp], dropTotal: +DROP_TOTAL.toFixed(3), pad: FL.pad.u } };
}
