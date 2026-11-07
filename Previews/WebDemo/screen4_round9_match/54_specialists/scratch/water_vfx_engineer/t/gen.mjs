globalThis.window = { __BW_S3__: ['intunnel', 'swim2'] }; globalThis.location = { search: '?s3=intunnel,swim2' };
const m = await import('./swim2_test.mjs');
console.log('SWIM2_ON', m.SWIM2_ON);
const fs = await import('node:fs');
fs.writeFileSync(new URL('./vert.glsl', import.meta.url), m.swim2VertexDecl() + '\n// ---- main insert\n' + m.swim2VertexGLSL());
fs.writeFileSync(new URL('./frag.glsl', import.meta.url), m.swim2SwellDecl() + '\n// ---- block\n' + m.swim2SwellGLSL());
