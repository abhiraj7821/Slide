import React from 'react'
import PaymentButton from '../payment-button'

type Props = {}

function UpgradeCard({}: Props) {
  return (
    <div className='bg-[#252525] p-2 rounded-2xl flex flex-col gap-[2px] gap-y-3'>
        <span className='text-sm text-white font-medium'>
            Upgrade to {''}
            <span className='bg-gradient-to-r from-[#CC3BD4] font-bold to-[#D064AC] bg-clip-text text-transparent'>
            Smart AI
            </span>
        </span>
        <p className='text-[#989CA0] font-light text-sm'>
            Unlock all features <br/> including AI and more
        </p>

        <PaymentButton/>
    </div>
  )
}

export default UpgradeCard