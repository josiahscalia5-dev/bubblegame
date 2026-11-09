#!/usr/bin/env python3
"""Rebuild full-sized Yo JJ GLB from the two split model pieces."""
from pathlib import Path
import hashlib, struct
root=Path(__file__).resolve().parent
names=['BubbleWash_Tripo_yo_jj_optimized.glb.part01','BubbleWash_Tripo_yo_jj_optimized.glb.part02']
target=root/'BubbleWash_Tripo_yo_jj_optimized.glb'
expected='61869bb5b5556a54f5cf40a6f32edccd333b967d769dfb8d7b00475675946a7e'
with target.open('wb') as outfile:
    for n in names:
        part=root/n
        if not part.is_file(): raise SystemExit('MISSING PART: '+str(part))
        with part.open('rb') as stream:
            while True:
                block=stream.read(1024*1024)
                if not block: break
                outfile.write(block)
with target.open('rb') as file:
    data=file.read()
actual=hashlib.sha256(data).hexdigest()
if actual!=expected or data[:4]!=b'glTF' or struct.unpack_from('<I',data,8)[0]!=len(data):
    target.unlink(missing_ok=True)
    raise SystemExit('Reconstruction failed validation! SHA='+actual)
print('SUCCESS! Rebuilt',target.name,'bytes',len(data),'SHA256',actual)
