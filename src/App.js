import "./App.css";
import FormLoginandout from "./pages/FormLoginandout";
import Msg from "./ReactToastify/Msg";
import React from "react";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/joblist">
          <ListJob />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
