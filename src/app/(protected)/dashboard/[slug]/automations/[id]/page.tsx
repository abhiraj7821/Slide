import { getAutomationInfo } from '@/actions/automations';
import PostNode from '@/components/global/automations/post/node';
import ThenNode from '@/components/global/automations/then/node';
import Trigger from '@/components/global/automations/trigger';
import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations'
import { PrefetchAutomation } from '@/react-query/prefetch';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import React from 'react'
import { FaExclamation } from "react-icons/fa6";


type Props = {
  params : {id:string}
}

export async function generateMetadata({params}:{params:{id:string}}){
  const {id} = await params 
  const info = await getAutomationInfo(id);
  return {
    title:info.data?.name,
  }
}

async function Page({params}: Props) {
  // Pre Fetching data
  const {id} = await params;
  const query = new QueryClient()
  await PrefetchAutomation(query,id)

  return (
   <HydrationBoundary state={dehydrate(query)}>
     <div className='flex flex-col items-center gap-y-2'>
      <AutomationsBreadCrumb id={id}/>

      <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1d1d1d] gap-y-3'>
        <div className='flex gap-x-2 items-center'>
          <FaExclamation className='bg-[#5c75d6] rounded-full p-[2px]'/>
          
          when..
        </div>
        <Trigger id={id} />
      </div>
      <ThenNode id={id} />
      <PostNode id={id} />
    </div>
   </HydrationBoundary>
  )
}

export default Page