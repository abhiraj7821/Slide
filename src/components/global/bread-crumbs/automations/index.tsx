"use client"
import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import ActivateAutomationButton from '../../activate-automation-button';
import { useQueryAutomation } from '@/hooks/user-queries';
import { useEditAutomation } from '@/hooks/use-automation';
import { useMutationDataState } from '@/hooks/use-mutation-data';


type Props = {
    id:string
}


function AutomationsBreadCrumb({id}: Props) {
    // WIP: Get the automation data
    const {data} = useQueryAutomation(id)
    const {edit,enableEdit,inputRef,isPending} = useEditAutomation(id)
    // User mutation stugg to update the automation

    const {latestVariable} = useMutationDataState(["update-automation"])

    return (
        <div className='rounded-full w-full p-5 bg-[#18181b1a] flex items-center'>
            <div className='flex items-center gap-x-3 min-w-0'>
                <p className='text-[#9b9ca0] truncate'>Automations</p>
                <FaCaretRight color='#5c75d6' className='flex shrink-0'/>
                <span className='flex gap-x-3 items-center min-w-0 '>
                    {/* WIP: Show the editing data */}

                    {edit? (
                        <input type="text" ref={inputRef} 
                        placeholder={ isPending ? latestVariable.variables : 'Add a new name' } 
                        className='bg-transparent h-auto outline-none text-base border-none p-0' />
                    ) : (
                        <p className='text-[#9b9ca0] truncate'>{latestVariable?.variables ? latestVariable?.variables.name : data?.data?.name}</p>
                    )}

                    {edit? (
                        <></>
                    ) : (
                        <span onClick={enableEdit} className='cursor-pointer hover:opacity-75 duration-100 transition flex shrink-0 mr-5'>
                            <LuPencil color='#9b9ca0' size={13}/>
                        </span>
                    )}
                    
                </span>
            </div>
            <div className='flex items-center gap-x-5 ml-auto'>
                <p className='opacity-60 text-sm hidden mb:block truncate min-w-0'> All updates are automatically saved</p>
                <div className='flex gap-x-5 shrink-0'>
                    <p className='opacity-70 text-sm truncate'>Changes Saved</p>
                </div>
            </div>
            <ActivateAutomationButton id={id}/>
        </div>
    )
}

export default AutomationsBreadCrumb