import {  Navbar, Nav} from 'react-bootstrap';

function Header(){

return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Amit vanity van</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="/contact#contact">Contact Us</Nav.Link>
            <Nav.Link href="/home#services">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
</Navbar>);
}
export default Header;