"""Screen 4: read a Spector.js capture (tools/screen4/spector_capture.cjs) and say which draw call does what to the frame.

    "$BW_PY" WebDemo/tools/screen4/spector_report.py <capture dir> [census.json from layer_diag.cjs]

Writes into the capture dir:
  drawcalls.tsv   one line per draw call: order, Spector id, the framebuffer (id, size), the program, blending, depth write,
                  vertices / instances, the bound textures (size, filters, anisotropy), the object it most likely is (by its
                  uniform names, matched against layer_diag's census), and what it did to the picture: the share of the
                  frame it changed, and in the tunnel's zone (x 0.12-0.88, y 0.25-0.66 of the frame) its change of
                  saturation and lightness (from Spector's own after-draw thumbnails of the framebuffer);
  steps/NNN_<id>.png  the thumbnail after each draw into the scene's main target, so the frame can be watched building up.
Diagnostic only.
"""
import sys, os, json, base64, io, re
import numpy as np
from PIL import Image

D = sys.argv[1]
CENSUS = sys.argv[2] if len(sys.argv) > 2 else None
cap = json.load(open(os.path.join(D, 'capture.json')))
BUILTIN = set('modelMatrix modelViewMatrix projectionMatrix viewMatrix normalMatrix cameraPosition isOrthographic'.split())


def tag_id(o):
    try: return o['__SPECTOR_Object_TAG']['id']
    except Exception: return None


census_sigs = []
if CENSUS:
    cen = json.load(open(CENSUS))
    for o in cen['objects']:
        for m in o['mats']:
            census_sigs.append((set(m.get('uniforms') or []), o['path'], o['type'], o['verts'], o['renderOrder'], m['blending'], m['transparent']))


def guess(names):
    names = set(names) - BUILTIN
    best, bs = '', 0
    for s, p, t, v, ro, bl, tr in census_sigs:
        if not s: continue
        k = len(names & s) / max(1, len(names | s))
        if k > bs: bs, best = k, f'{p} ({t}, {v} verts, order {ro}, blend {bl}{", transparent" if tr else ""})'
    return best if bs > 0.5 else ''


def img(src):
    return np.asarray(Image.open(io.BytesIO(base64.b64decode(src.split(',', 1)[1]))).convert('RGB')).astype(np.float32) / 255.0


def satl(a):
    mx, mn = a.max(2), a.min(2)
    return (mx - mn) / np.maximum(mx, 1e-4), (mx + mn) / 2


os.makedirs(os.path.join(D, 'steps'), exist_ok=True)
rows, prev = [], {}
draws = [c for c in cap['commands'] if c['name'].startswith('draw')]
for k, c in enumerate(draws):
    dc = c.get('DrawCall', {})
    fb = dc.get('frameBuffer') or {}
    fbid = tag_id(fb.get('frameBuffer')) if fb else None
    att = (fb.get('colorAttachments') or [{}])[0] if fb else {}
    w, h = int(att.get('width', cap['canvas']['width'])), int(att.get('height', cap['canvas']['height']))
    prog = tag_id((dc.get('programStatus') or {}).get('program'))
    unames = [u['name'] for u in dc.get('uniforms', [])]
    texs = []
    for u in dc.get('uniforms', []):
        t = u.get('texture')
        if t: texs.append(f"{u['name']}={t.get('width')}x{t.get('height')}/{t.get('minFilter', '')[:6]}/{t.get('magFilter', '')[:6]}/a{t.get('anisotropy')}")
    bs = c.get('BlendState', {})
    blend = 'off' if not bs.get('BLEND') else f"{bs.get('BLEND_SRC_RGB')}/{bs.get('BLEND_DST_RGB')}"
    ds = c.get('DepthState', {})
    args = c.get('commandArguments', [])
    inst = args[4] if c['name'] == 'drawElementsInstanced' and len(args) > 4 else (args[3] if c['name'] == 'drawArraysInstanced' and len(args) > 3 else 1)
    count = args[1] if c['name'].startswith('drawElements') else (args[2] if len(args) > 2 else '')
    changed = dsat = dl = ''
    vs = (c.get('VisualState') or {}).get('Attachments') or []
    if vs and vs[0].get('src'):
        a = img(vs[0]['src'])
        key = (fbid, a.shape)
        if key in prev:
            b = prev[key]
            diff = np.abs(a - b).max(2) > 0.02
            changed = f'{diff.mean() * 100:.1f}'
            H, W = a.shape[:2]
            z = (slice(int(0.25 * H), int(0.66 * H)), slice(int(0.12 * W), int(0.88 * W)))
            sa, la = satl(a[z]); sb, lb = satl(b[z])
            dsat = f'{(sa.mean() - sb.mean()) * 100:+.2f}'; dl = f'{(la.mean() - lb.mean()) * 100:+.2f}'
        prev[key] = a
        if w == cap['canvas']['width'] and h == cap['canvas']['height']:
            Image.fromarray((a * 255).astype(np.uint8)).save(os.path.join(D, 'steps', f'{k:03d}_{c["id"]}.png'))
    rows.append([k, c['id'], f'{fbid}:{w}x{h}', prog, blend, 'w' if ds.get('DEPTH_WRITEMASK') else '-', count, inst, changed, dsat, dl,
                 ' '.join(texs), guess(unames), ','.join(sorted(set(unames) - BUILTIN))[:200]])

with open(os.path.join(D, 'drawcalls.tsv'), 'w') as f:
    f.write('\t'.join(['order', 'id', 'framebuffer', 'program', 'blend', 'depthW', 'count', 'instances', 'changed%', 'tunnel dSat', 'tunnel dL',
                       'textures', 'object (census)', 'uniforms']) + '\n')
    for r in rows: f.write('\t'.join(map(str, r)) + '\n')
print(len(rows), 'draw calls;', len({r[2] for r in rows}), 'framebuffers')
