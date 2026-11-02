// The run's 3D path. Everything that travels with the run is described in track coordinates
//   x = sideways (lane offset), h = height above the water datum, u = distance along the run
// and placed in the world through the path's moving frame (P = centre point, R = sideways, U = up,
// T = forward). The water, the bent Meshy drum, the mascot, the camera, coins, gems, socks, rollers
// and bubbles all go through the same frame, so they always agree.
//
// Outside the drum the path is the straight +Z line of the Unity layout (u = world z, x = world x),
// so the approved Screen 3 framing in front of the castle is unchanged. Inside the drum the tube
// climbs about 1.5 m while turning left, crests, drops about 2 m while turning right, and levels out;
// the water banks into each turn (it rides up the outer wall), as it would at the cruise speed.
import * as THREE from 'three';
import * as W from './world.js';

const bump = (u, a, b, c, d) => W.smoothstep(a, b, u) * (1 - W.smoothstep(c, d, u));

export function makeTrack(L) {
  const ts = L.tunnelStart;
  // Pitch of the tube (radians, + climbs) and turn rate (radians per metre, + turns to screen-left).
  const pitch = (u) => 0.27 * bump(u, ts + 5, ts + 8, ts + 11, ts + 13.5) - 0.34 * bump(u, ts + 14.5, ts + 17.5, ts + 21, ts + 24);
  const turn = (u) => 0.055 * bump(u, ts + 6, ts + 9, ts + 12, ts + 15) - 0.06 * bump(u, ts + 18, ts + 21, ts + 26, ts + 29);
  // Bank: the water surface tilts so its outer edge is higher, by the angle a flowing current takes
  // in that turn at cruise speed (tan(bank) = v^2 * curvature / g).
  const bankOf = (u) => Math.atan((W.CRUISE * W.CRUISE * turn(u)) / 9.81);

  const u0 = L.startZ - 34, u1 = L.tunnelEnd + 14, du = 0.05;
  const n = Math.ceil((u1 - u0) / du) + 1;
  const P = new Float64Array(n * 3), R = new Float64Array(n * 3), U = new Float64Array(n * 3), T = new Float64Array(n * 3);
  const info = new Float64Array(n * 3);   // pitch, heading, bank (radians)
  let px = 0, py = 0, pz = u0, psi = 0;
  const tAt = (u, heading) => {
    const th = pitch(u);
    return [Math.cos(th) * Math.sin(heading), Math.sin(th), Math.cos(th) * Math.cos(heading)];
  };
  for (let i = 0; i < n; i++) {
    const u = u0 + i * du, k = i * 3;
    const th = pitch(u), b = bankOf(u);
    const t = tAt(u, psi);
    const r0 = [Math.cos(psi), 0, -Math.sin(psi)];
    const up0 = [t[1] * r0[2] - t[2] * r0[1], t[2] * r0[0] - t[0] * r0[2], t[0] * r0[1] - t[1] * r0[0]];   // T x R
    const cb = Math.cos(b), sb = Math.sin(b);
    P[k] = px; P[k + 1] = py; P[k + 2] = pz;
    T[k] = t[0]; T[k + 1] = t[1]; T[k + 2] = t[2];
    for (let j = 0; j < 3; j++) { R[k + j] = r0[j] * cb - up0[j] * sb; U[k + j] = up0[j] * cb + r0[j] * sb; }
    info[k] = th; info[k + 1] = psi; info[k + 2] = b;
    // Advance with the midpoint direction so the centreline stays smooth.
    const psiMid = psi + turn(u + du * 0.5) * du * 0.5;
    const tm = tAt(u + du * 0.5, psiMid);
    px += tm[0] * du; py += tm[1] * du; pz += tm[2] * du;
    psi += turn(u + du * 0.5) * du;
  }

  const idx = (u) => {
    const f = Math.min(n - 1.0001, Math.max(0, (u - u0) / du));
    const i = Math.floor(f);
    return [i, f - i];
  };
  const lerp3 = (A, i, a, out) => {
    const k = i * 3;
    out.x = A[k] + (A[k + 3] - A[k]) * a; out.y = A[k + 1] + (A[k + 4] - A[k + 1]) * a; out.z = A[k + 2] + (A[k + 5] - A[k + 2]) * a;
    return out;
  };

  /** Frame at u: centre point, sideways, up, forward (unit vectors). Beyond the ends it continues straight. */
  function frame(u, out = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() }) {
    const [i, a] = idx(u);
    lerp3(P, i, a, out.P); lerp3(R, i, a, out.R).normalize(); lerp3(U, i, a, out.U).normalize(); lerp3(T, i, a, out.T).normalize();
    const over = u - u0 < 0 ? u - u0 : u - (u0 + (n - 1) * du);
    if (u < u0 || u > u0 + (n - 1) * du) out.P.addScaledVector(out.T, over);
    return out;
  }
  const _f = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };

  /** World position of track point (x sideways, h up, u along). */
  function map(x, h, u, out = new THREE.Vector3()) {
    frame(u, _f);
    return out.copy(_f.P).addScaledVector(_f.R, x).addScaledVector(_f.U, h);
  }
  /** World direction of a track-space vector at u. */
  function dir(vx, vy, vz, u, out = new THREE.Vector3()) {
    frame(u, _f);
    return out.set(0, 0, 0).addScaledVector(_f.R, vx).addScaledVector(_f.U, vy).addScaledVector(_f.T, vz);
  }
  /** Rotation (world from track axes) at u. */
  function quaternion(u, out = new THREE.Quaternion()) {
    frame(u, _f);
    return out.setFromRotationMatrix(new THREE.Matrix4().makeBasis(_f.R, _f.U, _f.T));
  }
  /**
   * Re-place an object laid out on the straight Unity path (matrix in straight-world space) onto the
   * curved path: its z becomes u, and it is carried by the frame there.
   */
  function mapMatrix(m, out = new THREE.Matrix4()) {
    const z = m.elements[14];
    frame(z, _f);
    const F = new THREE.Matrix4().makeBasis(_f.R, _f.U, _f.T).setPosition(_f.P);
    return out.multiplyMatrices(F, new THREE.Matrix4().makeTranslation(0, 0, -z)).multiply(m);
  }
  /** Pitch, heading and bank at u, in degrees (for the debug view and the play-test log). */
  function angles(u) {
    const [i, a] = idx(u), k = i * 3, d = 180 / Math.PI;
    return { pitch: (info[k] + (info[k + 3] - info[k]) * a) * d, heading: (info[k + 1] + (info[k + 4] - info[k + 1]) * a) * d, bank: (info[k + 2] + (info[k + 5] - info[k + 2]) * a) * d };
  }
  return { u0, u1, frame, map, dir, quaternion, mapMatrix, angles, pitch, turn, bankOf };
}
