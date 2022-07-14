import React from "react";
import { Card } from "react-bootstrap";
// import Img from "../../../images/HomeImages/welcome.jpg";
import "./CardItems.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import ProductDetail from "../../Shop/ProductDetails/ProductDetail";

const CardItems = (props) => {
  // const sale = props.isSale;

  var starIcon = [];
  // console.log("Props.is sale is ",props.isSale);
  var ratings = props.rating;
  for (var i = 0; i < ratings; i++) {
    starIcon.push(
      <FontAwesomeIcon icon={faStar} className="star__icons__cardItems" />
    );
  }
  const salePrice = props.price / 2;

  let random = Math.floor(Math.random() * 11);
  let itemName = "";
  if (random % 2 === 0) {
    itemName = "cardItems__type";
  } else {
    itemName = "cardItems__type2";
  }
  return (
    <>
      <Card style={{ width: "100%" }} className="cardItems__card">
        {props.isSale && <div className="cardItems__sale">Sale</div>}
        <Card.Img variant="top" src={props.image} className="cardItems__img" />
        <Card.Body>
          <Card.Title className="cardItems__title">
            #{props.id}
            {props.type}
          </Card.Title>
          <hr className="cardItems__hr" />

          <h2 className={itemName}>{props.name}</h2>
          <Card.Text>
            <div className="cardItems__stardiv">
              {/* { for (var i=0;i<rating ;i++)}
    {
     <FontAwesomeIcon icon={faStar} className="star__icons__cardItems"/>} */}
              {starIcon}
            </div>
          </Card.Text>
          {!props.isSale && (
            <h2 className="cardItems__price">${props.price}</h2>
          )}
          {props.isSale && (
            <h2 className="cardItems__price">
              <span>${props.price}</span>${salePrice}
            </h2>
          )}

          <div className="cardItems__cartIcons__div">
            <Link to={`/shop/${props.id}`}>
              <button className="cardItems__cartIcon__div">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="cardItems__cartIcon"
                />
              </button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default CardItems;
