# Bubble Wash Kingdom: current project status (8 November 2026 ~23:55 UTC, session bb87ba9f)

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
