import "./index.css";
import { FaMoon, FaSun } from "react-icons/fa";
import ConfigurationContext from "../../context";
import { useContext, useEffect, useState } from "react";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom

import Cookies from "js-cookie";
const Navbar = () => {
  const { savedList, mode, handleSavedList, handleMode } =
    useContext(ConfigurationContext);
  const [showpop, setpop] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(mode);
  }, [mode]);
  const handleSet = () => {
    handleMode();
  };
  const handleRemove = () => {
    Cookies.remove("jwt_token");
    navigate("/");
  };
  return (
    <>
      {showpop ? (
        <div className="entirePop">
          <div
            className="poper"
            style={{
              position: "fixed",
              zIndex: "999",
              height: "200px",
              width: "32%",
              top: "40%",
              left: "36%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <h3>Are you sure you want to logout?</h3>
            <div className="pop-btn">
              <button className="Cancel-btn" onClick={() => setpop(false)}>
                Cancel
              </button>
              <button className="Confirm-btn" onClick={handleRemove}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <nav>
        {!mode ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
            className="logoNavbar"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            alt="logo"
            className="logoNavbar"
          />
        )}
        <div className="navbarList">
          <li onClick={handleSet}>
            {mode ? (
              <FaSun className="lightModeIcon" title="Sun Icon" />
            ) : (
              <FaMoon className="darkMoon" title="Moon Icon" />
            )}
          </li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="logo"
              className="poffile"
            />
          </li>
          <button
            className={`logoutBtn ${mode ? "num" : null}`}
            onClick={() => setpop(true)}
          >
            Log out
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
