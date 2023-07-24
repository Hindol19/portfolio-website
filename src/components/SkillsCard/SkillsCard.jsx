import React from "react";
import "./SkillsCard.scss";
import ReactIcon from "../../assets/Icons/react-js-icon.svg";
import GitIcon from "../../assets/Icons/github-icon.svg";
import JavaIcon from "../../assets/Icons/java-programming-language-icon.svg";
import JSIcon from "../../assets/Icons/javascript-programming-language-icon.svg";
import MongoIcon from "../../assets/Icons/mongodb-icon.svg";
import NodeIcon from "../../assets/Icons/node-js-icon.svg";
import SassIcon from "../../assets/Icons/sass-icon.svg";
import ExpressIcon from "../../assets/Icons/express-js-icon.svg";
const SkillsCard = () => {
  return (
    <div className="skillsCard-container">
      <div className="icon">
        <img src={ReactIcon} alt="" />
      </div>
      <div className="icon">
        <img src={JSIcon} alt="" />
      </div>
      <div className="icon">
        <img src={NodeIcon} alt="" />
      </div>
      <div className="icon">
        <img className="express" src={ExpressIcon} alt="" />
      </div>
      <div className="icon">
        <img src={SassIcon} alt="" />
      </div>
      <div className="icon">
        <img src={MongoIcon} alt="" />
      </div>
      <div className="icon">
        <img src={JavaIcon} alt="" />
      </div>
      <div className="icon">
        <img className="git" src={GitIcon} alt="" />
      </div>
    </div>
  );
};

export default SkillsCard;
