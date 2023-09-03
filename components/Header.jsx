'use client'

import { useState } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { LiaSearchSolid } from 'react-icons/lia'
import { FaBell } from 'react-icons/fa'
import { BsPersonVcardFill } from 'react-icons/bs'
import { RiCheckboxMultipleFill } from 'react-icons/ri'
import { FaSuitcase } from 'react-icons/fa'
import Image from 'next/image'
const Header = ({children, className}) => {

    const [langSelected, setLangSelected ] = useState('English');

  return (
   <div className={twMerge(`
    h-fit
    p-6
    bg-primary-purple
   `,
   className
   )}>
    <div className='
    w-full
    mb-4    
    flex
    items-center
    justify-between
    '>
        <div className='
        w-full
        flex
        gap-x-2
        items-center
        justify-between
        '>
            <div className='
            flex
            md:w-40
            lg:w-64
            xl:w-80
            p-2
            bg-[#211A75]
            rounded-full
            items-center
            gap-x-4
            '>
                <span><LiaSearchSolid color='white'/></span>
                <input type="search" placeholder='search here' className='
                w-full
                outline-none
                text-[#AAA]
                bg-transparent
                ' />
            </div>

            <div className='
            flex
            lg:gap-x-7
            xl:gap-x-9
            items-center
            md:ml-4
            lg:ml-7
            xl:ml-10
            '>
            <span className='
             text-[#6418C3]
             text-[10px]
             md:ml-3
             lg:ml-5
             xl:ml-7
             underline decoration-solid
            '>
                OTHER MENUS
            </span>
            <div className='
             md:flex
             hidden
             md:gap-x-4
             lg:gap-x-7
             xl:gap-x-9
             md:ml-4
             lg:ml-7
             xl:ml-10
            '>
                <Link href={'/notification'}><FaBell color='#6418C3' size={22}/></Link>
                <Link href={'/mycourse'}><BsPersonVcardFill color='#6418C3' size={22}/></Link>
                <Link href={'/checked-task'}><RiCheckboxMultipleFill color='#6418C3' size={22}/></Link>
                <Link href={'/work'}><FaSuitcase color='#6418C3' size={22}/></Link>
            </div>
            <div className='flex items-center w-fit  h-fit rounded-full
            bg-[#211A75] gap-x-1 p-2 md:mx-4 lg:mx-6 ml-3 mr-3
            '>
                <Image
                src={langSelected ==='English'?'/assets/images/us.svg':'/assets/images/India.png'}
                width={16}
                height={16}
                className='w-[16px] h-[16px]rounded-full'
                />
                <select name="lang" id="lang" onChange={(e)=> setLangSelected(e.target.value)} value={langSelected} className='md:text-[11px] lg:text-[14px] outline-none bg-transparent font-bold text-white '>
                    <option value={'English'}>English</option>
                    <option value={'Hindi'}>Hindi</option>
                </select>
            </div>
            </div>

            <div className='flex items-center gap-x-4'>
                <div className='flex lg:flex-row md:flex-col w-[47px] rounded-lg h-[32px] bg-gray-300 gap-x-2'>
                </div>
                <div className='flex flex-col'>
                    <p className='text-white text-[10px] font-bold'>Instructor Day</p>
                    <p className='text-purple-800 text-[9px]'>Super Admin</p>
                </div>
            </div>
        </div>

    </div>
   </div>
  )
}

export default Header