import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from './component/common/header-navbar/headerNavbar';
import HomePage from './component/home-page/homePage';
import BlogPage from './component/blog-page/blogPage';
import AboutUs from './component/about-page/aboutUs';
import FooterNavbar from './component/common/footer-navbar/footerNavbar';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <HeaderNavbar />
        <Routes>
          <Route path="/blog-app" exact element={<HomePage />} />
          <Route path="/read-blog/:articleId/:articleSlug" element={<BlogPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <FooterNavbar />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
