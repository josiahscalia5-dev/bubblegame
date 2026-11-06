# Water & VFX, focused pass on `?s3=focus`: running notes (5 November 2026, from about 18:20 UTC)

Worktree branch `worktree-agent-a29b1562d2b9d7e06`, started at `d6e836d`. Files: `WebDemo/src/tunnel_r9_match_water.js` and
`FOCUS.water` in `WebDemo/src/tunnel_r9_focus.js` only. Target: the ORIGINAL APPROVED Screen 4 only.

Capture: `S3=focus TIMES=3.0 DPR=1.5 CANVAS=1 node tools/screen4/liquid_shots.cjs <WebDemo> <out> '<tune>'` (seed 7).
Measures: `scripts/measure.py` (the Art Director's character_water / zones / streaks / bubbles, unchanged, run on any frame).

## Baseline (`before/`, identical to the AD's `focus_final_t3.00_canvas.png`: max pixel difference 0)

`before/measure_before.txt`. Round her (orig / before): white 27.7 / 4.8%, vivid blue 12.9 / 32.4%, lavender 16.9 / 3.6%,
texture 5.47 / 4.53, largest white piece 10247 / 492 px. Floor ahead: L* 83.5 / 71.1, white 26.9 / 6.3%, lavender 3.6 / 12.4%.
Ring streaks: thickness 3.5 / 1.9 px, p90 area 1160 / 126 px. Bubbles within 0.2 W of the centre (Hough param2 40): 10 / 107.

## Lower-left lavender strip (the lead's note, user kit 05)

Hide probe at 3.0 s (`hide_probe.cjs`, DPR 1): the lavender-grey diagonal strip at x 0-0.10, y about 0.68-0.80 stays when
heroSwell, spCurls, spLumps, heroSplash, lqWaterlineBubbles, mwTunnelBubbles, lqFloor or heroCollar is hidden; none of the
Water & VFX objects draws it. Hiding heroWalls changes the whole region (the old drum lining shows), so it is the walls'
(Tunnel & Lighting's). The large pale-lavender disc at the left edge (x 0-0.05, y 0.70-0.77) is `heroBubbles`
(tunnel_r7_hero.js, not a Water & VFX file).

## Item 1: the water round her

Phi debug render (`face.debug: 1`, 10-degree stripes): at the current camera phi 0 lands at x 0.47; her lower body
(x 0.30-0.68) spans phi about +14 to -24; 10 degrees is about 0.08-0.12 W.

Tries:
- t0 (debug, teeth per 9/m, depth 0.1 m): the teeth far too big (flames) and the whole swell top cut away: the crest
  near the top is nearly flat, so d < 0.1 m covers a wide band; her pink showed down to y 0.92.
- t1 (teeth per 16, depth 0.04, fine 0.015; mounds 16 +0.12, -22 +0.04): still cut too low (pink to y 0.919, width at the
  base 0.5 W, pink share 7.1%); a mirrored pattern at the centre (the face's noise used |s|).
- FOUND (debug renders d0-d2): a cut in d (m below the crest) takes the whole top off even at depth 0: near the crest d is
  nearly flat and the running waves clamp it to 0 over the top rows, so any positive cut removed them. Fix (done): the cut
  is in the profile coordinate t (vS.y: 0 outer foot, 0.5 crest, about 0.53 the silhouette from the camera); tips at
  t 0.56, valleys at t lo; the patterns use pd = (0.5 - t) * 1.9 (about m down the face) and the signed s (no mirror).
- t3 (lo 0.40): long pink flames between blue teeth (too deep, too regular). t4/t5 (per 22, lo 0.49, fine 0.02, lobes 0.03 in
  t; whiter rim/lace/spark): a broken edge; white 8.9 / 10.6%.
- t6-t9 (old camera): rim w [0.02, 0.06] share 0.78, lace share 0.85 r [0.22, 0.42] reach 0.4, lighter currents
  (#acdffc / #78c4f8 / #3f8cf0, 0.8), spray 250, mounds 10 +0.19 and -14 +0.11: t9 white 19.0%, <=400 px 57%, largest 1512,
  vivid 18.4%, light cyan 26.3%, lavender 3.2%, texture 6.24, L* left 79.4 / right 81.0, pink 0.21 W at 0.02 H above lowest.
  All AD targets met at the OLD camera.
- NEW CAMERA (Tunnel & Lighting, 18:50 UTC; `wv_cam.cjs` merges it into every tune): t9's raised mounds covered her to the
  middle (pink 2.77%, base 0.835: sunk). Back to match's mounds: c10 (mounds 12 +0.1, -17 -0.03): base 0.840, width 0.33.
  c11 (match's mounds + crest lift 0.02): base 0.850, width 0.02 H above lowest 0.23 (orig 0.20, before_cam 0.27), pink
  3.14% (before_cam 3.21%); water white 12.5%, vivid 23.4%, light cyan 33.3%, lavender 3.4%, texture 5.75, largest 767,
  <=400 px 82%. Now the defaults (swellFront.lift 0.02, no swell key in FOCUS.water).
- Before at the new camera: `before/before_cam_t3.00_canvas.png` (d6e836d's bundle served from a scratch folder):
  white 5.3%, vivid 46.3%, light cyan 15.8%, texture 4.98, L* left 71.9 / right 74.8.
- The side splash crests (spLumps) read as smooth glossy blue domes at both edges with the new camera: focusLumpGLSL now
  eats their upper outline into irregular points and puts a broken white cap with round holes on top (crest.rag, crest.cap).
  c12 (defaults with that) and c13 (lace/spark reach 0.6) were captured but not yet measured when the session stopped.

- WIP commit `06edd34` (session stopped on the usage limit; resumed 6 November).
- c12 (white caps on the side crests): white 17.2% but the caps were solid white clumps (largest piece 4253 px): rejected.
  The caps are now separate small white pieces (crest.cap: blobs, not a web with holes), rag [0.2, 0.6, 7.0].
- c14 (+ lace reach 0.6, spark share 0.8 reach 0.6): white 16.1%, largest 765, vivid 21.2%.
- c15 (+ side lumps 0.7x smaller): white 17.1%, <=400 px 86%, largest 798, light cyan 33.9%, vivid 19.8%, lavender 3.4%,
  texture 6.46, L* left 78.8 / right 80.5, pink 0.25 W at 0.02 H above lowest, base 0.849. Now the defaults:
  `frames/step1_cam_t3.00_canvas.png` (identical to c15), `frames/measure_step1_cam.txt`,
  `frames/item1_water_round_her_original_before_after.png`.
- Item 1 committed (see the README table for the hash).

Next: item 2 (floor ahead), item 3 (flying streaks: fewer, softer, chunkier), item 4 (fewer bubbles over the middle).
