// import React from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./CartHome.css";

import "slick-carousel/slick/slick-theme.css";
import "./CartHome.css";
import { Dummy_cart } from "../../Shop/Shop";
import CardItems from "../../UI/Cards/CardItems";
// import IconHr from "../../UI/IconHr";
// const Dummy_cart=[{
//     id:"s1",
//     rating:3,
//     type:"health food",
//     name:"Prescription Diet",
//     price:"99.9"
// },
// {
//     id:"s2",
//     rating:3,

//     type:"nice food",
//     name:"Accessories ",
//     price:"100.2"
// },
// {
//     id:"s3",
//     rating:3,

//     type:"trimmer",
//     name:"readsa",
//     price:"123.3"
// },
// {
//     id:"s4",
//     type:"health food",
//     name:"Prescription Diet",
//     price:"62.9"
// },
// {
//     id:"s5",
//     rating:3,

//     type:"health food",
//     name:"Prescription Diet",
//     price:"12.9"
// },
// {
//     id:"s6",
//     rating:3,

//     type:"health food",
//     name:"Prescription Diet",
//     price:"12.9"
// },
// {
//     id:"s7",
//     rating:3,

//     type:"health food",
//     name:"Prescription Diet",
//     price:"12.9"
// },
// {
//     id:"s8",
//     rating:3,

//     type:"health food",
//     name:"Prescription Diet",
//     price:"12.9"
// },
// {
//     id:"s9",
//     rating:3,
//     type:"health food",
//     name:"Prescription Diet",
//     price:"12.9"
// },
// {
//     id:"s10",
//     rating:3,

//     type:"trimmer",
//     name:"Prescription Diet",
//     price:"123.3"
// },
// ]

const CartHome = () => {
  const cartItems = Dummy_cart.map((x) => (
    <div>
      <CardItems
        key={x.id}
        id={x.id}
        name={x.name}
        type={x.type}
        rating={x.rating}
        price={x.price}
        image={x.image}
      />
    </div>
  ));
  // console.log("cart itemsa  are",cartItems)

  //   render() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(cartItems);
  return (
    <>
      <div className="cartHome__maindiv">
        <div className="cartHome__div">
          <h2 className="cartHome__h2"> Top Selling Items </h2>
          <Slider {...settings}>{cartItems}</Slider>
        </div>
      </div>
      {/* <IconHr/> */}
      <hr />
    </>
  );
};
export default CartHome;
