import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="blog-footer">
      <Container>
        <Row>
          <Col md="3" className="footer-section">
            <h5 className="footer-title">Recent Posts</h5>
            <ul className="recent-posts">
              <li><a href="#">How to Master React in 2024</a></li>
              <li><a href="#">Understanding JavaScript Closures</a></li>
              <li><a href="#">The Ultimate Guide to CSS Grid</a></li>
            </ul>
          </Col>
          <Col md="3" className="footer-section">
            <h5 className="footer-title">Categories</h5>
            <ul className="categories">
              <li><a href="#">Technology</a></li>
              <li><a href="#">Programming</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Tips & Tricks</a></li>
            </ul>
          </Col>
          <Col md="3" className="footer-section">
            <h5 className="footer-title">About the Author</h5>
            <p className="author-bio">
              Jane Doe is a software developer and writer who loves sharing insights on modern web development and programming.
            </p>
            <Button color="primary" className="btn-custom">
              Follow Jane
            </Button>
          </Col>
          <Col md="3" className="footer-section">
            <h5 className="footer-title">Subscribe</h5>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Your email address" />
              </FormGroup>
              <Button color="primary" className="btn-custom">Subscribe</Button>
            </Form>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p className="footer-bottom-text">
              © {new Date().getFullYear()} Your Blog. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
