"use client"

import React from 'react'
import Image from 'next/image'
import { SiAddthis } from 'react-icons/si'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'
import users from './constants'

const Card = ({data}) => {
    
// let color = 'bg-[#FFAB2D]'
// let color = 'bg-[#38E25D]'
// let color = 'bg-[#FF4A55]'

// let color = 'before:bg-[#FFAB2D]'
// let color = 'before:bg-[#38E25D]'
// let color = 'before:bg-[#FF4A55]'

// let color = 'text-[#FFAB2D]'
// let color = 'text-[#FF4A55]'
// let color = 'text-[#38E25D]'

console.log(data?.priority)
let color;
if(data?.priority == 0){
    color = '#38E25D'
    console.log('inside', color)
}else if(data?.priority == 1){
    color = '#FFAB2D'
}else{
    color = '#FF4A55'
}
console.log("first",color)

    return (
        <div className='w-full h-fit bg-[#211A75] rounded-lg mt-4 flex flex-col p-4' >
            <div className='flex justify-between p-5 items-center'>
                <span className={`text-[${color}] flex items-center gap-x-2 p-2`}><div className={`
                        bg-[${color}]
                        w-2
                        h-2
                        rounded-full
                        `}
                />{data.title}</span>
                <BsThreeDotsVertical color='white' />
            </div>
            <div>
                <p className='text-white text-[16px]'>{data.description}</p>
            </div>
            <div className={`
                    flex
                    md:hidden  
                    lg:flex
                    gap-x-3  
                    w-[200px]
                    p-1
                    mt-3
                   bg-gray-800
                    rounded-full border
                    mr-4
                    border-none
                    relative
                    before:absolute
                    before:bg-[${color}]
                    before:w-[120px]
                    before:p-1
                    before:left-0
                    before:top-0
                    before:rounded-full
                    `}>
                    </div>


            <div className='mt-2 pt-4 pb-4 flex justify-between'>
                <div className='flex items-center relative -left-[20px]'>
                    {
                        data.assignees.map((user, index) => (
                            <div key={index}
                                className={`
                        w-[24px]
                        h-[24px]
                        bg-[#C4C4C4]
                        rounded-full border
                        border-black
                        flex
                        justify-center
                        items-center
                        absolute
                        left-[${(index+1) * 18}px]
                        font-bold
                        text-white
                        `}
                            >
                                <img src={user} alt="prodile" className='rounded-full' />
                            </div>
                        ))
                    }
                </div>
                <div className='flex gap-x-3 items-center justify-end'>
                    <AiFillClockCircle color='gray' />
                    <p className='text-[10px] text-[gray]'>Due in {data.days} days</p>
                </div>
            </div>
        </div>
    )
}

export default Card