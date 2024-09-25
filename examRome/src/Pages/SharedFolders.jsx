
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import admin from"../assets/admin.png"
import "../styles/examroom.css"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import {  useNavigate } from "react-router-dom";

import { useEffect,useState } from 'react';

const SharedFolders = () => {
const navigate=useNavigate();
   
const[sharedcontent,setContent]=useState([])
useEffect(()=>{
    const fetchData = async () => {
        try {
          const response =await fetch("/api/Folders/UserSessionsAndRooms",{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYWhtdWRuYWdpQGdtYWlsLmNvbSIsImV4cCI6MTcyNzI2NTUyMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjkwLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5MCJ9.BdgJCBUQV8eO-nqYNW5WdRt3PhPEoTFFpwUFb_lJOQc"

            },

          });
          if(response.ok){
            const data =await response.json();
            console.log("Success");
            console.log("Data",data);
            setContent(data)

          }
          else{
            console.log("there is an error");
          }
        } catch (error) {
            console.error('Error fetching folders:', error);
        }
    };

    fetchData();
},[])
const goBack = () => {
    navigate(-1); // إرجاع المستخدم خطوة للوراء
};
    return (
        <div className="main">
            <div className="room_content pt-2 ">
            <div className="head  flex justify-end mr-10">
                <NotificationsOutlinedIcon className="text-gray-400 items-center  mr-4" style={{ fontSize: 40 }} />
                    <img className="w-10" src={admin}/>
                </div>
                <div className="path pt-2 pl-2 ">
                <div onClick={()=>{goBack()}}  className=" flex" >
                    <IconButton
                        style={{ borderRadius: '50%', backgroundColor: '#FFFFFF', padding: '14px' }}
                        color="#00000"
                        aria-label="back"
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <span className="ml-4 translate-y-1.5 text-3xl  font-poppins font-medium">
                       Content
                        <div className="inline-block ml-4 "><ChevronRightIcon   style={{ color: 'black', fontSize: 40 }} /></div>
                        <span className=" ml-7 text-2xl  font-poppins font-normal ">General</span> 
                    </span>
                </div>
                </div>
                <div className="rooms max-[955px]:mx-auto mt-20">
                    {
                        sharedcontent?.examRooms?.$values.map((room)=>{
                            return(
                            <div  onClick={()=>{navigate(`/room/details/${room.examRoomID}`)}} key={room.examRoomID} className="room">
                                <div className="Title_admin ">
                                <div className="admin min-[616px]:hidden max-[615px]:ml-5 min-[616px]:mr-16">
                                    
                                    <img className="inline max" src={admin} alt="Not found "/>
                                    <span className="ml-4 text-gray-400">Created {room.directorId}</span>
                                </div>
                                <p className=" max-[615px]:ml-3 ml-10 font-poppins font-light text-xl">{room.roomName}</p>
                                <div className="admin max-[615px]:hidden max-[615px]:ml-5 min-[616px]:mr-16">
                                    
                                    <img className="inline max" src={admin} alt="Not found "/>
                                    <span className="ml-4 text-gray-400">Created {room.directorId}</span>
                                </div>
                                </div>
                                <div className="date_numstd   ">
                                    <div className="stdnum max-[615px]:ml-3 min-[616px]:ml-10 ">
                                        <span className="lable">Total : </span>
                                        <span className="num">{room.total}</span>
                                    </div>
                                    <div className="date max-[615px]:ml-3 min-[616px]:mr-8">
                                        <span className="day ">{room.date}</span>
                                    
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                
                </div>
                <div className="btns fixed z-50 bottom-8  right-[5%]">

                    <div onClick={()=>{navigate('/folders/createfolder/null')}} style={{backgroundColor:"#FFBA67"}} className="add_folder max-[550px]:hidden  rounded-full mb-8  p-5 text-white"> <CreateNewFolderOutlinedIcon  fontSize="large"  style={{  fontSize: 28 }} /></div>
                    
                    <div onClick={()=>{navigate('/folders/createfolder/null ')}} style={{backgroundColor:"#FFBA67"}} className="add_folder min-[551px]:hidden  rounded-full mb-8  p-5 text-white"> <CreateNewFolderOutlinedIcon  fontSize="large"  style={{  fontSize: 18}} /></div>

                </div>
            </div>
            
        </div>
    );
}

<<<<<<< HEAD
export default SharedFolders;
=======
export default SharedFolders;
>>>>>>> 657e6777a99d405997b3d147af5e10174787c1c8
