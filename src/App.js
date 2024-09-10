import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./LoginPage";
import Home from "./Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/NxtWatch/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
