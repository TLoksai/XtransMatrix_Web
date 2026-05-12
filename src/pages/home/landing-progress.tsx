import { useState, useEffect } from "react";

function ProgressBar() {
  const [scale, setScale] = useState(0);
  useEffect(()=>{
    const h=()=>setScale(window.scrollY/(document.body.scrollHeight-window.innerHeight));
    window.addEventListener("scroll",h,{passive:true});
    return()=>window.removeEventListener("scroll",h);
  },[]);
  return <div id="prog" style={{transform:`scaleX(${scale})`}}/>;
}

export default ProgressBar;