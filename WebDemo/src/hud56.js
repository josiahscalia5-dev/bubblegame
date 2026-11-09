// hud56 (session ac4e3449; owned by SPECIALIST 4, lane `ui`, see Tools/lanes.json): the in-game HUD restyled to the approved Scene 5/6 screens
// (Design/ReferencePacks/2026-11-09_Scene5_Scene6_Full_Kit_from_user/01_..., 02_...). Only with ?s3=...,s56: body gets the class `s56` and the
// rules below (CSS scoped to body.s56, so every other switch list keeps its HUD pixel-identical). Looks only: no game state is touched.
//
// The approved screens' interface, mapped onto the live HUD's own elements (no element is added, moved out of the HUD or rewired):
//   - the top bar: dark purple pills with a lavender rim and a green "+" (hearts with the number in the heart, coins, gems), at the
//     reference's places (heart pill x 62-215, coin pill 578-712, gem pill 742-858 of the 864 px frame, so they never overlap);
//   - row 2: the mission card ("Rescue 5 lost socks") at the reference's settings square (left), in the gold-rimmed purple of the
//     approved square buttons; the pause button as the approved square at the reference's mail button (right);
//   - the bottom: Bubble Blast and Turbo Spin as the approved gold-rimmed purple squares at the reference's Home and Shop places,
//     their count as the reference's red "!" badge; on Tap to Start the pink bottom bar behind them and "Tap to Start" as the
//     approved green, gold-rimmed Start pill (the bar slides away once the run starts, so the water is clear while playing);
//   - the section banners (level1's #l1Banner) as the approved caption / plaque, high (where the approved "Laundry Toss!" plaque
//     sits), clear of the tunnel's vanishing point; the steering hint, the pause card and the toast in the same purple and gold.
// Sizes are in reference pixels: --r = the stage width / 864 (set here from the stage's own size; the CSS fallback is the
// narrowest stage, 269 board units wide), so the layout is the reference's at every phone shape; positions are anchored to the
// stage's edges and the safe areas.
const R = (n) => `calc(var(--r) * ${n})`;
const OUT = (c, w) => `${R(w)} 0 0 ${c}, ${R(-w)} 0 0 ${c}, 0 ${R(w)} 0 ${c}, 0 ${R(-w)} 0 ${c}`;
const SAFE_T = 'env(safe-area-inset-top, 0px)', SAFE_B = 'env(safe-area-inset-bottom, 0px)';
// the approved square buttons (as the opening's six2_ui.js .s6sq, so the hand-over keeps one look)
const SQUARE = `background: linear-gradient(#b06cf6, #8a44e6 45%, #6a2fc8); border: ${R(5)} solid #ffd36a; box-sizing: border-box;
  box-shadow: inset 0 ${R(4)} 0 rgba(255,255,255,.28), inset 0 0 0 ${R(2)} rgba(255,246,200,.55), 0 ${R(5)} 0 #4a1a8a, 0 ${R(8)} ${R(16)} rgba(40,0,90,.35);`;
