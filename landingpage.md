import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────
// GLOBAL STYLES
// ─────────────────────────────────────────────
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
    html { scroll-behavior: smooth; }
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

    /* Horizontal scroll cards */
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

    /* Modalities scroll */
    .mscroll-item { padding:28px 48px; border-bottom:1px solid var(--b1); display:grid; grid-template-columns:160px 1fr 1fr; align-items:center; gap:32px; opacity:.2; transition:opacity .4s; }
    .mscroll-item.active { opacity:1; }

    /* Quality cells */
    .qa-cell { background:var(--s1); border:1px solid var(--b1); padding:48px; position:relative; overflow:hidden; transition:all .35s; cursor:default; }
    .qa-cell:hover { background:var(--s2); border-color:var(--b2); }
    .qa-cell::after { content:''; position:absolute; bottom:0; left:0; right:0; height:1px; background:var(--blue); transform:scaleX(0); transform-origin:left; transition:transform .5s cubic-bezier(.16,1,.3,1); }
    .qa-cell:hover::after { transform:scaleX(1); }

    /* Numbers */
    .num-cell { padding:64px 40px; text-align:center; background:var(--s1); border:1px solid var(--b1); transition:background .3s; cursor:default; position:relative; overflow:hidden; }
    .num-cell::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at 50% 100%,rgba(26,107,255,.08),transparent 70%); opacity:0; transition:opacity .4s; }
    .num-cell:hover { background:var(--s2); }
    .num-cell:hover::before { opacity:1; }

    /* Platform */
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

    /* AI Tank */
    .ait-prop { background:rgba(255,122,92,.05); border:1px solid rgba(255,122,92,.1); padding:16px; font-family:var(--mono); font-size:9px; letter-spacing:.16em; text-transform:uppercase; color:rgba(255,255,255,.5); }
    .ait-prop strong { display:block; font-size:14px; font-weight:800; letter-spacing:-.01em; color:#fff; font-family:'Inter',sans-serif; margin-bottom:4px; }

    /* Nav pill dropdown */
    .nav-dropdown-item { display:block; font-size:11.5px; font-weight:500; color:rgba(255,255,255,.55); text-decoration:none; padding:7px 12px; border-radius:6px; transition:background .15s,color .15s; }
    .nav-dropdown-item:hover { background:rgba(255,255,255,.06); color:#fff; }

    /* Team card sweep */
    .team-sweep { position:absolute; bottom:0; left:0; right:0; height:1px; background:var(--blue); transform:scaleX(0); transform-origin:left; transition:transform .5s cubic-bezier(.16,1,.3,1); z-index:10; }
    .team-card:hover .team-sweep { transform:scaleX(1); }
    .team-card:hover .team-domain { opacity:1; transform:translateY(0); }

    /* Footer ft-col links */
    .ft-link { display:block; font-family:var(--mono); font-size:10px; color:var(--g3); text-decoration:none; margin-bottom:10px; letter-spacing:.06em; transition:color .2s,padding-left .18s; }
    .ft-link:hover { color:#fff; padding-left:4px; }

    /* Progress bar */
    #prog { position:fixed; top:0; left:0; right:0; height:2px; background:var(--blue); transform-origin:left; transform:scaleX(0); z-index:999; transition:transform .08s; }
  `}</style>
);

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const TEAM = [
  { name:"Vikas Uppal",         role:"Strategy, Sales & Consulting",    domain:"Revenue architecture · GTM leadership",    img:"https://ik.imagekit.io/lrxrnuqog/Employess/Founders/Vikas.png" },
  { name:"Anupam K",            role:"Delivery & Ops Excellence",        domain:"Operations · Pipeline integrity",          img:"https://ik.imagekit.io/lrxrnuqog/Employess/Founders/Anupam.png" },
  { name:"Prasanna Patel",      role:"Sales, Finance & Admin",           domain:"Financial architecture · Business ops",    img:"https://ik.imagekit.io/lrxrnuqog/Employess/Founders/Prasanna.png" },
  { name:"Dr Akshay S P",       role:"AI Strategy & Governance",         domain:"Ethical AI · Policy architecture",         img:"https://ik.imagekit.io/lrxrnuqog/Team/Akshay.png" },
  { name:"Akhilesh Kunhi Raman",role:"Head of Design & Ops",             domain:"Systems design · Operations scale",        img:"https://ik.imagekit.io/lrxrnuqog/Team/Akhilesh.png" },
  { name:"Shashank L K",        role:"Head of Technology",               domain:"Platform engineering · Scalability",       img:"https://ik.imagekit.io/lrxrnuqog/Team/Shashank.png" },
  { name:"Shivaram",            role:"Strategy & Sales",                 domain:"Growth · Partnership development",         img:"https://ik.imagekit.io/lrxrnuqog/Team/shivaram.png" },
];

const NAV_ITEMS = [
  { label:"About",       links:["Cultures, Values and ESG","Diversity by Young Minds","Recent Awards and Recognition","Our Partners","Humans Behind the Intelligence"] },
  { label:"Services",    links:["Forge AI","Human-in-the-Loop AI","Advisory","Tech Squads"] },
  { label:"Industries",  links:["MEDTECH","Automobile","Insurance","Banking and Payment"] },
  { label:"Intelligence",links:["XTMX Intelligence","Events","Case Studies"] },
  { label:"Careers",     links:["Hiring / Innotern","Experienced Hire","Meet Our Team","Future of Work"] },
];

// ─────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────
function LogoGrid({ size = 4, gap = 2 }) {
  return (
    <div style={{ display:"grid", gridTemplateColumns:`repeat(3,${size}px)`, gap }}>
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <span key={i} style={{ display:"block", width:size, height:size, borderRadius:.5, background: i===4?"var(--blue)":"#fff" }} />
      ))}
    </div>
  );
}

function SVGLogo({ size = 14 }) {
  const rects = [[0,0],[16,0],[32,0],[8,16],[24,16],[0,32],[16,32],[32,32]];
  return (
    <svg viewBox="0 0 44 44" fill="none" width={size} height={size}>
      {rects.map(([x,y],i) => <rect key={i} x={x} y={y} width={12} height={12} fill="white"/>)}
    </svg>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("vis"); obs.unobserve(e.target); } });
    }, { threshold:.08 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─────────────────────────────────────────────
// CANVASES
// ─────────────────────────────────────────────
function HeroCanvas() {
  const canvasRef = useRef(null);
  const stateRef  = useRef({ dots:[], rotX:0, rotY:0, tick:0, mouseX:0, mouseY:0 });
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let raf; const s = stateRef.current; const N = 900;
    function resize() { c.width = c.offsetWidth||window.innerWidth; c.height = c.offsetHeight||window.innerHeight; buildDots(); }
    function buildDots() {
      s.dots = [];
      const W=c.width,H=c.height; if(!W||!H) return;
      const cx=W*.62,cy=H*.48,R=Math.min(W,H)*.26;
      const phi=Math.PI*(3-Math.sqrt(5));
      for(let i=0;i<N;i++){
        const y=1-(i/(N-1))*2,r=Math.sqrt(1-y*y),theta=phi*i;
        const x3=r*Math.cos(theta),z3=r*Math.sin(theta),y3=y;
        s.dots.push({ox:x3*R,oy:y3*R,oz:z3*R,r:Math.random()*1.2+.4,baseA:(.3+z3*.5)*(.7+Math.random()*.3),cx,cy});
      }
    }
    function onMouse(e){s.mouseX=e.clientX;s.mouseY=e.clientY;}
    window.addEventListener("mousemove",onMouse,{passive:true});
    window.addEventListener("resize",resize);
    resize();
    function draw() {
      const W=c.width,H=c.height; if(!W||!H){raf=requestAnimationFrame(draw);return;}
      ctx.clearRect(0,0,W,H); s.tick++;
      ctx.strokeStyle="rgba(26,107,255,0.04)"; ctx.lineWidth=.5;
      for(let x=0;x<W;x+=72){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
      for(let y=0;y<H;y+=72){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
      const tx=((s.mouseY/H)-.5)*.4,ty=((s.mouseX/W)-.5)*.4+s.tick*.0008;
      s.rotX+=(tx-s.rotX)*.03; s.rotY+=(ty-s.rotY)*.03;
      const cosX=Math.cos(s.rotX),sinX=Math.sin(s.rotX),cosY=Math.cos(s.rotY),sinY=Math.sin(s.rotY);
      const proj=s.dots.map(d=>{
        let x=d.ox,y=d.oy,z=d.oz;
        let nx=x*cosY+z*sinY,nz=-x*sinY+z*cosY; x=nx; z=nz;
        let ny=y*cosX-z*sinX,nz2=y*sinX+z*cosX; y=ny; z=nz2;
        const depth=(z+1)/2;
        return{sx:d.cx+x,sy:d.cy+y,z,depth,r:d.r*(.5+depth*.8),a:d.baseA*(.3+depth*.8)};
      });
      proj.sort((a,b)=>a.z-b.z);
      proj.forEach(p=>{ctx.beginPath();ctx.arc(p.sx,p.sy,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(200,210,255,${p.a*.85})`;ctx.fill();});
      proj.filter(p=>p.sx<W*.62-50&&p.depth>.6).slice(0,40).forEach(p=>{
        ctx.strokeStyle=`rgba(26,107,255,${p.a*.15})`;ctx.lineWidth=.5;
        ctx.beginPath();ctx.moveTo(p.sx,p.sy);ctx.lineTo(p.sx-30-Math.random()*60,p.sy);ctx.stroke();
      });
      raf=requestAnimationFrame(draw);
    }
    draw();
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("mousemove",onMouse);window.removeEventListener("resize",resize);};
  },[]);
  return <canvas ref={canvasRef} style={{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",width:"100%",height:"100%"}}/>;
}

function CTACanvas() {
  const canvasRef = useRef(null);
  useEffect(()=>{
    const c=canvasRef.current; if(!c) return;
    const ctx=c.getContext("2d"); let raf;
    const nodes=Array.from({length:35},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.0002,vy:(Math.random()-.5)*.0002}));
    function resize(){
      if (!c.parentElement) return;
      const r=c.parentElement.getBoundingClientRect();
      c.width=r.width;
      c.height=r.height;
    }
    resize(); window.addEventListener("resize",resize);
    function draw(){
      const W=c.width,H=c.height; ctx.clearRect(0,0,W,H);
      nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>1)n.vx*=-1;if(n.y<0||n.y>1)n.vy*=-1;});
      nodes.forEach((a,i)=>nodes.slice(i+1).forEach(b=>{
        const dx=(a.x-b.x)*W,dy=(a.y-b.y)*H,d=Math.hypot(dx,dy);
        if(d<200){ctx.strokeStyle=`rgba(26,107,255,${(1-d/200)*.12})`;ctx.lineWidth=.5;ctx.beginPath();ctx.moveTo(a.x*W,a.y*H);ctx.lineTo(b.x*W,b.y*H);ctx.stroke();}
      }));
      nodes.forEach(n=>{ctx.beginPath();ctx.arc(n.x*W,n.y*H,1.5,0,Math.PI*2);ctx.fillStyle="rgba(26,107,255,0.3)";ctx.fill();});
      raf=requestAnimationFrame(draw);
    }
    draw();
    return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
  },[]);
  return <canvas ref={canvasRef} style={{position:"absolute",inset:0,zIndex:0,width:"100%",height:"100%"}}/>;
}

