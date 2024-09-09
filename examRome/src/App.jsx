import { useState } from 'react'
import LogIn from './components/LogIn/LogIn'
import './App.css'
import ExamRome from './components/ExamRome/ExamRome'
import Layout from './components/Layout/Layout'
import Profile from './components/Profile/Profile'
import ExamROOMES from './components/ExamROOMES/ExamROOMES'
import Notification from './components/Notification/Notification'
import Home from './components/Home/Home'
import Notes from './components/Notes/Notes'
import Chat from './components/Chat/Chat'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Session from './components/session/Session'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
   
    path: "",
   element: <Layout></Layout>,children:[ 
   
    { path: "*",  element: <ErrorPage></ErrorPage>},
    
    { path: "/home",  element: 
      <Home/>
   },
    { path: "/Notification",  element: 
      <Notification/>
   },
    { path: "/Profile",  element: 
      <Profile/>
   },
    { path: "/LogIn",  element: 
      <LogIn/>
   },
    { path: "/examRome",  element: 
      <ExamRome/>
   },
    { path: "/examRomes",  element: 
      <ExamROOMES/>
   },
    { path: "/notes",  element: 
   <Notes></Notes>
   },
   
    { path: "/chat",  element: 
   <Chat></Chat>
   },
   
    { path: "/session",  element: 
   <Session></Session>
   },
   
   ],
   
  },
]);
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
