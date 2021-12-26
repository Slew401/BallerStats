import React, { useState, useEffect } from 'react'
import { useGetPlayerSeasonsQuery } from '../../services/data.nba';
import axios from 'axios'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bubble } from 'react-chartjs-2';

function TSAChart({ playerOne, playerTwo, playerThree, playerFour, statOne, statTwo }) {
    const [playerOneSeasonData, setPlayerOneSeasonsData] = useState();
    const [playerTwoSeasonData, setPlayerTwoSeasonData] = useState();
    const [playerThreeSeasonData, setPlayerThreeSeasonData] = useState();
    const [playerFourSeasonData, setPlayerFourSeasonData] = useState();
    const {data:playerOneData} = useGetPlayerSeasonsQuery(playerOne)
    const {data:playerTwoData} = useGetPlayerSeasonsQuery(playerTwo)
    const {data:playerThreeData} = useGetPlayerSeasonsQuery(playerThree)
    const {data:playerFourData} = useGetPlayerSeasonsQuery(playerFour)
    const [pOneInfo, setPOneInfo] = useState();
    const [pTwoInfo, setPTwoInfo] = useState();
    const [pThreeInfo, setPThreeInfo] = useState();
    const [pFourInfo, setPFourInfo] = useState();


    useEffect(() => {
        setPlayerOneSeasonsData(playerOneData?.SeasonTotalsRegularSeason)
        setPlayerTwoSeasonData(playerTwoData?.SeasonTotalsRegularSeason)
        setPlayerThreeSeasonData(playerThreeData?.SeasonTotalsRegularSeason )
        setPlayerFourSeasonData(playerFourData?.SeasonTotalsRegularSeason)
      })
      useEffect(() => {
        async function getPOneData(){    
            await axios.get(`http://127.0.0.1:5000/api/getPlayerInfo?player_id=${playerOne}`)
            .then((response) =>{
                   setPOneInfo(response?.data?.CommonPlayerInfo[0]?.DISPLAY_FIRST_LAST)
            });     
        }
         getPOneData();
     },[playerOne])
          useEffect(() => {
        async function getPTwoData(){    
            await axios.get(`http://127.0.0.1:5000/api/getPlayerInfo?player_id=${playerTwo}`)
            .then((response) =>{
                   setPTwoInfo(response?.data?.CommonPlayerInfo[0]?.DISPLAY_FIRST_LAST)
            });     
        }
         getPTwoData();
     },[playerTwo])
          useEffect(() => {
        async function getPThreeData(){    
            await axios.get(`http://127.0.0.1:5000/api/getPlayerInfo?player_id=${playerThree}`)
            .then((response) =>{
                   setPThreeInfo(response?.data?.CommonPlayerInfo[0]?.DISPLAY_FIRST_LAST)
            });     
        }
         getPThreeData();
     },[playerThree])
          useEffect(() => {
        async function getPFourData(){    
            await axios.get(`http://127.0.0.1:5000/api/getPlayerInfo?player_id=${playerFour}`)
            .then((response) =>{
                   setPFourInfo(response?.data?.CommonPlayerInfo[0]?.DISPLAY_FIRST_LAST)
            });     
        }
         getPFourData();
     },[playerFour])
    
      const firstPlayer = {
        stat : [  ],
        playerName: "",
      }
  
      const secondPlayer = {
        stat : [],
        playerName: "",
        
      }
  
      const thirdPlayer = {
        stat : [],
        playerName: "",
        
      }
  
      const fourthPlayer = {
        stat : [],
        playerName: "",
        
      }
    const label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    playerOneSeasonData?.forEach(season => firstPlayer?.stat.push({
        'x': season[`${statOne}`],
        'y': season[`${statTwo}`]
    }))
    playerTwoSeasonData?.forEach(season => secondPlayer?.stat.push({
        'x': season[`${statOne}`],
        'y': season[`${statTwo}`]
    }))
    playerThreeSeasonData?.forEach(season => thirdPlayer?.stat.push({
        'x': season[`${statOne}`],
        'y': season[`${statTwo}`]
    }))
    playerFourSeasonData?.forEach(season =>fourthPlayer?.stat.push({
        'x': season[`${statOne}`],
        'y': season[`${statTwo}`]
    }))
    
    const data = {
        labels: label,
        datasets: [
          {
            label: `${pOneInfo}`,
            data: firstPlayer.stat,
            fill: true,
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: `${pTwoInfo}`,
            data: secondPlayer.stat,
            fill: false,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "red"
          },
          {
            label: `${pThreeInfo}`,
            data: thirdPlayer.stat,
            fill: false,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "green"  
          },
          {
            label: `${pFourInfo}`,
            data: fourthPlayer.stat,
            fill: false,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "violet" 
          }
        ]
      };
    return (
        <div className="graph-card">
            <Bubble className="" data={data} options={{
          plugins: {
            title: {
              display: true,
              text: `XY 4 Player Comparison between ${statOne} and ${statTwo}`
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
    )
}

export default TSAChart
