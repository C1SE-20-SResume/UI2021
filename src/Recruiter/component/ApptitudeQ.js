import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  useParams,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

function ApptitudeQ() {
  const [listques, setlistques] = useState({});
  const [cookies, setCookie] = useCookies(["user"]);
  const { question_id } = useParams();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/recruiter/ques/view?api_token=${cookies.user}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("check1", result.apptitude);
        setlistques(result);
      })
      .catch((err) => console.log(err));
  }, []);
  const onDeleteQues = (question_id) => {
    fetch(
      `${process.env.REACT_APP_API_URL}/recruiter/ques/delete/${question_id}?api_token=${cookies.user}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          if (data.status === true) {
            toast.success(data.message);
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Type Question </th>
            <th>Content</th>
            <th>Function</th>
          </tr>
          {listques.apptitude &&
            listques.apptitude.length > 0 &&
            listques.apptitude.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.type_name}</td>
                  <td>{item.ques_content}</td>

                  <td>
                    {" "}
                    <div className="function-view-job">
                      <Link>
                        <button className="btn-ionicon">
                          <ion-icon id="btn-ionicon" name="build"></ion-icon>
                        </button>
                      </Link>
                      <button
                        onClick={() => onDeleteQues(item.ques_id)}
                        className="btn-ionicon"
                      >
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

export default ApptitudeQ;
