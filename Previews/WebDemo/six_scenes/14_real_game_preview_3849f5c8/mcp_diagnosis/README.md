# MCP diagnosis (9 November 2026 ~17:45 UTC, session 3849f5c8)

Three servers failed in this session. Their registrations, executables and a real stdio start were checked; nothing was deleted or reset.

| Server | Registered in | Executable | Why it failed (Claude Code's own log) | Starts now? |
|---|---|---|---|---|
| `spector` | `.mcp.json` (`node ${HOME}/.bubblewash-tools/spector/mcp/dist/index.js`), enabled in `.claude/settings.json` `enabledMcpjsonServers` | present since 17:10:51 | 17:06:58 `Cannot find module .../spector/mcp/dist/index.js` -> CONNECTION_CLOSED: Claude Code started at 17:06:54, before the build existed | YES: initialize + tools/list answered, 13 tools (load_url ... capture_frame) |
| `plugin:parallax-threejs:spector` | the plugin's `.mcp.json` (`node ${CLAUDE_PLUGIN_ROOT}/vendor/spector/mcp/dist/index.js`) | `vendor/spector` link -> `~/.bubblewash-tools/spector`, present since 17:10 | 17:07:29 same MODULE_NOT_FOUND -> CONNECTION_CLOSED | YES: same 13 tools |
| `plugin:parallax-threejs:threejs-devtools-mcp` | the plugin's `.mcp.json` (`npx -y threejs-devtools-mcp@0.2.1`, DEV_PORT 3000, HEADLESS) | npx cache present since ~17:12 | 17:07:22-17:07:52 CONNECT_TIMEOUT (30 s): the package was still downloading | YES: initialize answered in 1.0 s, full tool list |

- No reconnect attempt is recorded in the logs after 17:07:53. Every log file was last written at start, so no reconnect reached Claude Code's MCP client.
- The command needs the action word: `/mcp reconnect <name>`.

**Root cause:** the environment's setup script (`Tools/cloud_env_setup.sh`, called by the environment `bubblegame`) was cut off at session start inside the Python step. It installed Blender (~350 MB) and Mesa FIRST. The Spector build, the threejs-devtools download, the Node tools and the game's npm packages came after them and never ran.

**Fixes (this session):**
1. `Tools/cloud_env_setup.sh`: the steps were REORDERED (no line removed or changed; sorted-line diff shows additions only).
   - First: the Node tools, the game's npm packages, and the MCP prerequisites (Deno, Spector build + plugin link, threejs-devtools cache).
   - Then: Blender, Mesa, the Python visual venv, the checks.
   - Last: PyTorch.
   - Verified here: the whole script ran in 7 s, skipping what is installed.
2. `Tools/cloud_env_setup.sh`: an empty visual venv left by a cut-off run is refilled (`--allow-existing`).
3. `.claude/hooks/session-start.sh`: a detached background job links the Spector build into the plugin's folder as soon as Claude Code creates it.
   - That folder appears only at session start: hook 17:07:21.8, folder 17:07:22, plugin spector spawned 17:07:29.4.
   - Only a symlink; never overwrites; installs nothing; does not delay the session.

**Without the in-session connection:** `flock /tmp/bw_browser.lock node Tools/spector_live.cjs $PWD/WebDemo <png> '?s3=...'` drives the same Spector server over stdio against the real game. The result is in `spector_live.txt` here.
