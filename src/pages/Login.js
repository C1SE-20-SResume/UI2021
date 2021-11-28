import React, { Component, useEffect, useState } from "react";
import styleLogin from "./styleLogin.css";
import { useCookies } from "react-cookie";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);
  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const toggleSignup = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#3586ff";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  };

  const toggleLogin = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#3586ff";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  };
  const onSubmitLogin = (event) => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === true) {
          setCookie("user", data.api_token);
          window.location.href = "/";
        } else {
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="form-modal">
        <div className="form-toggle">
          <button id="login-toggle" onClick={toggleLogin}>
            log in
          </button>
          <button id="signup-toggle" onClick={toggleSignup}>
            sign up
          </button>
        </div>
        <div id="login-form">
          <form onSubmit={onSubmitLogin}>
            <input
              type="text"
              placeholder="Enter email "
              name="email"
              onChange={onChangeEmail}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={onChangePassword}
            />
            <button className="btn login">login</button>
            <p>
              <a href="javascript:void(0)">Forgotten account ?</a>
            </p>
            <hr />
            <button type="button" className="btn -box-sd-effect">
              {" "}
              <i className="fa fa-google fa-lg" aria-hidden="true" /> sign in
              with google
            </button>
            <button type="button" className="btn -box-sd-effect">
              {" "}
              <i className="fa fa-linkedin fa-lg" aria-hidden="true" /> sign in
              with linkedin
            </button>
            <button type="button" className="btn -box-sd-effect">
              {" "}
              <i className="fa fa-windows fa-lg" aria-hidden="true" /> sign in
              with microsoft
            </button>
          </form>
        </div>
        <div id="signup-form">
          <form>
            <input type="text" placeholder="Enter your full name" />
            <div className="gender-div">
              <label>Male</label>
              <input type="radio"></input>
              <label>Female</label>
              <input type="radio"></input>
              <label>other</label>
              <input type="radio" defaultChecked></input>
            </div>
            <input type="email" placeholder="Enter your email" />
            <input type="number" placeholder="Enter your phone number" />
            <input type="date" placeholder="Enter your birth day" />
            <input type="password" placeholder="Create password" />
            <input type="password" placeholder="Confirm password" />
            <button type="button" className="btn signup">
              create account
            </button>
            <p>
              Clicking <strong>create account</strong> means that you are agree
              to our <a href="javascript:void(0)">terms of services</a>.
            </p>
            <hr />
            <button type="button" className="btn -box-sd-effect">
              {" "}
              <i className="fa fa-google fa-lg" aria-hidden="true" /> sign up
              with google
            </button>
            <button type="button" className="btn -box-sd-effect">
              {" "}
              <i className="fa fa-linkedin fa-lg" aria-hidden="true" /> sign up
              with linkedin
            </button>
            <button type="button" className="btn -box-sd-effect">
              {" "}
              <i className="fa fa-windows fa-lg" aria-hidden="true" /> sign up
              with microsoft
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
