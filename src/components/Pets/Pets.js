import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import Img1 from "../../images/aboutus/cat1.jpg";
import Img2 from "../../images/aboutus/cat3.jpg";
import Img3 from "../../images/aboutus/dog2.jpg";
import Img4 from "../../images/aboutus/dog3.jpg";

import React from "react";
import Footer from "../footer/Footer";
import CardPets from "../UI/Cards/CardPets";
import { useState } from "react";
import Header from "../header/Header";
import PaginatePets from "../UI/Pagination/PaginatePets";
import CardPages from "../UI/Cards/CardPages";
import "./Pets.css";
// import { Icon } from '@material-ui/core';
import IconHr from "../UI/IconHr";
import { useRef } from "react";
// import { propTypes } from 'react-bootstrap/esm/Image';
export const Dummy__pets = [
  {
    id: "p1",
    name: "Harry",
    size: 3,
    weight: "12kg",
    city: "rawalpindi",
    img: Img1,
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p2",
    img: Img2,
    size: 3,
    weight: "12kg",
    city: "islamabad",
    name: "tommy",
    age: "13",
    breed: "persian",
    color: "black",
  },
  {
    id: "p3",
    name: "tom",
    img: Img1,
    size: 3,
    weight: "12kg",
    city: "rawalpindi",
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p4",
    name: "thomas",
    img: Img3,
    size: 3,
    weight: "12kg",
    city: "rawalpindi",
    age: "13",
    breed: "scotish",
    color: "red",
  },
  {
    id: "p5",
    name: "tommy",
    size: 3,
    weight: "12kg",
    city: "islamabad",
    img: Img4,
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p6",
    name: "tommy",
    img: Img3,
    size: 3,
    weight: "12kg",
    city: "islamabad",
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p7",
    name: "tommy",
    size: 3,
    weight: "12kg",
    city: "islamabad",
    img: Img1,
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p8",
    name: "tommy",
    img: Img2,
    age: "13",
    ize: 3,
    weight: "12kg",
    city: "rawalpindi",
    breed: "persian",
    color: "black",
  },
  {
    id: "p9",
    name: "tommy",
    img: Img1,
    size: 3,
    weight: "12kg",
    city: "islamabad",
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p10",
    name: "tommy",
    img: Img3,
    size: 3,
    weight: "12kg",
    city: "rawalpindi",
    age: "13",
    breed: "persian",
    color: "black",
  },
  {
    id: "p11",
    name: "tommy",
    size: 3,
    weight: "12kg",
    city: "islamabad",
    img: Img4,
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p12",
    name: "tommy",
    size: 3,
    weight: "12kg",
    city: "islamabad",
    img: Img1,
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p13",
    name: "tommy",
    size: 3,
    weight: "12kg",
    city: "islamabad",
    age: "13",
    img: Img2,
    breed: "scotish",
    color: "black",
  },
  {
    id: "p14",
    name: "tommy",
    img: Img3,
    size: 3,
    weight: "12kg",
    city: "islamabad",
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p15",
    name: "tommy",
    img: Img2,
    size: 3,
    weight: "12kg",
    city: "islamabad",
    size: 3,
    weight: "12kg",
    city: "islamabad",
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p16",
    name: "tommy",
    img: Img4,
    size: 3,
    weight: "12kg",
    city: "islamabad",
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p17",
    name: "tommy",
    size: 3,
    weight: "12kg",
    city: "islamabad",
    img: Img1,
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p18",
    name: "tommy",
    size: 3,
    weight: "12kg",
    city: "islamabad",
    img: Img3,
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p19",
    name: "tommy",
    img: Img2,
    size: 3,
    weight: "12kg",
    city: "islamabad",
    age: "13",
    breed: "scotish",
    color: "black",
  },
  {
    id: "p20",
    size: 3,
    weight: "12kg",
    city: "islamabad",
    name: "tommy",
    img: Img1,
    age: "13",
    breed: "scotish",
    color: "black",
  },
];

const Pets = () => {
  const [petBreed, setPetBreed] = useState();
  const [petCity, setPetCity] = useState();
  const [petType, setPetType] = useState();
  const [filtered, setIsfiltered] = useState(false);
  const petCityRef = useRef();
  const petBreedRef = useRef();
  const petTypeRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const endIndex = itemsPerPage * currentPage;
  const startIndex = endIndex - itemsPerPage;
  var filteredData = Dummy__pets;
  const petsBreedHandler = (event) => {
    setIsfiltered(true);
    setPetBreed(petBreedRef.current.value);
    console.log("selected brred is ", petBreed);
  };
  const petsCityHandler = (event) => {
    setIsfiltered(true);
    setPetCity(petCityRef.current.value);
    console.log("Sleected city is", petCity);
  };
  const animaltypechangehandler = (event) => {
    setIsfiltered(true);
    setPetType(petTypeRef.current.value);
  };
  if (filtered) {
    filteredData = Dummy__pets.filter(
      (data) => data.breed === petBreed && data.city === petCity
    );
  }
  var petsData = filteredData.map((x) => (
    <Col xl={4} lg={4} sm={6} xs={6}>
      <CardPets
        name={x.name}
        id={x.id}
        key={x.id}
        size={x.size}
        weight={x.weight}
        city={x.city}
        breed={x.breed}
        img={x.img}
        age={x.age}
        color={x.color}
      />
    </Col>
  ));

  var total__pets = petsData.length;
  const pets__data = petsData.slice(startIndex, endIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <CardPages name="Pets" />
      <div className="Pets__maindiv">
        <div className="Pets__bgdiv">
          <div className="Pets__filter__div">
            <FontAwesomeIcon icon={faPaw} className="Pets__icon" />
            <h1 className="Pets__h1">Find Your Pet</h1>
            <div className="Pets__filter__div__flex">
              <select ref={petTypeRef} onChange={animaltypechangehandler}>
                <option value="">Select Type</option>
                <option value="cat">Cat </option>
                <option value="dog">Dog</option>
              </select>
              <select onChange={petsBreedHandler} ref={petBreedRef}>
                <option value="">Select Breed</option>
                <option value="persian">Persian </option>
                <option value="scotish">Scotish</option>
              </select>
              <select ref={petCityRef} onChange={petsCityHandler}>
                <option value="">Select City</option>
                <option value="rawalpindi" selected>
                  {" "}
                  Rawalpindi
                </option>
                <option value="islamabad">Islamabad</option>
                <option value="karachi">Karachi</option>
                <option value="lahore">Lahore</option>
              </select>
            </div>
          </div>
          <h3 className="Pets__h3">
            Here Are The Pets Available For Adoption, In Our Shelter
          </h3>
          <Container>
            <Row>{pets__data}</Row>
          </Container>
          <PaginatePets
            itemsPerPage={itemsPerPage}
            paginate={paginate}
            total__items={total__pets}
            startIndex={startIndex}
          />
        </div>
      </div>
      <IconHr orange />
      <hr />
      <Footer />
    </>
  );
};
export default Pets;
