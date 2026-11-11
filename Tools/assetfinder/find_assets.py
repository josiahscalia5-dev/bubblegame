# Automatic 3D asset finder (session ddf175f2): for each missing / wrong object of the approved Screen 6, query real downloadable libraries and
# write a candidates table + a thumbnail contact sheet. Searching needs no keys: Sketchfab's public search API (downloadable models only, with
# licence and price), Poly Haven's free CC0 catalogue, the CGAxis remote MCP server (read-only). Poly Pizza's API needs a free key
# (POLYPIZZA_KEY env or the proxy); without it, it is reported as skipped. Nothing is downloaded or bought here.
#   python3 Tools/assetfinder/find_assets.py <out dir> [object ...]
import sys, os, json, urllib.request, urllib.parse, io, subprocess
OUT = sys.argv[1]; os.makedirs(OUT, exist_ok=True)
UA = {"User-Agent": "bw-asset-finder/0.1"}
OBJECTS = {   # the approved Screen 6's objects (TARGETS.md) -> library queries
  "roller_brush": ["car wash brush", "car wash roller brush", "rotating brush machine", "cleaning brush cylinder"],
  "glow_tank": ["sci-fi glass tank glowing", "glowing liquid tank", "laboratory glass tube tank", "stylized potion tank"],
  "cobalt_gear": ["cartoon gear", "stylized cog wheel", "blue gear wheel"],
  "brass_lamp_pipe": ["steampunk lamp", "industrial ceiling lamp stylized", "stylized brass pipes"],
  "control_box": ["stylized control panel machine", "cartoon machine control box", "sci-fi control console stylized"],
  "star_drum_housing": ["stylized machine cylinder", "cartoon factory machine", "toy factory machine"],
}
want = sys.argv[2:] or list(OBJECTS)
def get(url, hdr=None):
    return json.loads(urllib.request.urlopen(urllib.request.Request(url, headers={**UA, **(hdr or {})}), timeout=40).read())
def sketchfab(q, n=6):
    u = "https://api.sketchfab.com/v3/search?" + urllib.parse.urlencode({"type": "models", "q": q, "downloadable": "true", "count": n, "sort_by": "-likeCount"})
    out = []
    for r in get(u).get("results", [])[:n]:
        th = sorted((r.get("thumbnails") or {}).get("images", []), key=lambda i: abs(i.get("width", 0) - 256))
        out.append({"src": "sketchfab", "id": r["uid"], "name": r["name"], "url": r.get("viewerUrl"), "licence": (r.get("license") or {}).get("label"),
                    "price": "free download (account token needed)" if r.get("isDownloadable") else "not downloadable",
                    "faces": r.get("faceCount"), "likes": r.get("likeCount"), "animated": r.get("animationCount", 0) > 0, "thumb": th[0]["url"] if th else None})
    return out
_ph = None
def polyhaven(q, n=4):
    global _ph
    if _ph is None: _ph = get("https://api.polyhaven.com/assets?t=models")
    words = [w for w in q.lower().split() if len(w) > 2]
    hits = [(sum(w in (k + " " + " ".join(v.get("tags", [])) + " " + " ".join(v.get("categories", []))).lower() for w in words), k, v) for k, v in _ph.items()]
    hits = [h for h in sorted(hits, key=lambda h: -h[0]) if h[0] > 0][:n]
    return [{"src": "polyhaven", "id": k, "name": v.get("name", k), "url": f"https://polyhaven.com/a/{k}", "licence": "CC0", "price": "free (no account)",
             "faces": None, "likes": v.get("download_count"), "thumb": f"https://cdn.polyhaven.com/asset_img/thumbs/{k}.png?width=256"} for s, k, v in hits]
