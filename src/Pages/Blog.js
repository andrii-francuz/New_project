import React, { Component } from 'react'
import { Container, ListGroup, Media, Row, Card, Col } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="9">
                            <Media className="m-5">
                                <img 
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://lh3.googleusercontent.com/proxy/BkCn5WNPTHrYSddhDsL7oWDUkTaA5QM0lB6vn7K8UKycoSnDo4z_L1MXozgBEe7bIXZuTjbF9WZT3C0SVjoajfkrpH9IGsYIDZCTzSloXvCDz5RmMUw7sA"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book. It has survived not only five centuries,
                                    </p>
                                </Media.Body>
                            </Media>

                            <Media className="m-5">
                                <img 
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://lh3.googleusercontent.com/proxy/BkCn5WNPTHrYSddhDsL7oWDUkTaA5QM0lB6vn7K8UKycoSnDo4z_L1MXozgBEe7bIXZuTjbF9WZT3C0SVjoajfkrpH9IGsYIDZCTzSloXvCDz5RmMUw7sA"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book. It has survived not only five centuries,
                                    </p>
                                </Media.Body>
                            </Media>

                            <Media className="m-5">
                                <img 
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://lh3.googleusercontent.com/proxy/BkCn5WNPTHrYSddhDsL7oWDUkTaA5QM0lB6vn7K8UKycoSnDo4z_L1MXozgBEe7bIXZuTjbF9WZT3C0SVjoajfkrpH9IGsYIDZCTzSloXvCDz5RmMUw7sA"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book. It has survived not only five centuries,
                                    </p>
                                </Media.Body>
                            </Media>

                            <Media className="m-5">
                                <img 
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://lh3.googleusercontent.com/proxy/BkCn5WNPTHrYSddhDsL7oWDUkTaA5QM0lB6vn7K8UKycoSnDo4z_L1MXozgBEe7bIXZuTjbF9WZT3C0SVjoajfkrpH9IGsYIDZCTzSloXvCDz5RmMUw7sA"
                                />
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book. It has survived not only five centuries,
                                    </p>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md="3">
                            <h5 className="text-center mt-5">Categories</h5>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Html/Css</ListGroup.Item>
                                    <ListGroup.Item>JavaScript</ListGroup.Item>
                                    <ListGroup.Item>Python</ListGroup.Item>
                                    <ListGroup.Item>Java</ListGroup.Item>
                                    <ListGroup.Item>C++</ListGroup.Item>
                                </ListGroup>
                            </Card>

                            <Card className="mt-3" bg="lite">
                                <Card.Body>
                                    <Card.Title>Site widget</Card.Title>
                                    <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
