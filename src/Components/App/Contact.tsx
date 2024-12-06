import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

const Contact: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      return setValidated(true);
    }
    setValidated(false);
  }
  
  return (
    <section className="app-page-footer" id="contact">
      <Container>
        <h1 className="mb-3 fw-semibold text-center">Lets Design Together</h1>
        <p className="text-center">Collaboration is the foundation of great design. Let us bring your idea to life via creativity and functionality, creating designs that truly resonate with your users.</p>

        <div style={{ height: "250px" }} className="d-flex justify-content-center align-items-center">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Floating>
                <Form.Control type="email" placeholder="" size="sm" required />
                <label>Enter your Email</label>
              </Form.Floating>
              <Button type="submit" variant="primary">Contact Me</Button>
            </InputGroup>
          </Form>
        </div>
      </Container>
    </section>
  )
}

export default Contact;
