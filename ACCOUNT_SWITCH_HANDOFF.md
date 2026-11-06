# Account-switch handoff: Bubble Wash Kingdom, Screen 4

Written on 6 November 2026, about 22:50 UTC, by the sixteenth session (session id `62b942a4`), so another Claude account
can continue exactly where this one stopped. Nothing in it is a secret. The second account does NOT automatically have
the first account's plugins, cloud environment, chat, connectors or credentials: verify each item in section 7.

## 1. Where the work is

| item | value |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame (GitHub user `josiahscalia5-dev`) |
| Active branch | `ccr-10503be1-pnv5vq`. Continue on THIS branch; never merge experiments into the accepted build without the user's approval |
| Latest pushed commit | run `git log -1` on the branch: the handoff's own commit is the head. Before it: `87fcae6` (22:45 UTC autosave) and `06e394f` (the specialist review) |
| Branch history | the fifteenth session's `ccr-1535d773-7e5f95` (left untouched) -> this branch |
| Read first | `CLAUDE.md` (the project rules), then `HANDOFF.md` (its top section), then this file |
| Chat history | `ChatHistory/2026-11-06_session_62b942a4.md` (this session, exported by the autosave), earlier sessions beside it |

## 2. The visual authority, and how to compare

- **The ONLY target:** the ORIGINAL approved Screen 4,
  `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536, sha256
  `b30dc6a1794213be663b38d709c41994f9b90fbdff1606eb034310c4cab8ff16`). Everything else (boards, kits, concept sheets,
  `02_APPROVED_SCREEN_4_FULL.jpg`) is supporting material only. See `CLAUDE.md`.
- **The comparison protocol (used since R4):**
  - **Moments:** seed 7, no steering, at **start** (Tap to Start, game clock 3.517 s; `layer_diag.cjs NOTAP=1`), **+1 s**
    and **+2 s** after the tap (`T=1.0`, `T=2.0`), on the 768 x 1536 canvas (`VIEW=700x1076`, `DPR=1536/1076`).
  - **Sheets:** ORIGINAL | previous | new, at full resolution.
  - **Motion:** the swipe-and-jump clip (`53_swim/scripts/record_clip.sh <label> <s3>`: Pixel 7 screen, tap 2.0 s, swipe
    left 3.0 s, right 3.9 s, jump 4.8 s, landing about 5.5 s).
  - **Judging:** by eye, with the read-only `game-art-director`. Revert anything that looks less like the original.
  - **Numbers support the judgement, they never decide it.** Never quote a similarity score without naming its measure.
  - **Never judge on the start frame alone:** the moving tunnel differs from the start frame (section 4).
- **Identity proof** for the accepted build and older switches: `53_swim/scripts/identity.sh <label> <s3 or ','>
  <start|T1.0>` (the old bundle against the new, 0 pixels must differ).
- **Gameplay tests:**
  - `WebDemo/tools/screen3/s3_func.cjs` and `r2_func.cjs` (`S3=...`; see `53_swim/gameplay/`);
  - the frame-by-frame state trace `WebDemo/tools/screen4/motion_trace.cjs`: its gameplay fields must equal the accepted
    build's.
  - **Note:** recorded clips' pickup frames vary run to run, even for the same build
    (`53_swim/gameplay/coin_timing_check.md`).

## 3. The accepted build and the experiments

- **Accepted (do not change):** `?s3=intunnel` (and the normal game, no switch).
  - It is byte-identical across every build on this branch: the old bundle `7402397a` against the current `5bb24e28`,
    0 pixels at start and +1 s; R9 and the normal game 0 too (`53_swim/identity/`).
  - The user has never approved replacing it.
- **Experimental switches** (all behind flags in `WebDemo/src/tunnel_s4_bt.js`, none merged):

| switch | state |
|---|---|
| `intunnel,water2` .. `water8` | the water candidates R2-R8 (`44_`-`50_` folders) |
| `intunnel,water9` (**R9**) | the current water candidate, rejected by the user: a pale white-blue band travels with her |
| `intunnel,swim` | this session's candidate (`53_swim/`): heroSwell as a tight collar of clear water, swim rhythm. REJECTED by the art director: "a frilled glass bowl on blue pillows", mid azure not cobalt. Its motion parts measured well |
| `intunnel,swim2` | reserved: `SWIM2_ON` is exported in `tunnel_s4_bt.js` but nothing reads it and the bundle does not contain it yet (rebuild when implementing) |
| `domes`, `bank`, `wave`, `crest` | rejected earlier experiments, kept as records |

- **Build:** `cd WebDemo && npm install && node build.mjs`. Commit `game.bundle.js` with its source. The current bundle
  is `5bb24e28`, built from the source before `SWIM2_ON` was added.

## 4. Current Screen 4 findings (measured; details in `Previews/WebDemo/screen4_round9_match/52_diagnosis/README.md`)

1. **The pale travelling mound is `heroSwell` alone** (`WebDemo/src/tunnel_r7_hero_water.js`).
   - It is a 1.9 m horseshoe mound built in her frame and moved with her every frame.
   - It covers 19-24 % of the frame (100 % of its width at 0.90 H) and changes 73-76 % of the band at her base. Every
     other layer changes under 13 %.
   - Since water2 its face shows a STILL picture of the original's foam, pinned to her (`tunnel_s4_water2.js`,
     `uBwRef` captured once). Proved live: identical at +0, +1 and +2 s while she travels 14 m.
   - So the water touching her wobbles with her instead of flowing past: optical flow at her contact, streaming
     41-56 px/s against 153-162 px/s of wobble.
2. **The tunnel goes pale only while moving.**
   - **The cause:** `r3Swirl` (`tunnel_r3.js:263-290`). Round 4 hides it once at build (`tunnel_r4.js:65`), but its own
     updater (`tunnel_r3.js:286`) shows it again every frame inside the drum.
   - **Measured, tunnel zone:** pale 23.0 % at +1 s against the original's 8.3; without it 11.6. Saturation 0.46 -> 0.54
     (original 0.55).
   - **Lavender:** the moving tunnel also loses the original's lavender rings (5 % against 28.5).
3. **The floor's white "paper-scrap" dashes are `focusFloorGLSL`** (`tunnel_r9_match_water.js:329-355`, settings
   `MATCH_WATER.floorFx` in `tunnel_r9_focus.js:278-279`).
4. **The foreground is not short of cobalt.** The original's foreground is pale, white and lavender rounded heaps across
   the whole width; the difference is shape and motion, not colour totals.
5. **Her motion exists:** bob, lean (about +/-24 deg), somersault, squash (`game.js` `updateMascot`). What is missing is
   water that moves relative to her: the floor's own V wake, ring and ripples (`lqWake`) are hidden under the mound.
6. **The tight-collar idea (`swim`) failed by eye:**
   - it reads as an object;
   - the original's foreground needs the full-width spread of rounded heaps;
   - those heaps must move with the water, not be pinned to her.

## 5. Unfinished work (in order)

1. **The three specialist inspections started at about 22:30 UTC.** Reports go to
   `Previews/WebDemo/screen4_round9_match/54_specialists/` (brief: `BRIEF.md`):
   - `water_vfx_engineer.md`: the foreground water and the contact edge;
   - `lighting_visual_matching.md`: the moving tunnel's colour, r3Swirl, the floor dashes, the lavender;
   - `animation_review.md`: the swim motion.

   They inspect only, with no code changes. If a file is missing, that inspection did not finish: rerun it with the same
   brief and the prompts summarised in section 6.
2. **Waiting for the user's decision:**
   - whether to activate the proposed project subagent `screen4-water-motion-engineer` (draft:
     `54_specialists/PROPOSED_screen4-water-motion-engineer.md`; copy it to `.claude/agents/` only after approval);
   - whether to build the correction behind `?s3=intunnel,swim2`.

   **The user said: no game-code changes until they approve.**
3. **When approved, build `swim2`:**
   - r3Swirl kept hidden as Round 4 intended;
   - the floor's paper dashes replaced;
   - the foreground as moving rounded heaps;
   - the swim motion.

   Then test it per section 2 and report to the user without merging.

## 6. Specialist agents and their roles

| agent | where | what it does | travels with the repo? |
|---|---|---|---|
| `water-vfx-engineer` | `.claude/agents/water-vfx-engineer.md` (project file, not a marketplace plugin) | water round her, contact, wakes, bubbles; can edit | yes |
| `lighting-visual-matching` | `.claude/agents/lighting-visual-matching.md` (project file) | tunnel architecture, lighting, wall water, bloom and grade; can edit | yes |
| `game-art-director` | `.claude/agents/game-art-director.md` (project file) | read-only judge against the ORIGINAL | yes |
| `gameplay-visual-testing` | `.claude/agents/gameplay-visual-testing.md` (project file) | read-only gameplay tests, identity proofs | yes |
| swimming / gameplay specialist | `54_specialists/PROPOSED_swim-animation-reviewer.md` (draft, inactive) | swim motion; run so far as a general-purpose subagent with this role | yes (copy to `.claude/agents/` to activate) |
| `screen4-water-motion-engineer` | `54_specialists/PROPOSED_screen4-water-motion-engineer.md` (draft, inactive, awaiting approval) | one owner for water + transparency + swim motion, with live DevTools | yes (copy to activate) |
| `parallax-threejs:visual-debugger`, `:shader-reviewer`, `:scenario-author` | the `parallax-threejs` plugin | runtime rendering diagnosis; GLSL binding review; regression scenarios | NO: enable the plugin on the account |

**Also in the repo:**
- the project skill `.claude/skills/bubble-wash-screen-matcher/`;
- the SessionStart hook `.claude/hooks/session-start.sh` (restarts the 5-minute autosave; see `CLAUDE.md`).

## 7. Tool inventory (verified 6 November 2026, about 22:45 UTC)

Versions are from the installed files and the official npm registry / the publisher's git tags. "Restorable" means what
the second account must do.

| tool | installed | official source | latest stable | maintained | works here | restore on the second account |
|---|---|---|---|---|---|---|
| **parallax-threejs** (Claude Code plugin) | 0.4.12 (the directory's sync of `main`, 5 Oct 2026) | Anthropic Directory, community tier; https://github.com/propersloth/parallax-threejs (MIT, Sean Corbett O'Donnell) | tag `v0.4.11` (6 Aug 2026), also npm `@propersloth/parallax-threejs` 0.4.11 | last stable tag 6 Aug 2026; the directory's copy of `main` (0.4.12) synced 5 Oct 2026 | yes, except Spector (below); its 3 agents and 9 skills loaded | claude.ai, the plugin directory: enable **parallax-threejs**, then start a NEW session |
| **chrome-devtools-mcp** (in parallax) | 1.6.0, pinned by the plugin (`npx -y chrome-devtools-mcp@1.6.0 --headless`) | npm `chrome-devtools-mcp`, https://github.com/ChromeDevTools/chrome-devtools-mcp (Google) | 1.12.0 (22 Oct 2026) | yes | yes: opened the game, ran scripts, screenshots | comes with the plugin; needs package registries in the cloud environment's network |
| **threejs-devtools-mcp** (in parallax) | 0.2.1, pinned (`npx -y threejs-devtools-mcp@0.2.1`, env `DEV_PORT=3000`) | npm `threejs-devtools-mcp`, https://github.com/DmitriyGolub/threejs-devtools-mcp (one maintainer) | 0.5.0 (14 Oct 2026) | yes (single maintainer) | yes: bridge connected through `http://localhost:9222` -> the game served on port 3000 | comes with the plugin. Serve `WebDemo/` on port 3000 (`python3 -m http.server 3000`), open `http://localhost:9222/index.html?s3=...` in the DevTools browser |
| **playwright-mcp** (in parallax) | 0.0.78, pinned (`npx -y @playwright/mcp@0.0.78 --headless`) | npm `@playwright/mcp`, https://github.com/microsoft/playwright-mcp (Microsoft) | 0.0.84 (3 Nov 2026) | yes | connected; not needed so far (the repo's Playwright scripts do the reproducible work) | comes with the plugin |
| **spector** MCP (in parallax) | not built | vendored in the plugin; Spector.js upstream https://github.com/BabylonJS/Spector.js (npm `spectorjs`) | `spectorjs` 0.9.33 (14 Sep 2026) | yes (Babylon.js team) | **NO**: "Connection closed", because `vendor/spector/mcp/dist` does not exist. The plugin's README: run its `scripts/setup-spector.sh` once (clone and build) | optional; only for raw GL-state capture. Not run here (the user asked for no tool changes without approval) |
| Playwright (Node package) + Chromium | 1.63.0, Chromium build 1243 in `/opt/pw-browsers` | npm `playwright`, Microsoft | 1.65.0 (5 Nov 2026) | yes | yes: every render, clip and test here | pre-installed in Claude Code cloud containers |
| three.js (game) | 0.170.0 (`WebDemo/node_modules`) | npm `three` | 0.187.0 | yes | yes | `npm install` in `WebDemo/` (do NOT upgrade: the game is built and proven on r170) |
| Node / npm / Python | Node 22.23.4 | - | - | - | yes | the container's |
| Project tool stack (`~/.bubblewash-tools`: Blender 5.2.3, OpenCV 5.0.0, LPIPS / PyTorch / Optuna, glTF tools, Vite, Tripo CLI) | as listed in `Tools/DEV_TOOLS.md` | `Tools/cloud_env_setup.sh` | - | - | yes (`source Tools/bw_tools_env.sh`; Python with OpenCV: `~/.bubblewash-tools/visual/bin/python`) | runs by itself as the environment's setup script (section 8), or `bash Tools/cloud_env_setup.sh` |
| GitHub MCP tools | built into Claude Code on the web | claude.ai GitHub connection + the Claude GitHub App on the repo | - | - | yes (as `josiahscalia5-dev`) | the second account must connect GitHub (claude.ai/connect-github) with access to `josiahscalia5-dev/bubblegame` |
| `chrome-extension-builder` plugin | 0002 (Anthropic Directory) | Anthropic Directory | - | - | loaded, but **irrelevant** (browser-extension tooling) | do not enable |
| External skills `majidmanzarpour/threejs-game-skills`, `CloudAI-X/threejs-skills` | not installed (read-only clones at `/workspace/majidmanzarpour/...`, `/workspace/cloudai-x/...` in this container only) | GitHub | - | - | not used | not recommended (instruction documents only; no water technique; one targets r186) |

