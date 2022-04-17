import React from "react";
import facebook from '../../images/logo/fac.jpg';
import instagram from '../../images/logo/insta.jpg';
import linkdin from '../../images/logo/linkdin.jpg';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footrt-bg-color mt-5">
      <div className="container text-center py-3">
        <div>
          <a href="#facebook">
            <img className="img-size" src={facebook} alt="" />
          </a>
          <a href="#linkdin">
            <img className="img-size" src={linkdin} alt="" />
          </a>
          <a href="#twiter">
            <img className="img-size" src={instagram} alt="" />
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
