import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import { useGetSpecificTeamQuery } from '../services/data.nba'

const Teamdetails = () => {
    const url = "http://data.nba.net/10s"
    const location = useLocation()
    const { title } = location.state
    const params = useParams()
    const teamId = params?.teamid
    const [teamDetails, setTeamDetails] = useState(null)
    
    // useEffect(() => {
    //     fetch(`${url}/prod/v1/2021/teams/${teamId}/leaders.json`)
    //     .then(res => res.json())
    //     .then(res => setTeamDetails(res.league.standard));
    // },[teamId])
    // console.log(data); 

    return (
        <Container className = "content">
            Team Details live here
        </Container>
    )
}

export default Teamdetails
