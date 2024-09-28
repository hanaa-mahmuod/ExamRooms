
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import admin from"../assets/admin.png"
import "../styles/examroom.css"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {getFolders} from "../rtk/reducers/folder"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, } from 'react';

const Folders = () => {
const navigate=useNavigate();
    const dispatch=useDispatch()
const folders = useSelector(state=>state.folders)
//const[folder,setFolders]=useState([])
useEffect(()=>{
    const fetchData = async () => {
        try {
            await dispatch(getFolders());
        } catch (error) {
            console.error('Error fetching folders:', error);
        }
    };

    fetchData();
},[dispatch])
const goBack = () => {
    navigate(-1); // إرجاع المستخدم خطوة للوراء
};
    return (
        <div className="main w-screen   ">
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
                        Folders
                        <div className="inline-block ml-4 "><ChevronRightIcon   style={{ color: 'black', fontSize: 40 }} /></div>
                        <span className=" ml-7 text-2xl  font-poppins font-normal ">General</span> 
                    </span>
                </div>
                </div>
                <div key={1} className="folder_icons grid max-[600px]:grid-cols-2 grid-cols-3 gap-4 max-[520px]:block max-[520px]:mx-auto">
                    <Link to="sharedFolder">
                        <div className='min-[960px]:ml-14 ml-10 text-center'>
                            <FolderIcon className="text-primary" style={{ fontSize: 90 }} />
                            <p className="text-center leading-8 font-poppins font-normal text-xl">Shared with me</p>
                        </div>
                    </Link>

                    { 
                    Array.isArray(folders) && folders.length === 0 ? (
                        <div>No folders</div>
                    ) : (
                        folders.map((folder) => {
                            return (
                                <div key={folder.folderId} className="flex flex-col items-center">
                                    <Link to={`folder/${folder.folderId}`}>
                                        <div className='min-[960px]:ml-14 ml-10 text-center'>
                                            <FolderIcon className="text-primary" style={{ fontSize: 90 }} />
                                            <p className="text-center leading-8 font-poppins font-normal text-xl">{folder.folderName}</p>
                                        </div>
                                    </Link>
                                    
                                </div>
                            )
                        })
                    )}
                    </div>
                <div className="btns fixed z-50 bottom-8  right-[5%]">

                    <div onClick={()=>{navigate('/folders/createfolder/null')}} style={{backgroundColor:"#FFBA67"}} className="add_folder max-[550px]:hidden  rounded-full mb-8  p-5 text-white"> <CreateNewFolderOutlinedIcon  fontSize="large"  style={{  fontSize: 28 }} /></div>
                    
                    <div onClick={()=>{navigate('/folders/createfolder/null ')}} style={{backgroundColor:"#FFBA67"}} className="add_folder min-[551px]:hidden  rounded-full mb-8  p-5 text-white"> <CreateNewFolderOutlinedIcon  fontSize="large"  style={{  fontSize: 18}} /></div>

                </div>
            </div>
            
        </div>
    );
}

export default Folders;
