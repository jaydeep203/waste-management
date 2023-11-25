"use client";

import React from 'react';
import { twMerge } from 'tailwind-merge';
import {IconType} from "react-icons";

interface ButtonProps{
    text:string;
    colour:string;
    onclick:() => void;
    styling?:string;
    icon?:IconType;
}

const Btn:React.FC<ButtonProps> = ({
    text,
    colour,
    onclick,
    styling,
    icon:Icon
}) => {
  return (
    <button
        onClick={onclick}
        className={
            twMerge(`
                font-bold
                p-3
            `,
                colour=="green"? "bg-green-700": "bg-neutral-200 text-neutral-700" ,
             styling
            )
        }
    >
        {text}
        { Icon? <Icon size={25} /> : null }
    </button>
  )
}

export default Btn