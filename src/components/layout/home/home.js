// reactstrap components
import React, { Fragment, useEffect, useState } from "react";
import BannerArea from "./bannerArea";
import CommonNavbar from "../../common/Navbar/commonNavbar";
import TrendingSection from "./trendingSection";
import Footer from "./footer.js";
import axios from "axios";
import Loader from "../../../common/Loader/loader.js";
import "./home.css";
import httpService from "../../../common/Http/http.service.js";

const Home = () => {
  const [data, setData] = useState();

  const getLatestArticle = async () => {
    const url = `/public/latest/articles?page=${0}&size=${10}`;
    let result = await httpService.getAll(url);
    if (result.status === 200 && result.data.status === "SUCCESS") {
      setData(result.data.object.content);
    }
  }

  useEffect(() => {
    getLatestArticle();
  }, []);


  return (
    <React.Fragment>
      {data ? (
        <div className="main-container">
          <Fragment>
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
