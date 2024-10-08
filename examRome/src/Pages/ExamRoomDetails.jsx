import { ArrowBack, Notifications, Add, Edit, Cancel } from '@mui/icons-material';
import { AddComment,Comment } from '@mui/icons-material';
import { TextField,   Button } from '@mui/material';
import { useEffect } from 'react';
import { Toast } from '../Sweetalert';
import { useNavigate, useParams } from 'react-router-dom';
import { getRoomDetails } from '../rtk/reducers/ExamRomeDetails';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
export default function ExamRoom() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [inputValue, setInputValue] = useState('');
  const param=useParams();
  const RoomDetails = useSelector(state=>state.roomDetails)
   
  const handelDelete =async()=>{
    try{
      const response=await fetch(`https://localhost:7290/api/ExamRooms/Delete/${RoomDetails?.examRoom?.examRoomID}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
 'Authorization': `Bearer ${localStorage.getItem('tkn')}`
        }

      });
      if(response.ok){
        navigate(-1);
      }else{
        Toast.fire({
          icon: 'error',
          title: 'Failed to delete room',
        })
      }

    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    const fetchData = async () => {
      try {
          await dispatch(getRoomDetails(param.roomId));
      } catch (error) {
          console.error('Error fetching folders:', error);
      }
  };
  fetchData();
  
  },[dispatch,param.roomId])
  function createSession(numberOfSessions){
    navigate(`/session/${RoomDetails?.examRoom?.examRoomID}/${numberOfSessions}`)
  }
  return (
    <div className='bg-[#F6F2EB] lg:px-[200px] w-screen'>
      <div className="flex items-center">
        <div className="w-full p-10 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className='flex'>
              <Button variant="outlined" className="rounded-full px-2 border-2 border-black p-1"  onClick={()=>{navigate(-1)}}>
                <ArrowBack />
              </Button>
              <h1 className="text-lg font-semibold text-black ms-3">{RoomDetails?.examRoom?.roomName}</h1>
            </div>
            <div className="flex items-center">
              <Button className="mr-4 ">
                <Notifications fontSize="large" />
              </Button>
              <img src="avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
            </div>
          </div>
  
          {/* Total Students */}
          <div className='flex items-center'>
            <label className="block text-sm font-semibold mb-1 me-8">Total</label>
            <TextField
              value={`${RoomDetails?.examRoom?.total ?? 'Loading...'} Student`} 
              disabled
              variant="outlined"
              className="lg:w-[300px] sm:w-[100px]"
            />
          </div>
  
          {/* Sessions */}
          <div className='flex items-center'>
            <label className="block text-sm font-semibold mb-1 me-8">Sessions</label>
            <div className="flex space-x-2 items-center">
              <TextField type="number"  className="w-12"  value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
            
             <div className="flex space-x-2 items-center text-[15px]">
                {
                  RoomDetails?.sessions?.$values?.map((session) => (
                  <div key={session.$id}>
                      <Link to={'/EditSession/'+session.$id} >
                     <span   className="px-2 py-1 bg-white rounded-lg lg:w-[80px] lg:h-[30px]">
                      {session.sessionName}
                    </span>
                    </Link>
                  </div>
                   
                  )) || ''
                }
              </div>
            
              
             <Button onClick={()=>{inputValue?createSession(inputValue):toast.error('please enter number of sessions')}} className="rounded-full bg-yellow-500 p-2 px-3">
                <Add />
              </Button>        
                 </div>
          </div>
  
          {/* Date and Time */}
          <div className="flex space-x-4 flex-wrap lg:flex-nowrap space-y-3 items-center">
            <div className="flex justify-center items-center">
              <label className="text-sm font-semibold me-8">Date</label>
              <TextField 
                value={RoomDetails?.examRoom?.date ? new Date(RoomDetails.examRoom.date).toISOString().split('T')[0] : ''}
                type="date" 
                variant="outlined" 
                className="lg:w-[300px]" 
              />
            </div>
            <div className="flex justify-center items-center">
              <label className="block text-sm font-semibold mb-2 me-8">Time</label>
              <TextField 
                value={RoomDetails?.examRoom?.date ? new Date(RoomDetails.examRoom.date).toISOString().split('T')[1].slice(0, 5) : ''}
                type="time" 
                variant="outlined" 
              />
            </div>
          </div>
  
          <hr />
      
          {/* Notes */}
          <div className="flex items-center">
            <label className="block text-sm font-semibold mb-1 me-8">GeneralNotes</label>
            <TextField
              multiline
              disabled
              value={RoomDetails?.examRoom?.generalNotes || ''}
              rows={1}
              variant="outlined"
              className="w-full lg:w-[500px]"
            />
          </div>
          
          {/* Directories and Actions */}
          <div className='justify-between flex-wrap'>
            <div className="flex items-center">
              <label className="block text-sm font-semibold mb-1 me-8">Directories</label>
              <p className=' leading-7 border border-orange-200 p-3'>{RoomDetails?.director?.userFName}</p>
            </div>
  
            <div className="flex items-center mt-6 space-x-4">
            <Button 
              onClick={()=>{navigate(`/roomNotes/${RoomDetails?.examRoom?.examRoomID}`)}}
              variant='contained'
                startIcon={<Comment/>}
              >
                Show Notes
              </Button>
            <Button
                variant="contained"
                startIcon={<AddComment />}
                onClick={()=>{navigate(`/addNote/${RoomDetails?.examRoom?.examRoomID}`)}}
              >
                Add Note
              </Button>
              <Button 
              onClick={()=>{navigate(`/EditRoom/${RoomDetails?.examRoom?.examRoomID}`)}}
                sx={{ backgroundColor: 'yellow', border: '1px solid yellow', color: 'white' }} 
                startIcon={<Edit />}
              >
                Edit
              </Button>
              <Button  
                onClick={handelDelete}
                sx={{ backgroundColor: 'red', color: 'white' }} 
                startIcon={<Cancel />}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
