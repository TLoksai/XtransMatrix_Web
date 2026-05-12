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

export default Numbers;