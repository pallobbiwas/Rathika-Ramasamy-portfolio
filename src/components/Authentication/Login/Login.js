import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import githubicon from "../../images/logo/github.png";
import googleicon from "../../images/logo/google.png";
import "./Login.css";

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('')
  // react firebase hook
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  // loging handeler
const emailLogin = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    signInWithEmailAndPassword(email, pass)
}
if(emailUser){
    navigate('/home')
}
  return (
    <div className="container">
      <div className="w-50 mx-auto login-box">
        <Form onSubmit={emailLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control ref={passRef} type="password" placeholder="Password" required />
          </Form.Group>
          <div className="text-center">
            <Button className="w-50 " variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
        <div className="row my-4">
          <div className="col-md-6">
            <p>
              forget password? <span>reset password</span>
            </p>
          </div>
          <div className="col-md-6">
            <p>
              new to here?{" "}
              <span onClick={() => navigate("/ragister")}>ragister</span>
            </p>
          </div>
        </div>
        <div className="horizantal-line my-4">
          <div className="left"></div>
          <p>or</p>
          <div className="right"></div>
        </div>
        <div className="social-login row">
          <div className="col-md-6">
            <button>
              <img
                style={{ width: "30px" }}
                className=" img-fluid"
                src={googleicon}
                alt=""
              />
              Login google
            </button>
          </div>
          <div className="col-md-6">
            <button>
              <img
                style={{ width: "30px" }}
                className=" img-fluid"
                src={githubicon}
                alt=""
              />
              Login github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
