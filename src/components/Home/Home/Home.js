import React from "react";
import cover from "../../images/banner/Rathika-Ramasamy-Images-1.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <h1 className="idol-title">Rathika Ramasamy</h1>
          <hr />
          <p>
            Rathika Ramasamy is an Indian wildlife photographer. She is based in
            Chennai and operates as a freelance photographer. She has received
            many accolades for her photographs and has been called the "first
            Indian woman to strike an international reputation as a wildlife
            photographer"
          </p>
          <div className="d-flex justify-content-center">
            <div>
              <button className="w-100 hire-btn">Hire me</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid rounded-3" src={cover} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
