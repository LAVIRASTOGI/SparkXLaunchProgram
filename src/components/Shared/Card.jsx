import "./card.scss";

import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import React from "react";

function CardLauncher(props) {
  let missionIds = (
    <ul>
      {props.userData.missionId.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </ul>
  );
  let land = null;
  if (props.userData.land_success == false) {
    land = "false";
  } else if (props.userData.land_success == true) {
    land = "true";
  } else {
    land = null;
  }

  return (
    <>
      <Card className="cardDisplay" style={{ width: "13rem", height: "25rem" }}>
        <div className="cardImage">
          <Card.Img variant="top" src={props.userData.image} />
        </div>

        <Card.Body>
          <Card.Title className="cardNumber">
            {props.userData.mission_name}#{props.userData.flight_number}
          </Card.Title>
          <Card.Text>
            {/* <h4>{props.userData.missionId}</h4>
            <h4>{props.userData.launch_year}</h4>
            <h4>{props.userData.launch_success?'true':'false'}</h4>
            <h4>{(props.userData.land_success==null||props.userData.land_success==false)?'f':'false'}</h4> */}
            <p>
              <b>Mission Ids: </b>
              {missionIds}
            </p>
            <p>
              <b>Launch Year:</b>
              {props.userData.launch_year}
            </p>
            <p>
              <b>Successful Launch:</b>
              {props.userData.launch_success ? "true" : "false"}
            </p>
            <p>
              <b>Successful Landing:</b>
              {land}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardLauncher;
