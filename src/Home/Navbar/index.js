import "./index.css";
import { FaMoon, FaSun } from "react-icons/fa";
import ConfigurationContext from "../../context";
import { useContext, useEffect } from "react";
const Navbar = () => {
  const { savedList, mode, handleSavedList, handleMode } =
    useContext(ConfigurationContext);
  useEffect(() => {
    console.log(mode);
  }, [mode]);
  const handleSet = () => {
    handleMode();
  };

  return (
    <>
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
          <button className={`logoutBtn ${mode ? "num" : null}`}>
            Log out
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
