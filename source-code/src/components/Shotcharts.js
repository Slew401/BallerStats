import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as d3 from 'd3'

function Shotcharts() {
    const [shotData, setShotData] = useState()
    useEffect(() =>{
        async function getTeamInfo(){
            await axios.get(`http://127.0.0.1:5000/api/shotChart`)
            .then((response) => {
                setShotData(response?.data?.Shot_Chart_Detail)
            });
        }
        getTeamInfo()

    },[])
    console.log(shotData)
    const shots = []

    shotData?.forEach((shot) => shots.push({
        x: (shot.LOC_X + 250) / 10,
        y: (shot.LOC_Y + 50) / 10,
        action_type: shot.ACTION_TYPE,
        shot_type: shot.SHOT_TYPE,
        event_type: shot.EVENT_TYPE,
        name: shot.PLAYER_NAME,
        shot_made_flag: shot.SHOT_MADE_FLAG,    
    }))

    console.log(shots)

    const max = { 
        x: 780, 
        y: 650
    }
    let svg = d3.select("#shot-chart").html("");
    svg = d3.select("#shot-chart").append("svg:svg")
    .attr("width", max.x)
    .attr("height", max.y)
    .attr("background-color", "#14228b")
    .append("g")
    .attr("id", "shotchart");
    var courtUrl = "./basketballCourt.jpg";
            svg.append("svg:defs")
            .append("svg:pattern")
            .attr("id", "bg")
            .attr('patternUnits', 'userSpaceOnUse')
            .attr("width", max.x)
            .attr("height", max.y)
            .append("image")
            .attr("id","img")
            .attr("href", courtUrl)
            .attr("width", max.x)
            .attr("height", max.y);
            svg.append("rect")
            .attr("x", "")
            .attr("y", "")
            .attr("width", max.x)
            .attr("height", max.y)
            .attr("fill", "url(#bg)");
    
    return (
        <div id = "shot-chart">
        </div>
    )
}

export default Shotcharts
