// hud56 (session ac4e3449; owned by SPECIALIST 4, lane `ui`, see Tools/lanes.json): the in-game HUD restyled to the approved Scene 5/6 screens
// (Design/ReferencePacks/2026-11-09_Scene5_Scene6_Full_Kit_from_user/01_..., 02_...). Only with ?s3=...,s56: body gets the class `s56` and the
// rules below (CSS scoped to body.s56, so every other switch list keeps its HUD pixel-identical). Looks only: no game state is touched.
export function installHud56() {
  if (typeof document === 'undefined' || document.getElementById('hud56')) return;
  document.body.classList.add('s56');
  const st = document.createElement('style'); st.id = 'hud56';
  st.textContent = `/* (the UI specialist fills this in) */`;
  document.head.appendChild(st);
}
