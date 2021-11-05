import React, { useEffect, useState} from 'react'
import axios from "axios"
const PlayerComparison = () => {
    const [teams, setTeams] = useState(null);

    // useEffect(() => {
    //     fetch("/SRteams")
    //     .then(res => res.json())
    //     .then(data => setTeams(data));
    // },[])

    //console.log(teams); 
    return (
        <div>
            PlayerCompLivesHere
        </div>
    )
}

export default PlayerComparison
