import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Inbox from '../inbox/Inbox'
import SendMail from '../sendMail/SendMail'
import { NavLink } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
function Home() {
  return (
   <>
   <Navbar/>
   <Sidebar/>
    <div className=' relative flex'>
        
        <Inbox/>
        <SendMail/>
    </div>
   </>
  )
}

export default Home