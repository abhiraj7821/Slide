'use client'
import { Button } from '@/components/ui/button'
import { useSubscription } from '@/hooks/use-subscription'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { CiCreditCard1 } from 'react-icons/ci'

type Props = {}

function PaymentButton({}: Props) {
    // WIP: Get theit subsciption details
    const {onSubscribe,isProcessing} = useSubscription()

    return (
    <Button 
    disabled={isProcessing}
    onClick={onSubscribe}
    className='bg-gradient-to-br text-white rounded-full from-[#9685DB] via-[#9434E6] font-bold to-[#CC3BD4]'
    >
        {isProcessing ? <Loader2 className='animate-spin'/> : <CiCreditCard1/> }
        Upgrade
    </Button>
    )
}

export default PaymentButton