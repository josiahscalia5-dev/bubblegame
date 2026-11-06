# The phone recorder is not frame-exact (found during step 7; a property of the tool, not of the step)

In the straight recordings (`../step6_straight_track.json`, `../step7_straight_track.json`: the game state at every frame)
her position is identical in every frame, but the splash-particle count differs from frame 6 and step 7 collects 2 more
coins over the run (17 against 15, from frame 172). To find out whether step 7 caused that, the SAME step 7 build was
recorded twice (`step7_run_A_track.json`, `step7_run_B_track.json`, 195 frames each, `record_phone.cjs ... dry`):

- run A against run B (the same build): particles differ in 178 of 195 frames from frame 0; the coin at frame 172 is
  picked up a frame apart;
- so the recorder lets the real clock into the game (the particles), and a coin at the edge of her reach can be collected
  in one recording and missed in another, whatever the build.

The frame-exact gameplay checks (`s3_func`, `r2_func`, through the game's own stepping) show that step 7 changes no
gameplay: their reports are identical to step 6's except the bubble count and its triangles (`../../gameplay/README.md`).
The videos are real gameplay at true game speed; for exact comparisons use the stepped captures (`frames/`, `inventory/`).
