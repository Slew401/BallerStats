import React, {useState, useEffect} from 'react'
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,  LabelList,ResponsiveContainer } from 'recharts';
import SaveGraph from '../SaveGraph'
import axios from 'axios'
import { url } from '../../url'
function TeamsBasicScatter({statOne, statTwo}) {
    const [teams, setTeams] = useState()
    const [canvas, setCanvas] = useState();
    const [user, loading, error] = useAuthState(auth)

    useEffect(() =>{
        async function getTeamStats(){
            await axios.get(`${url}/teamStatsBasic`)
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
    console.log(datasets)

    useEffect(() => {
        const url = document?.getElementById("svg")
        const svg = new XMLSerializer().serializeToString(url)
        const base64 = window.btoa(svg)
        const res = `data:image/svg+xml;base64,${base64}`
        console.log(res)
        setCanvas(base64)
      })

    return (
        <>
        <div className="graph-card">
            <ScatterChart width ={900} height = {500} margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }} id = "svg">
            <CartesianGrid/>
            <XAxis type="number" dataKey="x" domain={'dataMin- 10' , 'dataMax' + 10}name={statOne}/>
            <YAxis type="number" dataKey="y" domain={'dataMin' - 10, 'dataMax' + 10} name={statTwo}/>
            <Tooltip cursor = {{strokeDasharray: '3 3'}}/>
            <Scatter name="Data" data={datasets} fill="#8884d8">
            <LabelList dataKey = "name"/>
            </Scatter>
            </ScatterChart>
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

export default TeamsBasicScatter
