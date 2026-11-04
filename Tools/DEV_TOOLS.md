# Development tools for Bubble Wash Kingdom (checked 4 November 2026, 14:40 UTC, branch `ccr-4bb5eb4c-md7eyt`, on the Claude account set up that afternoon)

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
`tripo make`, `tripo ai` and `tripo redo` would spend credits without asking. Claude runs them only after your yes for that
exact job. `tripo doctor`, `tripo balance` and `tripo login` are free.

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

**Credits:** generating models with Tripo spends credits. Claude checks the balance and the dry-run cost and asks you before any
generation.
