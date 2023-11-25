"use client";

import React from 'react';
import Image from 'next/image';
import Btn from './Btn';
import {MdOutlineArrowRight} from "react-icons/md";

const Guidlines = () => {

    const Steps = [
        "Provide us with detatils",
        "Pick the suitable plan for you",
        "Online scheduling in few clicks",
        "We collect waste and leave quickly"
    ];

  return (
    <div 
    className='
        bg-black
        relative
        w-full
        text-white
        h-[91vh]
    '
    >
        <Image 
            src={"/images/Guidlines.jpg"} 
            alt='guidline background'
            className='filter brightness-50 z-0 blur-[2px]'
            fill
            style={{objectFit: "contain"}}
        />
        <div 
            className='w-full h-full z-10 grid grid-rows-5 text-white'
        >
            <div className='
                z-10
                row-span-2
                w-full
                text-white
                p-4
            '>
                <p className='font-semibold text-lg'>See how it works?</p>
                <h1 className='my-4 font-bold text-4xl'>Easy steps for a cleaning and</h1>
                <h1 className='my-4 font-bold text-4xl'>Healthy environment!</h1>
            </div>
            <div className='
                w-full
                z-10
                row-span-3
                grid
                grid-cols-10
                
            '>
                <div className='
                    col-span-3
                    flex
                    flex-col
                    justify-center
                    items-center
                '>
                    <p className='text-neutral-300 font-semibold text-lg p-5'>
                        Kindly place your trash bin at the nearly curb
                        with bin facing your house and the lid
                        opening into the street you sit on.
                    </p>
                    
                    <Btn 
                        styling='text-green-900 p-4 text-md flex flex-row gap-2'
                        text='Guidlines'
                        colour='white' 
                        icon={MdOutlineArrowRight}
                        onclick={()=>{}}
                    />
                </div>
                <div className='
                    col-span-7
                    w-full
                    bg-green-700
                    flex
                    flex-row
                    items-center
                    justify-center
                    gap-7
                ' >
                    <div className='
                        flex gap-5 flex-col
                    '>
                        {
                            Steps.map((text, index)=>(
                                <div className='flex gap-5 items-center' key={index}>
                                    <div className='bg-white
                                        p-3
                                        font-bold
                                        rounded-[50%]
                                        text-green-900'>
                                        {index + 1}
                                    </div>
                                    <p className='font-bold'>
                                        {text}
                                    </p>
                                
                                </div>
                            ))
                        }
                    </div>
                    <div className='text-white w-[40%] flex flex-col items-start p-4 gap-5'>
                        <h1 className='
                            text-2xl
                        ' >
                            Online scheduling in few clicks!
                        </h1>
                        <p>We recognise that choosing the right service for the Home
                            is the most important choice, wastia can provide the waste
                            collection you need for your home, with trusted and 
                            safe service!
                        </p>
                        <div className='text-white flex border-b-2 border-white'>
                            Explore more 
                            <MdOutlineArrowRight size={30} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Guidlines