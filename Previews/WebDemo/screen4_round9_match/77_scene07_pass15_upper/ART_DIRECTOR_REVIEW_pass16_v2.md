# game-art-director: structural review of pass 16 v2 (MACH16 v2 + FAR16) against the original master (8 Nov 2026, session f70c9bd1)
Inputs: `frames/original_master_frame.png`, `frames/pass13b_u229.5_centre.png`, `frames/pass16_mach16_v2_far16_CURRENT.png` (u 229.5, centre lane).
- Zone A (distant machine world): slightly closer than pass 13b (machinery now fills the far end; the hero enemy at (0.74, 0.38), 0.34 W,
  matches the original's (0.73, 0.38), 0.33 W); still not the original's light pastel cluttered street converging on a bright glow at
  (0.50, 0.43): repeated pink washer boxes under a dark violet ceiling; the LaMa-repaired far art read as a hot rainbow disc capping the
  corridor; the big gear pale and behind the mission panel. Near-white share 16 % (original 30 %, pass 13b 12 %).
- Zone B (left): clearly closer (drum x 0-0.26 / y 0.23-0.42 vs the original's 0-0.30 / 0.19-0.43, pink-gold ring, lavender window with
  the paw bubble); the drum too thin and flat (needs a fat rim, a darker inner lip, a gold body running back); the ledge a magenta slatted
  fence instead of a solid cream-gold counter with a peach front and stars. Saturated violet / magenta share 45 % (original 13 %).
- Zone C (right): closer in silhouette (curved tub, rim at 0.49 H vs 0.48, left edge 0.69 W vs 0.70); too short, pale columns instead of
  solid pink panels with big gold stars, a lavender base instead of foam.
- Zone D (water): unchanged from pass 13b (deep indigo middle vs the original's light azure; three gameplay enemies over the vanishing point).
Ranked corrections: 1. zone A (remove the disc, pastel periwinkle / cyan / lilac far wall and ceiling with ~30 % near-white, varied gears /
pipes / tanks converging on a pale cyan-white glow, the gear saturated cobalt with a cyan rim at y 0.20-0.34); 2. zone B (fat drum, gold body,
solid cream-gold counter with a peach front and stars, no magenta wall); 3. zone C (taller to ~0.65-0.70 H, solid pink panels with large gold
stars, thinner rim, no lavender base).
**Applied in pass 16 v3 (bundle 1db26fd8):** all three, in one pass (see README). Not re-reviewed yet.

# Second review: V4 against V5 (8 Nov ~21:20 UTC), frames `pass16_v4_FINAL_CANDIDATE_u229.5_centre.png` and `pass16_v5_u229.5_centre.png`
V5 closer by a small margin. Left housing: a tie (pink torus porthole in place, x 0-0.27, y 0.20-0.42, but a pastel tube with a flat disc vs
the master's gold-trimmed metal rim with a glass bubble). Right: V5 (more cobalt gear; the pink star drum at y 0.48-0.61 matches in both).
Upper background: V5 slightly (more machinery, fewer bare turrets, but small fine pieces on a pale wall vs the master's chunky saturated
clutter). Far distance: V5 clearly (no gold portal ring, larger glow). Overall V5: **roughly 40-45 % recognizable (judgement, not a
measurement)**. Obstacles: (1) the upper middle (x 0.25-0.75, y 0.25-0.45) faces the camera; the master has two receding side walls of
dense saturated machinery angling to the vanishing point with light streaks (fixable with geometry); (2) the glass ring tube at the centre
(x 0.30-0.65, y 0.38-0.52; blocked by the level tube, only softenable); (3) the channel's width / shape / colour (mostly blocked by the
camera height and the lanes; the left pink slab x 0-0.3 y 0.40-0.62 and the side ledges partly fixable). The mission panel pushes the banner
over the porthole's top and the gear (HUD).
