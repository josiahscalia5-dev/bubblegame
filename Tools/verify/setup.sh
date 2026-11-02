#!/usr/bin/env bash
# One-time setup for verifying Bubble Wash without opening the Unity editor (for example in a cloud
# session). Downloads the parts of the Unity 6.3.27 Linux editor needed to compile (Roslyn, .NET
# runtime, engine/editor assemblies, built-in package sources, DXC), the Input System package, and
# builds the package assemblies the project references:
#   - uGUI runtime + editor, Input System: compiled from their real package sources
#   - URP / Core RP: thin signature stubs (urp_stubs/) for the few types the project uses
#   - NUnit: Unity's build from the editor
# Takes ~5 minutes (4.5 GB streamed, ~2 GB kept). Re-running skips finished steps.
# Cache location: $BW_VERIFY_CACHE (default ~/.cache/bubblewash-verify).
set -euo pipefail
HERE=$(cd "$(dirname "$0")" && pwd)
CACHE=${BW_VERIFY_CACHE:-$HOME/.cache/bubblewash-verify}
EDITOR_URL=https://download.unity3d.com/download_unity/22188f149405/LinuxEditorInstaller/Unity-6000.3.27f2.tar.xz
INPUT_URL=https://download.packages.unity.com/com.unity.inputsystem/-/com.unity.inputsystem-1.20.1.tgz
mkdir -p "$CACHE"
U=$CACHE/unity/Editor/Data
B=$U/Resources/PackageManager/BuiltInPackages
DLL=$CACHE/pkgdll

if [ ! -f "$U/Tools/libdxcompiler.so" ] || [ ! -f "$U/DotNetSdkRoslyn/csc.dll" ]; then
  echo "Streaming the Unity 6000.3.27f2 Linux editor archive (4.5 GB) and keeping only what compiling needs..."
  mkdir -p "$CACHE/unity"
  # tar exits non-zero when an optional pattern matches nothing; the check below decides.
  curl -sS --retry 3 "$EDITOR_URL" | xz -dc -T0 | tar -x -C "$CACHE/unity" --wildcards --no-anchored \
    'Editor/Data/Managed/*' 'Editor/Data/NetStandard/*' 'Editor/Data/DotNetSdkRoslyn/*' 'Editor/Data/NetCoreRuntime/*' \
    'Editor/Data/Resources/PackageManager/BuiltInPackages/*' '*libdxcompiler*' || true
  [ -f "$U/Tools/libdxcompiler.so" ] && [ -f "$U/DotNetSdkRoslyn/csc.dll" ] || { echo "Editor extraction failed"; exit 1; }
fi

if [ ! -d "$CACHE/inputsystem/package" ]; then
  echo "Fetching com.unity.inputsystem 1.20.1..."
  mkdir -p "$CACHE/inputsystem"
  curl -sSL --retry 3 "$INPUT_URL" | tar -xz -C "$CACHE/inputsystem"
fi

# Include root for the shader compiler: Packages/<name> -> the built-in package sources.
mkdir -p "$CACHE/incroot/Packages"
for p in com.unity.render-pipelines.universal com.unity.render-pipelines.core com.unity.render-pipelines.universal-config; do
  ln -sfn "$B/$p" "$CACHE/incroot/Packages/$p"
done

DEFINES="UNITY_6000_3_27;UNITY_6000_3;UNITY_6000;UNITY_5_3_OR_NEWER;UNITY_2017_1_OR_NEWER;UNITY_2018_1_OR_NEWER;UNITY_2019_1_OR_NEWER;UNITY_2019_4_OR_NEWER;UNITY_2020_1_OR_NEWER;UNITY_2020_2_OR_NEWER;UNITY_2021_1_OR_NEWER;UNITY_2021_2_OR_NEWER;UNITY_2021_3_OR_NEWER;UNITY_2022_1_OR_NEWER;UNITY_2022_2_OR_NEWER;UNITY_2022_3_OR_NEWER;UNITY_2023_1_OR_NEWER;UNITY_2023_2_OR_NEWER;UNITY_2023_3_OR_NEWER;UNITY_6000_0_OR_NEWER;UNITY_6000_1_OR_NEWER;UNITY_6000_2_OR_NEWER;UNITY_6000_3_OR_NEWER;PLATFORM_ARCH_64;UNITY_64;ENABLE_AUDIO;ENABLE_PHYSICS;ENABLE_UNITYEVENTS;ENABLE_VR;ENABLE_INPUT_SYSTEM;UNITY_EDITOR;UNITY_EDITOR_64;UNITY_EDITOR_LINUX;UNITY_STANDALONE;NET_STANDARD_2_0;NET_STANDARD;NET_STANDARD_2_1;NETSTANDARD;NETSTANDARD2_1;CSHARP_7_OR_LATER;CSHARP_7_3_OR_NEWER;DEBUG;TRACE"

