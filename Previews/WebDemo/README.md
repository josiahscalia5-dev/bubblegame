# Browser demo recordings and checks

Recorded on the night of 2 November 2026 from `WebDemo/` in headless Chromium with `WebDemo/tools/record.cjs`. WebGL is rendered in software and the game is stepped at exactly 30 frames per game-second, so the videos play at true game speed. The player's view is recorded at an exact 1:2 portrait stage (538 × 1076), the same shape as the approved screens.

This version adds your four Meshy entrance decorations:
- the glowing water towers on both sides of the castle, their fluid animated
- the blue-and-gold gear wheels at the portal mouth and high on the left, turning
- the golden pipe elbows pouring water from the towers
- the crown trim on the portal arch

They replace the code-built towers and gears.

**The ride is unchanged.** The same input script was played on the build before this change and on this one. Every recorded frame matches: position, height, lane, speed, jumps, the path's pitch and bank, and the camera. The height chart is byte-identical. Both runs rescue 3 socks, collect 2 gems and loop once.
- This recording collected 11 coins and the earlier build 12. Each coin bobs with a random phase, so a coin at the edge of the pickup radius can be caught in one run and missed in the next.
- With `Math.random` seeded the same way, both builds collect exactly the same (`WebDemo/tools/seeded_run.cjs`): 11 coins with seed 7 and 10 with seed 99, in both builds.

The side-view video was not re-recorded. That view hides all scenery, including the new decorations, and the ride is identical.

The previous round added your Meshy giant side machinery at the lower left of the slide, and your Meshy duck helper. Earlier rounds added the washing machinery built in code (gold washing wheel, blue-and-gold wheel, machinery towers with waterfalls, gears, pipes), your Meshy duck helper on its pink float (it leads the way into the washing machine), the approved framing and narrow flume slide, glossier lighting, the raised water around the mascot, the coloured glowing rings in the tunnel and the glossy tutorial panels. The ride itself is unchanged: it climbs, crests, drops and banks over the same heights.

Every input is a real pointer gesture on the game stage (press, drag, release), the same events a finger makes on a phone. Both views use the same script, and their runs match: the mascot's height ranges over the same values, they visit the same lanes and both rescue 3 socks. Neither logged console errors.

| File | What it shows |
|---|---|
| `bubblewash_screen3_gameplay.mp4` | One continuous 13 s run in the player's view. The touch overlay draws each finger trail and the gesture it was read as. |
| `bubblewash_screen3_side_view_debug.mp4` | The same run from the side, with the camera fixed in height (`?side`). The castle and drum are hidden. It shows the water profile, the tube's roof and floor, the mascot's real path (pink dots) and live pitch, bank and speed. |
| `bubblewash_screen3_gameplay_and_side_view.mp4` | Both videos side by side (this round's gameplay with the side view of the identical ride). |
| `entrance_decor_before_after.png` | Approved Screen 3, the Tap to Start frame before this round (code-built towers and gears) and now (your four Meshy models), all at 538 × 1076. |
| `entrance_decor_closeups.png` | The approved image beside ours at the left tower, the right tower and the portal-mouth gears, and the crown keystone during the run (the "Let's go!" banner covers it at Tap to Start). |
| `height_trace.png` | The mascot's and the camera's world height every frame, with each gesture marked, plus the tube's pitch and bank and the lane. From `gameplay_track.json`. |
| `gameplay_frames.png`, `side_view_frames.png` | Frames from both videos. |
| `screen3_start_vs_approved.png` | Approved Screen 3 beside the recorded Tap to Start frame. |
| `screen3_start_vs_approved_overlay.png` | Approved Screen 3, the browser's Tap to Start frame and the two blended, all at 538 × 1076. |
| `side_machinery_vs_approved.png` | Close-up: the approved lower left beside the Meshy giant side machinery in the browser game, same crop and scale. |
| `side_machinery_balanced_vs_medium.png` | The Balanced and Medium machinery copies at game size. Balanced shows thin gold cracks across the bristles, so the game uses Medium. |
| `duck_helper_vs_approved.png` | Close-up: the approved helper beside the Meshy duck helper in the browser game, same crop and scale. |
| `gameplay_track.json` | The game state for every recorded frame: track and world position, lane, speed, path pitch and bank, camera, and coins, gems and socks. |
| `published_page_check.png` | The published page (`artifact.html`) served locally the way it is published: models only as base64 JSON, no `.glb` files. It loads all four new models and renders with no console errors. |

**The run, second by second:**

| Time | What happens |
|---|---|
| 0–2 s | Tap to Start. The mascot glances back, and its face is clear of fur. |
| 2.0 s | Tap. |
| 2.8–5.0 s | Four lane swipes down the slide, through its dip (−0.1 m) and over its crest (+0.9 m), into the portal. |
| 5.9 s | Jump at the foot of the climb. |
| 6.9 s | Swipe left in the banked left turn (+15° bank, climbing at +15°). |
| 7.7 s | Crest at +1.94 m, riding the water (not a jump). |
| 7.8–8.4 s | Swipes on the drop (−19° pitch, −17° bank). |
| 9.0 s | The bottom of the drop, at −0.62 m. |
| 9.1 s | Tap to spin. |
| 9.7 s | Loop back to the slide. |
| 10.7–12.3 s | More swipes and a jump on the slide. |

**How these files were made** (from `WebDemo/`, with `<g>` and `<s>` the two frame folders):

```sh
node tools/record.cjs "$PWD" <g> 13 game
node tools/record.cjs "$PWD" <s> 13 side
python3 -I tools/evidence_images.py <g> <s> ../Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png <out>
ffmpeg -framerate 30 -i <g>/f%04d.jpg -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart bubblewash_screen3_gameplay.mp4
ffmpeg -framerate 30 -i <s>/f%04d.jpg -c:v libx264 -pix_fmt yuv420p -crf 20 -movflags +faststart bubblewash_screen3_side_view_debug.mp4
ffmpeg -i bubblewash_screen3_gameplay.mp4 -i bubblewash_screen3_side_view_debug.mp4 \
  -filter_complex "[0:v]scale=-2:540[a];[1:v]scale=-2:540[b];[a][b]hstack=inputs=2" \
  -c:v libx264 -pix_fmt yuv420p -crf 20 -movflags +faststart bubblewash_screen3_gameplay_and_side_view.mp4
```

`gameplay_track.json` is `<g>/track.json`.
