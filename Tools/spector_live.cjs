// Spector live test (session f28099bc): drives the project Spector MCP server (~/.bubblewash-tools/spector, the one .mcp.json registers) over stdio
// against the REAL game, with no Claude MCP connection needed. Usage (one browser at a time):
//   flock /tmp/bw_browser.lock node Tools/spector_live.cjs <ABSOLUTE WebDemo dir> <screenshot.png> [?s3=...]
// Prints load_url, list_canvases, get_context_info, capture_frame (draw calls, programs, GL errors), get_draw_calls, get_console_logs.
// Drive the project's Spector MCP server over stdio (the same server .mcp.json registers) against the REAL game, served locally.
const { spawn } = require('child_process'); const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2], OUT = process.argv[3], Q = process.argv[4] || '';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
server.listen(0, async () => {
  const port = server.address().port, mcp = spawn('node', [process.env.HOME + '/.bubblewash-tools/spector/mcp/dist/index.js'], { stdio: ['pipe', 'pipe', 'inherit'] });
  let buf = '', id = 0; const wait = {};
  mcp.stdout.on('data', (d) => { buf += d; let i; while ((i = buf.indexOf('\n')) >= 0) { const l = buf.slice(0, i); buf = buf.slice(i + 1); try { const j = JSON.parse(l); if (wait[j.id]) { wait[j.id](j); delete wait[j.id]; } } catch {} } });
  const call = (method, params) => new Promise((r) => { const k = ++id; wait[k] = r; mcp.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: k, method, params }) + '\n'); });
  const tool = async (name, args) => { const t0 = Date.now(); const r = await call('tools/call', { name, arguments: args || {} }); const txt = (r.result?.content || []).filter((c) => c.type === 'text').map((c) => c.text).join('\n');
    console.log(`\n### ${name} (${((Date.now() - t0) / 1000).toFixed(1)} s)${r.error ? ' ERROR ' + JSON.stringify(r.error) : ''}\n` + txt.slice(0, 1800)); return r; };
  await call('initialize', { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'bw-spector-live', version: '1' } });
  mcp.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
  await tool('load_url', { url: `http://localhost:${port}/index.html${Q}` });
  await new Promise((r) => setTimeout(r, 45000));
  await tool('list_canvases'); await tool('get_context_info'); await tool('capture_frame'); await tool('get_draw_calls'); await tool('get_console_logs');
  const shot = await call('tools/call', { name: 'take_screenshot', arguments: {} });
  const img = (shot.result?.content || []).find((c) => c.type === 'image'); if (img) { fs.writeFileSync(OUT, Buffer.from(img.data, 'base64')); console.log('\nscreenshot saved', OUT); }
  mcp.kill(); server.close(); process.exit(0);
});
