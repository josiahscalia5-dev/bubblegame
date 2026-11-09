#!/bin/bash
# Mobile LODs of the user's eight Tripo models (9 November 2026, session 47f75e22). Re-runnable; the originals are never modified.
# Per model: textures capped (1024 / 512 / 256, gltf-transform resize) -> gltfpack -si (simplify to LOD0 40k, LOD1 15k, LOD2 5k triangles,
# respecting UV / normal seams; gltf-transform's simplify smeared the textures at seams, see the README) + -cc (meshopt). Then the Khronos validator via Tools/check_models.cjs. Run from the repository root:
#   bash Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/mobile/optimize_mobile.sh
cd "$(dirname "$0")/../../../.." || exit 1; source Tools/bw_tools_env.sh > /dev/null 2>&1
SRC=Design/TripoDeliveries/2026-11-09_Eight_Models_from_user; DST=$SRC/mobile; T=$(mktemp -d); trap 'rm -rf "$T"' EXIT
tris() { gltf-transform inspect "$1" --format md 2>/dev/null | awk -F'|' '/TRIANGLES/ {gsub(/[ ,]/,"",$6); s+=$6} END {print s+0}'; }
for f in "$SRC"/*.glb; do n=$(basename "$f" .glb | sed 's/BubbleWash_Tripo_//; s/ /_/g'); total=$(tris "$f"); echo "== $n ($total triangles)"
  for L in 0:40000:1024 1:15000:512 2:5000:256; do IFS=: read -r lod tgt px <<< "$L"
    r=$(python3 -c "print(min(1.0, $tgt / max(1, $total)))")
    gltf-transform resize "$f" "$T/r.glb" --width "$px" --height "$px" > /dev/null 2>&1
    gltfpack -i "$T/r.glb" -o "$DST/${n}_lod$lod.glb" -si "$r" -cc > /dev/null 2>&1
    echo "  lod$lod: $(tris "$DST/${n}_lod$lod.glb") triangles, $(stat -c %s "$DST/${n}_lod$lod.glb") bytes"
  done
done
node Tools/check_models.cjs "$DST" 2>&1 | tail -1
