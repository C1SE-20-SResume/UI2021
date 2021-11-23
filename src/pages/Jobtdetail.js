import img3 from "../images/how-it-work/img3.png";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import { Alert } from "bootstrap";
function Jobtdetail() {
  useEffect(() => {
    document.querySelector("html").classList.add("js");

    var fileInput = document.querySelector(".input-file"),
      button = document.querySelector(".input-file-trigger"),
      the_return = document.querySelector(".file-return");

    button.addEventListener("keydown", function (event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        fileInput.focus();
      }
    });
    button.addEventListener("click", function (event) {
      fileInput.focus();
      return false;
    });
    fileInput.addEventListener("change", function (event) {
      the_return.innerHTML = this.value;
    });
  });
  const { job_id } = useParams();
  const [cookies, setCookie] = useCookies(["user"]);
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/job/${job_id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data.data);
        console.log("check>>", data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    if (!cookies.user) {
      toast.error("You are not login");
    } else if (userRole.role_level == 1) {
      toast.error(
        "You are recruiter , Please login with your candidate account "
      );
    }

    e.preventDefault();
    // get the file

    const file = document.getElementById("file").files[0];
    if (!file) {
      toast.error("You have not imported the cv file");
      return;
    }
    const formData = new FormData();
    formData.append("cv_file", file);
    // random 1 - 5
    const random = Math.floor(Math.random() * 5) + 1;
    // job_id
    formData.append("job_id", random);
    fetch(
      `${process.env.REACT_APP_API_URL}/candidate/job/upload?api_token=${cookies.user}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          toast.success("ok");
          console.log("check data : ", data);
        } else if (data.success === false) {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [userRole, setUserRole] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user?api_token=${cookies.user}`)
      .then((res) => res.json())
      .then((data) => {
        setUserRole(data);
        console.log("role :", data.role_level);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("role level : ", userRole.role_level);

  return (
    <>
      <div className="section-padding section-listjob">
        <div className="container">
          <div className="section-title">
            <h2 className="title">Job Detail</h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers.
            </p>
          </div>
          <div className="row-content">
            <div className="row-content-col1">
              <div className="colu-n n1">
                <div className="job-detail-content">
                  <img
                    src={img3}
                    style={({ width: "84px" }, { height: "84px" })}
                  ></img>
                  <div className="job-detail-com-desc">
                    <h4>Web Developer</h4>
                    <p className="text-txt">
                      <ion-icon name="home"></ion-icon> Web Themescode.pvt.Ltd
                    </p>
                    <p className="text-txt">
                      <ion-icon name="location"></ion-icon> 659 Meadowcrest Lane
                      Lexington, KY 40507
                    </p>
                  </div>
                </div>
                <div className="cl-text">
                  <p className="text-mainsize">
                    Neque porro quisquam est qui dolorem ipsum dolor sit amet
                    consectetur adipisci velit a quia non eius modi tempora
                    incidunt ut labore dolore magnam aliquam quaerat voluptatem
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit
                    aut fugit sed quia consequuntur magni dolores eose.
                  </p>
                  <p className="text-mainsize">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praelsentium voluptatum at deleniti atque
                    corrupti quos dolores quas molestias excepturi occaecati
                    cupiditate non provident, similique sunt culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga
                    Temporibus autem quibusdam aut Ut at as enim ad minima
                    veniam quis nostrum that exercitationem ullam corporis
                    suscipit laboriosam officiis debitis aut rerum
                    necessitatibus.
                  </p>
                </div>
              </div>
              <div className="col-title">
                {" "}
                <h2 class="title-ontop">Job Description :</h2>
              </div>
              <div className="colu-n n2">
                <div className="cl-text">
                  <p className="text-mainsize">
                    Neque porro quisquam est qui dolorem ipsum dolor sit amet
                    consectetur adipisci velit a quia non eius modi tempora
                    incidunt ut labore dolore magnam aliquam quaerat voluptatem
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit
                    aut fugit sed quia consequuntur magni dolores eose.
                  </p>
                  <p className="text-mainsize">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praelsentium voluptatum at deleniti atque
                    corrupti quos dolores quas molestias excepturi occaecati
                    cupiditate non provident, similique sunt culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga
                    Temporibus autem quibusdam aut Ut at as enim ad minima
                    veniam quis nostrum that exercitationem ullam corporis
                    suscipit laboriosam officiis debitis aut rerum
                    necessitatibus.
                  </p>
                </div>
              </div>
              <div className="col-title">
                {" "}
                <h2 class="title-ontop">Job Benefit :</h2>
              </div>
              <div className="colu-n n3">
                <div className="cl-text">
                  <p className="text-mainsize">
                    Neque porro quisquam est qui dolorem ipsum dolor sit amet
                    consectetur adipisci velit a quia non eius modi tempora
                    incidunt ut labore dolore magnam aliquam quaerat voluptatem
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit
                    aut fugit sed quia consequuntur magni dolores eose.
                  </p>
                  <p className="text-mainsize">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praelsentium voluptatum at deleniti atque
                    corrupti quos dolores quas molestias excepturi occaecati
                    cupiditate non provident, similique sunt culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga
                    Temporibus autem quibusdam aut Ut at as enim ad minima
                    veniam quis nostrum that exercitationem ullam corporis
                    suscipit laboriosam officiis debitis aut rerum
                    necessitatibus.
                  </p>
                </div>
              </div>
              <div className="col-title">
                {" "}
                <h2 class="title-ontop">Job require :</h2>
              </div>
              <div className="colu-n n4">
                <div className="cl-text">
                  <p className="text-mainsize">
                    Neque porro quisquam est qui dolorem ipsum dolor sit amet
                    consectetur adipisci velit a quia non eius modi tempora
                    incidunt ut labore dolore magnam aliquam quaerat voluptatem
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit
                    aut fugit sed quia consequuntur magni dolores eose.
                  </p>
                  <p className="text-mainsize">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praelsentium voluptatum at deleniti atque
                    corrupti quos dolores quas molestias excepturi occaecati
                    cupiditate non provident, similique sunt culpa qui officia
                    deserunt mollitia animi, id est laborum et dolorum fuga
                    Temporibus autem quibusdam aut Ut at as enim ad minima
                    veniam quis nostrum that exercitationem ullam corporis
                    suscipit laboriosam officiis debitis aut rerum
                    necessitatibus.
                  </p>
                </div>
              </div>
            </div>

            <div className="row-content-col2">
              <div className="tab-info">
                <h5 className="text-center">
                  <ion-icon name="location"></ion-icon> LOCATION
                </h5>
                <div className="job-detail-location">
                  <div className="detail-location-item">
                    <div className="icon-ulatr">
                      <ion-icon name="home"></ion-icon>
                    </div>
                    <p className="text-txt">Abc Dkf Afgs .pvty</p>
                  </div>
                  <div className="detail-location-item">
                    <div className="detail-location-item">
                      <div className="icon-ulatr">
                        <ion-icon name="mail"></ion-icon>
                      </div>
                      <p className="text-txt">dkand@outlook.org</p>
                    </div>
                  </div>
                  <div className="detail-location-item">
                    <div className="icon-ulatr">
                      <ion-icon name="earth"></ion-icon>
                    </div>
                    <p className="text-txt">www.google.com</p>
                  </div>
                  <div className="detail-location-item">
                    <div className="icon-ulatr">
                      <ion-icon name="cash"></ion-icon>
                    </div>
                    <p className="text-txt">3000-5000$</p>
                  </div>
                  <div className="detail-location-item">
                    <div className="icon-ulatr">
                      <ion-icon name="accessibility"></ion-icon>
                    </div>
                    <p className="text-txt">1 To 3 Years.</p>
                  </div>

                  <div className="detail-location-item">
                    <div className="icon-ulatr">
                      <ion-icon name="time"></ion-icon>
                    </div>
                    <p className="text-txt"> 4 minutes ago</p>
                  </div>
                </div>
              </div>
              <div className="tab-input-file tab-info">
                <form onSubmit={handleSubmit}>
                  <div className="input-file-container">
                    <input
                      className="input-file"
                      name="file"
                      id="file"
                      type="file"
                    />
                    <label
                      tabIndex={0}
                      htmlFor="my-file"
                      className="input-file-trigger"
                    >
                      Select a file...
                    </label>
                  </div>
                  <p className="file-return" />
                  <div className="button-submit-cv">
                    <button>Apply CV </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobtdetail;
