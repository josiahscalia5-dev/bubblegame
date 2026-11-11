# brush6 comparison sheets (lane brush6): frames side by side at one height, each labelled, with the approved brush boxes drawn
# (the art director's extents: left x 0-0.20 y 0.34-0.72, right x 0.82-1.0 y 0.444-0.70), plus optional edge crops.
#   python3 sheet.py <out.png> [--h 768] [--crop] [--nobox] label=path [label=path ...]
# --crop: instead of whole frames, the left (x 0-0.30, y 0.30-0.78) and right (x 0.70-1.0, y 0.38-0.76) edge strips of every frame, 2x.
import sys
from PIL import Image, ImageDraw, ImageFont

BOX = {'left': (0.0, 0.34, 0.20, 0.72), 'right': (0.82, 0.444, 1.0, 0.70)}
CROPS = {'left': (0.0, 0.30, 0.30, 0.78), 'right': (0.70, 0.38, 1.0, 0.76)}


def font(sz):
    for p in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', '/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf']:
        try:
            return ImageFont.truetype(p, sz)
        except OSError:
            pass
    return ImageFont.load_default()


def main(argv):
    out, H, crop, box, items = None, 768, False, True, []
    i = 0
    while i < len(argv):
        a = argv[i]
        if a == '--h':
            H = int(argv[i + 1]); i += 2; continue
        if a == '--crop':
            crop = True
        elif a == '--nobox':
            box = False
        elif out is None:
            out = a
        else:
            lab, p = a.split('=', 1); items.append((lab, p))
        i += 1
    tiles = []
    for lab, p in items:
        im = Image.open(p).convert('RGB')
        if crop:
            parts = []
            for k in ('left', 'right'):
                x0, y0, x1, y1 = CROPS[k]
                W0, H0 = im.size
                c = im.crop((int(x0 * W0), int(y0 * H0), int(x1 * W0), int(y1 * H0)))
                c = c.resize((int(c.width * H / c.height), H), Image.LANCZOS)
                if box:
                    d = ImageDraw.Draw(c)
                    bx0, by0, bx1, by1 = BOX[k]
                    sx, sy = c.width / (x1 - x0), c.height / (y1 - y0)
                    d.rectangle(((bx0 - x0) * sx, (by0 - y0) * sy, (bx1 - x0) * sx - 1, (by1 - y0) * sy - 1), outline=(255, 255, 0), width=2)
                parts.append(c)
            t = Image.new('RGB', (sum(c.width for c in parts) + 6, H), (20, 20, 20))
            x = 0
            for c in parts:
                t.paste(c, (x, 0)); x += c.width + 6
        else:
            t = im.resize((int(im.width * H / im.height), H), Image.LANCZOS)
            if box:
                d = ImageDraw.Draw(t)
                for k, (bx0, by0, bx1, by1) in BOX.items():
                    d.rectangle((bx0 * t.width, by0 * H, bx1 * t.width - 1, by1 * H - 1), outline=(255, 255, 0), width=2)
        tiles.append((lab, t))
    pad, top = 8, 34
    Wt = sum(t.width for _, t in tiles) + pad * (len(tiles) + 1)
    sheet = Image.new('RGB', (Wt, H + top + pad), (16, 16, 24))
    d, f, x = ImageDraw.Draw(sheet), font(20), pad
    for lab, t in tiles:
        sheet.paste(t, (x, top)); d.text((x + 4, 6), lab, fill=(255, 255, 255), font=f); x += t.width + pad
    sheet.save(out)
    print(out, sheet.size)


if __name__ == '__main__':
    main(sys.argv[1:])
