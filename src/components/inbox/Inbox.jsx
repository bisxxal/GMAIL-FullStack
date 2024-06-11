import React from 'react'
import Message from '../message/Message'
import { useSelector } from 'react-redux'
function Inbox() {
  const {side} = useSelector((store)=>store.appSlice)
  return (
    <div className={`${side ? 'pl-[100px] ' : '   pl-[275px] '} pt-[85px] w-full ` }>
      <div className=' flex w-full gap-20 '>
        <h1 className=' hover:bg-gray-300 px-10 border-blue-600  border-b-[3.5px] text-blue-600 font-medium h-[50px] flex items-center rounded-m '>Primary</h1>
        <h1 className=' hover:bg-gray-300 px-10 hover:border-blue-600 hover:border-b-[3.5px] hover:text-blue-600 font-medium h-[50px] flex items-center rounded-m '>Promotional</h1>
        <h1 className=' hover:bg-gray-300 px-10 hover:border-blue-600 hover:border-b-[3.5px] hover:text-blue-600 font-medium h-[50px] flex items-center rounded-m '>Social</h1>
      </div>
      <Message/>
    </div>

  )
}

export default Inbox