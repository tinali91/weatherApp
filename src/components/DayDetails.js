import React from "react";
import { Card } from "reactstrap";
import styled from "styled-components";

const DetailsWrapper = styled.article`
  .card {
    padding: 10px;
    margin-top: 15px;
  }
  img {
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

const DayDetails = props => {

  return (
    <DetailsWrapper>
      <Card>
        <h2>Detailed Weather Info for {props.day}</h2>
        <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
        <p><strong>High:</strong> {props.high}°</p>
        <p><strong>Low:</strong> {props.low}°</p>
        <p><strong>Wind Speed:</strong> {props.windSpeed}</p>
        <p><strong>Wind Direction:</strong> {props.windDir}</p>
        <p><strong>Wind Speed:</strong> {props.windSpeed}</p>
        <p><strong>Wind Direction:</strong> {props.windDir}</p>
      </Card>
    </DetailsWrapper>
  )
}

export default DayDetails;