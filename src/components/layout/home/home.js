// reactstrap components
import React, { Fragment, useEffect, useState } from "react";
import BannerArea from "./bannerArea";
import CommonNavbar from "../../common/Navbar/commonNavbar";
import TrendingSection from "./trendingSection";
import Footer from "./footer.js";
import axios from "axios";
import Loader from "../../../common/Loader/loader.js";
import { Container } from "reactstrap";


const Home = () => {
  const [data, setData] = useState();

  const getLatestArticle = async () => {
    const url = `${process.env.PUBLIC_URL}/assets/latest_article.json`;
    const res = await axios(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let result = JSON.parse(res.data);
    setData(result)
  }

  useEffect(() => {
    getLatestArticle();
  }, []);


  return (
    <React.Fragment>
      {data ? (
       <Container>
         <Fragment>
          {/* <HomeHeader /> */}
          <CommonNavbar />
          <TrendingSection latestArticle={data} />
          <BannerArea latestArticle={data} />
          <Footer />
        </Fragment>
       </Container>
      ) : <Loader />}

    </React.Fragment>
  );
};

export default Home;
