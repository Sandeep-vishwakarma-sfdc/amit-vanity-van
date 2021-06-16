import {  Navbar, Nav} from 'react-bootstrap';
import {FaHome,FaPhoneAlt,FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn,FaYoutube,FaHandshake} from 'react-icons/fa'
import {GoMail} from 'react-icons/go'
import {SiGooglemybusiness} from 'react-icons/si'
import { MdPhotoLibrary } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";
function Header(){

return (
<div className="stickyheader">
  <div className="container-fluid" style={{backgroundColor:"#17202A"}}>
    <div className="row">
      <div className="col-sm-12 col-md-4">
      <GoMail color="#fff"/>
      <a className="headerlink" href="mailto:amitvanityvan@gmail.com">amitvanityvan@gmail.com 
      </a> 
      </div>
      <div className="col-sm-12 col-md-4">
      <FaPhoneAlt color="#2ECC71"/>
      <a className="headerlink" href="tel:+919769061832">9769061832 
      </a> <span style={{color:"#fff"}}>/</span> <a className="headerlink" href="tel:+919892796375">9892796375 
      </a>
      </div>
      <div className="col-sm-12 col-md-4">
      <a title="facebook" style={{margin:"5px"}} href="https://www.facebook.com/Amitvanityvan/" target="_blank"> 
      <FaFacebookF color="#5DADE2" className="iconcolor"/>
      </a>
      <a title="twitter" style={{margin:"5px"}} href="https://twitter.com/Amitvanityvan" target="_blank"> 
      <FaTwitter color="#5DADE2" className="iconcolor"/>
      </a>
      <a title="instagram" style={{margin:"5px"}} href="https://www.instagram.com/amitvanityvan/" target="_blank"> 
      <FaInstagram color="#E74C3C" className="iconcolor"/>
      </a>
      <a title="linkedin" style={{margin:"5px"}} href="https://in.linkedin.com/in/amit-vanity-van-4151b0138" target="_blank"> 
      <FaLinkedinIn color="#5DADE2" className="iconcolor"/>
      </a>
      <a title="youtube" style={{margin:"5px"}} href="https://www.youtube.com/channel/UCbDf6KxhFq9LzDYPcljO6oQ" target="_blank"> 
      <FaYoutube color="#E74C3C" className="iconcolor"/>
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
          <img src="https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/logo/AMIT_VANITY_VAN.png?raw=true" width="60" height="30" className="d-inline-block align-top" alt=""></img> 
          {/* <b style={{paddingLeft: "10px",fontSize:"14px",fontFamily:"'Roboto', sans-serif"}}>AMIT VANITY VAN</b> */}
        </a>
        </nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home"><FaHome className="alink"/><b className="alink" style={{padding:"5px"}}>Home</b></Nav.Link>
            <Nav.Link href="/about"><SiGooglemybusiness className="alink"/><b className="alink" style={{padding:"5px"}}>About us</b></Nav.Link>
            <Nav.Link href="/gallery"><MdPhotoLibrary  className="alink" /><b  className="alink" style={{padding:"5px"}}>Gallery</b></Nav.Link>
            <Nav.Link href="/contact"><FaPhoneAlt className="alink" /><b  className="alink" style={{padding:"5px"}}>Contact us</b></Nav.Link>
            <Nav.Link href="/partner"><FaHandshake className="alink" /><b  className="alink" style={{padding:"5px"}}>partner with us</b></Nav.Link>
            <Nav.Link href="/news"><GiNewspaper className="alink" /><b  className="alink" style={{padding:"5px"}}>News</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
</Navbar></div>
</div>);
}
export default Header;