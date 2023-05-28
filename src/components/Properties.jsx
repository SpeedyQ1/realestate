import React, { useEffect, useState } from "react";
import PropCard from "./PropCard";
import "./PropCard Style.css";
import data from "./data.json";

function Properties() {
  const [TheData, setTheData] = useState([]);
  const [TheDataCopy, setTheDataCopy] = useState([]);
  const [selectedValueCountry, setSelectedValueCountry] = useState("");
  const [selectedValueCity, setSelectedValueCity] = useState("");
  const [selectedValueBedrooms, setSelectedValueBedrooms] = useState("");
  const [favArr, setFavArr] = useState([]);
  
  useEffect(() => {
    setTheData(data.results);
    setTheDataCopy(data.results);
  }, []);
  
  
  

  const [filters, setFilters] = useState({
    country: "all",
    city: "all",
    bedrooms: "all",
  });

  
  function sortByPrice(chosen) {
    if (chosen == "Low-To-High") {
      setTheData((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setTheData((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }

  function createAnOption(option) {
    let newArr = [];
    for (let i = 0; i < TheData.length; i++) {
      newArr[i] = TheData[i][option];
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
  
  function filterTheData() {
    let selectedFiltersKeys = [];
    let selectedFiltersValues = [];
    let keys = Object.keys(filters);
    let values = Object.values(filters);
    for (let k = 0; k < 3; k++) {
      if (values[k] != "all") {
        selectedFiltersKeys.push(keys[k]);
        selectedFiltersValues.push(values[k]);
      }
    }
   
    for (let n = 0; n < selectedFiltersValues.length; n++) {
    setTheData((prev)=>
        prev.filter(
          (value) => value[selectedFiltersKeys[n]] == selectedFiltersValues[n]
        )
      );
    }
      // value.country == filters.country && value.city==filters.city && value.bedrooms==filters.bedrooms
   
  }


  useEffect(() => {
    filterTheData()
  }, [filters]);


  
 
 console.log(filters);
  return (
    <div id="page-container">
      <div id="filter-section">
        <select
          value={selectedValueCountry}
          id="country"
          onChange={(e) => {
            setSelectedValueCountry(e.target.value);
            setFilters((prev)=>({ ...prev, country: e.target.value }));
            
          }}
        >
          <option key={-5} value="all">
            all
          </option>
          {createAnOption("country")}
        </select>

        <select
          value={selectedValueCity}
          id="city"
          onChange={(e) => {
            setSelectedValueCity(e.target.value);
            setFilters((prev)=>({ ...prev, city: e.target.value }));
            
          }}
        >
          <option key={-5} value="all">
            all
          </option>
          {createAnOption("city")}
        </select>

        <select
          value={selectedValueBedrooms}
          id="bedrooms"
          onChange={(e) => {
            setFilters((prev)=>({...prev, bedrooms: e.target.value}));
            setSelectedValueBedrooms(e.target.value);
           
          }}
        >
          <option key={-5} value="all">
            all
          </option>
          {createAnOption("bedrooms")}
        </select>

        <button
          id="clear-btn"
          onClick={() => {
            setFilters({ country: "all", city: "all", bedrooms: "all" });
            setTheData(TheDataCopy);
            setSelectedValueCountry("");
            setSelectedValueCity("");
            setSelectedValueBedrooms("");
          }}
        >
          clear
        </button>
        
        <button onClick={() => {
          setTheData([...new Set(favArr)])
          setAfterFavClicked(true)
          }}>favorite</button>
          
      </div>
      
      <select id="sort" onChange={(e) => sortByPrice(e.target.value)}>
        <option value="sort by price">Sort By Price</option>
        <option value="high-to-low">High To Low</option>
        <option value="Low-To-High">Low To High</option>
      </select>
      <div id="prop-section">
        {TheData &&
          TheData.map((value) => {
            
            return (
              <PropCard
                key={value?.zpid}
                value={value}
                favArr={favArr}
                setFavArr={setFavArr}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Properties;
