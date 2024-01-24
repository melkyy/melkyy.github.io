import React from 'react'
import { useEffect } from 'react';

export default function Introduccion({ introResponsive }) {
    return (
        <div class='flex justify-center h-full w-full' style={{ backgroundColor: '#080E1C' }}>
            <div  className={ introResponsive ? 'flex flex-col shrink justify-center': 'flex space-x-8' }>
                <div className={ introResponsive ? ' text-4xl font-bold mb-10': 'text-4xl m-auto font-bold' }>
                    <h1 style={{ color: '#FF6947' }}>Aaron Rodriguez</h1>
                    <h1 class='text-white'>Software Developer</h1>
                </div>
                <div className={ introResponsive ? 'w-60 self-center': 'w-72 m-auto' }>
                    <img src="aaron.png" ></img>
                </div>
            </div>
        </div>

    )
}

