import React from 'react'

export default function ExamRome() {
  return (
    <>
    <div className='bg-[#F6F2EB] lg:px-[200px]'>
<div className=" flex  items-center ">
  
  <div className=" w-full  p-10  space-y-6">
    
    <div className="flex justify-between items-center">
     <div className='flex'> <button className="rounded-full px-2 border-2 border-black p-1">
      <span><i class="fa-solid fa-arrow-left"></i></span>
      </button>
      <h1 className="text-lg font-semibold text-black ms-3">Data Mining</h1></div>
      <div className="flex items-center">
        <button className="mr-4">
        <i class="fa-regular fa-bell text-[20px]"></i>
        </button>
        <img src="avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </div>
   
    <div className='flex  items-center  '>
      <label className="block text-sm font-semibold mb-1 me-8">Total</label>
      <input type="text" placeholder="350 Students" className="lg:w-[300px]  sm:w-[100px] bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" disabled />
    </div>
  
    <div className='flex  items-center '>
      <label className="block text-sm font-semibold mb-1 me-8">Sessions</label>
      <div className="flex space-x-2 items-center">
        <input type="number" defaultValue={3} className="w-12 bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" />
        <div className="flex space-x-2 items-center text-[15px]  flex-wrap space-y-2  lg:flex-nowrap   ">
          <span className="px-2 py-1  bg-white rounded-lg lg:w-[80px] lg:h-[30px] ">Session 1</span>
          <span className="px-2 py-1 bg-white rounded-lg lg:w-[80px] lg:h-[30px]">Session 2</span>
          <span className="px-2 py-1 bg-gray-300 bg-white rounded-lg lg:w-[80px] lg:h-[30px]">Session 3</span>
        </div>
        <button className="rounded-full bg-yellow-500 p-2 px-3">
        <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  
    <div className="flex space-x-4 flex-wrap lg:flex-nowrap  space-y-3  items-center  ">
      <div className="flex justify-center items-center ">
        <label className="  text-sm font-semibold me-8 ">Date</label>
        <div className="relative">
          <input type="date"  className=" lg:w-[300px] bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" />
        
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <label className="block text-sm font-semibold mb-2 me-8 ">Time</label>
        <div className="relative">
          <input type="time"  className="w-full bg-white-100 mb-2 p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" />
         
        </div>
      </div>
    </div>
   <hr />
    <div className="flex  items-center" >
      <label className=" block text-sm font-semibold mb-1 me-8">Notes</label>
      <textarea className=" w-full lg:w-[500px] bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" rows={4} defaultValue={""} />
    </div>
   <div className='flex justify-between flex-wrap' >
    <div className="flex  items-center">
      <label className="block text-sm font-semibold mb-1 me-8">Directories</label>
      <select className="sm:w-full lg:w-[150px] bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500">
        <option>Choose</option>
      </select>
    </div>

    <div className="flex items-center mt-6 space-x-4    ">
      <button className="bg-yellow-500 px-4 py-2 rounded-lg text-white"> <i class="fa-regular fa-pen-to-square me-1"></i>Edit</button>
      <button className="bg-yellow-500 px-4 py-2 rounded-lg text-white"><i class="fa-regular fa-floppy-disk me-1"></i>Save</button>
      <button className="bg-red-500 px-4 py-2 rounded-lg text-white"><i class="fa-solid fa-ban me-1"></i>Cancel</button>
    </div>
    </div>
  </div>
</div>
</div>
</>
  )
}
