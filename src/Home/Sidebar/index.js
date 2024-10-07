import "./index.css";
import { FaHome, FaGamepad, FaFire } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
function SidePanel({ Num }) {
  return (
    <div className="contentWithPanel">
      <div className="sidePanel">
        <div className="sidePanelOptionsContainer">
          <div className="sidePanelOptions hoverOnOptions">
            <FaHome title="Home Icon" />
            <Link to="/NxtWatch/Home">
            <a href="/NxtWatch/Home" className="sidePanelLink">Home</a></Link>
          </div>
          <Link to="/NxtWatch/Trending">
            <div className="sidePanelOptions">
              <FaFire title="Trending Icon" />
              <a href="/NxtWatch/Trending" className="sidePanelLink">
                Trending
              </a>
            </div>
          </Link>
          <div className="sidePanelOptions">
            <FaGamepad title="Gaming Icon" />
            <a href="/NxtWatch/Gaming" className="sidePanelLink">
              Gaming
            </a>
          </div>
          <div className="sidePanelOptions">
            <MdVideoLibrary title="Saved Videos Icon" />
            <a href="/NxtWatch/Saved" className="sidePanelLink">
              Saved videos
            </a>
          </div>
        </div>
        <div className="sidePanelFooter">
          <h1 className="contact">CONTACT US</h1>
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
          <p>Enjoy! Now to see your channels and recommendations!</p>
        </div>
      </div>
      {Num}
    </div>
  );
}

export default SidePanel;
