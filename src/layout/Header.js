import React, { useEffect } from "react";
import logo from "../images/logo.png";
import slider from "../images/sliderhome/slideimage1.jpg";
import img3 from "../images/how-it-work/img3.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter,
} from "react-router-dom";

function Header() {
  useEffect(() => {
    let click = document.querySelector(".click");

    let list = document.querySelector(".list");

    click.addEventListener("click", () => {
      list.classList.toggle("newlist");
    });
  });

  return (
    <BrowserRouter>
      <div className="header">
        <div className="navigation">
          <img className="logo-company" src={logo} />
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link id="link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              {" "}
              <Link to="/joblist" id="link">
                Job
              </Link>
            </li>
            <li className="nav-menu-item">Quiz Test</li>
            <li className="nav-menu-item">
              {" "}
              <Link id="link">Contact</Link>
            </li>
          </ul>
          <div class="container3 ">
            <button class="click">
              <img
                src={img3}
                style={({ width: "50px" }, { height: "50px" })}
                className="avt-pro"
              ></img>
              <span className="name-account">Candidate</span>
            </button>

            <div class="list">
              <button class="links">
                <ion-icon name="person" style={{ color: "white" }}></ion-icon>{" "}
                Profile
              </button>

              <button class="links">
                <ion-icon style={{ color: "white" }} name="log-out"></ion-icon>{" "}
                Log Out
              </button>
            </div>
          </div>

          {/* <Link id="link" to="/">
            <div className="nav-function-login-reg">
              <div>Login</div>
            </div>
          </Link> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Header;
