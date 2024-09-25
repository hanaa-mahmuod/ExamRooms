import Register from "./Pages/Auth/Register"
import Folders from "./Pages/Folders"
import Profile from "./Pages/Profile"
import Notifications from "./Pages/Notification"
import { Routes,Route, useLocation } from "react-router-dom"
import FolderDetails from './Pages/FolderDetails';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import LogIn from "./Pages/Auth/LogIn"
import CreateFolder from "./Pages/CreateFolder"
import AddExamRoom from "./Pages/AddExamRoom"
import EditFolder from "./Pages/EditFolder"
import ExamRoomDetails from './Pages/ExamRoomDetails';
import EditExamRoom from "./Pages/EditExamRoom"
import AddNoteToExamRoom from "./Pages/AddNoteToExamRoom"
import Notes from "./Pages/Notes"
import ExamRoomNotes from "./Pages/ExamRoomNotes"
import SharedFolders from "./Pages/SharedFolders"
function App() {
  const location = useLocation();
  const showside = !( location.pathname === '/');
  return (
    <div className="App flex bg-bgColor">
{showside && <Navbar/>}
    <Routes>
        <Route path="/" element={<Register/> }/>
        <Route path="/notifications" element={<Notifications/> }/>
        <Route path="/folders" element={<Folders/> }/>
        <Route path="/profile" element={<Profile/> }/>
        <Route path="folders/folder/:folderId" element={<FolderDetails/> }/>
        <Route path="room/details/:roomId" element={<ExamRoomDetails/>}/>
        <Route path="folders/createfolder/:folderId" element={<CreateFolder/> }/>
        <Route path="folders/createRoom/:folderId" element={<AddExamRoom/> }/>
        <Route path="folders/Editfolder/:folderId" element={<EditFolder/> }/>
        <Route path="EditRoom/:roomId" element={<EditExamRoom/> }/>
        <Route path="addNote/:roomId/" element={<AddNoteToExamRoom/> }/>
        <Route path="login" element={<LogIn/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="notes" element={<Notes/>}/>
        <Route path="roomNotes/:roomId" element={<ExamRoomNotes/>}/>
        <Route path="folders/sharedFolder" element={<SharedFolders/>}/>


    </Routes>
    </div>
  )
}

export default App;
