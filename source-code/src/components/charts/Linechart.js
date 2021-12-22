import React from 'react'
import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'

const Linechart = ({ stat, playerData }) => {
    
    
    const seasons = playerData
    const data = {
        
        datasets : [
        
        ]
    }
    
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
    
    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )
}

export default Linechart
