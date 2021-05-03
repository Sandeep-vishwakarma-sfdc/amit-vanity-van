import {  Navbar, Nav} from 'react-bootstrap';
import {FaHome,FaPhoneAlt,FaBus,FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md';
function Header(){

return (
<div className="stickyheader">
  <div className="container-fluid ">
    <div className="row">
      <div className="col-sm-12 col-md-4">
      <MdEmail/>
      <a style={{margin:"5px"}} href="mailto:amitvanityvan@gmail.com">amitvanityvan@gmail.com 
      </a> 
      </div>
      <div className="col-sm-12 col-md-4">
      <FaPhoneAlt/>
      <a style={{margin:"5px"}} href="tel:+919769061832">9769061832 
      </a> / <a style={{margin:"5px"}} href="tel:+919892796375">9892796375 
      </a>
      </div>
      <div className="col-sm-12 col-md-4">
      <a title="facebook" style={{margin:"5px"}} href="https://www.facebook.com/Amitvanityvan/" target="_blank"> 
      <FaFacebookF/>
      </a>
      <a title="twitter" style={{margin:"5px"}} href="https://twitter.com/amitvish786" target="_blank"> 
      <FaTwitter/>
      </a>
      <a title="instagram" style={{margin:"5px"}} href="https://www.instagram.com/amitvanityvan/" target="_blank"> 
      <FaInstagram/>
      </a>
      <a title="linkedin" style={{margin:"5px"}} href="https://in.linkedin.com/in/amit-vanity-van-4151b0138" target="_blank"> 
      <FaLinkedinIn/>
      </a>
      <a title="youtube" style={{margin:"5px"}} href="https://www.youtube.com/channel/UCbDf6KxhFq9LzDYPcljO6oQ" target="_blank"> 
      <FaYoutube/>
      </a>
      </div>
    </div>
  </div>
  <div style={{marginTop:"10px"}}>
  <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home"><b>Amit vanity van</b></Navbar.Brand> */}
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/logo/logo.png?raw=true" width="60" height="30" className="d-inline-block align-top" alt=""></img>
          <b style={{paddingLeft: "10px"}}>AMIT VANITY VAN</b>
        </a>
        </nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home"><FaHome/><b style={{padding:"5px"}}>Home</b></Nav.Link>
            <Nav.Link href="/contact#contact"><FaPhoneAlt/><b style={{padding:"5px"}}>Contact us</b></Nav.Link>
            <Nav.Link href="/home#services"><FaBus/><b style={{padding:"5px"}}>Services</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
</Navbar></div>
</div>);
}
export default Header;