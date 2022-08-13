import React from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import CardPages from "../../UI/Cards/CardPages";
// import Img from "../../../images/HomeImages/welcome.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import Checkout from "../Checkout/Checkout";
// import { cartActions } from "../../../store/Cart-slice";
import "./Cart.css";
import IconHr from "../../UI/IconHr";
import CartDiscard from "./CartDiscard";
// import { recomposeColor } from "@material-ui/core";
const Cart = () => {
  const params = useParams();
  const dispatch = useDispatch();
  // console.log("cart id is",cart.id);
  const cartData = useSelector((state) => state.cart.items);
  const total = cartData.map((price) => {
    return price.totalPrice;
  });
  function getSum(total, num) {
    return total + Math.round(num);
  }
  const subTotal = total.reduce(getSum, 0);
  // const totalAmount = cartData.totalAmount.toFixed(2);
  const cart = cartData.map(
    (x) => (
      <div className="ProductCart__items">
        <span>
          <img src={x.image} alt=""></img>
        </span>
        <span className="ProductCart__items__pricespan">${x.price}</span>
        <span>{x.quantity}</span>
        <span>${x.totalPrice.toFixed(2)}</span>
        <span className="ProductCart__items__close">
          <CartDiscard
            id={x.id}
            type={x.type}
            name={x.name}
            rating={x.rating}
            price={x.price}
          />
        </span>
        {/* <hr className='ProductCart__items__hr'/> */}
      </div>
    )
    // { const subTotal+=x.totalPrice;}
  );

  console.log("cart haaa", cart);
  console.log("cartData id is", cart.id);

  // console.log("SubTotal is,",subTotal);

  return (
    <>
      <Header />
      <CardPages name="Cart" />
      <div className="ProductCart__maindiv">
        <div className="ProductCart__bgdiv">
          <div className="ProductCart__headings">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span>Change </span>
          </div>
          {cartData && cart}

          <Link to="/shop">
            <button className="ProductCart__continue__shopping">
              Continue Shopping
            </button>
          </Link>

          <div className="ProductCart__items__checkout">
            <div className="ProductCart__items__checkout__subtotal">
              <span>Subtotal</span>
              <span>${subTotal}</span>
            </div>
            <div className="ProductCart__items__checkout__subtotal">
              <span>Shipping Charges</span>
              <span>Free</span>
            </div>
            <hr className="ProductCart__items__checkout__subtotal__hr" />
            <div className="ProductCart__items__checkout__subtotal">
              <span className="ProductCart__items__checkout__subtotal__total">
                Total
              </span>
              <span className="ProductCart__items__checkout__subtotal__totalprice">
                ${subTotal}
              </span>
            </div>
            <Link to={`/shop/${params.productid}/cart/checkout`}>
              <button className="ProductCart__CheckoutButton">
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <IconHr orange />
      <hr />
      <Footer />
    </>
  );
};
export default Cart;
