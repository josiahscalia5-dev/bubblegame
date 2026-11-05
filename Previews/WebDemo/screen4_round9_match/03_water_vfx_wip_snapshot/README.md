# Water & VFX specialist: work in progress, snapshot at 12:51 UTC on 5 November 2026

The user asked for everything to be saved, including the design agents' most recent work. This is the Water & VFX
specialist's unfinished Round 9 work, copied from its isolated worktree while it was still running.

- **Not in the game yet:** `WebDemo/game.bundle.js` on this branch does not include it. It will be merged only after its
  own checks, so this snapshot cannot break the playable game or any older version.
- **What it is doing:**
  - one continuous body of water from the tunnel walls into the channel under the character;
  - large translucent turquoise waves round the pink character (Reference 3, the precision kit's crops `03` and `06`).
- **Files:**
  - `water_vfx_wip.patch`: its changes to `WebDemo/src` against `f042ab5`, the merged Tunnel & Lighting checkpoint. Apply
    with `git apply` on that commit.
  - `src/`: full copies of the three changed files: `tunnel_r8_liquid.js`, `tunnel_r8_splash.js` and
    `tunnel_r9_match_water.js`.
- **Transcript so far:** `ChatHistory/2026-11-05_fifth_session_design_agent_transcripts.md`.
