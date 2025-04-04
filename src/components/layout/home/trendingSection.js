import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Carousel, CarouselItem, CarouselIndicators, Button, Card, CardImg } from 'reactstrap';
import "./trending.css";
import axios from 'axios';

const TrendingNews = (props) => {
    const [latestArticle, setLatestArticle] = useState([]);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === latestArticle.slice(0, 3).length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? latestArticle.slice(0, 3).length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const redireactToBlogPage = (event, article) => {
        debugger
        alert(article.id);
    }

    const slides = latestArticle.slice(0, 3).map((article, index) => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}>
            <div className="trending-post">
                <div onClick={(e) => redireactToBlogPage(e, article)} className="single-post-wrap style-overlay" style={{ width: '100%', height: '', overflow: 'hidden' }}>
                    <div className="thumb" style={{ width: '100%', height: '100%' }}>
                        <img src={article.iconImg} alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="details element" style={{ cursor: "pointer", width: "100%", position: 'absolute', top: '0', paddingLeft: "10px", color: '#fff', height:"100%" }}>
                        <div className="post-meta-single">
                            <p style={{ fontSize: '14px', color: '#fff' }}>
                                {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' }).replace(',', '')}
                                <h2 style={{ color: "white" }}>
                                    {article.title.length > 20 ? article.title.substring(0, 20) + "..." : article.title}
                                </h2>
                            </p>
                        </div>
                    </div>
                    {/* <div style={{ width: "100%", position: 'absolute', bottom: '75%', color: '#fff' }}>
                        <Button className="mr-3" color='danger' size="sm" style={{ width: "15%",float:"right" }}>Read</Button>
                    </div> */}
                </div>
            </div>
        </CarouselItem>
    ));



    useEffect(() => {
        setLatestArticle(props.latestArticle);
    }, []);

    return (
        <div className="post-area pd-top-50 py-4" id="trending">
            <Container>
                <Row>
                    <Col lg="8" className='mb-3'>
                        <div>
                            <h2>Trending News</h2>
                        </div>
                        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                            <CarouselIndicators items={latestArticle.slice(0, 3)} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                        </Carousel>
                    </Col>
                    <Col lg="4">
                        <div>
                            <h2>Latest Articles</h2>
                        </div>

                        <div style={{ height: '370px', overflowY: 'auto', paddingRight: '0' }}>
                            {latestArticle.slice(0, 9).map((article, index) => (
                                <div onClick={(e) => redireactToBlogPage(e, article)} key={index} className="single-post-list-wrap" style={{ marginBottom: '20px', cursor: "pointer" }}>
                                    <div className="media">
                                        <div className="media-left">
                                            <Card className="single-post-wrap shadow-sm" style={{ background: "none" }}>
                                                {/* <img src={article.iconImg} alt="img" style={{ width: '100px', height: 'auto', marginRight: '15px' }} /> */}
                                                <CardImg src={article.iconImg} alt="img" style={{ width: '100px', height: 'auto', marginRight: '15px' }} className="card-img" />
                                            </Card>
                                        </div>
                                        <div className="media-body">
                                            <div className="details">
                                                <div className="post-meta-single">
                                                    <h5>{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' }).replace(',', '')}</h5>
                                                </div>
                                                <h4 className="title"><a href="#"> {article.title.length > 20 ? article.title.substring(0, 20) + "..." : article.title}</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <center>
                                <div className='pb-2 pt-2' >
                                    <Button className='btn btn-dark w-50'>Load More</Button>
                                </div>
                            </center>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default TrendingNews;
