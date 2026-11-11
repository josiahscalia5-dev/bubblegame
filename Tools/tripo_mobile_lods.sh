#!/bin/bash
# Mobile LODs for any folder of Tripo GLBs (session ddf175f2; the recipe of Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/
# optimize_mobile.sh, which was measured: gltfpack -si keeps Tripo's UV seams, gltf-transform simplify smears the textures). Originals are never
# modified. Per model: textures capped (1024 / 512 / 256) -> gltfpack -si to LOD0 40k, LOD1 15k (-sp -se 0.03), LOD2 5k (-sp -sa) + meshopt -cc,
# then the Khronos validator. Usage from the repository root:
#   bash Tools/tripo_mobile_lods.sh <folder with *.glb (searched recursively)> <out folder>
cd "$(dirname "$0")/.." || exit 1; source Tools/bw_tools_env.sh > /dev/null 2>&1
SRC="$1"; DST="$2"; mkdir -p "$DST"; T=$(mktemp -d); trap 'rm -rf "$T"' EXIT
tris() { gltf-transform inspect "$1" --format md 2>/dev/null | awk -F'|' '/TRIANGLES/ {gsub(/[ ,]/,"",$6); s+=$6} END {print s+0}'; }
find "$SRC" -name '*.glb' | sort | while read -r f; do n=$(basename "$(dirname "$f")")_$(basename "$f" .glb | tr ' ' '_'); total=$(tris "$f"); echo "== $n ($total triangles, $(stat -c %s "$f") bytes)"
  for L in 0:40000:1024 1:15000:512 2:5000:256; do IFS=: read -r lod tgt px <<< "$L"
    r=$(python3 -c "print(min(1.0, $tgt / max(1, $total)))")
    gltf-transform resize "$f" "$T/r.glb" --width "$px" --height "$px" > /dev/null 2>&1
    gltfpack -i "$T/r.glb" -o "$DST/${n}_lod$lod.glb" -si "$r" $( case $lod in 1) echo -sp -se 0.03 ;; 2) echo -sp -sa ;; esac ) -cc > /dev/null 2>&1
    echo "  lod$lod: $(tris "$DST/${n}_lod$lod.glb") triangles, $(stat -c %s "$DST/${n}_lod$lod.glb") bytes"
  done
done
node Tools/check_models.cjs "$DST" 2>&1 | tail -1
