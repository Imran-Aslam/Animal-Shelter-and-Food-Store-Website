import React from "react";
import {Link} from "react-router-dom";
import "./BannerHome.css"
// import PetsIcon from '@mui/icons-material/Pets';
import Image1 from "../../../images/Banner_slider_image1.jpg";
import Image2 from "../../../images/Banner_slider_image2.jpg";
// import Image3 from "../../../images/Banner_slider_image3.jpg";


import {Carousel} from "react-bootstrap";

const BannerHome = () =>{
    return(
        <div>
<Carousel className="corousel">
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 img__height"
      src={Image1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h1 className="slider__h1">We Give Special Care</h1>
    <h1 className="slider__h1"> To Your <span>Loving Pets</span></h1>
      <p className="slider__p">Report your pets in neighrborhood so we can take care of them </p>
      <Link to="/report">
       <button className="slider__div">Report here</button>  
      </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 img__height"
      src={Image2}
      alt="Second slide"
    />
    <Carousel.Caption className="slider2">
   
    <h1 className="slider__h1 slider2__h1">Help Us In Donation For Better Cause</h1>
      <p className="slider__p slider2__p">Your donation will help us in proper feeding of animals present in the shelter
      </p>
      <Link to="/donate">
       <button className="slider__div slider2__div">Donate here</button>  
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item interval={5000}>
    <img 
      className="d-block w-100 img3 img__height"
      src={Image3}
      alt="Third slide"
    />
    <Carousel.Caption >
    <h1 className="slider__h1 slider3__h1">Purchase Food From Our Online Store</h1>
      <p className="slider__p slider3__p">Your donations will act as our better cause of sodadpasdas adha asdkl apdoas; asdkljasd;ja; akdj;
      </p>
      <Link to="/donate">
       <button className="slider__div slider3__div">Go to Food Store</button>  
      </Link>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
<hr/>

</div>
    )
}
export default BannerHome;