import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills/Navpills";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp/SignUp";
import "./App.css";

const App = () =>
  <Router>
    <div className="main-wrapper">
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  </Router>;

export default App;
