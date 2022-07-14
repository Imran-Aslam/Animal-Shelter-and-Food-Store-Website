import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faKey} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LoginModal from "../../components/UI/Modals/LoginModal";
import "./Login.css";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CardPages from "../UI/Cards/CardPages";
const Login = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const loginHandler = (event) => {
    event.preventDefault();
    setShowModal(true);
  };
  const signupHandler = (event) => {
    event.preventDefault();
    setShowModal(true);
  };
  const hideLoginModal = () => {
    setShowModal(false);
  };
  const showDivHandler = () => {
    setShowDiv(false);
  };
  const showDivHandler2 = () => {
    setShowDiv(true);
  };
  return (
    <>
      {showModal && <LoginModal onClose={hideLoginModal} />}
      <Header />
      <CardPages name="Login/Signup" />
      <div className="Login__maindiv">
        <h1 className="Login__h1">Be A Part Of Our Community!!!</h1>

        <div>
          {!showDiv && (
            <div className="Login__bgdiv">
              <div className="Login__login__emailpass">
                <AccountCircleTwoToneIcon className="Login__login__accountcircle__icon" />
                <h1>LOGIN</h1>
                <form className="Login__login__emailpass__form">
                  <div className="Login__login__emailpass__icondiv">
                    <EmailIcon className="Login__login__emailpass__icon" />
                    <input type="text" placeholder="Email" />
                  </div>

                  <div className="Login__login__emailpass__icondiv">
                    <LockIcon className="Login__login__emailpass__icon" />
                    <input type="password" placeholder="Password" />{" "}
                  </div>
                  <p>Forgot Password?</p>

                  <button type="submit" onClick={loginHandler}>
                    LOGIN
                  </button>
                </form>
              </div>

              <div className="Login__signup">
                <h1>SIGN UP</h1>
                <p>New To Our Website?</p>
                <button onClick={showDivHandler2}>Sign Up With</button>
              </div>
            </div>
          )}
          <div>
            {showDiv && (
              <div className="Login__secondflex">
                <div className="Login__accountpresent">
                  <p>Have An Account??</p>
                  <button
                    onClick={showDivHandler}
                    className="Login__accountpresent__login"
                  >
                    Login
                  </button>
                </div>
                <div className="Login__signupdata">
                  <PersonAddTwoToneIcon className="Login__login__accountcircle__icon" />
                  <h1>Sign Up With Google</h1>

                  <div className="check">
                    <form className="Login__signupdataform">
                      <div className="Login__login__emailpass__icondiv">
                        <EmailIcon className="Login__login__emailpass__icon" />
                        <input type="text" placeholder="Email" />
                      </div>

                      <div className="Login__login__emailpass__icondiv">
                        <LockIcon className="Login__login__emailpass__icon" />
                        <input type="password" placeholder="Password" />{" "}
                      </div>
                      <button type="submit" onClick={signupHandler}>
                        Signup
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
