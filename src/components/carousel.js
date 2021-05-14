import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel' ;
export class BootstrapCarousel extends Component {  
  
        render() {  
                return (  
                        <div>
                        <Carousel fade>
                        <Carousel.Item style={{maxHeight:"650px"}} interval={2000}>
                          <img
                            className="imgcls"
                            src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/darkblue/i2.jpeg?raw=true"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                           
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item  style={{maxHeight:"650px"}} interval={2000}>
                          <img
                            className="imgcls"
                            src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/darkblue/i1.jpeg?raw=true"
                            alt="Second slide"
                          />
                          <Carousel.Caption>
                            
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item  style={{maxHeight:"650px"}} interval={2000}>
                          <img
                            className="imgcls"
                            src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/blue/i11.jpeg?raw=true"
                            alt="Third slide"
                          />
                      
                          <Carousel.Caption>
                            
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{maxHeight:"650px"}} interval={2000}>
                          <img
                            className="imgcls"
                            src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/blue/e3.jpeg?raw=true"
                            alt="Third slide"
                          />
                      
                          <Carousel.Caption>
                            
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item  style={{maxHeight:"650px"}} interval={2000}>
                          <img
                            className="imgcls"
                            src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/white/e2.jpeg?raw=true"
                            alt="Third slide"
                          />
                          <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>    
                      </div>
                )  
        }  
}  
  

export default BootstrapCarousel;