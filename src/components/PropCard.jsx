import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';


function PropCard({value , setFavArr, favArr}) {
  const[favBtn, setFavBtn] = useState(false);
  const[currentFavBtn, setCurrentFavBtn] = useState(<FavoriteBorderIcon/>);
 

  function handleClick(){
  
      if(!favBtn){
        setFavBtn(true);
        setCurrentFavBtn (<FavoriteIcon/>)
        setFavArr((prev)=>[...prev ,value])
      }
     if(favBtn){
        setFavBtn(false); 
        setCurrentFavBtn (<FavoriteBorderIcon/>)
        setFavArr((prev)=>prev.filter(item=>item!=value))
      }
    
      console.log(favArr);
    
  }
  return (
    <div id='card' className={favBtn ? 'favorite' : null}>
        <img id='pic' src={`${value.imgSrc}`} alt="" />
        <div id='info'>
            <h3>{`${value.country} , ${value.city}`}</h3>
            <h3>{`${value.price}$`}</h3>
        </div>
        <Link to={`/properties/${value.zpid}`}><Button variant="contained">View</Button></Link>
        <IconButton aria-label="favorite border icon" onClick={()=>handleClick()}>
        {currentFavBtn}
      </IconButton>
    </div>
  )
}

export default PropCard
