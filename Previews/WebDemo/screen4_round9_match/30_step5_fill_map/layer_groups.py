"""Layer-isolation groups from a build's own census (layer_diag.cjs census.json): each group drawn ALONE (solo) with the
sky/background, at the same frame. Prints the ablation JSON for layer_diag.cjs.
  python3 layer_groups.py <census.json> > groups.json"""
import json, sys
c = json.load(open(sys.argv[1]))
def kind(o):
    p, m = o['path'], o['mats'][0]; fo = m.get('fragOut') or ''; un = m.get('uniforms') or []
    if 'uTop' in un: return 'bg'
    if p == 'heroWalls' or 'matchWall(' in fo: return 'walls'
    if p == 'lqFloor' or 'uRipples' in un: return 'floor'
    if p in ('heroSwell', 'heroSplash', 'spCurls', 'spLumps', 'lqWaterlineBubbles'): return 'splash'
    if p in ('mwTunnelBubbles', 's3Bubbles', 's4Bubbles', 'heroBubbles', 'r5Droplets', 'heroGlow') or p.startswith('openingLook') \
       or p == 'Points' or 'r7Bubble' in fo or 'uLipSpeed' in un or (p == 'Mesh' and m['type'] == 'MeshBasicMaterial' and m['blending'] == 2):
        return 'vfx'
    return 'other'
G = {}
for o in c['objects']: G.setdefault(kind(o), []).append(o['id'])
bg = G.get('bg', [])
specs = [{'label': 'only_walls', 'solo': bg + G.get('walls', [])},
         {'label': 'only_floor', 'solo': bg + G.get('floor', [])},
         {'label': 'only_front_splash', 'solo': bg + G.get('splash', [])},
         {'label': 'only_bubbles_vfx', 'solo': bg + G.get('vfx', [])}]
sys.stderr.write(json.dumps({k: len(v) for k, v in G.items()}) + '\n')
print(json.dumps(specs))
