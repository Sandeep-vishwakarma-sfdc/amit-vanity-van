import { Card,Container } from "react-bootstrap";
import { useEffect, useState } from "react";
function Vanity(){
let url = 'https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/blue/i1.jpeg?raw=true'
const [vanities,setVanities] = useState([]);
const [color,setColor] = useState('');
useEffect(()=>{
    if(window.location.href.split("/")[4]==101){
        setVanities([1,2,3,4,5,6,7,8,9,10])
        setColor('blue');
    }
    if(window.location.href.split("/")[4]==102){
        setVanities([1,2])
        setColor('darkblue');
    }
    if(window.location.href.split("/")[4]==103){
        setVanities([1,2,3,4])
        setColor('white');
    }
},[])  
//https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/white/i1.jpeg?raw=true
return(<Container>
    <div className='row'>
      {vanities.map((van)=>{
      return (<div className="" key={van}>
        <div className="col-md-6">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/${color}/i${van}.jpeg?raw=true`} />
      </Card>
        </div>
       </div>)
      })}
      </div>
  </Container>);
}
export default Vanity;