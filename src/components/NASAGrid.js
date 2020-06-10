import React, { useState, useEffect, useCallback } from "react";
import NASACard from "./NASACard";
import CardGrid from "./styles/CardGird"
import axios from "axios";

function NASAGrid(){
  const [nasaData, setNasaData] = useState([]);

  useEffect(()=>{
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=fiJ0anE4tukk6Vd1QNH4e0NNjZNWOUAyi0brdVjK&start_date=2020-06-01&hd=true&end_date=2020-06-09')
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch (err => console.log(`There was an error ${err}`))
  }, [])

  return (

    <CardGrid >   
      
      {nasaData.map(crrV => {
        return (
          <NASACard 
          title={crrV.title}
          url={crrV.hdurl}
          date={crrV.date}
          explanation={crrV.explanation}
          copyright={crrV.copyright}
          />
        )

      })
      
      }
 

    
      
    </CardGrid>
  )
}

export default NASAGrid;