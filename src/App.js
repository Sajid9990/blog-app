import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from './component/headerNavbar';
import HomePage from './component/homePage';
import BlogPage from './component/blogPage';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <HeaderNavbar />
        <Routes>
          <Route path="/blog-app" exact element={<HomePage />} />
          <Route path="/read-blog/:articleId/:articleSlug" exact element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
