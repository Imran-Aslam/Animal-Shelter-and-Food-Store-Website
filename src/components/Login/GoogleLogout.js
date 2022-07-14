import React from "react";
import classes from "./GoogleLogin.module.css";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/Auth-slice";
const GoogleLogouts = (props) => {
  const dispatch = useDispatch();
  const onSignoutSuccess = () => {
    alert("you have been signed out successfully");
    dispatch(
      AuthActions.setAuth({
        auth: false,
        email: "",
        name: "",
        image: "",
      })
    );
    window.location.reload(false);
  };
  return (
    <div>
      <GoogleLogout
        className={classes.GoogleLogin__btn}
        clientId="222218230342-pq1fn1dqjo8h2r0fgndd2cklbb9ieppj.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onSignoutSuccess}
        onClick={() => window.location.reload(false)}
      />
    </div>
  );
};
export default GoogleLogouts;
