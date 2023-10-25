import React from 'react';
import "./Commands.css";
import Command from '../Command/Command';

const Commands = ({limitRunner , sortRunner , resetData , svr , sameValueHandlerRunner}) => {
  return (
    <div className='commands container'>
        <Command limitRunner={limitRunner} sortRunner={sortRunner} resetData={resetData} svr={svr} sameValueHandlerRunner={sameValueHandlerRunner} />
    </div>
  )
}

export default Commands