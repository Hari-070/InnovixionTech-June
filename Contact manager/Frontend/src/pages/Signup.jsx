import React, { useContext, useState } from 'react'
import '../stylesheet/signup.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext, useAuthContext } from '../ContextProvider/AuthContext'

const Signup=()=> {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const {setUser, setMail,setData}=useAuthContext()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
          await axios.post("http://localhost:3000/signup",{username,email,password})
          .then(res=>{
            toast.success("userRegistered successfully!")
            setData(res.data)
            // setUser(username)
            // setMail(email)
            navigate('/')
            localStorage.setItem("contact-user",JSON.stringify(res.data.username))
              setMail(res.data.username)
          })
        } catch (error) {
          console.log(error)
          toast.error(error.response.data)
        }
    }
  return (
    <div className='signup_cont'>
      <div  onSubmit={handleSubmit} className='signup_cont1'>
        <div>
            <h1><span style={{color:"rgba(5, 219, 19, 0.74)"}}>Contact</span>Signup</h1>
        </div>
        <form className='signup_form'>
        <label>Username:</label>
        <input type='text' placeholder='username' onChange={(e)=>{setUsername(e.target.value)}}/>
        <label>Email:</label>
        <input type='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Password:</label>
        <input type='password'  placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='submit' style={{backgroundColor:"rgba(5, 219, 19, 0.74)",borderRadius:"10px",border:"none"}}>Signup</button>
        </form>
        <h2><a href='/login' style={{color:"rgba(5, 219, 19, 0.74)",fontSize:'15px'}}>Already have an account?</a></h2>
      </div>
    </div>
  )
}

export default Signup
