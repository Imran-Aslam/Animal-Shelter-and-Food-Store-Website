import React from "react";
import { Card } from "react-bootstrap";
import Img from "../../../images/HomeImages/welcome.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./CardDoners.css";
const CardDoners = (props) => {
  return (
    <>
      <Card style={{ width: "29rem" }} className="cardDoners__mainCard">
        <Card.Img variant="top" src={props.image} className="cardDoners__img" />
        <Card.Body>
          <Card.Title className="cardDoners__title">{props.name}</Card.Title>
          <Card.Text className="cardDoners__p">${props.donation}</Card.Text>
          <hr className="cardDoners__hr" />
          <div className="cardDoners__icons__div">
            <a target="_blank" href="https://www.facebook.com/">
              <FacebookIcon className="cardDoners__icon" />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <TwitterIcon className="cardDoners__icon" />
            </a>
            <a target="_blank" href="https://www.youtube.com/">
              <YouTubeIcon className="cardDoners__icon" />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <InstagramIcon className="cardDoners__icon" />
            </a>
          </div>
          {/* <FontAwesomeIcon icon={faYoutube}/> */}
        </Card.Body>
      </Card>
    </>
  );
};
export default CardDoners;
