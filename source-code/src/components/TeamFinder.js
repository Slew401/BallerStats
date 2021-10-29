import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import nba from "nba"; 
import axios from "axios"
import { useGetTeamRosterQuery } from '../services/sr.api';
const proxy = "https://cors-anywhere.herokuapp.com/corsdemo/"

const TeamFinder = () => {
    fetch(`https://data.nba.net/10s/prod/v1/2018/players/2544_uber_stats.json`).then(Response => {
        console.log(Response.json());
        
    })

    const {data, isFetching} = useGetTeamRosterQuery();
    console.log(data);
    return (
        <div>
            <Container className = "content">
                <h1 className = "title-head">Team Finder</h1>
               
            </Container>
        </div>
    )
}

export default TeamFinder
