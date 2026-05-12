import { useState, useEffect, useRef } from "react";

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("vis"); obs.unobserve(e.target); } });
    }, { threshold:.08 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

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

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stateRef  = useRef<any>({ dots:[], rotX:0, rotY:0, tick:0, mouseX:0, mouseY:0, R:1 });
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let raf; const s = stateRef.current; const N = 900;
    function resize() { c.width = c.offsetWidth||window.innerWidth; c.height = c.offsetHeight||window.innerHeight; buildDots(); }
    function buildDots() {
      s.dots = [];
      const W=c.width,H=c.height; if(!W||!H) return;
      const cx=W*.62,cy=H*.48,R=Math.min(W,H)*.26; s.R=R;
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
        const depth=(z/s.R+1)/2;
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

function Nav() {
  const [openItem, setOpenItem] = useState<string | null>(null);
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

  const NAV_ITEMS = [
    { label:"About",       links:["Cultures, Values and ESG","Diversity by Young Minds","Recent Awards and Recognition","Our Partners","Humans Behind the Intelligence"] },
    { label:"Services",    links:["Forge AI","Human-in-the-Loop AI","Advisory","Tech Squads"] },
    { label:"Industries",  links:["MEDTECH","Automobile","Insurance","Banking and Payment"] },
    { label:"Intelligence",links:["XTMX Intelligence","Events","Case Studies"] },
    { label:"Careers",     links:["Hiring / Innotern","Experienced Hire","Meet Our Team","Future of Work"] },
  ];

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
        <a href="#" style={{display:"flex",alignItems:"center",gap:9,textDecoration:"none",padding:"0 12px 0 8px",flexShrink:0}}>
          <div style={{width:26,height:26,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:6,display:"grid",placeItems:"center",flexShrink:0}}>
            <SVGLogo size={14}/>
          </div>
          <span style={{fontSize:13.5,fontWeight:700,letterSpacing:"-.01em",color:"#fff"}}>
            x<em style={{fontStyle:"normal",color:"var(--purple-l)"}}>Transmatrix</em>
          </span>
        </a>

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

        <div style={{display:"flex",alignItems:"center",gap:6,padding:"0 6px",marginLeft:"auto",flexShrink:0}}>
          <button style={{background:"var(--purple)",color:"#fff",border:"none",borderRadius:20,fontSize:12,fontWeight:600,padding:"6px 17px",cursor:"pointer",fontFamily:"Inter,sans-serif",transition:"background .2s"}}
            onMouseEnter={(e)=>(e.currentTarget as HTMLButtonElement).style.background="var(--purple-l)"}
            onMouseLeave={(e)=>(e.currentTarget as HTMLButtonElement).style.background="var(--purple)"}
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

function Hero() {
  return (
    <section id="hero" style={{minHeight:"100vh",display:"flex",alignItems:"flex-start",overflow:"hidden",paddingTop:-60,position:"relative"}}>
      <HeroCanvas/>
      <div style={{maxWidth:1400,width:"100%",margin:"0 auto",padding:"80px 48px 0",display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:"calc(100vh - 20px)",alignItems:"flex-start",position:"relative",zIndex:2}}>
        <div style={{paddingRight:40,paddingTop:60}}>
          <div style={{marginBottom:6,paddingBottom:6,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
            <h2 style={{fontSize:"clamp(16px,1.8vw,22px)",fontWeight:700,letterSpacing:"-.02em",lineHeight:1.1,color:"#fff",marginBottom:4,whiteSpace:"nowrap"}}>
              AI-Powered Data Annotation for Enterprise-Grade Accuracy
            </h2>
            <p style={{fontSize:"clamp(11px,1vw,14px)",color:"var(--g3)",lineHeight:1.4,maxWidth:560,whiteSpace:"nowrap"}}>
              End-to-end annotation pipelines delivering 99%+ quality at scale enabling faster production-ready AI
            </p>
          </div>
          <div className="anim-fUp" style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--blue)",letterSpacing:".2em",textTransform:"uppercase",marginBottom:32,display:"flex",alignItems:"center",gap:10}}>
            <span style={{display:"inline-block",width:24,height:1,background:"var(--blue)"}}/>
            <a href="https://verilabel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>Powered by <img src="/images/VL-logo.png" alt="VeriLabel" style={{ height: "20px", width: "auto", objectFit: "contain", display: "inline-block", verticalAlign: "middle" }} /> VeriLabel</a>
          </div>
          <h1 style={{fontSize:"clamp(52px,5.5vw,88px)",fontWeight:900,letterSpacing:"-.05em",lineHeight:.92,textTransform:"uppercase"}}>
            {[["l1","The data"],["l2","engine for"],["l3","Physical","blue"],["l4","AI."]].map(([cls,text,isBlue])=>(
              <span key={cls} className={`line-clip ${cls}`}>
                <span className="line-inner" style={isBlue?{color:"var(--blue)"}:{}}>{text}</span>
              </span>
            ))}
          </h1>
        </div>
        <div className="anim-fIn" style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",paddingTop:110,paddingBottom:80,opacity:0,animationDelay:".8s"}}>
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

export default function LandingHero() {
  useScrollReveal();
  return (
    <>
      <Nav/>
      <Hero/>
    </>
  );
}