import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useGetAllPlayers } from "../../services/proxyAPI.js"
import { useGetPlayerSeasonsQuery, useGetAllPlayersQuery } from '../../services/proxyAPI.js';
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
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Linechart = ({ stat, playerOne, playerTwo, playerThree, playerFour, playerFive }) => {

    const [playerOneSeasonData, setPlayerOneSeasonsData] = useState();
    const [playerTwoSeasonData, setPlayerTwoSeasonData] = useState();
    const [playerThreeSeasonData, setPlayerThreeSeasonData] = useState();
    const [playerFourSeasonData, setPlayerFourSeasonData] = useState();
    const [playerFiveSeasonData, setPlayerFiveSeasonData] = useState();

    const {data:playerOneData, isLoading} = useGetPlayerSeasonsQuery(playerOne)
    const {data:playerTwoData} = useGetPlayerSeasonsQuery(playerTwo)
    const [pOneInfo, setPOneInfo] = useState();
    const [pTwoInfo, setPTwoInfo] = useState();
    const [pThreeInfo, setPThreeInfo] = useState();
    const [pFourInfo, setFourInfo] = useState();
    const [pFiveInfo, setPFiveInfo] = useState();


  //   useEffect(() => {
  //     async function getPOneData(){    
  //         await axios.get(`http://127.0.0.1:5000/api/getPlayerSeasons?player_id=${id}`)
  //         .then((response) =>{
  //             // console.log(response?.data?.SeasonTotalsRegularSeason);
  //             setSeasonData(response?.data?.SeasonTotalsRegularSeason);
  //             setLoadingData(false);
  //         });     
  //     }
  //     if(loadingData) {
  //         getPlayerData();
  //     }
  // })
    
    
    const firstPlayer = {
      stat : [  ],
      playerName: "",
      statlength: stat.length
    }

    const secondPlayer = {
      stat : [],
      playerName: "",
      statlength: stat.length
    }

    useEffect(() => {
      setPlayerOneSeasonsData(playerOneData?.SeasonTotalsRegularSeason)
      setPlayerTwoSeasonData(playerTwoData?.SeasonTotalsRegularSeason)
    })
    playerOneSeasonData?.forEach(season => firstPlayer?.stat.push(season[`${stat}`]))     
    playerTwoSeasonData?.forEach(season => secondPlayer?.stat.push(season[`${stat}`]))     

    console.log(playerOneSeasonData)
    console.log(secondPlayer.stat)

    const canvas = document.getElementById('graph')

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

    console.log(canvas)
    const label = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const data = {
        labels: label,
        datasets: [
          {
            label: "Lebron",
            data: firstPlayer.stat,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Second dataset",
            data: secondPlayer.stat,
            fill: false,
            borderColor: "#742774"
          }
        ]
      };

    return (
        <div>
         <Line className="" data = {data} options={{
          plugins: {
            title: {
              display: true,
              text: "Cryptocurrency prices"
            },
            legend: {
              display: true,
              position: "bottom"
           }
          }
        }}   id = "graph"/>
      </div>
    )
}

export default Linechart
