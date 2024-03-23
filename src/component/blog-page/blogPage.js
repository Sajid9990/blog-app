import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function BlogPage() {
    const [articleInfo, setArticleInfo] = useState("");

    let { articleId, articleSlug } = useParams();
    articleId = articleId.split("mazingbytes")[1];

    function replaceToken(item) {
        if (item.content.includes("{@@adtoken.")) {

            var adtoken = item.content.split("{@@adtoken.");
            const options = [];
            for (var i = 0; i < adtoken.length; i++) {
                options.push(adtoken[i].split("@@}"));
            }

            var ids = [];
            for (var i = 0; i < options.length; i++) {
                let idVal = parseInt(adtoken[i].split(","));
                if (String(idVal) != "NaN") {
                    ids.push(idVal);
                }
            }

            var tokenBody = item.content;
            for (var j = 0; j < ids.length; j++) {
                tokenBody = tokenBody.replace("{@@adtoken." + ids[j] + "@@}", `<span></span>`);
            }
            return tokenBody;
        }
        return null;
    }

    const getArticleInfo = async () => {
        const response = await axios.get(`https://api.thefactmagic.com/articles/${articleId}/Vivo`);
        if (response.status == 200) {
            let removedTokenBody = replaceToken(response.data);
            response.data.content = removedTokenBody;
            setArticleInfo(response.data);
        }

    }

    useEffect(() => {
        getArticleInfo();
    }, [])


    console.log(articleInfo);


    return (
        <Fragment>
            <Container>
                <Row className='mt-3'>
                    <Col md={6}>

                        <img style={{ width: "100%" }} src={articleInfo.feature_image} />
                    </Col>
                    <Col md={6} className='mt-4'>
                        <h1 style={{ fontSize: "80px" }}>{articleInfo.title}</h1>
                        <h3 className='mt-5 mb-3'>
                            {articleInfo.description}
                        </h3>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <div dangerouslySetInnerHTML={{ __html: articleInfo.content }}></div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default BlogPage;
