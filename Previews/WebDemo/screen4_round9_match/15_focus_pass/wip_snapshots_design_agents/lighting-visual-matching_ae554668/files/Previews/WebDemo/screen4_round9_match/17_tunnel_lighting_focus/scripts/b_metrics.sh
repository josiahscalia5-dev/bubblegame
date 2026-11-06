#!/bin/bash
# b_metrics.sh <canvas.png> [...]: the Art Director's measures for problem B (the walls' currents), the focus line only, per
# frame: polar_rings (bands per ray, L* sd along the ray), ring_dark (upper arc median L*, share darker than L* 55, saturated
# blue hue and saturation), zones (ring_upper turquoise), streaks (ring zone) and core (r < 0.12 W).
HERE="$(dirname "$0")"
PY=/root/.bubblewash-tools/visual/bin/python
for f in "$@"; do
  echo "== $f"
  "$PY" -I "$HERE/run_ad.py" polar_rings "$f" | grep "^focus  upper arc"
  "$PY" -I "$HERE/run_ad.py" ring_dark "$f" | grep "^focus  upper arc"
  "$PY" -I "$HERE/run_ad.py" zones "$f" | grep -A1 "^ring_upper" | grep focus
  "$PY" -I "$HERE/run_ad.py" streaks "$f" | grep "ring zone        focus"
  "$PY" -I "$HERE/run_ad.py" core "$f" | grep "^focus"
done
