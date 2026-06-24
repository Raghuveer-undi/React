import React, { useEffect, useState } from 'react'
import Greeting from './Greeting';

export default function App() {
  // let name="Gamana";

  const[name,setName] = useState("Gamana");
  const[color,setColor]=useState("Red");
  const[count,setCount]=useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=>count+1)
    },1000)
  })

  return (
    <div>
       <h2>Hey Hello {name}</h2>
      <button onClick={()=>setName("Chandana")}>Click for Change</button>
       <Greeting name={name}/>
      <h2>My FavColor is {color}</h2>
      <button onClick={()=>setColor("Black")}>Reveal Color</button>
      <Greeting color={color}/>

      <h2>The count is {count}!</h2>
      <button onClick={()=>setCount(count+1)}>Next Count</button>
      <button onClick={()=>setCount(count-1)}>Prev Count</button>
     <h1>Time Starts Now {count}!</h1>
    </div>
  )
}
//What is useState? 