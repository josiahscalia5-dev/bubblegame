# Browser demo recordings and checks

Recorded early on 3 November 2026 from `WebDemo/` in headless Chromium with `WebDemo/tools/record.cjs`. WebGL is rendered in software and the game is stepped at exactly 30 frames per game-second, so the videos play at true game speed. The player's view is recorded at an exact 1:2 portrait stage (538 × 1076), the same shape as the approved screens.

**This round: the previous washer tunnel restored, with cyan rings and pink light panels.**
- The Meshy tunnel liner is disabled; its files are kept.
- The tunnel is the Meshy drum again, now with glowing electric-cyan rings (bulbs, soft halos) and glowing pink light panels in gold frames, built in code. A slow wave of light runs down the tunnel.
- The yellow helper is gone.
- The "Let's go!" and Tap to Start panels fade out after the tap.

**One continuous run** (`bubblewash_screen3_gameplay.mp4`, 9.7 s): Tap to Start outside the washing machine, up the slide, through the entrance and 31 m into the lit tunnel.
- It stops just before the run loops back to the slide, so there is no cut.
- Every input is a real pointer gesture on the game stage (press, drag, release), the same events a finger makes on a phone.
- No console errors or warnings.

**The ride is unchanged.** Every recorded frame matches the earlier recording of the build from before today's tunnel work (`d44d687`): position, height, lane, speed, jumps, the path's pitch and bank, and the camera.
- With the same random seed, the two builds also match frame by frame (`WebDemo/tools/seeded_run.cjs`).
- Only which coins get picked up varies between builds. three.js uses the random-number generator for object IDs, so adding or removing objects shifts the coins' random bobbing, and a coin at the edge of the pickup range is caught in one build and missed in another.

**Clearance:** the mascot's body reaches 1.98 m from the tube's axis at most, even jumping repeatedly in every lane, and the camera 0.70 m. The drum's ribs are at 2.1 m, and the new panels at 2.3 m.

| File | What it shows |
|---|---|
| `bubblewash_screen3_gameplay.mp4` | The one continuous 9.7 s run, outside the washer to deep inside the tunnel. The touch overlay draws each finger trail and the gesture it was read as. |
| `gameplay_frames.png` | Twelve frames from that run, each labelled with its time and where the mascot is: Tap to Start, up the slide, at the entrance, and metres into the tunnel. |
| `screen3_start_vs_approved.png` | Approved Screen 3 beside the recorded opening frame. |
| `screen3_start_vs_approved_overlay.png` | Approved Screen 3, the recorded opening frame and the two blended, all at 538 × 1076. |
| `gameplay_track.json` | The game state for every frame of that run: position, lane, speed, path pitch and bank, camera, coins, gems and socks. |
| `published_page_check.png` | The published page served locally the way it is published (models only as base64 JSON). It renders with no console errors. |
| `bubblewash_screen3_side_view_debug.mp4` | From an earlier round: the same input script seen from the side, with the camera fixed in height (`?side`), showing the real climbs and drops. That view hides the scenery, and the ride is unchanged. |
| `bubblewash_screen3_gameplay_and_side_view.mp4` | This round's run beside the first 9.7 s of the side view. |
| `height_trace.png`, `side_view_frames.png` | From an earlier round (the ride is unchanged): the mascot's and camera's height every frame, and side-view frames. |
| `entrance_decor_before_after.png`, `entrance_decor_closeups.png` | From the entrance-decor round, before the helper was removed: the four Meshy decorations against the approved screen. |
| `side_machinery_vs_approved.png`, `side_machinery_balanced_vs_medium.png`, `duck_helper_vs_approved.png` | From earlier rounds: close-ups of the Meshy side machinery and of the duck helper, which has since been removed. |

**The run, second by second:**

| Time | What happens |
|---|---|
| 0–2 s | Tap to Start, outside the washing machine. The mascot glances back. |
| 2.0 s | Tap. The panels fade out. |
| 2.8–5.0 s | Four lane swipes up the slide, through its dip and over its crest, to the entrance. |
| 5.3 s | Into the washing machine. |
| 5.9 s | Jump at the foot of the climb. |
| 6.9 s | Swipe left in the banked left turn, climbing. |
| 7.7 s | Crest at +1.94 m. |
| 7.8–8.4 s | Swipes on the drop. |
| 9.1 s | Tap to spin, at the bottom of the drop. |
| 9.7 s | 31 m inside, near the light at the far end (the recording stops before the loop). |

**How these files were made** (from `WebDemo/`, with `<g>` the frame folder):

```sh
node tools/record.cjs "$PWD" <g> 9.7 game
ffmpeg -framerate 30 -i <g>/f%04d.jpg -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart bubblewash_screen3_gameplay.mp4
ffmpeg -i bubblewash_screen3_gameplay.mp4 -i bubblewash_screen3_side_view_debug.mp4 \
  -filter_complex "[0:v]scale=-2:540[a];[1:v]trim=duration=9.7,setpts=PTS-STARTPTS,scale=-2:540[b];[a][b]hstack=inputs=2" \
  -c:v libx264 -pix_fmt yuv420p -crf 20 -movflags +faststart bubblewash_screen3_gameplay_and_side_view.mp4
python3 -I tools/overlay_approved.py <g>/f0010.jpg screen3_start_vs_approved_overlay.png
python3 -I tools/journey_frames.py ../Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png <g> <out>   # screen3_start_vs_approved.png and tunnel_journey_frames.png (saved as gameplay_frames.png)
```

`gameplay_track.json` is `<g>/track.json`.
