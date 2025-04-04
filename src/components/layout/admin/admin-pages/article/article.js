
import { Fragment, useEffect, useState } from "react";
import { Container, FormGroup, Input, Form, Row, Col, Card, CardBody, CardHeader, Button, CardTitle } from "reactstrap";
import httpService from "../../../../Http/http.service";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TextEditor from "./../../../../../common/editor";
import "./article.css";
import Loader from "../../../../../common/Loader/loader";
import { invalid } from "moment";

const Article = () => {
  // INITLIAZATION
  // article object initalization
  const articleInit = {
    title: "",
    category: "",
    description: "",
    content: "",
    featureImg: "",
    iconImg: ""
  };

  // STATES
  const [article, setArticle] = useState(articleInit);
  const [loader, setLoader] = useState(false);

  // HOOKS
  const location = useLocation();
  const navigate = useNavigate();

  // ACCESS GLOBAL DATA
  const { articleObj } = location.state || { undefined };

  const saveArticle = async (e) => {
    e.preventDefault();
    setLoader(true);
    let result;
    if (!articleObj?.title) {
      result = await httpService.post(`/private/article`, article, true);
    } else {
      result = await httpService.put(`/private/article`, article.id, article, true);
    }
    if (result.data.status === "SUCCESS") {
      setLoader(false);
      // if update or save successfully then redireact to article list page
      setArticle(result.data.status.object);
      navigate("/admin/article");
    }
  }

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // update only changeable information of article
    setArticle({ ...article, [name]: value });
  }

  function pushEditorValue(value) {
    setArticle({ ...article, ["content"]: value })
  }

  useEffect(() => {
    if (articleObj) {
      setArticle(articleObj);
    }
  }, []);

  return (
    <Fragment>
      {loader ? <Loader /> : ""}
      <div className="header bg-gradient-success pb-8 pt-5 pt-md-8 ">
        <Container>
          <Row className="justify-content-center">
            <Col className="order-xl-1" xl="11">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">{articleObj?.title ? `Update Article` : `Create Article`}</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      {
                        article?.title ?
                          (
                            <h3 className="mb-0">{`${articleObj?.id}`}</h3>
                          ) :
                          <i className="ni ni-satisfied"></i>
                      }
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={saveArticle}>
                    <h6 className="heading-small text-muted mb-4">
                      <i className="ni ni-caps-small text-danger"></i> Text information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="input-username">Title</label>
                            <Input className="form-control-alternative" name="title" value={article?.title} onChange={onChangeHandler} defaultValue="" id="title" placeholder="Enter title" type="text" required />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="category">Category</label>
                            <Input className="form-control-alternative" name="category" value={article?.category} onChange={onChangeHandler} id="category" placeholder="Enter category" type="text" required />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="description">Description</label>
                            <Input className="form-control-alternative" name="description" value={article?.description} onChange={onChangeHandler} id="description" placeholder="Enter description" type="textarea" required />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="content">Content</label>
                            <TextEditor key={1} width={undefined} height={300} content={article?.content} pushEditorValue={pushEditorValue} isCTA={false} required />
                            {/* <Input className="form-control-alternative" name="content" value={article?.content} onChange={onChangeHandler} style={{ height: "200px" }} id="content" placeholder="Enter content" type="textarea" /> */}
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      <i className="ni ni-world-2 text-danger"></i> Image information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="featureImg">feature Image</label>
                            <Input className="form-control-alternative" name="featureImg" value={article?.featureImg} onChange={onChangeHandler} id="featureImg" placeholder="Enter feature image url" type="text" required />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="iconImg">Icon Image</label>
                            <Input className="form-control-alternative" name="iconImg" value={article?.iconImg} onChange={onChangeHandler} id="iconImg" placeholder="Enter icon image url" type="text" required />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <Row>
                      <Col className="d-flex justify-content-start">
                        <Button className="btn btn-success w-25" >{articleObj?.title ? `Update` : `Create`}</Button>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <Link to={"/admin/article"} className="btn btn-info">Back</Link>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Article;
