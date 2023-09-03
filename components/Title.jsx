'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'
import { FaCircleArrowLeft } from 'react-icons/fa6'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoMdPersonAdd } from 'react-icons/io'
import { BiMessageSquareDetail } from 'react-icons/bi'
import Image from 'next/image'

import users from './constants'

const Title = ({ children, className }) => {
    const [ progress, setProgress ] = React.useState(60);
    return (
        <div className="w-[95%] bg-primary-purple  flex flex-col m-4 rounded-lg">
            <div className='flex justify-between p-4 pt-4'>
                <div className='flex gap-x-3'>
                    <FaCircleArrowLeft size={28} color='gray' />
                    <div>
                        <h2 className=' text-white font-bold'>School November Tasks</h2>
                        <p className='text-[9px] text-gray-600'>Created by Instructor Day on November 31, 2022</p>
                    </div>
                </div>  

                <div className='flex items-center gap-x-2'>
                    <div>
                        <p className='font-bold text-white text-[11px] text-right'>Centered Martial Arts</p>
                        <p className='text-right text-white text-[9px]'>Sunnyvale, Ca</p>
                    </div>
                    <div className='w-[40px] h-[40px] bg-slate-50 rounded-lg flex justify-center items-center'>
                        <Image
                            src={'/assets/images/pie.svg'}
                            width={23}
                            height={23}
                        />
                    </div>
                    <div className='ml-2'>
                        <BsThreeDotsVertical color='gray' />
                    </div>
                </div>
            </div>

            <div className='
            flex 
            sm:flex-row 
            sm:justify-between 
            sm:items-center
            pl-4 mt-4 pb-4 
            xsm:flex-col 
            xsm:justify-center 
            xsm:items-center 
            '>
                <div className='flex items-center gap-x-3 h-[3rem]  w-[200px]'>
                    <div className='flex items-center relative '>
                    {
                        users.map(user => (
                            <div key={user}
                                className={`
                        w-[34px]
                        h-[34px]
                        bg-[#C4C4C4]
                        rounded-full border
                        border-black
                        ${(users.length) === user ? 'bg-[#E328AF]' : ''}
                        flex
                        justify-center
                        items-center
                        absolute
                        left-[${user*28}px]
                        font-bold
                        text-white
                        `}
                            >
                                {(users.length) === user? `${user}+` : ''}
                            </div>
                        ))
                    }
                    </div>
                    
                    <div className='hidden md:flex relative left-[200px] gap-x-3  h-[2.5rem]'>
                        <button className='w-24  p-2 bg-[#6418C3] rounded-lg flex text-xs items-center text-white font-bold gap-x-2'><IoMdPersonAdd color='white' size={20}/>Invite People</button>

                        <button className=' w-[44px]  p-2 bg-transparent  border border-[#7879F1] rounded-lg text-xs font-bold text-white flex justify-center items-center flex-wrap'>Private</button>

                        <button className=' w-[44px]  p-2 bg-[#7879F1]  rounded-lg font-bold text-xm flex-wrap text-white'>Edit</button>

                        <button className='w-28  p-2 bg-[#6418C3] rounded-lg border border-[#7879F1]  flex  gap-x-2 font-bold text-white items-center'>
                            <span>
                                <BiMessageSquareDetail color='white'/>
                            </span>
                            <span className='text-[10px]'>
                                45 Comments
                            </span>
                        </button>
                    </div>
                </div>

{/*  progress bar with text */}
                <div className='flex gap-x-2 items-center flex-wrap
                lg:flex xsm:flex-col'>
                    <span className='text-white text-sm flex flex-wrap'>
                    Total Progress {progress}%
                    </span>
                    <div className={`
                    flex
                    gap-x-3  
                    w-[200px]
                    p-1.5
                    bg-[#6418C3]
                    rounded-full border
                    mr-4
                    border-none
                    relative
                    before:absolute
                    before:bg-white
                    before:w-[120px]
                    before:p-1.5
                    before:left-0
                    before:top-0
                    before:rounded-full
                    `}>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Title

// dynamic classes
// md
// const left1 = 'left-[28px]'
// const left2 = 'left-[56px]'
// const left3 = 'left-[84px]'
// const left4= 'left-[112px]'
// const left5= 'left-[140px]'