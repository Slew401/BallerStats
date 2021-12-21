import React, { useState} from 'react'
import { Container } from 'react-bootstrap'
import activePlayers from "../json/activePlayers.json"
import { Select, Col , Row, Divider, Button} from "antd"

import Linechart from './charts/Linechart.js'
const { Option } = Select

const Analysis = () => {
    const [targetStat, setTargetStat] = useState("PTS");
    const [playerOneID, setPlayerOneID] = useState();
    const [playerTwoID, setPlayerTwoID] = useState();
    const [playerThreeID, setPlayerThreeID] = useState();

    const basicStats = ["PTS", "OREB" ,'DREB','TREB','AST','BLK','STL','FGM','FGA','FG%','3FG%','FT%',]
    
    const setPlayerOne = key => {
        // e.preventDefault();
        setPlayerOneID(key)
        console.log(key)
    }
        
    const setPlayerTwo = key => {
        setPlayerTwoID(key)
        console.log(key)
    }

    return (
        <Container fluid>
            <Row>
                <Col span = {6}>
                    <div className = "data-card">
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
                                onSelect={(key) => setTargetStat(key)}
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
                                allowClear
                                showSearch
                                style = {{width:200}}
                                placeholder="Select Player One"
                                optionFilterProp="children"
                                onSelect={(key) => setPlayerOne(key)}
                            >
                            {activePlayers.map((player) =>
                                <Option key = {player.id}>{player.full_name}</Option>
                            )}
                            </Select>
                            {/* <Button>Add Player</Button> */}
                        </span>
                        <span className = "data-search">
                            <Select
                                allowClear
                                showSearch
                                style = {{width:200}}
                                placeholder="Select Player Two"
                                optionFilterProp="children"
                                onSelect={(key) => setPlayerTwo(key)}
                            >
                            {activePlayers.map((player) =>
                                <Option key = {player.id}>{player.full_name}</Option>
                            )}
                            </Select>
                            {/* <Button>Add Player</Button> */}
                        </span>
                            <Divider/>   
                                 
                        </span>
                        
                        </div>
                    </div>
                </Col>
                <Col>
                <div className="graph-card">
                    <Linechart stat = {targetStat} playerOne = {playerOneID} playerTwo = {playerTwoID} />
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Analysis
