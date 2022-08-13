import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Img from "../../../images/CampaignImages/campaignImage1.jpg";
import Img2 from "../../../images/CampaignImages/campaignHome2.jpg";

import "./HomeCampaign.css";
import IconHr from "../../UI/IconHr";
const HomeCampaign = () => {
  return (
    <>
      <h1 className="homeCampaign__h1">Events For Pets</h1>
      <Container className="homeCampaign__bgdiv">
        <Row>
          <h2 className="homeCampaign__h2first">Walk Your Dog Week</h2>
          <Col xl={6} lg={12} sm={12} xs={12}>
            <div>
              <img src={Img} className="homeCampaign__img" alt=""></img>
            </div>
          </Col>
          <Col xl={6} lg={12} sm={12} xs={12}>
            <div>
              <p className="homeCampaign__p homeCampaign__p1">
                Often, dogs run away from home because they're left alone and
                bored or kept sequestered all day long in a crate or a small
                yard, which only exacerbates a dog's destructive, aggressive or
                anxious tendencies. This, coupled with a lack of exercise and
                too much fatty food, leads to obesity, as well as medical issues
                like pancreatitis, diabetes, heart disease and the number one
                killer of dogs, cancer. October is a beautiful time of year
                everywhere to get outside. Walking your dog on a daily basis not
                only increases the endorphins in both human and canine brains
                but it improves the bond between dog parent and dog{" "}
              </p>
            </div>
          </Col>
        </Row>
        {/* another one */}
        <Row className="homeCampaign__row g-5">
          <h2 className="homeCampaign__h2second">
            Animal Safety and Protection Month
          </h2>
          <Col xl={6} lg={6} sm={12} xs={12}>
            <div>
              <p className="homeCampaign__p">
                National Animal Safety and Protection Month in October reminds
                us of the responsibility that come with domesticated animals and
                pets. Not only does National Animal Safety and Protection Month
                raise awareness, but it provides tips and tools to help us be
                more prepared in the event of an emergency or illness.
              </p>
              <br />
              <p className="homeCampaign__p">
                Whether the animals in our lives are part of the family or our
                livihood, we never expect an emergency. No matter what we do,
                accidents happen. Take steps to be prepared and be aware.{" "}
              </p>
            </div>
          </Col>
          <Col xl={6} lg={6} sm={12} xs={12}>
            <div>
              <img src={Img2} className="homeCampaign__img" alt=""></img>
            </div>
          </Col>
        </Row>
      </Container>
      <IconHr />
      <hr />
    </>
  );
};
export default HomeCampaign;
