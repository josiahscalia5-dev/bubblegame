**Restored on the ninth session's branch `ccr-de8d9670-2ohd5t` (5 November, 19:05 UTC):** the specialist stopped at 18:57 UTC (rate limit) after four tested commits (`2164bd3`, `0dae738`, `a61541c`, `2975aea`, local to the old container). Its files from the 18:58 snapshot were copied over `182ad19` (no game source had changed since `d6e836d`) and the bundle rebuilt. Checks: the `?s3=focus` 3.0 s canvas frame is identical (max difference 0) to `frames/focus_seam_t3.00_canvas.png`; `?s3=match` at 3.0 s (canvas and page) is identical to `182ad19`'s.

**CAMERA DECIDED AND COMMITTED (`0dae738`):** `FOCUS.match.hero.round6.round5.camera = { off: [-0.162, 1.126, -3.1], lookY: 1.655,
lookX: 0.142, fov: 68 }`, with the rim restaged (`porthole.bezel { inner: 2.506, outer: 2.641 }`, `face.inner 2.59`, `rivets.radius
3.42`, `hero.rim.centre [-0.1155, 0.8415]`) and `rimRho { mouth: 0.864, perMetre: 0.0855 }`. At 3.0 s: character width 0.473 W, top
0.695, base 0.850, centre (0.500, 0.780); water top 0.28; tube axis (0.497, 0.531); rim circle 0.931 W round (0.550, 0.672).

# Tunnel & Lighting, focused pass on `?s3=focus`: running notes (5 November 2026, from about 18:20 UTC)

Worktree branch `worktree-agent-ae55466877e7d52cb`, started at `d6e836d`. Only target: the ORIGINAL APPROVED Screen 4
(`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`). Files: `WebDemo/src/tunnel_r9_match.js`
and `FOCUS.match` in `WebDemo/src/tunnel_r9_focus.js`; everything gated on `FOCUS_ON`.

