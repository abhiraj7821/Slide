import React from 'react'
import { CiSearch } from "react-icons/ci";


 

function Search( ) {
  return (
    <div className='flex overflow-hidden gap-x-2 border-1 border-[#3353cc] rounded-full px-4 py-1.5 items-center flex-1' >
        <CiSearch className='text-white'/>
        <input
            type="text" // optional: avoids built-in validation
            placeholder='Search by name, email or status'
            className="w-[100%] text-sm appearance-none border-none bg-transparent p-0 m-0 focus:outline-none focus:ring-0 focus:border-none invalid:border-none"
        />

    </div>
  )
}

export default Search