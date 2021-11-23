import React, {useState, useEffect, useMemo} from 'react'
import { useGetPlayerSeasonsQuery } from "../../services/data.nba"
import {useTable} from 'react-table'
import {tableColumns as COLUMNS} from './columnFiles/PlayerDetailsColumns'
import './Table.css'
const PlayerDetailsTable = (props) => {    
    const {id} = props
    const [seasonData, setSeasonData] = useState([]);
    const { data:seasonStats, isFetching } = useGetPlayerSeasonsQuery(id); 
    
    useEffect(() => {
        setSeasonData(seasonStats?.SeasonTotalsRegularSeason);
        return
    }, [seasonStats])
    console.log(seasonData); 
    
    const columns = useMemo(() => COLUMNS, [])
    const playerData = useMemo(() => seasonData, [])
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data:playerData })
    
    return (
        <div className="table">
            
            <table {...getTableProps}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}> 
                                {row.cells.map((cell) => {
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
