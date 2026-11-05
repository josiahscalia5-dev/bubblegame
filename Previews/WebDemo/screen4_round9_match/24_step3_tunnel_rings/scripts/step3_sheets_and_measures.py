"""Step 3 evidence (run from the repository root with $BW_PY): sheets at the original's size and the measurements.
  01_original_vs_step2_vs_step3_3.00s.jpg  the ORIGINAL | after step 2 (a715434) | after step 3, all 767 x 1536, seed 7, 3.0 s
  02_closeup_tunnel_centre.jpg, 03_closeup_mascot_waterline.jpg   crops of the same three
  04_pixel7_original_vs_step2_vs_step3.jpg   on an emulated Pixel 7 (412 x 839)
  05_FINAL_original_vs_checkpoint_vs_step2_vs_step3_3.00s.jpg   the whole road: the original | the checkpoint d84aee5 | step 2 |
                                                                 step 3
  measured.txt   (1) the radial ring profile correlated with the original per sector (scripts/ringprof.py); (2) the walls'
                 band-luminance correlation (WebDemo/tools/screen4/match_overlay.py); (3) the bright band radii
                 (22_verification_audit/scripts/rings.py); (4) the zone colours (22_verification_audit/scripts/walls.py)
"""
import os, subprocess, sys
from PIL import Image, ImageDraw, ImageFont
R = os.getcwd()
D = 'Previews/WebDemo/screen4_round9_match/24_step3_tunnel_rings'
S2 = 'Previews/WebDemo/screen4_round9_match/23_step2_interface'
APP = 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
F = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 26)
Fs = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 19)
PY = sys.executable


def sheet(panels, out, size, crop=None, scale=1.0):
    ims = []
    for t, sub, p in panels:
        im = Image.open(p).convert('RGB').resize(size, Image.LANCZOS)
        if crop: im = im.crop(crop)
        if scale != 1.0: im = im.resize((int(im.size[0] * scale), int(im.size[1] * scale)), Image.LANCZOS)
        ims.append((t, sub, im))
    w = max(i.size[0] for _, _, i in ims); h = max(i.size[1] for _, _, i in ims)
    S = Image.new('RGB', (len(ims) * (w + 14) - 14, h + 92), (255, 255, 255)); d = ImageDraw.Draw(S)
    for k, (t, sub, im) in enumerate(ims):
        x = k * (w + 14); S.paste(im, (x, 92)); d.text((x + 10, 8), t, fill=(20, 20, 50), font=F); d.text((x + 10, 48), sub, fill=(70, 70, 90), font=Fs)
    S.save(out, quality=92); print(out, S.size)


O = ('ORIGINAL (approved)', 'the only target, 767 x 1536', APP)
B2 = ('AFTER STEP 2 (before step 3)', 'a715434, focus, seed 7, 3.0 s', f'{S2}/after/focus_after_t3.00.png')
B3 = ('AFTER STEP 3', 'focus, seed 7, 3.0 s, same camera', f'{D}/after/focus_step3_t3.00.png')
sheet([O, B2, B3], f'{D}/01_original_vs_step2_vs_step3_3.00s.jpg', (767, 1536))
sheet([O, B2, B3], f'{D}/02_closeup_tunnel_centre.jpg', (767, 1536), crop=(150, 560, 660, 1080))
sheet([O, B2, B3], f'{D}/03_closeup_mascot_waterline.jpg', (767, 1536), crop=(80, 1000, 700, 1536))
sheet([('ORIGINAL', 'stretched to the phone frame', APP), ('AFTER STEP 2 (Pixel 7)', '412 x 839, focus, 3.0 s', f'{S2}/after/pixel7_focus_after_3.00s.png'),
       ('AFTER STEP 3 (Pixel 7)', '412 x 839, focus, 3.0 s', f'{D}/after/pixel7_focus_step3_3.00s.png')], f'{D}/04_pixel7_original_vs_step2_vs_step3.jpg', (824, 1678))
sheet([O, ('CHECKPOINT (start of today)', 'd84aee5, focus, seed 7, 3.0 s', f'{S2}/before/focus_before_t3.00.png'), B2, B3],
      f'{D}/05_FINAL_original_vs_checkpoint_vs_step2_vs_step3_3.00s.jpg', (767, 1536))

# measurements
frames = {'checkpoint': f'{S2}/before/focus_before_t3.00', 'step2': f'{S2}/after/focus_after_t3.00', 'step3_3.00': f'{D}/after/focus_step3_t3.00',
          'step3_2.85': f'{D}/after/focus_step3_t2.85', 'step3_3.10': f'{D}/after/focus_step3_t3.10'}
out = ['# Step 3 measurements (focus, seed 7, the 538 x 1076 game frame; game centre (0.525, 0.531), the original\'s (0.528, 0.532)).',
       '# No overall similarity percentage is claimed: each line names its measure.', '']
run = lambda args: subprocess.run([PY] + args, capture_output=True, text=True, cwd=R).stdout
out.append('== (1) radial ring profile, correlated with the original per sector (+1 = the same rings at the same radii; scripts/ringprof.py)')
out.append(run([f'{D}/scripts/ringprof.py'] + [f'{k}={v}_canvas.png@0.525,0.531' for k, v in frames.items()]))
out.append('== (2) the walls\' band-luminance correlation with the original, upper half, objects excluded (tools/screen4/match_overlay.py)')
for k, v in frames.items():
    t = run(['WebDemo/tools/screen4/match_overlay.py', f'{v}.png', '0.525,0.531', f'/tmp/claude-0/-home-user-bubblegame/7acd4860-1f2a-5354-848f-1423c3350682/scratchpad/ov_{k}'])
    out.append(f'{k:12s} ' + [l for l in t.splitlines() if 'plain' in l][0].split('correlation')[1].strip())
env = {**os.environ, 'FRAMES': ';'.join(f'{k}={R}/{v}_canvas.png' for k, v in frames.items() if k in ('checkpoint', 'step2', 'step3_3.00'))}
A = 'Previews/WebDemo/screen4_round9_match/22_verification_audit/scripts'
for s, lab in (('rings.py', '(3) the bright band radii per sector (W)'), ('walls.py', '(4) the zone colours (shares of each zone)')):
    out.append(f'== {lab} ({A}/{s})')
    r = subprocess.run([PY, s], capture_output=True, text=True, cwd=A, env=env).stdout
    out.append('\n'.join(l for l in r.splitlines() if 'Warning' not in l and 'nanvar' not in l and 'print(f' not in l))
open(f'{D}/measured.txt', 'w').write('\n'.join(out) + '\n')
print('wrote', f'{D}/measured.txt')
