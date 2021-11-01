import React from 'react'
import { Navigation, TeamFinder, PlayerFinder, Glossary, Home, PlayerComparison, PlayerDetails, Teamdetails } from './components'
import { Switch, Route, Redirect} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Layout } from "antd"; 

import "./App.css";

const App = () => {
    return (
        <div className = "app">
           <div className = "header">
                <Navigation/>
           </div>
            <div className = "main-body">
            <Layout >
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
                    <Route path = "/PlayerComparison">
                        <PlayerComparison/>
                    </Route>
                    <Route path = "/teams/:teamid">
                        <Teamdetails/>
                    </Route>
                    <Route path = "/players/:playerid">
                        <PlayerDetails/>
                    </Route>
                    {/* Default Route */}
                    <Route path = "/">
                        <Home/>
                    </Route>
                </Switch>
            </Layout>
            </div>
        </div>
    )
}

export default App
