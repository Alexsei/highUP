import React, { Component } from "react";

import Login from "./auth/login";
import Welcome from "./welcome"
import TopMenu from "./topMenu";
import Weather from "./weather/weather";

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <Router>
                <TopMenu/>
                <Route exact path="/" component={Welcome}/>
                <Route path="/login"  component={Login}/>
                <Route path="/auth/login"  component={Login}/>
                <Route path="/weather"  component={Weather}/>

            </Router>
        );
    }
}

