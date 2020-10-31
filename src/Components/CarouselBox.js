import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Mountains from '../assets/mountains.jpg' 
import Dsand from '../assets/dsand.jpg' 
import Sand from '../assets/sand.jpg'
import North from '../assets/north.jpg' 

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        width={400}
                        height={900}
                        className="d-block w-100"
                        src={ Mountains }
                        alt="Mountains"
                    />
                <Carousel.Caption>
                    <h3>Mountains</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={400}
                        height={900}
                        className="d-block w-100"
                        src={ Dsand }
                        alt="Dsand"
                    />
                <Carousel.Caption>
                    <h3>Dark Sand</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={400}
                        height={900}
                        className="d-block w-100"
                        src={ Sand }
                        alt="Sand"
                    />
                <Carousel.Caption>
                    <h3>Sand</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={400}
                        height={900}
                        className="d-block w-100"
                        src={ North }
                        alt="North"
                    />
                <Carousel.Caption>
                    <h3>North</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
