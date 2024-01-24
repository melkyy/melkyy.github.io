import React, { useEffect, useState } from 'react'
import anime from 'animejs';

export default function NavBar({ navChange, activeIndex, navbarResponsive, navbarMinWidth }) {
    const [currentWidthPosition, setPosition] = useState(0);
    const [hideResponsiveMenu, setHideResponsiveMenu] = useState(false);
    useEffect(() => {
        let movingFormula = 0;
        if (activeIndex > currentWidthPosition) {
            movingFormula = 115 * activeIndex;
        } else {
            movingFormula = (115 * activeIndex - currentWidthPosition);
        }
        anime({
            easing: 'easeOutExpo',
            targets: '.line',
            translateX: movingFormula
        });
        setPosition(activeIndex);

    }, [activeIndex]);

    return (
        <div style={navbarMinWidth ? { backgroundColor: '#02060F', height: '50px', width: '100%', position: 'fixed', top: 0 } : { backgroundColor: '#02060F', height: '50px', width: '100%', position: 'relative' }} >
            {/*Cuando cambie el width */}
            {
                navbarResponsive ?
                    <nav style={{ backgroundColor: '#02060F' }}>
                        <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
                            <div href="#" class="flex items-center">
                            </div>
                            <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg" aria-controls="navbar-hamburger" aria-expanded="false"
                                onClick={() => { setHideResponsiveMenu(!hideResponsiveMenu) }}
                            >
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                            <div class={!hideResponsiveMenu ? "w-full hidden" : "w-full"} id="navbar-hamburger">
                                <ul class="p-2 flex flex-col font-medium mt-4 rounded-lg justify-items-center text-white">
                                    <li onClick={() => { navChange(1); setHideResponsiveMenu(!hideResponsiveMenu) }} className=' block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray'>
                                        <h4 size="$x2">Me</h4>
                                    </li>
                                    <li onClick={() => { navChange(2); setHideResponsiveMenu(!hideResponsiveMenu) }} className=' block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray'>
                                        <h4 size="$x2">About</h4>
                                    </li>
                                    <li onClick={() => { navChange(3); setHideResponsiveMenu(!hideResponsiveMenu) }} className=' block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray'>
                                        <h4 size="$x2">Experience</h4>
                                    </li>
                                    <li onClick={() => { navChange(4); setHideResponsiveMenu(!hideResponsiveMenu) }} className=' block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray'>
                                        <h4 size="$x2">Projects</h4>
                                    </li>
                                    <li onClick={() => { navChange(5); setHideResponsiveMenu(!hideResponsiveMenu) }} className=' block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray'>
                                        <h4 size="$x2">Contact</h4>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    : <>
                        <div style={{ float: 'right', width: '595px', height: '90%', display: 'flex', color: 'white' }}>
                            <div onClick={() => { navChange(1) }} style={{ height: '100%', width: '115px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <h4 size="$x2">Me</h4>
                            </div>
                            <div onClick={() => { navChange(2) }} style={{ height: '100%', width: '115px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <h4 size="$x2">About</h4>
                            </div>
                            <div onClick={() => { navChange(3) }} style={{ height: '100%', width: '115px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <h4 size="$x2">Experience</h4>
                            </div>
                            <div onClick={() => { navChange(4) }} style={{ height: '100%', width: '115px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <h4 size="$x2">Projects</h4>
                            </div>
                            <div onClick={() => { navChange(5) }} style={{ height: '100%', width: '115px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <h4 size="$x2">Contact</h4>
                            </div>
                        </div>
                        <div className='line' style={{ width: '115px', height: '10%', backgroundColor: '#FF6947', position: 'absolute', bottom: 0, right: '480px' }}>
                        </div>
                    </>
            }

        </div>
    )
}
