import React from 'react'
import PopOver from '../../popover'
import { IoIosAddCircle } from 'react-icons/io'

type Props = {
    children: React.ReactNode
    label:string
}

function TriggerButton({children,label}: Props) {
  return (
    <PopOver className='w-[400px]'
    trigger={   <div className='border-2 border-dashed w-full border-[#3353cc] hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5 mt-4'>
                    <IoIosAddCircle color='#3353CC'/>
                    <p className='text-[#768BDD] font-bold'>{label}</p>
                </div>}
    >
        {children}
    </PopOver>

  )}

export default TriggerButton