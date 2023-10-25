import React from 'react';
import './Card.css';

const Card = ({_data , satt}) => {
    const objectKeys = Object.keys(_data);
    
  return (
    <div className='card'>
        {objectKeys?.map((value , i) =>
        <h2 className={`flex-between ${(satt === value || satt === _data[value].toString()) && "active"}`} key={i} >
            <span><span>{i+1}.</span> {value}</span>
            <span>{_data[value]}</span>
        </h2>
        )}
    </div>
  )
}

export default Card