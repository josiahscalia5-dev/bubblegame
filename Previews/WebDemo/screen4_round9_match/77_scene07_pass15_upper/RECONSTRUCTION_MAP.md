# Screen 09 reconstruction map (session f70c9bd1, 8 November 2026)

What the approved master actually shows, measured on its phone frame (`frames/original_master_frame.png`, screen fractions x / y of the frame),
and the real three.js structure that reconstructs it in the game at the checkpoint (u 229.5, centre lane). Track positions are (x m sideways,
+ = screen-left; h m up; u m along the track), placed with `scripts/projection_grid_u229.5_centre.json` (the real camera's projection).
The checkpoint camera: track u 226.66, x -0.62, h 1.49 (eye height), looking level and slightly left, fov 68, aspect 0.450 - so anything in
the upper half of the screen at mid distance is 4-8 m above the channel.

| # | Master structure | Screen (x, y) | Colours (master) | 3D reconstruction (scene07, `scene07_recon16.js`) | Track position | Status (v4) |
|---|---|---|---|---|---|---|
| B1 | Circular washer housing, left: fat pink rim, gold outer band, darker magenta inner lip, deep lavender interior, paw-emblem bubble | ring centre (0.07, 0.31), outer radius 0.125 H, right edge 0.21-0.30 | magenta-pink, gold, lavender-purple | `drum`: torus rim 0.3R, gold bands, inner lip, interior cylinder + glowing disc, glass bubble with paw, gold drum body | (3.15, 3.55, 238), R 1.2, face turned 0.5 rad | built; art director: clearly closer |
| B2 | Cream-gold counter ledge under the housing, light peach front with stars | top y 0.43-0.46, receding to (0.40-0.42, 0.42-0.47) | cream, gold, peach | `ledge`: top, front (peach star texture), gold lips | front x 2.25, h 1.95, u 232-253 | built (v3) |
| B3 | Tiers of machinery behind the housing | (0.20-0.35, 0.25-0.42) | lavender, blue, gold | machine columns on the ledge; the gold drum body | columns (3.3, -, 241.2) (3.05, -, 245.4) ... | partly: hidden by the drum at the checkpoint |
| A1 | The green-topped machine | (0.22-0.35, 0.24-0.33) | pink body, mint-green top | mounted tank, pink body, mint dome | (2.35, 4.4 centre, 244.4) | built |
| A2 | Stacked machines left of the vanishing point, small coins | (0.28-0.47, 0.25-0.36) | lavender, blue, cream, gold | mounted washer units / tanks / gears on the gantries | x 0.6-1.7, h 4.4-6.5, u 247-252 | built (simpler and more regular than the master) |
| A3 | The far end: a bright pale cyan-white glow at the vanishing point, arches and towers round it | glow (0.50, 0.43); arch (0.40-0.60, 0.27-0.40) | white, cyan, lavender, gold | far arch (blue, gold edges), glowing washer door above, stacks either side; the master's own distant scenery on the far END WALL only (LaMa only where its enemy / banner / HUD hid it); a large pale glow; v4: the level tube's hoops hidden 18 m beyond, so no ring tunnel | end wall u 254; glow u 257 | v4 |
| A4 | Machines and small blue gears above the enemy | (0.58-0.76, 0.23-0.29) | blue, lavender, pink | mounted washer, gear, tank on the right gantries | x -1.3..-1.9, h 4.8-7, u 244-250 | built |
| A5 | The top band behind the HUD: lavender / blue machines, a pink dome | (0-1, 0.05-0.20) | lavender, blue, pink | gantry beams at 7.6-7.9 m, mounted washers at 6.5-8 m | u 237-243 | built (mostly under the game's HUD) |
| C1 | The big blue gear, upper right, with a frilled ring | centre (0.92, 0.24), radius ~0.15 W | saturated cobalt, cyan rim | extruded gear, cobalt; frill ring cyan; gold hub; beam to the right wall | (-2.5, 4.15, 237), R 0.75 | built (v3: lowered clear of the mission panel) |
| C2 | Curved pink wall with large gold stars, cream rim | left edge (0.70, 0.49-0.62), rim y 0.48-0.55, to the water ~0.65-0.70 at the right edge | solid pink, gold stars, cream | long curved wall (radius 5.5 m), pink star panels, cream rim, gold lines and rail, no base | face 1.3 m from the centre line (the right lane's limit; the master's would stand at 0.5 m), u 233-241 | built (v3) |
| C3 | Towers and bubbles behind the right wall | (0.80-1.0, 0.30-0.50) | lavender, pink, white | machine columns behind the wall; high bubbles | x -2.9..-3.0, u 242-253 | partly (behind the hero enemy at the checkpoint) |
| D1 | Light azure water with white crests along both banks, bubbles | (0-1, 0.55-0.85) | azure, white | level1's water (not changed by scene07); v4: 48 bright iridescent bubbles along both banks | banks x +-1.15..1.65, h 0.7-2.3, u 222-264 | water colour NOT matched (deep indigo); bubbles v4 |
| E1 | ONE hero enemy, upper right | (0.73, 0.38), 0.33 W | navy, pink eyes | the nearest enemy ahead floats high; the others keep their height | looks only (hit tests unchanged) | built; matches (0.74, 0.38), 0.34 W |

Colour balance (background only, HUD / mascot / coins / enemies masked: `scripts/bg_metric.py`): the master's architecture is pastel
(chroma ~31-41, near-white 10-15 %, brightness L ~67-70); the game's was about twice as saturated with ~3 % near-white (pass 13b and v3).
v4 (PASTEL16) moves every pass-16 material toward the master's palette and lights it softly by its own colour.
