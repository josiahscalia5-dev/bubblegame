# Design agents' reports, 5 November 2026 (sixth session, branch `ccr-4aef2c77-0cdeu2`)

The four project agents' work in this session, newest last. Their step-by-step transcripts are in
`2026-11-05_sixth_session_design_agent_transcripts.md`, exported from the agents' own logs with
`Tools/export_agent_transcripts.py`. The one authority throughout is the ORIGINAL CLASSIC APPROVED Screen 4:
`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`. The fifth session's
reports (Round 9 steps 1 to 4) are in `2026-11-05_fifth_session_design_agent_reports.md`.

## 0. Lead: recovery and the merge check

- This branch starts at `a5be95c`, the fifth session's last save, the newest work on any branch.
- The four agent files gained a "Newest: Round 9 ART MATCH" section, so every agent starts from the current state.
- The merged bundle (`2a6ab30`) rebuilds byte-identical (md5 `ba0c7f6c...`). Merged frames:
  `Previews/WebDemo/screen4_round9_match/04_merged/`.
- Pixel-identity baseline: the raw canvas of the normal game and ten older switches at Tap to Start, 2.85 s and 4.2 s from
  bundle `2a6ab30`. Re-rendering the normal game and `splash` gave 0 differing pixels in all 6 frames, so the method is
  deterministic.

## 1. Game Art Director: the six-area quality gate on the merged build, 3.0 s

**Report:** `Previews/WebDemo/screen4_round9_match/05_art_director_gate/README.md`, with `measured.txt`, the annotated
side by side, per-area crops, an object zoom grid, scripts, and the `rw_probe` diagnostic.

| area | score | verdict | key numbers (approved / merged) |
|---|---|---|---|
| 1 housing and framing | 7 | partly | rim thickness 0.019 / 0.032 H; zone 1 lavender 45.5 / 41.6%; left strip white 21.1 / 6.6% |
| 2 deep blue tunnel | 5 | partly | centre warm 46.7 / 18.5%, lavender 11.1 / 45.2%; upper-wall deep cobalt 3.9 / 1.2%; texture 0.094 / 0.062 |
| 3 light and reflections | 4 | far | wall cyan 13.3 / 6.6%; small sparkles 0.20 / 0.85%; lime pixels 29 / 783; glints #cae0ff / #e6e0f9 |
| 4 character immersion | 6 | partly | waterline 0.836 / 0.824; violet under the body 36.8 / 40.3%; texture 0.112 / 0.071; pale blue 20.5 / 34.4% |
| 5 foreground waves | 4 | far | bank white 20.3 / 15.9%; saturated blue 14.0 / 10.7%; white blobs left of the body 13 / 105 |
| 6 object size and placement | 7 | partly | gem 12% too wide and 0.027 H low; right coin 15% too wide and 0.02 H low; sock 0.025 H low |

Scores are its visual judgement; the numbers come from its scripts on 538 x 1076 resizes. No overall percentage.

**The centre, confirmed with two refinements:** the lilac centre is drawn by `heroWalls`. `matchWall()` works out `rw`
from each point's track-frame position, not its screen position. No wall point inside screen radius 0.09 samples the
map's warm core rows. The lining ends 38.2 m ahead, so `rw` can never fall below about 0.072. The path bends (pitch up at
16 m, a turn at 20 m, pitch down at 30 m), so the far wall faces the camera across the centre. The fix: `rw` and `tu`
from `gl_FragCoord` round the projected centre of the far tube, blended in under about 0.14 W; the floor needs the same.

**"Less lavender round the opening": rejected as the lever.** Lavender there is already at or below the approved level.
The opening feels less immersive because the rim is 1.7 times too thick, the left collar arc is too clean, and the centre
has no luminous pull.

**Ranked fixes:**
1. the centre (Tunnel & Lighting; the floor line too);
2. the foreground bank's mass (Water & VFX);
3. wall depth: cobalt troughs, denser bands (Tunnel & Lighting);
4. the colour of the light: no lime, cyan streaks (Tunnel & Lighting);
5. no star sparkles (Tunnel & Lighting);
6. the housing: a thinner rim, a wet left collar arc (Tunnel & Lighting);
7. the gem and centre crowding (Tunnel & Lighting);
8. the water under the body (Water & VFX);
9. the floor ahead, after fix 1 (Water & VFX);
10. the right coin and the sock (Tunnel & Lighting).

Out of scope: the game's HUD buttons start at 0.835 H against about 0.90, so they hide much of the foam bank.

## 2. Tunnel & Lighting specialist: the gate fixes (running)

- **Started:** 13:44 UTC, in its own worktree, on fixes 1, 3, 4, 5, 6, 7 and 10.
- It owns the centre's screen-radius helper, including the three lines in `matchFloor()` that compute `du`, `rw` and `tu`.
- **Evidence will go to:** `Previews/WebDemo/screen4_round9_match/06_tunnel_lighting_gate_fixes/`.

## 3. Water & VFX specialist: the bank and the water under the body (running)

- **Started:** 13:44 UTC, in parallel, in its own worktree, on fixes 2 and 8.
- Fix 9 waits for the centre fix.
- **Evidence will go to:** `Previews/WebDemo/screen4_round9_match/07_water_vfx_gate_fixes/`.

## Next

1. Merge both specialists, rebuild, and check the merged frame.
2. The final checks: pixel identity of every older switch against the `2a6ab30` baseline, `s3_func` and `r2_func`.
3. The comparisons at 2.85, 3.0 and 3.1 s with a 50% blend, and a gameplay video.
