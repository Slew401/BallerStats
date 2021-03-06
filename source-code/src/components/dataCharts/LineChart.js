import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { auth } from "../../firebase";
import { useGetPlayerSeasonsQuery } from '../../services/data.nba';
import { useAuthState } from "react-firebase-hooks/auth";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { url } from '../../url'
import { Line } from 'react-chartjs-2'
import SaveGraph from '../SaveGraph'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Linechart = ({ stat, playerOne, playerTwo, playerThree, playerFour }) => {
  const [user, loading, error] = useAuthState(auth)

    const [playerOneSeasonData, setPlayerOneSeasonsData] = useState();
    const [playerTwoSeasonData, setPlayerTwoSeasonData] = useState();
    const [playerThreeSeasonData, setPlayerThreeSeasonData] = useState();
    const [playerFourSeasonData, setPlayerFourSeasonData] = useState();
    const [playerFiveSeasonData, setPlayerFiveSeasonData] = useState();

    const {data:playerOneData} = useGetPlayerSeasonsQuery(playerOne)
    const {data:playerTwoData} = useGetPlayerSeasonsQuery(playerTwo)
    const {data:playerThreeData} = useGetPlayerSeasonsQuery(playerThree)
    const {data:playerFourData} = useGetPlayerSeasonsQuery(playerFour)
    const [pOneInfo, setPOneInfo] = useState();
    const [pTwoInfo, setPTwoInfo] = useState();
    const [pThreeInfo, setPThreeInfo] = useState();
    const [pFourInfo, setPFourInfo] = useState();

    const [canvas, setCanvas] = useState();

     useEffect(() => {
       async function getPOneData(){    
           await axios.get(`${url}/getPlayerInfo?player_id=${playerOne}`)
           .then((response) =>{
                  setPOneInfo(response?.data?.CommonPlayerInfo[0]?.DISPLAY_FIRST_LAST)
           });     
       }
        getPOneData();
    },[playerOne])
      
    useEffect(() => {
       async function getPTwoData(){    
           await axios.get(`${url}/getPlayerInfo?player_id=${playerTwo}`)
           .then((response) =>{
                  setPTwoInfo(response?.data?.CommonPlayerInfo[0]?.DISPLAY_FIRST_LAST)
           });     
       }
        getPTwoData();
    },[playerTwo])
    
    useEffect(() => {
       async function getPThreeData(){    
           await axios.get(`${url}/getPlayerInfo?player_id=${playerThree}`)
           .then((response) =>{
                  setPThreeInfo(response?.data?.CommonPlayerInfo[0]?.DISPLAY_FIRST_LAST)
           });     
       }
        getPThreeData();
    },[playerThree])
   
    useEffect(() => {
       async function getPFourData(){    
           await axios.get(`${url}/getPlayerInfo?player_id=${playerFour}`)
           .then((response) =>{
                  setPFourInfo(response?.data?.CommonPlayerInfo[0]?.DISPLAY_FIRST_LAST)
           });     
       }
        getPFourData();
    },[playerFour])
     
    const firstPlayer = {
      stat : [  ],
      playerName: pOneInfo,
      statlength: stat.length
    }
    const secondPlayer = {
      stat : [],
      playerName: pTwoInfo,
      statlength: stat.length
    }

    const thirdPlayer = {
      stat : [],
      playerName: pThreeInfo,
      statlength: stat.length
    }

    const fourthPlayer = {
      stat : [],
      playerName: pFourInfo,
      statlength: stat.length
    }

    useEffect(() => {
      setPlayerOneSeasonsData(playerOneData?.SeasonTotalsRegularSeason)
      setPlayerTwoSeasonData(playerTwoData?.SeasonTotalsRegularSeason)
      setPlayerThreeSeasonData(playerThreeData?.SeasonTotalsRegularSeason )
      setPlayerFourSeasonData(playerFourData?.SeasonTotalsRegularSeason)
    })

    
    playerOneSeasonData?.forEach(season => firstPlayer?.stat.push(season[`${stat}`]))     
    playerTwoSeasonData?.forEach(season => secondPlayer?.stat.push(season[`${stat}`]))   
    playerThreeSeasonData?.forEach(season => thirdPlayer?.stat.push(season[`${stat}`]))
    playerFourSeasonData?.forEach(season => fourthPlayer?.stat.push(season[`${stat}`]))
  
    

    useEffect(() => {
      const url = document?.getElementById('graph')?.toDataURL()
      setCanvas(url)
    })

    var chartOptions = {
      showScale: true,
      pointDot: true,
      showLines: false,
   
      title: {
         display: true,
         text: 'Chart.js Bar Chart'
      },
   
      legend: {
         display: true,
         labels: {
            boxWidth: 50,
            fontSize: 10,
            fontColor: '#bbb',
            padding: 5,
         }
      },
   
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true,
               min: 0,
               max: 100
            }
         }]
      }
   }

   const label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
   
    const data = {
        labels: label,
        datasets: [
          {
            label: `${pOneInfo}`,
            data: firstPlayer?.stat,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
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
      <>
        <div className="graph-card">
         <Line className="" data = {data}  options={{
          plugins: {
            title: {
              display: true,
              text: `${stat} Comparison between ${pOneInfo}, ${pTwoInfo}, ${pThreeInfo} and ${pFourInfo}`
            },
            legend: {
              display: true,
              position: "bottom"
           }
          }
        }}   id = "graph"/>
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

export default Linechart




