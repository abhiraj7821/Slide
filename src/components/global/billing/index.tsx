'use client'
import React from 'react'
import PaymentCard from './payment'
import { useQueryUser } from '@/hooks/user-queries'

 

function Billing( ) {
//   WIP: Fetch billing information for the customer

const {data} = useQueryUser()

  return (
    <div className='flex lg:flex-row flex-col items-center lg:items-start gap-5 w-full lg:w-10/12 xl:w-8/12 container '>
        <PaymentCard current={data?.data?.subscription?.plan} label='PRO'/>
        <PaymentCard current={data?.data?.subscription?.plan} label='FREE'/>
    </div>
  )
}

export default Billing