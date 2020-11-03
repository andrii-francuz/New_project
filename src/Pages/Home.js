import React, { Component } from 'react'
import { Card, CardDeck, Carousel, Container, Button } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Team</h2>
                    <CardDeck className="m-4">
                        <Card border="success">
                            <Card.Img
                             variant="top"
                             src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?cs=srgb&dl=pexels-pixabay-163064.jpg&fm=jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card border="success">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img
                             variant="bottom"
                             src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg"
                            />
                        </Card>
                        <Card border="success">
                            <Card.Img
                             variant="top"
                             src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?cs=srgb&dl=pexels-startup-stock-photos-7097.jpg&fm=jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card border="success">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img
                             variant="bottom"
                             src="https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-3785935.jpg&fm=jpg"
                            />
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
