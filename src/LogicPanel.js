import React, { useEffect, useState } from 'react';
import Grid from './Grid';

const LogicPanel = () => {
  const [directions, setDirections] = useState([]);
  const [robotPosition, setRobotPosition] = useState({ x: 1, y: 0 });
  const [updateddirections, setupdatedDirections] = useState([]);
  const [dropAreas, setDropAreas] = useState(Array(16).fill(null));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [goalreach, setGoalreach]=useState(false);

  const handleDragStart = (event, direction) => {
    event.dataTransfer.setData('text/plain', direction);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const direction = event.dataTransfer.getData('text/plain');
    const updatedDropAreas = [...dropAreas];
    updatedDropAreas[index] = direction;
    setDropAreas(updatedDropAreas);
    setDirections([...directions, direction]);
    setIsPlaying(false);
    setupdatedDirections([]);
    setCurrentStep(0); 
    setRobotPosition({ x: 1, y: 0 });
  };
  // const handleRemoveDirection = (index) => {
  //   const updatedDirections = [...directions];
  //   updatedDirections.splice(index, 1);
  //   setDirections(updatedDirections);
  //   const updatedDropAreas = [...dropAreas];
  //   updatedDropAreas[index] = null;
  //   setDropAreas(updatedDropAreas);
  // };
  // const onDirectionsChange=(directions)=>{
  //   setupdatedDirections([...updateddirections,])
  // };
  



  const handlePlay = () => {
    // directions.map((item,index)=>{
    //   updateRobotPosition(item);
    // })
    setIsPlaying(true);
    setCurrentStep(0); 
    setupdatedDirections([]);
    setRobotPosition({ x: 1, y: 0 });
  };
  
  const cleardir= ()=>{
      setDirections([]);
      setupdatedDirections([]);
      console.log('cleared');
      setDropAreas(Array(16).fill(null));
      setRobotPosition({ x: 1, y: 0 });
      console.log('updated');
      setCurrentStep(0);
      setIsPlaying(false);
  }

  const goalreached=()=>{
      setIsPlaying(false);
      setGoalreach(true);
  }

    useEffect(() => {
    const executeDirections = () => {
      if (isPlaying && currentStep < directions.length) {
        const direction = directions[currentStep];
        let newPosition = { ...robotPosition };

        switch (direction) {
          case 'Up':
            newPosition.y -= 1;
            break;
          case 'Down':
            newPosition.y += 1;
            break;
          case 'Left':
            newPosition.x -= 1;
            break;
          case 'Right':
            newPosition.x += 1;
            break;
          default:
            break;
        }
        
        setupdatedDirections([...updateddirections,direction]);
        setRobotPosition(newPosition);
        setTimeout(() => {}, 20000);
        console.log(robotPosition);
        if(robotPosition.x==4 && robotPosition.y==4)
        {
          goalreached();
        }
        setCurrentStep(currentStep + 1);
      }
    };

    executeDirections();
  }, [directions, currentStep, robotPosition, isPlaying]);

  const func=()=>{
    console.log(robotPosition);
  }

  return (
     <div>
      <div className='flex-grow '>
      <div className='flex-row flex-grow lg:flex p-4 py-8 '>
        <div className="px-2 " >
          
          <Grid robotPosition={robotPosition} />
        </div>
      
        <div className='w-full lg:px-2 py-2 lg:py-0 md:py-2'>
          <div className=' bg-indigo-950 h-full min-h-40 lg:h-full'>
            <div className='text-white bg-indigo-400 w-full p-2 border-rounded-lg'>
              Instructions Implemented
            </div>
            <div className="flex-wrap text-white">
              
              <div className='p-2 overscroll-contain'>
              {updateddirections.map((direction, index) => (
                <div
                  key={index}
                  className="mb-1"
                >
                  Robot Moved : {direction}
                  
                </div>
              ))}
              {(robotPosition.x==5 && robotPosition.y==4)?<div>***** Goal Reached *****</div>:<div></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='p-4 mt-10 mb-0 border-rounded-lg bg-indigo-500 text-white'>
        <div className=' text-xl'>Logic Pannel:</div>
        
          <div className="flex flex-wrap mt-4">
        {dropAreas.map((direction, index) => (
          <div
            key={index}
            className="w-8 h-8 flex bg-white font-bold text-lg text-black items-center justify-center border border-gray-300 m-1 "
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
          >
            {direction=='Up' ? <p className='font-bold p-1 text-lg'>↑</p> : ''}
            {direction=='Down' ? <p className='font-bold p-1 text-lg'>↓</p> : ''}
            {direction=='Left' ? <p className='font-bold p-1 text-lg'>←</p> : ''}
            {direction=='Right' ? <p className='font-bold p-1 text-lg'>→</p> : ''}
          </div>
        ))}
      </div>
      </div>
        <div className=" mb-0 p-4 bg-indigo-800 flex px-4 space-x-4">
          
          <div
            className="w-10 h-10 flex  px-4 bg-white font-bold text-lg text-black items-center justify-center border border-gray-300 rounded-md cursor-move"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, 'Up')}
          >
            ↑
          </div>
          <div
            className="w-10 h-10 flex  px-4 bg-white font-bold text-lg text-black items-center justify-center border border-gray-300  rounded-md cursor-move"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, 'Right')}
          >
            →
          </div>
          <div
            className="w-10 h-10 flex  px-4 bg-white font-bold text-lg text-black items-center justify-center border border-gray-300  rounded-md cursor-move"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, 'Down')}
          >
            ↓
          </div>
          <div
            className="w-10 h-10 flex  px-4 bg-white font-bold text-lg text-black items-center justify-center border border-gray-300  rounded-md cursor-move"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, 'Left')}
          >
            ←
          </div>
          
          <div className="ml-6 bg-amber-500 text-lg font-bold text-indigo-600 px-2 flex items-center justify-center rounded-md"
          onClick={handlePlay}
          >
            {/* Logic panel UI */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            <button >
              Play
            </button>
          </div>
          <div
            className=" mx-2 bg-amber-500 text-lg font-bold text-indigo-600 px-2 flex items-center justify-center rounded-md"
            onClick={() => 
              {cleardir(); }} 
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
            </svg>
            Reset
          </div>
          
        </div>
    </div>
  );
};

export default LogicPanel;
