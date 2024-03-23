import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
    const [latestArtciles, setLatestArticles] = useState([]);
    const [pageSize, setPageSize] = useState(24);
    const [pageNumber, setPageNumber] = useState(Math.ceil(Math.random() * 10)); // rendom page number


    const getLatestArticles = async () => {

        // debugger
        const response = await axios.get(`https://api.thefactmagic.com/articles/latest/1/1/Vivo?page=${pageNumber}&size=${pageSize}`);

        if (response.status == 200) {
            setLatestArticles(response.data.content);
        }

    }

    useEffect(() => {
        getLatestArticles();
    }, [])


    console.log(latestArtciles);


    return (
        <Fragment>
            <Container>

                <Row className='p-3'>
                    <Row className='mb-3'>
                        <Col>
                            <h4 style={{ borderBottom: "2px solid blue" }} className='p-2 text-primary'>
                                Trending Articles <span class="badge badge-success rounded bg-primary">{pageSize}</span>
                            </h4>
                        </Col>
                    </Row>
                    {
                        latestArtciles.length > 0 ?
                            latestArtciles.map((article, index) => {
                                return (
                                    <Col md={4} key={index} className='mb-4'>
                                        <Card style={{ width: '25rem' }}>
                                            <Card.Img variant="top" src={article.icon_image} />
                                            <Card.Body>
                                                <Card.Title>{article.title}</Card.Title>
                                                <Card.Text>
                                                    {article.description}
                                                </Card.Text>
                                                <Button className='btn btn-primary'>
                                                    <Link to={`/read-blog/mazingbytes${article.id}/${article.slug}`} className='text-decoration-none text-light'>Read Article ...</Link>
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })
                            : null
                    }

                </Row>
                <div className="m-5">
                    <center>
                        <Button className='btn btn-success'>Load More</Button>
                    </center>
                </div>
            </Container>

        </Fragment>
    );
}

export default HomePage;
