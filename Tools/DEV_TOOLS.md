# Development tools for Bubble Wash Kingdom

## Newest check: 6-7 November 2026, about 23:20-00:20 UTC, branch `ccr-10503be1-pnv5vq`, the second Claude account (seventeenth session)

- **Cloud environment:** this account started on its Default environment (no extra hosts, no setup script). With the
  user's approval, a personal environment `bubblegame` was created:
  - package registries and MCP servers on; hosts `download.blender.org` and `download.pytorch.org`; the repository;
  - the setup script `if [ -d bubblegame ]; then bash bubblegame/Tools/cloud_env_setup.sh; fi`.
  - `cloud_env_setup.sh` run here: every step installed, exit 0.
- **Tools (checked):** Blender 5.2.3 LTS, OpenCV 5.0.0, scikit-image 0.26.0, PyTorch 2.15 / LPIPS / Optuna 5.0, glTF
  Transform 4.5.1, glTF Validator 2.0.0-dev.3.10, Vite 8.3.5, Tripo CLI 0.11.2 (not signed in), Git LFS 3.4.1, Node
  22.23.4, Python 3.13.18, Playwright 1.63.0 / Chromium 153, ImageMagick 6.9.12, FFmpeg 6.1.1. Game: three 0.170.0,
  esbuild 0.24.0.
- **Plugin:** parallax-threejs 0.4.12 is loaded:
  - chrome-devtools-mcp 1.6.0, threejs-devtools-mcp 0.2.1 (bridge through port 9222 -> 3000) and playwright-mcp 0.0.78
    work;
  - the Spector MCP fails (not built; skipped by the user's decision).
- **New:** `Tools/verify_restore.sh` (read-only restore check). The full inventory and the steps for another account are
  in `CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md`, section 7.

## Newest check: 6 November 2026, 04:10 UTC, branch `ccr-d224d313-81g2dq`, on a new Claude account (thirteenth session)

- **Cloud environment:** the account's Default environment allows package registries only, so `cloud_env_setup.sh`'s Blender
  download was refused (403 from the proxy for `download.blender.org`). A personal environment **`bubblegame`** was created
  with the user's approval: package registries, MCP servers and `download.blender.org`; its setup script is
  `if [ -d bubblegame ]; then bash bubblegame/Tools/cloud_env_setup.sh; fi`. Re-run here, every step passed (Blender 5.2.3
  checksum matched). The script runs in each NEW session started on `bubblegame` (pick it in the environment menu); it is
  unproven until the first such session.
- **Tools (all installed and checked):** Blender 5.2.3 LTS, OpenCV 5.0.0, scikit-image 0.26.0, glTF Transform 4.5.1, glTF
  Validator 2.0.0-dev.3.10, Vite 8.3.5, Tripo CLI 0.11.2 (not signed in), Node 22.23.4, npm 10.9.9, Python 3.13.18,
  ImageMagick 6.9.12, FFmpeg 6.1.1, Git LFS 3.4.1, Playwright 1.63.0 / Chromium 153. `node build.mjs` byte-identical.
- **Claude Code plugins: none enabled; connectors: none.** In the account's catalog (Anthropic Directory), not enabled:
  playwright (Microsoft), github (GitHub), context7 (Upstash), Superpowers (obra), frontend-design, code-simplifier,
  claude-md-management, claude-code-setup, commit-commands, feature-dev, Security Guidance (Anthropic). No Chrome DevTools or
  TypeScript LSP plugin found. Only the user can enable them (claude.ai), then a NEW session loads them.
- **Working without plugins:** the session's GitHub tools (signed in as `josiahscalia5-dev`), Playwright through the
  `playwright` package, the project skill and the four agents in `.claude/`, built-in skills (skill-creator, code-review,
  security-review, simplify).

## Earlier check: 4 November 2026, 23:30 UTC, branch `ccr-aeee6378-mv5kot`, on the fourth Claude account

This account's cloud environment started empty: no `~/.bubblewash-tools` and no Setup script.
`bash Tools/cloud_env_setup.sh` installed everything in about 2 minutes, exit 0. To make it lasting, paste
`Tools/cloud_env_setup.sh` into the environment's **Setup script** (cloud environment menu, then **Edit**, then
**Setup script**). The **Environment variables** box only takes `KEY=value` lines, so no script goes there.

**Tools** (all checked and run in this session):

