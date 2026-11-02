# python3 -I tools/overlay_approved.py ours.png out.png: approved | ours | 50 % blend, at 538x1076 (the stage, 1:2)
import os, sys
from PIL import Image
size = (538, 1076)
st = Image.open(sys.argv[1]).convert('RGB').resize(size, Image.LANCZOS)
apr = Image.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'Design', 'ApprovedScreens', 'x3_03_Lets_Go_Washer_Entry.png')).convert('RGB').resize(size, Image.LANCZOS)
out = Image.new('RGB', (size[0] * 3 + 20, size[1]), (30, 30, 30))
out.paste(apr, (0, 0)); out.paste(st, (size[0] + 10, 0)); out.paste(Image.blend(apr, st, 0.5), (2 * size[0] + 20, 0))
out.save(sys.argv[2]); print(sys.argv[2], out.size)
