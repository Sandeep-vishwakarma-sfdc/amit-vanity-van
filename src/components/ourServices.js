import { Container,Col,Image,Row } from "react-bootstrap";
function OurServices(){
return(
    <div className="Container mt-4" id="services">
     <h3 className="row justify-content-center subheader p-2">Our Services</h3>
    <div className="mt-5">
    <Container>
    <Row>
    <Col xs={6} md={3}>
        <Image src="https://thumbs.dreamstime.com/z/can-help-concept-made-human-hand-holding-marker-transparent-wipe-board-51624014.jpg" roundedCircle height="300px" width="300px"/>
    </Col>
    <Col>
    </Col>
    </Row>
    </Container>
    </div>
    <div className="container mt-4">
        <h1>How can we help you</h1>
        <p className="para">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
    </div>
    </div>
);
}
export default OurServices;