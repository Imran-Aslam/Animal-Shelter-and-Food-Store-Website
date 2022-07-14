import React from "react"
import "./CardTestimonial.css"
import Img from "../../../images/download.png"
import {Container,Row,Col} from "react-bootstrap";
import UserImg from "../../../images/HomeImages/welcome.jpg"
import { propTypes } from "react-bootstrap/esm/Image";
const CardTestimonial = (props)=>{
    return(
        <>
        <div>
        {/* <h1 className="cardTestimonial__h1">Testimonials</h1> */}
            <Container className="cardTestimonial__bgdiv">
            <Row>
                    {/* second Column */}
                <Col  className="cardTestimonial__col2">
                {/* <img src={Img} className="cardTestimonial__img" alt="failed to loads"/> */}
                <div className="cardTestimonial__userimg__div"></div><img src={UserImg} alt="failed to load" className="cardTestimonial__userimg"/>
                <h4 className="cardTestimonial__name">{props.name}</h4>
                <p className="cardTestimonial__occupation">{props.occupation}</p>
                <p className="cardTestimonial__testimonial" >{props.text}</p>
                </Col>
            </Row>

            </Container>
        </div>
        
        </>
    )
}
export default CardTestimonial;