import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import CardPages from "../UI/Cards/CardPages";
import img from "../../images/aboutus/donationcat.jpg";
import DonationHistory from "../UI/Modals/DonationHistory";
import DonationModal from "../UI/Modals/DonationModal";
import "./Donation.css";
import IconHr from "../UI/IconHr";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { NotificationManager } from "react-notifications";
// import { useEffect } from "react";
// import { AuthActions } from "../../store/Auth-slice";
// import GoogleLogins from "../Login/GoogleLogin";

const initialValues = {
  firstName: "",
  lastName: "",
  donor_email: "",
  amount: "",
  phone: "",
  card_number: "",
  CVV: "",
  expiry_date: "",
  city: "",
  zip_code: "",
  address: "",
};
const Donation = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [donationModal, setDonationModal] = useState(false);
  const [errorDonation, setErrorDonation] = useState(true);
  const formatYmd = (date) => date.toISOString().slice(0, 10);
  // const [donationIsLogin, setDonationIsLogin] = useState(true);
  // const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);
  const [userDonationData, setUserDonationData] = useState(initialValues);

  const showDonationModal = () => {
    setDonationModal(true);
  };
  const hideDonationModal = () => {
    setDonationModal(false);
  };
  const showDonationHandler = () => {
    setShowHistory(true);
  };
  const hideDonationHandler = () => {
    setShowHistory(false);
  };
  const donationInputChangeHandler = (event) => {
    // const {name,value}=event.target;
    setUserDonationData({
      ...userDonationData,
      [event.target.name]: event.target.value,
    });
    if (
      userDonationData.firstName.length !== 0 &&
      userDonationData.lastName.length !== 0 &&
      userDonationData.donor_email.length !== 0 &&
      userDonationData.phone.length !== 0 &&
      userDonationData.card_number.length !== 0 &&
      userDonationData.amount.length !== 0 &&
      userDonationData.zip_code.length !== 0 &&
      userDonationData.address.length !== 0 &&
      userDonationData.city !== "noCity"
    ) {
      setErrorDonation(false);
    }
  };
  const donationFormHandler = (event) => {
    event.preventDefault();
    // console.log(userDonationData);
    axios
      .post(
        "http://127.0.0.1:8000/api/donations",
        {
          name: userDonationData.firstName + userDonationData.lastName,
          donor_email: userDonationData.donor_email,
          amount: userDonationData.amount,
          phone: userDonationData.phone,
          card_number: userDonationData.card_number,
          CVV: userDonationData.CVV,
          expiry_date: userDonationData.expiry_date,
          city: userDonationData.city,
          zip_code: userDonationData.zip_code,
          address: userDonationData.address,
          email: isAuth.email,
          date: formatYmd(new Date()),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        showDonationModal();
        NotificationManager.success(response.data.msg, "Successful!", 5000);
      })
      .catch(function (response) {
        console.log(response);
        NotificationManager.error(
          "Something going bad happen. Check that all fields are filled out.",
          "Error!",
          5000
        );
      });

    // console.log("Donation data is =====>", donationData);
  };

  return (
    <>
      {showHistory && <DonationHistory onClose={hideDonationHandler} />}
      {!errorDonation && donationModal && (
        <DonationModal onClose={hideDonationModal} />
      )}
      <Header />
      <CardPages name="Donation" />
      <div className="Donation__maindiv">
        <div className="Donation__bgdiv">
          <h1 className="Donation__h1">
            Help Us In Donation For A Better Future Of Animals
          </h1>
          <div className="Donation__flex">
            <div className="Donation__flexleft">
              <p>
                Your money will act as a vital step in proper and everlasting
                working of our shelter. We ensure you that your money will be
                spent in a cause that will help animals living a happy life.
                Your slight donation can help alot.{" "}
                <strong>ANIMALSLIFEMATTERS</strong> will be grateful to you for
                this virtuous step. You can read more about us , and what we use
                your money for by clicking the <strong>"About us"</strong>{" "}
                button below.
              </p>
              <Link to="/aboutus">
                <div className="Donation__flexleft__btndiv">
                  <button className="Donation__flexleft__btn">About Us</button>
                </div>
              </Link>
            </div>
            <div className="Donation__flexright">
              <img src={img} alt="" />
            </div>
          </div>

          {!isAuth.isAuth ? (
            <div className="Donation__formoptionaldiv">
              <p>You must be logged in to our applicaiton before donating.</p>
              <p>Login to application via Google</p>
              {/* <div className="Donation__formoptionaldivbtndiv">
            <Link to="/login">
                <button  className="Donation__formoptionaldivbtn">Login</button>
            </Link>
        </div> */}
            </div>
          ) : (
            <div className="Donation__donationhistorydiv">
              <p>
                Hey {localStorage.getItem("userName")}, Thanks for your donation
              </p>
              <p>View your previous donation history at </p>

              <div className="Donation__donationhistorydivbtn">
                <button onClick={showDonationHandler}>Donation history</button>
              </div>
            </div>
          )}

          {isAuth.isAuth && (
            <div className="Donation__form">
              <h1 className="Donation__formh1">Your Information</h1>
              <form
                className="Donation__payform"
                onSubmit={donationFormHandler}
              >
                <input
                  name="firstName"
                  value={userDonationData.firstName}
                  onChange={donationInputChangeHandler}
                  type="text"
                  placeholder="card holder first name"
                  required
                />
                <input
                  name="lastName"
                  value={userDonationData.lastName}
                  onChange={donationInputChangeHandler}
                  type="text"
                  placeholder="card holder last name"
                  required
                />
                <input
                  name="donor_email"
                  value={userDonationData.emailDonation}
                  type="text"
                  onChange={donationInputChangeHandler}
                  placeholder="email"
                  required
                />
                <input
                  name="phone"
                  value={userDonationData.phoneDonation}
                  type="text"
                  onChange={donationInputChangeHandler}
                  placeholder="phone"
                  required
                />

                <input
                  name="card_number"
                  value={userDonationData.accountNoDonation}
                  onChange={donationInputChangeHandler}
                  type="text"
                  maxlength="19"
                  placeholder="Account number"
                  required
                />
                <div style={{ display: "contents" }}>
                  <input
                    name="expiry_date"
                    placeholder="card expiry date YYYY-MM-DD"
                    onChange={donationInputChangeHandler}
                    type="text"
                    required
                  />
                  <input
                    name="CVV"
                    // value={userDonationData.accountNoDonation}
                    onChange={donationInputChangeHandler}
                    type="text"
                    maxlength="4"
                    placeholder="CVV"
                    required
                  />
                </div>
                <input
                  name="amount"
                  value={userDonationData.amountDonation}
                  type="text"
                  onChange={donationInputChangeHandler}
                  placeholder="Amount"
                  required
                />
                <select
                  name="city"
                  value={userDonationData.cityDonation}
                  onChange={donationInputChangeHandler}
                  required
                >
                  <option value="noCity">City</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Peshawar">Peshawar</option>
                </select>
                <input
                  name="zip_code"
                  value={userDonationData.zipCodeDonation}
                  onChange={donationInputChangeHandler}
                  type="text"
                  placeholder="zipcode"
                  required
                />
                <input
                  name="address"
                  value={userDonationData.addressDonation}
                  onChange={donationInputChangeHandler}
                  type="text"
                  placeholder="address"
                  className="Donation__payform__address"
                  required
                />
                <button
                  className="donation-submit-button"
                  type="submit"
                  // onClick={showDonationModal}
                >
                  Donate
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <IconHr />
      <hr />
      <Footer />
    </>
  );
};
export default Donation;
