import React from "react";
import { Button, Nav, Navbar, NavbarBrand, NavbarOffcanvas, NavbarToggle, Offcanvas, Container } from "react-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="py-5">
      <Container>
        <NavbarBrand>Charlzk</NavbarBrand>
        <NavbarToggle></NavbarToggle>
        <NavbarOffcanvas>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Charlzk</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 gap-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about-me">About Me</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button type="button" variant="primary">Download CV</Button>
            </Nav>
          </Offcanvas.Body>
        </NavbarOffcanvas>
      </Container>
    </Navbar>
  )
}

export default NavBar;