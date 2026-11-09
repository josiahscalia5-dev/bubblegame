# Bubble Wash Kingdom: current project status (8 November 2026 ~23:55 UTC, session bb87ba9f)

## NEWEST: 9 November 2026 ~14:40 UTC, session d847dce2, ACCOUNT-TRANSFER BACKUP. NOTHING here is approved by the user.
- **In the DEFAULT game (the plain launch, `WebDemo/index.html` with no `?s3=`):** `intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56`,
  bundle `6a78d7ae` (= the f28099bc look; this session added only the arch56 hook, proven 0 px). None of this session's Scene 5/6 visual work is in it yet.
- **Behind switches / on lane branches (NOT in the default game, NOT reviewed):**
  - `?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,arch56` on lane `claude/lane-s56-arch-d847dce2` (`b8ca82a6`): the new
    architecture module (`s56_arch.js`, procedural pink housings / glass chambers / gears), builds, not captured yet.
  - lane `claude/lane-s56-tunnel-ac4e3449` (`50f77c6a`): the water A/B tools and an unfinished per-pixel water material (plain launch URL on that lane).
  - the user's Tripo models (`WebDemo/models/s56tm/`): evaluated + optimized; model 911 recommended as the bank housing (MODIFY: add a glowing chamber
    core), the machinery model at most a variant; neither is in the game yet. `MODEL_INVENTORY_2026-11-09_session_d847dce2.md`.
- **Measured this session:** the machinery is out of the portrait frame (coverage numbers below); LPIPS approved Scene 5 vs game Tap to Start = 0.609
  (alexnet, 432x768; lower = closer); gameplay routes upper / ledge / blocked all reach Level Complete with 5 socks, 0 console errors.
- **Evidence:** `Previews/WebDemo/six_scenes/11_scene56_match_d847dce2/` (baseline/ frames + sheet, tmach/ model renders, water56/ A/B, qa/routes/).
  Comparison sheets: `python3 Previews/WebDemo/six_scenes/11_scene56_match_d847dce2/scripts/sheets56.py <out> <ref5> <ref6> label=<tap.png>,<206.png>`.
- **Next:** PARALLEL_LANES.md "Lane status" (arch56 first, then s56 water); merge only reviewed, tested improvements; then the 864x1536 sheets with the
  ceiling / far-left / far-right / water / character crops, the continuous recording (washer -> Scene 6) and the route test.

## 9 November 2026 ~14:00 UTC, session d847dce2 (new account). NOTHING here is approved by the user.
- **Branch:** the user's primary branch `claude/bubble-wash-restore-transfer-kc4ecl` (fast-forwarded at every verified save); environment record
  `ENVIRONMENT_VERIFICATION_2026-11-09_session_d847dce2.md`.
- **The user's task (9 November ~13:35 UTC):** Scene 5 / 6 visual accuracy in the REAL game against the reference pack
  `Design/ReferencePacks/2026-11-09_Scenes5_6_Approved_Visual_Reference_Pack_from_user/` (02 = Scene 5, 03 = Scene 6; pixel-equivalent to the six-scene refs 05/06).
  Order: machinery / gear / violet vessels / lamp + pipes / tunnel geometry -> water + mascot -> PBR, lighting, rails, arches, depth -> Scene 6 props -> small details.
- **Root cause found (ID-buffer coverage at Tap to Start, `11_scene56_match_d847dce2/`):** the s56 machinery exists but is out of frame (banks at
  x 1.5-2.4 m, housings ~2.0 m; the portrait frame is only ~+/-1.1 m wide 3 m ahead): banks + housings cover ~3.7 % of the frame; water 31 %, shell 17 %,
  arches 8.5 %, the s4Brush lane brushes 16 % (top corners), coins ~6.5 %. Transparent bubble layers (s3Bubbles) cover much of the lower screen (pale-water lead).
- **Coordinator hook:** `s56_tunnel.js` section 0 calls `s56_arch.js` under `?s3=...,arch56` (may skip sections 1-4, own the camera); proven 0 px without it.
- **Running specialists:** arch56 (lighting-visual-matching), s56 water (screen4-water-motion-engineer), washer34 continuity (water-vfx-engineer),
  art director inventory, QA baseline. Paused: girl12, ui.
- **Next:** review each lane's evidence, merge s56 then arch56 into the integration branch, put `arch56` into the plain launch only after a visual
  check, then Scene 6 props (brushes, enemies, coins), the continuous recording (washer -> Scene 6) and the route test.

## 9 November 2026 ~13:10 UTC, session f28099bc. Visual status of the ACTIVE game. NOTHING here is approved by the user.
- **Accepted by the user:** only the Classic Screen 4 `?s3=intunnel` (must stay pixel-identical).
- **Latest running build (the plain launch):** `intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56`, bundle `c0361e72`
  (reproducible from source). The six-scene opening (Scenes 1-5, `opening_six2*.js`) hands over inside the drum at real 8.95 s to the live game in
  the s56 lavender tunnel (Scenes 5-6, `s56_tunnel.js`), Level 1 gameplay unchanged. Working code: the m.tilt pickup fix; water kept under the
  Neutral tone-mapping knee.
