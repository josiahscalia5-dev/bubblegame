# Bubble Wash Kingdom: rules for every Claude session

**On a new Claude account, read `HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md` first: its section 0000 (8 November, about 14:50 UTC, session
`57091b57`, branch `ccr-b67aeffb-d94mmq`) and section 000 (13:30 UTC, session `b0abcf95`) are the current state. Two sessions were live
at once: `b0abcf95` on `ccr-50c66592-kcnqoy` (Level 1 flow, roof2, finale2) and `57091b57` on `ccr-b67aeffb-d94mmq` (save system,
Tripo). Check both heads with `git ls-remote`; continue from the one that contains the other, else merge both into your own branch
(it contains all of `claude/bubble-wash-kingdom-continue-z9nmm1` and `ccr-76d4bc77-rqhl8o`; normal merges only, never force).** Then `HANDOFF.md`: its top section is the newest state, branch and commit. The full history is in `ChatHistory/`.
On a different Claude account, read `START_HERE_NEW_CLAUDE_ACCOUNT.md`, then `CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md` (7 November;
it replaces `ACCOUNT_SWITCH_HANDOFF.md`): the branch, the accepted checkpoint, the agents, the plugin and environment
inventory, how to restore and verify (`bash Tools/verify_restore.sh --build`), and the continuation prompt. Before
switching accounts, follow `SAVE_BEFORE_ACCOUNT_SWITCH.md`.

## What the user wants now

