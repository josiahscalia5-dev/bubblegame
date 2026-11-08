# Sheets for ?s3=...,level1 (8 November 2026).
#   python sheet.py <repo> <scratch>
# 1. seed 7, 3.0 s after the tap (768 x 1536 canvas): the ORIGINAL approved Screen 4 | the candidate before level1 | with level1
# 2. the recording's frames: the opening (girl, toss, entry, hand-over) and the run's sections, one row each
import sys, json, glob, os
from PIL import Image, ImageDraw, ImageFont
R, SP = sys.argv[1:3]
E = f'{R}/Previews/WebDemo/screen4_round9_match/68_level1'
def font(n):
    for f in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf']:
        if os.path.exists(f): return ImageFont.truetype(f, n)
    return ImageFont.load_default()
def label(im, txt, n=26):
    d = ImageDraw.Draw(im); f = font(n); w = d.textlength(txt, font=f); d.rectangle((0, 0, w + 16, n + 12), fill=(15, 10, 50)); d.text((8, 5), txt, fill=(255, 235, 120), font=f); return im
orig = Image.open(f'{R}/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg').convert('RGB').resize((768, 1536))
old = Image.open(f'{SP}/identity68/level1_vs_candidate_T3.0_old/base_canvas.png').convert('RGB')
new = Image.open(f'{SP}/identity68/level1_vs_candidate_T3.0_new/base_canvas.png').convert('RGB')
s = Image.new('RGB', (768 * 3 + 40, 1536), (240, 236, 250))
for i, (im, t) in enumerate([(orig, 'ORIGINAL approved Screen 4'), (old, 'BEFORE: ?s3=intunnel,structmatch'), (new, 'AFTER: ...,level1')]):
    s.paste(label(im.copy(), t), (i * (768 + 20), 0))
s.resize((s.width // 2, s.height // 2)).save(f'{E}/seed7_3.0s_ORIGINAL_BEFORE_AFTER.jpg', quality=88)
# the same at Tap to Start (with ?s3=intunnel the start IS the approved moment)
old0 = Image.open(f'{SP}/identity68/level1_vs_candidate_start_old/base_canvas.png').convert('RGB')
new0 = Image.open(f'{SP}/identity68/level1_vs_candidate_start_new/base_canvas.png').convert('RGB')
s0 = Image.new('RGB', (768 * 3 + 40, 1536), (240, 236, 250))
for i, (im, t) in enumerate([(orig, 'ORIGINAL approved Screen 4'), (old0, 'BEFORE (Tap to Start)'), (new0, 'AFTER level1 (Tap to Start)')]):
    s0.paste(label(im.copy(), t), (i * (768 + 20), 0))
s0.resize((s0.width // 2, s0.height // 2)).save(f'{E}/seed7_TapToStart_ORIGINAL_BEFORE_AFTER.jpg', quality=88)
F = f'{SP}/rec_frames'
if os.path.isdir(F):
    fr = sorted(glob.glob(f'{F}/f*.jpg'))
    def row(idxs, labels, out):
        ims = [label(Image.open(fr[i]).convert('RGB'), labels[k], 20) for k, i in enumerate(idxs) if i < len(fr)]
        w, h = ims[0].size; sh = Image.new('RGB', (len(ims) * (w + 8), h), (240, 236, 250))
        for k, im in enumerate(ims): sh.paste(im, (k * (w + 8), 0))
        sh.resize((sh.width // 2, sh.height // 2)).save(out, quality=86)
    meta = json.load(open(f'{F}/record_log.json')) if os.path.exists(f'{F}/record_log.json') else {}
    json.dump(meta, open(f'{E}/videos/record_log.json', 'w'), indent=1) if meta else None
    print('frames', len(fr))
