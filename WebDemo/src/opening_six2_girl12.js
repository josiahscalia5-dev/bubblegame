// seq7 / lane girl12 (9 November 2026, session 3849f5c8, the character-animation specialist): the user's priority correction for Screens 2 and 3
// (Design/ReferencePacks/2026-11-09_Sequence_Priority_Correction_from_user/README.md; targets 02_She_Loads_Laundry.png, 03_Oops_He_Goes_In.png).
// A CANDIDATE behind the switch `seq7` (with six + six2). Without it the opening is exactly the previous build (proved by a frame diff).
//   Screen 2: her face turned 3/4 to the camera while she pushes the blue towel into the drum; the blue towel hangs as a SOFT towel from both hands
//     (pleated top edge between her fists, deep vertical folds, an uneven hem, no flaring cone).
//   Screen 3: he stays VISIBLE: he rises with her hands as she scoops the yellow towel, sitting in it like a cradle (the towel round his lower half,
//     its corners flopping over the rim, his head and eyes out, the "!" marks, a surprised face); at the door he slips out over the towel's lip and
//     tumbles in a readable arc into the drum, rolling about the view axis (his face stays toward the camera, small pitch only, so his eyes never
//     leave the front of his fur); the towel opens and falls in beside him. The 5.6 s landing is unchanged.
// Looks and staging only: private generators only (never the game's seeded Math.random), gameplay untouched.
import * as THREE from 'three';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const SEQ7_ON = LIST.includes('six') && LIST.includes('six2') && LIST.includes('seq7');

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const sm = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

// the numbers of the candidate (window.__bwSeq7 in the browser, for live tuning)
export const SEQ7 = {
  yaw2: 1.38,            // her body yaw at the washer (was 1.75: her back to the camera); her chest turns back toward the door
  chestTwist: 0.35,      // (rad, about world up: toward the door while her hips and head face the camera's side)
  head: [[-1, 0], [1.0, 0], [1.6, -0.5], [2.6, -0.5], [2.9, -0.1], [3.4, -0.3], [3.9, -0.4], [5.3, 0]],   // extra head yaw (negative: toward the camera)
  hold: 0.125,           // half the spacing of her hands on the yellow towel
  sitUp: 0.035,          // his centre above her hands' midpoint while she carries him
  tumble: { start: 3.88, end: 4.75, roll: -2 * Math.PI, lift: 0.26, pitch: 0.32 },
};
if (SEQ7_ON && typeof window !== 'undefined') window.__bwSeq7 = SEQ7;

// the plane grid (x, y in -0.5..0.5) of a cloth made by makeCloth, captured before its first frame
export function clothGrid(cloth) { return cloth.mesh.geometry.attributes.position.array.slice(); }

const _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3();

// the blue towel held by both hands (world points pL, pR): the top edge runs between her fists and its spare width gathers in soft pleats that
// droop between them; below, the towel hangs in deep vertical folds, facing the camera (camRight), its width nearly constant (no cone), its hem
// uneven; inward (world vector) pushes its lower part into the drum
export function softHang(U, out, pL, pR, S, t, sway, inward, camRight) {
  const cnt = U.length / 3, mid = pL.clone().add(pR).multiplyScalar(0.5), w = Math.max(0.04, pL.distanceTo(pR));
  const a = new THREE.Vector3(camRight.x, 0, camRight.z).normalize(), n = new THREE.Vector3(-a.z, 0, a.x);   // across the screen; toward / away from the camera
  const cowl = Math.min(0.11, Math.sqrt(Math.max(0, (S * 0.5) ** 2 - (w * 0.5) ** 2)) * 0.32);   // the gathered top edge droops between the fists
  for (let i = 0; i < cnt; i++) {
    const u = U[i * 3] + 0.5, v = 0.5 - U[i * 3 + 1];   // u 0..1 across, v 0 (held edge) .. 1 (hem)
    const top = pL.clone().lerp(pR, u); top.y -= cowl * Math.sin(Math.PI * u) * (0.75 + 0.25 * Math.sin(t * 1.7 + u * 3));
    const tw = sm(0.0, 0.32, v);   // from the held edge to the camera-facing body of the towel
    const width = w * 0.92 + (S * 0.46 - w * 0.92) * sm(0.2, 1.0, v) * 0.55;   // nearly constant: a hanging towel, not a flaring cone
    const body = mid.clone().addScaledVector(a, (u - 0.5) * width);
    const hem = 0.07 * Math.sin(u * 5.1 + 0.7) + 0.05 * Math.abs(u - 0.5);   // uneven hem: the free corners hang a little lower
    const drop = v * (S * 0.9 + hem) - v * cowl * Math.sin(Math.PI * u) * 0.4;
    const fold = (0.032 * Math.sin(u * Math.PI * 4.2 + 0.6) * (0.35 + 0.9 * v) + 0.013 * Math.sin(u * Math.PI * 10.4 - v * 3.1)) * (0.45 + 0.55 * tw);
    const sw = sway * Math.sin(t * 2.6 + v * 2.0 + u * 0.8) * v * v * 0.045;
    _p.copy(top).lerp(body, tw);
    _p.y = top.y + (mid.y - top.y) * tw * 0.5 - drop + 0.012 * Math.sin(u * 7 + t * 1.3) * v;
    _p.addScaledVector(n, fold + sw).addScaledVector(inward, v * v * 0.3);
    out[i * 3] = _p.x; out[i * 3 + 1] = _p.y; out[i * 3 + 2] = _p.z;
  }
}

