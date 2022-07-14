import React from "react";
import "./WelcomeServices.css";
import { faHome, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// ,faFile,faCoins
import IconHr from "../../UI/IconHr";
import MoneyIcon from "@material-ui/icons/Money";
import ReportIcon from "@material-ui/icons/Report";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
const WelcomeServices = () => {
  return (
    <>
      <div className="welcomeservices__maindiv">
        <h1 className="welcomservices__h1"> Services We Provide</h1>
        <Container className="welcomservices__bgdiv">
          <Row className="g-4">
            <Col lg={6} xs={12}>
              <div className="welcomeservices__smalldiv">
                <FontAwesomeIcon
                  icon={faHome}
                  className="welcomeservices__icon"
                />
                <h4 className="welcomeservices__h4">Pet's Shelter</h4>
                <p className="welcomeservices__p">
                  We provide shelter to the stray cats and dogs in your
                  neighborhood
                </p>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="welcomeservices__smalldiv">
                <MoneyIcon className="welcomeservices__icon" />
                <h4 className="welcomeservices__h4">Donation Services</h4>
                <p className="welcomeservices__p">
                  We provide shelter to the stray cats and dogs in your
                  neighborhood
                </p>
              </div>
            </Col>
          </Row>
          <Row className="welcomeservices__row g-4">
            <Col lg={6} xs={12}>
              <div className="welcomeservices__smalldiv">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="welcomeservices__icon"
                />
                <h4 className="welcomeservices__h4">Online Store</h4>
                <p className="welcomeservices__p">
                  We provide shelter to the stray cats and dogs in your
                  neighborhood
                </p>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <div className="welcomeservices__smalldiv">
                <ReportIcon className="welcomeservices__icon" />
                <h4 className="welcomeservices__h4">Pet's Reporting System</h4>
                <p className="welcomeservices__p">
                  We provide shelter to the stray cats and dogs in your
                  neighborhood
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <IconHr orange="x" />
      </div>
    </>
  );
};
export default WelcomeServices;
