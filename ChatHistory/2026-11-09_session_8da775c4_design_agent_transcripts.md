# Session 8da775c4, design agents

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## character-animation-specialist: Opening sequence lane girl12 (started 21:35 UTC)

**Lead → agent** (21:35 UTC):

You are resuming lane girl12 of Bubble Wash Kingdom (the existing three.js r170 game in WebDemo/). The coordinator (the main session, 8da775c4) is building other things in the main checkout at the same time, so you work ONLY in your own lane worktree.

## Where you work
- Your worktree: `/workspace/bubblegame_lanes/girl12` (branch `claude/lane-s12-girl-room-ac4e3449`, head 2828c3f2 = your lane's paused seq7 work merged with the newest integration head; it builds: `cd WebDemo && node build.mjs`). `cd` there in every command; never edit, build or commit in `/workspace/bubblegame` (the coordinator's checkout; read-only for you, e.g. baseline stills in `/workspace/bubblegame/Previews/WebDemo/six_scenes/14_real_game_preview_3849f5c8/stills/`).
- Every shell: `source Tools/bw_tools_env.sh` (Blender 5.2, ffmpeg, ImageMagick, the Python visual venv). Every browser run through `flock /tmp/bw_browser.lock` (4 CPUs, software WebGL; the coordinator is capturing too, so expect to wait for the lock; never run two browsers).
- Disk is tight (about 7 GB free): keep evidence as JPEG, small; delete scratch captures you no longer need; never run `git ls-tree --long` or anything else that downloads blobs.

## Read first (all in your worktree)
1. `WebDemo/tools/girl12/HANDOFF.md`: your lane's own handoff. It lists code that was WRITTEN BUT NEVER SEEN IN A FRAME (soft blue towel `softHang`, the yellow-towel `cradle`, the `tumble` with his face to the camera, her chest / head turned so her face reads 3/4 at the washer), its timing table and its exact next steps. Start there.
2. `Design/ReferencePacks/2026-11-09_Opening_References_from_user_session_8da775c4/README.md`: the user's NEW strict opening directive of today (condensed, with their own words) and three reference images. This is the brief you are serving. The per-screen targets stay `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/01-06` (864x1536).
3. `.claude/agents/character-animation-specialist.md` (your role) and the gap list quoted in the handoff (`Previews/.../14_real_game_preview_3849f5c8/README.md` in the main checkout).

## The goal
The opening, behind the existing candidate switch `seq7`, as ONE coherent animated story in the real game: girl doing laundry -> he hides in the basket -> she unknowingly lifts the towel he is in -> he slips out and tumbles into the washer -> the wash begins behind the round window -> the spin becomes the tunnel -> the camera follows him into Screen 5 and the live game takes over. THE GIRL MUST NEVER NOTICE HIM: no eye contact, her head and eyes on the towel in her hands and the washer's opening at every moment; the player sees him, she does not.

