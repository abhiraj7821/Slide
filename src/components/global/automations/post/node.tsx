'use client'
import { Separator } from '@/components/ui/separator'
import { useQueryAutomation } from '@/hooks/user-queries'
import Image from 'next/image'
import React from 'react'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { LuInstagram } from 'react-icons/lu'

type Props = {
    id:string
}

function PostNode({id}: Props) {
    const {data} = useQueryAutomation(id);
    return (
        data?.data && data.data.posts.length > 0 && (
        <div className='w-10/12 lg:w-8/12 relative xl:w-4/12 rounded-xl flex flex-col bg-[#1d1d1d] gap-y-3'>
            <div className='absolute h-20 left-1/2 flex flex-col items-center z-50'>
                <span className='h-[9px] w-[9px] bg-gray-500/30 rounded-full'/>
                <Separator orientation='vertical' className=' bottom-full flex-1 border-[1px] border-white opacity-50'/>
                <span className='h-[9px] w-[9px] bg-gray-500/30 rounded-full'/>
            </div>
            <div className='flex gap-x-2'>
                <AiFillExclamationCircle/>
                If they comment on...
            </div>
            <div className='bg-background/10 p-3 rounded-xl flex flex-col gap-y-2'>
                <div className='flex gap-x-2 items-center'>
                    <LuInstagram/>
                    <p className='font-bold text-lg'>These posts</p>
                </div>
                <div className='flex gap-x-2 flex-wrap mt-3'>
                    {data.data.posts.map((post)=>(
                        <div 
                        key={post.id}
                        className='relative w-4/12 aspect-square rounded-lg cursor-pointer overflow-hidden'
                        >
                            <Image
                            fill
                            src={post.media}
                            alt='post image'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    )
    )
}

export default PostNode