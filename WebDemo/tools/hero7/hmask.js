// render only the hero (hero7 group, or the old mascot) and the water; return the canvas; restore visibility
const keepRoots = [scene.getObjectByName('hero7'), scene.getObjectByName('s56Water'), window.__H7OLD ? d.mascotState.squash : null].filter(Boolean);
const isKept = (o) => { let p = o; while (p) { if (keepRoots.includes(p)) return true; p = p.parent; } return false; };
const saved = []; scene.traverse((o) => { if ((o.isMesh || o.isPoints || o.isSprite || o.isLine) && !isKept(o) && o.visible) { saved.push(o); o.visible = false; } });
const bg = scene.background; scene.background = null; d.renderer.setClearColor(0x000000, 1);
B.render(); const url = d.renderer.domElement.toDataURL('image/png');
saved.forEach((o) => { o.visible = true; }); scene.background = bg; B.render();
return url;
