import React from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
// import img from "../../../images/aboutus/cat3.jpg";
import { useRef } from "react";
import IconHr from "../../UI/IconHr";
import { useSelector } from "react-redux";
import CardPages from "../../UI/Cards/CardPages";
import "./PetsAdoption.css";
import { NotificationManager } from "react-notifications";
import axios from "axios";

const PetsAdoption = () => {
  const petId = useSelector((state) =>
    state.pet.petsData.map((x) => {
      return x.id;
    })
  );
  const [petid] = petId;
  //   const petName = useSelector((state) =>
  //     state.pet.petsData.map((x) => {
  //       return x.name;
  //     })
  //   );
  //   const [petname] = petName;
  const firstNameadoptref = useRef();
  const lastNameadoptref = useRef();
  const emailadoptref = useRef();
  const phoneadoptref = useRef();
  const ageadoptref = useRef();
  const genderadoptref = useRef();
  const zipcodeadoptref = useRef();
  const cityadoptref = useRef();
  const addressadoptref = useRef();
  const formatYmd = (date) => date.toISOString().slice(0, 10);

  const adoptFormHandler = (event) => {
    event.preventDefault();
    if (
      firstNameadoptref.current.value === "" ||
      lastNameadoptref.current.value === "" ||
      emailadoptref.current.value === "" ||
      phoneadoptref.current.value === "" ||
      ageadoptref.current.value === "" ||
      genderadoptref.current.value === "" ||
      zipcodeadoptref.current.value === "" ||
      cityadoptref.current.value === "" ||
      addressadoptref.current.value === ""
    ) {
      NotificationManager.error(
        "Please fill out all the fields. You might be missing some field.",
        "Error!",
        5000
      );
    } else {
      axios
        .post(
          "http://127.0.0.1:8000/api/adopt",
          {
            name:
              firstNameadoptref.current.value + lastNameadoptref.current.value,
            email: emailadoptref.current.value,
            phone: phoneadoptref.current.value,
            age: ageadoptref.current.value,
            gender: genderadoptref.current.value,
            zip_code: zipcodeadoptref.current.value,
            city: cityadoptref.current.value,
            address: addressadoptref.current.value,
            pet_Id: petid,
            date: formatYmd(new Date()),
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          // console.log(response);
          NotificationManager.success(
            "Your requestes submitted successfully.",
            "Successful!",
            5000
          );
        })
        .catch((response) => {
          console.log(response);
          NotificationManager.error(
            "Something going bad happen. Check that all fields are filled out.",
            "Error!",
            5000
          );
        });
    }
    // console.log("adopted pet data is =>", adoptForm);
  };
  return (
    <>
      <Header />
      <CardPages name="Adopt Pet" />
      <div className="PetsAdoption__maindiv">
        <div className="PetsAdoption__bgdiv">
          <h1 className="PetsAdoption__h1">ThankYou For Adopting Our Pet</h1>
          <p className="PetsAdoption__p">
            Please fill out the form below to proceed
          </p>
          <div className="PetsAdoption__flexdiv">
            <div className="PetsAdoption__leftflexdiv">
              {/* <img src={img}></img> */}
            </div>
            <div className="PetsAdoption__rightflexdiv">
              <form onSubmit={adoptFormHandler} className="PetsAdoption__form">
                <div className="PetsAdoption__namesinput">
                  <input
                    required
                    ref={firstNameadoptref}
                    type="text"
                    placeholder="FirstName"
                  ></input>
                  <input
                    required
                    ref={lastNameadoptref}
                    type="text"
                    placeholder="LastName"
                  ></input>
                </div>
                <div className="PetsAdoption__emailphone">
                  <input
                    required
                    ref={emailadoptref}
                    type="text"
                    placeholder="Email"
                  ></input>
                  <input
                    required
                    ref={phoneadoptref}
                    type="text"
                    placeholder="Phone"
                  ></input>
                </div>
                <div className="PetsAdoption__genderage">
                  <input
                    required
                    ref={ageadoptref}
                    type="text"
                    placeholder="Age"
                  ></input>
                  <select ref={genderadoptref}>
                    <option value="">Gender</option>
                    <option value="male">Male </option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="PetsAdoption__cityzip">
                  <input
                    required
                    ref={zipcodeadoptref}
                    type="text"
                    placeholder="Zipcode"
                  ></input>

                  <select ref={cityadoptref}>
                    <option value="noCity">City</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Rawalpindi">Rawalpini</option>
                    <option value="Islamabad">Islamabad</option>
                  </select>
                </div>
                <div className="PetsAdoption__address">
                  <input
                    required
                    ref={addressadoptref}
                    type="text"
                    placeholder="Address"
                  ></input>
                </div>
                <div className="PetsAdoption__btndiv">
                  <button type="submit" className="PetsAdoption__btn">
                    Adopt
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <IconHr orange />
      <hr />
      <Footer />
    </>
  );
};
export default PetsAdoption;
