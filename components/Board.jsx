import React from 'react'
import Image from 'next/image'
import { SiAddthis } from 'react-icons/si'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'
import users from './constants'
import Card from './Card'

const Board = () => {
    return (
        <div className="h-fit m-4 flex flex-grow">
            {/* Board header */}
            <div className='flex justify-between'>

            </div>

            {/* Board columns */}
            <div className='grid grid-cols-4 gap-5 overflow-x-auto overflow-y-hidden'>
                <div className='bg-primary-purple p-3'>
                    <h4 className='flex justify-between items-center font-bold text-white'>
                        To-do-List(24)
                        <SiAddthis width={23} height={23} color='#6418C3' />
                    </h4>
                    {/* card */}
                    <Card />
                    <Card />
                    <Card />
                </div>

                <div className='bg-primary-purple p-3'>
                    <h4 className='flex justify-between items-center font-bold text-white'>
                        In Progress (2)
                        <SiAddthis width={23} height={23} color='#211A75' />
                    </h4>
                    {/* card */}
                    <Card />
                    <Card />
                </div>

                <div className='bg-primary-purple p-3'>
                    <h4 className='flex justify-between items-center font-bold text-white'>
                        Done (3)
                        <SiAddthis width={23} height={23} color='#211A75' />
                    </h4>
                    {/* card */}
                    <Card />
                </div>

                <div className='bg-primary-purple p-3'>
                    <h4 className='flex justify-between items-center font-bold text-white'>
                        Revised (0)
                        <SiAddthis width={23} height={23} color='#211A75' />
                    </h4>
                    {/* card */}
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Board

// dynamic classes
// md
// const left1 = 'left-[18px]'
// const left2 = 'left-[36px]'
// const left3 = 'left-[54px]'
// const left4= 'left-[72px]'
// const left5= 'left-[90px]'