// Drives the Spector MCP server over stdio like Claude Code would: initialize, then load_url on the game and capture_frame.
import { spawn } from 'node:child_process';
const p = spawn('node', [process.argv[2]], { stdio: ['pipe', 'pipe', 'pipe'] });
let buf = ''; const waiters = new Map(); let id = 0;
p.stdout.on('data', d => { buf += d; let i; while ((i = buf.indexOf('\n')) >= 0) { const l = buf.slice(0, i); buf = buf.slice(i + 1); if (!l.trim()) continue; const m = JSON.parse(l); if (waiters.has(m.id)) { waiters.get(m.id)(m); waiters.delete(m.id); } } });
p.stderr.on('data', d => process.stderr.write('[stderr] ' + String(d).slice(0, 300)));
const call = (method, params, ms = 240000) => new Promise((res) => { const i = ++id; waiters.set(i, res); p.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: i, method, params }) + '\n'); setTimeout(() => res({ timeout: method }), ms); });
const short = r => JSON.stringify(r).slice(0, 700);
await call('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'bw-test', version: '1' } });
p.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
console.log('load_url:', short(await call('tools/call', { name: 'load_url', arguments: { url: process.argv[3] } })));
console.log('list_canvases:', short(await call('tools/call', { name: 'list_canvases', arguments: {} })));
console.log('capture_frame:', short(await call('tools/call', { name: 'capture_frame', arguments: {} })));
console.log('get_context_info:', short(await call('tools/call', { name: 'get_context_info', arguments: {} })));
p.kill(); process.exit(0);