| Tool | Version |
|---|---|
| Blender (real binary, with the `bpy` API inside Blender) | 5.2.3 LTS |
| Python | 3.13.18 |
| OpenCV (in `$BW_PY`) | 5.0.0 |
| scikit-image (in `$BW_PY`) | 0.26.0 |
| Node.js | 22.23.4 |
| npm | 10.9.9 |
| three.js (pinned in `WebDemo`) | 0.170.0 |
| esbuild | 0.24.0 |
| Vite | 8.3.5 |
| Playwright | 1.63.0 |
| Chromium | 153 |
| FFmpeg | 6.1.1 |
| ImageMagick | 6.9.12 |
| Git LFS | 3.4.1 |
| glTF Transform | 4.5.1 |
| glTF Validator | 2.0.0-dev.3.10 |
| Tripo CLI | 0.11.2 |
| `tsc` | on the machine |
| `pyright` | on the machine |

`node build.mjs` rebuilt `game.bundle.js` **byte-identical** to commit `06b9805`. A Tripo GLB
(`Design/TripoDeliveries/A2Tunnel/..._1K.glb`) gave 0 errors in the validator, `gltf-transform inspect` read it, and
Blender imported it.

**Tripo:** the CLI is installed and `openapi.tripo3d.ai` is reachable (HTTP 401 without a key). The account is **not
signed in**, so its balance cannot be read. Sign in with option B below (a network secret); never paste a key into the chat.

**Claude Code plugins on this account: none enabled** (`ListPlugins` returned none). All of these are in the Anthropic
Directory and can be enabled; a NEW session is needed after enabling them:

| Plugin | Publisher |
|---|---|
| playwright | Microsoft |
| github | GitHub |
| context7 | Upstash |
| Superpowers | obra, Jesse Vincent |
| frontend-design | Anthropic |
| code-simplifier | Anthropic |
| claude-md-management | Anthropic |
| claude-code-setup | Anthropic |
| code-review | Anthropic |
| commit-commands | Anthropic |
| feature-dev | Anthropic |
| Security Guidance | Anthropic |
| skill-creator | Anthropic |

No official TypeScript LSP, Pyright LSP or Chrome DevTools plugin was found in this account's catalog. Only community
look-alikes exist, and they were not installed.

**Built in and working without any plugin:**

- the GitHub tools of the cloud session (branches listed through them, push works);
- skills: Skill Creator (`anthropic-skills:skill-creator`), `code-review`, `security-review`, `simplify`, `init`;
- Playwright through the `playwright` package, with the pre-installed Chromium;
- the project's own skill and the four agents in `.claude/`.

## Earlier check: 4 November 2026, 14:40 UTC, branch `ccr-4bb5eb4c-md7eyt`, on the Claude account set up that afternoon

Four separate states, for each tool:

- **account:** installed on the Claude account;
- **session:** loaded in this cloud session;
- **signed in:** connected and authenticated;
- **working:** fully working, tried for real.

Keys and passwords never go in this repository, in scripts or in chat.

## Installing the tools: `Tools/cloud_env_setup.sh`

Each Claude account has its own cloud environment, and a cloud session's machine is wiped when the session ends. The
earlier account's environment setup script was never saved in the repository, so the new account's environment started
empty. `Tools/cloud_env_setup.sh` now holds the whole setup:

- **Lasting:** paste the whole file into the environment's **Setup script** (the cloud environment menu in the
  session's title bar, then **Edit**, then **Setup script**). New sessions then start with everything installed.
  A first-time install took 52 seconds when tested.
- **One session only:** `bash Tools/cloud_env_setup.sh`. It is safe to run again, because installed steps are skipped.

It installs in `~/.bubblewash-tools/`:

| Folder | What |
|---|---|
| `blender-5.2.3-linux-x64/` | **Blender 5.2.3 LTS**, the official Linux build (checksum checked against blender.org), linked as `/usr/local/bin/blender` |
| `visual/` | Python 3.13 with OpenCV 5.0.0, scikit-image 0.26.0, NumPy 2.5.4, Pillow 13.0.0, SciPy 1.18.1 |
| `metrics/` (6 November) | Python 3.13 with PyTorch 2.15.0 (CPU use), torchvision 0.29.2, LPIPS 0.1.4 (AlexNet weights in `~/.cache/torch`), Optuna 5.0.0, scikit-image, OpenCV: `~/.bubblewash-tools/metrics/bin/python`; `WebDemo/tools/screen4/region_compare.py` |
| `node/` | glTF Transform 4.5.1, Khronos glTF Validator 2.0.0-dev.3.10, Vite 8.3.5, tripo-cli 0.11.2 |
| `activate.sh` | puts the node tools on `PATH` (sourced by `Tools/bw_tools_env.sh`) |

