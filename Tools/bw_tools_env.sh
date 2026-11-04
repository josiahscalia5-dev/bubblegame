# Source this before using the development tools:   source Tools/bw_tools_env.sh
#
# It finds the tools wherever this cloud environment installed them and exports one set of names the project's scripts
# and the screen-matcher skill use, so nothing else needs a hard-coded path:
#
#   BW_PY            Python with OpenCV, scikit-image, NumPy, Pillow (visual comparison scripts)
#   BW_BPY           Python with Blender's own Python API (the bpy 5.2.3 module), or empty if only a blender binary exists
#   BW_NODE_TOOLS    folder whose node_modules holds glTF Transform and the Khronos glTF Validator
#   PATH             gains gltf-transform, tripo and meshy-mcp-server, plus Tools/bin (a `blender` command that runs
#                    `blender -b --python x.py -- args` through the bpy module when no Blender binary is installed)
#   NODE_PATH        gains the tools' node_modules, so `require('playwright')` works from any folder
#
# Layouts it knows, newest first:
#   ~/.bubblewash-tools/{visual,blender,node}   (the user's environment setup script, 4 November 2026, second account)
#   /opt/bw-venv, /opt/bw-node-tools, /usr/local/bin/blender   (Tools/dev_tools_setup.sh, first account)
# No keys are read or stored here.

_bw_root="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")/.." && pwd)"
_bw_home="${BUBBLEWASH_TOOLS:-$HOME/.bubblewash-tools}"

[ -f "$_bw_home/activate.sh" ] && . "$_bw_home/activate.sh"

if [ -x "$_bw_home/visual/bin/python" ]; then export BW_PY="$_bw_home/visual/bin/python"
elif [ -x /opt/bw-venv/bin/python ]; then export BW_PY=/opt/bw-venv/bin/python
else export BW_PY=python3; fi

if [ -x "$_bw_home/blender/bin/python" ]; then export BW_BPY="$_bw_home/blender/bin/python"; else export BW_BPY=""; fi

if [ -d "$_bw_home/node/node_modules/@gltf-transform" ]; then export BW_NODE_TOOLS="$_bw_home/node"
elif [ -d /opt/bw-node-tools/node_modules ]; then export BW_NODE_TOOLS=/opt/bw-node-tools
else export BW_NODE_TOOLS=""; fi

if [ -n "$BW_NODE_TOOLS" ]; then
  case ":$PATH:" in *":$BW_NODE_TOOLS/node_modules/.bin:"*) ;; *) export PATH="$BW_NODE_TOOLS/node_modules/.bin:$PATH" ;; esac
  case ":${NODE_PATH:-}:" in *":$BW_NODE_TOOLS/node_modules:"*) ;; *) export NODE_PATH="$BW_NODE_TOOLS/node_modules${NODE_PATH:+:$NODE_PATH}" ;; esac
fi

# A real Blender binary wins; otherwise Tools/bin/blender runs scripts through the bpy module.
if ! command -v blender > /dev/null 2>&1 || [ "$(command -v blender)" = "$_bw_root/Tools/bin/blender" ]; then
  case ":$PATH:" in *":$_bw_root/Tools/bin:"*) ;; *) export PATH="$_bw_root/Tools/bin:$PATH" ;; esac
fi

unset _bw_root _bw_home
