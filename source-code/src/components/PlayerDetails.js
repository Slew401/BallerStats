import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import PlayerDetailsTable from "./tables/PlayerDetailsTable"
import GameLogTable from "./tables/GameLogTable"
import { gameLogColumns as COLUMNS } from './tables/columnFiles/GameLogColumns'
import { url } from "../url"
import {Divider} from "antd"

const PlayerDetails = () => {
    const [playerInfo, setPlayerInfo] = useState();    
    const params = useParams()
    const playerId = params?.playerid    
    const [headLineStats, setHeadLineStats] = useState();
    const [gameLogs, setGameLogs] = useState([])
    const headers = {
        'Host': 'stats.nba.com',
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=0',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    
    
    useEffect(() => {
        fetch(`${url}/getPlayerInfo?player_id=${playerId}`, headers)
        .then(res => res.json())
        .then((res)=> setPlayerInfo(res?.CommonPlayerInfo[0]))
    },[])
    useEffect(() => {
        fetch(`${url}/getPlayerInfo?player_id=${playerId}`, headers)
        .then(res => res.json())
        .then((res)=> setHeadLineStats(res?.PlayerHeadlineStats[0]))
    },[])

    useEffect(() =>{
        async function getPlayerGameLog(){
            await axios.get(`${url}/playerGamelogs?player_id=${playerId}`)
            .then((response) => {
                console.log(response)
                setGameLogs(response?.data?.PlayerGameLog)
            })
        }
        getPlayerGameLog()
    },[])

    const imgURL = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`
    return (
        <div id="teams-grid">
            <div className="teams-card">
                <img src = {imgURL} className="player-photo" alt = "NBA"/>
                <div className="team-details-card">
                    <span className="span-header">
                        <h1>{playerInfo?.DISPLAY_FIRST_LAST}</h1>
                        <h6>{playerInfo?.SCHOOL}</h6>
                        <h6>Height: {playerInfo?.HEIGHT} | Weight: {playerInfo?.WEIGHT}</h6>           
                        <h6>Current Team: {playerInfo?.TEAM_CITY} {playerInfo?.TEAM_NAME}</h6>
                        <h6>Jersey Number: {playerInfo?.JERSEY} | Position: {playerInfo?.POSITION}</h6>
                        <h6>2021-22 Season Stats: {headLineStats?.PTS} / {headLineStats?.REB} / {headLineStats?.AST}  PIE: {headLineStats?.PIE}</h6>
                    </span>
                </div>
            </div>
            <div className="teams-graph-card">
                <Divider><h1>Season Stats</h1></Divider>
                <PlayerDetailsTable id = {playerId} />
            </div>
            <div className="gamelog-card">
                <Divider><h1>Gamelog</h1></Divider>
                <GameLogTable gameLogs = {gameLogs} COLUMNS = {COLUMNS} />
            </div>
        </div>
    )
}

export default PlayerDetails
