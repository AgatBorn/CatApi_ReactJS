import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBarContainer() {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm">
      <Navbar.Brand as={Link} to="/">CatAPI</Navbar.Brand>
      <Navbar.Toggle aria-controls="#mainMenu"></Navbar.Toggle>
      <Navbar.Collapse id="mainMenu">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Cat Votes</Nav.Link>
          <Nav.Link as={Link} to="/breeds">Breeds</Nav.Link>
          <Nav.Link as={Link} to="/search">Search</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarContainer;