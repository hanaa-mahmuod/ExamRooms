
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import admin from"../assets/admin.png"
import "../styles/examroom.css"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {getFolders} from "../rtk/reducers/folder"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const Folders = () => {
const dispatch=useDispatch()
const {folders, loading, error} = useSelector(state=>state.folders)
useEffect(()=>{
    const fetchData = async () => {
        try {
            await dispatch(getFolders()); // استدعاء الـ thunk الخاص بالفولدرات
        } catch (error) {
            console.error('Error fetching folders:', error);
        }
    };

    fetchData();
},[dispatch])
    return (
        <div className="main">
            <div className="room_content pt-2 ">
            <div className="head  flex justify-end mr-10">
                <NotificationsOutlinedIcon className="text-gray-400 items-center  mr-4" style={{ fontSize: 40 }} />
                    <img className="w-10" src={admin}/>
                </div>
                <div className="path pt-2 pl-2 ">
                <div className=" flex" >
                    <IconButton
                        style={{ borderRadius: '50%', backgroundColor: '#FFFFFF', padding: '14px' }}
                        color="#00000"
                        aria-label="back"
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <span className="ml-4 translate-y-1.5 text-3xl  font-poppins font-medium">
                        Exam Room
                        <div className="inline-block ml-4 "><ChevronRightIcon   style={{ color: 'black', fontSize: 40 }} /></div>
                        <span className=" ml-7 text-2xl  font-poppins font-normal ">General</span> 
                    </span>
                </div>
                </div>
                    <div className=" folder_icons max-[520px]:mx-auto max-[520px]:block  ">
                    <Link to="folder">
                    <div className='min-[960px]:ml-14 ml-10 text-center '><FolderIcon className=" text-primary" style={{  fontSize: 90 }} /><p className="text-center leading-8  font-poppins font-normal text-xl">Shared with me</p></div>
                    </Link>
                    
                    { error ?<div>erorrs</div>:
                    loading?<div>loading</div>:
                    folders.length ===0?<div>No folders</div>:
                            folders.map((folder)=>{
                                // eslint-disable-next-line no-undef
                                retrun (
                                <>
                                <Link key={folder.id} to="folder">
                                    <div  className='min-[960px]:ml-14 ml-10 text-center '><FolderIcon className=" text-primary" style={{  fontSize: 90 }} /><p className="text-center leading-8  font-poppins font-normal text-xl">{folder.FolderName}</p></div>
                                </Link>
                                </>
                                )
                            })
                    
                    }
                    </div>
                <div className="btns fixed z-50 bottom-8  right-[5%]">
                    <div style={{backgroundColor:"#FFBA67"}} className="add_folder max-[550px]:hidden  rounded-full mb-8  p-5 text-white"> <CreateNewFolderOutlinedIcon  fontSize="large"  style={{  fontSize: 28 }} /></div>
                    <div  style={{backgroundColor:"#FFBA67"}} className="add_room max-[550px]:hidden   rounded-full   p-5 text-white"> <MeetingRoomOutlinedIcon  fontSize="large"  style={{  fontSize: 28 }} /></div>
                    <div style={{backgroundColor:"#FFBA67"}} className="add_folder min-[551px]:hidden  rounded-full mb-8  p-5 text-white"> <CreateNewFolderOutlinedIcon  fontSize="large"  style={{  fontSize: 18}} /></div>
                    <div  style={{backgroundColor:"#FFBA67"}} className="add_room  min-[551px]:hidden  rounded-full   p-5 text-white"> <MeetingRoomOutlinedIcon  fontSize="large"  style={{  fontSize: 18 }} /></div>
                </div>
            </div>
            
        </div>
    );
}

export default Folders;
