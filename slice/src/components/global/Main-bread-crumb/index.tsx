import { PAGE_ICON } from '@/constants/pages'
import React from 'react'

type Props = {
    page:string,
    slug:string
}

function MainBreadCrumb({page,slug}: Props) {
    console.log("Slug",slug);
        
    return <div className='flex flex-col items-start'>
        {   page==="home" && 
            <div className='flex justify-center w-full'>
                <div className='radial--gradient w-4/12 py-5 lg-py-10 flex flex-col items-center'>
                    <p className='opacity-50 text-[1vw]'>Welcome back</p>
                    <h2 className='text-[1vw]'>{slug ? slug :"Sir"}</h2>
                </div>
            </div>
        }
        <span className='text-[#3353CC]  inline-flex py-5 lg:py-10 pr-15 gap-x-2 items-center'>
            {PAGE_ICON[page.toUpperCase()]}
            <h2 className='font-semibold capitalize text-white'>{page}</h2>
        </span>
    </div>
}

export default MainBreadCrumb