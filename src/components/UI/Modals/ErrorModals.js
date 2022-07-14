import React from "react";
import "./ErrorModals.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const ErrorModals = (props) => {
  const modalHeading = props.error
    ? "Error__smalldivh1"
    : "Error__smalldivaccepth1";
  const modalbtn = props.error
    ? "Error__smalldiv_button me-4"
    : "Error__smalldiv_buttonaccept";
  return (
    <>
      <div className="Error__maindiv">
        <div className="Error__bgdiv" onClick={props.onClose}>
          <div className="Error__smalldiv">
            <h1 className={modalHeading}>{props.title}</h1>
            <p>{props.message} </p>

            <button className={modalbtn} onClick={props.onClose}>
              Close
            </button>
            {props.btn2 && (
              <Link to={props.link}>
                <button className={modalbtn}>{props.button}</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorModals;
