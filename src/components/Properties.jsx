import React, { useEffect, useState } from "react";
import PropCard from "./PropCard";
import "./PropCard Style.css";
import data from "./data.json";


function Properties() {
  const [TheData, setTheData] = useState([]);
  const [TheDataCopy, setTheDataCopy] = useState([]);

  useEffect(() => {
    setTheData(data.results);
    setTheDataCopy(data.results);
  }, []);

  const [filters, setFilters] = useState({country: "Israel", city: "Houston" , bedrooms: 2});
  const [favArr, setFavArr] = useState([]);
 
  function sortByPrice(chosen) {
    if (chosen == "Low-To-High") {
      setTheData((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setTheData((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }

  function createAnOption(option) {
    let newArr = [];
    for (let i = 0; i < TheDataCopy.length; i++) {
      newArr[i] = TheDataCopy[i][option];
    }

    let filteredArr = [...new Set(newArr)];

    return filteredArr.sort().map((theOption, index) => {
      return (
        theOption && (
          <option key={index} value={`${theOption}`}>{`${theOption}`}</option>
          
        )
      );
    });
  }

function setFilter(){
  
}
 

  return (
    <div id="page-container">
      <div id="filter-section">
        <select id="country" onChange={(e)=>{setFilters({...filters, country: e.target.value})}}>{createAnOption("country")}</select>
        <select id="city"  onChange={(e)=>setFilters({...filters, city: e.target.value})}>{createAnOption("city") }</select>
        <select id="bedrooms"  onChange={(e)=>setFilters({...filters, bedrooms: e.target.value})}>{createAnOption("bedrooms")}</select>
      <button id="sub-filter" onClick={()=>setTheData(TheData.filter(value => value.country == filters.country && value.city==filters.city && value.bedrooms==filters.bedrooms)) }>filter</button>
      <button id="clear-btn" onClick={()=>setTheData(TheDataCopy)}>clear</button>
      <button onClick={()=>setTheData(favArr)}>favorite</button>
      </div>
      sort by price
      <select id="sort" onChange={(e) => sortByPrice(e.target.value)}>
        <option value="high-to-low">High To Low</option>
        <option value="Low-To-High">Low To High</option>
      </select>
      <div id="prop-section">
        {TheData &&
          TheData.map((value) => {  
            return (
                <PropCard key={value.zpid} value={value} favArr={favArr} setFavArr = {setFavArr}/>
             
            );
          })}
      </div>
    </div>
    
  );
}

export default Properties;
