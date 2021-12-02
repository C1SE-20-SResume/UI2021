import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
function JobAlert() {
  const [listApplied, setListApplied] = useState([]);
  const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/recruiter/apply?api_token=${cookies.user}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("check1", data.data);
        setListApplied(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("check2", listApplied[0]);
  return (
    <>
      <div className="job-bx-title">
        <h5 className="h5-title">JOB ALERT</h5>
      </div>
      <div className="total-apply">
        <div className="job-list-apply">
          {listApplied &&
            listApplied.length > 0 &&
            listApplied.map((item, index) => {
              return (
                <Link key={index}>
                  <div className="card-bx">
                    <div className="job-post-info">
                      <h5 className="title-job-applied"> {item.job_title}</h5>
                      <p>Work at Atract Solutions</p>
                      <ul>
                        <li>
                          <span style={{ color: "#3586ff" }}>ID:</span>
                          {item.job_id}
                        </li>
                        <li>
                          <ion-icon name="location"></ion-icon> {item.job_place}
                        </li>
                        <li>
                          <ion-icon name="cash"></ion-icon> {item.salary}
                        </li>
                      </ul>
                    </div>
                    <div className="number-applied">
                      <span>10</span>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default JobAlert;
