import { useEffect, useRef, useState } from 'react';

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@700;800;900&display=swap');
  :root {
    --blue:#1A6BFF; --blue-d:#0D47C8; --blue-l:#4D8FFF; --blue-xl:#8AB4FF;
    --orange:#FF7A5C;
    --bg:#06080E; --s1:#0C0F1A; --s2:#111626;
    --b1:rgba(26,107,255,0.12); --b2:rgba(26,107,255,0.22);
    --g2:#E2E5EF; --g3:#A0A8BC; --g4:#5A6278;
    --mono:'JetBrains Mono',monospace;
    --display:'Syne',sans-serif;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: auto; }
  body { background: var(--bg); color: #fff; overflow-x: hidden; font-family: var(--mono); }
  .bg-gradient-mesh {
    background: radial-gradient(ellipse 90% 70% at 5% 0%, rgba(13,71,200,0.32) 0%, transparent 55%),
      radial-gradient(ellipse 50% 40% at 95% 15%, rgba(26,107,255,0.12) 0%, transparent 50%),
      radial-gradient(ellipse 60% 50% at 50% 100%, rgba(8,18,60,0.5) 0%, transparent 60%),
      var(--bg);
  }
  .font-display { font-family: var(--display); }
  .font-mono    { font-family: var(--mono); }
  .text-hero  { font-size: clamp(52px,5.5vw,88px); line-height:.92;letter-spacing:-.05em; }
  .text-section { font-size: clamp(36px,4vw,64px);  line-height:.95;letter-spacing:-.045em; }
  .text-card  { font-size: clamp(22px,2.2vw,32px); letter-spacing:-.03em;line-height:1.0; }
  .text-ai    { font-size: clamp(36px,3.5vw,56px); letter-spacing:-.04em;line-height:.95; }
  .text-cta   { font-size: clamp(40px,4.5vw,72px); letter-spacing:-.05em;line-height:.92; }
  .text-blue   { color: var(--blue);   }
  .text-blue-xl{ color: var(--blue-xl);}
  .text-orange { color: var(--orange); }
  .text-g2     { color: var(--g2);     }
  .text-g3     { color: var(--g3);     }
  .text-g4     { color: var(--g4);     }
  .border-b1 { border-color: var(--b1); }
  .border-b2 { border-color: var(--b2); }
  .bg-s1     { background: var(--s1);  }
  .bg-s2     { background: var(--s2);  }
  #progress-bar { position:fixed;top:0;left:0;right:0;height:2px;background:var(--blue);transform-origin:left;z-index:9999;pointer-events:none; }
  nav.scrolled { background:rgba(6,8,14,0.82);backdrop-filter:blur(20px);border-bottom:1px solid var(--b1); }
  @keyframes fadeIn  { from{opacity:0}        to{opacity:1} }
  @keyframes fadeUp  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes slideUp { from{opacity:0;transform:translateY(105%)} to{opacity:1;transform:translateY(0)} }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .anim-fade-in { opacity:0;animation:fadeIn  .7s forwards; }
  .anim-fade-up { opacity:0;animation:fadeUp  .6s forwards; }
  .hero-line span { display:inline-block;opacity:0;transform:translateY(105%);animation:slideUp .9s cubic-bezier(.16,1,.3,1) forwards; }
  .reveal     { opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); }
  .reveal.vis { opacity:1;transform:translateY(0); }
  .d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}
  .mq-track { display:flex;gap:64px;animation:marquee 28s linear infinite;width:max-content;align-items:center; }
  .bracket-btn { display:inline-flex;align-items:center;gap:0;font-family:var(--mono);font-size:12px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:#fff;border:none;background:none;cursor:pointer;transition:color .2s; }
  .bracket-btn .br { color:var(--blue);font-size:14px;transition:transform .3s,color .2s; }
  .bracket-btn:hover { color:var(--blue); }
  .bracket-btn:hover .br { transform:scale(1.2); }
  .bracket-btn .inner { border-top:1px solid var(--b2);border-bottom:1px solid var(--b2);padding:10px 16px; }
  .hstat-n { font-size:52px;font-weight:900;letter-spacing:-.04em;line-height:1; }
  .hstat-l { font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--g3);margin-top:6px; }
  .hcard { flex:0 0 340px;height:520px;position:relative;overflow:hidden;cursor:default;transition:flex .5s cubic-bezier(.16,1,.3,1); }
  .hcard:hover { flex:0 0 420px; }
  .hcard-bg { position:absolute;inset:0;transition:transform .6s cubic-bezier(.16,1,.3,1); }
  .hcard:hover .hcard-bg { transform:scale(1.04); }
  .mscroll-item { opacity:.2;transition:opacity .4s; }
  .mscroll-item.active { opacity:1; }
  .cmp-table { width:100%;border-collapse:collapse;margin-top:40px; }
  .cmp-table th { font-family:var(--mono);font-size:9px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--g4);padding:10px 0;border-bottom:1px solid var(--b1);text-align:left; }
  .cmp-table th:last-child { color:var(--blue);text-align:right; }
  .cmp-table td { font-family:var(--mono);font-size:10px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.04);color:var(--g3);vertical-align:middle; }
  .cmp-table td:first-child { color:var(--g2); }
  .cmp-table td:last-child { text-align:right; }
  .cmp-table tr:last-child td { border-bottom:none; }
  .pill-g { font-size:9px;font-weight:700;padding:3px 8px;background:rgba(26,107,255,.12);border:1px solid var(--b1);color:var(--blue-xl);letter-spacing:.08em; }
  .pill-r { font-size:9px;font-weight:700;padding:3px 8px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);color:var(--g4);letter-spacing:.08em; }
  .qa-cell { position:relative;overflow:hidden;transition:all .35s;cursor:default; }
  .qa-cell::after { content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:var(--blue);transform:scaleX(0);transform-origin:left;transition:transform .5s cubic-bezier(.16,1,.3,1); }
  .qa-cell:hover::after { transform:scaleX(1); }
  .qa-cell-n { font-family:var(--mono);font-size:48px;font-weight:900;color:rgba(26,107,255,.12);line-height:1;margin-bottom:16px; }
  .num-cell { position:relative;overflow:hidden;transition:background .3s;cursor:default; }
  .num-cell::before { content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 100%,rgba(26,107,255,.08),transparent 70%);opacity:0;transition:opacity .4s; }
  .num-cell:hover::before { opacity:1; }
  .aitank-right::before { content:'';position:absolute;top:-100px;right:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(255,122,92,.1),transparent 65%); }
  .nav-cta { background:transparent;border:1px solid var(--b2);color:var(--blue-xl);font-size:11px;font-weight:700;padding:8px 18px;letter-spacing:.1em;text-transform:uppercase;transition:all .2s;cursor:pointer;text-decoration:none; }
  .nav-cta:hover { background:var(--blue);color:#fff;border-color:var(--blue); }
  .s-label { font-family:var(--mono);font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--blue);margin-bottom:20px;display:flex;align-items:center;gap:12px; }
  .s-label::before { content:'';width:20px;height:1px;background:var(--blue); }
  canvas { display:block; }
