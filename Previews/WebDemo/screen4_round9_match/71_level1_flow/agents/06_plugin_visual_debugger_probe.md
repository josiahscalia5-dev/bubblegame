# parallax-threejs:visual-debugger: tool availability probe

Session b0abcf95, 8 November 2026.

The three tools you asked me to probe aren't available in this session, so I couldn't call any of them. The only tool I can call is `Bash`. No MCP tools have been loaded for me.

**1) Tools available:**
- `Bash` is the only callable tool.
- Instructions arrived from two MCP servers, `Claude_Docs` and `github`, but none of their tools are in my tool list.
- No deferred tools were loaded during the session.

**2–3) Results:**

| Tool attempted | Result | Detail |
|---|---|---|
| `Bash` (`echo probe`) | OK | Printed `probe` |
| threejs-devtools bridge status tool | FAILED (not called) | No tool by this name or anything like it is in my list. The system did report that the MCP server `plugin:parallax-threejs:spector` failed to connect: `CONNECTION_CLOSED: "Connection closed"`. That is the same plugin family, so the threejs-devtools bridge probably comes from it too. |
| chrome-devtools list-pages tool | FAILED (not called) | Not in my list, and no error was reported for it. Either the server isn't set up for this agent or its tools weren't loaded. |
| playwright tabs-list tool | FAILED (not called) | Not in my list, and no error was reported for it. Same two possibilities as chrome-devtools. |

**What this means:** `plugin:parallax-threejs:spector` is set up but is failing to connect, which is a connection fault rather than a missing setup. Reconnecting or restarting that plugin, then probing again, should show whether the threejs-devtools and Spector tools come back. Until chrome-devtools and playwright appear in my list, I can't do any live-browser diagnosis. `deno task checkpoint` might still work through Bash, but you limited me to `echo probe`, so I didn't try it.