# Step 7 gameplay checks

- `?s3=focus`, step 7: `s3_func_focus_step7.txt` is identical to step 6's report (`../../32_step6_centre_placement/gameplay_s3_func_focus.txt`)
  except the tunnel bubbles' count (160 -> 40) and 240 fewer triangles; lanes, jump, coins, gem, socks, keyboard start, no
  console errors. `r2_func_focus_step7.txt` (hearts, pause, Bubble Blast, Turbo Spin) is identical to step 6's.
- The NORMAL game (no switch): `s3_func_normal_step7.txt` is identical to `s3_func_normal_step6.txt` (lanes, jump, coins,
  gem, socks, keyboard start, no console errors). `r2_func` does not apply: the normal game has no hearts, pause, Bubble Blast
  or Turbo Spin (they come with the `?s3=round2` test line that `focus` is built on: `game.js`, `if (R2)`); the tool stops
  at its first check on both builds alike (`r2_func_normal_step6.txt`, `r2_func_normal_step7.txt`). Its frames are among the
  41 identical ones (`../identity_proof_step7.txt`).
