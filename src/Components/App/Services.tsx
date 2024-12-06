import React from "react";
import { Card, CardBody, CardImg, CardTitle, Col, Container, Row } from "react-bootstrap";

import UIDesignImage from "../../assets/img/services/UIDesignImage.avif";
import UXDesignImage from "../../assets/img/services/UXDesignImage.png";
import WireframingImage from "../../assets/img/services/WireframingImage.png";

const Services: React.FC = () => {
  return (
    <section id="services" className="mb-5 services">
      <Container>
        <h1 className="mb-3 fw-semibold text-center">Services</h1>
        <p className="text-center mb-5">As a UI/UX Designer, I craft digital experiences that blend functionality with aesthetic appeal.</p>
      
        <Row className="gap-3 gap-md-0">
          <Col md>
            <Card className="border-0 bg-body-tertiary shadow">
              <CardImg src={UIDesignImage} />
              <CardBody>
                <CardTitle className="mb-3">UI Design</CardTitle>
                <p>Craft visually appealing, modern, and responsive designs for websites, mobile apps, and digital products.</p>
                <p>Focus on clean layouts, color harmony, and typography to ensure an engaging user experience.</p>
              </CardBody>
            </Card>
          </Col>
          <Col md>
            <Card className="border-0 bg-body-tertiary shadow">
              <CardImg src={UXDesignImage} />
              <CardBody>
                <CardTitle className="mb-3">UX Design</CardTitle>
                <p>Conduct user research, competitor analysis, and user journey mapping to understand your audience.</p>
                <p>Design intuitive workflows, wireframes, and interactive prototypes for seamless navigation and usability.</p>
              </CardBody>
            </Card>
          </Col>
          <Col md>
            <Card className="border-0 bg-body-tertiary shadow">
            <CardImg src={WireframingImage} />
              <CardBody>
                <CardTitle className="mb-3">Wireframing & Prototyping</CardTitle>
                <p>Develop low-fidelity wireframes to outline structure and high-fidelity prototypes for realistic user interaction.</p>
                <p>Use tools like Figma, Adobe XD, or Sketch to bring ideas to life and ensure clear communication with stakeholders.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
