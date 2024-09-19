import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/layout/home/home';
import Admin from './components/layout/admin/admin';
import Error400 from './components/errors/404_Error';
import LoginPage from './components/layout/authentication/login/login.js';
import SignupPage from './components/layout/authentication/signup/signupPage';
import BlogPage from './components/layout/blog/blog';

function App() {
  let token = localStorage.getItem("token");
  return (
    // <BrowserRouter basename='/blog-app'>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin/*" element={token ? <Admin /> : <LoginPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/public/blog" element={<BlogPage />} />
        <Route path="*" element={<Error400 />} />
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
