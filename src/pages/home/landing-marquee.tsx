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

export default Marquee;