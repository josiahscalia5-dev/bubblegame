#!/bin/bash
# SessionStart hook (8 November 2026, session ce30359f, the user's full-restoration mandate): give the parallax-threejs plugin its
# Spector MCP server. The plugin ships without vendor/spector, and its folder is synced at each session start, AFTER the cloud
# environment's setup script has run; Tools/cloud_env_setup.sh therefore builds Spector in ~/.bubblewash-tools/spector and this
# hook only links it into the plugin's vendor/ folder. It downloads, installs and commits nothing, touches no repository file and
# never replaces an existing vendor/spector. If the MCP server was started before this link existed, reconnect it with /mcp.
set -uo pipefail
src="${BUBBLEWASH_TOOLS:-$HOME/.bubblewash-tools}/spector"
[ -f "$src/mcp/dist/index.js" ] || exit 0
for pj in "$HOME"/.claude/plugins/synced/*/*/.claude-plugin/plugin.json "$HOME"/.claude/plugins/cache/*/*/*/.claude-plugin/plugin.json; do
  [ -f "$pj" ] || continue
  grep -q '"parallax-threejs"' "$pj" || continue
  pr="$(dirname "$(dirname "$pj")")"
  [ -e "$pr/vendor/spector" ] && continue
  mkdir -p "$pr/vendor" && ln -s "$src" "$pr/vendor/spector" && echo "Spector MCP linked into parallax-threejs ($pr/vendor/spector)."
done
exit 0
