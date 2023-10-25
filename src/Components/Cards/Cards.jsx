import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = ({data , satt}) => {
  if(data.length === 0){
    console.log("no data found")
    return (
      <div className="ndf flex-center">
        <h1>NO DATA FOUND !</h1>
      </div>
    )
  }
  
  return (
    <div className="cards container">
    {data.map((value , i) => <Card satt={satt} key={i} _data={value} />)}
  </div>
  )
}

export default Cards