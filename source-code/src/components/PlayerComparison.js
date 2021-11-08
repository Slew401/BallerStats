import React, { useEffect, useState} from 'react'
import axios from "axios"
const PlayerComparison = () => {
    const [teams, setTeams] = useState(null);
    const [playerInfo, setPlayerInfo] = useState(null);
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

    const url = "http://localhost:5000"
    useEffect(() => {
        fetch(`${url}/api/getPlayerInfo`, headers)
        .then(res => res.json())
        .then(res => setPlayerInfo(res));
    },[])

    console.log(playerInfo.CommonPlayerInfo);

    return (
        <div>
            PlayerCompLivesHere
        </div>
    )
}

export default PlayerComparison
