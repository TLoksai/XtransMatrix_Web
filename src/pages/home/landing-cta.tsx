import { useEffect, useRef } from "react";

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("vis"); obs.unobserve(e.target); } });
    }, { threshold:.08 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function CTACanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const c=canvasRef.current; if(!c) return;
    const ctx=c.getContext("2d"); let raf;
    const nodes=Array.from({length:35},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.0002,vy:(Math.random()-.5)*.0002}));
    function resize(){const r=c.parentElement.getBoundingClientRect();c.width=r.width;c.height=r.height;}
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

function CTA() {
  useScrollReveal();
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

export default CTA;