import React, {useState, useEffect} from 'react'
import { Select, Col , Row, Divider } from "antd"
import { Container } from 'react-bootstrap'

import axios from 'axios'
import TeamsBasicScatter from './dataCharts/TeamsBasicScatter'

const { Option } = Select
function TeamBasicAnalysis() {
    const [statOne, setStatOne] = useState("PTS");
    const [statTwo, setStatTwo] = useState("AST");

    
    const basicStats = ["PTS", "OREB" ,'DREB','REB','AST','BLK','STL','FGM','FGA','FG_PCT',"FG3_PCT",'FTA','FTM','FT_PCT',]

    return (
        <Container fluid>
           <Row>
               <Col span = {6}>
               <div>
            <div className="advanced-stat-card">
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
                            onSelect={(key) => setStatOne(key)}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                        {basicStats.map((stat) => 
                            <Option key = {stat}><b>{stat}</b></Option>
                        )}
                        </Select>
                    </span>
                    <span className = "data-search">
                        <Select
                            showSearch
                            defaultValue = {"AST"}
                            style={{ width: 200 }}
                            placeholder="Select a Statistic"
                            optionFilterProp="children"
                            width = {"50px"}
                            onSelect={(key) => setStatTwo(key)}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                        {basicStats.map((stat) => 
                            <Option key = {stat}><b>{stat}</b></Option>
                        )}
                        </Select>
                    </span>
            </div>
        </div>
            </Col>
            <Col>
                <div  className = "graph-card">
                    <TeamsBasicScatter statOne = {statOne} statTwo = {statTwo}/>
                </div>
            </Col>
           </Row> 
        </Container>
        
    )
}

export default TeamBasicAnalysis
