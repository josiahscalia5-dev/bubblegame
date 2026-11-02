#!/usr/bin/env bash
# Compile the Bubble Wash assemblies (Runtime, Editor, EditMode tests) the way the Unity 6.3 editor
# does, in three configurations:
#   1. editor, Input System backend (this project's setting: activeInputHandler = Input System)
#   2. editor, legacy input backend
#   3. WebGL player: the runtime assembly without UNITY_EDITOR or any editor assembly
# Run setup.sh once first. Exits non-zero if any configuration has a compile error.
set -uo pipefail
HERE=$(cd "$(dirname "$0")" && pwd)
REPO=$(cd "$HERE/../.." && pwd)
CACHE=${BW_VERIFY_CACHE:-$HOME/.cache/bubblewash-verify}
U=$CACHE/unity/Editor/Data
DLL=$CACHE/pkgdll
OUT=$CACHE/out
[ -f "$DLL/Unity.InputSystem.dll" ] || { echo "Run Tools/verify/setup.sh first."; exit 2; }

BASE="UNITY_6000_3_27;UNITY_6000_3;UNITY_6000;UNITY_5_3_OR_NEWER;UNITY_5_4_OR_NEWER;UNITY_5_5_OR_NEWER;UNITY_5_6_OR_NEWER;UNITY_2017_1_OR_NEWER;UNITY_2018_1_OR_NEWER;UNITY_2019_1_OR_NEWER;UNITY_2020_1_OR_NEWER;UNITY_2021_1_OR_NEWER;UNITY_2022_1_OR_NEWER;UNITY_2023_1_OR_NEWER;UNITY_6000_0_OR_NEWER;UNITY_6000_1_OR_NEWER;UNITY_6000_2_OR_NEWER;UNITY_6000_3_OR_NEWER;PLATFORM_ARCH_64;UNITY_64;ENABLE_AUDIO;ENABLE_CACHING;ENABLE_CLOTH;ENABLE_MICROPHONE;ENABLE_MULTIPLE_DISPLAYS;ENABLE_PHYSICS;ENABLE_TEXTURE_STREAMING;ENABLE_UNITYEVENTS;ENABLE_VR;ENABLE_WEBCAM;ENABLE_UNITYWEBREQUEST;ENABLE_WWW;ENABLE_CUSTOM_RENDER_TEXTURE;ENABLE_DIRECTOR;ENABLE_SPRITES;ENABLE_TERRAIN;ENABLE_TILEMAP;ENABLE_TIMELINE;TEXTCORE_1_0_OR_NEWER;ENABLE_RUNTIME_GI;NET_STANDARD_2_0;NET_STANDARD;NET_STANDARD_2_1;NETSTANDARD;NETSTANDARD2_1;CSHARP_7_OR_LATER;CSHARP_7_3_OR_NEWER;TRACE"
EDITOR_DEFS="$BASE;UNITY_EDITOR;UNITY_EDITOR_64;UNITY_EDITOR_LINUX;UNITY_STANDALONE;UNITY_STANDALONE_LINUX;PLATFORM_STANDALONE;UNITY_INCLUDE_TESTS;DEBUG"
PLAYER_DEFS="$BASE;UNITY_WEBGL;PLATFORM_WEBGL;UNITY_WEBGL_API;ENABLE_INPUT_SYSTEM;BW_INPUT_SYSTEM"

REFS=(-reference:"$U/NetStandard/ref/2.1.0/netstandard.dll")
for d in "$U"/NetStandard/compat/2.1.0/shims/netfx/*.dll "$U"/Managed/UnityEngine/UnityEngine*.dll; do REFS+=(-reference:"$d"); done
EDITOR=(); for d in "$U"/Managed/UnityEngine/UnityEditor*.dll; do EDITOR+=(-reference:"$d"); done
PKG=(); for d in "$DLL"/*.dll; do PKG+=(-reference:"$d"); done
PLAYER_PKG=(); for n in UnityEngine.UI Unity.InputSystem Unity.RenderPipelines.Core.Runtime Unity.RenderPipelines.Universal.Runtime; do PLAYER_PKG+=(-reference:"$DLL/$n.dll"); done
mapfile -t RT < <(find "$REPO/Assets/BubbleWash/Scripts/Runtime" -name "*.cs" | sort)
mapfile -t ED < <(find "$REPO/Assets/BubbleWash/Scripts/Editor" -name "*.cs" | sort)
mapfile -t TS < <(find "$REPO/Assets/BubbleWash/Tests/EditMode" -name "*.cs" | sort)

failed=0
csc() { # label out defines refs... -- sources...
  local label=$1 out=$2 defs=$3; shift 3
  local args=(); while [ "$1" != "--" ]; do args+=("$1"); shift; done; shift
  local log; log=$("$U/NetCoreRuntime/dotnet" "$U/DotNetSdkRoslyn/csc.dll" -nologo -noconfig -nostdlib+ -target:library -langversion:9.0 \
    -warn:4 -nowarn:0169,0649,1701,1702 -define:"$defs" -out:"$out" "${REFS[@]}" "${args[@]}" "$@" 2>&1)
  local code=$?
  echo "$log" | grep -E "error|warning" | grep -v "warning CS0618" | sed "s|$REPO/||"
  if [ $code -eq 0 ]; then echo "  ok    $label"; else echo "  FAIL  $label"; failed=1; fi
}

for backend in input-system legacy; do
  if [ $backend = input-system ]; then defs="$EDITOR_DEFS;ENABLE_INPUT_SYSTEM;BW_INPUT_SYSTEM"; else defs="$EDITOR_DEFS;ENABLE_LEGACY_INPUT_MANAGER"; fi
  o=$OUT/$backend; mkdir -p "$o"
  echo "Editor, $backend backend:"
  csc BubbleWash.Runtime "$o/BubbleWash.Runtime.dll" "$defs" "${EDITOR[@]}" "${PKG[@]}" -- "${RT[@]}"
  csc BubbleWash.Editor "$o/BubbleWash.Editor.dll" "$defs" "${EDITOR[@]}" "${PKG[@]}" -reference:"$o/BubbleWash.Runtime.dll" -- "${ED[@]}"
  csc BubbleWash.Tests.EditMode "$o/BubbleWash.Tests.EditMode.dll" "$defs" "${EDITOR[@]}" "${PKG[@]}" -reference:"$o/BubbleWash.Runtime.dll" -reference:"$o/BubbleWash.Editor.dll" -- "${TS[@]}"
done
echo "WebGL player:"
mkdir -p "$OUT/player"
csc BubbleWash.Runtime "$OUT/player/BubbleWash.Runtime.dll" "$PLAYER_DEFS" "${PLAYER_PKG[@]}" -- "${RT[@]}"
exit $failed
