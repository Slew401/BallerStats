import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useGetTeamsQuery } from '../services/playerApi';

const TeamFinder = () => {
    const {data: teamObject, isFetching} = useGetTeamsQuery();
    const [teams, setTeam] = useState(teamObject); 
    console.log(teams); 
    
    if(isFetching) return "Loading..."; 
    return (
        <div>
            <Container className = "content">
                <h1 className = "title-head">Team Finder</h1>
                <Row>
                    {teams?.data.map((team) => (
                        <Col xs = {24} sm = {12} lg = {6}>
                            <Link to = {`/TeamFinder/${team.id}`}> 
                                <Card className = "team-card">
                                    <Card.Title>{team.full_name}</Card.Title>
                                    <Card.Subtitle>{team.abbreviation}</Card.Subtitle>
                                    <Card.Text>
                                        {team.conference}ern Conference
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
