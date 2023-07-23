import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { enableScroll, disableScroll } from "../../scripts/ToggleScrollEnable";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    //The useEffect Hook does a specific task for the first time after loading.
    window.addEventListener("scroll", handleScroll);
    //This will detect when the user scrolls and call the "handelScroll" function
  }, []);
  return (
    <nav className="navbar-container">
      {!scrolled ? (
        <div className="navbar-layout">
          <div className="left">Home</div>
          <div className="right">
            <div>About Me</div>
            <div>My Works</div>
            <div>Contact</div>
          </div>
        </div>
      ) : (
        <div className="sidebar-layout">
          <div
            className="sidebar-button"
            style={{
              backgroundColor: !sidebarOpen ? "black" : "#bc8f1d",
            }}
            onClick={() => {
              sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
              !sidebarOpen ? disableScroll() : enableScroll();
            }}
          >
            <MenuIcon />
          </div>
          {sidebarOpen && (
            <div className="sidebar-content ">
              <div className="sidebar-title">hello there</div>
              <div className="sidebar-list">
                <div className="sidebar-list-item">Home</div>
                <div className="sidebar-list-item">About Me</div>
                <div className="sidebar-list-item">My Works</div>
                <div className="sidebar-list-item">Contact</div>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
