// the hero's visible pixels in the REAL frame: render with and without the drawn hero (hero7 group, or the old body), return both canvases
const g = scene.getObjectByName('hero7'), sq = d.mascotState.squash;
const useOld = !(g && g.visible);
B.render(); const a = d.renderer.domElement.toDataURL('image/png');
const v1 = g ? g.visible : false, v2 = sq.visible; if (g) g.visible = false; sq.visible = false;
B.render(); const b = d.renderer.domElement.toDataURL('image/png');
if (g) g.visible = v1; sq.visible = v2; B.render();
return [a, b];
