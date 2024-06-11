import React from 'react'
import { BiSolidPencil } from "react-icons/bi";
import { FaInbox } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/appSlice';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {side} = useSelector((store)=>store.appSlice)
  const handleComposeClick = () => {
      dispatch(setOpen(true));
  };

  return (
    <div   className={`${side ?' w-[80px]  ':' w-[260px]  ' } flex flex-col z-[6] bg-[#F6F8Fc] h-screen fixed pt-[80px] `} >

        <div onClick={handleComposeClick} className=' cursor-pointer flex bg-[#C2E7FF] w-[55%] justify-center rounded-xl py-4  ml-3  items-center gap-2 text-[#62666b]'>
            <BiSolidPencil  className=' text-2xl' />
           { side === false ? <h1 className=' font-semibold text-gray-700'>Compose</h1> :''} 
           
        </div>

        <div className=' text-[#62666b]'>
            <div onClick={()=>navigate('/')} className=' cursor-pointer  flex mt-3 items-center gap-5 rounded-r-2xl py-1 pl-6  hover:bg-[#D3E3FD]'><FaInbox  className=' text-xl'/> 
            { side === false ?<h1>Inbox</h1> :'' }
            
            </div>
            <div className=' cursor-pointer  flex mt-1 items-center gap-5 rounded-r-2xl py-1 pl-6  hover:bg-[#D3E3FD]'><FaRegStar className=' text-xl' /> 
            { side === false ?<h1>Started</h1> :'' }
            
            </div>
            <div className=' cursor-pointer  flex mt-1 items-center gap-5 rounded-r-2xl py-1 pl-6  hover:bg-[#D3E3FD]'><FaRegClock className=' text-xl' />
             { side === false ? <h1>Snoozed</h1>:'' }
             
             </div>
            <div className=' cursor-pointer  flex mt-1 items-center gap-5 rounded-r-2xl py-1 pl-6  hover:bg-[#D3E3FD]'><IoMdSend className=' text-xl' />
             { side === false ?<h1>Sent</h1> :'' }
             
             </div>
         
        </div>

    </div>
  )
}

export default Sidebar