**Recommended set** (the audit's conclusion):
- **Keep:** `parallax-threejs` (for `threejs-devtools-mcp` and `chrome-devtools-mcp`); the repo's own Playwright tools
  (`layer_diag.cjs`, `motion_trace.cjs`, `cdp_inspect.cjs`, `frame_dump.cjs`, the `52_diagnosis/scripts/` measures); the
  four project agents.
- **Skip unless needed:** Spector (build step).
- **Do not enable:** `chrome-extension-builder` and the two external skill packs.
- **The plugin's pinned MCP versions are behind their latest,** but they work. Do not hand-edit the plugin; take updates
  only when its publisher releases.

## 8. Cloud environment the second account must recreate

**This account's personal environment `bubblegame`** (it does NOT transfer):
- network: limited, with package registries and MCP servers allowed, plus the hosts `download.blender.org` and
  `download.pytorch.org`;
- repository: `josiahscalia5-dev/bubblegame`;
- setup script:

```
#!/bin/bash
# Bubble Wash Kingdom dev tools (Blender, OpenCV, glTF tools, Vite, Tripo CLI, game npm deps); skips what is installed.
if [ -d bubblegame ]; then bash bubblegame/Tools/cloud_env_setup.sh; fi
```

**On the second account:**
- create a personal environment with the same settings: name it e.g. `bubblegame`, attach the repository, and paste
  the setup script;
- add `dl.google.com` only if an Android preview APK is needed (`Tools/android_apk/`);
- no environment variables or network secrets are needed. Tripo's key is only needed for paid Tripo jobs; the user adds
  it in the environment's settings, never in the repo or chat.

## 9. Setup checklist for the second account

1. **GitHub:** on claude.ai, connect GitHub so the account can read and push `josiahscalia5-dev/bubblegame`. Check that
   the Claude GitHub App is installed on the repository.
2. **Cloud environment:** recreate it per section 8.
3. **Plugin:** in the plugin directory, enable **parallax-threejs**; leave `chrome-extension-builder` off.
4. **Start a NEW Claude Code session** on that environment, with the repository on branch `ccr-10503be1-pnv5vq`.
5. **Paste the first message below.** It makes the new session verify the branch, the head commit, the tools (the
   DevTools bridge included) and the autosave before continuing.

## 10. First message for the second account (paste as is)

```
Continue Bubble Wash Kingdom Screen 4 from the account-switch handoff. Do not start new visual work yet.
1. Work ONLY on branch ccr-10503be1-pnv5vq of https://github.com/josiahscalia5-dev/bubblegame. Check it out (create no
   new branch), run `git log -1`, and confirm the head contains ACCOUNT_SWITCH_HANDOFF.md.
2. Read CLAUDE.md, the top of HANDOFF.md, then ACCOUNT_SWITCH_HANDOFF.md in full.
3. Start or confirm the 5-minute autosave per CLAUDE.md (the SessionStart hook may already have started it). Add this
   session to Tools/autosave_sessions.json.
4. Verify every tool in section 7, reporting which work and which do not, without installing or updating anything:
   - ListPlugins (parallax-threejs enabled?);
   - ToolSearch for chrome-devtools-mcp, threejs-devtools-mcp and playwright-mcp;
   - the DevTools bridge: serve WebDemo on port 3000, open
     http://localhost:9222/index.html?s3=intunnel,water9 in the chrome-devtools browser, then run threejs-devtools
     bridge_status;
   - the four project agents in .claude/agents;
   - `source Tools/bw_tools_env.sh` (run `bash Tools/cloud_env_setup.sh` only if ~/.bubblewash-tools is missing);
   - `cd WebDemo && node build.mjs`, comparing the bundle's md5 with git.
5. Check that the ORIGINAL approved Screen 4 at
   Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg has sha256
   b30dc6a1794213be663b38d709c41994f9b90fbdff1606eb034310c4cab8ff16. It is the only visual target.
6. Report the state of section 5 (unfinished work), including which specialist reports exist in
   Previews/WebDemo/screen4_round9_match/54_specialists/. Then wait for my decision on the proposed
   screen4-water-motion-engineer agent and the ?s3=intunnel,swim2 candidate. Do not merge any experiment into the
   accepted ?s3=intunnel build, and never commit secrets.
```

## 11. What is deliberately NOT in the repository

- Passwords, API keys, tokens, account settings: none were ever committed (the chat exporter redacts keys).
- The plugin itself: enable it per account.
- The cloud environment: recreate it per account.
- The read-only clones of the external skill packs: they exist only in this container.
