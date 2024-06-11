import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { auth ,provider} from '../../firebase'
import { useDispatch } from 'react-redux'
import { setUid, setUser } from '../../redux/appSlice'
function Login() {
  const [input , setInput] = useState()
  const dispatch =  useDispatch()
  const signInGoogle = async()=>{
    try {
      const result = await signInWithPopup(auth , provider)
      dispatch(setUser({
        displayName: result.user.displayName,
        email : result.user.email,
        photoURL : result.user.photoURL,
        uid : result.user.uid,
        displayName : result.user.displayName
      }))
      dispatch(setUid(result.user.uid))
      console.log(result);
    } catch (error) {
      
    }
  }
  return (
    <div className=' w-full h-screen flex items-center justify-center bg-blue-50 z-[100] '>
      <div className='flex w-[70%] h-[60vh] mx-auto rounded-3xl p-7 bg-white'>

        <div className=' flex flex-col items-center justify-center w-1/2'>
      <div>
            <img className=' w-14 h-14 mb-4' src="data:image/png;base64,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" alt="" />
          <h1 className=' text-3xl mb-3'>Sign in  </h1>
          <p>to continue to Gmail</p>
      </div>
        </div>

        <div  className=' w-1/2 flex h-full '>
        <div className=' w-full my-auto '>

        <GoogleButton onClick={signInGoogle}/>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Login