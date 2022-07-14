import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CardItems from "../UI/Cards/CardItems";
import CardPages from "../UI/Cards/CardPages";
// import Img from "../../images/aboutus/cat2.jpg";
import p1 from "../../images/shopImages/product1.jpg";
import p2 from "../../images/shopImages/product2.jpeg";
import p3 from "../../images/shopImages/product3.jpg";
import p4 from "../../images/shopImages/product4.jpg";
import p5 from "../../images/shopImages/product5.jpg";
import p6 from "../../images/shopImages/product6.jpg";
import p7 from "../../images/shopImages/product7.jpg";
import p11 from "../../images/shopImages/product8.jpeg";
import p12 from "../../images/shopImages/product9.jpg";
import p13 from "../../images/shopImages/product10.jpg";
import p14 from "../../images/shopImages/product11.jpg";
import p8 from "../../images/shopImages/shop1.jpg";
import p9 from "../../images/shopImages/shop2.jpeg";
import p10 from "../../images/shopImages/shop3.png";
import classes from "./Shop.module.css";
import PaginationCart from "../UI/Pagination/PaginationCart";
import IconHr from "../UI/IconHr";
// import "./Shop.css";
export const Dummy_cart = [
  {
    id: "s1",
    type: "food",
    rating: 3,
    isSale: true,
    name: "Prescription Diet",
    price: 99.9,
    image: p1,
  },
  {
    id: "s2",
    type: "food",
    isSale: false,
    rating: 5,
    name: "Accessories ",
    price: 100.2,
    image: p2,
  },
  {
    id: "s3",
    type: "food",
    isSale: true,
    rating: 2,
    name: "readsa",
    price: 123.3,
    image: p3,
  },
  {
    id: "s4",
    type: "food",
    isSale: true,
    rating: "3",
    name: "Prescription Diet",
    price: 62.9,
    image: p4,
  },
  {
    id: "s5",
    type: "food",
    rating: "3",
    isSale: true,
    name: "Prescription Diet",
    price: 12.9,
    image: p5,
  },
  {
    id: "s6",
    type: "food",
    isSale: true,
    rating: "3",
    name: "Prescription Diet",
    price: 12.9,
    image: p6,
  },
  {
    id: "s7",
    type: "food",
    rating: "3",
    isSale: true,
    name: "Prescription Diet",
    price: 12.9,
    image: p8,
  },
  {
    id: "s8",
    type: "food",
    isSale: true,
    rating: "3",
    name: "Prescription Diet",
    price: 12.9,
    image: p9,
  },
  {
    id: "s9",
    type: "food",
    rating: "3",
    isSale: true,
    name: "Prescription Diet",
    price: 12.9,
    image: p7,
  },
  {
    id: "s10",
    isSale: true,
    type: "food",
    rating: "3",
    name: "Prescription Diet",
    price: 123.3,
    image: p10,
  },
  {
    id: "s11",
    type: "food",
    rating: "3",
    isSale: true,
    name: "Prescription Diet",
    price: 99.9,
    image: p11,
  },
  {
    id: "s12",
    type: "food",
    isSale: true,
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p12,
  },
  {
    id: "s13",
    type: "food",
    isSale: true,
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p13,
  },
  {
    id: "s14",
    type: "food",
    rating: "3",
    isSale: true,
    name: "Prescription Diet",
    price: 99.9,
    image: p14,
  },
  {
    id: "s15",
    type: "food",
    isSale: true,
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p1,
  },
  {
    id: "s16",
    type: "food",
    isSale: true,
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p2,
  },
  {
    id: "s17",
    isSale: true,
    type: "food",
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p3,
  },
  {
    id: "s18",
    isSale: true,
    type: "accessories",
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p9,
  },
  {
    id: "s19",
    type: "accessories",
    isSale: true,
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p10,
  },
  {
    id: "s20",
    type: "accessories",
    rating: "3",
    isSale: true,
    name: "Prescription Diet",
    price: 99.9,
    image: p8,
  },
  {
    id: "s21",
    type: "food",
    rating: "3",
    isSale: true,
    name: "Prescription Diet",
    price: 99.9,
    image: p7,
  },
  {
    id: "s22",
    type: "accessories",
    rating: "3",
    isSale: true,
    name: "Prescription Diet",
    price: 99.9,
    image: p8,
  },
  {
    id: "s23",
    isSale: true,
    type: "accessories",
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p9,
  },
  {
    id: "s24",
    isSale: true,
    type: "accessories",
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p10,
  },
  {
    id: "s25",
    type: "food",
    isSale: true,
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p11,
  },
  {
    id: "s26",
    type: "food",
    isSale: true,
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p12,
  },
  {
    id: "s27",
    type: "food",
    rating: "3",
    isSale: true,
    name: "Prescription Diet",
    price: 99.9,
    image: p13,
  },
  {
    id: "s28",
    isSale: true,
    type: "food",
    rating: "3",
    name: "Prescription Diet",
    price: 99.9,
    image: p14,
  },
];