function CardCanvas({type}) {
  const canvasRef = useRef(null);
  useEffect(()=>{
    const c=canvasRef.current; if(!c) return;
    const ctx=c.getContext("2d"); let raf,t=0;
    function size(){
      const p=c.parentElement;
      if (!p) return;
      c.width=p.offsetWidth||280;
      c.height=p.offsetHeight||200;
    }
    size();
    function draw(){
      const W=c.width,H=c.height; ctx.clearRect(0,0,W,H);
      if(type==="dots"){
        const cols=Math.floor(W/12),rows=Math.floor(H/12);
        for(let i=0;i<cols;i++)for(let j=0;j<rows;j++){
          const wave=Math.sin(i*.3+j*.3+t)*.5+.5;
          ctx.beginPath();ctx.arc(i*12+6,j*12+6,wave*2.5+.3,0,Math.PI*2);
          ctx.fillStyle=`rgba(100,160,255,${wave*.6+.1})`;ctx.fill();
        }
      } else if(type==="wave"){
        for(let k=0;k<5;k++){
          ctx.beginPath();
          for(let x=0;x<=W;x+=2){const y=H/2+Math.sin(x*.025+t+k*.6)*((k+1)*14)*Math.sin(x*.005+t*.3);x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}
          ctx.strokeStyle=`rgba(150,190,255,${.12+k*.06})`;ctx.lineWidth=1.2;ctx.stroke();
        }
      } else if(type==="radial"){
        const cx=W/2,cy=H/2;
        for(let i=0;i<60;i++){const angle=(i/60)*Math.PI*2,r1=30+Math.sin(t+i*.2)*8,r2=80+Math.cos(t*.7+i*.15)*30+i*1.2;
          ctx.strokeStyle=`rgba(100,150,255,${.05+Math.sin(t+i*.1)*.04})`;ctx.lineWidth=.8;
          ctx.beginPath();ctx.moveTo(cx+Math.cos(angle)*r1,cy+Math.sin(angle)*r1);ctx.lineTo(cx+Math.cos(angle)*r2,cy+Math.sin(angle)*r2);ctx.stroke();}
        for(let i=0;i<40;i++){const a=(i/40)*Math.PI*2+t*.05,r=40+Math.sin(t*.5+i)*25;
          ctx.beginPath();ctx.arc(cx+Math.cos(a)*r,cy+Math.sin(a)*r,1.5,0,Math.PI*2);
          ctx.fillStyle=`rgba(100,150,255,${.4+Math.sin(t+i)*.3})`;ctx.fill();}
      } else if(type==="bars"){
        const bars=40,bw=Math.max(1,(W-60)/bars);
        for(let i=0;i<bars;i++){const h=Math.max(4,(Math.sin(i*.3+t)*Math.sin(i*.1+t*.7)+1)*H*.3+4),y=(H-h)/2;
          ctx.fillStyle=`rgba(130,180,255,${.2+Math.abs(Math.sin(i*.3+t))*.5})`;ctx.fillRect(30+i*bw,y,bw*.7,h);}
      }
      t+=type==="bars"?.04:type==="wave"?.015:type==="radial"?.012:.025;
      raf=requestAnimationFrame(draw);
    }
    draw();
    return()=>cancelAnimationFrame(raf);
  },[type]);
  return <canvas ref={canvasRef} style={{width:"100%",height:"100%"}}/>;
}