`;

function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const onScroll = () => {
      const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return scrolled;
}

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("vis"); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function HeroCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W = 0, H = 0, dots = [], rotX = 0, rotY = 0, tick = 0, mouseX = 0, mouseY = 0, raf;
    const N = 900;
    const resize = () => { W = c.width = c.offsetWidth || window.innerWidth; H = c.height = c.offsetHeight || window.innerHeight; buildDots(); };
    const buildDots = () => {
      dots = [];
      const cx = W * .62, cy = H * .48, R = Math.min(W, H) * .26;
      const phi = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), theta = phi * i;
        dots.push({ ox: r * Math.cos(theta) * R, oy: y * R, oz: r * Math.sin(theta) * R, r: Math.random() * 1.2 + .4, baseA: (.3 + r * Math.sin(theta) * .5) * (.7 + Math.random() * .3), cx, cy });
      }
    };
    const onMove = e => { mouseX = e.clientX; mouseY = e.clientY; };
    const draw = () => {
      ctx.clearRect(0, 0, W, H); tick++;
      ctx.strokeStyle = "rgba(26,107,255,0.04)"; ctx.lineWidth = .5;
      for (let x = 0; x < W; x += 72) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 72) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      const tx = ((mouseY / H) - .5) * .4, ty = ((mouseX / W) - .5) * .4 + tick * .0008;
      rotX += (tx - rotX) * .03; rotY += (ty - rotY) * .03;
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX), cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cx = W * .62, cy = H * .48;
      const proj = dots.map(d => {
        let x = d.ox, y = d.oy, z = d.oz;
        let nx = x * cosY + z * sinY, nz = -x * sinY + z * cosY; x = nx; z = nz;
        let ny = y * cosX - z * sinX, nz2 = y * sinX + z * cosX; y = ny; z = nz2;
        const depth = (z + 1) / 2;
        return { sx: cx + x, sy: cy + y, z, depth, r: d.r * (.5 + depth * .8), a: d.baseA * (.3 + depth * .8) };
      });
      proj.sort((a, b) => a.z - b.z);
      proj.forEach(p => { ctx.beginPath(); ctx.arc(p.sx, p.sy, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(200,210,255,${p.a * .85})`; ctx.fill(); });
      raf = requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMove); };
  }, []);
  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }} />;
}

function CTACanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W, H, raf;
    const nodes = Array.from({ length: 35 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .0002, vy: (Math.random() - .5) * .0002 }));
    const resize = () => { const r = c.parentElement.getBoundingClientRect(); W = c.width = r.width; H = c.height = r.height; };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      nodes.forEach(n => { n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > 1) n.vx *= -1; if (n.y < 0 || n.y > 1) n.vy *= -1; });
      nodes.forEach((a, i) => nodes.slice(i + 1).forEach(b => {
        const dx = (a.x - b.x) * W, dy = (a.y - b.y) * H, d = Math.hypot(dx, dy);
        if (d < 200) { ctx.strokeStyle = `rgba(26,107,255,${(1 - d / 200) * .12})`; ctx.lineWidth = .5; ctx.beginPath(); ctx.moveTo(a.x * W, a.y * H); ctx.lineTo(b.x * W, b.y * H); ctx.stroke(); }
      }));
      nodes.forEach(n => { ctx.beginPath(); ctx.arc(n.x * W, n.y * H, 1.5, 0, Math.PI * 2); ctx.fillStyle = "rgba(26,107,255,0.3)"; ctx.fill(); });
      raf = requestAnimationFrame(draw);
    };
    resize(); window.addEventListener("resize", resize); draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />;
}

