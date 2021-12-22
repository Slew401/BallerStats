import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useGetSpecificTeamQuery } from '../services/data.nba'

const Teamdetails = () => {
    const location = useLocation()
    const { title } = location.state
    const params = useParams()
    const teamId = params?.teamid
    const [teamInfo, setTeamInfo] = useState()
    const [teamRoster, setTeamRoster] = useState()

    console.log(teamId)
    useEffect(() =>{
        async function getTeamInfo(){
            await axios.get(`http://127.0.0.1:5000/api/getTeamBasicInfo?team_id=${teamId}`)
            .then((response) => {
                setTeamInfo(response?.data?.TeamInfoCommon)
            });
        }
        getTeamInfo()
    },[])
    
     useEffect(() =>{
        async function getTeamRoster(){
            await axios.get(`http://127.0.0.1:5000/api/getTeamRoster?team_id=${teamId}`)
            .then((response) => {
                setTeamRoster(response?.data?.CommonTeamRoster
                    )
            })
        }
        getTeamRoster()
    },[])
    
    console.log(teamInfo)
    console.log(teamRoster)
    
    return (
        <Container className = "content">

        </Container>
    )
}

export default Teamdetails
