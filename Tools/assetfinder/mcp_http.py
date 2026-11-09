# Minimal MCP client for remote streamable-HTTP MCP servers (session ddf175f2, the asset-finder pipeline). JSON-RPC over POST, SSE or JSON replies.
#   python3 mcp_http.py <url> tools                      -> the server's tools (name, description, input schema)
#   python3 mcp_http.py <url> call <tool> '<json args>'  -> the tool's result (text content printed)
import sys, json, urllib.request
URL = sys.argv[1]
def rpc(method, params, sid=None, rid=1):
    body = json.dumps({"jsonrpc": "2.0", "id": rid, "method": method, "params": params}).encode()
    h = {"Content-Type": "application/json", "Accept": "application/json, text/event-stream", "User-Agent": "bw-asset-finder/0.1"}
    if sid: h["Mcp-Session-Id"] = sid
    r = urllib.request.urlopen(urllib.request.Request(URL, data=body, headers=h), timeout=60)
    sid = r.headers.get("Mcp-Session-Id") or sid; raw = r.read().decode("utf-8", "ignore")
    if raw.lstrip().startswith("{"): return json.loads(raw), sid
    data = [l[5:].strip() for l in raw.splitlines() if l.startswith("data:")]
    for d in data:
        j = json.loads(d)
        if j.get("id") == rid: return j, sid
    return {"raw": raw}, sid
init, sid = rpc("initialize", {"protocolVersion": "2025-06-18", "capabilities": {}, "clientInfo": {"name": "bw-asset-finder", "version": "0.1"}})
try:
    h = {"Content-Type": "application/json", "Accept": "application/json, text/event-stream"}
    if sid: h["Mcp-Session-Id"] = sid
    urllib.request.urlopen(urllib.request.Request(URL, data=json.dumps({"jsonrpc": "2.0", "method": "notifications/initialized"}).encode(), headers=h), timeout=30).read()
except Exception: pass
cmd = sys.argv[2]
if cmd == "tools":
    r, _ = rpc("tools/list", {}, sid, 2)
    for t in r.get("result", {}).get("tools", []): print(t["name"], "|", (t.get("description") or "")[:200].replace("\n", " "), "|", json.dumps(t.get("inputSchema", {}).get("properties", {}))[:300])
else:
    r, _ = rpc("tools/call", {"name": sys.argv[3], "arguments": json.loads(sys.argv[4] if len(sys.argv) > 4 else "{}")}, sid, 3)
    res = r.get("result", r)
    for c in res.get("content", []) if isinstance(res, dict) else []:
        print(c.get("text", c))
    if not (isinstance(res, dict) and res.get("content")): print(json.dumps(res)[:3000])
