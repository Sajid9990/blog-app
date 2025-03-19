import React, { useState } from 'react';
import './login.css';

import httpService from '../../../Http/http.service';
import { Button } from 'reactstrap';
import axios from 'axios';

const LoginPage = () => {
  const [dataForm, setDataForm] = useState({
    userName: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await httpService.post("/public/signin", dataForm);
    if (response.data.status == "SUCCESS") {
      let data = response.data;
      localStorage.setItem("token", data.token)
      // alert("login success");
      window.location.reload()
    } else {
      alert("invalid credential !!!!")
    }
  };

  const handleChange = (e) => {
    let target = e.target;
    setDataForm({
      ...dataForm,
      [target.name]: target.value
    })
  }



  const requestAuthCode = () => {
    const CLIENT_ID = "533677761589-j3f0at18mkv5mvt5cr4tl7ks8m49ijpd.apps.googleusercontent.com";
    const REDIRECT_URI = "http://127.0.0.1:3000/blog-app/public/auth/code";
    const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
    const SCOPE = "openid email profile";  // Adjust as needed

    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: "code",
      scope: SCOPE,
      access_type: "offline", // Use "offline" if you need a refresh token
      state: "random_string", // Optional, for security
    });
    const uri = `${AUTH_URL}?${params.toString()}`;
    console.log(uri);

    window.location.href = `${AUTH_URL}?${params.toString()}`;

  }

  return (
    <div className={`login-container show`}>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="userName" value={dataForm.userName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={dataForm.password} onChange={handleChange} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        <Button className='btn btn-success' onClick={requestAuthCode}>Login With</Button>
      </div>
    </div>
  );
};

export default LoginPage;
