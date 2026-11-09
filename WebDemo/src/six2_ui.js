// six2 (9 November 2026, session 9ee07777): the interface of the user's six approved portrait screens (Design/ReferencePacks/
// 2026-11-09_Six_Approved_Portrait_Scenes_from_user/): the top bar (live hearts, coins, gems; settings; mail), the "Bubble Wash Kingdom" logo, the magenta
// "Laundry Toss!" plaque with its gold paw and stars, the numbered story caption, and the pink bottom bar with Home, the green Start and Shop.
// Start shows ONCE, on the waiting screen (scene 1); during the animated story only the top bar, logo, plaque and the scene's caption stay; the
// whole layer fades with the opening at the hand-over, and the scene 6 caption shows briefly over the live game, low, without blocking play.
// Sizes are in artwork pixels (--a: one pixel of the 864 x 1536 references on screen).
export const SIX2_CAPTIONS = { 1: 'The surprise hideout...', 2: 'She loads the laundry...', 3: 'Oops! He goes in too!', 4: 'The wash begins!', 5: 'Into the laundry tunnel!', 6: 'Swim, collect, and avoid enemies!' };
const PAW = '<svg viewBox="0 0 100 100"><ellipse cx="50" cy="64" rx="22" ry="18"/><ellipse cx="24" cy="40" rx="9" ry="11"/><ellipse cx="40" cy="27" rx="9" ry="11"/><ellipse cx="60" cy="27" rx="9" ry="11"/><ellipse cx="76" cy="40" rx="9" ry="11"/></svg>';
const STAR = '<svg viewBox="0 0 100 100"><path d="M50 4 L62 36 L96 38 L69 59 L79 93 L50 73 L21 93 L31 59 L4 38 L38 36 Z"/></svg>';
const CROWN = '<svg viewBox="0 0 120 70"><path d="M8 62 L14 18 L38 40 L60 6 L82 40 L106 18 L112 62 Z" fill="url(#cg)" stroke="#a86400" stroke-width="4" stroke-linejoin="round"/><defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff2a0"/><stop offset="0.5" stop-color="#ffc533"/><stop offset="1" stop-color="#e08a00"/></linearGradient></defs><circle cx="60" cy="40" r="7" fill="#ff4fa8"/><circle cx="34" cy="48" r="5" fill="#5ad0ff"/><circle cx="86" cy="48" r="5" fill="#5ad0ff"/></svg>';
const HOUSE = '<svg viewBox="0 0 100 100"><path d="M50 14 L90 50 L78 50 L78 86 L58 86 L58 62 L42 62 L42 86 L22 86 L22 50 L10 50 Z" fill="#fff"/></svg>';
const CART = '<svg viewBox="0 0 100 100"><path d="M8 18 L22 18 L32 62 L80 62 L90 30 L28 30" fill="none" stroke="#fff" stroke-width="9" stroke-linejoin="round" stroke-linecap="round"/><circle cx="38" cy="78" r="8" fill="#fff"/><circle cx="74" cy="78" r="8" fill="#fff"/></svg>';
const GEAR = '<svg viewBox="0 0 100 100"><path fill="#fff" d="M43 6h14l3 13 9 4 11-7 10 10-7 11 4 9 13 3v14l-13 3-4 9 7 11-10 10-11-7-9 4-3 13H43l-3-13-9-4-11 7-10-10 7-11-4-9-13-3V43l13-3 4-9-7-11 10-10 11 7 9-4z"/><circle cx="50" cy="50" r="15" fill="#7a3fd0"/></svg>';
const MAIL = '<svg viewBox="0 0 100 100"><rect x="12" y="26" width="76" height="52" rx="8" fill="#fff"/><path d="M14 30 L50 58 L86 30" fill="none" stroke="#9a5ae0" stroke-width="7" stroke-linejoin="round"/></svg>';
export const SIX2_CSS = `
#bwHome.six2 .s2 .title.toss, #bwHome.six2 .s2 .back, #bwHome.six2 .s2 .bottom { display: none; }
#bwHome.six2 .top .pill { background: linear-gradient(#6a34b8, #4a1f92); border: calc(var(--a) * 4) solid #c9a2ff; box-shadow: 0 calc(var(--a) * 4) 0 #2a0c5e, inset 0 calc(var(--a) * 3) 0 rgba(255,255,255,.25);
  font-size: calc(var(--a) * 30); height: calc(var(--a) * 56); top: calc(var(--a) * -8); }
#bwHome.six2 .top .pill .plus { width: calc(var(--a) * 40); height: calc(var(--a) * 40); right: calc(var(--a) * 4); border-radius: 50%; background: radial-gradient(circle at 40% 35%, #b8ff7a, #3cc33a 70%); color: #fff; font-size: calc(var(--a) * 36);
  display: flex; align-items: center; justify-content: center; line-height: 1; border: calc(var(--a) * 3) solid #eaffd0; box-sizing: border-box; text-shadow: 0 calc(var(--a) * 2) 0 #157a1a; }
#bwHome.six2 .top .gear { display: none; }
#bwHome.six2 .s6sq { position: absolute; width: calc(var(--a) * 80); height: calc(var(--a) * 78); border-radius: calc(var(--a) * 20); background: linear-gradient(#a86af0, #6a2fc8); border: calc(var(--a) * 5) solid #ffd36a;
  box-shadow: 0 calc(var(--a) * 5) 0 #4a1a8a; display: flex; align-items: center; justify-content: center; box-sizing: border-box; }
#bwHome.six2 .s6sq svg { width: 66%; height: 66%; }
#bwHome .s6layer { position: absolute; inset: 0; pointer-events: none; transition: opacity .5s ease; }
#bwHome .s6layer > * { pointer-events: auto; }
#bwHome .s6logo { position: absolute; left: 50%; top: calc(var(--a) * 4 + env(safe-area-inset-top, 0px)); transform: translateX(-50%); text-align: center; line-height: .86; pointer-events: none; }
#bwHome .s6logo .crown { width: calc(var(--a) * 96); height: calc(var(--a) * 56); display: block; margin: 0 auto calc(var(--a) * -12); }
#bwHome .s6logo b { display: block; font-size: calc(var(--a) * 52); font-weight: 700; color: #fff; letter-spacing: calc(var(--a) * -0.5);
  text-shadow: 0 0 0 #2a5fd8, calc(var(--a) * 3) 0 0 #2a5fd8, calc(var(--a) * -3) 0 0 #2a5fd8, 0 calc(var(--a) * 3) 0 #2a5fd8, 0 calc(var(--a) * -3) 0 #2a5fd8, 0 calc(var(--a) * 7) 0 #173a9e; transform: rotate(-4deg); }
#bwHome .s6logo i { display: block; font-style: normal; font-size: calc(var(--a) * 60); font-weight: 700; color: #ffd23a; margin-top: calc(var(--a) * 2);
  text-shadow: calc(var(--a) * 3) 0 0 #e0560e, calc(var(--a) * -3) 0 0 #e0560e, 0 calc(var(--a) * 3) 0 #e0560e, 0 calc(var(--a) * -3) 0 #e0560e, 0 calc(var(--a) * 7) 0 #a0300a; transform: rotate(-4deg); }
#bwHome .s6logo .foam { position: absolute; left: -12%; right: -12%; bottom: calc(var(--a) * -6); height: calc(var(--a) * 34); z-index: -1;
  background: radial-gradient(circle at 12% 60%, #fff 0 22%, transparent 23%), radial-gradient(circle at 30% 45%, #f4f0ff 0 26%, transparent 27%), radial-gradient(circle at 52% 60%, #fff 0 24%, transparent 25%),
    radial-gradient(circle at 72% 45%, #f0ecff 0 26%, transparent 27%), radial-gradient(circle at 90% 60%, #fff 0 22%, transparent 23%); filter: drop-shadow(0 calc(var(--a) * 3) 0 #b9a2ee); }
#bwHome .s6plaque { position: absolute; left: 50%; top: calc(var(--a) * 196 + env(safe-area-inset-top, 0px)); transform: translateX(-50%); width: calc(var(--a) * 620); height: calc(var(--a) * 132); pointer-events: none;
  border-radius: calc(var(--a) * 58); background: linear-gradient(#ff7cc8, #f03aa6 45%, #c41686); border: calc(var(--a) * 9) solid #ffd060;
  box-shadow: inset 0 0 0 calc(var(--a) * 5) #ff9bd6, 0 calc(var(--a) * 8) 0 #8a0f5e, 0 0 calc(var(--a) * 30) rgba(255,150,220,.7); display: flex; align-items: center; justify-content: center; box-sizing: border-box; }
#bwHome .s6plaque span { font-size: calc(var(--a) * 84); font-weight: 700; color: #fff; letter-spacing: calc(var(--a) * -1);
  text-shadow: calc(var(--a) * 4) 0 0 #6a1a9a, calc(var(--a) * -4) 0 0 #6a1a9a, 0 calc(var(--a) * 4) 0 #6a1a9a, 0 calc(var(--a) * -4) 0 #6a1a9a, 0 calc(var(--a) * 8) 0 #4a0c70; }
#bwHome .s6plaque .paw { position: absolute; left: 50%; top: calc(var(--a) * -62); transform: translateX(-50%); width: calc(var(--a) * 100); height: calc(var(--a) * 100); border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #fff6c0, #ffc93a 45%, #d98a00); border: calc(var(--a) * 6) solid #ffe9a0; box-shadow: 0 calc(var(--a) * 5) 0 #9a5a00; display: flex; align-items: center; justify-content: center; }
#bwHome .s6plaque .paw svg { width: 62%; height: 62%; fill: #fff3c8; filter: drop-shadow(0 calc(var(--a) * 2) 0 #c07a00); }
#bwHome .s6plaque .star { position: absolute; top: 50%; width: calc(var(--a) * 74); height: calc(var(--a) * 74); transform: translateY(-50%); fill: #ffd84a; filter: drop-shadow(0 calc(var(--a) * 3) 0 #c08000); }
#bwHome .s6plaque .star.l { left: calc(var(--a) * -46); } #bwHome .s6plaque .star.r { right: calc(var(--a) * -46); }
#bwHome .s6cap { position: absolute; left: 50%; top: calc(var(--a) * 1196); transform: translateX(-50%); height: calc(var(--a) * 92); display: flex; align-items: center; pointer-events: none; transition: opacity .35s ease; }
#bwHome .s6cap .n { position: relative; z-index: 1; width: calc(var(--a) * 112); height: calc(var(--a) * 112); border-radius: 50%; background: radial-gradient(circle at 40% 35%, #ff9ad2, #f0378e 60%, #c8106a);
  border: calc(var(--a) * 6) solid #fff; box-shadow: 0 calc(var(--a) * 4) 0 #8a0a48; display: flex; align-items: center; justify-content: center; font-size: calc(var(--a) * 70); font-weight: 700; color: #fff;
  text-shadow: 0 calc(var(--a) * 4) 0 #8a0a48; box-sizing: border-box; }
#bwHome .s6cap .t { margin-left: calc(var(--a) * -26); height: calc(var(--a) * 84); padding: 0 calc(var(--a) * 34) 0 calc(var(--a) * 44); border-radius: calc(var(--a) * 42); background: linear-gradient(#8a4ae6, #5a20b0);
  border: calc(var(--a) * 4) solid #e2c8ff; box-shadow: 0 calc(var(--a) * 4) 0 #3a0c7a; display: flex; align-items: center; font-size: calc(var(--a) * 44); font-weight: 600; color: #fff; white-space: nowrap;
  text-shadow: 0 calc(var(--a) * 3) 0 #3a0c7a; box-sizing: border-box; }
#bwHome .s6bar { position: absolute; left: 0; right: 0; bottom: 0; height: calc(var(--a) * 196 + env(safe-area-inset-bottom, 0px)); background: linear-gradient(#ff7ec0, #f04aa0 40%, #e0358e);
  border-top: calc(var(--a) * 5) solid #ffb2dc; border-radius: calc(var(--a) * 40) calc(var(--a) * 40) 0 0; transition: opacity .35s ease, transform .35s ease; }
#bwHome .s6bar .home, #bwHome .s6bar .shop { position: absolute; top: calc(var(--a) * 50); width: calc(var(--a) * 122); height: calc(var(--a) * 112); left: calc(var(--a) * 32); }
#bwHome .s6bar .shop { left: auto; right: calc(var(--a) * 30); }
#bwHome .s6bar .startgo { position: absolute; left: 50%; top: calc(var(--a) * 10); transform: translateX(-50%); width: calc(var(--a) * 444); height: calc(var(--a) * 150); border-radius: calc(var(--a) * 75);
  background: linear-gradient(#c8ff7a 0 18%, #6ae03a 45%, #2fb02a 80%, #1f8e22); border: calc(var(--a) * 7) solid #f0ffd8; box-shadow: 0 calc(var(--a) * 9) 0 #136a18, 0 calc(var(--a) * 16) calc(var(--a) * 24) rgba(60,0,60,.3);
  color: #fff; font-size: calc(var(--a) * 84); font-weight: 700; display: flex; align-items: center; justify-content: center; gap: calc(var(--a) * 24);
  text-shadow: calc(var(--a) * 3) 0 0 #1a7a1e, calc(var(--a) * -3) 0 0 #1a7a1e, 0 calc(var(--a) * 4) 0 #1a7a1e, 0 calc(var(--a) * 6) 0 #10561a; }
#bwHome .s6bar .startgo .tri { width: 0; height: 0; border-top: calc(var(--a) * 30) solid transparent; border-bottom: calc(var(--a) * 30) solid transparent; border-left: calc(var(--a) * 44) solid #fff; filter: drop-shadow(0 calc(var(--a) * 4) 0 #1a7a1e); }
#bwHome .s6bar .startgo:active { transform: translateX(-50%) translateY(calc(var(--a) * 5)); }
#bwHome .s6bar .startgo[disabled] { filter: saturate(.4) brightness(.92); }
#bwHome.six2.playing .s6bar { opacity: 0; transform: translateY(40%); pointer-events: none; }
#bwHome.six2.playing .s6sq { opacity: 0; pointer-events: none; transition: opacity .35s; }
#bwHome.six2.home1 .s6layer { opacity: 0; pointer-events: none; }
.bw6cap { position: fixed; left: 50%; bottom: calc(14vh); transform: translateX(-50%); z-index: 9000; display: flex; align-items: center; pointer-events: none; font-family: var(--display, 'Fredoka', system-ui, sans-serif); transition: opacity .6s ease; }
`;
export function buildSix2UI({ root, top, startBtn, onHome, onShop, onSettings }) {
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  root.classList.add('six2', 'home1');
  // the top bar: the reference's purple pills (live values), settings at the left under the hearts, mail at the right under the gems
  const pills = top.querySelectorAll('.pill');
  const place = [[14, 214], [560, 166], [726, 130]];
  pills.forEach((p, i) => { if (!place[i]) return; p.style.left = `${place[i][0] / 864 * 100}%`; p.style.width = `${place[i][1] / 864 * 100}%`; if (i && !p.querySelector('.plus')) p.insertAdjacentHTML('beforeend', '<b class="plus">+</b>'); });
  const layer = el('div', 's6layer');
  const set = el('button', 's6sq', GEAR); set.setAttribute('aria-label', 'Settings'); Object.assign(set.style, { left: `${20 / 864 * 100}%`, top: 'calc(var(--a) * 92 + env(safe-area-inset-top, 0px))' });
  const mail = el('button', 's6sq', MAIL + '<i style="position:absolute;right:-18%;top:-18%;width:42%;height:42%;border-radius:50%;background:#ff3a4a;border:calc(var(--a)*3) solid #fff;color:#fff;font-style:normal;font-weight:700;font-size:calc(var(--a)*26);display:flex;align-items:center;justify-content:center">!</i>');
  mail.setAttribute('aria-label', 'Messages'); Object.assign(mail.style, { right: `${24 / 864 * 100}%`, top: 'calc(var(--a) * 92 + env(safe-area-inset-top, 0px))' });
  set.addEventListener('click', onSettings); mail.addEventListener('click', onSettings);
  const logo = el('div', 's6logo', `<span class="crown">${CROWN}</span><div style="position:relative"><b>Bubble Wash</b><i>Kingdom</i><span class="foam"></span></div>`);
  const plaque = el('div', 's6plaque', `<span class="paw">${PAW}</span><span class="star l">${STAR}</span><span>Laundry Toss!</span><span class="star r">${STAR}</span>`);
  const cap = el('div', 's6cap', '<span class="n">1</span><span class="t"></span>');
  const bar = el('div', 's6bar');
  const home = el('button', 's6sq home', HOUSE); home.setAttribute('aria-label', 'Home');
  const shop = el('button', 's6sq shop', CART); shop.setAttribute('aria-label', 'Shop');
  const go = el('button', 'startgo', 'Start <span class="tri"></span>'); go.setAttribute('aria-label', 'Start the adventure');
  bar.append(home, go, shop);
  layer.append(logo, plaque, cap, bar, set, mail);
  root.insertBefore(layer, top);
  home.addEventListener('click', onHome); shop.addEventListener('click', onShop);
  go.addEventListener('click', () => { if (startBtn.disabled) return; root.classList.add('playing'); startBtn.click(); });
  const sync = () => { go.disabled = startBtn.disabled; };
  const syncT = setInterval(sync, 300); sync();
  const setScene = (n) => { cap.querySelector('.n').textContent = String(n); cap.querySelector('.t').textContent = SIX2_CAPTIONS[n] || ''; if (n >= 5) plaque.style.opacity = '0'; };
  setScene(1);
  return {
    layer, setScene,
    showToss: () => root.classList.remove('home1'), showHome: () => root.classList.add('home1'),
    dispose: () => clearInterval(syncT),
    // scene 6: the caption over the live game for a moment (low, no buttons), then it fades
    gameCaption: () => { const c = el('div', 'bw6cap'); c.innerHTML = cap.innerHTML; c.querySelector('.n').textContent = '6'; c.querySelector('.t').textContent = SIX2_CAPTIONS[6];
      const st = document.createElement('style'); st.textContent = SIX2_CSS.replace(/#bwHome \.s6cap/g, '.bw6cap').replace(/var\(--a\)/g, `${Math.max(innerWidth / 864, innerHeight / 1536)}px`); document.head.appendChild(st);
      c.style.opacity = '0'; document.body.appendChild(c); requestAnimationFrame(() => { c.style.opacity = '1'; }); setTimeout(() => { c.style.opacity = '0'; }, 3200); setTimeout(() => { c.remove(); st.remove(); }, 4000); },
  };
}
