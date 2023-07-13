import React from "react";
import Cat from "../../../assets/Images/kristina-yadykina-21NRDbMJF94-unsplash.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import "./Project.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Project = () => {
  return (
    <div className="project-container">
      <div
        className="project-img"
        style={{
          background: `url(${Cat}) no-repeat center center/cover`,
        }}
      >
        <div className="link-drawer">
          <GitHubIcon />
          <LinkIcon />
        </div>
        {/* <img src={Cat} alt="" /> */}
      </div>
      <div className="project-content">
        <h2 className="project-title">Title</h2>
        <p className="project-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          cumque maxime repellendus omnis porro, ipsa dolor provident et alias
          neque? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Aspernatur, possimus.
        </p>
      </div>
      <div className="right-link">
        <ArrowBackIosIcon />
      </div>
    </div>
  );
};

export default Project;
