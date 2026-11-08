import { spawn } from 'node:child_process';
const p = spawn('node', [process.argv[2]], { stdio: ['pipe', 'pipe', 'pipe'] });
let buf = ''; const out = [];
p.stdout.on('data', d => { buf += d; let i; while ((i = buf.indexOf('\n')) >= 0) { const l = buf.slice(0, i); buf = buf.slice(i + 1); if (l.trim()) out.push(JSON.parse(l)); } });
p.stderr.on('data', d => process.stderr.write('[stderr] ' + d));
const send = m => p.stdin.write(JSON.stringify(m) + '\n');
send({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'bw-test', version: '1' } } });
setTimeout(() => { send({ jsonrpc: '2.0', method: 'notifications/initialized' }); send({ jsonrpc: '2.0', id: 2, method: 'tools/list' }); }, 800);
setTimeout(() => {
  const init = out.find(m => m.id === 1), list = out.find(m => m.id === 2);
  console.log('server:', JSON.stringify(init?.result?.serverInfo));
  const tools = list?.result?.tools || []; console.log('tools:', tools.length); console.log(tools.map(t => t.name).join(', '));
  p.kill(); process.exit(0);
}, 3000);
