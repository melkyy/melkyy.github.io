import React from 'react'
import { useEffect } from 'react';

import TechnologiesCard from './TechnologiesCard';

export default function About({ text, scrollResponsive }) {
  useEffect(() => { console.log(text) }, [text]);
  return (
    <div style={{ backgroundColor: '#080E1C', whiteSpace: 'pre-wrap' }} class={scrollResponsive ? 'h-full pl-5 pr-2 pt-10' : 'h-full flex pl-15 pt-10 spacing-4 space-x-8'}>
      <div class={scrollResponsive ? 'h-full p-5' : 'h-full p-5 w-3/5 flex-col'}>
        <div>
          <h1 class='text-bold text-4xl font-bold' style={{ color: '#FF6947' }}>About me</h1>
          <br></br>
          <h2 class='text-lg text-white text-justify'>{text.introduccion}</h2>
        </div>
        <br></br>
        <div class=''>
          <h1 class='text-bold text-4xl font-bold' style={{ color: '#FF6947' }}>Interest</h1>
          <br></br>
          <ul class="w-full text-lg text-white space-y-1 list-disc list-inside">
            {text.interest.map((el) => (
              <li>{el}</li>
            ))}
          </ul>
        </div>
      </div>
      <br></br>
      <TechnologiesCard></TechnologiesCard>
    </div>
  )
}
