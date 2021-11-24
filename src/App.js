import React from "react";
import Msg from "./ReactToastify/Msg";
import { useCookies } from "react-cookie";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Header from "./layout/Header";

import Home from "./pages/Home";
import ListJob from "./pages/ListJob";

import Footer from "./layout/Footer";
import Slider from "./layout/Slider";
import Login from "./pages/Login";
import Jobtdetail from "./pages/Jobtdetail";
import Recruiterpage from "./Recruiter/component/Recruiterpage";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  return (
    <Router>
      <Switch>
        <Route>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/joblist">
              <Slider />
              <ListJob />
            </Route>
            <Route path="/job-detail/:job_id">
              <Jobtdetail />
            </Route>
            <Router path="/recruiter-page">
              <Slider />
              <Recruiterpage />
            </Router>
            {!cookies.user && (
              <Route path="/login">
                <Login />
              </Route>
            )}
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Route>
      </Switch>
      <Footer />
      <Msg />
    </Router>
  );
}

export default App;
