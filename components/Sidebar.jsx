'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import Box from './Box'
import SidebarItem from './SidebarItem'
import Image from 'next/image'

import { AiFillDashboard } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { IoChatbubblesSharp } from 'react-icons/io5'
import { PiSquaresFourDuotone } from 'react-icons/pi'
import { MdOutlineContactPage } from 'react-icons/md'
import { BsFillCalendarEventFill } from 'react-icons/bs'
import { BsPersonVideo3 } from 'react-icons/bs'
import { GiShop } from 'react-icons/gi'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import { IoSettingsSharp } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'


const Sidebar = ({ children }) => {
    const pathname = usePathname()
    const routes = useMemo(() => [
        {
            icon: <AiFillDashboard />,
            label: 'Dashboard',
            active: pathname == '/dashboard',
            href: '/',
        },
        {
            icon: <MdEmail />,
            label: 'Email',
            active: pathname == '/email',
            href: '/email',
        },
        {
            icon: <IoChatbubblesSharp />,
            label: 'Chat',
            active: pathname == '/chat',
            href: '/chat'
        },
        {
            icon: <PiSquaresFourDuotone />,
            label: 'Kanban',
            active: pathname == '/kanban',
            href: '/kanban'
        },
        {
            icon: <MdOutlineContactPage />,
            label: 'Contact',
            active: pathname == '/contact',
            href: '/contact'
        },
        {
            icon: <BsFillCalendarEventFill />,
            label: 'Calender',
            active: pathname == '/calender',
            href: '/calender'
        },
        {
            icon: <BsPersonVideo3 />,
            label: 'Courses',
            active: pathname == '/courses',
            href: '/courses'
        },
        {
            icon: <GiShop />,
            label: 'Shop',
            active: pathname == '/shop',
            href: '/shop'
        },
        {
            icon: <LiaFileInvoiceDollarSolid />,
            label: 'Invoices',
            active: pathname == '/invoices',
            href: '/invoices'
        },
        {
            icon: <IoSettingsSharp />,
            label: 'Settings',
            active: pathname == '/settings',
            href: '/settings'
        }

    ], [pathname])
    return (
        <div className='flex h-full '>
            <div
                className='
            hidden
            md:flex
            flex-col
            gap-y-2
            bg-primary-purple
            lg:w-[300px]
            md:w-[200px]
            p-2
        '
            >
                <Box className='overflow-y-auto h-full scrollbar-none '>
                    <div className='flex justify-center gap-x-8 items-center py-4'>
                        <span className='lg:text-[24px] md:text-[18px] text-white'>weframetech</span> <GiHamburgerMenu size={28} color='#7879F1' />
                    </div>

                    <h3
                        className='
              text-[#C7C7C7]
                text-sm
                font-medium
                px-5
                py-4
                '>MAIN MENU</h3>
                    <div
                        className='
                  flex
                  flex-col
                  gap-y-4
                  px-5
                  py-4
                 '
                    >
                        {
                            routes.map((item) => (
                                <SidebarItem
                                    key={item.label}
                                    {...item}
                                />
                            ))
                        }
                    </div>

                    <div 
                    className='
                    md:w-32 md:h-32 lg:w-48 lg:h-40 p-6
                    bg-gradient-to-r from-cyan-500 to-blue-500 
                    m-7 rounded-lg 
                    relative
                    '>
                        <div className='flex flex-col justify-start items-center'>
                            <div className='w-full pb-2'>
                                <Image
                                    src={'/assets/images/square.svg'}
                                    width={22}
                                    height={29}
                                    alt='dots-square'
                                    className='md:w-[14px] md:h-[20px] lg:[w-18px] lg:h-[20px]'
                                />
                            </div>
                            <p className='font-bold  text-white md:text-[12px] lg:text-[18px]'>Increase your work with kanban</p>
                            <p className='w-full text-white'>&#8594;</p>
                        </div>
                        <div className='absolute bottom-0 right-0 overflow-hidden'>
                            <Image 
                                src={'/assets/images/mask.svg'}
                                width={245}
                                height={203}
                                alt='mask'
                            />
                        </div>
                    </div>
                </Box>
            </div>
            <main className='w-full'>
            {children}
            </main>
        </div>
    )
}

export default Sidebar