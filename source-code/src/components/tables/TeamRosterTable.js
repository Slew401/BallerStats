import React, { useState, useEffect, useMemo} from 'react'
import { useParams } from 'react-router'
import {tableColumns as COLUMNS} from './columnFiles/TeamDetailsColumn'
import {useTable, useSortBy} from 'react-table'
import axios from 'axios'
import './Table.css'

function TeamRosterTable(props) {
    const params = useParams()
    const teamId = params?.teamid
    const [teamRoster, setRoster] = useState([])
    const [loadingData, setLoadingData] = useState(true)
    const columns = useMemo(() => COLUMNS, [])
    console.log(teamId)
    useEffect(() =>{
        async function getTeamRoster(){
            await axios.get(`http://127.0.0.1:5000/api/getTeamRoster?team_id=${props.id}`)
            .then((response) => {
                console.log(response?.data?.CommonTeamRoster)
                setRoster(response?.data?.CommonTeamRoster)
                setLoadingData(false);
            })
        }
        if(loadingData){
            getTeamRoster()
        }
    },[])
    // console.log(teamRoster)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data:teamRoster }, useSortBy);
    
    return (
        <div className="table">
            <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
              <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
              </th>
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
export default TeamRosterTable
