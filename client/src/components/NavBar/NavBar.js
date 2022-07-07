import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div className="NavBar">
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Brand href="/">Ezfind</Navbar.Brand>
          {/* <Nav.Link href="/news">Home</Nav.Link> */}
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
