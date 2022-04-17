import React from "react";
import { ProgressBar } from "react-bootstrap";
import profile from "../../images/pallab A4 size.jpg";
import "./About.css";

const About = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="container main-conten"
    >
      <div className="my-3">
        <h1>About my self</h1>
        <hr />
      </div>
      <div className="row mt-5 d-flex align-items-center">
        <div className="col-md-8 mt-5">
          <div>
            <h2>Pallob Biswas</h2>
            <p>
              Thank you for watching my profile...❤ Hello. My self Pallob
              Biswas.My home town Barisal,pirojpur. Now i lives in Dhaka,
              panthopath.I complete bsc in cse at Dhaka international university
              in this year.
            </p>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <div>
            <img className=" round img-fluid" src={profile} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h4>As a junior web developer</h4>
        <hr />
        <p>
          My dream & passion is became a Full stack web Developer. Now i learn
          fornt-end web development via programming hero.
        </p>
      </div>
      <div>
        <h4>My skill</h4>
        <hr />
        <div>
          <div>
            <p>
              Html
              <ProgressBar animated variant="success" now={95} />
            </p>
            <p>
              Css <ProgressBar animated variant="info" now={70} />
            </p>
            <p>
              js
              <ProgressBar animated variant="warning" now={60} />
            </p>
            <p>
              reactjs <ProgressBar animated variant="danger" now={65} />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h4>My dream</h4>
        <hr />
        <p>
          Became a job holder.Grow up my skill for real life projcet.then
          starting a small bisuness.
        </p>
      </div>
      <div className="my-3">
        <h1 className="text-center">THANK YOU</h1>
      </div>
    </div>
  );
};

export default About;
