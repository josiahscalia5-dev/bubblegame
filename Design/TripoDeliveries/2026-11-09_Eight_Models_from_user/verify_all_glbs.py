#!/usr/bin/env python3
"""Check every full GLB restored from the six ZIP packages."""
from pathlib import Path
import hashlib, json, struct
root=Path(__file__).resolve().parent
manifest=json.loads((root/'MODEL_SHA256_MANIFEST.json').read_text())
errors=[]
for filename,meta in manifest['assets'].items():
    p=root/filename
    if not p.is_file():
        print('MISSING',filename);errors.append(filename);continue
    b=p.read_bytes(); actual=hashlib.sha256(b).hexdigest()
    good=(len(b)==meta['bytes'] and actual==meta['sha256'] and
          b[:4]==b'glTF' and struct.unpack_from('<I',b,8)[0]==len(b))
    print(('PASS' if good else 'FAIL'),filename,'bytes',len(b))
    if not good: errors.append(filename)
if errors: raise SystemExit('Validation failed/missing: '+', '.join(errors))
print('ALL 8 GLBs PASS size, SHA-256 and GLB header validation')
