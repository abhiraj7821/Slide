import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import ActivateAutomationButton from '../../activate-automation-button';


type Props = {
    id:string
}


function AutomationsBreadCrumb({id}: Props) {
    // WIP: Get the automation data
    // User mutation stugg to update the automation

    return (
        <div className='rounded-full w-full p-5 bg-[#18181b1a] flex items-center'>
            <div className='flex items-center gap-x-3 min-w-0'>
                <p className='text-[#9b9ca0] truncate'>Automations</p>
                <FaCaretRight color='#5c75d6' className='flex shrink-0'/>
                <span className='flex gap-x-3 items-center min-w-0 '>
                    {/* WIP: Show the editing data */}
                    <p className='text-[#9b9ca0] truncate'>This is the automation title</p>
                    <span className='cursor-pointer hover:opacity-75 duration-100 transition flex shrink-0 mr-5'>
                        <LuPencil color='#9b9ca0' size={13}/>
                    </span>
                </span>
            </div>
            <div className='flex items-center gap-x-5 ml-auto'>
                <p className='opacity-60 text-sm hidden mb:block truncate min-w-0'> All updates are automatically saved</p>
                <div className='flex gap-x-5 shrink-0'>
                    <p className='opacity-70 text-sm truncate'>Changes Saved</p>
                </div>
            </div>
            <ActivateAutomationButton/>
        </div>
    )
}

export default AutomationsBreadCrumb