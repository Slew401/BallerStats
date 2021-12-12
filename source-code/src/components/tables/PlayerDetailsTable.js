import React, {useState, useEffect, useMemo} from 'react'
import { useGetPlayerSeasonsQuery } from "../../services/data.nba"
import {useTable} from 'react-table'
import {tableColumns as COLUMNS} from './columnFiles/PlayerDetailsColumns'
import axios from 'axios'
import './Table.css'

const PlayerDetailsTable = (props) => {    
    const {id} = props
    const [seasonData, setSeasonData] = useState([]);
    const [loadingData, setLoadingData] = useState(true)
    
    const columns = useMemo(() => COLUMNS, [])
    
    useEffect(() => {
        async function getPlayerData(){    
            await axios.get(`http://127.0.0.1:5000/api/getPlayerSeasons?player_id=${id}`)
            .then((response) =>{
                // console.log(response?.data?.SeasonTotalsRegularSeason);
                setSeasonData(response?.data?.SeasonTotalsRegularSeason);
                setLoadingData(false);
            });     
        }
        if(loadingData) {
            getPlayerData();
        }
    },[])
      const ast = "AST"
      let points = []
      console.log(seasonData)
      seasonData.forEach(season => points.push(season[`${ast}`]))
      console.log(points)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data:seasonData });
    
    return (
        <div className="table">
            <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
            
        </div>
    )
}

export default PlayerDetailsTable

 // const dataLoad = () => {
    //     setPlayerObjects(...playerObjects, { 
    //         stat : targetStat,
    //         playerId: playerID,
    //         playerSeasons: playerSeasons
    //     })
    // }

    // useEffect(() => {
    //     dataLoad()
    // },[playerID])