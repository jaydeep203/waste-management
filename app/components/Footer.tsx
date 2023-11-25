"use client";

import React from 'react'
import Btn from './Btn'
import {MdOutlineArrowRight} from "react-icons/md";
import {IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin} from "react-icons/io";

const Footer = () => {
  return (
    <div className='
        bg-emerald-900
        w-full
        flex
        flex-col
        items-center
        justify-center
    '>
        
        <div
            className='
                bg-emerald-900
                w-full
                py-10
                p-7
                flex
                flex-col
                items-center
                justify-center
                border-yellow-500
                border-b-[0.7rem]
                border-solid
            '
        >
        
        
        <div className='
            w-full
            p-7
            flex
            flex-row
            justify-around
            items-center
            text-white
            bg-opacity-[60%]
            bg-emerald-700
        '>
            <div className='font-bold text-lg'>
                <h1>Signup for industry alerts, deals,</h1>
                <h1>news and insights from us!</h1>
            </div>
            <input
                placeholder='Your Email Address!'
                className='bg-emerald-700
                    text-white
                    placeholder-white
                    p-2
                    text-lg
                    border-white
                    border-[1px]
                    border-solid
                    rounded-md
                    w-[40%]
                '
                type="text" />

            <Btn text='Subscribe' colour='white' 
                icon={MdOutlineArrowRight}
                styling='flex text-green-700 bg-white'
                onclick={()=>{}} />
            
        </div>
        <div className='
            w-full
            grid
            grid-cols-5
            py-10
            items-center
            justify-center
        '>
            <div className='
                col-span-1
                flex
                text-white
                flex-col
                gap-4
                p-3
            '>
                <h1 className='text-white font-bold text-xl'>
                    About Us
                </h1>
                <p>
                    we recognise that the right service for home is
                    the most important choice, wastia can provide 
                    the waste collection you need for your home,
                    with trusted service.
                </p>
                <div className='
                    text-white
                    flex
                    flex-row
                    gap-5
                '>
                    <a href="https://facebook.com/"
                        className='  
                        border-white
                        border-solid
                        border-[2px]
                        rounded-full
                        p-2
                        '
                    > 
                        <IoLogoFacebook size={35} />
                    </a>
                    <a href="https://twitter.com/"
                        className='  
                        border-white
                        border-solid
                        border-[2px]
                        rounded-full
                        p-2
                        '
                    >
                        <IoLogoTwitter size={35} />
                    </a>
                    <a href="https://linkedin.com/"
                        className='  
                        border-white
                        border-solid
                        border-[2px]
                        rounded-full
                        p-2
                        '
                    >
                        <IoLogoLinkedin size={35} />
                    </a>
                </div>

            </div>
            <div className='
                col-span-1
                text-white
                flex
                flex-col
                gap-4
            '>
                <h1 className='text-white font-bold text-xl'>
                    Company
                </h1>

                <p>About Us</p>
                <p>Sustainability</p>
                <p>Leadership Team</p>
                <p>News & Media</p>
                <p>Careers</p>

            </div>
            <div className='
                col-span-1
                text-white
                flex
                flex-col
                gap-4
            '>
                <h1 className='text-white font-bold text-xl'>
                    Services
                </h1>

                <p>Residential Waste</p>
                <p>Commercial Waste</p>
                <p>Retail Institutional</p>
                <p>Commercial Liquid</p>
                <p>Dumpster Rental</p>
                <p>Industrial Cleaning</p>

            </div>
            <div className='
                col-span-1
                text-white
                flex
                flex-col
                gap-4
            '>
                <h1 className='text-white font-bold text-xl'>
                    Industries
                </h1>

                <p>Manufacturing Facilities</p>
                <p>Educational Facilities</p>
                <p>Medical Facilities</p>
                <p>Construction Facilities</p>
                <p>Hospitality Facilities</p>
                <p>Rental Facilities</p>

            </div>
            <div className='
                col-span-1
                text-white
                flex
                flex-col
                gap-4
            '>
                <h1 className='text-white font-bold text-xl'>
                    Quick Contact
                </h1>

                <p>If you have any questions or need help, feel 
                    free to contact with our team.
                </p>

                <div> Wastia@project.com</div>
                <div> 02 123453334</div>

                <p>2373 Bruse veins, Goutham City 124423, 
                    United States.
                </p>

            </div>
        </div>

        

        </div>
        <div className='
            bg-white
            p-5
            w-full
            flex
            flex-col
            justify-center
            items-center
        '>
            <div 
                className='
                    text-green-700
                    flex
                    items-center
                    justify-center
                    gap-7
                '
            >
                <p>Privacy statement</p>
                <p>-</p>
                <p>Terms & Conditions</p>
                <p>-</p>
                <p>Privacy Policy</p>
                <p>-</p>
                <p>Sitemap</p>
            </div>
            <div className='text-neutral-700'>
                @2023, All Rights Reserved. With Love by <span className='text-yellow-500'>DevDynamos</span>
            </div>
        </div>
    </div>
  )
}

export default Footer