import { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function AboutUs() {
    return (
        <Fragment>
            <Container>
                <Row className='mt-3'>
                    <Col md={6} className='mb-3'>
                        <img style={{ width: "100%" }} src={`${process.env.PUBLIC_URL}/images/about-us.jpg`} />
                    </Col>
                    <Col md={6}>
                        <h2>
                            MazingBytes is Professional Blogging Website
                        </h2>
                        <p>
                            MazingBytes provides all articles and new related content.
                        </p>
                        <p>
                            There have News , Nature , Food , Science , Travel , Human , knowloag , Animal , Viral videos , Viral Content.
                        </p>

                    </Col>
                </Row>

            </Container>
        </Fragment>
    );
}

export default AboutUs;