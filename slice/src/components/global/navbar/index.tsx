'use client'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePath } from '@/hooks/user-nav'
import { Menu } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import { IoIosHelpCircle } from "react-icons/io";
import Items from '../sidebar/items'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from '../sidebar/upgrade'
import CreateAutomation from '../Create-Automation'
import Search from '../search'
import Infobar from '../Infobar'
import MainBreadCrumb from '../bread-crumbs/Main-bread-crumb'


type Props = {
    slug : string
}

function Navbar({slug}: Props) {

    const {page} = usePath()
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug

    return currentPage &&  
    <div className='flex flex-col'>


        <div className='flex gap-x-3 lg:gap-x-5 justify-end items-center'>

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
                            <Items page={page} slug={slug}/>
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

            <Search/>
            <CreateAutomation/>
            <Infobar/>
        </div>     

        <MainBreadCrumb page={page=== slug ? "Home" : page} slug={slug} />

    </div>
}

export default Navbar