import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

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
            <Link href="/" className="nav-link">
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link href="/login" className="nav-link">
              <i className="fa-solid fa-right-to-bracket"></i> Login
            </Link>
            <Link href="/signup" className="nav-link">
              <i className="fa-solid fa-user-plus"></i> Signup
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
