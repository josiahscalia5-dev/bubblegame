# Session ac4e3449, design agents

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## Game Art Director: Art director: Scene 5/6 gap ranking (started 11:28 UTC)

**Lead → agent** (11:28 UTC):

Live test for this session AND a real task (read-only; do not edit any file). Bubble Wash Kingdom, repo /workspace/bubblegame.

IMPORTANT: your standing instructions mention Classic Screen 4; for THIS task the targets are the user's approved Scene 5 and Scene 6 only:
- /workspace/bubblegame/Design/ReferencePacks/2026-11-09_Scene5_Scene6_Full_Kit_from_user/01_APPROVED_SCENE_5_FULL.png (864x1536)
- .../02_APPROVED_SCENE_6_FULL.png; the kit's crops 05-10 and asset maps 03/04 are detail references (same folder; read README_FIRST.txt).

Current real-game captures:
- Live game start view (what Scene 5 hands over to): /workspace/bubblegame/Previews/WebDemo/six_scenes/07_active_game_plain_launch_6ddc157f/pass18_baseline/upper_u001.6_tap.jpg
- Pass 18 gameplay: same folder, upper_u219.0.jpg, upper_u224.0.jpg, upper_u230.0.jpg (and SCENE6_TARGET_vs_CURRENT_PASS18.png)
- The opening's Scene 5 (tunnel inside the washer): /workspace/bubblegame/Previews/WebDemo/six_scenes/08_six_portrait_scenes_9ee07777/specialist_lanes/water/evidence/base/t_8.90.png and t_9.40.png

Task: rank the 8 largest visual differences between the captures and the approved Scene 5 / Scene 6, largest first, ignoring the 2D HUD/menu overlay. For each give: the region (normalised x/y box in the 864x1536 frame), what the reference has, what the game has, and a measurable target (e.g. hero width as fraction of frame width, hero top/bottom y, vanishing point position, tunnel wall colour hex sampled from the reference, arch count visible, gear centre and diameter). Measure from the images with Python (PIL/numpy are available) where you can; say which numbers are measured vs estimated. End with the 3 changes that would move the game closest to the references. Under 450 words. Also state in one line which tools you actually had in this session.


_0 tool steps._
