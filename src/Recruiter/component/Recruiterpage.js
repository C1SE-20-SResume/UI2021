// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter,
  useParams,
} from "react-router-dom";
import img from "./img1.png";
import FuncAddJob from "../Page-recruiter-function/FuncAddJob";
import FuncViewJob from "../Page-recruiter-function/FuncViewJob";
import FuncEditJob from "../Page-recruiter-function/FuncEditJob";

// import FuncJobAlert from "../Page-recruiter-function/FuncJobAlert";

import { AddQues } from "../component";
import ViewQues from "./ViewQues";

import JobAlert from "./JobAlert";

function Recruiterpage() {
  const { job_id } = useParams();
  let { path, url } = useRouteMatch();
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
                      <Link to={`/job-alert`} id="link">
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
                      <Link to={`/add-job`} id="link">
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
                      <Link to={`/view-job`} id="link">
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
                      <Link id="link" to={`/add-question`}>
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
                      <Link id="link" to={`/view-question/apptitude-question`}>
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
                <Route path={"/job-alert"}>
                  <JobAlert />
                </Route>
                <Route path={`/view-job`}>
                  <FuncViewJob />
                </Route>

                <Route path={`/add-question`} component={AddQues} />
                <Route path={`/add-job`} component={FuncAddJob} />
                <Route path={`/add-question`} component={AddQues} />
                <Route path={`/view-question`} component={ViewQues} />
                <Route path={`/edit-job/:job_id`} component={FuncEditJob} />
              </Switch>
              {/* <Switch> (du)
                <Route path={"/add-job"}>
                  <FuncAddJob />
                </Route>
                <Route path={"/view-job"}>
                  <FuncViewJob />
                </Route>
                <Route path={"/job-alert"} component={JobAlert} />
                <Route path={"/add-question"} component={AddQues} />
                <Route path={"/view-question"} component={ViewQues} />
                <Route path={"/edit-job/:job_id"} component={FuncEditJob} />
              </Switch> */}

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
