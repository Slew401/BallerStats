import React from 'react'

import { useGetTeamsProfileQuery } from '../services/sportsradar'


const PlayerFinder = () => {
    const nba = require("nba");
    const player = nba.teams("1610612739");
    console.log(player)
    return (
        

        <div>
            The PlayerFinder Lives Here
        </div>
    )
}

export default PlayerFinder
