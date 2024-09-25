import React, { createContext } from 'react'
import { useState } from 'react';
export const AUth=createContext(null)
export default function UserIdProvider({children}) {
    const [UserID, setUserID] = useState(localStorage.getItem('userId'));
    const [token, settoken] = useState(localStorage.getItem('tkn'));
  return (
   <AUth.Provider value={{UserID,setUserID,token,settoken}}>
    {children}
   </AUth.Provider>
  )
}
