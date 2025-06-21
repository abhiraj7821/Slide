import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import React, { JSX } from 'react'

type Props = {
    trigger: JSX.Element
    children: React.ReactNode
    className?: string
}

function PopOver({trigger,children,className}: Props) {
  return (
  <Popover>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent 
        className={cn('bg-[#1d1d1d] shadow-lg',className)}
        align='end'
        side='bottom'
        >
            {children}
        </PopoverContent>
    </Popover>
)
}

export default PopOver