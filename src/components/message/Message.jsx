import React, { useEffect, useState } from 'react'
import Messages from '../messages/Messages'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../../redux/appSlice'
function Message() {
  const dispatch = useDispatch()
  const {emails,searchInput}= useSelector(store=>store.appSlice)
  const [tempMails , setTempMails] = useState(emails)
  useEffect(()=>{
    const q = query(collection(db,'emils'), orderBy('createAt','desc'))
    const unsubscribe = onSnapshot(q,(snapshort)=>{
      const allEmails = snapshort.docs.map((doc)=>({...doc.data(),id:doc.id}))

      dispatch(setEmails(allEmails)) 
      })
    return ()=> unsubscribe()
  },[])

  useEffect(()=>{
    const filteredEmail = emails?.filter((email)=>{
      return email?.subject?.toLowerCase().includes(searchInput.toLowerCase()) || email?.to?.toLowerCase().includes(searchInput.toLowerCase())
    })
    setTempMails(filteredEmail)
  },[searchInput , emails])
  return (
    <div className=' w-full'>
      {
        tempMails && tempMails?.map((emails)=>{ 
          return(
             <Messages emails={emails}/>
          )
        })
      }
   
    </div>
  )
}

export default Message