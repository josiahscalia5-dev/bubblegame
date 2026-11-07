#!/bin/bash
# Bubble Wash Kingdom dev tools (Blender, OpenCV, PyTorch/LPIPS, Optuna, glTF tools, Vite, Tripo CLI, game npm deps).
# Runs the repository's own Tools/cloud_env_setup.sh, which skips what is installed. Only when the checkout has it (the
# default branch does not); a failed step is reported in the log and never stops the session from starting.
if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then
  bash bubblegame/Tools/cloud_env_setup.sh || echo "Bubble Wash setup: a step failed (above); run bash Tools/verify_restore.sh"
fi
