import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("vis"); obs.unobserve(e.target); } });
    }, { threshold:.08 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Platform() {
  useScrollReveal();
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

export default Platform;