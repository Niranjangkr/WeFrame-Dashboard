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
            {/* Board columns */} 
            <div className='grid grid-cols-4 space-x-4 overflow-x-auto'>
                {
                    data.map((data, index) => {
                        return (
                            <div className='flex flex-col bg-primary-purple'>
                            <div className='font-bold text-white flex justify-center gap-x-3 w-full sticky top-0 h-[6vh] p-2 mb-5'>
                                    <h2 className='flex gap-x-2 items-center'>{data.name} ({data.items.length}) <SiAddthis width={23} height={23} color='#6418C3' /></h2>
                                </div>
                            <div key={index} className='bg-primary-purple p-3 h-[94vh] rounded-lg overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-800 scrollbar-track-black'>
                                {
                                    data.items.map((item, index) => {
                                        return (
                                            <Card 
                                                key={index}
                                                data={item}
                                            />
                                        )
                                    })
                                }
                            </div>
                            </div>
                        )
                    })
                }
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