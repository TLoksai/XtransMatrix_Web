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

function Quality() {
  useScrollReveal();
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

function Numbers() {
  useScrollReveal();
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

export default Quality;
export { Quality, Numbers };