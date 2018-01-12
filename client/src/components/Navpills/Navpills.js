import React from "react";
import {
  Link
} from "react-router-dom";
import "./Navpills.css";

const Navpills = () =>
  <
  nav className = "nav-wrapper black darken-1 text-align-right" >
  <
  a className = "brand-logo"
href = "" > Da News < /a> <
ul className = "right hide-on-med-and-down" >
  <
  li className = {
    window.location.pathname === "/" ? "active brand" : ""
  } >
  <
  Link to = "/" > Home < /Link> < /
li > <
  li className = {
    window.location.pathname === "/about" ? "active" : ""
  } >
  <
  Link to = "/login" > Log In < /Link> < /
li > <
  li className = {
    window.location.pathname === "/blog" ? "active" : ""
  } >
  <
  Link to = "/signup" > Sign Up < /Link> < /
li > <
  /ul> < /
nav >
  export default Navpills;
