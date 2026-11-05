// ?s3=match only (Round 9): the phone framing, asked for by the user on 5 November (14:29 UTC).
//
// The original approved Screen 4 is a 1:2 portrait picture. A phone is usually taller than that (a Pixel 7's browser view is
// 0.49 wide per unit of height, full screen 0.45). Every older version keeps the full approved WIDTH on a taller screen and
// widens the vertical view instead, so on a phone the tunnel sits lower, more lavender housing shows above the gold rim and
// a pale strip shows under the mission bar: none of that is in the original's framing.
//
// Under ?s3=match:
//   - the camera keeps the original's VERTICAL framing down to PHONE.minAspect (a 20:9 phone), trimming the sides instead
//     (at most 5% of each side; the original is itself cut at the sides, through the right coin and both brushes); only
//     still taller screens widen the vertical view, as before;
//   - everything sized or coloured as a share of the approved picture's width (the whirlpool's rings through uHeroTanW, the
//     hero glow, the bubbles placed from the approved layout) uses the 1:2 reference width, not the trimmed screen's, so
//     the phone shows the 1:2 picture with its sides trimmed and nothing rescaled;
//   - on a narrow screen the page drops its 16 px side margins (body.s3match in page.html), so the game fills the phone
//     edge to edge.
// At 1:2 and wider, nothing changes. Every other version uses the old rule exactly (A0 = 0.5 gives the old formulas).
import * as THREE from 'three';
import { MATCH_ON } from './tunnel_r9_match.js';
import { FOCUS_ON } from './tunnel_r9_focus.js';

export const PHONE = { minAspect: 0.45 };
const A0 = MATCH_ON ? PHONE.minAspect : 0.5;
const D2R = THREE.MathUtils.DEG2RAD;

// The camera's vertical field of view (degrees) for a view framed as fovV at 1:2, on a screen of this aspect (width / height).
export function phoneFov(fovV, aspect) {
  return aspect >= A0 ? fovV : THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(fovV * D2R / 2) * A0 / aspect));
}

// The inverse: the vertical field of view (degrees) of the 1:2 reference camera, from the real camera's fov and aspect.
export function phoneRefFov(fov, aspect) {
  return aspect >= A0 ? fov : THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(fov * D2R / 2) * aspect / A0));
}

// The width of the 1:2 reference view per metre of depth (2 tan(hfov / 2)): the screen's own width at 1:2 and wider, the
// approved picture's width (half its height) on a taller screen.
export function phoneTanW(fov, aspect) {
  return aspect >= 0.5 ? 2 * Math.tan(fov * D2R / 2) * aspect : Math.tan(phoneRefFov(fov, aspect) * D2R / 2);
}

if (MATCH_ON && typeof document !== 'undefined') document.body.classList.add('s3match');
// ?s3=focus only (step 2 of the user's fidelity plan, 5 November 2026): the interface laid out as the original approved Screen 4
// (page.html, body.s4focus)
if (FOCUS_ON && typeof document !== 'undefined') document.body.classList.add('s4focus');
