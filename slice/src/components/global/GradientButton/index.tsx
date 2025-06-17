import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
    type: 'BUTTON' | 'LINK'
    className : string
    href?: string
}

function GradientButton({children,type,className,href}: Props) {
    const gradient = "bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-[2px]"

    switch (type) {
        case 'BUTTON':
            return <div className={gradient}>
                <Button className={cn(className, 'rounded-xl')}>
                    {children}
                </Button>
            </div>
            break;
        case 'LINK':
            return <div className={gradient}>
                <Link className={cn(className, 'rounded-xl')} href={href!}>
                    {children}
                </Link>
            </div>
            break;    
        default:
            return <Button className='rounded-full text-sm bg-green-600/15 border-1 border-green-300'></Button>
            break;
    }
}

export default GradientButton