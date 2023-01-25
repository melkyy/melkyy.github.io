import './Principal.css';
import React from 'react';
import { useEffect } from 'react';
import anime from 'animejs';
export default function Principal(props) {

    useEffect(() => {

    }, []);
    return <div className='container'>
        <div className='principalText'>
            <div>
                <h1 style={{ color: '#FFFFFF' }}> Aaron Rodriguez </h1>

                <h2 style={{ color: '#FF6947' }}>Desarrollador de software</h2>
            </div>

        </div>
        <div className='principalImage'>
            <div className='imagePortail'>
                <div style={{ width: '100%' }}>
                    <div id="left1" style={{ position: 'relative', top: -40, left: 25, backgroundColor: '#FF6947', width: 4, height: 1 }}></div>
                    <div id="left2" style={{ position: 'relative', top: -5, left: -4, backgroundColor: '#FF6947', width: 1, height: 4 }}></div>
                    <img src="aaron.png" style={{ display: 'inline', marginTop: "-80px" }}></img>
                    <div id="right1" style={{ position: 'relative', bottom: -30, left: 230, backgroundColor: '#FF6947', width: 4, height: 1 }}></div>
                    <div id="right2" style={{ position: 'relative', top: -3, left: 262, backgroundColor: '#FF6947', width: 1, height: 4, }}></div>
                </div>
            </div>
        </div>
    </div>
}