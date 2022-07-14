import React from "react";
import "./TopDoners.css";
import { Container, Row, Col } from "react-bootstrap";
import CardDoners from "../../UI/Cards/CardDoners";
import { Link } from "react-router-dom";
import img1 from "../../../images/DonorImages/DonorUser1.jpg";
import img2 from "../../../images/DonorImages/DonorUser2.jpg";
import img3 from "../../../images/DonorImages/DonorUser3.jpg";
import img4 from "../../../images/DonorImages/DonorUser4.jpg";
// import IconHr from "../../UI/IconHr";
const Dummy_Doners = [
  {
    id: "d1",
    name: "Meysam Jarahkar",
    donation: "500",
    image: img1,
  },
  {
    id: "d2",
    name: "Gregory Hayes",
    donation: "1000",
    image: img2,
  },
  {
    id: "d3",
    name: "Ali Morshedlou",
    donation: "1200",
    image: img3,
  },
  {
    id: "d4",
    name: "Albert Dera",
    donation: "1500",
    image: img4,
  },
];
const doners = Dummy_Doners.map((x) => (
  <Col xl={3} lg={4} sm={6} xm={12}>
    <CardDoners
      name={x.name}
      key={x.id}
      donation={x.donation}
      image={x.image}
    />
  </Col>
));
console.log("Doners are ", doners);
const TopDoners = () => {
  return (
    <>
      <div className="topdoners__maindiv">
        <Container className="topdoners__bgdiv">
          <h1 className="topdoners__h1">Our Top Donaters </h1>
          <Row className="g-4">{doners}</Row>
        </Container>
      </div>

      <h1 className="topDoners__btnh1">Help Us In Donation</h1>
      <p className="topDoners__btnp">
        Our pet's store is runnign because of your donation.Pleases help us
        donate for the good cause of the pet store. We use your money to ensure
        better services of the animals and their proper shelter and providing
        them the food they require to nourish.
      </p>
      <div className="topDoners__btndiv">
        <Link to="/donate">
          <button className="topDoners__btn">Donate</button>
        </Link>
      </div>

      <hr />
    </>
  );
};
export default TopDoners;
