# Step 5 (fill-only ring map, duplicate procedural whites off): TESTED and HELD, not in the game (6 November 2026)

- **Authority:** the ORIGINAL approved Screen 4 only.
- **Rule applied:** the user's strict brief (6 November, 03:02 UTC): "If the correction makes the water look less like my
  original, REVERT IT."
- **What was tested** (`step5_game_changes_HELD.patch`, `?s3=focus` only):
  - the walls drew `tunnel_rings_fill.png`;
  - the walls' procedural flecks off (`walls.flecks.amount` 0);
  - the tunnel's floating white streaks off (`bubbles.flecks.count` 0);
  - the 1,600 additive white droplets (`r5Droplets`) hidden.
- **The game files are back at step 4** (bundle md5 `73ed2a8b...`, rollback checkpoint `2f88104`).
- **Kept, not used by the game:**
  - the tools: `derive_ring_map.py --fill`, `motion_shots.cjs`;
  - the map `WebDemo/textures/screen4/tunnel_rings_fill.png`.

## The fill map

`WebDemo/tools/screen4/derive_ring_map.py --fill`:

- the original's own pixels kept wherever its water is visible, whites included;
- only the holes filled, by `derive_tunnel_textures.fill_rings`: the ring band's own detail quilted along the angle;
- a 12-texel seam fade (`04_seam_test_wrapped.jpg`): the hard rectangular seams at the original's object masks are
  gone. A wider feather could not fix them (`03_feather_test_wrapped.jpg`).

The step 3 map is still produced byte-identically by the default options.

| walls (box 1), the map wrapped back, no rendering | original | step 3 map | fill map |
|---|---|---|---|
| saturated blue | 58.9 % | 68.5 % | 59.0 % |
| white | 8.2 % | 0.1 % | 6.6 % |
| white pieces per 10k px / mean size | 3.45 / 237 px | 0.27 / 28 px | 3.45 / 194 px |
| fine texture (detail) | 4.89 | 2.15 | 4.27 |

## In the game (seed 7, 3.0 s, no steering; and the seeded swiped run at video 5.0-9.0 s)

- **Wall bands** (`11_zoom_wall_bands_2x.jpg`): the original's own curls and splash marks replace the uniform dashes.
  - White pieces 70 → 256 px (original 237); detail 3.47 → 3.93 (4.89).
  - But they render soft, and saturated blue falls 50.2 → 47.2 % (58.9). **Mixed.**
- **Distant centre** (`11_zoom_tunnel_centre_2x.jpg`): **worse.** Whiter and more washed out.
  - White 8.8 → 29.4 % (original 21.7); saturated blue 15.8 → 13.0 % (29.7).
- **Moving moments** (`13_motion_t*.jpg`): nearly the same as step 4. The big pale centre disc the user's kit points at
  (video 5.5 s) is in both.

**Why the centre got worse:** the core's ring placement assumes a straight tunnel. The path bends 15-30 m ahead, which
stretches the inner rings 4-5 x (`../28_next_investigation`, the calibration map). That stretch turned the original's
narrow pastel ring into a lavender band, and it now turns the original's real white splashes into broad white areas. **The
centre placement must be fixed first (step 6); step 5 is then re-tested on top of it.**

## Also found

- **A settings trap:** a `liquid.hide` list in `focus` REPLACES `match`'s (`['r6BowWave', 'lqSpraySheets']`). The first
  build of step 5 therefore showed the spray sheets again. The census of visible layers caught it, and the patch keeps
  both entries.
- **The cobalt loss on the walls is mostly the overlays:** with bubbles, glows and points off the walls show 54.3 %
  saturated blue against 47.1 %. The step 3 map hid that veil by being over-saturated (68.5 % against the original's
  58.9 %).

## Tools and files

- `motion_capture.sh` + `WebDemo/tools/screen4/motion_shots.cjs`: the seeded (7), swiped run of the step 4 video, shots
  at the chosen video times.
  - Frames with nothing to do are stepped in one `advance(n)`, which is proven identical: 0 differing pixels at 3.0 s.
  - Before and after have the same positions and camera at every moment (`motion/*/t*_state.json`).
- `layer_groups.py`: the layer-isolation groups (walls, floor, front splash, bubbles/VFX), taken from each build's own
  census. Sheet: `12_layer_isolation_before_after.jpg`.
- `step_sheets.py`: the sheets; `measured.json` and `measured.md` (definitions in `WebDemo/tools/screen4/layer_metrics.py`).
  - At the moving moments the regions are not object-masked (the objects move), so those numbers mix objects and water.
