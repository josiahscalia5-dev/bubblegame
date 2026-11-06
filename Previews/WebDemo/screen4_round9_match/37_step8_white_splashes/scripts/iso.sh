#!/usr/bin/env bash
# Step 8 layer isolation: <label> <WebDemo> [env...]: the seed 7, 3.0 s frame, then the same frame with only the walls (and
# the background) drawn, only the walls + floor, and with the overlays (bubbles, glows, particles) hidden.
L=$1; D=$2; shift 2; E=/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/37_step8_white_splashes
cd /home/user/bubblegame && source Tools/bw_tools_env.sh; mkdir -p $E/iso
(cd $D && env S3=focus "$@" node tools/screen4/layer_diag.cjs $D $E/iso/$L > $E/iso/$L.log 2>&1)
$BW_PY -I - "$E/iso/$L/census.json" "$E/iso/${L}_abl.json" <<'PY'
import json, sys
c = json.load(open(sys.argv[1])); G = {}
for o in c['objects']:
    p, m = o['path'], o['mats'][0]; fo = m.get('fragOut') or ''; un = m.get('uniforms') or []
    k = 'bg' if 'uTop' in un else 'walls' if (p == 'heroWalls' or 'matchWall(' in fo) else 'floor' if (p == 'lqFloor' or 'uRipples' in un) else \
        'vfx' if (p in ('mwTunnelBubbles', 's3Bubbles', 's4Bubbles', 'heroBubbles', 'r5Droplets', 'heroGlow', 'Points') or p.startswith('openingLook') or p.startswith('tunnelDecor') or p.startswith('Group/r2Halo') or (m['type'] == 'MeshBasicMaterial' and m['blending'] == 2)) else 'other'
    G.setdefault(k, []).append(o['id'])
json.dump([{'label': 'walls_only', 'solo': G.get('bg', []) + G.get('walls', [])},
           {'label': 'no_overlays', 'hide': G.get('vfx', [])}], open(sys.argv[2], 'w'))
print({k: len(v) for k, v in G.items()})
PY
(cd $D && env S3=focus "$@" node tools/screen4/layer_diag.cjs $D $E/iso/$L $E/iso/${L}_abl.json > $E/iso/$L.log 2>&1)
echo "$L: $(tail -n 1 $E/iso/$L.log)"
