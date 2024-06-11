import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { IoMdMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoMdOptions } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUid, setSearchInput, setSide, setUser } from '../../redux/appSlice';
import { motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
function Navbar() {
  const navigate = useNavigate()
  const [input , setInput] = useState('') 
  const [toggle ,setToggle] = useState(false)
  const {side , uid,user} = useSelector((store)=>store.appSlice)
  const dispatch = useDispatch(); 
  const handleComposeClick = () => {
    dispatch(setSide(!side));  
    };
     
  useEffect(()=>{
    dispatch(setSearchInput(input))
  },[input])
  
  const logout = ()=>{
    signOut(auth).then(()=>{
      dispatch(setUser(null))
      dispatch(clearUid())
    }).catch(()=>{
      console.log("error");
    })
  }
   
  return (
    <div className=' navbar w-full fixed flex items-center px-6 justify-between h-[70px] z-20 bg-[#F6F8FC] '>
        <div className=' flex justify-between gap-5 items-center'>
          <IoMdMenu  onClick={handleComposeClick} className=' text-3xl hover:bg-blue-200 rounded-full w-10 h-10 p-1 px-[6px] text-[#464948d6]' />
          <div onClick={()=>navigate('/')} className=' cursor-pointer flex items-center text-xl text-[#464948d6] font-medium gap-2'> <img className=' w-8' src={logo} alt="" /> <h1>Gmail</h1></div>
        <div className=' flex items-center bg-[#e3eefd] py-3 justify-between px-5 w-[700px] rounded-full ml-20'> <IoSearchSharp className=' text-xl' />
         <input onChange={(e)=> setInput(e.target.value)} className=' bg-transparent px-2 outline-none border-none w-full ' placeholder='Search Mail' type="text" /> <IoMdOptions className=' text-xl' /> </div>
        </div>
        <div className=' flex items-center read-only: text-xl text-[#464948d6] gap-4 '>
             <IoMdSettings /> 
               <img onClick={()=>setToggle(!toggle)} className='w-10 h-10 object-cover bg-slate-600 rounded-full' src={user?.photoURL} alt="" />
       <motion.div
       initial={{ opacity:0 , scale:0.9}}
       animate={{opacity:1,scale:1}}
       exit={{opacity:0, scale:0.8}}
       transition={{duration:0.1}}
      
       className={` ${toggle ? ' flex ':' hidden '} absolute top-20 right-3 h-[350px] rounded-3xl bg-red-500  w-[350px] `}>

        <div className=' w-full flex-col px-4 flex gap-4 items-center py-4 bg-[#F6F8FC] shadow-lg'>
          <h1 className=' text-lg font-medium'>{user?.email}</h1>
          <img className=' w-20 h-20 rounded-full ' src={user?.photoURL} alt="" />
        <h1>{user?.displayName}</h1>
          <button onClick={logout} className=' bg-blue-600 text-white text-base px-7 py-2 rounded-3xl mt-10'>Logout</button>
        </div>
       </motion.div>
        </div>
    </div>
  )
}

export default Navbar