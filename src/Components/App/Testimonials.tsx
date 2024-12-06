import React, { useState } from "react";
import { Container, Carousel, Card, CardBody, CardTitle, Row, Col, Image } from "react-bootstrap";

import carter from "../../assets/img/Testimonials/carter.jpg";
import micheal from "../../assets/img/Testimonials/micheal.jpg";
import jessica from "../../assets/img/Testimonials/jessica.jpg";
import alex from "../../assets/img/Testimonials/alex.jpg";
import sarah from "../../assets/img/Testimonials/sarah.jpg";

const Testimonials: React.FC = () => {
  const [testimonialsItem] = useState([
    {
      image: carter,
      name: "Emily Carter",
      position: "Senior UX Designer at PixelWave Studios",
      comment: "Collaborating with their design team was a game-changer. The user flows were seamless, and the interface truly resonated with our audience!"
    },
    {
      image: micheal,
      name: "Michael Donovan",
      position: "Frontend Developer at CodeCrafters",
      comment: "Their UI mockups were incredibly detailed and user-focused. It made the development process smoother and more efficient than ever."
    },
    {
      image: jessica,
      name: "Jessica Morales",
      position: "Product Manager at CreativeBound",
      comment: "Their redesign transformed our app into something our users love. We’ve seen a 30% boost in engagement since the launch!"
    },
    {
      image: alex,
      name: "Alex Wilson",
      position: "Freelance UX Consultant",
      comment: "Exceptional attention to detail! They struck the perfect balance between aesthetic appeal and usability."
    },
    {
      image: sarah,
      name: "Sarah Blake",
      position: "Graphic Designer at BoldVisions",
      comment: "Their work was nothing short of phenomenal. Every element of the design felt purposeful and aligned perfectly with the user journey."
    },
  ])

  return (
    <section className="mb-5 testimonials" id="testimonials">
      <Container>
        <h1 className="mb-3 text-center fw-semibold">Testimonials</h1>
        <p className="text-center">Clients praise my ability to translate complicated concepts into user-friendly designs, emphasizing my attention to detail and commitment to providing powerful, effective products.</p>

        <Carousel>
          {
            testimonialsItem.map(({ image, name, position, comment }, index) =>
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center align-items-center h-100 container pb-5">
                  <Card className="p-3 border-0 bg-body-tertiary shadow">
                    <CardBody>
                      <Row className="gap-4 gap-lg-2">
                        <Col lg={4} className="d-flex justify-content-center align-items-center">
                          <Image src={image} className="rounded-pill shadow" />
                        </Col>
                        <Col lg className="d-flex align-items-center">
                          <div>
                            <CardTitle>{name}</CardTitle>
                            <div className="mb-1">{position}</div>
                            <p>{comment}</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </div>
              </Carousel.Item>
            )
          }
        </Carousel>
      </Container>
    </section>
  )
}

export default Testimonials;
