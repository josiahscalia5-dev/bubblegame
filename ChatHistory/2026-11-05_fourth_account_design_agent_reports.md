# Design agents' work, fourth Claude account (4–5 November 2026, branch `ccr-aeee6378-mv5kot`)

The four project agents are defined in `.claude/agents/`. Their sections were updated for Round 8 on 5 November.

| Agent | What it did this session | Where its report and evidence are |
|---|---|---|
| **Game Art Director** (`game-art-director`, read-only) | Reviewed the `?s3=hero` build (`06b9805`) at 2.85, 3.0 and 3.1 s against the ORIGINAL APPROVED Screen 4 and the user's two water references. It ranked the differences, measured numeric targets for the new water shader, and gave an honest overall judgement: colour and material are off, composition is within about 2% | `Previews/WebDemo/screen4_round8_art_director_baseline/README.md`, its maps, and `scripts/` |
| **Water & VFX specialist** (`water-vfx-engineer`, isolated worktree) | Built Round 8, `?s3=liquid` and `?s3=liquid,nofoam`: real animated water in `WebDemo/src/tunnel_r8_liquid.js`. Commits: checkpoint 1 `f1fb2fc` (the user: "a real improvement, preserve it"), checkpoint 2 `8ddca5e`, final `01cdcde`. Proved that `?s3=hero` and every older version are pixel-identical to `06b9805` (21 pairs, 0 differing pixels) | `Previews/WebDemo/screen4_round8_liquid/README.md`, `pixel_identity_vs_06b9805.txt`, the full-resolution captures and side-by-sides |
| **Tunnel Architecture & Lighting** (`lighting-visual-matching`) | Not run yet. Next: the deeper cobalt between the bands, the warmer core, and the rim | — |
| **Gameplay & Visual Testing** (`gameplay-visual-testing`, read-only) | Not run yet on Round 8. Next: controls, mechanics, performance and a gameplay video for `?s3=liquid` | — |

## Lead's notes on the result (5 November, 00:45 UTC)

**What improved:**

- The tunnel walls read as swirling bands of blue water with white streaks, not a pale pipe.
- The floor and the water round the character are blue and see-through.

**Open, as the user asked:**

- `?s3=liquid` with foam still looks almost the same as `nofoam`. The translucent white splashes round the character
  are not visible enough: the white in the band beside the character is 5–19%, against about 35% in the approved image.
- Cobalt between the bands is 1–3% of the side walls, against 6% approved.
- The bands are broader and fewer than the approved rings.
- The warm core is smaller and cooler than approved.
