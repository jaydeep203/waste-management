"use client";
import Image from 'next/image';
import Btn from './components/Btn';

export default function Home() {
  return (
    <div className='text-white'>
      <div className='
        w-full
        h-[98vh]
        border-[1px]
        border-white
        border-solid
        relative
        flex
      '>
        <Image 
          src={"/images/Hero2.jpg"} 
          alt="Hero" 
          className='filter brightness-50'
          fill
          style={{objectFit: "contain"}}
          />
        <div className='
          z-10
          w-[40%]
          px-5
          ml-20
          flex
          flex-col
          items-center
          justify-center
        '>
          <div className='text-[1.2rem] font-semibold'>
            <p>We provide commercial waste disposal for a range of Industries</p>
          </div>
          <div className='text-[4rem] font-semibold'>
            <h1>Wastia provides safe and reliable waste collection!</h1>
          </div>
          <div className='text-[1.2rem] font-semibold'>
            <p>We have range of waste disposal services to suit your needs and get your waste removed, 
              form demolition waste to construction we have it convered.
            </p>
          </div>
          <div className='my-5 flex self-start gap-5'>
            <Btn 
              text="PickUp Request" 
              colour="green" 
              onclick={()=>{}}  
            />
            <Btn 
              text="About Us" 
              colour="white" 
              onclick={()=>{}}  
            />
          </div>
        </div>
      </div>
    </div>
  )
}
