import Link from "next/link"
import { IconType } from "react-icons" //remove these
import { twMerge } from "tailwind-merge"

const SidebarItem = ({
    icon,
    label,
    active, 
    href,
    mobile
}) => {
  return (
    <Link 
        href={href}
        className={twMerge(`
            flex
            flex-row
            h-auto
            items-center
            w-full
            gap-x-4
            text-md
            font-medium
            cursor-pointer
            ${label === 'Dashboard' || label === 'Email' ? 'text-[#464366]' : 'text-[#7879F1]'}
            py-1

        `,
        )}
    >
    {icon}
    <p className={`${mobile&&'mobile'}`}>{label}</p>
    </Link>
  )
}

export default SidebarItem

// let mobileWidth = 'mobile_r_gap'
// let mobile = 'mobile'