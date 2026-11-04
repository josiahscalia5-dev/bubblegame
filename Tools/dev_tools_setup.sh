#!/usr/bin/env bash
# Development tools for Bubble Wash Kingdom's visual-matching work, outside the game itself (nothing here is added to
# WebDemo/package.json, so the game's own dependencies stay as they are). Safe to run again: each step is skipped when its
# tool is already there. Use it in a cloud session whose environment setup script has not installed them yet.
#
#   bash Tools/dev_tools_setup.sh            # everything below
#   SKIP_BLENDER=1 bash Tools/dev_tools_setup.sh
#
# Installs:
#   - Blender 5.2.3 (Linux x64, checksum checked against blender.org) in /opt, linked as /usr/local/bin/blender
#   - a Python environment /opt/bw-venv with OpenCV (headless), scikit-image, NumPy and Pillow
#   - /opt/bw-node-tools with glTF Transform (@gltf-transform/cli, core) and the Khronos glTF Validator (gltf-validator)
#   - tripo-cli (global), only with WITH_TRIPO=1. It needs `tripo login` by the user; generating spends Tripo credits.
# Checks: ImageMagick (convert), Playwright with Chromium.
# No keys or credentials are stored by this script. Tripo keeps its key in the user's home (~/.tripo), never in the repo.
set -euo pipefail
BLENDER_VERSION=5.2.3
ok() { printf '  ok  %s\n' "$*"; }

if [ -z "${SKIP_BLENDER:-}" ]; then
  if blender --version 2>/dev/null | grep -q "Blender $BLENDER_VERSION"; then ok "Blender $BLENDER_VERSION"
  else
    tmp=$(mktemp -d); cd "$tmp"
    base="https://download.blender.org/release/Blender${BLENDER_VERSION%.*}"
    curl -fsS -o "blender-$BLENDER_VERSION-linux-x64.tar.xz" "$base/blender-$BLENDER_VERSION-linux-x64.tar.xz"
    curl -fsS -o sums "$base/blender-$BLENDER_VERSION.sha256"
    grep "linux-x64.tar.xz" sums | sha256sum -c -
    tar -xJf "blender-$BLENDER_VERSION-linux-x64.tar.xz" -C /opt
    ln -sf "/opt/blender-$BLENDER_VERSION-linux-x64/blender" /usr/local/bin/blender
    cd /; rm -rf "$tmp"
    ok "$(blender --version | head -1)"
  fi
fi

if /opt/bw-venv/bin/python -c "import cv2, skimage" 2>/dev/null; then ok "OpenCV and scikit-image (/opt/bw-venv)"
else
  python3 -m venv /opt/bw-venv
  /opt/bw-venv/bin/pip install -q --upgrade pip
  /opt/bw-venv/bin/pip install -q opencv-python-headless scikit-image numpy pillow
  ok "$(/opt/bw-venv/bin/python -c "import cv2, skimage; print('OpenCV', cv2.__version__, '/ scikit-image', skimage.__version__)")"
fi

if [ -x /opt/bw-node-tools/node_modules/.bin/gltf-transform ] && [ -d /opt/bw-node-tools/node_modules/gltf-validator ]; then ok "glTF Transform and glTF Validator (/opt/bw-node-tools)"
else
  mkdir -p /opt/bw-node-tools && cd /opt/bw-node-tools
  [ -f package.json ] || npm init -y > /dev/null
  npm install --silent @gltf-transform/cli @gltf-transform/core gltf-validator
  ok "glTF Transform $(/opt/bw-node-tools/node_modules/.bin/gltf-transform --version), validator $(node -e "console.log(require('/opt/bw-node-tools/node_modules/gltf-validator').version())")"
fi

if [ -n "${WITH_TRIPO:-}" ]; then
  command -v tripo > /dev/null || npm install -g tripo-cli
  ok "tripo-cli $(tripo --version) (sign in with: tripo login --region ov --no-wait)"
fi

command -v convert > /dev/null && ok "$(convert -version | head -1)" || echo "  missing  ImageMagick (apt-get install imagemagick)"
node -e "const p=require('playwright'); p.chromium.launch().then(async b=>{console.log('  ok  Playwright', require('playwright/package.json').version, '/ Chromium', b.version()); await b.close();})" 2>/dev/null \
  || echo "  missing  Playwright with Chromium (the cloud image provides it; do not run 'playwright install')"
