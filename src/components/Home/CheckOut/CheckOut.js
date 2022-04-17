import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  let loadingElement;
  const navigate = useNavigate();
  const fromSubmit = (e) => {
    e.preventDefault();
    alert("Successfull booking");
    navigate("/home");
  };
  return (
    <div className="container mb-5">
      <h1 className="text-center">Welcome to Checkout</h1>
      <hr />
      <div className="w-50 mx-auto">
        <Form onSubmit={fromSubmit} className="custom-padding">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <textarea
              className="ps-2 width"
              rows="4"
              name="comment"
              form="usrform"
            >
              your address
            </textarea>
          </Form.Group>
          {loadingElement}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="phone number" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CheckOut;
