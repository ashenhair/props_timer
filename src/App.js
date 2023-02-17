import React, { useEffect, useState } from "react";
import Clock from './Clock.js';

function TimePicker(){
    const [time,setTime] =useState(new Date())
    
    useEffect(()=>{
        setInterval(()=>setTime(new Date()),1000)
    },[])

    return time;        
   
}

export default function App() {
  const time = TimePicker();
  const [color, setColor] = useState('color');
  return (
    <div className="body">
      <p className="color" >
        Pick a color:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral" style={{ color: "lightcoral" }}>lightcoral</option>
          <option value="green" style={{ color: "green" }}>green</option>
          <option value="blue" style={{ color: "blue" }}>blue</option>
          <option value="maroon" style={{ color: "maroon" }}>maroon</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
