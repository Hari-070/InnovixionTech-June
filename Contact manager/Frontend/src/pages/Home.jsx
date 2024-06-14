import React, { useEffect, useState } from 'react'
import { MdOutlineEdit,MdAdd, MdYard,MdDelete  } from "react-icons/md";
import '../stylesheet/home.css'
import Sample from './Sample';
import { useAuthContext } from '../ContextProvider/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import Edit from './Edit';
import { TbLogout2 } from "react-icons/tb";


const Home=()=> {
  const [isAdd,setIsAdd]=useState(false)
  const {data,mail,setMail}=useAuthContext()
  const [contacts,setContacts]=useState([])
  const [username]=useState(mail)
  const [editt,setEditt]=useState(false)
  const [upData,setUpData]=useState({})

  const handleAdd=()=>{
    setIsAdd(true)
  }
  const handleDelete=async(user,Cname)=>{
    console.log(user,Cname)
    try {
      await axios.post("http://localhost:3000/deleteContact",{user,Cname})
      .then(res=>{
        toast.success(res.data)
        getC()
      })
    } catch (error) {
      console.log(error)
      toast.error(error.response.data)
    }
  }
  const handleLogout=()=>{
    setMail('')
    localStorage.removeItem("contact-user")
  }

  const getC=async()=>{
    console.log("inside get")
    try {
      await axios.post("http://localhost:3000/getContact",{username})
      .then(res=>{
        setContacts(res.data)
        console.log(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getC()
  },[])

  return (
    <div className='home_cont'>
      <nav className='home_nav'>
        <h1>Contact Management System</h1>
      </nav>
      <div className='home_cont1'>
        <div className='home_cont1_box1'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s' alt='image'/>
          <h2>{mail}</h2>
          <a href='#'>edit profile</a>
          <div style={{display:'flex',alignItems:'center',cursor:'pointer'}} onClick={handleLogout}><TbLogout2 style={{fontSize:'20px'}}/>Logout</div>
        </div>
        <hr></hr>
        <div className='home_cont1_box2'>
          {contacts.map((item)=>(
            <div className='home_cont1_box2_card' key={item.Cname}>
              <div style={{display:"flex",gap:'20px',alignItems:'center'}}>
                {item.Cpic?<img src={item.Cpic} style={{width:"80px",borderRadius:"50%"}} alt='image'/>:<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s' style={{width:"80px",borderRadius:"50%"}} alt='image'/>}
                
                <div>
                  <h2>{item.Cname}</h2>
                  <h2 style={{color:'gray',fontSize:'15px'}}>{item.Cnumber}</h2>
                  <h2 style={{color:'gray',fontSize:'15px'}}>{item.Cmail}</h2>
                </div>
              </div>
              <div><MdOutlineEdit style={{fontSize:"25px"}} onClick={()=>{setEditt(true),setUpData(item)}}/><MdDelete style={{fontSize:"25px",marginLeft:'10px'}} onClick={()=>{handleDelete(item.user,item.Cname)}}/></div>
              
            </div>
            
          ))}
            
        </div>
      </div>
      {isAdd?<Sample/>:''}
      {editt?<Edit upData={upData}/>:null}
      <div className='home_add_btn' onClick={handleAdd}>
        <MdAdd style={{fontWeight:'900',zIndex:'3000'}}/>
      </div>
      
    </div>
  )
}

export default Home
