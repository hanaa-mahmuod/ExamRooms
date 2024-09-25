import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export default function Session() {






  
  return (
    <>
    <div className='bg-[#F6F2EB] w-full  '>
    <div className="bg-beige  flex justify-center items-center p-10">
  <div className=" w-full p-8 rounded-lg  space-y-6">
    
    <div className="flex justify-between items-center">
     <div className='flex'> <button className="rounded-full px-2 border-2 border-black p-1">
      <span><ArrowBackIcon></ArrowBackIcon></span>
      </button>
      <h1 className="text-lg font-semibold ms-3">session4</h1></div>
      <div className="flex items-center">
        <button className="mr-4">
        <NotificationsNoneIcon></NotificationsNoneIcon>
        </button>
        <img src="avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </div>
    
    <div className='flex  items-center '>
      <label className="block text-sm font-semibold mb-1 me-8">Session Name</label>
      <input type="text" defaultValue="Session 4" className="w-[100px] bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" disabled />
    </div>
    
    <div className='flex  items-center'>
      <label className="block text-sm font-semibold mb-1 me-8">Capacity</label>
      <input type="number" defaultValue={25} className="w-12 bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" />
    </div>
  
    <div className='flex  items-center'>
      <label className="block text-sm font-semibold mb-1 me-8">Time</label>
      <div className="flex space-x-2 items-center">
        <div className="relative flex-1">
          <input type="time" defaultValue="08:00" className="w-full bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" />
          <svg className="w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
        </div>
        <span>to</span>
        <div className="relative flex-1">
          <input type="time" defaultValue="10:00" className="w-full bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" />
         
        </div>
      </div>
    </div>
  <hr />
    <div className="space-y-4">
      <div className="flex space-x-4 items-center">
        <span>• Observers</span>
        <button className="rounded-full bg-yellow-500 p-2 px-3">
        <FileUploadIcon></FileUploadIcon>
        </button>
      </div>
      
      <div className="flex  space-x-4 items-center">
        <span>• Examiners</span>
        <button className="rounded-full bg-yellow-500 p-2 px-3">
       <FileUploadIcon></FileUploadIcon>
        </button>
      </div>
    </div>
  
    <div className="flex items-center mt-6 space-x-4 lg:translate-x-[800px] ">
      <button className="bg-yellow-500 px-4 py-2 rounded-lg text-white"><EditIcon></EditIcon>Edit</button> 
       <button className="bg-yellow-500 px-4 py-2 rounded-lg text-white"><SaveIcon></SaveIcon>Save</button> 
       <button className="bg-red-500 px-4 py-2 rounded-lg text-white">Cancel</button>
    </div>
  </div></div>
    </div>
    </>
 

  )
}
