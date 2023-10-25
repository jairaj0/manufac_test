import { useState } from "react";
import Cards from "./Components/Cards/Cards";
import data from "./Data/Wine-Data.json";
import Commands from "./Components/Commands/Commands";
import {limitHandler, onlySearchValue, sameValueHandler, searchAttrValue, sortHandler } from "./Helper/helper";

const App = () => {
  const [newData, setNewData] = useState(data);
  const [searchAttr, setSearchAttr] = useState("");

  const goTop = () => window.scrollTo(0, 0);

  const sameValueHandlerRunner = (attr) => {
    if (attr) {
      setNewData(()=> sameValueHandler(data, attr))
      setSearchAttr(attr)
    }
  };

  const searchValueHandlerRunner = (attr , searchValue) => {
    if (attr && searchValue) {
      setNewData(()=> searchAttrValue(data, attr , searchValue))
      setSearchAttr(attr)
    }

    if(!attr && searchValue){
      setNewData(()=> onlySearchValue(data, searchValue))
      setSearchAttr(searchValue)
    }
  };

  const sortRunner = (attr , type) => {
    if(attr){
      setNewData(()=>sortHandler(data , attr , type))
      setSearchAttr(attr)
    }
  }

  const limitRunner = (attr , type , value) => {
    if(attr && value){
      setNewData(()=>limitHandler(data , attr , type , value))
      setSearchAttr(attr)
    }
  }


  const resetData = () => {
    setNewData(data)
    setSearchAttr("")
  }


  return (
    <>
      <div className="bg"></div>
      <button onClick={goTop} className="goToTop">
        ^
      </button>
      <Commands
        sameValueHandlerRunner={sameValueHandlerRunner}
        svr = {searchValueHandlerRunner}
        resetData={resetData}
        sortRunner={sortRunner}
        limitRunner={limitRunner}
      />
      <Cards satt={searchAttr} data={newData} />
    </>
  );
};

export default App;
