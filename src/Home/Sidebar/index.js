import "./index.css";
import { FaHome, FaGamepad, FaFire } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
import ConfigurationContext from "../../context";
import { useContext } from "react";
function SidePanel({ Num }) {
  const { mode } = useContext(ConfigurationContext);
  const darkMode = {
    color: "white",
  };
  const light = {
    color: "black",
  };
  return (
    <div className="contentWithPanel">
      <div className="sidePanel">
        <div className="sidePanelOptionsContainer">
          <div className="sidePanelOptions">
            <FaHome title="Home Icon" />
            <Link to="/NxtWatch/Home">
              <p style={mode ? darkMode : light}>Home</p>
            </Link>
          </div>
          <Link to="/NxtWatch/Trending">
            <div className="sidePanelOptions">
              <FaFire title="Trending Icon" />
              <p style={mode ? darkMode : light}>Trending</p>
            </div>
          </Link>
          <div className="sidePanelOptions">
            <FaGamepad title="Gaming Icon" />
            <Link to="/NxtWatch/Gaming">
              <p style={mode ? darkMode : light}>Gaming</p>
            </Link>
          </div>
          <div className="sidePanelOptions">
            <MdVideoLibrary title="Saved Videos Icon" />
            <Link to="/NxtWatch/Saved">
              <p style={mode ? darkMode : light}> Saved videos</p>
            </Link>
          </div>
        </div>
        <div className="sidePanelFooter">
          <h2 style={mode ? darkMode : light}>CONTACT US</h2>
          <div className="iconsContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              className="icon"
              alt="facebook logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
              alt="twitter logo"
              className="icon"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              className="icon"
            />
          </div>
          <p style={mode ? darkMode : light}>
            Enjoy! Now to see your channels and recommendations!
          </p>
        </div>
      </div>
      {Num}
    </div>
  );
}

export default SidePanel;