Order (the lead, after the user's kit at about 18:26 UTC): 1 camera; 2 problem A (lower-left lavender-grey wedge); 3 objects;
4 problem B (softer, broader water bands); 5 wall streaks, centre, left wall.

## Tools (in `scripts/`)

- `run_ad.py <name> <canvas> [page]`: runs the Art Director's script `16_art_director_focus_review/scripts/<name>.py` on a new frame.
- `frame_fit.py <frames...> [--cands cands.json]`: the camera targets (character box by the AD's pink mask, water top by `rim_profile.py`'s rule).
- `tune_cands.cjs`: one browser, a fresh seeded page per tune candidate, canvas at 3.0 s, the projected vanishing point and camera.
- `hide_probe_tune.cjs`: `tools/screen4/hide_probe.cjs` with DPR and TUNE added.

## Baseline

`frames/focus_before_t3.00_canvas.png` is identical (max diff 0) to `15_focus_pass/final/focus_final_t3.00_canvas.png`.

## 1. Camera (sweep at 3.0 s, real renders, `tune_cands.cjs`)

Focus camera: `off [-0.11, 0.93, -2.25]`, `lookY 1.54`, `fov 73` (match's lookX 0.194). Pitch kept with lookY = y + 0.0704 (6.42 - z).

| candidate | width | top | base | centre | water top | vp |
|---|---|---|---|---|---|---|
| original | 0.465 | 0.702 | 0.859 | (0.502, 0.778) | 0.28 | |
| focus (base) | 0.600 | 0.687 | 0.894 | (0.521, 0.799) | 0.26 | (0.501, 0.535) |
| z -2.9 y 1.08 fov 72 | 0.473 | 0.693 | 0.848 | (0.523, 0.777) | 0.31 | (0.500, 0.538) |
| z -2.9 y 1.08 fov 67 | 0.520 | 0.711 | 0.882 | (0.525, 0.805) | 0.29 | (0.500, 0.542) |
| z -3.1 y 1.08 fov 68 | 0.476 | 0.698 | 0.849 | (0.525, 0.780) | 0.30 | (0.499, 0.541) |
| z -3.3 y 1.08 fov 65 | 0.477 | 0.698 | 0.847 | (0.527, 0.780) | 0.30 | (0.499, 0.543) |
| z -3.5 y 1.08 fov 62 | 0.476 | 0.701 | 0.847 | (0.529, 0.781) | 0.29 | (0.498, 0.545) |

Finding: moving the camera back shrinks the gold rim on screen (rim top about 0.27 instead of the original's 0.21) because
the porthole stays 1.16 m in front of the character; it must be restaged with the camera (scaled up / recentred) and the
rim ramp's on-screen constants (RIM_RHO) recomputed. Character centre x is 0.525: the camera moves about 0.05 m right
(off x and lookX together) to bring her to 0.50 without moving the vanishing point.

## 2. Problem A: the lower-left lavender-grey wedge

Hide probe at 3.0 s (focus, before the camera change), zone x 0-0.15, y 0.55-0.85, share of pixels that change when hidden:
heroWalls 0.50, heroSwell 0.10, heroBubbles 0.08, lqFloor 0.08, heroCollar 0.02, r6Face 0.00.

Cause: the flat lavender band with the dark blue line along its top is drawn by **heroWalls** (round4's lining
`r4Lining`, renamed `heroWalls`, shaded by `tunnel_r8_liquid.js` `wallFragment`). The lining extends before the tube's mouth
(u < uStart), and there `wallFragment` paints it flat `#c4b8f0` ("the washer's lavender shell before the mouth") plus the
navy mouth edge at uStart + 0.1. The rim's collar is centred low (h 0.755), so at the lower sides the collar's funnel is wider
than the tube, and this pre-mouth part of the lining lies inside it, in front of the collar's water: the camera sees a
flat lavender strip with a navy line at the lower left (and right). `matchMouthGLSL` (my file, inserted after those lines)
only repaints the upper part (the rim ramp, upA > -0.15).

Planned fix (focus only, in `matchMouthGLSL`): below the rim-ramp region, before the mouth, draw the walls' own animated water
(lqWall / matchWall) instead of the lavender shell and the navy edge; the upper part (gold rim, bevel, ramp) unchanged.

After the camera change (hide probe at DPR 1.5, `0dae738`): left x 0-0.12, y 0.5-0.85: heroWalls 0.63 changed (others <= 0.09);
right: heroWalls 0.24, s4Brush 0.46. Same cause, more visible with the camera further back.

**Done (`a61541c`):** `focusMouthWaterGLSL` in `tunnel_r9_match.js`, inserted by `matchMouthGLSL` into `wallFragment` (focus only):
where (1 - smoothstep(-0.15, 0.3, upA)) * (1 - smoothstep(0.2, 0.32, u - uStart)) > 0 it draws `lqWall(...)` over the lavender shell
and the navy edge. Lavender share (h 235-300, s 0.08-0.45, v > 0.6) in x 0-0.10, y 0.45-0.80: 11.2% -> 0.4%; x 0.90-1.0: 10.6% -> 1.1%.
Pixels changed only in y 0.615-0.783; none above y 0.60. Pixel 7 412x839: no wedge (`frames/phone_412x839_focus_A_3.00s.png`).

## 2b. The horizontal seam on the left wall (the lead, after `a61541c`)

A hard straight line across the wall water at the vanishing point's height (canvas y 0.527, x 0-0.35), there before fix A too
(not from the problem-A region: that changes only y 0.615-0.783). Cause: `focusRibbonsGLSL` keys its per-band picks (arc count,
arc offsets, body colour, and so the flecks' phase fRq) on floor(rq), and the band phase bs = lr * perLog + tu * spiral steps by
one band where tu wraps (screen-left, the horizontal through the camera in the cross-section, `mtPlace`). Every wall point at
the camera's height projects onto the horizon line, so with the camera at the axis height (h 1.6) the step is a straight line.
**Fixed (`2975aea`):** the ribbons count the angle from straight down (rTu = tu < -0.25 ? tu + 1 : tu; rq gets +spiral there), so
the step falls on the tube's bottom, under the water floor. Largest row jump on the left wall (x 0.02-0.30, y 0.48-0.62): 28.2 ->
14.0 (now the coin's edge; median 6). Page frame: the 0.531 jump (26.4) gone.

## 3. Objects after the camera (next)

Probe at 3.0 s (new camera): camera track (u -5.4, x -0.16, h 1.6). Picks (screen x, y, distance -> track u rel. tunnelStart, x, h):
lower-right coin (0.893, 0.733): d 3.0 -> (-2.6, -0.81, 0.83); d 3.5 -> (-2.1, -0.92, 0.70); d 4.0 -> (-1.65, -1.02, 0.58).
big left coin (0.198, 0.602): d 4.5 -> (-1.05, 0.87, 1.16); d 5.0 -> (-0.55, 0.98, 1.11).
small left coin (0.152, 0.471): d 4.6 -> (-1.0, 1.03, 1.94); d 5.5 -> (-0.1, 1.26, 2.01).
gem (0.326, 0.511): d 6.0 -> (0.5, 0.73, 1.74); d 7.0 -> (1.5, 0.88, 1.76).
Lane spacing 0.7 m (laneX = (1 - lane) * 0.7), pick-up within 0.82 m of the body (BODY_R 0.4 + 0.42), body 0.34 m above the water.

### Done (ninth session, worktree `agent-a0bafb8338e8bc494`, from `71f7fa7`; baseline at 3.0 s identical to `frames/focus_seam_t3.00_canvas.png`, max diff 0)

Tools added to `scripts/`: `live_sweep.cjs` (one seeded page at 3.0 s, then per candidate a JS edit of the scene, render, save; used
for the sock poses and for object-only / sock-only silhouette renders), `maskbox.py` (silhouette box and cuff tilt),
`brushes.py` (the pink fur boxes of the two framing brushes), `crops.py` (side-by-side crops). The probe's track u is relative
to tunnelStart 3.9007 (layout u = probe u + 3.9).

Changes (`FOCUS.match` in `tunnel_r9_focus.js`; `gemSquash` and `sockLift` read in `matchCollectibles`, focus only):
coinLines (lower-right [2.586, 2.65, h 0.47]; small upper-left [-0.543, 3.1, h 2.025]), extraGem lane -0.314, firstSock lane 2.07,
secondSock [2.726, 7.0, 0.61] (hidden behind the first again), r7.deco (left [2.07, 1, 42.5, 0.378, 1.60], right [3.55, -1, 9.6, 0.62,
1.744]), coinScales [[3.1, 0.69], [2.77, 1.12], [2.65, 0.96], [15.0, 0.5]], gemSquash 0.78, sockPose [0, -0.65, 0.18], sockLift
[0, 0.047, 0], sockScale 0.9.

| at 3.0 s (objects.py, brushes.py, sock-only render) | original | before | after |
|---|---|---|---|
| lower-right coin centre, width | (0.893, 0.733), 0.219 | (0.751, 0.723), 0.241 | (0.894, 0.736), 0.214 |
| big left coin | (0.198, 0.602), 0.211 | (0.195, 0.608), 0.198 | (0.195, 0.608), 0.202 |
| small left coin | (0.152, 0.471), 0.123 | (0.158, 0.484), 0.112, behind the brush | (0.151, 0.472), 0.115, clear |
| gem centre, height | (0.326, 0.511), 0.033 | (0.310, 0.511), 0.045 | (0.324, 0.514), 0.034 |
| gold area (the four coin blobs) | 4.35% (+0.68% HUD coin) | 4.82% | 4.67% |
| sock box | x 0.64-0.83, y 0.555-0.665 | opening showing, cuff -17 deg | x 0.642-0.829, y 0.551-0.657, cuff +0.4 deg |
| left brush (pink) | x 0.010-0.171, y 0.240-0.416 | x 0-0.236, y 0.268-0.501 | x 0-0.186, y 0.240-0.418 |
| right brush (pink) | x 0.789-0.984, y 0.394-0.610 | x 0.734-1.0, y 0.393-0.671 | x 0.795-1.0, y 0.393-0.606 |

Reach: lower-right coin 0.42 m from the body in the right lane; small coin 0.62-0.69 m at the top of a jump from the left lane;
gem 0.26-0.33 m with a jump; first sock 0.737 m (0.735 before); second sock 0.55 m. `S3=focus s3_func.cjs`: lanes 0 / 2, jump,
12 coins, 1 gem, 2 socks, no console errors (`numbers/s3_func_focus_after_objects.json`). Pixel 7 412x839: every object in frame
(`frames/phone_412x839_focus_obj_3.00s.png`). Frames: `frames/focus_obj_t3.00*.png`, `frames/focus_obj_sock_only_t3.00.png`.
