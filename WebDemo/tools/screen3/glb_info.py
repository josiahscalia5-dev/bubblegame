"""Summarise GLB files from their JSON chunk: meshes, primitives, triangles, bounding boxes, materials, textures."""
import json, struct, sys
for path in sys.argv[1:]:
    data = open(path, 'rb').read()
    magic, ver, length = struct.unpack('<III', data[:12])
    clen, ctype = struct.unpack('<II', data[12:20])
    j = json.loads(data[20:20 + clen])
    print('=' * 100); print(path.split('/')[-1], '%.2f MB' % (len(data) / 1e6), 'generator:', j.get('asset', {}).get('generator'))
    acc = j.get('accessors', [])
    tris = 0; lo = [1e9] * 3; hi = [-1e9] * 3
    for mi, m in enumerate(j.get('meshes', [])):
        for p in m['primitives']:
            pa = acc[p['attributes']['POSITION']]
            n = acc[p['indices']]['count'] // 3 if 'indices' in p else pa['count'] // 3
            tris += n
            lo = [min(a, b) for a, b in zip(lo, pa['min'])]; hi = [max(a, b) for a, b in zip(hi, pa['max'])]
            print('  mesh %d %-30s tris %7d verts %7d material %s attrs %s min %s max %s' % (mi, (m.get('name') or '')[:30], n, pa['count'], p.get('material'), sorted(p['attributes'].keys()), [round(v, 3) for v in pa['min']], [round(v, 3) for v in pa['max']]))
    print('  total triangles', tris, ' overall bbox min', [round(v, 3) for v in lo], 'max', [round(v, 3) for v in hi], 'size', [round(b - a, 3) for a, b in zip(lo, hi)])
    for ni, n in enumerate(j.get('nodes', [])):
        print('  node %d %s mesh=%s children=%s T=%s R=%s S=%s M=%s' % (ni, n.get('name'), n.get('mesh'), n.get('children'), n.get('translation'), n.get('rotation'), n.get('scale'), 'yes' if 'matrix' in n else ''))
    for mi, m in enumerate(j.get('materials', [])):
        print('  material %d %s' % (mi, json.dumps(m)[:260]))
    for ii, im in enumerate(j.get('images', [])):
        bv = j['bufferViews'][im['bufferView']] if 'bufferView' in im else None
        print('  image %d %s %s bytes %s' % (ii, im.get('mimeType'), im.get('name'), bv['byteLength'] if bv else im.get('uri')))
    print('  extensions used:', j.get('extensionsUsed'))
