import Link from "next/link"
import { IconType } from "react-icons" //remove these
import { twMerge } from "tailwind-merge"

const SidebarItem = ({
    icon,
    label,
    active, 
    href
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
    <p>{label}</p>
    </Link>
  )
}

export default SidebarItem