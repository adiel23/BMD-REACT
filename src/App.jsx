import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateMeetupPage from "./pages/CreateMeetupPage/CreateMeetupPage";
import Login from "./pages/Login/Login";
import MeetupsMapPage from "./pages/MeetupsMap/MeetupsMapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-meetup" element={<CreateMeetupPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/meetups-map" element={<MeetupsMapPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
