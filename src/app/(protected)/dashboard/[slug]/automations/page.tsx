import AutomationList from '@/components/global/automation-list';
import CreateAutomation from '@/components/global/Create-Automation';
import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

function Page() {
    // Connect real automations list
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-5'>
            <div className='lg:col-span-4'>
                <AutomationList/>
            </div>
            <div className='lg:col-span-2'>
                <div className='felx flex-col rounded-xl bg-background gap-y-6 p-5 border-[1px] overflow-hidden border-slate-500'>
                    <div>
                        <h2 className='text-xl'>Automations</h2>
                        <p className='text-white opacity-60'>Your live automations show here.</p>
                    </div>
                    {/* Automation block side */}
                    <div className='felx flex-col gap-y-3'>
                        {
                            [1,2,3].map((item)=>(
                                <div key={item} className='flex items-start justify-between'>
                                    <div className='flex flex-col'>
                                        <h3 className='font-medium'>Direct traffic towards website</h3>
                                        <p className='text-white opacity-60'>October 5th 2024</p>
                                    </div>
                                    <CiCircleCheck/>
                                </div>
                            ))
                        }
                    </div>
                    <CreateAutomation/>
                </div>
            </div>
        </div>
    )
}

export default Page