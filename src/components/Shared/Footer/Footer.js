import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footrt-bg-color mt-5">
      <div className="container text-center py-3">
        <div>
          <a href="#facebook">
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          </a>
          <a href="#linkdin">
            <FontAwesomeIcon className="mx-3" icon={faCoffee}></FontAwesomeIcon>
          </a>
          <a href="#twiter">
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          </a>
        </div>
        <p>
          <small>Everythig is copyright &copy;2022</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