Work in this order, and finish and verify each stage before the next (each stage = build, capture, LOOK at every frame, fix, then commit and push the lane branch):
1. **Verify the paused seq7 work in frames** (handoff "Next steps" 1-4): nothing broken (cloth inside out, him hidden, eyes off his fur), her face 3/4 at the washer (Screen 2), the soft towel, him visible from the basket into the drum with a readable surprised tumble (Screen 3), the landing frame still good. Tune with `window.__bwSeq7` / the SEQ7 numbers.
2. **Her gaze**: at every captured moment from Laundry Toss to the door closing, check where her head points and where her eyes look; correct any moment where she appears to look at him (Screen 1 especially: in the approved image she leans toward the basket, so aim her head and eyes at the towel she pats / the washer, not at his face). Make a "gaze sheet" of the frames as the user's requested test.
3. **Screen 3 "Oops"**: the user's preferred beat: he shifts inside the lifted towel, slips free at the last moment at the door, eyes wide, nubs moving, a gentle spin as he falls in, a short slow-motion emphasis at the surprise then a quick playful tumble, the camera following him into the opening. Use what the lane already has (the warp, the cradle, the tumble); add only what is missing.
4. **Screen 4 "The wash begins"** (target `01_SCREEN4_THE_WASH_BEGINS_closeup.jpg` and `04_The_Wash_Begins.png`): the door closes, the drum turns, blue water with white foam swirls round him at chest height behind the glass, he bobs and tumbles with it with his FACE CLEARLY VISIBLE (smiling / excited, big eyes, nubs), purple, pink and cyan light in the drum, soap bubbles. Earlier findings: almost no water behind the glass and a flat blue band across his eyes at 7.9 s. Look at what `opening_six2_water.js` / the s56 lane's opening-water plan (`WebDemo/tools/s56/HANDOFF.md`) and the `seq7` code in `opening_six2_tunnel.js` (closed perforated drum back, iris, dissolve; never judged in frames) already do before writing anything new.
5. **The spin into the tunnel and the hand-over** (real 8.0-8.95 s and the live game after it): the drum accelerates, the water becomes a spiral current, the round interior stretches into the tunnel (glowing rings, perforated walls appearing), the camera follows him without wild shake, he is never seen popping or teleporting, the laundry room is never visible through the drum, and the live game's first frames continue the same picture. Capture a frame every 0.15 s from 7.6 s to 9.6 s and fix what breaks. The live game after the hand-over must be tested with the full candidate list INCLUDING `swim7` (below).
6. Only if the above are solid: Screen 1 / the room and washer polish where a same-camera comparison with the approved image shows a clear gap (the warm glowing window, shelves of folded pastel towels, bottles, bubbles, floor; the washer's paw medallion, gold trim and lights). Blender is allowed by the user (explicit permission today) for modelling / rigging / animation where it is the best approach: commit the .blend, its script and the exported GLB, and integrate it in the real game behind the switch. NO Tripo / Meshy / paid generation.

## Switch lists and capture
- Opening + game candidate: `S3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,coin6,hero6,water6,brush6,arch56,env6,tank6,fin6,hero7,swim7,seq7`. (`swim7` is new today: swipe up = swim burst, swipe down = dive, no jump gesture; code `src/swim7.js`. Do not change it.)
- Frames: `cd /workspace/bubblegame_lanes/girl12/WebDemo && S3=<list> TIMES=-1,1.2,2.4,3.3,... VW=432 VH=768 DPR=1 flock /tmp/bw_browser.lock node tools/six2/shots6.cjs $PWD <out>` (TIMES = real seconds after START; DPR=2 gives the references' 864x1536 for final evidence only). Use a scratch folder under `/tmp/claude-0/-workspace-bubblegame/8da775c4-25ee-5351-bb83-cb27189de9c1/scratchpad/girl12/` for working captures.
- A generic runner if you need custom stepping or the live game after the hand-over: `WebDemo/tools/journey/jrun.cjs` (see its header) and the examples `p_canvas.cjs`, `p_swim_motion.cjs` beside it.

## Rules
- Everything new is gated on `seq7`; without `seq7` the opening must be pixel-identical: prove it at the end with `bash WebDemo/tools/journey/identity.sh a48cc407 <out>` adapted, or the handoff's step 4 (plain list, TIMES=2.4,5.0 against the baseline stills). Report the pixel counts.
- You own: `src/opening_six2.js`, `opening_six2_girl12.js`, `opening_six2_room.js`, `opening_six2_tunnel.js`, `opening_six2_water.js` (if it exists), `opening_tripo3.js`, and in `opening3d.js` the hero face / the girl's eyelids / the drum. Do NOT edit `game.js`, `swim7.js`, `journey8.js`, `s56_tunnel.js`, `s56_arch.js`, `s56_*.js`, `level1*.js` (the coordinator is editing them now). If you need a hook in one of them, describe the exact lines in your report instead.
- Gameplay untouched; private random generators only (never the game's seeded Math.random); never call anything approved; revert anything that looks worse than before.
- Commits: sources, tools and small evidence on the lane branch, pushed with `git push origin HEAD:refs/heads/claude/lane-s12-girl-room-ac4e3449` (plain push, never force). Do NOT commit `WebDemo/game.bundle.js`, `WebDemo/index.html`, `WebDemo/artifact.html` or `WebDemo/artifact-models/` (run `git checkout -- WebDemo/game.bundle.js WebDemo/index.html WebDemo/artifact.html WebDemo/artifact-models` before each commit; the coordinator rebuilds when merging). Never put a key or token in a file.
- Evidence goes in `WebDemo/tools/girl12/evidence_8da775c4/` in your worktree (JPEG, under about 12 MB in total): per screen a sheet "approved | before (baseline still) | after", the gaze sheet, the 7.6-9.6 s transition strip. Update `WebDemo/tools/girl12/HANDOFF.md` at the end (done / verified in frames / still different / next).

## What to return
A short report (plain text, no pleasantries): the lane commit hash you pushed; per stage 1-6 whether it is done and VERIFIED IN FRAMES, partly done, or not started; for each screen the largest remaining differences from the approved image; the identity result; the evidence file paths; any hook you need in the coordinator's files. Be exact about what was not verified.

- 21:35 `Bash`: Check lane worktree state and disk
- 21:35 `Read`: /workspace/bubblegame_lanes/girl12/WebDemo/tools/girl12/HANDOFF.md
- 21:35 `Read`: /workspace/bubblegame_lanes/girl12/Design/ReferencePacks/2026-11-09_Opening_References_from_user_session_8da775c4/README.md
- 21:35 `Bash`: Read role file and list sources and tools
- 21:35 `Read`: /workspace/bubblegame_lanes/girl12/WebDemo/src/opening_six2.js
- 21:35 `Read`: /workspace/bubblegame_lanes/girl12/WebDemo/src/opening_six2_girl12.js
- 21:35 `Read`: /workspace/bubblegame_lanes/girl12/WebDemo/src/opening_six2_tunnel.js
- 21:35 `Read`: /workspace/bubblegame_lanes/girl12/WebDemo/src/opening_six2_water.js
- 21:35 `Bash`: Outline opening3d.js functions and seq7 mentions
**Agent** (21:35 UTC):

You've hit your 5-hour limit · resets 2am (UTC)


_9 tool steps._
