import React, { useState } from 'react';
import './login.css';

import httpService from '../../../Http/http.service';

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
      window.location.reload(true)
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
    </div>
  );
};

export default LoginPage;
