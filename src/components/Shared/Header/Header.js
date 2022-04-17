import { signOut } from 'firebase/auth';
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import ActiveLink from "../../Authentication/ActiveLink/ActiveLink";
import logo from "../../images/logo/logo1.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav className="container mb-4">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-color"
          variant="dark"
        >
          <Container>
            <div>
              <div className="title-container">
                <img className="img-container me-3" src={logo} alt="" />
                <h3>Rathika Ramasamy</h3>
              </div>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <ActiveLink className="iteams" to="/">
                  Home
                </ActiveLink>
                <ActiveLink className="iteams" to="/blogs">
                  Blogs
                </ActiveLink>
                <ActiveLink className="iteams" to="/about">
                  About me
                </ActiveLink>
                <ActiveLink className="iteams" to="/ragister">
                  Ragister
                </ActiveLink>
              </Nav>
              <Nav>
                {
                  user? (<p>{user?.email}</p>): ''
                }
                {user? (<Link onClick={()=>signOut(auth)} className="loginOption" to="/login">
                  LogOut
                </Link>) : (<Link className="loginOption" to="/login">
                  LogIn
                </Link>)}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
};

export default Header;
