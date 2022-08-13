import React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import img from "../../../images/aboutus/cat1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Header from "../../header/Header";
import { useRef } from "react";
import { useEffect } from "react";
import Footer from "../../footer/Footer";
import CardPages from "../../UI/Cards/CardPages";
import IconHr from "../../UI/IconHr";
import { Link, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Pets from "../../Pets/Pets";
import { useDispatch, useSelector } from "react-redux";
import { Dummy_cart } from "../Shop";

import { cartActions } from "../../../store/Cart-slice";
import { routeActions } from "../../../store/Route-slice";

// const Dummy_cart=[{
//     id:"s1",
//     type:"health food",
//     rating:3,
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s2",
//     type:"nice food",
//     rating:5,
//     name:"Accessories ",
//     price:100.2
// },
// {
//     id:"s3",
//     type:"trimmer",
//     rating:2,
//     name:"readsa",
//     price:123.3
// },
// {
//     id:"s4",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:62.9
// },
// {
//     id:"s5",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:12.9
// },
// {
//     id:"s6",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:12.9
// },
// {
//     id:"s7",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:12.9
// },
// {
//     id:"s8",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:12.9
// },
// {
//     id:"s9",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:12.9
// },
// {
//     id:"s10",
//     type:"trimmer",
//     rating:"3",
//     name:"Prescription Diet",
//     price:123.3
// },
// {
//     id:"s11",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s12",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s13",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s14",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s15",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s16",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s17",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s18",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s19",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s20",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s21",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s22",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s23",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s24",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s25",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s26",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s27",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },
// {
//     id:"s28",
//     type:"health food",
//     rating:"3",
//     name:"Prescription Diet",
//     price:99.9
// },

// ]

const ProductDetail = (props) => {
  const quantityRef = useRef();

  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const params = useParams();
  const routee = params.productid;
  const productDetail = Dummy_cart.find(
    (product) => product.id === params.productid
  );

  // if (!productDetail){
  //   return(<p>NO such product exist</p>)
  // }

  useEffect(() => {
    dispatch(
      routeActions.addRouteId({
        id: params.productid,
      })
    );
  }, []);

  const [id, type, rating, name, price] = Dummy_cart;
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: params.productid,
        type: productDetail.type,
        name: productDetail.name,
        rating: productDetail.rating,
        price: productDetail.price,
        quantity: parseInt(quantityRef.current.value, 10),
        image: productDetail.image,
      })
    );
  };

  const routeId = useSelector((state) => state.route.routeId);
  console.log("Route id ha ", routeId);

  var starIcon = [];
  var ratings = productDetail.rating;
  for (var i = 0; i < ratings; i++) {
    starIcon.push(
      <FontAwesomeIcon icon={faStar} className="star__icons__cardItems" />
    );
  }
  return (
    <>
      <Header />

      <CardPages name={"Product Details"} />
      <h1>{params.productid}</h1>
      <div className="product__detail__cartbtnDiv">
        <Link to={`/shop/${params.productid}/cart`}>
          <button className="product__detail__cartbtn">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="product__detail__cartbtn__cartIcon"
            />
            View Cart {cartQuantity}
          </button>
        </Link>
      </div>
      <div className="product__detailbgdiv">
        <div className="product__detailmaindivflex">
          <div className="product__detailsmallflex1">
            <img src={productDetail.image} alt=""></img>
          </div>
          <div className="product__detailsmallflex2">
            <h3>{productDetail.name}</h3>
            <hr className="product__detailsmallflex2__hr"></hr>
            <span>${productDetail.price} </span>
            <span className="product__detailsmallflex2__star">{starIcon}</span>
            <hr className="product__detailsmallflex2__hr"></hr>
            <p className="product__detailsmallflex2__description">
              Royal Canin Persian Kitten Food has a common variety of qualities
              that should be considered when you pick its food. Your Persian
              little cat’s prosperity and development merit extraordinary
              consideration, particularly while its safe framework is as yet
              created.
            </p>

            <p className="product__detailsmallflex2__stock">25 in stock</p>
            <input
              ref={quantityRef}
              type="number"
              min="1"
              max="5"
              className="product__detailsmallflex2__input"
            ></input>
            <button
              onClick={addToCartHandler}
              className="product__detailsmallflex2__button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="product__detail__descriptiondiv">
        <h1>Description</h1>
        <p>
          It’s been noted by reproducers that your Persian cat’s stomach-related
          framework will grow slowly and stay youthful for some time. That is
          the reason Royal Canin Persian Kitten Food is detailed with profoundly
          edible protein that is of the greatest quality. It likewise contains
          an adjusted fiber content (counting psyllium) and prebiotics to assist
          with supporting a decent equilibrium in the digestive vegetation. The
          kind of kibble in Royal Canin Persian Kitten is planned with your
          Persian little cat’s jaw and head shape as a primary concern; its
          little, rectangular shape and delicate surface make it simple for it
          to effectively get it and bite.
          <br></br>
          <br></br>
          <b>What are The Key Benefits of Royal Canin Persian Kitten Food:</b>
          <br></br>
          Uncommon brachycephalic jaw: This exceptionally planned little
          rectangular kibble with a delicate surface is simple for the Persian
          cat to get and bite. Solid development and long hair: With adjusted
          protein content, and unequivocally adjusted nutrients and minerals
          (counting calcium and phosphorus) to assist with supporting sound
          development while adding to solid skin and a wonderful coat.
          Stomach-related execution: Highly edible protein, and adjusted fiber
          content (counting psyllium), and prebiotics to assist with supporting
          an equilibrium in the gastrointestinal vegetation. *Protein is chosen
          for its extremely high absorbability. It provides support to your
          immune system. A licensed complex of cell reinforcements, including
          nutrient E, helps support the kitten’s regular safeguards.
        </p>
      </div>
      <IconHr />
      <hr />
      <Footer />
      <Route path={`/shop/${params.productid}/cart`}>
        <Cart />
      </Route>
    </>
  );
};

export default ProductDetail;
