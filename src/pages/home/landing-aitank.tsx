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

function AITank() {
  useScrollReveal();
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

export default AITank;