import React from 'react'
import { Navbar } from 'react-bootstrap';

import "./App.css";
import Navigation from './components/Navigation';

const App = () => {
    return (
        <div className = "app">
           <div className = "header">
                <Navigation/>
           </div>
            <div className = "main-body">

            </div>
            <div className = "footer">

            </div>
        </div>
    )
}

export default App
