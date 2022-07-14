import React from "react";
import { Card, Button } from "react-bootstrap";
// import Img from "../../../images/HomeImages/welcome.jpg"
import { Link, Route } from "react-router-dom";
// import PetsInfo from "../../Pets/PetsInfo/PetsInfo";
import "./CardPets.css";
// import classes from "./CardPets.module.css";
const CardPets = (props) => {
  return (
    <div className="cardPets__backgroundimg">
      <Card style={{ width: "35rem" }} className="cardPets">
        <Card.Img className="cardpets__img" variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="petscard__title">{props.name}</Card.Title>
          <Card.Text className="petscard__text">
            <ul>
              <li>
                Age:&nbsp;<span>{props.age}</span>
              </li>
              <li>
                Breed:&nbsp;<span>{props.breed}</span>
              </li>
              <li>
                Color:&nbsp;<span>{props.color}</span>
              </li>
              <li>
                City:&nbsp;<span>{props.city}</span>
              </li>
            </ul>
          </Card.Text>
          <Link to={`/pets/${props.id}`}>
            <Button className="petscard__btn" variant="primary">
              View Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardPets;
