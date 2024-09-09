import React from 'react'
import Login from './Login/Login'
export default function ProtectedPage({children}) {
    if(localStorage.getItem('tkn')==null)  {
      return <Login></Login>
    }
  return <>{children}</>
    
  
}