// import React from 'react';
import { CardImg, Container } from 'reactstrap';
import './blog.css';
import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import httpService from '../../Http/http.service';
import Loader from '../../../common/Loader/loader';
// import axios from 'axios';

const BlogPage = () => {
    const [article, setArticle] = useState("");
    const [loader, setLoader] = useState(false);

    const location = useLocation();

    const fetchArticleById = async (articleId) => {
        const result = await httpService.getById(`/public/article`, articleId);
        if (result.data.status === "SUCCESS" && result.status === 200) {
            setArticle(result.data.object);
        }
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const articleId = queryParams.get("article_id");
        if (articleId) {
            fetchArticleById(articleId);
        }
    }, []);

    return (
        <Fragment>
            {loader ? <Loader /> : ""}
            <div className="main-container-blog">
                <Container className="p-2">
                    <h1 className="text-center blog-title">{article.title}</h1>
                    <h3 className="text-center blog-description">{article.description}</h3>
                    <center>
                        <CardImg className='blog-image' alt="image..." src={`${article.featureImg ? article.featureImg : process.env.PUBLIC_URL + "/default_img.jpg"}`} />
                    </center>
                    <div className='blog-content' dangerouslySetInnerHTML={{ __html: article.content }} />
                </Container>
            </div>
        </Fragment>

    );
};

export default BlogPage;
