import React from "react";
import logo from "../logo.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigasi = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">🎦Movie-In</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link> Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/trending">
                <Nav.Link>Trending</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigasi;
