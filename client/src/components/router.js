import React, { Component } from "react";
import ReactDOM from "react-dom";

import Login from './auth/login'
import App from "./App.js";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom"


export default class Rout extends Component {

  render() {
    return (
        <div>

            <div> Router</div>
            <Router >

                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <App />
                </Route>

            </Router>

            <div>
                Router

            </div>

        </div>

    )
  }
};

