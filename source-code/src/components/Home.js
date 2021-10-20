import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Home = () => {
    return (
           
        <div>
    <Container className = "content">
            <Row>
                <Col><b> Explore and Analyze your favorite NBA players with BallerStats</b> Your one stop shop for NBA player Statistics.
                Build various Graphs and Data Visualizations exploring Basic and Advanced Stats, Shot Charts and up to date news on Every player and team in the league, and 
                feel free to share it across the web!
                 </Col>
                <Col className = "col-size"> IMAGE</Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home
