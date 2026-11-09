#!/usr/bin/env python3
# Lane s56 (session 3849f5c8): writes heroab.js's frames (shots56.cjs log.json, eval = {tag: data URL}) as <out>/hab_<tag>.png.
#   python3 heroab_save.py <log.json> <out dir>
import sys, json, base64, os
d = json.load(open(sys.argv[1])); os.makedirs(sys.argv[2], exist_ok=True)
for shot in d['shots']:
    for tag, url in (shot.get('eval') or {}).items():
        open(os.path.join(sys.argv[2], f"hab_{shot['z']}_{tag}.png"), 'wb').write(base64.b64decode(url.split(',', 1)[1])); print('hab', shot['z'], tag)
