import React from "react";
import Msg from "./ReactToastify/Msg";
import { useCookies } from "react-cookie";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";

import Home from "./pages/Home";
import ListJob from "./pages/ListJob";

import Footer from "./layout/Footer";
import Slider from "./layout/Slider";
import Login from "./pages/Login";
import Jobtdetail from "./pages/Jobtdetail";
import Recruiterpage from "./Recruiter/component/Recruiterpage";

function App() {
  const [cookies] = useCookies(["user"]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/joblist">
          <Slider />
          <ListJob />
        </Route>
        <Route path="/job-detail/:job_id">
          <Slider />
          <Jobtdetail />
        </Route>

        {!cookies.user ? (
          // <Route path="/login">
          //   <Login />
          // </Route>

          <Route>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Route>
        ) : (
          <Route path="/recruiter-page">
            <Slider />
            <Recruiterpage />
          </Route>
        )}
        <Route component={Home} />
      </Switch>

      <Footer />
      <Msg />
    </Router>
  );
}

export default App;
