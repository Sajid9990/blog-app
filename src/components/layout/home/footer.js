import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="blog-footer">
      <Container>
        <Row>
          <Col>
            <p className="footer-bottom-text border-right pb-5 mt-3" style={{ color: "white" }}>
              © {new Date().getFullYear()} Viral Wolf. All rights reserved.
            </p>
          </Col>
          <Col className="footer-section">
            <h5 className="footer-title text-light">Subscribe And Never Missed New Articles</h5>
            <Form>
              <FormGroup>
                <Label className='text-light' for="email">Email</Label>
                <Input className='w-auto' type="email" name="email" id="email" placeholder="Your email address" />
              </FormGroup>
              <Button color="info" className="btn-custom w-auto text-dark">Subscribe</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
