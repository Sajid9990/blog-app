
import { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Table } from "reactstrap";
import httpService from "../../../../Http/http.service";
import { Link, useNavigate } from "react-router-dom";

const ArticleList = () => {
  // INITLIAZATION


  // STATES
  const [articleList, setArticleList] = useState();

  // HOOKS
  const navigate = useNavigate();

  const getArticles = async () => {
    debugger
    const result = await httpService.getAll("/private/articles");
    console.log(result);
    if (result.data.status == "SUCCESS") {
      setArticleList(result.data.object);
    }
  }

  const editArticle = (articleObj) => {
    navigate("/admin/article/create-update", { state: { articleObj } });
  }

  const deleteArticle = async (articleObj) => {
    debugger
    if (window.confirm(`Are you sure you want to delete article '${articleObj.title}' ?`)) {
      let result = await httpService.deleteById(`/private/article`, articleObj.id);
      if (result.data.status === "SUCCESS") {
        alert(`Article '${articleObj.title}' deleted successfully.`);
        getArticles();// refetch the list
      }
    }
  }

  useState(() => {
    getArticles();
  }, []);

  return (
    <Fragment>
      <div className="header bg-gradient-success pb-8 pt-5 pt-md-8 ">
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
                      <Link className="btn btn-info" to={"/admin/article/create-update"}>Add Article</Link>
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
                        <th> Description </th>
                        <th> Feature Image </th>
                        <th> Icon Image </th>
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
                                  <td> {article.description} </td>
                                  <td> {article.featureImg} </td>
                                  <td> {article.iconImg} </td>
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
