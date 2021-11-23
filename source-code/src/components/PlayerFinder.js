import React, { useEffect, useState} from 'react'
import playerJSON from "../json/players.json"
import allPlayers from "../json/allPlayerData.json"
import activePlayers from "../json/activePlayers.json"
import { Card, Row, Col, Input } from 'antd'
import { Container, Placeholder } from 'react-bootstrap'
import { Link } from "react-router-dom"


const PlayerFinder = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchData, setSearchData] = useState(allPlayers);
    const [players, setPlayers] = useState(playerJSON);
     
    useEffect(() => {
        setPlayers(playerJSON); 
        const filteredData = playerJSON.filter((player) => player.firstName.toLowerCase().includes(searchTerm.toLowerCase()) )
        setPlayers(filteredData); 
    },[searchTerm])

    return (
        <Container className = "content">                            
            <h1 className = "title-head">Player Finder</h1>
            <em><p style ={{textAlign: 'center'}}>Search for Players here or select the Player Cards below to view their stats</p></em>
            <div className = "search">
                <Input style = {{width: 300}} 
                className = "search"
                placeholder = "Search for Players Here"
                onChange = {(e) => setSearchTerm(e.target.value)}></Input>
            </div>
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
