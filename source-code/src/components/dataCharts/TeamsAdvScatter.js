import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useAuthState } from "react-firebase-hooks/auth";
import { url } from '../../url'
import { auth } from "../../firebase";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import SaveGraph from '../SaveGraph'

function TeamsAdvScatter({statOne, statTwo}) {
    const [teams, setTeams] = useState()
    const [advStats, setAdvStats] = useState()
    const [canvas, setCanvas] = useState()
    const [user, loading, error] = useAuthState(auth)
    useEffect(() =>{
        async function getTeamStats(){
            await axios.get(`${url}/teamStatsAdvanced`)
            .then((response) => {
                setTeams(response?.data?.LeagueDashTeamStats)
            },[]);
        }
        getTeamStats()
    },[])

    const datasets = []
    teams?.forEach(team => datasets.push({
        'x': team[`${statOne}`],
        'y': team[`${statTwo}`],
        'name': team[`TEAM_NAME`],
    }))
    const label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const data = {
        labels: datasets.map(data => data?.name),
        datasets:[{
          label: "Teams Scatter Plot",
          data: datasets,
          backgroundColor: "violet",
          borderColor: "violet" ,
          radius: 5
        }] 
      };

      useEffect(() => {
        const url = document?.getElementById('graph')?.toDataURL()
        console.log(url)
        setCanvas(url)
      })
    return (
        <>
          <div className="graph-card">
            <Bubble className="" data={data} options={{
          plugins: {
            title: {
              display: true,
              text: `XY 4 Player Comparison between ${statOne} on X and ${statTwo} on Y`
            },
            legend: {
              display: true,
              position: "bottom"
           }, scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true,
               min: 0,
               max: 100
            }
         }]
      }
          }
        }}  id = "graph" />
        </div>
        {user ? 
          <div>
              <SaveGraph canvas={canvas}/>
          </div> 
          
              :
              <></>
              }
        </>
        
    )
}

export default TeamsAdvScatter
