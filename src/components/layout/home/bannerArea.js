import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Badge,
} from 'reactstrap';
import './BannerArea.css'; // Import the CSS file

const BannerArea = () => {
  return (
    <div className="py-1 pt-5" style={{ background: "#439c8b" }} id="banner">
      <Container>
        <div>
          <h2><u>Most Viewed Articles</u></h2>
        </div>
        <Row className="align-items-center">
          <Col lg="6" className="mb-4 mb-lg-0">
            <div className="banner-details">
              <div className="post-meta-single mb-3">
                <ul className="list-unstyled">
                  <li>
                    <Badge color="primary" className="badge-custom">Tech</Badge>
                  </li>
                  <li className="date">
                    <i className="fa fa-clock-o text-dark"></i> 08.22.2020
                  </li>
                </ul>
              </div>
              <h2 className="banner-title">ReZoom outage left some people locked out.</h2>
              <p className="banner-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button className='w-25'>
                Read More
              </Button>
            </div>
          </Col>
          <Col lg="6">
            <div className="banner-thumb">
              <img src="/blog-app/assets/img/banner/1.png" alt="Banner" className="img-fluid rounded" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col lg="3" sm="6" className="mb-4">
            <Card className="single-post-wrap shadow-sm" style={{ background: "none" }}>
              <CardImg top src="/blog-app/assets/img/post/1.png" alt="Post" className="card-img" />
              <Badge className="badge-custom bg-primary text-light">Tech</Badge>
              <CardBody>
                <CardTitle tag="h5" className="card-title">
                  <a href="#">The FAA will test drone detecting technologies in airports this year</a>
                </CardTitle>
                <CardText className="post-meta-single mt-3">
                  <ul className="list-unstyled">
                    <li className='text-info'>
                      <i className="fa fa-clock-o"></i> 08.22.2020
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6" className="mb-4">
            <Card className="single-post-wrap shadow-sm" style={{ background: "none" }}>
              <CardImg top src="/blog-app/assets/img/post/2.png" alt="Post" className="card-img" />
              <Badge className="badge-custom bg-success text-dark">Food</Badge>
              <CardBody>
                <CardTitle tag="h5" className="card-title">
                  <a href="#">Rocket Lab will resume launches no sooner than August 27th</a>
                </CardTitle>
                <CardText className="post-meta-single mt-3">
                  <ul className="list-unstyled">
                    <li className='text-info'>
                      <i className="fa fa-clock-o"></i> 08.22.2020
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6" className="mb-4">
            <Card className="single-post-wrap shadow-sm" style={{ background: "none" }}>
              <CardImg top src="/blog-app/assets/img/post/3.png" alt="Post" className="card-img" />
              <Badge color="primary" className="badge-custom">Tech</Badge>
              <CardBody>
                <CardTitle tag="h5" className="card-title">
                  <a href="#">Google Drive flaw may let attackers fool you into installing malware</a>
                </CardTitle>
                <CardText className="post-meta-single mt-3">
                  <ul className="list-unstyled">
                    <li className='text-info'>
                      <i className="fa fa-clock-o"></i> 08.22.2020
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6" className="mb-4">
            <Card className="single-post-wrap shadow-sm" style={{ background: "none" }}>
              <CardImg top src="/blog-app/assets/img/post/4.png" alt="Post" className="card-img" />
              <Badge color="warning" className="badge-custom">Food</Badge>
              <CardBody>
                <CardTitle tag="h5" className="card-title">
                  <a href="#">TikTok will sue the US over threatened ban but everything okay.</a>
                </CardTitle>
                <CardText className="post-meta-single mt-3">
                  <ul className="list-unstyled">
                    <li className='text-info'>
                      <i className="fa fa-clock-o"></i> 08.22.2020
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <center className='pb-5'>
          <Button className='w-25'>Load More</Button>
        </center>
      </Container>
    </div>
  );
};

export default BannerArea;
