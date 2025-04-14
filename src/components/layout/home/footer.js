import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="blog-footer">
      <Container>
        <Row>
          <Col className="col-md-7 footer-section pl-5" >
            <h5 className="footer-title" style={{ color: "white" }}>Subscribe And Never Missed !!!</h5>
            <Form>
              <FormGroup>
                <Label className='' for="email" style={{ color: "white" }}>Email</Label>
                <Input className='w-75' type="email" name="email" id="email" placeholder="Your email address" />
              </FormGroup>
              <Button color="dark" className="w-auto">Subscribe</Button>
            </Form>
          </Col>
          <Col className="footer-bottom-text border-left pb-5 mt-3 pt-5 ">
            <Row>
              <center>
                <Button size='sm' className='m-2 w-50 btn btn-dark'>About Us</Button>
                <Button size='sm' className='m-2 w-50 btn btn-dark'>Contact Us</Button>
                <Button size='sm' className='m-2 w-50 btn btn-dark'>Privacy Policy</Button>
              </center>
            </Row>
          </Col>
        </Row>
        <hr />
        <p style={{ color: "white" }}>
          <center>
            <strong>© {new Date().getFullYear()} Viral Wolf. All rights reserved.</strong>
          </center>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
