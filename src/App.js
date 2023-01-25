import './App.css';
import Principal from './Pages/Principal';
import anime from 'animejs/lib/anime.es.js';
import React from 'react';

function App() {
  React.useEffect(()=>{
    
  },[])
  return (
    <div className="container" onScroll={()=> {console.log('sadasda')}}>
      <Principal></Principal>
    </div>
  );
}

export default App;
