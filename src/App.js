import './App.css';
import Principal from './Pages/Principal';
import React, { useEffect, useState } from 'react';
import text from './Text/english';
function App() {
  const [scrollable, setOnScrollable] = useState(false);
  useEffect(()=>{
    console.log('scrollable: ', scrollable);
  },[scrollable])
  return (
    <div style={ scrollable ? { backgroundColor: '#080E1C' } : { height: '100vh', backgroundColor: '#080E1C' }} className="font-mono">
      <Principal text={text} onScrollable={setOnScrollable}></Principal>
    </div>
  );
}

export default App;
