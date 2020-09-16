import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { animated, useSpring } from "react-spring";
import { HashLink } from "react-router-hash-link";
import Logo from "../../../../assets/Logo_red.svg";
import { GetWindowDimension } from "../../../../utils/GetWindowDimension";
import "./style.css";

export const NavBar = ({ modalIsOpen, setModalIsOpen }) => {
  const [navColor, setNavColor] = useState("transparent");
  const [isOpen, setIsOpen] = useState(false);
  const { width } = GetWindowDimension();
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 60) {
      setNavColor("rgba(128,128,128,0.6)");
    } else {
      setNavColor("transparent");
    }
  });
  const animation = useSpring({
    height: isOpen ? "185px" : "0px",
    opacity: isOpen ? 1 : 0,
    width: isOpen ? "160px" : "0px",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 9999,
    pointerEvents: isOpen ? "auto" : "none",
    config: {
      duration: isOpen ? 100 : 150,
    },
  });
  const Nav = () => (
    <section
      className="section_navigation"
      style={{ backgroundColor: navColor }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="navigation_center">
        <HashLink
          to="/own-city-section#section_journey"
          className="navigation_link hash_link"
          smooth
        >
          Testimonials
        </HashLink>
        <HashLink
          to="/own-city-section#main_footer"
          className="navigation_link hash_link"
          smooth
        >
          Contact us
        </HashLink>
      </div>
      <div className="navigation_control">
        <button
          type="button"
          className="get_started"
          id="get_started"
          onClick={() => setModalIsOpen(!modalIsOpen)}
        >
          Get Started
        </button>
      </div>
    </section>
  );
  const NavMobileMenu = () => (
    <animated.div style={animation} className="navigation_mobile_menu">
      <div className="navigation_mobile_menu_sub_container">
        <p className="menu_title">Menu</p>
        <FiX
          className="mobile_hamburger_close"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </div>
      <a href="../../App.js">Destinations</a>
      <a href="../../App.js">Videos</a>
      <a href="../../App.js">Articles</a>
      <a href="../../App.js">Login</a>
    </animated.div>
  );
  const NavMobile = () => (
    <section
      className="section_navigation"
      style={{ backgroundColor: navColor }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <FiMenu
        className="mobile_hamburger_menu"
        onClick={() => setIsOpen(!isOpen)}
      />
      <NavMobileMenu />
    </section>
  );
  return <>{width > 1100 ? <Nav /> : <NavMobile />}</>;
};
