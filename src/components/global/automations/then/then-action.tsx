import { useListener } from '@/hooks/use-automation'
import React from 'react'
import TriggerButton from '../trigger-button'
import { AUTOMATION_LISTENERS } from '@/constants/automation'
import { SubscriptionPlan } from '../../subscription-plan'
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Loader from '../../loader'

type Props = {
  id: string
}

function ThenAction({id}: Props) {

  const { onSetListener, listener:Listener, onFormSubmit, register, isPending} = useListener(id)

  return (
  <TriggerButton label="Then">
    <div className='flex flex-col gap-y-2'>
      {AUTOMATION_LISTENERS.map((listener)=>(
        listener.type === 'SMARTAI'? (
        <SubscriptionPlan key={listener.type} type='PRO'>
          <div  onClick={()=> onSetListener(listener.type)} 
                key={listener.id}
                className= {cn(Listener === listener.type ? 
                  'bg-gradient-to-br from-[#3352cc] tp-[#1c2d70]' : 
                  'bg-background/60', 'p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100'
                )}
          >
            <div className='flex gap-x-2 items-center'>
              {listener.icon}
              <p>{listener.label}</p>
            </div>
            <p>{listener.description}</p>
          </div>
        </SubscriptionPlan>
        ) : (
          <div  onClick={()=> onSetListener(listener.type)} 
                key={listener.id}
                className= {cn(Listener === listener.type ? 
                  'bg-gradient-to-br from-[#3352cc] tp-[#1c2d70]' : 
                  'bg-background/60', 'text-white p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100'
                )}
          >
            <div className='flex gap-x-2 items-center'>
              {listener.icon}
              <p>{listener.label}</p>
            </div>
            <p>{listener.description}</p>
          </div>

        ) 
      ))}

      <form onSubmit={onFormSubmit} className='flex gap-y-2 flex-col'>
        <Textarea placeholder={ 
          Listener === 'SMARTAI' ? 
          'Add a prompt that your smart ai can use...' :
          "Add a message you want send to your customers"} 
          {...register('prompt')}
          className='text-white bg-background/20 outline-none border-none ring-0 focus:ring-0'
          />
          <Input
          {...register('reply')}
          placeholder='Add an reply for comments (Optional)'
          className='text-white bg-background/20 outline-none border-none ring-0 focus:ring-0'
          />
          <Button className='bg-gradient-to-br w-full from-[#3352cc] font-medium text-white to-[#1c2d70'>
            <Loader state={isPending}>
              Add listener
            </Loader>
          </Button>
      </form>

    </div>
  </TriggerButton>
  )}

export default ThenAction