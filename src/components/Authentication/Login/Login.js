import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import githubicon from "../../images/logo/github.png";
import googleicon from "../../images/logo/google.png";
import "./Login.css";

const Login = () => {
  let errorElemet;
  const emailRef = useRef("");
  const passRef = useRef("");
  const [show, setSow] = useState(false);
  // react firebase hook
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googelUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, gituser, gitloading, giterror] =
    useSignInWithGithub(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  // loging handeler
  const emailLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    signInWithEmailAndPassword(email, pass);
  };
  //google log in
  const googleLogin = () => {
    signInWithGoogle();
  };
  const gitLogin = () => {
    signInWithGithub();
  };
  const forgetpass = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };

  if (emailUser || googelUser || gituser) {
    navigate("/home");
  }
  if (emailError || googleError || giterror) {
    errorElemet = <p>{emailError?.message}</p>;
  }
  return (
    <div className="container">
      <div className=" mx-auto login-box">
        <Form onSubmit={emailLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <div className="parend">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                ref={passRef}
                type={!show ? "password" : "text"}
                placeholder="Password"
                required
              />
              <FontAwesomeIcon
                onClick={() => setSow(!show)}
                className="child"
                icon={faEye}
              ></FontAwesomeIcon>
            </Form.Group>
          </div>
          {errorElemet}
          <div className="text-center">
            <Button className="w-50 " variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
        <div className="row my-4">
          <div className="col-md-6">
            <p>
              forget password? <span onClick={forgetpass}>reset password</span>
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
            <button onClick={googleLogin}>
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
            <button onClick={gitLogin}>
              <img
                style={{ width: "30px" }}
                className=" img-fluid"
                src={githubicon}
                alt=""
              />
              Login github
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
