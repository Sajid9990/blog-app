
import { Fragment, useState } from "react";
import { Container, FormGroup, Input, Form, Row, Col, Card, CardBody, CardHeader, Button } from "reactstrap";
import httpService from "../../../../Http/http.service";

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

  const saveArticle = async () => {
    debugger
    const result = await httpService.post("/private/article", article);
    console.log(result);

  }

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // update only changeable information of article
    setArticle({ ...article, [name]: value });
  }

  console.log(article);

  useState(() => {

  }, []);

  return (
    <Fragment>
      <div className="header bg-gradient-success pb-8 pt-5 pt-md-8 ">
        <Container>
          <Row className="justify-content-center">
            <Col className="order-xl-1" xl="11">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Add Article</h3>
                    </Col>
                    <Col className="text-right" xs="4"><i className="ni ni-satisfied"></i></Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      <i className="ni ni-caps-small text-danger"></i> Text information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="input-username">Title</label>
                            <Input className="form-control-alternative" name="title" onChange={onChangeHandler} defaultValue="" id="title" placeholder="Enter title" type="text" />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="category">Category</label>
                            <Input className="form-control-alternative" name="category" onChange={onChangeHandler} id="category" placeholder="Enter category" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="description">Description</label>
                            <Input className="form-control-alternative" name="description" onChange={onChangeHandler} id="description" placeholder="Enter description" type="textarea" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="content">Content</label>
                            <Input className="form-control-alternative" name="content" onChange={onChangeHandler} style={{ height: "200px" }} id="content" placeholder="Enter content" type="textarea" />
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
                            <Input className="form-control-alternative" name="featureImg" onChange={onChangeHandler} id="featureImg" placeholder="Enter feature image url" type="text" />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="iconImg">Icon Image</label>
                            <Input className="form-control-alternative" name="iconImg" onChange={onChangeHandler} id="iconImg" placeholder="Enter icon image url" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <Button onClick={saveArticle} className="w-25 btn btn-success">Save</Button>
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