// ─────────────────────────────────────────────
// PROGRESS BAR
// ─────────────────────────────────────────────
function ProgressBar() {
  const [scale, setScale] = useState(0);
  useEffect(()=>{
    const h=()=>setScale(window.scrollY/(document.body.scrollHeight-window.innerHeight));
    window.addEventListener("scroll",h,{passive:true});
    return()=>window.removeEventListener("scroll",h);
  },[]);
  return <div id="prog" style={{transform:`scaleX(${scale})`}}/>;
}

// ─────────────────────────────────────────────
// NAV — pill style
// ─────────────────────────────────────────────
function Nav() {
  const [openItem, setOpenItem] = useState(null);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(()=>{
    const s=()=>setScrolled(window.scrollY>20);
    window.addEventListener("scroll",s,{passive:true});
    return()=>window.removeEventListener("scroll",s);
  },[]);

  useEffect(()=>{
    const h=(e)=>{ if(!e.target.closest("[data-nav-item]")) setOpenItem(null); };
    document.addEventListener("click",h);
    return()=>document.removeEventListener("click",h);
  },[]);

  return (
    <div style={{position:"fixed",top:0,left:0,right:0,zIndex:900,padding:"0 24px"}}>
      <div
        style={{
          maxWidth:1120,margin:"12px auto 0",
          background:"rgba(12,10,28,0.92)",
          backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",
          border:"1px solid rgba(255,255,255,0.07)",
          borderRadius:14,display:"flex",alignItems:"center",
          padding:"0 6px",height:52,
          transition:"box-shadow .3s",
          boxShadow: scrolled?"0 8px 32px rgba(0,0,0,0.4)":"none",
        }}
      >
        {/* Logo */}
        <a href="#" style={{display:"flex",alignItems:"center",gap:9,textDecoration:"none",padding:"0 12px 0 8px",flexShrink:0}}>
          <div style={{width:26,height:26,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:6,display:"grid",placeItems:"center",flexShrink:0}}>
            <SVGLogo size={14}/>
          </div>
          <span style={{fontSize:13.5,fontWeight:700,letterSpacing:"-.01em",color:"#fff"}}>
            x<em style={{fontStyle:"normal",color:"var(--purple-l)"}}>Transmatrix</em>
          </span>
        </a>

        {/* Links */}
        <nav style={{display:"flex",alignItems:"center",flex:1}}>
          {NAV_ITEMS.map(item=>(
            <div key={item.label} style={{position:"relative"}} data-nav-item>
              <button
                onClick={()=>setOpenItem(openItem===item.label?null:item.label)}
                style={{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:500,color:openItem===item.label?"#fff":"rgba(255,255,255,0.65)",background:"none",border:"none",cursor:"pointer",fontFamily:"Inter,sans-serif",padding:"0 13px",height:52,transition:"color .2s",whiteSpace:"nowrap"}}
              >
                {item.label}
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{opacity:.35,transition:"transform .2s",transform:openItem===item.label?"rotate(180deg)":"rotate(0)"}}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              {/* Dropdown */}
              <div style={{
                position:"absolute",top:"calc(100% + 8px)",left:0,minWidth:210,
                background:"rgba(12,10,28,0.97)",backdropFilter:"blur(20px)",
                border:"1px solid rgba(255,255,255,0.07)",borderRadius:10,padding:8,
                opacity:openItem===item.label?1:0,
                transform:openItem===item.label?"translateY(0)":"translateY(-8px)",
                pointerEvents:openItem===item.label?"auto":"none",
                transition:"opacity .18s,transform .18s",zIndex:10,
              }}>
                {item.links.map(l=>(
                  <a key={l} href="#" className="nav-dropdown-item">{l}</a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Right */}
        <div style={{display:"flex",alignItems:"center",gap:6,padding:"0 6px",marginLeft:"auto",flexShrink:0}}>
          <button style={{background:"var(--purple)",color:"#fff",border:"none",borderRadius:20,fontSize:12,fontWeight:600,padding:"6px 17px",cursor:"pointer",fontFamily:"Inter,sans-serif",transition:"background .2s"}}
            onMouseEnter={e=>e.target.style.background="var(--purple-l)"}
            onMouseLeave={e=>e.target.style.background="var(--purple)"}
          >Pricing</button>
          <a href="#presence" style={{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:600,color:"rgba(255,255,255,0.75)",textDecoration:"none",padding:"6px 12px",transition:"color .2s"}}
            onMouseEnter={e=>e.currentTarget.style.color="#fff"}
            onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.75)"}
          >Let's Connect <sup style={{fontSize:10,opacity:.5}}>↗</sup></a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" style={{minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden",paddingTop:60,position:"relative"}}>
      <HeroCanvas/>
      <div style={{maxWidth:1400,width:"100%",margin:"0 auto",padding:"0 48px",display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:"calc(100vh - 60px)",alignItems:"center",position:"relative",zIndex:2}}>
        <div style={{paddingRight:40}}>
          <div className="anim-fUp" style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--blue)",letterSpacing:".2em",textTransform:"uppercase",marginBottom:32,display:"flex",alignItems:"center",gap:10}}>
            <span style={{display:"inline-block",width:24,height:1,background:"var(--blue)"}}/>
            Powered by VeriLabel
          </div>
          <h1 style={{fontSize:"clamp(52px,5.5vw,88px)",fontWeight:900,letterSpacing:"-.05em",lineHeight:.92,textTransform:"uppercase"}}>
            {[["l1","The data"],["l2","engine for"],["l3","Physical","blue"],["l4","AI."]].map(([cls,text,isBlue])=>(
              <span key={cls} className={`line-clip ${cls}`}>
                <span className="line-inner" style={isBlue?{color:"var(--blue)"}:{}}>{text}</span>
              </span>
            ))}
          </h1>
        </div>
        <div className="anim-fIn" style={{display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingBottom:80,opacity:0,animationDelay:".8s"}}>
          <p style={{fontFamily:"var(--mono)",fontSize:12,color:"var(--g2)",lineHeight:2,letterSpacing:".03em",maxWidth:380,marginBottom:40,textTransform:"uppercase"}}>
            MCAP-native annotation, precision LiDAR labeling, and sensor-fusion pipelines — built to structure, synchronize, and scale real-world robot data across vision, motion, and telemetry streams.
          </p>
          <div style={{display:"flex",gap:16,flexWrap:"wrap",marginTop:8}}>
            <a href="#cta" className="bracket-btn"><span className="br">⌐</span><span className="inner">Book a Call with Sales</span><span className="br">¬</span></a>
            <a href="#hscroll" className="bracket-btn" style={{opacity:.6}}><span className="br">⌐</span><span className="inner">Explore Services</span><span className="br">¬</span></a>
          </div>
        </div>
      </div>
      <div className="anim-fIn" style={{position:"absolute",bottom:24,left:48,fontFamily:"var(--mono)",fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"var(--g4)",display:"flex",alignItems:"center",gap:10,opacity:0,animationDelay:"1.4s"}}>
        Scroll to explore <span style={{display:"inline-block",width:40,height:1,background:"var(--g4)"}}/>
      </div>
      <div className="anim-fIn" style={{position:"absolute",bottom:24,right:48,display:"flex",gap:0,opacity:0,animationDelay:"1.4s",border:"1px solid var(--b1)",background:"rgba(12,15,26,0.7)",backdropFilter:"blur(12px)"}}>
        {[["97%+","Accuracy"],["15+","Languages"],["5×","Faster"]].map(([n,l])=>(
          <div key={l} style={{padding:"20px 36px",textAlign:"center",borderRight:"1px solid var(--b1)"}}>
            <div style={{fontSize:52,fontWeight:900,letterSpacing:"-.04em",lineHeight:1}}>{n}</div>
            <div style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:".16em",textTransform:"uppercase",color:"var(--g3)",marginTop:6}}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// MARQUEE
// ─────────────────────────────────────────────
function Marquee() {
  const items=["Autonomous Systems","Physical AI Teams","Robotics Ventures","Enterprise AI","Research Institutes","Embodied Intelligence","Autonomous Driving","Computer Vision"];
  const doubled=[...items,...items];
  return (
    <div style={{height:56,borderTop:"1px solid var(--b1)",borderBottom:"1px solid var(--b1)",overflow:"hidden",display:"flex",alignItems:"center"}}>
      <div className="mq-track">
        {doubled.map((item,i)=>(
          <span key={i} style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:".2em",textTransform:"uppercase",color:"var(--g4)",whiteSpace:"nowrap"}}>
            {item}
            {i<doubled.length-1&&<span style={{display:"inline-block",width:4,height:4,borderRadius:"50%",background:"var(--blue)",opacity:.5,marginLeft:32}}/>}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// HORIZONTAL SCROLL SERVICES
// ─────────────────────────────────────────────
function HScrollServices() {
  const sectionRef=useRef(null);
  const trackRef=useRef(null);
  useEffect(()=>{
    const section=sectionRef.current,track=trackRef.current;
    if(!section||!track) return;
    function update(){
      const rect=section.getBoundingClientRect(),sH=section.offsetHeight;
      const progress=Math.max(0,Math.min(1,-rect.top/(sH-window.innerHeight)));
      const maxScroll=track.scrollWidth-track.parentElement.offsetWidth;
      track.style.transform=`translateX(-${progress*maxScroll}px)`;
    }
    window.addEventListener("scroll",update,{passive:true}); update();
    return()=>window.removeEventListener("scroll",update);
  },[]);

  const cards=[
    {num:"01 / 04",title:"Robotics &\nPhysical AI",type:"dots", desc:"MCAP-native · LiDAR · Sensor fusion · 3D point clouds",cls:"hcard-1"},
    {num:"02 / 04",title:"Image\nAnnotation",  type:"wave",  desc:"Bounding boxes · Segmentation · Keypoints · COCO · YOLO",cls:"hcard-2"},
    {num:"03 / 04",title:"Video\nIntelligence",type:"radial",desc:"MOT · Action recognition · Egocentric · 8–12 cam sync",cls:"hcard-3"},
    {num:"04 / 04",title:"Audio &\nSpeech AI",  type:"bars",  desc:"ASR · Diarization · Emotion · 15+ languages · IPA",cls:"hcard-4"},
  ];

  return (
    <div id="hscroll" ref={sectionRef} style={{padding:0,overflow:"hidden"}}>
      <div style={{position:"relative",height:"500vh"}}>
        <div style={{position:"sticky",top:0,height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
          <div style={{padding:"80px 48px 40px",maxWidth:1400,margin:"0 auto",width:"100%"}}>
            <div className="s-label reveal">01 — Services</div>
            <h2 className="reveal d1" style={{fontSize:"clamp(36px,4vw,64px)",fontWeight:900,letterSpacing:"-.045em",lineHeight:.95,textTransform:"uppercase"}}>
              Every modality.<br/><span style={{color:"var(--blue)"}}>Production-grade.</span>
            </h2>
          </div>
          <div style={{overflow:"hidden",paddingBottom:60}}>
            <div ref={trackRef} style={{display:"flex",gap:3,willChange:"transform",padding:"0 48px"}}>
              {cards.map((card,i)=>(
                <div key={i} className={`hcard ${card.cls}`}>
                  <div className="hcard-bg"/>
                  <div className="hcard-content">
                    <div className="hcard-num">{card.num}</div>
                    <div>
                      <div className="hcard-title">{card.title.split("\n").map((l,j)=><span key={j}>{l}{j===0&&<br/>}</span>)}</div>
                      <div className="hcard-visual"><CardCanvas type={card.type}/></div>
                    </div>
                    <div className="hcard-desc">{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MODALITIES SCROLL
// ─────────────────────────────────────────────
function ModalitiesScroll() {
  const sectionRef=useRef(null);
  const [activeIdx,setActiveIdx]=useState(0);
  useEffect(()=>{
    const section=sectionRef.current; if(!section) return;
    function update(){
      const rect=section.getBoundingClientRect(),sH=section.offsetHeight;
      const progress=Math.max(0,Math.min(1,-rect.top/(sH-window.innerHeight)));
      setActiveIdx(Math.min(3,Math.floor(progress*4)));
    }
    window.addEventListener("scroll",update,{passive:true}); update();
    return()=>window.removeEventListener("scroll",update);
  },[]);

  const items=[
    {num:"01",title:"Robotics &\nPhysical AI",desc:"MCAP-native workflows, real-time sensor fusion, and high-fidelity multimodal annotation built for autonomous systems operating in complex real-world environments."},
    {num:"02",title:"Image\nAnnotation",    desc:"Bounding boxes, segmentation masks, keypoints, and labeled attributes — precision pipelines that scale from pilot to millions of images without quality drift."},
    {num:"03",title:"Video\nIntelligence",  desc:"Multi-object tracking, action segmentation, egocentric video, synchronized multi-camera streams — temporal intelligence at every frame."},
    {num:"04",title:"Audio &\nSpeech",      desc:"ASR, phoneme tagging, speaker diarization, emotion and prosody modeling — 15+ languages with native-speaker annotation at IPA-level precision."},
  ];

  return (
    <div id="modalities-scroll" ref={sectionRef} style={{padding:0,overflow:"hidden"}}>
      <div style={{position:"relative",height:"280vh"}}>
        <div style={{position:"sticky",top:0,height:"100vh",display:"flex",alignItems:"center",overflow:"hidden"}}>
          <div style={{width:"100%"}}>
            <div style={{padding:"0 48px",marginBottom:40}}>
              <div className="s-label">02 — Modalities</div>
              <h2 style={{fontSize:"clamp(36px,4vw,64px)",fontWeight:900,letterSpacing:"-.045em",lineHeight:.95,textTransform:"uppercase"}}>
                Precision at<br/><span style={{color:"var(--blue)"}}>every layer.</span>
              </h2>
            </div>
            <div>
              {items.map((item,i)=>(
                <div key={i} className={`mscroll-item ${i===activeIdx?"active":""}`}>
                  <div style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--blue)",letterSpacing:".16em"}}>{item.num}</div>
                  <div style={{fontSize:"clamp(24px,3vw,48px)",fontWeight:900,letterSpacing:"-.04em",textTransform:"uppercase",lineHeight:.95}}>
                    {item.title.split("\n").map((l,j)=><span key={j} style={{display:"block"}}>{l}</span>)}
                  </div>
                  <div style={{fontFamily:"var(--mono)",fontSize:12,color:"var(--g2)",lineHeight:1.9,letterSpacing:".03em",textTransform:"uppercase"}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PLATFORM
// ─────────────────────────────────────────────
function Platform() {
  return (
    <section id="platform" style={{padding:"72px 48px"}}>
      <div style={{maxWidth:1400,margin:"0 auto"}}>
        <div className="s-label reveal">03 — Platform</div>
        <h2 className="reveal d1" style={{fontSize:"clamp(36px,4vw,64px)",fontWeight:900,letterSpacing:"-.045em",lineHeight:.95,textTransform:"uppercase",marginBottom:48}}>
          Legacy tools break<br/>at scale.<br/><span style={{color:"var(--blue)"}}>We don't.</span>
        </h2>
        <div className="reveal d2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:3}}>
          <div style={{background:"var(--s1)",border:"1px solid var(--b1)",padding:64}}>
            <div style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--blue)",letterSpacing:".16em",marginBottom:20}}>VeriLabel Platform</div>
            <div style={{fontSize:28,fontWeight:900,letterSpacing:"-.03em",textTransform:"uppercase",marginBottom:12}}>End-to-end annotation infrastructure</div>
            <div style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--g3)",lineHeight:1.85,letterSpacing:".04em",textTransform:"uppercase",marginTop:12}}>
              Platform + workforce + QA + delivery. Fully tailored workflows, schemas and pipelines per use case.
            </div>
            <table className="cmp-table">
              <thead><tr><th style={{width:"44%"}}>Dimension</th><th style={{textAlign:"center"}}>Industry</th><th>VeriLabel</th></tr></thead>
              <tbody>
                {[["Annotation workflow","Rigid","Fully custom"],["Data types","2D only","3D + LiDAR + Fusion"],["Export formats","Locked","Open / custom"],["Workforce","Crowd","Domain specialists"],["QA validation","Basic","Multi-layer"],["Pricing","Expensive","Scale-efficient"]].map(([dim,bad,good])=>(
                  <tr key={dim}><td>{dim}</td><td style={{textAlign:"center"}}><span className="pill-r">{bad}</span></td><td><span className="pill-g">{good}</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{display:"grid",gridTemplateRows:"1fr 1fr",gap:3}}>
            {[["01","Open Export","JSON, COCO, YOLO, Pascal VOC — or fully custom schema aligned to your stack."],["02","Multi-layer QA","AI pre-annotation → expert review → blind evaluation → IAA scoring → delivery."]].map(([num,title,desc])=>(
              <div key={num} className="plat-cell">
                <div style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--blue)",letterSpacing:".16em",marginBottom:20}}>{num}</div>
                <div style={{fontSize:28,fontWeight:900,letterSpacing:"-.03em",textTransform:"uppercase",marginBottom:12}}>{title}</div>
                <div style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--g3)",lineHeight:1.85,letterSpacing:".04em",textTransform:"uppercase"}}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// QUALITY
// ─────────────────────────────────────────────
function Quality() {
  return (
    <section id="quality" style={{padding:"72px 48px"}}>
      <div style={{maxWidth:1400,margin:"0 auto"}}>
        <div className="s-label reveal">04 — Quality Assurance</div>
        <h2 className="reveal d1" style={{fontSize:"clamp(36px,4vw,64px)",fontWeight:900,letterSpacing:"-.045em",lineHeight:.95,textTransform:"uppercase"}}>
          Five layers between<br/>your data and <span style={{color:"var(--blue)"}}>failure.</span>
        </h2>
        <div className="reveal d2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:3,marginTop:60}}>
          {[["01","AI Pre-annotation","Speeds throughput without sacrificing precision. Machine-assisted first pass at scale."],["02","Expert Review","Domain-trained annotators — not generalist crowd workers. Industry-specific expertise on every task."],["03","Blind Evaluation","A full second-pass review catches what first-pass misses. Every frame, segment, and alignment cross-checked."],["04","IAA Scoring","Inter-annotator agreement thresholds enforced per task type. Automatic rejection below threshold."]].map(([num,title,desc])=>(
            <div key={num} className="qa-cell">
              <div style={{fontFamily:"var(--mono)",fontSize:48,fontWeight:900,color:"rgba(26,107,255,.12)",lineHeight:1,marginBottom:16}}>{num}</div>
              <div style={{fontSize:22,fontWeight:800,letterSpacing:"-.025em",textTransform:"uppercase",marginBottom:10}}>{title}</div>
              <div style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--g3)",lineHeight:1.85,letterSpacing:".04em",textTransform:"uppercase"}}>{desc}</div>
            </div>
          ))}
          <div style={{gridColumn:"1/-1",background:"var(--blue)",padding:"32px 48px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div>
              <div style={{fontSize:28,fontWeight:900,letterSpacing:"-.03em",textTransform:"uppercase"}}>Step 05 — Deliver</div>
              <div style={{fontFamily:"var(--mono)",fontSize:10,color:"rgba(255,255,255,.6)",letterSpacing:".1em",textTransform:"uppercase",marginTop:6}}>
                Production-grade output · COCO · Pascal VOC · YOLO · Custom export
              </div>
            </div>
            <a href="#cta" className="bracket-btn" style={{color:"#fff"}}>
              <span className="br">⌐</span><span className="inner" style={{borderColor:"rgba(255,255,255,.3)"}}>Book a Call with Sales</span><span className="br">¬</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// NUMBERS
// ─────────────────────────────────────────────
function Numbers() {
  return (
    <div id="numbers" style={{padding:0}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:3}}>
        {[["97%+","Annotation accuracy"],["15+","Languages supported"],["5×","Faster than legacy tools"],["4","Modalities"]].map(([n,l],i)=>(
          <div key={l} className={`num-cell reveal ${["","d1","d2","d3"][i]}`}>
            <div style={{fontSize:"clamp(48px,5vw,72px)",fontWeight:900,letterSpacing:"-.05em",lineHeight:1}}>{n}</div>
            <div style={{fontFamily:"var(--mono)",fontSize:9,color:"var(--g4)",marginTop:12,letterSpacing:".16em",textTransform:"uppercase"}}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// AI TANK
// ─────────────────────────────────────────────
function AITank() {
  return (
    <section id="aitank" style={{padding:"72px 48px"}}>
      <div style={{maxWidth:1400,margin:"0 auto"}}>
        <div className="reveal" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:3,alignItems:"stretch"}}>
          <div style={{background:"var(--s1)",border:"1px solid var(--b1)",padding:64,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <div>
              <div style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:".22em",textTransform:"uppercase",color:"var(--orange)",marginBottom:20,display:"flex",alignItems:"center",gap:12}}>
                <span style={{display:"inline-block",width:20,height:1,background:"var(--orange)"}}/>
                An xTransMatrix Product
              </div>
              <h2 style={{fontSize:"clamp(36px,3.5vw,56px)",fontWeight:900,letterSpacing:"-.04em",textTransform:"uppercase",lineHeight:.95}}>
                <em style={{fontStyle:"normal",color:"var(--orange)"}}>AI</em> Tank —<br/>where builders<br/>push limits.
              </h2>
              <p style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--g3)",lineHeight:1.9,letterSpacing:".04em",textTransform:"uppercase",marginTop:24,maxWidth:400}}>
                A collaborative hub for builders, thinkers, and technologists pushing the boundaries of AI.
              </p>
            </div>
            <a href="#" className="bracket-btn" style={{marginTop:40}}>
              <span className="br" style={{color:"var(--orange)"}}>⌐</span>
              <span className="inner" style={{borderColor:"rgba(255,122,92,.3)"}}>Join AI Tank</span>
              <span className="br" style={{color:"var(--orange)"}}>¬</span>
            </a>
          </div>
          <div style={{background:"rgba(255,122,92,.06)",border:"1px solid rgba(255,122,92,.15)",padding:64,position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <div style={{position:"absolute",top:-100,right:-100,width:400,height:400,background:"radial-gradient(circle,rgba(255,122,92,.1),transparent 65%)",pointerEvents:"none"}}/>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:16}}>
              <div style={{fontSize:48,fontWeight:900,letterSpacing:"-.04em",lineHeight:1}}>
                <em style={{fontStyle:"normal",color:"var(--orange)"}}>AI</em> TANK
              </div>
              <div style={{fontFamily:"var(--mono)",fontSize:9,letterSpacing:".18em",textTransform:"uppercase",color:"rgba(255,255,255,.25)"}}>A product of xTransMatrix Inc.</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2,marginTop:32}}>
              {[["Hub","Collaboration"],["Lab","Experimentation"],["Community","Builders"],["Launchpad","Next-gen AI"]].map(([k,v])=>(
                <div key={k} className="ait-prop"><strong>{k}</strong>{v}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CTA
// ─────────────────────────────────────────────
function CTA() {
  return (
    <section id="cta" style={{padding:"120px 48px"}}>
      <div style={{maxWidth:1400,margin:"0 auto"}}>
        <div style={{background:"var(--s1)",border:"1px solid var(--b1)",padding:"100px 80px",position:"relative",overflow:"hidden"}}>
          <CTACanvas/>
          <div style={{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"end"}}>
            <div className="reveal" style={{fontSize:"clamp(40px,4.5vw,72px)",fontWeight:900,letterSpacing:"-.05em",textTransform:"uppercase",lineHeight:.92}}>
              Better<br/>data.<br/><span style={{color:"var(--blue)"}}>Better<br/>models.</span>
            </div>
            <div className="reveal d2" style={{display:"flex",flexDirection:"column",gap:24}}>
              <p style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--g3)",lineHeight:1.9,letterSpacing:".04em",textTransform:"uppercase"}}>
                Talk to the team building production-grade AI data for the world's most ambitious autonomous systems.
              </p>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                <a href="#" className="bracket-btn" style={{fontSize:13}}>
                  <span className="br">⌐</span><span className="inner" style={{padding:"14px 24px"}}>Book a Call with Sales</span><span className="br">¬</span>
                </a>
                <a href="#hscroll" className="bracket-btn" style={{fontSize:13,opacity:.6}}>
                  <span className="br">⌐</span><span className="inner" style={{padding:"14px 24px"}}>Explore Services</span><span className="br">¬</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TEAM — Catalysts section
// ─────────────────────────────────────────────
function TeamCard({ member, idx }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(()=>{
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e])=>{ if(e.isIntersecting){setVis(true);obs.disconnect();} },{threshold:.06});
    obs.observe(el);
    return()=>obs.disconnect();
  },[]);

  return (
    <div
      ref={ref}
      className="team-card"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .75s ease ${idx * 60}ms, transform .75s ease ${idx * 60}ms`,
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(26,107,255,0.12)",
        background: "var(--s1)",
        cursor: "default",
        ...(hovered ? { borderColor:"rgba(26,107,255,0.35)", transform:"translateY(-6px)", boxShadow:"0 18px 50px rgba(26,107,255,0.10)" } : {}),
        transitionProperty: "opacity,transform,border-color,box-shadow",
      }}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
    >
      <div className="team-sweep"/>
      {/* Image */}
      <div style={{position:"relative",overflow:"hidden",aspectRatio:"1/1.18",background:"var(--s2)"}}>
        <img
          src={member.img} alt={member.name} loading="lazy"
          style={{
            width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",display:"block",
            filter: hovered?"grayscale(0%) contrast(1.05)":"grayscale(35%) contrast(1.05)",
            transform: hovered?"scale(1.04)":"scale(1)",
            transition:"filter .5s,transform .5s",
          }}
        />
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"38%",background:"linear-gradient(to top,rgba(12,15,26,0.65),transparent)",pointerEvents:"none"}}/>
      </div>
      {/* Info */}
      <div style={{padding:"14px 16px 18px",background:"var(--s1)"}}>
        <div style={{fontSize:13.5,fontWeight:800,letterSpacing:"-.015em",color:"#fff",marginBottom:4}}>{member.name}</div>
        <div style={{fontFamily:"var(--mono)",fontSize:7.5,letterSpacing:".15em",textTransform:"uppercase",color:"var(--blue)"}}>{member.role}</div>
        <div className="team-domain" style={{fontFamily:"var(--mono)",fontSize:7.5,letterSpacing:".07em",textTransform:"uppercase",color:"rgba(255,255,255,.26)",marginTop:5,opacity:0,transform:"translateY(4px)",transition:"opacity .28s,transform .28s"}}>
          {member.domain}
        </div>
      </div>
    </div>
  );
}

function Team() {
  const row1 = TEAM.slice(0,4);
  const row2 = TEAM.slice(4,8);

  return (
    <section id="catalysts" style={{padding:"96px 48px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 55% 50% at 100% 30%,rgba(26,107,255,0.06),transparent 60%)"}}/>
      <div style={{maxWidth:1240,margin:"0 auto",position:"relative",zIndex:1}}>

        {/* Header */}
        <div style={{marginBottom:52}}>
          <div className="reveal s-label">02 — People</div>
          <h2 className="reveal d1" style={{fontSize:"clamp(34px,3.8vw,60px)",fontWeight:900,letterSpacing:"-.045em",lineHeight:.92,textTransform:"uppercase",marginBottom:12}}>
            Meet our<br/><span style={{color:"var(--blue)"}}>Catalysts.</span>
          </h2>
          <p className="reveal d2" style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--g3)",lineHeight:1.9,letterSpacing:".04em",textTransform:"uppercase",maxWidth:480,marginTop:14}}>
            The individuals who architect, build, and deploy intelligence infrastructure for the world's most demanding autonomous systems.
          </p>
        </div>

        {/* Row 1 */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:14}}>
          {row1.map((m,i)=><TeamCard key={m.name} member={m} idx={i}/>)}
        </div>
        {/* Row 2 */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>
          {row2.map((m,i)=><TeamCard key={m.name} member={m} idx={i+4}/>)}
        </div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// FOOTER — full detailed version
// ─────────────────────────────────────────────
function Footer() {
  const locs=[
    {city:"Bangalore, KA",addr:"Brigade Triumph, Hebbal Kempapura"},
    {city:"Mangalore, KA",addr:"Vertex Quad, Bhandary Heights"},
    {city:"Noida, UP",    addr:"Worcozz Co-working, Sector 63"},
  ];
  const services   =["Forge AI","Human-in-the-Loop AI","Advisory","Tech Squads"];
  const industries =["Med-Tech","Automobile","Insurance","Banking & Payment"];
  const company    =["Cultures & Values","Diversity by Young Minds","Awards & Recognition","Our Partners","Press","Careers"];
  const intelligence=["XTMX Intelligence","Events","Case Studies"];
  const platform   =["VeriLabel","Personal AI Manager","AI Business Writer","Pricing","Documentation"];

  return (
    <footer style={{background:"var(--s1)",borderTop:"1px solid var(--b1)",position:"relative",overflow:"hidden"}}>
      {/* Top blue shimmer */}
      <div style={{position:"absolute",top:0,left:0,right:0,height:1,zIndex:2,background:"linear-gradient(90deg,transparent,rgba(26,107,255,0.45),transparent)"}}/>
      {/* BG glow */}
      <div style={{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 50% 65% at 0% 50%,rgba(13,71,200,0.06),transparent 55%)"}}/>

      <div style={{maxWidth:1240,margin:"0 auto",position:"relative",zIndex:1}}>

        {/* Location strip */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",borderBottom:"1px solid var(--b1)"}}>
          {locs.map((loc,i)=>(
            <div key={loc.city} style={{display:"flex",alignItems:"center",gap:12,padding:"16px 40px",borderRight:i<2?"1px solid var(--b1)":"none"}}>
              <span style={{width:4,height:4,borderRadius:"50%",background:"var(--blue)",flexShrink:0}}/>
              <div>
                <div style={{fontSize:10.5,fontWeight:700,color:"#E8EBF4",letterSpacing:"-.01em",marginBottom:2}}>{loc.city}</div>
                <div style={{fontFamily:"var(--mono)",fontSize:7,letterSpacing:".03em",color:"var(--g4)"}}>{loc.addr}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main 4-col grid */}
        <div style={{display:"grid",gridTemplateColumns:"1.7fr 1fr 1fr 1fr",borderBottom:"1px solid var(--b1)"}}>

          {/* Brand */}
          <div style={{padding:"48px 40px"}}>
            <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:18}}>
              <LogoGrid size={4} gap={2}/>
              <span style={{fontSize:15,fontWeight:800,letterSpacing:"-.02em"}}>
                x<em style={{fontStyle:"normal",color:"var(--blue)"}}>Transmatrix</em>
              </span>
            </div>
            <div style={{fontSize:"clamp(14px,1.3vw,18px)",fontWeight:700,letterSpacing:"-.02em",color:"#E8EBF4",lineHeight:1.3,marginBottom:16,maxWidth:220}}>
              Better data.<br/><span style={{color:"var(--blue)"}}>Better models.</span><br/>Better outcomes.
            </div>
            <p style={{fontFamily:"var(--mono)",fontSize:8.5,color:"var(--g4)",lineHeight:1.9,letterSpacing:".05em",textTransform:"uppercase",maxWidth:245,marginBottom:24}}>
              Multimodal data infrastructure for physical AI. Powering production-grade autonomous systems worldwide.
            </p>
            <a href="#" className="bracket-btn" style={{fontSize:9}}>
              <span className="br" style={{fontSize:11}}>⌐</span>
              <span className="inner" style={{padding:"7px 13px"}}>Book a Call with Sales</span>
              <span className="br" style={{fontSize:11}}>¬</span>
            </a>
            <div style={{display:"flex",gap:7,marginTop:20}}>
              {["ISO 27001","ISO 9001"].map(cert=>(
                <div key={cert} style={{display:"flex",alignItems:"center",gap:4,fontFamily:"var(--mono)",fontSize:7,letterSpacing:".11em",textTransform:"uppercase",color:"var(--g4)",border:"1px solid var(--b1)",padding:"4px 9px"}}>
                  <span style={{color:"var(--blue)",fontSize:8}}>✓</span>{cert}
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:6,marginTop:18}}>
              {[["IG","Instagram"],["YT","YouTube"],["in","LinkedIn"]].map(([label,title])=>(
                <a key={label} href="#" title={title}
                  style={{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,border:"1px solid var(--b2)",color:"var(--g4)",textDecoration:"none",fontSize:10,fontWeight:700,borderRadius:3,fontFamily:"var(--mono)",transition:"background .2s,border-color .2s,color .2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.background="var(--blue)";e.currentTarget.style.borderColor="var(--blue)";e.currentTarget.style.color="#fff";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor="var(--b2)";e.currentTarget.style.color="var(--g4)";}}
                >{label}</a>
              ))}
            </div>
          </div>

          {/* Services & Industries */}
          <div style={{padding:"48px 40px",borderLeft:"1px solid var(--b1)"}}>
            <FooterColLabel>Services</FooterColLabel>
            <FooterLinks links={services}/>
            <FooterColLabel style={{marginTop:26}}>Industries</FooterColLabel>
            <FooterLinks links={industries}/>
          </div>

          {/* Company & Intelligence */}
          <div style={{padding:"48px 40px",borderLeft:"1px solid var(--b1)"}}>
            <FooterColLabel>Company</FooterColLabel>
            <FooterLinks links={company}/>
            <FooterColLabel style={{marginTop:26}}>Intelligence</FooterColLabel>
            <FooterLinks links={intelligence}/>
          </div>

          {/* Platform */}
          <div style={{padding:"48px 40px",borderLeft:"1px solid var(--b1)"}}>
            <FooterColLabel>Platform</FooterColLabel>
            <FooterLinks links={platform}/>
            <div style={{marginTop:24}}>
              <div style={{fontFamily:"var(--mono)",fontSize:7.5,letterSpacing:".18em",textTransform:"uppercase",color:"var(--g4)",marginBottom:9}}>Also by xTransMatrix</div>
              <div style={{display:"inline-block",fontFamily:"var(--mono)",fontSize:7.5,fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"var(--orange)",border:"1px solid rgba(255,122,92,.2)",padding:"3px 9px"}}>
                AI Tank ↗
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10,padding:"16px 40px"}}>
          <div style={{fontFamily:"var(--mono)",fontSize:8,color:"var(--g4)",letterSpacing:".1em",textTransform:"uppercase"}}>
            © 2026 xTransMatrix Inc. &nbsp;·&nbsp; All rights reserved.
          </div>
          <div style={{display:"flex"}}>
            {["Terms of Service","Privacy Policy","Cookies"].map((link,i,arr)=>(
              <a key={link} href="#"
                style={{fontFamily:"var(--mono)",fontSize:8,color:"var(--g4)",textDecoration:"none",letterSpacing:".1em",textTransform:"uppercase",padding:`0 ${i===arr.length-1?0:13}px 0 ${i===0?0:13}px`,borderRight:i<arr.length-1?"1px solid var(--b1)":"none",transition:"color .2s"}}
                onMouseEnter={e=>e.target.style.color="#B8BDD0"}
                onMouseLeave={e=>e.target.style.color="var(--g4)"}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Purple bar */}
      <div style={{height:4,background:"linear-gradient(90deg,var(--purple),var(--purple-l),var(--purple))"}}/>
    </footer>
  );
}

function FooterColLabel({children,style={}}) {
  return (
    <div style={{fontFamily:"var(--mono)",fontSize:8,fontWeight:700,letterSpacing:".22em",textTransform:"uppercase",color:"var(--g4)",marginBottom:18,...style}}>
      {children}
    </div>
  );
}

function FooterLinks({links}) {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      {links.map((link,i)=>(
        <a key={link} href="#" className="ft-link"
          style={{borderBottom:i<links.length-1?"1px solid rgba(255,255,255,0.025)":"none"}}
        >{link}</a>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────
export default function App() {
  useScrollReveal();
  return (
    <>
      <GlobalStyles/>
      <ProgressBar/>
      <Nav/>
      <Hero/>
      <Marquee/>
      <HScrollServices/>
      <ModalitiesScroll/>
      <Platform/>
      <Quality/>
      <Numbers/>
      <AITank/>
      <Team/>
      <CTA/>
      <Footer/>
    </>
  );
}