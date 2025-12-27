import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateMeetupPage from "./features/meetups/pages/CreateMeetupPage";
import MeetupsMapPage from "./pages/MeetupsMap/MeetupsMapPage";
import LoginPage from "./features/auth/pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-meetup" element={<CreateMeetupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/meetups-map" element={<MeetupsMapPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
