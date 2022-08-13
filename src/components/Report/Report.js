import React from "react";
import "./Report.css";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import { useState } from "react";
import img from "../../images/aboutus/cat1.jpg";
import ReportModal from "../UI/Modals/ReportModal";
import CardPages from "../UI/Cards/CardPages.js";
import ReportHomeForm from "../home/reports/ReportHomeForm";
const Report = () => {
  const [reportModal, setReportModal] = useState(false);
  const showReportModal = () => {
    setReportModal(true);
  };
  const hideReportModal = () => {
    setReportModal(false);
  };
  return (
    <>
      {reportModal && <ReportModal onClose={hideReportModal} />}
      <Header />
      <CardPages name="Report" />
      <div className="Report__maindiv">
        <div className="Report__bgdiv">
          <h1 className="Report__h1">
            We Are Thankful To You For Helping Us In Saving Another Life
          </h1>
          <div className="Report__flex">
            <div className="Report__firstflex">
              <div>
                <img src={img} alt=""></img>
              </div>
              <div className="Report__firstflex__right">
                <h2>What Will Happen If You report any pet to us</h2>
                <h5>We will:</h5>
                <p>1) Take Care</p>
                <p>2) Provide Necessary Treatment</p>
                <p>3) Feed Them</p>
                <p>4) Provide Them Shelter</p>
              </div>
            </div>
          </div>
        </div>
        <ReportHomeForm onOpen={showReportModal} />
      </div>
      <Footer />
    </>
  );
};
export default Report;
