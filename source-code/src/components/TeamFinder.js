import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useGetTeamsQuery } from '../services/nbaIS';

const TeamFinder = () => {
    
    const {data: team, isFetching} = useGetTeamsQuery()
    console.log(team); 
    
    if(isFetching) return "Loading..."; 
    return (
        <div>
            <Container className = "content">
                <h1 className = "title-head">Team Finder</h1>
                <Row>
                    {team.map((team) => (
                        <Col xs = {24} sm = {12} lg = {6}>
                            <Link to = {`/TeamFinder/${team.id}`}> 
                                <Card className = "team-card">
                                    <Card.Title>{team?.name}</Card.Title>
                                    <Card.Subtitle>{team?.abbreviation}</Card.Subtitle>
                                    <Card.Text>
                                        {team?.conference}ern Conference
                                    </Card.Text>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default TeamFinder
