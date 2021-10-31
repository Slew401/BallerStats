import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import nba from "nba"; 
import axios from "axios"
import { useGetTeamsFromSourceQuery } from '../services/data.nba';

const proxy = "https://cors-anywhere.herokuapp.com/corsdemo/"

const TeamFinder = () => {
    const {data, isFetching} = useGetTeamsFromSourceQuery();  
    console.log(data.league.standard[0].teamId); 
    return (
        <div>
            <Container className = "content">
                <h1 className = "title-head">Team Finder</h1>
               
            </Container>
        </div>
    )
}

export default TeamFinder
