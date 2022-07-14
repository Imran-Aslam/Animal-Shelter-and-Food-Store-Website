import React from "react";
// import {Row} from "react-bootstrap/Row";
// import {Col} from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faBone, faPaw } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./WelcomeHome.css";
import IconHr from "../../UI/IconHr";
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
const WelcomeHome = () => {
  return (
    <>
      <h1 className="welcome__h1">Welcome To AnimalsLiveMatters</h1>
      <div className="main__div">
        <Container>
          <Row style={{ marginBottom: "10rem" }}>
            <Col xs={12} xl={6} lg={6}>
              <div className="left__div"></div>
            </Col>
            <Col xs={12} xl={6} lg={6}>
              <div className="right__div">
                <p>
                    Animal life matters is the place which feels at home for pets.
                    WIth increase in animal cruelty in Pakistan , we made an
                    initiative to build a single roof platform where we can help
                    cats and dogs.We believe that animals should be treated the
                    same way as we treat human beings.As there is increase in
                    cruelty of animals in Pakistan so we took this much needed
                    step.
                </p>
                <br />
                <p>Here are some of the main features of our site</p>
                <ul>
                  <li>Shelter animals</li>
                  <li>Collect Donations</li>
                  <li>Give them for adoption</li>
                </ul>
                <p>More about us at</p>
                <Link to="/about">
                  <button className="welcomeHome__button">About us</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className="main__div2"> */}
      <div className="background__div">
        <Container className="main__div2">
          <Row className="g-5">
            <Col lg={6} sm={12} xl={4} xs={12}>
              <div className="small__div">
                <FontAwesomeIcon icon={faDog} className="icons" />
                <p>
                  {" "}
                  &nbsp;We take care of stray dogs and cats in your neighborhood
                </p>
              </div>
            </Col>
            <Col lg={6} sm={6} xl={4} xs={12}>
              <div className="small__div ">
                <FontAwesomeIcon icon={faBone} className="icons icon__bone" />
                <p>
                  {" "}
                  &nbsp;We take a take atake caregs and cats in your
                  neighborhood
                </p>
              </div>
            </Col>
            <Col lg={6} sm={6} xl={4} xs={12}>
              <div className="small__div last__small__div">
                <FontAwesomeIcon icon={faPaw} className="icons icon__paw" />
                <p> &nbsp; We take stray dogs and cats in your neighborhood</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <IconHr />
      <hr className="hr" />
      {/* </div> */}
    </>
  );
};
export default WelcomeHome;
