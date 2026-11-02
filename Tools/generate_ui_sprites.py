#!/usr/bin/env python3
"""
Generates the HUD sprites for the approved Screen 3 / Screen 4 interface and the paw coin face texture.

These are drawn to match the approved screens (glossy blue panels, dark counter pills, pink heart,
gold paw coin, purple gem, white sock buddy, pink Bubble Blast, yellow Turbo Spin). They are
TEMPORARY stand-ins until final UI art is supplied: the approved screens are only ~270 px wide, so
they cannot be cropped into usable icons.

Usage:  python3 Tools/generate_ui_sprites.py   (needs Pillow)
Output: Assets/BubbleWash/UI/Sprites/*.png and Assets/BubbleWash/Textures/coin_paw_face.png
"""
import math
import os
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "Assets", "BubbleWash", "UI", "Sprites")
TEX = os.path.join(ROOT, "Assets", "BubbleWash", "Textures")
SS = 4  # supersampling


def canvas(w, h):
    return Image.new("RGBA", (w * SS, h * SS), (0, 0, 0, 0))


def save(img, name, w, h):
    img = img.resize((w, h), Image.LANCZOS)
    os.makedirs(OUT, exist_ok=True)
    img.save(os.path.join(OUT, name))


def vgrad(w, h, top, bottom):
    g = Image.new("RGBA", (w, h))
    px = g.load()
    for y in range(h):
        t = y / max(1, h - 1)
        c = tuple(int(top[i] + (bottom[i] - top[i]) * t) for i in range(4))
        for x in range(w):
            px[x, y] = c
    return g


def rounded_mask(w, h, r, inset=0):
    m = Image.new("L", (w, h), 0)
    ImageDraw.Draw(m).rounded_rectangle([inset, inset, w - 1 - inset, h - 1 - inset], radius=max(1, r - inset), fill=255)
    return m


def paste_grad(img, mask, top, bottom):
    g = vgrad(img.width, img.height, top, bottom)
    img.alpha_composite(Image.composite(g, Image.new("RGBA", img.size, (0, 0, 0, 0)), mask))


def gloss(img, mask_box_r, strength=110):
    """White highlight on the top half of a rounded shape."""
    w, h = img.size
    x0, y0, x1, y1, r = mask_box_r
    hl = Image.new("L", (w, h), 0)
    d = ImageDraw.Draw(hl)
    d.rounded_rectangle([x0, y0, x1, y0 + (y1 - y0) * 0.48], radius=r, fill=strength)
    hl = hl.filter(ImageFilter.GaussianBlur(w * 0.01))
    white = Image.new("RGBA", (w, h), (255, 255, 255, 0))
    white.putalpha(hl)
    img.alpha_composite(white)


# ---------------------------------------------------------------- panels and buttons

def panel_blue(name="panel_blue.png", size=192, radius=60, light=False):
    s = size * SS
    img = canvas(size, size)
    r = radius * SS
    paste_grad(img, rounded_mask(s, s, r), (20, 52, 150, 255), (14, 40, 120, 255))             # dark outer edge
    paste_grad(img, rounded_mask(s, s, r, 5 * SS), (215, 240, 255, 255), (150, 205, 255, 255))   # white rim
    top, bot = ((90, 190, 255, 255), (35, 110, 240, 255)) if light else ((70, 165, 255, 255), (25, 90, 225, 255))
    paste_grad(img, rounded_mask(s, s, r, 11 * SS), top, bot)
    gloss(img, (14 * SS, 14 * SS, s - 14 * SS, s - 14 * SS, r - 14 * SS), 90)
    save(img, name, size, size)


