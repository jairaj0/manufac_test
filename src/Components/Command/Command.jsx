import React, { useState } from "react";
import "./Command.css";
import { objectKeys } from "../../Helper/helper";

const Command = ({limitRunner , sortRunner , resetData, svr, sameValueHandlerRunner }) => {
  const [commandData, setCommandData] = useState({});

  const setValue = (_key , value) => setCommandData((pre) => ({...pre , [_key] : value}))

  const resetHandler = () => {
    resetData()
    setCommandData(()=>{})
  }

  return <form onSubmit={(e)=>e.preventDefault()} className="command flex-between" noValidate>
      <div className="objkeys">
        <label>Choose an attribute:</label>

        <select onChange={(e)=>setValue("objectKey" , e.target.value)}
         name="objkeys" id="objkeys">
          <option value={""}>Select</option>
          {objectKeys.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <button onClick={()=> sameValueHandlerRunner(commandData.objectKey)} className="sameValue">
        SAME VALUE
      </button>

      <div className="equalValue">
        <input onChange={(e)=>setValue("searchValue" , e.target.value)}
         placeholder="00.00" type="number" name="num" id="num" />
        <button onClick={()=> svr(commandData.objectKey , commandData.searchValue)} className="sameValue">
          FIND VALUE
        </button>
      </div>

      <div className="equalValue flex">
        <button onClick={()=>sortRunner(commandData.objectKey , "acc")} className="eg">
          {"^"}
        </button>
        <input onChange={(e)=>setValue("above" , e.target.value)} placeholder="00.00" type="number" name="num" id="num" />
        <button onClick={()=>limitRunner(commandData.objectKey , "up" , commandData.above)} className="sameValue">
          ABOVE
        </button>
      </div>
      <div className="equalValue flex">
        <button onClick={()=>sortRunner(commandData.objectKey , "dec")} className="eg rev">
          {"^"}
        </button>
        <input onChange={(e)=>setValue("below" , e.target.value)} placeholder="00.00" type="number" name="num" id="num" />
        <button onClick={()=>limitRunner(commandData.objectKey , "down" , commandData.above)} className="sameValue">
          BELOW
        </button>
      </div>

      <button type="reset" onClick={resetHandler} className="sameValue reset">RESET</button>
    </form>
};

export default Command;
