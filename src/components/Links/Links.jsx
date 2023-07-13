import React from "react";
import "./Links.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Links = () => {
  return (
    <div className="links-container">
      <div className="links">
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </div>
    </div>
  );
};

export default Links;
