# THE ACTIVE GAME: the plain launch is the six-scene game with tripo3 (9 November 2026, session 6ddc157f). NOT a redesign

**Why the old ("first row") version kept showing (verified, not guessed):** every visual pass of this game is an opt-in `?s3=` switch list read
from the address (or a test override). With no `?s3=` the list is empty, so a plain launch of `WebDemo/index.html` ran the older classic game; the
documented full-app address `?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six` gave the first row; the second row exists only with
`,tripo3` added (`TRIPO3_ON = LIST.includes('six') && LIST.includes('tripo3')`, `WebDemo/src/opening_tripo3.js`). It was not a stale bundle or the
browser cache: the bundle contained tripo3 and rebuilds byte-identically from its source (`verify_restore.sh --build`).

**What changed:** `WebDemo/src/page.html` (built into `index.html`): with no `?s3=`, no `?classic` and no test override, the page sets
`window.__BW_S3__ = [intunnel, structmatch, home, level1, tripo1, tripo2, scene07, six, tripo3]` and `__BW_DEFAULT_GAME__ = 'six+tripo3'`.
Every module already reads `__BW_S3__` first, so nothing else changed. `build.mjs` now asks for `game.bundle.js?v=<md5>` (no stale cached bundle).
Explicit addresses run as before (`?s3=intunnel` accepted Classic Screen 4, `?s3=,` the previous plain launch). The one visual fix: the door glass
fades out within 0.9 m of the camera (the diagonal translucent plane at 6.3 s was the glass disc right in front of the camera).
Rollback: branch `claude/bubble-wash-rollback-before-tripo3-default` (`33bf67ba`).

**Proof (bundle `45f21c4a`):**
- `plain_launch_frames/`: the game opened exactly as a player opens it (`o3d_shots.cjs` with `NOS3=1`: no `?s3=`, no override), at the eight
  checkpoints of the user's pack (`second_row_reference/`). Sheet: `SECOND_ROW_vs_PLAIN_LAUNCH.png` (top the user's reference, bottom the plain launch).
- `plain_launch_equals_explicit_tripo3.txt`: plain launch vs the explicit `?s3=...,six,tripo3` capture at full size: 0 / 1 / 0 / 0 px at 1.5, 1.2, 3.6,
  6.8, 7.4 s; 1,195 and 866 px (0.35 %, 0.25 %) at 2.75 and 4.9 s; 6.3 s differs everywhere because the glass disc no longer tints the frame.
- `second_row_vs_plain_launch_metrics.md`: SSIM 0.82-0.90 against the user's 192 x 390 JPEG crops (a scaled screenshot, so not pixel-exact).
- Live MCP checks of the plain URL: Playwright MCP read `__BW_DEFAULT_GAME__ = six+tripo3`, bundle `?v=45f21c4a`, `tripo3` ready (washer, door, gear, 12 housings).
- Identity of the older configurations on this bundle: `proofs/` (see below). Gameplay with the active build: `../06_tripo_new_models_6ddc157f/gameplay/`.
- **Continuous video of the PLAIN launch** (no `?s3=`, seed 7, software WebGL, 12 frames per game second, 42.7 s): `PLAIN_LAUNCH_continuous_laundry_toss_to_swimming.mp4`
  (`record_flow.cjs` with `NOS3=1`, ROUTE upper): Home -> Laundry Toss (the new girl) -> START -> the toss -> the door (OIT 748, gold) shuts -> the porthole ->
  the scene 5 tunnel (821 housings, cobalt gear) -> Tap to Start -> live Level 1 (socks 3/5, coins 1,280 -> 1,387, 2 grime balls popped) into the Pass 18
  "Avoid Enemies!" stretch. Contact strip: `VIDEO_CONTACT_STRIP.png`; log: `record_log.json` (its `s3` field is the tool's unused default; the page ran the plain-launch default).
- **Identity on this bundle** (`proofs/identity_45f21c4a.txt`): `?s3=intunnel`, `?s3=,`, `?s3=intunnel,structmatch,home`, level1 at Tap to Start and 20 s: 0 px vs `7d39b9e6`.
- `pass18_baseline/`: real frames of the CURRENT Pass 18 enemy stretch in the active build (u 219-242), the baseline for the user's next task (Scene 6).

**Known and NOT yet done (the user's next task, `Design/ReferencePacks/2026-11-09_P18_Reuse_Scene6_Pack_from_user/SCENE6_TASK_from_user_message.md`):** after the
cinematic, Level 1 (scene07 Pass 18) still has its own tunnel look (cobalt rings, brushes), visibly different from the new scenes 1-5 (see the video from ~11 s).
