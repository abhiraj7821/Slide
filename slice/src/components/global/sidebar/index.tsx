'use client'
import { usePath } from '@/hooks/user-nav'
import React from 'react'
import Items from './items'
import { Separator } from "@/components/ui/separator"
import ClerkAuthState from '../clerk-auth-state'
import { IoIosHelpCircle } from "react-icons/io";
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from './upgrade'


type Props = {
    slug:string
}

function Sidebar({slug}: Props) {
  const {page} = usePath()

  return (
    <div className='w-[13vw] border-[1px] radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768DD] via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden' >
        <div className='flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opacity-90 bg-clip-padding backdrop-filer backdrop--blur__safari backdrop-blur-3xl'>

          <div className='flex flex-col gap-x-2 items-center p-5 justify-center'>
            <div className='logo text-white font-sans'>Slide</div>
          </div>

            <div className='menu_items flex flex-col py-3 gap-3'>
              <Items page={page} slug={slug}/>
            </div>

            <div className='px-16'>
              <Separator className='text-[#989CA0]'/>
            </div>

            <div className='flex flex-col gap-3'>
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
              <div className='flex-1 flex flex-col justify-end'>
                <UpgradeCard/>
              </div>
            </SubscriptionPlan> 
        </div>
    </div>
  )
}

export default Sidebar