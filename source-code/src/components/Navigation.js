import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Switch, Route } from 'react-router'
import {TeamFinder, PlayerFinder, Glossary, Home } from '.'

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
                        <Nav.Link as={Link} to = {"/TeamFinder"}>Team Finder</Nav.Link>
                        <Nav.Link as={Link} to = {"/Glossary"}>Glossary</Nav.Link>
                    </Nav>
                </Navbar.Collapse>            
            </Navbar>
            
        </div>
    )
}

export default Navigation
