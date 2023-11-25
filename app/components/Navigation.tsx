"use client";
import React, {useCallback} from 'react';
import Link from 'next/link';
import Image from 'next/image';


import {BsChevronDown, BsSearch, BsCartFill, BsMessenger} from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";
import usePickupModal from './hooks/usePickupModal';

const Navigation = () => {
  const pickupModal = usePickupModal();

  

  const navs = [
    {
      title: "Home",
      link:"/",
      active:false
    },
    {
      title: "PickUp",
      link:"/pickup",
      active:false
    },
    {
      title: "Chat",
      link:"/chatbot",
      active:false
    },
    {
      title: "About us",
      link:"/about",
      active:false
    },

  ];

  return (
    <div className='
        h-[7vmax]
        w-full
        grid
        grid-cols-10
    '>
        <div className='col-span-7 grid grid-cols-10 w-full'>
          <div className='
            col-span-3 
            h-[6rem] 
            relative
            flex 
            justify-center 
            items-center'
          >
            <Image  src={"/images/logo.png"}
             alt='logo'
             fill
             style={{objectFit: "contain"}}
             />
          </div>
          <div className='col-span-7 w-full flex items-center px-3'>
            <div className='w-full flex items-center px-4'>
              {
                navs.map(({title, link}, i)=>(
                  <div key={i} className='text-green-700
                    font-semibold
                    w-full'>
                    <Link className='flex items-center' href={link}>
                      {title} <BsChevronDown size={12} />
                    </Link>
                  </div>
                  
                ))
              }
            </div>
            <div className='text-green-700 flex px-3 gap-8'>
              <BsSearch size={20} />
              <BsCartFill size={20} />
            </div>
          </div>
        </div>
        <div className='bg-green-500 col-span-3 grid grid-cols-2 gap-5 items-center justify-center'>
          <button onClick={pickupModal.onOpen} className='col-span-1 flex'>
            <div className='bg-white mx-auto p-3 text-green-800 font-semibold flex gap-2'>
              <AiFillMail size={20} />
              Need pickup?
            </div>
          </button>
          <div className='col-span-1 flex justify-center
           '>
            <div className='
              flex gap-3 
              border-[1px] 
              border-solid 
              border-white 
              text-white
              py-2 
              px-5
              rounded-lg
              font-semibold
            '>
              <BsMessenger size={45} />
              Chat Help
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navigation