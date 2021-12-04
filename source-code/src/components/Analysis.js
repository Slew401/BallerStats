import React, { useEffect, useState} from 'react'
import { useGetBoxScore } from "../services/data.nba"
import { Container } from 'react-bootstrap'
import activePlayers from "../json/activePlayers.json"
import { Select, Col , Row, Divider, Button} from "antd"
import { SearchOutlined } from '@ant-design/icons';
import { useGetPlayerSeasonsQuery
 } from '../services/data.nba'
const { Option } = Select
const Analysis = () => {
    const [value, setValue] = useState(); 
    const [targetStat, setTargetStat] = useState("PTS");
    const [playerID, setPlayerID] = useState();
    const {data:playerStats, isFetching} = useGetPlayerSeasonsQuery(playerID)
    const data = activePlayers.map(({full_name, id}) => ({
        label: full_name,
        value: id,
    }))

    console.log(playerStats)
    
    const basicStats = ["PTS", "OREB" ,'DREB','TREB','AST','BLK','STL','FGM','FGA','FG%','3FG%','FT%',]
    
    function getPlayerData(value) {
        setTargetStat(value)
    }



    return (
        <Container fluid>
            <Row>
                <Col span = {6}>
                    <div style ={{border :"1px solid red"}} className = "data-card">
                        <h3 style = {{textAlign : "center"}}>Stat Visualizer</h3>
                        <Divider style = {{}}/>
                        <h5 style = {{textAlign : "center"}}> Pick a Stat</h5>
                        <span className = "data-search">
                            <Select
                                showSearch
                                defaultValue = {"PTS"}
                                style={{ width: 200 }}
                                placeholder="Select a Statistic"
                                optionFilterProp="children"
                                width = {"50px"}
                                onChange={(key) => setValue(key)}
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
                                placeholder="Select Player 1"
                                optionFilterProp="children"
                                onChange={(key) => setPlayerID(key)}
                            >
                            {activePlayers.map((player) =>
                                <Option key = {player.id}>{player.full_name}</Option>
                            )}
                            </Select>
                            <Button icon={<SearchOutlined />} onClick={() => console.log(playerID)}/>
                        </span>
                            <Divider/>        
                        </span>
                        </div>
                        <h5 style = {{textAlign : "center"}}>Loaded Players</h5>

                    </div>
                </Col>
                <Col>Hallo</Col>
            </Row>
        </Container>
    )
}

export default Analysis
