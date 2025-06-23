'use client'
import { Separator } from '@/components/ui/separator'
import { useQueryAutomation } from '@/hooks/user-queries'
import React from 'react'
import { AiFillExclamationCircle, AiFillOpenAI } from 'react-icons/ai'
import { IoMdPaperPlane } from 'react-icons/io'
import PostButton from '../post'

type Props = {
    id:string
}

function ThenNode({id}: Props) {
    const {data} = useQueryAutomation(id)

    const commentTrigger = data?.data?.trigger.find((t)=>t.type==='COMMENT')

    return !data?.data?.listener ? <></> : (
    <div className=' relative w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3'>
        <div className='absolute h-10 left-1/2 -top-5 flex flex-col items-center z-50'>
            <span className='h-[9px] w-[9px] bg-gray-500/30 rounded-full'/>
            <Separator orientation='vertical' className=' bottom-full flex-1 border-[1px] border-white opacity-50'/>
            <span className='h-[9px] w-[9px] bg-gray-500/30 rounded-full'/>
        </div>
        <div className='flex gap-x-2 items-center'>
            <AiFillExclamationCircle color='#5c75d6'/>
            Then...
        </div>
        <div className='bg-background/10 p-3 text-sm rounded-xl flex flex-col gap-y-2'>
            <div className='flex gap-x-2 items-center'>
                {data.data.listener.listener === 'MESSAGE' ? (<IoMdPaperPlane color='#5c75d6'/>) : (<AiFillOpenAI color='#5c75d6'/>)}
                <p className='text-sm'>
                    {data.data.listener.listener === 'MESSAGE' ? "Send the user a message" : 'Let Smart AI take over' }
                </p>
            </div>
            <p className='text-white opacity-60'>
                {data.data.listener.prompt}
            </p>
        </div>
        {data.data.posts.length > 0 ? <></> : commentTrigger ? <PostButton id={id}/> : <></> }
    </div>
    )

}
export default ThenNode