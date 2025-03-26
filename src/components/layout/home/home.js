// reactstrap components
import React, { useEffect } from "react";
import BannerArea from "./bannerArea";
import CommonNavbar from "../../common/Navbar/commonNavbar";
import TrendingSection from "./trendingSection";
import PostCard from "./postCards";
import Footer from "./footer.js";
import axios from "axios";


const Home = () => {
  async function callAPiTestByGithub() {
    debugger
    // const url = "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/Sajid9990/blog-app/tree/main/public/assets/article_1.json";
    const url = "https://raw.githubusercontent.com/Sajid9990/blog-app/tree/main/public/assets/article_1.json";
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let abc = await res.json();
    console.log(abc);


  }
  useEffect(() => {
    callAPiTestByGithub();
  }, [])

  return (
    <React.Fragment>
      {/* <HomeHeader /> */}
      <CommonNavbar />
      <TrendingSection />
      <BannerArea />
      <PostCard />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
