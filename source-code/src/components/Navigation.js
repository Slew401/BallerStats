import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import ball from './basketball-ball-solid.svg'

const Navigation = () => {
    return (
        <div>
            <Navbar bg = "bball">
                <img className = "ball-image" src = {ball} alt = "logo"></img>
                <span><b>BALLERSTATS</b></span>
            </Navbar>
        </div>
    )
}

export default Navigation
