import React from 'react';
import { Container, Row, Col, Carousel, CarouselItem, CarouselIndicators, Button } from 'reactstrap';
import "./trending.css"; 
const TrendingNews = () => {
    const trendingItems = [
        {
            imgSrc: 'https://storage.googleapis.com/thefactmagic-stg/assets/imageupload/200-foot-giant-bunny_1200x627_ci2jpg1691565470378.webp',
            date: 'December 26, 2018',
            title: 'The FAA will test drone',
        },
        {
            imgSrc: 'https://storage.googleapis.com/thefactmagic-stg/assets/imageupload/iceland-parliament_1200x627_ci2jpg1685017525151.webp',
            date: 'December 26, 2018',
            title: 'Flight schedule and quarantine',
        },
        {
            imgSrc: 'https://storage.googleapis.com/thefactmagic-stg/assets/imageupload/salar-de-uyuni_1200x627_ci2jpg1684578939082.webp',
            date: 'December 26, 2018',
            title: 'Indore bags cleanest city',
        },
        {
            imgSrc: 'https://storage.googleapis.com/thefactmagic-stg/assets/imageupload/squirrel-dischromatic_1200x627_ci2jpg1684326320566.webp',
            date: 'December 26, 2018',
            title: 'The FAA will test drone',
        },
        {
            imgSrc: 'https://storage.googleapis.com/thefactmagic-stg/assets/imageupload/200-foot-giant-bunny_1200x627_ci2jpg1691565470378.webp',
            date: 'December 26, 2018',
            title: 'The FAA will test drone',
        },
        {
            imgSrc: 'https://storage.googleapis.com/thefactmagic-stg/assets/imageupload/iceland-parliament_1200x627_ci2jpg1685017525151.webp',
            date: 'December 26, 2018',
            title: 'Flight schedule and quarantine',
        },
        {
            imgSrc: 'https://storage.googleapis.com/thefactmagic-stg/assets/imageupload/salar-de-uyuni_1200x627_ci2jpg1684578939082.webp',
            date: 'December 26, 2018',
            title: 'Indore bags cleanest city',
        },
        {
            imgSrc: 'https://storage.googleapis.com/thefactmagic-stg/assets/imageupload/squirrel-dischromatic_1200x627_ci2jpg1684326320566.webp',
            date: 'December 26, 2018',
            title: 'The FAA will test drone',
        },
    ];

    const additionalArticles = [
        {
            imgSrc: '/blog-app/assets/img/post/list/1.png',
            date: '08.22.2020',
            title: 'Himachal Pradesh rules in order to allow tourists',
        },
        {
            imgSrc: '/blog-app/assets/img/post/list/2.png',
            date: '08.22.2020',
            title: 'Online registration, booking for Vaishno Devi',
        },
        {
            imgSrc: '/blog-app/assets/img/post/list/3.png',
            date: '08.22.2020',
            title: 'Detecting technologies in airports this year',
        },
        {
            imgSrc: '/blog-app/assets/img/post/list/2.png',
            date: '08.22.2020',
            title: 'Online registration, booking for Vaishno Devi',
        },
        {
            imgSrc: '/blog-app/assets/img/post/list/3.png',
            date: '08.22.2020',
            title: 'Detecting technologies in airports this year',
        },
        {
            imgSrc: '/blog-app/assets/img/post/list/2.png',
            date: '08.22.2020',
            title: 'Online registration, booking for Vaishno Devi',
        },
        {
            imgSrc: '/blog-app/assets/img/post/list/3.png',
            date: '08.22.2020',
            title: 'Detecting technologies in airports this year',
        }
    ];

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === trendingItems.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? trendingItems.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = trendingItems.map((item, index) => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}
        >
            <div className="trending-post">
                <div className="single-post-wrap style-overlay" style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
                    <div className="thumb" style={{ width: '100%', height: '100%' }}>
                        <img src={item.imgSrc} alt="img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="details element" style={{ width:"100%",position: 'absolute', bottom: '80%',paddingLeft:"10px", color: '#fff' }}>
                        <div className="post-meta-single">
                            <p style={{ fontSize: '14px',color: '#fff' }}>
                                <i class="ni ni-clock" aria-hidden="true"></i>
                                {item.date}</p>
                        </div>
                        <h6 className="title" style={{ fontSize: '18px' }}><a href="#" style={{ color: '#fff' }}>{item.title}</a></h6>
                    </div>
                </div>
            </div>
        </CarouselItem>
    ));

    return (
        <div className="post-area pd-top-50 py-5" id="trending">
            <Container>
                <Row>
                    <Col lg="8">
                        <div>
                            <h2><u>Trending News</u></h2>
                        </div>

                        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                            <CarouselIndicators items={trendingItems} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                            <Button
                                className="carousel-control-prev"
                                onClick={previous}
                                style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </Button>
                            <Button
                                className="carousel-control-next"
                                onClick={next}
                                style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </Button>
                        </Carousel>
                    </Col>
                    <Col lg="4">
                        <div>
                            <h2><u>Latest Articles</u></h2>
                        </div>

                        <div style={{ height: '500px', overflowY: 'auto', paddingRight: '0' }}>
                            {additionalArticles.map((article, index) => (
                                <div key={index} className="single-post-list-wrap" style={{ marginBottom: '20px' }}>
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={article.imgSrc} alt="img" style={{ width: '100px', height: 'auto', marginRight: '15px' }} />
                                        </div>
                                        <div className="media-body">
                                            <div className="details">
                                                <div className="post-meta-single">
                                                    <h5> <i className="fa fa-clock-o"></i>{article.date}</h5>
                                                </div>
                                                <h4 className="title"><a href="#">{article.title}</a></h4>
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
