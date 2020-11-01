import React, { Component } from 'react'
import { Nav, Tab, Container, Row, Col } from 'react-bootstrap'

import Clouds from '../assets/clouds.jpg'
import Forest from '../assets/forest.jpg'
import Light from '../assets/light.jpg'
import Storm from '../assets/storm.jpg'
import Waves from '../assets/waves.jpg'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">First</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Second</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Third</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Fourth</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Fifth</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first"> 
                                    <img width={1000} height={500} src={ Clouds }/>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                                        remaining essentially unchanged.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"> 
                                    <img width={1000} height={500} src={ Forest }/>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
                                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                                        remaining essentially unchanged.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third"> 
                                    <img width={1000} height={500} src={ Light }/>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth"> 
                                    <img width={1000} height={500} src={ Storm }/>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                                        remaining essentially unchanged.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth"> 
                                    <img width={1000} height={500} src={ Waves }/>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
