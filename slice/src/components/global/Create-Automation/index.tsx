import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { TbAutomation } from "react-icons/tb";


type Props = {}

function CreateAutomation( {}: Props) {

    // WIP: Create the automation in the database using mutate

    return <Button className='lg:px-10 py-3 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1c3d70] flex items-center'>
        <Loader state={false}>
            <TbAutomation/>
            <p className='lg:inline hidden'>Create an Automation</p>
        </Loader>
    </Button>
} 

export default CreateAutomation