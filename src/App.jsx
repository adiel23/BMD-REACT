import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/pages/Home";
import MeetupsMapPage from "./features/meetups/pages/MeetupsMapPage";
import CreateMeetupPage from "./features/meetups/pages/CreateMeetupPage";
import LoginPage from "./features/auth/pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/meetups-map" element={<MeetupsMapPage/>}/>
        <Route path="/create-meetup" element={<CreateMeetupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
