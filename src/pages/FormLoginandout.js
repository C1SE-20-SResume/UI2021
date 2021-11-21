import React, { Component, useEffect, useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isAlpha from "validator/lib/isAlpha";
import isMobilePhone from "validator/lib/isMobilePhone";
import isStrongPassword from "validator/lib/isStrongPassword";
import equals from "validator/lib/equals";
import isDate from "validator/lib/isDate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
function FormLoginandout() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validationMsg, setValidationMsg] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);
  const onChangeFullName = (event) => {
    const value = event.target.value;
    setFullName(value);
  };

  const onChangeBirthday = (event) => {
    const value = event.target.value;
    setBirthday(value);
  };
  const onChangePhoneNumber = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };
  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const onChangeconfirmPassword = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const validateAll = () => {
    var regexp = new RegExp(/^[^\d+]*[\d+]{0}[^\d+]*$/);

    const msg = [];
    if (isEmpty(fullName)) {
      msg.fullName = "please fill your full name !";
    } else if (!regexp.test(fullName)) {
      msg.fullName = "full name invalid !.";
    } else if (!isNaN(fullName)) {
      msg.fullName = "full name invalid !.";
    }
    if (isEmpty(phoneNumber)) {
      msg.phoneNumber = "please fill your phone number !";
    } else if (!isMobilePhone(phoneNumber, "vi-VN")) {
      msg.phoneNumber = "your phone number is incorrect !";
    }
    if (isEmpty(birthday)) {
      msg.birthday = "please fill your birthday";
    } else if (!isDate(birthday, ["DD/MM/YYYY"])) {
      msg.birthday = "format birthday is incorrect {dd/mm/yyyy}";
    }
    if (isEmpty(email)) {
      msg.email = "please fill your email  !";
    } else if (!isEmail(email)) {
      msg.email = " your email is incorrect !";
    }
    if (isEmpty(password)) {
      msg.password = "empty!";
    }
    if (!isStrongPassword(password)) {
      msg.password = "error";
      if (!isStrongPassword(confirmPassword)) {
        msg.confirmPassword = "error";
      }
    }
    // compare password and confirm password
    if (isEmpty(confirmPassword)) {
      msg.confirmPassword = "empty!";
    }
    if (!equals(password, confirmPassword)) {
      msg.confirmPassword = "password is not match !";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const Register = (e) => {
    e.preventDefault();
    const isValid = validateAll();

    if (!isValid) return;

    fetch(`https://cvtojob.tk/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: fullName,
        phone_number: phoneNumber,
        email: email,
        date_birth: birthday,
        password: password,
        gender: "f",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          toast.success(data.message);
          console.log("check:", data);
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  });

  const onSubmitLogin = (event) => {
    event.preventDefault();
    const isValid = validateAll();
    if (!isValid) return;
    fetch(`https://cvtojob.tk/api/login`, {
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
        if (data.success === true) {
          setCookie("user", data.api_token);
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={Register}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Full name"
              onChange={onChangeFullName}
            />
            <i style={{ color: "red", fontSize: "10px" }} id="msg-error">
              {validationMsg.fullName}
            </i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChangeEmail}
            />
            <i style={{ color: "red", fontSize: "10px" }} id="msg-error">
              {validationMsg.email}
            </i>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone number"
              onChange={onChangePhoneNumber}
            />
            <i style={{ color: "red", fontSize: "10px" }} id="msg-error">
              {validationMsg.phoneNumber}
            </i>
            <input
              type="date"
              name="birthday"
              placeholder="Birth day"
              onChange={onChangeBirthday}
            />
            <i style={{ color: "red", fontSize: "10px" }} id="msg-error">
              {validationMsg.birthday}
            </i>
            <div className="gender" id="gender">
              <span>Male</span>
              <input value="m" name="gender" type="radio" />
              <span>Female</span>
              <input value="f" name="gender" type="radio" />
              <span>Other</span>
              <input value="o" name="gender" type="radio" defaultChecked />
            </div>
            <input
              type="password"
              name="password"
              onChange={onChangePassword}
              placeholder="Password"
            />
            <i style={{ color: "red", fontSize: "10px" }} id="msg-error">
              {validationMsg.password}
            </i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={onChangeconfirmPassword}
            />
            <i style={{ color: "red", fontSize: "10px" }} id="msg-error">
              {validationMsg.confirmPassword}
            </i>
            <button onclick={Register}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={onSubmitLogin}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              name="email"
              onChange={onChangeEmail}
              placeholder="Email"
            />
            <i style={{ color: "red", fontSize: "10px" }} id="msg-error">
              {validationMsg.email}
            </i>
            <input
              type="password"
              name="password"
              onChange={onChangePassword}
              placeholder="Password"
            />
            <i style={{ color: "red", fontSize: "10px" }} id="msg-error">
              {validationMsg.password}
            </i>

            <a href="#">Forgot your password?</a>
            <button onClick={onSubmitLogin} type="submit">
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={onSubmitLogin}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormLoginandout;
