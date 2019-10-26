import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import App from "./components/App.js";


ReactDOM.render(
    <div className='Index_root_div'>
        <App/>
    </div>,

    document.getElementById('root')
);


//import ReactDOM from "react-dom";
//import App from "./components/App";
//ReactDOM.render(<App />, document.getElementById("root"));
