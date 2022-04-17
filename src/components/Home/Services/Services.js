import React, { useEffect, useState } from "react";
import Servic from "../Servic/Servic";
import "./Services.css";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="mb-4">
        <h1 className="text-center">services</h1>
        <hr />
      </div>
      <div className="row gy-4">
        {service.map((s) => (
          <Servic key={s.id} service={s}></Servic>
        ))}
      </div>
    </div>
  );
};

export default Services;
