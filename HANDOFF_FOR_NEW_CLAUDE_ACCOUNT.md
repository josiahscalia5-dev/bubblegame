# Bubble Wash Kingdom: handoff for a new Claude account (READ THIS FIRST)

Written 7 November 2026, about 23:10 UTC, by session `398ed88c`, at the user's handoff order
(`Design/ReferencePacks/2026-11-07_Full_Screen4_Brief_from_user/User_GitHub_Handoff_Order.md`). Nothing in this file is a
secret. It supersedes the older handoff files for the CURRENT state; they stay as history (`BUBBLE_WASH_ACCOUNT_HANDOFF.md`,
`CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md`, `START_HERE_NEW_CLAUDE_ACCOUNT.md`, `HANDOFF.md`). The project rules are `CLAUDE.md`.

## 1. Where the project is

| | |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame (remote `origin`) |
| **Working branch** | **`claude/bubble-wash-account-handoff-yhk8dy`** |
| Remote HEAD at handoff | see the final report of session `398ed88c` (the commit that adds this file, or a later autosave on the same branch) |
| Default branch (identification only, never push there) | `claude/new-session-oth0dd` |
| Other branches that matter | `claude/bubble-wash-transfer-tcgbof` (the previous account's transfer branch, fully merged here; that account may still autosave to it: never push to it); `ccr-10503be1-pnv5vq` (the older accepted line; pull request #2 from the transfer branch into it waits for the user: never merge without the user) |
| Git LFS / submodules | none; ordinary Git (the `.git` folder is about 4 GB: clone with `--branch <working branch> --single-branch`) |

**Rollback checkpoints on the working branch** (each later one is a superset; every flag below is reversible in the URL):
`8343381` (the old account's work merged, before any change here); `7bf5507` (candidate `structmatch` at bundle 452f9568);
`9566f7b` (+ swim3); `e7c7953` (+ match4); `22dae44` / its merge `8c338c5` (+ Screens 1-2, bundle 3fff8982).

## 2. What the game is and how to run it

- A plain JavaScript three.js r170 game in `WebDemo/` (esbuild). The Unity project in `Assets/` is an older line, not used.
- `cd WebDemo && npm install && node build.mjs` builds `game.bundle.js` (commit it with its source). Open
  `WebDemo/index.html` from any static server (for example `npx http-server WebDemo` or the test tools' own server).
- **Versions are URL switches** (`?s3=...`, comma separated). The ones that matter now:

| URL | What | Status |
|---|---|---|
| `index.html?s3=intunnel` | **the ACCEPTED Screen 4** (starts inside the blue tunnel; includes swim2) | the user's accepted baseline, unchanged (0 px) by everything below |
| `?s3=intunnel,structmatch` | **the current candidate**: her rounder magenta shape and shell fur, the swell's water in the original's deeper blues without white comma arcs, the swim rhythm, the original's banded washer rim on the tunnel's upper wall through the whole run, cobalt tunnel rings | waiting for the user's verdict |
| `?s3=intunnel,structmatch,nomatch5` / `,nomatch4` / `,noswim3` | the candidate one / two / three steps back (0 px against their own earlier bundles) | rollbacks |
| `?s3=intunnel,structmatch,home` (or `?s3=intunnel,home`) | **Screens 1-2** (Home, Laundry Toss) in front of the game, then the live Screen 4 | new, waiting for the user |
| no switch | the normal game | unchanged |

- Code of the candidate: `WebDemo/src/tunnel_s4_struct.js` (settings `STRUCT`, `HOUSING`, `SHELL_FUR`; parts `STRUCT_PARTS` in
  `WebDemo/src/tunnel_s4_bt.js`: `hero`, `swell`, `housing`, `swim3`, `match4`, `match5` (longer combed fur, `SHELL_FUR5`); opt-in `mounds`, `tunnel2`, `props2`, `hud2`).
  Screens 1-2: `WebDemo/src/screens12.js`, assets `WebDemo/ui/screens12/`.
- **Android preview APK:** `ANDROID_HOME=~/android-sdk bash Tools/android_apk/build_apk.sh <out.apk>` (start page
  `Tools/android_apk/start.html`). The SDK is NOT in the setup script; install it once per machine:
  download Google's command-line tools from `dl.google.com`, then
  `sdkmanager --sdk_root=$HOME/android-sdk "platforms;android-34" "build-tools;34.0.0"` (needs `dl.google.com` allowed).
  APKs are not committed (`*.apk` is ignored); the debug signing key lives in `~/.bubblewash-android/`.

## 3. The visual authorities (in order)

1. **The ORIGINAL approved Screen 4:** `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`
   (767 x 1536). The ONLY Screen 4 target. Crops of it the user made: `Design/ReferencePacks/2026-11-07_Water_Tunnel_and_Character_References_from_user/`,
   `..._Bubble_Wash_Mascot_Water_Focused_Correction_Pack/`, `..._Bubble_Wash_Screen4_Exact_Water_Size_3D_Spec_Pack/` (with the
   user's screen-space measurements and suggested 3D starting dimensions).
2. **The ACCEPTED Tap to Start** (`?s3=intunnel`): the foundation to keep (`Design/ReferencePacks/2026-11-07_Final_Screen4_Reference_Pack_from_user/`).
3. **Screens 1-2:** the user's girl + laundry artwork `Design/ReferencePacks/2026-11-07_First_Two_Screens_Girl_Laundry_from_user/11109.jpg`
   (the phone previews there only place the UI).
4. Guides only, never targets: the storyboards and concept images (`..._Full_Screen4_Brief_from_user/`, `..._Washer_Interior_Continuity_from_user/02_...`).

**The user's Screen 4 requirements (all their briefs of 7 November, summarised):** the same recognisable pink fluffy rear-view
character, a full round dome with long fine fuchsia strands and small side nubs, sitting ON saturated cobalt / cyan water: its
back above the water, its lower fur touching rounded moving waves; no white film, cloud, crescent streaks or foam blanket; gentle
bob, swimming and responsive steering with the water and ripples following her, through the whole tunnel; the silver /
lavender / purple / gold washer rim recognisable throughout but not an oversized ceiling; coins, socks, gems, bubbles, brushes,
HUD and every gameplay system unchanged; about 90 % visual similarity (never claim a percentage without a measurement).

## 4. State of the work (what is done, what is not)

Evidence folders (each has a README with the proofs): `Previews/WebDemo/screen4_round9_match/64_final_pass/` (structmatch),
`65_swim3/`, `66_match4/`, and `Previews/WebDemo/screens12_first_two_screens/`.

- **Done and proven** (accepted `?s3=intunnel` and the normal game 0 px; `r2_func` identical; `s3_func` only the switch list and
  draw calls; the seeded swipe-and-jump motion trace 0 differences in 152 frames x 17 gameplay fields; no console errors):
  - the pale icy band round her: its cause was the swell's own face (light colours + white comma arcs, `MATCH_WATER.face.lace`),
    corrected at the source (swim3);
  - the washer metal: the original's banded rim (periwinkle, lavender, violet, mauve groove, gold-peach band, pink-lavender face)
    on the tunnel's own upper wall through the whole run (match4);
  - the tunnel rings' saturation raised (pixels above saturation 0.75 in the tunnel: 11-12 % against 5.5-7.6 % before; the
    ORIGINAL 24.5 %);
  - her fur: shell fur (6 shells of her own mesh) and her colour measured to the original (her region: hue 319 vs 317,
    saturation 0.64 vs 0.66, luminance median 0.51 vs 0.49);
  - Screens 1-2 working in a browser at three phone sizes, recorded; Screen 4 0 px unchanged by them.
- **The "floating at 6 s" in the user's frame strip:** that frame is mid-JUMP. The recording script swipes up at 5.9 s
  (`Previews/WebDemo/screen4_round9_match/51_swim/scripts/record_phone.cjs`); the recorded state says `air: true` at frame 180.
  It is the intended jump, not a contact fault. Use a recording without the jump to judge contact.
- **NOT done (the user's open requests, in priority order):**
  1. The user's verdict on `?s3=intunnel,structmatch` (match4) and on Screens 1-2.
  2. **Her silhouette:** after match4 the user still saw a flatter mound with shorter fur. match5 (`67_match5/README.md`) answers it
     first: strands 2.2 x longer, finer and combed down her dome, her body narrowed under them (outline 0.519 x 0.178 of the frame,
     the ORIGINAL 0.513 x 0.167). Still open if the user wants more:
     Measured at Tap to Start her pink box is 0.530 x 0.170 of the frame, the ORIGINAL 0.513 x 0.167 (similar size); the
     difference the user sees is the dome's profile and the fur's length and direction. Next: longer shells with directional
     lean and pale tips, and the crown profile (`structCrown`, `STRUCT.hero.crown`), compared at the same frame.
  3. **Tripo:** one image-to-3D job was run (120 credits; balance 640) from the rear-view crop and produced a MUSHROOM
     (`Design/TripoDeliveries/Round10_PinkMascot_Rear/README.md`). Recommended second attempt, ONLY after the user says yes:
     the same character's full front view from `11109.jpg` (cut-out `WebDemo/ui/screens12/mascot_sprite.png`).
  4. The water's SHAPES (the original's layered curling ribbons and lavender glass bubbles at her lower left) and the user's
     water dimension spec (`..._Exact_Water_Size_3D_Spec_Pack/`): not yet applied. Calibrate it to the game's real scale first
     (her width in the game is `MASCOT_WIDTH` 1.04 m in `game.js`, not the spec's example 1.5 m).
- **NEWEST REQUEST (7 November, about 23:50 UTC): `Design/ReferencePacks/2026-11-07_Animation_and_Movement_Mandate_from_user/`**
  (the mandate, the user's phone recording of the APK, the 12-screen Level 1 flow board). Diagnosis done, NOT implemented yet:
  1. **"She does not travel":** she does (the recorded state: z 1.8 m -> 34.3 m in 5 s, about 7 m/s), but the drum is only
     about 35 m long, so every ~5 s the run LOOPS back to its start (`loopRun` in `game.js`, `if (running && m.z > L.tunnelEnd - 2.0)`),
     and the camera follows at a fixed distance (normal for a runner). So Level 1 is one ~35 m section repeating: she never
     reaches anywhere. The fix is a longer Level 1 route with connected sections in the board's order (brush zone, side paths /
     jumps, drops, collect zone, enemies, the Bubble Kingdom, Level Complete) instead of the loop: a large engineering task
     (the track `TR`, the layout `L`, the tunnel's lining / rings / water built along `L`, the collectible placement, the camera).
  2. **"The girl must really move":** no 3D girl exists in the project (`Design/LAUNDRY_TOSS_INTRO_ASSETS.md`); Screens 1-2 use
     the user's 2D artwork. A rigged, animated 3D girl needs Tripo (PAID): image-to-model + rig + animation retarget. Free dry run
     (`tripo make <girl crop> --for anim --dry-run`): 110 credits for the model, plus the rig and per-animation retarget (not
     estimated; presets idle / walk; a throw is not a listed preset). The artwork shows her only from the waist up behind the
     basket, so Tripo must invent her lower body. **Ask the user before any paid job** (balance 640).
  3. The opening sequence (girl throws laundry, the character swept along, tumbling into the washer, the camera following into
     the drum, the hand-over) then builds on 2 in `WebDemo/src/screens12.js` (today a 2D toss + dive into the live game).
- **Running at handoff:** the match4 Pixel 7 recording (`66_match4/videos/swim_steer_coins_new.mp4`) was still being written;
  the 5-minute autosave commits it if it finished. If it is missing, rerun:
  `bash Previews/WebDemo/screen4_round9_match/66_match4/scripts/chain.sh` (its header has the arguments) or only the clip part.

## 5. How results are proven (use the same tools)

- `source Tools/bw_tools_env.sh` in every shell (installs: `bash Tools/cloud_env_setup.sh` if `~/.bubblewash-tools` is missing).
- Page captures with the HUD: `cd WebDemo && SETTLE=900 S3=intunnel,structmatch TIMES=0,1,2,3,5 node tools/screen3/s3_shot.cjs "$PWD" <out>`.
- **The established frame:** seed 7, 3.0 s, 768 x 1536 canvas: `S3=... T=3.0 node tools/screen4/layer_diag.cjs "$PWD" <out> [ablations.json]`
  (ablations hide layers by name regex, e.g. `{"label":"no_swell","hide":["heroSwell$"]}`).
- Identity (0 px against an older bundle), gameplay (`s3_func`, `r2_func`, motion trace) and the recording: the `scripts/`
  of `66_match4/` (`chain.sh`, `identity.sh`, `gameplay.sh`, `sheet.py`, and the measurements `her_box.py`, `pink_stats.py`,
  `tunnel_stats.py`, `water_stats.py`).
- Screens 1-2: `node WebDemo/tools/screens12/screens12_check.cjs "$PWD/WebDemo" <out> intunnel,structmatch,home 412x839`.
- Restore check: `bash Tools/verify_restore.sh --build` (it knows the current bundle md5; the "branch" check expects an older
  branch name and fails harmlessly).

## 6. Agents, skills, tools, plugins: what is in the repository and what must be reconnected

**In the repository (they load automatically in a session on this branch):**
- `.claude/agents/`: `screen4-water-motion-engineer` (the one owner of water, swim motion and overlays; it uses the
  parallax-threejs MCP tools), `game-art-director` (read-only reviewer), `water-vfx-engineer`, `lighting-visual-matching`,
  `gameplay-visual-testing` (read-only tests).
- `.claude/skills/bubble-wash-screen-matcher/`; `.claude/hooks/session-start.sh` + `.claude/settings.json` (restarts the
  5-minute autosave on session start); `.mcp.json` (empty on purpose: the MCP servers come from the plugin).
- Tools: `Tools/` (autosave, save, verify, environment setup, chat export with key redaction, Android APK builder) and
  `WebDemo/tools/` (captures, layer isolation, gameplay tests, recordings, Spector capture).
- `.env.example`: placeholder variable names only.

**Account level: they do NOT travel; redo on the new account:**
1. Connect GitHub on claude.ai and make sure the Claude GitHub App can reach `josiahscalia5-dev/bubblegame`.
2. Install the **parallax-threejs** plugin (0.4.12) from the plugin directory: it brings the MCP servers chrome-devtools-mcp,
   threejs-devtools-mcp and playwright-mcp (working here) and Spector (it failed to connect here: optional), plus its agents
   (`scenario-author`, `shader-reviewer`, `visual-debugger`) and skills (`checkpoint`, `diff`, `sweep`, ...).
3. Create a personal cloud environment named `bubblegame` for this repository: limited network with package registries and MCP
   servers allowed, plus the hosts `download.blender.org`, `download.pytorch.org`, `dl.google.com` (Android SDK) and
   `openapi-dl.data.tripo3d.com` (Tripo downloads); setup script (exactly):
   ```
   #!/bin/bash
   if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then
     bash bubblegame/Tools/cloud_env_setup.sh || echo "Bubble Wash setup: a step failed (above); run bash Tools/verify_restore.sh"
   fi
   ```
4. **Tripo key:** add it as a NETWORK SECRET of that environment for host `openapi.tripo3d.ai` (Authorization: Bearer), never
   in the repository or the chat; run `tripo` with `TRIPO_API_KEY=proxy-injected`. **The previous key was pasted into the chat
   on 7 November: the user should create a new key on Tripo's site and delete the old one.** Every paid Tripo job needs the
   user's yes first (`tripo doctor` and `tripo balance` are free).
5. Live sessions, running jobs, agents' in-memory state and local worktrees never transfer; their files are in the repository.

## 7. First-session checklist for the new account

1. Start a session on the repository, branch `claude/bubble-wash-account-handoff-yhk8dy` (or `git clone --branch claude/bubble-wash-account-handoff-yhk8dy --single-branch https://github.com/josiahscalia5-dev/bubblegame`).
2. `git log -1` and compare with the commit the user was given; `git status` clean.
3. Read `CLAUDE.md`, then this file, then the top of `HANDOFF.md`.
4. `bash Tools/cloud_env_setup.sh` if `~/.bubblewash-tools` is missing; `source Tools/bw_tools_env.sh`; `cd WebDemo && npm install && node build.mjs`;
   `bash Tools/verify_restore.sh --build`.
5. Check the autosave runs (`ps -eo pid,etime,cmd | grep '[a]utosave.sh'`); add the new session to `Tools/autosave_sessions.json`.
6. Tell the user what needs reconnecting (section 6) and wait for their verdict on the candidate before more changes.

## 8. First message to paste into the new account

> Continue my Bubble Wash Kingdom game from GitHub: repository josiahscalia5-dev/bubblegame, branch
> `claude/bubble-wash-account-handoff-yhk8dy`. Read `CLAUDE.md` and `HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md` first and follow them.
> Do not reset, redesign or rebuild anything; the accepted Screen 4 is `?s3=intunnel`, the candidate `?s3=intunnel,structmatch`
> and Screens 1-2 `?s3=intunnel,structmatch,home` wait for my verdict. Run the first-session checklist, tell me what must be
> reconnected (plugin, environment, Tripo key, GitHub), and do not assume any agent or plugin is installed until you have checked.
