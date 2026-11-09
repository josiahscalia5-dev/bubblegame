# hero7: the approved Screen 6 pink furry character (session ddf175f2, 9 November 2026). NOT approved: waiting for the user.

Target: ONLY `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png` (the character, seen from behind).
Checkpoint before this work: branch `claude/bubble-wash-checkpoint-screen6-before-hero-ddf175f2` (1349ea78).
Switch: add `,hero7` to the Screen 6 candidate
`?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,coin6,hero6,water6,brush6,arch56,env6,tank6,fin6,hero7`.
Without it nothing changes (the plain launch: 0 px; Classic Screen 4 `?s3=intunnel`: 0 px).

## Method (why not Blender hair, why not the old mesh)
The game's mascot (models/mascot.glb, a 137k-triangle Meshy figure with arms) is squat; from behind, stretched 1.6x and sunk 0.78 m by hero6, it read as a
mound. The approved shows his back: a fur ball with two nubs, strands radiating from the point facing the viewer. Blender particle hair does not export to
glTF / three.js, and reshaping the Meshy mesh cannot give radial strands, so the drawn body is built directly as real-time SHELL FUR
(`WebDemo/src/s56_hero7.js`): a sphere and two nub spheres, each 32 instanced shells in ONE draw call; strands generated in the shader, combed away from a
pole, gathered into organic (Voronoi) tufts with gaps, soft anti-aliased edges, strand highlights (Kajiya-Kay), root occlusion, the measured colour ramp.
It follows the game mascot's drawn motion (swim bob, roll, lane lean, jumps, spins); his state (position, lanes, pickups, collisions) is untouched. Shown
while running; Tap to Start (Scene 5) and Level Complete keep the old model (his face). The water's contact (pile-up, collar) is fitted to the dome
(a uniform `uHeroR`, default = the old footprint, in s56_tunnel.js); the water's foam made over-white so it survives the scene grade.

## Results (u 206, 864x1536, the same camera; measured)
| | approved | old body | hero7 |
|---|---|---|---|
| visible box (render difference: the hero's own pixels) | x 0.264-0.725, top 0.606, water line 0.756 | x 0.300-0.756, top 0.611, 0.773 | x 0.272-0.743, top 0.601, 0.766 |
| silhouette IoU with the approved hero's pink mask | 1 | 0.722 | 0.855 |
| colour bands top / upper / lower / base | #fb67e9 / #f935bb / #f21ca6 / #b70891 | (speckled #dd..) | #eb69e9 / #e51fbb / #e70fa6 / #a81484 |
| near-white at his base (y 0.70-0.80) | 11.1 % | 0.1 % | ~6.7 % |
| triangles / draw calls for the hero | | 1,234,951 / 3 | 186,368 / 3 |

Evidence: `SBS_approved_vs_game_hero7.png` (full resolution), `crop_character_full_res.png`, `crop_fur_2x.png`, `crop_waterline_1p5x.png`,
`silhouette_overlap_old_left_new_right.png` (pink = approved only, blue = game only, white = both), `motion_old_top_hero7_bottom.png` (swim, lane
change, jump, spin, landing; old above, hero7 below), `fur_crispness_variants_2x.png`, `waterline_ring_variants.png`, `route_hero7.json`.
Gameplay: the Level 1 route with hero7 = the baseline (Level Complete, 5 socks, 125 coins, 2 gems, 3 stars, 4 hearts, 2 pops, 11 swipes, 0 console errors).

## Still different (honest)
- The approved fur is a little lighter (upper L 0.59 vs 0.51) with longer, sharper pointed tufts; ours is slightly darker and softer at the silhouette.
- The approved has tall white splash crests curling round his base with droplets; the game's water gives white broken contact lines (6.7 % vs 11.1 %
  near-white) but no rising crests.
- Software-rendered captures; the shell count (32) is the main cost knob on phones (16 halves it).
