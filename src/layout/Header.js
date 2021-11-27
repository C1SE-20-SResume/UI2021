import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import slider from "../images/sliderhome/slideimage1.jpg";
import img3 from "../images/how-it-work/img3.png";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/logout?api_token=${cookies.user}`, {
      method: "POST",
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setCookie("user", data.api_token);
          removeCookie("user");

          window.location.reload();
          console.log("check", data);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("m chua dang nhap");
      });
  };

  const [listUsers, setListUser] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/popularjob`)
      .then((res) => res.json())
      .then((data) => {
        setListUser(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // ----------------show user-----------------
  const [userRole, setUserRole] = useState([]);
  useEffect(() => {
    if (cookies.user) {
      fetch(`${process.env.REACT_APP_API_URL}/user?api_token=${cookies.user}`)
        .then((res) => (res.status === 200 ? res.json() : removeCookie("user")))
        .then((data) => {
          setUserRole(data);
        })
        .catch((err) => console.log(err));
    }
  }, [cookies.user]);

  return (
    <>
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
            {cookies.user && userRole.role_level === 0 ? (
              <li className="nav-menu-item">
                <Link to="/quiz-test">Quiz Test</Link>
              </li>
            ) : (
              []
            )}
            <li className="nav-menu-item">
              <Link id="link">Contact</Link>
            </li>
            {userRole.role_level && userRole.role_level == 1 ? (
              <li className="nav-menu-item for-recrui">
                {" "}
                <Link id="link" to="/recruiter-page">
                  For Recruiter
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>

          <div class="switch-div">
            {cookies.user ? (
              <nav id="primary_nav_wrap">
                <ul>
                  <li>
                    <div class="img-avatar-acc">
                      <img
                        src={img3}
                        style={({ width: "60px" }, { height: "60px" })}
                      ></img>
                      <span>user</span>
                    </div>
                    <ul>
                      <li>
                        <a href="#">Sub Menu 1</a>
                      </li>
                      <li>
                        <p onClick={logout} style={{ cursor: "pointer" }}>
                          <ion-icon name="log-out"></ion-icon> Logout
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            ) : (
              <Link id="link" to="/login">
                <div className="nav-function-login-reg">
                  <div>Login</div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
