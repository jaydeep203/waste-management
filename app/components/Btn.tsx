"use client";

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps{
    text:string;
    colour:string;
    onclick:() => void;
}

const Btn:React.FC<ButtonProps> = ({
    text,
    colour,
    onclick
}) => {
  return (
    <button
        className={
            twMerge(`
                font-bold
                p-3
            `,
                colour=="green"? "bg-green-700": "bg-neutral-200 text-neutral-700"
            )
        }
    >
        {text}
    </button>
  )
}

export default Btn