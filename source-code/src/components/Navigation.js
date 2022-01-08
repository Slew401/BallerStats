import React, {useEffect} from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import logo from './Logo.svg'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";

const Navigation = () => {
    const [user, loading, error] = useAuthState(auth)
    const history = useHistory()

    return (
        <div>
            <Navbar bg="bball" expand="lg" fixed="top">
                <Link to = {'/Home'}><img className = "ball-image" src = {logo} alt = "logo"></img></Link>
                <Link to = {`/Home`}><Navbar.Brand><b>BALLERSTATS</b></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className = "nav-style">
                        <Nav.Link as={Link} to = {"/Home"} className = "nav-style">Home</Nav.Link>
                        <Nav.Link as={Link} to = {"/PlayerFinder"}>Players</Nav.Link>
                        <Nav.Link as={Link} to = {"/TeamFinder"}>Teams </Nav.Link>
                        {/* <Nav.Link as={Link} to = {"/Glossary"}>Glossary</Nav.Link>  */}
                        <NavDropdown title="Analysis" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to = {"/Analysis"}>Single Stat Analysis</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to = {"/Analysis/TSA"}>Two Stat Analysis</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to = {"/Analysis/SHC"}>Shot Charts</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to = {"/Analysis/TAS"}>Team Statistics </NavDropdown.Item>
                        </NavDropdown>
                        {user ? 
                        <>
                            <Nav.Link as={Link} to = {"/Dashboard"} className = "nav-style">Dashboard</Nav.Link>
                            <Button variant="outline" onClick={logout}>Logout</Button>
                        </>
                            : 
                            <>
                            <Nav.Link as={Link} to = {"/Register"} className = "nav-style">Register</Nav.Link>
                            <Nav.Link as={Link} to = {"/Login"} className = "nav-style">Login</Nav.Link>
                            </>
                        } 
                    </Nav>
                </Navbar.Collapse>            
            </Navbar>
            
        </div>
    )
}

export default Navigation
