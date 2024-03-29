import axios from 'axios';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
    const [latestArtciles, setLatestArticles] = useState([]);
    const [pageSize, setPageSize] = useState(24);
    const [pageNumber, setPageNumber] = useState(Math.ceil(Math.random() * 10)); // rendom page number

    const banner = useRef();

    const atOptions = {
        key: '9866282eec9d6f99e509f5957d00e971',
        format: 'iframe',
        height: 250,
        width: 300,
        params: {}
    };

    const getLatestArticles = async () => {
        const response = await axios.get(`https://api.thefactmagic.com/articles/latest/1/1/Vivo?page=${pageNumber}&size=${pageSize}`);
        if (response.status == 200) {
            setLatestArticles(response.data.content);
        }
    }

    function ad() {
        if (banner.current && !banner.current.firstChild) {
            const conf = document.createElement('script');
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `//www.topcreativeformat.com/${atOptions.key}/invoke.js`;
            conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

            banner.current.append(conf);
            banner.current.append(script);
        }
    }

    useEffect(() => {
        ad();
    }, [banner]);

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
                            <div className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center" ref={banner}></div>
                        </Col>
                    </Row>
                    {
                        latestArtciles.length > 0 ?
                            latestArtciles.map((article, index) => {
                                return (
                                    <Col md={3} key={index} className='mb-4'>
                                        <Card style={{ width: '18rem' }}>
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
