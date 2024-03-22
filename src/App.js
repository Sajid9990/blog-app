import { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from './component/headerNavbar';
import HomePage from './component/homePage';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <HeaderNavbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
