import { Children, createContext, useContext, useState } from "react";

export const AuthContext=createContext();

export const useAuthContext=()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider=({children})=>{
    const use=localStorage.getItem("contact-user")
    const [user,setUser]=useState('')
    const [mail,setMail]=useState(use?JSON.parse(use):null)
    const [data,setData]=useState({})

    return(<AuthContext.Provider value={{user,setUser,mail,setMail,data,setData}}>
        {children}
    </AuthContext.Provider>
    );
}