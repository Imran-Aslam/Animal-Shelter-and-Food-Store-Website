import React from "react";
import { Container, Col, Row } from "react-bootstrap";
// import { reportActions } from "../../../store/Report-slice";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import ReportModal from "../../UI/Modals/ReportModal";
import IconHr from "../../UI/IconHr";
// import ReactFormInputValidation from "react-form-input-validation";

import { useRef, useState } from "react";
import "./ReportHomeForm.css";
import { NotificationManager } from "react-notifications";

const ReportHomeForm = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  // const  [errorReport,setErrorReport]=useState(true);

  const firstNameReportref = useRef();
  const lastNameReportref = useRef();
  const emailReportref = useRef();
  const phoneReportref = useRef();
  const cityReportref = useRef();
  const typeReportref = useRef();
  const injuryReportref = useRef();
  const addressReportref = useRef();
  const genderReportref = useRef();
  const formatYmd = (date) => date.toISOString().slice(0, 10);

  // const dispatch = useDispatch();
  const reportFormHandler = (event) => {
    event.preventDefault();
    let form_data = new FormData();
    if (selectedImage) {
      form_data.append("image", selectedImage, selectedImage.name);
    }
    if (
      !selectedImage ||
      emailReportref.current.value === "" ||
      genderReportref.current.value === "" ||
      typeReportref.current.value === "" ||
      injuryReportref.current.value === "" ||
      cityReportref.current.value === "" ||
      addressReportref.current.value === "" ||
      phoneReportref.current.value === ""
    ) {
      NotificationManager.error(
        "Please fill out all the fields. You might be missing some field.",
        "Error!",
        5000
      );
    } else {
      form_data.append(
        "name",
        firstNameReportref.current.value + lastNameReportref.current.value
      );
      form_data.append("email", emailReportref.current.value);
      form_data.append("gender", genderReportref.current.value);
      form_data.append("type", typeReportref.current.value);
      form_data.append("is_injured", injuryReportref.current.value);
      form_data.append("city", cityReportref.current.value);
      form_data.append("address", addressReportref.current.value);
      form_data.append("phone", phoneReportref.current.value);
      form_data.append("date", formatYmd(new Date()));
      axios
        .post("http://127.0.0.1:8000/api/report", form_data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          // console.log(response);
          NotificationManager.success(
            "report submitted successfully.",
            "Successful!",
            5000
          );

          props.onOpen();
        })
        .catch(function (response) {
          console.log(response);
          NotificationManager.error(
            "Something going bad happen. Check that all fields are filled out.",
            "Error!",
            5000
          );
        });
    }
  };

  return (
    <>
      <div className="background__reportHomeForm">
        <div>
          {/* <img alt="not found" width={"250px"} src={URL.createObjectURL(new Blob(binaryData))} />
        <br /> */}
        </div>

        <form className="form__div">
          <h1 className="h1__reportHomeForm">
            Report Animals In Your Surrounding
          </h1>
          <Container>
            <Row className="gx-5">
              <Col xs={12} sm={12} lg={6} xl={4}>
                <input
                  className="input__reportFormHome margin__reportForm"
                  type="text"
                  ref={firstNameReportref}
                  placeholder="first name"
                />
              </Col>
              <Col xs={12} sm={12} lg={6} xl={4}>
                <input
                  className="input__reportFormHome margin__reportForm"
                  type="text"
                  ref={lastNameReportref}
                  placeholder="Last name"
                />
              </Col>
              <Col xs={12} sm={12} lg={6} xl={4}>
                <input
                  className="input__reportFormHome margin__reportForm"
                  type="text"
                  ref={emailReportref}
                  placeholder="Email"
                />
              </Col>
            </Row>
            <Row className="gx-5">
              <Col xs={12} sm={12} lg={6} xl={4}>
                <input
                  className="input__reportFormHome margin__reportForm"
                  type="text"
                  ref={phoneReportref}
                  placeholder="phone#"
                />
              </Col>
              <Col xs={12} sm={12} lg={6} xl={4}>
                <input
                  className="input__reportFormHome margin__reportForm"
                  type="text"
                  ref={cityReportref}
                  placeholder="city"
                />
              </Col>
              {/* <Col xs={12} sm={12} lg={6} xl={4}>
                <input
                  className="input__reportFormHome margin__reportForm"
                  type="date"
                />
              </Col> */}
              <Col xs={12} sm={12} lg={6} xl={4}>
                <label className="ReportForm__labels margin__reportForm">
                  Select a file:
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  className="ReportForm__file"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </Col>
            </Row>
            <Row className="gx-5">
              <Col xs={12} sm={12} lg={4} xl={4}>
                <select
                  className=" input__reportFormHome ReportForm__select margin__reportForm"
                  ref={genderReportref}
                >
                  <option value="Gender">Gender</option>
                  <option value="Male">Male </option>
                  <option value="Female">Female</option>
                </select>
              </Col>
              <Col xs={12} sm={12} lg={6} xl={4}>
                <select
                  className="input__reportFormHome ReportForm__select margin__reportForm"
                  ref={typeReportref}
                >
                  <option value="Nothing">Type</option>
                  <option value="Dog">Dog </option>
                  <option value="Cat">Cat</option>
                </select>
              </Col>
              <Col xs={12} sm={12} lg={6} xl={4}>
                <select
                  ref={injuryReportref}
                  className=" input__reportFormHome ReportForm__select margin__reportForm"
                >
                  <option value="Injured">Injured</option>
                  <option value="Not Injured">Not Injured </option>
                  {/* <option value="13">Female</option>  */}
                </select>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} lg={12} xl={12}>
                <textarea
                  ref={addressReportref}
                  className="input__reportFormHome margin__reportForm textarea__reportForm"
                  placeholder="Address"
                  rows="4"
                  cols="50"
                ></textarea>
              </Col>
            </Row>
          </Container>
          <button
            onClick={reportFormHandler}
            className="button__reportForm"
            type="submit"
          >
            Report Animal
          </button>
        </form>
      </div>
      <IconHr />
      <hr className="hr__reportHome" />
    </>
  );
};
export default ReportHomeForm;
