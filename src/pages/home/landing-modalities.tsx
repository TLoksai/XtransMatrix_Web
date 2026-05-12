import { useEffect, useRef, useState } from "react";

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

export default ModalitiesScroll;