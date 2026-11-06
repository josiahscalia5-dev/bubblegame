#!/usr/bin/env bash
# Bubble Wash Kingdom: development tools for Claude Code cloud sessions.
#
# Two ways to use it:
#   1. Lasting (recommended): paste this whole file into the cloud environment's Setup script (the cloud environment
#      menu in the session's title bar, then Edit, then Setup script). Every new session then starts with the tools.
#   2. This session only:  bash Tools/cloud_env_setup.sh
#
# Safe to run again: each step skips what is already there. Nothing is added to WebDemo/package.json and no game file
# changes. No keys or passwords are read or stored here (Tripo signs in separately: see Tools/DEV_TOOLS.md).
#
# Installs in ~/.bubblewash-tools/, the layout Tools/bw_tools_env.sh looks for:
#   blender-5.2.3-linux-x64/  Blender 5.2.3 LTS, official Linux build, checksum checked; linked as /usr/local/bin/blender
#   visual/                   Python with OpenCV, scikit-image, NumPy, Pillow, SciPy
#   node/                     glTF Transform, Khronos glTF Validator, Vite, Tripo CLI
#   activate.sh               puts the node tools on PATH (Tools/bw_tools_env.sh sources it)
# System-wide: Mesa EGL libraries (so Blender's Eevee renders without a GPU) and Git LFS's global filters.
# Also runs `npm install` in WebDemo (three and esbuild, pinned there; node_modules is gitignored).
# Already in the cloud image, only checked: Node.js and npm, Python 3, Playwright with Chromium (never run
# `playwright install`: another Playwright version cannot find the image's browser), ImageMagick, FFmpeg.
set -uo pipefail

T="${BUBBLEWASH_TOOLS:-$HOME/.bubblewash-tools}"
BLENDER_VERSION=5.2.3
PY_PACKAGES="opencv-python-headless==5.0.0.93 scikit-image==0.26.0 numpy==2.5.4 pillow==13.0.0 scipy==1.18.1"
# (pinned 6 November 2026 to the versions verified on two accounts: Tools/requirements/metrics.lock.txt has the full list)
METRICS_PACKAGES="torch==2.15.0 torchvision==0.29.2 lpips==0.1.4 optuna==5.0.0 scikit-image==0.26.0 \
opencv-python-headless==5.0.0.93 pillow==13.0.0 scipy==1.18.1"
# spectorjs: the Spector.js WebGL frame debugger, injected into the page by WebDemo/tools/screen4/spector_capture.cjs
# (until 6 November it lived in a scratch folder and was lost with each machine; Tools/bw_tools_env.sh exports BW_SPECTOR)
NODE_PACKAGES="@gltf-transform/cli@4.5.1 @gltf-transform/core@4.5.1 @gltf-transform/extensions@4.5.1 \
@gltf-transform/functions@4.5.1 gltf-validator@2.0.0-dev.3.10 vite@8.3.5 tripo-cli@0.11.2 spectorjs@0.9.33"

failed=()
step() { printf '\n== %s\n' "$*"; }
fail() { echo "  FAILED: $*"; failed+=("$*"); }
mkdir -p "$T"

step "Blender $BLENDER_VERSION"
B="$T/blender-$BLENDER_VERSION-linux-x64"
if "$B/blender" --version 2>/dev/null | grep -q "Blender $BLENDER_VERSION"; then
  echo "  already installed"
else
  tmp=$(mktemp -d)
  base="https://download.blender.org/release/Blender${BLENDER_VERSION%.*}"
  if curl -fsS --retry 4 -o "$tmp/blender.tar.xz" "$base/blender-$BLENDER_VERSION-linux-x64.tar.xz" \
    && curl -fsS --retry 4 -o "$tmp/sums" "$base/blender-$BLENDER_VERSION.sha256" \
    && [ "$(sha256sum "$tmp/blender.tar.xz" | cut -d' ' -f1)" = "$(grep 'linux-x64.tar.xz' "$tmp/sums" | cut -d' ' -f1)" ] \
    && tar -xJf "$tmp/blender.tar.xz" -C "$T"; then
    echo "  installed (checksum matches blender.org)"
  else
    fail "Blender (download, checksum or unpack)"
  fi
  rm -rf "$tmp"
fi
[ -x "$B/blender" ] && ln -sfn "$B/blender" /usr/local/bin/blender

