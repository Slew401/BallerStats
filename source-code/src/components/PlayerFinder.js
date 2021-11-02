import React from 'react'
import playerJSON from "../json/players.json"
import { Card, Row, Col, Input } from 'antd'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom"


const PlayerFinder = () => {
    console.log(playerJSON);
    return (
        <Container className = "content">                            
            <h1 className = "title-head">Player Finder</h1>
            <p style ={{textAlign: 'center'}}>Search for Players here or select the Player Cards below to view their stats</p>
            <Row gutter = {[20,20]}>
                {playerJSON?.map((player) => (
                    <Col xs ={24} sm = {12} lg = {6} className = "team-card" key = {player.id}>
                        <Link to = {`/players/${player.id}`}>
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