package() { # name source-dir extra-defines
  local name=$1 src=$2 defs=$3
  [ -f "$DLL/$name.dll" ] && return 0
  local refs=(-reference:"$U/NetStandard/ref/2.1.0/netstandard.dll")
  # Managed/UnityEditor.dll duplicates the split UnityEditor.*Module.dll types; Unity references the modules.
  for d in "$U"/Managed/UnityEngine/*.dll "$DLL"/*.dll; do [ -f "$d" ] && refs+=(-reference:"$d"); done
  mapfile -t files < <(find "$src" -name "*.cs" | sort)
  echo "Compiling $name (${#files[@]} files)..."
  "$U/NetCoreRuntime/dotnet" "$U/DotNetSdkRoslyn/csc.dll" -nologo -noconfig -nostdlib+ -target:library -langversion:9.0 -unsafe+ -warn:0 \
    -define:"$DEFINES;$defs" -out:"$DLL/$name.dll" "${refs[@]}" "${files[@]}" | grep -E "error" || true
  [ -f "$DLL/$name.dll" ] || { echo "$name failed to compile"; exit 1; }
}

mkdir -p "$DLL"
UGUI_DEFS="PACKAGE_PHYSICS;PACKAGE_PHYSICS2D;PACKAGE_ANIMATION;PACKAGE_UITOOLKIT"
package UnityEngine.UI "$B/com.unity.ugui/Runtime/UGUI" "$UGUI_DEFS"
package UnityEditor.UI "$B/com.unity.ugui/Editor/UGUI" "$UGUI_DEFS"

# Input System: its own assembly only (the InputForUI plugins are separate assemblies). Version defines
# evaluated for Unity 6000.3.27 from Unity.InputSystem.asmdef (mouse-script and focus events need 6000.4+).
IS_SRC=$CACHE/inputsystem_src
if [ ! -d "$IS_SRC" ]; then
  (cd "$CACHE/inputsystem/package/InputSystem" && find . -name "*.cs" -not -path "./Editor/Plugins/InputForUI/*" -not -path "./Runtime/Plugins/InputForUI/*" |
    while read -r f; do mkdir -p "$IS_SRC/$(dirname "$f")"; cp "$f" "$IS_SRC/$f"; done)
fi
package Unity.InputSystem "$IS_SRC" "UNITY_INPUT_SYSTEM_ENABLE_XR;UNITY_INPUT_SYSTEM_ENABLE_PHYSICS;UNITY_INPUT_SYSTEM_ENABLE_UI;UNITY_INPUT_SYSTEM_PLATFORM_SCROLL_DELTA;UNITY_INPUT_SYSTEM_INPUT_MODULE_SCROLL_DELTA;UNITY_INPUT_SYSTEM_INPUT_MODULE_NAVIGATION_DEVICE_TYPE;UNITY_INPUT_SYSTEM_SENDPOINTERHOVERTOPARENT;UNITY_INPUT_SYSTEM_PLATFORM_POLLING_FREQUENCY"

mkdir -p "$CACHE/stubs/core" "$CACHE/stubs/urp"
cp "$HERE/urp_stubs/CoreRP.cs" "$CACHE/stubs/core/"; cp "$HERE/urp_stubs/URP.cs" "$CACHE/stubs/urp/"
package Unity.RenderPipelines.Core.Runtime "$CACHE/stubs/core" ""
package Unity.RenderPipelines.Universal.Runtime "$CACHE/stubs/urp" ""
cp -n "$B/com.unity.ext.nunit/net40/unity-custom/nunit.framework.dll" "$DLL/" 2>/dev/null || true
echo "Setup complete: $CACHE"
