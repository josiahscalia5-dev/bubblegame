globalThis.window = { __BW_S3__: (process.env.S3 || 'intunnel,water9').split(','), __BW_S3_TUNE__: null };
globalThis.location = { search: '?s3=' + (process.env.S3 || 'intunnel,water9') };
const el = () => ({ style: {}, addEventListener() {}, removeEventListener() {}, setAttribute() {}, getContext() { return null; } }); globalThis.document = { createElementNS: el, createElement: el };
const base = 'file:///home/user/bubblegame/WebDemo/src/';
await import(base + 'tunnel_s4_bt.js');
const liq = await import(base + 'tunnel_r8_liquid.js');
const hw = await import(base + 'tunnel_r7_hero_water.js');
const S = hw.HERO_WATER.swell;
console.log(JSON.stringify({ ax: S.ax, au: S.au, out: S.out, inner: S.inner, foot: S.foot, dip: S.dip, phiMax: S.phiMax, cols: S.cols, rows: S.rows, swerve: S.swerve, air: S.air, land: S.land, mounds: S.mounds, line: S.line, clear: liq.LIQUID.swell.clear }));
