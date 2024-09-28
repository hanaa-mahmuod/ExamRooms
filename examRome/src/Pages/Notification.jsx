import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useQuery } from '@tanstack/react-query';
import admin from"../assets/admin.png"
import "../styles/notifications.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Loading from '../Components/Loading';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
const Notifications= () => {
  const [status, setStatus] = useState({});
  // const [status, setstatus] = useState(null)
        function getAllNotification(){
        return axios.get(`https://localhost:7290/api/Notifications/Notifications`,{ headers: {
            'Authorization': `Bearer ${localStorage.getItem('tkn')}`
          }});
    }
    const {data,isError,isLoading}=useQuery({
        queryKey: ['allNotification'],
        queryFn:getAllNotification,
    
      });
      if(isLoading){
        return <Loading></Loading>
     }
     if(isError)
     {console.log('error')
        return<h1>errror</h1>
     }
     if(data){
        console.log(data.data.$values[0].message)

     }
    async function handleAccepted(notifyID){
       await axios.post(`https://localhost:7290/api/Notifications/AcceptInvite/${notifyID}`,{},{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('tkn')}`
        }
      })
       .then((res)=>{console.log('response',res)
        toast.success(`${res.data.message}`)
        setStatus((prev) => ({ ...prev, [notifyID]: 'Accepted' }))
       }
    )
       .catch((err)=>{console.log(err)
        toast.error(`session was deleted`)
       })
     }
    async function handleRejected(notifyID){
       await axios.post(`https://localhost:7290/api/Notifications/RejectInvite/${notifyID}`,{},{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('tkn')}`
        }
      })
       .then((res)=>{console.log('response',res)
        toast.success(`${res.data.message}`)
        setStatus((prev) => ({ ...prev, [notifyID]: 'Rejected' }));
       }
    )
       .catch((err)=>{console.log(err)
        toast.error(`session was deleted`)
       })
     }
    return (
        <div className="noti-main ">
            <div className="Noti_content pt-5 ">
                <div className="head  flex justify-end mr-10">
                <NotificationsOutlinedIcon className="text-gray-400 items-center  mr-4" style={{ fontSize: 40 }} />
                    <img className="w-12" src={admin}/>
                </div>
                <div className="path pt-5 pl-2 ">
                <div className=" flex" >
                    <IconButton
                        style={{ borderRadius: '50%', backgroundColor: '#FFFFFF', padding:'10px' }}
                        color="#00000"
                        aria-label="back"
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <span className="ml-4 translate-y-1.5  max-[500px]:text-2xl text-2xl font-poppins font-normal">
                  Notifications
                    </span>
                </div>
                    
                </div>
                {/* <div className="relative">
                <div className="buttn px-2  absolute right-10 bg-[#FEC887] flex text-xl  font-poppins font-normal  rounded-md justify-between w-40 py-4"><button className="">All</button> <span className="  border border-black rounded-full"><ArrowDropDownIcon style={{ fontSize: 20 }} /> </span> </div>
                </div> */}
                <div className="Notifications max-[955px]:mx-auto mt-20">
              {data.data.$values.map((notify)=> <div key={notify.$id} className="slice grid grid-cols-3">
              <div  >
             <div className="admin max-[499px]:pl-2 min-[500px]:pl-10 py-3 ">
               
                 <h1>{notify.message}</h1>
                 <span>{notify.createdAt}</span>
                 {status[notify.$id] && <h1>{status[notify.$id]}</h1>}
               
             </div>
         </div>
           <div className="flex py-7 pr-8 justify-evenly col-span-2 ">
                 <div className="ml-auto">
           <button onClick={()=>{handleAccepted(notify.$id)}} className='rounded-full bg-green-600 text-white px-4 py-1 hover:bg-green-700 text-lg'>Accept</button>
                 </div>
                 <div className="ml-auto" >
             <button onClick={()=>{handleRejected(notify.$id)}} className='rounded-full text-lg text-red-600 bg-white border border-black px-4 py-1 hover:bg-red-500 hover:text-white hover:border-none'>Reject</button>
                 </div>
             </div></div>)}
                
                </div>
                
            </div>
            
        </div>
    );
}

export default Notifications;
