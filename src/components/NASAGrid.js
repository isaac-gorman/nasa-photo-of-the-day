import React, { useState, useEffect, useCallback } from "react";
import NASACard from "./NASACard";
import axios from "axios";

function NASAGrid(){
  const [nasaData, setNasaData] = useState([]);

  useEffect(()=>{
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=fiJ0anE4tukk6Vd1QNH4e0NNjZNWOUAyi0brdVjK')
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch (err => console.log(`There was an error ${err}`))
  }, [])

  return (
  //   <h4>{props.date}</h4>
  //   <p>{props.explantion}</p>
  // <p>{props.copyright}</p>
    <div>   
 
    <NASACard 
    title={nasaData.title}
    url={nasaData.hdurl}
    date={nasaData.date}
    explanation={nasaData.explanation}
    copyright={nasaData.copyright}

    
    />

    
      
    </div>
  )
}

export default NASAGrid;