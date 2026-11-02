# Browser demo recordings and checks

Recorded from `WebDemo/` in headless Chromium with `WebDemo/tools/record.cjs`. WebGL is rendered in software and the game is stepped at exactly 30 frames per game-second, so the videos play at true game speed.

Every input is a real pointer gesture on the game stage (press, drag, release), the same events a finger makes on a phone. Both views use the same script, and their runs match: the mascot's height ranges over the same values, they visit the same lanes and both rescue 3 socks. Neither logged console errors.

| File | What it shows |
|---|---|
| `bubblewash_screen3_gameplay.mp4` | One continuous 13 s run in the player's view. The touch overlay draws each finger trail and the gesture it was read as. |
| `bubblewash_screen3_side_view_debug.mp4` | The same run from the side, with the camera fixed in height (`?side`). The castle and drum are hidden. It shows the water profile, the tube's roof and floor, the mascot's real path (pink dots) and live pitch, bank and speed. |
| `bubblewash_screen3_gameplay_and_side_view.mp4` | Both videos side by side. |
| `height_trace.png` | The mascot's and the camera's world height every frame, with each gesture marked, plus the tube's pitch and bank and the lane. From `gameplay_track.json`. |
| `gameplay_frames.png`, `side_view_frames.png` | Frames from both videos. |
| `screen3_start_vs_approved.png` | Approved Screen 3 beside the recorded Tap to Start frame. |
| `gameplay_track.json` | The game state for every recorded frame: track and world position, lane, speed, path pitch and bank, camera, and coins, gems and socks. |
| `published_page_check.png` | The earlier demo version loaded in the artifact viewer (before the 3D path and the scenery changes). |

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
