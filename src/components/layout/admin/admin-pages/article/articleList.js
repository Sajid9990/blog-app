
import { Fragment, useState } from "react";
import { Container, FormGroup, Input, Form, Row, Col, Card, CardBody, CardHeader, Button, Table } from "reactstrap";
import httpService from "../../../../Http/http.service";
import { Link } from "react-router-dom";

const ArticleList = () => {
  // INITLIAZATION


  // STATES
  const [articleList, setArticleList] = useState();

  const getArticles = async () => {
    debugger
    const result = await httpService.getAll("/private/articles");
    console.log(result);
    if (result.data.status == "SUCCESS") {
      setArticleList(result.data.object);
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
                      <Link size="md" className="btn btn-info w-50" to={"/admin/article/add"}>Add Article</Link>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
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
                          articleList.map((data, index) => {
                            return (
                              <Fragment key={index}>
                                <tr>
                                  <th scope="row"> 1 </th>
                                  <td> {data.title} </td>
                                  <td> {data.category} </td>
                                  <td> {data.description} </td>
                                  <td> {data.content} </td>
                                  <td> {data.featureImg} </td>
                                  <td> {data.iconImg} </td>
                                  <td> <Button size="sm" className="btn btn-success">Edit</Button> </td>
                                  <td> <Button size="sm" className="btn btn-danger">Delete</Button> </td>
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
