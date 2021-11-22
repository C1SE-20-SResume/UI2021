import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter,
} from "react-router-dom";

function Recruiterpage() {
  return (
    <>
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
            <div classNames="row-1">
              <div className="function-recrui">
                <div className="avt-upload">
                  <div className="img-avatar-company"></div>
                </div>
              </div>
            </div>
            <div classNames="row-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recruiterpage;
