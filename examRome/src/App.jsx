import Register from "./Pages/Auth/Register"
import Folders from "./Pages/Folders"
import Profile from "./Pages/Profile"
import Notifications from "./Pages/Notification"
import { Routes,Route, useLocation } from "react-router-dom"
import FolderDetails from './Pages/FolderDetails';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import LogIn from "./Pages/Auth/LogIn"
<<<<<<< HEAD
import { Toaster } from "react-hot-toast"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import UserIdProvider from './Context/UserIdProvider'
import NotificationDetail from "./Pages/NotificationDetail"
import Session from "./Pages/Session"
const queryClient = new QueryClient()
=======
import CreateFolder from "./Pages/CreateFolder"
import AddExamRoom from "./Pages/AddExamRoom"
import EditFolder from "./Pages/EditFolder"
import ExamRoomDetails from './Pages/ExamRoomDetails';
import EditExamRoom from "./Pages/EditExamRoom"
import AddNoteToExamRoom from "./Pages/AddNoteToExamRoom"
import Notes from "./Pages/Notes"
import ExamRoomNotes from "./Pages/ExamRoomNotes"
import SharedFolders from "./Pages/SharedFolders"
>>>>>>> 657e6777a99d405997b3d147af5e10174787c1c8
function App() {
  
  const location = useLocation();
const showside = !(location.pathname === '/' || location.pathname === '/Login');

  return (
<<<<<<< HEAD
    <QueryClientProvider client={queryClient}>
      <UserIdProvider>
        <Toaster></Toaster>
    <div className="App flex">
=======
    <div className="App flex bg-bgColor">
>>>>>>> 657e6777a99d405997b3d147af5e10174787c1c8
{showside && <Navbar/>}
    <Routes>
        <Route path="/" element={<Register/> }/>
        <Route path="/notifications" element={<Notifications/> }/>
        <Route path="/folders" element={<Folders/> }/>
        <Route path="/profile" element={<Profile/> }/>
<<<<<<< HEAD
        <Route path="folders/:id" element={<Firstsemster/> }/>
        <Route path="/Login" element={<LogIn/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="notificationDetail" element={<NotificationDetail/>}/>
        <Route path="/session" element={<Session/>}/>
=======
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


>>>>>>> 657e6777a99d405997b3d147af5e10174787c1c8
    </Routes>
    </div>
    </UserIdProvider>
    </QueryClientProvider>

  )
}

export default App;
