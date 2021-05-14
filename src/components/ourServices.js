import { Container,Col,Image,Row } from "react-bootstrap";
function OurServices(){
return(
    <div className="Container mt-4" id="services">
     <h3 className="row justify-content-center subheader p-2">Our Services</h3>
    <div className="mt-5">
    <Container>
    <Row>
    <Col md={7}>
        <Image src="https://cdn.pixabay.com/photo/2016/11/11/10/36/bus-1816338_960_720.jpg" roundedCircle height="400px" width="400px"/>
    </Col>
    <Col md={5}>
    <h1>How can we help you</h1>
        <p className="para">
        Amit vanity vans has been providing travel enthusiasts a unique way to see and experience exclusive vanity vans. It’s been more than 6 years we’ve been delivering our vanity vans with enthusiasm and trust for shootings, events, and weeding’s.
        </p>
        <p>
        Amit Vanity Van in mumbai maharashtra has a wide range of products and / or services to cater to the varied requirements of their customers. The staff at this establishment are courteous and prompt at providing any assistance. They readily answer any queries or questions that you may have. Pay for the product or service with ease by using any of the available modes of payment, such as Cash, Master Card, Visa Card, Debit Cards, Cheques, Credit Card. 
        </p>
    </Col>
    </Row>
    </Container>
    </div>
    <div className="container mt-4">
        
    </div>
    </div>
);
}
export default OurServices;