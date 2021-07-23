import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import TestEmmy from "./component/TestEmmy";
import { BrowserRouter } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
