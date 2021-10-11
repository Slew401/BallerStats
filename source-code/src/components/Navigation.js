import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Switch, Link, Route} from "react-router-dom"
import {Home, PlayerFinder, TeamFinder, Glossary} from "./index.js"

import ball from './basketball-ball-solid.svg'




const Navigation = () => {
    return (
        <div>
            <Navbar bg="bball" expand="lg">
                <img className = "ball-image" src = {ball} alt = "logo"></img>
                <span><Navbar.Brand href="#home"><b>BUCKETSTATS</b></Navbar.Brand></span>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to = {"/Home"}>Home</Nav.Link>
                        <Nav.Link as={Link} to = {"/PlayerFinder"}>Player Finder</Nav.Link>
                        <Nav.Link as={Link} to = {"/TeamFinder"}>TeamFinder</Nav.Link>
                        <Nav.Link as={Link} to = {"/Glossary"}>Glossary</Nav.Link>
                    </Nav>
                </Navbar.Collapse>            
            </Navbar>
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
            </Switch>
        </div>
    )
}

export default Navigation
