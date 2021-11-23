import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
function FuncViewJob() {
  const [cookies, setCookies] = useCookies(["user"]);
  const [listJob, setListjob] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/recruiter/job/view?api_token=${cookies.user}`
    )
      .then((res) => res.json())
      .then((data) => {
        setListjob(data.data);
        console.log("check data view job>>", data.data.id);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="job-bx-title">
        <h5 className="h5-title">POST A JOB</h5>
      </div>

      <table>
        <tbody>
          <tr>
            <th>Job Title</th>

            <th>Date </th>
            <th>Function</th>
          </tr>
          {listJob &&
            listJob.length > 0 &&
            listJob.map((item, index) => {
              return (
                <tr key={item.index}>
                  <td>
                    <h5>{item.job_title}</h5>
                    <ul className="job-post-info">
                      <li>
                        <ion-icon id="ion-icon-job" name="home"></ion-icon> Name
                        Company
                      </li>
                      <li>
                        <ion-icon id="ion-icon-job" name="location"></ion-icon>{" "}
                        {item.job_place}
                      </li>
                      <li>
                        <ion-icon id="ion-icon-job" name="cash"></ion-icon>{" "}
                        {item.salary}
                      </li>
                    </ul>
                  </td>
                  <td>{item.date_expire}</td>
                  <td>
                    <div className="function-view-job">
                      <Link>
                        <button className="btn-ionicon">
                          <ion-icon id="btn-ionicon" name="build"></ion-icon>
                        </button>
                      </Link>
                      <button className="btn-ionicon">
                        <ion-icon id="btn-ionicon" name="trash"></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default FuncViewJob;
