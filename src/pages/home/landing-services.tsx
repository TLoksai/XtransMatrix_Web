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

function CardCanvas({type}: {type: string}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const c=canvasRef.current; if(!c) return;
    const ctx=c.getContext("2d"); let raf,t=0;
    function size(){const p=c.parentElement;c.width=p.offsetWidth||280;c.height=p.offsetHeight||200;}
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

export default HScrollServices;