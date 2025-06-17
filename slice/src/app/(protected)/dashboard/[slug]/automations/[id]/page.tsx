import Trigger from '@/components/global/automations/trigger';
import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations'
import React from 'react'
import { CiWarning } from 'react-icons/ci';
import { FaExclamation } from "react-icons/fa6";


type Props = {
  params : {id:string}
}

// WIP: Set some metadata

async function Page({params}: Props) {

  const {id} = await params;

  // WIP: prefetch user automation data

  return (
    <div className='flex flex-col items-center gap-y-2'>
      <AutomationsBreadCrumb id={id}/>
      <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1d1d1d] gap-y-3'>
        <div className='flex gap-x-2 items-center'>
          <FaExclamation className='bg-[#5c75d6] rounded-full p-[2px]'/>
          
          when..
        </div>
        <Trigger id={id} />
      </div>
    </div>
  )
}

export default Page