// the yellow towel as a soft cradle round his lower half (world centre c = his centre, R = his radius): a cup under him to phiMax, the rest of the
// square flops outward and down over the rim (its four corners longest), with terry ripples; k 0 = spread flat under him (as it lay in the basket),
// 1 = gathered round him; rx / ry tilt it (YXZ); open (0..1) lowers the front lip as he slips out over it
export function cradle(U, out, c, R, L, k, rx, ry, t, flut = 1, open = 0) {
  const cnt = U.length / 3, phiMax = 1.12 - 0.35 * open, a0 = R * phiMax, rr0 = R * Math.sin(phiMax), y0 = -R * Math.cos(phiMax);
  _q.setFromEuler(_e.set(rx, ry, 0, 'YXZ'));
  for (let i = 0; i < cnt; i++) {
    const u = U[i * 3] * 2, v = U[i * 3 + 1] * 2, d = Math.hypot(u, v) * L, th = Math.atan2(v, u);
    const wr = 0.011 * Math.sin(th * 7 + d * 24) * Math.min(1, d / L) * (R / 0.12);
    const f = flut * Math.min(1, d / L) * Math.sin(t * 5.5 + d * 16 + th * 2) * 0.007;
    let gx, gy, gz;
    if (d < a0) { const ph = d / R, rr = R * 1.03 + wr; gx = Math.sin(ph) * Math.cos(th) * rr; gy = -Math.cos(ph) * rr; gz = Math.sin(ph) * Math.sin(th) * rr; }
    else {   // beyond the rim: a short rise, then the cloth rolls over outward and hangs down
      const e = d - a0, up = Math.min(e, 0.02), rest = Math.max(0, e - 0.02), fl = Math.min(rest, 0.05), hang = Math.max(0, rest - 0.05);
      const rad = rr0 * 1.03 + up * 0.3 + fl * 0.85 + hang * 0.28 + wr * 1.6;
      gx = Math.cos(th) * rad; gz = Math.sin(th) * rad; gy = y0 + up * 0.95 + fl * 0.25 - hang * 0.92;
      // the front (toward +z, the camera after ry) folds lower when he slips out over it
      gy -= open * Math.max(0, Math.sin(th)) * e * 0.8;
    }
    // spread flat under him (as in the basket): the square lying with soft ripples
    const fx = u * L * 1.05, fz = v * L * 1.05, fy = -R * 0.95 + 0.012 * Math.sin(u * 6 + v * 4) + wr * 0.5;
    _p.set(fx + (gx - fx) * k, fy + (gy - fy) * k + f, fz + (gz - fz) * k).applyQuaternion(_q).add(c);
    out[i * 3] = _p.x; out[i * 3 + 1] = _p.y; out[i * 3 + 2] = _p.z;
  }
}

// his tumble from the towel at the door into the drum: a readable arc (up out of the towel, over the rim, down into the drum), rolling about the
// axis toward the camera (his face stays toward it), a small pitch nod, a quick squash at the slip; returns { hp, rot, squash }
export function tumble(s, from, ctrl, to, camPos, bez) {
  const T = SEQ7.tumble, k = sm(T.start, T.end, s), kk = clamp01((s - T.start) / (T.end - T.start));
  const hp = bez(from, ctrl, to, k);
  const yaw = Math.atan2(camPos.x - hp.x, camPos.z - hp.z), el = Math.atan2(camPos.y - hp.y, Math.hypot(camPos.x - hp.x, camPos.z - hp.z));
  const land = sm(0.85, 1, kk);
  const rot = new THREE.Euler((-el * 0.6 + T.pitch * Math.sin(kk * Math.PI * 2) * (1 - kk)) * (1 - land) + 0.04 * Math.sin(s * 3) * land, yaw * (1 - land) + 0.063 * land, T.roll * k + 0.25 * Math.sin(kk * 6) * (1 - kk), 'XYZ');
  return { hp, rot, k };
}
