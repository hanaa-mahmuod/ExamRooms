import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { Toast } from '../Sweetalert';
//import { Toast } from '../Sweetalert';  // لإظهار التنبيهات في حال كنت تستخدمها


const AddNoteToExamRoom = () => {
  const [note, setNote] = useState('');
  const param = useParams(); // Get examRoomId from the route
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setNote(e.target.value);
  };
  const query = new URLSearchParams({
    examRoomId: param.roomId,
    
    }).toString();
  // Handle form submission to add a note
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (note.trim() === '') {
      // Toast.fire({ icon: 'error', title: 'Note cannot be empty!' });  // إظهار خطأ
      console.log('Note cannot be empty');
      return;
    }

    try {
      const response = await fetch(`https://localhost:5001/api/ExamRooms/AddNote?${query}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYWhtdWRuYWdpQGdtYWlsLmNvbSIsImV4cCI6MTcyNzI2NTUyMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjkwLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5MCJ9.BdgJCBUQV8eO-nqYNW5WdRt3PhPEoTFFpwUFb_lJOQc"

        },
        body: JSON.stringify(note ),
      });

      if (response.ok) {
         Toast.fire({ icon: 'success', title: 'Note added successfully!' });  // إظهار نجاح
        console.log('Note added successfully');
        navigate(-1); // العودة إلى الصفحة السابقة
      } else {
        console.log('Failed to add note');
        Toast.fire({ icon: 'error', title: 'Failed to add note' });
      }
    } catch (err) {
      console.log('Error adding note', err);
    }
  };

  return (
    <div className='bg-[#F6F2EB] lg:px-[200px]'>
      <div className="flex items-center">
        <div className="w-full p-10 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-black ms-3">Add Note</h1>
          </div>

          {/* Note Input */}
          <div className='flex items-center'>
            <TextField
              label="Note"
              name="note"
              value={note}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
              className="w-full lg:w-[500px]"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center mt-6 space-x-4">
            <Button
              sx={{ backgroundColor: 'yellow', border: '1px solid yellow', color: 'white' }}
              startIcon={<Add />}
              type="submit"
              onClick={handleSubmit}
            >
              Add Note
            </Button>
            <Button
              onClick={() => navigate(-1)} // Handle cancel action
              sx={{ backgroundColor: 'red', color: 'white' }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoteToExamRoom;
