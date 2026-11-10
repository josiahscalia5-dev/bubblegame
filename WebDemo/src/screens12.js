// ?s3=...,home (7 November 2026, session 398ed88c): Screen 1 (Home) and Screen 2 (Laundry Toss) in front of the live game,
// from the user's first-two-screens package (Design/ReferencePacks/2026-11-07_First_Two_Screens_Girl_Laundry_from_user/).
// Authority: the ORIGINAL girl + laundry artwork (11109.jpg) for the girl, the pink character, the room and the gold washer;
// the two phone previews only for where the UI goes. The artwork is the opening illustration (the user's prompt allows it:
// "Original artwork may inform design and be used appropriately as an opening illustration, but interactive buttons must
// be real UI and transitions must lead to actual gameplay"); everything interactive is real UI:
//   - the top bar shows the game's live hearts, coins and gems (read from the game's own HUD), its gear opens Settings;
//   - Screen 1: the title, PLAY (to Screen 2), and Levels / Characters / Shop / Settings panels that work;
//   - Screen 2: "Laundry Toss!", the "Let's go! Into the washer!" cue, START (enabled once the game has loaded), Back;
//   - START: the pink character (cut out of the artwork, ui/screens12/mascot_sprite.png; the room behind her repaired in
//     ui/screens12/laundry_scene.jpg, which also has the painted HUD and title strip repaired) is tossed along the
//     artwork's arrow into the washer's blue tunnel, the view dives into the tunnel and hands over to the live 3D
//     Screen 4 (the accepted Tap to Start), which has been loading underneath the whole time.
// Nothing here runs without the switch; the game's state, input and seeded Math.random are untouched (it uses none).
import { LEVEL1_PARTS } from './level1.js';
import { mountOpening3D } from './opening3d.js';
import { SIX2_ON } from './opening_six2.js';   // six2 (session 9ee07777): the interface of the six approved portrait screens
import { SIX2_CSS, buildSix2UI } from './six2_ui.js';
const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const HOME_ON = LIST.includes('home');
// ?s3=...,home,level1 (8 November 2026): the painted Laundry Toss picture gives way to the real-time 3D opening (opening3d.js);
// the UI here (top bar, titles, PLAY, START, panels) is unchanged and sits over it. Without level1 nothing changes.
const O3D_ON = HOME_ON && LEVEL1_PARTS.opening;
let o3d = null;

// the artwork's own coordinates (864 x 1536): the cut-out character, the washer's tunnel, the arrow's path
const ART = { w: 864, h: 1536, sprite: { x: 287, y: 554, w: 334, h: 319 }, tunnel: { x: 575, y: 1112 }, arrow: { x: 700, y: 790 } };
let holding = HOME_ON;
const OPEN9_S = typeof window !== 'undefined' && ['six', 'six2', 's56', 'seq7', 'open9'].every((k) => (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(',')).includes(k));   // (open9, session d742a298)
let seed = 0x5c12;   // a private random sequence for the sparkle sizes (the game's Math.random is never used here)
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };   // the game's frames are held while the screens cover it (game.js frame); released for the dive
export function homeHolds() { return holding; }

