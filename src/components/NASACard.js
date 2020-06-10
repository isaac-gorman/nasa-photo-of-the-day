import React from "react";

function NASACard(props){
  
  return (
    <div>
  
    <h1>{props.title}</h1>
    <img src={props.url} alt=""/>
    <h4>{props.date}</h4>
    <p>{props.explanation}</p>
  <p>{props.copyright}</p>

      {/* <div>
        <img src="" alt=""/>
        <p>"hdurl": (IMG)</p>
      </div>
      <p>"explanation":</p>
      <p>"date":</p>
      <p>"copyright":</p> */}
    </div>
    

  )
}


export default NASACard;