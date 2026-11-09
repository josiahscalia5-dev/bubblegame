#!/usr/bin/env python3
# s56 (lane s56): the game's colour pipeline after a ShaderMaterial (game.js: grade pass sat 1.32 / contrast 1.12, then OutputPass:
# Neutral tone mapping at exposure 1.05, then sRGB), forward and inverted, so the water's shader colours land on the measured display targets.
#   ~/.bubblewash-tools/metrics/bin/python pipe56.py            -> the shader-linear colours for the targets (deep, mid, turquoise, crest) and the forward check
import numpy as np
from scipy.optimize import minimize

SAT, CON, EXP = 1.32, 1.12, 1.05
LUM = np.array([0.2126, 0.7152, 0.0722])

def neutral(c):
    c = np.array(c, float) * EXP
    x = c.min(); off = x - 6.25 * x * x if x < 0.08 else 0.04
    c = c - off; peak = c.max(); sc = 0.8 - 0.04
    if peak < sc: return c
    d = 1 - sc; npk = 1 - d * d / (peak + d - sc); c = c * (npk / peak)
    g = 1 - 1 / (0.15 * (peak - npk) + 1)
    return c * (1 - g) + npk * g

def srgb(c):
    c = np.clip(c, 0, 1); return np.where(c <= 0.0031308, c * 12.92, 1.055 * np.power(c, 1 / 2.4) - 0.055)

def lin(s):
    s = np.array(s, float); return np.where(s <= 0.04045, s / 12.92, np.power((s + 0.055) / 1.055, 2.4))

def forward(c):
    c = np.array(c, float); l = c @ LUM; c = l + SAT * (c - l); c = (c - 0.18) * CON + 0.18; c = np.maximum(c, 0)
    return srgb(neutral(c)) * 255

def hexc(h): return np.array([int(h[i:i + 2], 16) for i in (1, 3, 5)], float)

def inverse(h):
    t = hexc(h)
    best = None
    for x0 in ([0.02, 0.2, 0.6], [0.1, 0.4, 0.8], [0.6, 0.7, 0.8]):
        r = minimize(lambda c: ((forward(np.maximum(c, 0)) - t) ** 2).sum() + 50 * (np.minimum(c, 0) ** 2).sum(), x0, method='Nelder-Mead', options={'xatol': 1e-5, 'fatol': 1e-4, 'maxiter': 4000})
        if best is None or r.fun < best.fun: best = r
    return np.maximum(best.x, 0), best.fun

if __name__ == '__main__':
    for name, h in [('deep', '#004dd5'), ('mid', '#068cf9'), ('turq', '#48c2fd'), ('crest', '#e9f5ff'), ('ref side median', '#158af8')]:
        c, e = inverse(h)
        print(f'{name:16s} {h} -> shader linear ({c[0]:.3f}, {c[1]:.3f}, {c[2]:.3f})  err {e:.2f}  check {forward(c).round().astype(int).tolist()}')
    for c in [(0.0, 0.02, 0.3), (0.0, 0.15, 0.66), (0.015, 0.4, 0.74), (0.86, 0.93, 1.02)]:
        print('current', c, '->', '#%02x%02x%02x' % tuple(int(round(v)) for v in forward(c)))
