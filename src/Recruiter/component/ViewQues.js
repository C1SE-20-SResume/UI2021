import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { useCookies } from "react-cookie";
function ViewQues() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [listques, setlistques] = useState({});
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/recruiter/ques/view?api_token=${cookies.user}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
        setlistques(data);
      })
      .catch((error) => console.log("error", error));
    console.log("check list 1 ", listques);
  });

  return (
    <>
      <div className="job-bx-title">
        <h5 className="h5-title">VIEW QUESTION</h5>
      </div>
      <div className="content-viewJob">
        {listques.apptitude.map((item, index) => {})}
        <table>
          <tbody>
            <tr>
              <th>Question ID</th>

              <th>Type Question </th>
              <th>Date Update</th>
              <th>Function</th>
            </tr>
            {/* {listques &&
              listques.length > 0 &&
              listques.map((item, index) => {
                return (
                  <tr key={item.index}>
                    <td>{item.id}</td>
                    <td></td>
                    <td></td>
                    <td>
                      {" "}
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
              })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewQues;
