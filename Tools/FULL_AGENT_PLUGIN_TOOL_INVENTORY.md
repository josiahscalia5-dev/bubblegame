# Bubble Wash Kingdom: FULL agent, plugin, MCP, skill, command, integration and tool inventory

Permanent and reusable for every account switch. First written 8 November 2026, about 18:00 UTC, by session `ce30359f`
(https://claude.ai/code/session_01CUAtW4nh4Z5qW7Dm1JTSCB, branch `ccr-8cd911d8-0m96gr`), at the user's full-restoration mandate.
**Every "LIVE TEST" entry below was run in that session**, not copied from notes. Historical claims cite the record they come from;
anything without a record is marked **UNVERIFIED**. Nothing here is a secret. Newer sessions: add a dated column note or a section 12
entry, never delete history.

Columns: NAME | TYPE | HISTORICALLY INSTALLED? (with the record) | IN GITHUB? | CURRENTLY ENABLED? (in session ce30359f) | LIVE TEST
(session ce30359f) | RESTORATION METHOD.

Records cited: **[R1]** `ChatHistory/2026-11-04_original_account_verification.md` (the ORIGINAL account, 4 Nov ~20:40 UTC, 14 plugins
synced, each listed with its version); **[R2]** `ChatHistory/2026-11-04_new_account_tools_tripo_round5_session.md` and
`ChatHistory/2026-11-04_original_account_screen4_round7_agents_session.md` (the 16-item check with working / failing per plugin);
**[R3]** `Tools/DEV_TOOLS.md` (per-account checks of 4, 6 and 7 Nov); **[R4]** `Tools/PLUGIN_AND_MCP_RESTORE.md` (session b0abcf95);
**[R5]** `ENVIRONMENT_VERIFICATION_2026-11-08_session_57091b57.md`; **[R6]** `ChatHistory/2026-11-04_screen4_round2_and_round3_session.md`
(Meshy MCP); **[R7]** this session's evidence `Previews/WebDemo/environment_restore_2026-11-08_ce30359f/`.

## 1. What transfers through GitHub and what must be enabled on each Claude account

| Transfers AUTOMATICALLY (in the repository) | Restored FROM the repository by a script | Must be enabled SEPARATELY on each Claude account / environment | Never transfers |
|---|---|---|---|
| the game (`WebDemo/`), all references and evidence, the 5 custom agents (`.claude/agents/`), the skill (`.claude/skills/`), both SessionStart hooks and `.claude/settings.json`, `CLAUDE.md` and the handoffs, every script in `Tools/`, the Parallax scaffold (`deno.json`, `scripts/`, `lib/`, `test/visual/`), Tripo GLBs + job log, chat histories | the tool installs (`bash Tools/cloud_env_setup.sh`: Blender, Python visual + metrics, node tools, Deno, **Spector**), `WebDemo/node_modules` (`npm ci`), the autosave (hook), Spector's link into the plugin (hook `session-start-spector.sh`) | **the parallax-threejs plugin** (claude.ai, Anthropic Directory, then a NEW session); the **Tripo network secret** for `openapi.tripo3d.ai`; the **cloud environment** (network hosts + setup script); **GitHub** connection / Claude GitHub App; any optional plugin from section 5 | running processes, the scratchpad, `~/.bubblewash-tools`, `.parallax/` (local debug state, git-ignored), account plugin installs, secrets |

## 2. The five custom game-design agents (`.claude/agents/`, project-level)

| NAME | TYPE | HISTORICALLY INSTALLED? | IN GITHUB? | CURRENTLY ENABLED? | LIVE TEST (ce30359f) | RESTORATION METHOD |
|---|---|---|---|---|---|---|
| game-art-director | project agent (read-only reviewer) | yes, since 4 Nov [R1] | yes | yes (listed as an agent type) | **PASS**: read both images, ranked 3 differences live capture vs the original Screen 4, ran Bash (bundle md5 `d2a666bd`) | automatic (repository) |
| gameplay-visual-testing | project agent (tests, read-only) | yes, since 4 Nov [R1] | yes | yes | **PASS**: launched Chromium via Playwright, `?s3=intunnel` loaded, WebGL2 true, three r170, 0 console errors, screenshot [R7 `agent_tests/`] | automatic |
| lighting-visual-matching | project agent (edits) | yes, since 4 Nov [R1] | yes | yes | **PASS** (read-only task): mapped scene07's wall / rail materials and glow sprites in `tripo_l1.js` with line numbers; reported `scene07_chamberShell` commented out at line 174 (a lead for the next scene07 pass) | automatic |
| water-vfx-engineer | project agent (edits) | yes, since 4 Nov [R1] | yes | yes | **PASS** (read-only task): Level 1 water shaders in `level1.js` (`waterFrag` l.248, `waterMat` l.360, `wetWaterMat` l.389), confirmed they share nothing with the accepted Screen 4 water | automatic |
| screen4-water-motion-engineer | project agent (edits; live MCP) | yes, since 6 Nov (user-approved) [R3][R5] | yes | yes | **PASS, MCP tools reached**: threejs-devtools `bridge_status` connected, `object_details`/`geometry_details` on `output_unwrapped` (147,212 vertices, MeshBasicMaterial), `renderer_info` (54 programs), chrome-devtools `evaluate_script` (WebGL2 true) and console | automatic; needs the parallax plugin for its MCP tools |

No other project agents were ever recorded: `Tools/verify_restore.sh` checks exactly these five and every handoff lists five (four until 6 Nov).

## 3. parallax-threejs 0.4.12 (Anthropic Directory, community publisher; MIT; per account)

| NAME | TYPE | HISTORICALLY INSTALLED? | IN GITHUB? | CURRENTLY ENABLED? | LIVE TEST (ce30359f) | RESTORATION METHOD |
|---|---|---|---|---|---|---|
| parallax-threejs 0.4.12 | Claude Code plugin | yes, from 6-7 Nov (second account) [R3][R4][R5] | no (account) | **yes** (synced at session start; the catalog API's `enabled` flag reads false even so, so trust the loaded tools) | its MCP tools, agents and commands below | claude.ai: Customize / plugins, Anthropic Directory, `parallax-threejs`, enable; START A NEW SESSION |
| chrome-devtools-mcp 1.6.0 | MCP server (plugin) | yes [R4][R5] | no | yes | **PASS**: resize, navigate (`http://localhost:9222/index.html?s3=intunnel`), evaluate (WebGL2), screenshot, console | plugin |
| threejs-devtools-mcp 0.2.1 | MCP server (plugin) | yes [R4][R5] | no | yes | **PASS, real three.js inspection of the running game**: `bridge_status` connected, `find_objects` (the character `output_unwrapped`), `renderer_info`, `dispose_check`, `memory_stats` (282 MB est.), `camera_details`, `set_camera` | plugin + serve `WebDemo` on :3000, open via :9222, expose `window.__THREE_SCENE__/__THREE_CAMERA__/__THREE_RENDERER__` from `window.__bw.debug()` |
| playwright-mcp 0.0.78 | MCP server (plugin) | yes [R4][R5] | no | yes | **PASS**: `browser_tabs list` | plugin |
| spector (spector-mcp 1.1.0, 13 tools) | MCP server (plugin; ships WITHOUT its server) | built by hand in 57091b57's container, listed only, never connected in a session [R5] | build steps yes (setup script + hook) | **NOT connected in this session** (it failed at session start: "Connection closed", before it was built) | **standalone stdio PASS, now including a real capture**: `load_url` on the game, `list_canvases` (canvas `view` 540x1080 webgl2), `capture_frame` (1,444 commands, 209 draw calls, 51 programs, 0 GL errors), `get_context_info`. Two defects found and fixed: (1) upstream Spector.js's `npm install` now fails (`unrs-resolver` postinstall, exit 127): install scripts skipped; (2) Spector's Playwright 1.59 looked for a Chromium build the image lacks, so `load_url` always failed (also in 57091b57's container): pinned to the image's Playwright 1.63.0 | `Tools/cloud_env_setup.sh` builds it in `~/.bubblewash-tools/spector` (before Claude starts); `.claude/hooks/session-start-spector.sh` links it into the plugin's `vendor/spector` at session start; if the server still started first, `/mcp` and reconnect `plugin:parallax-threejs:spector` |
| scenario-author | plugin agent | yes [R4][R5] | no | yes (listed) | **runs, NO MCP tools**: had Read, Glob, Write, Bash; `browser_tabs` not available | defect in the plugin (below) |
| shader-reviewer | plugin agent | yes [R4][R5] | no | yes | **runs, NO MCP tools**: had Read, Grep, Glob, Bash; did a correct static binding review of `tripo_l1.js` (no mismatches; the binding script's one hit was a false positive) | defect in the plugin |
| visual-debugger | plugin agent | yes [R4][R5] | no | yes | **runs, NO MCP tools**: Bash only; all four MCP calls "tool not available" | defect in the plugin |
| plugin-agent defect | limitation | known since 7-8 Nov [R4][R5] | - | **STILL PRESENT** | its agents' `tools:` lines name `mcp__playwright-mcp`, `mcp__threejs-devtools-mcp`, `mcp__chrome-devtools-mcp`, `mcp__spector`; the real names carry the `plugin_parallax-threejs_` prefix (the project agent screen4-water-motion-engineer uses the real names and works) | only the plugin's author can fix it. **Workaround:** live MCP work in the main session or `screen4-water-motion-engineer`; static shader review by `shader-reviewer` still works |
| `qa-visual-test-harness` | plugin skill | yes (listed) [R5] | no | yes | loaded and listed; documents `test/visual/` | plugin |
| `/parallax-threejs:init` | plugin command | not run before (waited for the user) [R4][R5] | **its output now is** | yes | **RUN this session** after inspection (the user's mandate: inspect, then initialize preserving files): every target path was free, 28 files copied, 0 skipped, `.mcp.json` left untouched (it exists, empty on purpose); `deno.json` written with its 7 tasks, `nodeModulesDir: none` and imports, Playwright pinned to **1.63.0** (inside the template's `^1.62.0`, matching the image's Chromium) | already in the repository |
| `/parallax-threejs:checkpoint` | plugin command (`deno task checkpoint <label>`) | never run before | scaffold yes | yes | **PASS** after one fix: the scaffold's `--no-sandbox` fallback missed Chrome's "Running as root" message (cloud containers run as root); `scripts/lib/live-scene.ts` extended. 595 objects, 0 console messages, 115 geometries, 36 textures | repository. **Prerequisite** (the game is not changed for it): point Parallax's own tab and expose the scene with `node Previews/WebDemo/environment_restore_2026-11-08_ce30359f/expose_scene.cjs "http://localhost:3000/index.html?s3=intunnel"` (sets `window.scene`, `__renderer__`). **Doc bug:** with Deno 2.9 write `deno task checkpoint <label>`, NOT `-- <label>` (the `--` becomes the label) |
| `/parallax-threejs:diff` | plugin command (`deno task diff-checkpoints <label>`) | never run | scaffold yes | yes | **PASS**: two checkpoints, all deltas 0 | repository |
| `/parallax-threejs:export-report` | plugin command | never run | scaffold yes | yes | **PASS**: HTML report [R7 `parallax_commands/`] | repository |
| `/parallax-threejs:sweep` | plugin command | never run | scaffold yes | yes | **PASS**: `output_unwrapped scale.x 0.9..1.1, 3 steps` contact sheet (runtime only, Parallax's own tab) [R7] | repository |
| `/parallax-threejs:replay` | plugin command | never run | scaffold yes | yes | **wired** (prints its usage); **no scenario exists yet**, so nothing to replay. A scenario (protecting e.g. the accepted `?s3=intunnel` start) is a permanent regression file: the user's decision | repository; write one with scenario-author's method (by hand: the agent lacks MCP) |
| `visual:run` / `visual:accept` | Deno tasks (SHA-indexed regression) | never run | scaffold yes | yes | runs; with 0 scenarios it only warns about a dirty tree | repository |
| `/parallax-threejs:memcheck` | plugin command (MCP `dispose_check` + `memory_stats`) | worked in 8140e507 [R4] | - | yes | **PASS**: 0 orphaned geometries / textures; 20 hidden meshes = the opt-in candidates | plugin |
| `/parallax-threejs:sync-view` | plugin command (MCP camera) | not exercised [R5] | - | yes | **PASS**: `camera_details` + `set_camera` to the same values (a no-op) | plugin |
| `/parallax-threejs:ship-check` | plugin command (Lighthouse + trace) | not run [R4][R5] | - | yes | **LIMITED**: `lighthouse_audit` (mobile, snapshot) exceeded the MCP's 60 s limit on the live WebGL page in software rendering | optional; works on a lighter page |
| shader-binding check | plugin script (`scripts/check-shader-bindings.ts`, Deno) | - | no | yes | used by shader-reviewer this session (one false positive, explained) | plugin + Deno |
| GLSL language server (`.lsp.json`: `shader-language-server --glsl`) | plugin LSP | never recorded | no | declared, **binary not installed** | none | optional; not needed (shaders live in JS strings, not `.glsl` files) |
| Deno 2.9.6 | runtime for the commands above | installed by 57091b57 [R5] | install line in the setup script | yes | **PASS** (`deno --version`; the tasks above ran) | `Tools/cloud_env_setup.sh` (`npm install -g deno@2`) |

## 4. Custom and built-in skills

| NAME | TYPE | HISTORICALLY INSTALLED? | IN GITHUB? | CURRENTLY ENABLED? | LIVE TEST (ce30359f) | RESTORATION METHOD |
|---|---|---|---|---|---|---|
| bubble-wash-screen-matcher | project skill | yes, since 4 Nov [R1][R3] | yes | yes | **PASS**: loaded with the Skill tool; its tool `WebDemo/tools/screen4/compare_s4.py` compared the live `?s3=intunnel` capture with the ORIGINAL Screen 4 (feature coverage, region ΔE2000 / SSIM / edges, heat-map sheet) [R7 `skill_compare/`] | automatic |
| other custom skills | - | **none recorded anywhere** (searched all handoffs, `ChatHistory/`, `.claude/`, `~/.claude/skills`) | - | - | - | none to recover |
| `.claude/commands/` (custom slash commands) | - | **none ever existed** [R5] | - | - | - | - |
| Skill Creator | built-in skill (`anthropic-skills:skill-creator`) | built-in on every account [R1][R3]; also a catalog plugin, never installed | - | yes (built-in) | listed | built-in |
| code-review, security-review, simplify, init, run, loop, update-config | built-in Claude Code skills | built-in [R3] | - | yes | listed | built-in |
| session-start-hook | built-in skill | - | - | yes | listed (the project's hooks were written by hand) | built-in |

## 5. Other Claude Code plugins named in the user's earlier setup (status determined from records, not assumed)

On the ORIGINAL account (4 Nov) 14 plugins were synced into sessions [R1][R2]. Every later account had none of them [R3]; this account
has parallax-threejs, **Unity 0.1.9-beta** and **Fastly Agent Toolkit 0.1.0** (both enabled on this account, never recorded or used
for this game). The plugins below can only be enabled by the user (claude.ai, Customize / plugins, Anthropic Directory) and load in
a NEW session.

| NAME | TYPE | HISTORICALLY INSTALLED? | IN GITHUB? | CURRENTLY ENABLED? | LIVE TEST / historical result | RESTORATION METHOD / recommendation |
|---|---|---|---|---|---|---|
| Playwright (Microsoft) | plugin (MCP) | **verified installed**, original account [R1]: opened a page | no | no | historically working [R2] | **do not enable**: duplicate of parallax's `playwright-mcp` (two browsers on 4 cores) |
| GitHub | built-in cloud GitHub MCP (also a catalog plugin) | built-in; never a plugin [R1][R2] | - | **yes (built-in)** | pushes verified this session (`Push: VERIFIED`) | built-in; **do not enable** the plugin (duplicate) |
| TypeScript LSP | plugin (LSP) | original account had the COMMUNITY `typescript-native-lsp` 1.1.2, which **failed** (needs TypeScript 7) [R1][R2]; Anthropic's official `typescript-lsp` 1.0.0 is in the catalog since 6 Nov | no | no | `tsc` present | optional: Anthropic's `typescript-lsp` (the game is plain JavaScript; low value) |
| Pyright LSP | plugin (LSP) | original account had the COMMUNITY `typemux-cc` 0.2.18 (worked only beside a `.venv`) [R1][R2]; Anthropic's `pyright-lsp` 1.0.0 now in the catalog | no | no | `pyright` present at `/root/.local/bin/pyright` | optional: Anthropic's `pyright-lsp` |
| Context7 (Upstash) | plugin (remote MCP) | **verified installed**, original account, **not usable**: needs an OAuth sign-in a cloud session cannot start [R1][R2] | no | no | - | optional, not recommended (same sign-in problem; three r170 docs are readable from the web) |
| Superpowers (obra) 6.4.2 | plugin (skills + SessionStart hook) | **verified installed and working** (its start-up and verification skills loaded) [R1][R2] | no | no | - | optional workflow skills: claude.ai, Anthropic Directory, `Superpowers` |
| Chrome DevTools | MCP | original account: via community `claude-bridge` 0.1.0 (bundling chrome-devtools-mcp 1.1.1), working [R1][R2]; no official plugin exists | no | **yes, via parallax** (`chrome-devtools-mcp` 1.6.0) | PASS (section 3) | already restored through parallax; **do not add another** |
| Frontend Design | plugin (skill) | verified installed 1.1.1, listed, not run [R1] | no | no | - | optional (UI/HUD design; the HUD is approved art) |
| Skill Creator | built-in skill / plugin | built-in [R1] | - | yes (built-in) | listed | built-in; do not enable the plugin |
| Claude Code Setup | plugin (skill) | verified installed 1.0.0, listed, not run [R1] | no | no | - | optional |
| CLAUDE.md Management | plugin (skill + command) | verified installed 1.0.0, listed, not run [R1] | no | no | - | optional |
| Security Guidance | plugin (hooks) | verified installed 2.0.13, **working** (its hook warned on a risky test file) [R1][R2]; catalog now 2.0.17 | no | no | - | optional; its hooks run on every edit and stop (slower sessions); built-in `/security-review` covers reviews |
| Commit Commands | plugin (commands) | verified installed 1.0.1, `/commit` **working** [R2] | no | no | - | optional; `Tools/save_now.sh` is the project's verified save path |
| Code Review | plugin (command) | verified installed 1.0.1, **failed in cloud** (needs `gh`) [R2] | no | no | - | not recommended; use built-in `/code-review` |
| Feature Dev | plugin (agents + command) | verified installed 1.0.1, explorer agent **working** [R2] | no | no | - | optional |
| Code Simplifier | plugin (agent) | verified installed 1.0.0, **working** (report-only run) [R2] | no | no | - | optional; built-in `/simplify` |
| Plugin Developer Toolkit (`plugin-dev`) | plugin | **UNVERIFIED: no record of it on any account** (it appears only in the user's 8 Nov message); available in the catalog | no | no | - | only if the user wants to build plugins; not needed for the game |
| Unity 0.1.9-beta (Unity Technologies, Anthropic Directory) | plugin (33 skills, no agents / MCP / commands) | **not recorded**; enabled on this account | no | **SYNCED** (33 skill folders on disk), **LOADED** (all 33 listed as `unity:*` skills in the session), **TESTED** (`unity:ui` invoked with the Skill tool: loaded, routes to ui-uitk / ui-ugui / ui-imgui; nothing created) | see section 5a | keep for future Unity projects; never used on this three.js game |
| Fastly Agent Toolkit 0.1.0 | plugin (skills) | **not recorded**; enabled on this account | no | yes | listed; unrelated (CDN) | the user may disable it; harmless |

## 5a. The Unity plugin against THIS game (checked 8 Nov ~18:10 UTC, session ce30359f; the game stays three.js, nothing migrated)

All 33 skills (2d-pixel-perfect, asset-transformer-toolkit, audio-setup-mixers, build-gtk, build-live-game, craft-game-floors,
create-2d-physics, create-tile-palette-or-rule-tiles, generate-editor-search-query, implement-in-app-purchases, initialize-ai-navigation,
levelplay-unity-integration, localization, manage-sprite-atlas, migrate-birp-to-urp, new-unity-project, optimize-audio,
optimize-text-mesh-pro, optimize-web, physics-3d-collision, setup-multiplayer-services, setup-vivox-voice-chat,
shader-graph-create-custom-node, sprite-editor, sprite-segment-3x3grid, ui, ui-imgui, ui-ugui, ui-uitk, unity-cli,
unity-package-management, urp-postprocessing, validate-urp-render-graph-renderer-feature) act on a Unity project: their only
executable files are 59 C# scripts (58 import UnityEngine / UnityEditor), one HLSL file and one shell file of `toktx` examples
(no Python or JavaScript). **None runs on the three.js game,
and none generates 3D assets or scenery**, so none helps rebuild "Avoid Enemies!" directly. What carries over is advice only:
- `optimize-web`: KTX2 / Basis texture compression with `toktx` (three.js reads KTX2; glTF Transform can write it once `toktx` is
  installed). Relevant to mobile memory: the live game holds about 205 MB of uncompressed textures (memcheck). It changes pixels, so
  it would need its own switch, a proof that nothing visible moved, and the user's approval. A later optimisation, not a look fix.
- `craft-game-floors` (art direction, scene lighting, VFX rules, a generic "visual scorecard"): sensible general advice for NEW games;
  this project already measures against an exact approved image (`compare_s4.py`, the art director), which is stricter.
- `urp-postprocessing`: bloom / tone-mapping concepts that map to three.js post, already matched to the approved art here.
- `asset-transformer-toolkit` (Pixyz decimation / LOD) needs the Unity Editor; Blender and glTF Transform already do this here.
Priority stays: three.js, Tripo, Blender, Parallax, the five design agents and the screen-matcher skill.

## 6. Integrations and external services

| NAME | TYPE | HISTORICALLY INSTALLED? | IN GITHUB? | CURRENTLY ENABLED? | LIVE TEST (ce30359f) | RESTORATION METHOD |
|---|---|---|---|---|---|---|
| Tripo API (`openapi.tripo3d.ai`) | network secret + Tripo CLI 0.11.2 | yes: browser / key sign-ins 4 Nov; network secret since 8 Nov [R3] | no (secret); CLI install yes | **yes** | **PASS**: `tripo doctor` all OK (region ov); **balance 1,060 credits, 0 frozen** (free); `BW_TRIPO_CHECK_ONLY=1 bash Tools/tripo_job.sh` with a real image: every check passed, dry run 120 credits, nothing submitted | per environment: Network secrets, host `openapi.tripo3d.ai`, Bearer, the user's key; run with `TRIPO_API_KEY=tsk_proxy-injected`; downloads need host `openapi-dl.data.tripo3d.com` |
| GitHub (repository, push, MCP) | built-in | yes | - | yes | **PASS**: fetch, normal merges, `save_now.sh` `Push: VERIFIED` | GitHub connected on claude.ai + the Claude GitHub App |
| Meshy (MCP 0.6.7, 28 tools) | MCP + network secret | **actually connected** 4 Nov (balance 17 read) [R6][R3], then **removed by the user's decision** (4 Nov) | old `.mcp.json` entry in git history only | no | not tested (forbidden) | **do NOT reconnect** (CLAUDE.md: Meshy is not used) |
| Hyper3D | - | **never connected** (the user said not to use it) [R6] | - | no | - | none |
| rembg 2.0.87 | Python tool (scratch venv) | used once by 57091b57 for cut-outs [R5] | no | no | - | optional: `uv venv` + `pip install rembg` in the scratchpad when cut-outs are needed |
| Spector.js (project's own capture) | npm `spectorjs` in a scratch folder | yes, 6 Nov (`WebDemo/tools/screen4/spector_capture.cjs`, `spector_report.py`) | scripts yes | on demand | not rerun (the Spector MCP capture above covers it) | `npm i spectorjs` in a scratch folder (see the script header) |

## 7. Development tools (all LIVE-tested in session ce30359f)

| NAME | Version | HISTORICALLY INSTALLED? | IN GITHUB? | CURRENTLY ENABLED? | LIVE TEST | RESTORATION METHOD |
|---|---|---|---|---|---|---|
| Blender | 5.2.3 LTS | yes [R1][R3] | installer | yes | **PASS**: headless, added a cube, imported the Tripo enemy GLB | `cloud_env_setup.sh` (needs host `download.blender.org`) |
| Tripo CLI | 0.11.2 | yes | installer | yes | **PASS** (section 6) | `cloud_env_setup.sh` |
| three.js / WebGL2 | three 0.170.0, esbuild 0.24.0 | yes | `WebDemo/package.json` (pinned) | yes | **PASS**: WebGL2 true (SwiftShader); `node build.mjs` byte-identical (`verify_restore.sh --build`) | `cd WebDemo && npm ci` |
| Node.js / npm | 22.23.4 / 10.9.9 | yes | - | yes | PASS | cloud image |
| Vite | 8.3.5 | yes | installer | yes | PASS (`vite --version`; side tests only, the game builds with esbuild) | `cloud_env_setup.sh` |
| Playwright + Chromium | 1.63.0 / Chromium 153 (build 1243) | yes | - | yes | **PASS** (the agent's probe and the setup check) | cloud image; never `playwright install`; pin any other copy to 1.63.0 |
| glTF Transform | 4.5.1 | yes | installer | yes | **PASS**: `inspect` on a Tripo GLB | `cloud_env_setup.sh` |
| glTF Validator | 2.0.0-dev.3.10 | yes | installer | yes | **PASS**: 0 errors, 1 warning (tangents) on `l1_enemy_tripo.glb` | `cloud_env_setup.sh` |
| Python | 3.13.18 | yes | - | yes | PASS | cloud image |
| OpenCV / scikit-image | 5.0.0 / 0.26.0 | yes | installer | yes | **PASS** (comparison above; SSIM) | `cloud_env_setup.sh` (`~/.bubblewash-tools/visual`) |
| PyTorch / LPIPS / Optuna | 2.15.0 / 0.1.4 / 5.0.0 | yes, since 6 Nov [R3] | installer | yes (**was BROKEN at this session's start**) | **PASS after a fix**: LPIPS(original, original) = 0.000, LPIPS(original, live) = 0.613; an Optuna study of 5 trials. Defect fixed: a timed-out first install left an empty venv and `uv venv` refused to reuse it, so every rerun failed at once; `--allow-existing` added | `cloud_env_setup.sh` (`~/.bubblewash-tools/metrics`; needs `download.pytorch.org`) |
| Deno | 2.9.6 | yes, 8 Nov [R5] | installer | yes | PASS | `cloud_env_setup.sh` |
| ImageMagick | 6.9.12-98 | yes | - | yes | **PASS** (resize) | cloud image |
| FFmpeg | 6.1.1 | yes | - | yes | **PASS** (H.264 encode) | cloud image |
| Git / Git LFS | 2.43.0 / 3.4.1 | yes | - | yes | PASS (0 LFS rules; no file over 50 MB) | cloud image / setup script |
| tsc / pyright | on the machine | yes [R3] | - | yes | present | cloud image |
| Android APK builder (`Tools/android_apk/build_apk.sh`) | - | yes (script) | yes | **SDK not installed** | not run | optional: needs a JDK and an Android SDK at `~/android-sdk` (not in the setup script) |
| Unity-era checks (`Tools/verify/`) | Unity 6000.3 compilers | yes (older Unity version of the project) | yes | no | not run | obsolete for the three.js game; `Tools/verify/setup.sh` streams a 4.5 GB archive: do not run |

**Project scripts (in GitHub):** `Tools/save_now.sh` (PASS, verified pushes), `Tools/autosave.sh` (PASS), `Tools/tripo_job.sh` (PASS,
check-only), `Tools/verify_restore.sh` (27 PASS; its one FAIL was a stale list, fixed: the pass 8 bundle `d2a666bd` with its 0 px proof),
`Tools/preservation_audit.sh` (67 present, 0 missing, six Tripo GLBs VERIFIED, no credential pattern), `Tools/cloud_env_setup.sh`,
`Tools/bw_tools_env.sh`, `Tools/save_guard.py`, `Tools/export_chat_history.py`, `Tools/export_agent_transcripts.py`,
`Tools/snapshot_agent_worktrees.py`, `Tools/snapshot_lead_worktree.sh`, `Tools/generate_ui_sprites.py`; game tools in `WebDemo/tools/`
(screen3, screen4, screens12, level1, models, tripo, capture / compare / record scripts).

## 8. Save system and session safety (LIVE in ce30359f)

| Item | Result |
|---|---|
| SessionStart hook (`.claude/hooks/session-start.sh`) | PASS: started the autosave at this session's start ("Autosave restarted") |
| Exactly one autosave, 5-minute rounds, pinned branch | PASS: one `Tools/autosave.sh` process, `BW_AUTOSAVE_BRANCH=ccr-8cd911d8-0m96gr`; every round `github=VERIFIED` in `~/.bubblewash-autosave/save_history.log` |
| Agent transcripts | saved by the autosave to `ChatHistory/2026-11-08_session_ce30359f_design_agent_transcripts.md` |
| Branch ownership | this session wrote only its own branch; merged `ccr-b67aeffb-d94mmq` and `claude/bubble-wash-kingdom-continue-z9nmm1` (chat-history commits only) with normal merges; with deepened history (844 commits) every other branch is contained |
| Credentials | none in the repository (audit); Tripo's key only as the environment's network secret |
| Lesson | the autosave commits everything not ignored: local tool state must be in `.gitignore` BEFORE a tool runs (Parallax's `.parallax/` Chrome profile was committed once, then untracked; it held only localhost caches) |

## 9. Unresolved limitations (and whether they block the next game task)

| Limitation | Essential for the next task (Screen 09 "Avoid Enemies!" 3D scenery)? |
|---|---|
| Spector MCP not connected in THIS session (built and tested over stdio; it joins after `/mcp` reconnect or at the next session start via the hook) | **no**: chrome-devtools + threejs-devtools cover live inspection; the project's own Spector capture script also works |
| Parallax plugin agents get no MCP tools (plugin defect) | **no**: the main session and `screen4-water-motion-engineer` have the tools |
| `ship-check` Lighthouse times out on the live game (software WebGL, 60 s MCP limit) | no (optional pre-ship pass) |
| `replay` / `visual:run` have no scenario yet | no (a regression scenario is the user's call) |
| GLSL language server binary absent | no |
| Optional plugins (Superpowers, Frontend Design, LSPs, ...) not enabled on this account | no |
| Android SDK absent | no (only for building a phone APK) |
| Captures run in software WebGL (slow; one or two browsers at a time) | no, but plan captures sequentially |

**Essential and working:** the 5 custom agents, chrome-devtools / threejs-devtools / playwright MCP, Blender, Tripo (1,060 credits),
three.js + build, Playwright, OpenCV / scikit-image / LPIPS, the screen-matcher skill, GitHub with verified autosave.

## 10. Restore checklist for the next account (all from this file; run LIVE, never mark PASS from notes)

1. Enable **parallax-threejs** on the account (claude.ai, Customize / plugins, Anthropic Directory), environment with the setup script
   and hosts (`BUBBLE_WASH_ACCOUNT_SWITCH_HANDOFF.md` section 3), the **Tripo network secret**, GitHub; start a NEW session.
2. `bash Tools/verify_restore.sh --build`, `bash Tools/preservation_audit.sh <branch>`; if `~/.bubblewash-tools` is missing or a step
   failed: `bash Tools/cloud_env_setup.sh` (safe to rerun).
3. ToolSearch `mcp__plugin_parallax-threejs`: chrome-devtools, playwright, threejs-devtools, **and spector** tools. If spector is
   missing: `ls -l <plugin>/vendor/spector` (the hook's link), then `/mcp`, reconnect `plugin:parallax-threejs:spector`.
4. Live tests: section 3's methods (serve :3000, open via :9222, expose the scene); Spector over stdio:
   `node Previews/WebDemo/environment_restore_2026-11-08_ce30359f/spector_live_test.mjs <plugin>/vendor/spector/mcp/dist/index.js "http://localhost:3000/index.html?s3=intunnel"`.
5. Each agent one harmless task (the prompts used are summarised in section 2; plugin agents: report their tool list).
6. `TRIPO_API_KEY=tsk_proxy-injected tripo balance`; `BW_TRIPO_CHECK_ONLY=1 bash Tools/tripo_job.sh test make <image> -o <scratch>`.
7. Parallax tasks: expose the scene (`expose_scene.cjs`), `PARALLAX_HEADLESS=true deno task checkpoint <label>` (twice), then
   `deno task diff-checkpoints <label>`, `deno task export-report <label>`.
8. Update this file (a dated note per changed row) and `BUBBLE_WASH_ACCOUNT_SWITCH_HANDOFF.md`.

## 11. Evidence (session ce30359f)
`Previews/WebDemo/environment_restore_2026-11-08_ce30359f/`: `mcp_live/` (the chrome-devtools capture), `agent_tests/` (the testing
agent's Playwright capture), `skill_compare/` (the screen-matcher comparison), `parallax_commands/` (checkpoint, diff, HTML report,
sweep sheet), and the three test scripts (`spector_live_test.mjs`, `spector_stdio_test.mjs`, `expose_scene.cjs`).

## 12. Change log
- 8 Nov 2026 ~18:00 UTC, session ce30359f: first version (everything above).
