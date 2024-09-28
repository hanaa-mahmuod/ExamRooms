    import { ArrowBack, Notifications, Edit, Cancel } from '@mui/icons-material';
    import { TextField, Button } from '@mui/material';
    import { useState } from 'react';
    import { useNavigate, useParams } from 'react-router-dom';

    const EditExamRoom = () => {
    const param = useParams(); // Get room ID from the route
    const navigate = useNavigate();
    const [roomData, setRoomData] = useState({
        roomName: '',
        directorEmail: '',
        generalNotes: '',
        location: '',
        date: '',
        total: 0,
    });

    // Handle form submission for editing the room
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const query = new URLSearchParams({
        // roomName: roomData.roomName,
        // directorEmail: roomData.directorEmail,
        // generalNotes: roomData.generalNotes,
        // location: roomData.location,
        // date: roomData.date,
        // total: roomData.total,
        // }).toString();

        try {
        const response = await fetch(`https://localhost:7290/api/ExamRooms/Edit/${param.roomId}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('tkn')}`
            },
            body:JSON.stringify({
                roomName: roomData.roomName,
                directorEmail: roomData.directorEmail,
                generalNotes: roomData.generalNotes,
                location: roomData.location,
                date: roomData.date,
                total: roomData.total,
            })
        });

        if (response.ok) {
            navigate(-1); // Go back to the previous page after a successful update
        } else {
            console.log('Failed to update exam room');
        }
        } catch (err) {
        console.log('Error updating exam room', err);
        }
    };

    // Handle input change
    const handleChange = (e) => {
        setRoomData({ ...roomData, [e.target.name]: e.target.value });
    };

    return (
        <div className='bg-[#F6F2EB] lg:px-[200px] w-screen'>
        <div className="flex items-center">
            <div className="w-full p-10 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className='flex'>
                <Button variant="outlined" className="rounded-full px-2 border-2 border-black p-1">
                    <ArrowBack />
                </Button>
                <h1 className="text-lg font-semibold text-black ms-3">Edit Exam Room</h1>
                </div>
                <div className="flex items-center">
                <Button className="mr-4">
                    <Notifications fontSize="large" />
                </Button>
                <img src="avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
                </div>
            </div>

            {/* Room Name */}
            <div className='flex items-center'>
                <label className="block text-sm font-semibold mb-1 me-8">Room Name</label>
                <TextField
                name="roomName"
                value={roomData.roomName}
                onChange={handleChange}
                variant="outlined"
                className="lg:w-[300px] sm:w-[100px]"
                required
                />
            </div>

            {/* Director Email */}
            <div className='flex items-center'>
                <label className="block text-sm font-semibold mb-1 me-8">Director Email</label>
                <TextField
                type="email"
                name="directorEmail"
                value={roomData.directorEmail}
                onChange={handleChange}
                variant="outlined"
                className="lg:w-[300px] sm:w-[100px]"
                required
                />
            </div>

            {/* General Notes */}
            <div className='flex items-center'>
                <label className="block text-sm font-semibold mb-1 me-8">General Notes</label>
                <TextField
                multiline
                name="generalNotes"
                value={roomData.generalNotes}
                onChange={handleChange}
                rows={4}
                variant="outlined"
                className="w-full lg:w-[500px]"
                required
                />
            </div>

            {/* Location */}
            <div className='flex items-center'>
                <label className="block text-sm font-semibold mb-1 me-8">Location</label>
                <TextField
                name="location"
                value={roomData.location}
                onChange={handleChange}
                variant="outlined"
                className="lg:w-[300px] sm:w-[100px]"
                required
                />
            </div>

            {/* Date and Time */}
            <div className="flex space-x-4 flex-wrap lg:flex-nowrap space-y-3 items-center">
                <div className="flex justify-center items-center">
                <label className="text-sm font-semibold me-8">Date</label>
                <TextField 
                    name="date"
                    value={roomData.date}
                    onChange={handleChange}
                    type="date" 
                    variant="outlined" 
                    className="lg:w-[300px]" 
                    required
                />
                </div>
            </div>

            {/* Total Participants */}
            <div className='flex items-center'>
                <label className="block text-sm font-semibold mb-1 me-8">Total Participants</label>
                <TextField
                type="number"
                name="total"
                value={roomData.total}
                onChange={handleChange}
                variant="outlined"
                className="lg:w-[300px] sm:w-[100px]"
                required
                />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center mt-6 space-x-4">
                <Button 
                sx={{ backgroundColor: 'yellow', border: '1px solid yellow', color: 'white' }} 
                startIcon={<Edit />}
                type="submit"
                onClick={handleSubmit}
                >
                Save
                </Button>
                <Button  
                onClick={() => navigate(-1)} // Handle cancel action
                sx={{ backgroundColor: 'red', color: 'white' }} 
                startIcon={<Cancel />}
                >
                Cancel
                </Button>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default EditExamRoom;
