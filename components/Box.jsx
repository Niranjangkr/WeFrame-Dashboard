import React from 'react'
import { twMerge } from 'tailwind-merge'
const Box = ({children, className}) => {
  return (
    <div
        className={twMerge(`
        rounded-lg
        h-fit
        w-full
        `,
        className
        )}
    >
        {children}
    </div>
  )
}

export default Box