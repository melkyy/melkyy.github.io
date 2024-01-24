import React from 'react'

export default function Experience(props) {
  return (
    <div style={{ backgroundColor: '#080E1C', height: '100%' }}>
      <div className="flex items-center justify-center h-screen">
        <ol className="relative border-l border-[#FF6947] dark:border-[#FF6947] md:w-2/4 sm:w-full">
         {
          props?.text.Experience.map(el=> (
            <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-[#FF6947] rounded-full mt-1.5 -left-1.5 border border-[#FF6947] dark:border-[#FF6947] dark:border-[#FF6947]"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{el.date}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{el.ubication}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{el.info}</p>
          </li>
          ))
         }
        </ol>
      </div>
    </div>
  )
}
