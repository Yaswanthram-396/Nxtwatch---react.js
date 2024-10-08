import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./Home";
import VideosInHome from "../src/Home/Sidebar/sidebarSideContent";
import VideoPlayer from "./videoplayer";
import Trending from "./Trending";
import Gaming from "./Gaming";
import { useState, useEffect } from "react";
import ConfigurationContext from "./context";
import Saved from "./saved";
// function App() {
//   const [savedList, setSavedList] = useState(() => {
//     const savedItems = JSON.parse(localStorage.getItem("savedList")) || [];
//     return savedItems;
//   });
//   const [mode,SetMode]=useState(false)

//   const handleSavedList = (newItem) => {
//     const isAlreadySaved = savedList.some((item) => item.id === newItem.id);

//     if (!isAlreadySaved) {
//       const updatedList = [...savedList, newItem];
//       setSavedList(updatedList);
//       localStorage.setItem("savedList", JSON.stringify(updatedList));
//     }
//   };
//  const handleMode = ()=>{
//   SetMode(!mode)
//  }

//   return (
//     <ConfigurationContext.Provider
//       value={{
//         savedList,
//         mode,
//         handleSavedList,
//         handleMode,
//       }}
//     >
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route
//             path="/NxtWatch/Home"
//             element={<Home Num={<VideosInHome />} />}
//           />
//           <Route path="/video/:id" element={<Home Num={<VideoPlayer />} />} />
//           <Route
//             path="/NxtWatch/Trending"
//             element={<Home Num={<Trending />} />}
//           />
//           <Route path="/NxtWatch/Gaming" element={<Home Num={<Gaming />} />} />
//           <Route path="/NxtWatch/Saved" element={<Home Num={<Saved />} />} />
//         </Routes>
//       </div>
//     </ConfigurationContext.Provider>
//   );
// }

// export default App;

export default function App() {
  const [savedList, setSavedList] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem("savedList")) || [];
    return savedItems;
  });

  const [mode, SetMode] = useState(() => {
    const savedMode = JSON.parse(localStorage.getItem("mode"));
    return savedMode || false;
  });

  const handleSavedList = (newItem) => {
    const isAlreadySaved = savedList.some((item) => item.id === newItem.id);

    if (!isAlreadySaved) {
      const updatedList = [...savedList, newItem];
      setSavedList(updatedList);
      localStorage.setItem("savedList", JSON.stringify(updatedList));
    }
  };

  const handleMode = () => {
    SetMode((prevMode) => {
      localStorage.setItem("mode", JSON.stringify(!prevMode));
      return !prevMode;
    });
  };

  return (
    <ConfigurationContext.Provider
      value={{
        savedList,
        mode,
        handleSavedList,
        handleMode,
      }}
    >
      <div className={`App ${mode ? "dark-mode" : "light-mode"}`}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/NxtWatch/Home"
            element={<Home Num={<VideosInHome />} />}
          />
          <Route path="/video/:id" element={<Home Num={<VideoPlayer />} />} />
          <Route
            path="/NxtWatch/Trending"
            element={<Home Num={<Trending />} />}
          />
          <Route path="/NxtWatch/Gaming" element={<Home Num={<Gaming />} />} />
          <Route path="/NxtWatch/Saved" element={<Home Num={<Saved />} />} />
        </Routes>
      </div>
    </ConfigurationContext.Provider>
  );
}
