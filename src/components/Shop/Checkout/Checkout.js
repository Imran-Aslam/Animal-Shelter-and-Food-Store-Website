import React from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import CardPages from "../../UI/Cards/CardPages";
import "./Checkout.css";
import { useSelector } from "react-redux";
import IconHr from "../../UI/IconHr";
import { Route } from "react-router-dom";
import { useRef, useState } from "react";
import ErrorModals from "../../UI/Modals/ErrorModals";
const Checkout = () => {
  // const [cityError,setCityError]=useState(false);
  const [formIsValid, setFormIsValid] = useState(true);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const showModal = () => {
    setCheckoutModal(true);
  };
  const hideModal = () => {
    setCheckoutModal(false);
  };

  const checkOutData = useSelector((state) => state.cart.items);
  console.log("checkout data is ", checkOutData);
  const orderedData = checkOutData.map((x) => ({
    orderedQuantity: x.quantity,
    orderedId: x.id,
    orderedPrice: x.price,
    orderedTotal: x.totalPrice,
    // orderedId:x.id
  }));
  console.log("check ho rha ha ", orderedData);

  const oQuantity = [];
  const oTotal = [];
  oQuantity.push(
    orderedData.map(
      (x) =>
        `${x.orderedId}===> quantity:${x.orderedQuantity} total: ${x.orderedTotal}`
    )
  );
  // oPrice.push(orderedData.map(x=>x.orderedPrice));
  // oType.push(orderedData.map(x=>x.orderedType));
  // oTotal.push(orderedData.map(x=>x.orderedTotal));

  let sum = 0;

  for (let i = 0; i < oTotal.length; i++) {
    sum += oTotal[i];
  }

  const total = checkOutData.map((price) => {
    return price.totalPrice;
  });

  function getSum(total, num) {
    return total + Math.round(num);
  }
  const subTotal = total.reduce(getSum, 0);

  const firstnameCheckoutRef = useRef();
  const lastnameCheckoutRef = useRef();
  const emailCheckoutRef = useRef();
  const phoneCheckoutRef = useRef();
  const cityCheckoutRef = useRef();
  const zipcodeCheckoutRef = useRef();
  const addressCheckoutRef = useRef();

  const checkoutHandler = (event) => {
    event.preventDefault();
    setFormIsValid(cityCheckoutRef.current.value !== "City");

    const checkoutFormData = [
      {
        fname: firstnameCheckoutRef.current.value,
        lname: lastnameCheckoutRef.current.value,
        email: emailCheckoutRef.current.value,
        phone: phoneCheckoutRef.current.value,
        city: cityCheckoutRef.current.value,
        zipcode: zipcodeCheckoutRef.current.value,
        address: addressCheckoutRef.current.value,
        orderDetails: oQuantity,
      },
    ];
    console.log("Order Details are:", checkoutFormData);
  };

  const items = checkOutData.map((x) => (
    <div className="Checkout__info">
      <p>{x.name}</p>
      <p>${x.totalPrice.toFixed(2)}</p>
    </div>
  ));

  return (
    <>
      {checkoutModal && formIsValid && (
        <ErrorModals
          btn2
          onClose={hideModal}
          title="Order Submitted"
          message="Thanks for ordering from Animal Life Matters. You will receiver confirmation message soon"
          link="/shop"
          button="Shop"
        />
      )}
      {!formIsValid && checkoutModal && (
        <ErrorModals
          error
          onClose={hideModal}
          title="Error"
          message="Please select a proper city"
        />
      )}
      {/* {checkoutModal && cityError && <ErrorModals  error onClose={hideModal}
        title="Error"
        message='Please select the valid city'
        link="/shop"
        button="Shop"

    />} */}
      <Header />
      <CardPages name="Checkout" />
      <Route path="/shop/cart/checkout">
        <Checkout />
      </Route>
      <form onSubmit={checkoutHandler}>
        <div className="Checkout__maindiv">
          <div className="Checkout__bgdiv">
            <div className="Checkout__leftflexdiv">
              <h2 className="Checkout__h2">Billing Address</h2>
              <div className="Checkout__namesinput">
                <input
                  ref={firstnameCheckoutRef}
                  type="text"
                  placeholder="FirstName"
                  required
                ></input>
                <input
                  ref={lastnameCheckoutRef}
                  type="text"
                  placeholder="LastName"
                  required
                ></input>
              </div>
              <div className="Checkout__emailphone">
                <input
                  ref={emailCheckoutRef}
                  type="text"
                  placeholder="Email"
                  required
                ></input>
                <input
                  ref={phoneCheckoutRef}
                  type="text"
                  placeholder="Phone"
                  required
                ></input>
              </div>
              <div className="Checkout__cityzip">
                <select ref={cityCheckoutRef} required>
                  <option value="City">City</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad </option>
                </select>
                {/* {cityError && <span>please choose a city</span>} */}
                <input
                  ref={zipcodeCheckoutRef}
                  type="text"
                  placeholder="Zipcode"
                  required
                ></input>
              </div>
              <input
                ref={addressCheckoutRef}
                className="Checkout__address"
                type="text"
                placeholder="Address"
                required
              ></input>
            </div>

            {/* IMAGES WALI DIV */}
            <div className="Checkout__rightflexdiv">
              <h1 className="Checkout__h1">Your Order</h1>
              <div className="Checkout__heading">
                <p>Product</p>
                <p>Total</p>
              </div>
              {items}
              {/* <div className="Checkout__info">
            <p>{items.name}</p>
            <p>{items.price}</p>
            </div> */}
              <div className="Checkout__heading2 Checkout__hrheading">
                <p>Subtotal:</p>
                <p>${subTotal}</p>
              </div>
              <div className="Checkout__heading2">
                <p>Total:</p>
                <p>${subTotal}</p>
              </div>
              {/* <input type="radio" value="CreditCart" /> {" "}
              <label className="CheckoutRadio CheckoutRadio1">
                Credit Card
              </label>
              <br />
              <input type="radio" value="CashPayment" /> {" "}
              <label className="CheckoutRadio">CashPayment</label> */}
              <br />
              <button type="submit" onClick={showModal} className="Checkoutbtn">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </form>

      <IconHr orange="y" />
      <hr />
      <Footer />
    </>
  );
};
export default Checkout;
