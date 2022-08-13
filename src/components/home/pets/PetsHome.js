import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./PetsHome.css";
import img1 from "../../../images/aboutus/cat1.jpg";
import img2 from "../../../images/aboutus/cat2.jpg";
import img3 from "../../../images/aboutus/cat3.jpg";

import CardPets from "../../UI/Cards/CardPets";
// import IconHr from "../../UI/IconHr";
const Dummyy = [
  {
    id: "p1",
    name: "Harry",
    age: "13",
    img: img1,
    breed: "scotish",
    color: "black",
  },
  {
    id: "p2",
    name: "tommy",
    img: img2,
    age: "13",
    breed: "scotish",
    color: "black",
  },

  {
    id: "p3",
    name: "tom",
    img: img3,
    age: "13",
    breed: "scotish",
    color: "black",
  },
];
const PetsHome = () => {
  const cardData = Dummyy.map((x) => (
    <Col xl={4} lg={4} sm={4} xs={6}>
      <CardPets
        name={x.name}
        key={x.id}
        breed={x.breed}
        id={x.id}
        img={x.img}
        age={x.age}
        color={x.color}
      />
    </Col>
  ));
  return (
    <>
      <h1 className="welcome__h1">Pets Available For Adoption</h1>
      <div>
        <Container className="background__div__petsCard">
          <Row>{cardData}</Row>
          <p className="petsHome__p">View all the available pets at</p>
          <div className="petsHome__div">
            {" "}
            <Link to="./pets">
              <button className="petsHome__button">
                <FontAwesomeIcon icon={faCat} className="petsHome__icon" />
                <span className="petsHome__span">Pets Available</span>
              </button>
            </Link>
          </div>
          {/* <IconHr/> */}
          <hr />
        </Container>
      </div>
    </>
  );
};
export default PetsHome;
