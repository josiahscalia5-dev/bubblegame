# python3 -I tools/compare_approved.py out.png frame1.png [...]: approved Screen 3 beside browser frames, all at 538x1076 (the stage, 1:2)
import os, sys
from PIL import Image
out, frames = sys.argv[1], sys.argv[2:]
size = (538, 1076)
ims = [Image.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'Design', 'ApprovedScreens', 'x3_03_Lets_Go_Washer_Entry.png')).convert('RGB').resize(size, Image.LANCZOS)]
ims += [Image.open(f).convert('RGB').resize(size, Image.LANCZOS) for f in frames]
sheet = Image.new('RGB', (size[0] * len(ims) + 10 * (len(ims) - 1), size[1]), (30, 30, 30))
for i, im in enumerate(ims): sheet.paste(im, (i * (size[0] + 10), 0))
sheet.save(out); print(out, sheet.size)
