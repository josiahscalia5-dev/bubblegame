# Checks for Round 4, second pass (`?s3=round4`), 4 November 2026

All run on the real game in headless Chromium (software WebGL), seed 7.

| Check | Result | File |
|---|---|---|
| The normal game, Round 2 and Round 3 are unchanged | **Pass.** 3D canvas captures at Tap to Start and at 2, 4.2 and 6 s are pixel-identical to the recovered build `fa4e2fc` (built in a git worktree): 0 pixels differ in all 12 comparisons | `unchanged_vs_fa4e2fc.json` |
| Controls and HUD (settings button, tap, swipes left, right and up, keyboard start) | **Pass** on the final build (after the camera change), no console errors. In the tunnel: same position, lane, coins (7) and socks (2) as before this pass | `controls_round4.json` |
| Riding through the tunnel: each lane, jumping, and weaving across all lanes | **Pass.** Every run reaches the end, no stuck frames; results identical to the previous Round 4 to the last digit (`../../screen4_round4_reconstruction/checks/ride_through_round4.json`) | `ride_through_round4.json` |
| Frame cost (draw calls, triangles) | **Pass.** Round 4 in the tunnel: at most 186 draw calls and 1.43 M triangles (Round 3: 178 and 1.44 M; the normal game's Tap to Start: 322 and 1.91 M). Frame times cannot be measured with software WebGL | `frame_cost.json` |
| Rules (hearts, knocks, out of hearts, restart, pause, Bubble Blast, Turbo Spin) | **Pass**, no console errors. Hearts 4, 3, 2, 1, 0 with each knock, then Tap to Start after 1.4 s with 5 hearts; pause stops time, resume and the keyboard work; Bubble Blast clears the brush pair ahead (no knock passing it) and disables at 0; Turbo Spin 6.68 to 7.95 speed with no knocks. Run during the second pass; the camera change after it moves only the view | `rules_round4.json` |
| Gameplay video | 12 s, 360 frames, real swipes and button clicks: lanes 0, 1 and 2, 17 coins, 2 gems, 4 socks, one brush knock, Bubble Blast and Turbo Spin used, no console errors | `../bubblewash_round4_water_brushes.mp4`, `../frames/video_track.json` |
