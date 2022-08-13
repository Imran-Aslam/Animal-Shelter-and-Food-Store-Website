import React from "react";
// import {Container,Row,Col} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
// import classes from "./Testimonials.module.css"
import "slick-carousel/slick/slick.css";
import CardTestimonial from "../../UI/Cards/CardTestimonial";
// import "./TestimonialsHome.css";
const Dummy_Testimoials = [
  {
    id: "t1",
    name: "Imran Aslam",
    occupation: "Adopter",
    text: "I adopted a pet from this site and it was quite easy and comfortable for me to go through the adoption process.",
  },
  {
    id: "t2",
    name: "Burhan Shabbir",
    occupation: "Reporter",
    text: "Reported my pet here to the app and within 3 to 4 days, they came and took my pet.",
  },
  {
    id: "t3",
    name: "Abdul Wahab",
    occupation: "Reporter",
    text: "Quite satisfied with their service.",
  },
];
const TestimonialsHome = () => {
  const testiData = Dummy_Testimoials.map((x) => (
    <CardTestimonial
      key={x.id}
      id={x.id}
      name={x.name}
      occupation={x.occupation}
      text={x.text}
    />
  ));
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  //   console.log(cartItems)
  return (
    <>
      {/* <div className="cartHome__maindiv">
                        <div className="cartHome__div">
                          <h2 className="cartHome__h2"> Top Selling Items </h2> */}
      <div className="testimonialhome__div">
        <Slider {...settings}> {testiData} </Slider>
        {/* </div>
                        </div> */}
        <hr />
      </div>
    </>
  );
};

export default TestimonialsHome;
