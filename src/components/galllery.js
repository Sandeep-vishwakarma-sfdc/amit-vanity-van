import { useState } from "react";
//import { Card,Container } from "react-bootstrap";
import CardList from './cardList';
const GSheetReader = require('g-sheets-api');

function Gallary(){

    const [vanities,setVanities] = useState([]); 
    const options = {
      apiKey: 'AIzaSyCWzvv8eWoJlG1rJ_zc45JohOEtEn91yBw',
      sheetId: '1ZS4MW2-HFB9DDjJI-Iq6pRwNY8DXOiPqeI08ZYsZ2hI',
      sheetNumber: 1
    }
    console.log('length ',vanities.length);
    if(vanities.length === 0){
    GSheetReader(
      options,
      results => {
        console.log('result ',results)
        setVanities(results);
      },
      error => {
        console.log('result error',error)
      });
    }


    return (
      <div>
        <div className="header-container">
          <div className="header-icon">
          </div>
          <h3>Most Popular Vanities</h3>
        </div>
        <CardList data={vanities} />
      </div>
    );
}
export default Gallary;
