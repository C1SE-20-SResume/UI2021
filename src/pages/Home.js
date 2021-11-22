import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import logo from "../images/logo.png";
import slider from "../images/sliderhome/slideimage1.jpg";
import img1 from "../images/how-it-work/img1.png";
import img2 from "../images/how-it-work/img2.png";
import img3 from "../images/how-it-work/img3.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  BrowserRouter,
} from "react-router-dom";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Home() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  const counters = document.querySelectorAll(".value");
  const speed = 200;

  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute("akhi");
      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        counter.innerText = value;
      }
    };

    animate();
  });
  const [cookies, setCookies] = useCookies(["user"]);
  const [listUsers, setListUser] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/popularjob`)
      .then((res) => res.json())
      .then((data) => {
        setListUser(data.data);
        console.log("check>>", data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundColor }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2 className="title">Latest Jobs</h2>
            <p>Here's the most recent job listed on the website.</p>
          </div>
          <div className="container-content">
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <Link
                    to={`/job-detail/${item.job_id}`}
                    className="col-span-1"
                    key={index}
                  >
                    <div className="job-list-wrap">
                      <div className="job-shield">
                        <img
                          className="logo-company-job"
                          id="img-logo-company"
                          src={item.logo_url}
                        />
                        <div className="col-content">
                          <h4 className="job-title">FullStack Backend</h4>
                          <p>
                            <strong className="name-company">NFQ Asia</strong>
                          </p>
                        </div>
                        <ul className="meta">
                          <li>
                            <span className="location-company">
                              <ion-icon name="location"></ion-icon>
                              <i>Ha Noi</i>
                            </span>
                          </li>
                          <li>
                            <span className="salary-company">
                              <ion-icon name="cash"></ion-icon>
                              <i>5000$</i>
                            </span>
                          </li>
                          <li>
                            <span className="dateUpdated-company">
                              <ion-icon name="calendar"></ion-icon>
                              <i>02/06/2021</i>
                            </span>
                          </li>
                          <li>
                            <span className="fulltime-company">
                              <ion-icon name="time"></ion-icon>
                              <i>Fulltime</i>
                            </span>
                          </li>
                          <li>
                            <span className="apply-company">
                              <ion-icon name="arrow-forward"></ion-icon>
                              <i>Aplly Now</i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className="load-more-job">
            <Link id="load-more-button" to="/joblist">
              Load more
            </Link>
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2 className="title">How It Work</h2>
            <p>Here's the most recent job listed on the website.</p>
          </div>
          <div className="container-content how-it-work-content">
            <div>
              <div className="how-it-work-box">
                <div className="how-it-work-image">
                  <img src={img1} style={{ height: "50px" }} />
                </div>
                <div className="step-title">
                  <h5>Register an account</h5>
                  <p className="text-muted">
                    Donec pede justo fringilla vel aliquet nec vulputate eget
                    arcu. In enim justo rhoncus ut a, justo.
                  </p>
                  <div className="read-more">
                    <a href="#">
                      Read more{" "}
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="how-it-work-box">
                <div className="how-it-work-image">
                  <img src={img2} style={{ height: "50px" }} />
                </div>
                <div className="step-title">
                  <h5>Search your job</h5>
                  <p className="text-muted">
                    Donec pede justo fringilla vel aliquet nec vulputate eget
                    arcu. In enim justo rhoncus ut a, justo.
                  </p>
                  <div className="read-more">
                    <a href="#">
                      Read more{" "}
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="how-it-work-box">
                <div className="how-it-work-image">
                  <img src={img3} style={{ height: "50px" }} />
                </div>
                <div className="step-title">
                  <h5>Apply for job</h5>
                  <p className="text-muted">
                    Donec pede justo fringilla vel aliquet nec vulputate eget
                    arcu. In enim justo rhoncus ut a, justo.
                  </p>
                  <div className="read-more">
                    <a href="#">
                      Read more{" "}
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding section-counter">
        <div className="container">
          <div className="container-content counter-box">
            <div className="row">
              <div className="counter-name">
                <p>
                  <ion-icon name="home"></ion-icon>
                  COMPANY
                </p>
                <div class="value" akhi="1000">
                  0
                </div>
              </div>
              <div className="counter-name">
                <p>
                  <ion-icon name="newspaper"></ion-icon>
                  APPLICATION
                </p>
                <div class="value" akhi="500">
                  0
                </div>
              </div>
              <div className="counter-name">
                <p>
                  <ion-icon name="checkbox"></ion-icon>
                  JOB POSTED
                </p>
                <div class="value" akhi="700">
                  0
                </div>
              </div>
              <div className="counter-name">
                <p>
                  <ion-icon name="person-add"></ion-icon>
                  MEMBER
                </p>
                <div class="value" akhi="999">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
