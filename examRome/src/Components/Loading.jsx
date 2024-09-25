import React from 'react'
import { Bars } from 'react-loader-spinner';
export default function Loading() {
  return (
    <div  className='h-screen w-full  flex justify-center items-center bg-[#7c7c7d]'>
         <Bars
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
    </div>
   
  )
}