const INK = '#2a0c5e';
export const HUD56_CSS = `
body.s56 #stage { --r: calc(var(--u, 1.43px) * 0.3113); }
/* the HUD's outlined text: the approved screens' purple outline in place of the old navy one */
html body.s56 .hud .t { text-shadow: 0 0 ${R(3)} ${INK}, ${OUT(INK, 2.4)}, 0 ${R(4.5)} ${R(3)} rgba(40,0,90,.55); }

/* ---- the top bar ---- */
html body.s56 .hud .pill { transform: none; box-sizing: border-box; top: calc(${R(21)} + ${SAFE_T}); height: ${R(44)}; border-radius: 999px;
  background: linear-gradient(#702eb4, #4e1a8e 55%, #3a1070);
  box-shadow: inset 0 0 0 ${R(3)} #cbb4f4, inset 0 ${R(7)} 0 rgba(255,255,255,.13), 0 ${R(3)} 0 #250850, 0 ${R(4)} ${R(9)} rgba(40,0,80,.35); }
html body.s56 .hud .pill span { font-size: ${R(30)}; }
html body.s56 .hud .pill::after { content: '+'; position: absolute; right: ${R(3)}; top: 50%; margin-top: ${R(-19)}; width: ${R(38)}; height: ${R(38)}; border-radius: 50%;
  box-sizing: border-box; background: radial-gradient(circle at 40% 32%, #c8ff8a, #52d43e 55%, #22982a); border: ${R(3)} solid #f0ffe0; box-shadow: 0 ${R(2)} 0 #145e18;
  display: flex; align-items: center; justify-content: center; padding-bottom: ${R(3)}; font-size: ${R(36)}; font-weight: 700; line-height: 1; color: #fff; text-shadow: 0 ${R(2)} 0 #157a1a; }
html body.s56 .hud #heartPill { left: 7.2%; width: ${R(153)}; }
html body.s56 .hud #heartPill img:first-of-type { left: ${R(-50)} !important; top: ${R(-13)} !important; width: ${R(72)} !important; height: ${R(68)} !important; filter: hue-rotate(10deg) saturate(1.15) drop-shadow(0 ${R(3)} 0 #8a0a3a); }
html body.s56 .hud #heartPill img:last-of-type { display: none; }
html body.s56 .hud #hearts { left: ${R(-25)}; font-size: ${R(36)}; text-shadow: 0 0 ${R(2)} #a0103a, ${OUT('#a0103a', 2)}, 0 ${R(3.5)} 0 #7a0a2e; }
html body.s56 .hud #hearts small { font-size: ${R(30)}; margin-left: ${R(32)}; text-shadow: 0 0 ${R(3)} ${INK}, ${OUT(INK, 2.2)}, 0 ${R(3.5)} 0 ${INK}; }
html body.s56 .hud #coinPill { left: auto; right: 17.6%; width: ${R(134)}; }
html body.s56 .hud #coinPill img { left: ${R(-24)} !important; top: ${R(-6)} !important; width: ${R(56)} !important; height: ${R(56)} !important; filter: drop-shadow(0 ${R(3)} 0 #8a5200); }
html body.s56 .hud #coins { left: ${R(36)}; }
html body.s56 .hud #gemPill { left: auto; right: 0.7%; width: ${R(116)}; }
html body.s56 .hud #gemPill img { left: ${R(-24)} !important; top: ${R(-7)} !important; width: ${R(54)} !important; height: ${R(52)} !important; filter: hue-rotate(18deg) saturate(1.25) drop-shadow(0 ${R(3)} 0 #5a0a7a); }
html body.s56 .hud #gems { left: ${R(34)}; }

/* ---- row 2: the mission card (left, the reference's settings square row) and the pause square (right, the mail button's place) ---- */
html body.s56 .hud #sockPanel { left: 2.3%; top: calc(${R(92)} + ${SAFE_T}); width: ${R(470)}; height: ${R(96)}; border-radius: ${R(24)}; ${SQUARE} }
html body.s56 .hud #sockPanel .icon { left: ${R(4)}; top: ${R(2)}; width: ${R(78)}; height: ${R(80)}; filter: drop-shadow(0 ${R(3)} 0 rgba(60,10,120,.55)); }
html body.s56 .hud #sockPanel .title { left: ${R(90)}; top: ${R(8)}; font-size: ${R(31)}; line-height: ${R(36)}; }
html body.s56 .hud #sockPanel .track { left: ${R(92)}; top: ${R(52)}; width: ${R(282)}; height: ${R(22)}; border-radius: 999px; background: rgba(42,8,94,.72); box-shadow: inset 0 0 0 ${R(2.5)} #e2c8ff, inset 0 ${R(3)} ${R(4)} rgba(0,0,0,.35); }
html body.s56 .hud #sockBar { background: linear-gradient(90deg, #ffe27a, #ff8fd8); border-radius: 999px; }
html body.s56 .hud #sockPanel .count { left: ${R(384)}; top: ${R(49)}; font-size: ${R(28)}; line-height: 1; }
html body.s56 .hud #pauseBtn { left: auto; right: 2.5%; top: calc(${R(92)} + ${SAFE_T}); width: ${R(84)}; height: ${R(82)}; border-radius: ${R(20)}; gap: ${R(10)}; ${SQUARE} }
html body.s56 .hud #pauseBtn span { width: ${R(13)}; height: ${R(34)}; background: #fff; box-shadow: 0 ${R(2.5)} 0 rgba(60,10,120,.55); }
html body.s56 .hud #pauseBtn::after { content: ''; position: absolute; inset: ${R(-14)}; border-radius: ${R(26)}; }   /* (a larger touch target, see-through) */

/* ---- the bottom: the power-ups as the approved squares at the Home / Shop places; on Tap to Start the pink bar and the green Start ---- */
html body.s56 .hud::before { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: calc(${R(196)} + ${SAFE_B}); pointer-events: none;
  background: repeating-linear-gradient(90deg, rgba(255,232,246,.85) 0 ${R(12)}, transparent ${R(12)} ${R(21)}) 0 ${R(15)} / 100% ${R(3)} no-repeat,
    radial-gradient(120% 60% at 50% 0%, rgba(255,255,255,.18), rgba(255,255,255,0) 60%), linear-gradient(#ff82c4, #f24ea4 40%, #e0358e);
  border-top: ${R(5)} solid #ffb4dc; border-radius: 50% 50% 0 0 / ${R(34)} ${R(34)} 0 0;
  box-shadow: inset 0 ${R(12)} 0 ${R(-6)} rgba(255,255,255,.25), 0 ${R(-4)} ${R(16)} rgba(120,0,80,.25); transition: opacity .45s ease, transform .45s ease; }
html body.s56.running .hud::before { opacity: 0; transform: translateY(45%); }
html body.s56 .hud .power { bottom: calc(${R(34)} + ${SAFE_B}); width: ${R(128)}; height: ${R(132)}; border-radius: ${R(24)}; z-index: 1; ${SQUARE} }
html body.s56 .hud #blastBtn { left: 3.7%; }
html body.s56 .hud #turboBtn { left: auto; right: 3.7%; }
html body.s56 .hud .power svg { left: calc(50% - ${R(31)}); top: ${R(3)}; width: ${R(62)}; height: ${R(62)}; filter: drop-shadow(0 ${R(3)} ${R(2)} rgba(40,0,90,.5)); }
html body.s56 .hud .power .lbl { left: ${R(2)}; right: ${R(2)}; top: auto; bottom: ${R(7)}; font-size: ${R(23)}; line-height: ${R(23)}; white-space: normal; }
html body.s56 .hud .power .badge, html body.s56 .hud #turboBtn .badge { right: ${R(-15)}; top: ${R(-15)}; width: ${R(46)}; height: ${R(46)}; font-size: ${R(28)};
  background: radial-gradient(circle at 40% 32%, #ff8e9a, #ff3a4a 55%, #d0102a); box-shadow: 0 0 0 ${R(4)} #fff, 0 ${R(3)} ${R(4)} rgba(80,0,40,.45);
  text-shadow: 0 0 ${R(2)} #8a0a1e, ${OUT('#8a0a1e', 1.6)}; }
html body.s56 .hud .power:disabled .badge { background: #9a8ab4; }
html body.s56 .hud #startPanel { bottom: calc(${R(40)} + ${SAFE_B}); width: ${R(400)}; height: ${R(126)}; margin-left: 0; border-radius: ${R(63)}; z-index: 1; box-sizing: border-box;
  background: linear-gradient(180deg, rgba(255,255,255,.55) 0, rgba(255,255,255,.12) 30%, rgba(255,255,255,0) 44%), linear-gradient(#c8ff7a 0 18%, #6ae03a 45%, #2fb02a 80%, #1f8e22);
  border: ${R(7)} solid #ffcf4a; box-shadow: inset 0 0 0 ${R(3)} #f4ffd8, 0 ${R(8)} 0 #a06a00, 0 ${R(14)} ${R(22)} rgba(60,0,60,.3); }
html body.s56 .hud #startPanel .tap { top: 0 !important; bottom: 0; display: flex; align-items: center; justify-content: center; gap: ${R(16)}; font-size: ${R(50)}; line-height: 1; white-space: nowrap;
  text-shadow: ${OUT('#1a7a1e', 3)}, 0 ${R(6)} 0 #10561a; }
html body.s56 .hud #startPanel .tap::after { content: ''; border-top: ${R(22)} solid transparent; border-bottom: ${R(22)} solid transparent; border-left: ${R(32)} solid #fff; filter: drop-shadow(0 ${R(3)} 0 #1a7a1e); }

/* ---- the section banners (level1 #l1Banner), the steering hint, the toast and the pause card ---- */
html body.s56 #l1Banner { top: calc(${R(214)} + ${SAFE_T}); padding: ${R(12)} ${R(42)} ${R(14)}; border-radius: ${R(40)};
  background: linear-gradient(#9a58ee, #6a2cc6 55%, #5a20b0); border: ${R(4)} solid #e6d0ff; box-shadow: 0 ${R(5)} 0 #3a0c7a, 0 0 ${R(24)} rgba(200,150,255,.55); }
html body.s56 #l1Banner b { font-size: ${R(40)}; line-height: 1.1; text-shadow: 0 0 ${R(2)} #3a0c7a, ${OUT('#3a0c7a', 2)}, 0 ${R(4)} 0 #3a0c7a; }
html body.s56 #l1Banner span { font-size: ${R(29)}; line-height: 1.2; text-shadow: 0 0 ${R(2)} #3a0c7a, ${OUT('#3a0c7a', 1.6)}, 0 ${R(3)} 0 #3a0c7a; }
html body.s56 #l1Banner.warn { background: linear-gradient(#ff7cc8, #f03aa6 45%, #c41686); border: ${R(6)} solid #ffd060; box-shadow: inset 0 0 0 ${R(3)} #ff9bd6, 0 ${R(6)} 0 #8a0f5e, 0 0 ${R(24)} rgba(255,150,220,.6); }
html body.s56 #l1Banner.warn b, html body.s56 #l1Banner.warn span { text-shadow: 0 0 ${R(2)} #6a1a9a, ${OUT('#6a1a9a', 2)}, 0 ${R(4)} 0 #4a0c70; }
html body.s56 .hud #hint { bottom: calc(${R(196)} + ${SAFE_B}); max-width: 74%; padding: ${R(8)} ${R(24)} ${R(10)}; border-radius: ${R(30)}; font-size: ${R(24)}; line-height: 1.3;
  background: linear-gradient(#8a4ae6, #5a20b0); box-shadow: inset 0 0 0 ${R(3)} #e2c8ff, 0 ${R(4)} 0 #3a0c7a; }
html body.s56 .hud #r2Toast, html body.s56 .hud #pausePanel .card { background: linear-gradient(180deg, rgba(255,255,255,.28) 0, rgba(255,255,255,0) 30%), linear-gradient(#a660f2, #7432d2 50%, #5a1fb0);
  border: ${R(6)} solid #ffd36a; box-sizing: border-box; box-shadow: 0 ${R(7)} 0 #4a1a8a, 0 0 ${R(30)} rgba(200,150,255,.55); }
html body.s56 .hud #pausePanel { background: rgba(48, 10, 90, 0.45); }
html body.s56 .hud #pausePanel .pbtn { background: linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,0) 55%), linear-gradient(#9a5af0, #6a2cc8); box-shadow: inset 0 0 0 ${R(4)} #e2c8ff, 0 ${R(4)} 0 #3a0c7a; }
html body.s56 .hud #pausePanel .pbtn.go { background: linear-gradient(180deg, rgba(255,255,255,.45), rgba(255,255,255,0) 50%), linear-gradient(#c8ff7a 0 18%, #6ae03a 45%, #2fb02a 80%, #1f8e22);
  box-shadow: inset 0 0 0 ${R(4)} #ffd36a, 0 ${R(5)} 0 #136a18; text-shadow: ${OUT('#1a7a1e', 2.4)}, 0 ${R(4)} 0 #10561a; }
`;
export function installHud56() {
  if (typeof document === 'undefined' || document.getElementById('hud56')) return;
  document.body.classList.add('s56');
  const st = document.createElement('style'); st.id = 'hud56';
  st.textContent = HUD56_CSS;
  document.head.appendChild(st);
  // --r: one pixel of the 864 px wide reference frame on this stage (its width / 864), kept in step with the stage's size
  const stage = document.getElementById('stage');
  if (!stage) return;
  const fit = () => { const w = stage.clientWidth; if (w > 0) stage.style.setProperty('--r', `${(w / 864).toFixed(4)}px`); };
  fit();
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(fit).observe(stage); else window.addEventListener('resize', fit);
}
