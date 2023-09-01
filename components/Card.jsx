import React from 'react'
import Image from 'next/image'
import { SiAddthis } from 'react-icons/si'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'
import users from './constants'

const Card = () => {
    return (
        <div className='w-full h-fit bg-[#211A75;] rounded-lg mt-4 flex flex-col p-4' >
            <div className='flex justify-between p-5 items-center'>
                <span className='text-[#FFAB2D] flex items-center gap-x-2 p-2'><div className='
                        bg-[#FFAB2D]
                        w-2
                        h-2
                        rounded-full
                        '
                />Important</span>
                <BsThreeDotsVertical color='white' />
            </div>
            <div>
                <p className='text-white text-[16px]'>Create sign up sheet for holiday student/parent conferences.</p>
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
                    before:bg-[#d8bf1a]
                    before:w-[120px]
                    before:p-1
                    before:left-0
                    before:top-0
                    before:rounded-full
                    `}></div>


            <div className='mt-2 pt-4 pb-4 flex justify-between'>
                <div className='flex items-center relative -left-[20px]'>
                    {
                        users.map(user => (
                            <div key={user}
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
                        left-[${user * 18}px]
                        font-bold
                        text-white
                        `}
                            >
                            </div>
                        ))
                    }
                </div>
                <div className='flex gap-x-3 items-center justify-end'>
                    <AiFillClockCircle color='gray' />
                    <p className='text-[10px] text-[gray]'>Due in 4 days</p>
                </div>
            </div>
        </div>
    )
}

export default Card