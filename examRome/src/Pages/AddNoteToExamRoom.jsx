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
      const response = await fetch(`https://localhost:7290/api/ExamRooms/AddNote?${query}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${localStorage.getItem('tkn')}`

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
    <div className='bg-[#F6F2EB] lg:px-[200px] w-screen'>
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
