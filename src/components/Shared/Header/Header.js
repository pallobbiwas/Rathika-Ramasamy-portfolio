import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActiveLink from "../../Authentication/ActiveLink/ActiveLink";
import logo from "../../images/logo/logo1.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="container">
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
              </Nav>
              <Nav>
                <Link className="loginOption" to="/login">
                  Login
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
};

export default Header;
