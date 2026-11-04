# Hand-off: where Bubble Wash Kingdom stands (4 November 2026: round 4 reconstruction, `?s3=round4`)

Read this first when you continue in a new Claude conversation.

## Newest (4 November, 15:00 UTC onward): the new Claude account, branch `ccr-4bb5eb4c-md7eyt`

- **Starts from** the earlier account's last save, `1199d7b` on `ccr-8ca1fe92-d6t2bm` (merged in; that session stopped at
  its usage limit at about 14:33, partway through Round 5). The latest finished Round 4 is `21c054c`.
- **Tools:** `Tools/cloud_env_setup.sh` installs everything (paste it into the environment's Setup script). Plugin and tool
  status, and Tripo: `Tools/DEV_TOOLS.md`.
- **Tripo is connected** on this session's machine: region ov. Two jobs so far (paw coin used; brush tested, not used; 120 credits each); **balance 760**. Ask before generating.
- **Round 5 (`?s3=round5`, test, not approved), first frame pass:** the washed-out look is fixed (its cause was the
  vortex glowing from 9 units ahead into the bloom), the tunnel's centre is luminous and centred with its ring frames back,
  the camera is further back, and the foam is white over turquoise. Evidence, honest numbers and what is still different:
  `Previews/WebDemo/screen4_round5_reconstruction/README.md`. Round 4 and the normal game are pixel-identical to `21c054c`.
- **Pass 2 (evening):** Tripo P2 paw coin in the game (120 credits; balance 880), water rebuilt around blue, splash crests.
- **Next:** stage the hero moment (coins, gem, sock, brushes) as in the approved picture, more splashes and sparkles in the
  tunnel, and the pink character's soft fur edge.

## Newest (4 November, 12:30 UTC onward): restored on the second Claude account, branch `ccr-8ca1fe92-d6t2bm`

- **Recovered:** `ccr-b6199007-gvhqim` at `fa4e2fc` ("Chat history: latest export (round 4 reconstruction session)"),
  the newest work on GitHub. `ccr-8ca1fe92-d6t2bm` starts exactly there. `ccr-00ffba88-l1mwa0`, not listed below, is an
  older parallel attempt from 3 November evening (a painted-layer test, `painted_layer.js`) that the `?s3=paint` work
  replaced; nothing in it is newer.
- **The rebuild matches the commit:** `cd WebDemo && npm install && node build.mjs` gives a `game.bundle.js` identical
  to the committed one.
- **Tools:** installed by the user's environment setup script in `~/.bubblewash-tools/`. Run
  `source Tools/bw_tools_env.sh` first. Status of each tool, sign-ins and plugins: `Tools/DEV_TOOLS.md`.
- **Saving:** `bash Tools/save_now.sh "<message>"` after each finished task; `Tools/autosave.sh` every 5 minutes in the
  background. Both print the branch, commit, whether GitHub really has it, and the files saved.
- **This session's chat history:** `ChatHistory/2026-11-04_round4_restore_and_continue_session.md`.
- **Round 4, second pass (`?s3=round4`, test, not approved):** your three priorities, in order.
  - Water and splashes: real 3D soap bubbles on the foam heaps, thick irregular splash sheets, heavier spray, turquoise water.
  - Brushes: Round 4's brushes are now the fluffy shell-fur brushes (`WebDemo/src/fluffy_brush.js`); same places, spin
    and knocks. `?s3=round4,fluffy` was the first trial switch and is now the same as `?s3=round4`.
  - Tunnel: a deeper blue lining and softer ring glow.
  - Evidence, numbers and the honest score (about 7.5/10; the composition is the biggest remaining gap):
    `Previews/WebDemo/screen4_round4_water_brushes/README.md`.
  - The normal game, Round 2 and Round 3 are pixel-identical to `fa4e2fc`.
- **3D generators: Tripo only** (your decision, 4 November).
  - Meshy is not used: removed from `.mcp.json`, never call its tools, never ask for its key. No Meshy credits were spent.
  - Tripo is installed but not signed in yet; sign-in steps and dry-run cost estimates are in `Tools/DEV_TOOLS.md`.
  - Ask before spending any credits.
- **img2threejs (a Claude Code skill) was tried on the brush and stopped:** it produced smooth rings. Why, and what replaced it:
  `Design/Img2ThreejsTrials/README.md`. Reinstall in a new session only if wanted:
  `npx --yes img2threejs@latest install`.
- **Next, if you want it:** the composition. The approved picture looks straight into a centred bright vortex with the
  coins, gem and sock round it; the game camera rides behind the character. Changing that means changing the Round 4
  camera and the collectible layout, which needs your go-ahead.

## Where everything is

- **Repository:** `josiahscalia5-dev/bubblegame`. It is **public**: anyone can read it, including the chat history.
- **Branches:**

  | Branch | What it holds |
  |---|---|
  | `ccr-8ca1fe92-d6t2bm` | **Newest (4 November, second account):** `ccr-b6199007-gvhqim` plus the tool restore for this environment and the continued round 4. Not merged. |
  | `ccr-b6199007-gvhqim` | **4 November (first account):** `ccr-4e2b86d7-kqpei8` plus the finished round 2, and then **round 3** (`?s3=round3`) and **round 4** (`?s3=round4`, the scenery reconstruction), the tools (Blender, OpenCV, scikit-image, glTF Transform, validator, Tripo CLI, Meshy MCP config), the comparison workflow and the project skill. Not merged. |
  | `ccr-4e2b86d7-kqpei8` | **Test versions for review (3–4 November):** the approved Screen 3 artwork as the Tap to Start screen, then every `?s3=` test below (newest: `?s3=round2`, work in progress there), on top of `ccr-68cd26f5-4t8etp`. Not merged. |
  | `ccr-68cd26f5-4t8etp` | **Test version for review (3 November, morning):** the Screen 3 opening look (`WebDemo/src/opening.js`) on top of `ccr-590365bd-e5p8xt`. Not merged; see `Design/SCREEN3_OPENING_MATCH.md`. |
  | `ccr-590365bd-e5p8xt` | **The working original** (untouched by the test version). Everything below, plus the four Meshy entrance decorations (water towers, gear wheels, pipe elbows, crown trim), the duck helper removed, and the previous tunnel restored with cyan rings and pink panels. The Meshy tunnel liner was tried and is disabled; commit `46c034c` is the backup with it in place. |
  | `ccr-052e5531-zna8s3` | This evening's Screen 3 polish (castle colours, brushes, rails, tunnel, exit light, camera, duck helper, side machinery). The branch above builds on it. |
  | `ccr-ce4e9217-j1l0vl` | The afternoon session's work (3D path, water, fur, socks, recordings, Meshy asset review). The branch above builds on it. |
  | `ccr-e6a125ac-2krpmp` | The head of **PR #1** (draft, do not merge yet). It holds the afternoon work, **not** this evening's commits. Moving them there needs the user's go-ahead. |
  | `claude/new-session-oth0dd` | PR #1's base. At 20:17 on 2 November another session pushed "Build Screens 1-2 and 5-12" (`ea70999`) here. PR #1 **conflicts** with it in 9 files: `CloudBuild.cs`, `Level1SceneBuilder.cs`, `MaterialSet.cs`, `ScreenComposition.cs`, `Collectible.cs`, `GameHud.cs`, `Waterfall.shader` (both sides added one), `Design/VISUAL_DIFFERENCES.md` and `README.md`. The conflicts are not resolved: that needs the user's go-ahead. `WebDemo/` does not conflict. |

- **Reference packs:** [`Design/ReferencePacks/`](Design/ReferencePacks). What you sent for a round of work, as delivered: the approved and current frames, the annotated differences and your prompts.
- **Chat history:** [`ChatHistory/`](ChatHistory), one file per session, exported with `Tools/export_chat_history.py`.
  - Newest: `2026-11-04_screen4_round2_and_round3_session.md` (4 November: finishing round 2, then round 3, the tools, the model checks and the screen-matcher skill).
  - Before it: `2026-11-03_screen3_models_and_scenery_session.md` (3–4 November, second session, which also holds round 2's start):
    - the approved-artwork opening and Phase A;
    - the five Screen 3 models, the slide edges and the cinematic camera;
    - the A2 tunnel inspection and the painted-layer start.
  - Before it: `2026-11-03_screen3_opening_and_rollers_session.md` (3 November: the opening look, the soap suds and the roller candidates).
  - The exporter now also keeps messages sent with pictures attached, which it used to skip.
  - Before it, `2026-11-02_decor_and_tunnel_session.md` (2–3 November: the entrance decorations, the tunnel liner and its diagnosis, the restored tunnel). Before it, `2026-11-02_screen3_polish_session.md` (castle colours, machinery, the duck helper and the side machinery).
- **Not in the repository on purpose:** `WebDemo/node_modules/` (run `npm install`), `WebDemo/artifact-models/` (rebuilt by `node build.mjs`) and `WebDemo/package-lock.json` (the two packages are pinned in `package.json`).
- **Visual target:** [`Design/ApprovedScreens/`](Design/ApprovedScreens), the 12 approved screens (`x3_` files are 3× crops of Screens 3 and 4).
- **Meshy models as delivered:** [`Design/MeshyDeliveries/`](Design/MeshyDeliveries), with an index of where each is used.
- **Two Claude accounts:** the user works from two accounts. Each published page is private to the account that published it.

## Latest (4 November, afternoon): round 4, the approved Screen 4's scenery reconstructed in 3D, `?s3=round4` (test, not approved)

- **What the user asked,** after watching the round 3 video:
  - small tweaks are not enough: rebuild the scenery toward the approved Screen 4 as real moving 3D, never a flat
    picture;
  - the tunnel geometry, light and depth;
  - thick white splashes and rich turquoise water;
  - big fluffy brushes framing the sides;
  - the camera composition, and the coins, gem and bubbles;
  - a separate switch, a video and comparisons with the existing version;
  - save to GitHub very often, chat history included.
- **Round 4** (`WebDemo/src/tunnel_r4.js`, on top of round 3, which is unchanged):
  - a new deep electric-blue tunnel lining with real 3D cyan rings and gold trims, and a 4 m straighter start to the path
    (`track.js` `opts.straight`);
  - pom-pom brushes (`tunnel_s4.js` `r4PomPom`) that slide out of the walls as you approach;
  - a splash crown of curving water sheets;
  - rebuilt water (no tile pattern: turquoise, rolling crests, white froth);
  - a whirlpool at the tunnel's heart and a richer drum grade.
- Evidence and honest numbers: `Previews/WebDemo/screen4_round4_reconstruction/README.md`.
- **Checks:** controls, rules, ride-through (all lanes reach the end) and frame cost all pass, and the tunnel costs less
  than round 3.
- **Saving:** `Tools/autosave.sh` exports the chat history (`ChatHistory/2026-11-04_screen4_round2_and_round3_session.md`)
  and commits and pushes every 5 minutes. The cloud environment stops background jobs after 2 hours, so restart it then.

## Earlier (4 November, day): round 3, toward the approved Screen 4 in the real 3D game, `?s3=round3` (test, not approved)

- **What the user asked:**
  - match the approved Screen 4 (and Screen 3) as closely as possible in the real, playable 3D game, aiming at 90–95%
    where achievable, with evidence;
  - **never** use the approved pictures as flat backdrops;
  - keep the pink character, controls, mission, opening and gameplay;
  - set up and verify Blender, OpenCV, scikit-image, ImageMagick, glTF Transform, the Khronos validator, Tripo CLI and
    Meshy MCP;
  - check A1 and A2, and that the tunnel can really be ridden through;
  - save a project skill;
  - spend no credits without asking.
- **The user's reference package** (approved targets, crops, current-game diagnosis, asset sheets):
  `Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/`. Read its `00_READ_ME_FIRST.txt`.
- **Round 3** (on top of round 2):
  - foam heaps and white spray round the character;
  - white-water bands round a deep royal-blue drum;
  - cyan, blue, pink and lavender rings;
  - azure-turquoise foamy water;
  - pink-white brushes with royal-blue centres;
  - purple gem;
  - coins, gem and sock arranged as in the approved picture;
  - soap bubbles streaming past;
  - the drum camera aimed a little higher;
  - a live-3D opening (the five Meshy opening models, icy edges, cinematic camera) instead of round 2's painted picture.
  - Settings: `ROUND3` in `WebDemo/src/tunnel_r3.js`.
  - Evidence and measures: `Previews/WebDemo/screen4_round3_test/README.md`.
- **Unchanged:** the normal game, `?s3=round2` and `?s3=paint,tunnel` render pixel-identical to the build before
  round 3. This was checked on the 3D canvas, because page screenshots differ run to run in the HUD's CSS fades.
- **Note for the user's decision:** the normal game on this test branch still shows the approved Screen 3 picture at Tap
  to Start (`#openingArt`, from the 3 November test). Round 3 does not. Ask whether to remove it from the normal game too.
- **Models:**
  - A1 (`s3_entrance.glb`) had 48 validator errors (non-unit normals). It is repaired: 0 errors, same mesh.
  - `s3_brush.glb` had one alignment error; it is repaired.
  - A2 (Tripo) is valid but forced-perspective and closed at the back (9% of rays get through). It is not used.
  - The drum is truly traversable: no geometry in the ride space, and all lanes and weaving runs reach the end.
  - Everything is in `screen4_round3_test/model_checks/`.
- **Tools:** status by account, session, signed in and working is in `Tools/DEV_TOOLS.md`. Install them in a fresh
  session with `bash Tools/dev_tools_setup.sh`.
  - Tripo is waiting for the user's browser sign-in.
  - Meshy needs `MESHY_API_KEY` as an environment secret, then a new session.
- **Skill:** `.claude/skills/bubble-wash-screen-matcher/SKILL.md` ("Bubble Wash Exact Screen Matcher") holds the whole
  capture, measure, fix, check and evidence loop.

## Earlier (4 November, night): round 2, the tunnel polished and the Screen 4 controls, `?s3=round2` (test, not approved)

- **What the user asked:** keep the painted opening and the new tunnel as the foundation and polish the inside tunnel:
  - colour and light that is never washed out;
  - golden paw coins;
  - Bubble Blast, Turbo Spin and pause;
  - hearts that brushes take;
  - neat, readable collectibles, clean brushes and less clutter.
  - Then the Laundry Toss intro, but only after evidence and a list of missing assets. **The intro is not started.**
- **`?s3=round2`** turns on the painted opening, the tunnel and this round. `?s3=paint,tunnel` is still exactly last round, and the normal game is unchanged.
- **Code:**
  - `tunnel_s4.js` (the `ROUND2` settings and `round2Light`): ring colours with gold, an exit vortex shader instead of the white rays, a tunnel-only grade (vibrance and highlight roll-off), lace foam and lane guides on the water, a pink warning glow down a brush's lane, brush colour smoothing and sheen, fewer bubbles, gold gears that glow.
  - `game.js` (`R2`, `R2_RULES`, `stepRound2`, `useBlast`, `useTurbo`, `setPaused`, `restartRound2`): hearts, the power-ups, pause, the tidy collectible layout, halos on socks, collectibles shrinking once passed, the old drum rollers hidden.
  - `paw_coin.js`: the 3D embossed paw coin.
  - `page.html`: the `#r2Hud` template, added to the page only with the switch.
- **Rules:**
  - A knock takes one heart, with a 1 s guard. At 0 hearts the game shows "Out of hearts!" and returns to Tap to Start after 1.4 s, with 5 hearts and 3 of each power-up.
  - Bubble Blast (3): for 3 s, brushes up to 13 m ahead are pushed back to the wall.
  - Turbo Spin (3): 2.5 s at ×1.45 speed, spinning, and brushes cannot knock the mascot.
  - Pause button, or the P or Escape key. B is Bubble Blast and T is Turbo Spin.
- **The end of a run** still loops back to the slide (`loopRun`), because Screens 5 onward are not built. It is not a test reset.
- **Evidence:** `Previews/WebDemo/screen4_round2_test/` (final video, sheets 01–05, checks, frame cost, score).
- **Finished on 4 November, night (branch `ccr-b6199007-gvhqim`):**
  - **The brush warning now shows.** It had three faults: it was full only where the brush hides it, it was mixed in under the reflections and foam (it came out lavender), and the slide's water sheet covered the drum's over the first brushes. The fix starts it 7.5 m before a brush (full from 3 m), lays the pink on last, and gives the drum's water a polygon offset. Details in that folder's README.
  - **Final video** `bubblewash_round2_tunnel_final.mp4` and **sheets** 01–05 from its real frames.
  - **Functional checks** all pass (`checks_functional.txt`); no console errors.
  - **Unchanged:** the normal game and `?s3=paint,tunnel` render pixel-identical to the build before the fix (at 2, 11 and 20 m).
  - **Frame cost** (`frame_cost.json`): 190 draw calls and 1.04 M triangles at Tap to Start, at most 181 calls and 1.27 M in the tunnel. That is 13–54 fewer calls than last round, and still below the normal game's Tap to Start (322, 1.91 M). Frame times could not be measured with software WebGL.
  - **Against the approved Screen 4:** structure is the closest yet (SSIM 0.087, edges 0.125, against 0.075 and 0.103 last round). The rings' colour is closer (ΔE 11.7 against 15.5); the right brush is further off (26.8 against 19.3), because it was made lighter periwinkle and the approved one is royal blue.
  - **Honest score: about 7/10** (last round 6.5–7). Still missing against the painting: the dense sparkly foam swirl, the near-camera coin, spray and big bubbles, the left mop brush's size and place, and whiter churned water.
  - **Possible next steps (not started, waiting on the user):** the right brushes back toward royal blue; more foam spray and near bubbles; then the Laundry Toss intro once its reference pictures arrive.
- **Missing assets for the intro:** `Design/LAUNDRY_TOSS_INTRO_ASSETS.md`. The intro reference pictures were never uploaded to this session; ask for them.
- **Auto-save:** `Tools/autosave.sh` (started at the user's request) exports the chat history and commits and pushes every 5 minutes while a session is running.

## Earlier (4 November): the inside tunnel rebuilt toward the approved Screen 4, `?s3=tunnel` (test, not approved)

- **The user likes the painted opening (`?s3=paint`)** but wants the inside tunnel matched to Screen 4 before anything becomes permanent. Nothing is merged.
- **`?s3=tunnel` (`WebDemo/src/tunnel_s4.js`)**; combine as `?s3=paint,tunnel` for the full run.
  - **Scenery:** a ring vortex (38 glowing rings), deep blue and violet drum walls, the pink panels and frames hidden, 46 soap-film bubbles, and foam around the mascot in the drum.
  - **Brushes:** nine spinning brushes from the Number 1 brush model. The bracket is left out, the mesh is simplified to 51.5 k triangles, the left ones are pink, and each is drawn only near the mascot.
  - **Hazard:** the six low brushes knock a mascot in their outer lane back to the middle (`game.js` `bumpMascot`, used only by this switch).
- **Evidence:** `Previews/WebDemo/screen4_tunnel_test/` (comparisons with Screen 3 and Screen 4, through the portal, 11 s video, measurements).
  - Honest score about 6.5–7 against Screen 4 (protected tunnel about 5).
- **Checks:** before the tunnel identical; in the tunnel, knocks change the route as designed; normal game pixel-identical to `591db28`; no console errors; tunnel 1.12 M triangles and 142 calls.

## Earlier (3 November, night): the approved painting as the real game's scenery, `?s3=paint` (test, not approved)

- **The user wants the opening's scenery to look exactly like the approved screen while the character heads into the washing machine.**
- **`?s3=paint` does that with the painting itself**, projected into 3D at several depths (castle and door, brush, machinery, towers, side water on the ground under the slide's hills). The pink character, slide, water under it, foam, coins and icy edges are live in front, and the door's centre shows the real tunnel.
  - Painting pixels skip the game's grade and tone mapping (an alpha mark read by patched grade and output passes, only with this switch), so their colours are exact.
  - The banner and panel areas fade with the HTML ones. The painting hands over to the code-built washer door and the Number 4 castle at camera z −12 → −6. Stretched cells over the slide's crest are torn instead of stretched.
- **Evidence:** `Previews/WebDemo/screen3_paint_test/` (comparison, first two seconds, through the door, video, region measurements).
  - About 9/10 at Tap to Start, about 8 in the first two seconds.
  - Average structural similarity 0.56, against 0.09 for the 3D version.
- **Checks:** controls, collectibles and the 13 s seeded run identical; tunnel unchanged; normal game pixel-identical to `591db28`.

## Earlier (3 November, end of the second session): where things stood

- **The game is as it was at `2e11011`.** The normal game, with no switches, is the approved-artwork opening of `591db28`.
  - What it looks like now: `Previews/WebDemo/bubblewash_game_now.png` and `bubblewash_game_now.mp4` (9 s of real gameplay).
- **Saved test switches, none approved as final:** `?s3=all` (`ad518e3`), `?s3=all,edges` (`4711680`), `?s3=all,edges,cine` (`2e11011`). The user approved the first two as checkpoints only.
- **A2 tunnel (Tripo):** received, then the request was withdrawn. The models are kept in `Design/TripoDeliveries/A2Tunnel/` with the inspection notes; they are forced-perspective and not traversable as delivered.
- **The user asked whether the exact approved screen can be built.**
  - The answer given: a live 3D game cannot match a painting exactly, and this session cannot generate 3D models or images.
  - The recommendation: painted far layers (castle, towers, door) in the 3D scene, with the near scenery staying real 3D. The user said yes.
- **Painted-layer test (`?s3=paint`): started, not finished, not in the game.**
  - Done so far: the backdrop texture `WebDemo/ui/s3_paint_backdrop.png`, made by `WebDemo/tools/screen3/make_paint_backdrop.py` from the approved image (the original untouched). The texture fills the spots behind the 3D brush, machinery and big bubble, opens the door's centre, and clears under the HUD.
  - **Problem:** the colour pre-inversion for the game's grade and tone mapping is wrong for some bright and saturated pixels (99th percentile error about 105 levels). Fix it before use, for example by inverting the grade in the shader instead.
  - **Plan:** a camera-projected grid at the door's depth (z ≈ 2.35), depth-tested, behind the 3D slide, water and mascot; the banner area fades with the HTML banner; the painting fades out as the camera nears the door (camera z −12 → −6), revealing the code-built washer door and the Number 4 castle; the brush, machinery and bubbles stay 3D.
- **Test tools:** `WebDemo/tools/screen3/` (see its README).
- **Chat history:** `ChatHistory/2026-11-03_screen3_models_and_scenery_session.md`.

## Earlier (3 November, late night): opening-only cinematic camera behind `?s3=all,edges,cine` (test, not approved)

- **The user approved `4711680` (`?s3=all,edges`, 6.5/10) as a saved experimental checkpoint only.** No new Meshy models yet.
- **`cine`:** a separate render camera fitted to the approved perspective, the gameplay pose plus 0.10 m up, 0.82 m forward, 0.3° down and a 41.5° view. It blends back to the untouched gameplay camera over 0.9 s after the tap.
  - Code: `setupCine` in `screen3_models.js`. `game.js` passes its render pass to the opening layer.
- **Result:** about 7/10, against 6.5. The mascot, slide and door now line up structurally (edge correlation in that region 0.115 → 0.295).
- **Finding:** the camera was not the main barrier. The remaining gaps are the castle's narrow arch (towers off-screen), the entrance's small opening, its colours and the protected tunnel's curve, plus painted effects and the removed duck.
- **Evidence:** `Previews/WebDemo/screen3_cine_test/`.
- **Checks:** controls, collectibles and the 13 s seeded run identical; tunnel pixel-identical; `?s3=all,edges` unchanged.

## Earlier (3 November, night): slide-edge restyle behind `?s3=all,edges` (test, not approved)

- **The user approved `ad518e3` (`?s3=all`, the five assets) as a saved experimental checkpoint only.** It is not the final Screen 3, and nothing is merged.
- **`edges`** (not part of `all`):
  - the tall pale slide walls and the gold tube rail become low icy rims with foam spilling over;
  - the brush stands at the approved size and place (scale 1.51 at z −4.9);
  - the bubble film is stronger;
  - the opening-only scenery is hidden inside the tunnel.
- **Not adopted:** `?phaseA` measured worse in the slide region.
- **Evidence:** `Previews/WebDemo/screen3_edges_test/` (region-by-region colour and structure, scores, checks, tools).
- **Honest score:** the whole opening is about 6.5/10, against 6 for the five-asset version.
  - Blocked from about 8 by the protected camera and narrow slide, the tunnel's curve, and the castle's narrow arch and the entrance's small opening.
  - A castle variant (arch about 0.75 of the tower spacing) and an entrance variant (opening at least 70 % of the frame) would give about 7–7.5. Beyond that, the opening camera would have to change, which needs the user's explicit decision.

## Earlier (3 November, evening): the five Screen 3 assets in the real 3D opening behind `?s3` (saved, not approved)

- **Code:** `WebDemo/src/screen3_models.js`, called from `opening.js` loadExtras.
  - Switches: `?s3=castle,entrance,machinery,brush,bubbles`, or `?s3=all`.
  - Without them nothing is downloaded and the page is unchanged.
  - Models: `WebDemo/models/s3_*.glb`, byte-identical to `Design/MeshyDeliveries/Screen3Models/`. The castle is the newest delivery.
- **Evidence:**
  - `Previews/WebDemo/screen3_five_assets/` (approved, previous and new, plus the first 2 s);
  - `Previews/WebDemo/screen3_castle_test/` (stage 1).
- **Honest score:** the whole opening is about 6/10, against 5/10 before.
  - Limits: lane clearance on the narrow slide, the slide's tall walls, the protected tunnel's curve, and the castle's narrow arch and the entrance's small opening.
  - The README lists what would raise it.
- **Checks:**
  - same seed and inputs as `591db28`: controls, swipes, jump, collectibles and the 13 s seeded run identical;
  - tunnel 3D pixel-identical;
  - no console errors.
- **Waiting on the user:** approval, and whether to order the castle and entrance variants or restyle the slide's walls.

## Earlier (3 November, midday): Phase A castle-and-water test behind `?phaseA` (saved, not approved, not merged)

- **Code:** `WebDemo/src/phase_a.js`, called from `opening.js`. The game passes it the castle and the water sheets.
  - It runs only with `?phaseA`. Without it the page is pixel-identical to `591db28` (the approved-artwork opening).
- **Evidence:** see `Previews/WebDemo/phase_a_castle_water/README.md`.
  - Castle colour difference to the approved image: 11.2 → 3.5.
  - Water: white lines and foam 2 % → 27 % (approved 27 %).
- **Paused and not built:** the `?polish` work (live water band below the artwork, door-opens reveal), saved as a git stash in that session. The user redirected to scene structure.
- **Next, at the user's request:** rebuild the opening's scenery structure (rollers, machinery, door, castle, bubbles) with existing Meshy assets, in a separate test switch.

## Earlier (3 November, late morning): the approved artwork as the opening screen, test version waiting for approval

- **Branch `ccr-4e2b86d7-kqpei8`** (this session). It starts from the test version below (`6116703`), which stays on `ccr-68cd26f5-4t8etp` as the restore point.
  - The tag `checkpoint/before-opening-artwork` is local only; GitHub refused tag pushes from this session.
  - The working original (`ccr-590365bd-e5p8xt`) is untouched. Nothing is merged.
- **What it is:** the approved Screen 3 (`BWK_01`, unedited, duck included) shown as the Tap to Start screen.
  - It fades into the live 3D game with the existing 0.45 s fade.
  - Taps pass through it, and the settings button stays clickable over the painted gear.
  - `?classic` shows the original opening.
- **Read:** section 2c of `Design/SCREEN3_OPENING_MATCH.md`. Evidence is in `Previews/WebDemo/opening_artwork/`.
- **Duck:** you declined the patch-filled copies (blurry, patchy). Do not retry patch-based removal.
- **Phones taller than 1:2:** the whole artwork shows from the top, with a band in its border colour below it.
- **The published page:** not republished. `artifact.html` now references `ui/approved_screen3.png`, so a republish must include that file.
- **Waiting on the user:** approval of this test before anything further.

## Earlier (3 November, morning): Screen 3 opening look, test version waiting for approval

- **Branch `ccr-68cd26f5-4t8etp`** (this session). It starts from `ccr-590365bd-e5p8xt` (`b75f88c`), which stays as the working original. Nothing is merged.
- **What it is:** one cosmetic module, `WebDemo/src/opening.js`, plus small additive hooks in `game.js` and `shaders.js`.
  - The gold washer-door rim, violet seal and cyan rings at the portal, with a lavender wall facing over the castle's pastel funnel.
  - Bubbly foam, splashes and glossy bubbles around the mascot; bubble-lace foam and whitewater on the slide.
  - Soap bubbles at three depths.
  - Brushes: the extra roller beside the portal hidden, the right roller turned to show its fluffy side, the side machinery larger (1.22 m from the lanes).
  - Glassy aqua flume walls, a slightly more upright mascot with crisper fur, and an opening-only grade.
- **Proof:** a seeded run is frame-for-frame identical (position, lane, speed, jumps, camera, pickups). The tunnel renders pixel-identical with the mascot presentation off, and `?classic` is pixel-identical to the original.
- **Read:** `Design/SCREEN3_OPENING_MATCH.md`, which has the checklist, the roller answers, the asset inventory, what could not be matched, and the tests. Evidence is in `Previews/WebDemo/opening_match/`.
- **Second round, same branch:**
  - **Soap suds** against the mascot's lower body, matched to the user's approved close-up (section 2b of the write-up).
  - **Two Meshy roller candidates** (`Design/MeshyDeliveries/CompactRollers/`), tested one at a time in the right-hand slot with `?roller=1` or `?roller=2`. They are off by default.
    - Recommended: No. 1.
    - Neither can spin safely as delivered (gold welded to the drum), so both stand still in the test.
    - Before using No. 1: a 1024 px web copy, because it adds 42.7 MB of GPU texture memory.
    - See `Design/SCREEN3_ROLLER_CANDIDATES.md`.
- **Waiting on the user:**
  - approval or changes;
  - whether to use roller No. 1 still, or wait for the separated Meshy parts;
  - whether to bring the duck helper back (still removed, as asked);
  - whether to tint the coins;
  - whether to order the optional left-brush Meshy model described in the write-up.

## Current focus: Screen 3, browser demo (`WebDemo/`)

The user wants Screen 3 to look and move right before the remaining screens. The approved Screen 3 is the target.

- **Play:** https://claude.ai/artifact/1zbgcsX6AF7HTNJMesKmiX (version 3, 3 November: the restored tunnel with cyan rings and pink panels, no helper, the Meshy entrance decor). It was published from the account that ran tonight's session, as an update of that account's earlier Bubble Wash Kingdom page, so the link stayed the same.
  - Older versions: https://claude.ai/artifact/F27yfpA3Fp5a1mJWbDCTkb (this evening) and https://claude.ai/artifact/Nq5qbxwgsk5jKEMnX6ESKC (afternoon).
  - All are private until shared from their Share menu.
  - Locally: `cd WebDemo && python3 -m http.server`.
- **Latest round (3 November): the previous tunnel restored, with cyan rings and pink panels**
  - At the user's request the Meshy tunnel liner is disabled. Its files stay. The tunnel is the Meshy drum over its full length again, with its light rings and gold wall gears (as in `d44d687`).
  - **Added in code** (`WebDemo/src/scenery.js`):
    - Glowing rings in electric cyan, two tones, with bulbs and soft halos.
    - 98 glowing pink light panels in gold frames on the upper walls, clear of the water and the gears.
    - A slow wave of light running down the tunnel.
  - **Kept:** no helper; the start panels fade after the tap; the four entrance decorations.
  - **The ride is unchanged.** Played with the same seed on this build and on `d44d687`, every frame's position, height, lane, speed, jumps and camera are identical. Only which coins get picked up varies: three.js uses the random-number generator for object IDs, so adding or removing objects shifts the coins' random bobbing.
  - **Clearance:** the mascot's body reaches 1.98 m from the axis at most, even jumping in every lane. The drum's ribs are at 2.1 m, the panels at 2.3 m.
- **The round before (night of 2–3 November): the Meshy tunnel interior liner (since disabled), and no helper**
  - **The liner:** four copies of the Recommended liner (`Design/MeshyDeliveries/TunnelInterior/`, `WebDemo/src/liner.js`) line the drum, bent along the ride's path. The castle, portal and the drum's mouth are unchanged. That folder's README explains the radius remap.
  - **The old drum:** not drawn behind the liner (`trimDrum`). Its ribs and walls cut through the liner and caused the dark, broken-looking patches.
  - **Cracks:** the Meshy model has cracks of its own. A deep-blue backing shows through them.
  - **Lights:** the liner's painted cyan bands and pink panels really glow (`LINER_GLOW`), plus emissive cyan and white rings every 2 m, fading into deep blue with distance. The walls are dimmer than outdoors, so the blue and gold are not washed out.
  - **Clearance:** the nearest liner surface is 2.06 m from the axis. The mascot's body reaches 1.98 m at most, even jumping in every lane (`window.__bw.clearanceTrace`).
  - **Load:** fewer triangles and draw calls than before. At Tap to Start, 1.82 M triangles and 219 draw calls, against 1.92 M and 287.
  - **Duck helper:** removed at the user's request (model, code, splashes, foam ring, goggles shader). Do not bring it back.
  - **Start panels:** the "Let's go!" banner and Tap to Start panel fade out over 0.45 s of game time after the tap.
  - **The ride is unchanged.** With the same random seed, the old and new builds end in the same place and collect the same coins, gems and socks.
- **Earlier that night: the four Meshy entrance decorations** (`Design/MeshyDeliveries/EntranceDecor/`, placed and animated by `WebDemo/src/decor.js`):
  - **Glowing water towers:** one on each side of the castle, where the approved image has its tall gold-and-blue columns. Each stands on a gold plinth.
    - The fluid glows and swirls in the shader (`TOWER_FLUID`), with bubbles rising and a pulsing light.
    - They replace the code-built machinery towers.
  - **Blue-and-gold gear wheels:** six at the portal mouth and one high on the left, each turning about its axle. They replace the seven code-built gears there.
  - **Golden pipe elbows:** water spouts on the towers' own pipe stubs, pouring into the moat.
  - **Crown and curved trim:** the keystone on the portal arch. The "Let's go!" banner covers it at Tap to Start, and it shows during the run.
  - Every decoration stays at least 1.25 m from the slide's middle up to the highest jump (the mascot reaches 1.10 m).
  - Web copies come from the Balanced files, simplified within a small error, with their metal/roughness and normal maps kept. The Small files have stray sliver triangles and are not used.
  - **Tried and dropped:** extra elbows at the lower corners. On the left they would only cover the side machinery; on the right the bubbles and gold wheel hid them.
  - **Evidence** in `Previews/WebDemo/`: a new gameplay video, `entrance_decor_before_after.png`, `entrance_decor_closeups.png`, and the start frame beside and blended with the approved screen.
    - The ride is unchanged: every recorded frame matches the build before this round (position, height, lane, speed, jumps, path, camera).
    - The coin count can differ by one between unseeded runs, because coins bob with a random phase. `WebDemo/tools/seeded_run.cjs` shows both builds collect the same with the same seed.
  - **Known differences from the approved image:**
    - The crown keystone is hidden by the "Let's go!" banner at Tap to Start. The approved arch top has no crown; it was added because the user asked for it.
    - The approved portal-mouth gears are chunkier and sit right at the water's edge. Ours are a little smaller and further out, to stay clear of the lanes, and partly behind the side machinery and the right brush.
    - Pipe elbows appear only as the two tower spouts.
- **Before that (Screen 3 completion), all in code, no new Meshy models:**
  - **Framing:** measured against the approved image. A 36° lens from further back keeps the mascot's size and place, and the portal arch now fills the approved 64 % of the width.
  - **Slide:** narrower, as in the approved image (2.2 m, lanes 0.70 m apart). It is a flume with lavender walls, thick gold rails and chunky gold segments.
  - **Machinery** (`WebDemo/src/scenery.js`):
    - the huge gold washing wheel (lower right) and a blue-and-gold wheel (upper left)
    - a cream-and-gold housing
    - gold machinery towers with water tubes and waterfalls on both sides of the castle
    - six gold gears with teal and navy hubs at the portal mouth
    - curved gold pipes, pink fluffy trim and glowing bulbs
    - Wheels, gears and collars turn.
  - **Duck helper (removed since, at the user's request):** the user's Meshy duck on its pink float (`Design/MeshyDeliveries/DuckHelper/`, Balanced copy in `WebDemo/models/duck.glb`). It replaced the code-built helper. `WebDemo/src/helper.js` places it ahead of the mascot, facing it, with gentle splashes and softened goggles. It leads the way into the washing machine.
  - **Brushes:** a 3 m Meshy brush turns end-on at the lower left; a second one shows its pink fringe on the right.
  - **Water:** a soft, wavy caustic shimmer and twinkling sparkles instead of the polygon grid. Foam only where water churns, including a foam collar around the mascot. Fewer droplets.
- **Giant side machinery (Meshy):** the user's model (`Design/MeshyDeliveries/SideMachinery/`, Medium copy in `WebDemo/models/machinery.glb`) stands at the lower left of the slide, matched to the approved screen.
  - It stays 1.18 m from the slide's middle, so it never blocks the lanes.
  - It is one combined mesh, so it stands still. Turning only its bristle wheel would need the wheel delivered as a separate mesh centred on its axle.
  - The Balanced copy showed thin gold cracks across the bristles at game size; the Medium copy mostly closes them.
  - It replaced the code-built blue-and-gold wheel on the upper left, and the Meshy roller moved up there.
- **Fix:** every baked Meshy material shared one compiled shader (three.js caches by the `onBeforeCompile` source), so materials could render with another's settings. The duck first showed all pink from the brushes' recolour. Each now has its own `customProgramCacheKey`. This also corrected the left brush's gold-and-blue hub.
- **Visual-fidelity round (after the user's review of the side-by-side):**
  - glossier lighting: studio reflections, a rim light, and shading on the Meshy models
  - raised water mound and V ridges around the mascot (visual only), deeper troughs, clear bow spray
  - tunnel rings in gold, pink, cyan and lavender with bulbs, and turning wall gears
  - a broader helper with a wider pink float, placed nearer the mascot
  - glossy jelly tutorial panels
  - sharper fur tips
  - framing checked at an exact 1:2 stage (40° lens)
- **Earlier this evening:** castle colour grade (lavender, white and gold), brush recolour, lighter tunnel with a light at its end, camera follow over the crest, coins gold from the first frame.
- **Done in the afternoon session:** the real 3D path (climb, crest, drop, banked turns), electric-blue water with caustics and foam, the fur shader, the Meshy lost socks with the "Rescue 5 lost socks" panel, the touch overlay (`?touches`) and the side view (`?side`).
- **Evidence:** [`Previews/WebDemo/`](Previews/WebDemo): this evening's gameplay and side-view recordings, the height chart, the start frame beside the approved screen, and the per-frame game state. Recorded in headless Chromium with software WebGL. **Not tried on a real phone.**
- **Known differences from the approved Screen 3:**
  - The approved vortex inside the portal is whiter and pinker than ours.
  - In the approved image the left brush overlaps the slide's edge. Ours stays just clear of the left lane, so it sits a little further left and is cut by the screen edge.
  - The approved image shows a small yellow helper in front of the mascot; at the user's request the game has none.
  - The code-built machinery is simpler than hand-sculpted models. `Design/MESHY_ASSET_REVIEW.md` lists the one optional Meshy upgrade left (the machinery tower).
- **Build and record:**
  - Build: `cd WebDemo && npm install && node build.mjs`.
  - Play-test: `node tools/playtest.cjs "$PWD" <out> quick`.
  - Record: `node tools/record.cjs "$PWD" <out> 13 game|side|dry`, then `python3 -I tools/evidence_images.py <game dir> <side dir> ../Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png <out dir>`. The ffmpeg commands are in `Previews/WebDemo/README.md`.
  - Compare with the approved screen at the same 1:2 size: `tools/start_frame.cjs`, `tools/beats.cjs`, `tools/try_settings.cjs`, `tools/compare_approved.py`, `tools/overlay_approved.py` (see `WebDemo/README.md`).
  - Republish the page: `artifact.html` with `game.bundle.js`, `models/layout.json`, `artifact-models/*.glb.json` (published as `models/*.glb.json`) and `ui/*.png`. From a different account, publish it as a new page.

## Unity project (unchanged since the afternoon)

- Screens 3–4 are playable in Unity and wait for the first real Unity capture and compare (see `README.md`).
- None of the demo-only changes have been ported to Unity: the 3D path, narrower slide and flume, machinery, helper, fur shader, castle grade, brush recolour, water shimmer, exit light and camera framing.
- **Pink mascot:** not yet in Unity. Copy `Design/MeshyDeliveries/PinkMascot/BubbleWash_Pink_Mascot_Claudia_4MB_ColorSafe.glb` into `Assets/BubbleWash/Models/Mascot/` and rebuild. It is a static mesh (no rig) with an unlit, double-sided material, facing +Z.
- **Lost sock:** not yet in Unity. Copy `Design/MeshyDeliveries/LostSock/BubbleWash_Lost_Sock_Claudia_Small.glb` into `Assets/BubbleWash/Models/RescueSock/`. Its face is on +Z, and its material is fully metallic, so it needs a non-metallic material.

## Open requests from the user

1. Keep polishing Screen 3 until it looks and moves right, then move on to the remaining screens. The four entrance decorations are in. The user asked to be told which model looks wrong, and why, before regenerating anything in Meshy.
2. **Meshy asset review:** done. See [`Design/MESHY_ASSET_REVIEW.md`](Design/MESHY_ASSET_REVIEW.md). The three models it first listed as missing are now built in code. No new Meshy model is required. The duck helper has been delivered and is in use, and one optional upgrade (the machinery tower) is listed there.
3. Keep PR #1 as a draft. Do not merge it.
4. Not yet asked: whether to move this evening's commits onto PR #1's branch, and how to resolve PR #1's conflicts with its base.

## How the user likes to work

- The approved screens are the visual target: preserve composition, character, camera and lighting as closely as possible, and compare side by side.
- Use the existing Meshy assets. Do not substitute unrelated designs or create duplicate assets, and keep Meshy credits for what is really missing.
- Improve what exists. Do not rebuild from scratch.
- Show real gameplay recordings, not simulated screenshots, and say plainly what was actually run and what was not.
- Save everything to the repository, including the chat history, so work can continue from the other account.
