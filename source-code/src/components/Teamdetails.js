import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'

const Teamdetails = () => {
    const location = useLocation()
    const { title } = location.state
    const params = useParams()
    const teamId = params?.teamid
    
    console.log()
    return (
        <Container className = "content">
            Team Details live here
        </Container>
    )
}

export default Teamdetails
