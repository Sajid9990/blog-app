import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="blog-footer" style={{borderRadius:"8px 8px 0px 0px"}}>
      <Container>
        <Row>
          <Col className="footer-section pl-5" >
            <h5 className="footer-title" style={{ color: "white" }}>Subscribe And Never Missed !!!</h5>
            <Form>
              <FormGroup>
                <Label className='' for="email" style={{ color: "white" }}>Email</Label>
                <Input className='w-auto' type="email" name="email" id="email" placeholder="Your email address" />
              </FormGroup>
              <Button color="info" className="btn-custom w-auto text-dark">Subscribe</Button>
            </Form>
          </Col>
          <Col className="footer-bottom-text border-left pb-5 mt-3 ">
            <p style={{ color: "white" }}>
              © {new Date().getFullYear()} Viral Wolf. All rights reserved.
            </p>

          </Col>
        </Row>
        <hr style={{ color: "white" }} />
        <Row className='mr-2 ml-2 mb-3 mt-3' style={{ color: "white" }}>
          <Col>About Us</Col>
          <Col>Contact Us</Col>
          <Col>Privacy Policy</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
