import React from "react";
import ReactDOM  from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css'; 
import store from "./app/store"

ReactDOM.render(
    <Router> 
        <Provider store = {store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    </Router>, document.getElementById('root')); 
    