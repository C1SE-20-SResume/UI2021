// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter,
} from "react-router-dom";
import { useCookies } from "react-cookie";

import UserDetail from "./ProfileComponent/UserDetail";

function Profile() {
  let { path, url } = useRouteMatch();
  const [userProfile, setUserProfile] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  useEffect(() => {
    if (cookies.user) {
      fetch(`${process.env.REACT_APP_API_URL}/login?api_token=${cookies.user}`)
        .then((res) => (res.status === 200 ? res.json() : removeCookie("user")))
        .then((data) => {
          setUserProfile(data.user_info);
          console.log(data.user_info);
        })
        .catch((err) => console.log(err));
    }
  }, [cookies.user]);
  console.log("check user >> ", userProfile.gender);
  return (
    <Router>
      <div className="section-padding section-listjob">
        <div className="container">
          <div className="section-title">
            <h2 className="title">Page For Recruiter</h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers.
            </p>
          </div>
          <div class="job-edtior ">
            <div className="row-1">
              <div className="function-recrui">
                <div className="avt-upload">
                  <div className="img-avatar-company">
                    <img id="avt-cop"></img>
                  </div>
                  <div className="button-camera">
                    <ion-icon name="image-outline"></ion-icon>
                  </div>
                  <div className="name-cop">
                    <span>The Name</span>
                  </div>
                </div>
                <div className="menu-func-item">
                  <ul className="func-item-ul">
                    <li className="func-item">
                      <Link to={`/my-profile`} id="link">
                        <span id="name-function">
                          <ion-icon
                            style={{ marginRight: "10px" }}
                            name="notifications-outline"
                          ></ion-icon>{" "}
                          Profile
                        </span>
                      </Link>
                    </li>
                    <li className="func-item">
                      <Link to={`${url}/change-pass`} id="link">
                        <span id="name-function">
                          <ion-icon
                            style={{ marginRight: "10px" }}
                            name="add-circle-outline"
                          ></ion-icon>{" "}
                          Change Pass
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row-2">
              <Switch>
                <Route exact path={path}>
                  <div className="job-bx-title">
                    <h5 className="h5-title">MY PROFILE</h5>
                  </div>

                  <div className="flexible-div">
                    <form className="form-add-job">
                      <div className="row-input">
                        <div className="box-shield">
                          <label className="lable-row-input">Fullname</label>
                          <input
                            name="jobtitle"
                            type="text"
                            placeholder="name"
                            defaultValue={userProfile.full_name}
                          ></input>
                        </div>
                        <div className="box-shield">
                          <label className="lable-row-input">Email</label>
                          <input
                            type="text"
                            placeholder="email"
                            name="jobRequire"
                            defaultValue={userProfile.email}
                          ></input>
                        </div>
                      </div>

                      <div className="row-input">
                        <div className="box-shield">
                          <label className="lable-row-input">
                            Phone Number
                          </label>
                          <input
                            type="number"
                            placeholder="number"
                            name="jobBenefit"
                            defaultValue={userProfile.phone_number}
                          ></input>
                        </div>
                        <div className="box-shield">
                          <label className="lable-row-input">Birthday</label>
                          <input
                            defaultValue={userProfile.date_birth}
                            type="date"
                            name="dateExpire"
                          ></input>
                        </div>
                      </div>
                      <div className="row-input">
                        <div className="box-shield">
                          <label className="lable-row-input">Keyword </label>
                          <select
                            value={userProfile.gender}
                            id="gender-profile"
                            name="gender"
                          >
                            <option value="">Gender</option>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                            <option value="o">Other </option>
                          </select>
                        </div>
                      </div>
                      <div className="row-input">
                        <div className="box-shield">
                          <label className="lable-row-input">
                            Apptitude Score{" "}
                          </label>
                          <input
                            Value={userProfile.apptitude_score}
                            type="number"
                            name="apptitudeScore"
                          ></input>
                        </div>
                        <div className="box-shield">
                          <label className="lable-row-input">
                            {" "}
                            Personality Score
                          </label>
                          <input
                            Value={userProfile.personality_score}
                            type="number"
                            name="personalityScore"
                          ></input>
                        </div>
                      </div>
                      {/* 
                      <button type="submit" class="upload-job-button">
                        Upload
                      </button> */}
                    </form>
                  </div>
                </Route>
                <Route path={`${path}/change-pass`}>
                  <input type="text" defaultValue="dsadsad" />
                </Route>
                <Route path={`${path}/change-id`}>
                  <h3>do</h3>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Profile;
