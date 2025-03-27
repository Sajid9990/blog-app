import { BrowserRouter, HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/layout/home/home';
import Admin from './components/layout/admin/admin';
import Error400 from './components/errors/404_Error';
import LoginPage from './components/layout/authentication/login/login.js';
import SignupPage from './components/layout/authentication/signup/signupPage';
import BlogPage from './components/layout/blog/blog';
import SingUpWithGoogle from './components/layout/authentication/signup/withGoogle.js';
import Article from './components/layout/admin/admin-pages/article/article.js';
import { isTokenExpaire } from './common/manageSession.js';
import Profile from './components/layout/admin/admin-pages/Profile.js';

function App() {
  let token = localStorage.getItem("token");
  if (token) {
    isTokenExpaire(token);
  }
  return (
    /** Using BrowserRouter */
    // <BrowserRouter basename='/blog-app'>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/admin/*" element={token ? <Admin /> : <LoginPage />} />
    //     <Route path="/auth/login" element={token ? <Admin /> : <LoginPage />} />
    //     <Route path="/auth/signup" element={<SignupPage />} />
    //     <Route path="/public/blog" element={<BlogPage />} />
    //     <Route path="/public/auth/code" element={<SingUpWithGoogle />} />
    //     <Route path="/admin/article/create-update" element={token ? <Article /> : <LoginPage />} />
    //     <Route path="/admin/user-profile" element={token ? <Profile /> : <LoginPage />} />
    //     {/* <Route path="*" element={<Error400 />} /> */}
    //   </Routes>
    // </BrowserRouter>


    /** Using HashRouter */
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin/*" element={token ? <Admin /> : <LoginPage />} />
        <Route path="/auth/login" element={token ? <Admin /> : <LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/public/blog" element={<BlogPage />} />
        <Route path="/public/auth/code" element={<SingUpWithGoogle />} />
        <Route path="/admin/article/create-update" element={token ? <Article /> : <LoginPage />} />
        <Route path="/admin/user-profile" element={token ? <Profile /> : <LoginPage />} />
        {/* <Route path="*" element={<Error400 />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
