import React, { useEffect, useState} from 'react'
import axios from "axios"
import { useGetBoxScore } from "../services/data.nba"
import { Container, Placeholder } from 'react-bootstrap'

const PlayerComparison = () => {
    const {data, isFetching} = useGetBoxScore(); 
    console.log(data)
    return (
        <Container >
            PlayerCompLivesHere
        </Container>
    )
}

export default PlayerComparison
