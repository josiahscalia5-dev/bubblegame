"""Copied from 13_focused_pass_tunnel_lighting for the merged build: writes ../measured_tunnel_lighting.txt. Runs, on the approved original | before (6b96449, 3.0 s) | now
3.0 | now 2.85 | now 3.1 (seed 7, DPR 1.5, HUD on, liquid_shots.cjs):
  - character.py, char_rows.py (this pass): the pink character's size and place;
  - the Art Director's step-5 scripts as copied in step 6 (walls.py, rings.py, palette.py, rim.py, strips.py, zones.py,
    objects.py), the frames passed through FRAMES;
  - the probe's numbers (stage_probe.cjs JSON, given as arguments: before, now): camera, the character's mesh footprint, the
    socks' mesh boxes, the hero bubbles, the vanishing point and the rim's top edge.
Usage: $BW_PY measure_all.py <probe before.json> <probe now.json>"""
import os, sys, json, subprocess
D = os.path.dirname(os.path.abspath(__file__)); E = os.path.dirname(D)
PY = sys.executable
F = {'before': os.path.join(E, 'before_6b96449', 'before_t3.00.png'), 'now3.0': os.path.join(E, 'match_t3.00.png'),
     'now2.85': os.path.join(E, 'match_t2.85.png'), 'now3.1': os.path.join(E, 'match_t3.10.png')}
env = {**os.environ, 'FRAMES': ';'.join(f'{k}={v}' for k, v in F.items())}
out = ['# Round 9 focused pass, Tunnel & Lighting: measurements (scripts in scripts/; frames resized to 538 x 1076; game frames',
       '# measured round (0.53, 0.53), the approved round (0.528, 0.532), as in the gate). approved | before = 6b96449 (before this merge) at 3.0 s | now = merged |',
       '# now at 3.0, 2.85 and 3.1 s. Seed 7, DPR 1.5, HUD on. No overall similarity percentage is claimed.']
def run(args, e=None):
    r = subprocess.run([PY] + args, cwd=D, env=e or os.environ, capture_output=True, text=True)
    return r.stdout + (r.stderr if r.returncode else '')
out.append('== character.py (lead: saturated pink, the brief\'s measure; body: any pink, colour-independent silhouette)')
out.append(run(['character.py', F['before'], F['now3.0'], F['now2.85'], F['now3.1']]))
out.append('== char_rows.py (the silhouette\'s left-right edges by row)')
out.append(run(['char_rows.py', F['before'], F['now3.0'], F['now2.85'], F['now3.1']]))
out.append('== warm_radius.py (the rainbow band: warm share by radius round the vanishing point, upper sector)')
out.append(run(['warm_radius.py'] + [f'{k}={v}' for k, v in F.items()]))
for s in ('walls.py', 'rings.py', 'palette.py', 'rim.py', 'strips.py', 'zones.py'):
    out.append(f'== {s}'); out.append(run([s], env))
out.append('== objects.py (approved, before, now 3.0; full-resolution frames)')
out.append(run(['objects.py', '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', F['before'], F['now3.0']]))
if len(sys.argv) > 2:
    out.append('== stage_probe.cjs at 3.0 s (before | now): from the scene, 538 x 1076 fractions')
    for lab, p in (('before', sys.argv[1]), ('now', sys.argv[2])):
        j = json.load(open(p))
        out.append(f"{lab}: camera track {j['camera']['track']} fov {j['camera']['fov']} fwd {j['camera']['fwd']}")
        out.append(f"{lab}: character mesh footprint {j['fuzz']}")
        for s in j['socks']: out.append(f"{lab}: sock {s}")
        out.append(f"{lab}: vanishing point (axis 30 m ahead; the walls' centre adds +0.028 W) {j['vp30']}  rim top {j['rimTop']}")
        for b in j.get('bubbles', []): out.append(f"{lab}: hero bubble {b['i']} centre ({b['cx']}, {b['cy']}) diameter {b['dW']} W")
open(os.path.join(E, 'measured_tunnel_lighting.txt'), 'w').write('\n'.join(out) + '\n')
print('wrote', os.path.join(E, 'measured_tunnel_lighting.txt'))
