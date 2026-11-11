# Asset importer (session ddf175f2): download ONE free downloadable Sketchfab model by uid through the API (the user's free token is a network
# secret for api.sketchfab.com, injected by the proxy; never in the repository), record its licence and author (CC Attribution needs credit),
# convert to a single GLB and make a mobile copy (gltfpack: textures capped, meshopt). Nothing is bought: models with a price are refused.
#   python3 Tools/assetfinder/import_sketchfab.py <uid> <out dir> [max faces for the mobile copy, default 20000]
import sys, os, json, zipfile, io, urllib.request, subprocess, shutil, glob
uid, out = sys.argv[1], sys.argv[2]; maxf = int(sys.argv[3]) if len(sys.argv) > 3 else 20000
os.makedirs(out, exist_ok=True)
UA = {"User-Agent": "bw-asset-finder/0.1"}
get = lambda u: json.loads(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60).read())
m = get(f"https://api.sketchfab.com/v3/models/{uid}")
if not m.get("isDownloadable"): sys.exit("not a free download: refused")
if m.get("price"): sys.exit("priced model: refused (no purchase without the user's approval)")
credit = {"source": "sketchfab", "uid": uid, "name": m.get("name"), "author": (m.get("user") or {}).get("username"), "author_url": (m.get("user") or {}).get("profileUrl"),
          "licence": (m.get("license") or {}).get("label"), "licence_url": (m.get("license") or {}).get("url"), "url": m.get("viewerUrl"), "faces": m.get("faceCount")}
json.dump(credit, open(os.path.join(out, "CREDIT.json"), "w"), indent=1)
d = get(f"https://api.sketchfab.com/v3/models/{uid}/download")
fmt = "glb" if "glb" in d else "gltf"
raw = urllib.request.urlopen(urllib.request.Request(d[fmt]["url"], headers=UA), timeout=300).read()   # a signed CDN link (no token sent there)
src = os.path.join(out, "original.glb")
if fmt == "glb": open(src, "wb").write(raw)
else:
    z = zipfile.ZipFile(io.BytesIO(raw)); zd = os.path.join(out, "gltf"); shutil.rmtree(zd, ignore_errors=True); z.extractall(zd)
    g = (glob.glob(zd + "/**/*.gltf", recursive=True) or glob.glob(zd + "/**/*.glb", recursive=True))[0]
    subprocess.run(["gltf-transform", "copy", g, src], check=True, capture_output=True)
mob = os.path.join(out, "mobile.glb"); faces = credit["faces"] or maxf; r = min(1.0, maxf / max(1, faces))
subprocess.run(["gltf-transform", "resize", src, os.path.join(out, "_r.glb"), "--width", "1024", "--height", "1024"], check=True, capture_output=True)
subprocess.run(["gltfpack", "-i", os.path.join(out, "_r.glb"), "-o", mob, "-si", str(r), "-cc"], check=True, capture_output=True)
os.remove(os.path.join(out, "_r.glb"))
credit.update({"format_downloaded": fmt, "original_bytes": os.path.getsize(src), "mobile_bytes": os.path.getsize(mob), "simplify_ratio": r})
json.dump(credit, open(os.path.join(out, "CREDIT.json"), "w"), indent=1)
print(json.dumps(credit, indent=1))
