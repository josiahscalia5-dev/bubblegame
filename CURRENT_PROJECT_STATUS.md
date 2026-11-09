# Bubble Wash Kingdom: current project status (8 November 2026 ~23:55 UTC, session bb87ba9f)

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
