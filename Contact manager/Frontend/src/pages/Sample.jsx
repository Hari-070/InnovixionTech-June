import { useState } from "react"
import { useAuthContext } from "../ContextProvider/AuthContext"
import axios from "axios"
import toast from "react-hot-toast"

const Sample=()=>{
    const [Cname,setCname]=useState('')
    const [Cnumber,setCnumber]=useState('')
    const [Cmail,setCmail]=useState('')
    const [Cpic,setCpic]=useState('')
    const {mail}=useAuthContext()
    const [user,setUser]=useState(mail)
    

    const handleSubmit=async(e)=>{              
        try {
            await axios.post("http://localhost:3000/addContact",{user,Cname,Cnumber,Cmail,Cpic})
            .then(res=>{
                toast.success(res.data)
            })
        } catch (error) {
            console.log(error)
            toast.error(error.response.data)
        }
    }
    return (
        <>
        <div style={{width:'100%',height:'100%',backgroundColor:'rgba(0, 0, 0, 0.2)',top:'0',position:'fixed',display:'flex',justifyContent:'center'}}>
            <div style={{margin:'30px',borderRadius:'10px',padding:'30px',backgroundColor:'white',width:'500px',height:'500px'}}>
                <h1 style={{marginBottom:'30px'}}>Contact:</h1>
                <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
                    <label style={{fontSize:'25px',fontWeight:'500'}}>Name:</label>
                        <input style={{padding:'8px 20px',marginBottom:'20px'}} type="text" placeholder="name" onChange={(e)=>{setCname(e.target.value)}}/>
                    <label style={{fontSize:'25px',fontWeight:'500'}}>number:</label>
                        <input style={{padding:'8px 20px',marginBottom:'20px'}} type="number" placeholder="number" onChange={(e)=>{setCnumber(e.target.value)}}/>
                    <label style={{fontSize:'25px',fontWeight:'500'}}>email:</label>
                        <input style={{padding:'8px 20px',marginBottom:'20px'}} type="text" placeholder="email" onChange={(e)=>{setCmail(e.target.value)}}/>
                    <label style={{fontSize:'25px',fontWeight:'500'}}>photo:</label>
                        <input style={{padding:'8px 20px',marginBottom:'20px'}} type="text" placeholder="image url" onChange={(e)=>{setCpic(e.target.value)}}/>
                    <button type="submit" style={{backgroundColor:'black',border:'none',padding:'20px',color:'white',fontSize:'20px'}}>Save</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Sample