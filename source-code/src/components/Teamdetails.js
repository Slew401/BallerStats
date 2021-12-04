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
    console.log(teamId)
    // useEffect(() => {
    //     fetch("https://nba-player-individual-stats.p.rapidapi.com/players/firstname?firstname=luka", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com",
    //             "x-rapidapi-key": "6e009c2a9amsh074604bd5f4bf85p1222d5jsne72d4a262676"
    //         }
    //     })
    //     .then(response => {
    //         console.log(response.json());
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // },[teamId])

    return (
        <Container className = "content">
            Team Details live here
        </Container>
    )
}

export default Teamdetails