The script also installs, system-wide, Mesa's EGL libraries, which let Blender's Eevee render without a GPU. It sets
up Git LFS's global filters, and runs `npm install` in `WebDemo` (three 0.170.0 and esbuild 0.24.0, pinned there;
`node_modules` is gitignored). It does not install Playwright: the cloud image already has Playwright 1.63.0 with its
Chromium, and another Playwright version would not find that browser.

**In every shell: `source Tools/bw_tools_env.sh`.** It sets `BW_PY`, `BW_NODE_TOOLS`, `PATH` and `NODE_PATH`.
`blender` is now the real Blender, so `Tools/bin/blender`, the stand-in that runs scripts through the bpy module, is not
used. `BW_BPY` stays empty. The older layouts (`/opt/bw-venv`, and the earlier account's `~/.bubblewash-tools/blender`
bpy module) are still found if present. `Tools/dev_tools_setup.sh` is the first account's older installer, kept for
reference.

## Tools on the machine (each tried for real on 4 November, 14:30 to 14:40 UTC)

All output went to the session's scratch folder; no game file was changed (`git status` clean apart from these notes and
the setup script).

| Tool | Session | Signed in | Working | What was run |
|---|---|---|---|---|
| Blender 5.2.3 LTS (real binary) | yes | n/a | **yes** | `blender_passage_check.py` on `s3_entrance.glb`: 267 of 576 rays through, the same as before, plus a Cycles render. `mascot.glb` imported (137,111 triangles) and exported as GLB. Rendered with **Cycles** (CPU) and **Eevee** (Mesa software rendering; Eevee prints harmless `EGL_BAD_MATCH` lines while it finds a working setup) |
| OpenCV 5.0.0 and scikit-image 0.26.0 | yes | n/a | **yes** | `WebDemo/tools/screen4/compare_s4.py`: approved Screen 4 against a Round 5 frame at 4.2 s |
| Three.js 0.170.0 (the game's pinned version) | yes | n/a | **yes** | `npm install` in `WebDemo`; the game bundled into the scratch folder with `build.mjs`'s settings is **byte-identical** to the committed `game.bundle.js` (863,540 bytes) |
| Vite 8.3.5 | yes | n/a | **yes** | A separate test page (three r170, torus knot) built with `vite build`, served by `vite` and `vite preview`, and drawn in Chromium. The game itself builds with esbuild, not Vite |
| Playwright 1.63.0 with Chromium 153 | yes (cloud image) | n/a | **yes** | Ran the game (`s3_shot.cjs`, `S3=round5`), with no console errors. WebGL 2 on SwiftShader, a software GPU, so frame times here are not phone frame times |
| glTF Transform 4.5.1 | yes | n/a | **yes** | `gltf-transform inspect s3_brush.glb`; `repair_glb.mjs` (0 normals needed fixing); `optimize` on `gem.glb` (meshopt + WebP: 345 KB to 133 KB, test copy only) |
| Khronos glTF Validator 2.0.0-dev.3.10 | yes | n/a | **yes** | `validate.cjs`: `s3_brush.glb` and `mascot.glb` 0 errors, 0 warnings; `s3_entrance.glb` 0 errors, 1 warning (tangents), as before |
| ImageMagick 6.9.12 | yes (system) | n/a | **yes** | `convert`, `montage`, `identify`. Version 6 has no `magick` command; the project's scripts use `convert` |
| FFmpeg 6.1.1 | yes (system) | n/a | **yes** | Encoded an H.264 test video (libx264, VP9 and WebP encoders present) |
| Git LFS 3.4.1 | yes (system) | n/a | **yes** | `git lfs install --skip-repo`; tracked and committed a `.glb` in a throwaway repo. This repository still keeps its models as normal git files (0 LFS files) |
| Node.js 22.23.4, npm 10.9.9, Python 3.13.18 | yes (cloud image) | n/a | **yes** | Used by everything above |
| Tripo CLI 0.11.2 (`tripo`) | yes | **yes, on this session's machine** (4 November, about 15:45, `tripo login --key`, region ov; key saved in `~/.tripo/config.json`, mode 0600, outside the repository) | **yes:** `tripo doctor` passes every check; **balance 1,000 credits, 0 frozen** at sign-in; after two P2 jobs (the paw coin, used; the brush, tested and not used; 120 credits each, as estimated) **760** (details: `Design/TripoDeliveries/Round5/README.md`). Free dry runs: P2 (`P2-20260801`, the default and newest model) image-to-3D and text-to-3D with `texture_quality=detailed`, `pbr=true`, GLB output: **120 credits each** (list price). A real Tripo GLB (`Design/TripoDeliveries/A2Tunnel`) loads in three.js r170 as a standard PBR material (colour, normal, metal/rough maps), 0 validator errors | **The preferred and only external 3D generator.** Do not use `--for game-mobile` (it lowers textures to standard, caps faces at 15,000 and converts to FBX). The key was pasted into the chat: create a new key on Tripo's site and delete that one, then reconnect with the browser sign-in or a network secret (below) |
| Meshy | not used (your decision, 4 November) | | | Not installed on this account |
| GitHub | yes | yes | yes | Fetch and push on this session's branch |

**Warning about Tripo:** its `--yes` (skip confirmations) is switched on automatically when it runs headless, as here.
`tripo make`, `tripo ai` and `tripo redo` would spend credits without asking. Since 8 November (about 14:15 UTC) the user's
standing authorization lets Claude spend the AVAILABLE credits on asset jobs without asking each time (rules in `CLAUDE.md`,
Safety: dry run first, image-to-3D from the approved art, evaluate before the next job, never buy credits or top up). ONE lead
session submits paid jobs, always with `bash Tools/tripo_job.sh <name> make <input> ...` (tested 8 November without spending:
refuses topup, a second job in the same container, a job in flight on the account, another session's job in the last 30 minutes
unless `BW_TRIPO_I_AM_LEAD=1`; `BW_TRIPO_CHECK_ONLY=1` runs every check and the dry run only). Log: `Design/TripoDeliveries/TRIPO_JOBS_LOG.md`.
`tripo doctor`, `tripo balance` and `tripo login` are free.

**Tripo in a cloud session (verified 8 November 14:24 UTC, session `57091b57`, the user's other account):** the key is a network
secret for `openapi.tripo3d.ai`; run every command with `TRIPO_API_KEY=tsk_proxy-injected` (a placeholder the proxy replaces).
`tripo doctor`: all checks OK, region ov. A job's GLB downloads from `openapi-dl.data.tripo3d.com` (allowed on that environment).
The proxy refuses `sshu-api.tripo3d.ai` and `apiplatform.tripo3d.ai`; the CLI still works without them. Working: `make` (image to
model, P2, `-p texture_quality=detailed -p pbr=true`, 120 credits, about 2.5 minutes), `make --dry-run` (free cost estimate),
`balance`, `doctor`. Outputs land in `-o <dir>/tripo-out/<name>-<task>/` (`model.glb`, `preview.png`, `task.json`). Contact sheets
of any GLB: `node WebDemo/tools/tripo/glb_sheet.cjs <out.png> <a.glb> ...`; textures: `WebDemo/tools/tripo/glb_textures.cjs`.

## Claude Code plugins

Plugins are synced into a cloud session **when the session starts**, from the Claude account that started it.

| Plugin | Session on 4 November, 14:40 (`ccr-4bb5eb4c-md7eyt`) | Instead, where missing |
|---|---|---|
| Playwright (Microsoft) | **yes** (synced; its browser tools are loaded) | |
| TypeScript LSP | **yes** (synced) | `tsc` is on the machine. The game is plain JavaScript. |
| Frontend Design, Skill Creator | built-in skills, loaded | |
| Claude Code Setup, Chrome DevTools, Context7, Superpowers | not synced | Playwright drives Chromium and reads its console and network; library documentation can be read from the web. |

To get a missing plugin: add it on claude.ai to the account you use for this project, then start a **new** session.

## Project skill

`.claude/skills/bubble-wash-screen-matcher/SKILL.md` ("Bubble Wash Exact Screen Matcher") loads in this session (it is
listed among the session's skills and opens with the Skill tool). Every script it names exists, and its tool paths now
go through `Tools/bw_tools_env.sh`.

## Saving to GitHub

- `bash Tools/save_now.sh "<what was done>"`: commits everything on the current branch, pushes with retries, then asks
  GitHub which commit the branch is at. It prints the branch, the commit hash, **VERIFIED** or **FAILED**, and the files
  saved. It refuses to run on `main` or `master`.
- `Tools/autosave.sh <session.jsonl> <ChatHistory/....md> "<title>" 5 23`: exports the chat history and runs
  `save_now.sh` every 5 minutes. Claude runs it in the background. A cloud session stops background jobs after 2 hours,
  so Claude starts it again then. It only runs while a session is open: nothing saves when no session is running.

## Signing in (only you can do these)

**Tripo, option A: browser sign-in (this session only).**

1. Claude runs `tripo login --region ov --no-wait`, which prints a link and a one-time code.
2. Open the link, sign in to Tripo, enter the code if asked, pick a key, and click **Authorize**. The code lasts 15 minutes.
3. Tell Claude it is done; Claude runs the same command again to finish. The key is saved in `~/.tripo` on this session's
   machine only, never in the repository, so a new session needs a new sign-in.

**Tripo, option B: lasting, set once per Claude account.** The key stays in the environment's settings and Claude never
sees it:

1. Open the cloud environment menu in the session's title bar, then **Edit**.
2. Under **Network secrets** (called **API credentials** in older versions of the app), add a secret for the host
   `openapi.tripo3d.ai` and paste your Tripo API key there. The network proxy adds it to every request to that host.
3. Under **Environment variables**, add `TRIPO_API_KEY=proxy-injected`. This is only a placeholder, not your key:
   `tripo` refuses to start without a key, and the proxy replaces the placeholder with the real one.
4. Start a new session. Claude checks it with `tripo doctor` and `tripo balance`, which are both free.

On 4 November, before option B was set up: `tripo` reads `TRIPO_API_KEY` and sends its requests through the
session's proxy (`HTTPS_PROXY`, through undici's `EnvHttpProxyAgent`), and Tripo's server answered a fake key. Option
B needs one test with your real key, in the first session after it is saved.

**Never paste a key into the chat.** The chat history is exported into this repository. Since 4 November the exporter
(`Tools/export_chat_history.py`) replaces keys with `[REDACTED]`, but the safe ways are the browser sign-in and the
network secret above.

History, from the earlier account:

On 4 November (13:51), in the earlier account's session (branch `ccr-8ca1fe92-d6t2bm`), Tripo was signed in with a key
the user pasted into the chat. Nothing was pushed: the autosave was stopped first, and the key was checked absent from
every file, commit and GitHub. The key still appears in that session's own transcript, so regenerate it on Tripo's site
when convenient. The API account showed **0 credits**. At 13:55 a second key (ending …SFj0) replaced it: same result,
0 API credits. At 14:08 a third key (ending …GAlL) replaced that one: **1,000 credits**. That is the key with credits to
use in option B. Delete the first two keys on Tripo's site; they are no longer used.

**Where API credits live:** `https://developers.tripo3d.ai/billing` (given by `tripo topup --no-open`). API credits are
reported to be a separate balance from the credits on Tripo's main website (Studio); Tripo's own billing page does not
say either way. Check that page's balance, then `tripo balance` here.

**Meshy: not used any more (your decision, 4 November).** Do not call Meshy tools, ask for a Meshy key or spend Meshy
credits. The key was saved only on the earlier account's environment. To remove it, open a session on that account, then
the cloud environment menu in the session's title bar, Edit, Network secrets, and delete the `api.meshy.ai` entry. To bring Meshy back one day, restore the `meshy` entry of `.mcp.json` from git history.
What was done before that, for the record:

1. The key is saved as a network secret for the host `api.meshy.ai` (entered in the secure credential form, never in
   chat). The network proxy adds it to every request to that host; no session sees it.
2. Node's built-in `fetch` ignores the proxy unless `NODE_USE_ENV_PROXY=1`, so the Meshy MCP server went to Meshy without
   the key (401). `.mcp.json` now sets `NODE_USE_ENV_PROXY=1` and a placeholder key (`proxy-injected`, overwritten by the
   proxy; a real `MESHY_API_KEY` variable still wins if set). Tested by hand: the server returned the balance. The MCP
   server loads at session start, so this works from the next session.
3. Balance on 4 November: 17 credits (permanent), read with two free checks; nothing was generated.

**Credits:** generating models with Tripo spends credits. Claude checks the balance and the dry-run cost (both free) before each
generation and records the job; since 8 November the user's standing authorization covers the AVAILABLE credits without asking per
job (never buying credits, topping up or changing the subscription: `CLAUDE.md`, Safety).
