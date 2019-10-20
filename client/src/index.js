import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.js";
import Login from "./components/auth/login";
import Welcome from "./components/welcome"

import createBrowserHistory from "history/createBrowserHistory"
const history = createBrowserHistory();

import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li> <Link to='/'>Home</Link>  </li>
                <li> <Link to='/login'>Login</Link>  </li>
                <li> <Link to='/app'>App</Link>  </li>
            </ul>

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
