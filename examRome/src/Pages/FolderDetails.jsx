import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import admin from"../assets/admin.png"
import "../styles/examroom.css"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import  { getFolderDetails } from '../rtk/reducers/folderDetails';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Toast } from '../Sweetalert';
const FolderDetails = () => {
const dispatch=useDispatch()
const params =useParams()
const navigate =useNavigate();
const folderDetails = useSelector(state=>state. folderDetails)
const handelDelete =async()=>{
        try{
            if (!folderDetails?.folder?.folderId) {
                Toast.fire({
                  icon: 'error',
                  title: 'Folder ID is missing',
                });
                return;
              }
            
        const response=await fetch(`https://localhost:5001/api/Folders/Delete/${folderDetails?.folder?.folderId}`,{
            method:'DELETE',
            headers:{
            'Content-Type':'application/json',
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYWhtdWRuYWdpQGdtYWlsLmNvbSIsImV4cCI6MTcyNzI2NTUyMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjkwLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5MCJ9.BdgJCBUQV8eO-nqYNW5WdRt3PhPEoTFFpwUFb_lJOQc"

            }

        });
        if(response.ok){
            navigate(-1);
        }else{
            Toast.fire({
            icon: 'error',
            title: 'Failed to delete Folder',
            })
        }

        }catch(error){
        console.log(error);
        }
    }
useEffect(() => {
    const fetchData = async () => {
        try {
            await dispatch(getFolderDetails(params.folderId));
        } catch (error) {
            console.error('Error fetching folders:', error);
        }
    };

    fetchData();
}, [dispatch, params.folderId]);

const goBack = () => {
    navigate(-1); // إرجاع المستخدم خطوة للوراء
};
    return (
        <div className="main ">
        
            <div className="room_content pt-2 ">
                {
                    !(folderDetails.folder)? <div>Loding ......</div>:
                <>
                <div className=".ead  flex justify-end mr-10">
                <NotificationsOutlinedIcon className="text-gray-400 items-center  mr-4" style={{ fontSize: 40 }} />
                    <img className="w-12" src={admin}/>
                </div>
                <div className="path pt-5 pl-2 ">
                <div  onClick={()=>{goBack()}} className=" flex" >
                    <IconButton
                        style={{ borderRadius: '50%', backgroundColor: '#FFFFFF', padding: '1px 10px' }}
                        color="#00000"
                        aria-label="back"
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <span className="ml-4 translate-y-1.5  max-[500px]:text-2xl text-2xl  font-poppins font-normal">
                        Folders
                        <div className="inline-block max-[500px]:ml-2  ml-4 "><ChevronLeftIcon   style={{ color: 'black', fontSize: 40 }} /></div>
                        <span className=" max-[500px]:ml-2 ml-7  max-[500px]:text-xl text-2xl  font-poppins font-light">General</span> 
                        <div className="inline-block  max-[500px]:ml-2 ml-4 "><ChevronLeftIcon   style={{ color: 'black', fontSize: 40 }} /></div>
                        <span className=" max-[500px]:text-xl max-[500px]:ml-2 ml-7 text-2xl font-poppins font-light ">{folderDetails.folder.folderName}</span> 

                    </span>
                </div>
                    <div className=" folder_icons max-[520px]:mx-auto max-[520px]:block  ">
                    {folderDetails.subFolders.$values.map((folder)=>{
                        return(
                            <>
                            
                            <div key={folder.folderId} onClick={()=>{ navigate(`/folders/folder/${folder.folderId}`)}}  className='min-[960px]:ml-14 ml-10 text-center '><FolderIcon className=" text-primary" style={{  fontSize: 90 }} /><p className="text-center leading-8  font-poppins font-normal text-xl">{folder.folderName}</p></div>
                        
                            
                            </>
                        )
                        })
                            }                  
                    </div>
                </div>
                <div className="rooms max-[955px]:mx-auto mt-20">
                    {
                        folderDetails.examRooms.$values.map((room)=>{
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
                <div onClick={handelDelete}style={{backgroundColor:"#FFBA67"}} className="add_folder mt-1 rounded-full p-5 text-white">Delete</div>                 
                    <div onClick={()=>{navigate(`/folders/Editfolder/${folderDetails.folder.folderId}`)}} style={{backgroundColor:"#FFBA67"}} className="add_folder mt-1 rounded-full p-5 text-white">Edit</div>                 
                    <div onClick={()=>{navigate(`/folders/createfolder/${folderDetails.folder.folderId}`)}} style={{backgroundColor:"#FFBA67"}} className="add_folder max-[550px]:hidden  rounded-full mb-8  p-5 text-white"> <CreateNewFolderOutlinedIcon  fontSize="large"  style={{  fontSize: 28 }} /></div>
                    <div  onClick={()=>{navigate(`/folders/createRoom/${folderDetails.folder.folderId}`)}}  style={{backgroundColor:"#FFBA67"}} className="add_room max-[550px]:hidden   rounded-full   p-5 text-white"> <MeetingRoomOutlinedIcon  fontSize="large"  style={{  fontSize: 28 }} /></div>
                    <div onClick={()=>{navigate(`/folders/createfolder/${folderDetails.folder.folderId}`)}} style={{backgroundColor:"#FFBA67"}} className="add_folder min-[551px]:hidden  rounded-full mb-8  p-5 text-white"> <CreateNewFolderOutlinedIcon  fontSize="large"  style={{  fontSize: 18 }} /></div>
                    <div onClick={()=>{navigate(`/folders/createRoom/${folderDetails.folder.folderId}`)}}  style={{backgroundColor:"#FFBA67"}} className="add_room  min-[551px]:hidden  rounded-full   p-5 text-white"> <MeetingRoomOutlinedIcon  fontSize="large"  style={{  fontSize: 18 }} /></div>
                </div> 
                </>
                }
            </div>
    
        </div>
    );
}

export default FolderDetails;