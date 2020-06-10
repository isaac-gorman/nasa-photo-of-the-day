import React from "react";
import styled from "styled-components";
import CardContainer from "./styles/CardContainer"
import CardInnerBox from "./styles/CardInnerBox";
import CardIMG from "./styles/CardIMG";
import CardHeading from "./styles/CardHeading";


function NASACard(props){
  
  return (

    <CardContainer>
    <CardInnerBox>
      <CardIMG src={props.url} alt=""/>
      <CardHeading>{props.title}</CardHeading>
    </CardInnerBox>
    

    {/* <h4>{props.date}</h4>
    <p>{props.explanation}</p>
  <p>{props.copyright}</p> */}

      {/* <div>
        <img src="" alt=""/>
        <p>"hdurl": (IMG)</p>
      </div>
      <p>"explanation":</p>
      <p>"date":</p>
      <p>"copyright":</p> */}
    </CardContainer>
    

  )
}


export default NASACard;