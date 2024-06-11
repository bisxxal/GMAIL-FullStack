import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { setOpen } from '../../redux/appSlice';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
function SendMail() { 
  const dispatch = useDispatch(); 
    const open = useSelector(store=>store.appSlice.open)
  const [ formData,setFormData] = useState({
    to:'',
    subject:'',
    message:''
  })
  const changeHandeler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const sumbitHandler = async(e)=>{
    e.preventDefault();
    await addDoc(collection(db, "emils"),{
      to:formData.to,
      message:formData.message,
      subject:formData.subject,
      createAt:serverTimestamp()
    })

    dispatch(setOpen(false))
    setFormData({
      to:'',
      subject:'',
      message:''
    })
    // console.log(formData);
  }

  return (
    <div className={` ${open ? ' block ':' hidden '} bg-white shadow-2xl w-[520px] h-[70vh] rounded-t-lg overflow-hidden absolute right-10 top-[30vh] `}>
        <div className='flex p-1 px-4 w-full justify-between font-medium bg-[#F2F6FC]'>
            <h1>New Message </h1>
            <div className=' cursor-pointer text-xl flex gap-6'>
            <h2> - </h2>
            <h2 onClick={()=>  dispatch(setOpen(false)) }>x</h2>
            </div>
        </div>

        <form onSubmit={sumbitHandler}>
        <div className='px-4 mt-2'>
           <input onChange={changeHandeler} value={ formData.to} name='to' className=' border-b outline-none  pb-2 w-full h-9' type="email" placeholder='To' />
           <input onChange={changeHandeler} value={ formData.subject} name='subject' className=' border-b outline-none  py-2 w-full h-9' type="text" placeholder='Subject' />
        </div>
        <div>
            <textarea onChange={changeHandeler} value={ formData.message} name='message' className=' border-none outline-none px-4 py-2 resize-none w-full h-[47vh] '   id=""></textarea>
        </div>
        <button className=' bg-blue-600  text-white text-lg ml-4 rounded-full px-5 py-1' type="submit"> Send </button>
        </form>
    </div>
  )
}

export default SendMail