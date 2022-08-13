import React from "react";
import "./Header.css";
import Logo from "../../../src/images/HomeImages/logo2.png";
import SubscriptionsRoundedIcon from "@material-ui/icons/SubscriptionsRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import GoogleLogins from "../Login/GoogleLogin";
import GoogleLogouts from "../Login/GoogleLogout";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { NavLink } from "react-router-dom";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../store/Auth-slice";
// import HeaderImg from "../../../src/images/layer-1.png"
const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);
  const formatYmd = (date) => date.toISOString().slice(0, 10);
  //   const [isLogin, setIsLogin] = useState(false);
  // const loginHandler=()=>{
  //     setIsLogin(true);
  // }
  const userDataHandler = (userData) => {
    if (userData) {
      axios
        .post(
          "http://127.0.0.1:8000/api/users",
          {
            email: userData.profileObj.email,
            full_name: userData.profileObj.name,
            image: userData.profileObj.imageUrl,
            joining_date: formatYmd(new Date()),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          dispatch(
            AuthActions.setAuth({
              auth: true,
              email: userData.profileObj.email,
              name: userData.profileObj.name,
              image: userData.profileObj.imageUrl,
            })
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  // useEffect(() => {

  // }, [userImg, userName, localStorage.getItem("userName")]);

  return (
    <>
      <div className="header">
        <div className="header__top">
          <div className="header__top__color">
            <div className="header__top__left">
              <div>
                {" "}
                <LocationOnIcon className="svg_icons svg_padding" />
                <span>&nbsp;F/10 Islamabad,Pakistan</span>
              </div>
              <div>
                <PhoneIcon className="svg_icons svg_padding" />
                <span>&nbsp;+(92) 3215014087</span>
              </div>
              <div>
                <MailIcon className="svg_icons svg_padding" />
                <span>&nbsp; @animalslifematters.com</span>
              </div>
            </div>
            <div className="header__top__right">
              {!isAuth.isAuth ? (
                <div>
                  <GoogleLogins isResponse={userDataHandler} />{" "}
                </div>
              ) : (
                <div>
                  <img
                    src={isAuth.image}
                    className="userData__img"
                    alt=""
                  ></img>
                  <h3 className="header__username">{isAuth.name}</h3>
                  <GoogleLogouts />
                </div>
              )}
              <div>
                <SubscriptionsRoundedIcon className="svg_icons svg__links" />
              </div>
              <div>
                <FacebookIcon className="svg_icons svg__links" />
              </div>
              <div>
                <TwitterIcon className="svg_icons svg__links" />
              </div>
              {/* <div className="header__top__right__elements"></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="header__sticky">
        <div className="header__bottom">
          <div className="header__logo">
            <img src={Logo} alt="no rendered"></img>
          </div>
          <div className="header__bottom__right">
            <div className="header__links">
              <NavLink
                exact
                to="/homes"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <span className="header__links__items">Home</span>
              </NavLink>
            </div>
            <div className="header__links">
              <NavLink
                to="/about"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <span className="header__links__items">About</span>
              </NavLink>
            </div>
            <div className="header__links">
              <NavLink
                to="/pets"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <span className="header__links__items">Pets</span>
              </NavLink>
            </div>
            {/* <div className="header__links" >
                            <NavLink to="/adopt" activeClassName="active" style={{ textDecoration: 'none' }}>
                                <span className="header__links__items">Adopt</span>
                            </NavLink>
                        </div> */}
            <div className="header__links">
              <NavLink
                to="/report"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <span className="header__links__items">Report</span>
              </NavLink>
            </div>
            <div className="header__links">
              <NavLink
                to="/donate"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <span className="header__links__items">Donate</span>
              </NavLink>
            </div>
            <div className="header__links">
              <NavLink
                to="/shop"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                <span className="header__links__items">Shop</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
