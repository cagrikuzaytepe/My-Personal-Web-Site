import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as Router } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = React.useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/trace3.svg" alt="Kuzaytepe" height={55}   />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <RouterLink to="/" onClick={closeMenu} className="navbar--content">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/AboutMe"
              onClick={closeMenu}
              className="navbar--content"
            >
              About Me
            </RouterLink>
            
          </li>
          <li>
            <RouterLink
              to="/ContactMe"
              onClick={closeMenu}
              className="navbar--content"            >
              Contact Me
            </RouterLink>
          </li>
        </ul>
      </div>
      <Router
        to="Footer"
        onClick={closeMenu}
        className="btn btn-outline-primary"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Social
      </Router>
    </nav>
  );
}

export default Navbar;