function CardCanvas({ type, color }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const p = c.parentElement; if (!p) return;
    const W = c.width = p.offsetWidth || 280;
    const H = c.height = p.offsetHeight || 200;
    const ctx = c.getContext("2d");
    let t = 0, raf;
    const variants = {
      dots: () => {
        ctx.clearRect(0, 0, W, H);
        const cols = Math.floor(W / 12), rows = Math.floor(H / 12);
        for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
          const wave = Math.sin(i * .3 + j * .3 + t) * .5 + .5;
          ctx.beginPath(); ctx.arc(i * 12 + 6, j * 12 + 6, wave * 2.5 + .3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color},${wave * .6 + .1})`; ctx.fill();
        }
        t += .025;
      },
      wave: () => {
        ctx.clearRect(0, 0, W, H);
        for (let k = 0; k < 5; k++) {
          ctx.beginPath();
          for (let x = 0; x <= W; x += 2) {
            const y = H / 2 + Math.sin(x * .025 + t + k * .6) * ((k + 1) * 14) * Math.sin(x * .005 + t * .3);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(${color},${.12 + k * .06})`; ctx.lineWidth = 1.2; ctx.stroke();
        }
        t += .015;
      },
      radial: () => {
        ctx.clearRect(0, 0, W, H);
        const cx = W / 2, cy = H / 2;
        for (let i = 0; i < 60; i++) {
          const angle = (i / 60) * Math.PI * 2;
          const r1 = 30 + Math.sin(t + i * .2) * 8, r2 = 80 + Math.cos(t * .7 + i * .15) * 30 + i * 1.2;
          ctx.strokeStyle = `rgba(${color},${.05 + Math.sin(t + i * .1) * .04})`; ctx.lineWidth = .8;
          ctx.beginPath(); ctx.moveTo(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1); ctx.lineTo(cx + Math.cos(angle) * r2, cy + Math.sin(angle) * r2); ctx.stroke();
        }
        for (let i = 0; i < 40; i++) {
          const a = (i / 40) * Math.PI * 2 + t * .05, r = 40 + Math.sin(t * .5 + i) * 25;
          ctx.beginPath(); ctx.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color},${.4 + Math.sin(t + i) * .3})`; ctx.fill();
        }
        t += .012;
      },
      bars: () => {
        ctx.clearRect(0, 0, W, H);
        const bars = 40, bw = Math.max(1, (W - 60) / bars);
        for (let i = 0; i < bars; i++) {
          const h = Math.max(4, (Math.sin(i * .3 + t) * Math.sin(i * .1 + t * .7) + 1) * H * .3 + 4);
          ctx.fillStyle = `rgba(${color},${.2 + Math.abs(Math.sin(i * .3 + t)) * .5})`;
          ctx.fillRect(30 + i * bw, (H - h) / 2, bw * .7, h);
        }
        t += .04;
      }
    };
    const fn = variants[type];
    const loop = () => { fn(); raf = requestAnimationFrame(loop); };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [type, color]);
  return <canvas ref={ref} style={{ width: "100%", height: "100%" }} />;
}

function HScrollSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  useEffect(() => {
    const update = () => {
      const section = sectionRef.current, track = trackRef.current;
      if (!section || !track) return;
      const rect = section.getBoundingClientRect();
      const sH = section.offsetHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / (sH - window.innerHeight)));
      const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
      track.style.transform = `translateX(-${progress * maxScroll}px)`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const cards = [
    { num: "01 / 04", title: "Robotics &\nPhysical AI",    desc: "MCAP-native · LiDAR · Sensor fusion · 3D point clouds",  bg: "bg-s1 border border-b1", type: "dots",   color: "100,160,255" },
    { num: "02 / 04", title: "Image\nAnnotation",          desc: "Bounding boxes · Segmentation · Keypoints · COCO · YOLO", bg: "bg-blue-d",              type: "wave",   color: "150,190,255" },
    { num: "03 / 04", title: "Video\nIntelligence",        desc: "MOT · Action recognition · Egocentric · 8–12 cam sync",  bg: "bg-[#0a1628]",           type: "radial", color: "100,150,255" },
    { num: "04 / 04", title: "Audio &\nSpeech AI",         desc: "ASR · Diarization · Emotion · 15+ languages · IPA",      bg: "bg-b1 border border-b2",  type: "bars",   color: "130,180,255" },
  ];

  return (
    <div id="hscroll" ref={sectionRef} style={{ height: "500vh", padding: 0, overflow: "hidden" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div style={{ padding: "80px 48px 40px", maxWidth: 1400, margin: "0 auto", width: "100%" }}>
          <div className="s-label reveal">01 — Services</div>
          <h2 className="font-display text-section font-black uppercase reveal d1" style={{ textTransform: "uppercase" }}>
            Every modality.<br /><span className="text-blue">Production-grade.</span>
          </h2>
        </div>
        <div style={{ overflow: "hidden", paddingBottom: 60 }}>
          <div ref={trackRef} style={{ display: "flex", gap: 3, willChange: "transform", padding: "0 48px" }}>
            {cards.map((card, i) => (
              <div key={i} className={`hcard ${card.bg}`} style={{ background: card.bg.startsWith("bg-[") ? card.bg.slice(4, -1) : undefined }}>
                <div className="hcard-bg" style={{
                  background: i === 1 ? "var(--blue-d)" : i === 2 ? "#0a1628" : i === 3 ? "rgba(26,107,255,0.15)" : "var(--s1)",
                  border: i === 0 || i === 3 ? "1px solid var(--b1)" : undefined
                }} />
                <div style={{ position: "absolute", inset: 0, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div className="font-mono" style={{ fontSize: 10, letterSpacing: ".2em", color: "rgba(255,255,255,.35)" }}>{card.num}</div>
                  <div>
                    <div className="font-display font-black text-card uppercase" style={{ marginBottom: 8 }}>
                      {card.title.split("\n").map((l, j) => <span key={j}>{l}{j === 0 && <br />}</span>)}
                    </div>
                    <div style={{ flex: 1, height: 180, position: "relative" }}>
                      <CardCanvas type={card.type} color={card.color} />
                    </div>
                  </div>
                  <div className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,.5)", lineHeight: 1.85, letterSpacing: ".04em", textTransform: "uppercase" }}>{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalitiesScroll() {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const update = () => {
      const section = sectionRef.current; if (!section) return;
      const rect = section.getBoundingClientRect();
      const sH = section.offsetHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / (sH - window.innerHeight)));
      setActiveIdx(Math.min(3, Math.floor(progress * 4)));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const items = [
    { num: "01", title: "Robotics &\nPhysical AI", desc: "MCAP-native workflows, real-time sensor fusion, and high-fidelity multimodal annotation built for autonomous systems operating in complex real-world environments." },
    { num: "02", title: "Image\nAnnotation",        desc: "Bounding boxes, segmentation masks, keypoints, and labeled attributes — precision pipelines that scale from pilot to millions of images without quality drift." },
    { num: "03", title: "Video\nIntelligence",      desc: "Multi-object tracking, action segmentation, egocentric video, synchronized multi-camera streams — temporal intelligence at every frame." },
    { num: "04", title: "Audio &\nSpeech",          desc: "ASR, phoneme tagging, speaker diarization, emotion and prosody modeling — 15+ languages with native-speaker annotation at IPA-level precision." },
  ];

  return (
    <div id="modalities-scroll" ref={sectionRef} style={{ height: "280vh", padding: 0, overflow: "hidden", margin: 0 }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ width: "100%" }}>
          <div style={{ padding: "0 48px", marginBottom: 40 }}>
            <div className="s-label">02 — Modalities</div>
            <h2 className="font-display text-section font-black uppercase">Precision at<br /><span className="text-blue">every layer.</span></h2>
          </div>
          {items.map((item, i) => (
            <div key={i} className={`mscroll-item${i === activeIdx ? " active" : ""}`}
              style={{ padding: "28px 48px", borderBottom: "1px solid var(--b1)", display: "grid", gridTemplateColumns: "160px 1fr 1fr", alignItems: "center", gap: 32 }}>
              <div className="font-mono" style={{ fontSize: 11, color: "var(--blue)", letterSpacing: ".16em" }}>{item.num}</div>
              <div className="font-display font-black uppercase" style={{ fontSize: "clamp(24px,3vw,48px)", letterSpacing: "-.04em", lineHeight: .95 }}>
                {item.title.split("\n").map((l, j) => <span key={j}>{l}{j === 0 && <br />}</span>)}
              </div>
              <div className="font-mono text-g2" style={{ fontSize: 12, lineHeight: 1.9, letterSpacing: ".03em", textTransform: "uppercase" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoGrid({ blue = false, size = 4 }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(3,${size}px)`, gap: 2 }}>
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <span key={i} style={{ display: "block", width: size, height: size, borderRadius: .5, background: blue && i === 4 ? "var(--blue)" : "#fff" }} />
      ))}
    </div>
  );
}

