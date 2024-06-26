import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

export const Header = () => {
  return (
    <Navbar expand="md" variant="dark" className="bg-dark">
      <Container>
        <Link href="/" className="navbar-brand">
          Book Library
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link to="/" className="nav-link">
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link to="/login" className="nav-link">
              <i className="fa-solid fa-right-to-bracket"></i> Login
            </Link>
            <Link to="/signup" className="nav-link">
              <i className="fa-solid fa-user-plus"></i> Signup
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
