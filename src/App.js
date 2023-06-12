import React, { useEffect, useState } from 'react';

import LogicPanel from './LogicPanel';
import './App.css';
import logo from './ranchlogo.svg';

function App() {

  return (
    <div className='overscroll-contain'>
      <header className=' bg-indigo-950'>
        <div className=' text-white text-lg  p-2 mx-2'>
          <img src={logo} className="h-8" alt="logo" />
        </div>
      </header>
      <div className='h-screen sm:flex sm:flex-row md:flex-row '>
        <div className='min-w-[30%]'>
          <div className='bg-neutral-400 p-2 flex text-lg font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
            </svg>
            &nbsp;
            Instructions
          </div>
          <div className='h-full flex-row text-md px-4 p-4 bg-neutral-300 overscroll-contain'>
            <div className='mb-2 flex'>
              <div  className='font-bold'>1.&nbsp; &nbsp;</div>  Set the starting position: Drag and place the sprite on the stage to set its initial position. Click and drag the sprite to position it where you want it to start.
            </div>
            <div className='my-2 flex'>
              <div  className='font-bold'>2.&nbsp; &nbsp;</div>   Add movement blocks: In the block palette on the left side of the screen, locate the "Motion" category. You will find blocks like "Move 10 steps," "Turn 15 degrees," and "Go to x: []y:[],"
            </div>
            <div className='my-2 flex'>
              <div  className='font-bold'>3.&nbsp; &nbsp;</div>   Use the "Go to x: []y: []" block: Drag the "Go to x: [] y: []" block into the scripting area. Set the x and y values of the block to the coordinates of the target position you want the sprite to move to. For example, if you want the sprite to move to position (200, 100), set the x value to 200 and the y value to 100.
            </div>
          </div>
          
        </div>
        <div className='min-w-[70%] w-full'>
          <div className='bg-blue-950 p-2 flex text-lg text-white font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" color="white" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
            &nbsp;
            Build
          </div>
          <div className=' bg-indigo-900 h-full '>
            
            <div>
            <LogicPanel />
            </div>
          </div>
        </div>
        
      
      </div>
    </div>
  );
}

export default App;
