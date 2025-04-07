
import { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Table, CardTitle } from "reactstrap";
import httpService from "../../../../Http/http.service";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../../../common/Loader/loader";

const ArticleList = () => {
  // INITLIAZATION


  // STATES
  const [articleList, setArticleList] = useState();
  const [loader, setLoader] = useState(false);

  // HOOKS
  const navigate = useNavigate();

  const getArticles = async () => {
    setLoader(true);
    const result = await httpService.getAll("/private/articles", true);
    console.log(result);
    if (result.data.status === "SUCCESS") {
      setLoader(false);
      setArticleList(result.data.object);
    }
  }

  const editArticle = (articleObj) => {
    navigate("/admin/article/create-update", { state: { articleObj } });
  }

  const deleteArticle = async (articleObj) => {
    if (window.confirm(`Are you sure you want to delete article '${articleObj.title}' ?`)) {
      let result = await httpService.deleteById(`/private/article`, articleObj.id, true);
      if (result.data.status === "SUCCESS") {
        alert(`Article '${articleObj.title}' deleted successfully.`);
        getArticles();// refetch the list
      }
    }
  }

  const generateLatestArticle = async () => {
    setLoader(true);
    let result = await httpService.getAll("/private/latest/article");
    if (result.data.status === "SUCCESS") {
      setLoader(false);
    }
  }

  useState(() => {
    getArticles();
  }, []);

  return (
    <Fragment>
      {loader ? <Loader /> : ""}
      <div className="header bg-gradient-success pb-8 pt-5 pt-md-6 ">
        <Container className="mb-3">
          <Row>
            <Col lg="6" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Total Articles
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        {articleList?.length}
                      </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                        <i className="ni ni-collection" />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="3" xl="3">
              <Card className="card-stats mb-4 mb-xl-0">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Latest Articles
                      </CardTitle>
                    </div>
                    <Col className="col-auto">
                      <Button onClick={generateLatestArticle} size="md" color="info">Generate</Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>



        </Container>

        <Container>
          <Row className="justify-content-center">
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Article Listing</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Link className="btn btn-info" to={"/admin/article/create-update"}>Create Article</Link>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody style={{ overflow: "auto" }}>
                  <Table hover>
                    <thead>
                      <tr>
                        <th> Id </th>
                        <th> Title </th>
                        <th> Category </th>
                        {/* <th> Description </th> */}
                        {/* <th> Feature Image </th> */}
                        {/* <th> Icon Image </th> */}
                        <th> Edit </th>
                        <th> Delete </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        articleList ?
                          articleList.map((article, index) => {
                            return (
                              <Fragment key={index}>
                                <tr>
                                  <th scope="row">{article.id}</th>
                                  <td> {article.title} </td>
                                  <td> {article.category} </td>
                                  {/* <td> {article.description} </td> */}
                                  {/* <td> {article.featureImg} </td> */}
                                  {/* <td> {article.iconImg} </td> */}
                                  <td>
                                    <Button size="sm" onClick={() => editArticle(article)} className="btn btn-success">Edit</Button>
                                  </td>
                                  <td>
                                    <Button size="sm" onClick={() => deleteArticle(article)} className="btn btn-danger">Delete</Button>
                                  </td>
                                </tr>
                              </Fragment>
                            );
                          })
                          : ""
                      }

                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ArticleList;
