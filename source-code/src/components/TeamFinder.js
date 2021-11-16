import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import teamsJSON from "../json/teams.json";
import { Card, Row, Col, Input } from 'antd'
import { Link } from "react-router-dom"
import { async } from "async";

const TeamFinder = () => {
    const [teams, setTeams] = useState(null)
    let teamName; 
    useEffect(() => {
        fetch("https://nba-player-individual-stats.p.rapidapi.com/teams", {
        method: "GET",
        withCredential:true, 
        headers: {
            'x-rapidapi-host': 'nba-player-individual-stats.p.rapidapi.com',
            'x-rapidapi-key': '6e009c2a9amsh074604bd5f4bf85p1222d5jsne72d4a262676'
        }
        }).then(res => res.json())
        .then(data => setTeams(data)); 
    },[])
        console.log(teams);
        return (
            <Container className = "content">
                <h1 className = "title-head">Team Finder</h1>
                <Row gutter = {[32,32]} className = "team-card-container">
                    {teamsJSON?.map((team) => (
                        <Col xs ={24} sm = {12} lg = {6} className = "team-card" key = {team.id}>
                            {/* {teamName = team?.name} */}
                            {/* <Link to = {`/teams/${team.dataNBAId}`} state = {{title: team.name}}> */}
                            <Link to = {{
                                pathname: `/teams/${team.dataNBAId}`,
                                state: {
                                    title: teamName
                                }
                            }}>
                                <Card 
                                extra={<img style={{width:"100px", height:"100px"}} src = {team.teamLogoUrl} alt= "alt"/>}
                                hoverable
                                title={`${team.name}`}>
                                <p>{team.conference} Conference</p>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
    )
}

export default TeamFinder