const CSS = `
#bwHome { position: fixed; inset: 0; z-index: 10000; overflow: hidden; background: #5b3fc4; font-family: var(--display, 'Fredoka', system-ui, sans-serif);
  color: #fff; -webkit-tap-highlight-color: transparent; user-select: none; touch-action: manipulation; }
#bwHome .art { position: absolute; transform-origin: 50% 50%; will-change: transform; }
#bwHome .art img.bg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
#bwHome .sprite { position: absolute; left: ${ART.sprite.x / ART.w * 100}%; top: ${ART.sprite.y / ART.h * 100}%; width: ${ART.sprite.w / ART.w * 100}%;
  animation: bwFloat 2.6s ease-in-out infinite; transform-origin: 50% 60%; will-change: transform; }
@keyframes bwFloat { 0%, 100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-3.2%) rotate(2.5deg); } }
#bwHome .bubble { position: absolute; border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle at 32% 30%, rgba(255,255,255,.95) 0 9%, rgba(255,255,255,.25) 10% 22%, rgba(190,170,255,.12) 45%, rgba(140,210,255,.35) 72%, rgba(255,190,240,.7) 100%);
  box-shadow: inset 0 0 calc(var(--a) * 6) rgba(255,255,255,.55); animation: bwRise linear infinite; }
@keyframes bwRise { from { transform: translateY(0); opacity: 0; } 12% { opacity: .9; } 85% { opacity: .9; } to { transform: translateY(calc(var(--a) * -520)); opacity: 0; } }
#bwHome .top { position: absolute; left: 0; right: 0; top: calc(var(--a) * 24 + env(safe-area-inset-top, 0px)); height: calc(var(--a) * 66); }
#bwHome .pill { position: absolute; top: 0; height: 100%; border-radius: 999px; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(#3a6ff0, #1f3fae); box-shadow: 0 calc(var(--a) * 4) 0 #142b7a, inset 0 calc(var(--a) * 3) 0 rgba(255,255,255,.35);
  border: calc(var(--a) * 4) solid #8fd0ff; font-weight: 700; font-size: calc(var(--a) * 34); text-shadow: 0 calc(var(--a) * 2) 0 #0d2368; box-sizing: border-box; }
#bwHome .pill img { position: absolute; left: calc(var(--a) * -10); top: 50%; height: 125%; transform: translateY(-50%); }
#bwHome .pill span { padding-left: calc(var(--a) * 34); white-space: nowrap; }
#bwHome .pill small { font-size: .7em; }
#bwHome .pill .plus { position: absolute; right: calc(var(--a) * 12); color: #6ff0ff; font-size: 1.15em; }
#bwHome button { font-family: inherit; color: inherit; border: 0; padding: 0; cursor: pointer; background: none; }
#bwHome .gear { position: absolute; top: 0; width: calc(var(--a) * 70); height: calc(var(--a) * 70); border-radius: 50%;
  background: linear-gradient(#3a6ff0, #1f3fae); border: calc(var(--a) * 4) solid #8fd0ff; box-shadow: 0 calc(var(--a) * 4) 0 #142b7a; display: flex; align-items: center; justify-content: center; }
#bwHome .gear img { width: 72%; }
#bwHome .title { position: absolute; left: 50%; transform: translateX(-50%); text-align: center; white-space: nowrap; pointer-events: none;
  top: calc(var(--a) * 120 + env(safe-area-inset-top, 0px)); padding: calc(var(--a) * 10) calc(var(--a) * 46) calc(var(--a) * 14); border-radius: calc(var(--a) * 60);
  background: linear-gradient(#2f62e8, #1736a8); border: calc(var(--a) * 6) solid #9fe2ff; box-shadow: 0 calc(var(--a) * 8) 0 #10287a, 0 0 calc(var(--a) * 30) rgba(140,220,255,.7); }
#bwHome .title b { display: block; font-size: calc(var(--a) * 84); line-height: 1; font-weight: 700; letter-spacing: calc(var(--a) * 1);
  text-shadow: 0 calc(var(--a) * 5) 0 #0b1f63, 0 0 calc(var(--a) * 4) #0b1f63; }
#bwHome .title i { display: block; font-style: normal; font-size: calc(var(--a) * 50); line-height: 1.05; font-weight: 700; color: #ffd23f;
  letter-spacing: calc(var(--a) * 4); text-shadow: 0 calc(var(--a) * 4) 0 #7a3f00; }
#bwHome .title.toss { background: linear-gradient(#5fc4ff, #2a8ff0); border-color: #e6fbff; }
#bwHome .title.toss b { font-size: calc(var(--a) * 92); text-shadow: 0 calc(var(--a) * 6) 0 #1650b8, 0 0 calc(var(--a) * 5) #1650b8; }
#bwHome .bottom { position: absolute; left: 0; right: 0; bottom: calc(env(safe-area-inset-bottom, 0px) + var(--a) * 18); display: flex; flex-direction: column; align-items: center; gap: calc(var(--a) * 18); }
#bwHome .go { width: min(78vw, calc(var(--a) * 600)); height: calc(var(--a) * 108); border-radius: calc(var(--a) * 60); font-size: calc(var(--a) * 62); font-weight: 700;
  background: linear-gradient(#a6ff6c 0 45%, #2fc43a 55%, #189a2a); border: calc(var(--a) * 6) solid #eaffd8; box-shadow: 0 calc(var(--a) * 9) 0 #0d6b1c, 0 calc(var(--a) * 14) calc(var(--a) * 20) rgba(0,0,0,.25);
  color: #fff; text-shadow: 0 calc(var(--a) * 4) 0 #0d6b1c, 0 0 calc(var(--a) * 3) #0d6b1c; letter-spacing: calc(var(--a) * 3); display: flex; align-items: center; justify-content: center; gap: calc(var(--a) * 22); }
#bwHome .go:active { transform: translateY(calc(var(--a) * 5)); box-shadow: 0 calc(var(--a) * 4) 0 #0d6b1c; }
#bwHome .go[disabled] { filter: saturate(.4) brightness(.9); cursor: progress; }
#bwHome .go .tri { width: 0; height: 0; border-top: calc(var(--a) * 22) solid transparent; border-bottom: calc(var(--a) * 22) solid transparent; border-left: calc(var(--a) * 34) solid #fff; filter: drop-shadow(0 calc(var(--a) * 3) 0 #0d6b1c); }
#bwHome .nav { width: min(94vw, calc(var(--a) * 780)); height: calc(var(--a) * 128); border-radius: calc(var(--a) * 30); background: linear-gradient(#2a4fd0, #142d8c);
  border: calc(var(--a) * 4) solid #7fc1ff; box-shadow: 0 calc(var(--a) * 6) 0 #0b1c5c; display: flex; justify-content: space-around; align-items: center; box-sizing: border-box; }
#bwHome .nav button { display: flex; flex-direction: column; align-items: center; gap: calc(var(--a) * 4); font-size: calc(var(--a) * 25); font-weight: 600; min-width: 44px; min-height: 44px; }
#bwHome .nav .ic { width: calc(var(--a) * 66); height: calc(var(--a) * 66); border-radius: 50%; background: linear-gradient(#4f8bff, #2350d0); border: calc(var(--a) * 4) solid #a9dcff;
  display: flex; align-items: center; justify-content: center; font-size: calc(var(--a) * 34); line-height: 1; }
#bwHome .cue { padding: calc(var(--a) * 14) calc(var(--a) * 34); border-radius: calc(var(--a) * 40); background: linear-gradient(#24459e, #142a6e); border: calc(var(--a) * 4) solid #8ad8ff;
  font-size: calc(var(--a) * 36); font-weight: 700; letter-spacing: calc(var(--a) * 1.5); text-shadow: 0 calc(var(--a) * 3) 0 #08143e; white-space: nowrap; }
#bwHome .back { position: absolute; left: calc(var(--a) * 24 + env(safe-area-inset-left, 0px)); top: calc(var(--a) * 270 + env(safe-area-inset-top, 0px)); width: calc(var(--a) * 74); height: calc(var(--a) * 74);
  min-width: 44px; min-height: 44px; border-radius: 50%; background: linear-gradient(#4f8bff, #2350d0); border: calc(var(--a) * 4) solid #a9dcff; font-size: calc(var(--a) * 40); font-weight: 700; box-shadow: 0 calc(var(--a) * 4) 0 #142b7a; }
#bwHome .screen { position: absolute; inset: 0; transition: opacity .35s ease; }
#bwHome .screen.off { opacity: 0; pointer-events: none; }
#bwHome .modal { position: absolute; inset: 0; background: rgba(20, 10, 60, .55); display: flex; align-items: center; justify-content: center; z-index: 5; }
#bwHome .modal[hidden] { display: none; }
#bwHome .card { width: min(86vw, calc(var(--a) * 700)); max-height: 72vh; overflow: auto; border-radius: calc(var(--a) * 36); background: linear-gradient(#3d6ff0, #1d3aa6);
  border: calc(var(--a) * 6) solid #a9dcff; box-shadow: 0 calc(var(--a) * 10) 0 #0d2368; padding: calc(var(--a) * 30); box-sizing: border-box; text-align: center; }
#bwHome .card h2 { margin: 0 0 calc(var(--a) * 20); font-size: calc(var(--a) * 52); text-shadow: 0 calc(var(--a) * 4) 0 #0b1f63; }
#bwHome .row { display: flex; align-items: center; justify-content: space-between; gap: calc(var(--a) * 16); margin: calc(var(--a) * 12) 0; padding: calc(var(--a) * 16) calc(var(--a) * 22);
  border-radius: calc(var(--a) * 22); background: rgba(255,255,255,.14); font-size: calc(var(--a) * 32); text-align: left; }
#bwHome .row.locked { opacity: .6; }
#bwHome .small { min-width: 44px; min-height: 44px; padding: 0 calc(var(--a) * 28); height: calc(var(--a) * 72); border-radius: 999px; font-size: calc(var(--a) * 32); font-weight: 700;
  background: linear-gradient(#a6ff6c, #2fc43a 60%, #189a2a); border: calc(var(--a) * 4) solid #eaffd8; text-shadow: 0 calc(var(--a) * 3) 0 #0d6b1c; }
#bwHome .small.blue { background: linear-gradient(#7fb6ff, #2f63e0); border-color: #d6ecff; text-shadow: 0 calc(var(--a) * 3) 0 #0d2368; }
#bwHome .who { display: flex; align-items: center; gap: calc(var(--a) * 22); text-align: left; font-size: calc(var(--a) * 32); }
#bwHome .who img { width: calc(var(--a) * 170); }
#bwHome .fx { position: absolute; pointer-events: none; border-radius: 50%; }
#bwHome .glow { position: absolute; inset: 0; pointer-events: none; opacity: 0;
  background: radial-gradient(circle at var(--gx, 50%) var(--gy, 60%), #ffffff 0, #bff4ff 12%, #3fb8ff 34%, #1557e0 70%, #0a2fa0 100%); }
@media (prefers-reduced-motion: reduce) { #bwHome .sprite, #bwHome .bubble { animation: none; } }
`;

