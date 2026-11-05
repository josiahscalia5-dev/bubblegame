// node dump.mjs <src dir> <switch or ''> : prints JSON of MATCH and MATCH_WATER as the game would have them
const [dir, sw] = process.argv.slice(2);
globalThis.window = { __BW_S3__: sw ? sw.split(',') : [] };
globalThis.location = { search: '' };
const m = await import(dir + '/tunnel_r9_match.js');
const w = await import(dir + '/tunnel_r9_match_water.js');
const rep = (k, v) => (typeof v === 'function' ? '<fn>' : (typeof v === 'number' && !isFinite(v)) ? String(v) : v);
console.log(JSON.stringify({ MATCH: m.MATCH, MATCH_WATER: w.MATCH_WATER }, rep));
