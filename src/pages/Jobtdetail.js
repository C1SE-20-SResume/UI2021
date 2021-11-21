import React, { useEffect } from "react";
import img3 from "../images/how-it-work/img3.png";

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
                <form action="#">
                  <div className="input-file-container">
                    <input className="input-file" id="my-file" type="file" />
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
                    <button>Submit </button>
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