function BracketBtn({ href = "#", children, style = {}, orangeBr = false, dim = false }) {
  const brColor = orangeBr ? "var(--orange)" : "var(--blue)";
  const borderColor = orangeBr ? "rgba(255,122,92,.3)" : "var(--b2)";
  return (
    <a href={href} className="bracket-btn" style={{ opacity: dim ? .6 : 1, ...style }}>
      <span className="br" style={{ color: brColor }}>⌐</span>
      <span className="inner" style={{ borderTop: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}`, padding: "10px 16px" }}>{children}</span>
      <span className="br" style={{ color: brColor }}>¬</span>
    </a>
  );
}

export default function XTransMatrix() {
  const navScrolled = useNavScroll();
  useScrollProgress();
  useReveal();

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div id="progress-bar" />

      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "60px 0 0", position: "relative" }}>
        <HeroCanvas />
        <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 60px)", alignItems: "center", position: "relative", zIndex: 2 }}>
          <div style={{ paddingRight: 40 }}>
            <div className="font-mono anim-fade-up" style={{ fontSize: 10, color: "var(--blue)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 10, animationDelay: ".3s" }}>
              <span style={{ width: 24, height: 1, background: "var(--blue)", display: "inline-block" }} />
              <a href="https://verilabel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>Powered by <img src="/images/VL-logo.png" alt="VeriLabel" style={{ height: "20px", width: "auto", objectFit: "contain", display: "inline-block", verticalAlign: "middle" }} /> VeriLabel</a>
            </div>
            <h1 className="font-display font-black uppercase text-hero" style={{ marginBottom: 0 }}>
              {[["The data",".3s"],["engine for",".44s"],["Physical",".58s"],["AI.",".72s"]].map(([text, delay], i) => (
                <span key={i} className="hero-line" style={{ display: "block", overflow: "hidden" }}>
                  <span style={{ animationDelay: delay, ...(i === 2 ? { color: "var(--blue)" } : {}) }}>{text}</span>
                </span>
              ))}
            </h1>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 80, opacity: 0, animation: "fadeIn .8s .8s forwards" }}>
            <p className="font-mono text-g2" style={{ fontSize: 12, lineHeight: 2, letterSpacing: ".03em", maxWidth: 380, marginBottom: 40, textTransform: "uppercase" }}>
              MCAP-native annotation, precision LiDAR labeling, and sensor-fusion pipelines — built to structure, synchronize, and scale real-world robot data across vision, motion, and telemetry streams.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
              <BracketBtn href="#cta">Book a Call with Sales</BracketBtn>
              <BracketBtn href="#hscroll" dim>Explore Services</BracketBtn>
            </div>
          </div>
        </div>

        <div className="font-mono" style={{ position: "absolute", bottom: 24, left: 48, fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--g4)", display: "flex", alignItems: "center", gap: 10, opacity: 0, animation: "fadeIn 1s 1.4s forwards" }}>
          Scroll to explore <span style={{ width: 40, height: 1, background: "var(--g4)", display: "inline-block" }} />
        </div>

        <div style={{ position: "absolute", bottom: 24, right: 48, display: "flex", opacity: 0, animation: "fadeIn 1s 1.4s forwards", border: "1px solid var(--b1)", background: "rgba(12,15,26,0.7)", backdropFilter: "blur(12px)" }}>
          {[["97%+","Accuracy"],["15+","Languages"],["5×","Faster"]].map(([n, l]) => (
            <div key={n} style={{ padding: "20px 36px", textAlign: "center", borderRight: "1px solid var(--b1)" }}>
              <div className="hstat-n font-display">{n}</div>
              <div className="hstat-l">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <div id="trusted" style={{ height: 56, borderTop: "1px solid var(--b1)", borderBottom: "1px solid var(--b1)", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div className="mq-track font-mono">
          {["Autonomous Systems","Physical AI Teams","Robotics Ventures","Enterprise AI","Research Institutes","Embodied Intelligence","Autonomous Driving","Computer Vision","Autonomous Systems","Physical AI Teams","Robotics Ventures","Enterprise AI","Research Institutes","Embodied Intelligence","Autonomous Driving","Computer Vision"].map((item, i) => (
            <span key={i} style={i % 2 === 1 ? { width: 4, height: 4, borderRadius: "50%", background: "var(--blue)", opacity: .5, flexShrink: 0 } : { fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--g4)", whiteSpace: "nowrap" }}>{i % 2 === 0 ? item : ""}</span>
          ))}
        </div>
      </div>

      <HScrollSection />
      <ModalitiesScroll />

      <section id="platform" style={{ padding: "72px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="s-label reveal">03 — Platform</div>
          <h2 className="font-display font-black uppercase text-section reveal d1" style={{ marginBottom: 48 }}>
            Legacy tools break<br />at scale.<br /><span className="text-blue">We don't.</span>
          </h2>
          <div className="reveal d2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
            <div className="bg-s1" style={{ border: "1px solid var(--b1)", padding: 64 }}>
              <div className="font-mono text-blue" style={{ fontSize: 10, letterSpacing: ".16em", marginBottom: 20 }}>VeriLabel Platform</div>
              <div className="font-display font-black uppercase" style={{ fontSize: 28 }}>End-to-end annotation infrastructure</div>
              <div className="font-mono text-g3" style={{ fontSize: 10, lineHeight: 1.85, letterSpacing: ".04em", textTransform: "uppercase", marginTop: 12 }}>Platform + workforce + QA + delivery. Fully tailored workflows, schemas and pipelines per use case. Domain-trained expert annotators per industry vertical.</div>
              <table className="cmp-table">
                <thead><tr><th style={{ width: "44%" }}>Dimension</th><th style={{ textAlign: "center" }}>Industry</th><th>VeriLabel</th></tr></thead>
                <tbody>
                  {[["Annotation workflow","Rigid","Fully custom"],["Data types","2D only","3D + LiDAR + Fusion"],["Export formats","Locked","Open / custom"],["Workforce","Crowd","Domain specialists"],["QA validation","Basic","Multi-layer"],["Pricing","Expensive","Scale-efficient"]].map(([dim,bad,good]) => (
                    <tr key={dim}><td>{dim}</td><td style={{ textAlign: "center" }}><span className="pill-r">{bad}</span></td><td><span className="pill-g">{good}</span></td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 3 }}>
              {[["01","Open Export","JSON, COCO, YOLO, Pascal VOC — or fully custom schema aligned to your stack."],["02","Multi-layer QA","AI pre-annotation → expert review → blind evaluation → IAA scoring → delivery."]].map(([num,title,desc]) => (
                <div key={num} className="bg-s1" style={{ border: "1px solid var(--b1)", padding: 48, transition: "background .3s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--s2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--s1)"}>
                  <div className="font-mono text-blue" style={{ fontSize: 10, letterSpacing: ".16em", marginBottom: 20 }}>{num}</div>
                  <div className="font-display font-black uppercase" style={{ fontSize: 28, letterSpacing: "-.03em", marginBottom: 12 }}>{title}</div>
                  <div className="font-mono text-g3" style={{ fontSize: 10, lineHeight: 1.85, letterSpacing: ".04em", textTransform: "uppercase" }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quality" style={{ padding: "72px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="s-label reveal">04 — Quality Assurance</div>
          <h2 className="font-display font-black uppercase text-section reveal d1">Five layers between<br />your data and <span className="text-blue">failure.</span></h2>
          <div className="reveal d2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, marginTop: 60 }}>
            {[["01","AI Pre-annotation","Speeds throughput without sacrificing precision. Machine-assisted first pass at scale."],
              ["02","Expert Review","Domain-trained annotators — not generalist crowd workers. Industry-specific expertise on every task."],
              ["03","Blind Evaluation","A full second-pass review catches what first-pass misses. Every frame, segment, and alignment cross-checked."],
              ["04","IAA Scoring","Inter-annotator agreement thresholds enforced per task type. Automatic rejection below threshold."]].map(([n,t,d]) => (
              <div key={n} className="qa-cell bg-s1" style={{ border: "1px solid var(--b1)", padding: 48 }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--s2)"; e.currentTarget.style.borderColor = "var(--b2)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--s1)"; e.currentTarget.style.borderColor = "var(--b1)"; }}>
                <div className="qa-cell-n">{n}</div>
                <div className="font-display font-black uppercase" style={{ fontSize: 22, letterSpacing: "-.025em", marginBottom: 10 }}>{t}</div>
                <div className="font-mono text-g3" style={{ fontSize: 10, lineHeight: 1.85, letterSpacing: ".04em", textTransform: "uppercase" }}>{d}</div>
              </div>
            ))}
            <div style={{ gridColumn: "1/-1", background: "var(--blue)", padding: "32px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div className="font-display font-black uppercase" style={{ fontSize: 28, letterSpacing: "-.03em" }}>Step 05 — Deliver</div>
                <div className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,.6)", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 6 }}>Production-grade output · COCO · Pascal VOC · YOLO · Custom export</div>
              </div>
              <BracketBtn href="#cta" style={{ color: "#fff" }}>Book a Call with Sales</BracketBtn>
            </div>
          </div>
        </div>
      </section>

      <div id="numbers" style={{ padding: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}>
          {[["97%+","Annotation accuracy"],["15+","Languages supported"],["5×","Faster than legacy tools"],["4","Modalities"]].map(([n,l],i) => (
            <div key={i} className={`num-cell bg-s1 reveal${i ? ` d${i}` : ""}`} style={{ border: "1px solid var(--b1)", padding: "64px 40px", textAlign: "center" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--s2)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--s1)"}>
              <div className="font-display font-black" style={{ fontSize: "clamp(48px,5vw,72px)", letterSpacing: "-.05em", lineHeight: 1, color: "#fff" }}>{n}</div>
              <div className="font-mono text-g4" style={{ fontSize: 9, marginTop: 12, letterSpacing: ".16em", textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <section id="aitank" style={{ padding: "72px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, alignItems: "stretch" }}>
            <div className="bg-s1" style={{ border: "1px solid var(--b1)", padding: 64, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="font-mono text-orange" style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 20, height: 1, background: "var(--orange)", display: "inline-block" }} /> An xTransMatrix Product
                </div>
                <h2 className="font-display font-black uppercase text-ai"><em style={{ fontStyle: "normal", color: "var(--orange)" }}>AI</em> Tank —<br />where builders<br />push limits.</h2>
                <p className="font-mono text-g3" style={{ fontSize: 10, lineHeight: 1.9, letterSpacing: ".04em", textTransform: "uppercase", marginTop: 24, maxWidth: 400 }}>
                  A collaborative hub for builders, thinkers, and technologists pushing the boundaries of AI. Whether training models, testing edge cases, or exploring ethical AI — there's a space for you inside the Tank.
                </p>
              </div>
              <BracketBtn href="#" style={{ marginTop: 40 }} orangeBr>Join AI Tank</BracketBtn>
            </div>
            <div className="aitank-right" style={{ background: "rgba(255,122,92,.06)", border: "1px solid rgba(255,122,92,.15)", padding: 64, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <svg width="64" height="64" viewBox="0 0 88 88" fill="none">
                  <ellipse cx="24" cy="24" rx="9" ry="9" fill="#FF7A5C"/>
                  <rect x="17" y="35" width="15" height="33" rx="7.5" fill="#352956"/>
                  <ellipse cx="44" cy="17" rx="9" ry="9" fill="#fff"/>
                  <rect x="37" y="28" width="15" height="40" rx="7.5" fill="#FF7A5C"/>
                  <ellipse cx="64" cy="24" rx="9" ry="9" fill="#FF7A5C"/>
                  <rect x="57" y="35" width="15" height="33" rx="7.5" fill="#352956"/>
                </svg>
                <div className="font-display font-black" style={{ fontSize: 48, letterSpacing: "-.04em", lineHeight: 1 }}>
                  <em style={{ fontStyle: "normal", color: "var(--orange)" }}>AI</em> TANK
                </div>
                <div className="font-mono" style={{ fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.25)" }}>A product of xTransMatrix Inc.</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 32 }}>
                {[["Hub","Collaboration"],["Lab","Experimentation"],["Community","Builders"],["Launchpad","Next-gen AI"]].map(([k,v]) => (
                  <div key={k} className="font-mono" style={{ background: "rgba(255,122,92,.05)", border: "1px solid rgba(255,122,92,.1)", padding: 16, fontSize: 9, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>
                    <strong style={{ display: "block", fontSize: 14, fontWeight: 800, letterSpacing: "-.01em", color: "#fff", fontFamily: "var(--display)", marginBottom: 4 }}>{k}</strong>{v}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="bg-s1" style={{ border: "1px solid var(--b1)", padding: "100px 80px", position: "relative", overflow: "hidden" }}>
            <CTACanvas />
            <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end" }}>
              <div className="font-display font-black uppercase text-cta reveal">Better<br />data.<br /><span className="text-blue">Better<br />models.</span></div>
              <div className="reveal d2" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <p className="font-mono text-g3" style={{ fontSize: 11, lineHeight: 1.9, letterSpacing: ".04em", textTransform: "uppercase" }}>
                  Talk to the team building production-grade AI data for the world's most ambitious autonomous systems.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <BracketBtn href="#" style={{ fontSize: 13 }}>Book a Call with Sales</BracketBtn>
                  <BracketBtn href="#hscroll" dim style={{ fontSize: 13 }}>Explore Services</BracketBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}