import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useRouteMatch,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import ApptitudeQ from "./ApptitudeQ";
import PersonalityQ from "./PersonalityQ";
function ViewQues() {
  // const [listques, setlistques] = useState({});
  // const [cookies, setCookie] = useCookies(["user"]);

  // useEffect(() => {
  //   fetch(
  //     `${process.env.REACT_APP_API_URL}/recruiter/ques/view?api_token=${cookies.user}`
  //   )
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log("check1", result.apptitude[0]);
  //       setlistques(result);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  let { path, url } = useRouteMatch();
  return (
    <Router>
      <div className="job-bx-title select-question-div ">
        <h5 className="h5-title">VIEW QUESTION</h5>
        <Link to={`${url}/apptitude-question`}>
          <input
            className="button-select-question"
            type="button"
            defaultValue="APPTITUDE QUESTION"
          />
        </Link>
        <Link to={`${url}/personality-ques`}>
          <input
            className="button-select-question"
            defaultValue="PERSONALITY QUESTION"
            type="button"
          />
        </Link>
      </div>
      <div className="content-viewJob">
        <Switch>
          {/* <Route  path={path} component={ApptitudeQ} /> */}
          <Route
            exact
            path={`${path}/apptitude-question`}
            component={ApptitudeQ}
          />
          <Route path={`${path}/personality-ques`} component={PersonalityQ} />
        </Switch>
      </div>
    </Router>
  );
}

export default ViewQues;
