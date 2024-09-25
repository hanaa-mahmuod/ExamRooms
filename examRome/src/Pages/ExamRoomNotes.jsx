import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import admin from"../assets/admin.png"
import "../styles/notifications.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const  ExamRoomNotes= () => {
    const param =useParams();
    const[notes,setNotes]=useState([]);
    useEffect(()=>{
        const fetchdata =async()=>{
        try{
            const response = await fetch(`https://localhost:5001/api/ExamRooms/Details/${param.roomId}`,{
                headers:{
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYWhtdWRuYWdpQGdtYWlsLmNvbSIsImV4cCI6MTcyNzI2NTUyMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjkwLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5MCJ9.BdgJCBUQV8eO-nqYNW5WdRt3PhPEoTFFpwUFb_lJOQc"
                },
            });
            if(response.ok){
                const data=await response.json();
                console.log("Success")
                setNotes(data.examRoomNotes.$values)
                
            }
            else{
                console.log("there is an tirabule")
            }
        }catch(erorr){
            console.log(erorr)
        }
    }
    fetchdata();
    console.log("notes",notes);
            
    },[])
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
                    Requests Status
                    </span>
                </div>
                    
                </div>
                <div className="relative">
                <div className="buttn px-2  absolute right-10 bg-[#FEC887] flex text-xl  font-poppins font-normal  rounded-md justify-between w-40 py-4"><button className="">All</button> <span className="  border border-black rounded-full"><ArrowDropDownIcon style={{ fontSize: 20 }} /> </span> </div>
                </div>
                <div className="Notifications max-[955px]:mx-auto mt-20">
                {
                    notes.map((not)=>{
                        return(
                            <>
                            
                            <div key={not.$id} className="slice grid grid-cols-3 ">
                                <div className="admin max-[499px]:pl-2 min-[500px]:pl-10 py-3 ">
                                    <img className="min-[500px]:inline w-16" src={admin} alt="Not found "/>
                                    <span className="text-center  min-[500px]:ml-4 text-gray-400">{not.note}</span>
                                </div>
                                <div className="flex py-7 pr-8 justify-evenly col-span-2 ">
                                    <div className="ml-auto">
                                <span className="inlin-block bg-white shadow rounded-md py-4 px-2 "> <AutorenewIcon  className="text-gray-400" style={{ fontSize: 40 }} /> </span>
                                    </div>
                                    <div className="ml-auto" >
                                    <span className="inlin-block bg-white shadow rounded-md py-4 px-2 "> <TelegramIcon className="text-gray-400" style={{ fontSize: 40 }} />  </span>
                                    </div>
                                </div>

                            </div> 
                            
                            </>
                        )
                    })
                }
                
                </div>
                
            </div>
            
        </div>
    );
}

export default ExamRoomNotes;
