import React from "react";
import pic from "../../assets/Images/Removed.png";
// import Links from "../Links/Links";
import Project from "./Project/Project";
import ButtonNew from "../../subcomponents/ButtonNew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import "./Home.scss";
import { useMediaQuery } from "@mui/material";
const Home = () => {
  // const isDesktop = useMediaQuery("min-width:")
  return (
    <div className="home-container ">
      <div className="home-layout">
        <div className="my-image">
          <img className="image-mobile" src={pic} alt="" />
        </div>
        <div className="my-name">I am Hindol Banerjee</div>
        <div className="my-desc">Freelance Web-Designier and Developer</div>
      </div>

      <div className="about-section">
        <div className="about-section-layout">
          <div className="about-button">Know More</div>

          <h2 className="about-content">
            <ArrowBackIcon />
            More About Me
          </h2>
        </div>
      </div>
      <div className="projects-layout">
        <h2 className="projects-title">My Works</h2>
        <div className="projects-section">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      <div className="home-contactSection">
        <h2>Let's Get In Touch</h2>
        <div className="contact-button">Contact Me</div>
      </div>
    </div>
  );
};

export default Home;