const Shop = () => {
  const itemTypeRef = useRef();
  const sortTypeRef = useRef();
  // const idRef=useRef();
  const [itemType, setItemType] = useState();
  const [sortType, setSortType] = useState();
  const [filtered, setIsFiltered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const itemTypeChangeHandler = () => {
    setIsFiltered(true);
    setItemType(itemTypeRef.current.value);
  };
  const sortHandler = () => {
    setSortType(sortTypeRef.current.value);
  };
  var filteredItems = Dummy_cart;
  if (filtered) {
    filteredItems = Dummy_cart.filter((item) => item.type === itemType);
  }
  if (sortType === "price") {
    filteredItems = Dummy_cart.sort((a, b) => a.id - b.id);
    if (filtered) {
      filteredItems = Dummy_cart.filter((item) => item.type === itemType);
    }
  }
  if (sortType === "ascending") {
    filteredItems = Dummy_cart.sort((a, b) => a.price - b.price);
    if (filtered) {
      filteredItems = Dummy_cart.filter((item) => item.type === itemType);
    }
  }
  if (sortType === "descending") {
    filteredItems = Dummy_cart.sort((a, b) => b.price - a.price);
    if (filtered) {
      filteredItems = Dummy_cart.filter((item) => item.type === itemType);
    }
  }
  const endIndex = itemsPerPage * currentPage;
  const startIndex = endIndex - itemsPerPage;
  const Shop_data = filteredItems.map((x) => (
    <Col xl={3} lg={4} sm={6} xs={6} className={classes.cardShopCols}>
      <CardItems
        key={x.id}
        id={x.id}
        rating={x.rating}
        type={x.type}
        name={x.name}
        price={x.price}
        isSale={x.isSale}
        image={x.image}
      />
    </Col>
  ));
  var total__items = Shop_data.length;
  const shopData = Shop_data.slice(startIndex, endIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Header />
      <CardPages name="ALM Shop" />
      <h1 className={classes.mainh1}>
        Welcome To ANIMALSLIFEMATTERS Shop, A place where you find accessories
        and food for your loving pets.
      </h1>
      <div className={classes.shopoptionboxdiv}>
        {/* <img src={Img} className={classes.img}></img> */}
        <div>
          <h1 className={classes.h1}> Find The Item Of Your Choice </h1>
        </div>
        <div className={classes.shopoptionboxdivbottom}>
          <div className={classes.shopoptionboxsmalldiv1}>
            <select
              className={classes.select}
              ref={sortTypeRef}
              onChange={sortHandler}
            >
              <option value="price"> Price </option>
              <option value="descending"> Price: High To Low </option>
              <option value="ascending"> Price: Low To High </option>
              {/* <option value="14">3204 </option>                    */}
            </select>
          </div>
          <div className={classes.shopoptionboxsmalldiv2}>
            <select
              className={`${classes.select} ${classes.select2}`}
              onChange={itemTypeChangeHandler}
              ref={itemTypeRef}
            >
              <option value=""> Type </option>
              <option value="accessories"> Accessories </option>
              <option value="food"> Food </option>
              {/* <option value="14">3204 </option>                    */}
            </select>
          </div>
        </div>
      </div>
      <div className={classes.shopmaindiv}>
        <div className="shop__bgdiv">
          <Container>
            <Row> {shopData} </Row>
          </Container>
        </div>
      </div>
      <PaginationCart
        itemsPerPage={itemsPerPage}
        paginate={paginate}
        total__items={total__items}
        startIndex={startIndex}
      />
      <IconHr />
      <hr />
      <Footer />
    </>
  );
};
export default Shop;
