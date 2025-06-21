import { useKeywords } from '@/hooks/use-automation'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import { useQueryAutomation } from '@/hooks/user-queries'
import React from 'react'
import { IoIosClose } from 'react-icons/io'

type Props = {
    id:string
}

function Keywords({id}: Props) {

    const {keyword,onValueChange,onKeyPress,deleteMutation} = useKeywords(id)
    const {latestVariable} = useMutationDataState(["add-keyword"])
    const {data} = useQueryAutomation(id)

    return (
        <div className='bg-background/20 flex flex-col gap-y-3 p-3 rounded-xl'>
            <p className='text-sm opacity-60 text-white'>
                Add words that trigger automations
            </p>
            <div className='flex flex-wrap justify-start gap-2 '>
                {data?.data?.keywords && data?.data?.keywords.length > 0 && data.data.keywords.map( (word)=> ( word.id !== latestVariable?.variables.id && ( 
                <div key={word.id} className='bg-background/90 opacity-70 flex items-center py-1 px-4 rounded-full text-white text-sm'>
                    <p>{word.word}</p>
                    <IoIosClose color='#fffff' className='cursor-pointer' size={20} onClick={()=>deleteMutation({ id: word.id})}/>
                </div>
                )))
                }

                {latestVariable && latestVariable.status === 'pending' && (
                    <div className='bg-background/20 flex items-center gap-x-2 capitalize opacity-60 py-1 px-4 rounded-full text-white'>
                        {latestVariable.variables.keyword}
                    </div>
                )}

                <input 
                placeholder='Add keyword...' 
                style={{ width: Math.min(Math.max(keyword.length || 10,2), 50)  +'ch' }} 
                value={keyword}
                className='p-0 bg-transparent ring-0 border-none outline-none text-white'
                onChange={onValueChange}
                onKeyUp={onKeyPress}
                />

            </div>
        </div>
    )
}

export default Keywords