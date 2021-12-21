import { useEffect, useState } from 'react'
import axios from 'axios'

function useGetTeamDetails(teamId) {
    const [teamDetails, setTeamDetails] = useState();
    useEffect(() =>{
        const id = teamId
        async function getPlayerData(id){    
            await axios.get(`http://127.0.0.1:5000/api/getTeamBasicInfo?team_id=${id}`)
            .then((response) =>{
                setTeamDetails(response);
            });     
        }
    })
    return [teamDetails]
}

export default useGetTeamDetails
