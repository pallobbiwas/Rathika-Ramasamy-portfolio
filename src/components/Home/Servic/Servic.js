import { faCheck, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Servic = ({
  service: {
    name,
    offer: [a, b, c],
    price,
  },
}) => {
  return (
    <div className="col-md-4">
      <div className="box w-100">
        <h3 className="bg-warning px-5 py-3 rounded-3">Price: {price}$</h3>
        <div className="ps-4">
          <h4>{name}</h4>
          <p>
            <FontAwesomeIcon className="me-2" icon={faCheck}></FontAwesomeIcon>
            {a}
          </p>
          <p>
            <FontAwesomeIcon className="me-2" icon={faCheck}></FontAwesomeIcon>
            {b}
          </p>
          <p>
            <FontAwesomeIcon className="me-2" icon={faCheck}></FontAwesomeIcon>
            {c}
          </p>
        </div>
        <div>
            <button className="btn btn-warning w-100 rounded-3">Book now <FontAwesomeIcon className="ms-3" icon={faTicket}></FontAwesomeIcon></button>
        </div>
      </div>
    </div>
  );
};

export default Servic;
