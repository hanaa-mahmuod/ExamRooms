import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined'; // Exam Room icon
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined'; 
import "../styles/nav.css"
import Logo from"../assets/examRooms_logo.png"
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronLeft';

import { useState } from 'react';

const Navbar =()=>{
    const[click,setClick]=useState()
    const handelClick=()=>{
        setClick(ev =>!ev);
    }

    return (<>
        <div onClick={()=>{handelClick()}} className={ `${click?" bg-primary max-[700px]:left-1/2 left-[40%] ":" bg-primary "}bg-primary rounded-full p-3   min-[956px]:hidden fixed z-50 top-1/2 transition-transform duration-900 ease-in-out `}>{click?<ChevronRightIcon style={{ color: 'black', fontSize: 30 }}/>:<ChevronLeftIcon style={{ color: 'black', fontSize: 30 }}/>}</div>
        <div className={`${click?"max-[955px]:-translate-x-4  max-[700px]:w-3/4 w-1/2 z-40 fixed ":"max-[955px]:-translate-x-80 w-0 "} Main border-r-2 duration-700 ease-in-out min-[956px]:w-1/4 `} >
            <div className="side-bar  max-[500px]:ml-5">
            <div className="Logo pt-2">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="icons max-[550px]:mt-10 mt-16">
                <ul className="list">
                <li>
                
                    <HomeOutlinedIcon className="text-[#263238]" style={{ fontSize: 30 }} />
                    <span>Home</span>
                
                </li>
                <li>
                    <Link to="profile">
                    <AccountCircleOutlinedIcon  className="text-[#263238]" style={{ fontSize: 30 }} />
                    <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="notifications"><NotificationsOutlinedIcon className="text-[#263238]" style={{ fontSize: 30 }} />
                    <span>Notifications</span></Link>
                    
                </li>
                <li>
                <Link to="exam-room">
                
                    <MeetingRoomOutlinedIcon className="text-[#263238]" style={{ fontSize: 30 }} />
                    <span>Exam Room</span>
                </Link>
                </li>
                <li>
                    <NotesOutlinedIcon className="text-[#263238]" style={{ fontSize: 30 }} />
                    <span>Notes</span>
                </li>
                <li>
                    <ChatOutlinedIcon className="text-[#263238]" style={{ fontSize: 30 }} />
                    <span>Chat</span>
                    <span className= 'inline-block bg-[#FEC88799] py-1 px-3 font-poppins font-thin rounded-full translate-x-10'>4</span>
                    
                </li>
                </ul>
            </div>
            </div>
        </div>
    
        </> );
        
    
}

export default Navbar;