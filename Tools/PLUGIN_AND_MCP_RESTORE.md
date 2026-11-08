# parallax-threejs plugin and MCP servers: what is in Git, what is per account, how to restore (checked live 8 November 2026, session `b0abcf95`)

**A plugin is installed per Claude ACCOUNT, not per repository.** Git cannot carry a working plugin installation to the other account;
it carries this record of exactly what to enable and how to check it. Nothing here is a secret.

## The plugin as installed on the account of session `b0abcf95`
- Name and version: **parallax-threejs 0.4.12** (MIT licence), from the Anthropic Directory; enabled on claude.ai, it is loaded only by
  a session STARTED after enabling (plugins load at session start).
- Its MCP servers (its own `.mcp.json`):

| Server | Command | Status in session `b0abcf95` |
|---|---|---|
| chrome-devtools-mcp | `npx -y chrome-devtools-mcp@1.6.0 --headless` | VERIFIED WORKING (list_pages, resize_page, navigate_page, evaluate_script). Use a 412 x 915 page; the software renderer stalls on large pages, and a hung page's GPU process can take 3 cores: navigate it to about:blank or end that process |
| threejs-devtools-mcp | `npx -y threejs-devtools-mcp@0.2.1` | VERIFIED WORKING: serve `WebDemo` on port 3000 (`python3 -m http.server 3000 --bind 127.0.0.1` in WebDemo), open `http://localhost:9222/index.html?s3=...` in chrome-devtools, then `bridge_status` says connected. Its automatic scene pick is the final post pass: set `window.__THREE_SCENE__ / __THREE_CAMERA__ / __THREE_RENDERER__` from `window.__bw.debug()` |
| playwright-mcp | `npx -y @playwright/mcp@0.0.78 --headless` | VERIFIED WORKING (browser_tabs) |
| spector | `node ${CLAUDE_PLUGIN_ROOT}/vendor/spector/mcp/dist/index.js` | FAILS ("Connection closed"): the installed plugin does not contain `vendor/spector` at all (checked). A plugin packaging defect; the project's own Spector capture (`WebDemo/tools/screen4/spector_capture.cjs`) works without it |

- Its agents: `scenario-author`, `shader-reviewer`, `visual-debugger`. They START, but get only Bash: their tool lists name the MCP tools
  without the `plugin_parallax-threejs_` prefix (probe: `Previews/WebDemo/screen4_round9_match/71_level1_flow/agents/06_plugin_visual_debugger_probe.md`).
  The project agent `screen4-water-motion-engineer` names them correctly and DID use threejs-devtools and chrome-devtools live.
- Its commands: `checkpoint`, `diff`, `sweep`, `replay`, `export-report`, `sync-view`, `init` need Deno (`deno.json` in the plugin) and
  `/parallax-threejs:init` (it scaffolds files into the repository: ask the user first); Deno is NOT installed in this environment.
  `memcheck` worked in session `8140e507`; `ship-check` runs Lighthouse through chrome-devtools (not run in this session).

## In Git (restorable on any account)
- `.mcp.json` is EMPTY ON PURPOSE: with the plugin enabled, the same servers would otherwise start twice (two browsers on 4 cores).
- If the plugin cannot be enabled on an account, copy this block into `.mcp.json` (project scope) to get the three working servers
  without it (their tools are then named `mcp__chrome-devtools-mcp__*` etc.; the project agent's tool list uses the plugin's names):
```json
{ "mcpServers": {
  "chrome-devtools-mcp": { "command": "npx", "args": ["-y", "chrome-devtools-mcp@1.6.0", "--headless"] },
  "threejs-devtools-mcp": { "command": "npx", "args": ["-y", "threejs-devtools-mcp@0.2.1"] },
  "playwright-mcp": { "command": "npx", "args": ["-y", "@playwright/mcp@0.0.78", "--headless"] } } }
```
- The five project agents (`.claude/agents/`), the skill (`.claude/skills/bubble-wash-screen-matcher/`), the SessionStart hook
  (`.claude/settings.json`, `.claude/hooks/session-start.sh`), and every tool's install script (`Tools/cloud_env_setup.sh`).

## Check on the other account (free, a minute)
1. ToolSearch `mcp__plugin_parallax-threejs` lists the chrome-devtools, playwright and threejs-devtools tools. If nothing: enable
   parallax-threejs on that account (claude.ai, the Anthropic Directory) and START A NEW SESSION.
2. `bridge_status` after opening the game through port 9222 (above).
3. The project agents are listed in the Agent tool's types (they come from `.claude/agents/` in the repository).
