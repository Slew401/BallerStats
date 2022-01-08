import React, {useEffect, useState} from 'react'
import { Select, Col , Row, Divider } from "antd"
import axios from 'axios'
import { url } from 'url'
import TeamsAdvScatter from "./dataCharts/TeamsAdvScatter.js"
import TSAChart from "./dataCharts/TSAChart.js"
const { Option } = Select
function Teamstats() {
    const [statOne, setStatOne] = useState("OFF_RATING");
    const [statTwo, setStatTwo] = useState("DEF_RATING");
    const basicStats = ["PTS", "OREB" ,'DREB','REB','AST','BLK','STL','FGM','FGA','FG_PCT',"FG3_PCT",'FTA','FTM','FT_PCT',]
    const advancedStats = ["AST_PCT","AST_RATIO", "AST_TO", "DEF_RATING", "DREB_PCT", "EFG_PCT","NET_RATING","OFF_RATING","OREB_PCT","PACE","PACE_PER40","PIE","POSS","REB_PCT","TS_PCT"]
    return (
        <div className = "advanced-stat-card">
            <div>
                <Divider style = {{}}/>
                <h5 style = {{textAlign : "center"}}>Pick a Stat</h5>
                    <span className = "data-search">
                        <Select
                            showSearch
                            defaultValue = {"OFF_RATING"}
                            style={{ width: 200 }}
                            placeholder="Select a Statistic"
                            optionFilterProp="children"
                            width = {"50px"}
                            onSelect={(key) => setStatOne(key)}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                        {advancedStats.map((stat) => 
                            <Option key = {stat}><b>{stat}</b></Option>
                        )}
                        </Select>
                    </span>
                    <span className = "data-search">
                        <Select
                            showSearch
                            defaultValue = {"DEF_RATING"}
                            style={{ width: 200 }}
                            placeholder="Select a Statistic"
                            optionFilterProp="children"
                            width = {"50px"}
                            onSelect={(key) => setStatTwo(key)}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                        {advancedStats.map((stat) => 
                            <Option key = {stat}><b>{stat}</b></Option>
                        )}
                        </Select>
                    </span>
                    <TeamsAdvScatter statOne={statOne} statTwo={statTwo}/>
            </div>
        </div>
    )
}

export default Teamstats
