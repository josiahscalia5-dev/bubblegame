# Restoration report: new Claude account, 9 November 2026 ~17:05-17:30 UTC, session 3849f5c8

Every line below was checked live in THIS session unless it says otherwise.

## Repository and branch
- Repository: `josiahscalia5-dev/bubblegame`. GitHub access: fetch, ls-remote, pushes VERIFIED by `git ls-remote`.
- The user's transfer branch `claude/bubble-wash-restore-tamzio` existed on GitHub at `59e6e68` (16:55 UTC), identical to `claude/bubble-wash-restore-transfer-kc4ecl`.
  - It held one commit more than this session's clone: the previous session's chat-history autosave.
- This session works on the harness branch `ccr-68def37c-grxgz1`.
  - It merged tamzio with a normal merge (`7e37a64`).
  - It CONTAINS tamzio, kc4ecl and `ccr-212bb6a5-36pep9` (`git merge-base --is-ancestor`).
- `Tools/save_now.sh` now fast-forwards BOTH `tamzio` and `kc4ecl` at every verified save: plain push, never force, only when the branch is an ancestor.
  - Verified saves `4c40aa5` and `a652e24`: all three branches at the same commit on GitHub.
- Never forced, reset or deleted anything. No uncommitted work existed at start (working tree clean).

## RESTORED AND VERIFIED (live in this session)
| Item | Version / evidence |
|---|---|
| Game build | `cd WebDemo && npm install` (by the setup), `Tools/verify_restore.sh --build`: 25 passed, 0 failed. The committed bundle equals a fresh build. Three.js 0.170.0, esbuild 0.24.0, Node 22.23.4, npm 10.9.9. |
| The game runs | The plain launch (`intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56`) ran in Chromium 153 (software WebGL): Laundry Toss -> START -> the six-scene opening -> hand-over at 8.95 s -> live Level 1. 0 console errors in the opening run. Frames: `Previews/WebDemo/six_scenes/14_real_game_preview_3849f5c8/`. |
| Approved references | `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/01-06` (864x1536) present.<br>The user's resent storyboard is byte-identical to `Six_Scene_New_Direction/00_FULL_SIX_SCENE_STORYBOARD_from_user_message.jpg`.<br>The new crops and brief are in `Design/ReferencePacks/2026-11-09_Sequence_Priority_Correction_from_user/`.<br>`..._Scenes5_6_Approved_Visual_Reference_Pack_from_user/02_APPROVED_SCENE_5.png`, `03_APPROVED_SCENE_6.png` present. |
| Models | `Tools/check_models.cjs`: 48 GLB used by the game, 0 failed (Khronos validator; 33 warnings, not failures).<br>The user's 8 Tripo models: `verify_all_glbs.py` ALL 8 PASS (size, SHA-256, GLB header), 24 mobile LODs present.<br>142 GLB files in the tree, no LFS pointers. |
| Tools | Blender 5.2.3 LTS, Tripo CLI 0.11.2, glTF Transform 4.5.1, gltfpack 0.25, Khronos glTF Validator 2.0.0-dev.3.10, Vite 8.3.5, Deno 2.9.6, Playwright 1.63.0 + Chromium 153 (/opt/pw-browsers), FFmpeg 6.1.1, ImageMagick 6.9.12, Git LFS 3.4.1, Python 3.13.18, OpenCV 5.0.0, scikit-image 0.26.0, NumPy 2.5.4, SciPy 1.18.1. |
| Setup fix | The environment's own setup at session start was cut off after the Python step: the Node tools, Tripo CLI, gltfpack, Spector build, Deno and the threejs-devtools cache were missing, and the visual venv was empty.<br>`Tools/cloud_env_setup.sh` was run, and fixed so an empty venv is refilled (`--allow-existing`). |
| Tripo API (free calls only) | `tripo balance`: 1,060 credits, 0 frozen. The network secret for `openapi.tripo3d.ai` works. 0 credits spent. |
| MCP: chrome-devtools (plugin parallax-threejs 0.4.12) | `list_pages` answered. |
| MCP: playwright (plugin) | `browser_tabs` answered. |
| Plugin parallax-threejs | 0.4.12 synced through the organisation (`~/.claude/plugins/synced/...`). `ListPlugins` shows nothing although it is loaded, as on the previous account. |
| Agents listed by the Agent tool | Project: game-art-director, gameplay-visual-testing, lighting-visual-matching, water-vfx-engineer, screen4-water-motion-engineer.<br>Plugin: parallax-threejs:scenario-author, shader-reviewer, visual-debugger.<br>Skill: bubble-wash-screen-matcher. |
| Specialist lanes | `bash Tools/lanes.sh create`: all 6 worktrees recreated from GitHub; local = GitHub, 0 uncommitted (their saved work is preserved).<br>girl12, washer34 fast-forwarded and arch56, brush6, s56 merged with the integration head. Every lane pushed VERIFIED. |
| Autosave | Exactly 1 process (started by the SessionStart hook). Rounds at 17:07, 17:14, 17:22, 17:24: `github=VERIFIED`. It also pushes every lane. It stops when this cloud session ends. |

