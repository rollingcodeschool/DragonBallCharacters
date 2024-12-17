import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Frase = ({personaje}) => {
  // https://web.dragonball-api.com/
  return (
    <Card className="my-4" data-bs-theme="dark">
      <Card.Img
        className="imgCard"
        variant="top"
        src={personaje.image}
      />
      <Card.Body className="text-start">
        <Card.Title className="fs-3 ">{personaje.name}</Card.Title>
        <p>
          <b>Raza:</b>{personaje.race}
        </p>
        <p>
          <b>Ki:</b> {personaje.ki}
        </p>
        <p>
          <b>Descripción:</b> {personaje.description}
        </p>
      </Card.Body>
    </Card>
  );
};

export default Frase;
