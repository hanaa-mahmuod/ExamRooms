import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import admin from"../assets/admin.png"
import "../styles/examroom.css"
const Firstsemster = () => {
  
    return (
        <div className="main ">
            <div className="room_content pt-2 ">
                <div className="head  flex justify-end mr-10">
                <NotificationsOutlinedIcon className="text-gray-400 items-center  mr-4" style={{ fontSize: 40 }} />
                    <img className="w-12" src={admin}/>
                </div>
                <div className="path pt-5 pl-2 ">
                <div className=" flex" >
                    <IconButton
                        style={{ borderRadius: '50%', backgroundColor: '#FFFFFF', padding: '1px 10px' }}
                        color="#00000"
                        aria-label="back"
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <span className="ml-4 translate-y-1.5  max-[500px]:text-2xl text-2xl  font-poppins font-normal">
                        Exam Room
                        <div className="inline-block max-[500px]:ml-2  ml-4 "><ChevronLeftIcon   style={{ color: 'black', fontSize: 40 }} /></div>
                        <span className=" max-[500px]:ml-2 ml-7  max-[500px]:text-xl text-2xl  font-poppins font-light">General</span> 
                        <div className="inline-block  max-[500px]:ml-2 ml-4 "><ChevronLeftIcon   style={{ color: 'black', fontSize: 40 }} /></div>
                        <span className=" max-[500px]:text-xl max-[500px]:ml-2 ml-7 text-2xl font-poppins font-light ">First Semester 2024</span> 

                    </span>
                </div>
                    <div className=" folder_icons max-[520px]:mx-auto max-[520px]:block  ">
                        <div><FolderIcon className="ml-8 text-primary" style={{  fontSize: 90 }} /><p className="text-center leading-8 font-poppins font-light text-xl">Network Programing</p></div>
                        <div><FolderIcon className="ml-8 text-primary" style={{  fontSize: 90 }} /><p className="text-center leading-8 font-poppins font-light text-xl">Animation</p></div>
                        <div><FolderIcon className="ml-8 text-primary" style={{  fontSize: 90 }} /><p className="text-center leading-8 font-poppins font-light text-xl">Compiler </p></div>
                    </div>
                </div>
                <div className="sessions max-[955px]:mx-auto mt-20">
                <div className="session  ">
                    <div className="Title_admin ">
                    <div className="admin min-[616px]:hidden max-[615px]:ml-5 min-[616px]:mr-16">
                        
                        <img className="inline max" src={admin} alt="Not found "/>
                        <span className="ml-4 text-gray-400">Created by Eman</span>
                    </div>
                    <p className=" max-[615px]:ml-3 ml-10 font-poppins font-light text-xl">Image Processing</p>
                    <div className="admin max-[615px]:hidden max-[615px]:ml-5 min-[616px]:mr-16">
                        
                        <img className="inline max" src={admin} alt="Not found "/>
                        <span className="ml-4 text-gray-400">Created by Eman</span>
                    </div>
                    </div>
                    <div className="date_numstd   ">
                        <div className="stdnum max-[615px]:ml-3 min-[616px]:ml-10 ">
                            <span className="lable">Total : </span>
                            <span className="num">150 Students</span>
                        </div>
                        <div className="date max-[615px]:ml-3 min-[616px]:mr-8">
                            <span className="day ">Monday</span>
                            <span className="m-y-d">9/8/2024</span>
                            <span className="clock">3.42 PM</span>
                        </div>
                    </div>
                </div>
                <div className="session  ">
                    <div className="Title_admin ">
                    <div className="admin min-[616px]:hidden max-[615px]:ml-5 min-[616px]:mr-16">
                        
                        <img className="inline max" src={admin} alt="Not found "/>
                        <span className="ml-4 text-gray-400">Created by Eman</span>
                    </div>
                    <p className=" max-[615px]:ml-3 ml-10 font-poppins font-light text-xl">Image Processing</p>
                    <div className="admin max-[615px]:hidden max-[615px]:ml-5 min-[616px]:mr-16">
                        
                        <img className="inline max" src={admin} alt="Not found "/>
                        <span className="ml-4 text-gray-400">Created by Eman</span>
                    </div>
                    </div>
                    <div className="date_numstd   ">
                        <div className="stdnum max-[615px]:ml-3 min-[616px]:ml-10 ">
                            <span className="lable">Total : </span>
                            <span className="num">150 Students</span>
                        </div>
                        <div className="date max-[615px]:ml-3 min-[616px]:mr-8">
                            <span className="day ">Monday</span>
                            <span className="m-y-d">9/8/2024</span>
                            <span className="clock">3.42 PM</span>
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="btns fixed z-50 bottom-8  right-[5%]">
                    <div style={{backgroundColor:"#FFBA67"}} className="add_folder max-[550px]:hidden  rounded-full mb-8  p-5 text-white"> <CreateNewFolderOutlinedIcon  fontSize="large"  style={{  fontSize: 28 }} /></div>
                    <div  style={{backgroundColor:"#FFBA67"}} className="add_room max-[550px]:hidden   rounded-full   p-5 text-white"> <MeetingRoomOutlinedIcon  fontSize="large"  style={{  fontSize: 28 }} /></div>
                    <div style={{backgroundColor:"#FFBA67"}} className="add_folder min-[551px]:hidden  rounded-full mb-8  p-5 text-white"> <CreateNewFolderOutlinedIcon  fontSize="large"  style={{  fontSize: 18 }} /></div>
                    <div  style={{backgroundColor:"#FFBA67"}} className="add_room  min-[551px]:hidden  rounded-full   p-5 text-white"> <MeetingRoomOutlinedIcon  fontSize="large"  style={{  fontSize: 18 }} /></div>
                </div>
            </div>
            
        </div>
    );
}

export default Firstsemster;