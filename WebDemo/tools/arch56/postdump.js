// arch56: EVAL code for shots56.cjs: the post passes (enabled), every float/vec uniform of the grade-like passes, the exposure and the lights
const out = { exposure: d.renderer.toneMappingExposure, tone: d.renderer.toneMapping, passes: [], lights: [] };
for (const p of d.composer.passes) { const u = {}; if (p.uniforms) for (const k in p.uniforms) { const v = p.uniforms[k].value; if (typeof v === 'number') u[k] = +v.toFixed(3); else if (v && v.isColor) u[k] = v.getHexString(); else if (v && v.isVector3) u[k] = v.toArray().map((x) => +x.toFixed(3)); }
  out.passes.push({ n: p.constructor.name, on: p.enabled, strength: p.strength, u }); }
d.scene.traverse((o) => { if (o.isLight) { let vis = true, q = o; while (q) { if (!q.visible) vis = false; q = q.parent; } out.lights.push({ t: o.type, n: o.name, vis, i: +o.intensity.toFixed(3), c: o.color.getHexString(), g: o.groundColor ? o.groundColor.getHexString() : null }); } });
out.env = d.scene.environment ? 'set' : null; out.bg = d.scene.background ? (d.scene.background.isColor ? d.scene.background.getHexString() : 'tex') : null;
return out;
