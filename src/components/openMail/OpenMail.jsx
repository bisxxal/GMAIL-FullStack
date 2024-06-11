import React from 'react'
import SendMail from '../sendMail/SendMail'
import { useSelector } from 'react-redux'
import { deleteDoc, doc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { db } from '../../firebase';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
function OpenMail() {
  const {selectedMail ,side} = useSelector((store)=>store.appSlice)
  const {id}  = useParams()
  const navigater = useNavigate()
  function formatDateTime(dateString) { 
    try {
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
    } catch (error) {
      
    }
  } 
  const deleteById = async(id)=>{
    try {
      await deleteDoc(doc(db , 'emils' , id))
      navigater('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className={`${side ? 'pl-[100px] ' : '   pl-[275px] '} relative w-full pt-[85px] min-h-screen  `}>
       <div className=' ml-10 flex flex-col gap-3 '>

      <div className=' flex justify-between w-full pr-10 mt-2 items-center'>
      <MdDeleteOutline className='text-[39px] rounded-full hover:bg-blue-100 px-2 cursor-pointer ' onClick={()=> deleteById(id)} /> 
       </div>

      <div className=' flex justify-between w-full pr-10 items-center'>
      <h1 className='text-2xl  mt-3 '>{selectedMail ?.subject} <span className=' bg-gray-400 text-[12px] rounded-lg py-[2px] px-2'>Inbox</span> </h1> 
      <h1>{formatDateTime(new Date(selectedMail?.createAt?.seconds*1000).toUTCString())}</h1>
      </div>

        <h1 className=' font-semibold'>
        {selectedMail ?.to}
        </h1>
        <p>To Me</p>


        <p className=' pr-6 '> {selectedMail ?.message}     </p>
       </div>
       <SendMail/>
    </div>
    </>
  )
}

export default OpenMail