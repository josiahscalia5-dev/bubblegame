"""All of the Art Director's colour classes (05_art_director_gate/scripts/common.py, unchanged) in a box, plus hues.py's purple and
pale-aqua shares: what fills the bank besides white.   python classes_box.py x0,y0,x1,y1 label=path ...   (path APP = the original)"""
import sys, os
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '../../../../..'))
src = open(os.path.join(ROOT, 'Previews/WebDemo/screen4_round9_match/05_art_director_gate/scripts/common.py')).read()
ns = {}
exec(compile('\n'.join(l for l in src.split('\n') if not l.startswith(('APP=', 'G=', 'FR='))), 'common.py', 'exec'), ns)
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
box = [float(v) for v in sys.argv[1].split(',')]
W0, H0 = ns['W0'], ns['H0']
K = ['white', 'pale blue', 'azure', 'electric blue', 'deep cobalt', 'lavender', 'pink', 'gold']
print('% of box:', ' | '.join(K), '| purple(h228-290) | pale-aqua | other')
for a in sys.argv[2:]:
    lab, p = a.split('=', 1)
    im = ns['load'](APP if p == 'APP' else p)
    cl, h, s, v = ns['classes'](im)
    sl = (slice(int(box[1] * H0), int(box[3] * H0)), slice(int(box[0] * W0), int(box[2] * W0)))
    n = h[sl].size
    sh = {k: 100 * cl[k][sl].sum() / n for k in K}
    rest = ~(cl['white'] | cl['pink'] | cl['gold']) & (s >= 0.12)
    purple = 100 * (rest & (h >= 228) & (h < 290))[sl].sum() / n
    aqua = 100 * (rest & (h >= 180) & (h < 215) & (s < 0.5) & (v > 0.8))[sl].sum() / n
    other = 100 - sum(sh.values())
    print(f'{lab:18s} ' + ' '.join(f'{sh[k]:5.1f}' for k in K) + f' | {purple:5.1f} | {aqua:5.1f} | {other:5.1f}')
