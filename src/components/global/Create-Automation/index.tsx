'use client'

import { Button } from '@/components/ui/button'
import React, { useMemo } from 'react'
import Loader from '../loader'
import { TbAutomation } from "react-icons/tb";
import { useCreateAutomation } from '@/hooks/use-automation';
import { v4 } from 'uuid';


 

function CreateAutomation(  ) {
    const mutationId = useMemo(()=> v4() , [])
    // WIP: Create the automation in the database using mutate
    console.log(mutationId);
    
    const {isPending,mutate}  = useCreateAutomation(mutationId)

    return <Button onClick= { ()=> mutate({name: 'ABCDEF' , id: mutationId , createdAt : new Date(), keywords:[],})} className='lg:px-10 py-3 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1c3d70] flex items-center'>
        <Loader state={isPending}>
            <TbAutomation/>
            <p className='lg:inline hidden'>Create an Automation</p>
        </Loader>
    </Button>
} 

export default CreateAutomation