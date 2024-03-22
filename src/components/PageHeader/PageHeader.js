import React from "react";
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      {/* <div className="squares square3" /> */}
      {/* <div className="squares square4" /> */}
      {/* <div className="squares square5" /> */}
      {/* <div className="squares square6" /> */}
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Blogging Application</h1>
          <h3 className="d-none d-sm-block">
            (<span className="text-danger">Service are under development</span>)
          </h3>
          <h3>
            That Blogging Application can have lot's of articles for news , viral content, nature and lot's of content.
          </h3>
        </div>
      </Container>
    </div>
  );
}
