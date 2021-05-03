import {  Navbar, Nav} from 'react-bootstrap';

function Header(){

return (<Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home"><b>Amit vanity van</b></Navbar.Brand> */}
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/logo/logo.png?raw=true" width="60" height="30" className="d-inline-block align-top" alt=""></img>
          <b style={{paddingLeft: "10px"}}>Amit Vanity Van</b>
        </a>
        </nav>
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