# Helper scripts of the fourteenth session (copies from the session's scratchpad, kept so nothing is lost)

- `start_autosave.sh`: starts the detached 5-minute autosave (Tools/autosave.sh, 288 rounds = 24 hours) with this session's
  chat history and design-agent transcript files. Run it again if `ps -eo pid,etime,cmd | grep '[a]utosave.sh'` shows nothing.
- `probe_swell.cjs`: probes the live game (camera, projection, render size, the swell's uniforms, the character's transform)
  and renders a frame; found the opening camera (`S3.cine`) zooming the in-tunnel start screen.
- `tri.py`: labelled side-by-side sheets (ORIGINAL | ... ), each frame at the original's 767 x 1536.
- `pinkbox.py`: the pink character's silhouette box (top, base, width, area) in a frame.
- `tests.sh`, `tests2.sh`, `videos.sh`: the identity (normal game and older switches pixel-identical), gameplay
  (s3_func, r2_func) and Pixel 7 video runs; `compare_videos.sh`: 3-panel ORIGINAL | previous | new videos.
- `abl1.json`: the same-frame ablations (bloom off, heroSwell hidden, bubbles hidden) for tools/screen4/layer_diag.cjs.
Paths inside them point at /workspace/bubblegame and the session's scratchpad; change them for another machine.
The game-side tools are in WebDemo/tools/screen4/ (spector_capture.cjs, spector_report.py, region_compare.py,
optuna_domes.py, layer_diag.cjs). Installed programs (Blender, PyTorch / LPIPS / Optuna, ~6 GB) are not stored in the
repository (public, and too large); Tools/cloud_env_setup.sh reinstalls all of them in a new environment.
