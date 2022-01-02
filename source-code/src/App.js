import React from 'react'
import { Navigation, TeamFinder, PlayerFinder, Glossary, Home, Analysis, PlayerDetails, Teamdetails, Shotcharts, TSAnalysis, Login, Register, Dashboard} from './components'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Layout } from "antd"; 

import "./App.css";

const App = () => {
    return (
        <div className = "app">
           <div className = "header">
                <Navigation/>
           </div>
            <div >
            <Container className = "main">
                <>
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
                        <Route path = "/Analysis/TSA">
                            <TSAnalysis/>
                        </Route>
                        <Route path = "/Analysis/SHC">
                            <Shotcharts/>
                        </Route>
                        <Route path = "/Analysis">
                            <Analysis/>
                        </Route>
                        <Route path = "/teams/:teamid">
                            <Teamdetails/>
                        </Route>
                        <Route path = "/players/:playerid">
                            <PlayerDetails/>
                        </Route>
                        <Route path = "/Register">
                            <Register/>
                        </Route>
                        <Route path = "/Dashboard">
                            <Dashboard/>
                        </Route>
                        <Route path = "/Login">
                            <Login/>
                        </Route>
                        {/* Default Route */}
                        <Route path = "/">
                            <Home/>
                        </Route>
                    </Switch>
                </>
            </Container>
            </div>
        </div>
    )
}

export default App
