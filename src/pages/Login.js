import React, { Component, useEffect, useState } from "react";
import styleLogin from "./styleLogin.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
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
          toast.success(data.message);
        } else {
          toast.error(data.message + ": Please check your Email or Password");
        }
      })
      .catch((err) => console.log(err));
  };

  const { register, handleSubmit, errors, getValues } = useForm();
  const [showPass, setShowPass] = useState(false);
  const [passType, setPassType] = useState("password");
  useEffect(() => {
    if (showPass) {
      setPassType("text");
      return;
    }
    setPassType("password");
  }, [showPass]);
  const onSubmit = (data) => {
    console.log(data);
    fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: data.fullName,
        phone_number: data.number,
        email: data.emailRegister,
        date_birth: data.date,
        password: data.passwordRegister,
        gender: data.gender,
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
          </form>
        </div>
        <div id="signup-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Enter your full name"
              ref={register({
                required: "User is required",
                minLength: {
                  value: 2,
                  message: "full name should not  be less than 2 characters",
                },
              })}
              name="fullName"
            />
            {errors.fullName && (
              <span id="errors-msg-register">
                <ion-icon id="errors-msg-register" name="warning"></ion-icon>{" "}
                {errors.fullName?.message}
              </span>
            )}

            <select
              name="gender"
              ref={register({ required: "gender is required" })}
            >
              <option value="">Gender</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
              <option value="o">Other</option>
            </select>
            {errors.gender && (
              <span id="errors-msg-register">
                <ion-icon id="errors-msg-register" name="warning"></ion-icon>
                {errors.gender?.message}
              </span>
            )}
            <input
              ref={register({
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email invalid (abc@xyz.qwe) ",
                },
              })}
              type="email"
              name="emailRegister"
              placeholder="Enter your email"
            />
            {errors.emailRegister && (
              <span id="errors-msg-register">
                <ion-icon id="errors-msg-register" name="warning"></ion-icon>
                {errors.emailRegister?.message}
              </span>
            )}
            <input
              ref={register({
                required: "Number phone is required",
                minLength: {
                  value: 10,
                  message: "number phone shouldn't be less than 10",
                },
              })}
              type="number"
              name="number"
              placeholder="Enter your phone number"
            />
            {errors.number && (
              <span id="errors-msg-register">
                <ion-icon id="errors-msg-register" name="warning"></ion-icon>{" "}
                {errors.number?.message}
              </span>
            )}

            <input
              ref={register({ required: "Birthday is required" })}
              name="date"
              type="date"
              placeholder="Enter your birth day"
            />
            {errors.date && (
              <span id="errors-msg-register">
                {" "}
                <ion-icon
                  id="errors-msg-register"
                  name="warning"
                ></ion-icon>{" "}
                {errors.date?.message}
              </span>
            )}

            <input
              ref={register({
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password shouldn't be shorter than 8 characters",
                },
              })}
              name="passwordRegister"
              type={passType}
              placeholder="Create password"
            />
            {errors.passwordRegister && (
              <span id="errors-msg-register">
                <ion-icon id="errors-msg-register" name="warning"></ion-icon>
                {errors.passwordRegister?.message}
              </span>
            )}

            <input
              ref={register({
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password shouldn't be shorter than 8 characters",
                },
                validate: {
                  checkPasswordConfirmtionHandler: (value) => {
                    const { passwordRegister } = getValues();
                    return (
                      passwordRegister === value || "Passwords do not match"
                    );
                  },
                },
              })}
              type={passType}
              placeholder="Confirm password"
              name="Confirmpassword"
            />
            {errors.Confirmpassword && (
              <span id="errors-msg-register">
                <ion-icon id="errors-msg-register" name="warning"></ion-icon>
                {errors.Confirmpassword?.message}
              </span>
            )}

            <div className="showpassword">
              <input
                name="passType"
                type="checkbox"
                id="passType"
                checked={showPass}
                onChange={() => setShowPass((prev) => !prev)}
              />
              <label id="label-showpass" htmlFor="passType">
                {showPass ? "Hide password" : "Show password"}
              </label>
            </div>

            <button ref={register} type="submit" className="btn signup">
              create account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
