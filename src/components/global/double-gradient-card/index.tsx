import { Button } from '@/components/ui/button'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

type Props = {
    label:string,
    subLabel:string,
    description:string
}

function DoubleGradientCard({label,subLabel,description}: Props) {
  return (
    <div className='relative border-[1px] border-zinc-700/50 p-5 rounded-xl flex flex-col gap-y-20 overflow-hidden'>
        <div className='flex flex-col z-40'>
            <h2 className='text-2xl font-medium'>{label}</h2>
            <p className='text-white opacity-70 text-sm'>{subLabel}</p>
        </div>
        <div className='flex justify-between items-center z-40 gap-x-10'>
            <p className='text-white opacity-55 text-sm'>{description}</p>
            <Button className='rounded-full bg-blue-500 w-10 h-10'>
                <FaLongArrowAltRight color='white'/>
            </Button>
        </div>
        <div className='w-6/12 h-full absolute bg-linear-to-bl blur-2xl from-cyan-500 to-blue-500 top-0 left-0 z-10'/>
    </div>
  )
}

export default DoubleGradientCard