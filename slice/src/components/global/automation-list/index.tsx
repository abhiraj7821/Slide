'use client'
import { usePath } from '@/hooks/user-nav'
import { cn, getMonth } from '@/lib/utils'
import Link from 'next/link'
import React, { useMemo } from 'react'
import GradientButton from '../GradientButton'
import { Button } from '@/components/ui/button'
import { useQueryAutomation } from '@/hooks/use-queries'
import CreateAutomation from '../Create-Automation'
import { useMutationDataState } from '@/hooks/use-mutation-data'


function AutomationList() {
    const {data} = useQueryAutomation()
    const {pathname} = usePath()
    
    const {latestVariable} = useMutationDataState(["create-automation"])

    const optimisticUiData = useMemo(() => {
        if (latestVariable?.variables) {
            // Filter out potential duplicates
            const existingIds = new Set(data?.data?.map(item => item.id));
            const newItem = latestVariable.variables;
            
            if (!existingIds.has(newItem.id)) {
            return { data: [newItem, ...(data?.data ?? [])] };
            }
        }
        return data;
    }, [latestVariable, data]);


    if(data?.status !== 200 || data.data.length <= 0){
        return (<div className='h-[70vh] flex justify-center items-center flex-col gap-y-3'>
                        <h3 className='text-lg text-gray-400'>No Automations </h3>
                        <CreateAutomation/>
                </div>)
    }
    

    return (
        <div className='flex flex-col gap-y-3'>
           {optimisticUiData?.data!.map((automation)=>(
            <Link href={`${pathname}/${automation?.id}`} key={automation?.id} className='bg-[#1d1d1d] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] flex border-[#545454]'>
                <div className='flex flex-col flex-1 items-start'>
                    <h2 className='text-xl font-semibold'>{automation?.name}</h2>
                    <p className='text-[#9b9ca0] text-sm font-light mb-2'>This is from the comment</p>

                    {automation?.keywords.length > 0 ? (
                        <div className='felx gap-x-2 flex-wrap mt-3'>
                            <div className={cn(
                                'rounded-full px-4 py-1 capitalize',(0 + 1) % 1 == 0 && "bg-green-300/15 border-2 border-green-300",
                                'rounded-full px-4 py-1 capitalize',(0 + 1) % 1 == 0 && "bg-purple-300/15 border-2 border-purple-300",
                                'rounded-full px-4 py-1 capitalize',(0 + 1) % 1 == 0 && "bg-yellow-300/15 border-2 border-yellow-300"
                            )}>
                                getstarted
                            </div>
                        </div>
                    ) : (
                        <div className='rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1'>
                            <p className='text-sm text-[#bfc0c3]'>
                                No Keywords
                            </p>
                        </div>
                    )}
                    
                </div>
                <div className='flex flex-col justify-between'>
                    <p className='capitalize text-sm font-light text-[9B9cA0]'>
                        {getMonth(automation?.createdAt.getUTCMonth() + 1)} {' '}
                        {automation?.createdAt.getUTCDate() == 1 ? `${automation?.createdAt.getUTCDate()}st` : `${automation?.createdAt.getUTCDate()}th`} {' '}
                        {automation?.createdAt.getUTCFullYear()}
                    </p>

                    {automation?.listener?.listener === 'SMARTAI' ? (
                        <GradientButton type='BUTTON' className = "w-full bg-background/80 text-white hover:bg-background/80">SmartAI</GradientButton>
                    ) : (
                        <Button className='bg-background/80 hover:bg-background/80 text-white'>Standard</Button>
                    ) }

                </div>
            </Link>
           ))}
        </div>
    )
}

export default AutomationList