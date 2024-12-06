import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from "react-bootstrap";

import eCommerceImage from "../../assets/img/MyProjects/eCommerceImage.webp";
import MobileAppImage from "../../assets/img/MyProjects/MobileAppImage.png";
import EducationalPlatformImage from "../../assets/img/MyProjects/EducationalPlatformImage.png";

const MyProjects: React.FC = () => {
  return (
    <section id="projects" className="mb-5 my-projects">
      <Container>
        <h1 className="text-center mb-3 fw-semibold">My Projects</h1>
        <p className="text-center">Here are projects showcasing my UI/UX design, innovation, and problem-solving, each tailored to unique user needs and business goals:</p>

        <Row className="gap-3 gap-md-0">
          <Col md>
            <Card className="border-0 bg-body-tertiary shadow">
              <CardImg src={eCommerceImage} />
              <CardBody>
                <CardTitle className="mb-3">E-Commerce Website Redesign</CardTitle>
                <p>Revamped the UI/UX with a modern, responsive design and optimized navigation, boosting user retention by 25% and streamlining the checkout process.</p>
              </CardBody>
            </Card>
          </Col>
          <Col md>
            <Card className="border-0 bg-body-tertiary shadow">
              <CardImg src={MobileAppImage} />
              <CardBody>
                <CardTitle className="mb-3">Task Management Mobile App</CardTitle>
                <p>Designed a minimalist, intuitive app with drag-and-drop task organization and custom reminders, enhancing productivity and earning positive user feedback.</p>
              </CardBody>
            </Card>
          </Col>
          <Col md>
            <Card className="border-0 bg-body-tertiary shadow">
              <CardImg src={EducationalPlatformImage} />
              <CardBody>
                <CardTitle className="mb-3">Educational Platform Dashboard</CardTitle>
                  <p>Developed a user-friendly dashboard with data visualization and streamlined workflows, improving educator satisfaction and access to key features.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MyProjects;
