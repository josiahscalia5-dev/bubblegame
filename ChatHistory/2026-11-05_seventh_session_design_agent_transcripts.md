# Seventh session design agents (5 November, Round 9 art match continued)

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## Tunnel & Lighting specialist: Tunnel & Lighting: finish gate fixes (started 14:38 UTC)

_Worked in its own worktree, branch `worktree-agent-a3faef23dd555533b`._

**Lead → agent** (14:38 UTC):

You are the Tunnel & Lighting specialist for Bubble Wash Kingdom (three.js r170, `WebDemo/`). This is a CONTINUATION: you were doing this exact pass in the previous session (13:44-14:30 UTC) when its container was lost. Your unfinished work was saved and you resume it now, exactly where you left off. Do not restart the pass and do not redo finished fixes.

You work in your OWN git worktree (your current directory). It starts at `36c8676`, whose `WebDemo/` is byte-identical to `af5791d`, the commit your previous run started from (the merged Round 9 build `2a6ab30` plus the Art Director's gate). The Water & VFX specialist is working IN PARALLEL in another worktree; the lead merges both afterwards.

## Setup (do this first, in order)
1. Read `CLAUDE.md` and your agent file's "THE ONE REFERENCE" and "Newest: Round 9 ART MATCH" sections.
2. In every shell: `source /home/user/bubblegame/Tools/bw_tools_env.sh`.
3. `ln -s /home/user/bubblegame/WebDemo/node_modules WebDemo/node_modules`.
4. Copy `WebDemo/game.bundle.js` aside (md5 should be `ba0c7f6c9b02e9b538182cade4a923ab`): it is the pixel-identity baseline.
5. RESTORE your saved work: `cp -a Previews/WebDemo/screen4_round9_match/wip_snapshots_design_agents/lighting-visual-matching_af500937/files/. .` (10 files: `game.js`, `tunnel_r9_match.js`, the floor helper call in `tunnel_r9_match_water.js`, the five `textures/screen4/tunnel_*.png`, `textures.json`, `derive_ref5_water.py`). Its `README.md` and `changes.patch` in the same folder describe it. Then `cd WebDemo && node build.mjs`.
6. Read what you had done: your previous run's step log is in `ChatHistory/2026-11-05_sixth_session_design_agent_transcripts.md`, section "Tunnel & Lighting specialist" (lines about 193-545). Your scratchpad from then is LOST (the measurement copies `m/`, `run.sh`, `centre_sheet.py`, `coin_probe.cjs`, the star scripts and the tune JSON files `tune_f3b.json`/`tune_f4c.json`). So anything you only had in a tune file and had not yet folded into the source is gone: re-measure first.
7. Rebuild your measurement kit from the Art Director's scripts in `Previews/WebDemo/screen4_round9_match/05_art_director_gate/scripts/` (`walls.py`, `rings.py`, `palette.py`, `rim.py`, `objects.py`, `zones.py`, `strips.py`, `rw_probe.cjs`), taking the frame from an argument or environment variable. Then capture the restored state at 3.0 s and measure EVERY target below, so you know exactly where you stand before changing anything.

## Where you were (from your step log)
- F1 the centre: done in principle (screen-space placement helper `mtPlace` in `tunnel_r9_match.js`, used by the walls and by `matchFloor()`; a `matchExit` material for the exit). At iteration f1b the centre was warm 63%, lavender 14.7%, "too orange and not white enough"; later lavender crept back up and you were de-liliacing the centre and mid vortex.
- F5 stars: four-point star removal and a lime-to-peach pull in `derive_ref5_water.py`, textures regenerated; lime 9 pixels (was 783).
- F3 wall depth: a trough term and a band layer; at f3a deep cobalt overshot (9.6%); at f4c you were strengthening cobalt gaps and rims.
- F6 rim, F7 gem, F10 right coin/sock: applied at f3a (thinner bezel with its inner and outer sides coloured as bevel and housing; right coin to lane 2.357, u 2.3, h 0.57; first sock lane 2.0, h 1.14; `MATCH.secondSock` hook in `game.js`). Gem, right coin and rim thickness were close to target.
- Your last step (14:29-14:30): you had projected every collectible at 3.0 s (`coin_probe.cjs`) and edited the collectibles in `tunnel_r9_match.js`, then built and captured iteration f5b. Check that iteration's result first.

## The one target
The ORIGINAL CLASSIC APPROVED Screen 4, `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536), the only authority. Close-ups: `Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/` (`01` housing, `02` whirlpool, `04` coins/gem/sock; `10` annotated zones). Material references (look only, never layout): `Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/` (REF5 = the tunnel's water material, REF2 = gold and lavender housing).

## The job: finish your part (`?s3=match` only), in this order
A. The Art Director's fixes (full detail in `Previews/WebDemo/screen4_round9_match/05_art_director_gate/README.md`), with targets:
1. F1 centre: centre r < 0.06 W warm ≥ 35% (approved 46.7%), lavender ≤ 15% (approved 11.1%); warm and luminous, peach-white, not orange and not blown out (`walls.py`, re-run `rw_probe.cjs`).
2. F3 wall depth: upper-wall deep cobalt 3-5% (approved 3.9%), side walls about 4% (approved 4.1%), texture ≥ 0.085, ≥ 7 bands per sector, band contrast 0.17-0.20.
3. F4 light colour: lime pixels ≤ 100, wall cyan ≥ 11% (approved 13.3%), electric blue ≤ 46%.
4. F5 sparkles: small sparkles ≤ 0.3%; remaining glints toward #cae0ff.
5. F6 housing: rim thickness about 0.019 H; left strip x < .08 white ≥ 15%; do NOT add lavender.
6. F7 gem and centre crowding: gem box 0.271-0.374, 0.489-0.529; only the centre coin within 0.08 W of the centre.
7. F10 right coin 0.778-0.996, 0.671-0.800; sock raised about 0.025 H.
B. The user's fidelity brief (5 November, 14:16 UTC, `Design/ReferencePacks/2026-11-05_Screen4_Fidelity_Pass_Brief/README.md`; its images 02 and 03 are comparisons, NOT targets). Your parts:
- Priority 1, tunnel shape and depth: a deeper swirling washing-machine vortex; more ring and spiral structure; stronger cobalt depth between bands; keep the warm glowing centre; no smooth open-tube look.
- Priority 3, objects: the original's arrangement; the big left coin and the lower-right coin no longer oversized (no foreground collectible that changes the composition); the gem and socks placed as in the original; no clutter round the centre coin.
- Priority 4, colour and finish: deeper cobalt and turquoise; warm highlights in the centre; no lime-yellow patches, no star sparkles.
- Method: lock the camera; compare at 3.0 s (same seed, same camera) with the original BEFORE each change; correct against that exact frame. Match the original; never a new or "better" variation.
The bubbles inside the tunnel, the foam bank and the water round the character are the Water & VFX specialist's job: do not touch them.

## Rules
- Visual changes only under `?s3=match`, gated on `MATCH_ON` (insertions like `${MATCH_ON ? piece() : ''}`), so the normal game and every older switch stay pixel-identical. Never create textures or draw random numbers outside `match` (three.js texture UUIDs come from the game's seeded `Math.random`); private random generators only.
- In `WebDemo/src/tunnel_r9_match_water.js` your ONLY change is the `mtPlace` call in `matchFloor()`; Water & VFX is editing the rest of that file.
- Gameplay preserved: `S3=match node tools/screen3/s3_func.cjs <abs WebDemo>` must still give lanes 1/0/2, the jump, 12 coins and 2 socks, no console errors. Collectibles stay within reach.
- No new render passes, no Tripo, no plugins, no other screens. Keep the fluffy shell-fur brushes.
- Captures: `tools/screen4/liquid_shots.cjs` (S3=match TIMES=2.85,3.0,3.1 DPR=1.5; CANVAS=1 for the raw canvas). Pass ABSOLUTE paths of YOUR worktree's WebDemo. SwiftShader is slow and the 4 CPUs are shared with another specialist and the lead: ONE browser at a time. BOUNDED: about 12-15 more capture iterations; if time runs short, F1, F3 and the vortex structure matter most. Commit a working state early (see below) rather than risk losing it.

## Checkpoint and deliverable
- As soon as the restored state is measured and builds cleanly, make a first commit in your worktree ("Round 9 Tunnel & Lighting gate fixes (restored WIP): ..."), so nothing is lost again; commit again at the end.
- Prove pixel identity of the normal game, `splash` and `liquid` (raw canvas, `tools/models/game_eval.cjs` SHOT, seed 7, at Tap to Start and 2.85 s) against the baseline bundle you copied aside.
- Evidence and a README in `Previews/WebDemo/screen4_round9_match/06_tunnel_lighting_gate_fixes/`: the real 3.0 s frame; a full-resolution side by side at portrait height 1536: ORIGINAL | merged 3.0 s before you (`04_merged/match_t3.00.png`) | match 3.0 s now; 2.85 and 3.1 s frames; a 50% blend of the original over the new 3.0 s (`tools/screen4/match_overlay.py`); `measured.txt` (approved / before / now for every target, naming the script); per fix one line: fixed / partly / not, with numbers; and a short checklist of your parts of the user's brief: corrected / partly / remaining. Be honest; if a change does not visibly improve the frame, say so.
- Final commit in your worktree (source + rebuilt `game.bundle.js` + evidence), message starting "Round 9 Tunnel & Lighting gate fixes:"; do not push and do not touch other branches. Reply with the commit hash, your worktree branch name, the comparison path, the per-fix verdicts with key numbers, and what still differs from the original.

**Agent** (14:38 UTC):

I'll start with the setup steps in order.

- 14:38 `Bash`: Check worktree state and bundle md5
- 14:38 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/Previews/WebDemo/screen4_round9_match/wip_snapshots_design_agents/lighting-visual-matching_af500
- 14:38 `Bash`: Verify WebDemo identical to af5791d and copy baseline
- 14:38 `Bash`: Link node_modules, restore WIP, build
- 14:38 `Bash`: Link node_modules and list snapshot files
- 14:38 `Bash`: Restore WIP files into worktree
- 14:38 `Bash`: Build restored WIP
- 14:38 `Read`: /home/user/bubblegame/Tools/bw_tools_env.sh
- 14:38 `Bash`: Inspect tools layout
- 14:38 `Bash`: Build restored WIP bundle
**Agent** (14:38 UTC):

Now let me read my previous step log in the chat history.

- 14:38 `Grep`: Tunnel & Lighting specialist
- 14:38 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/ChatHistory/2026-11-05_sixth_session_design_agent_transcripts.md
- 14:38 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/ChatHistory/2026-11-05_sixth_session_design_agent_transcripts.md
**Agent** (14:38 UTC):

Now the Art Director's gate README and measured.txt, and the scripts.

- 14:38 `Bash`: List gate folder and show measurements
- 14:38 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/Previews/WebDemo/screen4_round9_match/05_art_director_gate/README.md
- 14:38 `Bash`: Read measurement common module and walls.py
- 14:38 `Bash`: Read the remaining measurement scripts
- 14:38 `Bash`: Read the rw probe script
- 14:39 `Bash`: Copy measurement scripts to scratchpad
- 14:39 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/scripts/common.py
- 14:39 `Bash`: Make scripts measure every frame
- 14:39 `Bash`: Read the capture tool header
**Agent** (14:39 UTC):

Now a capture-and-measure runner script.

- 14:39 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/run.sh
- 14:39 `Bash`: Capture restored state at 3.0 s and measure
- 14:39 `Bash`: Capture restored state at 3.0 s and measure
- 14:39 `Bash`: Check why capture failed
- 14:39 `Bash`: Locate playwright installation
- 14:39 `Bash`: Retry capture with playwright on NODE_PATH
**Agent** (14:40 UTC):

The "before" numbers reproduce the gate exactly. Now let me look at the restored frame beside the original.

- 14:40 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/sbs.py
- 14:40 `Bash`: Make side by side of original, before, restored
- 14:40 `Bash`: Make side by side of original, before, restored
- 14:40 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/sbs_r0.png
- 14:40 `Bash`: Show restored diffs for game.js and water file
- 14:40 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
**Agent** (14:40 UTC):

The restored state builds and measures. Committing it now so nothing is lost.

- 14:40 `Bash`: Stage the restored WIP files
- 14:40 `Bash`: Commit the restored WIP checkpoint
**Agent** (14:41 UTC):

Let me look closely at the centre and objects area (original | before | now).

- 14:41 `Bash`: Crop centre region side by side
- 14:41 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/crop_centre_r0.png
- 14:41 `Bash`: Crop upper tunnel side by side
- 14:41 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/crop_upper_r0.png
- 14:41 `Bash`: List precision kit and brief folders
- 14:41 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Screen4_Fidelity_Pass_Brief/README.md
- 14:41 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/02_DEEP_COBALT_CYAN_WHIRLPOOL.jpg
- 14:41 `Bash`: Capture with more concentric band settings
- 14:41 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/t1.json
- 14:42 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/run.sh
- 14:42 `Bash`: Capture and measure tune iteration t1
- 14:42 `Bash`: Crop upper tunnel for t1
- 14:42 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/crop_upper_t1.png
- 14:43 `Bash`: Read hero probe header
- 14:43 `Bash`: Read hero probe body
- 14:43 `Bash`: Find debug hook and coin rules in game.js
- 14:43 `Bash`: Read collectible rules and creation code
- 14:43 `Bash`: Read coin, gem, sock creation
- 14:43 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/coin_probe.cjs
- 14:43 `Bash`: Project every collectible at 3.0 s
- 14:44 `Bash`: Zoom on the centre coin area
- 14:44 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/crop_cc_t1.png
- 14:44 `Bash`: Find per-frame collectible scale writes
- 14:44 `Bash`: Read collectible per-frame animation
- 14:45 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
**Agent** (14:45 UTC):

Noted. Let me read the user's new package before continuing.

- 14:45 `Bash`: Read the user's evidence package instructions
- 14:45 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Screen4_Visual_Evidence_and_Assets/02_Seven_Annotated_Comparisons/03_Vortex_geometry_and_depth.png
- 14:45 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Screen4_Visual_Evidence_and_Assets/02_Seven_Annotated_Comparisons/05_Coin___gem___sock_composition.png
- 14:45 `Bash`: Find jump, lane and body radius constants
- 14:45 `Bash`: Read world constants and lane function
**Agent** (14:45 UTC):

Applying the lead's merge note to `mtPlace` (reference width = min(width, 0.5 × height), identical at 1:2).

- 14:45 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
**Agent** (14:46 UTC):

Now solving the left coins' places against the original with the hero probe's PICKS.

- 14:46 `Bash`: Build and solve coin places with hero probe
- 14:47 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:47 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:47 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:47 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/t2.json
- 14:47 `Bash`: Build and capture iteration t2
- 14:48 `Bash`: Side by side of original and t2
- 14:48 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/sbs_t2.png
- 14:49 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:49 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:49 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:49 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:49 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/t3.json
- 14:49 `Bash`: Build and capture iteration t3
**Agent** (14:50 UTC):

Upper-left coin now 0.092-0.209 x 0.438-0.504 (original 0.087-0.213 x 0.441-0.499). Let me look at the walls in t3.

- 14:50 `Bash`: Crop upper tunnel for t3
- 14:50 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/crop_upper_t3.png
- 14:50 `Bash`: Percentiles of relief and variation maps
- 14:51 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
**Agent** (14:51 UTC):

Now fold the t1-t3 settings into the source and add the new parameters.

- 14:51 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:51 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:51 `Bash`: Build and capture iteration t4 (folded settings)
- 14:51 `Bash`: Crop mid tunnel for t3 and t4
- 14:51 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/crop_mid_t4.png
- 14:52 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/t5.json
- 14:52 `Bash`: Capture t5 and crop mid tunnel
- 14:52 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/crop_mid_t5.png
- 14:53 `Bash`: Locate settings lines to fold
- 14:53 `Bash`: Fold t5 settings and tweaks into source
- 14:53 `Bash`: Build, capture t6 and crop
- 14:53 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/crop_mid_t6.png
- 14:54 `Bash`: Read the zoom grid script
- 14:54 `Bash`: Grid zoom of the sock, original vs t6
- 14:54 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/zg_sock.png
**Agent** (14:54 UTC):

Sock box now 0.647-0.825 x 0.556-0.668 (original 0.647-0.84 x 0.555-0.668): matched. Next the left strip (F6: original white 21%, ours 3%). Let me look at it.

- 14:54 `Bash`: Crop the left strip for comparison
- 14:54 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/crop_left_t6.png
- 14:55 `Bash`: Map the brightest 2% wall pixels
- 14:55 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/glint_cmp.png
- 14:55 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
**Agent** (14:55 UTC):

Now the royal-blue hue pull, placed just before the display compensation.

- 14:55 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:56 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:56 `Bash`: Build, capture t7 and crop
- 14:56 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/m/crop_upper_t7.png
**Lead → agent** (14:56 UTC):

[Image: original 2109x640, displayed at 2000x607. Multiply coordinates by 1.05 to map to original image.]

- 14:56 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:56 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:56 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a3faef23dd555533b/WebDemo/src/tunnel_r9_match.js
- 14:57 `Bash`: Locate royal range and edge settings

_113 tool steps._

---

## Water & VFX specialist: Water & VFX: finish bank and bubbles (started 14:38 UTC)

_Worked in its own worktree, branch `worktree-agent-a76d8d522689c2f66`._

**Lead → agent** (14:38 UTC):

You are the Water & VFX specialist for Bubble Wash Kingdom (three.js r170, `WebDemo/`). This is a CONTINUATION: you were doing this exact pass in the previous session (13:44-14:30 UTC) when its container was lost. Your unfinished work was saved and you resume it now, exactly where you left off. Do not restart the pass and do not redo finished work.

You work in your OWN git worktree (your current directory). It starts at `36c8676`, whose `WebDemo/` is byte-identical to `af5791d`, the commit your previous run started from (the merged Round 9 build `2a6ab30` including your own stage `15acbc8`, plus the Art Director's gate). The Tunnel & Lighting specialist is working IN PARALLEL in another worktree; the lead merges both afterwards.

## Setup (do this first, in order)
1. Read `CLAUDE.md` and your agent file's "THE ONE REFERENCE" and "Newest: Round 9 ART MATCH" sections.
2. In every shell: `source /home/user/bubblegame/Tools/bw_tools_env.sh`.
3. `ln -s /home/user/bubblegame/WebDemo/node_modules WebDemo/node_modules`.
4. Copy `WebDemo/game.bundle.js` aside (md5 should be `ba0c7f6c9b02e9b538182cade4a923ab`): it is the pixel-identity baseline.
5. RESTORE your saved work: `cp -a Previews/WebDemo/screen4_round9_match/wip_snapshots_design_agents/water-vfx-engineer_ada634b5/files/. .` (2 files: `WebDemo/src/tunnel_r9_match_water.js` and `WebDemo/src/tunnel_r8_splash.js`). The folder's `README.md` and `changes.patch` describe it. Then `cd WebDemo && node build.mjs`.
6. Read what you had done: your previous run's step log is in `ChatHistory/2026-11-05_sixth_session_design_agent_transcripts.md`, section "Water & VFX specialist" (lines about 549-887). Your scratchpad from then is LOST (`ad/common.py`, `m.sh`, `m2.sh`, `summ.py`, `blobs.py`, `classmap.py`, `sectors.py`, `bubbles.py`, `specks.py`, `sp/lobe_probe.cjs`, `sp/hide_shots.cjs`, and the tune JSON files `t2`-`t14.json`). Your step log says you folded t2, i5, t7 and t9 into the source and added a front-rim width setting (i12); t11 and t14 may not be folded: re-measure first.
7. Rebuild your measurement kit from the Art Director's scripts in `Previews/WebDemo/screen4_round9_match/05_art_director_gate/scripts/` (`bank.py`, `contact.py`, `char.py`, plus `WebDemo/tools/screen4/liquid_shares.py`), taking the frame from an argument or environment variable. Capture the restored state at 3.0 s and measure EVERY target below before changing anything.

## Where you were (from your step log)
- F2 bank mass and F8 under the body: by iteration 10 the bank "reads as a bubbly mass at all three times" (2.85/3.0/3.1 s), at 208 draw calls and 1.42 M triangles. Compared with the original, the dome rims were thinner and the domes glassier; you were testing thicker rims and larger glints (i11, i12).
- Then the user's brief arrived. You started on "many more bubbles inside the tunnel": a bubble counter for the original by zone round the vanishing point (lost), and a new bubble builder at the end of `tunnel_r9_match_water.js` (`buildMatchWater`). At i13 only about 30 bubbles showed, all round the centre; the wall ones were probably outside or behind the walls (the hero walls' radius / lining radius). At 14:29 you edited the bubble settings and the flanks (t14) and were capturing when the container was lost. Check that state first.

## The one target
The ORIGINAL CLASSIC APPROVED Screen 4, `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536), the only authority. Close-ups: `Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/` (`03` pink swimmer in blue water, `06` foreground splashes; `10` annotated zones), and `Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/03_SCREEN_4_CROPS/01_WHITE_WATER_SPLASH_AROUND_PINK_HERO.jpg`, `02_BLUE_WATER_FOAM_FOREGROUND.jpg`. Material reference for the water round the character (look only): `Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/03_REF3_PINK_CHARACTER_IN_TURQUOISE_WATER.png`.

