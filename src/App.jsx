import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateMeetupPage from "./pages/CreateMeetupPage/CreateMeetupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-meetup" element={<CreateMeetupPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
