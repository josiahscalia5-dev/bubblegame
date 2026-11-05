import sys
T = sys.argv[1]
common = """## Newest: tenth session, BOTH evening lines merged (5 November 2026, from 21:45 UTC; this section overrides the notes below)

- **Repository:** `josiahscalia5-dev/bubblegame`. **Branch:** `ccr-9f8e2c8d-0zg3mc` (the tenth session's). The lead merges every
  agent's work into it and pushes; never push another branch, never force-push. `HANDOFF.md` names the merge commit.
- **Two lines of work split at `9a95c06` (16:29 UTC) and are now both on this branch, each exactly as tested on its own branch:**
  - `?s3=focus` (eighth and ninth sessions, `ccr-3d8a1ae9-hhgml1` then `ccr-de8d9670-2ohd5t`, final `b2a5b6e`): the line that
    follows the user's LATEST corrections in `CLAUDE.md` (17:15 UTC: sparkling BLUE water round her, no white foam cushion;
    17:45 UTC: the vortex kit; 18:26 UTC: the Tunnel Correction ESSENTIAL kit). Its sections below ("ninth session",
    "the FOCUSED CORRECTION PASS") still hold; only the branch name changed.
  - `?s3=match` (seventh session, `ccr-1f9da4c9-e0yrsc`): its own focused pass from the 15:55 UTC brief (the camera `MATCH_CAM`,
    the character 1.2 times larger; the sock's pose; wall turbulence and streaks; an aqua-white FROTH bank; tunnel flecks and
    bubbles). Its froth bank predates, and conflicts with, the user's 17:15 correction. Evidence:
    `Previews/WebDemo/screen4_round9_match/13_focused_pass_tunnel_lighting/`, `14_focused_pass_water_vfx/`, `20_focused_pass_merged/`.
  - Work on the switch the lead names. If none is named, ask the lead; do not merge the two looks on your own.
- **How the two coexist (keep it so):** `focus` is built on `match` as it was at `9a95c06`. Under `FOCUS_ON`,
  `WebDemo/src/tunnel_r9_focus_base.js` puts back every `MATCH` / `MATCH_WATER` setting the seventh session changed (a
  generated list) before `FOCUS`'s own settings merge, and the seventh session's `match`-only code is gated `!FOCUS_ON`
  (in `tunnel_r9_match.js`, `tunnel_r9_match_water.js`, `tunnel_r8_splash.js`). So:
  - a change for `focus`: `FOCUS` settings (`tunnel_r9_focus.js`) or code gated on `FOCUS_ON`;
  - a change for `match`: code gated `!FOCUS_ON` (or settings `focus` overrides), so `focus` stays pixel-identical.
- **The merge's proof:** `Previews/WebDemo/screen4_round9_match/21_lines_merged/` (settings compared key by key, and frames:
  `match` and every older switch against `68c8c40`, `focus` against `b2a5b6e`).
"""
extra = {
 'game-art-director.md': "- **Your part:** review whichever switch the lead names against the ORIGINAL only; say which switch your numbers are for.\n",
 'gameplay-visual-testing.md': "- **Your part:** after any change, prove `match`, `focus` and every older switch pixel-identical where they should be (`20_focused_pass_merged/scripts/` and `21_lines_merged/scripts/`), and run `s3_func` / `r2_func` (`VW=135 VH=270`) under the switch changed.\n",
 'lighting-visual-matching.md': "- **Your files:** `tunnel_r9_match.js` (walls, rim, camera, objects) and, for `focus`, `tunnel_r9_focus.js` `FOCUS.match`.\n",
 'water-vfx-engineer.md': "- **Your files:** `tunnel_r9_match_water.js`, `tunnel_r8_splash.js` (gated lines) and, for `focus`, `tunnel_r9_focus.js` `FOCUS.water`.\n",
}
old = "## Newest: ninth session, where the work is saved"
for f, x in extra.items():
    p = f'{T}/.claude/agents/{f}'; s = open(p).read()
    assert s.count(old) == 1, f
    s = s.replace(old, common + x + "\n## Earlier: ninth session, where the work is saved")
    open(p, 'w').write(s)
print('ok')
