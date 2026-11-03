import sys
from PIL import Image, ImageDraw, ImageFont
F = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 15)
out, approved, *pairs = sys.argv[1:]
art = Image.open(approved).convert('RGB')
A = Image.new('RGB', (538, 1076)); A.paste(art.resize((536, 1076), Image.LANCZOS), (1, 0))
ims = [(A, 'approved')] + [(Image.open(pairs[i]).convert('RGB'), pairs[i + 1]) for i in range(0, len(pairs), 2)]
o = Image.new('RGB', (len(ims) * 548 + 10, 1076 + 30), (18, 22, 40)); d = ImageDraw.Draw(o)
for i, (im, l) in enumerate(ims): d.text((10 + i * 548, 6), l, font=F, fill=(255, 255, 255)); o.paste(im, (10 + i * 548, 28))
o.resize((o.width * 2 // 3, o.height * 2 // 3), Image.LANCZOS).save(out)
