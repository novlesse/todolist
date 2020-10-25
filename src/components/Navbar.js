import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navibar() {
  return (
    <Navbar className="shadow p-3 mb-3" bg="white" variant="light">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={Link} to="/api">
          API
        </Nav.Link>
        <Nav.Link as={Link} to="/themeSwitcher">
          Switch Theme
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navibar;