## The job: finish your part (`?s3=match` only)
A. The user's fidelity brief (5 November, 14:16 UTC, `Design/ReferencePacks/2026-11-05_Screen4_Fidelity_Pass_Brief/README.md`; its images 02 and 03 are comparisons, NOT targets). Your parts, in the user's order:
1. **She sits DOWN INTO the water:** the water and foam built up round the pink character's sides and in front of her lower body, so she looks partly submerged and embedded, not sitting on top. Do NOT change the character model.
2. **Many more bubbles inside the tunnel:** throughout the tunnel at different sizes and depths, drifting with the water, so the tunnel feels fuller and more active. Count the original's bubbles by zone with a script (and check the overlay by eye), then match the counts and size range. Clear soap bubbles with thin rims and highlights, not white specks and not stars.
3. **More splash detail, white water streaks and layered water motion.**
4. **The foreground foam bank fuller, puffier and more dimensional:** large sculpted lobes with bubbly caps, turquoise and electric blue between the crests.
- First priority overall: a visibly blue/turquoise water body; white foam only an accent on top. Never a white blanket, never bloom, haze or a pale wash as a substitute.
- Method: lock the camera; compare at 3.0 s (same seed, same camera) with the original BEFORE each change; correct against that exact frame. Match the original; never a new or "better" variation.
B. The Art Director's targets (`Previews/WebDemo/screen4_round9_match/05_art_director_gate/README.md`, fixes 2 and 8):
- F2 bank: bank white 18-22% (approved 20.3%), saturated blue ≥ 13% (approved 14.0%), white blobs of 20 px or more left of the body ≤ 40 (approved 13) (`bank.py`, `contact.py`); lower-third white ≤ 16.9% and contact strip white ≤ 19% (`liquid_shares.py`).
- F8 under the body: texture ≥ 0.10 (approved 0.112), white 12-16%, pale blue ≤ 24% (approved 20.5%), violet under the body ≥ 30%, waterline about 0.83 (approved 0.836) (`bank.py`, `char.py`).
- Keep the water's reactions to a swerve, a jump and a landing (`tools/screen4/liquid_moves.cjs` with S3=match).
NOT yours: F9 (the floor ahead) waits for the centre fix; in `tunnel_r9_match_water.js` do NOT change `matchFloor()`'s placement lines (`du`, `rw`, `tu`): Tunnel & Lighting replaces exactly those with a helper call. Do not edit `tunnel_r9_match.js` (walls, rim, staging, objects).