const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const $g = (id) => document.getElementById(id);

function build() {
  const st = document.createElement('style'); st.textContent = CSS + (SIX2_ON ? SIX2_CSS : ''); document.head.appendChild(st);
  const root = el('div'); root.id = 'bwHome'; root.setAttribute('role', 'application'); root.setAttribute('aria-label', 'Bubble Wash Kingdom');
  const art = el('div', 'art');
  const bg = el('img', 'bg'); bg.src = 'ui/screens12/laundry_scene.jpg'; bg.alt = 'The girl tosses the pink fluffy character toward the golden washing machine';
  const sprite = el('img', 'sprite'); sprite.src = 'ui/screens12/mascot_sprite.png'; sprite.alt = 'The pink fluffy character';
  art.append(bg, sprite);
  // a few soap bubbles drifting up through the room (decoration; off with reduced motion)
  [[90, 1240, 70, 9], [190, 1420, 46, 7], [640, 1330, 58, 8.5], [770, 1180, 40, 6.5], [420, 1450, 34, 7.5], [560, 610, 30, 9.5]].forEach(([x, y, r, s], i) => {
    const b = el('div', 'bubble'); Object.assign(b.style, { left: `${x / ART.w * 100}%`, top: `${y / ART.h * 100}%`, width: `calc(var(--a) * ${r})`, height: `calc(var(--a) * ${r})`, animationDuration: `${s}s`, animationDelay: `${-i * 1.7}s` });
    art.appendChild(b);
  });
  const glow = el('div', 'glow');
  root.append(art);
  // the live top bar (both screens)
  const top = el('div', 'top');
  const pill = (x, w, icon, id) => { const p = el('div', 'pill'); Object.assign(p.style, { left: `${x / 864 * 100}%`, width: `${w / 864 * 100}%` }); p.innerHTML = `<img src="ui/${icon}.png" alt=""><span data-src="${id}"></span>`; return p; };
  const hp = pill(40, 236, 'heart', 'hearts'); hp.insertAdjacentHTML('beforeend', '<b class="plus">+</b>');
  top.append(hp, pill(318, 206, 'coin', 'coins'), pill(566, 166, 'gem', 'gems'));
  const gear = el('button', 'gear', '<img src="ui/gear.png" alt="">'); gear.setAttribute('aria-label', 'Settings'); gear.style.left = `${756 / 864 * 100}%`;
  top.appendChild(gear);
  // Screen 1: Home
  const s1 = el('div', 'screen');
  s1.append(el('div', 'title', '<b>Bubble Wash</b><i>KINGDOM</i>'));
  const b1 = el('div', 'bottom');
  const play = el('button', 'go', 'PLAY <span class="tri"></span>'); play.setAttribute('aria-label', 'Play');
  const nav = el('nav', 'nav');
  const navBtn = (icon, label) => { const b = el('button', null, `<span class="ic" aria-hidden="true">${icon}</span>${label}`); b.setAttribute('aria-label', label); nav.appendChild(b); return b; };
  const bLevels = navBtn('★', 'Levels'), bChars = navBtn('♥', 'Characters'), bShop = navBtn('◆', 'Shop'), bSet = navBtn('⚙', 'Settings');
  b1.append(play, nav); s1.appendChild(b1);
  // Screen 2: Laundry Toss
  const s2 = el('div', SIX2_ON ? 'screen off s2' : 'screen off');
  s2.append(el('div', 'title toss', '<b>Laundry Toss!</b>'));
  const back = el('button', 'back', '‹'); back.setAttribute('aria-label', 'Back to the home screen'); s2.appendChild(back);
  const b2 = el('div', 'bottom');
  const start = el('button', 'go', 'START <span class="tri"></span>'); start.setAttribute('aria-label', 'Start the adventure');
  b2.append(el('div', 'cue', 'LET’S GO! INTO THE WASHER!'), start); s2.appendChild(b2);
  // the panels
  const modal = el('div', 'modal'); modal.hidden = true;
  const card = el('div', 'card'); modal.appendChild(card);
  root.append(s1, s2, top, modal, glow);
  document.body.appendChild(root);
  let ui6 = null;   // (six2's interface, built below)
  if (O3D_ON) {   // ?s3=...,home,level1: the live 3D scene behind both screens instead of the painted picture
    art.style.display = 'none';
    o3d = mountOpening3D(root, { test: !!window.__BW_TEST__, onScene: (n) => { if (ui6) ui6.setScene(n); },
      onHandOver: () => { holding = false; root.style.pointerEvents = 'none';
        if (OPEN9_S) { root.style.background = 'transparent'; for (const c of root.children) if (c.tagName !== 'CANVAS') { c.style.transition = 'opacity .35s ease'; c.style.opacity = '0'; } }   // (open9: no cross-fade: the live game shows through the end of the opening's water passage)
        else { root.style.transition = 'opacity .8s ease'; root.style.opacity = '0'; } },
      onDone: () => { clearInterval(syncT); o3d.dispose(); root.remove(); window.dispatchEvent(new Event('bw:home-done')); } });
  }

  // six2: the reference screens' interface (six2_ui.js) over the 3D scene
  if (SIX2_ON) ui6 = buildSix2UI({ root, top, startBtn: start, onHome: () => show(s2, s1), onShop: () => bShop.click(), onSettings: () => settings() });

  // layout: the artwork covers the screen (cropped at the sides on narrow phones, a little more on the right so the girl
  // stays whole); --a is one artwork pixel on screen
  const layout = () => {
    const vw = window.innerWidth, vh = window.innerHeight, s = Math.max(vw / ART.w, vh / ART.h), w = ART.w * s, h = ART.h * s;
    Object.assign(art.style, { width: `${w}px`, height: `${h}px`, left: `${(vw - w) * 0.42}px`, top: `${(vh - h) * 0.5}px` });
    root.style.setProperty('--a', `${s}px`);
    // the top bar spans the visible width (the painted HUD is repaired out of the artwork, so it need not follow it)
    top.style.left = `${Math.max(0, (vw - w) * 0.42)}px`; top.style.width = `${Math.min(vw, w)}px`;
  };
  layout(); window.addEventListener('resize', layout);

  // the live values (the game's own HUD)
  const sync = () => { for (const s of top.querySelectorAll('[data-src]')) { const g = $g(s.dataset.src); if (g && s.innerHTML !== g.innerHTML) s.innerHTML = g.innerHTML; } };
  sync(); const syncT = setInterval(sync, 400);
  // START waits for the game to have loaded underneath
  const ready = () => document.body.classList.contains('ready');
  const gate = () => { start.disabled = !ready(); start.firstChild.textContent = ready() ? 'START ' : 'LOADING… '; };
  gate(); const gateT = setInterval(gate, 300);

  const show = (a, b) => { a.classList.add('off'); b.classList.remove('off'); if (ui6) { if (b === s2) ui6.showToss(); else ui6.showHome(); } };
  const open = (html) => { card.innerHTML = html; modal.hidden = false; const c = card.querySelector('[data-close]'); if (c) c.focus(); };
  const close = () => { modal.hidden = true; };
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.closest('[data-close]')) close();
    if (e.target.closest('[data-level1]')) { close(); show(s1, s2); }
    if (e.target.closest('[data-sound]')) { const sb = $g('soundBtn'); if (sb) sb.click(); settings(); }
  });
  const soundOn = () => { const sb = $g('soundBtn'); return !sb || sb.getAttribute('aria-pressed') !== 'true'; };
  const settings = () => open(`<h2>Settings</h2><div class="row"><span>Sound</span><button class="small blue" data-sound>${soundOn() ? 'On' : 'Off'}</button></div>
    <button class="small" data-close>Close</button>`);
  play.addEventListener('click', () => show(s1, s2));
  back.addEventListener('click', () => show(s2, s1));
  bLevels.addEventListener('click', () => open(`<h2>Select Level</h2>
    <div class="row"><span>Level 1<br><b>Bubble Wash Kingdom</b></span><button class="small" data-level1>Play</button></div>
    <div class="row locked"><span>Level 2<br>Soap Lagoon</span><span>🔒</span></div>
    <div class="row locked"><span>Level 3<br>Suds City</span><span>🔒</span></div>
    <div class="row locked"><span>Level 4<br>Rainbow Rapids</span><span>🔒</span></div>
    <button class="small blue" data-close>Close</button>`));
  bChars.addEventListener('click', () => open(`<h2>Characters</h2>
    <div class="row who"><img src="ui/screens12/mascot_sprite.png" alt=""><span><b>Your pink fluffy hero</b><br>Rides the water slide into the washing machine.</span></div>
    <div class="row locked"><span>More friends</span><span>🔒</span></div>
    <button class="small blue" data-close>Close</button>`));
  bShop.addEventListener('click', () => open(`<h2>Shop</h2>
    <div class="row"><span>Your coins</span><b>${($g('coins') || {}).textContent || ''}</b></div>
    <div class="row"><span>Your gems</span><b>${($g('gems') || {}).textContent || ''}</b></div>
    <div class="row locked"><span>Items arrive in a later update</span><span>🔒</span></div>
    <button class="small blue" data-close>Close</button>`));
  bSet.addEventListener('click', settings); gear.addEventListener('click', settings);

  // START: the toss along the arrow, the dive into the tunnel, the hand-over to the live game
  start.addEventListener('click', () => {
    if (!ready()) return;
    clearInterval(gateT);
    s2.classList.add('off'); if (!ui6) { top.style.transition = 'opacity .35s'; top.style.opacity = '0'; } else { root.classList.add('playing'); window.addEventListener('bw:home-done', () => { ui6.dispose(); ui6.gameCaption(); }, { once: true }); }
    if (o3d) { o3d.play(); return; }   // ?s3=...,home,level1: the 3D toss, the washer entry and the hand-over (opening3d.js)
    const S = ART.sprite, w = art.clientWidth, k = w / ART.w;   // screen px per artwork px
    const p0 = { x: S.x + S.w / 2, y: S.y + S.h / 2 }, p1 = ART.arrow, p2 = ART.tunnel;
    sprite.style.animation = 'none'; sprite.style.transformOrigin = '50% 50%';
    // a puff of soap bubbles where she was
    const halo = el('div', 'fx');   // a soft burst of light where she was (over the repaired wall), fading as she flies
    Object.assign(halo.style, { left: `${p0.x * k}px`, top: `${p0.y * k}px`, width: `${S.w * 1.25 * k}px`, height: `${S.w * 1.25 * k}px`, transform: 'translate(-50%,-50%) scale(.8)',
      background: 'radial-gradient(circle, rgba(255,255,255,.95) 0 18%, rgba(255,200,245,.75) 40%, rgba(220,190,255,.35) 62%, rgba(220,190,255,0) 72%)', transition: 'transform 1.6s ease-out, opacity 1.6s ease-in', opacity: '1' });
    art.appendChild(halo); requestAnimationFrame(() => requestAnimationFrame(() => { halo.style.transform = 'translate(-50%,-50%) scale(1.25)'; halo.style.opacity = '0'; }));
    for (let i = 0; i < 22; i++) {
      const b = el('div', 'fx'), a = i / 22 * Math.PI * 2, r = 50 + (i % 3) * 26, sz = 30 + (i % 4) * 16;
      Object.assign(b.style, { left: `${(p0.x + Math.cos(a) * r * 0.4) * k}px`, top: `${(p0.y + Math.sin(a) * r * 0.4) * k}px`, width: `${sz * k}px`, height: `${sz * k}px`,
        background: 'radial-gradient(circle at 35% 30%, #fff 0 10%, rgba(255,255,255,.35) 25%, rgba(200,170,255,.35) 60%, rgba(255,190,240,.8) 100%)',
        transition: 'transform 1.5s cubic-bezier(.2,.7,.3,1), opacity 1.5s ease-in', transform: 'translate(-50%,-50%) scale(.6)', opacity: '1' });
      art.appendChild(b);
      requestAnimationFrame(() => requestAnimationFrame(() => { b.style.transform = `translate(calc(-50% + ${Math.cos(a) * r * k}px), calc(-50% + ${Math.sin(a) * r * k}px)) scale(1.5)`; b.style.opacity = '0'; }));
    }
    const T = 1150, t0 = performance.now();
    let lastSpark = 0;
    const fly = (now) => {
      const t = Math.min(1, (now - t0) / T), e = t * t * (1.6 - 0.6 * t);   // eases in, keeps speed into the tunnel
      const x = (1 - e) * (1 - e) * p0.x + 2 * (1 - e) * e * p1.x + e * e * p2.x, y = (1 - e) * (1 - e) * p0.y + 2 * (1 - e) * e * p1.y + e * e * p2.y;
      const sc = 1 - 0.9 * Math.pow(e, 1.2), rot = 330 * e;
      sprite.style.left = `${(x - S.w / 2) / ART.w * 100}%`; sprite.style.top = `${(y - S.h / 2) / ART.h * 100}%`;
      sprite.style.transform = `scale(${sc}) rotate(${rot}deg)`; sprite.style.opacity = String(t < 0.88 ? 1 : 1 - (t - 0.88) / 0.12);
      if (now - lastSpark > 45 && t < 0.95) {   // a sparkle trail behind her
        lastSpark = now;
        const sp = el('div', 'fx'); const sz = (16 + rnd() * 18) * k * (1 - 0.6 * e);
        Object.assign(sp.style, { left: `${x * k}px`, top: `${y * k}px`, width: `${sz}px`, height: `${sz}px`, transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle, #fff 0 18%, rgba(255,150,230,.85) 35%, rgba(255,150,230,0) 70%)', transition: 'opacity .6s ease-out, transform .6s ease-out', opacity: '1' });
        art.appendChild(sp); requestAnimationFrame(() => { sp.style.opacity = '0'; sp.style.transform = 'translate(-50%,-50%) scale(.3)'; });
      }
      if (t < 1) { requestAnimationFrame(fly); return; }
      dive();
    };
    requestAnimationFrame(fly);
    const dive = () => {
      holding = false;   // the game draws again: Screen 4 is ready under the dive
      const ox = p2.x * k, oy = p2.y * k;
      art.style.transformOrigin = `${ox}px ${oy}px`;
      art.style.transition = 'transform .95s cubic-bezier(.55,0,.85,.45)'; art.style.transform = 'scale(6)';
      const r = root.getBoundingClientRect(), a = art.getBoundingClientRect();
      glow.style.setProperty('--gx', `${(a.left + ox - r.left) / r.width * 100}%`); glow.style.setProperty('--gy', `${(a.top + oy - r.top) / r.height * 100}%`);
      glow.style.transition = 'opacity .55s ease-in .4s'; glow.style.opacity = '1';
      setTimeout(() => { root.style.transition = 'opacity .6s ease'; root.style.opacity = '0'; root.style.pointerEvents = 'none'; }, 1000);
      setTimeout(() => { clearInterval(syncT); root.remove(); window.dispatchEvent(new Event('bw:home-done')); }, 1650);
    };
  });
}
if (HOME_ON && typeof document !== 'undefined') {
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
}
