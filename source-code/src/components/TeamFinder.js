import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'

import { useGetTeamsQuery } from '../services/playerApi';

const TeamFinder = () => {
    const {data: teamObject, isFetching} = useGetTeamsQuery();
    const [Team, setTeam] = useState(teamObject?.team); 
    console.log(Team); 
    if(isFetching) return "Loading..."; 

    return (
        <div>
            <Container className = "content">
                <h1 className = "title-head">Team Finder</h1>
                <Row>

                </Row>
            </Container>
        </div>
    )
}

export default TeamFinder
