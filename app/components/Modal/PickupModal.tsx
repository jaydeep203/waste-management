"use client";
import React, {useEffect, useState} from 'react';
import Input from '../Input';
import Btn from '../Btn';

import { twMerge } from 'tailwind-merge';


import {MdCheckBoxOutlineBlank} from "react-icons/md"; 
import {IoCheckboxOutline, IoArrowForward, IoClose} from "react-icons/io5";
import { SelectDemo } from '../SelectTag';
import usePickupModal from '../hooks/usePickupModal';


const PickupModal = () => {

    const pickupModal = usePickupModal();

    const [showModal, setShowModal] = useState(pickupModal.isOpen);

    useEffect(()=>{
        setShowModal(pickupModal.isOpen);
    }, [pickupModal.isOpen]);

    const Options = [
        {
            title: "Once per week",
            ticked: false
        },
        {
            title: "Twice per week",
            ticked: false
        },
        {
            title: "Thrice per week",
            ticked: false
        }
    ];

    const EnquiryType = [
        "Residential Services", "Commercial Services", "Retail & Institutional Services",
        "Liquid & special Services", "Dumpster Rental Services", "Industrial & Sanitizing Services"
    ];

    const Industry = [
        "Manufacturing Facilities", "Educational Facilities", "Medical & Pharmaceutical",
        "Construction & Demolition", "Hospitality & Events", "Retail Waste Management"
    ];

    const ContainerSize = [
        "32 Gallon Container", "64 Gallon Container", "15 Gallon Trash Bin",
        "20 Gallon Trash Bin", "35 Gallon Trash Bin", "10 Yard Dumpster",
        "15 Yard Dumpster"
    ];

    const Quantity = [
        "2 Containers", "3 Containers", "5 Containers", "5+ Containers", "10+ Containers"
    ];

    if(!pickupModal.isOpen){
        return null;
    }

  return (
    <div className= {
        twMerge(`
            fixed
            w-full
            z-50
            bg-opacity-60
            bg-neutral-800
            overflow-y-auto
            translate
            duration-300
        `,
         showModal ? "translate-y-0" : "translate-y-full",
         showModal ? "opacity-100" : "opacity-0"
        )
    }
        

    >
        <div className='
            w-full
            h-full
            flex
            justify-center
            items-center
        '>
            <div 
                className='
                    p-8
                    w-[60%]
                    flex
                    flex-col
                    max-h-[100vh]
                '
            >
                <div className='
                    bg-green-700
                    p-4
                    py-7
                    rounded-md
                    flex
                    flex-row
                    justify-between
                '>
                    <h1
                        className='text-white font-bold text-xl'
                    >Request Pickup</h1>
                    <button 
                        className='
                            text-green-700
                            rounded-[50%]
                            p-2
                            mr-8
                            font-bold
                            text-2xl
                            z-20
                            bg-white
                        '
                        onClick={pickupModal.onClose}
                    >
                        <IoClose size={30} />
                    </button>
                </div>
                <div className='
                    bg-neutral-50
                    flex
                    flex-col
                    justify-center
                    p-4
                    overflow-y-scroll
                '>
                    <div className='
                        selections
                        ml-10
                        mt-20
                        py-4
                        flex
                        flex-col
                        gap-5
                    '>
                        <div className="w-full flex flex-row gap-10">
                            <div className='text-black
                                flex
                                flex-col
                                gap-4
                            '>
                                <p>Enquiry Type</p>
                                <SelectDemo 
                                    optionsType={EnquiryType} 
                                    title='Select Enquiry type' 
                                />
                            </div>
                            <div className='text-black
                                flex
                                flex-col
                                gap-4
                            '>
                                <p>Industry</p>
                                <SelectDemo 
                                    optionsType={Industry} 
                                    title='Select Industry' 
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-row gap-10">
                            <div className='text-black
                                flex
                                flex-col
                                gap-4
                            '>
                                <p>Container Size</p>
                                <SelectDemo 
                                    
                                    optionsType={ContainerSize} 
                                    title='Select Container size' 
                                />
                            </div>
                            <div className='text-black
                                flex
                                flex-col
                                gap-4
                            '>
                                <p>Quantity of Containers</p>
                                <SelectDemo 
                                    optionsType={Quantity} 
                                    title='Select Quantity' 
                                />
                            </div>
                            
                            

                        </div>  
                    </div>
                    <div className='
                        text-black
                        ml-10
                        flex
                        flex-col
                        gap-5
                    '>
                        <h1>Collection Frequency</h1>
                        <div className='
                            flex
                            flex-row
                            gap-5
                        '>

                        
                            {
                                Options.map(({title, ticked}, index)=>(
                                    <div key={index} className='
                                        flex
                                        flex-row
                                        cursor-pointer
                                    '>
                                        {ticked? (<IoCheckboxOutline
                                            size={30}
                                            className="text-green-700"
                                        />) : (<MdCheckBoxOutlineBlank
                                            size={30}
                                            className="text-green-700"
                                        />)}
                                        <p className='text-neutral-500'>{title}</p>
                                    </div>
                                ))
                            }

                        </div>

                        
                    </div>
                    <div className='
                        w-full
                        gap-7
                        flex
                        flex-row
                        justify-center
                    '>
                        <Input 
                            text='First Name'
                            placeholder='Enter your name'
                            onChange={() => {}}
                        />
                        <Input 
                            text='Last Name'
                            placeholder='Enter your name'
                            onChange={() => {}}
                        />
                    </div>
                    <div className='
                        w-full
                        flex
                        flex-row
                        justify-center
                        gap-7
                    '>
                        <Input 
                            text='Email Address'
                            placeholder='Enter your email'
                            onChange={() => {}}
                        />
                        <Input 
                            text='Phone Number'
                            placeholder='Enter your number'
                            onChange={() => {}}
                        />
                    </div>

                    <Btn 
                        icon={IoArrowForward}
                        text='Submit Request'
                        colour='green'
                        onclick={()=>{}}
                        styling='w-[90%] flex 
                            flex-row gap-3 
                            justify-center 
                            py-6 bg-green-800 
                            mx-auto text-white
                        '
                    />
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default PickupModal