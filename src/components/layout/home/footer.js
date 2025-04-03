import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="blog-footer">
      <Container>
        <Row>
          <Col className="footer-section pl-5" >
            <h5 className="footer-title" style={{color:"white"}}>Subscribe And Never Missed !!!</h5>
            <Form>
              <FormGroup>
                <Label className='' for="email" style={{color:"white"}}>Email</Label>
                <Input className='w-auto' type="email" name="email" id="email" placeholder="Your email address" />
              </FormGroup>
              <Button color="info" className="btn-custom w-auto text-dark">Subscribe</Button>
            </Form>
          </Col>
          <Col>
            <p className="footer-bottom-text border-left pb-5 mt-3" style={{ color: "white" }}>
              © {new Date().getFullYear()} Viral Wolf. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
