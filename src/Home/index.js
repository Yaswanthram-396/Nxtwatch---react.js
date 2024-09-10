import "./index.css";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}
export default Home;
