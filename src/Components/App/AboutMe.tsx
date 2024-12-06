import React from "react";
import { Col, Container, Row, Image, Button, ProgressBar } from "react-bootstrap";
import Me from "../../assets/img/me.jpg";

const AboutMe: React.FC = () => {
  return (
    <>
      <section id="home" className="mb-5">
        <Container>
          <Row className="gap-5 gap-md-0">
            <Col md>
              <div className="fw-bold mb-1">Hi I am</div>
              <div className="fw-bold text-primary">Charles Henry Tinoy</div>
              <div className="fw-bold display-1 d-flex flex-column mb-3">
                <div style={{ letterSpacing: "0.5rem" }}>UI & UX</div>
                <div className="text-end" style={{ letterSpacing: "0.5rem" }}>Designer</div>
              </div>
              <p style={{ textAlign: "justify" }}>With a sharp eye for detail and a strong emphasis on user demands, I attempt to balance originality and utility, ensuring that each project has both visual appeal and smooth usability. Whether it's wireframes, prototypes, or completed interfaces, I want to create designs that have a lasting impact.</p>
              <div>
                <Button type="button" variant="primary">Hire Me</Button>
              </div>
            </Col>
            <Col md className="d-flex align-items-center justify-content-center">
              <div className="d-flex align-items-center flex-column gap-4">
                <Image src={Me} style={{ height: "300px", width: "300px", objectFit: "cover" }} roundedCircle />
                <div className="d-flex justify-content-center align-items-center flex-row gap-4">
                  <a href="/" className="text-black" style={{ fontSize: "24px" }}><i className="bi bi-facebook"></i></a>
                  <a href="/" className="text-black" style={{ fontSize: "24px" }}><i className="bi bi-instagram"></i></a>
                  <a href="/" className="text-black" style={{ fontSize: "24px" }}><i className="bi bi-linkedin"></i></a>
                  <a href="/" className="text-black" style={{ fontSize: "24px" }}><i className="bi bi-github"></i></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about-me" className="mb-5">
        <Container>
          <h1 className="mb-3 fw-semibold">About Me</h1>
          <Row>
            <Col md>
              <p style={{ textAlign: "justify" }}>My name is Charles Henry Tinoy, and I'm a UI/UX Designer who is passionate about designing user-friendly digital experiences that are both visually appealing and functional. I concentrate on understanding user needs and developing intuitive solutions using wireframes, prototypes, and visuals. Collaboration is essential to my process, and I keep up with the newest design trends to produce effective, cutting-edge solutions. My goal is to create experiences that suit users' needs while also leaving a lasting, good impression.</p>
            </Col>
            <Col md>
              <div className="mb-4">
                <div className="fw-semibold mb-2">UI/UX</div>
                <ProgressBar animated now={89} />
              </div>
              <div className="mb-4">
                <div className="fw-semibold mb-2">Website Design</div>
                <ProgressBar animated now={96} />
              </div>
              <div className="mb-4">
                <div className="fw-semibold mb-2">App Design</div>
                <ProgressBar animated now={84} />
              </div>
              <div className="mb-4">
                <div className="fw-semibold mb-2">Graphic Design</div>
                <ProgressBar animated now={79} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutMe;