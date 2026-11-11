const r = d.renderer; r.info.autoReset = false;
const meas = () => { r.info.reset(); B.render(); return { calls: r.info.render.calls, tris: r.info.render.triangles }; };
const all = meas();
const g = scene.getObjectByName('hero7'), sq = d.mascotState.squash;
const gv = g ? g.visible : false, sv = sq.visible; if (g) g.visible = false; sq.visible = false;
const none = meas(); if (g) g.visible = gv; sq.visible = sv; r.info.autoReset = true; B.render();
return { withHero: all, withoutHero: none, heroCalls: all.calls - none.calls, heroTris: all.tris - none.tris };
