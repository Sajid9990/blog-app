import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const posts = [
    {
        id: 1,
        imgSrc: 'assets/img/post/15.png',
        tag: 'Tech',
        tagColor: 'purple',
        title: 'Why Are the Offspring of Older',
    },
    {
        id: 2,
        imgSrc: 'assets/img/post/16.png',
        tag: 'Tech',
        tagColor: 'green',
        title: 'People Who Eat a Late Dinner May',
    },
    {
        id: 3,
        imgSrc: 'assets/img/post/17.png',
        tag: 'Tech',
        tagColor: 'red',
        title: 'Kids eat more calories in',
    },
    {
        id: 4,
        imgSrc: 'assets/img/post/18.png',
        tag: 'Tech',
        tagColor: 'purple',
        title: 'The FAA will test drone',
    },
    {
        id: 5,
        imgSrc: 'assets/img/post/19.png',
        tag: 'Tech',
        tagColor: 'red',
        title: 'Lifting Weights Makes Your Nervous',
    },
    {
        id: 6,
        imgSrc: 'assets/img/post/20.png',
        tag: 'Tech',
        tagColor: 'blue',
        title: 'New, Remote Weight-Loss Method',
    },
    {
        id: 7,
        imgSrc: 'assets/img/post/21.png',
        tag: 'Tech',
        tagColor: 'light-green',
        title: 'Social Connection Boosts Fitness App',
    },
    {
        id: 8,
        imgSrc: 'assets/img/post/22.png',
        tag: 'Tech',
        tagColor: 'blue',
        title: 'Internet For Things - New results',
    },
];

const PostCard = ({ imgSrc, tag, tagColor, date, title }) => (
    <Col lg="3" sm="6">
        <Card className="single-post-wrap style-overlay">
            <div className="thumb">
                <CardImg top src={imgSrc} alt="img" />
                <a className={`tag-base tag-${tagColor}`} href="#">
                    {tag}
                </a>
            </div>
            <CardBody className="details">
                <CardTitle className="title">
                    <a href="#">{title}</a>
                </CardTitle>
            </CardBody>
        </Card>
    </Col>
);

const PostGrid = () => (
    <div className="pd-bottom-50 pt-5" id="grid">
        <Container>
            <div className="section-title">
                <h6 className="title"><u>Top Article</u></h6>
            </div>
        </Container>
        <Container>
            <Row>
                {posts.map(post => (
                    <PostCard key={post.id} {...post} />
                ))}
            </Row>
        </Container>
    </div>
);

export default PostGrid;
