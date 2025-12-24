import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')

    const SubmitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        console.log("Email is  ",email)
        console.log("Password is ",password)

        setEmail('')
        setPassword('')

    }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>{
                SubmitHandler(e)
            }}
             className='flex flex-col justify-center items-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)

                }}
                 required className='border-2 border-emerald-600 py-3 px-5 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400' type='email' placeholder='Enter your email'></input>
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                 required className='border-2 border-emerald-600 py-3 px-5 rounded-full text-xl  outline-none bg-transparent placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password'/>
                <button className='mt-5 border-none border-2 bg-emerald-600 py-3 px-5 rounded-full text-xl text-white outline-none  placeholder:text-white'>Log in</button>
            </form>
        </div>
    
    </div>
  )
}

export default Login
