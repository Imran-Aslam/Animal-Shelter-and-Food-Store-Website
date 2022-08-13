import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMailBulk,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import imga from "../../images/aboutus/dog2.jpg";
import imgb from "../../images/aboutus/cat1.jpg";
import imgc from "../../images/aboutus/dog3.jpg";
import imgd from "../../images/aboutus/cat2.jpg";
import imge from "../../images/aboutus/dog4.jpg";
import imgf from "../../images/aboutus/cat3.jpg";
import imgg from "../../images/aboutus/dog5.jpg";
import imgh from "../../images/aboutus/cat4.jpg";
import Header from "../header/Header";
import { Accordion } from "react-bootstrap";
import TestimonialsHome from "../home/testimonials/TestimonialsHome";
import IconHr from "../UI/IconHr";
import Footer from "../footer/Footer";
// import Img from "../../images/Banner_slider_image1.jpg";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";
import Maps from "../UI/map/Maps";
const AboutUs = () => {
  return (
    <>
      <Header />
      <div>
        <div className="aboutus__upperDiv">
          {/* about me pic wala */}
          <div className="aboutus__upperDiv__flex">
            {" "}
            <h1 className="aboutus__mainh1">About US</h1>
            <div className="aboutus__homelinkdiv">
              <span className="aboutus__span">
                <Link to="./homes" className="aboutus__link">
                  Home
                </Link>
              </span>
              <span className="aboutus__span">/About Us</span>
            </div>
          </div>
        </div>
        {/* copied code */}
        <div className="aboutus__lowerDiv">
          <div className="aboutus__lowerDiv__color">
            <h1 className="welcome__h1 aboutus__h1">
              Welcome To AnimalsLiveMatters
            </h1>
            <div className="main__div">
              <Container>
                <Row style={{ marginBottom: "10rem" }}>
                  <Col xs={12} xl={6} lg={6}>
                    <div className="aboutus__left__div"></div>
                  </Col>
                  <Col xs={12} xl={6} lg={6}>
                    <div className="right__div">
                      <p>
                        Animal life matters is the place which feels at home for
                        pets. WIth increase in animal cruelty in Pakistan , we
                        made an initiative to build a single roof platform where
                        we can help cats and dogs.We believe that animals should
                        be treated the same way as we treat human beings.As
                        there is increase in cruelty of animals in Pakistan so
                        we took this much needed step.
                      </p>
                      <br />
                      <p>Here are the main features of our website.</p>
                      <ul>
                        <li>Shelter animals</li>
                        <li>Collect Donations</li>
                        <li>Give them for adoption</li>
                      </ul>
                      {/* <p>More about us at</p>
                <Link to="/aboutus">
                  <button className="welcomeHome__button">About us</button>
                </Link> */}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          {/* ACCORDIAn */}

          <hr className="hr" />
        </div>
        <div className="aboutus__accordiandiv">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header> Our Mission</Accordion.Header>
              <Accordion.Body>
                The goal of “Animal Shelter and Food Store - Website” is to
                provide shelter for animals (cats and dogs), their adoption
                history or show the status of adoption, keep track of their
                medical history (i.e., vaccinated or not), donation system for
                shelter home, classification of Cats and Dogs (via Machine
                Learning), and functionality of purchasing food.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Our Vision</Accordion.Header>
              <Accordion.Body>
                The goal of “Animal Shelter and Food Store - Website” is to
                provide shelter for animals (cats and dogs), their adoption
                history or show the status of adoption, keep track of their
                medical history (i.e., vaccinated or not), donation system for
                shelter home, classification of Cats and Dogs (via Machine
                Learning), and functionality of purchasing food.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header> Our Values</Accordion.Header>
              <Accordion.Body>
                We believe that customer satisfaction is our goal and main
                value.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* <h1 className="aboutus__testimonial__h1">Our Testimonials</h1>
      <TestimonialsHome/> */}
        <div className="intro__bgdiv">
          <h1 className="welcome__h1">We Love Helping Animals</h1>
          <p className="intro__p">
            It’s not a requirement to work at Animal Life Matters, but the
            people who work here all seem to have one thing in common: a deep
            desire to make the world a better place for animals.It’s not a
            requirement to work at Animal Life Matters, but the people who work
            here all seem to have one thing in common: a deep desire to make the
            world a better place for animals.
          </p>
          <br />
          <p className="intro__p">
            Our executive team participates in national animal welfare groups
            working to disrupt and change an outdated industry. You’ll catch our
            team members volunteering at local animal shelters on the weekends,
            and you’d be hard-pressed to find a Animal Life Matters team member
            not fostering a litter of kittens or a pup in need. It’s not a
            requirement to work at Animal Life Matters, but the people who work
            here all seem to have one thing in common: a deep desire to make the
            world a better place for animals.
          </p>
        </div>
        {/* Testimonials */}
        <h1 className="aboutUsTestimonials">Our Testimonials</h1>
        <TestimonialsHome />

        {/* Contact us */}

        <h1 className="welcome__h1">Contact Us</h1>
        <div className="map__bgDiv">
          {" "}
          <Maps />
        </div>
        <div className="aboutus__heightdiv">
          <div className="aboutus__detailsdiv">
            <div className="aboutus__detailsdiv__flex">
              <div className="aboutus__detailsdiv__flex__div1">
                <FontAwesomeIcon
                  icon={faMapLocation}
                  className="aboutus__icon aboutus__iconlocation"
                />
                <p>F10,Islamabad</p>
                <p className="aboutus__detailsdiv__secondp">Pakistan</p>
              </div>

              <div className="aboutus__detailsdiv__flex__div2">
                <FontAwesomeIcon icon={faPhone} className="aboutus__icon" />
                <p>Phone</p>
                <p className="aboutus__detailsdiv__secondp">+(92)3215014087</p>
              </div>

              <div className="aboutus__detailsdiv__flex__div3">
                <FontAwesomeIcon icon={faMailBulk} className="aboutus__icon" />
                <p>email</p>
                <p className="aboutus__detailsdiv__secondp">
                  AnimalsLiveMatter.com
                </p>
              </div>
            </div>
          </div>

          {/* COntact via reportting */}
          <p className="aboutus__contatus__p">
            Report An Animal In Your Surrounding Or Surrender Your Pet
          </p>
          <div className="aboutus__contatus__button__div">
            {" "}
            <Link to="./report">
              <button className="aboutus__contatus__button">Report Us</button>
            </Link>
          </div>
          {/* IMages gallery */}
          {/* <div className="aboutus__reportbtnmaindiv">
        <h1>Report An Animal In Your Surrounding Or Surrender Your Pet</h1>
        <div className="aboutus__reportbtndiv">
          <button>Report Here</button>
        </div>
      </div> */}

          {/* <Container>
        <Row className="g-3">
          <Col lg={12} xl={12} sm={12} xs={12}> */}
          <div className="aboutus__displayimg__bgdiv">
            <img src={imga} className="aboutus__displayimg" alt=""></img>
            <img src={imgb} className="aboutus__displayimg" alt=""></img>
            <img src={imgc} className="aboutus__displayimg" alt=""></img>
            <img src={imgd} className="aboutus__displayimg" alt=""></img>
            <img src={imge} className="aboutus__displayimg" alt=""></img>
            <img src={imgf} className="aboutus__displayimg" alt=""></img>
            <img src={imgg} className="aboutus__displayimg" alt=""></img>
            <img src={imgh} className="aboutus__displayimg" alt=""></img>
          </div>
          {/* </Col>
        </Row>
      </Container> */}
        </div>
      </div>
      <div className="aboutus__footerheightdiv">
        <IconHr />
        <hr />
        <Footer />
      </div>
    </>
  );
};
export default AboutUs;
