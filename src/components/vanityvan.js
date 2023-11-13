import { Container } from "react-bootstrap";
import {  useState } from "react";
import CardList from './cardList';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
const GSheetReader = require('g-sheets-api');


function Vanity(){
let url = 'https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/blue/i1.jpeg?raw=true'
const [vanities,setVanities] = useState([]);
const [ivanities,setIvanities] = useState([]);
const [evanities,setEvanities] = useState([]);
const [dataFound,setDataFound] = useState(false);
const [value, setValue] = useState(1);

const options = {
  apiKey: 'AIzaSyCWzvv8eWoJlG1rJ_zc45JohOEtEn91yBw',
  sheetId: '1ZS4MW2-HFB9DDjJI-Iq6pRwNY8DXOiPqeI08ZYsZ2hI',
  sheetNumber: 2
}
if(vanities.length === 0 && dataFound==false){
  let parentId = window.location.href.split("/")[4];
GSheetReader(
  options,
  results => {
    console.log('result ',results)
    let filterVanities = results.filter(ele=>ele.parentId==parentId);
    let interiorVanity = filterVanities.filter(ele=>ele.bodyType=='interior');
    let exteriorVanity = filterVanities.filter(ele=>ele.bodyType!='interior');
    setIvanities(interiorVanity);
    setEvanities(exteriorVanity);
    setVanities(filterVanities);
    setDataFound(true);
  },
  error => {
    console.log('result error',error)
    setVanities([]);
    setDataFound(true);
  });
}

//https://github.com/Sandeep-vishwakarma-sfdc/image-repo/blob/master/white/i1.jpeg?raw=true
return(<div>
    
    <Paper square>
                <Tabs
                    value={value}
                    textColor="primary"
                    indicatorColor="primary"
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <Tab label="Interior" />
                    <Tab label="Exterior" />
                </Tabs>
                {value===1?<CardList data={evanities}/>:<CardList data={ivanities}/>}
            </Paper>
      </div>);
}
export default Vanity;