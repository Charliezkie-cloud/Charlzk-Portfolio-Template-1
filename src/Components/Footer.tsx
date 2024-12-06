import React from "react";
import { Container, Nav } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-body-tertiary pt-5">
      <Container>
        <div className="text-center fw-semibold mb-4">Charlzk</div>
        <Nav className="justify-content-center gap-2 mb-4">
          <Nav.Link className="text-black" href="#home">Home</Nav.Link>
          <Nav.Link className="text-black" href="#about-me">About Me</Nav.Link>
          <Nav.Link className="text-black" href="#services">Services</Nav.Link>
          <Nav.Link className="text-black" href="#projects">Projects</Nav.Link>
          <Nav.Link className="text-black" href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link className="text-black" href="#contact">Contact</Nav.Link>
        </Nav>
        <div className="d-flex justify-content-center align-items-center flex-row gap-4 mb-4">
          <a href="/" className="text-black" style={{ fontSize: "24px" }}><i className="bi bi-facebook"></i></a>
          <a href="/" className="text-black" style={{ fontSize: "24px" }}><i className="bi bi-instagram"></i></a>
          <a href="/" className="text-black" style={{ fontSize: "24px" }}><i className="bi bi-linkedin"></i></a>
          <a href="/" className="text-black" style={{ fontSize: "24px" }}><i className="bi bi-github"></i></a>
        </div>
      </Container>
      <div className="bg-dark text-light text-center py-3">
        <small>&copy; 2024 <span className="text-primary">Charlzk</span> All Rights Reserved , Inc.</small>
      </div>
    </footer>
  )
}

export default Footer;
