import React, { useEffect, useState } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./DonationHistory.css";
import img from "../../../images/aboutus/cat1.jpg";
import { useSelector } from "react-redux";
import axios from "axios";
import { NotificationManager } from "react-notifications";
const DonationHistory = (props) => {
  const [donatedData, setDonatedData] = useState();
  const isAuth = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuth.isAuth) {
      axios
        .get("http://127.0.0.1:8000/api/donations", {
          headers: {
            "Content-Type": "application/json",
            email: isAuth.email,
          },
        })
        .then((response) => {
          setDonatedData(response.data);
          console.log(response);
        })
        .catch((response) => {
          console.log(response);
          NotificationManager.error(
            "Something going bad happen during fetching donations data.",
            "Error!",
            5000
          );
        });
    }
  }, []);

  return (
    <>
      <div className="DonationHistory__mainDiv" onClick={props.onClose}>
        <div className="DonationHistory__bgDiv">
          <h1>Your Recent Donation History</h1>
          <div>
            <img className="DonationHistory__userImg" src={img} alt=""></img>
          </div>
          <h2>{localStorage.getItem("userName")}</h2>
          <div>
            <a target="_blank" href="https://www.facebook.com/">
              <FacebookIcon className="DonationHistory__icon" />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <TwitterIcon className="DonationHistory__icon" />
            </a>
            <a target="_blank" href="https://www.youtube.com/">
              <YouTubeIcon className="DonationHistory__icon" />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <InstagramIcon className="DonationHistory__icon" />
            </a>
          </div>

          <div className="DonationHistory__card">
            <div className="DonationHistory__card__heading">
              <h4>Date</h4>
              <h4>Donation Amount</h4>
            </div>
            {donatedData &&
              donatedData.map((d, key) => {
                return (
                  <div className="DonationHistory__card__data" key={key}>
                    <h4>{d.date}</h4>
                    <h4>{d.amount}</h4>
                  </div>
                );
              })}
            {/* <div className="DonationHistory__card__data">
                <h4>12/2/21</h4>
                <h4>$123</h4>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default DonationHistory;