## Rules
- Visual changes only under `?s3=match`, gated on `MATCH_ON` (insertions like `${MATCH_ON ? piece() : ''}`), so the normal game and every older switch stay pixel-identical. Never create textures or draw random numbers outside `match` (three.js texture UUIDs come from the game's seeded `Math.random`); private random generators only.
- Gameplay preserved: `S3=match node tools/screen3/s3_func.cjs <abs WebDemo>` must still give lanes 1/0/2, the jump, 12 coins and 2 socks, no console errors. Keep the cost reasonable: report draw calls and triangles (merged hero frame: 209 draw calls, 1.42 M triangles); use instancing for the bubbles.
- No new render passes, no Tripo, no plugins, no other screens. Keep the character model unchanged.
- Captures: `tools/screen4/liquid_shots.cjs` (S3=match TIMES=2.85,3.0,3.1 DPR=1.5; CANVAS=1). Pass ABSOLUTE paths of YOUR worktree's WebDemo. SwiftShader is slow and the 4 CPUs are shared with another specialist and the lead: ONE browser at a time. BOUNDED: about 12-15 more capture iterations; focused high-impact changes. Commit a working state early rather than risk losing it.

## Checkpoint and deliverable
- As soon as the restored state is measured and builds cleanly, make a first commit in your worktree ("Round 9 Water & VFX gate fixes (restored WIP): ..."), so nothing is lost again; commit again at the end.
- Prove pixel identity of the normal game, `splash` and `liquid` (raw canvas, `tools/models/game_eval.cjs` SHOT, seed 7, at Tap to Start and 2.85 s) against the baseline bundle you copied aside.
- Evidence and a README in `Previews/WebDemo/screen4_round9_match/07_water_vfx_gate_fixes/`: the real 3.0 s frame; a full-resolution side by side at portrait height 1536: ORIGINAL | merged 3.0 s before you (`04_merged/match_t3.00.png`) | match 3.0 s now; 2.85 and 3.1 s frames; close-up crops of the bank, the body and the tunnel bubbles (original / before / now); the bubble counts by zone (original / before / now, naming the script); `measured.txt` (approved / before / now for every target, naming the script); per fix one line: fixed / partly / not, with numbers; the moves check; and a short checklist of your parts of the user's brief: corrected / partly / remaining. Be honest; if a change does not visibly improve the frame, say so.
- Final commit in your worktree (source + rebuilt `game.bundle.js` + evidence), message starting "Round 9 Water & VFX gate fixes:"; do not push and do not touch other branches. Reply with the commit hash, your worktree branch name, the comparison path, the per-fix verdicts with key numbers, and what still differs from the original.

**Agent** (14:38 UTC):

I'll start with the setup steps in order.

- 14:38 `Bash`: Check worktree state and bundle md5
- 14:38 `Bash`: List agent files
- 14:38 `Bash`: Check branch and diffs between commits
**Agent** (14:38 UTC):

WebDemo is identical to `af5791d`. Now the rest of the setup.

- 14:38 `Bash`: Source env, link modules, save baseline bundle, view WIP snapshot
- 14:39 `Read`: /home/user/bubblegame/Tools/bw_tools_env.sh
- 14:39 `Bash`: Inspect tools install
**Agent** (14:39 UTC):

I'll set the same variables literally in each shell (the sandbox refuses `source`).

- 14:39 `Bash`: Check playwright availability
- 14:39 `Bash`: Find playwright and capture tool requires
- 14:39 `Bash`: Check node env for playwright
**Agent** (14:39 UTC):

Playwright resolves already. Now link the modules, save the baseline and restore the WIP.

- 14:39 `Bash`: Link modules, save baseline bundle, list snapshot
- 14:39 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/Previews/WebDemo/screen4_round9_match/wip_snapshots_design_agents/water-vfx-engineer_ada634b5/RE
- 14:39 `Bash`: Restore WIP files and build
**Agent** (14:39 UTC):

Now the step log from the previous run.

- 14:39 `Bash`: Locate step log section
- 14:39 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/ChatHistory/2026-11-05_sixth_session_design_agent_transcripts.md
**Agent** (14:39 UTC):

Now the brief, the Art Director's gate README and the restored diff.

- 14:39 `Bash`: Read brief and list gate folders
- 14:39 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/Previews/WebDemo/screen4_round9_match/05_art_director_gate/README.md
- 14:39 `Bash`: Read AD measuring scripts
- 14:39 `Bash`: Read liquid_shares and liquid_shots
**Agent** (14:39 UTC):

Now the restored diff itself.

- 14:39 `Bash`: Show splash diff and file size
- 14:39 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/WebDemo/src/tunnel_r9_match_water.js
**Agent** (14:39 UTC):

Let me check where `buildMatchWater` is called and what it receives.

- 14:39 `Grep`: buildMatchWater
**Agent** (14:39 UTC):

Let me see how previous reports measured "contact strip white" and the merged reference numbers.

- 14:39 `Bash`: Search for contact strip measurement
- 14:40 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/kit/meas.py
- 14:40 `Bash`: Run measurement kit on approved and merged frame
- 14:40 `Bash`: Capture restored state at 3.0 s with cost
- 14:41 `Bash`: Measure restored state
**Agent** (14:41 UTC):

Restored state measures close on most targets. Let me look at it next to the original and the merged "before".

- 14:41 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/kit/sbs.py
- 14:41 `Bash`: Make full and bank side-by-sides
- 14:41 `Bash`: Make full and bank side-by-sides
- 14:42 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/full_r0.png
- 14:42 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/bank_r0.png
- 14:42 `Bash`: Zoomed bank crop original vs restored canvas
- 14:42 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/bankz_r0.png
**Lead → agent** (14:42 UTC):

[Image: original 2368x520, displayed at 2000x439. Multiply coordinates by 1.18 to map to original image.]

- 14:42 `Bash`: Make gridded 2x quadrant tiles of the original
- 14:42 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/oq1.png
- 14:42 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/oq2.png
- 14:42 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/oq3.png
- 14:42 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/oq4.png
- 14:43 `Bash`: Tunnel crop original vs restored
- 14:43 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/tun_r0.png
- 14:43 `Write`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/kit/bubbles.py
- 14:43 `Bash`: Run bubble counter on three frames
**Agent** (14:44 UTC):

Far too many detections; the thresholds are too loose. Let me look at the overlay.

- 14:44 `Bash`: Crop approved overlay
- 14:44 `Read`: /tmp/claude-0/-home-user-bubblegame/030c89e6-794e-5e80-afe8-587a3d09f2db/scratchpad/bub/a_crop.png
- 14:44 `Bash`: Switch detector to per-sector contrast and rerun
**Agent** (14:44 UTC):

I'll read the user's new evidence package, then continue with absolute paths (the last command lost its working directory).

- 14:44 `Bash`: Read the user's evidence package instructions
- 14:44 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Screen4_Visual_Evidence_and_Assets/02_Seven_Annotated_Comparisons/01_Bubbles_DEEP_inside_tunnel.png
- 14:44 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Screen4_Visual_Evidence_and_Assets/02_Seven_Annotated_Comparisons/02_Waterline_and_partial_submersion.png
- 14:44 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Screen4_Visual_Evidence_and_Assets/02_Seven_Annotated_Comparisons/04_Foreground_foam_density.png
- 14:45 `Bash`: Per-sector contrast bubble detector rerun
- 14:45 `Bash`: List scratchpad contents
- 14:45 `Bash`: Create private work folders and move captures
- 14:46 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/Previews/WebDemo/screen4_round9_match/07_water_vfx_gate_fixes/scripts/meas.py
- 14:46 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/Previews/WebDemo/screen4_round9_match/07_water_vfx_gate_fixes/scripts/sbs.py
- 14:46 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/Previews/WebDemo/screen4_round9_match/07_water_vfx_gate_fixes/scripts/bubbles.py
- 14:46 `Bash`: Run per-sector bubble counter
- 14:47 `Bash`: Combine overlays for viewing
- 14:47 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/bub/cmp_ov.png
**Agent** (14:47 UTC):

The strict version misses most real bubbles and takes the coin and sock for bubbles. One looser setting, then I'll judge by eye.

- 14:47 `Bash`: Looser bubble detector run with overlay
- 14:48 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/bub8/cmp_ov.png
- 14:48 `Bash`: Make 3x gridded tiles of the original's mid ring
- 14:48 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/om1.png
- 14:48 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/om2.png
- 14:49 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/om3.png
- 14:49 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/om4.png
- 14:49 `Grep`: name = '[a-zA-Z0-9]*[Bb]ubble
- 14:49 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/WebDemo/src/tunnel_r7_hero.js
- 14:49 `Bash`: Find hero bubble settings under match
- 14:49 `Bash`: Read hero bubble list and match overrides
- 14:49 `Bash`: Read hide_probe header and debug hook
- 14:50 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/Previews/WebDemo/screen4_round9_match/07_water_vfx_gate_fixes/scripts/bubble_probe.cjs
- 14:50 `Bash`: Check waterline bubble attributes
- 14:50 `Bash`: Probe bubble visibility at 3.0 s
**Agent** (14:51 UTC):

96 of my 140 tunnel bubbles show at 3.0 s (centre 30, mid 61, walls 12), mostly small. Let me compare them zoomed against the original's mid ring.

- 14:51 `Bash`: Mid-tunnel crop original vs r0
- 14:51 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/mid_r0.png
- 14:51 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/Previews/WebDemo/screen4_round9_match/07_water_vfx_gate_fixes/scripts/specks.py
- 14:51 `Bash`: Count small white shapes by zone
- 14:51 `Bash`: Commit restored WIP checkpoint
**Agent** (14:52 UTC):

Checkpoint committed (`9bfd9f7`). Now the changes. A quick look at the geometry values the bubble field depends on (axis height, path frame cost).

- 14:52 `Bash`: Find axis height and track frame
- 14:52 `Bash`: Read track frame and world constants
- 14:52 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/WebDemo/src/tunnel_r9_match_water.js
**Agent** (14:52 UTC):

Now the builder itself.

- 14:52 `Bash`: Locate bubble builder bounds
- 14:53 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/bubbles_fn.js
- 14:54 `Bash`: Fix packing and splice new bubble builder
- 14:54 `Bash`: Check uHeroCam uniform presence in U
- 14:54 `Bash`: Locate lobe and swell look settings
**Agent** (14:54 UTC):

I'll try the lobe and swell values through the tune hook first (no rebuild), then fold them into the source. Build the bubble change now.

- 14:54 `Bash`: Build and write first tune file
- 14:54 `Bash`: Build bundle
- 14:54 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/t1.json
- 14:54 `Bash`: Capture iteration 1 at 3.0 s
- 14:55 `Bash`: Measure and compare iteration 1
- 14:55 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/full_i1.png
**Agent** (14:55 UTC):

The bank is now far too white (49% against 20.3%) and the centre's bubbles clump into a white blob. Let me look at the bank close up before adjusting.

- 14:55 `Bash`: Bank close-up iteration 1
- 14:55 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/bank_i1.png
**Lead → agent** (14:55 UTC):

[Image: original 2278x500, displayed at 2000x439. Multiply coordinates by 1.14 to map to original image.]

- 14:56 `Bash`: Locate lobe white compositing lines
- 14:56 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/WebDemo/src/tunnel_r9_match_water.js
- 14:56 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/WebDemo/src/tunnel_r9_match_water.js
- 14:56 `Bash`: Rebuild
- 14:56 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a76d8d522689c2f66/.wvtmp/t2.json
- 14:56 `Bash`: Capture, measure and crop iteration 2

_100 tool steps._
