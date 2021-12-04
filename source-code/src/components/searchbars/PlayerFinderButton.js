import React from 'react'
import { Button } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"


function PlayerFinderButton({ value }) {
    return (
        <div>
            {<Link to={`/players/${value}`}> 
                <Button type = "primary" shape = "circle" icon = {<SearchOutlined/>} />
            </Link>}
        </div>
    )
}

export default PlayerFinderButton
