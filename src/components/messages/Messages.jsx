import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setSelectedEmails } from '../../redux/appSlice';
import { motion } from 'framer-motion'
function Messages({emails}) {

  const dispatch = useDispatch()
 const navigate = useNavigate()

 const goto = ()=>{
  navigate(`/mail/${emails.id}`)
  dispatch(setSelectedEmails(emails))
 }

  function formatDateTime(dateString) { 
    const givenDate = new Date(dateString);
  
    if (isNaN(givenDate.getTime())) {
      throw new Error("Invalid date format: date could not be parsed");
    }
  
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    const givenDateWithoutTime = new Date(givenDate);
    givenDateWithoutTime.setHours(0, 0, 0, 0);
  
    if (today.getTime() === givenDateWithoutTime.getTime()) { 
      return givenDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false  });
    } else { 
      return givenDate.toLocaleDateString([], { day: 'numeric', month: 'short' });
    }
  } 
  
  return (
    <motion.div
    initial={{opacity:0 , y:-20}}
    animate={{opacity:1 , y:0}}
    transition={{duration:0.4}}
    onClick={goto} className=' cursor-pointer msg hover:shadow-lg w-full border-y border-[#8080804d] justify-between h-[39px] items-center flex'>
      <div className=' flex w-[18%] gap-4 '>
        <input type="checkbox" name="" id="" />
      <h1 className=' font-semibold'>{emails.to}</h1>
      </div>

      <div className=' flex justify-between w-[75%] mx-auto '>
        <h1 className=' text-zinc-700 '>{emails.message}</h1> 
        <h1 className=' text-[13px] text-zinc-800 font-bold '>{formatDateTime(new Date(emails?.createAt?.seconds*1000).toUTCString())}</h1>
      </div>
    </motion.div>
  )
}

export default Messages