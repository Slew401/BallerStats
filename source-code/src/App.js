import React from 'react'
import Navigation from './components/Navigation';
import { Switch, Route } from 'react-router';
import { PlayerFinder, Home, TeamFinder, Glossary } from './components';

import "./App.css";

const App = () => {
    return (
        <div className = "app">
           <div className = "header">
                <Navigation/>
           </div>
            <div className = "main-body">
            <Switch>
                <Route path = "/">
                    <Home/>
                </Route>
                <Route path = "/PlayerFinder">
                    <PlayerFinder/>
                </Route>
                <Route path = "/TeamFinder">
                    <TeamFinder/>
                </Route>
                <Route path = "/Glossary">
                    <Glossary/>
                </Route>
            </Switch>
            </div>
            <div className = "footer">

            </div>
        </div>
    )
}

export default App
