import { useState } from "react"
import { useAuthContext } from "../ContextProvider/AuthContext"
import axios from "axios"
import toast from "react-hot-toast"

const Edit=(props)=>{
    const [Cname,setCname]=useState(props.upData.Cname)
    const {mail}=useAuthContext()
    const [user,setUser]=useState(mail)
    const [upname,setUpname]=useState(props.upData.Cname)
    const [upnum,setUpnum]=useState(props.upData.Cnumber)
    const [upmail,setUpmail]=useState(props.upData.Cmail)
    const [Cpic,setCpic]=useState(props.upData.Cpic)

    const handleSubmit=async()=>{
        try {
            await axios.post("http://localhost:3000/update",{user,Cname,upname,upnum,upmail})
            .then(res=>{
                toast.success(res.data)
            })
        } catch (error) {
            console.log(error)
            toast.error(error.response.data)
        }
    }
    return(
        <>
         <div style={{width:'100%',height:'100%',backgroundColor:'rgba(0, 0, 0, 0.2)',top:'0',position:'fixed',display:'flex',justifyContent:'center'}}>
            <div style={{margin:'30px',borderRadius:'10px',padding:'30px',backgroundColor:'white',width:'500px',height:'500px'}}>
                <h1 style={{marginBottom:'30px'}}>Contact:</h1>
                <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
                    <label style={{fontSize:'25px',fontWeight:'500'}}>Name:</label>
                        <input style={{padding:'8px 20px',marginBottom:'20px'}} type="text" value={upname} placeholder="name" onChange={(e)=>{setUpname(e.target.value)}}/>
                    <label style={{fontSize:'25px',fontWeight:'500'}}>number:</label>
                        <input style={{padding:'8px 20px',marginBottom:'20px'}} type="number" value={upnum} placeholder="number" onChange={(e)=>{setUpnum(e.target.value)}}/>
                    <label style={{fontSize:'25px',fontWeight:'500'}}>email:</label>
                        <input style={{padding:'8px 20px',marginBottom:'20px'}} type="text" value={upmail} placeholder="email" onChange={(e)=>{setUpmail(e.target.value)}}/>
                    <label style={{fontSize:'25px',fontWeight:'500'}}>photo:</label>
                        <input style={{padding:'8px 20px',marginBottom:'20px'}} type="text" value={Cpic} placeholder="image url" onChange={(e)=>{setCpic(e.target.value)}}/>
                    <button type="submit" style={{backgroundColor:'black',border:'none',padding:'20px',color:'white',fontSize:'20px'}}>Update</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Edit