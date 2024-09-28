import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useFormik } from 'formik';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import axios from 'axios'
import * as Yup from 'yup';
import { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';
export default function EditSession () {
  const navigate=useNavigate();
  const {sessionID}=useParams();
  const [loading, setLoading] = useState(false);
  
 
  const sessionForm=useFormik({
    initialValues:{
      sessionName:'',
      startTime:'',
      endTime:'',
      capacity:'',
      observerEmail:''

    },
    onSubmit:function(values){
      setLoading(true);
      axios.put(`https://localhost:7290/api/Sessions/Edit/${sessionID}`,values, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('tkn')}`
        }
      })
      .then(function(X){
       
        console.log('true',X)
      
      toast.success('session updated successfully')
        navigate(-1);
        
      })
      .catch(function(X){
        console.log('false',X)
        
      }).finally(() => {
        setLoading(false); // Set loading to false when the request is done
      });
      
    },

    validationSchema: Yup.object({
      startTime: Yup.string()
        .required('Start time is required')
        .matches(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
          'Start time must be in the format YYYY-MM-DDTHH:mm'
        ),
      
      endTime: Yup.string()
        .required('End time is required')
        .matches(
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
          'End time must be in the format YYYY-MM-DDTHH:mm'
        )
        .test('is-greater', 'End time must be greater than start time', function(value) {
          const { startTime } = this.parent;
          return startTime && value > startTime;
        }),
    
      sessionName: Yup.string().required('Session name is required'),
      observerEmail:Yup.string()
      .required("Email Requierd")
      .email("Invalid Email"),
    
      capacity: Yup.number()
        .required('Capacity is required')
        .typeError('Capacity must be a number')
        .positive('Capacity must be greater than 0')
        .integer('Capacity must be an integer'),
    }),
    


   })
   function getSessionDetail(){
    
    return axios.get(`https://localhost:7290/api/Sessions/Edit/${sessionID}`,{ headers: {
      'Authorization': `Bearer ${localStorage.getItem('tkn')}`
    }});
  } 
  const {data,isError,isLoading}=useQuery({
    queryKey: ['sessionDetail', sessionID],
    queryFn:getSessionDetail,

  });
  useEffect(() => {
    if (data) {
       
        console.log('data',data.data.session.observerEmail)
      sessionForm.setValues({
      
        sessionName: data?.data?.session.sessionName || '',
        startTime: data?.data?.session.startTime.slice(0, 16) || '',
        endTime: data?.data?.session.endTime.slice(0, 16) || '',
        capacity: data?.data?.session.capacity || '',
       observerEmail: data?.data?.session.observerEmail || '',
       
      });
    }
  }, [data]);
if(isLoading){
   return <Loading></Loading>
}
if(isError)
{console.log('error')
   return<h1>seesion was deleted</h1>
}

   if(loading)
    {
     return <Loading></Loading>
    }
   async function deleteSession(){
    await axios.delete(`https://localhost:7290/api/Sessions/Delete/${sessionID}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('tkn')}`
        }
      }).then((res)=>{console.log(res); 
        toast.success('session deleteted successfully')
        navigate(-1)
    })
      .catch((error)=>{console.log(error) ;toast.error(`${error}`)})

    }
  
  return (
    <>
    <div className='bg-[#F6F2EB] w-screen '>
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
    <form  onSubmit={sessionForm.handleSubmit}>
    <div className='flex  items-center '>
      <label className="block text-sm font-semibold mb-1 me-8">Session Name</label>
      <input type="text"  name='sessionName' value={sessionForm.values.sessionName} onChange={sessionForm.handleChange}  onBlur={sessionForm.handleBlur} className="w-[100px] bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500"  />
      {(sessionForm.errors.sessionName && sessionForm.touched.sessionName) && <div className="err">{sessionForm.errors.sessionName}</div>}
    </div>
    
    <div className='flex  items-center'>
      <label className="block text-sm font-semibold mb-1 me-8">Capacity</label>
      <input type="number" defaultValue={25} name='capacity' value={sessionForm.values.capacity} onChange={sessionForm.handleChange}  onBlur={sessionForm.handleBlur} className="w-12 bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" />
      {(sessionForm.errors.capacity && sessionForm.touched.capacity) && <div className="err">{sessionForm.errors.capacity}</div>}
    </div>
  
    <div className='flex  items-center'>
      <label className="block text-sm font-semibold mb-1 me-8">Time</label>
      <div className="flex space-x-2 items-center">
        <div className="relative flex-1">
          <input type="datetime-local"  name='startTime' value={sessionForm.values.startTime} onChange={sessionForm.handleChange}  onBlur={sessionForm.handleBlur} className="w-full bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" />
          {(sessionForm.errors.startTime && sessionForm.touched.startTime) && <div className="err">{sessionForm.errors.startTime}</div>}
          <svg className="w-6 h-6 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
        </div>
        <span>to</span>
        <div className="relative flex-1">
          <input type="datetime-local" name='endTime' value={sessionForm.values.endTime} onChange={sessionForm.handleChange}  onBlur={sessionForm.handleBlur} className="w-full bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" />
          {(sessionForm.errors.endTime && sessionForm.touched.endTime) && <div className="err">{sessionForm.errors.endTime}</div>}
        </div>

        
      </div>
      
    </div>
  <hr />
  <div className="flex  items-center w-[300px]">
      <label className="block text-sm font-semibold mb-1 me-8 ">ObserverEmail</label>
          <input type="text" name='observerEmail' value={sessionForm.values.observerEmail} onChange={sessionForm.handleChange}  onBlur={sessionForm.handleBlur} className="w-full bg-white p-2 rounded-lg border focus:ring-2 focus:ring-yellow-500" />
          {(sessionForm.errors.observerEmail && sessionForm.touched.observerEmail) && <div className="err">{sessionForm.errors.observerEmail}</div>}
        </div>
    {/* <div className="space-y-4">
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
   */}
    <div className="flex items-center mt-6 space-x-4 lg:translate-x-[800px] ">
      <button type='submit' className="bg-yellow-500 px-4 py-2 rounded-lg text-white"><EditIcon></EditIcon>Edit</button> 
     
       
       <button onClick={()=>{navigate(-1)}} className="bg-red-500 px-4 py-2 rounded-lg text-white">Cancel</button>
       
    </div>
    </form>
    <button onClick={()=>{deleteSession()}}  className="bg-red-500 px-4 py-2 rounded-lg text-white"><DeleteIcon></DeleteIcon>Delete</button> 
    
  </div></div>
    </div>
    </>
 

  )
}
