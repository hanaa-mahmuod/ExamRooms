import Register from "./Pages/Auth/Register"
import Folders from "./Pages/Folders"
import Profile from "./Pages/Profile"
import Notifications from "./Pages/Notification"
import { Routes,Route, useLocation } from "react-router-dom"
import Firstsemster from './Pages/FirstSmster2024';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import LogIn from "./Pages/Auth/LogIn"
function App() {
  const location = useLocation();
  const showside = !( location.pathname === '/');
  return (
    <div className="App flex">
{showside && <Navbar/>}
    <Routes>
        <Route path="/" element={<Register/> }/>
        <Route path="/notifications" element={<Notifications/> }/>
        <Route path="/folders" element={<Folders/> }/>
        <Route path="/profile" element={<Profile/> }/>
        <Route path="folders/:id" element={<Firstsemster/> }/>
        <Route path="login" element={<LogIn/>}/>
        <Route path="home" element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App;
