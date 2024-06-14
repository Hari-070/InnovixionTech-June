import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastBar, Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './ContextProvider/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
)
