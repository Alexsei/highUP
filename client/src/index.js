import React from "react";
import ReactDOM from "react-dom";



import App from "./components/App.js";
import Login from "./components/auth/login";
import Welcome from "./components/welcome"
import RootMenu from "./components/rootmenu";

import createBrowserHistory from "history/createBrowserHistory"
const history = createBrowserHistory();

import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <RootMenu/>
            <hr/>

            <Route exact path="/" component={Welcome}/>
            <Route path="/login"  component={Login}/>
            <Route path="/app"  component={App}/>
            

        </div>
    </Router>,


    document.getElementById('root')
);


//import ReactDOM from "react-dom";
//import App from "./components/App";
//ReactDOM.render(<App />, document.getElementById("root"));
