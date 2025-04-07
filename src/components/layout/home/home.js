// reactstrap components
import React, { Fragment, useEffect, useState } from "react";
import BannerArea from "./bannerArea";
import CommonNavbar from "../../common/Navbar/commonNavbar";
import TrendingSection from "./trendingSection";
import Footer from "./footer.js";
import axios from "axios";
import Loader from "../../../common/Loader/loader.js";
import "./home.css";

const Home = () => {
  const [data, setData] = useState();

  const getLatestArticle = async () => {
    // const url = `${process.env.PUBLIC_URL}/assets/latest_article.json?unique=${Math.random()}`;
    const url = `${process.env.PUBLIC_URL}/assets/latest_article.json?ts=${Date.now()}`;
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
       <div className="main-container">
         <Fragment>
          {/* <HomeHeader /> */}
          <CommonNavbar />
          <TrendingSection latestArticle={data} />
          <BannerArea latestArticle={data} />
          <Footer />
        </Fragment>
       </div>
      ) : <Loader />}

    </React.Fragment>
  );
};

export default Home;
