import React,{ useState } from 'react';
import Call from "./call";
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false);
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <div className="center">
      <h2>Good {isMorning ? 'Morning' : 'Night'}</h2>
      <Call counter={count}/>
      <button onClick={()=>setCount(++count)}>Update Counter</button>
      <button onClick={()=>setMorning(!isMorning)}>Update Light</button>
      </div>
    </div>
  );
};

export default App;