def cgaxis(q, n=3):
    try:
        r = subprocess.run([sys.executable, os.path.join(os.path.dirname(__file__), "mcp_http.py"), "https://mcp.cgaxis.com/mcp", "call", "search_assets", json.dumps({"query": q, "limit": n})], capture_output=True, text=True, timeout=90)
        j = json.loads(r.stdout)
        return [{"src": "cgaxis", "id": a["id"], "name": a["name"], "url": a.get("page_url"), "licence": "CGAxis licence", "price": "plan / credits (via CGAxis Hub)", "faces": None, "likes": None, "thumb": a.get("preview_url"), "score": a.get("score")} for a in j.get("results", [])]
    except Exception as e: return [{"src": "cgaxis", "error": str(e)[:120]}]
def polypizza(q, n=4):
    key = os.environ.get("POLYPIZZA_KEY")
    if not key: return [{"src": "polypizza", "skipped": "no free API key (poly.pizza/settings/api)"}]
    j = get("https://api.poly.pizza/v1.1/search/" + urllib.parse.quote(q) + "?Limit=" + str(n), {"x-auth-token": key})
    return [{"src": "polypizza", "id": m.get("ID"), "name": m.get("Title"), "url": "https://poly.pizza/m/" + str(m.get("ID")), "licence": m.get("Licence"), "price": "free", "thumb": m.get("Thumbnail")} for m in j.get("results", [])[:n]]
res = {}
for obj in want:
    rows = []
    for q in OBJECTS[obj]:
        for fn in (sketchfab, polyhaven):
            try:
                for r in fn(q): r["query"] = q; rows.append(r)
            except Exception as e: rows.append({"src": fn.__name__, "query": q, "error": str(e)[:120]})
    rows += [dict(r, query=OBJECTS[obj][0]) for r in cgaxis(OBJECTS[obj][0])] + [dict(r, query=OBJECTS[obj][0]) for r in polypizza(OBJECTS[obj][0])]
    seen, uniq = set(), []
    for r in rows:
        k = (r.get("src"), r.get("id"));
        if r.get("id") is not None and k in seen: continue
        seen.add(k); uniq.append(r)
    res[obj] = uniq
json.dump(res, open(os.path.join(OUT, "candidates.json"), "w"), indent=1)
# contact sheet per object: thumbnails with source, licence and name
try:
    from PIL import Image, ImageDraw, ImageFont
    f = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 11)
    for obj, rows in res.items():
        rows = [r for r in rows if r.get("thumb")][:24]; cols = 6; W = 200; Hh = 236
        sheet = Image.new("RGB", (cols * W, max(1, (len(rows) + cols - 1) // cols) * Hh), (24, 22, 34)); d = ImageDraw.Draw(sheet)
        for i, r in enumerate(rows):
            x, y = (i % cols) * W, (i // cols) * Hh
            try: im = Image.open(io.BytesIO(urllib.request.urlopen(urllib.request.Request(r["thumb"], headers=UA), timeout=30).read())).convert("RGB"); im.thumbnail((W - 8, 180)); sheet.paste(im, (x + 4, y + 4))
            except Exception: d.text((x + 6, y + 80), "(no thumb)", fill=(200, 200, 200), font=f)
            d.text((x + 4, y + 186), f"{i}: {r['src']} | {str(r.get('licence'))[:18]}", fill=(255, 220, 120), font=f)
            d.text((x + 4, y + 200), str(r.get("name"))[:30], fill=(230, 230, 240), font=f)
            d.text((x + 4, y + 214), f"faces {r.get('faces')} likes {r.get('likes')}", fill=(170, 170, 190), font=f)
            r["sheet_index"] = i
        sheet.save(os.path.join(OUT, f"sheet_{obj}.png"))
    json.dump(res, open(os.path.join(OUT, "candidates.json"), "w"), indent=1)
except Exception as e: print("sheet failed", e)
for obj, rows in res.items():
    print("==", obj, len(rows), "candidates;", ", ".join(f"{r['src']}:{str(r.get('name'))[:28]}" for r in rows[:8]))
