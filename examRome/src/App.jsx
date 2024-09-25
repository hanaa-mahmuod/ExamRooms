import Register from "./Pages/Auth/Register"
import Folders from "./Pages/Folders"
import Profile from "./Pages/Profile"
import Notifications from "./Pages/Notification"
import { Routes,Route, useLocation } from "react-router-dom"
import Firstsemster from './Pages/FirstSmster2024';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import LogIn from "./Pages/Auth/LogIn"
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
function App() {
  
  const location = useLocation();
const showside = !(location.pathname === '/' || location.pathname === '/Login');

  return (
    <QueryClientProvider client={queryClient}>
      <UserIdProvider>
        <Toaster></Toaster>
    <div className="App flex">
{showside && <Navbar/>}
    <Routes>
        <Route path="/" element={<Register/> }/>
        <Route path="/notifications" element={<Notifications/> }/>
        <Route path="/folders" element={<Folders/> }/>
        <Route path="/profile" element={<Profile/> }/>
        <Route path="folders/:id" element={<Firstsemster/> }/>
        <Route path="/Login" element={<LogIn/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="notificationDetail" element={<NotificationDetail/>}/>
        <Route path="/session" element={<Session/>}/>
    </Routes>
    </div>
    </UserIdProvider>
    </QueryClientProvider>

  )
}

export default App;
