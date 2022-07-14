import {Container,Row,Col} from "react-bootstrap"
import React from "react"
import img1 from "../../../images/aboutus/cat1.jpg";
import img2 from "../../../images/aboutus/dog2.jpg";
import img3 from "../../../images/aboutus/cat4.jpg";
import img4 from "../../../images/aboutus/dog3.jpg";
import img5 from "../../../images/aboutus/cat3.jpg";
import img6 from "../../../images/aboutus/dog4.jpg";
import { Link } from "react-router-dom";
import './ReportHome.css'

const ReportHome = ()=>{
    return (
        <>  
        <h1 className="report__homeh1">Reported Pets Gallery</h1>
        {/* <p className="reportHomep">Here are some of the pets reported by our beloved reporters</p> */}
        {/* phle form aee ga */}
        {/* <div className="background__div__homereports"> */}
        <Container  className="background__div__homereports">
  <Row className="g-4" >
    <Col sm={12} xs={12} xl={4} lg={4} ><img src={img1} alt="no loadeing"></img></Col>
    <Col sm={12} xs={12} xl={4} lg={4} ><img src={img2} alt="no loadeing"></img></Col>
    <Col sm={12} xs={12} xl={4} lg={4} ><img src={img3} alt="no loadeing"></img></Col>
  </Row>
  <Row className="g-4 bottom__row__report">
    <Col sm={12} xs={12} xl={4} lg={4} ><img src={img4} alt="no loadeing"></img></Col>
    <Col sm={12} xs={12} xl={4} lg={4} ><img src={img5} alt="no loadeing"></img></Col>
    <Col sm={12} xs={12} xl={4} lg={4} ><img src={img6} alt="no loadeing"></img></Col>
  </Row>
</Container>
        {/* </div> */}
        {/* us ky bad some of the injured pets we received ki gallery */}
        <p className="p__reportHome">Report Animals Nearby You</p>
        <div className="reportHome__buttondiv"> <Link to="./report">
          <button className="reportHome__button">
            Report here
          </button>
        </Link>
        <hr/>
        </div>
        </>


    )
}
export default ReportHome;