def pill_dark():
    w, h = 160, 64
    img = canvas(w, h)
    W, H = w * SS, h * SS
    paste_grad(img, rounded_mask(W, H, H // 2), (120, 190, 255, 230), (80, 140, 230, 230))
    paste_grad(img, rounded_mask(W, H, H // 2, 3 * SS), (28, 46, 120, 215), (18, 30, 92, 225))
    gloss(img, (6 * SS, 4 * SS, W - 6 * SS, H - 4 * SS, H // 2), 35)
    save(img, "pill_dark.png", w, h)


def round_button():
    n = 128
    img = canvas(n, n)
    S = n * SS
    d = ImageDraw.Draw(img)
    d.ellipse([0, 0, S - 1, S - 1], fill=(22, 60, 160, 255))
    d.ellipse([5 * SS, 5 * SS, S - 5 * SS, S - 5 * SS], fill=(220, 240, 255, 255))
    m = Image.new("L", (S, S), 0)
    ImageDraw.Draw(m).ellipse([10 * SS, 10 * SS, S - 10 * SS, S - 10 * SS], fill=255)
    paste_grad(img, m, (80, 175, 255, 255), (30, 100, 230, 255))
    gl = Image.new("L", (S, S), 0)
    ImageDraw.Draw(gl).ellipse([22 * SS, 14 * SS, S - 22 * SS, S * 0.5], fill=80)
    white = Image.new("RGBA", (S, S), (255, 255, 255, 0)); white.putalpha(gl.filter(ImageFilter.GaussianBlur(3 * SS)))
    img.alpha_composite(white)
    save(img, "button_round.png", n, n)


def progress_track():
    w, h = 96, 40
    img = canvas(w, h); W, H = w * SS, h * SS
    paste_grad(img, rounded_mask(W, H, H // 2), (10, 26, 80, 255), (20, 40, 110, 255))
    save(img, "progress_track.png", w, h)
    img = canvas(w, h)
    paste_grad(img, rounded_mask(W, H, H // 2, 2 * SS), (150, 245, 120, 255), (40, 190, 70, 255))
    gloss(img, (4 * SS, 3 * SS, W - 4 * SS, H - 3 * SS, H // 2), 90)
    save(img, "progress_fill.png", w, h)


def badge():
    n = 64
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    d.ellipse([0, 0, S - 1, S - 1], fill=(255, 255, 255, 255))
    m = Image.new("L", (S, S), 0); ImageDraw.Draw(m).ellipse([4 * SS, 4 * SS, S - 4 * SS, S - 4 * SS], fill=255)
    paste_grad(img, m, (255, 90, 130, 255), (215, 25, 80, 255))
    save(img, "badge.png", n, n)


# ---------------------------------------------------------------- icons

def heart():
    n = 128
    img = canvas(n, n); S = n * SS
    def heart_poly(scale, cx, cy):
        pts = []
        for i in range(200):
            t = 2 * math.pi * i / 200
            x = 16 * math.sin(t) ** 3
            y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)
            pts.append((cx + x * scale, cy - y * scale))
        return pts
    m = Image.new("L", (S, S), 0); ImageDraw.Draw(m).polygon(heart_poly(3.7 * SS, S / 2, S * 0.47), fill=255)
    paste_grad(img, m, (200, 20, 110, 255), (170, 10, 90, 255))
    m2 = Image.new("L", (S, S), 0); ImageDraw.Draw(m2).polygon(heart_poly(3.3 * SS, S / 2, S * 0.47), fill=255)
    paste_grad(img, m2, (255, 140, 200, 255), (255, 45, 140, 255))
    gl = Image.new("L", (S, S), 0); ImageDraw.Draw(gl).ellipse([S * 0.22, S * 0.2, S * 0.45, S * 0.38], fill=180)
    white = Image.new("RGBA", (S, S), (255, 255, 255, 0)); white.putalpha(gl.filter(ImageFilter.GaussianBlur(4 * SS)))
    img.alpha_composite(white)
    save(img, "heart.png", n, n)


def paw(draw, cx, cy, s, fill):
    draw.ellipse([cx - 0.42 * s, cy - 0.05 * s, cx + 0.42 * s, cy + 0.62 * s], fill=fill)
    for (dx, dy, r) in [(-0.52, -0.35, 0.17), (-0.19, -0.62, 0.18), (0.19, -0.62, 0.18), (0.52, -0.35, 0.17)]:
        draw.ellipse([cx + (dx - r) * s, cy + (dy - r) * s, cx + (dx + r) * s, cy + (dy + r) * s], fill=fill)


def coin(name="coin.png", n=128, out_dir=None):
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    d.ellipse([0, 0, S - 1, S - 1], fill=(190, 110, 10, 255))
    m = Image.new("L", (S, S), 0); ImageDraw.Draw(m).ellipse([S * 0.05, S * 0.05, S * 0.95, S * 0.95], fill=255)
    paste_grad(img, m, (255, 230, 90, 255), (245, 160, 20, 255))
    m = Image.new("L", (S, S), 0); ImageDraw.Draw(m).ellipse([S * 0.17, S * 0.17, S * 0.83, S * 0.83], fill=255)
    paste_grad(img, m, (250, 185, 40, 255), (255, 220, 80, 255))
    pd = ImageDraw.Draw(img)
    paw(pd, S * 0.505, S * 0.52, S * 0.27, (205, 120, 15, 255))
    paw(pd, S * 0.49, S * 0.50, S * 0.27, (255, 236, 130, 255))
    gl = Image.new("L", (S, S), 0); ImageDraw.Draw(gl).ellipse([S * 0.18, S * 0.1, S * 0.6, S * 0.35], fill=120)
    white = Image.new("RGBA", (S, S), (255, 255, 255, 0)); white.putalpha(gl.filter(ImageFilter.GaussianBlur(5 * SS)))
    img.alpha_composite(white)
    img = img.resize((n, n), Image.LANCZOS)
    if out_dir:
        os.makedirs(out_dir, exist_ok=True)
        img.save(os.path.join(out_dir, name))
    else:
        os.makedirs(OUT, exist_ok=True)
        img.save(os.path.join(OUT, name))


def gem():
    n = 128
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    top = S * 0.24; mid = S * 0.42; bot = S * 0.9
    L, R = S * 0.06, S * 0.94
    tl, tr = S * 0.28, S * 0.72
    facets = [
        ([(tl, top), (tr, top), (S * 0.62, mid), (S * 0.38, mid)], (225, 160, 255)),
        ([(L, mid), (tl, top), (S * 0.38, mid)], (200, 120, 250)),
        ([(R, mid), (tr, top), (S * 0.62, mid)], (175, 90, 235)),
        ([(L, mid), (S * 0.38, mid), (S * 0.5, bot)], (165, 70, 230)),
        ([(S * 0.38, mid), (S * 0.62, mid), (S * 0.5, bot)], (205, 120, 255)),
        ([(S * 0.62, mid), (R, mid), (S * 0.5, bot)], (130, 45, 200)),
    ]
    outline = [(L, mid), (tl, top), (tr, top), (R, mid), (S * 0.5, bot)]
    d.polygon(outline, fill=(90, 20, 160, 255))
    for poly, col in facets:
        shrink = [(S * 0.5 + (x - S * 0.5) * 0.93, S * 0.55 + (y - S * 0.55) * 0.93) for x, y in poly]
        d.polygon(shrink, fill=col + (255,))
    gl = Image.new("L", (S, S), 0); ImageDraw.Draw(gl).polygon([(S * 0.32, S * 0.27), (S * 0.5, S * 0.27), (S * 0.42, S * 0.4)], fill=200)
    white = Image.new("RGBA", (S, S), (255, 255, 255, 0)); white.putalpha(gl.filter(ImageFilter.GaussianBlur(2 * SS)))
    img.alpha_composite(white)
    save(img, "gem.png", n, n)


def gear():
    n = 128
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    cx = cy = S / 2
    teeth = 8
    pts = []
    for i in range(teeth * 4):
        a = 2 * math.pi * i / (teeth * 4)
        r = S * (0.46 if (i % 4) in (0, 1) else 0.34)
        pts.append((cx + math.cos(a + math.pi / (teeth * 4)) * r, cy + math.sin(a + math.pi / (teeth * 4)) * r))
    d.polygon(pts, fill=(255, 255, 255, 255))
    d.ellipse([cx - S * 0.15, cy - S * 0.15, cx + S * 0.15, cy + S * 0.15], fill=(0, 0, 0, 0))
    save(img, "gear.png", n, n)


def pause():
    n = 128
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    for x0 in (0.24, 0.58):
        d.rounded_rectangle([S * x0, S * 0.18, S * (x0 + 0.18), S * 0.82], radius=S * 0.07, fill=(255, 255, 255, 255))
    save(img, "pause.png", n, n)


def plus():
    n = 64
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([S * 0.4, S * 0.1, S * 0.6, S * 0.9], radius=S * 0.08, fill=(255, 255, 255, 255))
    d.rounded_rectangle([S * 0.1, S * 0.4, S * 0.9, S * 0.6], radius=S * 0.08, fill=(255, 255, 255, 255))
    save(img, "plus.png", n, n)


def arrow(name, flip):
    w, h = 128, 140
    img = canvas(w, h); W, H = w * SS, h * SS
    pts = [(W * 0.05, H * 0.5), (W * 0.55, H * 0.06), (W * 0.55, H * 0.3), (W * 0.95, H * 0.3), (W * 0.95, H * 0.7), (W * 0.55, H * 0.7), (W * 0.55, H * 0.94)]
    d = ImageDraw.Draw(img)
    d.polygon(pts, fill=(150, 200, 255, 255))
    inner = [(W * 0.5 + (x - W * 0.5) * 0.88, H * 0.5 + (y - H * 0.5) * 0.86) for x, y in pts]
    m = Image.new("L", (W, H), 0); ImageDraw.Draw(m).polygon(inner, fill=255)
    paste_grad(img, m, (255, 255, 255, 255), (215, 235, 255, 255))
    if flip:
        img = img.transpose(Image.FLIP_LEFT_RIGHT)
    save(img, name, w, h)


def hand():
    w, h = 128, 160
    img = canvas(w, h); W, H = w * SS, h * SS
    d = ImageDraw.Draw(img)
    outline = (40, 80, 170, 255)
    def shape(o, fill):
        d.rounded_rectangle([W * 0.36 - o, H * 0.02 - o, W * 0.56 + o, H * 0.62 + o], radius=W * 0.1 + o, fill=fill)   # index finger
        d.rounded_rectangle([W * 0.2 - o, H * 0.42 - o, W * 0.86 + o, H * 0.96 + o], radius=W * 0.2 + o, fill=fill)   # palm
        for x in (0.56, 0.7):
            d.rounded_rectangle([W * x - o, H * 0.36 - o, W * (x + 0.15) + o, H * 0.62 + o], radius=W * 0.07 + o, fill=fill)
        d.rounded_rectangle([W * 0.06 - o, H * 0.5 - o, W * 0.3 + o, H * 0.7 + o], radius=W * 0.08 + o, fill=fill)      # thumb
    shape(4 * SS, outline)
    shape(0, (255, 255, 255, 255))
    save(img, "hand.png", w, h)


def sock():
    w, h = 128, 152
    img = canvas(w, h); W, H = w * SS, h * SS
    d = ImageDraw.Draw(img)
    def body(o, fill):
        d.rounded_rectangle([W * 0.18 - o, H * 0.04 - o, W * 0.68 + o, H * 0.78 + o], radius=W * 0.2 + o, fill=fill)
        d.rounded_rectangle([W * 0.18 - o, H * 0.52 - o, W * 0.95 + o, H * 0.96 + o], radius=W * 0.22 + o, fill=fill)
    body(3 * SS, (120, 90, 170, 255))
    body(0, (255, 255, 255, 255))
    for y in (0.08, 0.2):                                                      # pink cuff stripes
        d.rounded_rectangle([W * 0.18, H * y, W * 0.68, H * (y + 0.07)], radius=W * 0.03, fill=(255, 120, 175, 255))
    d.pieslice([W * 0.62, H * 0.56, W * 1.02, H * 0.98], 270, 90, fill=(255, 105, 170, 255))      # toe
    d.ellipse([W * 0.16, H * 0.72, W * 0.42, H * 0.97], fill=(255, 105, 170, 255))              # heel
    for x in (0.34, 0.52):                                                      # eyes
        d.ellipse([W * x, H * 0.4, W * (x + 0.08), H * 0.47], fill=(30, 20, 40, 255))
        d.ellipse([W * (x + 0.015), H * 0.405, W * (x + 0.04), H * 0.425], fill=(255, 255, 255, 255))
    d.arc([W * 0.4, H * 0.45, W * 0.5, H * 0.52], 20, 160, fill=(30, 20, 40, 255), width=2 * SS)
    for x in (0.27, 0.6):
        d.ellipse([W * x, H * 0.47, W * (x + 0.07), H * 0.51], fill=(255, 160, 190, 255))
    save(img, "sock.png", w, h)


def bubble_blast():
    n = 160
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([S * 0.12, S * 0.32, S * 0.7, S * 0.58], radius=S * 0.12, fill=(200, 40, 120, 255))
    d.rounded_rectangle([S * 0.14, S * 0.34, S * 0.68, S * 0.55], radius=S * 0.1, fill=(255, 120, 185, 255))
    d.rounded_rectangle([S * 0.62, S * 0.3, S * 0.76, S * 0.6], radius=S * 0.05, fill=(160, 220, 255, 255))   # nozzle
    d.rounded_rectangle([S * 0.2, S * 0.52, S * 0.36, S * 0.86], radius=S * 0.06, fill=(240, 190, 40, 255))   # handle
    d.rounded_rectangle([S * 0.25, S * 0.2, S * 0.45, S * 0.34], radius=S * 0.05, fill=(255, 210, 60, 255))   # tank
    for (cx, cy, r) in [(0.84, 0.3, 0.08), (0.9, 0.5, 0.06), (0.8, 0.66, 0.05), (0.94, 0.18, 0.04)]:
        d.ellipse([S * (cx - r), S * (cy - r), S * (cx + r), S * (cy + r)], outline=(255, 255, 255, 255), width=2 * SS, fill=(170, 220, 255, 120))
    save(img, "bubble_blast.png", n, n)


def turbo_spin():
    n = 160
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    cx = cy = S / 2
    for k in range(4):
        a = math.radians(45 + 90 * k)
        pts = []
        for i in range(40):
            t = i / 39
            ang = a + (t - 0.5) * 0.9 * (1 - t * 0.3)
            r = S * (0.08 + 0.36 * math.sin(t * math.pi * 0.5 + 0.3))
            pts.append((cx + math.cos(ang) * r, cy + math.sin(ang) * r))
        pts = [(cx, cy)] + pts
        d.polygon(pts, fill=(220, 150, 10, 255))
        inner = [(cx + (x - cx) * 0.9, cy + (y - cy) * 0.9) for x, y in pts]
        d.polygon(inner, fill=(255, 215, 50, 255))
    d.ellipse([cx - S * 0.09, cy - S * 0.09, cx + S * 0.09, cy + S * 0.09], fill=(240, 160, 20, 255))
    d.ellipse([cx - S * 0.05, cy - S * 0.05, cx + S * 0.05, cy + S * 0.05], fill=(255, 235, 150, 255))
    save(img, "turbo_spin.png", n, n)


# ---------------------------------------------------------------- Screens 1, 2, 5-12 additions

FONT = os.path.join(ROOT, "Assets", "BubbleWash", "UI", "Fonts", "Fredoka-Bold.ttf")


def pill_button(name, top, bottom, rim, size=(256, 96)):
    w, h = size
    img = canvas(w, h); W, H = w * SS, h * SS
    paste_grad(img, rounded_mask(W, H, H // 2), rim, tuple(max(0, c - 30) if i < 3 else c for i, c in enumerate(rim)))
    paste_grad(img, rounded_mask(W, H, H // 2, 5 * SS), (235, 255, 220, 255), (200, 245, 190, 255))
    paste_grad(img, rounded_mask(W, H, H // 2, 9 * SS), top, bottom)
    gloss(img, (14 * SS, 12 * SS, W - 14 * SS, H - 12 * SS, H // 2 - 12 * SS), 120)
    save(img, name, w, h)


def plain_panel(name, size, radius, rim, fill_top, fill_bottom, inner_rim=None, rim_w=5):
    w, h = size
    img = canvas(w, h); W, H = w * SS, h * SS; r = radius * SS
    paste_grad(img, rounded_mask(W, H, r), rim, rim)
    if inner_rim:
        paste_grad(img, rounded_mask(W, H, r, rim_w * SS), inner_rim, inner_rim)
        paste_grad(img, rounded_mask(W, H, r, (rim_w + 4) * SS), fill_top, fill_bottom)
    else:
        paste_grad(img, rounded_mask(W, H, r, rim_w * SS), fill_top, fill_bottom)
    save(img, name, w, h)


def star(name, fill_top, fill_bottom, rim, n=128):
    img = canvas(n, n); S = n * SS
    def pts(scale):
        out = []
        for k in range(10):
            a = -math.pi / 2 + k * math.pi / 5
            r = (0.48 if k % 2 == 0 else 0.22) * S * scale
            out.append((S / 2 + math.cos(a) * r, S * 0.53 + math.sin(a) * r))
        return out
    m = Image.new("L", (S, S), 0); ImageDraw.Draw(m).polygon(pts(1.0), fill=255)
    m = m.filter(ImageFilter.GaussianBlur(SS * 1.5)).point(lambda v: 255 if v > 100 else 0)
    paste_grad(img, m, rim, rim)
    m2 = Image.new("L", (S, S), 0); ImageDraw.Draw(m2).polygon(pts(0.86), fill=255)
    m2 = m2.filter(ImageFilter.GaussianBlur(SS * 1.5)).point(lambda v: 255 if v > 100 else 0)
    paste_grad(img, m2, fill_top, fill_bottom)
    gl = Image.new("L", (S, S), 0); ImageDraw.Draw(gl).ellipse([S * 0.36, S * 0.22, S * 0.52, S * 0.4], fill=150)
    white = Image.new("RGBA", (S, S), (255, 255, 255, 0)); white.putalpha(gl.filter(ImageFilter.GaussianBlur(3 * SS)))
    img.alpha_composite(white)
    save(img, name, n, n)


def check_icon():
    n = 96
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    d.ellipse([0, 0, S - 1, S - 1], fill=(20, 120, 40, 255))
    m = Image.new("L", (S, S), 0); ImageDraw.Draw(m).ellipse([5 * SS, 5 * SS, S - 5 * SS, S - 5 * SS], fill=255)
    paste_grad(img, m, (120, 230, 90, 255), (40, 170, 60, 255))
    d.line([(S * 0.26, S * 0.52), (S * 0.43, S * 0.7), (S * 0.75, S * 0.32)], fill=(255, 255, 255, 255), width=int(S * 0.12), joint="curve")
    save(img, "check.png", n, n)


def lock_icon():
    w, h = 112, 128
    img = canvas(w, h); W, H = w * SS, h * SS
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([W * 0.2, H * 0.06, W * 0.8, H * 0.6], radius=W * 0.3, outline=(225, 235, 255, 255), width=int(W * 0.1))
    m = Image.new("L", (W, H), 0); ImageDraw.Draw(m).rounded_rectangle([W * 0.08, H * 0.4, W * 0.92, H * 0.97], radius=W * 0.14, fill=255)
    paste_grad(img, m, (255, 255, 255, 255), (200, 215, 245, 255))
    d.ellipse([W * 0.42, H * 0.58, W * 0.58, H * 0.72], fill=(40, 60, 130, 255))
    d.rounded_rectangle([W * 0.47, H * 0.66, W * 0.53, H * 0.84], radius=W * 0.03, fill=(40, 60, 130, 255))
    save(img, "lock.png", w, h)


def warning_icon():
    n = 112
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    tri = [(S * 0.5, S * 0.06), (S * 0.96, S * 0.9), (S * 0.04, S * 0.9)]
    d.polygon(tri, fill=(255, 255, 255, 255))
    inner = [(S * 0.5, S * 0.2), (S * 0.86, S * 0.84), (S * 0.14, S * 0.84)]
    d.polygon(inner, fill=(235, 40, 70, 255))
    d.rounded_rectangle([S * 0.45, S * 0.36, S * 0.55, S * 0.66], radius=S * 0.04, fill=(255, 255, 255, 255))
    d.ellipse([S * 0.45, S * 0.7, S * 0.55, S * 0.8], fill=(255, 255, 255, 255))
    save(img, "warning.png", n, n)


def play_triangle():
    n = 96
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    d.polygon([(S * 0.22, S * 0.12), (S * 0.9, S * 0.5), (S * 0.22, S * 0.88)], fill=(255, 255, 255, 255))
    save(img, "play_triangle.png", n, n)


def arrow_down_pink():
    w, h = 128, 150
    img = canvas(w, h); W, H = w * SS, h * SS
    pts = [(W * 0.32, H * 0.02), (W * 0.68, H * 0.02), (W * 0.68, H * 0.5), (W * 0.96, H * 0.5), (W * 0.5, H * 0.98), (W * 0.04, H * 0.5), (W * 0.32, H * 0.5)]
    d = ImageDraw.Draw(img); d.polygon(pts, fill=(200, 30, 120, 255))
    inner = [(W * 0.5 + (x - W * 0.5) * 0.86, H * 0.48 + (y - H * 0.48) * 0.88) for x, y in pts]
    m = Image.new("L", (W, H), 0); ImageDraw.Draw(m).polygon(inner, fill=255)
    paste_grad(img, m, (255, 150, 210, 255), (255, 60, 160, 255))
    save(img, "arrow_down_pink.png", w, h)


def nav_icons():
    n = 128
    # Levels: gold star badge
    img = canvas(n, n); S = n * SS
    d = ImageDraw.Draw(img)
    d.ellipse([S * 0.06, S * 0.06, S * 0.94, S * 0.94], fill=(30, 70, 170, 255))
    star_pts = []
    for k in range(10):
        a = -math.pi / 2 + k * math.pi / 5
        r = (0.38 if k % 2 == 0 else 0.17) * S
        star_pts.append((S / 2 + math.cos(a) * r, S * 0.52 + math.sin(a) * r))
    d.polygon(star_pts, fill=(255, 205, 40, 255))
    save(img, "nav_levels.png", n, n)
    # Characters: pink fluffy face
    img = canvas(n, n); d = ImageDraw.Draw(img)
    for i in range(36):
        a = 2 * math.pi * i / 36
        r = S * (0.4 + 0.04 * math.sin(i * 2.7))
        d.ellipse([S / 2 + math.cos(a) * r - S * 0.08, S * 0.52 + math.sin(a) * r - S * 0.08, S / 2 + math.cos(a) * r + S * 0.08, S * 0.52 + math.sin(a) * r + S * 0.08], fill=(255, 90, 180, 255))
    d.ellipse([S * 0.14, S * 0.16, S * 0.86, S * 0.88], fill=(255, 110, 190, 255))
    for x in (0.37, 0.63):
        d.ellipse([S * (x - 0.07), S * 0.42, S * (x + 0.07), S * 0.58], fill=(30, 15, 40, 255))
        d.ellipse([S * (x - 0.035), S * 0.44, S * (x - 0.005), S * 0.48], fill=(255, 255, 255, 255))
    d.arc([S * 0.42, S * 0.55, S * 0.58, S * 0.68], 20, 160, fill=(30, 15, 40, 255), width=3 * SS)
    save(img, "nav_characters.png", n, n)
    # Shop: gift box
    img = canvas(n, n); d = ImageDraw.Draw(img)
    d.rounded_rectangle([S * 0.14, S * 0.42, S * 0.86, S * 0.9], radius=S * 0.06, fill=(255, 120, 190, 255))
    d.rounded_rectangle([S * 0.08, S * 0.3, S * 0.92, S * 0.46], radius=S * 0.05, fill=(255, 160, 210, 255))
    d.rectangle([S * 0.45, S * 0.3, S * 0.55, S * 0.9], fill=(255, 215, 60, 255))
    d.ellipse([S * 0.28, S * 0.12, S * 0.5, S * 0.32], outline=(255, 215, 60, 255), width=4 * SS)
    d.ellipse([S * 0.5, S * 0.12, S * 0.72, S * 0.32], outline=(255, 215, 60, 255), width=4 * SS)
    save(img, "nav_shop.png", n, n)


def crown():
    w, h = 220, 150
    img = canvas(w, h); W, H = w * SS, h * SS
    pts = [(W * 0.08, H * 0.92), (W * 0.04, H * 0.3), (W * 0.3, H * 0.55), (W * 0.5, H * 0.08), (W * 0.7, H * 0.55), (W * 0.96, H * 0.3), (W * 0.92, H * 0.92)]
    d = ImageDraw.Draw(img); d.polygon(pts, fill=(190, 110, 10, 255))
    inner = [(W * 0.5 + (x - W * 0.5) * 0.9, H * 0.55 + (y - H * 0.55) * 0.88) for x, y in pts]
    m = Image.new("L", (W, H), 0); ImageDraw.Draw(m).polygon(inner, fill=255)
    paste_grad(img, m, (255, 235, 110, 255), (245, 165, 25, 255))
    for (cx, cy, r, col) in [(0.5, 0.1, 0.07, (255, 240, 150)), (0.05, 0.3, 0.06, (255, 240, 150)), (0.95, 0.3, 0.06, (255, 240, 150)), (0.5, 0.7, 0.07, (255, 70, 150))]:
        d.ellipse([W * (cx - r), H * (cy - r * 1.4), W * (cx + r), H * (cy + r * 1.4)], fill=col + (255,))
    save(img, "crown.png", w, h)


def logo():
    """Bubble Wash Kingdom title in the approved Screen 1 colours (stand-in until the final logo art)."""
    from PIL import ImageFont
    w, h = 900, 640
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    # cloud plate behind the letters
    plate = Image.new("L", (w, h), 0); pd = ImageDraw.Draw(plate)
    pd.rounded_rectangle([60, 110, 840, 560], radius=120, fill=255)
    for cx, cy, r in [(170, 555, 52), (300, 570, 55), (450, 575, 55), (600, 570, 55), (730, 555, 52), (95, 450, 50), (805, 450, 50)]:
        pd.ellipse([cx - r, cy - r, cx + r, cy + r], fill=255)
    rim = Image.new("RGBA", (w, h), (24, 70, 190, 255)); img.alpha_composite(Image.composite(rim, Image.new("RGBA", (w, h)), plate.filter(ImageFilter.MaxFilter(15))))
    white = Image.new("RGBA", (w, h), (235, 248, 255, 255)); img.alpha_composite(Image.composite(white, Image.new("RGBA", (w, h)), plate))
    inner = plate.filter(ImageFilter.MinFilter(17))
    sky = vgrad(w, h, (120, 200, 255, 255), (70, 150, 245, 255)); img.alpha_composite(Image.composite(sky, Image.new("RGBA", (w, h)), inner))

    def word(text, size, y, top, bottom):
        font = ImageFont.truetype(FONT, size)
        bbox = font.getbbox(text)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
        x = (w - tw) // 2 - bbox[0]
        m = Image.new("L", (w, h), 0); ImageDraw.Draw(m).text((x, y), text, font=font, fill=255)
        outer = m.filter(ImageFilter.MaxFilter(25)); mid = m.filter(ImageFilter.MaxFilter(13))
        shadow = Image.new("RGBA", (w, h), (10, 30, 110, 200))
        img.alpha_composite(Image.composite(shadow, Image.new("RGBA", (w, h)), outer.transform((w, h), Image.AFFINE, (1, 0, 0, 0, 1, -8))))
        img.alpha_composite(Image.composite(Image.new("RGBA", (w, h), (20, 50, 150, 255)), Image.new("RGBA", (w, h)), outer))
        img.alpha_composite(Image.composite(Image.new("RGBA", (w, h), (255, 255, 255, 255)), Image.new("RGBA", (w, h)), mid))
        g = vgrad(w, h, (0, 0, 0, 0), (0, 0, 0, 0)); gd = g.load()
        y0, y1 = y + bbox[1], y + bbox[3]
        for yy in range(max(0, y0), min(h, y1 + 1)):
            t = (yy - y0) / max(1, y1 - y0)
            c = tuple(int(top[i] + (bottom[i] - top[i]) * t) for i in range(3)) + (255,)
            for xx in range(w):
                gd[xx, yy] = c
        img.alpha_composite(Image.composite(g, Image.new("RGBA", (w, h)), m))
        hl = m.filter(ImageFilter.MinFilter(9)).transform((w, h), Image.AFFINE, (1, 0, 0, 0, 1, 10))
        hl = Image.composite(Image.new("L", (w, h), 90), Image.new("L", (w, h), 0), hl)
        top_only = Image.new("L", (w, h), 0); ImageDraw.Draw(top_only).rectangle([0, y0, w, y0 + (y1 - y0) * 0.45], fill=255)
        hl = Image.composite(hl, Image.new("L", (w, h), 0), top_only)
        wl = Image.new("RGBA", (w, h), (255, 255, 255, 0)); wl.putalpha(hl); img.alpha_composite(wl)

    word("Bubble", 190, 95, (190, 245, 255), (40, 175, 245))
    word("Wash", 160, 255, (255, 175, 225), (245, 70, 170))
    word("Kingdom", 175, 390, (255, 240, 120), (255, 160, 20))
    os.makedirs(OUT, exist_ok=True)
    img.save(os.path.join(OUT, "logo.png"))


def extras():
    pill_button("button_green.png", (150, 240, 90, 255), (40, 175, 50, 255), (25, 120, 45, 255))
    plain_panel("card_cream.png", (192, 192), 56, (215, 190, 140, 255), (255, 250, 232, 255), (250, 238, 205, 255), rim_w=4)
    plain_panel("panel_row.png", (160, 120), 36, (150, 185, 255, 200), (70, 100, 205, 225), (50, 80, 185, 225), rim_w=4)
    plain_panel("panel_white.png", (160, 160), 44, (90, 160, 255, 255), (250, 252, 255, 255), (225, 238, 255, 255), inner_rim=(255, 255, 255, 255), rim_w=5)
    plain_panel("panel_red.png", (192, 192), 60, (150, 20, 60, 255), (255, 110, 140, 255), (225, 40, 90, 255), inner_rim=(255, 220, 230, 255), rim_w=5)
    plain_panel("nav_bar.png", (160, 120), 30, (110, 160, 255, 255), (45, 85, 200, 240), (30, 60, 165, 240), rim_w=3)
    star("star_full.png", (255, 240, 120, 255), (250, 175, 20, 255), (190, 110, 10, 255))
    star("star_empty.png", (150, 160, 190, 255), (105, 115, 150, 255), (70, 80, 120, 255))
    check_icon(); lock_icon(); warning_icon(); play_triangle(); arrow_down_pink(); nav_icons(); crown(); logo()


if __name__ == "__main__":
    panel_blue()
    panel_blue("button_square.png", 160, 44, light=True)
    pill_dark()
    round_button()
    progress_track()
    badge()
    heart()
    coin()
    coin("coin_paw_face.png", 512, TEX)
    gem()
    gear()
    pause()
    plus()
    arrow("arrow_left.png", False)
    arrow("arrow_right.png", True)
    hand()
    sock()
    bubble_blast()
    turbo_spin()
    extras()
    print("UI sprites written to", OUT)
