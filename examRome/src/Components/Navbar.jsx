import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined'; // Exam Room icon
import LogoutIcon from '@mui/icons-material/Logout';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined'; 
import "../styles/nav.css"
import Logo from"../assets/examRooms_logo.png"
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronLeft';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { AUth } from '../Context/UserIdProvider';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
const Navbar =()=>{
    const {setUserID}=useContext(AUth);
    const[click,setClick]=useState()
    const [unreadNotificationCount, setunreadNotificationCount] = useState(null)
const navigate=useNavigate();
    const handelClick=()=>{
        setClick(ev =>!ev);
    }
    function logout(){
        localStorage.removeItem('userId');
       localStorage.removeItem('tkn');
        setUserID(null);
        navigate('./Login');
    
    }
 async function unreadNotification(){
   await axios.get('https://localhost:7290/api/Notifications/UnreadCount',{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('tkn')}`
        }
      }).then((res)=>{console.log(res)
        setunreadNotificationCount(res.data.count)
      })
      .catch((error)=>{console.log(error)})
}
useEffect(() => {
    unreadNotification();
  }, []);
    return (<>
        {/* <div onClick={()=>{handelClick()}} className={ `${click?" bg-primary max-[700px]:left-1/2 left-[40%] ":" bg-primary "}bg-primary rounded-full p-3   min-[956px]:hidden fixed z-50 top-1/2 transition-transform duration-900 ease-in-out `}>{click?<ChevronRightIcon style={{ color: 'black', fontSize: 30 }}/>:<ChevronLeftIcon style={{ color: 'black', fontSize: 30 }}/>}</div>
        <div className={`${click?"max-[955px]:-translate-x-4  max-[700px]:w-3/4 w-1/2 z-40 fixed ":"max-[955px]:-translate-x-80 w-0 "} Main border-r-2 duration-700 ease-in-out min-[956px]:w-1/4 `} > */}
           <div className='bg-white'>
           <div className="side-bar   w-full ml-7 px-5 ">
            <div className="Logo pt-2">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="icons max-[550px]:mt-10 mt-16">
                <ul className="list">
                <li>
                <Link to="folders">
                
                    <MeetingRoomOutlinedIcon className="text-[#263238]" style={{ fontSize: 30 }} />
                    <span>Home</span>
                </Link>
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
                 {unreadNotificationCount?<span className= 'inline-block bg-[#FEC88799] py-1 px-3 font-poppins  rounded-full translate-x-1 text-sm font-bold'>{unreadNotificationCount}</span>:''}   
                </li>
               
              
                <li>
                    <ChatOutlinedIcon className="text-[#263238]" style={{ fontSize: 30 }} />
                    <span>Chat</span>
                    <span className= 'inline-block bg-[#FEC88799] py-1 px-3 font-poppins  rounded-full translate-x-1 text-sm font-bold'>4</span>
                    
                </li>
                <li onClick={logout}>
                    <LogoutIcon className="text-[#263238]" style={{ fontSize: 30 }} />
                    <span>Logout</span>
                   
                </li>
                </ul>
            </div>
            </div>
           </div>
        {/* </div> */}
    
        </> );
        
    
}

export default Navbar;