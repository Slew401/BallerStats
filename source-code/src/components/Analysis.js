import React, { useEffect, useState} from 'react'
import { useGetBoxScore } from "../services/data.nba"
import { Container } from 'react-bootstrap'
import activePlayers from "../json/activePlayers.json"
import { Select, Col , Row, Divider, Button} from "antd"
import { SearchOutlined } from '@ant-design/icons';
import { useGetPlayerSeasonsQuery } from '../services/data.nba'
import Linechart from './charts/Linechart.js'
const { Option } = Select

const Analysis = () => {
    const [value, setValue] = useState(); 
    const [targetStat, setTargetStat] = useState("PTS");
    const [playerID, setPlayerID] = useState();
    const {data:playerData, isFetching} = useGetPlayerSeasonsQuery(playerID)
    const [playerSeasons, setSeasons] = useState(); 
    const [playerObjects, setPlayerObjects] = useState();

    useEffect(() => {
        setSeasons(playerData?.SeasonTotalsRegularSeason)
    })
    
    console.log(playerSeasons)

    const basicStats = ["PTS", "OREB" ,'DREB','TREB','AST','BLK','STL','FGM','FGA','FG%','3FG%','FT%',]
    
    const dataLoad = key => {
        setPlayerID(key)
    }
    
    
    return (
        <Container fluid>
            <Row>
                <Col span = {6}>
                    <div style ={{border :"1px solid red"}} className = "data-card">
                        <h3 style = {{textAlign : "center", marginTop : "20px"}}>Stat Visualizer</h3>
                        <Divider style = {{}}/>
                        <h5 style = {{textAlign : "center"}}>Pick a Stat</h5>
                        <span className = "data-search">
                            <Select
                                showSearch
                                defaultValue = {"PTS"}
                                style={{ width: 200 }}
                                placeholder="Select a Statistic"
                                optionFilterProp="children"
                                width = {"50px"}
                                onChange={(key) =>  setTargetStat(key)}
                                filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                            {basicStats.map((stat) => 
                                <Option key = {stat}>{stat}</Option>
                            )}
                            </Select>
                        </span>
                        <Divider/>
                       <div> 
                        <span className="wrapper">   
                            <h5 style = {{textAlign : "center"}}>Pick Players</h5>
                            <span className = "data-search">
                            <Select
                                showSearch
                                style = {{width:200}}
                                placeholder="Select A Player"
                                optionFilterProp="children"
                                onChange={(key) => setPlayerID(key)}
                            >
                            {activePlayers.map((player) =>
                                <Option key = {player.id}>{player.full_name}</Option>
                            )}
                            </Select>
                            <Button onClick={() => console.log(playerID)}>Add Player</Button>
                        </span>
                            <Divider/>        
                        </span>
                        </div>
                        <h5 style = {{textAlign : "center"}}>Loaded Players</h5>

                    </div>
                </Col>
                <Col>
                <Linechart stat = {targetStat} playerData = {playerSeasons} />
                </Col>
            </Row>
        </Container>
    )
}

export default Analysis
