import "./index.css";
import { FaMoon } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="logo"
          className="logoNavbar"
        />
        <div className="navbarList">
          <li>
            <FaMoon className="darkMoon" title="moon Icon" />
          </li>
          <li>
            <img
              src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
              alt="logo"
              className="poffile"
            />
          </li>
          <button className="logoutBtn">Log out</button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
