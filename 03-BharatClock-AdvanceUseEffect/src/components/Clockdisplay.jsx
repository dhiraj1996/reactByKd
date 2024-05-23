import { useEffect } from "react";
import { useState } from "react";

function Clockdisplay() {
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
      const intervalId = setInterval(()=>{
        setTime(new Date());
      },1000);
      return () => clearInterval(intervalId);
    },[])

    // let time= new Date();
  return (
    <div>
        <p>Date: {time.toLocaleDateString()} </p>
        <p>Time: {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clockdisplay