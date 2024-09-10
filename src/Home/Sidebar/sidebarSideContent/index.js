import React from "react";
import "./index.css";
import { FaTimes } from "react-icons/fa";
import GetApiRes from "../videosAn Search";
class VideosInHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { banner: true };
  }

  handleCloseBanner = () => {
    const { banner } = this.state;
    this.setState({ banner: !banner });
  };
  render() {
    const { banner } = this.state;
    return (
      <div className="sidebarSideContent">
        <div
          className="SideContentbanner"
          style={{ display: banner ? "block" : "none" }}
        >
          <div className="innerContainer">
            <div className="adContent">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="logo"
                className="logoNavbar"
              />
              <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
              <button className="AdBtn">GET IT NOW</button>
            </div>
            <FaTimes className="closeIcon" onClick={this.handleCloseBanner} />
          </div>
        </div>
        <GetApiRes />
      </div>
    );
  }
}
export default VideosInHome;
