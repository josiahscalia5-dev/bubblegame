# hero7 measuring tools (session ddf175f2). Used with WebDemo/tools/env6/var6.cjs (one page load, the game frozen at u 206, JS variants re-rendered).
- `hdiff.js`: a var6 variant body: renders the real frame with and without the drawn hero, returns both canvases. Then
  `python3 hdmeasure.py <out>/var6.json` = the hero's VISIBLE silhouette (left, right, top, water line) + `<tag>.png` and `<tag>_vis.png`.
- `hcol.py <frame.png>` (needs `<frame>_vis.png` next to it) = colour bands (top / upper / lower / base) vs the approved hero.
- `perf.js` = the hero's draw calls and triangles (renderer.info with / without him). `motion.json` = VARS for a swim / lane / jump / spin sequence.
- `hmask.js`, `hmeasure.py` = an older full-ball mask (water hidden).
Example: `python3 -c "import json; json.dump([['a', open('tools/hero7/hdiff.js').read()]], open('/tmp/v.json','w'))"` then
`S3=<list>,hero7 VARS=@/tmp/v.json flock /tmp/bw_browser.lock node tools/env6/var6.cjs $PWD <out>` and `python3 tools/hero7/hdmeasure.py <out>/var6.json`.