step "Mesa EGL (lets Blender's Eevee render without a GPU; Cycles does not need it)"
if ldconfig -p 2>/dev/null | grep -q 'libEGL.so.1' && ls /usr/lib/x86_64-linux-gnu/dri/*swrast* > /dev/null 2>&1; then
  echo "  already installed"
elif command -v apt-get > /dev/null; then
  if { apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get install -y -qq \
       libegl1 libgl1-mesa-dri libglx-mesa0 libgles2 > /dev/null; }; then echo "  installed"
  else echo "  warning: not installed, so Eevee renders will not work (Cycles still does)"; fi
fi

step "Python visual tools (OpenCV, scikit-image, NumPy, Pillow, SciPy)"
if "$T/visual/bin/python" -c "import cv2, skimage, numpy, PIL, scipy" 2>/dev/null; then
  echo "  already installed"
else
  UV="$(command -v uv || true)"; [ -z "$UV" ] && [ -x "$HOME/.local/bin/uv" ] && UV="$HOME/.local/bin/uv"
  if [ -n "$UV" ]; then
    "$UV" venv -q --python "$(command -v python3)" "$T/visual" && "$UV" pip install -q --python "$T/visual/bin/python" $PY_PACKAGES
  else
    python3 -m venv "$T/visual" && "$T/visual/bin/pip" install -q $PY_PACKAGES
  fi && echo "  installed" || fail "Python visual tools"
fi

step "Python metrics tools (PyTorch on CPU, LPIPS with its AlexNet weights, Optuna) in their own environment"
# (6 November, the user's request: LPIPS and Optuna for the Screen 4 comparisons; kept apart from visual/ so it never
# disturbs it. PyPI's torch build, about 5.6 GB; the CPU-only index redirects to a host the network does not allow. LPIPS
# fetches its AlexNet weights from download.pytorch.org, allowed in the bubblegame environment.)
if "$T/metrics/bin/python" -c "import torch, lpips, optuna, skimage, cv2" 2>/dev/null; then
  echo "  already installed"
else
  UV="$(command -v uv || true)"; [ -z "$UV" ] && [ -x "$HOME/.local/bin/uv" ] && UV="$HOME/.local/bin/uv"
  if [ -n "$UV" ]; then
    "$UV" venv -q --python "$(command -v python3)" "$T/metrics" && "$UV" pip install -q --python "$T/metrics/bin/python" \
      $METRICS_PACKAGES \
      && "$T/metrics/bin/python" -c "import lpips; lpips.LPIPS(net='alex', verbose=False)" > /dev/null 2>&1 && echo "  installed" || fail "Python metrics tools"
  else fail "Python metrics tools (needs uv)"; fi
fi

step "Node tools (glTF Transform, glTF Validator, Vite, Tripo CLI)"
mkdir -p "$T/node"
[ -f "$T/node/package.json" ] || echo '{"name":"bubblewash-dev-tools","private":true,"description":"Dev tools for Bubble Wash Kingdom, outside the game"}' > "$T/node/package.json"
(cd "$T/node" && npm install --no-audit --no-fund --loglevel=error $NODE_PACKAGES > /dev/null) && echo "  installed" \
  || fail "Node tools"
cat > "$T/activate.sh" << 'EOF'
# Puts the Bubble Wash Kingdom node tools (gltf-transform, vite, tripo) on PATH. Tools/bw_tools_env.sh sources this.
_bw_t="${BUBBLEWASH_TOOLS:-$HOME/.bubblewash-tools}"
case ":$PATH:" in *":$_bw_t/node/node_modules/.bin:"*) ;; *) export PATH="$_bw_t/node/node_modules/.bin:$PATH" ;; esac
unset _bw_t
EOF

step "Git LFS"
command -v git-lfs > /dev/null || { command -v apt-get > /dev/null && apt-get install -y -qq git-lfs > /dev/null; }
git lfs install --skip-repo > /dev/null 2>&1 && echo "  $(git lfs version)" || fail "Git LFS"

step "Game dependencies (WebDemo: three and esbuild, pinned in its package.json)"
demo=""
for d in "bubblegame/WebDemo" "$(dirname "$0")/../WebDemo" "WebDemo"; do
  [ -f "$d/package.json" ] && [ -f "$d/build.mjs" ] && { demo="$d"; break; }
done
if [ -n "$demo" ]; then
  (cd "$demo" && npm install --no-audit --no-fund --loglevel=error > /dev/null) && echo "  installed in $demo" \
    || fail "WebDemo npm install"
else
  echo "  WebDemo not found from $(pwd): run 'cd WebDemo && npm install' in the session"
fi

step "Checks"
PATH="$T/node/node_modules/.bin:$PATH"
echo "  $(blender --version 2>/dev/null | sed -n 1p || echo 'Blender: MISSING')"
"$T/visual/bin/python" -c "import cv2, skimage; print('  OpenCV', cv2.__version__, '| scikit-image', skimage.__version__)" 2>/dev/null \
  || echo "  OpenCV / scikit-image: MISSING"
echo "  glTF Transform $(gltf-transform --version 2>/dev/null | tail -1 || echo MISSING)"
echo "  glTF Validator $(node -e "console.log(require('$T/node/node_modules/gltf-validator').version())" 2>/dev/null || echo MISSING)"
echo "  $(vite --version 2>/dev/null || echo 'Vite: MISSING')"
echo "  Tripo CLI $(tripo --version 2>/dev/null | tail -1 || echo MISSING) (sign-in: see Tools/DEV_TOOLS.md)"
echo "  Spector.js $(node -e "console.log(require('$T/node/node_modules/spectorjs/package.json').version)" 2>/dev/null || echo MISSING)"
"$T/metrics/bin/python" -c "import torch, lpips, optuna; from importlib.metadata import version as v; print('  PyTorch', torch.__version__, '| LPIPS', v('lpips'), '| Optuna', optuna.__version__)" 2>/dev/null \
  || echo "  PyTorch / LPIPS / Optuna: MISSING"
echo "  Node.js $(node -v 2>/dev/null || echo MISSING), npm $(npm -v 2>/dev/null || echo MISSING), $(python3 --version 2>&1)"
echo "  $(convert -version 2>/dev/null | sed -n 1p || echo 'ImageMagick: MISSING')"
echo "  $(ffmpeg -version 2>/dev/null | sed -n 1p || echo 'FFmpeg: MISSING')"
echo "  $(git lfs version 2>/dev/null || echo 'Git LFS: MISSING')"
node -e "require('playwright').chromium.launch().then(async (b) => { console.log('  Playwright', require('playwright/package.json').version, '/ Chromium', b.version()); await b.close(); })" 2>/dev/null \
  || echo "  Playwright: not found from here (normal while the environment is being built; check in the session)"

if [ ${#failed[@]} -gt 0 ]; then
  printf '\nFAILED steps: %s\n' "${failed[*]}"
  exit 1
fi
printf '\nAll Bubble Wash Kingdom tools are installed. In each shell: source Tools/bw_tools_env.sh\n'