- **Baseline frames (864x1536) and the art director's ranking:** `Previews/WebDemo/six_scenes/10_restore_f28099bc/evidence/baseline/` and
  `.../evidence/qa/art_director_ranking.md`. Outstanding differences (largest first):
  - Scene 1: she stands instead of kneeling; a foreground towel stack hides her legs; the blue towel is a rigid dome; flat pale room light; the
    washer shows the room through its drum.
  - Scene 2: the open washer has no drum (room visible); her face hidden (camera behind her); the towel hangs as a flat sheet.
  - Scene 3: he faces away (no "Oops" face); the drum is open at the back; camera too close; flat water band.
  - Scene 4: no blue water behind the glass (azure-cobalt 2.9 % vs 30.3 %); his face too big; the rim dull bronze; lights unlit.
  - Scene 5 (opening, compare at ~8.9 s, the 8.4 s frame is mid-turn): the drum's open end shows the room before the hand-over.
  - Scenes 5-6 (live game): pale white cloud patches on the water and a broad foam film round him (cyan 0 % vs 14 %, thin crests 1 % vs 15 %);
    missing side machinery / gear on the right / lamp arches; orange railings instead of gold; oversized coins; cylindrical side brushes missing;
    he rides high; the hint card covers the vanishing point.
- **In progress (unreviewed, on lane branches, see PARALLEL_LANES.md "Lane status"):** s56 water (diagnosis + S56.water), ui HUD restyle,
  washer34 Scenes 3-4, girl12 Scenes 1-2.
- **Next:** review and merge the lanes (s56, ui, washer34, girl12), rebuild, the six-scene sheet at 864x1536, the continuous recording
  (`WebDemo/tools/level1/record_flow.cjs`, `O_HAND=8.95 O_END=9.75`), the route test and the identity proof.


**NEWEST (9 November 2026 ~02:45 UTC, session 6ddc157f, new account): THE ACTIVE GAME CHANGED.** The user selected the six-scene game with their
new Tripo models ("tripo3 final", the "second row") as THE game: a plain launch of `WebDemo/index.html` (no `?s3=`) now runs
`intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3` (bundle `45f21c4a`, stamped `game.bundle.js?v=45f21c4a`). New models in it:
girl_v2_rigged, washer_tripo_hj748, door_tripo_oit748_gold, gear_v2_tripo, housing_tripo_821 (`WebDemo/src/opening_tripo3.js`). Opt-in for the
user's review: `sock3`, `coin3`, `enemy3`, `basket3`, `doorpink`. Evidence: `Previews/WebDemo/six_scenes/07_active_game_plain_launch_6ddc157f/` (plain-launch
frames vs the user's second-row pack, the continuous video) and `06_tripo_new_models_6ddc157f/` (all 12 models). Rollback branch:
`claude/bubble-wash-rollback-before-tripo3-default` (`33bf67ba`). Environment: `ENVIRONMENT_VERIFICATION_2026-11-09_session_6ddc157f.md`; every session
runs `Tools/session_preflight.sh` (SessionStart hook) and follows CLAUDE.md "READ FIRST". Do not redesign this version; do not revert to the first row.


The game: plain JavaScript on three.js r170 in `WebDemo/` (esbuild bundle `WebDemo/game.bundle.js`, committed with its sources). Every visual pass is an
opt-in `?s3=<switch>`; nothing unapproved is in the default game. (`Assets/`, `Packages/`, `ProjectSettings/` are the older Unity version of the
project, kept for the record; the live game is `WebDemo/`.)

## Accepted by the user
- **Classic Screen 4** `?s3=intunnel` (with swim2): the start inside the blue tunnel. Must stay pixel-identical; every pass proves 0 px changed
  (`Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/proofs/`).

## Candidates (NOT approved, waiting for the user)
| Switch | What | Evidence |
|---|---|---|
| `six` (NEW, current direction) | the six-scene storyboard as the 3D opening into Level 1 | `SIX_SCENE_IMPLEMENTATION_STATUS.md`, `Previews/WebDemo/six_scenes/` |
| `home,level1` | Home + Laundry Toss as a real-time 3D opening (`opening3d.js`, rigged Tripo girl `girl2`), Level 1 with `wet`, `port`, `flow` (raised side path, lower path, grime balls, 5 socks, Level Complete) | `68_level1/`, `70_level1_wet/`, `71_level1_flow/` |
| `tripo1`, `tripo2` | the Tripo grime-ball enemy; the user's Tripo basket and towels in the opening | `72_...`, `73_...` |
| `scene07` | the "Avoid Enemies!" machine chamber: pass 16 v5, pass 17 (receding rows, machine far wall, jewel tones), pass 18 (six-zone 3D construction: drum body, cobalt gear assembly, dense interior, rail catwalk, right cabinet, deco). `,nobuild18` = 17c, `,norecon17` = v5 | `77_scene07_pass15_upper/`, `78_scene07_pass17/README.md` |
| `match6`, `roof2`, `finale2`, `water2`-`water8` | older candidates | `CLAUDE.md` |

Superseded for THIS sequence by the six-scene direction: matching the old "Avoid Enemies!" master and the Classic Screen 4 tunnel art (kept as history).

## Branches
- Working: `claude/bubble-wash-account-transfer-52t7ym` (newest). Rollback checkpoint: `claude/bubble-wash-account-switch-e1nndb` at `0aa21621`.
- `claude/bubble-wash-transfer-tcgbof`: an older line from 2 November history (no shared base with the working branch); not used.
- Default branch `claude/new-session-oth0dd`: outdated, never use.

## Save system
`Tools/autosave.sh` every 5 minutes (started by the SessionStart hook `.claude/hooks/session-start.sh`), `Tools/save_now.sh "<msg>"` for verified saves
(`Push: VERIFIED` from `git ls-remote`). Session registry: `Tools/autosave_sessions.json`.
