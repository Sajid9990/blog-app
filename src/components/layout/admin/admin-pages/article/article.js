
import { Fragment, useState } from "react";
import { Badge, Button, Container, FormGroup, Input, Label, Form, FormText, Row, Col, Card } from "reactstrap";

const Article = () => {
  return (
    <Fragment>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 ">
        <Container fluid>
          <h1>
            <Badge className="bg-dark">
              ADD ARTICLE
            </Badge>
          </h1>

          <section className="p-4">
            {/* <Card className="p-4"> */}
              <Form>
                <Row style={{ color: "black" }}>
                  <Col>
                    <FormGroup>
                      <Label for="title">Title</Label>
                      <Input id="title" name="title" placeholder="enter title" type="text" required />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="description">Description</Label>
                      <Input id="description" name="description" placeholder="enter description" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row style={{ color: "white" }}>
                  <Col>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <textarea id="body" name="body" placeholder="enter body" type="text" required></textarea>
                    </FormGroup>
                  </Col>
                </Row>
                <Button style={{ width: "10%" }}>Submit</Button>
              </Form>
            {/* </Card> */}
          </section>

        </Container>
      </div>
    </Fragment>
  );
};

export default Article;
