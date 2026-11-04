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
  - `hero` is the newest Screen 4 version (5 November 2026): Round 7's dedicated hero scene, rebuilt from the approved
    Screen 4 as a staged playable frame (`src/tunnel_r7_hero.js`, `src/tunnel_r7_hero_water.js`). Hero moment **2.85 s**.
    Stage objects with `tools/screen4/hero_probe.cjs` (PICKS) and measure with `tools/screen4/hero_shares.py`. Colours are
    sRGB hex through `new THREE.Color()` (linear light; screen values written straight into shaders come out pastel).
    Evidence: `Previews/WebDemo/screen4_round7_hero/`.
  - `round6` is the current visual pass (4 November, third account): round5 plus the washing machine's architecture as
    geometry (`src/tunnel_r6.js`, `ROUND6`): porthole entrance (lavender drum face, thick gold bezel with rivets, bronze
    step, blue seal), layered flanges in the tunnel, a bow wave of turquoise water round the character, and the re-aimed
    camera. Hero moment **3.1 s**. `ROUND6.round5` overrides round5's settings only when round6 is on (applied in
    `tunnel_r5.js` before its shaders are written), so `?s3=round5` is unchanged. Tune with `__BW_S3_TUNE__ = { round6: {...} }`.
    Construction guide: `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/` (the approved Screen 4 stays the authority).
  - `round5` (`src/tunnel_r5.js`, `ROUND5`) includes round4; `round4` is the reconstruction of the scenery (`src/tunnel_r4.js`, `ROUND4`).
  - Camera lesson (Round 6): the drum camera blends from the Tap to Start framing until `ROUND6.camBlendEnd`; at the entry a
    half-blended camera made paper estimates wrong. Sweep `round6.round5.camera` in real captures instead (two browsers at
    a time at most: three software-rendered browsers at once once gave a blank lavender canvas).
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

Run `source Tools/bw_tools_env.sh` first, in every shell that uses the tools. It finds them wherever this environment
installed them (the user's setup script puts them in `~/.bubblewash-tools/`; the older layout was `/opt/bw-venv`,
`/opt/bw-node-tools` and `/usr/local/bin/blender`) and sets:

- `$BW_PY`: Python with OpenCV, scikit-image, NumPy and Pillow;
- `blender`: a real Blender binary if there is one, otherwise `Tools/bin/blender`, which runs
  `blender -b --python x.py -- args` through the bpy 5.2.3 module (`$BW_BPY`);
- `PATH` and `NODE_PATH`: glTF Transform, the Khronos validator, Playwright (so `require('playwright')` works from
  `WebDemo/`) and `tripo`.

If the tools are missing entirely, `bash Tools/cloud_env_setup.sh` installs them (Blender 5.2.3, the Python visual
tools, the node tools and Vite) in about a minute; `Tools/DEV_TOOLS.md` has the details. ImageMagick
(`convert`, `montage`) and ffmpeg are system packages. Do not run `playwright install`. Before the first build in a new
session, run `cd WebDemo && npm install` (three and esbuild, pinned).

Save after each finished step with `bash Tools/save_now.sh "<what was done>"`: it pushes and prints the branch, the
commit, whether GitHub really has it, and the files saved.

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
   "$BW_PY" WebDemo/tools/screen4/compare_s4.py \
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

- **Tripo only** (the user's decision, 4 November). **Never call Meshy tools, ask for a Meshy key or spend Meshy credits.**
- Use Tripo only when a 3D asset is truly missing. Tunnel, water, splashes, bubbles, brushes, lighting and composition
  are built with Blender, three.js and the existing assets.
- **Tripo CLI** (`tripo`): the key lives in `~/.tripo` (outside the repository) after `tripo login --region ov --no-wait`
  (browser sign-in) or `tripo login --region ov --key ...`. A key pasted in chat must never be written to a repository file;
  `Tools/export_chat_history.py` redacts `tsk_` keys from exported chat. Balance on 4 November (third account): 760.
- Before any generation:
  - check `tripo balance` (free);
  - get the cost from `tripo make "<prompt>" --model <m> --dry-run --json` (free: P2 110 credits, v3.1 20 credits a model);
  - tell the user both and get their yes for that exact job.
- **Tripo skips its own confirmations when it runs headless** (`--yes` is switched on automatically, as in a cloud
  session), so `tripo make`, `tripo ai` and `tripo redo` spend credits at once. Run them only after the user's yes for
  that exact job. `tripo doctor`, `tripo balance` and `tripo login` are free.
- Never put keys in the repo, scripts or chat.

## What is known

Latest (4 November 2026, Round 4 second pass): `Previews/WebDemo/screen4_round4_water_brushes/README.md`.

- Water, foam, brushes and tunnel colour are now close in the measures: pale milky blue on target, deep blue 4.8% (approved 6.2%).
- The largest remaining gap is composition. The approved picture looks straight into a centred bright vortex, with the
  coins, gem and sock round it.
- Too much pink.
- The bottom HUD buttons cover the foreground foam.

Useful tools added that day:

- `WebDemo/tools/screen4/hide_probe.cjs` shows what each named object contributes to a frame (capture with it hidden,
  against a same-path baseline `HIDE=nothing`).
- `brush_view.cjs` renders the fluffy brush on its own.
- `three_way_sheet.py` makes the approved, previous and new sheet.
- Do not use sin()-based hashes over large cell indices in shaders: they smear into streaks.
- Fibre coordinates must not be angle x radius, which shears the strand grid.

Earlier (Round 3), see `Previews/WebDemo/screen4_round3_test/README.md`. The largest remaining gaps then:

- white water across the middle of the tunnel;
- the bright vortex at the tunnel's centre;
- the bottom HUD buttons covering the approved foreground foam.

Water colour, deep blue and brush colours are already close.
