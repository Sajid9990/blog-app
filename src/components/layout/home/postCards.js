import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Badge } from 'reactstrap';

const posts = [
    {
        id: 4,
        imgSrc: '/blog-app/assets/img/post/18.png',
        tag: 'Tech',
        tagColor: 'danger',
        title: 'The FAA will test drone',
    },
    {
        id: 5,
        imgSrc: '/blog-app/assets/img/post/19.png',
        tag: 'Tech',
        tagColor: 'warning',
        title: 'Lifting Weights Makes Your Nervous',
    },
    {
        id: 6,
        imgSrc: '/blog-app/assets/img/post/20.png',
        tag: 'Tech',
        tagColor: 'info',
        title: 'New, Remote Weight-Loss Method',
    },
    {
        id: 7,
        imgSrc: '/blog-app/assets/img/post/21.png',
        tag: 'Tech',
        tagColor: 'success',
        title: 'Social Connection Boosts Fitness App',
    },
    {
        id: 8,
        imgSrc: '/blog-app/assets/img/post/22.png',
        tag: 'Tech',
        tagColor: 'primary',
        title: 'Internet For Things - New results',
    },
    {
        id: 8,
        imgSrc: '/blog-app/assets/img/post/22.png',
        tag: 'Tech',
        tagColor: 'primary',
        title: 'Internet For Things - New results',
    },
];

const PostCard = ({ imgSrc, tag, tagColor, title }) => (
    <Col lg="4" sm="12" className="mb-4">
        <Card className="post-card">
            <Row noGutters>
                <Col md="12">
                    <div className="thumb">
                        <CardImg top src={imgSrc} alt="Post Image" className="img-fluid" style={{ marginBottom: '15px' }} /> {/* Inline style for spacing */}
                    </div>
                </Col>
                <Col md="12 p-2">
                    <Badge color={tagColor} className="mb-2">
                        {tag}
                    </Badge>
                    <CardTitle className="title">
                        <a href="#">{title}</a>
                    </CardTitle>
                </Col>
            </Row>
        </Card>
    </Col>
);

const PostGrid = () => (
    <div className="pd-bottom-50 pt-5" id="grid">
        <Container>
            <div>
                <h2><u>Articles</u></h2>
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
