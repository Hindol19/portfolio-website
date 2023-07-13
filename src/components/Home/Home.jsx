import React from "react";
import pic from "../../assets/Images/Removed.png";
// import Links from "../Links/Links";
import Project from "./Project/Project";
import ButtonNew from "../../subcomponents/ButtonNew";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-container ">
      <div className="home-layout">
        <div className="my-image">
          <img src={pic} alt="" />
        </div>
        <div className="my-name">I am Hindol Banerjee</div>
        <div className="my-desc">Freelance Web-Designier and Developer</div>
      </div>

      <div className="about-section">
        <div className="about-button">Know More</div>
      </div>
      <div className="projects-layout">
        <div className="projects-section">
          <Project />
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
