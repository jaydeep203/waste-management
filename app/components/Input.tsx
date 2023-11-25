"use client";
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps{
    text:string;
    placeholder: string;
    styling?: string;
    onChange: () => void;
}

const Input:React.FC<InputProps> = ({
    text,
    placeholder,
    styling,
    onChange
}) => {
  return (
    <div 
        className={twMerge(`
            font-bold
            text-black
            p-5
            w-[45%]
        `, styling)}
    >
        <h1>{text}</h1>
        <input 
            placeholder={placeholder}
            className='
                my-3
                p-4
                font-semibold
                border-neutral-400
                border-solid
                border-[1px]
                w-full
            '
            type="text" />
    </div>
  )
}

export default Input