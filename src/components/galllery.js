import { useState } from "react";
import { Card,Container } from "react-bootstrap";

function Gallary(){

    const [vanities,setVanities] = useState([{id:101,img:'https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/blue/e2.jpeg?raw=true'},{id:102,img:'https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/darkblue/e2.jpeg?raw=true'},{id:103,img:'https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/white/e1.jpeg?raw=true'}])  

    return (<Container>
      <div>Test</div>
      <div className='row'>
        {vanities.map((van)=>{
        return (<div className="" key={van.id}>
          <div className="col-md-6">
            <a href={`\\vanityvan\\${van.id}`}>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={van.img} />
        </Card></a>
          </div>
         </div>)
        })}
        </div>
    </Container>)
}
export default Gallary;
