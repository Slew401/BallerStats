import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import TeamRosterTable from './tables/TeamRosterTable'
import { gameLogColumns as COLUMNS } from './tables/columnFiles/GameLogColumns'
import GameLogTable from "./tables/GameLogTable"
import { url } from "../url"
const Teamdetails = () => {
    const location = useLocation()
    const { title } = location.state
    const params = useParams()
    const teamId = params?.teamid
    const [teamInfo, setTeamInfo] = useState()
    const [gameLogs, setGameLogs] = useState([])

    const teamImgUrl = `https://cdn.nba.com/logos/nba/${teamId}/global/L/logo.svg`
    // console.log(teamId)
    
    useEffect(() =>{
        async function getTeamInfo(){
            await axios.get(`${url}/getTeamBasicInfo?team_id=${teamId}`)
            .then((response) => {
                setTeamInfo(response?.data?.TeamInfoCommon[0])
            });
        }
        getTeamInfo()
    },[])
    
    useEffect(() =>{
        async function getTeamGameLogs(){
            await axios.get(`${url}/teamGamelogs?team_id=${teamId}`)
            .then((response) => {
                setGameLogs(response?.data?.TeamGameLog)
            });
        }
        getTeamGameLogs()
    },[])

    

    // console.log(teamInfo)
    return (
        <div id = "teams-grid">
            <div className="teams-card">
                <img src = {teamImgUrl} className="teamLogo" alt = "NBA"/>
                <div className="team-details-card">
                    <span className = "span-header">
                        <h1 >{teamInfo?.TEAM_CITY} {teamInfo?.TEAM_NAME} <h4>({teamInfo?.TEAM_ABBREVIATION})</h4> </h1>  
                    </span>
                    <h6>Conference Rank: {teamInfo?.DIV_RANK} | Division Rank: {teamInfo?.DIV_RANK}</h6>
                    <h6>Record: {teamInfo?.W}-{teamInfo?.L} | Winning Percentage: {parseFloat(teamInfo?.PCT * 100).toFixed(2)}%</h6>
                </div>
            </div>
            <div className="teams-graph-card">
                <TeamRosterTable id = {teamId}/>
            </div>
            <div className="gamelog-card">
                <GameLogTable gameLogs={gameLogs} COLUMNS = {COLUMNS}/>
            </div>
        </div>
    )
}

export default Teamdetails
