import React from 'react'
import logo from './Logo.svg'


const Home = () => {
    return (
        <div id = "home-grid">
            <div id = "home-text">
                <h2><b> Explore and Analyze your favorite NBA players with BallerStats</b></h2> 
                <p className = "filler-text">
                Your one-stop-shop for NBA Data. 
                Build various graphs and data visualizations comparing up to four players on various 
                individual statistical metrics, or analyse a pair of stats to gauge the 
                relationship between them. Build per-season and per-game 
                shot charts to see how your favourite player is performing.
                Comes complete with login functionality to save graphs to your account. </p>
            </div>
            <div id = "home-image">
                <img src = {logo} width = {475} height = {475} alt = "NBA"/>
            </div>
            {/* <Login/> */}
        </div>
    )
}

export default Home
