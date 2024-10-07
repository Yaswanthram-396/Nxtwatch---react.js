import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./Home";
import VideosInHome from "../src/Home/Sidebar/sidebarSideContent";
import VideoPlayer from "./videoplayer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/NxtWatch/Home" element={<Home Num={<VideosInHome />} />} />
      <Route path="/video/:id" element={<Home Num={<VideoPlayer />} />} />
    </Routes>
  );
}

export default App;
