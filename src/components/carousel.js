import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel' ;
export class BootstrapCarousel extends Component {  
        render() {  
                return (  
                        <div>
                        <Carousel fade>
                        <Carousel.Item interval={2000}>
                          <img
                            className="d-block w-100 imgitem"
                            src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/darkblue/i2.jpeg?raw=true"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                          <img
                            className="d-block w-100 imgitem"
                            src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/darkblue/i1.jpeg?raw=true"
                            alt="Second slide"
                          />
                      
                          <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                          <img
                            className="d-block w-100 imgitem"
                            src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/blue/i10.jpeg?raw=true"
                            alt="Third slide"
                          />
                      
                          <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>    
                      </div>
                )  
        }  
}  
  

export default BootstrapCarousel;