import React from 'react'
import {
    Sheet as ShadcnSheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'


type Props = {
    trigger : React.ReactNode
    children: React.ReactNode
    className?: string
}

function Sheet({children,trigger,className}: Props) {
  return <ShadcnSheet>
    <SheetTrigger className={className}>{trigger}</SheetTrigger>
    <SheetContent>{children}</SheetContent>
  </ShadcnSheet>
}

export default Sheet