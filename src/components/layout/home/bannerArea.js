import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, Badge, } from 'reactstrap';
import './BannerArea.css'; // Import the CSS file
import { CommonNavigations } from "../../../common/navigations.js";

const BannerArea = (props) => {
  const [latestArticle, setLatestArticle] = useState(props.latestArticle);
  const [randomArticles, setRandomArticles] = useState([]);
  const { redireactToBlogPage } = CommonNavigations();

  useEffect(() => {
    const shuffleArticles = () => {
      let tempArray = [];
      let availableArticles = [...latestArticle]; // Copy of the latestArticle array
      for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * availableArticles.length);
        const randomArticle = availableArticles[randomIndex];
        tempArray.push(randomArticle);
        // Remove the selected article to ensure uniqueness
        availableArticles.splice(randomIndex, 1);
      }
      setRandomArticles(tempArray);
    };
    shuffleArticles();
  }, []);

  return (
    <div>
      <div className="py-1 pt-4 banner" id="banner">
        <Container>
          <div>
            <h2 style={{ color: "white" }}>Most Viewed Articles</h2>
          </div>
        </Container>

        <Container className="mt-3">
          <Row>
            {
              randomArticles.length > 0 ?
                randomArticles.map((article, index) => {
                  return (
                    <Fragment>
                      <Col style={{ cursor: "pointer" }} key={index} lg="3" sm="6" className="mb-4" onClick={(e) => redireactToBlogPage(e, article)}>
                        <Card className="single-post-wrap shadow-sm" style={{ background: "none" }}>
                          <CardImg top src={article.iconImg} alt="Post" className="card-img" />
                          <Badge className="badge-custom bg-primary text-light">{article.category}</Badge>
                          <CardBody>
                            <CardTitle tag="h5" className="card-title text-light">
                              {article.title.length > 20 ? article.title.substring(0, 20) + "..." : article.title}
                            </CardTitle>
                          </CardBody>
                        </Card>
                      </Col>
                    </Fragment>
                  );
                })
                : ""
            }
          </Row>
          <center className='pb-4'>
            <button className='btn btn-dark w-auto'>Load More</button>
          </center>
        </Container>
      </div>

      <div className="pd-bottom-50 pt-5" id="grid">
        <Container>
          <div>
            <h2>Most Like Articles</h2>
          </div>
        </Container>
        <Container>
          <Row>
            {
              latestArticle ?
                latestArticle.slice(0, 8).map((article, index) => {
                  return (
                    <Col style={{ cursor: "pointer" }} key={index} lg="3" sm="12" className="mb-4" onClick={(e) => redireactToBlogPage(e, article)}>
                      <Card className="post-card">
                        <Row noGutters>
                          <Col md="12">
                            <div className="thumb">
                              <Card className="single-post-wrap shadow-sm" style={{ background: "none" }}>
                                <CardImg top src={article.iconImg} alt="Post" className="card-img" />
                              </Card>
                            </div>
                          </Col>
                          <Col md="12 p-2">
                            <Badge color={"danger"} className="mb-2">
                              {article.category}
                            </Badge>
                            <CardTitle className="title text-dark">
                              {article.title.length > 18 ? article.title.substring(0, 18) + "..." : article.title}
                            </CardTitle>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  )
                })
                : ""
            }
          </Row>
          <center className='pb-4'>
            <button className='btn btn-dark w-auto'>Load More</button>
          </center>
        </Container>
      </div>
    </div>
  );
};

export default BannerArea;
