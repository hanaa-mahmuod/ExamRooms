import Register from "./Pages/Auth/Register"
import ExamRoom from "./Pages/Exam_Room"
import Profile from "./Pages/Profile"
import Notifications from "./Pages/Notification"
import { Routes,Route, useLocation } from "react-router-dom"
import Firstsemster from './Pages/FirstSmster2024';
import Navbar from "./Components/Navbar";
function App() {
  const location = useLocation();
  const showside = !( location.pathname === '/');
  return (
    <div className="App flex">
{showside && <Navbar/>}
    <Routes>
        <Route path="/" element={<Register/> }/>
        <Route path="/notifications" element={<Notifications/> }/>
        <Route path="/exam-room" element={<ExamRoom/> }/>
        <Route path="/profile" element={<Profile/> }/>
        <Route path="exam-room/folder" element={<Firstsemster/> }/>
    </Routes>
    </div>
  )
}

export default App;
