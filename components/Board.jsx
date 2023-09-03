'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { SiAddthis } from 'react-icons/si'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'
import users from './constants'
import Card from './Card'
import { data } from '@/data/boardData'

const Board = () => {
    
    const [ todo, setTodo ] = useState({});
    const [ inProgress, setInProgress ] = useState({});
    const [ done, setDone ] = useState({});
    const [ revised, setRevised ] = useState({});
    
    useEffect(() => {
        setTodo(() => {
            return data.find(ele => ele.name == 'To-do-List')
        })
        setInProgress(() => {
            return data.find(ele => ele.name == 'In Progress')
        })
        setDone(() => {
            return data.find(ele => ele.name == 'Done')
        })
        setRevised(() => {
            return data.find(ele => ele.name == 'Revised')
        })
    }, [])

    console.table(todo.items)
    
    return (
        <div className="h-fit m-4 flex flex-grow">
            {/* Board header */}
            <div className='flex justify-between'>

            </div>

            {/* Board columns */}
            <div className='grid grid-cols-4 gap-5 overflow-x-auto overflow-y-hidden'>
                <div className='bg-primary-purple p-3'>
                    <h4 className='flex justify-between items-center font-bold text-white'>
                        To-do-List({todo.items?.length})
                        <SiAddthis width={23} height={23} color='#6418C3' />
                    </h4>
                    {/* card */}
                    {
                        todo.items?.map((ele) =>(
                            <Card 
                                key={ele.id}
                                data = {ele}
                            />
                        ))
                    }
                </div>

                <div className='bg-primary-purple p-3'>
                    <h4 className='flex justify-between items-center font-bold text-white'>
                        In Progress ({inProgress.items?.length})
                        <SiAddthis width={23} height={23} color='#211A75' />
                    </h4>
                    {/* card */}
                    {
                        inProgress.items?.map((ele) =>(
                            <Card 
                                key={ele.id}
                                data = {ele}
                            />
                        ))
                    }
                </div>

                <div className='bg-primary-purple p-3'>
                    <h4 className='flex justify-between items-center font-bold text-white'>
                        Done ({done.items?.length})
                        <SiAddthis width={23} height={23} color='#211A75' />
                    </h4>
                    {/* card */}
                    {
                        done.items?.map((ele) =>(
                            <Card 
                                key={ele.id}
                                data = {ele}
                            />
                        ))
                    }
                </div>

                <div className='bg-primary-purple p-3'>
                    <h4 className='flex justify-between items-center font-bold text-white'>
                        Revised ({revised.items?.length})
                        <SiAddthis width={23} height={23} color='#211A75' />
                    </h4>
                    {/* card */}
                    {
                        revised.items?.map((ele) =>(
                            <Card 
                                key={ele.id}
                                data = {ele}
                            />
                        ))
                    }
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