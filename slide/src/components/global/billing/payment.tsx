import { Button } from '@/components/ui/button'
import { PLANS } from '@/constants/pages'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

type Props = {
    label:string
    current: 'PRO' | 'FREE'
    landing?: boolean
}

function PaymentCard({current,label,landing}: Props) {
  return (
    <div className={cn(
        label !== current ? 
        'bg-gray-500' : 
        'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500', 'p-[2px] rounded-xl overflow-hidden'
    )}>
        <div className={cn(
            landing && 'mask-radial-to-pink-200',
            'flex flex-col rounded-xl pl-5 py-5 pr-10 bg-background-90'
        )}>

            { landing ? (
                <h2 className='text-2xl'>
                    {label === 'PRO' && 'Premium Plan'}
                    {label === 'FREE' && 'Standard'}
                </h2>
            ) :(
                <h2 className='text-2xl'>
                    {label === current ? 'Your Current Plan' : 
                    current === 'PRO' ? 'Downgrade' :'Upgrade' }
                </h2>
            ) 
        }
        <p className='text-white opacity-60 text-sm mb-2'>
            Focus on content creation and let us take care of the rest!
        </p>

        {label == 'PRO' ? (
            <span className='bg-gradient-to-r text-3xl from-indigo-500 via-purple-500 font-bold to-pink-500 bg-clip-text text-transparent'>Smart AI</span>
        ):(
            <p className='font-bold mt-2 text-white opacity-60'>Standard</p>
        )}

        {label==='PRO' ? (
            <p className='mb-2'>
                <b className='text-xl'>$99</b>/month
            </p>
        ) : (
            <p className='text-xl mb-2 opacity-60'>Free</p>
        )
        }

        {PLANS[label === 'PRO' ? 1 : 0].features.map((i)=>(
            <p key={i} className='mt-2 flex gap-[1vw] opacity-60'>  <CircleCheck className='text-white'/> {i} </p>
        ))}

        {landing ? (
            <Button className={cn(
                'rounded-full mt-5', label === 'PRO' ?
                'bg-gradient-to-r from-indigo-500 text-white via-purple-500 to-pink-500' : 'bg-zinc-900 text-white hover:text-zinc-900 hover:bg-pink-500'
            )}
            >
                {label === current ? 'Get Started' : current === 'PRO' ? 'Downgrade' : 'Upgrade'}
            </Button>
        ) : (
            <Button className='rounded-full mt-5 bg-zinc-900 text-white hover:text-zinc-900 hover:bg-pink-500' disabled={label === current}>
                {label === current ? 'Active' : current === 'PRO' ? 'Downgrade' : 'Upgrade'}
            </Button>
        )}

        </div>
    </div>
  )
}

export default PaymentCard