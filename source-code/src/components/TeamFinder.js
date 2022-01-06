import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import teamsJSON from "../json/teams.json";
import { Card, Row, Col, Input } from 'antd'
import { Link } from "react-router-dom"
import { async } from "async";

const TeamFinder = () => {
    const [teams, setTeams] = useState(teamsJSON)   
    const [searchTerm, setSearchTerm] = useState(" ") 
    useEffect(() =>{
        const filteredTeams = teamsJSON?.filter((team) => team.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setTeams(filteredTeams)
    },[searchTerm])
    console.log(teams)
    console.log(searchTerm)
    let teamName;      
        return (
            <Container className = "content">
                <h1 className = "title-head">Team Finder</h1>
                <em><p style ={{textAlign: 'center'}}>Search for Teams here or filter the Team Cards below to view their stats</p></em>
                <span className = "search">
                    <Input placeholder = "Seach Teams Here" onChange = {(e) => setSearchTerm(e.target.value)} style = {{width:"200px"}}>
                    </Input>
                </span>
                <Row gutter = {[32,32]} className = "team-card-container">
                    {teams?.map((team) => (
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
