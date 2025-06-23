"use client"
import React from 'react'
import { FaCaretRight } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import ActivateAutomationButton from '../../activate-automation-button';
import { useQueryAutomation } from '@/hooks/user-queries';
import { useEditAutomation } from '@/hooks/use-automation';
import { useMutationDataState } from '@/hooks/use-mutation-data';
import Sheet from '../../sheet';
import { Menu } from 'lucide-react';
import Items from '../../sidebar/items';
import { usePath } from '@/hooks/user-nav';
import { Separator } from '@/components/ui/separator';
import ClerkAuthState from '../../clerk-auth-state';
import { IoIosHelpCircle } from 'react-icons/io';
import { SubscriptionPlan } from '../../subscription-plan';
import UpgradeCard from '../../sidebar/upgrade';


type Props = {
    id:string
}


function AutomationsBreadCrumb({id}: Props) {
    // WIP: Get the automation data
    const {data} = useQueryAutomation(id)
    const {edit,enableEdit,inputRef,isPending} = useEditAutomation(id)
    // User mutation stugg to update the automation

    const {latestVariable} = useMutationDataState(["update-automation"])
    const {page} = usePath()

    return (
        <div className='rounded-full w-full p-5 bg-[#18181b1a] flex items-center'>
            <div className='flex items-center gap-x-3 min-w-0'>

                <span className='lg:hidden flex items-center flex-1 gap-x-2'>
                    <Sheet
                        trigger = {<Menu/>}
                        className="lg:hidden"
                    >
                        <div className='flex flex-col gap-y-5 w-[full] h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filer backdrop--blur__safari backdrop-blur-3xl '>
                            <div className='flex flex-col gap-x-2 items-center p-5 justify-center'>
                                <div className='logo text-white font-sans'>Slide</div>
                            </div>

                            <div className='menu_items flex flex-col py-3 gap-3 p-10'>
                                <Items page={page} slug={"Automation"}/>
                            </div>

                            <div className='px-16 '>
                                <Separator className='text-[#989CA0]'/>
                            </div>

                            <div className='flex flex-col gap-3 p-10'>
                                <div className='flex items-center gap-x-2'>
                                    <ClerkAuthState/>
                                        <p className='text-white'>Profile</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <IoIosHelpCircle className='text-white'/>
                                        <p className='text-white'>Help</p>
                                </div>
                            </div>
                                
                            <SubscriptionPlan type = "FREE">
                                <div className='flex-1 flex flex-col justify-end px-10'>
                                    <UpgradeCard/>
                                </div>
                            </SubscriptionPlan> 
                        </div>
                    </Sheet>
                </span>

                <p className='text-[#9b9ca0] truncate text-sm max-sm:hidden'>Automation</p>
                <FaCaretRight color='#5c75d6' className='flex shrink-0 max-sm:hidden'/>
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
                    <p className='opacity-70 text-[0.8rem] truncate'>Changes Saved</p>
                </div>
            </div>
            <ActivateAutomationButton id={id}/>
        </div>
    )
}

export default AutomationsBreadCrumb