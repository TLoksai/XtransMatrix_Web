const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');

    :root {
      --blue: #1A6BFF;
      --blue-d: #0D47C8;
      --blue-l: #4D8FFF;
      --blue-xl: #8AB4FF;
      --orange: #FF7A5C;
      --purple: #7C3AED;
      --purple-l: #9D5FF5;
      --bg: #06080E;
      --s1: #0C0F1A;
      --s2: #111626;
      --b1: rgba(26,107,255,0.12);
      --b2: rgba(26,107,255,0.22);
      --g2: #E2E5EF;
      --g3: #A0A8BC;
      --g4: #5A6278;
      --mono: 'JetBrains Mono', monospace;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: auto; }
    body {
      background: var(--bg);
      color: #fff;
      font-family: 'Inter', -apple-system, sans-serif;
      overflow-x: hidden;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background:
        radial-gradient(ellipse 90% 70% at 5% 0%, rgba(13,71,200,0.32) 0%, transparent 55%),
        radial-gradient(ellipse 50% 40% at 95% 15%, rgba(26,107,255,0.12) 0%, transparent 50%),
        radial-gradient(ellipse 60% 50% at 50% 100%, rgba(8,18,60,0.5) 0%, transparent 60%),
        var(--bg);
      animation: bgdrift 18s ease-in-out infinite alternate;
    }

    @keyframes bgdrift { from { opacity:.7; } to { opacity:1; } }
    @keyframes fIn  { from { opacity:0; } to { opacity:1; } }
    @keyframes fUp  { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
    @keyframes sUp  { from { opacity:0; transform:translateY(105%); } to { opacity:1; transform:translateY(0); } }
    @keyframes mq   { from { transform:translateX(0); } to { transform:translateX(-50%); } }
    @keyframes pdot { 0%,100%{transform:scale(1);opacity:1;} 50%{transform:scale(1.75);opacity:0;} }

    .anim-fIn { animation: fIn .7s forwards; }
    .anim-fUp { animation: fUp .6s .3s forwards; opacity:0; }

    .line-clip  { overflow:hidden; display:block; }
    .line-inner { display:inline-block; opacity:0; transform:translateY(105%); animation:sUp .9s cubic-bezier(.16,1,.3,1) forwards; }
    .l1 .line-inner { animation-delay:.3s; }
    .l2 .line-inner { animation-delay:.44s; }
    .l3 .line-inner { animation-delay:.58s; }
    .l4 .line-inner { animation-delay:.72s; }

    .mq-track { display:flex; gap:64px; animation:mq 28s linear infinite; width:max-content; align-items:center; }

    .bracket-btn {
      display:inline-flex; align-items:center; gap:0;
      font-family:var(--mono); font-size:12px; font-weight:500;
      letter-spacing:.1em; text-transform:uppercase;
      text-decoration:none; color:#fff; border:none; background:none; cursor:pointer;
      transition:color .2s;
    }
    .bracket-btn .br { color:var(--blue); font-size:14px; transition:transform .3s,color .2s; }
    .bracket-btn:hover { color:var(--blue); }
    .bracket-btn:hover .br { transform:scale(1.2); }
    .bracket-btn .inner { border-top:1px solid var(--b2); border-bottom:1px solid var(--b2); padding:10px 16px; }

    .s-label {
      font-family:var(--mono); font-size:10px; letter-spacing:.22em; text-transform:uppercase;
      color:var(--blue); margin-bottom:20px; display:flex; align-items:center; gap:12px;
    }
    .s-label::before { content:''; width:20px; height:1px; background:var(--blue); }

    .reveal { opacity:0; transform:translateY(28px); transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); }
    .reveal.vis { opacity:1; transform:translateY(0); }
    .d1{transition-delay:.1s;} .d2{transition-delay:.2s;} .d3{transition-delay:.3s;}

    .hcard { flex:0 0 340px; height:520px; border-radius:0; position:relative; overflow:hidden; cursor:default; transition:flex .5s cubic-bezier(.16,1,.3,1); }
    .hcard:hover { flex:0 0 420px; }
    .hcard-bg { position:absolute; inset:0; transition:transform .6s cubic-bezier(.16,1,.3,1); }
    .hcard:hover .hcard-bg { transform:scale(1.04); }
    .hcard-1 .hcard-bg { background:var(--s1); border:1px solid var(--b1); }
    .hcard-2 .hcard-bg { background:var(--blue-d); }
    .hcard-3 .hcard-bg { background:#0a1628; }
    .hcard-4 .hcard-bg { background:rgba(26,107,255,0.15); border:1px solid var(--b2); }
    .hcard-content { position:absolute; inset:0; padding:32px; display:flex; flex-direction:column; justify-content:space-between; }
    .hcard-num   { font-family:var(--mono); font-size:10px; letter-spacing:.2em; color:rgba(255,255,255,.35); }
    .hcard-title { font-size:clamp(22px,2.2vw,32px); font-weight:900; letter-spacing:-.03em; text-transform:uppercase; line-height:1.0; }
    .hcard-desc  { font-family:var(--mono); font-size:10px; color:rgba(255,255,255,.5); line-height:1.85; letter-spacing:.04em; text-transform:uppercase; }
    .hcard-visual { flex:1; display:flex; align-items:center; justify-content:center; }

    .mscroll-item { padding:28px 48px; border-bottom:1px solid var(--b1); display:grid; grid-template-columns:160px 1fr 1fr; align-items:center; gap:32px; opacity:.2; transition:opacity .4s; }
    .mscroll-item.active { opacity:1; }

    .qa-cell { background:var(--s1); border:1px solid var(--b1); padding:48px; position:relative; overflow:hidden; transition:all .35s; cursor:default; }
    .qa-cell:hover { background:var(--s2); border-color:var(--b2); }
    .qa-cell::after { content:''; position:absolute; bottom:0; left:0; right:0; height:1px; background:var(--blue); transform:scaleX(0); transform-origin:left; transition:transform .5s cubic-bezier(.16,1,.3,1); }
    .qa-cell:hover::after { transform:scaleX(1); }

    .num-cell { padding:64px 40px; text-align:center; background:var(--s1); border:1px solid var(--b1); transition:background .3s; cursor:default; position:relative; overflow:hidden; }
    .num-cell::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 100%,rgba(26,107,255,.08),transparent 70%); opacity:0; transition:opacity .4s; }
    .num-cell:hover { background:var(--s2); }
    .num-cell:hover::before { opacity:1; }

    .plat-cell { padding:48px; background:var(--s1); border:1px solid var(--b1); transition:background .3s; }
    .plat-cell:hover { background:var(--s2); }
    .pill-g { font-size:9px; font-weight:700; padding:3px 8px; background:rgba(26,107,255,.12); border:1px solid var(--b1); color:var(--blue-xl); letter-spacing:.08em; }
    .pill-r { font-size:9px; font-weight:700; padding:3px 8px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07); color:var(--g4); letter-spacing:.08em; }
    .cmp-table { width:100%; border-collapse:collapse; margin-top:40px; }
    .cmp-table th { font-family:var(--mono); font-size:9px; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:var(--g4); padding:10px 0; border-bottom:1px solid var(--b1); text-align:left; }
    .cmp-table th:last-child { color:var(--blue); text-align:right; }
    .cmp-table td { font-family:var(--mono); font-size:10px; padding:11px 0; border-bottom:1px solid rgba(255,255,255,.04); color:var(--g3); vertical-align:middle; }
    .cmp-table td:first-child { color:var(--g2); }
    .cmp-table td:last-child { text-align:right; }
    .cmp-table tr:last-child td { border-bottom:none; }

    .ait-prop { background:rgba(255,122,92,.05); border:1px solid rgba(255,122,92,.1); padding:16px; font-family:var(--mono); font-size:9px; letter-spacing:.16em; text-transform:uppercase; color:rgba(255,255,255,.5); }
    .ait-prop strong { display:block; font-size:14px; font-weight:800; letter-spacing:-.01em; color:#fff; font-family:'Inter',sans-serif; margin-bottom:4px; }

    .nav-dropdown-item { display:block; font-size:11.5px; font-weight:500; color:rgba(255,255,255,.55); text-decoration:none; padding:7px 12px; border-radius:6px; transition:background .15s,color .15s; }
    .nav-dropdown-item:hover { background:rgba(255,255,255,.06); color:#fff; }

    #prog { position:fixed; top:0; left:0; right:0; height:2px; background:var(--blue); transform-origin:left; transform:scaleX(0); z-index:999; transition:transform .08s; }
  `}</style>
);

export default GlobalStyles;