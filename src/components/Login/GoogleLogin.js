import React from "react";
import ReactDOM from "react-dom";
import classes from "./GoogleLogin.module.css";
import { GoogleLogin } from "react-google-login";
const GoogleLogins = (props) => {
  const responseGoogle = (response) => {
    console.log("response is", response);
    console.log(response.profileObj);
    props.isResponse(response);
    // window.location.reload(false)
  };
  return (
    <div>
      <GoogleLogin
        className={classes.GoogleLogin__btn}
        clientId="222218230342-pq1fn1dqjo8h2r0fgndd2cklbb9ieppj.apps.googleusercontent.com"
        buttonText="Register With Google"
        style={{ fontSize: "1.2rem" }}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        onClick={() => window.location.reload(false)}
      />
      ,
    </div>
  );
};
export default GoogleLogins;
