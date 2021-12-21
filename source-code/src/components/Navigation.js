import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom"
import logo from './Logo.svg'

const Navigation = () => {
    return (
        <div>
            <Navbar bg="bball" expand="lg">
                <Link to = {'/Home'}><img className = "ball-image" src = {logo} alt = "logo"></img></Link>
                <Link to = {`/Home`}><Navbar.Brand><b>BUCKETSTATS</b></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className = "nav-style">
                        <Nav.Link as={Link} to = {"/Home"} className = "nav-style">Home</Nav.Link>
                        <Nav.Link as={Link} to = {"/PlayerFinder"}>Players</Nav.Link>
                        <Nav.Link as={Link} to = {"/TeamFinder"}>Teams </Nav.Link>
                        <Nav.Link as={Link} to = {"/Glossary"}>Glossary</Nav.Link> 
                        <NavDropdown title="Analysis" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to = {"/Analysis"}>Single Stat Analysis</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to = {"/Analysis"}>Two Stat Analysis</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to = {"/Analysis"}>Shot Chart Generators</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>            
            </Navbar>
            
        </div>
    )
}

export default Navigation
