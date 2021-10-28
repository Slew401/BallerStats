import React from 'react'
import { Navigation, TeamFinder, PlayerFinder, Glossary, Home } from './components'
import { Switch, Route, Redirect} from 'react-router-dom'
import { Container } from 'react-bootstrap';


import "./App.css";

const App = () => {
    return (
        <div className = "app">
           <div className = "header">
                <Navigation/>
           </div>
            <div className = "main-body">
            <Switch>
                <Route path = "/Home">
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
                {/* Default Route */}
                <Route path = "/">
                    <Home/>
                </Route>
            </Switch>
            </div>

        </div>
    )
}

export default App
