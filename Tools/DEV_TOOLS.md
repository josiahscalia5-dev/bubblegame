# Development tools for Bubble Wash Kingdom (checked 4 November 2026, cloud session on branch `ccr-b6199007-gvhqim`)

Four separate states, for each tool:

- **account:** installed on the Claude account;
- **session:** loaded in this cloud session;
- **signed in:** connected and authenticated;
- **working:** fully working, tried for real.

Keys and passwords never go in this repository, in scripts or in chat.

## Claude Code plugins

Plugins are synced into a cloud session **when the session starts**. A plugin added to the account after that loads only in
a **new** session. A session also belongs to the Claude account that started it, so plugins added on a different Claude
account do not reach it.

| Plugin | Account (as this session sees it) | Session | Working here | Note |
|---|---|---|---|---|
| Playwright (Microsoft) | not listed now | **yes** (synced at start) | **yes** | Opened the game with `?s3=round3`, waited for ready, ran code in the page. The capture scripts also use the Playwright library 1.63 with Chromium 153. |
| GitHub | not listed | no plugin; the cloud environment's own GitHub tools are loaded | **yes** | Branch listing through GitHub tools, and fetch and push with git, both work. |
| Skill Creator | not listed | no plugin; a built-in Skill Creator skill is loaded | built-in: yes | The plugin version would add nothing that is missing here. |
| TypeScript LSP | not listed | no | no | `typescript-language-server` 6.0.3 and `tsc` 6.0.2 are installed, ready for the plugin. The game is plain JavaScript. |
| Claude Code Setup | not listed | no | no | |
| Chrome DevTools | not listed (none in the directory; "hubcap" is a community one) | no | equivalent: yes | Playwright drives Chromium and reads its console, network and DevTools protocol. |
| Context7 | not listed | no | no | Library docs can be read from the web meanwhile. |
| Superpowers | not listed | no | no | |

"Not listed" means the session's plugin listing for the account returned nothing on 4 November. If they are installed,
start a **new** Claude Code session on this repository, from the same account they were installed on. Then
`/plugin` (or asking Claude) shows them loaded.

## Tools on the machine

They are not part of the game's own dependencies (`WebDemo/package.json` is unchanged).

| Tool | Session | Signed in | Working | How |
|---|---|---|---|---|
| Blender 5.2.3 and its Python API | yes, `/usr/local/bin/blender` | n/a | **yes** | Imported, checked, rendered (Cycles, CPU) and exported the game's glTF models headless. See `WebDemo/tools/models/blender_passage_check.py`. |
| OpenCV 5.0 and scikit-image 0.26 | yes, `/opt/bw-venv` | n/a | **yes** | `WebDemo/tools/screen4/compare_s4.py` |
| ImageMagick 6.9.12 | yes (system) | n/a | **yes** | `convert`, `montage` |
| glTF Transform 4.5.1 | yes, `/opt/bw-node-tools` | n/a | **yes** | Repaired the A1 portal's normals and the brush file's alignment (`WebDemo/tools/models/repair_glb.mjs`). |
| Khronos glTF Validator 2.0.0-dev.3.10 | yes, `/opt/bw-node-tools` | n/a | **yes** | `WebDemo/tools/models/validate.cjs` |
| Tripo CLI 0.11.1 (`tripo`) | yes (global) | **no**: sign-in waiting for you | installed and self-check passes, but no key yet | See below. |
| Meshy MCP 0.6.7 | configured in `.mcp.json`; loads in a new session | **no**: needs `MESHY_API_KEY` | the server starts and offers its 28 tools, including `meshy_check_balance` | See below. |

In a session where the environment setup script has not installed these yet, run `bash Tools/dev_tools_setup.sh`. It
skips anything already present.

## Signing in (only you can do these)

**Tripo:**

1. Claude starts a sign-in with `tripo login --region ov --no-wait` (the international site; use `cn` for the China
   mainland site). It prints a link and a one-time code.
2. Open the link, sign in to Tripo, enter the code if asked, pick a key, and click **Authorize**. The code lasts 15 minutes.
3. Claude finishes the sign-in by running the same command again. The key is saved in `~/.tripo` on the session's machine,
   never in the repository.
4. Alternative for every new session: add `TRIPO_API_KEY` (and `TRIPO_REGION=ov`) as environment secrets in the cloud
   environment's settings (environment menu in the session's title bar, then Edit).

**Meshy:**

1. Create a key at meshy.ai under Settings, then API. Meshy's API needs a Pro plan or above.
2. Add it as an environment secret named `MESHY_API_KEY` in the cloud environment's settings.
3. Start a new session. `.mcp.json` passes the key to the Meshy server through the environment, so it is never written in
   the repository.

**Credits:** generating models with Tripo or Meshy spends credits. Claude checks the balance (`tripo balance`,
`meshy_check_balance`) and asks you before any generation.
