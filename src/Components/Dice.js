import React from 'react'
import image1 from '../images/Dice1.png'
import image2 from '../images/Dice2.png'
import image3 from '../images/Dice3.png'
import image4 from '../images/Dice4.png'
import image5 from '../images/Dice5.png'
import image6 from '../images/Dice6.png'
import { useState } from 'react'
function Dice() 
{
    const images=[image1,image2,image3,image4,image5,image6];
    const [picture1,setpicture1]=useState(images[0]);
    const[picture2,setpicture2]=useState(images[0]);

    const roll =()=>
    {
        const res1=Math.floor(Math.random()*(6));
        const res2=Math.floor(Math.random()*(6));
        setpicture1(images[res1]);
        setpicture2(images[res2]);
    }

  return (
    <div className='flex flex-col items-center justify-center max-h-120 max-w-120 gap-10'>
        
        <h1 className='text-2xl text-white font-semibold rounded-xl bg-slate-600 px-10 py-2 '>Welcome To Ultimate DiceRoller</h1>
        
        <div className="flex flex-row justify-center gap-10 ">
          <img src={picture1} alt="Oops!!! Error Image1" className='h-[20rem] w-[20rem] shadow-lg rounded-xl'/>
          <img src={picture2} alt="Oops!!! Error Image1" className='h-[20rem] w-[20rem] shadow-lg rounded-xl'/>
          
        </div>
        <button onClick={roll} className='text-white px-10 py-2 rounded-md transition ease-in-out delay-150 bg-slate-600 hover:translate-y-1 hover:scale-110  hover:bg-slate-700 duration-300 ...'>Click Me</button>
        
    </div>
  )
}

export default Dice