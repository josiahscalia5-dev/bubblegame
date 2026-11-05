# ring_metrics.py <canvas.png> [label]: the Art Director's ring measures (16_art_director_focus_review/scripts, via run_ad.py) on
# one frame, only the lines for the new frame ('focus') and the original ('orig', with ORIG=1):
#   polar_rings.py upper arc 15-165 (dark bands per ray, L* sd along ray), ring_dark.py upper arc y < .45 (median L*, share
#   darker than L* 55, saturated-blue hue and saturation), zones.py ring_upper (turquoise share) and ring_left / centre
import sys, os, subprocess
HERE = os.path.dirname(os.path.abspath(__file__))
RUN = os.environ.get('RUN_AD') or os.path.join(HERE, 'run_ad.py')
canvas = os.path.abspath(sys.argv[1]); label = sys.argv[2] if len(sys.argv) > 2 else os.path.basename(canvas)
who = ('focus', 'orig') if os.environ.get('ORIG') else ('focus',)
def run(name):
    return subprocess.run([sys.executable, '-I', RUN, name, canvas], capture_output=True, text=True).stdout.splitlines()
print('==', label)
for l in run('polar_rings'):
    if 'upper arc' in l and l.split()[0] in who: print('  polar ', l)
for l in run('ring_dark'):
    if 'upper arc' in l and l.split()[0] in who: print('  dark  ', l)
z = run('zones'); cur = ''
for l in z:
    if not l.startswith(' '): cur = l.split()[0]; continue
    if cur in ('ring_upper', 'ring_left', 'centre') and l.split()[0] in who: print(f'  zone {cur:10s}', l.strip())