## RESTORED BUT NOT YET TESTED
- `lighting-visual-matching`, `screen4-water-motion-engineer`: launched on real tasks at ~17:27 UTC. Their result is their live test.
- The new `character-animation-specialist` (definition added this session; it auto-loads next session, so this session runs it as general-purpose with that definition).
- `game-art-director`, `gameplay-visual-testing`, `water-vfx-engineer`, the 3 plugin agents: listed, not yet launched this session.
  - Known plugin defect: the plugin agents get no MCP tools; they work with Read / Bash.
- Project Spector MCP and the plugin's Spector: built and linked (`~/.bubblewash-tools/spector`), and the server starts and lists `capture_frame` from a shell. Not connected in the session (see below).

## REQUIRES THE USER'S ACTION
1. **`/mcp` -> reconnect `spector` and `plugin:parallax-threejs:spector`.** Both failed at session start (CONNECTION_CLOSED) because their build was missing. It is built now.
2. **`/mcp` -> reconnect `plugin:parallax-threejs:threejs-devtools-mcp`.** It timed out at start (CONNECT_TIMEOUT). Its package is cached now.
3. **Optional: the environment's setup script time limit.** The setup was cut off at session start. The essential tools are installed now for this session; a new session runs the setup again.

## MISSING OR DEFERRED
- PyTorch / LPIPS / Optuna (the optional metrics venv): deliberately NOT installed. It needs ~6 GB plus ~10 GB of cache at peak, and 17 GB were free; it would have delayed the game work. Install later with `bash Tools/cloud_env_setup.sh` (then `uv cache clean`).
- Running agent processes from the previous account cannot transfer. Their work was recovered from the lane branches and HANDOFF.md files.

## The game today (real captures; full table in `Previews/WebDemo/six_scenes/14_real_game_preview_3849f5c8/README.md`)
| Screen | Status |
|---|---|
| 1 | Mostly there. |
| 2 | Partial: her face is hidden while loading; the towel is a stiff cone. |
| 3 | Partial with defects: he is hidden in a yellow dome as he goes in; his eyes detach mid-tumble; the laundry room shows through the drum. |
| 4 | Partial: almost no water behind the glass. |
| 4 -> 5 | Broken at 8.5 s: the room is visible through the drum's far end; flat water. |
| 5 | Good base: tunnel, arches, gear, machinery. He is too big; flat water. |
| 6 | Playable (swipe, coins, socks, enemies, HUD, powers). The look is not matched: no side brushes, coins too big, white water patches, he rides too tall, the gear is edge-on on the wrong side. |

## Next steps (running now; the user's order)
- Specialists redirected (`PARALLEL_LANES.md` top, `Tools/lanes.json`), all behind the candidate switch `,seq7`:
  - Character animation: the fall, Screen 2 (girl12).
  - Architecture: the drum back and the washer-to-tunnel transition (arch56).
  - Water: the wash water and the fly-through, then the Screen 6 water (s56).
  - Brushes (brush6).
- Then:
  - Merge the reviewed lane work into ONE `seq7` candidate.
  - Re-capture the whole sequence plus a gameplay recording.
  - Art director check, route test, and identity proof (plain launch and `?s3=intunnel` unchanged without `seq7`).
  - Show the user before / after and wait for approval.
