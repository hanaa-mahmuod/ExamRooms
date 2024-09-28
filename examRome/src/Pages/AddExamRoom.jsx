import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddExamRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [directorEmail, setDirectorEmail] = useState("");
  const [generalNotes, setGeneralNotes] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [total, setTotal] = useState("");
  const param = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      folderId: param.folderId,
      
    });
    try {
      const response = await fetch(
        `https://localhost:7290/api/ExamRooms/CreateExamRoom?${queryParams.toString()}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
             'Authorization': `Bearer ${localStorage.getItem('tkn')}`

          },
          body:JSON.stringify({
            roomName,
            directorEmail,
            generalNotes,
            location,
            date,
            total,
          })
        }
      );

      const contentType = response.headers.get("Content-Type");

      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (response.ok) {
        console.log("Exam room created successfully:", data);
        navigate(-1); // توجيه المستخدم بعد النجاح
      } else {
        console.error("Failed to create exam room:", data);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100 w-scren">
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">Create Exam Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="roomName" className="block text-gray-700 font-semibold mb-2">
              Room Name
            </label>
            <input
              type="text"
              id="roomName"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="directorEmail" className="block text-gray-700 font-semibold mb-2">
              Director Email
            </label>
            <input
              type="email"
              id="directorEmail"
              value={directorEmail}
              onChange={(e) => setDirectorEmail(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="generalNotes" className="block text-gray-700 font-semibold mb-2">
              General Notes
            </label>
            <textarea
              id="generalNotes"
              value={generalNotes}
              onChange={(e) => setGeneralNotes(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="3"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
              Exam Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="total" className="block text-gray-700 font-semibold mb-2">
              Total Participants
            </label>
            <input
              type="number"
              id="total"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExamRoom;
