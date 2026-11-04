# Development tools for Bubble Wash Kingdom (checked 4 November 2026, 12:30 UTC, second Claude account, branch `ccr-8ca1fe92-d6t2bm`)

Four separate states, for each tool:

- **account:** installed on the Claude account;
- **session:** loaded in this cloud session;
- **signed in:** connected and authenticated;
- **working:** fully working, tried for real.

Keys and passwords never go in this repository, in scripts or in chat.

## Where the tools are now

The cloud environment's setup script (the user's, in the **Default** environment's settings) installs everything in
`~/.bubblewash-tools/`:

| Folder | What |
|---|---|
| `visual/` | Python 3.13 with OpenCV 5.0, scikit-image 0.26, NumPy, Pillow, SciPy |
| `blender/` | Python 3.13 with **bpy 5.2.3**, Blender's Python API as a module. There is no Blender binary. |
| `node/` | glTF Transform 4.5.1, Khronos glTF Validator 2.0.0-dev.3.10, Playwright 1.64.1, tripo-cli 0.11.1 (and the Meshy MCP server 0.6.7, not used) |
| `bootstrap/` | pip and uv, used by the setup script |

**In every shell: `source Tools/bw_tools_env.sh`.** It finds the tools in this layout or the first account's older one
(`/opt/bw-venv`, `/opt/bw-node-tools`, `/usr/local/bin/blender`) and sets `BW_PY`, `BW_BPY`, `BW_NODE_TOOLS`, `PATH`
and `NODE_PATH`. With no Blender binary, it puts `Tools/bin/blender` on the path, which runs
`blender -b --python script.py -- args` through the bpy module, so the project's Blender scripts work unchanged.

Fixed on 4 November for the new layout: `WebDemo/tools/models/validate.cjs` and `repair_glb.mjs` used to load the tools
only from `/opt/bw-node-tools`; they now look in `BW_NODE_TOOLS`, `~/.bubblewash-tools/node` and `/opt/bw-node-tools`.

## Tools on the machine (each tried for real on 4 November)

| Tool | Session | Signed in | Working | What was run |
|---|---|---|---|---|
| Blender 5.2.3 Python API (bpy) | yes | n/a | **yes** | Imported `s3_brush.glb`, exported a glTF, rendered with Cycles on the CPU, and ran `WebDemo/tools/models/blender_passage_check.py` on `s3_entrance.glb` through `Tools/bin/blender` (267 of 576 rays through, as before) |
| OpenCV 5.0 and scikit-image 0.26 | yes | n/a | **yes** | Read an approved screen, SSIM; `WebDemo/tools/screen4/compare_s4.py` |
| ImageMagick 6.9.12 | yes (system) | n/a | **yes** | `convert`, `montage` |
| glTF Transform 4.5.1 | yes | n/a | **yes** | `gltf-transform inspect`; `repair_glb.mjs` on `s3_brush.glb` (0 normals needed fixing) |
| Khronos glTF Validator 2.0.0-dev.3.10 | yes | n/a | **yes** | `validate.cjs`: `s3_brush.glb` 0 errors, `s3_entrance.glb` 0 errors and 1 warning (tangents) |
| Playwright 1.64.1 with Chromium 156 | yes | n/a | **yes** | Launched headless, WebGL 2 available, from any folder once `bw_tools_env.sh` is sourced |
| Git LFS 3.4.1 | yes (system) | n/a | installed | Not used: the repository keeps its models and videos as normal git files (`.gitattributes` marks them binary) |
| ffmpeg | yes (system) | n/a | yes | Encodes the gameplay videos |
| Tripo CLI 0.11.1 (`tripo`) | yes | **yes** (13:51, key in `~/.tripo` on this session's machine only) | `tripo doctor` passes; API reachable (region ov). **Balance 0 credits**, so nothing can be generated until credits are added. Cost estimates (`tripo make ... --dry-run`, free): P2 (default) 110 credits a model, v3.1 20 credits | **The preferred and only external 3D generator.** See signing in below |
| Meshy MCP server 0.6.7 | **not used, at your request (4 November, 13:50)**: removed from `.mcp.json` | key still saved as a network secret for `api.meshy.ai` on the Default environment (only you can remove it) | not called; no Meshy credits were ever spent (two free balance checks: 17 credits) | Tripo is the only external generator |
| GitHub | yes | yes | **yes** | Branch listing, fetch, and push with `Tools/save_now.sh` (checked on GitHub with `git ls-remote`) |

**Warning about Tripo:** its `--yes` (skip confirmations) is switched on automatically when it runs headless, as here.
`tripo make`, `tripo ai` and `tripo redo` would spend credits without asking. Claude runs them only after your yes for that
exact job. `tripo doctor`, `tripo balance` and `tripo login` are free.

## Claude Code plugins

Plugins are synced into a cloud session **when the session starts**, from the Claude account that started it.

| Plugin | In this session (second account) | Instead, where missing |
|---|---|---|
| Playwright (Microsoft) | **yes** (synced; its browser tools are loaded) | |
| TypeScript LSP | **yes** (synced) | `tsc` is on the machine. The game is plain JavaScript. |
| Claude Code Setup | **yes** (synced: the automation recommender skill) | |
| Frontend Design | **yes** (synced) | |
| Skill Creator | not synced | The built-in Skill Creator skill is loaded and does the same job. Not duplicated. |
| Chrome DevTools | not synced | Playwright drives Chromium and reads its console, network and DevTools protocol. |
| Context7 | not synced | Library documentation can be read from the web. |
| Superpowers | not synced | No equivalent needed for this project. |

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

**Tripo** (the official browser sign-in):

1. Claude runs `tripo login --region ov --no-wait`, which prints a link and a one-time code.
2. Open the link, sign in to Tripo, enter the code if asked, pick a key, and click **Authorize**. The code lasts 15 minutes.
3. Tell Claude it is done; Claude runs the same command again to finish. The key is saved in `~/.tripo` on this session's
   machine only, never in the repository, so a new session needs a new sign-in.
4. Lasting alternative: save a Tripo key once as a network secret for the host `openapi.tripo3d.ai` in the cloud
   environment's settings (environment menu in the session's title bar, then Edit). The network proxy then adds it to
   every request, and no key is stored on the machine.
5. **Never paste a key into the chat.** The chat history is exported into this public repository. Since 4 November the
   exporter (`Tools/export_chat_history.py`) replaces keys with `[REDACTED]`, but the safe ways are the browser sign-in
   and the network secret above.

On 4 November (13:51) Tripo was signed in on this session's machine with a key the user pasted into the chat. Nothing
was pushed: the autosave was stopped first, and the key was checked absent from every file, commit and GitHub. The
key still appears in this session's own transcript, so regenerate it on Tripo's site when convenient. The API account
showed **0 credits**.

**Meshy: not used any more (your decision, 4 November).** Do not call Meshy tools, ask for a Meshy key or spend Meshy
credits. To remove the saved key: the cloud environment menu in the session's title bar, Edit, Network secrets, then
delete the `api.meshy.ai` entry. To bring Meshy back one day, restore the `meshy` entry of `.mcp.json` from git history.
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
