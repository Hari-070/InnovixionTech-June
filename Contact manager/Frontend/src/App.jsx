import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './ContextProvider/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const {data,mail}=useAuthContext()

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={mail?<Home/>:<Login/>}/>
          <Route path='/login' element={mail?<Home/>:<Login/>}/>
          <Route path='/signup' element={mail?<Home/>:<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
