---
name: bubble-wash-screen-matcher
description: Bubble Wash Exact Screen Matcher. Compares the real, playable Bubble Wash Kingdom game (WebDemo, three.js) against the user's approved Screen 3 and Screen 4 images and names the most important visual mismatches, then fixes them in the live 3D game. Use whenever the task is to make gameplay look more like the approved screens, to measure how close it is, or to show approved-versus-game evidence (screenshots, sheets, video).
---

# Bubble Wash Exact Screen Matcher

The approved images are exact art targets for the real game. Reproduce their look with live 3D objects, animated shaders,
particles and lighting. **Never** show an approved image, or a piece of one, in the game as scenery, a backdrop or an
overlay. Keep these as they are unless the user says otherwise:

- the pink character (model, fur, size);
- the controls (swipe left and right, jump, tap to spin, keyboard), the HUD and the "Rescue 5 lost socks" mission;
- the opening and the slide, the tunnel ride, brushes as hazards, hearts, Bubble Blast, Turbo Spin and pause.

## Where things are

- Approved targets: `Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/01_APPROVED_TARGETS/`
  - Screen 3 is `01_APPROVED_SCREEN_3_OPENING.jpg`; Screen 4 is `02_APPROVED_SCREEN_4_FULL.jpg`.
  - Close-up crops are in `03_SCREEN_4_CROPS/`. Read `00_READ_ME_FIRST.txt` first.
- The game: `WebDemo/`.
  - Source is in `src/`. Build with `cd WebDemo && node build.mjs`; the bundle `game.bundle.js` is committed.
- Test switches (URL `?s3=...` or `window.__BW_S3__`):
  - `round4` is the current visual pass: the reconstruction of the scenery (`src/tunnel_r4.js`, `ROUND4`).
  - `round4` includes `round3` (`src/tunnel_r3.js`, `ROUND3`), and that includes `round2`: the Screen 4 controls and
    tunnel polish.
  - Without a switch, the normal game is the protected original.
  - New work goes behind a switch until the user approves it, and the normal game must stay pixel-identical.
- Round 3 settings: `ROUND3` in `WebDemo/src/tunnel_r3.js`.
  - It covers foam heaps, white-water swirl, soap bubbles, ring colours, drum colours, brush colours, water, gem, spray
    and camera.
  - Try values without rebuilding: `window.__BW_S3_TUNE__ = { round3: { ... }, round4: { ... } }`, or the third
    argument of `s3_shot.cjs`.

## Tools in a cloud session

Run `bash Tools/dev_tools_setup.sh` first. It skips whatever is already installed and provides:

- Blender 5.2.3 (`blender`);
- `/opt/bw-venv` with OpenCV and scikit-image;
- `/opt/bw-node-tools` with glTF Transform and the Khronos validator;
- checks for ImageMagick and Playwright with Chromium.

Do not run `playwright install`.

## The loop

1. **Capture real gameplay**, seeded and repeatable (Math.random seed 7, 538 x 1076 game area). Pass the demo folder as an
   **absolute** path.

   ```bash
   cd WebDemo
   SETTLE=800 S3=round3 TIMES=0,3.6,4.2,5.0,6.0,7.2 node tools/screen3/s3_shot.cjs "$PWD" /tmp/frames/r3
   SETTLE=800 S3=round2 TIMES=0,3.6,4.2 node tools/screen3/s3_shot.cjs "$PWD" /tmp/frames/r2
   ```

   - `TIMES` are game seconds after the tap; 0 is Tap to Start.
   - About 3.6–4.2 s is the approved Screen 4 moment: just inside the drum, with brushes framing both sides.
   - Page screenshots include the HUD. Its CSS fades run on real time, hence `SETTLE`.
   - For pixel-exact checks, capture the 3D canvas instead (`WebDemo/tools/models/game_eval.cjs` with `SHOT=`).
2. **Measure against the approved screen:**

   ```bash
   /opt/bw-venv/bin/python WebDemo/tools/screen4/compare_s4.py \
     --approved Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/01_APPROVED_TARGETS/02_APPROVED_SCREEN_4_FULL.jpg \
     --out /tmp/cmp --name now r2=/tmp/frames/r2/t4.2.png r3=/tmp/frames/r3/t4.2.png
   ```

   - It reports how much of the play area each ingredient covers and whether it sits in the same places: white foam and
     splash, pink, gold coins, purple gem, turquoise, deep blue and pale milky blue.
   - It also gives region colour (ΔE2000), SSIM and edges, a heat map, and a "largest differences" list.
   - Use the Screen 3 image with the `t0` frames for the opening.
3. **Fix the largest difference first**, in the live game, behind the switch.
   - Try candidates in one batch with `__BW_S3_TUNE__`, each captured and measured.
   - Look at the frames too. A number can improve while the picture gets worse.
4. **Check that nothing broke:**
   - Controls and HUD: `S3=round3 node tools/screen3/s3_func.cjs "$PWD"`.
   - Hearts, pause, Bubble Blast and Turbo Spin: `S3=round3 node tools/screen3/r2_func.cjs "$PWD"`.
   - Riding through the tunnel in every lane: `node tools/models/traverse.cjs "$PWD"`.
   - Frame cost: `CONFIGS='normal;round2;round3' node tools/screen3/r2_perf.cjs "$PWD"`.
   - The normal game and older switches must render pixel-identical to the previous build. Compare canvas captures with
     the old commit built in a git worktree.
5. **Show the evidence:**
   - Comparison sheets: `python3 WebDemo/tools/screen4/r3_sheets.py <frames> <out>`, with approved, before and after at
     the same moments, and several moments during movement.
   - A real gameplay video: `S3=round3 SCRIPT='[...]' node tools/screen3/record_r2.cjs "$PWD" <out> 12 game`, then
     encode the frames with ffmpeg at 30 fps.
   - Commit and push.
   - Give an honest score with the measured numbers. Never claim a percentage match that the measurements do not show.

## Geometry and models

- Validate every model: `node WebDemo/tools/models/validate.cjs file.glb`.
- Repair with `node WebDemo/tools/models/repair_glb.mjs in.glb out.glb` (unit normals, aligned buffers).
- Keep the original recoverable in git.
- Check that a portal or tunnel can be passed through:
  `blender -b --factory-startup --python WebDemo/tools/models/blender_passage_check.py -- model.glb out.json render.png`
  (rays through the opening, clear radius by depth).
- The game's real tunnel is `drum.glb`. Its traversal is proven by `tools/models/drum_scan.js` (with `game_eval.cjs`)
  and `traverse.cjs`.
- A2 (Tripo) is forced-perspective and closed at the back. Do not use it as a tunnel without un-tapering it in Blender.

## Paid generators (ask first)

- **Tripo CLI** (`tripo`): the key lives in `~/.tripo` after `tripo login`.
- **Meshy MCP** (`.mcp.json`): reads `MESHY_API_KEY` from the environment.
- Both spend credits. Check `tripo balance` or `meshy_check_balance`, and get the user's yes before any generation.
- Never put keys in the repo, scripts or chat.

## What is known

As of 4 November 2026, see `Previews/WebDemo/screen4_round3_test/README.md` for the latest measures. The largest
remaining gaps:

- white water across the middle of the tunnel;
- the bright vortex at the tunnel's centre;
- the bottom HUD buttons covering the approved foreground foam.

Water colour, deep blue and brush colours are already close.
