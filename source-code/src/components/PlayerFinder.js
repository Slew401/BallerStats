import React, { useEffect, useState} from 'react'
import playerJSON from "../json/players.json"
import activePlayers from "../json/activePlayers.json"
import { Card, Row, Col } from 'antd'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"
import PlayerFinderButton from "./searchbars/PlayerFinderButton.js"

import Search from "./searchbars/Search.js"


const PlayerFinder = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchData, setSearchData] = useState(activePlayers);
    const [players, setPlayers] = useState(playerJSON);
    
    function onSearch(val) {
        console.log('search:', val);
    }

    return (
        <Container className = "content">                            
            <h1 className = "title-head">Player Finder</h1>
            <em><p style ={{textAlign: 'center'}}>Search for Players here or select the Player Cards below to view their stats</p></em>
            {/* <span className = "search">
                <Search button = {PlayerFinderButton}/>               
            </span> */}
            <Row gutter = {[20,20]}>
                {players?.map((player) => (
                    <Col xs ={24} sm = {12} lg = {6} className = "team-card" key = {player.id}>
                        <Link to = {`/players/${player.personId}`}>
                            <Card cover={<img style={{width:"306px", height:"250px"}} src = {player.headShotUrl} alt = "hi"></img>}
                            hoverable
                            >
                                <Card.Meta title={`${player.firstName} ${player.lastName}`}/>
                                <span><p>{player.team}     {player.jerseyNumber}</p></span>
                                <p>Career Averages: {player.careerPoints}/{player.careerRebounds}/{player.carrerAssists} </p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default PlayerFinder
