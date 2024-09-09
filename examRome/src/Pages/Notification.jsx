import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import admin from"../assets/admin.png"
import "../styles/notifications.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
const Notifications= () => {
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
                <div className="slice grid grid-cols-3 ">
                    <div className="admin max-[499px]:pl-2 min-[500px]:pl-10 py-3 ">
                        <img className="min-[500px]:inline w-16" src={admin} alt="Not found "/>
                        <span className="text-center  font-poppins font-light  min-[500px]:ml-4 text-gray-400">Eman</span>
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
                <div className="slice grid grid-cols-3 ">
                    <div className="admin max-[499px]:pl-2 min-[500px]:pl-10 py-3 ">
                        <img className="min-[500px]:inline w-16" src={admin} alt="Not found "/>
                        <span className="text-center  font-poppins font-light  min-[500px]:ml-4 text-gray-400">Eman</span>
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
                <div className="slice grid grid-cols-3 ">
                    <div className="admin max-[499px]:pl-2 min-[500px]:pl-10 py-3 ">
                        <img className="min-[500px]:inline w-16" src={admin} alt="Not found "/>
                        <span className="text-center  min-[500px]:ml-4 text-gray-400">Eman</span>
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
                <div className="slice grid grid-cols-3 ">
                    <div className="admin max-[499px]:pl-2 min-[500px]:pl-10 py-3 ">
                        <img className="min-[500px]:inline w-16" src={admin} alt="Not found "/>
                        <span className="text-center  min-[500px]:ml-4 text-gray-400">Eman</span>
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
                <div className="slice grid grid-cols-3 ">
                    <div className="admin max-[499px]:pl-2 min-[500px]:pl-10 py-3 ">
                        <img className="min-[500px]:inline w-16" src={admin} alt="Not found "/>
                        <span className="text-center  min-[500px]:ml-4 text-gray-400">Eman</span>
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
                
                </div>
                
            </div>
            
        </div>
    );
}

export default Notifications;