import React from 'react'
import { FaCaretRight } from 'react-icons/fa'
import { LuInstagram } from 'react-icons/lu'

type Props = {
    type: string,
    keywords: {
        id:string,
        word:string,
        automationId : string | null
    }[]
}

function ActiveTrigger({type,keywords}: Props) {
  return (
    <div className='bg-background/10 p-3 rounded-xl w-full'>
        <div className='flex gap-2 items-center'>
            {(type === "COMMENT" ? <LuInstagram /> : <FaCaretRight/> )}
            <p className='text-sm'>
                {type === 'COMMENT' ? "User Comments on my post" : "User sends me a direct message."}
            </p>
        </div>
        <p className='opacity-50 text-sm'>
             {type === 'COMMENT' ? "If the user comments on a video that is setip to listen for keywords, this automation will fire" 
                : 
                        "If the user sends you an message that contains a keyword, this automation will fire"}
        </p>

        <div className='flex gap-2 mt-5 flex-wrap'>
            {keywords.map( (word)=>(
                <div key={word.id} className='bg-gradient-to-br from-[#3353cc] to-[#1c2d70] flex items-center gap-x-2 capitalize text-white font-light py-1 px-4 rounded-full'>
                    <p>{word.word}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ActiveTrigger