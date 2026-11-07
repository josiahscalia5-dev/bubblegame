"""Decode a live-page grab (evaluate_script output: JSON of {name: dataURL}) into PNGs: grab_decode.py in.json out_dir"""
import sys, json, base64, os, re
src, out = sys.argv[1], sys.argv[2]
txt = open(src).read()
m = re.search(r'\{.*\}', txt, re.S)
d = json.loads(m.group(0))
os.makedirs(out, exist_ok=True)
for k, v in d.items():
    if isinstance(v, str) and v.startswith('data:image'):
        p = os.path.join(out, k + '.png'); open(p, 'wb').write(base64.b64decode(v.split(',', 1)[1])); print(p)
