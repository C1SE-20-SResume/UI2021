import React, { Component } from "react";
import img3 from "../images/how-it-work/img3.png";
function ListJob() {
  return (
    <>
      <div className="section-padding section-listjob">
        <div className="container">
          <div className="section-title">
            <h2 className="title">Available job for you</h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers.
            </p>
          </div>

          <div className="listjob-row-div">
            <div className="sort-zone">
              <div>
                <div className="button-searching">
                  <input type="text" placeholder="searching....." />
                  <button type="submit">
                    {" "}
                    <ion-icon name="search"></ion-icon>
                  </button>
                </div>
                <div className="option-radio-button">
                  <span>
                    <ion-icon name="location"></ion-icon> LOCATION
                  </span>
                  <div>
                    <input type="radio" value="hanoi" name="location" />{" "}
                    <label>Ha Noi</label>
                  </div>
                  <div>
                    {" "}
                    <input type="radio" value="danang" name="location" />{" "}
                    <label> Da Nang</label>
                  </div>
                  <div>
                    <input type="radio" value="hochiminh" name="location" />{" "}
                    <label>Ho Chi Minh</label>
                  </div>
                </div>
                <div className="option-radio-button salary-option">
                  <span>
                    {" "}
                    <ion-icon name="cash"></ion-icon> SALARY
                  </span>
                  <div>
                    {" "}
                    <input type="radio" checked="checked" /> <label>All</label>
                  </div>
                  <div>
                    {" "}
                    <input type="radio" value="danang" name="location" />{" "}
                    <label>Under 1000$</label>
                  </div>
                  <div>
                    {" "}
                    <input type="radio" value="1000" name="salary" />
                    <label> 1000 - 2000$</label>
                  </div>
                  <div>
                    {" "}
                    <input type="radio" value="1000" name="location" />{" "}
                    <label>1000 - 3000$</label>
                  </div>
                  <div>
                    {" "}
                    <input type="radio" value="3000" name="location" />{" "}
                    <label>Than 3000$</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-job-div ">
              <div className="list-job-item">
                <div className="item">
                  <img
                    src={img3}
                    style={({ width: "84px" }, { height: "84px" })}
                  ></img>
                  <div>
                    <div className="info-company">
                      <div className="name-title">
                        <h4>Fullstack Developer Java</h4>
                        <span>FPT SOFTWARE</span>
                      </div>
                      <div className="button-apply">
                        <span>Full time</span>
                        <p>Apply </p>
                      </div>
                    </div>
                    <ul className="info-more">
                      <li>
                        <ion-icon name="location"></ion-icon> Ha Noi
                      </li>
                      <li>
                        <ion-icon name="cash"></ion-icon> 1000$
                      </li>
                      <li>
                        <ion-icon name="calendar-number"></ion-icon> 02/06/2021
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="list-job-item">
                <div className="item">
                  <img
                    src={img3}
                    style={({ width: "84px" }, { height: "84px" })}
                  ></img>
                  <div>
                    <div className="info-company">
                      <div className="name-title">
                        <h4>Fullstack Developer Java</h4>
                        <span>FPT SOFTWARE</span>
                      </div>
                      <div className="button-apply">
                        <span>Full time</span>
                        <p>Apply </p>
                      </div>
                    </div>
                    <ul className="info-more">
                      <li>Ha Noi</li>
                      <li>1000$</li>
                      <li>02/06/2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="list-job-item">
                <div className="item">
                  <img
                    src={img3}
                    style={({ width: "84px" }, { height: "84px" })}
                  ></img>
                  <div>
                    <div className="info-company">
                      <div className="name-title">
                        <h4>Fullstack Developer Java</h4>
                        <span>FPT SOFTWARE</span>
                      </div>
                      <div className="button-apply">
                        <span>Full time</span>
                        <p>Apply </p>
                      </div>
                    </div>
                    <ul className="info-more">
                      <li>Ha Noi</li>
                      <li>1000$</li>
                      <li>02/06/2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="list-job-item">
                <div className="item">
                  <img
                    src={img3}
                    style={({ width: "84px" }, { height: "84px" })}
                  ></img>
                  <div>
                    <div className="info-company">
                      <div className="name-title">
                        <h4>Fullstack Developer Java</h4>
                        <span>FPT SOFTWARE</span>
                      </div>
                      <div className="button-apply">
                        <span>Full time</span>
                        <p>Apply </p>
                      </div>
                    </div>
                    <ul className="info-more">
                      <li>Ha Noi</li>
                      <li>1000$</li>
                      <li>02/06/2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="list-job-item">
                <div className="item">
                  <img
                    src={img3}
                    style={({ width: "84px" }, { height: "84px" })}
                  ></img>
                  <div>
                    <div className="info-company">
                      <div className="name-title">
                        <h4>Fullstack Developer Java</h4>
                        <span>FPT SOFTWARE</span>
                      </div>
                      <div className="button-apply">
                        <span>Full time</span>
                        <p>Apply </p>
                      </div>
                    </div>
                    <ul className="info-more">
                      <li>Ha Noi</li>
                      <li>1000$</li>
                      <li>02/06/2021</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="list-job-item">
                <div className="item">
                  <img
                    src={img3}
                    style={({ width: "84px" }, { height: "84px" })}
                  ></img>
                  <div>
                    <div className="info-company">
                      <div className="name-title">
                        <h4>Fullstack Developer Java</h4>
                        <span>FPT SOFTWARE</span>
                      </div>
                      <div className="button-apply">
                        <span>Full time</span>
                        <p>Apply </p>
                      </div>
                    </div>
                    <ul className="info-more">
                      <li>Ha Noi</li>
                      <li>1000$</li>
                      <li>02/06/2021</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListJob;
