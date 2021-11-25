import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter,
} from "react-router-dom";
import img from "./img1.png";
import FuncAddJob from "../Page-recruiter-function/FuncAddJob";
import FuncViewJob from "../Page-recruiter-function/FuncViewJob";
import FuncJobAlert from "../Page-recruiter-function/FuncJobAlert";

function Recruiterpage() {
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
                    <img id="avt-cop" src={img}></img>
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
                      <Link to="/job-alert" id="link">
                        <span id="name-function">
                          <ion-icon
                            style={{ marginRight: "10px" }}
                            name="notifications-outline"
                          ></ion-icon>{" "}
                          Job Alert
                        </span>
                      </Link>
                    </li>
                    <li className="func-item">
                      <Link to="/add-job" id="link">
                        <span id="name-function">
                          <ion-icon
                            style={{ marginRight: "10px" }}
                            name="add-circle-outline"
                          ></ion-icon>{" "}
                          Add Job
                        </span>
                      </Link>
                    </li>
                    <li className="func-item">
                      <Link to="/view-job" id="link">
                        <span id="name-function">
                          <ion-icon
                            style={{ marginRight: "10px" }}
                            name="eye-outline"
                          ></ion-icon>{" "}
                          View Job
                        </span>
                      </Link>
                    </li>
                    <li className="func-item">
                      <Link id="link">
                        <span id="name-function">
                          <ion-icon
                            style={{ marginRight: "10px" }}
                            name="add-circle-outline"
                          ></ion-icon>{" "}
                          Add Question
                        </span>
                      </Link>
                    </li>
                    <li className="func-item">
                      <Link id="link">
                        <span id="name-function">
                          <ion-icon
                            style={{ marginRight: "10px" }}
                            name="eye-outline"
                          ></ion-icon>{" "}
                          View Question
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row-2">
              <Switch>
                <Route exact path={"/add-job"}>
                  <FuncAddJob />
                </Route>
                <Route path={"/view-job"}>
                  <FuncViewJob />
                </Route>
              </Switch>

              {/* <div className="job-bx-title">
                <h5 className="h5-title">POST A JOB</h5>
              </div>
              <div className="flexible-div">
                <form className="form-add-job">
                  <div className="row-input">
                    <div className="box-shield">
                      <label className="lable-row-input">Job Title</label>
                      <input type="text" placeholder="title"></input>
                    </div>
                    <div className="box-shield">
                      <label className="lable-row-input">Job Require</label>
                      <input></input>
                    </div>
                  </div>
                  <div className="row-input-desc">
                    <label className="lable-row-input">Job Description</label>
                    <textarea rows={5} cols={5}>
                      {" "}
                    </textarea>
                  </div>
                  <div className="row-input">
                    <div className="box-shield">
                      <label className="lable-row-input">Job Benefit</label>
                      <input></input>
                    </div>
                    <div className="box-shield">
                      <label className="lable-row-input">Job Place</label>
                      <input></input>
                    </div>
                  </div>
                  <div className="row-input">
                    <div className="box-shield">
                      <label className="lable-row-input">Salary</label>
                      <input></input>
                    </div>
                    <div className="box-shield">
                      <label className="lable-row-input">Date Expire</label>
                      <input></input>
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Recruiterpage;