- **Only Screen 4.** No work on Screen 1, the Laundry Toss intro, the cartoon girl, the castle or other levels unless asked.
- **The authority is the ORIGINAL APPROVED Screen 4:**
  `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536). It is the ONLY Screen 4 target, for every agent, tool and comparison.
  - Close-ups for detail only, all crops of it: `Design/ReferencePacks/2026-11-04_Tripo_Reference_Kit/09_APPROVED_CHARACTER_WATER_CONTACT.png`,
    `10_APPROVED_TUNNEL_LIGHT_AND_DEPTH.png` and `Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/03_SCREEN_4_CROPS/01_...` to `08_...`.
  - NOT targets: the EXACT TARGET board (`03_SCREEN4_EXACT_TARGET_BOARD.png`), the guides (`01_ROUND6_...`, `05_...`, `06_...`),
    concept sheets, the Tripo kit's `VFX_ONLY` images, the water-look references, `Design/ApprovedScreens/` and any other
    generated image. `02_APPROVED_SCREEN_4_FULL.jpg` is a smaller copy: use the original.
  - The user's evidence kit (5 November, 14:43 UTC): `Design/ReferencePacks/2026-11-05_Screen4_Visual_Evidence_and_Assets/`
    (seven annotated checkpoints, `04_Instructions/VERIFY_CHECKLIST.md`; verify at the Pixel 7 framing too). Its
    checkpoint 02 is superseded by the correction above: the character sits on top of the water.
  - The user's precision kit, exact crops of the original by zone (verified): `Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/` (`01`-`07`; `10` the annotated zones).
  - Supporting MATERIAL references the user approved on 5 November, for look and finish only (never layout; the original
    wins): `Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/` (see its README). REF5, the blue-water vortex, is the tunnel's water material.
- **The fidelity brief (5 November, 14:16 UTC):** `Design/ReferencePacks/2026-11-05_Screen4_Fidelity_Pass_Brief/README.md`.
  - Match the original as closely as possible; never a new or "better" variation.
  - Lock the camera and compare at the same moment.
  - Do not redesign the pink character. **The user's correction (5 November, about 15:20 UTC), overriding "partly
    submerged" above and the kit's checkpoint 02:** the character sits ON TOP of the water and splash, supported by the
    water surface and surrounded by splash and foam at its base and sides. Never sunk into the water, buried behind it,
    hidden by a water wall or curtain, or floating inside it.
  - Many more bubbles inside the tunnel.
  - Order: tunnel depth and rings, then water, foam and bubbles, then objects (no oversized collectibles), then colour.
  - Report with a side by side and a corrected / remaining checklist.
- **First priority: a visibly blue/turquoise water body** through the tunnel, supporting the pink character, which rests on it.
  White foam is only an accent on top. Never a white foam blanket, and never bloom, haze or a pale wash as a substitute.
- **The user's latest corrections (5 November, about 17:15 and 17:45 UTC), superseding every earlier foam request:**
  - Round the character: sparkling BLUE water with small bubbles, small splashes and blue-white highlights. No thick white
    (or lavender) foam cushion or clumps round it.
  - The tunnel (the vortex kit, `Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/`): the water itself as twisting,
    irregular cobalt ribbons with turquoise currents, dark-blue gaps and curved, broken white streaks. Not smooth, even,
    wide pastel rings or a big peach band. Bubbles are secondary.
  - Commit and push each tested step and give the hash.
- **The user's briefs of 6 November** (`Design/ReferencePacks/2026-11-06_Strict_Motion_Match_Kit_from_user/`, `05_...` and
  `10_...`): one correction at a time, each compared original / previous / new at the checkpoint, at Pixel 7 and at moving
  moments; **revert anything that looks less like the original**; the tunnel is the hero, with a clear glowing centre, less
  clutter and a clean coin / gem path. `focus` is at step 8 (the original's white splashes); step 5 is held (see `HANDOFF.md`). The 6 November breakthrough brief (`Design/ReferencePacks/2026-11-06_Screen4_Breakthrough_Kit_from_user/`): the new `?s3=bt` (below) keeps the smaller brushes and the sock's blue toe; two water candidates were rejected (her model's silhouette is the limit). Then `?s3=intunnel`: the game starts INSIDE the tunnel at the approved view (the user's directive of 6 November, 13:30 UTC); the bubble domes tried on it were rejected twice.
- **The user's washer-interior clarification (7 November, about 16:00 UTC):** the ACCEPTED Tap to Start's silver / lavender /
  purple metal round the upper tunnel is the target for the WHOLE run (not plain blue after a second, not an oversized
  ceiling; `Design/ReferencePacks/2026-11-07_Washer_Interior_Continuity_from_user/`; its concept image is a guide only).
- **Real three.js rendering in the playable game.** Never a static screenshot or a painted background in place of the 3D
  scene. Never restart or rebuild the game from scratch.

## How work is done

- The game is plain JavaScript on three.js r170 in `WebDemo/`. Build it with `cd WebDemo && npm install && node build.mjs`
  (esbuild; Vite is installed only for side tests). Commit `game.bundle.js` together with its source.
- Each visual pass is a new `?s3=<switch>` test version:
  - normal game (no switch); `round4`, `round5`, `round6`, `round7` (older passes);
  - tools added on 6 November: Spector.js frame capture (`WebDemo/tools/screen4/spector_capture.cjs`, `spector_report.py`), the region
    comparison with OpenCV, scikit-image and LPIPS (`region_compare.py`), a 12-trial Optuna study (`optuna_domes.py`); LPIPS, Optuna
    and PyTorch live in `~/.bubblewash-tools/metrics/bin/python` (`Tools/cloud_env_setup.sh` installs them);
  - `hero`: the Round 7 hero scene, hero moment 2.85 s;
  - `liquid`: Round 8, real water; `liquid,nofoam` shows it without foam.
  - `splash`: Round 8 pass 2, visible translucent splashes and a deeper swirl on top of `liquid`; `splash,nofoam` without the
    white.
  - `match`: Round 9 art match (`tunnel_r9_match.js`, `tunnel_r9_match_water.js`), including the seventh session's focused
    pass from the 15:55 brief (larger character, tilted sock, aqua-white froth bank; evidence `13_...`, `14_...`,
    `20_focused_pass_merged/`). Its froth predates the 17:15 correction above.
  - `intunnel,structmatch` (7 November, session `398ed88c`, the user's FINAL mandate and washer-interior clarification;
    NOT accepted, waiting for the user): on top of the accepted look, her rounder, larger magenta silhouette, the accepted
    surf's blue graded richer, and a curved silver / lavender / purple drum lining on the tunnel's own upper wall through the
    whole run (`WebDemo/src/tunnel_s4_struct.js`, `STRUCT_PARTS` in `tunnel_s4_bt.js`; off: `,nohero`, `,noswellgrade`,
    `,nohousing`; opt-in: `,mounds`, `,tunnel2`, `,props2`, `,hud2`). Evidence and proofs:
    `Previews/WebDemo/screen4_round9_match/64_final_pass/README.md`. Account handoff: `BUBBLE_WASH_ACCOUNT_HANDOFF.md`.
    Then, in it by default: `swim3` (`9566f7b`, `65_swim3/`: the swell's comma arcs off, its face the original's deeper blues,
    the swim rhythm; `,noswim3` = bundle 452f9568) and `match4` (`66_match4/`, the user's exact-match order and reference
    packs of 7 November evening: the original's banded washer rim through the whole run, the tunnel's cobalt saturation, her
    shell fur of fine fuchsia strands; `,nomatch4` = the swim3 build) and `match5` (`67_match5/`: longer, finer strands combed
    down her dome, her body narrowed under them so her outline keeps the original's width; `,nomatch5` = the match4 build).
  - `level1` (8 November, session `dbccb9a3`, the user's ANIMATION AND MOVEMENT MANDATE and motion storyboards; NOT accepted,
    waiting for the user): with `home` the Laundry Toss is a real-time 3D scene (`WebDemo/src/opening3d.js`: a code-built,
    jointed, animated girl, since no girl model exists; the laundry toss; the character flying into the washer; one camera move
    into the tunnel), and the run no longer loops: after the Screen 4 drum it goes on through Level 1's sections to Level
    Complete (`WebDemo/src/level1.js`, `track.js` COURSE), with swim strokes. Full app: `?s3=intunnel,structmatch,home,level1`;
    off: `,noswim1`, `,noopening3d`. Evidence: `Previews/WebDemo/screen4_round9_match/68_level1/README.md`.
    Since then, in it by default: `girl2` (the user's Tripo girl, rigged, in the opening; `,nogirl2` = the code-built girl; session
    `dbccb9a3`), and (session `8140e507`, the user's Level 1 mandate of 8 November: continuous saturated blue water from the washer
    to Level Complete, never a dry road) `wet` (the drum widens into one wet washer chamber, the castle through a glowing portal,
    Level Complete on the water; `,nowet` = before) and `port` (the porthole shows the blue spiral; `,noport` = before). Evidence:
    `Previews/WebDemo/screen4_round9_match/70_level1_wet/README.md`. NOT accepted. Then (session `b0abcf95`, the user's 10-beat
    Level 1 blueprint and strict prompt of 8 November, `Design/ReferencePacks/2026-11-08_Level1_Blueprint_and_Strict_Prompt_from_user/`)
    `flow` (in level1 by default; `,noflow` = before; `WebDemo/src/level1_flow.js`): the course in the board's order with a REAL raised
    side path (bounce pad + swipe), a REAL lower path (the drop; ledges beside it), patrolling grime balls a spin pops, exactly 5 socks
    on any route, Level Complete with the board's goals and rewards; route tests `WebDemo/tools/level1/flow_routes.cjs`. Evidence:
    `Previews/WebDemo/screen4_round9_match/71_level1_flow/README.md`. NOT accepted.
  - `tripo1` (8 November, session `57091b57`, opt-in on top of `level1`: `?s3=intunnel,structmatch,home,level1,tripo1`; NOT accepted):
    board panel 09's grime ball as a Tripo P2 model made from the original board's crop (`WebDemo/src/tripo_l1.js`,
    `models/l1_enemy_tripo.glb`), looks only; the castle Tripo made from board panel 02 was rejected. Evidence:
    `Previews/WebDemo/screen4_round9_match/72_tripo1_enemy/README.md`; jobs and credits: `Design/TripoDeliveries/2026-11-08_session_57091b57_Level1_assets/`.
  - `match6` (8 November, session `8140e507`): her rear silhouette (round dome, pom-pom nubs, radiating strands). A CANDIDATE,
    opt-in only (`?s3=intunnel,structmatch,match6`), not merged into the default look until the user approves it (`69_match6/`).
  - `home` (7 November, `Previews/WebDemo/screens12_first_two_screens/`): Screens 1-2 (Home, Laundry Toss) in front of the
    live game, from the user's girl + laundry artwork (`WebDemo/src/screens12.js`); e.g. `?s3=intunnel,structmatch,home`.
  - `intunnel,swim2` (7 November, eighteenth session): **ACCEPTED, the bare `?s3=intunnel` now includes it** (the user's
    approval; the previous look is `?s3=intunnel,noswim2`, or commit `920531d`; `58_swim2_accepted/`): the tunnel stays cobalt while moving, the water at her flows with her travel, spray capped at 12 px
    (`WebDemo/src/tunnel_s4_swim2.js`, `SWIM2_ON`; evidence `Previews/WebDemo/screen4_round9_match/57_swim2/`).
  - `intunnel` (6 November, fourteenth session, the user's directive: "start directly inside this blue laundry
    tunnel ... no girl scene, no extra opening, no separate swimming sequence"): `bt` plus the run STARTING inside the tunnel
    at the approved viewpoint (`INTUNNEL` in `WebDemo/src/tunnel_s4_bt.js`, code gated on `INTUNNEL_ON` in `game.js`; the
    opening camera `S3.cine` off). Evidence: `Previews/WebDemo/screen4_round9_match/40_intunnel_start/README.md`. The bubble
    domes (`domes` flag, `tunnel_s4_domes.js`) were REJECTED twice by the art director and are not in it
    (`41_bubble_domes/`); the water bank and the lobe-drawing water face (`bank`, `wave`) were rejected too (`42_water_bank/`);
    the curling crests (`crest`) were rejected too (`43_curling_crests/`). `water2` (`tunnel_s4_water2.js`: heroSwell's own face
    material takes the original's foreground water, `44_water_material/`) was judged moderately closer by the art director
    and is waiting for the user's approval; it is NOT part of `intunnel` until then. Its refinements, each on top of the
    previous and none merged (all in `tunnel_s4_bt.js`, `WATER3`-`WATER6`): `water3` (R3c: the face extras off, a mild colour
    lift, `45_water_r3/`), `water4` (R4, the current water candidate: the texture's holes filled with exemplar patches of the
    original's water, `46_water_r4/`), `water5` (R5, rejected: registered 22 px lower, `47_water_r5/`), `water6` (R6: the fill
    under her from the original's lower water only, `48_water_r6/`), `water7` (R7, the fifteenth session's candidate: the
    game's spray droplets drawn no bigger than 12 px of the canvas height, which removed the white "cotton-ball" piles while
    moving, plus mirrored sampling beyond the texture's edges, which removed a dark fin at the lower left when steering left;
    `49_water_r7/`), `water8` (R8: the face's edge in front of her follows the original's own outline, an alpha channel from
    the original's body silhouette; `50_contact_edge/`).
  - `bt` (6 November, fourteenth session): `focus` plus the breakthrough pass (`WebDemo/src/tunnel_s4_bt.js`, code
    gated on `BT_ON`; `?s3=bt` turns `focus` on under it): the hazard brushes drawn at 0.62 (their knock is the lane,
    unchanged), the wall brushes 0.66, the sock's toe blue. Evidence and the proof that it is step 8 plus only these:
    `Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/README.md`. Spector.js frame captures:
    `WebDemo/tools/screen4/spector_capture.cjs` and `spector_report.py` (npm `spectorjs` in a scratch folder).
  - `focus` (5 November evening onward): `match` plus the user's focused correction pass (settings in
    `WebDemo/src/tunnel_r9_focus.js`, code gated on `FOCUS_ON`). Evidence: `Previews/WebDemo/screen4_round9_match/15_focus_pass/`.
    It is built on `match` as it was at `9a95c06`: `tunnel_r9_focus_base.js` restores those settings under `FOCUS_ON`, and
    `match`-only code is gated `!FOCUS_ON`. Both lines merged on the tenth session's branch (`21_lines_merged/`).
  - Everything older must stay **pixel-identical**. Prove it with frame comparisons before saying so.
- **Gameplay is preserved:** controls, lanes, jump, tap to spin, coins, the gem, socks, hearts, pause, Bubble Blast,
  Turbo Spin, the mission. Use private random generators; the game's seeded `Math.random` is never touched.
- **Tools:** run `source Tools/bw_tools_env.sh` in every shell. If `~/.bubblewash-tools` is missing (a new account or
  environment), run `bash Tools/cloud_env_setup.sh`. Status and sign-ins: `Tools/DEV_TOOLS.md`.
- **Design agents** (`.claude/agents/`):
  - `screen4-water-motion-engineer` (activated 6 November at the user's approval): one owner for the water touching her,
    the tunnel water, overlays and post as they affect it, transparency and her drawn swim motion, with live DevTools;
  - `game-art-director`: read-only reviewer;
  - `water-vfx-engineer`;
  - `lighting-visual-matching`: tunnel architecture and lighting;
  - `gameplay-visual-testing`: read-only tests.

  Give editing agents isolated worktrees and separate files. **Skill:** `.claude/skills/bubble-wash-screen-matcher/`.
- **Evidence:** compare full-resolution real gameplay captures against the approved Screen 4 and keep them in
  `Previews/WebDemo/<round folder>/`. Never claim a similarity percentage without saying which measurement produced it.

## Safety

- **Never force-push or rewrite another branch.** Work on the session's own branch. Save with
  `bash Tools/save_now.sh "<message>"`, which verifies the push.
- **The user's standing request: save EVERYTHING to GitHub every 5 minutes, all session long.** This covers the chat history,
  the design agents' files, transcripts and unfinished work, the game build and all evidence. Start the autosave at the
  beginning of every session, before other work, as a detached process: a normal background job is stopped after 30
  minutes to 2 hours.

  ```
  export CLAUDE_SESSION_URL=<session link> BW_AGENT_TRANSCRIPTS=ChatHistory/<date>_<session>_design_agent_transcripts.md \
    BW_AGENT_TITLE="<title>" BW_WIP_DIR=Previews/WebDemo/<round folder>/wip_snapshots_design_agents
  setsid nohup bash Tools/autosave.sh ~/.claude/projects/<project>/<session-id>.jsonl ChatHistory/<date>_<session>.md \
    "<title>" 5 288 > <scratchpad>/autosave.log 2>&1 < /dev/null & disown
  ```

  - 288 rounds is 24 hours.
  - Check it with `ps -eo pid,etime,cmd | grep '[a]utosave.sh'` and the log, and start it again if it is gone.
  - **A SessionStart hook restarts it by itself** (`.claude/hooks/session-start.sh`, registered in `.claude/settings.json`;
    the user's approval of 6 November). On a cloud session start or resume it starts the autosave only if none is running,
    never on `main` / `master` or a detached HEAD, never switching branches, logging to `~/.bubblewash-autosave/`. A
    session's file names come from `Tools/autosave_sessions.json` (add your session id there); without an entry they are
    `ChatHistory/<date>_session_<id8>.md`. It acts in future sessions once it is on their branch (or merged).
  - Name the files after a session number no other branch uses.
- **Never put a key in the repository, a commit, a script or the chat.** The repository is public. Tripo's key goes in
  the cloud environment's settings (see `Tools/DEV_TOOLS.md`). The chat exporter redacts keys.
- **Tripo spends real credits:** `tripo make`, `tripo ai` and `tripo redo` charge. **The user's standing authorization (8 November,
  about 14:15 and 14:40 UTC, until they change it; it OVERRIDES every older "never spend Tripo credits without asking" line, including
  those in older handoffs, evidence READMEs and the user's earlier prompt files):** use the AVAILABLE Tripo API credits for any 3D asset
  of the whole game (characters, the girl and her animation, the mascot, basket, socks, towels, the washer and its open entrance, brushes,
  collectibles, enemies, machinery, Kingdom scenery), including rigging and animation services, without asking per job and with no
  per-job limit, wherever it brings the game closer to the approved artwork: image-to-3D from the approved art (never text alone when
  an approved image exists), dry-run first (`--dry-run`, free), inspect and reuse existing models first, evaluate each result against
  the art before the next job, keep the existing model when it is the closer match, reject failures rather than use them, no
  duplicates or unrelated experiments. NEVER buy credits, top up, enable automatic recharge, renew or change the subscription, charge
  a payment method or use another paid service without asking. Not a substitute for water, camera, UI, gameplay or transitions (code
  work). Record every job (task id, credits, decision) in its `Design/TripoDeliveries/<folder>/README.md` and report credits used and
  the balance. `tripo doctor` and `tripo balance` are free. Meshy is not used. Keys stay out of the repository (network secret only).
